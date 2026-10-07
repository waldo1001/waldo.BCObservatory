// data/graph/landed.json (D66): the videos and posts of the week up to the run date, for the galaxy's "this week" lens.
import type { APIRoute } from "astro";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export const GET: APIRoute = () => {
  const p = resolve(process.cwd(), "..", "data", "graph", "landed.json");
  return new Response(existsSync(p) ? readFileSync(p, "utf8") : JSON.stringify({ anchor: null, days: 7, items: [] }), { headers: { "content-type": "application/json; charset=utf-8" } });
};
