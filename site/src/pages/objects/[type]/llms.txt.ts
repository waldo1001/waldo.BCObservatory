// Per-type object index (content/objects/<type>/llms.txt), served as is.
import type { APIRoute } from "astro";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = () => resolve(process.cwd(), "..", "content", "objects");
export function getStaticPaths() {
  return existsSync(root()) ? readdirSync(root()).filter((t) => existsSync(resolve(root(), t, "llms.txt"))).map((type) => ({ params: { type } })) : [];
}
export const GET: APIRoute = ({ params }) =>
  new Response(readFileSync(resolve(root(), String(params.type), "llms.txt"), "utf8"), { headers: { "content-type": "text/plain; charset=utf-8" } });
