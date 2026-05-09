# Portfolio TODO — Items Only You Can Resolve

Things the redesign is waiting on from your side. Ordered by priority.

---

## 1. Required — broken/incorrect without these

### 1.1 Project images
Drop into `src/assets/images/projects/`. ~16:10 ratio, 1280×800 or larger.

- [x] `lia-assurex.png` — Leo marketing card *(received)*
- [x] `lia-internal.jpg` — LIA Assurex wordmark *(received)*
- [x] `sefactory-course.png` — SE Factory wordmark *(received — note: it's the logo on transparent bg, not a screenshot)*
- [x] `the-void.png` / `elvish-rootings.png` / `airstrike-defense.png` *(pulled from itch.io)*
- [ ] `storybook-ai.jpg` — Storybook AI platform screenshot or generated cover (still pending)
- [ ] `abz-flowers.jpg` — replace the original placeholder with a real screenshot of the e-shop

Optional polish: the LIA Internal and SE Factory cards both show brand wordmarks. If you ever get a tasteful, NDA-safe screenshot for either, drop it in to replace.

### 1.2 EmailJS credentials in `src/app/contact/contact.component.ts`
The `sendEmail()` call uses `'ftouny@outlook'` as the service ID, which doesn't match the EmailJS pattern (`service_xxxxxxx`). The contact form will fail silently in production until corrected.

- [ ] Replace service ID, template ID, and public key with the real values from your EmailJS dashboard.
- [ ] Submit a test message after deploying to confirm delivery.

(The visible footer email has already been updated to `jihad@ftouny.com`.)

---

## 2. Content gaps — placeholders that need real values

### 2.1 Merge Hero + About into one section
The Hero and About sections currently overlap heavily — same bio framing, similar tone, repeated talking points. The page reads cleaner as one unified opening: avatar + headline + role + 2-paragraph bio + stat tiles + skills, all in a single section above the projects grid.

- [ ] Decide the merge structure — simplest version is to put the About bio + stat tiles + skills grid *inside* the hero section (or directly under it within a single `<section id="hero">`), drop the separate `<section id="about">`, and remove the About link from the navbar (so navbar shrinks to: Home, Projects, Contact).

### 2.2 Update About bio with newly-added projects, AI-leaning
The current About lead still references the old framing ("LYONITE Smart Ring", "next generation of AI talent"). Now that the project list includes Storybook AI, LIA Assurex / Leo, LIA internal chatbots, GPTector, Smart Glasses, the SE Factory bootcamp, and the itch.io games, the bio should reflect that range — but **lead with AI work** since that's the main identity.

Suggested rewrite shape (drop in once you're happy with the framing):

> "I design and ship AI systems end-to-end — from LLM agents and RAG pipelines for live customer products to research tools and computer-vision prototypes. Currently building at Limitless, where I delivered Leo, the customer-facing AI assistant for LIA Assurex, plus internal chatbots that streamline insurance workflows. On the side I author AI curriculum (SE Factory, ZAKA, AUB) and ship indie games on itch.io."

- [ ] Pull what you like from the suggestion above (or rewrite from scratch) into `about.component.html` lines 9–15.
- [ ] Skew the proportion: ~80% AI / engineering, ~20% teaching + side projects (games, e-shop). Don't lead with games — it's a side identity, not the headline.

### 2.3 Reorder projects by impact
The current order in `src/app/projects/projects.data.ts` was set by me — it loosely puts the new flagship work first (Storybook AI, LIA Assurex, SE Factory). You're the right person to decide which projects represent you best. The grid renders in array order, so position 1 = top-left of the card grid.

- [ ] **AI** (currently: Storybook AI, LIA Assurex, LIA Internal, GPTector, Smart Glasses) — reorder so the most impactful ones lead. Cards in positions 1–3 are what most visitors see before scrolling.
- [ ] **Education** (currently: SE Factory, ZAKA, SEEDS, AUB Starter Kit, UAE AI Academy, AI Tools, Capstone, Clyntech, IMAGIC, Inception, VISA) — first 3–4 carry the most weight.
- [ ] **Games** (currently: The Void, Elvish Rootings, Airstrike Defense) — your call on order.
- [ ] **Web** — only ABZ Flowers right now; consider adding LYONITE Smart Ring.

Tip: the `featured: true` field on a project is a hook we can wire up later (e.g., a "Featured" filter or a star badge). Mark your top picks with `featured: true` now if you want highlight tagging.

### 2.4 ABZ Flowers — finish the entry
Lives in the new **Web** category. Tech tags are placeholders right now.

- [ ] **Tech stack** — replace `[TypeScript, Node.js, MongoDB, E-Commerce]` in `projects.data.ts` with what you actually built with (Express? Mongoose? Next.js? Stripe? Auth library?).
- [ ] **Link** — currently `#`. If the e-shop is live or has a demo, drop the URL in.
- [ ] **Screenshot** — see 1.1 above.
- [ ] *(Optional)* Add **LYONITE Smart Ring** to the Web category — your hero already mentions it as e-commerce work; adding it would balance the Web tab to 2+ items.

### 2.5 Project links currently set to `#`
- [ ] **Storybook AI** — add a demo URL or LinkedIn post if you'd like a public link
- [ ] **LIA Assurex** — add an LIA case-study URL or LinkedIn post if available
- [ ] **LIA Internal Chatbots** — likely stays `#` permanently due to NDA

### 2.6 Hero typewriter phrases
Cycles through 4 phrases in `src/app/hero/hero.component.ts` line 19. Currently:
```
"I'm an AI Engineer."
"I'm an AI Instructor."
"I build ML systems."
"I mentor AI talent."
```
- [ ] Adjust to match how you want to be perceived (e.g., add "I ship LLM agents." now that you have LIA Assurex). If you decide to merge Hero + About (item 2.1), revisit these together.

### 2.7 Stats in About section (`src/app/about/about.component.ts` line 19)
- [ ] Confirm "200+ Students Mentored", "5+ Programs Delivered" are accurate. Programs delivered should probably go up given SE Factory, ZAKA bootcamps, AUB, UAE AI Academy, IMAGIC, Inception, VISA — could realistically say "10+".

---

## 3. Optional polish — nice to have

### 3.1 Replace Capstone Mentorship's reused image
`Capstone Mentorship & Student Projects` currently reuses `zaka.jpg` as its thumbnail (same as ZAKA Certification). The duplicate is visible in the All tab.
- [ ] Add a dedicated image (`capstone.jpg`) and update the `image` field in `projects.data.ts`.

### 3.2 Populate `year` field on projects
The `Project` interface supports an optional `year` field that renders next to the project type in the eyebrow row, e.g. "Research Tool · 2024". Currently no project has it set.
- [ ] Add `year: 2024` (etc.) to each entry in `projects.data.ts` if you want years on the cards.

### 3.3 Open Graph / social share metadata
`src/index.html` has no `<meta>` description, no OG image, no Twitter card. When you share the link on LinkedIn or Twitter, it shows nothing meaningful.
- [ ] Add `<meta name="description" ...>` and `<meta property="og:image" ...>` etc. with a 1200×630 preview image. (Quick win — say the word and I'll wire it up.)

### 3.4 Production bundle size
`ng build --prod` warns the initial bundle exceeds 500 kB (~668 kB raw, ~138 kB gzipped). Pre-existing — driven mostly by Bootstrap CSS being imported globally.
- [ ] Optional: switch to selective Bootstrap SCSS imports to drop ~150 kB. Only worth it if you want to silence the warning; transfer size is already healthy.

### 3.5 Real 404 page
The router currently redirects unknown paths to `/`. A dedicated 404 component would be a nicer UX for stale `/blog` or `/case-studies` deep links.
- [ ] Optional: add a `NotFoundComponent` with a "Back to home" CTA and route `'**'` to it instead of redirecting.

### 3.6 Clean up unused skill icons
The old PNG icons in `src/assets/images/skills/` (chsarp, css, deeplearning, nlp, compvision, js, etc.) are no longer referenced. Safe to delete to slim the assets folder, but leaving them won't break anything.

---

## 4. Pre-launch sanity checklist

When you're ready to publish:

- [ ] `npm run build` succeeds with no new warnings
- [ ] `ng serve` and walk through every section: hero typewriter cycles, scroll reveal triggers once per element, projects tabs swap with a soft fade, every card has an image and either a working link or "Under NDA"/"Coming Soon" badge, contact form sends a real email
- [ ] Open DevTools → Lighthouse → run on `/`. Target: a11y ≥ 95.
- [ ] DevTools → Rendering → toggle `prefers-reduced-motion: reduce`. Confirm typewriter shows static text, parallax is disabled, reveals are instant, tab fade is instant.
- [ ] Test on a phone (or DevTools mobile emulation): navbar hamburger opens/closes, project grid drops to 1 column, no horizontal scroll.

---

*Last updated 2026-05-09. Delete sections as you complete them.*
