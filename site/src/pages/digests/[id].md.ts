// Markdown twin of every digest.
import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export async function getStaticPaths() {
  return (await getCollection("digests")).map((entry: CollectionEntry<"digests">) => ({ params: { id: entry.id } }));
}
export const GET: APIRoute = ({ params }) =>
  new Response(readFileSync(resolve(process.cwd(), "..", "content", "digests", `${params.id}.md`), "utf8"), { headers: { "content-type": "text/markdown; charset=utf-8" } });
