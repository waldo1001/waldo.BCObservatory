/** Markdown summary of the newest run report, for the workflow job summary. */
import { resolve } from "node:path";
import { listFiles, readJson } from "../pipeline/lib/fsx.js";
import { RUNS_DIR } from "../pipeline/lib/paths.js";
import type { RunReport } from "../pipeline/orchestrator/nightly.js";

const file = listFiles(RUNS_DIR, ".json").at(-1);
if (!file) { console.log("No run report."); process.exit(0); }
const r = readJson<RunReport>(resolve(file));
const g = r.guard;
const lines = [
  `### Nightly ${r.date}: ${r.status}`,
  "",
  `Guard: **${g.decision}** (${g.status})` + (g.five_hour != null ? `, 5 h ${g.five_hour}%, 7 d ${g.seven_day}%` : "") + `, quota factor ${g.factor}`,
  "",
  "| source | ok | new | changed | removed | note |",
  "|---|---|---|---|---|---|",
  ...(r.ingest.sources as any[]).map((s) => `| ${s.id} | ${s.ok ? (s.deferred ? "deferred" : "yes") : "**no**"} | ${s.counts.new} | ${s.counts.changed} | ${s.counts.removed} | ${String(s.note ?? s.error ?? "").replace(/\|/g, "/").slice(0, 90)} |`),
  "",
  `Plan: ${r.plan.work} items queued, ${r.plan.executed} executed. LLM calls: ${r.llm.calls}.`,
  ...(r.code?.graph?.runs.length ? ["", `Call graph: ${r.code.graph.runs.map((g) => `BC${g.major} ${g.skipped ?? (g.written ? "written" : "unchanged")}, ${g.edges.toLocaleString("en")} edges, ${g.unresolved.toLocaleString("en")} unresolved, ${(g.ms / 60000).toFixed(1)} min`).join("; ")}`] : []),
  // D77: the narrative reviews (localization, digest), one line per kind
  ...Object.entries(r.narrative_reviews ?? {}).map(([k, v]) => `Opus review, ${k} narratives: ${v.reviewed} reviewed (${v.fixed} fixed, ${v.rejected} rejected) of ${v.candidates} due, ${v.calls} calls, $${(v.cost_usd ?? 0).toFixed(2)} (${v.stopped}).`),
  ...(r.errors.length ? ["", "Errors:", ...r.errors.map((e) => `- ${e}`)] : []),
];
console.log(lines.join("\n"));
