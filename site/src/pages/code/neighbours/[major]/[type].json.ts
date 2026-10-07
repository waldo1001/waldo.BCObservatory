// The 2-hop shards (D59): per major and object type, each object's heaviest neighbours, built from
// data/code/relations/<major>.json at build time. The object page's "2 hops" toggle fetches the few it needs.
import type { APIRoute } from "astro";
import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { neighbourShard, shardTypes } from "../../../../lib/relations";

export function getStaticPaths() {
  const dir = resolve(process.cwd(), "..", "data", "code", "relations");
  const majors = existsSync(dir) ? readdirSync(dir).filter((f) => /^\d+\.json$/.test(f)).map((f) => f.slice(0, -5)) : [];
  return majors.flatMap((major) => shardTypes(major).map((type) => ({ params: { major, type } })));
}

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(neighbourShard(String(params.major), String(params.type))), { headers: { "content-type": "application/json; charset=utf-8" } });
