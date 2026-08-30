# portfolio.ftouny.com

Personal portfolio of Jihad Ftouny. Static Astro site, no client framework,
styled after the Cyberpunk 2077 in-game UI: Rajdhani for the interface,
Orbitron for secondary text, one accent colour per page.

## Stack

- [Astro](https://astro.build) — every route pre-rendered, zero JS shipped
  except a scroll-reveal observer and the typewriter line on the hub.
- Self-hosted fonts via `@fontsource` — no third-party requests.
- Deployed as an assets-only Cloudflare Worker (`portfolio-ftouny`), served
  on a Custom Domain. No Worker script: Cloudflare serves `dist/` directly.

## Structure

```
src/
├── components/   Section, ProjectCard, BackHome, Header, Footer, ...
├── data/         all copy and project data as typed TS objects
├── layouts/      Base.astro — head, fonts, SEO, structured data
├── pages/        index (hub), work, teaching, games, writing, 404
└── styles/       tokens.css (design tokens), global.css
```

Content lives in `src/data/`, not in the pages. To add a project or a talk,
edit the data file; the pages render whatever is there.

## Commands

| Command             | Action                                        |
| :------------------ | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Dev server at `localhost:4321`                |
| `npm run build`     | Production build to `./dist/`                 |
| `npx wrangler deploy` | Deploy `./dist/` live (build first)         |

## History

This site replaced an Angular build in August 2026. The Angular app was
deleted from the repo on 2026-08-30 and exists only in git history. The
Worker name was kept so the Custom Domain never had to move.
