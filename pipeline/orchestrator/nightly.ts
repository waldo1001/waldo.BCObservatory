/**
 * Nightly orchestrator (PLAN 4.3): lock, recover a killed run, usage guard, spend allowance (D17), deterministic
 * ingest, newest-first plan, stage execution within quotas (execute.ts), run report, commit, push.
 * A budget skip still writes and commits the run report: that heartbeat keeps the schedule alive.
 *
 *   npm run nightly -- [--dry-run] [--commit] [--push] [--no-guard] [--stages ingest|all]
 *                      [--pillars docs,video] [--only source-id,...] [--data-dir path] [--quota N]
 *
 * --quota N caps every item quota at N (verification runs, e.g. two videos end to end).
 * --night-cap USD / --week-cap USD replace the spend caps for this run only (owner-requested catch-up runs);
 *   the run report records the override. The scheduled nightly never passes them.
 * --concurrency N overrides config/budget.json concurrency (items and hub calls in flight at once).
 * --scheduled marks a cron-triggered run: outside the night window and outside catch-up it exits at once (D41).
 * Catch-up (config/budget.json catch_up.until, D41): until that run date every run behaves as --unlimited.
 * --unlimited (owner-requested catch-up runs): every quota and both spend caps are set to UNLIMITED; the run still
 *   stops at its time window, at a subscription limit (LlmInfraError) and through the usage guard when it can read
 *   usage. The run report shows the quotas and the cap override. The scheduled nightly never passes it.
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
import { captionRetryDue, leakRetryDue, Manifest, reviveForCaptions, reviveFromLeak, skip, type Pillar } from "../lib/manifest.js";
import { CACHE_DIR, DATA_DIR, ROOT, VAULT_DIR } from "../lib/paths.js";
import { checkLeak, type LeakReport } from "../validate/leak.js";
import { validateContent } from "../validate/content.js";
import { planQueue, type PlannedWork } from "../lib/queue.js";
import { mirrorFor, prefetchBlobs } from "../fetch/git-page.js";
import { validateOrThrow } from "../lib/schema.js";
import { knownHosts, runIngest } from "../ingest/index.js";
import type { IngestContext, VersionsConfig } from "../ingest/types.js";
import type { CallGraphRun } from "../code/callgraph.js";
import { executePlan, handlerFor, heapAbove, type ExecutionReport, type StageHandlers } from "./execute.js";
import { acquireLock } from "./lock.js";
import { PIPELINE_VERSION } from "../version.js";
import { STAGE_HANDLERS } from "./stages.js";
import { renderVideoIndex, rerenderVideoPages } from "../render/video.js";
import { pendingMentionPages, pendingPreviewPages, renderPostIndex, rerenderPostPages } from "../render/post.js";
import { refreshChannels, refreshPreviews, writeIcons } from "../extract/preview-probe.js";
import { relinkChanges, renderChangeIndex, renderChangesByObject, rerenderChangePages } from "../render/change.js";
import { narrateChangeWeeks } from "../summarize/changes-week.js";
import { refreshFileIndex } from "../code/files-index.js";
import { githubCalls } from "../lib/github.js";
import { renderSearchIndex } from "../render/search.js";
import { renderObjectsIndex } from "../render/objects-index.js";
import { renderDigests } from "../render/digest.js";
import { renderGraph } from "../link/graph.js";
import { renderSourcesAndCoverage } from "../render/source.js";
import { renderTopics } from "../render/topic.js";
import { renderFeatureIndex, rerenderFeaturePages } from "../render/feature.js";
import { linkRoadmap, type LinkRun } from "../link/roadmap.js";
import { linkTopics, type TopicLinkRun } from "../link/topics.js";
import { reviewTopicLinks, type TopicReviewRun } from "../review/topics.js";
import { refreshCodeDerived, type CodeDerivedRun } from "../code/diff.js";
import { isSkeleton } from "../code/job.js";
import { refreshDocsObjects } from "../code/docs-objects.js";
import { renderCodePages, type CodePagesRun } from "../render/object.js";
import { renderAppPages, type AppPagesRun } from "../render/app.js";
import { refreshRelated, type RelatedRun } from "../link/related.js";
import { refreshLocalizationNarratives, type LocalizationRun } from "../summarize/localization.js";
import { reviewCoverage, type CoverageReviewRun } from "../review/coverage.js";
import { buildTopicHubs, mirrorReader } from "../link/toc.js";
import { refreshNarratives } from "../summarize/hub.js";
import { reviewHubs } from "../review/hub.js";
import { reviewDigestNarratives, reviewLocalizationNarratives, type NarrativeReviewRun } from "../review/narrative.js";
import { channelAvatar, flatPlaylist } from "../caption/ytdlp.js";
// D77 review coverage (part B): video backlog, post and change reviews
import { restoreVideoBacklog, rewindVideoBacklog } from "../review/video.js";
import { runContentReviews, videoReviewCounts, type ReviewsReport } from "../review/coverage-run.js";

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
  /** Replaces config/budget.json spend_caps for this run only. */
  capOverride?: { night_usd?: number; week_usd?: number };
  /** Quotas and spend caps set to UNLIMITED for this run (owner-requested catch-up). */
  unlimited?: boolean;
  /** Triggered by the workflow's cron (not a manual dispatch). */
  scheduled?: boolean;
  /** Catch-up on or off for this run; undefined = from config/budget.json catch_up.until (D41). */
  catchUp?: boolean;
  /** Items in flight at once; defaults to config/budget.json concurrency. */
  concurrency?: number;
  dataDir: string;
  /** Generated pages; defaults to <repoDir>/content (a sibling of the temp data dir for --dry-run). */
  contentDir?: string;
  cacheDir: string;
  repoDir: string;
  /** Private vault checkout for the leak scan; defaults to VAULT_DIR. */
  vaultDir?: string;
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
  /** Channel listing for the weekly reconcile; defaults to yt-dlp. */
  flatPlaylist?: IngestContext["flatPlaylist"];
  /** Heap check before each stage; defaults to heapAbove(budget memory_stop_fraction). */
  heapFull?: () => boolean;
  /** A channel's avatar (D60 phase 2); without it the run asks no channel (tests, runs without yt-dlp). */
  channelAvatar?: (channelId: string) => Promise<string | null>;
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
  spend?: SpendAllowance & { exhausted: boolean; override?: boolean };
  execution?: ExecutionReport;
  roadmap_links?: Omit<LinkRun, "errors"> & { pages: number; review?: Omit<CoverageReviewRun, "errors"> };
  topic_links?: Omit<TopicLinkRun, "errors">;
  topic_reviews?: Omit<TopicReviewRun, "errors">;
  /** D77: Opus reviews of the localization and digest narratives (quota opus_reviews, shared with the hubs). */
  narrative_reviews?: { localization?: Omit<NarrativeReviewRun, "errors">; digest?: Omit<NarrativeReviewRun, "errors"> };
  hubs?: { topics: number; narrated: number; refreshed: number; failed: number; backlog: number; stopped: string; reviewed?: number; review_fixed?: number; review_rejected?: number; review_backlog?: number };
  /** Code diffs, timelines and deprecation radar recomputed from the snapshots (D26). */
  code?: CodeDerivedRun & { docs_objects?: ReturnType<typeof refreshDocsObjects>; pages?: CodePagesRun; related?: RelatedRun; apps?: AppPagesRun; narratives?: Omit<LocalizationRun, "errors">; graph?: { runs: Omit<CallGraphRun, "key">[] } };
  /** Run date up to which catch-up mode (no quotas, no caps) is on, when this run used it (D41). */
  catch_up?: string;
  /** Checkpoint commits made during stage execution (D26). */
  checkpoints?: number;
  /** check:leak before the commit (D08); findings block the commit. */
  leak?: { vault: LeakReport["vault"]; raw_docs: number; files_scanned: number; findings: number; blocked: boolean };
  /** no-captions videos put back in the queue this run (weekly, CAPTION_RETRIES times). */
  captions_retried?: number;
  /** validate:content after rendering; reported, never blocks the commit (renderers schema-check as they write). */
  content?: { pages: number; errors: number };
  /** The preview probe (D60): posts probed for framing and card fields; hosts that stopped allowing framing. */
  previews?: { probed: number; refreshed: number; failed: number; rerendered: number; flipped: string[]; channels?: number };
  /** The change pillar (D61): pull requests fetched, skipped as non-code, planned but not reached, pages, relinked, GitHub calls. */
  changes?: { fetched: number; skipped_non_code: number; held: number; pages: number; relinked: number; rerendered: number; api_calls: number; narrated?: number };
  items_changed: number; errors: string[];
  /** D77 review coverage: Opus reviews of videos (the `reviewed` stage), posts and changes (phases after linking). */
  reviews?: ReviewsReport;
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

