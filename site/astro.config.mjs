// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ftouny.com",
  integrations: [sitemap()],
  build: {
    // One stylesheet rather than a request per component.
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  prefetch: {
    // Prefetch on hover, so navigation feels instant without preloading the
    // whole site for people who never click.
    prefetchAll: true,
    defaultStrategy: "hover",
  },
});
