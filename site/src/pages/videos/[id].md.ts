// Markdown twin of every video page: the exact file the pipeline generated, frontmatter included.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export async function getStaticPaths() {
  return (await getCollection("videos")).map((entry) => ({ params: { id: entry.id } }));
}
export const GET: APIRoute = ({ params }) =>
  new Response(readFileSync(resolve(process.cwd(), "..", "content", "videos", `${params.id}.md`), "utf8"), { headers: { "content-type": "text/markdown; charset=utf-8" } });
