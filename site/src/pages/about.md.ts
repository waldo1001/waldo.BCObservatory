// Markdown twin of /about/ (D83): the same hand-written text and counts, the graphics in words, the cards as a list.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { latestRun } from "../lib/state";
import { REPO, aboutMarkdown, personas, type AboutCounts } from "../lib/about";

export const GET: APIRoute = async () => {
  const names = ["topics", "objects", "apps", "localizations", "features", "videos", "posts", "changes", "digests", "sources"] as const;
  const counts = Object.fromEntries(await Promise.all(names.map(async (c) => [c, (await getCollection(c)).length]))) as AboutCounts;
  const site = `${import.meta.env.SITE}${import.meta.env.BASE_URL}`;
  const md = readFileSync(resolve(process.cwd(), "src", "about", "about.md"), "utf8");
  return new Response(aboutMarkdown(md, counts, personas(import.meta.env.BASE_URL, REPO), latestRun(), site), { headers: { "content-type": "text/markdown; charset=utf-8" } });
};
