import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { latestRun } from "../lib/state";
import { contentSections, type SectionId } from "../../../pipeline/lib/sections";

// D90: what each section holds, after its one name; the lines follow the home page's order
const SAYS: Partial<Record<SectionId, (n: number, site: string) => string>> = {
  topics: (n) => `${n} topic hubs seeded from the Microsoft Learn TOCs, linking out to Learn`,
  objects: (n) => `${n} W1 and first-party app objects from the code (fields, procedures, events, obsolete state, versions, countries, Learn pages)`,
  apps: (n) => `${n} Microsoft first-party apps (BCApps src/Apps/W1): objects by type, the Learn hubs that document them, videos and posts naming their objects`,
  localizations: (n) => `${n} country layers and what they change in W1`,
  features: (n) => `${n} Business Central features from the Microsoft 365 roadmap (status, wave, dates)`,
  changes: (n) => `${n} merged pull requests of microsoft/BCApps that touch AL source, joined to the AL object pages they changed (D61)`,
  guidelines: (n) => `${n} BCQuality rules and review skills (microsoft/BCQuality, MIT): each rule's own text, its good and bad examples, the objects it names and the pull requests that changed it (D126)`,
  releases: (n) => `${n} AL Language extension versions from the marketplace changelog (dates, entries, issues)`,
  videos: (n) => `${n} Business Central videos as timestamped evidence (summary, chapters, features with verified status quotes)`,
  posts: (n) => `${n} Business Central blog posts as derived evidence (summary, key points, short quotes, link to the original)`,
  digests: (_n, site) => `what changed each week (roadmap, videos, posts, Learn commits, code, deprecation radar); RSS at ${site}rss.xml`,
  sources: (n) => `${n} blogs and channels with their footprint (systems, topics, objects named, flight path)`,
};

export const GET: APIRoute = async () => {
  const run = latestRun();
  const counts = Object.fromEntries(await Promise.all(contentSections().map(async (s) => [s.id, (await getCollection(s.id as any)).length]))) as Record<string, number>;
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
    ...contentSections().filter((s) => counts[s.id] && SAYS[s.id]).map((s) => `- [${s.name}](${site}${s.path}llms.txt): ${SAYS[s.id]!(counts[s.id], site)}`),
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
