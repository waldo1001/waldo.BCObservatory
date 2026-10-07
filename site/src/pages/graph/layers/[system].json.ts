// data/graph/layers/<system>.json (D66): the layered view of one system, fetched only when the reader tilts it.
import type { APIRoute } from "astro";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const dir = () => resolve(process.cwd(), "..", "data", "graph", "layers");
export function getStaticPaths() {
  return existsSync(dir()) ? readdirSync(dir()).filter((f) => f.endsWith(".json")).map((f) => ({ params: { system: f.slice(0, -5) } })) : [];
}
export const GET: APIRoute = ({ params }) =>
  new Response(readFileSync(resolve(dir(), `${params.system}.json`), "utf8"), { headers: { "content-type": "application/json; charset=utf-8" } });
