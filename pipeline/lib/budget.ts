/**
 * Budget guard: reads the Claude plan's live usage windows and decides go / skip / reduced (PLAN 4.5, D06).
 *
 * Contract mirrors Jarvis spec 644 (same subscription, same thresholds): one GET to the OAuth usage endpoint,
 * 10 s timeout, no retries. `utilization` is a percentage 0-100. A window at or above its limit binds.
 * The setup-token used for `claude -p` lacks scope user:profile (403), so the guard needs its own
 * login-scoped token (BCOBS_USAGE_OAUTH_TOKEN). Unreadable usage never blocks a run: it runs reduced.
 * The token value never appears in any result, log line or error.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Budget } from "./config.js";

export const PLAN_USAGE_URL = "https://api.anthropic.com/api/oauth/usage";
export const USAGE_BETA_HEADER = "oauth-2025-04-20";

export interface PlanUsage {
  fiveHourPct: number;
  fiveHourResetsAt: string | null;
  sevenDayPct: number;
  sevenDayResetsAt: string | null;
  readAt: string;
}
export type UnavailableKind = "not_configured" | "scope" | "http" | "network" | "malformed";
export interface PlanUsageUnavailable { unavailable: UnavailableKind; detail: string }

export interface UsageDeps {
  token: string | undefined;
  fetch: typeof fetch;
  now: () => Date;
  timeoutMs?: number;
}

export async function readPlanUsage(deps: UsageDeps): Promise<PlanUsage | PlanUsageUnavailable> {
  if (!deps.token) return { unavailable: "not_configured", detail: "BCOBS_USAGE_OAUTH_TOKEN unset" };
  let res: Response;
  try {
    res = await deps.fetch(PLAN_USAGE_URL, {
      method: "GET",
      headers: { Authorization: `Bearer ${deps.token}`, "anthropic-beta": USAGE_BETA_HEADER },
      signal: AbortSignal.timeout(deps.timeoutMs ?? 10_000),
    });
  } catch (e) {
    return { unavailable: "network", detail: redact(String((e as Error)?.message ?? e), deps.token) };
  }
  const body = await res.text().catch(() => "");
  if (!res.ok) {
    if (res.status === 403 && body.includes("user:profile")) {
      return { unavailable: "scope", detail: "token lacks scope user:profile (a setup-token cannot read usage)" };
    }
    return { unavailable: "http", detail: `HTTP ${res.status}` };
  }
  let json: any;
  try { json = JSON.parse(body); } catch { return { unavailable: "malformed", detail: "response is not JSON" }; }
  const five = json?.five_hour?.utilization, seven = json?.seven_day?.utilization;
  if (typeof five !== "number" || typeof seven !== "number") {
    return { unavailable: "malformed", detail: "five_hour.utilization or seven_day.utilization missing" };
  }
  const resets = (v: unknown) => (typeof v === "string" ? v : null);
  return {
    fiveHourPct: five, fiveHourResetsAt: resets(json.five_hour.resets_at),
    sevenDayPct: seven, sevenDayResetsAt: resets(json.seven_day.resets_at),
    readAt: deps.now().toISOString(),
  };
}

export type GuardStatus = "ok" | "over_5h" | "over_7d" | `unavailable:${UnavailableKind}`;
export interface GuardDecision {
  decision: "go" | "skip" | "reduced";
  status: GuardStatus;
  five_hour: number | null;
  seven_day: number | null;
  resets_at: string | null;
  /** Percentage points left before the nearer limit; null when usage is unreadable. */
  headroom: number | null;
  /** Multiplier for LLM quotas this run (0 when skipping). */
  factor: number;
  /** Only schema-bound fact extraction (Haiku) may run. */
  facts_only: boolean;
  detail?: string;
}