async function run(opts0: NightlyOptions, deps: NightlyDeps): Promise<RunReport> {
  let opts = opts0;
  const started = new Date();
  const now = opts.now ?? started;
  const cfg = budget();
  const date = runDate(now, cfg.window.timezone);
  const errors: string[] = [];
  // D41 catch-up: until the configured run date every run is unlimited, unless this run set its own caps
  const catchUp = (opts.catchUp ?? (!!cfg.catch_up?.until && date <= cfg.catch_up.until)) && !opts.capOverride && !opts.dryRun;
  if (catchUp) { opts = { ...opts, unlimited: true, capOverride: { night_usd: UNLIMITED, week_usd: UNLIMITED } }; log.warn(`catch-up mode until ${cfg.catch_up?.until ?? date}: no quotas, no spend caps`); }
  const caps = { ...cfg.spend_caps, ...(opts.capOverride ?? {}) };
  const spend = spendAllowance(caps, readSpendHistory(resolve(opts.dataDir, "manifest", "_runs"), date));
  if (opts.capOverride) log.warn(`spend caps overridden for this run: night $${caps.night_usd}, week $${caps.week_usd}`);
  setSpendLimit(spend.allowance_usd);
  log.info(`spend: $${spend.allowance_usd} allowed (${spend.binding} cap binds)`, { today: spend.today_usd, week_before: spend.week_before_usd });
  if (opts.commit && (await recoverPartialRun(opts.repoDir, () => leakGate(opts, deps.sources)))) log.warn("committed leftovers of a killed run");

  const guard: GuardReport = opts.guard
    ? decideGuard(await deps.readUsage(), cfg)
    : { decision: "disabled", status: "ok", five_hour: null, seven_day: null, resets_at: null, headroom: null, factor: 1, facts_only: false };
  log.info(`guard: ${guard.decision} (${guard.status})`, { five_hour: guard.five_hour, seven_day: guard.seven_day, factor: guard.factor });

  const report: RunReport = {
    date, started_at: started.toISOString(), finished_at: started.toISOString(), status: "ok", pipeline: PIPELINE_VERSION,
    runner: { node: process.version, ...(process.env.RUNNER_NAME ? { runner_name: process.env.RUNNER_NAME } : {}) },
    guard, ingest: { sources: [], totals: {} }, plan: { quotas: {}, work: 0, executed: 0 },
    llm: llmStats(), spend: { ...spend, exhausted: spend.allowance_usd <= 0, ...(opts.capOverride ? { override: true } : {}) }, items_changed: 0, errors,
    ...(catchUp ? { catch_up: cfg.catch_up?.until ?? date } : {}),
  };
  const manifest = new Manifest(resolve(opts.dataDir, "manifest"));

  if (guard.decision === "skip") {
    report.status = "skipped-budget";
    return finish(report, opts, deps.sources);
  }

  const ctx: IngestContext = {
    manifest, http: deps.http, now, mirrorsDir: resolve(opts.cacheDir, "git-mirrors"), roadmapDir: resolve(opts.dataDir, "roadmap"), dataDir: opts.dataDir,
    repoUrl: deps.repoUrl ?? ((repo) => `https://github.com/${repo}`), knownHosts: knownHosts(deps.sources),
    versions: loadConfig<VersionsConfig>("versions"),
    stateDir: resolve(opts.dataDir, "state"), flatPlaylist: deps.flatPlaylist ?? flatPlaylist,
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
    let revived = 0;
    for (const item of manifest.list("video")) {
      if (captionRetryDue(item, now)) { manifest.save(reviveForCaptions(item)); revived++; }
      else if (leakRetryDue(item)) manifest.save(reviveFromLeak(item));
    }
    if (revived) log.info(`captions: ${revived} no-captions videos retried`);
    report.captions_retried = revived;
    const quotas = capQuotas(scaleQuotas(opts.unlimited ? unlimitedQuotas(cfg.quotas) : cfg.quotas, guard), opts.quota);
    const handlers = deps.handlers ?? STAGE_HANDLERS;
    // D77 review coverage: published videos without a review of their current text go back to `linked`, newest
    // first and within video_reviews, so the plan runs their `reviewed` stage; unreached ones are restored below
    const rewound = !opts.pillars || opts.pillars.includes("video") ? rewindVideoBacklog(manifest, opts.dataDir, quotas.video_reviews ?? 0) : [];
    if (rewound.length) log.info(`video reviews: ${rewound.length} published videos rewound for review`);
    // only items whose next stage can run tonight compete for quota; the rest would only crowd them out
    const runnable = manifest.list().filter((i) => (!opts.pillars || opts.pillars.includes(i.pillar)) && (!opts.only || opts.only.includes(i.source)) && handlerFor(handlers, i));
    const plan = planQueue(runnable, quotas, new Map(deps.sources.map((s) => [s.id, s])), now, loadConfig<VersionsConfig>("versions").narrative_order ?? []);
    for (const s of plan.skips) {
      const item = manifest.get(s.id);
      if (item) manifest.save(skip(item, s.reason));
    }
    const mirrorsDir = resolve(opts.cacheDir, "git-mirrors");
    await prefetchPlanned(plan.work, manifest, mirrorsDir);
    const ck = opts.commit && !opts.dryRun && ((cfg.checkpoint_items ?? 0) > 0 || (cfg.checkpoint_minutes ?? 0) > 0)
      ? startCheckpoints(opts, deps.sources, date, { everyMs: (cfg.checkpoint_minutes ?? 0) * 60_000, everyItems: cfg.checkpoint_items ?? 0 }) : null;
    const execution = await executePlan({
      work: plan.work, quotas, budget: cfg, manifest, dataDir: opts.dataDir, contentDir: contentDirOf(opts), mirrorsDir,
      sources: new Map(deps.sources.map((s) => [s.id, s])), handlers, concurrency: opts.concurrency ?? cfg.concurrency ?? 1, laneCapacity: cfg.lanes,
      started, clock: deps.clock ?? (() => new Date()), readUsage: opts.guard ? deps.readUsage : undefined,
      ...(ck ? { onProgress: ck.progress } : {}),
      heapFull: deps.heapFull ?? heapAbove(cfg.memory_stop_fraction ?? 0.6),
      // The OOMs of 2026-10-07 grew inside stages, between checkpoints, with nothing logged (D59). Sample every 5 s;
      // print every 30 s, and at once whenever the heap crosses a new gigabyte, so a climb is logged step by step
      // together with the items in flight at each step.
      heartbeatMs: 5_000,
      onHeartbeat: (() => {
        let lastAt = 0, lastGb = -1;
        return (f: { id: string; stage: string; for_s: number }[]) => {
          const m = process.memoryUsage(), mb = (b: number) => Math.round(b / 2 ** 20), gb = Math.floor(m.heapUsed / 2 ** 30);
          if (Date.now() - lastAt < 30_000 && gb <= lastGb) return;
          lastAt = Date.now(); lastGb = gb;
          log.info(`heartbeat: heap ${mb(m.heapUsed)} MB, rss ${mb(m.rss)} MB, external ${mb(m.external)} MB; ${f.length} in flight${f.length ? `: ${f.slice(0, 8).map((x) => `${x.id} ${x.stage} ${x.for_s}s`).join("; ")}` : ""}`);
        };
      })(),
      laneTimeoutMs: Object.fromEntries(Object.entries(cfg.lane_timeout_seconds ?? {}).map(([k, v]) => [k, v * 1000])),
    });
    if (ck) { await ck.stop(); report.checkpoints = ck.count(); }
    report.execution = execution;
    // D77: backlog videos the run did not reach are published again, unchanged (the next night picks them up)
    const restored = restoreVideoBacklog(manifest, rewound);
    if (restored) log.info(`video reviews: ${restored} rewound videos not reached, restored to published`);
    // The item loop logs heap at every checkpoint; after it the run was blind, and that is exactly where the
    // 2026-10-06 and 2026-10-07 OOMs both happened (heap 133 MB at the last checkpoint, 8 GB six minutes later,
    // with no line in between to say where). Each post-loop phase now reports what it cost (D55).
    const mbOf = (b: number) => Math.round(b / 2 ** 20);
    // The item loop stops gracefully when the heap fills (memory_stop_fraction); after it there was no guard at
    // all, so a phase that grew simply killed the process and the run lost everything it had not committed. The
    // LLM phases are `optional`: they are skipped when the heap is already high, which leaves the deterministic
    // renders to finish and the run to commit what it has. Catch-up picks the skipped work up next run (D57).
    const heapHigh = deps.heapFull ?? heapAbove(cfg.memory_stop_fraction ?? 0.6);
    const skippedPhases: string[] = [];
    const phase = async <T>(name: string, fn: () => T | Promise<T>): Promise<T> => {
      const t = Date.now();
      try {
        return await fn();
      } finally {
        const m = process.memoryUsage();
        log.info(`phase ${name}: ${Date.now() - t} ms, heap ${mbOf(m.heapUsed)} MB, rss ${mbOf(m.rss)} MB`);
      }
    };
    /** An LLM phase: shed when the heap is already high, so the deterministic renders still finish and commit. */
    const optionalPhase = async <T>(name: string, fn: () => T | Promise<T>): Promise<T | undefined> => {
      if (!heapHigh()) return phase(name, fn);
      skippedPhases.push(name);
      log.warn(`phase ${name}: skipped, heap ${mbOf(process.memoryUsage().heapUsed)} MB is above the stop fraction`);
      return undefined;
    };
    // D77: Opus calls the narrative reviews spent tonight; the hub reviews get opus_reviews minus these
    let narrativeReviewsUsed = 0;
    try {
      const majors = Object.keys(loadConfig<VersionsConfig>("versions").majors);
      // older majors are skeletons with their full copy in the cache (D62); the docs join reads full majors only
      const full = majors.filter((m) => !isSkeleton(opts.dataDir, m));
      report.code = await phase("code-derived", () => ({ ...refreshCodeDerived(opts.dataDir, majors, { cacheDir: opts.cacheDir }), docs_objects: refreshDocsObjects(opts.dataDir, full, manifest.list("docs")) }));
      // the call graphs the `linked` stage ran tonight (D67), from the stage records
      const graphs = manifest.list("code").map((i) => i.stages.linked).filter((l) => l && String(l.at) >= report.started_at && l.graph).map((l) => l!.graph as CallGraphRun);
      if (graphs.length) report.code.graph = { runs: graphs.map(({ key: _k, ...g }) => g) };
      // narratives also run after a clean memory stop (catch-up runs end that way)
      if (execution.stop_reason === "done" || execution.stop_reason === "memory") {
        const { errors: nErr, ...nRun } = await optionalPhase("localization-narratives", () => refreshLocalizationNarratives(opts.dataDir, manifest.list("docs"), { deadline: new Date(execution.deadline), clock: deps.clock ?? (() => new Date()) })) ?? { errors: [] as string[], ready: 0, refreshed: 0, failed: 0, waiting: [], stopped: "skipped" };
        errors.push(...nErr);
        report.code.narratives = nRun;
      }
      // D77: Opus reviews the localization narratives before code-pages renders them; opus_reviews is shared with the
      // hub reviews, which get what is left (narrativeReviewsUsed)
      if (execution.stop_reason === "done") {
        const left = Math.max(0, (quotas.opus_reviews ?? 0) - (execution.quota_charged.opus_reviews ?? 0) - narrativeReviewsUsed);
        const lr = await optionalPhase("localization-reviews", () => reviewLocalizationNarratives(opts.dataDir, manifest.list("docs"), { quota: left, deadline: new Date(execution.deadline), clock: deps.clock ?? (() => new Date()) }));
        if (lr) { const { errors: lErr, ...lRun } = lr; errors.push(...lErr); narrativeReviewsUsed += lRun.calls; report.narrative_reviews = { ...report.narrative_reviews, localization: lRun }; }
      }
      // change pages first (D61): the object pages read the reverse index they produce
      report.changes = await phase("changes-relink", () => {
        for (const [m, v] of Object.entries(loadConfig<VersionsConfig>("versions").majors)) if (v.snapshot_source === "bcapps") refreshFileIndex(opts.dataDir, m);
        const relinked = relinkChanges(manifest, opts.dataDir);
        const rerendered = rerenderChangePages(manifest, { dataDir: opts.dataDir, contentDir: contentDirOf(opts), now: () => now });
        renderChangesByObject(contentDirOf(opts), opts.dataDir);
        const pages = renderChangeIndex(contentDirOf(opts), opts.dataDir);
        const startedAt = report.started_at;
        const changeItems = manifest.list("change");
        return {
          fetched: execution.stages_run["change:fetched"] ?? 0,
          skipped_non_code: changeItems.filter((i) => i.skip === "non-code" && (i.skipped_at ?? "") >= startedAt).length,
          held: Math.max(0, plan.work.filter((w) => w.pillar === "change" && w.stage === "fetched").length - (execution.stages_run["change:fetched"] ?? 0)),
          pages, relinked, rerendered, api_calls: githubCalls(),
        };
      });
      report.code.pages = await phase("code-pages", () => renderCodePages(opts.dataDir, contentDirOf(opts)));
      // D65: Related reads the object pages (a table's hubs come through its pages), the app pages read Related
      report.code.related = await phase("related", () => refreshRelated(opts.dataDir, contentDirOf(opts)));
      report.code.apps = await phase("app-pages", () => renderAppPages(opts.dataDir, contentDirOf(opts)));
    } catch (e) {
      errors.push(`code derived: ${(e as Error).message.slice(0, 300)}`);
    }
    // links also run after a clean memory stop: catch-up runs end that way, and linking should keep pace with ingest
    const linking = execution.stop_reason === "done" || execution.stop_reason === "memory";
    // deterministic, network only: may tonight's posts be framed, and what do their cards look like (D60)
    report.previews = await phase("preview-probe", async () => {
      try {
        const blogs = new Map(deps.sources.filter((s) => s.kind === "blog").map((s) => [s.id, { name: s.name, author: s.author ?? null, full_text: s.full_text, user_agent: s.fetch?.user_agent, ...(s.embed === false ? { embed: false } : {}) }]));
        const r = await refreshPreviews(manifest, { dataDir: opts.dataDir }, {
          quota: linking ? quotas.preview_probes ?? 0 : 0, ttlDays: cfg.preview_ttl_days ?? 30, concurrency: cfg.lanes?.web ?? 3,
          http: deps.http, now, deadline: new Date(execution.deadline), sources: blogs,
        });
        // tonight's probes, plus pages whose preview is out of date (a vault-less backfill, an opt-out, an override),
        // plus pages whose object join is (D67: written before it, or an object page came, went or was renamed)
        const touched = new Map([...r.touched, ...pendingPreviewPages(manifest.list("blog"), opts.dataDir, contentDirOf(opts), blogs),
          ...pendingMentionPages(manifest.list("blog"), opts.dataDir, contentDirOf(opts))].map((i) => [i.id, i]));
        const rerendered = await rerenderPostPages([...touched.values()], blogs, { dataDir: opts.dataDir, contentDir: contentDirOf(opts), now: () => now });
        const channels = linking && deps.channelAvatar
          ? await refreshChannels(deps.sources.filter((s) => s.kind === "youtube" && s.enabled), opts.dataDir, { avatar: deps.channelAvatar, now, ttlDays: cfg.preview_ttl_days ?? 30 })
          : { asked: 0, failed: 0 };
        writeIcons(opts.dataDir, deps.sources);
        return { probed: r.probed, refreshed: r.refreshed, failed: r.failed + channels.failed, rerendered, flipped: r.flipped, channels: channels.asked };
      } catch (e) {
        errors.push(`preview probe: ${(e as Error).message.slice(0, 200)}`);
        return undefined;
      }
    });
    report.roadmap_links = await optionalPhase("roadmap-links", () => refreshRoadmapLinks(manifest, opts, deps.sources, errors, {
      quota: linking ? quotas.roadmap_links ?? 0 : 0,
      reviewQuota: linking ? quotas.coverage_reviews ?? 0 : 0, deadline: new Date(execution.deadline),
      clock: deps.clock ?? (() => new Date()), concurrency: opts.concurrency ?? cfg.concurrency ?? 1,
    }));
    report.topic_links = await optionalPhase("topic-links", () => refreshTopicLinks(opts, errors, {
      quota: linking ? quotas.topic_links ?? 0 : 0, deadline: new Date(execution.deadline),
      clock: deps.clock ?? (() => new Date()), concurrency: opts.concurrency ?? cfg.concurrency ?? 1,
    }));
    // after the linking, so a link made this run can be reviewed in the same run rather than waiting a night
    report.topic_reviews = await optionalPhase("topic-reviews", () => refreshTopicReviews(opts, errors, {
      quota: linking ? quotas.topic_reviews ?? 0 : 0, deadline: new Date(execution.deadline),
      clock: deps.clock ?? (() => new Date()), concurrency: opts.concurrency ?? cfg.concurrency ?? 1,
    }));
    // D77 review coverage (part B): Opus reviews of posts and changes after linking; videos are reviewed in their stage
    const content = await optionalPhase("content-reviews", async () => {
      try {
        return await runContentReviews(manifest, {
          dataDir: opts.dataDir, contentDir: contentDirOf(opts), cacheDir: opts.cacheDir, sources: deps.sources,
          postQuota: linking ? quotas.post_reviews ?? 0 : 0, changeQuota: linking ? quotas.change_reviews ?? 0 : 0,
          deadline: new Date(execution.deadline), clock: deps.clock ?? (() => new Date()), concurrency: opts.concurrency ?? cfg.concurrency ?? 1, now,
        });
      } catch (e) {
        errors.push(`content reviews: ${(e as Error).message.slice(0, 300)}`);
        return undefined;
      }
    });
    if (content) errors.push(...content.errors);
    report.reviews = { video: videoReviewCounts(manifest.list("video"), opts.dataDir, report.started_at), ...(content ? { post: content.post, change: content.change } : {}) };
    // the week in Microsoft's code, one Sonnet paragraph for the digest (D61 section 9); shed like every LLM phase
    const narrated = await optionalPhase("change-narrative", () => narrateChangeWeeks(contentDirOf(opts), opts.dataDir, now, { quota: linking ? quotas.change_narrative ?? 0 : 0 }));
    if (report.changes && narrated) Object.assign(report.changes, { narrated: narrated.written });
    // D77: Opus reviews the week narratives the digest re-renders below (current and previous week); shares opus_reviews
    if (execution.stop_reason === "done") {
      const left = Math.max(0, (quotas.opus_reviews ?? 0) - (execution.quota_charged.opus_reviews ?? 0) - narrativeReviewsUsed);
      const dr = await optionalPhase("digest-reviews", () => reviewDigestNarratives(contentDirOf(opts), opts.dataDir, now, { quota: left, deadline: new Date(execution.deadline), clock: deps.clock ?? (() => new Date()) }));
      if (dr) { const { errors: dErr, ...dRun } = dr; errors.push(...dErr); narrativeReviewsUsed += dRun.calls; report.narrative_reviews = { ...report.narrative_reviews, digest: dRun }; }
    }
    await phase("indexes", () => {
      renderVideoIndex(contentDirOf(opts));
      renderPostIndex(contentDirOf(opts));
      renderFeatureIndex(contentDirOf(opts), opts.dataDir);
    });
    report.hubs = await optionalPhase("hubs", () => refreshTopics(deps.sources, manifest, mirrorsDir, opts, errors, {
      quota: execution.stop_reason === "done" ? quotas.hub_refresh ?? 0 : 0, deadline: new Date(execution.deadline), clock: deps.clock ?? (() => new Date()),
      concurrency: opts.concurrency ?? cfg.concurrency ?? 1,
      reviewQuota: execution.stop_reason === "done" ? Math.max(0, (quotas.opus_reviews ?? 0) - (execution.quota_charged.opus_reviews ?? 0) - narrativeReviewsUsed) : 0,
    }));
    try {
      const order = loadConfig<{ narrative_order: string[] }>("versions").narrative_order;
      renderDigests({ items: manifest.list(), dataDir: opts.dataDir, contentDir: contentDirOf(opts), currentMajor: order[0] }, now);
    } catch (e) { errors.push(`digest: ${(e as Error).message.slice(0, 200)}`); }
    try { renderSourcesAndCoverage(contentDirOf(opts), opts.dataDir, now); } catch (e) { errors.push(`sources: ${(e as Error).message.slice(0, 200)}`); }
    await phase("search-index", async () => { try { renderSearchIndex(contentDirOf(opts), opts.dataDir); } catch (e) { errors.push(`search index: ${(e as Error).message.slice(0, 200)}`); } });
    await phase("objects-index", async () => { try { renderObjectsIndex(contentDirOf(opts), opts.dataDir); } catch (e) { errors.push(`objects index: ${(e as Error).message.slice(0, 200)}`); } });
    await phase("graph", async () => { try { renderGraph(contentDirOf(opts), opts.dataDir, "", { today: date }); } catch (e) { errors.push(`graph: ${(e as Error).message.slice(0, 200)}`); } });
    errors.push(...execution.errors);
    report.plan = {
      quotas, work: plan.work.length, executed: execution.items_touched, skips: plan.skips.length, quota_use: plan.quota_use,
      note: `stopped: ${execution.stop_reason}${skippedPhases.length ? `; phases skipped on memory: ${skippedPhases.join(", ")}` : ""}${report.previews?.flipped.length ? `; framing now refused by: ${report.previews.flipped.join(", ")}` : ""}`,
    };
  } else {
    report.plan = { quotas: {}, work: 0, executed: 0, note: "ingest only" };
  }

  report.llm = llmStats();
  if (opts.dryRun) report.status = "dry-run";
  else if (report.execution?.stop_reason === "aborted") report.status = "aborted";
  else if (results.length && totals.failed === results.length) report.status = "aborted";
  else if (totals.failed) report.status = "partial";
  return finish(report, opts, deps.sources);
}

