# ftouny.com

Personal portfolio of Jihad Ftouny. Static Astro site, no client framework,
styled after the Cyberpunk 2077 in-game UI: Rajdhani for the interface,
Orbitron for secondary text, one accent colour per page.

## Stack

- [Astro](https://astro.build) — every route pre-rendered, zero JS shipped
  except a scroll-reveal observer and the typewriter line on the hub.
- Self-hosted fonts via `@fontsource` — no third-party requests.
- Deployed as a Cloudflare Worker (`portfolio-ftouny`) on Custom Domains.
  A small `worker.js` runs first and 301s any non-apex hostname to
  ftouny.com; everything else is served straight from `dist/`.

## Structure

```
src/
├── components/        Section, ProjectCard, BackHome, Header, Footer, ...
├── content/writing/   one Markdown file per post; the file name is the slug
├── data/              all copy and project data as typed TS objects
├── layouts/           Base.astro — head, fonts, SEO, structured data
├── lib/               writing.ts — post listing, reading time, dates
├── pages/             index (hub), work, teaching, games, 404,
│                      writing/index (the list) and writing/[slug] (a post)
└── styles/            tokens.css (design tokens), global.css
content.config.ts      the writing collection's schema
```

Content lives in `src/data/`, not in the pages. To add a project or a talk,
edit the data file; the pages render whatever is there.

## Writing a post

1. Add `src/content/writing/<slug>.md`. The front matter is checked against
   `src/content.config.ts`: `title`, `description` (≤160 characters),
   `summary`, `eyebrow`, optional `ghost`, `accent` (the class the post
   belongs to: `writing`, `work`, `teaching` or `games`), `draft`, `date`,
   and an optional social `image`.
2. Put the post's images in `public/writing/<slug>/`, and give the post its
   own 1200×630 social card there. Figures are plain `<figure>` HTML in the
   Markdown; they break out of the text column to 56rem.
3. Keep `draft: true` while writing. Drafts show under `npm run dev` only;
   a production build leaves them out completely, with no page, no list
   entry and no sitemap line.
4. To publish, set `draft: false` and a `date`, build, deploy, and commit
   the post. The build refuses a published post without a date.

The repository is public, so an unpublished post and its images stay
uncommitted until the day they go live.

## Commands

| Command             | Action                                        |
| :------------------ | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Dev server at `localhost:4321`                |
| `npm run build`     | Production build to `./dist/`                 |
| `npx wrangler deploy` | Deploy `./dist/` live (build first)         |
| `npx astro dev`     | Also the only way to see draft posts          |

## History

This site replaced an Angular build in August 2026. The Angular app was
deleted from the repo on 2026-08-30 and exists only in git history. The
Worker name was kept so the Custom Domain never had to move.
