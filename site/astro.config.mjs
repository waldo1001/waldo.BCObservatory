// Static site for GitHub Pages. Reads ../content and ../data at build time; never calls an LLM.
import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_ORIGIN ?? "https://waldo1001.github.io",
  base: process.env.SITE_BASE ?? "/waldo.BCObservatory",
  trailingSlash: "always",
  // one shared stylesheet instead of the same 4 KB of component CSS inlined into each of 20k+ pages (D53)
  build: { format: "directory", inlineStylesheets: "never" },
  // scripts too: Astro inlines a bundled script under vite's assetsInlineLimit, and two of them (the locator and the
  // 2-hop toggle, ~3.4 KB each) were repeated on every one of 20k+ object pages (D59)
  vite: { build: { assetsInlineLimit: 0 } },
});