async function finish(report: RunReport, opts: NightlyOptions, sources: SourceDef[] = []): Promise<RunReport> {
  if (opts.stages === "all" && report.status !== "skipped-budget") {
    const c = validateContent(contentDirOf(opts));
    report.content = { pages: c.pages, errors: c.errors.length };
    report.errors.push(...c.errors.slice(0, 20).map((e) => `content: ${e}`));
    if (c.errors.length) log.warn(`validate:content: ${c.errors.length} errors (first: ${c.errors[0]})`);
  }
  let blocked = false;
  if (opts.commit && !opts.dryRun) {
    const leak = checkLeak({ repoDir: opts.repoDir, dataDir: opts.dataDir, contentDir: contentDirOf(opts), vaultDir: opts.vaultDir ?? VAULT_DIR, sources });
    blocked = leak.findings.length > 0;
    report.leak = { vault: leak.vault, raw_docs: leak.raw_docs, files_scanned: leak.files_scanned, findings: leak.findings.length, blocked };
    if (blocked) {
      report.status = "aborted";
      report.errors.push(...leak.findings.slice(0, 20).map((f) => `leak: ${f.kind} ${f.path}: ${f.detail}`));
      log.error(`check:leak found ${leak.findings.length} problems; nothing is committed`);
    }
  }
  report.finished_at = new Date().toISOString();
  report.llm = { ...llmStats(), day_cost_usd: round6((report.spend?.today_usd ?? 0) + llmStats().cost_usd) };
  if (report.spend) report.spend.exhausted ||= report.spend.allowance_usd - report.llm.cost_usd <= 0;
  validateOrThrow("run-report", report, `run report ${report.date}`);
  writeJson(resolve(opts.dataDir, "manifest", "_runs", `${report.date}.json`), report);
  log.info(`run report: ${report.status}, ${report.items_changed} items new or changed`);
  if (opts.commit && !opts.dryRun && !blocked) {
    const label = report.status === "skipped-budget" ? `0 items, skipped-budget` : `${report.items_changed} items`;
    await commitAndPush(opts.repoDir, `content: nightly ${report.date} (${label})`, opts.push, report);
  }
  return report;
}

