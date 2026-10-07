/**
 * Opus review of change pages (D61, D77, role `review`): a nightly phase after linking, BATCH_SIZE merged pull
 * requests per call.
 *
 * Opus sees, per pull request, what the Haiku pass saw (extract/change.ts changePrompt: repository, title, labels, the
 * joined objects, the changed files and the body excerpt, read from tonight's cache and never stored) and the
 * extraction, and returns approve, fix or reject. Edits: summary, key points, kind, the behaviour and breaking flags,
 * dropping an obsoletion. They pass the extractor's validators (kind in CHANGE_KINDS, `breaking` kind implies the
 * flag, clipped prose). A rejection keeps the facts (record, joins, kind and flags) and drops the model text (summary,
 * key points); the page falls back to its title line and shows `flagged`.
 *
 * Writes data/review/change/<repo-slug>/<number>.json tied to the input hash (D21) and item.review in the manifest.
 */
import { resolve } from "node:path";
import { exists, readJson, writeJson } from "../lib/fsx.js";
import { complete } from "../lib/llm.js";
import type { ManifestItem } from "../lib/manifest.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { repoSlug } from "../ingest/github-prs.js";
import { CHANGE_KINDS, changeExtractionPath, changePrompt, type ChangeExtraction, type ChangeKind } from "../extract/change.js";
import { changeBody, changeNumber, changeRepo, readChangeRecord, type ChangeRecord } from "../fetch/change.js";
import type { Llm } from "../extract/video.js";
import { clip, tidy } from "../summarize/video.js";
import { byRef, newestFirst, newRun, reviewOfVerdict, runCalls, UNREVIEWED, type ContentReviewRun, type Verdict } from "./batch.js";

export const PROMPT_VERSION = 1;
export const STAGE = "review-change";
export const BATCH_SIZE = 6;
/** The extractor's summary bound (extract/change.ts SUMMARY_MAX + its clip margin). */
const SUMMARY_CHARS = 500;

const str = { type: "string" };
export const reviewSchema = (refs: string[]) => ({
  type: "object", additionalProperties: false, required: ["reviews"],
  properties: {
    reviews: {
      type: "array",
      items: {
        type: "object", additionalProperties: false,
        required: ["ref", "verdict", "issues", "summary", "key_points", "change_kind", "behavior_change", "breaking", "drop_obsoletions"],
        properties: {
          ref: { type: "string", enum: refs }, verdict: { type: "string", enum: ["approve", "fix", "reject"] }, issues: { type: "array", items: str },
          summary: { type: ["string", "null"] }, key_points: { type: ["array", "null"], items: str },
          change_kind: { type: ["string", "null"], enum: [...CHANGE_KINDS, null] }, behavior_change: { type: ["boolean", "null"] }, breaking: { type: ["boolean", "null"] },
          drop_obsoletions: { type: "array", items: { type: "integer" } },
        },
      },
    },
  },
});
export interface ChangeReviewOut {
  ref: string; verdict: Verdict; issues: string[]; summary: string | null; key_points: string[] | null;
  change_kind: ChangeKind | null; behavior_change: boolean | null; breaking: boolean | null; drop_obsoletions: number[];
}
export interface ChangeReview {
  item_id: string; input_hash: string; verdict: Verdict; by: "opus"; at: string; issues: string[]; applied: string[]; rejected_edits: string[];
  prompt_version: number; llm: { model: string; cached: boolean; cost_usd: number | null; changes_in_call: number };
}

export const SYSTEM = `You review machine-written pages about merged pull requests of Microsoft's Business Central repositories (microsoft/BCApps, microsoft/AL-Go, microsoft/BCQuality) before agents rely on them.
A smaller model read each pull request (title, description excerpt, changed files, the AL objects they belong to) and wrote a summary, key points, the kind of change, whether behaviour changes or breaks, and obsoletions. You get several pull requests, each with a ref: what the smaller model saw (the only ground truth) and what it wrote.

For each pull request decide:
- approve: everything written is supported by what was given; no edits.
- fix: correct what is wrong with the edit fields; keep what is right.
- reject: the page cannot be fixed by these edits (the summary describes another change, or nothing given supports it).

Edit rules:
- Only what is given. No outside knowledge.
- summary: 1 to 3 plain sentences, at most 400 characters, saying what changed for a developer or a user; null keeps it. Paraphrase; no em-dashes.
- key_points: 1 to 5 short points in your own words; null keeps them.
- change_kind: feature, fix, refactor, obsoletion, performance, breaking or other; null keeps it.
- behavior_change, breaking: true or false to correct the flag, null keeps it. breaking only when existing extensions can stop compiling or working.
- drop_obsoletions: numbers of obsoletions the change does not make.
- issues: short notes on what you found, also when approving. No em-dashes.
Return exactly one review per ref.`;

