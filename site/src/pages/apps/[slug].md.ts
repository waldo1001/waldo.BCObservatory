// Markdown twin of every app page (D65): the exact file the pipeline generated, frontmatter included.
import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export async function getStaticPaths() {
  return (await getCollection("apps")).map((entry: CollectionEntry<"apps">) => ({ params: { slug: entry.id } }));
}
export const GET: APIRoute = ({ params }) =>
  new Response(readFileSync(resolve(process.cwd(), "..", "content", "apps", `${params.slug}.md`), "utf8"), { headers: { "content-type": "text/markdown; charset=utf-8" } });
