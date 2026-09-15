import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/*
  Posts for /writing/, one Markdown file each in src/content/writing/. The
  file name is the URL slug.

  A post with `draft: true` renders under `astro dev` only. Production builds
  skip it entirely (no page, no index entry, no sitemap line), so an
  unfinished post can sit in the tree without going live. A published post
  must carry a date; the schema refuses to build one without it.
*/
const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z
    .object({
      title: z.string(),
      /* Meta description. Search engines truncate past ~155 characters. */
      description: z.string().max(160),
      /* One line for the /writing/ index. */
      summary: z.string(),
      /* The small caps line above the title, e.g. "Devlog #1 · The Void". */
      eyebrow: z.string(),
      /* The huge faint keyword behind the heading, as on every section. */
      ghost: z.string().optional(),
      /* The class the post belongs to. It takes that page's accent from
         tokens.css, so a devlog burns combat orange like /games/. */
      accent: z.enum(["writing", "work", "teaching", "games"]).default("writing"),
      date: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      /* Social card, a path under public/. Falls back to the site-wide card. */
      image: z
        .object({
          src: z.string(),
          width: z.number(),
          height: z.number(),
          alt: z.string(),
        })
        .optional(),
    })
    .refine((post) => post.draft || post.date, {
      message: "A published post needs a date.",
      path: ["date"],
    }),
});

export const collections = { writing };
