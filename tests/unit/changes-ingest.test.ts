/** D61: discovery of merged pull requests against a fake GitHub API. No network. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { SourceDef } from "../../pipeline/lib/config.js";
import type { HttpGet } from "../../pipeline/lib/http.js";
import { Manifest } from "../../pipeline/lib/manifest.js";
import { backportsPath, ingestGithubPrs, mergedLogPath, trackedBranches, type PrListEntry } from "../../pipeline/ingest/github-prs.js";
import type { IngestContext } from "../../pipeline/ingest/types.js";

const now = new Date("2026-10-07T01:00:00Z");
const versions = { majors: { "28": { snapshot_source: "sandbox-history", bcapps_branch: "releases/28.x" }, "29": { snapshot_source: "bcapps", bcapps_branch: "releases/29.x" }, "30": { snapshot_source: "bcapps", bcapps_branch: "main" } }, repos: {} } as IngestContext["versions"];
const source: SourceDef = { id: "bcapps-prs", kind: "github-pr", name: "BCApps PRs", url: "https://github.com/microsoft/BCApps/pulls", tier: "official", repo: "microsoft/BCApps", language: "en", full_text: false, mode: "metadata-only", backfill: { months: 3 }, enabled: true };

const pr = (n: number, o: Partial<Omit<PrListEntry, "base">> & { login?: string; type?: string; base?: string } = {}): PrListEntry => ({
  number: n, title: o.title ?? `Change ${n}`, body: o.body ?? null, html_url: `https://github.com/microsoft/BCApps/pull/${n}`, state: "closed",
  merged_at: o.merged_at === undefined ? "2026-10-05T10:00:00Z" : o.merged_at, updated_at: o.updated_at ?? "2026-10-05T10:00:00Z", merge_commit_sha: `sha${n}`,
  base: { ref: o.base ?? "main" }, user: { login: o.login ?? "dev", type: o.type ?? "User" }, labels: (o.labels as any) ?? [{ name: "Team: Finance" }],
});

/** A fake GitHub: per branch a list of pages; an ETag per branch; a 304 when it matches. */
function github(pages: Record<string, PrListEntry[][]>, o: { etag?: string; limitAfter?: number; open?: PrListEntry[]; issues?: unknown[]; releases?: unknown[] } = {}): HttpGet & { seen: string[] } {
  const seen: string[] = [];
  const f = (async (url: string, opts?: { headers?: Record<string, string> }) => {
    seen.push(url);
    if (o.limitAfter !== undefined && seen.length > o.limitAfter) return new Response("{}", { status: 403, headers: { "x-ratelimit-remaining": "0", "x-ratelimit-reset": "1791000000" } });
    const u = new URL(url);
    // the activity lists (open pull requests, issues, releases): their own fixtures
    if (u.searchParams.get("state") === "open" || /\/(issues|releases)$/.test(u.pathname)) {
      const body = u.pathname.endsWith("/releases") ? (o.releases ?? []) : u.pathname.endsWith("/issues") ? (o.issues ?? []) : (o.open ?? []).filter((p) => p.base.ref === u.searchParams.get("base"));
      return new Response(JSON.stringify(body), { headers: { etag: `"a-${u.pathname}-${u.searchParams.get("base")}"`, "x-ratelimit-remaining": "900" } });
    }
    const branch = u.searchParams.get("base")!, page = Number(u.searchParams.get("page") ?? 1);
    if (o.etag && opts?.headers?.["if-none-match"] === `"${o.etag}-${branch}"`) return new Response(null, { status: 304, headers: { "x-ratelimit-remaining": "900" } });
    const list = pages[branch]?.[page - 1] ?? [];
    const more = (pages[branch]?.length ?? 0) > page;
    const next = new URL(url); next.searchParams.set("page", String(page + 1));
    return new Response(JSON.stringify(list), { headers: { etag: `"${o.etag ?? "e"}-${branch}"`, "x-ratelimit-remaining": "900", ...(more ? { link: `<${next}>; rel="next"` } : {}) } });
  }) as HttpGet & { seen: string[] };
  f.seen = seen;
  return f;
}
function context(http: HttpGet): IngestContext {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-prs-"));
  return { manifest: new Manifest(join(dir, "data/manifest")), http, now, mirrorsDir: join(dir, "mirrors"), roadmapDir: join(dir, "data/roadmap"), repoUrl: (r) => r, knownHosts: new Set(), versions, stateDir: join(dir, "data/state"), dataDir: join(dir, "data") };
}

