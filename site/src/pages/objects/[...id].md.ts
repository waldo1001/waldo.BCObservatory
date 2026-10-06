// Markdown twin of every object page: the exact file the pipeline generated.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export async function getStaticPaths() {
  return (await getCollection("objects")).map((entry) => ({ params: { id: entry.id } }));
}
export const GET: APIRoute = ({ params }) =>
  new Response(readFileSync(resolve(process.cwd(), "..", "content", "objects", `${params.id}.md`), "utf8"), { headers: { "content-type": "text/markdown; charset=utf-8" } });
