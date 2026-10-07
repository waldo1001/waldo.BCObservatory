/**
 * Opus review of the localization and digest narratives (D77), in the shape of review/hub.ts (D07, D21).
 *
 * Opus gets the narrative and the inputs Sonnet had: for a country the code diff and the Learn page summaries
 * (summarize/localization.ts localizationInputs), for a week the change rows of the digest (summarize/changes-week.ts
 * weekRows). approve keeps the text; fix replaces fields, and each edit must pass the first pass's validators (a
 * localization: tidy and clip, key points 1 to 8; a week: acceptNarrative, every #number one of the week's); a fix none
 * of whose edits pass counts as a reject. reject marks the narrative flagged: it stays on disk so it is not regenerated
 * from unchanged inputs, and the page withholds it (render/object.ts, render/digest.ts).
 *
 * The record lives in the narrative file itself, as the hub reviews do (`review`, with the input_hash it belongs to,
 * the edits applied and rejected): a refreshed narrative has another input_hash and is due again. The quota is
 * `opus_reviews`, shared with the hub reviews: the caller passes what is left and subtracts what was used.
 * Digests: only the weeks the nightly re-renders (current and previous) are due, so a review always reaches its page.
 */
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { loadConfig } from "../lib/config.js";
import { writeJson } from "../lib/fsx.js";
import type { ManifestItem } from "../lib/manifest.js";
import type { Llm } from "../extract/video.js";
import { clip, tidy } from "../summarize/video.js";
import { loadLocalizationNarrative, localizationInputs, narrativePath as locPath, type LocalizationNarrative } from "../summarize/localization.js";
import { acceptNarrative, loadNarrative, narrativePath as weekPath, weekRows, type WeekNarrative } from "../summarize/changes-week.js";
import { isoWeek } from "../render/digest.js";
import type { HubReview } from "./hub.js";

export const PROMPT_VERSION = 1;
export const LOC_STAGE = "review-localization";
export const DIGEST_STAGE = "review-digest";

/** A narrative review: the hub review's fields plus which edits were applied and which failed validation. */
export interface NarrativeReview extends HubReview { applied: string[]; rejected_edits: string[] }

export interface NarrativeReviewRun { candidates: number; reviewed: number; fixed: number; rejected: number; calls: number; cost_usd: number; stopped: string; errors: string[] }
interface Opts { quota: number; deadline: Date; clock: () => Date; llm?: Llm }

const base = { verdict: { type: "string", enum: ["approve", "fix", "reject"] }, issues: { type: "array", items: { type: "string" } } };
export const localizationReviewSchema = {
  type: "object", additionalProperties: false, required: ["verdict", "issues", "summary", "overview", "key_points"],
  properties: { ...base, summary: { type: ["string", "null"] }, overview: { type: ["string", "null"] }, key_points: { type: ["array", "null"], items: { type: "string" } } },
};
export const digestReviewSchema = {
  type: "object", additionalProperties: false, required: ["verdict", "issues", "text"],
  properties: { ...base, text: { type: ["string", "null"] } },
};

const RULES = `- approve: everything is supported and the text is useful; issues may note small things.
- fix: return corrected fields (null keeps a field). Remove or correct unsupported claims, invented objects, numbers, versions or features; keep what is right.
- reject: the text is mostly unsupported or misleading.
Plain language; no em-dashes.`;

export const LOC_SYSTEM = `You review the narrative of a localization hub in an agent-first knowledge base about Microsoft Dynamics 365 Business Central before it is marked reviewed.
The narrative was written by another model from what the country's code adds to or changes in W1 and from short summaries of the Microsoft Learn pages on the country's local functionality. That input is your only ground truth; outside knowledge of tax law or regulations is not.

Check every claim in the summary, overview and key points against it:
${RULES}
Rules for your text: summary at most 600 characters, starts with the country; key points 3 to 8; name AL objects only when they are in the input.`;