test("tracked branches: BCApps majors with snapshot_source bcapps, newest first; another repo its branch", () => {
  assert.deepEqual(trackedBranches(source, versions), [{ branch: "main", major: "30" }, { branch: "releases/29.x", major: "29" }]);
  assert.deepEqual(trackedBranches({ repo: "microsoft/AL-Go", branch: "main" }, versions), [{ branch: "main", major: null }]);
});

test("paging per branch; bots and backports are recorded, not discovered; meta and input hash", async () => {
  const http = github({
    main: [[pr(10, { title: "Add posting preview", labels: [{ name: "From Fork" }] as any, updated_at: "2026-10-06T00:00:00Z" }), pr(11, { login: "dependabot[bot]", type: "Bot" }), pr(12, { merged_at: null })],
      [pr(13, { title: "Fix rounding", updated_at: "2026-10-04T00:00:00Z" })]],
    "releases/29.x": [[pr(20, { title: "[29.x] Fix rounding", base: "releases/29.x" }), pr(21, { title: "[releases/29.x] Other fix", base: "releases/29.x", body: "Backport of #9 to releases/29.x" })]],
  });
  const ctx = context(http);
  const r = await ingestGithubPrs(source, ctx);
  assert.equal(r.ok, true);
  assert.deepEqual(r.counts.new, 2);
  assert.match(r.note!, /^5 merged in main, releases\/29.x; 1 bots, 2 backports skipped; cursor 2026-10-06/);
  const it = ctx.manifest.get("change/bcapps-prs/10")!;
  assert.deepEqual([it.input_hash, it.published_at, it.meta?.major, it.meta?.base, it.meta?.community_contribution], ["sha10:c1", "2026-10-05T10:00:00Z", "30", "main", true]);
  assert.ok(ctx.manifest.get("change/bcapps-prs/13"), "page 2 followed");
  assert.equal(ctx.manifest.get("change/bcapps-prs/11"), null, "bot");
  assert.equal(ctx.manifest.get("change/bcapps-prs/20"), null, "backport");
  const bps = JSON.parse(readFileSync(backportsPath(ctx.dataDir!, "microsoft/BCApps"), "utf8"));
  assert.deepEqual([bps["9"][0].number, bps.unmatched[0].number, bps.unmatched[0].title_key], [21, 20, "fix rounding"]);
  const log = JSON.parse(readFileSync(mergedLogPath(ctx.dataDir!, "microsoft/BCApps"), "utf8"));
  assert.deepEqual(Object.keys(log).sort(), ["10", "11", "13", "20", "21"]);
  assert.deepEqual(log["11"], ["2026-10-05", "main", "bot"]);
});

test("a rerun sends the ETag and gets 304: nothing changes; a later run stops at the cursor", async () => {
  const pages = { main: [[pr(10, { updated_at: "2026-10-06T00:00:00Z" })]], "releases/29.x": [[]] };
  const ctx = context(github(pages, { etag: "v1" }));
  await ingestGithubPrs(source, ctx);
  const again = await ingestGithubPrs(source, { ...ctx, http: github(pages, { etag: "v1" }) });
  assert.deepEqual([again.ok, again.counts.new, again.counts.unchanged], [true, 0, 0], "304 on both branches");
  // new etag: the list is read again, and stops at the first entry older than the cursor
  const later = github({ main: [[pr(30, { updated_at: "2026-10-07T00:00:00Z" }), pr(10, { updated_at: "2026-10-05T00:00:00Z" }), pr(9, { updated_at: "2026-10-01T00:00:00Z" })]], "releases/29.x": [[]] }, { etag: "v2" });
  const r = await ingestGithubPrs(source, { ...ctx, http: later });
  assert.deepEqual([r.counts.new, ctx.manifest.get("change/bcapps-prs/9")], [1, null], "stopped at the cursor");
});