/**
 * Roadmap coverage (link/roadmap.ts) within its quota, the Opus review of the links (review/coverage.ts) within
 * coverage_reviews, then re-render published feature and video pages so links found or dropped tonight reach pages
 * written on earlier nights. Re-rendering is deterministic and runs even with both quotas at 0.
 */
async function refreshRoadmapLinks(
  manifest: Manifest, opts: NightlyOptions, sources: SourceDef[], errors: string[],
  n: { quota: number; reviewQuota: number; deadline: Date; clock: () => Date; concurrency: number },
): Promise<RunReport["roadmap_links"]> {
  try {
    const { run } = await linkRoadmap(opts.dataDir, n);
    errors.push(...run.errors);
    const rev = run.stopped === "done" || run.stopped === "quota" ? await reviewCoverage(opts.dataDir, { ...n, quota: n.reviewQuota }) : undefined;
    if (rev) errors.push(...rev.errors);
    const contentDir = contentDirOf(opts);
    const now = n.clock();
    const pages = rerenderFeaturePages(manifest, opts.dataDir, contentDir, now)
      + await rerenderVideoPages(manifest, { dataDir: opts.dataDir, contentDir, now: () => now, sources: new Map(sources.map((s) => [s.id, s])) });
    log.info(`roadmap links: ${run.matched} matches from ${run.calls} calls, ${run.stale} of ${run.units} units stale (${run.stopped}); `
      + `${rev ? `${rev.reviewed} features reviewed (${rev.kept} kept, ${rev.dropped} dropped, ${rev.stopped}); ` : ""}${pages} pages re-rendered`);
    const { errors: _e, ...rest } = run;
    const review = rev ? (({ errors: _r, ...x }) => x)(rev) : undefined;
    return { ...rest, rejections: run.rejections.slice(0, 10), pages, ...(review ? { review } : {}) };
  } catch (e) {
    errors.push(`roadmap links: ${(e as Error).message.slice(0, 300)}`);
    return undefined;
  }
}

