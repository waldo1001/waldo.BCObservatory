// The pipeline writes content/hotfixes/llms.txt (D106); the site serves it as is.
import type { APIRoute } from "astro";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { llmsTitle } from "../../../../pipeline/lib/sections";

export const GET: APIRoute = () => {
  const p = resolve(process.cwd(), "..", "content", "hotfixes", "llms.txt");
  return new Response(existsSync(p) ? readFileSync(p, "utf8") : `${llmsTitle("hotfixes")}\n\nNo hotfix pages yet.\n`, { headers: { "content-type": "text/plain; charset=utf-8" } });
};
