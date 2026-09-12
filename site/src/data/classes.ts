import type { ImageMetadata } from "astro";

import engineerImg from "../assets/classes/ai-engineer.jpg";
import instructorImg from "../assets/classes/ai-instructor.jpg";
import gamedevImg from "../assets/classes/game-developer.jpg";

/*
  The three classes on the hub. Always visible on the home page, each panel
  routes to the page that carries its accent colour, so picking a class and
  arriving somewhere that matches is the whole trick: no theming machinery.
*/
export interface ClassOption {
  id: string;
  /* Short terminal-style tag shown in the panel corner: ENG, INS, DEV. */
  code: string;
  label: string;
  tagline: string;
  /* The panel's real-world description: what this class actually does,
     grounded in the same facts as the destination page. */
  desc: string;
  cta: string;
  href: string;
  /* The class accent, matching the destination page's identity. */
  accent: string;
  portrait: ImageMetadata;
  portraitAlt: string;
}

export const classes: ClassOption[] = [
  {
    id: "engineer",
    code: "ENG",
    label: "AI Engineer",
    tagline: "Ships production AI systems",
    desc: "My day job and my own builds. Production AI at Limitless Technologies in health and insurance, plus a detector that spots AI-written text without a large model, and a picture-book platform built with a partner.",
    cta: "Enter Work",
    href: "/work/",
    accent: "#30e6ff",
    portrait: engineerImg,
    portraitAlt: "Jihad Ftouny as the AI Engineer class, in cyan light",
  },
  {
    id: "instructor",
    code: "INS",
    label: "AI Instructor",
    tagline: "Writes and teaches AI courses",
    desc: "AI courses for AUB, with Microsoft, at G42, ZAKA and SE Factory. Some I teach myself; some are taught by other instructors from notes I write for them. More than 7,000 people reached in 2025.",
    cta: "Enter Teaching",
    href: "/teaching/",
    accent: "#cf5cff",
    portrait: instructorImg,
    portraitAlt: "Jihad Ftouny as the AI Instructor class, in violet light",
  },
  {
    id: "gamedev",
    code: "DEV",
    label: "Game Developer",
    tagline: "Where it all started",
    desc: "Two shipped games, a text RPG that taught me more about programming than anything else, and a rebuild in progress where a local model narrates the story as you play.",
    cta: "Enter Games",
    href: "/games/",
    accent: "#ff8a3d",
    portrait: gamedevImg,
    portraitAlt: "Jihad Ftouny as the Game Developer class, in amber light",
  },
];