/** Opus review of the topic links (review/topics.ts): a dropped link is gone from the pages refreshTopics writes. */
async function refreshTopicReviews(opts: NightlyOptions, errors: string[], n: { quota: number; deadline: Date; clock: () => Date; concurrency: number }): Promise<RunReport["topic_reviews"]> {
  if (n.quota <= 0) return undefined;
  try {
    const run = await reviewTopicLinks(opts.dataDir, contentDirOf(opts), n);
    errors.push(...run.errors);
    log.info(`topic reviews: ${run.reviewed} of ${run.candidates} hubs, ${run.kept} kept, ${run.dropped} dropped (${run.stopped})`);
    const { errors: _e, ...rest } = run;
    return rest;
  } catch (e) {
    errors.push(`topic reviews: ${(e as Error).message.slice(0, 300)}`);
    return undefined;
  }
}

/** Topic links (link/topics.ts) within their quota; the topic pages render them in refreshTopics, the graph after. */
async function refreshTopicLinks(opts: NightlyOptions, errors: string[], n: { quota: number; deadline: Date; clock: () => Date; concurrency: number }): Promise<RunReport["topic_links"]> {
  try {
    const { run } = await linkTopics(opts.dataDir, contentDirOf(opts), n);
    errors.push(...run.errors);
    log.info(`topic links: ${run.matched} links from ${run.calls} calls, ${run.stale} of ${run.units} units stale (${run.stopped})`);
    const { errors: _e, ...rest } = run;
    return { ...rest, rejections: run.rejections.slice(0, 10) };
  } catch (e) {
    errors.push(`topic links: ${(e as Error).message.slice(0, 300)}`);
    return undefined;
  }
}

