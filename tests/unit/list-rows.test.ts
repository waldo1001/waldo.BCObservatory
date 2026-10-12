import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { PageRecord } from "@bc-observatory/search";
import {
  changeRow, facetValues, listOrder, moreText, postRow, relHref, staticStatus, titleItem, videoRow,
} from "../../site/src/scripts/list-rows.js";
import { badgesHtml } from "../../site/src/lib/badges.js";
import { mediaRows, readMediaRecords } from "../../site/src/lib/media-rows.js";
import { listPoster } from "../../site/src/lib/stage.js";

// D91 C1: the rows of the changes, videos and posts lists, the same at build and in the browser
const ALGO: PageRecord = { path: "changes/al-go/2229", type: "change", title: "#2229 Surface empty BCPT results as a warning instead of silent success", summary: "When BCPT performance tests produce a results file with no entries, GetBcptSummaryMD now returns a message that appears in the GitHub step summary instead of an empty string. A missing results file still yields an empty summary.", tier: "official", system: "platform", date: "2026-07-22", tags: ["fix", "main"], source: "al-go-prs", status: "fix", branch: "main", objects: 0 };
const BCAPPS: PageRecord = { path: "changes/bcapps/12306", type: "change", title: "#12306 Warn before releasing a purchase order that was already sent electronically", summary: "A warning now appears when releasing a purchase order that was already electronically sent, preventing silent re-export of the same e-document with the same identifier that would later cause conflicts.", tier: "official", system: "integration", date: "2026-10-07", tags: ["feature", "main", "bc30", "codeunit e-document subscribers"], source: "bcapps-prs", status: "feature", branch: "main", major: "30", objects: 1 };
const VIDEO: PageRecord = { path: "videos/-SGaVGOkiF0", type: "video", title: "Introducing Payment Times Analysis in Business Central (2023 release wave 2)", summary: "Payment Times Analysis in Business Central (2023 release wave 2) analyzes whether vendor and customer payments happen on or after due dates. It can aggregate by company size or by custom period, and the video demos both, including drill-down, history and printing.", tier: "official", date: "2023-12-11", source: "yt-microsoft", path_label: "Microsoft Dynamics 365 Business Central (YouTube)", review: "reviewed" };
const POST: PageRecord = { path: "posts/aardvarklabs-blog/1609", type: "post", title: "Integrating AI in Business Central: A Step-by-Step Guide", summary: "Step-by-step guide.", tier: "community", date: "2025-04-18", source: "aardvarklabs-blog", path_label: "Aardvark Labs" };
const ICON = "https://aardvarklabs.blog/wp-content/uploads/2024/04/design-1.png?w=32";
const ch = (path: string, date?: string): PageRecord => ({ path, type: "change", title: path, summary: "", tier: "official", ...(date ? { date } : {}) });

test("listOrder: day newest first, then a change's PR number highest first, then the path", () => {
  const rows = [ch("changes/bcapps/9", "2026-10-07"), ch("changes/al-go/2392", "2026-10-07"), ch("changes/bcapps/12306", "2026-10-07"), ch("changes/bcapps/12198", "2026-10-08")];
  assert.deepEqual(rows.sort(listOrder).map((r) => r.path.slice(8)), ["bcapps/12198", "bcapps/12306", "al-go/2392", "bcapps/9"]);
  const v = (p: string, date?: string): PageRecord => ({ ...ch(`videos/${p}`, date), type: "video" });
  assert.deepEqual([v("b", "2026-01-01"), v("a", "2026-01-01"), v("c")].sort(listOrder).map((r) => r.path), ["videos/a", "videos/b", "videos/c"]);
});

test("relHref: a row's link relative to its section index", () => {
  assert.deepEqual([relHref("changes/al-go/2229"), relHref("videos/-SGaVGOkiF0"), relHref("posts/aardvarklabs-blog/1609")], ["al-go/2229/", "-SGaVGOkiF0/", "aardvarklabs-blog/1609/"]);
});

test("changeRow: today's row, links relative; a record of before D91 prints what it has; text escaped", () => {
  assert.equal(changeRow(ALGO), `<li><a href="al-go/2229/">#2229 Surface empty BCPT results as a warning instead of silent success</a><span class="row-meta"><span class="badge">fix</span></span><div class="meta">main · 2026-07-22 · 0 objects</div><div>When BCPT performance tests produce a results file with no entries, GetBcptSummaryMD now returns a message that appears in the GitHub step summary instead of an empty string. A missing results file still yields an empty summary.</div></li>`);
  assert.equal(changeRow(BCAPPS), `<li><a href="bcapps/12306/">#12306 Warn before releasing a purchase order that was already sent electronically</a><span class="row-meta"><span class="badge">feature</span></span><div class="meta">main · BC30 · 2026-10-07 · 1 object</div><div>A warning now appears when releasing a purchase order that was already electronically sent, preventing silent re-export of the same e-document with the same identifier that would later cause conflicts.</div></li>`);
  assert.ok(changeRow({ ...BCAPPS, breaking: true, community: true }).includes(`<span class="row-meta"><span class="badge">feature</span><span class="badge obsolete">breaking</span><span class="badge">community contribution</span></span>`));
  assert.ok(changeRow({ ...ALGO, branch: undefined, objects: undefined }).includes(`<div class="meta">2026-07-22</div>`));
  assert.ok(changeRow({ ...ALGO, title: 'A <b> & "c"' }).includes(`<a href="al-go/2229/">A &lt;b&gt; &amp; &quot;c&quot;</a>`));
});

