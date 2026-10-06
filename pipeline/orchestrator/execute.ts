/**
 * Stage executor (PLAN 4.3, orchestrator step 5): runs planned items through their next stages.
 *
 * - An item keeps advancing while a handler exists for its next stage and that stage's quota has room; each
 *   quota is charged once per item. A stage without a handler leaves the item where it is (no fake progress).
 * - Every completed stage is saved immediately, so a killed run resumes from the manifest.
 * - Item errors never abort: fail() sets attempts and retry_after (2^attempts h), `failed` after max attempts.
 * - Run-level stops, checked before every stage: hard clock stop, llm_calls_max, the spend allowance (D17,
 *   LlmBudgetExhausted leaves the item untouched), and a re-guard every N LLM calls that stops on `skip`.
 * - LlmInfraError (auth, API-key auth, usage limit) aborts the run; the next night resumes.
 * - `concurrency` workers share the plan (quota charging is synchronous, so it cannot race). An item in a batch in
 *   flight is claimed and handed back for its next stages when the batch returns. Run-level checks happen before each
 *   call starts, so a cap can be exceeded by at most the calls already in flight.
 */
import type { Budget, SourceDef } from "../lib/config.js";
import { decideGuard, type GuardDecision, type PlanUsage, type PlanUsageUnavailable } from "../lib/budget.js";
import { LlmBudgetExhausted, LlmInfraError, llmStats } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import { advance, fail, nextStage, skip, type Manifest, type ManifestItem, type Pillar, type Stage } from "../lib/manifest.js";
import { quotaFor, type PlannedWork } from "../lib/queue.js";

const log = logger("execute");

/** The stage cannot run now for a reason outside the item (YouTube block, tool missing): leave it untouched, go on. */
export class StageHold extends Error {
  constructor(message: string) { super(message); this.name = "StageHold"; }
}

export interface StageResult {
  /** Stored on the stage record (counts, artifact paths, prompt version, ...). */
  data?: Record<string, unknown>;
  output_hash?: string;
  /** Adds flags (e.g. quote-check failures) so the item routes through Opus review. */
  flags?: string[];
  /** Ends the item as skipped (e.g. "no-captions") instead of advancing. */
  skip?: string;
  /** Item fields learned by the stage (e.g. the real upload time from the video's metadata). */
  patch?: Partial<Pick<ManifestItem, "published_at" | "title" | "language" | "review">> & { meta?: Record<string, unknown> };
}
export interface StageContext {
  now: () => Date; manifest: Manifest; dataDir: string; contentDir: string; mirrorsDir: string;
  sources: Map<string, Pick<SourceDef, "id" | "name" | "tier" | "url">>;
}
export type StageFn = (item: ManifestItem, ctx: StageContext) => Promise<StageResult>;
/** One call for several items of the same stage (e.g. 8 short Learn pages per Haiku call); an Error per failed item. */
export type BatchFn = (items: ManifestItem[], ctx: StageContext) => Promise<Map<string, StageResult | Error>>;
/**
 * A plain function; or `run` / `batch` with an optional `accepts` (e.g. official tier only). Items that a handler
 * declines never compete for quota.
 */
export type StageHandler = StageFn
  | { accepts?: (item: ManifestItem) => boolean; run: StageFn }
  | { accepts?: (item: ManifestItem) => boolean; batch: { size: number; run: BatchFn } };
export type StageHandlers = Partial<Record<Pillar, Partial<Record<Stage, StageHandler>>>>;
export interface ResolvedHandler { run?: StageFn; batch?: { size: number; run: BatchFn } }

/** The handler that would run this item's next stage, or null (no handler, or it declines the item). */
export function handlerFor(handlers: StageHandlers, item: ManifestItem): ResolvedHandler | null {
  const stage = nextStage(item);
  const h = stage ? handlers[item.pillar]?.[stage] : undefined;
  if (!h) return null;
  if (typeof h === "function") return { run: h };
  if (h.accepts && !h.accepts(item)) return null;
  return "batch" in h ? { batch: h.batch } : { run: h.run };
}

