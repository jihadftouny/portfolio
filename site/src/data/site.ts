/*
  Single source of truth for site-wide copy and identity.
  Anything that appears on more than one page lives here, so the two
  cannot drift apart the way the old no-JS fallback did.
*/

export const site = {
  name: "Jihad Ftouny",
  role: "AI & Software Engineer",
  employer: "Limitless Technologies",
  url: "https://portfolio.ftouny.com",
  email: "jihad@ftouny.com",
  location: "Beirut, Lebanon",

  tagline:
    "AI & Software Engineer @ Limitless Technologies · I build AI systems and write the courses that teach them (AUB · Microsoft · G42) · and I make games",

  description:
    "AI & Software Engineer at Limitless Technologies. I build AI systems for health and insurance, and write the AI courses taught at AUB, Microsoft and G42.",

  social: {
    github: "https://github.com/jihadftouny",
    linkedin: "https://www.linkedin.com/in/jihad-ftouny",
    itch: "https://bramevet.itch.io/",
    youtube: "https://youtube.com/channel/UCumonbKsjCMF-BI8EXhIRcQ",
    huggingface: "https://huggingface.co/jihadftouny",
    x: "https://x.com/JihadFtouny",
  },

  nav: [
    { href: "/", label: "Home" },
    { href: "/work/", label: "Work" },
    { href: "/teaching/", label: "Teaching" },
    { href: "/games/", label: "Games" },
    { href: "/writing/", label: "Writing" },
  ],

  /*
    The achievement sheet on the hub: one row per class, curated by Jihad on
    2026-08-25. The engineer row deliberately carries no number, because the
    honest engineering numbers live in private employer repositories. Every
    value is his own work, not a programme's.
  */
  sheet: [
    { label: "Production AI systems, shipped weekly" },
    { label: "Students trained through courses I wrote", value: "7,000+" },
    { label: "Students taught and mentored directly", value: "400+" },
    { label: "Games shipped", value: "2" },
  ],

  /*
    The teaching page's stat band keeps its own numbers: the sheet above is
    hub-curated, this one is teaching-specific. Cohorts = 1 bootcamp + 4
    certification + 3 toolkit, all individually confirmed.
  */
  teachingStats: [
    { value: "7,000+", label: "Students trained through courses I wrote" },
    { value: "400+", label: "Students taught and mentored directly" },
    { value: "8", label: "Cohorts taught at ZAKA" },
  ],
} as const;

/* Typewriter phrases on the home hero. */
export const phrases = [
  "I build AI systems.",
  "I write the courses that teach them.",
  "I make games.",
  "I mentor people starting out.",
] as const;



