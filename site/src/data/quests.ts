/*
  Quest log and achievements: RPG framing over verifiable facts, per the
  experiment brief. Nothing here may appear unless it is true and already
  consistent with site-copy/GUARDRAILS.md. Flavour is in the framing only.
*/

export interface Quest {
  name: string;
  status: "active";
  body: string;
  href?: string;
  hrefLabel?: string;
}

export const quests: Quest[] = [
  {
    name: "Working at Limitless Technologies",
    status: "active",
    body: "The day job, ongoing: production AI systems for health and insurance, built and shipped from Beirut.",
    href: "/work/",
    hrefLabel: "The day job",
  },
  {
    name: "Rebuild The Void",
    status: "active",
    body: "A full rebuild of the 2023 original, content, design and everything: a model generates the enemies, the lore and the story as you play. The first version was 121 commits written entirely by hand.",
    href: "https://github.com/jihadftouny/The-Void",
    hrefLabel: "Watch the repo",
  },
];

export interface Achievement {
  title: string;
  badge: string;
  body: string;
}

/* Reverse chronological, like everything else on the site. */
export const achievements: Achievement[] = [
  {
    title: "7,000+ in one year",
    badge: "2025",
    body: "People reached in one year by courses I wrote at ZAKA.",
  },
  {
    title: "First in MENA",
    /* 2025, confirmed by Jihad on 2026-08-25. */
    badge: "2025",
    body: "Wrote the K-12 content for SEEDS, the MENA region's first school AI curriculum.",
  },
  {
    title: "Hackathon champion",
    badge: "2023",
    body: "Led the smart glasses team to the win at AUB's Tech for Accessibility hackathon.",
  },
  {
    title: "Shipped in 48 hours",
    badge: "2023",
    body: "Elvish Rootings, built and finished inside the Global Game Jam window.",
  },
];

