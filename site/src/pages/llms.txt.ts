import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { latestRun } from "../lib/state";

export const GET: APIRoute = async () => {
  const run = latestRun();
  const videos = (await getCollection("videos")).length;
  const topics = (await getCollection("topics")).length;
  const features = (await getCollection("features")).length;
  const objects = (await getCollection("objects")).length;
  const localizations = (await getCollection("localizations")).length;
  const posts = (await getCollection("posts")).length;
  const changes = (await getCollection("changes")).length;
  const digests = (await getCollection("digests")).length;
  const sources = (await getCollection("sources")).length;
  const apps = (await getCollection("apps")).length;
  const site = `${import.meta.env.SITE}${import.meta.env.BASE_URL}`;
  const text = [
    "# BC Observatory",
    "",
    "> An agent-first, cross-referenced knowledge base of Microsoft Dynamics 365 Business Central: official docs, source code,",
    "> guidelines, videos and community blogs. Pages without model text are badged derived (facts placed by code); pages with",
    "> model text are badged unreviewed until Opus reviews them. Every page is markdown with strict frontmatter and cites its evidence.",
    "",
    `Last nightly: ${run ? `${run.date} (${run.status})` : "none yet"}.`,
    "",
    "## Sections",
    "",
    ...(topics ? [`- [Topics](${site}topics/llms.txt): ${topics} topic hubs seeded from the Microsoft Learn TOCs, linking out to Learn`] : []),
    ...(features ? [`- [Features](${site}features/llms.txt): ${features} Business Central features from the Microsoft 365 roadmap (status, wave, dates)`] : []),
    ...(objects ? [`- [AL objects](${site}objects/llms.txt): ${objects} W1 and first-party app objects from the code (fields, procedures, events, obsolete state, versions, countries, Learn pages)`] : []),
    ...(apps ? [`- [First-party apps](${site}apps/llms.txt): ${apps} Microsoft first-party apps (BCApps src/Apps/W1): objects by type, the Learn hubs that document them, videos and posts naming their objects`] : []),
    ...(localizations ? [`- [Localizations](${site}localizations/llms.txt): ${localizations} country layers and what they change in W1`] : []),
    ...(sources ? [`- [Sources](${site}sources/llms.txt): ${sources} blogs and channels with their footprint (systems, topics, objects named, flight path)`] : []),
    ...(digests ? [`- [Weekly digests](${site}digests/llms.txt): what changed each week (roadmap, videos, posts, Learn commits, code, deprecation radar); RSS at ${site}rss.xml`] : []),
    ...(posts ? [`- [Community posts](${site}posts/llms.txt): ${posts} Business Central blog posts as derived evidence (summary, key points, short quotes, link to the original)`] : []),
    ...(changes ? [`- [Code changes](${site}changes/llms.txt): ${changes} merged pull requests of microsoft/BCApps that touch AL source, joined to the AL object pages they changed (D61)`] : []),
    ...(videos ? [`- [Videos](${site}videos/llms.txt): ${videos} Business Central videos as timestamped evidence (summary, chapters, features with verified status quotes)`] : []),
    "",
    "Related pages: data/links/related.json (in the repository) lists up to 8 per topic hub, AL object, app, video, post and feature, each with a",
    "reason from a closed set (same title, different Learn section; set-up guide for this feature; both documented in <hub>; same Learn section;",
    "shares <n> videos/posts; same app; implements <hub>; the full list is its `why` array). Derived from structure, nothing machine-written.",
    "",
    "## Start here",
    "",
    `- [About](${site}about.md): who made this, why, how the nightly runs, who it is for, and how to connect an agent`,
    `- [MCP](${site}mcp.md): the bc-observatory MCP server and the Claude Code plugin: the tools, what to ask, how to install`,
    "- [AGENTS.md](https://github.com/waldo1001/waldo.BCObservatory/blob/main/AGENTS.md): how to use and cite this knowledge base",
    "- [Plan](https://github.com/waldo1001/waldo.BCObservatory/blob/main/docs/PLAN.md): architecture and milestones",
    "- [Sources](https://github.com/waldo1001/waldo.BCObservatory/blob/main/sources.yaml): every source with its trust tier",
    "",
  ].join("\n");
  return new Response(text, { headers: { "content-type": "text/plain; charset=utf-8" } });
};