test("a rate limit leaves the cursor and ETag untouched and the run recovers", async () => {
  const pages = { main: [[pr(10, { updated_at: "2026-10-06T00:00:00Z" })], [pr(11, { updated_at: "2026-10-05T00:00:00Z" })]], "releases/29.x": [[pr(20, { base: "releases/29.x" })]] };
  const ctx = context(github(pages, { limitAfter: 1 }));
  const r = await ingestGithubPrs(source, ctx);
  assert.equal(r.ok, false);
  assert.match(r.error!, /rate limit/);
  assert.ok(ctx.manifest.get("change/bcapps-prs/10"), "what was discovered stays");
  const state = existsSync(join(ctx.stateDir!, "github-prs.json")) ? JSON.parse(readFileSync(join(ctx.stateDir!, "github-prs.json"), "utf8")) : {};
  assert.equal(state["bcapps-prs"]?.main, undefined, "no cursor after an incomplete listing");
  const next = await ingestGithubPrs(source, { ...ctx, http: github(pages) });
  assert.equal(next.ok, true);
  assert.ok(ctx.manifest.get("change/bcapps-prs/11") && ctx.manifest.get("change/bcapps-prs/20"), "the next run picks up the rest");
});

test("an old pull request with a fresh comment is skipped without stopping the listing", async () => {
  const http = github({ main: [[pr(5, { merged_at: "2026-01-01T00:00:00Z", updated_at: "2026-10-06T00:00:00Z" }), pr(10, { updated_at: "2026-10-05T00:00:00Z" })]], "releases/29.x": [[]] });
  const ctx = context(http);
  const r = await ingestGithubPrs(source, ctx);
  assert.deepEqual([r.counts.new, ctx.manifest.get("change/bcapps-prs/5"), !!ctx.manifest.get("change/bcapps-prs/10")], [1, null, true]);
});

test("the backfill horizon stops paging", async () => {
  const http = github({ main: [[pr(10), pr(5, { merged_at: "2026-01-01T00:00:00Z", updated_at: "2026-01-01T00:00:00Z" })], [pr(4)]], "releases/29.x": [[]] });
  const ctx = context(http);
  const r = await ingestGithubPrs(source, ctx);
  assert.equal(r.counts.new, 1);
  assert.equal(http.seen.filter((u) => u.includes("base=main") && u.includes("state=closed")).length, 1, "page 2 never requested");
});

test("activity: open pull requests without bots or backports, open issues without pull requests, releases", async () => {
  const http = github({ main: [[]], "releases/29.x": [[]] }, {
    open: [pr(40, { merged_at: null, title: "Add a field", labels: [{ name: "From Fork" }] as any }), pr(41, { merged_at: null, login: "dependabot[bot]", type: "Bot" }), pr(42, { merged_at: null, title: "[29.x] Port", base: "releases/29.x" })],
    issues: [{ number: 7, title: "Posting fails", html_url: "https://github.com/microsoft/BCApps/issues/7", labels: [{ name: "bug" }], user: { login: "u" }, created_at: "2026-10-06T00:00:00Z", comments: 2 },
      { number: 8, title: "a PR", html_url: "x", labels: [], user: null, created_at: "2026-10-06T00:00:00Z", comments: 0, pull_request: {} }],
    releases: [{ tag_name: "v1", name: "", html_url: "https://github.com/microsoft/BCApps/releases/v1", published_at: "2026-10-01T00:00:00Z", prerelease: false, draft: false }, { tag_name: "v2", name: "draft", html_url: "x", published_at: null, prerelease: false, draft: true }],
  });
  const ctx = context(http);
  await ingestGithubPrs(source, ctx);
  const a = JSON.parse(readFileSync(join(ctx.dataDir!, "changes/bcapps/activity.json"), "utf8"));
  assert.deepEqual(a.open.map((p: any) => [p.number, p.major, p.community_contribution]), [[40, "30", true]]);
  assert.deepEqual(a.issues.map((i: any) => i.number), [7]);
  assert.deepEqual(a.releases.map((r: any) => [r.tag, r.name]), [["v1", "v1"]]);
});