export interface ChangeUnit { item: ManifestItem; ref: string; rec: ChangeRecord; x: ChangeExtraction; hash: string; body: string }

export const changeReviewPath = (dataDir: string, item: Pick<ManifestItem, "id" | "meta">) => resolve(dataDir, "review", "change", repoSlug(changeRepo(item)), `${changeNumber(item)}.json`);
/** The input a review is tied to (D21): the pull request as the extractor's input hash names it, and the extraction. */
export const changeInputHash = (rec: Pick<ChangeRecord, "merge_commit_sha" | "title" | "body_hash">, x: ChangeExtraction) =>
  sha256(canonicalJson({ src: `${rec.merge_commit_sha}|${rec.title}|${rec.body_hash}`, x: { ...x, llm: null } }));

/** What Haiku saw (its own prompt) plus what it wrote, per pull request. */
export function changeReviewPrompt(units: ChangeUnit[]): string {
  return units.map((u) => {
    const saw = changePrompt([{ item: u.item, key: u.ref, rec: u.rec, body: u.body }]).replace(/^Galaxy systems:[^\n]*\n\n/, "");
    const page = {
      summary: u.x.summary, key_points: u.x.key_points, change_kind: u.x.change_kind, behavior_change: u.x.behavior_change, breaking: u.x.breaking,
      obsoletions: u.x.obsoletions.map((o, i) => ({ n: i + 1, ...o })), systems: u.x.systems, quote: u.x.quote,
    };
    return `${saw.replace(/^### PR key=/, "### PR ref=")}\n\nWhat the page says (JSON):\n${JSON.stringify(page, null, 1)}`;
  }).join("\n\n");
}

/** Apply a fix through the extractor's validators. Pure. */
export function applyChangeReview(x: ChangeExtraction, out: ChangeReviewOut): { x: ChangeExtraction; applied: string[]; rejected: string[] } {
  const applied: string[] = [], rejected: string[] = [];
  const next: ChangeExtraction = { ...x };
  if (out.summary !== null) {
    const s = clip(tidy(out.summary), SUMMARY_CHARS);
    if (s) { next.summary = s; applied.push("summary rewritten"); } else rejected.push("summary: empty");
  }
  if (out.key_points !== null) {
    const kp = out.key_points.map(tidy).filter(Boolean).slice(0, 5);
    if (kp.length) { next.key_points = kp; applied.push("key points rewritten"); } else rejected.push("key points: empty");
  }
  if (out.change_kind !== null && out.change_kind !== x.change_kind) {
    if ((CHANGE_KINDS as readonly string[]).includes(out.change_kind)) { next.change_kind = out.change_kind; applied.push(`kind ${out.change_kind}`); }
    else rejected.push(`kind: unknown "${String(out.change_kind).slice(0, 30)}"`);
  }
  if (out.behavior_change !== null && out.behavior_change !== x.behavior_change) { next.behavior_change = out.behavior_change; applied.push(`behaviour change ${out.behavior_change}`); }
  if (out.breaking !== null && out.breaking !== x.breaking) { next.breaking = out.breaking; applied.push(`breaking ${out.breaking}`); }
  // the extractor's rule: a `breaking` kind is breaking
  if (next.change_kind === "breaking" && !next.breaking) {
    if (out.breaking === false) rejected.push("breaking false: the kind is breaking");
    next.breaking = true;
  }
  if (out.drop_obsoletions.length) {
    const ns = new Set(out.drop_obsoletions);
    for (const n of ns) if (!(n >= 1 && n <= x.obsoletions.length)) rejected.push(`drop obsoletion: no obsoletion ${n}`);
    const kept = x.obsoletions.filter((_, i) => !ns.has(i + 1));
    if (kept.length < x.obsoletions.length) applied.push(`dropped ${x.obsoletions.length - kept.length} obsoletion(s)`);
    next.obsoletions = kept;
  }
  return { x: next, applied, rejected };
}

/** Rejected: the facts stay, the model text goes; the page falls back to its title line (render/change.ts). */
export const withheld = (x: ChangeExtraction): ChangeExtraction => ({ ...x, summary: "", key_points: [] });

