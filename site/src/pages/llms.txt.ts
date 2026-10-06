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
  const digests = (await getCollection("digests")).length;
  const sources = (await getCollection("sources")).length;
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
    ...(topics ? [`- [Topics](${site}topics/llms.txt): ${topics} topic hubs seeded from the Microsoft Learn TOCs, linking out to Learn`] : []),
    ...(features ? [`- [Features](${site}features/llms.txt): ${features} Business Central features from the Microsoft 365 roadmap (status, wave, dates)`] : []),
    ...(objects ? [`- [AL objects](${site}objects/llms.txt): ${objects} W1 and first-party app objects from the code (fields, procedures, events, obsolete state, versions, countries, Learn pages)`] : []),
    ...(localizations ? [`- [Localizations](${site}localizations/llms.txt): ${localizations} country layers and what they change in W1`] : []),
    ...(sources ? [`- [Sources](${site}sources/llms.txt): ${sources} blogs and channels with their footprint (systems, topics, objects named, flight path)`] : []),
    ...(digests ? [`- [Weekly digests](${site}digests/llms.txt): what changed each week (roadmap, videos, posts, Learn commits, code, deprecation radar); RSS at ${site}rss.xml`] : []),
    ...(posts ? [`- [Community posts](${site}posts/llms.txt): ${posts} Business Central blog posts as derived evidence (summary, key points, short quotes, link to the original)`] : []),
    ...(videos ? [`- [Videos](${site}videos/llms.txt): ${videos} Business Central videos as timestamped evidence (summary, chapters, features with verified status quotes)`] : []),
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
