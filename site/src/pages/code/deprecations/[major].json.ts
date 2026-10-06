// data/code/deprecations/<major>.json (the deprecation radar's data), served as is for agents.
import type { APIRoute } from "astro";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const dir = () => resolve(process.cwd(), "..", "data", "code", "deprecations");
export function getStaticPaths() {
  return existsSync(dir()) ? readdirSync(dir()).filter((f) => f.endsWith(".json")).map((f) => ({ params: { major: f.slice(0, -5) } })) : [];
}
export const GET: APIRoute = ({ params }) =>
  new Response(readFileSync(resolve(dir(), `${params.major}.json`), "utf8"), { headers: { "content-type": "application/json; charset=utf-8" } });
