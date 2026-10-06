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
 */
import type { Budget } from "../lib/config.js";
import { decideGuard, type GuardDecision, type PlanUsage, type PlanUsageUnavailable } from "../lib/budget.js";
import { LlmBudgetExhausted, LlmInfraError, llmStats } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import { advance, fail, nextStage, skip, type Manifest, type ManifestItem, type Pillar, type Stage } from "../lib/manifest.js";
import { quotaFor, type PlannedWork } from "../lib/queue.js";

const log = logger("execute");

export interface StageResult {
  /** Stored on the stage record (counts, artifact paths, prompt version, ...). */
  data?: Record<string, unknown>;
  output_hash?: string;
  /** Adds flags (e.g. quote-check failures) so the item routes through Opus review. */
  flags?: string[];
  /** Ends the item as skipped (e.g. "no-captions") instead of advancing. */
  skip?: string;
}
export interface StageContext { now: () => Date; manifest: Manifest }
export type StageHandler = (item: ManifestItem, ctx: StageContext) => Promise<StageResult>;
export type StageHandlers = Partial<Record<Pillar, Partial<Record<Stage, StageHandler>>>>;

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
  quota_charged: Record<string, number>;
  regards: { at_calls: number; decision: GuardDecision["decision"]; status: string }[];
  errors: string[];
}
export interface ExecuteOptions {
  work: PlannedWork[];
  quotas: Record<string, number>;
  budget: Pick<Budget, "window" | "usage_guard" | "headroom_scale" | "reduced_factor" | "retry">;
  manifest: Manifest;
  handlers: StageHandlers;
  started: Date;
  clock: () => Date;
  /** Absent = no re-guard (guard disabled for this run). */
  readUsage?: () => Promise<PlanUsage | PlanUsageUnavailable>;
  /** LLM CLI calls so far; defaults to llmStats().calls. */
  callCount?: () => number;
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
    failed_attempts: 0, failed_final: 0, no_handler: 0, quota_charged: {}, regards: [], errors: [],
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

  outer: for (const w of o.work) {
    let item: ManifestItem | null = o.manifest.get(w.id);
    if (!item) continue;
    const charged = new Set<string>();
    let touched = false;
    for (let stage: Stage | null = nextStage(item); stage; stage = nextStage(item)) {
      const handler: StageHandler | undefined = o.handlers[item.pillar]?.[stage];
      if (!handler) { if (!touched) r.no_handler++; break; }
      const stop = await runStop();
      if (stop) { r.stop_reason = stop; break outer; }
      if (!charge(quotaFor(item.pillar, stage), charged)) break;
      touched = true;
      const key = `${item.pillar}:${stage}`;
      try {
        const res: StageResult = await handler(item, { now: o.clock, manifest: o.manifest });
        r.stages_run[key] = (r.stages_run[key] ?? 0) + 1;
        if (res.skip) {
          item = skip(item, res.skip);
          o.manifest.save(item);
          r.skipped++;
          break;
        }
        const flags: string[] | undefined = res.flags?.length ? [...new Set([...(item.flags ?? []), ...res.flags])] : item.flags;
        item = { ...advance(item, stage, res.data ?? {}, o.clock()), ...(res.output_hash ? { output_hash: res.output_hash } : {}), ...(flags ? { flags } : {}) };
        o.manifest.save(item);
        r.advanced++;
      } catch (e) {
        if (e instanceof LlmBudgetExhausted) { r.stop_reason = "spend-cap"; log.info(e.message); break outer; }
        if (e instanceof LlmInfraError) { r.stop_reason = "aborted"; r.errors.push(`${item.id} ${stage}: ${e.message}`); break outer; }
        const msg = String((e as Error)?.message ?? e);
        item = fail(item, msg, o.budget.retry, o.clock());
        o.manifest.save(item);
        if (item.state === "failed") r.failed_final++; else r.failed_attempts++;
        r.errors.push(`${item.id} ${stage}: ${msg.slice(0, 300)}`);
        log.warn(`${item.id} ${stage} failed (attempt ${item.attempts}): ${msg.slice(0, 200)}`);
        break;
      }
    }
    if (touched) r.items_touched++;
  }
  return r;
}