export const DIGEST_SYSTEM = `You review the weekly "what moved in Microsoft's Business Central code" paragraph of an agent-first knowledge base before it is marked reviewed.
The paragraph was written by another model from the week's merged pull requests (number, repository, title, kind, behaviour and breaking flags, objects, one-line summary). That list is your only ground truth.

Check every claim against it: each #number must be one of the week's and say what that pull request did; behaviour changes and breaks must be the flagged ones.
${RULES}
Rules for your text: one paragraph of 120 to 220 words, no headings, no lists; name pull requests as #<number> exactly as given.`;

type Out = { verdict: HubReview["verdict"]; issues: string[] };

async function reviewOne<T extends Out>(run: NarrativeReviewRun, o: Opts, label: string, call: () => Promise<{ output: T; cached: boolean; meta: { cost_usd?: number | null } }>): Promise<{ out: T; cost: number | null } | "stop" | "error"> {
  try {
    run.calls++;
    const res = await call();
    const cost = res.cached ? null : res.meta.cost_usd ?? null;
    if (cost) run.cost_usd = Math.round((run.cost_usd + cost) * 10000) / 10000;
    return { out: res.output, cost };
  } catch (e) {
    if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; return "stop"; }
    if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(`${label}: ${e.message}`); return "stop"; }
    run.errors.push(`${label}: ${String((e as Error).message).slice(0, 200)}`);
    return "error";
  }
}

/** The review record of one call: a fix with no edit that passed is a reject (D21: an unfixable text is not shown). */
function record(out: Out, applied: string[], rejected: string[], inputHash: string, at: string, cost: number | null): NarrativeReview {
  const verdict = out.verdict === "fix" && !applied.length ? "reject" : out.verdict;
  const issues = [...out.issues.map(tidy).filter(Boolean), ...(out.verdict === "fix" && !applied.length ? ["no proposed edit passed validation"] : [])];
  return { state: verdict === "reject" ? "flagged" : "reviewed", by: "opus", at, verdict, issues, input_hash: inputHash, cost_usd: cost, applied, rejected_edits: rejected };
}

function tally(run: NarrativeReviewRun, r: NarrativeReview): void {
  run.reviewed++;
  if (r.verdict === "fix") run.fixed++;
  if (r.verdict === "reject") run.rejected++;
}

const gate = (run: NarrativeReviewRun, o: Opts, started: number): boolean => {
  if (started >= o.quota) { run.stopped = "quota"; return false; }
  if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; return false; }
  return true;
};

/** Review the localization narratives that have no review for their input hash; priority countries first. */
export async function reviewLocalizationNarratives(dataDir: string, docs: ManifestItem[], o: Opts & { countries?: string[] }): Promise<NarrativeReviewRun> {
  const llm = o.llm ?? complete;
  const run: NarrativeReviewRun = { candidates: 0, reviewed: 0, fixed: 0, rejected: 0, calls: 0, cost_usd: 0, stopped: "done", errors: [] };
  const cfg = loadConfig<{ narrative_priority: string[]; known: string[] }>("countries");
  const order = o.countries ?? [...cfg.narrative_priority, ...cfg.known.filter((c) => !cfg.narrative_priority.includes(c))];
  const todo = order.map((CC) => ({ CC, n: loadLocalizationNarrative(dataDir, CC.toLowerCase()) }))
    .filter((x): x is { CC: string; n: LocalizationNarrative } => !!x.n && x.n.review?.input_hash !== x.n.input_hash);
  run.candidates = todo.length;
  let started = 0;
  for (const { CC, n } of todo) {
    if (!gate(run, o, started)) break;
    const inp = localizationInputs(dataDir, docs, CC);
    if (!inp || "waiting" in inp) { run.candidates--; continue; }
    started++;
    const cc = CC.toLowerCase();
    const r = await reviewOne(run, o, `localization ${cc} review`, () => llm<Out & { summary: string | null; overview: string | null; key_points: string[] | null }>({
      stage: LOC_STAGE, promptVersion: PROMPT_VERSION, role: "review", system: LOC_SYSTEM, schema: localizationReviewSchema,
      prompt: `Narrative under review (JSON):\n${JSON.stringify({ summary: n.summary, overview: n.overview, key_points: n.key_points }, null, 1)}\n\nThe input it was written from:\n${inp.prompt}`,
      inputs: [{ kind: "localization-narrative", id: cc, hash: n.input_hash }], label: `localization ${cc} review`,
    }));
    if (r === "stop") break;
    if (r === "error") continue;
    const { out } = r;
    const applied: string[] = [], rejected: string[] = [];
    const next: LocalizationNarrative = { ...n };
    if (out.verdict === "fix") {
      const summary = out.summary ? clip(tidy(out.summary)) : "";
      if (out.summary != null) (summary ? (next.summary = summary, applied.push("summary")) : rejected.push("summary: empty"));
      const overview = out.overview ? tidy(out.overview) : "";
      if (out.overview != null) (overview ? (next.overview = overview, applied.push("overview")) : rejected.push("overview: empty"));
      if (out.key_points != null) {
        const kp = out.key_points.map(tidy).filter(Boolean).slice(0, 8);
        if (kp.length) { next.key_points = kp; applied.push("key_points"); } else rejected.push("key_points: none left");
      }
    }
    next.review = record(out, applied, rejected, n.input_hash, o.clock().toISOString(), r.cost);
    writeJson(locPath(dataDir, cc), next);
    tally(run, next.review as NarrativeReview);
  }
  return run;
}