export function decideGuard(usage: PlanUsage | PlanUsageUnavailable, cfg: Pick<Budget, "usage_guard" | "headroom_scale" | "reduced_factor">): GuardDecision {
  if ("unavailable" in usage) {
    const skip = cfg.usage_guard.on_unavailable === "skip";
    return {
      decision: skip ? "skip" : "reduced", status: `unavailable:${usage.unavailable}`, five_hour: null, seven_day: null,
      resets_at: null, headroom: null, factor: skip ? 0 : cfg.reduced_factor, facts_only: false, detail: usage.detail,
    };
  }
  const { max_5h_pct, max_7d_pct } = cfg.usage_guard;
  const over5 = usage.fiveHourPct >= max_5h_pct;
  const over7 = usage.sevenDayPct >= max_7d_pct;
  const base = { five_hour: usage.fiveHourPct, seven_day: usage.sevenDayPct };
  if (over5 || over7) {
    const candidates = [over5 ? usage.fiveHourResetsAt : null, over7 ? usage.sevenDayResetsAt : null].filter((x): x is string => !!x);
    const resets = candidates.sort((a, b) => Date.parse(b) - Date.parse(a))[0] ?? null; // the later reset binds
    return { decision: "skip", status: over7 ? "over_7d" : "over_5h", ...base, resets_at: resets, headroom: 0, factor: 0, facts_only: false };
  }
  const headroom = Math.min(max_5h_pct - usage.fiveHourPct, max_7d_pct - usage.sevenDayPct);
  const step = [...cfg.headroom_scale].sort((a, b) => b.min_headroom_pct - a.min_headroom_pct).find((s) => headroom >= s.min_headroom_pct);
  return {
    decision: "go", status: "ok", ...base, resets_at: null, headroom,
    factor: step?.factor ?? 0, facts_only: step?.facts_only ?? true,
  };
}

/** Quotas that cost LLM calls scale with the guard; deterministic work (captions, code jobs) does not. */
export const LLM_QUOTAS = new Set(["video_extract", "docs", "posts", "guidelines", "hub_refresh", "opus_reviews", "llm_calls_max"]);

export function scaleQuotas(quotas: Record<string, number>, g: Pick<GuardDecision, "factor" | "facts_only">): Record<string, number> {
  const out: Record<string, number> = {};
  for (const [k, v] of Object.entries(quotas)) {
    if (!LLM_QUOTAS.has(k)) { out[k] = v; continue; }
    if (g.facts_only && (k === "hub_refresh" || k === "opus_reviews")) { out[k] = 0; continue; }
    out[k] = g.factor > 0 ? Math.max(1, Math.floor(v * g.factor)) : 0;
  }
  return out;
}

function redact(text: string, token: string): string {
  return token ? text.split(token).join("[redacted]") : text;
}

// ---------------------------------------------------------------------------------------------------------
// Own metering (D17). The usage guard sees the whole plan but has no durable token yet; metering works today
// from each `claude -p` envelope (total_cost_usd, API-equivalent dollars) but sees only our own calls.
// Caps are soft by at most the calls in flight (each is bounded by models.json max_budget_usd_per_call).

export interface SpendCaps { night_usd: number; week_usd: number }
export interface SpendHistory {
  /** Spent earlier on the same run date (a manual re-run overwrites that report, so its spend carries over). */
  today_usd: number;
  /** Spent on the six run dates before today: with today, a rolling seven-day window. */
  week_before_usd: number;
}
export interface SpendAllowance extends SpendHistory {
  night_cap_usd: number;
  week_cap_usd: number;
  /** Dollars this run may still spend; 0 means no LLM call may start. */
  allowance_usd: number;
  binding: "night" | "week";
}

/** Day total recorded in a run report: day_cost_usd when present, else the run's own cost (M0 reports). */
export function reportSpend(report: any): number {
  const v = report?.llm?.day_cost_usd ?? report?.llm?.cost_usd;
  return typeof v === "number" && Number.isFinite(v) ? v : 0;
}

/** Sum spend from the committed run reports (data/manifest/_runs/<date>.json). Unreadable reports count as 0. */
export function readSpendHistory(runsDir: string, date: string, days = 7): SpendHistory {
  const read = (d: string) => {
    const p = join(runsDir, `${d}.json`);
    if (!existsSync(p)) return 0;
    try { return reportSpend(JSON.parse(readFileSync(p, "utf8"))); } catch { return 0; }
  };
  let week = 0;
  for (let i = 1; i < days; i++) week += read(shiftDate(date, -i));
  return { today_usd: read(date), week_before_usd: week };
}

export function spendAllowance(caps: SpendCaps, h: SpendHistory): SpendAllowance {
  const night = caps.night_usd - h.today_usd;
  const week = caps.week_usd - h.week_before_usd - h.today_usd;
  return {
    ...h, night_cap_usd: caps.night_usd, week_cap_usd: caps.week_usd,
    allowance_usd: round(Math.max(0, Math.min(night, week))), binding: week < night ? "week" : "night",
  };
}

function shiftDate(date: string, days: number): string {
  const t = Date.parse(`${date}T00:00:00Z`) + days * 86_400_000;
  return new Date(t).toISOString().slice(0, 10);
}
const round = (n: number) => Math.round(n * 1e6) / 1e6;
