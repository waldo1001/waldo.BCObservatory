// data/index/*.json (the MCP server's search index and the docs-objects join), served as is.
import type { APIRoute } from "astro";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const dir = () => resolve(process.cwd(), "..", "data", "index");
export function getStaticPaths() {
  return existsSync(dir()) ? readdirSync(dir()).filter((f) => f.endsWith(".json")).map((f) => ({ params: { file: f } })) : [];
}
export const GET: APIRoute = ({ params }) =>
  new Response(readFileSync(resolve(dir(), String(params.file)), "utf8"), { headers: { "content-type": "application/json; charset=utf-8" } });
