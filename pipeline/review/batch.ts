/**
 * Shared shape of the batch reviews of D77 (review/post.ts, review/change.ts), after review/topics.ts: due items in
 * calls of a few, newest first, within a quota of calls, a deadline and the spend allowance. A failed call leaves its
 * items due for the next night; LlmBudgetExhausted and LlmInfraError stop the pass, never the run.
 */
import { LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import type { ManifestItem } from "../lib/manifest.js";
import { pool } from "../summarize/hub.js";

const log = logger("review");

/** One pass's numbers for the run report (`reviews.post`, `reviews.change`). `reviewed` counts every verdict. */
export interface ContentReviewRun {
  candidates: number; calls: number; reviewed: number; fixed: number; rejected: number; failed: number;
  /** Items whose text changed since their review: back to `unreviewed` until the next review runs. */
  reset: number;
  cost_usd: number; stopped: string; errors: string[];
}
export const newRun = (candidates: number): ContentReviewRun => ({ candidates, calls: 0, reviewed: 0, fixed: 0, rejected: 0, failed: 0, reset: 0, cost_usd: 0, stopped: "done", errors: [] });

export type Verdict = "approve" | "fix" | "reject";
/** The manifest review a verdict gives (D77): a rejection marks the page `flagged`, anything else `reviewed`. */
export const reviewOfVerdict = (v: Verdict, at: string): NonNullable<ManifestItem["review"]> => ({ state: v === "reject" ? "flagged" : "reviewed", by: "opus", at });
export const UNREVIEWED: NonNullable<ManifestItem["review"]> = { state: "unreviewed", by: null, at: null };

/** Newest first by published_at (undated last), then id: new items are reviewed the night they land. */
export const newestFirst = (a: Pick<ManifestItem, "published_at" | "id">, b: Pick<ManifestItem, "published_at" | "id">) =>
  (b.published_at ?? "").localeCompare(a.published_at ?? "") || a.id.localeCompare(b.id);

/** Run `calls` within quota and deadline; `fn` returns the call's cost (0 when cached) and throws on failure. */
export async function runCalls<C>(
  calls: C[], run: ContentReviewRun,
  o: { quota: number; deadline: Date; clock: () => Date; concurrency?: number },
  describe: (c: C) => { label: string; size: number },
  fn: (c: C) => Promise<number>,
): Promise<void> {
  let started = 0;
  await pool(calls, o.concurrency ?? 1, async (c) => {
    if (run.stopped !== "done") return;
    if (started >= o.quota) { run.stopped = "quota"; return; }
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; return; }
    started++;
    run.calls++;
    const { label, size } = describe(c);
    try {
      run.cost_usd += await fn(c);
    } catch (e) {
      if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; return; }
      if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(`${label}: ${e.message}`); return; }
      run.failed += size;
      run.errors.push(`${label}: ${String((e as Error).message).slice(0, 200)}`);
      log.warn(`${label} failed: ${String((e as Error).message).slice(0, 200)}`);
    }
  });
  run.cost_usd = Math.round(run.cost_usd * 1e6) / 1e6;
}

/** The verdict list must carry exactly one entry per ref, or the call is not trusted at all. */
export function byRef<T extends { ref: string }>(out: T[], refs: string[]): Map<string, T> {
  const m = new Map(out.map((v) => [v.ref, v]));
  if (m.size !== refs.length || out.length !== refs.length || refs.some((r) => !m.has(r))) throw new Error(`expected ${refs.length} reviews, got ${out.length} for ${m.size} refs`);
  return m;
}