export type StopReason = "done" | "hard-stop" | "llm-calls-max" | "spend-cap" | "guard-skip" | "aborted";
export interface ExecutionReport {
  stop_reason: StopReason;
  deadline: string;
  items_touched: number;
  stages_run: Record<string, number>;
  advanced: number;
  skipped: number;
  failed_attempts: number;
  failed_final: number;
  no_handler: number;
  /** Items left untouched by StageHold (no attempt counted). */
  held: number;
  quota_charged: Record<string, number>;
  regards: { at_calls: number; decision: GuardDecision["decision"]; status: string }[];
  errors: string[];
}
export interface ExecuteOptions {
  work: PlannedWork[];
  quotas: Record<string, number>;
  budget: Pick<Budget, "window" | "usage_guard" | "headroom_scale" | "reduced_factor" | "retry">;
  manifest: Manifest;
  dataDir: string;
  contentDir: string;
  mirrorsDir?: string;
  sources: StageContext["sources"];
  handlers: StageHandlers;
  started: Date;
  clock: () => Date;
  /** Absent = no re-guard (guard disabled for this run). */
  readUsage?: () => Promise<PlanUsage | PlanUsageUnavailable>;
  /** LLM CLI calls so far; defaults to llmStats().calls. */
  callCount?: () => number;
  /** Items worked on at the same time (each runs its stages in order). Default 1. */
  concurrency?: number;
}

/**
 * Deadline for starting new work. Inside the nightly window it is today's hard stop; a manual run outside the
 * window gets the window's length, so a daytime dispatch is not stopped at once and never runs unbounded.
 */
export function deadlineFor(start: Date, window: Budget["window"]): Date {
  const toMin = (hhmm: string) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: window.timezone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(start);
  const local = Number(parts.find((p) => p.type === "hour")!.value) * 60 + Number(parts.find((p) => p.type === "minute")!.value);
  const stop = toMin(window.hard_stop_local);
  const length = (stop - toMin(window.start_local) + 1440) % 1440;
  const untilStop = (stop - local + 1440) % 1440;
  const minutes = Math.min(untilStop, length);
  return new Date(start.getTime() - (start.getTime() % 60_000) + minutes * 60_000);
}

