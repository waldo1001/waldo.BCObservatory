/**
 * Nightly orchestrator (PLAN 4.3): lock, recover a killed run, usage guard, spend allowance (D17), deterministic
 * ingest, newest-first plan, stage execution within quotas (execute.ts), run report, commit, push.
 * A budget skip still writes and commits the run report: that heartbeat keeps the schedule alive.
 *
 *   npm run nightly -- [--dry-run] [--commit] [--push] [--no-guard] [--stages ingest|all]
 *                      [--pillars docs,video] [--only source-id,...] [--data-dir path] [--quota N]
 *
 * --quota N caps every item quota at N (verification runs, e.g. two videos end to end).
 *
 * --dry-run never commits, sets LLM_CACHE_ONLY=1 and writes into a temp data dir unless --data-dir is given.
 */
import { existsSync, readdirSync, statSync, unlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import {
  decideGuard, readPlanUsage, readSpendHistory, scaleQuotas, spendAllowance,
  type GuardDecision, type PlanUsage, type PlanUsageUnavailable, type SpendAllowance,
} from "../lib/budget.js";
import { budget, loadConfig, loadSources, type SourceDef } from "../lib/config.js";
import { writeJson } from "../lib/fsx.js";
import { git } from "../lib/git.js";
import { httpGet, type HttpGet } from "../lib/http.js";
import { llmStats, setSpendLimit } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import { Manifest, skip, type Pillar } from "../lib/manifest.js";
import { CACHE_DIR, DATA_DIR, ROOT } from "../lib/paths.js";
import { planQueue } from "../lib/queue.js";
import { validateOrThrow } from "../lib/schema.js";
import { knownHosts, runIngest } from "../ingest/index.js";
import type { IngestContext, VersionsConfig } from "../ingest/types.js";
import { executePlan, type ExecutionReport, type StageHandlers } from "./execute.js";
import { acquireLock } from "./lock.js";
import { PIPELINE_VERSION } from "../version.js";
import { STAGE_HANDLERS } from "./stages.js";
import { renderVideoIndex } from "../render/video.js";

const log = logger("nightly");
export { PIPELINE_VERSION };

export interface NightlyOptions {
  dryRun: boolean;
  commit: boolean;
  push: boolean;
  guard: boolean;
  stages: "ingest" | "all";
  pillars?: Pillar[];
  only?: string[];
  /** Caps every item quota (not llm_calls_max) at this number. */
  quota?: number;
  dataDir: string;
  /** Generated pages; defaults to <repoDir>/content (a sibling of the temp data dir for --dry-run). */
  contentDir?: string;
  cacheDir: string;
  repoDir: string;
  now?: Date;
}
export interface NightlyDeps {
  http: HttpGet;
  readUsage: () => Promise<PlanUsage | PlanUsageUnavailable>;
  sources: SourceDef[];
  repoUrl?: (repo: string) => string;
  /** Stage handlers; defaults to STAGE_HANDLERS. */
  handlers?: StageHandlers;
  /** Wall clock for the hard stop; defaults to real time. */
  clock?: () => Date;
}
type GuardReport = Omit<GuardDecision, "decision"> & { decision: GuardDecision["decision"] | "disabled" };
export interface RunReport {
  date: string; started_at: string; finished_at: string;
  status: "ok" | "partial" | "skipped-budget" | "aborted" | "dry-run";
  pipeline: string; runner: Record<string, string>; guard: GuardReport;
  ingest: { sources: unknown[]; totals: Record<string, number> };
  plan: { quotas: Record<string, number>; work: number; executed: number; skips?: number; quota_use?: unknown; note?: string };
  llm: ReturnType<typeof llmStats> & { day_cost_usd?: number };
  /** Own metering (D17): caps, spend before this run, and what this run was allowed to spend. */
  spend?: SpendAllowance & { exhausted: boolean };
  execution?: ExecutionReport;
  items_changed: number; errors: string[];
}

/** Calendar date of the run in the budget window's timezone (the nightly starts after local midnight). */
export function runDate(now: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

export async function runNightly(opts: NightlyOptions, deps: NightlyDeps): Promise<RunReport> {
  const release = acquireLock(resolve(opts.cacheDir, "nightly.lock"));
  try {
    return await run(opts, deps);
  } finally {
    release();
  }
}

async function run(opts: NightlyOptions, deps: NightlyDeps): Promise<RunReport> {
  const started = new Date();
  const now = opts.now ?? started;
  const cfg = budget();
  const date = runDate(now, cfg.window.timezone);
  const errors: string[] = [];
  const spend = spendAllowance(cfg.spend_caps, readSpendHistory(resolve(opts.dataDir, "manifest", "_runs"), date));
  setSpendLimit(spend.allowance_usd);
  log.info(`spend: $${spend.allowance_usd} allowed (${spend.binding} cap binds)`, { today: spend.today_usd, week_before: spend.week_before_usd });
  if (opts.commit && (await recoverPartialRun(opts.repoDir))) log.warn("committed leftovers of a killed run");

  const guard: GuardReport = opts.guard
    ? decideGuard(await deps.readUsage(), cfg)
    : { decision: "disabled", status: "ok", five_hour: null, seven_day: null, resets_at: null, headroom: null, factor: 1, facts_only: false };
  log.info(`guard: ${guard.decision} (${guard.status})`, { five_hour: guard.five_hour, seven_day: guard.seven_day, factor: guard.factor });

  const report: RunReport = {
    date, started_at: started.toISOString(), finished_at: started.toISOString(), status: "ok", pipeline: PIPELINE_VERSION,
    runner: { node: process.version, ...(process.env.RUNNER_NAME ? { runner_name: process.env.RUNNER_NAME } : {}) },
    guard, ingest: { sources: [], totals: {} }, plan: { quotas: {}, work: 0, executed: 0 },
    llm: llmStats(), spend: { ...spend, exhausted: spend.allowance_usd <= 0 }, items_changed: 0, errors,
  };
  const manifest = new Manifest(resolve(opts.dataDir, "manifest"));

  if (guard.decision === "skip") {
    report.status = "skipped-budget";
    return finish(report, opts);
  }

  const ctx: IngestContext = {
    manifest, http: deps.http, now, mirrorsDir: resolve(opts.cacheDir, "git-mirrors"), roadmapDir: resolve(opts.dataDir, "roadmap"),
    repoUrl: deps.repoUrl ?? ((repo) => `https://github.com/${repo}`), knownHosts: knownHosts(deps.sources),
    versions: loadConfig<VersionsConfig>("versions"),
  };
  const results = await runIngest(deps.sources, ctx, { pillars: opts.pillars, only: opts.only });
  const totals: Record<string, number> = { sources: results.length, failed: 0, deferred: 0 };
  for (const r of results) {
    for (const [k, v] of Object.entries(r.counts)) totals[k] = (totals[k] ?? 0) + v;
    if (!r.ok) { totals.failed++; errors.push(`${r.id}: ${r.error}`); }
    if (r.deferred) totals.deferred++;
    log.info(`${r.ok ? "ok  " : "FAIL"} ${r.id}: ${r.note ?? r.error ?? ""}`, r.counts);
  }
  report.ingest = { sources: results, totals };
  report.items_changed = (totals.new ?? 0) + (totals.changed ?? 0);

  if (opts.stages === "all") {
    const quotas = capQuotas(scaleQuotas(cfg.quotas, guard), opts.quota);
    const plan = planQueue(manifest.list().filter((i) => (!opts.pillars || opts.pillars.includes(i.pillar)) && (!opts.only || opts.only.includes(i.source))), quotas, new Map(deps.sources.map((s) => [s.id, s])), now);
    for (const s of plan.skips) {
      const item = manifest.get(s.id);
      if (item) manifest.save(skip(item, s.reason));
    }
    const execution = await executePlan({
      work: plan.work, quotas, budget: cfg, manifest, dataDir: opts.dataDir, contentDir: contentDirOf(opts),
      sources: new Map(deps.sources.map((s) => [s.id, s])), handlers: deps.handlers ?? STAGE_HANDLERS,
      started, clock: deps.clock ?? (() => new Date()), readUsage: opts.guard ? deps.readUsage : undefined,
    });
    report.execution = execution;
    renderVideoIndex(contentDirOf(opts));
    errors.push(...execution.errors);
    report.plan = {
      quotas, work: plan.work.length, executed: execution.items_touched, skips: plan.skips.length, quota_use: plan.quota_use,
      note: `stopped: ${execution.stop_reason}`,
    };
  } else {
    report.plan = { quotas: {}, work: 0, executed: 0, note: "ingest only" };
  }

  report.llm = llmStats();
  if (opts.dryRun) report.status = "dry-run";
  else if (report.execution?.stop_reason === "aborted") report.status = "aborted";
  else if (results.length && totals.failed === results.length) report.status = "aborted";
  else if (totals.failed) report.status = "partial";
  return finish(report, opts);
}

async function finish(report: RunReport, opts: NightlyOptions): Promise<RunReport> {
  report.finished_at = new Date().toISOString();
  report.llm = { ...llmStats(), day_cost_usd: round6((report.spend?.today_usd ?? 0) + llmStats().cost_usd) };
  if (report.spend) report.spend.exhausted ||= report.spend.allowance_usd - report.llm.cost_usd <= 0;
  validateOrThrow("run-report", report, `run report ${report.date}`);
  writeJson(resolve(opts.dataDir, "manifest", "_runs", `${report.date}.json`), report);
  log.info(`run report: ${report.status}, ${report.items_changed} items new or changed`);
  if (opts.commit && !opts.dryRun) {
    const label = report.status === "skipped-budget" ? `0 items, skipped-budget` : `${report.items_changed} items`;
    await commitAndPush(opts.repoDir, `content: nightly ${report.date} (${label})`, opts.push, report);
  }
  return report;
}

export function capQuotas(quotas: Record<string, number>, cap?: number): Record<string, number> {
  if (cap === undefined) return quotas;
  return Object.fromEntries(Object.entries(quotas).map(([k, v]) => [k, k === "llm_calls_max" ? v : Math.min(v, cap)]));
}
/** Where pages go: explicit, else next to a non-default data dir (dry runs, tests), else <repo>/content. */
export function contentDirOf(opts: Pick<NightlyOptions, "contentDir" | "dataDir" | "repoDir">): string {
  if (opts.contentDir) return opts.contentDir;
  return resolve(opts.dataDir) === resolve(opts.repoDir, "data") ? resolve(opts.repoDir, "content") : resolve(opts.dataDir, "..", "content");
}
const round6 = (n: number) => Math.round(n * 1e6) / 1e6;
const TRACKED = ["data", "content"];

/** A killed run leaves written-but-uncommitted files (all writes are temp-then-rename): drop temp files, commit the rest. */
export async function recoverPartialRun(repoDir: string): Promise<boolean> {
  const dirs = TRACKED.filter((d) => existsSync(join(repoDir, d)));
  if (!dirs.length) return false;
  if (!(await git(["status", "--porcelain", "--", ...dirs], repoDir)).trim()) return false;
  for (const d of dirs) removeTempFiles(join(repoDir, d));
  await git(["add", "-A", "--", ...dirs], repoDir);
  if (!(await git(["diff", "--cached", "--name-only"], repoDir)).trim()) return false;
  await git(["commit", "-q", "-m", "content: recover partial run"], repoDir);
  return true;
}

async function commitAndPush(repoDir: string, message: string, push: boolean, report: RunReport): Promise<void> {
  const dirs = TRACKED.filter((d) => existsSync(join(repoDir, d)));
  await git(["add", "-A", "--", ...dirs], repoDir);
  if ((await git(["diff", "--cached", "--name-only"], repoDir)).trim()) {
    await git(["commit", "-q", "-m", message], repoDir);
    log.info(`committed: ${message}`);
  }
  if (!push) return;
  try {
    await git(["push", "-q", "origin", "HEAD:main"], repoDir);
  } catch {
    log.warn("push rejected; rebasing on origin/main and retrying once");
    await git(["pull", "-q", "--rebase", "origin", "main"], repoDir);
    await git(["push", "-q", "origin", "HEAD:main"], repoDir);
  }
  log.info(`pushed (${report.status})`);
}

function removeTempFiles(dir: string): void {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) removeTempFiles(p);
    else if (name.endsWith(".tmp")) unlinkSync(p);
  }
}

