// The neighbour files (D66 phase 3): per major and galaxy system, every object's rings, top 7, events, Learn pages and
// media, built from data/code/relations/<major>.json at build time. The neighbourhood explorer reads them.
import type { APIRoute } from "astro";
import { neighbourFiles, relationMajors } from "../../../../lib/relations";

export function getStaticPaths() {
  return relationMajors().flatMap((major) => [...neighbourFiles(major).keys()].map((system) => ({ params: { major, system } })));
}

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(neighbourFiles(String(params.major)).get(String(params.system)) ?? {}), { headers: { "content-type": "application/json; charset=utf-8" } });