/** Deterministic topic hubs from the Learn TOCs; a missing mirror or TOC never fails the run. */
async function refreshTopics(
  sources: SourceDef[], manifest: Manifest, mirrorsDir: string, opts: NightlyOptions, errors: string[],
  n: { quota: number; reviewQuota: number; deadline: Date; clock: () => Date; concurrency: number },
): Promise<RunReport["hubs"]> {
  const docs = sources.filter((s) => s.kind === "docs-git" && s.enabled && s.mode !== "links-only" && existsSync(resolve(mirrorsDir, `${s.id}.git`)));
  if (!docs.length) return undefined;
  try {
    const tocs = docs.map((s) => ({ source: s, tocPath: `${s.paths?.[0] ?? ""}TOC.md`, read: mirrorReader(resolve(mirrorsDir, `${s.id}.git`), s.branch ?? "main") }));
    const items = manifest.list("docs");
    const hubs = await buildTopicHubs(tocs, items);
    if (!hubs.length) return undefined;
    const { narratives, run } = await refreshNarratives(hubs, items, opts.dataDir, n);
    errors.push(...run.errors);
    const rev = run.stopped === "done" || run.stopped === "quota"
      ? await reviewHubs(hubs, items, opts.dataDir, narratives, { ...n, quota: n.reviewQuota })
      : { candidates: 0, reviewed: 0, fixed: 0, rejected: 0, stopped: "skipped", errors: [] };
    errors.push(...rev.errors);
    renderTopics(hubs, items, opts.dataDir, contentDirOf(opts), new Date(), narratives);
    log.info(`topics: ${hubs.length} hubs, ${narratives.size} narrated, ${run.refreshed} refreshed, ${run.ready_stale} were ready and stale (${run.stopped})`);
    return {
      topics: hubs.length, narrated: narratives.size, refreshed: run.refreshed, failed: run.failed, backlog: run.ready_stale - run.refreshed - run.failed, stopped: run.stopped,
      reviewed: rev.reviewed, review_fixed: rev.fixed, review_rejected: rev.rejected, review_backlog: rev.candidates - rev.reviewed,
    };
  } catch (e) {
    errors.push(`topics: ${(e as Error).message.slice(0, 300)}`);
    return undefined;
  }
}

