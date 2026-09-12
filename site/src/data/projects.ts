import type { ImageMetadata } from "astro";

import smartGlassesImg from "../assets/projects/smart-glasses.jpg";
import theVoidImg from "../assets/projects/the-void.png";
/* The .png rather than the .jpg of the same shot: 1014x240 against 626x448,
   and already close to the card's crop, so far less of it is thrown away. */
import elvishImg from "../assets/projects/elvish-rootings.png";
import airstrikeImg from "../assets/projects/airstrike-defense.png";
import limitlessLogo from "../assets/logos/limitless.png";

export type Category = "ai" | "teaching" | "games" | "web";

export interface Project {
  id: string;
  title: string;
  category: Category;
  blurb: string;
  tech: string[];
  href?: string;
  hrefLabel?: string;
  year?: string;
  /* Set when the work cannot be linked, so the card explains itself
     rather than looking like an oversight. */
  note?: string;
  /* Imported rather than referenced by path so Astro can hash, resize and
     re-encode it, and so a missing file fails the build instead of the page. */
  image?: ImageMetadata;
  /* Real alt text. These images carry evidence, not decoration. */
  imageAlt?: string;
  /* Overrides the srcset sizes hint. Needed when `cover` cropping consumes
     far more source width than the displayed width suggests, which is how
     very wide images end up upscaled and blurry. */
  imageSizes?: string;
  /* A brand mark rather than a screenshot, so it gets a light plate instead
     of a full-bleed header. */
  logos?: { src: ImageMetadata; alt: string }[];
}

export const projects: Project[] = [
  {
    id: "limitless",
    title: "AI systems at Limitless Technologies",
    category: "ai",
    year: "2026",
    blurb:
      "My day job. I build AI systems at Limitless Technologies in Beirut, working in health and insurance technology. It is a domain where the data is confidential and a wrong answer has real consequences for someone's claim or policy. I know our systems end to end and mentor the rest of the team across our projects, including an intern I supervised who is now a part-time QA engineer reporting to me.",
    tech: ["Python", "LLMs", "AI Agents"],
    note: "Client work, so the systems themselves are not something I can show.",
    logos: [{ src: limitlessLogo, alt: "Limitless Technologies S.A.L." }],
  },
  {
    id: "magic-wonder",
    title: "Magic Wonder",
    category: "ai",
    year: "2026",
    blurb:
      "Turns a child's photo into a personalized picture book. Pick a story template, upload a photo, and it swaps the child's face into every illustrated page, lets you redo any page you are not happy with, then lays the story text over the art and exports a PDF. Built with a partner for a client who had been assembling these by hand.",
    tech: ["Python", "Flask", "React", "Computer vision", "Face swap", "Automation", "PDF generation"],
    note: "Client project, private repository.",
  },
  {
    id: "gptector",
    title: "GPTector",
    category: "ai",
    year: "2024",
    href: "https://gptector-flask.onrender.com/",
    hrefLabel: "Try it",
    blurb:
      "Spots AI-written text without needing a large model to do it. Most detectors are themselves big models, which is a lot of machinery for what is really a yes or no question. This one runs on an ordinary CPU, answers instantly, and handles short text, which is where most detectors fall apart. Built in support of SUPSI research.",
    tech: ["Python", "scikit-learn", "Word2Vec", "Flask"],
    /* The logo is deliberately not used here. It is near-black on near-black,
       so it renders as an empty panel, and a logo evidences nothing anyway.
       Cards carry images only where the image shows the work. */
  },
  {
    id: "smart-glasses",
    title: "Smart glasses prototype",
    category: "ai",
    year: "2023",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7090393604661071872/",
    hrefLabel: "See the post",
    blurb:
      "Glasses that describe what is in front of someone who cannot see it, calling out obstacles and landmarks as you walk. I led the team, and it won the AUB hackathon.",
    tech: ["Python", "YOLO", "Computer vision"],
    image: smartGlassesImg,
    imageAlt:
      "Winning teams on stage at AUB's Tech for Accessibility hackathon holding oversized prize cheques",
  },
  {
    id: "the-void",
    title: "The Void",
    category: "games",
    /* 2026: the project is the rebuild. The original is context inside it. */
    year: "2026",
    href: "https://github.com/jihadftouny/The-Void",
    hrefLabel: "Source",
    blurb:
      "A text RPG in Java with dice-based combat, character stats and a rarity system for equipment. The 2023 original was 121 commits written entirely by hand, before AI assistants, and it taught me more about programming than anything else I have done. I am rebuilding it now so a model on your own machine narrates the story as you play, while the engine owns every rule and number.",
    /* The rebuild's stack, matching the public repo the Source link opens.
       Kaplay is a declared dependency but not imported until v2.0, so it is
       deliberately not tagged. Changed from Java · Maven · LLMs on 2026-09-12. */
    tech: ["TypeScript", "Electron", "Local LLM", "node-llama-cpp", "Vitest"],
    image: theVoidImg,
    imageAlt: "Six character portraits from The Void, hooded cyberpunk figures in neon-lit streets",
    /* 6:1 strip. Covering a 10.5rem band consumes ~64rem of source width,
       so the hint must ask for it or the browser picks a small variant and
       upscales it 2.6x. Measured, not guessed. */
    imageSizes: "64rem",
  },
  {
    id: "elvish-rootings",
    title: "Elvish Rootings",
    category: "games",
    year: "2023",
    /* Canonical creator account. The jihanger URL resolves to this same page. */
    href: "https://bramevet.itch.io/elvish-rootings",
    hrefLabel: "Play",
    blurb:
      "Built in 48 hours for the Global Game Jam 2023. You play Elidar, the village Elder, on a multi-stage quest to gather Evergreen Vine roots and Eldertree Sprouts and brew the Mystical Brew before the village runs out of time. Retro top-down, arcade pacing, and a scope we deliberately kept small enough to actually finish, which is the real lesson of a game jam.",
    tech: ["RPG Maker", "Top-down", "Game design", "Game jam"],
    image: elvishImg,
    imageAlt: "Elvish Rootings gameplay: a character on a forest path in a top-down pixel-art world",
  },
  {
    id: "airstrike-defense",
    title: "Airstrike Defense",
    category: "games",
    year: "2022",
    href: "https://bramevet.itch.io/",
    hrefLabel: "itch.io",
    blurb:
      "A 2D side-scrolling defence game. Aim a cannon, shoot bombs out of the sky, and survive. Built around precision and fast reflexes.",
    tech: ["Game design"],
    image: airstrikeImg,
    imageAlt:
      "Airstrike Defense gameplay: a silhouetted city skyline at dusk with planes overhead and a score readout",
  },
];



