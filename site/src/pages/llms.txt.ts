import type { APIRoute } from "astro";
import { latestRun } from "../lib/state";

export const GET: APIRoute = () => {
  const run = latestRun();
  const text = [
    "# BC Observatory",
    "",
    "> An agent-first, cross-referenced knowledge base of Microsoft Dynamics 365 Business Central: official docs, source code,",
    "> guidelines, videos and community blogs. Status: bootstrapping (M0). Knowledge pages arrive with milestone M1.",
    "",
    `Last nightly: ${run ? `${run.date} (${run.status})` : "none yet"}.`,
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
