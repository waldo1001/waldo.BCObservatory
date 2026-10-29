// The pipeline writes content/guidelines/llms.txt (D126); the site serves it as is.
import type { APIRoute } from "astro";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { llmsTitle } from "../../../../pipeline/lib/sections";

export const GET: APIRoute = () => {
  const p = resolve(process.cwd(), "..", "content", "guidelines", "llms.txt");
  return new Response(existsSync(p) ? readFileSync(p, "utf8") : `${llmsTitle("guidelines")}\n\nNo rule pages yet.\n`, { headers: { "content-type": "text/plain; charset=utf-8" } });
};
