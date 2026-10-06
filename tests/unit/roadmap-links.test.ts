import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { readJson, writeJson } from "../../pipeline/lib/fsx.js";
import { LlmBudgetExhausted, type LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { validate } from "../../pipeline/lib/schema.js";
import type { Llm, VideoExtraction } from "../../pipeline/extract/video.js";
import { candidates, linkRoadmap, linksPath, quoteIn, type RoadmapSystems } from "../../pipeline/link/roadmap.js";
import { coverageByFeature, loadLinks, loadReview, roadmapByVideoFeature, type RoadmapLinks } from "../../pipeline/link/coverage.js";
import { reviewCoverage } from "../../pipeline/review/coverage.js";
import { docExtractionPath } from "../../pipeline/extract/docs.js";
import { renderFeaturePage } from "../../pipeline/render/feature.js";
import { renderVideoPage } from "../../pipeline/render/video.js";

const NOW = new Date("2026-10-07T01:00:00Z");
const entry = (id: string, area: string, title: string, over: Record<string, unknown> = {}) => ({
  id, title, area, description: `${title}: the description.`, status: "In development", release_phase: "General Availability",
  ga: "December CY2026", preview: "October CY2026", created: "2026-09-30T00:00:00.000Z", modified: "2026-09-30T00:00:00.000Z", cloud: [], platforms: [], ...over,
});
const ROADMAP = [
  entry("100", "Expense Agent", "Calculate withholding tax in expense reports"),
  entry("200", "Finance", "Use withholding taxes with employee transactions", { status: "Launched" }),
  entry("300", "Development", "Turn indexes on and off in AL"),
];
const video = (over: Partial<VideoExtraction> = {}): VideoExtraction => ({
  video_id: "mT_0VKqdEzA", item_id: "video/yt-microsoft/mT_0VKqdEzA", title: "What's new: WHT for expenses", duration_s: 600,
  systems: ["finance"], topics: [], chapters: [],
  features: [
    { name: "Withholding tax for employee expenses", description: "Extended withholding tax from vendors to employees.", status: "unclear", status_evidence_t: null, status_evidence_quote: null, status_evidence_verified: false, t_start: 12.4, t_end: 60, is_demoed: true, caveats: [], tags: [], system: "finance" },
    { name: "Employee card fields", description: "New fields on the employee card.", status: "announced", status_evidence_t: 80, status_evidence_quote: "coming soon", status_evidence_verified: true, t_start: 80, t_end: 90, is_demoed: false, caveats: [], tags: [], system: "hr" },
  ],
  objects: [], presenters: [], quotes: [], disclaimers: [], checks: { quotes_kept: 0, quotes_dropped: 0, evidence_verified: 1, evidence_unverified: 0 }, windows: 1, prompt_version: 1, llm: [],
  ...over,
});
const doc = { item_id: "docs/learn/bc/wht.md", url: "https://learn/wht", title: "Withholding tax", blob: null, summary: "Set up withholding tax for employees and vendors.", systems: ["finance"], topics: [], objects: [], features: ["employee withholding tax"], versions: [], parts: 1, prompt_version: 1, llm: [] };

const DOC_PATH = (dataDir: string) => docExtractionPath(dataDir, { id: doc.item_id, source: "learn" });
function world() {
  const dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-links-")), "data");
  writeJson(join(dataDir, "roadmap/snapshots/2026-10-06.json"), { taken_at: "x", hash: "h", count: ROADMAP.length, items: ROADMAP });
  writeJson(join(dataDir, "extract/video/mT_0VKqdEzA.json"), video());
  writeJson(DOC_PATH(dataDir), doc);
  return dataDir;
}
/** Classification puts 100 also in finance; matching answers with what `match` returns. */
function fake(match: (r: LlmRequest) => unknown[]) {
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(r: LlmRequest) => {
    reqs.push(r);
    const ids: string[] = (r.schema as any).properties.items?.items.properties.id.enum ?? [];
    const output = r.label?.startsWith("roadmap systems")
      ? { items: ids.map((id) => ({ id, systems: id === "100" ? ["copilot", "finance"] : id === "300" ? ["development"] : ["finance"] })) }
      : { matches: match(r) };
    return { output: output as T, cached: false, meta: { model: "claude-haiku-4-5", cost_usd: 0.02 } as any };
  };
  return { llm, reqs };
}
const opts = (llm: Llm, quota = 50) => ({ quota, deadline: new Date("2099-01-01"), clock: () => NOW, llm });
const matchCalls = (reqs: LlmRequest[]) => reqs.filter((r) => !r.label?.startsWith("roadmap systems"));

test("quotes must be grounded: at least 3 words, in order, gaps allowed, no invented words", () => {
  const text = "Withholding tax entries automatically appear in the preview posting view.";
  assert.ok(quoteIn("withholding tax entries automatically appear in preview posting", text));
  assert.ok(!quoteIn("preview posting withholding", text), "order matters");
  assert.ok(!quoteIn("withholding tax entries for employees", text), "an invented word rejects");
  assert.ok(!quoteIn("preview posting", text), "too short");
  assert.ok(!quoteIn(`${text} ${text} ${text}`, `${text} ${text} ${text}`), "more than 20 words is the whole text, not a quote");
});

test("candidates: the area system always, classified systems only while the entry is unchanged", () => {
  const roadmap = new Map(ROADMAP.map((e) => [e.id, e]));
  assert.deepEqual(candidates(roadmap).map((c) => [c.id, c.systems]), [["100", ["copilot"]], ["200", ["finance"]], ["300", ["development"]]]);
  const stale: RoadmapSystems["items"] = { "100": { hash: "old", systems: ["finance"] } };
  assert.deepEqual(candidates(roadmap, stale)[0].systems, ["copilot"]);
});

test("schema allows only the call's refs and candidate ids; validation drops ungrounded, foreign and generic matches", async () => {
  const dataDir = world();
  const { llm, reqs } = fake((r) => r.label!.startsWith("video/") ? [
    { ref: "f1", roadmap_id: "100", relation: "covers", quote: "Extended withholding tax from vendors to employees" },
    { ref: "f1", roadmap_id: "200", relation: "covers", quote: "withholding tax for employee expenses" },
    { ref: "f2", roadmap_id: "200", relation: "covers", quote: "new fields for payroll" }, // not in the text
    { ref: "f2", roadmap_id: "100", relation: "related", quote: "New fields on the employee card" }, // same area only: dropped
  ] : [{ ref: "d1", roadmap_id: "200", relation: "covers", quote: "employee withholding tax" }]);
  const { run, links } = await linkRoadmap(dataDir, opts(llm));
  const v = matchCalls(reqs).find((r) => r.label!.startsWith("video/"))!;
  assert.equal(v.role, "facts");
  const props = (v.schema as any).properties.matches.items.properties;
  assert.deepEqual([props.ref.enum, props.roadmap_id.enum], [["f1", "f2"], ["100", "200"]], "300 is development: not a candidate of a finance/hr video");
  assert.ok(v.prompt.includes("Calculate withholding tax in expense reports"), "100 reaches finance through its classification");
  assert.deepEqual([run.calls, run.matched, run.rejected, run.related, run.classified, run.stopped], [3, 3, 1, 1, 3, "done"]);
  assert.match(run.rejections[0], /f2 -> 200: quote not verbatim/);
  const cov = coverageByFeature(links);
  assert.deepEqual(cov.get("200")!.videos.map((x) => [x.video_id, x.t]), [["mT_0VKqdEzA", 12]]);
  assert.deepEqual(cov.get("200")!.learn.map((x) => x.url), ["https://learn/wht"]);
  assert.deepEqual([...roadmapByVideoFeature(links, "mT_0VKqdEzA")], [[0, ["100", "200"]]]);
  assert.deepEqual(readJson<RoadmapLinks>(linksPath(dataDir)).units["video/mT_0VKqdEzA"].matches.length, 2);

  // a quiet rerun makes no call; a changed roadmap description re-classifies and re-links its units
  const again = fake(() => []);
  assert.equal((await linkRoadmap(dataDir, opts(again.llm))).run.calls, 0);
  const changed = ROADMAP.map((e) => (e.id === "200" ? { ...e, description: "New text." } : e));
  writeJson(join(dataDir, "roadmap/snapshots/2026-10-07.json"), { taken_at: "x", hash: "h2", count: 3, items: changed });
  const third = fake(() => []);
  const r3 = await linkRoadmap(dataDir, opts(third.llm));
  assert.deepEqual([r3.run.classified, r3.run.stale], [1, 2]);
  assert.equal(r3.links.units["docs/learn/bc/wht.md"].matches.length, 0);
});

test("a ref matching more than three roadmap features is generic and keeps none", async () => {
  const dataDir = world();
  const many = [...ROADMAP, entry("400", "Finance", "Four"), entry("500", "Finance", "Five")];
  writeJson(join(dataDir, "roadmap/snapshots/2026-10-06.json"), { taken_at: "x", hash: "h", count: many.length, items: many });
  const { llm } = fake((r) => r.label!.startsWith("video/") ? ["100", "200", "400", "500"].map((id) => ({ ref: "f1", roadmap_id: id, relation: "covers", quote: "withholding tax for employee expenses" })) : []);
  const { run, links } = await linkRoadmap(dataDir, opts(llm));
  assert.equal(links.units["video/mT_0VKqdEzA"].matches.length, 0);
  assert.equal(run.rejected, 4);
});

test("quota and spend cap stop the run; matches already stored survive", async () => {
  const dataDir = world();
  const q = await linkRoadmap(dataDir, opts(fake(() => []).llm, 1));
  assert.deepEqual([q.run.stopped, q.run.unclassified], ["quota", 0], "one call classifies all three, then the quota stops matching");
  const capped: Llm = async () => { throw new LlmBudgetExhausted(10, 10); };
  const c = await linkRoadmap(dataDir, opts(capped));
  assert.equal(c.run.stopped, "spend-cap");
});

test("feature pages list their coverage; video features take the roadmap status when their roadmap features agree", () => {
  const item: ManifestItem = { id: "roadmap/m365-roadmap/200", pillar: "roadmap", source: "m365-roadmap", tier: "official", title: "t", url: "https://www.microsoft.com/microsoft-365/roadmap?id=200", state: "published", stages: {}, attempts: 0, input_hash: "h" };
  const links: RoadmapLinks = { prompt_version: 1, units: {
    "video/mT_0VKqdEzA": { kind: "video", key: "video/mT_0VKqdEzA", hash: "h", video_id: "mT_0VKqdEzA", title: "WHT video", at: "x", matches: [
      { feature: 0, name: "Withholding tax for employee expenses", t: 12, roadmap_id: "200", quote: "q" },
      { feature: 1, name: "Employee card fields", t: 80, roadmap_id: "200", quote: "q" },
      { feature: 1, name: "Employee card fields", t: 80, roadmap_id: "300", quote: "q" },
    ] },
    "docs/learn/bc/wht.md": { kind: "doc", key: "docs/learn/bc/wht.md", hash: "h", url: "https://learn/wht", title: "Withholding tax", at: "x", matches: [{ roadmap_id: "200", quote: "q" }] },
  } };
  const page = matter(renderFeaturePage(item, ROADMAP[1], NOW, coverageByFeature(links).get("200"), (id) => id === "mT_0VKqdEzA"));
  assert.ok(validate("frontmatter.feature", page.data).ok);
  assert.deepEqual([page.data.links.videos, page.data.links.learn], [["video/mT_0VKqdEzA"], ["https://learn/wht"]]);
  assert.deepEqual(page.data.evidence.map((e: any) => e.kind), ["roadmap", "video", "video", "learn"]);
  assert.ok(page.content.includes("## Covered by") && page.content.includes("[WHT video](../videos/mT_0VKqdEzA.md)") && page.content.includes("[0:12](https://www.youtube.com/watch?v=mT_0VKqdEzA&t=12s)"));

  const vItem: ManifestItem = { id: "video/yt-microsoft/mT_0VKqdEzA", pillar: "video", source: "yt-microsoft", tier: "official", title: "WHT video", url: "https://www.youtube.com/watch?v=mT_0VKqdEzA", published_at: "2026-10-01T00:00:00Z", state: "published", stages: { captioned: { at: "x", vtt_sha256: "a" } }, attempts: 0, flags: [] };
  const summary = { summary: "s", overview: "o", key_points: ["k"], audience: ["developer"] } as any;
  const roadmap = { byFeature: roadmapByVideoFeature(links, "mT_0VKqdEzA"), entries: new Map(ROADMAP.map((e) => [e.id, e])) };
  const v = matter(renderVideoPage(vItem, video(), summary, { name: "Microsoft" }, NOW, roadmap));
  assert.ok(validate("frontmatter.video", v.data).ok, JSON.stringify(validate("frontmatter.video", v.data)));
  assert.deepEqual(v.data.features.map((f: any) => [f.status, f.status_source, f.roadmap_ids]), [
    ["ga", "roadmap", ["200"]],
    ["announced", "video", ["200", "300"]], // 200 is ga, 300 preview: no agreement, the video's own status stays
  ]);
  assert.deepEqual(v.data.links.features, ["feature/200", "feature/300"]);
  assert.ok(v.content.includes("generally available (roadmap [200](../features/200.md))"));
});

test("Opus coverage review: one verdict per link, dropped links leave the pages and stop passing the status", async () => {
  const dataDir = world();
  const { llm } = fake((r) => r.label!.startsWith("video/") ? [
    { ref: "f1", roadmap_id: "200", relation: "covers", quote: "withholding tax for employee expenses" },
    { ref: "f2", roadmap_id: "200", relation: "covers", quote: "New fields on the employee card" },
  ] : [{ ref: "d1", roadmap_id: "200", relation: "covers", quote: "employee withholding tax" }]);
  await linkRoadmap(dataDir, opts(llm));

  const reqs: LlmRequest[] = [];
  const opus: Llm = async <T>(r: LlmRequest) => {
    reqs.push(r);
    const refs: string[] = (r.schema as any).properties.verdicts.items.properties.ref.enum;
    // l1 = the Learn page, l2/l3 = the two video features (keys sort docs/ before video/)
    return { output: { verdicts: refs.map((ref) => ({ ref, verdict: ref === "l3" ? "drop" : "keep", reason: "r" })) } as T, cached: false, meta: { model: "claude-opus-5-5", cost_usd: 0.1 } as any };
  };
  const r = await reviewCoverage(dataDir, { ...opts(opus), llm: opus });
  assert.deepEqual([r.candidates, r.reviewed, r.kept, r.dropped], [1, 1, 2, 1]);
  assert.equal(reqs[0].role, "review");
  assert.ok(reqs[0].prompt.includes("Use withholding taxes with employee transactions: the description.") && reqs[0].prompt.includes("New fields on the employee card"));

  const links = loadLinks(dataDir), review = loadReview(dataDir);
  const cov = coverageByFeature(links, review).get("200")!;
  assert.deepEqual([cov.videos.map((v) => v.name), cov.learn.length, cov.videos[0].reviewed], [["Withholding tax for employee expenses"], 1, true]);
  assert.deepEqual([...roadmapByVideoFeature(links, "mT_0VKqdEzA", review)], [[0, ["200"]]], "feature 2 lost its link, so its status is its own again");
  assert.equal((await reviewCoverage(dataDir, { ...opts(opus), llm: opus })).candidates, 0, "nothing new to review");

  // a verdict belongs to one unit hash: changed evidence shows as unreviewed until it is reviewed again
  writeJson(DOC_PATH(dataDir), { ...doc, summary: "Set up withholding tax for employees, vendors and customers." });
  await linkRoadmap(dataDir, opts(llm));
  assert.equal(coverageByFeature(loadLinks(dataDir), loadReview(dataDir)).get("200")!.learn[0].reviewed, false);

  // an incomplete answer is not trusted: the feature stays due
  const short: Llm = async <T>() => ({ output: { verdicts: [{ ref: "l1", verdict: "keep", reason: "r" }] } as T, cached: false, meta: { model: "claude-opus-5-5" } as any });
  const s = await reviewCoverage(dataDir, { ...opts(short), llm: short });
  assert.deepEqual([s.reviewed, s.failed], [0, 1]);
});
