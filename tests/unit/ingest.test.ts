/** Ingest modules against synthetic feeds, a fake HTTP layer and local git repositories. No network. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { SourceDef } from "../../pipeline/lib/config.js";
import type { HttpGet } from "../../pipeline/lib/http.js";
import { Manifest } from "../../pipeline/lib/manifest.js";
import { ingestBlog } from "../../pipeline/ingest/blogs.js";
import { ingestCode } from "../../pipeline/ingest/code.js";
import { ingestDiscovery } from "../../pipeline/ingest/discovery.js";
import { parseFeed, wpPostId } from "../../pipeline/ingest/feed.js";
import { ingestGitContent, pageUrl } from "../../pipeline/ingest/git-content.js";
import { knownHosts, runIngest } from "../../pipeline/ingest/index.js";
import { ingestRoadmap } from "../../pipeline/ingest/roadmap.js";
import { galleryUploads, ingestMarketplace, releaseDates } from "../../pipeline/ingest/marketplace.js";
import type { IngestContext } from "../../pipeline/ingest/types.js";
import { ingestYoutube } from "../../pipeline/ingest/youtube.js";

const now = new Date("2026-10-07T01:00:00Z");
const tmp = (p: string) => mkdtempSync(join(tmpdir(), `bcobs-${p}-`));

type Route = string | { body: string; headers?: Record<string, string>; status?: number };
function fakeHttp(routes: Record<string, Route>): HttpGet & { seen: string[] } {
  const seen: string[] = [];
  const f = (async (url: string) => {
    seen.push(url);
    const key = Object.keys(routes).find((k) => url.startsWith(k));
    if (!key) throw new Error(`HTTP 404 for ${url}`);
    const r = routes[key];
    const route = typeof r === "string" ? { body: r } : r;
    if ((route.status ?? 200) >= 400) throw new Error(`HTTP ${route.status} for ${url}`);
    return new Response(route.body, { status: 200, headers: route.headers });
  }) as HttpGet & { seen: string[] };
  f.seen = seen;
  return f;
}
function context(http: HttpGet, over: Partial<IngestContext> = {}): IngestContext {
  const dir = tmp("ingest");
  return {
    manifest: new Manifest(join(dir, "manifest")), http, now, mirrorsDir: join(dir, "mirrors"), roadmapDir: join(dir, "roadmap"),
    repoUrl: (r) => `https://github.com/${r}`, knownHosts: new Set(["waldo.be"]),
    versions: { majors: {}, repos: {} }, ...over,
  };
}
const src = (over: Partial<SourceDef>): SourceDef =>
  ({ id: "s", kind: "blog", name: "S", url: "https://s.example", tier: "community", language: "en", full_text: false, backfill: { months: 18 }, enabled: true, ...over }) as SourceDef;

const YT = `<?xml version="1.0"?><feed xmlns:yt="http://www.youtube.com/xml/schemas/2015" xmlns="http://www.w3.org/2005/Atom">
<entry><id>yt:video:AAAAAAAAAA1</id><yt:videoId>AAAAAAAAAA1</yt:videoId><title>Posting groups &amp; you</title>
<link rel="alternate" href="https://www.youtube.com/watch?v=AAAAAAAAAA1"/><published>2026-10-01T15:00:15+00:00</published><updated>2026-10-01T15:00:16+00:00</updated></entry>
<entry><id>yt:video:AAAAAAAAAA2</id><yt:videoId>AAAAAAAAAA2</yt:videoId><title>Second</title>
<link rel="alternate" href="https://www.youtube.com/watch?v=AAAAAAAAAA2"/><published>2026-09-01T15:00:00+00:00</published></entry></feed>`;
const RSS = (items: string) => `<?xml version="1.0"?><rss version="2.0"><channel><title>Blog</title>${items}</channel></rss>`;
const rssItem = (id: number, title: string, date: string, host = "s.example") =>
  `<item><title><![CDATA[${title}]]></title><link>https://${host}/${id}/</link><guid isPermaLink="false">https://${host}/?p=${id}</guid><pubDate>${date}</pubDate></item>`;

test("feed parsing: RSS with WordPress guids, Atom with YouTube ids, entities decoded", () => {
  const rss = parseFeed(RSS(rssItem(7, "Hello &#8217;world&#8217;", "Thu, 01 Oct 2026 10:00:00 +0000")));
  assert.deepEqual(rss[0], { id: "https://s.example/?p=7", link: "https://s.example/7/", title: "Hello ’world’", published: "2026-10-01T10:00:00.000Z", updated: null });
  assert.equal(wpPostId(rss[0].id), "7");
  const atom = parseFeed(YT);
  assert.equal(atom[0].videoId, "AAAAAAAAAA1");
  assert.equal(atom[0].title, "Posting groups & you");
  assert.throws(() => parseFeed("<html/>"));
});

test("youtube: one item per video, rerun changes nothing", async () => {
  const ctx = context(fakeHttp({ "https://www.youtube.com/feeds/videos.xml?channel_id=UCx": YT }));
  const s = src({ id: "yt-x", kind: "youtube", channel_id: "UCx", tier: "official" });
  const r = await ingestYoutube(s, ctx);
  assert.deepEqual([r.counts.new, r.note], [2, "2 feed entries"]);
  const item = ctx.manifest.get("video/yt-x/AAAAAAAAAA1")!;
  assert.deepEqual([item.url, item.published_at, item.state], ["https://www.youtube.com/watch?v=AAAAAAAAAA1", "2026-10-01T15:00:15.000Z", "discovered"]);
  assert.equal((await ingestYoutube(s, ctx)).counts.unchanged, 2);
});

test("blogs: WordPress REST pages to the horizon with numeric keys", async () => {
  const page = (posts: unknown[], total: number) => ({ body: JSON.stringify(posts), headers: { "x-wp-totalpages": String(total) } });
  const post = (id: number, d: string) => ({ id, date_gmt: d, modified_gmt: d, link: `https://s.example/p${id}/`, title: { rendered: `Post &amp; ${id}` } });
  const http = fakeHttp({
    "https://s.example/wp-json/wp/v2/posts?per_page=100&page=1": page([post(3, "2026-09-03T10:00:00"), post(2, "2026-08-01T10:00:00")], 2),
    "https://s.example/wp-json/wp/v2/posts?per_page=100&page=2": page([post(1, "2026-01-01T10:00:00")], 2),
  });
  const ctx = context(http);
  const r = await ingestBlog(src({ fetch: { rest: "https://s.example/wp-json/wp/v2/posts", feed: "https://s.example/feed/" } }), ctx);
  assert.equal(r.counts.new, 3);
  assert.match(http.seen[0], /after=2025-04-07T01%3A00%3A00.000Z/);
  const it = ctx.manifest.get("blog/s/3")!;
  assert.deepEqual([it.title, it.published_at, it.input_hash], ["Post & 3", "2026-09-03T10:00:00.000Z", "2026-09-03T10:00:00.000Z"]);
});

test("blogs: feed fallback shares WordPress keys with REST; old posts stay out; scrape is deferred", async () => {
  const feed = RSS(rssItem(3, "New", "Thu, 03 Sep 2026 10:00:00 +0000") + rssItem(1, "Ancient", "Mon, 01 Jan 2024 10:00:00 +0000"));
  const ctx = context(fakeHttp({ "https://s.example/wp-json": { body: "", status: 500 }, "https://s.example/feed/": feed }));
  const r = await ingestBlog(src({ fetch: { rest: "https://s.example/wp-json/wp/v2/posts", feed: "https://s.example/feed/" } }), ctx);
  assert.equal(r.counts.new, 1);
  assert.match(r.note!, /via feed \(REST failed/);
  assert.ok(ctx.manifest.get("blog/s/3"));
  const d = await ingestBlog(src({ id: "scr", fetch: { scrape: "https://s.example/" } }), context(fakeHttp({})));
  assert.deepEqual([d.ok, d.deferred], [true, true]);
});

test("roadmap: product filter, snapshot only on change, diff on status change", async () => {
  const item = (id: number, product: string, status = "In development") => ({
    id, title: `Dynamics 365 Business Central: Finance - Feature ${id}`, description: "<p>Does <b>things</b></p>", status,
    publicDisclosureAvailabilityDate: "October CY2026", publicPreviewDate: "", created: "2026-09-30T23:31:03", modified: "2026-09-30T23:31:03",
    tagsContainer: { products: [{ tagName: product }], releasePhase: [{ tagName: "General Availability" }], cloudInstances: [], platforms: [] },
  });
  const api = "https://www.microsoft.com/releasecommunications/api/v1/m365";
  const s = src({ id: "m365-roadmap", kind: "roadmap-api", tier: "official", fetch: { api, product_filter: "Dynamics 365 Business Central" } });
  const ctx = context(fakeHttp({ [api]: JSON.stringify([item(1, "Dynamics 365 Business Central"), item(2, "Teams"), item(3, "Dynamics 365 Business Central")]) }));
  const r = await ingestRoadmap(s, ctx);
  assert.equal(r.counts.new, 2);
  assert.match(r.note!, /2 Business Central items of 3; snapshot written \(\+2 -0 ~0\)/);
  const it = ctx.manifest.get("roadmap/m365-roadmap/1")!;
  assert.deepEqual([it.title, it.published_at, (it.meta as any).area], ["Feature 1", "2026-09-30T23:31:03.000Z", "Finance"]);
  assert.match((await ingestRoadmap(s, ctx)).note!, /snapshot unchanged/);
  const later = { ...ctx, now: new Date("2026-10-08T01:00:00Z"), http: fakeHttp({ [api]: JSON.stringify([item(1, "Dynamics 365 Business Central", "Launched")]) }) };
  const r2 = await ingestRoadmap(s, later);
  assert.deepEqual([r2.counts.changed, r2.counts.removed], [1, 1]);
  assert.match(r2.note!, /\(\+0 -1 ~1\)/);
  assert.deepEqual(readdirSync(join(ctx.roadmapDir, "diffs")), ["2026-10-07.json", "2026-10-08.json"]);
});

// ------------------------------------------------------------------------------------------------ AL extension (D85)

const GALLERY = "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery";
const CDN = "https://ms-dynamics-smb.gallerycdn.vsassets.io/extensions/ms-dynamics-smb/al";
const assetOf = (version: string, ts: number) => `${CDN}/${version}/${ts}/Microsoft.VisualStudio.Services.Content.Changelog`;
const upload = (version: string, at: string, pre: boolean, ts: number) => ({
  version, flags: "validated", lastUpdated: at,
  files: [{ assetType: "Microsoft.VisualStudio.Services.Content.Changelog", source: assetOf(version, ts) }],
  properties: pre ? [{ key: "Microsoft.VisualStudio.Code.PreRelease", value: "true" }] : [{ key: "Microsoft.VisualStudio.Code.Engine", value: "^1.80.0" }],
});
const galleryBody = (uploads: unknown[]) => JSON.stringify({ results: [{ extensions: [{ extensionName: "al", versions: uploads }] }] });
const UPLOADS = [
  upload("30.0.2813176", "2026-10-01T13:54:23.493Z", true, 1790862369724),
  upload("18.0.2819426", "2026-10-01T19:32:21.25Z", false, 1790882651398),
  upload("18.0.2726309", "2026-09-09T09:44:06.43Z", false, 1788946547879),
  upload("18.0.2400000", "2026-03-06T10:00:00Z", true, 1772791200000),
];
const PRE_MD = [
  "# Business Central 2027 release wave 1", "## Version 30.0", "", "### Markdown page fields", "- Added `ExtendedDatatype = Markdown`.", "",
  "# Business Central 2026 release wave 2", "## Version 18.0", "", "### Inherent permissions validation in multi-root workspaces", "", "The compiler now reports AL0720.", "",
  "### GitHub issues", "- [#8280](https://github.com/microsoft/AL/issues/8280) Fixed `al_publish` hanging.", "",
].join("\n");
const STABLE_MD = [
  "# Business Central 2026 release wave 2", "## Version 18.0", "", "### GitHub issues", "- [#8280](https://github.com/microsoft/AL/issues/8280) Fixed `al_publish` hanging.",
  "- [#8273](https://github.com/microsoft/AL/issues/8273) Fixed `al_downloadsymbols`.", "", "### Share packaged resources between apps", "", "Apps can now expose resources.", "",
].join("\n");
const AL_SRC = src({
  id: "al-language-extension", kind: "vsmarketplace", tier: "official", full_text: true, url: "https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog",
  fetch: { api: GALLERY, extension: "ms-dynamics-smb.al" },
});
const MAJORS = JSON.parse(readFileSync(join(import.meta.dirname, "../../config/versions.json"), "utf8")).majors;
const alRoutes = (uploads: unknown[], pre = PRE_MD, stable = STABLE_MD) => ({
  [GALLERY]: galleryBody(uploads), [assetOf("30.0.2813176", 1790862369724)]: pre, [assetOf("18.0.2819426", 1790882651398)]: stable,
});
const releasesOf = (ctx: IngestContext) => join(ctx.roadmapDir, "..", "releases", "al");
const snapshotOf = (ctx: IngestContext, date = "2026-10-07") => JSON.parse(readFileSync(join(releasesOf(ctx), "snapshots", `${date}.json`), "utf8"));

test("al extension: first run discovers one item per merged version, writes the snapshot and a from-null diff (test 11, 14)", async () => {
  const http = fakeHttp(alRoutes(UPLOADS));
  const methods: (string | undefined)[] = [];
  const spy = (async (url: string, opts?: Parameters<HttpGet>[1]) => { if (url === GALLERY) methods.push(opts?.method); return http(url, opts); }) as HttpGet;
  const ctx = context(spy, { versions: { majors: MAJORS, repos: {} } });
  const r = await ingestMarketplace(AL_SRC, ctx);
  assert.equal(r.counts.new, 2);
  assert.match(r.note!, /2 versions from 4 uploads; stable 18\.0\.2819426 \(2026-10-01\), pre-release 30\.0\.2813176 \(2026-10-01\)/);
  assert.match(r.note!, /snapshot written \(\+2 -0 ~0\)/);
  assert.deepEqual(methods, ["POST"]);
  const snap = snapshotOf(ctx);
  assert.deepEqual([snap.tracks.stable.version, snap.tracks.prerelease.version, snap.uploads, snap.extension], ["18.0.2819426", "30.0.2813176", 4, "ms-dynamics-smb.al"]);
  assert.equal(snap.tracks.stable.bytes, Buffer.byteLength(STABLE_MD));
  assert.deepEqual(snap.versions.map((v: any) => v.key), ["al-30.0", "al-18.0"]);
  const diff = JSON.parse(readFileSync(join(releasesOf(ctx), "diffs", "2026-10-07.json"), "utf8"));
  assert.deepEqual([diff.from, diff.added, diff.entries], [null, ["al-30.0", "al-18.0"], {}]);
  // test 14: the stable upload is newer: its order and its github-issues body win, the pre-release-only entry is appended
  const v18 = snap.versions[1];
  assert.deepEqual(v18.entries.map((e: any) => e.slug), ["github-issues", "share-packaged-resources-between-apps", "inherent-permissions-validation-in-multi-root-workspaces"]);
  assert.deepEqual(v18.entries[0].issues, [8273, 8280]);
  assert.equal(v18.merged_tracks, true);
  assert.equal(snap.versions[0].merged_tracks, false);
  assert.deepEqual([v18.wave, v18.major, v18.preview_at, v18.released_at], ["2026 release wave 2", "29", "2026-03-06", "2026-09-09"]);
  const it = ctx.manifest.get("release/al-language-extension/al-18.0")!;
  assert.deepEqual([it.title, it.published_at, it.tier, it.url], ["AL Language extension 18.0", "2026-09-09T00:00:00.000Z", "official", AL_SRC.url]);
  assert.deepEqual(it.meta, { version: "18.0", wave: "2026 release wave 2", major: "29", preview_at: "2026-03-06", released_at: "2026-09-09", prerelease: false, entries: 3 });
  assert.equal((ctx.manifest.get("release/al-language-extension/al-30.0")!.meta as any).prerelease, true);
});

test("al extension: a quiet night sends one gallery request, downloads nothing and writes nothing (test 12)", async () => {
  const ctx = context(fakeHttp(alRoutes(UPLOADS)), { versions: { majors: MAJORS, repos: {} } });
  await ingestMarketplace(AL_SRC, ctx);
  const http = fakeHttp(alRoutes(UPLOADS));
  const later = { ...ctx, http, now: new Date("2026-10-08T01:00:00Z") };
  const r = await ingestMarketplace(AL_SRC, later);
  assert.equal(r.counts.unchanged, 2);
  assert.deepEqual(http.seen, [GALLERY]);
  assert.match(r.note!, /^unchanged; latest 18\.0\.2819426 uploaded 2026-10-01/);
  assert.deepEqual(readdirSync(join(releasesOf(ctx), "snapshots")), ["2026-10-07.json"]);
});

test("al extension: a new pre-release upload that adds an entry makes the version stale and diffs the entry (test 13)", async () => {
  const ctx = context(fakeHttp(alRoutes(UPLOADS)), { versions: { majors: MAJORS, repos: {} } });
  await ingestMarketplace(AL_SRC, ctx);
  const id = "release/al-language-extension/al-18.0";
  const done = ctx.manifest.get(id)!;
  ctx.manifest.save({ ...done, state: "published", stages: { ...done.stages, fetched: { at: done.stages.discovered!.at }, published: { at: done.stages.discovered!.at } } });
  // the new pre-release build carries the stable track's issue list and one new entry
  const pre2 = PRE_MD.replace("### GitHub issues", "### Query ReadState supports ReadCommitted\n\nQueries can now read committed data.\n\n### GitHub issues")
    .replace("hanging.\n", "hanging.\n- [#8273](https://github.com/microsoft/AL/issues/8273) Fixed `al_downloadsymbols`.\n");
  const uploads = [upload("30.0.2900000", "2026-10-08T09:00:00Z", true, 1791450000000), ...UPLOADS];
  const http = fakeHttp({ [GALLERY]: galleryBody(uploads), [assetOf("30.0.2900000", 1791450000000)]: pre2, [assetOf("18.0.2819426", 1790882651398)]: STABLE_MD });
  const later = { ...ctx, http, now: new Date("2026-10-09T01:00:00Z") };
  const r = await ingestMarketplace(AL_SRC, later);
  assert.equal(r.counts.changed, 1);
  assert.equal(ctx.manifest.get(id)!.state, "stale");
  assert.match(r.note!, /snapshot written \(\+0 -0 ~1: al-18\.0 \+1 entry\)/);
  const diff = JSON.parse(readFileSync(join(releasesOf(ctx), "diffs", "2026-10-09.json"), "utf8"));
  assert.deepEqual([diff.from, diff.changed, diff.entries], ["2026-10-07", ["al-18.0"], { "al-18.0": { added: ["query-readstate-supports-readcommitted"], changed: [], removed: [] } }]);
  assert.equal(snapshotOf(ctx, "2026-10-09").tracks.prerelease.version, "30.0.2900000");
});

test("al extension: dates per major.minor from the first pre-release and the first stable upload (test 15)", () => {
  const uploads = galleryUploads(JSON.parse(galleryBody([
    upload("18.0.3", "2026-09-09T09:00:00Z", false, 3), upload("18.0.2", "2026-06-01T09:00:00Z", true, 2), upload("18.0.1", "2026-03-06T09:00:00Z", true, 1),
    upload("16.3.9", "2026-01-22T09:00:00Z", false, 9),
  ])));
  assert.deepEqual(uploads.map((u) => [u.version, u.prerelease]), [["18.0.3", false], ["18.0.2", true], ["18.0.1", true], ["16.3.9", false]]);
  const d = releaseDates(uploads);
  assert.deepEqual(d.get("18.0"), { preview_at: "2026-03-06", released_at: "2026-09-09" });
  assert.deepEqual(d.get("16.3"), { preview_at: null, released_at: "2026-01-22" });
});

test("al extension: a gallery error throws, runIngest isolates it and the last snapshot stays (test 16)", async () => {
  const ctx = context(fakeHttp(alRoutes(UPLOADS)), { versions: { majors: MAJORS, repos: {} } });
  await ingestMarketplace(AL_SRC, ctx);
  const before = readFileSync(join(releasesOf(ctx), "snapshots", "2026-10-07.json"), "utf8");
  const broken = { ...ctx, http: fakeHttp({ [GALLERY]: { body: "", status: 500 } }), now: new Date("2026-10-08T01:00:00Z") };
  await assert.rejects(ingestMarketplace(AL_SRC, broken), /HTTP 500/);
  const [res] = await runIngest([AL_SRC], broken);
  assert.deepEqual([res.ok, res.kind], [false, "vsmarketplace"]);
  assert.equal(readFileSync(join(releasesOf(ctx), "snapshots", "2026-10-07.json"), "utf8"), before);
  assert.deepEqual(readdirSync(join(releasesOf(ctx), "snapshots")), ["2026-10-07.json"]);
});

test("discovery: suggests unregistered hosts only, creates no items", async () => {
  const feed = RSS(rssItem(1, "Known", "Thu, 01 Oct 2026 10:00:00 +0000", "waldo.be") + rssItem(2, "New voice", "Thu, 01 Oct 2026 10:00:00 +0000", "newblog.example") + rssItem(3, "Again", "Thu, 01 Oct 2026 10:00:00 +0000", "newblog.example"));
  const ctx = context(fakeHttp({ "https://digest.example/feed": feed }));
  const r = await ingestDiscovery(src({ id: "d", kind: "discovery", fetch: { feed: "https://digest.example/feed" } }), ctx);
  assert.deepEqual(r.suggestions!.map((x) => [x.host, x.count]), [["newblog.example", 2]]);
  assert.equal(ctx.manifest.list().length, 0);
  assert.ok(knownHosts([src({ url: "https://www.kauffmann.nl", fetch: { feed: "https://www.kauffmann.nl/feed/" } })]).has("kauffmann.nl"));
});

// ------------------------------------------------------------------------------------------------ git-backed

function gitRepo(): string {
  const dir = tmp("repo");
  const g = (...a: string[]) => execFileSync("git", a, { cwd: dir, stdio: "pipe" });
  g("init", "-q", "-b", "main");
  g("config", "user.name", "t"); g("config", "user.email", "t@example.com");
  return dir;
}
function commit(dir: string, files: Record<string, string | null>, msg: string, date: string) {
  for (const [p, c] of Object.entries(files)) {
    if (c === null) rmSync(join(dir, p));
    else { mkdirSync(join(dir, p, ".."), { recursive: true }); writeFileSync(join(dir, p), c); }
  }
  execFileSync("git", ["add", "-A"], { cwd: dir });
  execFileSync("git", ["commit", "-q", "-m", msg], { cwd: dir, env: { ...process.env, GIT_COMMITTER_DATE: date, GIT_AUTHOR_DATE: date } });
}

test("git content: pages keyed by path, Learn URLs, blob hashes, commit dates, removals", async () => {
  const repo = gitRepo();
  commit(repo, { "business-central/finance-setup.md": "a", "business-central/TOC.md": "toc", "business-central/includes/x.md": "inc", "business-central/sales/index.md": "s", "README.md": "r" }, "one", "2026-01-01T10:00:00Z");
  commit(repo, { "business-central/finance-setup.md": "a2" }, "two", "2026-09-01T10:00:00Z");
  const s = src({ id: "learn", kind: "docs-git", tier: "official", repo: "MicrosoftDocs/x", branch: "main", paths: ["business-central/"], url: "https://learn.microsoft.com/dynamics365/business-central/", backfill: { all: true } });
  const ctx = context(fakeHttp({}), { repoUrl: () => repo });
  const r = await ingestGitContent(s, ctx);
  assert.equal(r.counts.new, 2);
  const fin = ctx.manifest.get("docs/learn/business-central/finance-setup.md")!;
  assert.deepEqual([fin.url, fin.published_at], ["https://learn.microsoft.com/dynamics365/business-central/finance-setup", "2026-09-01T10:00:00.000Z"]);
  assert.match(fin.input_hash!, /^[0-9a-f]{40}$/);
  assert.equal(ctx.manifest.get("docs/learn/business-central/sales/index.md")!.url, "https://learn.microsoft.com/dynamics365/business-central/sales/");

  ctx.manifest.save({ ...fin, state: "fetched", title: "Set up finance", stages: { ...fin.stages, fetched: { at: "2026-10-01T00:00:00Z" } } });
  commit(repo, { "business-central/finance-setup.md": "a3", "business-central/sales/index.md": null }, "three", "2026-10-01T10:00:00Z");
  const r2 = await ingestGitContent(s, ctx);
  assert.equal(ctx.manifest.get("docs/learn/business-central/finance-setup.md")!.title, "Set up finance", "a fetched Learn title survives re-ingest");
  assert.deepEqual([r2.counts.changed, r2.counts.removed], [1, 1]);
  assert.equal(ctx.manifest.get("docs/learn/business-central/sales/index.md")!.skip, "removed-upstream");
  assert.ok(existsSync(join(ctx.mirrorsDir, "learn.git")));

  const links = { ...s, id: "alg", kind: "guidelines-git" as const, mode: "links-only" as const, repo: "microsoft/alguidelines" };
  await ingestGitContent(links, ctx);
  const g = ctx.manifest.get("guidelines/alg/business-central/finance-setup.md")!;
  assert.deepEqual([g.state, g.skip, g.url], ["skipped", "links-only", "https://github.com/microsoft/alguidelines/blob/main/business-central/finance-setup.md"]);
  assert.equal(pageUrl(s, "business-central/index.md"), "https://learn.microsoft.com/dynamics365/business-central/");
});

test("code: one job per configured branch, head commit as input hash", async () => {
  const repo = gitRepo();
  commit(repo, { "a.al": "x" }, "one", "2026-01-01T10:00:00Z");
  execFileSync("git", ["branch", "releases/29.x"], { cwd: repo });
  const versions = {
    repos: { bcapps: "https://github.com/microsoft/BCApps" },
    majors: { "29": { bcapps_branch: "releases/29.x" }, "30": { bcapps_branch: "main" }, "31": { bcapps_branch: "releases/31.x" } },
  };
  const ctx = context(fakeHttp({}), { repoUrl: () => repo, versions });
  const r = await ingestCode(src({ id: "bcapps", kind: "code-git", tier: "official", repo: "microsoft/BCApps", mode: "metadata-only" }), ctx);
  assert.equal(r.counts.new, 2);
  assert.equal(r.ok, false);
  assert.match(r.error!, /releases\/31\.x/);
  assert.equal((ctx.manifest.get("code/bcapps/29")!.meta as any).branch, "releases/29.x");
  // the input hash carries the extractor version and a hash of the source's code config: a folder fix re-runs the job
  const hash = ctx.manifest.get("code/bcapps/29")!.input_hash!;
  assert.match(hash, /^[0-9a-f]{40}:x\d+:c[0-9a-f]{8}$/, hash);
  const ctx2 = context(fakeHttp({}), { repoUrl: () => repo, versions: { ...versions, code: { bcapps: { w1: [{ app: "Base Application", path: "elsewhere" }] } } } });
  await ingestCode(src({ id: "bcapps", kind: "code-git", tier: "official", repo: "microsoft/BCApps", mode: "metadata-only" }), ctx2);
  assert.notEqual(ctx2.manifest.get("code/bcapps/29")!.input_hash, hash, "a changed code config changes the input hash");
});

test("code: a published snapshot item goes back to linked when only the call graph's inputs changed (D67)", async () => {
  const repo = gitRepo();
  commit(repo, { "a.al": "x" }, "one", "2026-01-01T10:00:00Z");
  execFileSync("git", ["branch", "releases/29.x"], { cwd: repo });
  const versions = {
    repos: { bcapps: "https://github.com/microsoft/BCApps" }, snapshot: ["29", "30"],
    majors: { "29": { bcapps_branch: "releases/29.x", snapshot_source: "bcapps" }, "30": { bcapps_branch: "main", snapshot_source: "sandbox-history" } },
  };
  const ctx = context(fakeHttp({}), { repoUrl: () => repo, versions });
  const source = src({ id: "bcapps", kind: "code-git", tier: "official", repo: "microsoft/BCApps", mode: "metadata-only" });
  await ingestCode(source, ctx);
  const publish = (id: string, linked: Record<string, unknown>) => {
    const it = ctx.manifest.get(id)!;
    const at = { at: now.toISOString() };
    ctx.manifest.save({ ...it, state: "published", stages: { ...it.stages, fetched: at, extracted: at, linked: { ...at, ...linked }, published: at } });
  };
  publish("code/bcapps/29", {});
  publish("code/bcapps/30", {});
  const r = await ingestCode(source, ctx);
  assert.equal(ctx.manifest.get("code/bcapps/29")!.state, "extracted", "no graph key yet: the call graph runs");
  assert.equal(ctx.manifest.get("code/bcapps/30")!.state, "published", "not this source's snapshot major: untouched");
  assert.match(r.note!, /1 back to linked/);
  const { graphKey, graphifyPin, ignoreTemplate } = await import("../../pipeline/code/callgraph.js");
  publish("code/bcapps/29", { graph_key: graphKey(graphifyPin(), { apps: true }, ignoreTemplate()) });
  await ingestCode(source, ctx);
  assert.equal(ctx.manifest.get("code/bcapps/29")!.state, "published", "same key: nothing to do");
  await ingestCode(source, { ...ctx, versions: { ...versions, callgraph: { apps: false } } });
  assert.equal(ctx.manifest.get("code/bcapps/29")!.state, "extracted", "the scope switch reruns the graph");
});

test("runIngest isolates a failing source", async () => {
  const ctx = context(fakeHttp({ "https://www.youtube.com/feeds/videos.xml?channel_id=UCok": YT }));
  const results = await runIngest([
    src({ id: "yt-ok", kind: "youtube", channel_id: "UCok" }),
    src({ id: "yt-broken", kind: "youtube", channel_id: "UCbroken" }),
    src({ id: "off", kind: "youtube", channel_id: "UCok", enabled: false }),
  ], ctx);
  assert.deepEqual(results.map((r) => [r.id, r.ok]), [["yt-ok", true], ["yt-broken", false]]);
  assert.match(results[1].error!, /HTTP 404/);
});
