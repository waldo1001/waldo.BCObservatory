import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { PlanUsage } from "../../pipeline/lib/budget.js";
import type { SourceDef } from "../../pipeline/lib/config.js";
import { validate } from "../../pipeline/lib/schema.js";
import { acquireLock } from "../../pipeline/orchestrator/lock.js";
import { parseArgs, recoverPartialRun, runDate, runNightly, type NightlyOptions } from "../../pipeline/orchestrator/nightly.js";

const now = new Date("2026-10-07T01:00:00Z");
const YT = `<?xml version="1.0"?><feed xmlns:yt="http://www.youtube.com/xml/schemas/2015" xmlns="http://www.w3.org/2005/Atom">
<entry><id>yt:video:AAAAAAAAAA1</id><yt:videoId>AAAAAAAAAA1</yt:videoId><title>One</title><link rel="alternate" href="https://www.youtube.com/watch?v=AAAAAAAAAA1"/><published>2026-10-01T15:00:00+00:00</published></entry>
<entry><id>yt:video:AAAAAAAAAA2</id><yt:videoId>AAAAAAAAAA2</yt:videoId><title>Two</title><link rel="alternate" href="https://www.youtube.com/watch?v=AAAAAAAAAA2"/><published>2026-09-01T15:00:00+00:00</published></entry></feed>`;
const source = { id: "yt-ms", kind: "youtube", name: "MS", url: "https://www.youtube.com/@x", channel_id: "UCms", tier: "official", language: "en", full_text: true, backfill: { all: true }, enabled: true } as SourceDef;
const http = (async () => new Response(YT)) as any;
const usage = (five: number, seven: number) => async (): Promise<PlanUsage> => ({ fiveHourPct: five, fiveHourResetsAt: null, sevenDayPct: seven, sevenDayResetsAt: "2026-10-10T00:00:00Z", readAt: now.toISOString() });

function repo(): string {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-nightly-"));
  const g = (...a: string[]) => execFileSync("git", a, { cwd: dir, stdio: "pipe" });
  g("init", "-q", "-b", "main"); g("config", "user.name", "t"); g("config", "user.email", "t@example.com");
  writeFileSync(join(dir, "README.md"), "x"); g("add", "-A"); g("commit", "-q", "-m", "init");
  return dir;
}
function opts(dir: string, over: Partial<NightlyOptions> = {}): NightlyOptions {
  return { dryRun: false, commit: false, push: false, guard: true, stages: "all", dataDir: join(dir, "data"), cacheDir: join(dir, ".cache"), repoDir: dir, now, ...over };
}
const lastCommit = (dir: string) => execFileSync("git", ["log", "-1", "--format=%s"], { cwd: dir }).toString().trim();
const report = (dir: string) => JSON.parse(readFileSync(join(dir, "data/manifest/_runs/2026-10-07.json"), "utf8"));

test("run date is the calendar day in the budget timezone", () => {
  assert.equal(runDate(new Date("2026-10-06T22:30:00Z"), "Europe/Brussels"), "2026-10-07");
  assert.equal(runDate(new Date("2026-10-06T21:30:00Z"), "Europe/Brussels"), "2026-10-06");
});

test("over budget: no ingest, but the heartbeat report is written and committed", async () => {
  const dir = repo();
  let fetched = 0;
  const r = await runNightly(opts(dir, { commit: true }), { http: (async () => { fetched++; return new Response(YT); }) as any, sources: [source], readUsage: usage(61, 10) });
  assert.equal(r.status, "skipped-budget");
  assert.equal(fetched, 0);
  assert.ok(validate("run-report", report(dir)).ok);
  assert.equal(lastCommit(dir), "content: nightly 2026-10-07 (0 items, skipped-budget)");
});

test("normal run: ingest, newest-first plan with zero LLM calls, report, commit", async () => {
  const dir = repo();
  const r = await runNightly(opts(dir, { commit: true }), { http, sources: [source], readUsage: usage(5, 10) });
  assert.deepEqual([r.status, r.items_changed, r.plan.work, r.plan.executed, r.llm.calls], ["ok", 2, 2, 0, 0]);
  assert.equal(r.guard.decision, "go");
  assert.ok(validate("run-report", report(dir)).ok);
  assert.equal(lastCommit(dir), "content: nightly 2026-10-07 (2 items)");
  assert.ok(existsSync(join(dir, "data/manifest/video/yt-ms/AAAAAAAAAA1.json")));
  const again = await runNightly(opts(dir, { commit: true }), { http, sources: [source], readUsage: usage(5, 10) });
  assert.equal(again.items_changed, 0);
});

test("unreadable usage runs reduced; a failing source makes the run partial, all failing aborts", async () => {
  const dir = repo();
  const broken = { ...source, id: "yt-broken" };
  const failing = (async () => { throw new Error("HTTP 503"); }) as any;
  const r = await runNightly(opts(dir), { http: failing, sources: [broken], readUsage: async () => ({ unavailable: "scope", detail: "x" }) });
  assert.deepEqual([r.guard.decision, r.status], ["reduced", "aborted"]);
  const mixed = (async (url: string) => (url.includes("UCms") ? new Response(YT) : Promise.reject(new Error("HTTP 503")))) as any;
  const r2 = await runNightly(opts(dir), { http: mixed, sources: [source, { ...broken, channel_id: "UCbroken" }], readUsage: usage(5, 10) });
  assert.equal(r2.status, "partial");
  assert.deepEqual(r2.errors, ["yt-broken: HTTP 503"]);
});

test("a killed run's leftovers are committed first, temp files dropped", async () => {
  const dir = repo();
  mkdirSync(join(dir, "data/manifest/video/x"), { recursive: true });
  writeFileSync(join(dir, "data/manifest/video/x/a.json"), "{}\n");
  writeFileSync(join(dir, "data/manifest/video/x/b.json.123.tmp"), "half");
  assert.equal(await recoverPartialRun(dir), true);
  assert.equal(lastCommit(dir), "content: recover partial run");
  assert.equal(existsSync(join(dir, "data/manifest/video/x/b.json.123.tmp")), false);
  assert.equal(await recoverPartialRun(dir), false);
});

test("lock: a live holder blocks, a dead holder is taken over", () => {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-lock-"));
  const path = join(dir, "nightly.lock");
  writeFileSync(path, String(process.ppid));
  assert.throws(() => acquireLock(path), /another run/);
  writeFileSync(path, "999999");
  const release = acquireLock(path);
  assert.equal(readFileSync(path, "utf8"), String(process.pid));
  release();
  assert.equal(existsSync(path), false);
});

test("--dry-run never commits and stays out of the repo's data dir", () => {
  const o = parseArgs(["--dry-run", "--commit", "--push", "--pillars", "video,docs"]);
  assert.deepEqual([o.commit, o.push, o.pillars], [false, false, ["video", "docs"]]);
  assert.ok(o.dataDir.startsWith(tmpdir()));
  assert.throws(() => parseArgs(["--stages", "everything"]));
});
