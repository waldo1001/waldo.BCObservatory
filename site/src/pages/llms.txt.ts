import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { latestRun } from "../lib/state";

export const GET: APIRoute = async () => {
  const run = latestRun();
  const videos = (await getCollection("videos")).length;
  const site = `${import.meta.env.SITE}${import.meta.env.BASE_URL}`;
  const text = [
    "# BC Observatory",
    "",
    "> An agent-first, cross-referenced knowledge base of Microsoft Dynamics 365 Business Central: official docs, source code,",
    "> guidelines, videos and community blogs. Status: milestone M1 (first content); pages are machine-generated and badged",
    "> unreviewed until Opus reviews them. Every page is markdown with strict frontmatter and cites its evidence.",
    "",
    `Last nightly: ${run ? `${run.date} (${run.status})` : "none yet"}.`,
    "",
    "## Sections",
    "",
    ...(videos ? [`- [Videos](${site}videos/llms.txt): ${videos} Business Central videos as timestamped evidence (summary, chapters, features with verified status quotes)`] : ["- (no sections yet)"]),
    "",
    "## Start here",
    "",
    "- [AGENTS.md](https://github.com/waldo1001/waldo.BCObservatory/blob/main/AGENTS.md): how to use and cite this knowledge base",
    "- [Plan](https://github.com/waldo1001/waldo.BCObservatory/blob/main/docs/PLAN.md): architecture and milestones",
    "- [Sources](https://github.com/waldo1001/waldo.BCObservatory/blob/main/sources.yaml): every source with its trust tier",
    "",
  ].join("\n");
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8" } });
};