export async function executePlan(o: ExecuteOptions): Promise<ExecutionReport> {
  const deadline = deadlineFor(o.started, o.budget.window);
  const r: ExecutionReport = {
    stop_reason: "done", deadline: deadline.toISOString(), items_touched: 0, stages_run: {}, advanced: 0, skipped: 0,
    failed_attempts: 0, failed_final: 0, no_handler: 0, held: 0, quota_charged: {}, regards: [], errors: [],
  };
  const every = o.budget.usage_guard.recheck_every_llm_calls;
  const callCount = o.callCount ?? (() => llmStats().calls);
  let guardedAt = callCount();
  const charge = (q: string | null, charged: Set<string>): boolean => {
    if (q === null || charged.has(q)) return true;
    if ((r.quota_charged[q] ?? 0) >= (o.quotas[q] ?? 0)) return false;
    r.quota_charged[q] = (r.quota_charged[q] ?? 0) + 1;
    charged.add(q);
    return true;
  };
  /** Run-level stop before starting a stage; null = carry on. */
  const runStop = async (): Promise<StopReason | null> => {
    if (o.clock().getTime() >= deadline.getTime()) return "hard-stop";
    const calls = callCount();
    if (o.quotas.llm_calls_max !== undefined && calls >= o.quotas.llm_calls_max) return "llm-calls-max";
    if (o.readUsage && every > 0 && calls - guardedAt >= every) {
      guardedAt = calls;
      const g = decideGuard(await o.readUsage(), o.budget);
      r.regards.push({ at_calls: calls, decision: g.decision, status: g.status });
      log.info(`re-guard at ${calls} calls: ${g.decision} (${g.status})`);
      if (g.decision === "skip") return "guard-skip";
    }
    return null;
  };

  const ctx: StageContext = { now: o.clock, manifest: o.manifest, dataDir: o.dataDir, contentDir: o.contentDir, mirrorsDir: o.mirrorsDir ?? "", sources: o.sources };
  const chargedBy = new Map<string, Set<string>>();
  const chargedOf = (id: string) => { let c = chargedBy.get(id); if (!c) chargedBy.set(id, (c = new Set())); return c; };
  const touched = new Set<string>();
  /** Items whose run ended this night (failed, held, skipped): never picked up again in the same run. */
  const ended = new Set<string>();
  let stop: StopReason | null = null;

  /** Record one item's outcome for one stage. Returns the item if it may continue with its next stage. */
  const settle = (item: ManifestItem, stage: Stage, out: StageResult | Error): ManifestItem | null => {
    const key = `${item.pillar}:${stage}`;
    if (out instanceof Error) {
      if (out instanceof LlmBudgetExhausted) { stop = "spend-cap"; log.info(out.message); return null; }
      if (out instanceof LlmInfraError) { stop = "aborted"; r.errors.push(`${item.id} ${stage}: ${out.message}`); return null; }
      ended.add(item.id);
      if (out instanceof StageHold) {
        r.held++;
        if (r.held === 1 || r.held % 25 === 0) r.errors.push(`held ${item.id} ${stage}: ${out.message.slice(0, 200)}`);
        return null;
      }
      const msg = String(out.message ?? out);
      const failed = fail(item, msg, o.budget.retry, o.clock());
      o.manifest.save(failed);
      if (failed.state === "failed") r.failed_final++; else r.failed_attempts++;
      r.errors.push(`${item.id} ${stage}: ${msg.slice(0, 300)}`);
      log.warn(`${item.id} ${stage} failed (attempt ${failed.attempts}): ${msg.slice(0, 200)}`);
      return null;
    }
    r.stages_run[key] = (r.stages_run[key] ?? 0) + 1;
    if (out.skip) { o.manifest.save(skip(item, out.skip)); r.skipped++; ended.add(item.id); return null; }
    const flags: string[] | undefined = out.flags?.length ? [...new Set([...(item.flags ?? []), ...out.flags])] : item.flags;
    const { meta: metaPatch, ...fieldPatch }: NonNullable<StageResult["patch"]> = out.patch ?? {};
    const next: ManifestItem = {
      ...advance(item, stage, out.data ?? {}, o.clock()), ...fieldPatch,
      ...(metaPatch ? { meta: { ...(item.meta ?? {}), ...metaPatch } } : {}),
      ...(out.output_hash ? { output_hash: out.output_hash } : {}), ...(flags ? { flags } : {}),
    };
    o.manifest.save(next);
    r.advanced++;
    return next;
  };
  const asError = (e: unknown) => (e instanceof Error ? e : new Error(String(e)));

  // Work queue shared by the workers: plan order first; items that finished a batch come back through `requeue`.
  const ids = o.work.map((w) => w.id);
  const position = new Map(ids.map((id, i) => [id, i]));
  let cursor = 0;
  const requeue: string[] = [];
  /** Items inside a batch in flight: no other worker may start them until the batch hands them back. */
  const inBatch = new Set<string>();
  /** Items a worker is running right now. */
  const active = new Set<string>();
  /** Items already handed to a worker or claimed by a batch: the cursor never hands them out again. */
  const visited = new Set<string>();
  const nextId = (): string | null => {
    if (requeue.length) return requeue.shift()!;
    while (cursor < ids.length) {
      const id = ids[cursor++];
      if (!ended.has(id) && !visited.has(id)) return id;
    }
    return null;
  };

  /** Run one item through every stage it can take now; batch peers are handed back through `requeue`. */
  const runItem = async (id: string): Promise<void> => {
    visited.add(id);
    let item: ManifestItem | null = o.manifest.get(id);
    if (!item) return;
    active.add(id);
    try {
      for (let stage: Stage | null = nextStage(item); item && stage && !stop; stage = item ? nextStage(item) : null) {
        const h = handlerFor(o.handlers, item);
        if (!h) { if (!touched.has(item.id)) r.no_handler++; break; }
        const s = await runStop();
        if (s) { stop ??= s; break; }
        const q = quotaFor(item.pillar, stage);
        if (!charge(q, chargedOf(item.id))) break;
        touched.add(item.id);
        if (h.run) {
          let out: StageResult | Error;
          try { out = await h.run(item, ctx); } catch (e) { out = asError(e); }
          item = settle(item, stage, out);
          continue;
        }
        // fill the batch with later planned items waiting for the same stage and handler
        const group: ManifestItem[] = [item];
        const from = (position.get(item.id) ?? -1) + 1;
        for (let j = Math.max(from, cursor); j < ids.length && group.length < h.batch!.size; j++) {
          const pid = ids[j];
          if (ended.has(pid) || visited.has(pid)) continue;
          const peer = o.manifest.get(pid);
          if (!peer || peer.pillar !== item.pillar || nextStage(peer) !== stage || handlerFor(o.handlers, peer)?.batch?.run !== h.batch!.run) continue;
          if (!charge(q, chargedOf(pid))) break;
          touched.add(pid);
          inBatch.add(pid);
          visited.add(pid);
          group.push(peer);
        }
        let results: Map<string, StageResult | Error>;
        try { results = await h.batch!.run(group, ctx); } catch (e) { results = new Map(group.map((g) => [g.id, asError(e)])); }
        let mine: ManifestItem | null = null;
        for (const g of group) {
          const after = stop ? null : settle(g, stage, results.get(g.id) ?? new Error("batch returned no result for this item"));
          if (g.id === item.id) mine = after;
          else { inBatch.delete(g.id); if (after && !stop) requeue.push(g.id); }
        }
        item = mine;
      }
    } finally {
      active.delete(id);
    }
  };

  const workers = Math.max(1, Math.floor(o.concurrency ?? 1));
  await Promise.all(Array.from({ length: workers }, async () => {
    for (let id = nextId(); id && !stop; id = nextId()) await runItem(id);
  }));
  if (stop) r.stop_reason = stop;
  r.items_touched = touched.size;
  return r;
}