// ---------------------------------------------------------------------------------------------------------- CLI

export function parseArgs(argv: string[]): NightlyOptions {
  const has = (f: string) => argv.includes(f);
  const val = (f: string) => { const i = argv.indexOf(f); return i >= 0 ? argv[i + 1] : undefined; };
  const list = (f: string) => val(f)?.split(",").map((s) => s.trim()).filter(Boolean);
  const dryRun = has("--dry-run");
  const stages = val("--stages") ?? "all";
  if (stages !== "ingest" && stages !== "all") throw new Error(`--stages must be ingest or all, got ${stages}`);
  return {
    dryRun, commit: has("--commit") && !dryRun, push: has("--push") && !dryRun, guard: !has("--no-guard"), stages,
    pillars: list("--pillars") as Pillar[] | undefined, only: list("--only"),
    ...(val("--quota") !== undefined ? { quota: Number(val("--quota")) } : {}),
    dataDir: resolve(val("--data-dir") ?? (dryRun ? join(tmpdir(), "bc-observatory-dry-run", "data") : DATA_DIR)),
    cacheDir: CACHE_DIR, repoDir: ROOT,
  };
}

async function main(): Promise<void> {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.dryRun) process.env.LLM_CACHE_ONLY = "1";
  if (opts.dryRun) log.info(`dry run: data dir ${opts.dataDir}`);
  const report = await runNightly(opts, {
    http: httpGet, sources: loadSources(),
    readUsage: () => readPlanUsage({ token: process.env.BCOBS_USAGE_OAUTH_TOKEN, fetch, now: () => new Date() }),
  });
  process.exit(report.status === "aborted" ? 1 : 0);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((e) => { log.error(`aborted: ${(e as Error).stack ?? e}`); process.exit(1); });
}
