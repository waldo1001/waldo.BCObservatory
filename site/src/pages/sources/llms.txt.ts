// The pipeline writes content/sources/llms.txt; the site serves it as is.
import type { APIRoute } from "astro";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export const GET: APIRoute = () => {
  const p = resolve(process.cwd(), "..", "content", "sources", "llms.txt");
  return new Response(existsSync(p) ? readFileSync(p, "utf8") : "# BC Observatory: weekly sources\n\nNo source pages yet.\n", { headers: { "content-type": "text/plain; charset=utf-8" } });
};
