// The pipeline writes content/apps/llms.txt (D65); the site serves it as is.
import type { APIRoute } from "astro";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export const GET: APIRoute = () => {
  const p = resolve(process.cwd(), "..", "content", "apps", "llms.txt");
  return new Response(existsSync(p) ? readFileSync(p, "utf8") : "# BC Observatory: first-party apps\n\nNo app pages yet.\n", { headers: { "content-type": "text/plain; charset=utf-8" } });
};