/** Batch-fetch the blobs of git pages planned for `fetched`, one mirror at a time; failures fall back to lazy fetch. */
async function prefetchPlanned(work: PlannedWork[], manifest: Manifest, mirrorsDir: string): Promise<void> {
  const bySource = new Map<string, string[]>();
  for (const w of work) {
    if (w.stage !== "fetched" || (w.pillar !== "docs" && w.pillar !== "guidelines")) continue;
    const it = manifest.get(w.id);
    if (it?.input_hash) bySource.set(it.source, [...(bySource.get(it.source) ?? []), it.input_hash]);
  }
  for (const [source, oids] of bySource) {
    try {
      const n = await prefetchBlobs(mirrorFor(mirrorsDir, { source }), oids);
      log.info(`prefetched ${n} of ${oids.length} blobs for ${source}`);
    } catch (e) {
      log.warn(`prefetch ${source} failed, pages fetch lazily: ${(e as Error).message}`);
    }
  }
}

function capOverrideArg(night?: string, week?: string): Pick<NightlyOptions, "capOverride"> {
  if (night === undefined && week === undefined) return {};
  const num = (v: string | undefined, flag: string) => {
    if (v === undefined) return undefined;
    const n = Number(v);
    if (!Number.isFinite(n) || n < 0) throw new Error(`${flag} must be a dollar amount, got ${v}`);
    return n;
  };
  const o = { night_usd: num(night, "--night-cap"), week_usd: num(week, "--week-cap") };
  return { capOverride: Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) };
}

/** Leak findings as lines, for the recovery and checkpoint commits; `changedOnly` scans only what differs from HEAD. */
function leakGate(opts: NightlyOptions, sources: SourceDef[], changedOnly = false): string[] {
  return checkLeak({ repoDir: opts.repoDir, dataDir: opts.dataDir, contentDir: contentDirOf(opts), vaultDir: opts.vaultDir ?? VAULT_DIR, sources, changedOnly })
    .findings.map((f) => `${f.kind} ${f.path}: ${f.detail}`);
}

/** Large enough that nothing in the backlog hits it; a number, so reports and schemas stay plain JSON. */
export const UNLIMITED = 100_000;
export const unlimitedQuotas = (quotas: Record<string, number>) => Object.fromEntries(Object.keys(quotas).map((k) => [k, UNLIMITED]));

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

/**
 * A killed run leaves written-but-uncommitted files (all writes are temp-then-rename): drop temp files, commit the rest.
 * `gate` runs the leak check first; findings abort the run instead of committing what the killed run left behind.
 */
export async function recoverPartialRun(repoDir: string, gate?: () => string[]): Promise<boolean> {
  const dirs = TRACKED.filter((d) => existsSync(join(repoDir, d)));
  if (!dirs.length) return false;
  if (!(await git(["status", "--porcelain", "--", ...dirs], repoDir)).trim()) return false;
  for (const d of dirs) removeTempFiles(join(repoDir, d));
  const problems = gate?.() ?? [];
  if (problems.length) throw new Error(`check:leak blocks committing a killed run's leftovers:\n  ${problems.slice(0, 10).join("\n  ")}`);
  await git(["add", "-A", "--", ...dirs], repoDir);
  if (!(await git(["diff", "--cached", "--name-only"], repoDir)).trim()) return false;
  await git(["commit", "-q", "-m", "content: recover partial run"], repoDir);
  return true;
}

async function commitAndPush(repoDir: string, message: string, push: boolean, report: RunReport): Promise<void> {
  await commitTracked(repoDir, message, push);
  if (push) log.info(`pushed (${report.status})`);
}

/**
 * Stage content/ and data/, commit when something changed, push (rebase once on a rejected push). An empty message
 * pushes only: it must not stage, or the files the item loop wrote since the last commit sit in the index and the
 * rebase refuses to run (D58: "cannot pull with rebase: your index contains uncommitted changes").
 */
export async function commitTracked(repoDir: string, message: string, push: boolean): Promise<boolean> {
  let changed = false;
  if (message) {
    const dirs = TRACKED.filter((d) => existsSync(join(repoDir, d)));
    // never a half-written temp file, even in a checkout without the repo's .gitignore
    await git(["add", "-A", "--", ...dirs, ":(exclude,glob)**/*.tmp"], repoDir);
    changed = !!(await git(["diff", "--cached", "--name-only"], repoDir)).trim();
    if (changed) {
      await git(["commit", "-q", "-m", message], repoDir);
      log.info(`committed: ${message}`);
    }
  }
  if (!push) return changed;
  await pushWithRetry(repoDir);
  return changed;
}

/**
 * Push HEAD to main; on a rejection rebase on origin/main and try again, up to `attempts` pushes. During a run the item
 * loop is still writing content/ and data/: autostash sets that aside for the rebase and puts it back, and the remote
 * side of a race is code or docs, which never touch those folders (one nightly at a time). One retry was not enough:
 * the final commit of 2026-10-07 (3,687 items, about 25,000 pages) took four minutes to rebase, two docs pushes landed
 * inside that window, and the run aborted with all its pages unpushed (run 37664505302). A failed rebase is not
 * retried: it is a real conflict and throws.
 */
export async function pushWithRetry(repoDir: string, attempts = 6, run: (args: string[], cwd: string) => Promise<string> = git, pause: (ms: number) => Promise<void> = (ms) => new Promise((r) => setTimeout(r, ms))): Promise<number> {
  for (let i = 1; ; i++) {
    try {
      await run(["push", "-q", "origin", "HEAD:main"], repoDir);
      return i;
    } catch (e) {
      if (i >= attempts) throw e;
      log.warn(`push rejected (attempt ${i} of ${attempts}); rebasing on origin/main and retrying`);
      await run(["pull", "-q", "--rebase", "--autostash", "origin", "main"], repoDir);
      if (i > 1) await pause(Math.min(30_000, 2_000 * 2 ** (i - 2)));
    }
  }
}