/** Review the week narratives of the weeks the digest re-renders (`now`'s week and the one before). */
export async function reviewDigestNarratives(contentDir: string, dataDir: string, now: Date, o: Opts): Promise<NarrativeReviewRun> {
  const llm = o.llm ?? complete;
  const run: NarrativeReviewRun = { candidates: 0, reviewed: 0, fixed: 0, rejected: 0, calls: 0, cost_usd: 0, stopped: "done", errors: [] };
  const prev = new Date(now); prev.setUTCDate(prev.getUTCDate() - 7);
  const todo = [isoWeek(now), isoWeek(prev)].map((w) => ({ w, n: loadNarrative(dataDir, w.id) }))
    .filter((x): x is { w: ReturnType<typeof isoWeek>; n: WeekNarrative } => !!x.n && x.n.review?.input_hash !== x.n.input_hash);
  run.candidates = todo.length;
  let started = 0;
  for (const { w, n } of todo) {
    if (!gate(run, o, started)) break;
    // the change pages as they are now: a late merge or a reviewed change summary may have moved a row since
    const rows = weekRows(contentDir, w);
    if (!rows.length) { run.candidates--; continue; }
    started++;
    const r = await reviewOne(run, o, `digest ${w.id} review`, () => llm<Out & { text: string | null }>({
      stage: DIGEST_STAGE, promptVersion: PROMPT_VERSION, role: "review", system: DIGEST_SYSTEM, schema: digestReviewSchema,
      prompt: `Paragraph under review:\n${n.text}\n\nWeek ${w.id} (${w.start} to ${w.end}), ${rows.length} pull requests:\n${JSON.stringify(rows, null, 1)}`,
      inputs: [{ kind: "change-week-narrative", id: w.id, hash: n.input_hash }], label: `digest ${w.id} review`,
    }));
    if (r === "stop") break;
    if (r === "error") continue;
    const { out } = r;
    const applied: string[] = [], rejected: string[] = [];
    const next: WeekNarrative = { ...n };
    if (out.verdict === "fix" && out.text != null) {
      const text = acceptNarrative(tidy(out.text), new Set(rows.map((x) => x.number)));
      if (text) { next.text = text; applied.push("text"); } else rejected.push("text: failed acceptNarrative (length or a #number not of this week)");
    }
    next.review = record(out, applied, rejected, n.input_hash, o.clock().toISOString(), r.cost);
    writeJson(weekPath(dataDir, w.id), next);
    tally(run, next.review as NarrativeReview);
  }
  return run;
}
