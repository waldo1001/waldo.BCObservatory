// data/graph/summary.json (the galaxy: systems and hub nodes with a baked layout), served as is.
import type { APIRoute } from "astro";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export const GET: APIRoute = () => {
  const p = resolve(process.cwd(), "..", "data", "graph", "summary.json");
  return new Response(existsSync(p) ? readFileSync(p, "utf8") : JSON.stringify({ version: 1, systems: [], nodes: [], edges: [] }), { headers: { "content-type": "application/json; charset=utf-8" } });
};
