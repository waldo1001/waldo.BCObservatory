// Markdown twin of every feature page: the exact file the pipeline generated, frontmatter included.
import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export async function getStaticPaths() {
  return (await getCollection("features")).map((entry: CollectionEntry<"features">) => ({ params: { id: entry.id } }));
}
export const GET: APIRoute = ({ params }) =>
  new Response(readFileSync(resolve(process.cwd(), "..", "content", "features", `${params.id}.md`), "utf8"), { headers: { "content-type": "text/markdown; charset=utf-8" } });
