// data/graph/flights.json (D114): per source, its dated videos and posts with the stars they link to, for the comet the
// galaxy flies under a source lens. Loaded only when a source lens is on; an empty object before the first nightly.
import type { APIRoute } from "astro";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export const GET: APIRoute = () => {
  const p = resolve(process.cwd(), "..", "data", "graph", "flights.json");
  return new Response(existsSync(p) ? readFileSync(p, "utf8") : "{}", { headers: { "content-type": "application/json; charset=utf-8" } });
};