test("videoRow: poster unless the author opted out, tier and review badges", () => {
  assert.equal(videoRow(VIDEO), `<li class="has-poster"><a class="row-poster-link" href="-SGaVGOkiF0/" tabindex="-1" aria-hidden="true"><img class="row-poster" src="https://i.ytimg.com/vi/-SGaVGOkiF0/mqdefault.jpg" alt="" width="320" height="180" loading="lazy" decoding="async"></a><div class="row-body"><a href="-SGaVGOkiF0/">Introducing Payment Times Analysis in Business Central (2023 release wave 2)</a><span class="row-meta"><span class="badge official">official - Microsoft</span><span class="badge reviewed">reviewed - checked by Opus</span></span><div class="meta">Microsoft Dynamics 365 Business Central (YouTube) · 2023-12-11</div><div>${VIDEO.summary}</div></div></li>`);
  const off = videoRow({ ...VIDEO, embed: false });
  assert.ok(off.startsWith(`<li><div class="row-body">`) && !off.includes("row-poster"));
  assert.ok(videoRow({ ...VIDEO, path: "videos/a_b-C" }).includes(`src="${listPoster("a_b-C")}"`), "the poster is lib/stage.ts's listPoster");
  assert.equal(videoRow({ ...VIDEO, review: undefined }).match(/class="badge /g)?.length, 1, "the tier only");
});

test("postRow and titleItem", () => {
  assert.equal(postRow(POST, ICON), `<li><img class="row-icon" src="${ICON}" alt="" width="16" height="16" loading="lazy" decoding="async" referrerpolicy="strict-origin-when-cross-origin" onerror="this.remove()"><a href="aardvarklabs-blog/1609/">Integrating AI in Business Central: A Step-by-Step Guide</a> <span class="meta">Aardvark Labs · 2025-04-18</span></li>`);
  assert.equal(postRow(POST, null), `<li><a href="aardvarklabs-blog/1609/">Integrating AI in Business Central: A Step-by-Step Guide</a> <span class="meta">Aardvark Labs · 2025-04-18</span></li>`);
  assert.equal(titleItem(ALGO), `<li><a href="al-go/2229/">#2229 Surface empty BCPT results as a warning instead of silent success</a></li>`);
});

test("staticStatus and moreText: the bottom line and the button", () => {
  assert.deepEqual([staticStatus(1083), staticStatus(12)], ["Newest 50 of 1,083", "All 12 shown"]);
  assert.deepEqual(moreText(50, 1083), { button: "Show 100 more", status: "Showing 50 of 1,083" });
  assert.deepEqual(moreText(50, 118), { button: "Show the last 68", status: "Showing 50 of 118" });
  assert.deepEqual(moreText(28, 28), { button: null, status: "All 28 shown" });
  assert.deepEqual(moreText(0, 0), { button: null, status: "Nothing matches these filters." });
});

test("facetValues: pill order, labels and counts for the build", () => {
  const v = facetValues([ALGO, BCAPPS, { ...BCAPPS, path: "changes/bcapps/1", major: "29", status: "fix" }], "change");
  const flat = (xs: { id: string; label: string; count: number }[]) => xs.map((x) => [x.id, x.label, x.count]);
  assert.deepEqual(flat(v.repo), [["bcapps", "BCApps", 2], ["al-go", "AL-Go", 1], ["bcquality", "BCQuality", 0]]);
  assert.deepEqual(flat(v.kind), [["feature", "feature", 1], ["fix", "fix", 2]]);
  assert.deepEqual(flat(v.major), [["30", "BC30", 1], ["29", "BC29", 1], ["none", "no major", 1]]);
  const vid = (source: string, label: string, date: string): PageRecord => ({ ...VIDEO, path: `videos/${source}${date}`, source, path_label: label, date });
  const m = facetValues([vid("a", "B label", "2024-01-01"), vid("a", "B label", "2026-01-01"), vid("b", "A label", "2024-02-01"), vid("b", "A label", "2026-02-01"), vid("c", "C", "2026-03-01")], "video");
  assert.deepEqual(m.source.map((x) => x.id), ["b", "a", "c"], "count, then label");
  assert.deepEqual(m.year.map((x) => x.id), ["2026", "2024"]);
});

test("badgesHtml: exactly what Badges.astro renders", () => {
  assert.equal(badgesHtml("official", "reviewed"), `<span class="badge official">official - Microsoft</span><span class="badge reviewed">reviewed - checked by Opus</span>`);
  assert.equal(badgesHtml("community", "weird"), `<span class="badge community">community - not Microsoft</span><span class="badge unreviewed">unreviewed - model text not yet checked</span>`);
  assert.equal(badgesHtml(undefined, null), "");
});

test("readMediaRecords and mediaRows: the manifest's media shards only, a type in list order", () => {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-media-"));
  writeFileSync(join(dir, "index-manifest.json"), JSON.stringify({ shards: [{ file: "pages-hubs-111111111111.json", kind: "hubs" }, { file: "pages-media-222222222222.json", kind: "media" }] }));
  writeFileSync(join(dir, "pages-hubs-111111111111.json"), JSON.stringify([{ ...ALGO, path: "topics/a", type: "topic" }]));
  writeFileSync(join(dir, "pages-media-222222222222.json"), JSON.stringify([ALGO, VIDEO, BCAPPS, POST]));
  assert.deepEqual(readMediaRecords(dir).map((r) => r.path), [ALGO.path, VIDEO.path, BCAPPS.path, POST.path]);
  assert.deepEqual(mediaRows("change", dir).map((r) => r.path), [BCAPPS.path, ALGO.path]);
  const none = mkdtempSync(join(tmpdir(), "bcobs-media-"));
  writeFileSync(join(none, "index-manifest.json"), JSON.stringify({ shards: [{ file: "pages-hubs-111111111111.json", kind: "hubs" }] }));
  assert.throws(() => readMediaRecords(none), /no media shard/);
});