/** Commit and push the vault checkout when it has changes (community raw text, LLM cache); never fails the run. */
async function pushVault(vaultDir: string, message: string): Promise<void> {
  if (!existsSync(join(vaultDir, ".git"))) return;
  try {
    if (!(await git(["status", "--porcelain"], vaultDir)).trim()) return;
    await git(["add", "-A"], vaultDir);
    await git(["commit", "-q", "-m", message], vaultDir);
    await git(["push", "-q", "origin", "HEAD:main"], vaultDir);
  } catch (e) {
    log.warn(`vault checkpoint failed: ${(e as Error).message.slice(0, 200)}`);
  }
}

/**
 * D26: during stage execution, commit and push what is done after every `everyItems` advanced item stages, or after
 * `everyMs` when work is slow, so commits stay small, progress shows up in the history, and a killed run (job
 * timeout, reboot, cancel) loses at most one batch: the next run's checkout cleans the workspace, so uncommitted work
 * would be gone. Each checkpoint passes the leak gate first (a finding skips it; the final commit then blocks as
 * usual). One checkpoint at a time; a failed checkpoint only logs. `stop()` waits for one in flight.
 */
export function startCheckpoints(opts: NightlyOptions, sources: SourceDef[], date: string, every: { everyMs: number; everyItems: number }): { progress: (advanced: number) => void; stop: () => Promise<void>; count: () => number } {
  let n = 0, lastAt = 0;
  let busy: Promise<void> | null = null;
  const tick = (advanced?: number) => {
    if (busy) return;
    if (advanced !== undefined) lastAt = advanced;
    busy = (async () => {
      try {
        // incremental: what is already committed passed an earlier gate; the final commit scans the whole tree
        const t0 = Date.now();
        const problems = leakGate(opts, sources, true);
        const mem = process.memoryUsage(), mb = (b: number) => Math.round(b / 2 ** 20);
        log.info(`checkpoint leak gate: ${problems.length} findings in ${Date.now() - t0} ms; heap ${mb(mem.heapUsed)} MB, rss ${mb(mem.rss)} MB, external ${mb(mem.external)} MB`);
        if (problems.length) { log.warn(`checkpoint skipped: check:leak found ${problems.length} problems: ${problems[0]}`); return; }
        // count the commit itself: a push that loses a race is retried by the next checkpoint, which pushes both
        try { if (await commitTracked(opts.repoDir, `content: nightly ${date} checkpoint ${n + 1}`, false)) n++; }
        finally { if (opts.push) await commitTracked(opts.repoDir, "", true).catch((e) => log.warn(`checkpoint push failed, next one retries: ${(e as Error).message.slice(0, 200)}`)); }
        await pushVault(opts.vaultDir ?? VAULT_DIR, `vault: nightly ${date} checkpoint`);
      } catch (e) {
        log.warn(`checkpoint failed: ${(e as Error).message.slice(0, 300)}`);
      } finally {
        busy = null;
      }
    })();
  };
  const timer = every.everyMs > 0 ? setInterval(() => tick(), every.everyMs) : null;
  timer?.unref();
  return {
    progress: (advanced) => { if (every.everyItems > 0 && advanced - lastAt >= every.everyItems) tick(advanced); },
    stop: async () => { if (timer) clearInterval(timer); await busy; },
    count: () => n,
  };
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
    dryRun, commit: has("--commit") && !dryRun, push: has("--push") && !dryRun, guard: !has("--no-guard"), stages, scheduled: has("--scheduled"),
    pillars: list("--pillars") as Pillar[] | undefined, only: list("--only"),
    ...(val("--quota") !== undefined ? { quota: Number(val("--quota")) } : {}),
    ...(has("--unlimited") ? { unlimited: true, capOverride: { night_usd: UNLIMITED, week_usd: UNLIMITED } } : capOverrideArg(val("--night-cap"), val("--week-cap"))),
    ...(val("--concurrency") !== undefined ? { concurrency: Math.max(1, Number(val("--concurrency")) || 1) } : {}),
    dataDir: resolve(val("--data-dir") ?? (dryRun ? join(tmpdir(), "bc-observatory-dry-run", "data") : DATA_DIR)),
    cacheDir: CACHE_DIR, repoDir: ROOT,
  };
}

/** D41: a cron run outside the night window has nothing to do unless catch-up is on (no report, no commit). */
export function skipScheduled(opts: Pick<NightlyOptions, "scheduled">, now: Date, cfg = budget()): string | null {
  if (!opts.scheduled) return null;
  const date = runDate(now, cfg.window.timezone);
  if (cfg.catch_up?.until && date <= cfg.catch_up.until) return null;
  const toMin = (hhmm: string) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: cfg.window.timezone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(now);
  const local = Number(parts.find((p) => p.type === "hour")!.value) * 60 + Number(parts.find((p) => p.type === "minute")!.value);
  const start = toMin(cfg.window.start_local), stop = toMin(cfg.window.hard_stop_local);
  const inside = start <= stop ? local >= start && local < stop : local >= start || local < stop;
  return inside ? null : `scheduled run at ${String(Math.floor(local / 60)).padStart(2, "0")}:${String(local % 60).padStart(2, "0")} is outside the night window and catch-up is off`;
}

async function main(): Promise<void> {
  const opts = parseArgs(process.argv.slice(2));
  const off = skipScheduled(opts, new Date());
  if (off) { log.info(`${off}: nothing to do`); process.exit(0); }
  if (opts.dryRun) process.env.LLM_CACHE_ONLY = "1";
  if (opts.dryRun) log.info(`dry run: data dir ${opts.dataDir}`);
  const report = await runNightly(opts, {
    http: httpGet, sources: loadSources(), channelAvatar,
    readUsage: () => readPlanUsage({ token: process.env.BCOBS_USAGE_OAUTH_TOKEN, fetch, now: () => new Date() }),
  });
  process.exit(report.status === "aborted" ? 1 : 0);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((e) => { log.error(`aborted: ${(e as Error).stack ?? e}`); process.exit(1); });
}
