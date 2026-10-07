/**
 * "What moved in Microsoft's code this week" (D61 section 9): one Sonnet paragraph per ISO week over that week's change
 * pages, for the weekly digest. Prose from facts already on the pages (titles, our summaries, kinds, objects), never
 * from a pull request's description. Redone only when the week's set of changes moves (input hash), at most
 * `quota` calls a night (quotas.change_narrative), current week first, then the previous one (late merges).
 *
 * A validator, not the prompt, decides what stays: every `#<n>` the text names must be one of the week's changes, and
 * the text must be a paragraph of sensible length. A rejected text keeps the previous narrative.
 */
import { resolve } from "node:path";
import matter from "gray-matter";
import { exists, listFiles, readJson, readText, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { sha256 } from "../lib/text.js";
import type { Llm } from "../extract/video.js";
import { isoWeek } from "../render/digest.js";
import type { HubReview } from "../review/hub.js";

export const STAGE = "narrate-changes";
export const PROMPT_VERSION = 1;
export const MIN_CHANGES = 3;
const MAX_INPUT = 80;

export interface WeekNarrative {
  week: string; input_hash: string; text: string; changes: number; model: string; cost_usd: number | null; at: string;
  /** Opus review of this text (D77, review/narrative.ts); valid only while its input_hash is the narrative's. */
  review?: HubReview;
}
export const narrativePath = (dataDir: string, week: string) => resolve(dataDir, "changes", "narratives", `${week}.json`);
export const loadNarrative = (dataDir: string, week: string): WeekNarrative | null => { const p = narrativePath(dataDir, week); return exists(p) ? readJson<WeekNarrative>(p) : null; };

export const SYSTEM = `You write the weekly "what moved in Microsoft's Business Central code" paragraph of an agent-first knowledge base.
You get the week's merged pull requests as JSON: number, repository, title, kind, whether behaviour changes or breaks, the AL objects touched and a one-line summary.
Write one paragraph of 120 to 220 words for developers and partners:
- Group by theme (an app, a functional area, a kind of change); lead with what changes behaviour or breaks.
- Name pull requests as #<number> exactly as given; never invent numbers, objects or versions.
- Plain words, no hype, no em-dashes, no headings, no lists. Use only the given facts.`;

const schema = { type: "object", additionalProperties: false, required: ["text"], properties: { text: { type: "string" } } };

interface Row { number: number; repo: string; title: string; kind: string; behavior: boolean; breaking: boolean; objects: string[]; summary: string; merged_at: string }

/** The week's change pages as prompt rows, behaviour changes first. */
export function weekRows(contentDir: string, w: { start: string; end: string }): Row[] {
  const rows: Row[] = [];
  for (const f of listFiles(resolve(contentDir, "changes"), ".md")) {
    let fm: Record<string, any>;
    try { fm = matter(readText(f)).data; } catch { continue; }
    const d = String(fm.merged_at ?? "").slice(0, 10);
    if (fm.type !== "change" || d < w.start || d > w.end) continue;
    rows.push({ number: fm.number, repo: fm.repo, title: String(fm.title).replace(/^#\d+ /, ""), kind: fm.change_kind, behavior: !!fm.behavior_change, breaking: !!fm.breaking,
      objects: (fm.objects_touched ?? []).slice(0, 5).map((o: any) => `${o.type} ${o.name}`), summary: String(fm.summary ?? ""), merged_at: d });
  }
  return rows.sort((a, b) => Number(b.breaking) - Number(a.breaking) || Number(b.behavior) - Number(a.behavior) || b.merged_at.localeCompare(a.merged_at) || b.number - a.number).slice(0, MAX_INPUT);
}

/** Keep a text only when every #number is one of the week's and it reads as a paragraph. */
export function acceptNarrative(text: string, numbers: Set<number>): string | null {
  const t = text.replace(/\s+/g, " ").replace(/—/g, ",").trim();
  const words = t.split(" ").length;
  if (words < 60 || words > 320) return null;
  for (const m of t.matchAll(/#(\d+)/g)) if (!numbers.has(Number(m[1]))) return null;
  return t;
}

export async function narrateChangeWeeks(contentDir: string, dataDir: string, now: Date, o: { quota: number; llm?: Llm }): Promise<{ written: number; rejected: number; calls: number }> {
  const out = { written: 0, rejected: 0, calls: 0 };
  const prev = new Date(now); prev.setUTCDate(prev.getUTCDate() - 7);
  for (const w of [isoWeek(now), isoWeek(prev)]) {
    if (out.calls >= o.quota) break;
    const rows = weekRows(contentDir, w);
    if (rows.length < MIN_CHANGES) continue;
    const input_hash = sha256(JSON.stringify({ v: PROMPT_VERSION, rows }));
    if (loadNarrative(dataDir, w.id)?.input_hash === input_hash) continue;
    out.calls++;
    let res;
    try {
      res = await (o.llm ?? complete)<{ text: string }>({ stage: STAGE, promptVersion: PROMPT_VERSION, role: "prose", system: SYSTEM, schema, prompt: `Week ${w.id} (${w.start} to ${w.end}), ${rows.length} pull requests:\n${JSON.stringify(rows, null, 1)}`,
        inputs: [{ kind: "change-week", id: w.id, hash: input_hash }], label: `changes ${w.id}` });
    } catch (e) {
      if (e instanceof LlmBudgetExhausted || e instanceof LlmInfraError) throw e;
      out.rejected++;
      continue;
    }
    const text = acceptNarrative(res.output.text, new Set(rows.map((r) => r.number)));
    if (!text) { out.rejected++; continue; }
    writeJson(narrativePath(dataDir, w.id), { week: w.id, input_hash, text, changes: rows.length, model: res.meta.model, cost_usd: res.cached ? null : res.meta.cost_usd ?? null, at: now.toISOString() } satisfies WeekNarrative);
    out.written++;
  }
  return out;
}