/** Published code changes whose current extraction has no review of this input hash, newest first. */
export function dueChanges(items: ManifestItem[], dataDir: string): Omit<ChangeUnit, "ref" | "body">[] {
  const due: Omit<ChangeUnit, "ref" | "body">[] = [];
  for (const item of [...items].filter((i) => i.pillar === "change" && i.state === "published").sort(newestFirst)) {
    const rec = readChangeRecord(dataDir, item);
    const xp = changeExtractionPath(dataDir, item);
    if (!rec || rec.change_class !== "code" || !exists(xp)) continue;
    const x = readJson<ChangeExtraction>(xp);
    const hash = changeInputHash(rec, x);
    const rp = changeReviewPath(dataDir, item);
    if (exists(rp) && readJson<ChangeReview>(rp).input_hash === hash) continue;
    due.push({ item, rec, x, hash });
  }
  return due;
}

export interface ChangeReviewOptions {
  quota: number; deadline: Date; clock: () => Date; concurrency?: number; llm?: Llm;
  /** The description: tonight's cache, else one GitHub call (extract/change.ts changeBody); never stored. */
  body?: (item: ManifestItem) => Promise<string>;
  cacheDir: string;
  save: (item: ManifestItem) => void;
}

export async function reviewChanges(items: ManifestItem[], dataDir: string, o: ChangeReviewOptions): Promise<{ run: ContentReviewRun; touched: ManifestItem[] }> {
  const llm = o.llm ?? complete;
  const body = o.body ?? ((item: ManifestItem) => changeBody(item, o.cacheDir));
  const due = dueChanges(items, dataDir);
  const run = newRun(due.length);
  const touched: ManifestItem[] = [];
  for (const d of due) {
    if (!d.item.review || d.item.review.state === "unreviewed") continue;
    d.item = { ...d.item, review: { ...UNREVIEWED } };
    o.save(d.item);
    touched.push(d.item);
    run.reset++;
  }
  const calls: Omit<ChangeUnit, "ref" | "body">[][] = [];
  for (let i = 0; i < due.length; i += BATCH_SIZE) calls.push(due.slice(i, i + BATCH_SIZE));
  await runCalls(calls, run, o, (c) => ({ label: `${c[0].item.id}${c.length > 1 ? ` +${c.length - 1}` : ""} change review`, size: c.length }), async (c0) => {
    const c: ChangeUnit[] = [];
    for (const [i, d] of c0.entries()) c.push({ ...d, ref: `c${i + 1}`, body: await body(d.item) });
    const refs = c.map((u) => u.ref);
    const res = await llm<{ reviews: ChangeReviewOut[] }>({
      stage: STAGE, promptVersion: PROMPT_VERSION, role: "review", system: SYSTEM, schema: reviewSchema(refs), prompt: changeReviewPrompt(c),
      inputs: c.map((u) => ({ kind: "change-review", id: u.item.id, hash: u.hash })), label: `${c[0].item.id}${c.length > 1 ? ` +${c.length - 1}` : ""} change review`,
    });
    const got = byRef(res.output.reviews, refs);
    const at = o.clock().toISOString();
    for (const u of c) {
      const out = got.get(u.ref)!;
      let x = u.x, applied: string[] = [], rejected: string[] = [];
      if (out.verdict === "fix") ({ x, applied, rejected } = applyChangeReview(u.x, out));
      if (out.verdict === "reject") { x = withheld(u.x); applied = ["summary and key points withheld"]; }
      if (x !== u.x) writeJson(changeExtractionPath(dataDir, u.item), x);
      const record: ChangeReview = {
        item_id: u.item.id, input_hash: changeInputHash(u.rec, x), verdict: out.verdict, by: "opus", at,
        issues: out.issues.map(tidy).filter(Boolean).slice(0, 10), applied, rejected_edits: rejected, prompt_version: PROMPT_VERSION,
        llm: { model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : Number(((res.meta.cost_usd ?? 0) / c.length).toFixed(6)), changes_in_call: c.length },
      };
      writeJson(changeReviewPath(dataDir, u.item), record);
      const item = { ...u.item, review: reviewOfVerdict(out.verdict, at) };
      o.save(item);
      touched.push(item);
      run.reviewed++;
      if (out.verdict === "fix") run.fixed++;
      if (out.verdict === "reject") run.rejected++;
    }
    return res.cached ? 0 : res.meta.cost_usd ?? 0;
  });
  return { run, touched: [...new Map(touched.map((t) => [t.id, t])).values()] };
}
