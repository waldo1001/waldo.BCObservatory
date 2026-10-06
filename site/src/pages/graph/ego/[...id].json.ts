// data/graph/ego/<node id>.json: one-hop neighbourhoods of the galaxy's nodes.
import type { APIRoute } from "astro";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { relative, resolve } from "node:path";

const dir = () => resolve(process.cwd(), "..", "data", "graph", "ego");
function walk(d: string, out: string[] = []): string[] {
  for (const n of readdirSync(d)) { const p = resolve(d, n); if (statSync(p).isDirectory()) walk(p, out); else if (n.endsWith(".json")) out.push(p); }
  return out;
}
export function getStaticPaths() {
  return existsSync(dir()) ? walk(dir()).map((p) => ({ params: { id: relative(dir(), p).replace(/\.json$/, "") } })) : [];
}
export const GET: APIRoute = ({ params }) =>
  new Response(readFileSync(resolve(dir(), `${params.id}.json`), "utf8"), { headers: { "content-type": "application/json; charset=utf-8" } });
