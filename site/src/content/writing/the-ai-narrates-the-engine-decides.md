---
title: "The AI narrates. The engine decides."
description: "The Void is a roguelike RPG narrated by a language model on your own machine. It tells the story; a deterministic engine decides everything that happens."
summary: "How The Void keeps a local language model out of the dice, and the one place it gets a vote."
eyebrow: "Devlog #1 · The Void"
ghost: "Devlog"
accent: games
draft: false
date: 2026-09-15
image:
  src: /writing/the-ai-narrates-the-engine-decides/og.png
  width: 1200
  height: 630
  alt: "The AI narrates. The engine decides. Devlog #1 of The Void, by Jihad Ftouny."
---

Here is a thing that happens when you put a language model in charge of a game. You attack. The story says you hit. The story says the enemy is dead. Next turn, the enemy is somehow still standing, and the story has moved on as if nothing is wrong. Nothing crashed.

That failure is the one I was most afraid of when I started reworking The Void. This post is about the rule that prevents it, and the one place I'm deliberately bending it.

The Void is a roguelike RPG. You make a character and descend through five floors, fighting, resting, taking deals and getting stronger, until a final boss and one of two endings, decided by how you played. Under the hood is a deterministic D&D-style rules engine: dice, attributes, status conditions, skills, loot rarity, experience. On top of that sits a small language model, running on your own machine, that tells the story of what just happened.

The rule is this: The AI narrates. The engine decides. The model never invents a number and never changes the game.

## Why can't the model touch the numbers?

Because a narrator who can also change the rules is a narrator you can't trust. It can cheat in your favour, cheat against you, contradict itself, or quietly break a run, and none of it looks like a bug. It looks like fudged dice. And once players suspect the dice, nothing in the game means anything.

So the engine owns the truth and the model only describes it. One turn, start to finish:

You pick an action from the list the engine says is legal right now. The engine resolves it and hands back three things: the new state, a list of events, and the next list of legal actions. The events are the little facts. "The player hit for 4." "A rat appeared." A layer I call the narrator takes those facts and writes an instruction for the model, roughly "here is what just happened, describe it in a few sentences". It never lets the model see the raw numbers, let alone invent new ones. The AI model streams its prose onto the screen a token at a time (a token is a fragment of a word), and under the prose sit the engine's next actions. You pick one. Round and round.

<figure>
  <a href="/writing/the-ai-narrates-the-engine-decides/one-turn-loop.svg">
  <img
    src="/writing/the-ai-narrates-the-engine-decides/one-turn-loop.svg"
    alt="A loop with five stages. You choose one of the engine's legal actions. The engine resolves it and returns a new state, a list of events, and the next legal actions. The narrator turns the events into an instruction for the model, with no numbers. The local model streams the story text. The screen shows the prose and the engine's actions, and the loop returns to you. A second arrow runs straight from the engine to the screen, showing that the actions come from the engine, not the model. Two dashed notes: if the model fails, the screen shows the plain facts instead; on a boss turn, the engine lists the legal moves, the model picks one, the pick is recorded as an input, and a fixed policy takes over if the model fails."
    width="1600"
    height="1444"
    loading="lazy"
    decoding="async"
  />
  </a>
  <figcaption>One turn of The Void. The engine decides; the model only describes.</figcaption>
</figure>

Notice what the model is not doing in that loop. It isn't writing the choices; the engine does that. It isn't rolling anything. It writes prose and nothing else, and anything it produces that does feed back into the game is pinned to a schema (a fixed shape it has to fit), so it physically cannot come back malformed.

Two more rules fall out of the first one. A run is reproducible from its seed and its inputs alone. The seed is the starting number for the random generator; every random decision passes through it and there's no other randomness in the rules, so the tests can assert exact outcomes instead of ranges. And the game's state is plain data. Nothing in it that can't be written out as JSON (a plain text format) and read straight back in, which is why saving works and why I can read a save file.

And if the model fails? The game doesn't care. It shows you the plain facts instead of prose, and you keep playing.

## So where does the model get a vote?

Bosses. It's the exception I'm building next, and the most interesting engineering in the game.

Bosses are designed as AI agents. During a boss fight the engine works out the boss's legal moves and the model picks one. That's the whole trick: it can choose, but it can never invent. The pick gets recorded as an input, the same way your actions are, so the run is still reproducible from its seed plus its inputs. The input stream just has a second author now. If the model returns something that isn't on the list, times out, or isn't running at all, the engine falls back to a fixed policy; a boss fight has to be fully playable with no model at all. The tests and the balance simulation never call a real model; they use a fake.

There's a cost, and I'd rather say it now: one model call per boss turn, so boss fights will be slower than ordinary ones. A boss should feel different anyway; whether it's the good kind of different is for play-testing to decide.

## Why on earth is it running on the player's machine?

The model is Qwen3-4B-Instruct-2507, about 2.5 GB, Apache-2.0 licensed, running inside the desktop app through node-llama-cpp. It isn't bundled; the game downloads it once, on first run, which keeps the installer small and lets me swap in a better model without shipping a new build. After that the game is offline for good. No account, no API key, no cost per turn, and nothing you type or do ever leaves your machine.

I wanted the game local and offline so it wouldn't carry extra costs like hosting or API calls. A free game can't have a running bill attached to it, whether that's a server or a per-call charge to a model provider, and a narrated game makes a model call on nearly every turn. So the inference happens on the player's own hardware, and that is what makes a free, model-narrated game possible at all.

## What does that cost?

A GPU. (The graphics card, which happens to be very good at running language models.)

The numbers, from my dev laptop (an RTX 5060): With the GPU, the 4B model produces 88 to 94 tokens a second and the first word shows up in 0.2 to 0.6 seconds. On the CPU alone, the same model manages 7.6 to 7.8 tokens a second and takes about 5 seconds to say anything. The minimum specs are yet to be defined.

I tested a smaller 1.7B model as a fallback for weaker machines and decided against it: the game ships the 4B only and requires a GPU.

## How is it being built?

Every code change goes through a pipeline of three agents, each in its own git worktree (a separate copy of the code). A plan agent designs the change and never writes code. A build agent implements it. A test agent runs the type checks, the build and the tests, checks the plan's acceptance criteria, and says PASS or FAIL. It only reports; it never fixes anything. A failure gets at most two fix rounds and one re-plan, and if it still fails, the unit is marked failed rather than patched by hand. I review, merge and ship every change myself, every run is logged, and a retro agent proposes pipeline improvements that I accept or reject.

My part is the game. I design it, I direct the work, and I write its prose instructions, which no agent can do efficiently, or at least in my tone. The source is public to read, all rights reserved: <a href="https://github.com/jihadftouny/The-Void" target="_blank" rel="noopener">github.com/jihadftouny/The-Void</a>.

## Where is it?

In development. The engine, combat, items, skills, saves and the narration pipeline are built and tested; the boss agents, the visual layer and the authored prose are not.

I need playtesters, and you'll need a GPU. If you've got one and you want to try a run, <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjXGR07XEZpm14FjSjyannpofVDBgqnsG0BR26dGR-_qgnbA/viewform" target="_blank" rel="noopener">sign up here</a>. The form asks for your email, your GPU model and your operating system, and nothing else; the data is used for this playtest and then deleted. And if you've put a model next to a rules engine yourself, I'd like to hear where you drew the line.
