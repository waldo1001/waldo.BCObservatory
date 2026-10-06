import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeJson } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import type { Llm, VideoExtraction } from "../../pipeline/extract/video.js";
import type { VideoSummary } from "../../pipeline/summarize/video.js";
import { applyReview, reviewedHandler } from "../../pipeline/review/video.js";

const ID = "AAAAAAAAAA1";
const SEGS = [
  { t: 0, end: 10, text: "Welcome everyone, today we look at the new posting preview in Business Central." },
  { t: 10, end: 25, text: "Posting preview is generally available in version twenty nine for every customer." },
  { t: 25, end: 40, text: "Batch posting with background jobs is still in public preview and subject to change." },
];
const x: VideoExtraction = {
  video_id: ID, item_id: `video/yt-microsoft/${ID}`, title: "T", duration_s: 40, systems: ["finance"], topics: ["posting"],
  chapters: [{ t_start: 0, t_end: 40, title: "All" }],
  features: [
    { name: "Posting preview", description: "d", status: "unclear", status_evidence_t: null, status_evidence_quote: null, status_evidence_verified: false, t_start: 10, t_end: 25, is_demoed: false, caveats: [], tags: [], system: "finance" },
    { name: "Hallucinated thing", description: "d", status: "unclear", status_evidence_t: null, status_evidence_quote: null, status_evidence_verified: false, t_start: 0, t_end: 10, is_demoed: false, caveats: [], tags: [], system: "finance" },
  ],
  objects: [], presenters: [], quotes: [], disclaimers: [],
  checks: { quotes_kept: 0, quotes_dropped: 4, evidence_verified: 0, evidence_unverified: 0 }, windows: 1, prompt_version: 1, llm: [],
};
const s: VideoSummary = { video_id: ID, item_id: x.item_id, summary: "Old.", overview: "o", key_points: ["k"], audience: [], extraction_hash: "h", prompt_version: 1, llm: { model: "m", cached: false, cost_usd: 0 } };
const out = (over: Record<string, unknown> = {}) => ({ verdict: "fix", issues: ["quotes were paraphrased"], summary: null, key_points: null, drop_features: [], feature_status: [], drop_quotes: [], add_quotes: [], ...over });
const item: ManifestItem = { id: x.item_id, pillar: "video", source: "yt-microsoft", tier: "official", title: "T", url: "u", state: "linked", stages: {}, attempts: 0, flags: ["quote-check"] };
function setup() {
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-review-"));
  writeJson(join(dataDir, `extract/video/${ID}.json`), x);
  writeJson(join(dataDir, `summary/video/${ID}.json`), s);
  writeJson(join(dataDir, `captions/microsoft/${ID}.segments.json`), { segments: SEGS });
  return dataDir;
}
const fake = (o: unknown) => { const reqs: LlmRequest[] = []; const llm: Llm = async <T>(r: LlmRequest) => { reqs.push(r); return { output: o as T, cached: false, meta: { model: "claude-opus-5-5", cost_usd: 0.3 } as any }; }; return { llm, reqs }; };
const ctx = (dataDir: string) => ({ dataDir, now: () => new Date("2026-10-07T03:00:00Z") });

test("review edits pass the first-pass validators or are rejected", () => {
  const r = applyReview(x, s, out({
    drop_features: ["hallucinated thing", "Nope"],
    feature_status: [
      { name: "Posting preview", status: "ga", evidence_t: 10, evidence_quote: "Posting preview is generally available in version twenty nine" },
      { name: "Posting preview", status: "preview", evidence_t: 10, evidence_quote: "for every customer" },
    ],
    add_quotes: [
      { t: 25, text: "Batch posting with background jobs is still in public preview", why_it_matters: "status" },
      { t: 0, text: "a quote nobody ever said during this session at all", why_it_matters: "x" },
    ],
    drop_quotes: [0.2],
    summary: "Posting preview is GA — batch posting is in preview.",
  }) as any, SEGS);
  assert.deepEqual(r.x.features.map((f) => [f.name, f.status, f.status_evidence_verified]), [["Posting preview", "ga", true]]);
  assert.deepEqual(r.x.quotes.map((q) => Math.round(q.t)), [25], "dropped the intro quote, added the verified one");
  assert.equal(r.s.summary, "Posting preview is GA - batch posting is in preview.");
  assert.equal(r.rejected.length, 3, r.rejected.join("; ")); // unknown drop, unsupported status, invented quote
});

test("handler: Opus review role sees the transcript; fix rewrites the inputs and marks the item reviewed", async () => {
  const dataDir = setup();
  const { llm, reqs } = fake(out({ drop_features: ["Hallucinated thing"] }));
  const r: any = await reviewedHandler(item, ctx(dataDir), llm);
  assert.deepEqual([reqs[0].role, reqs[0].stage], ["review", "review-video"]);
  assert.ok(reqs[0].prompt.includes("subject to change") && reqs[0].prompt.includes("quote-check"));
  assert.deepEqual(r.patch.review, { state: "reviewed", by: "opus", at: "2026-10-07T03:00:00.000Z" });
  assert.equal(JSON.parse(readFileSync(join(dataDir, `extract/video/${ID}.json`), "utf8")).features.length, 1);
  const rec = JSON.parse(readFileSync(join(dataDir, `review/video/${ID}.json`), "utf8"));
  assert.deepEqual([rec.verdict, rec.applied, rec.flags], ["fix", ["dropped 1 feature(s)"], ["quote-check"]]);
});

test("handler: approve changes nothing; reject skips the item and publishes no page", async () => {
  const dataDir = setup();
  const before = readFileSync(join(dataDir, `extract/video/${ID}.json`), "utf8");
  const a: any = await reviewedHandler(item, ctx(dataDir), fake(out({ verdict: "approve", drop_features: ["Hallucinated thing"] })).llm);
  assert.equal(a.patch.review.state, "reviewed");
  assert.equal(readFileSync(join(dataDir, `extract/video/${ID}.json`), "utf8"), before, "approve applies no edits");
  const rj: any = await reviewedHandler(item, ctx(dataDir), fake(out({ verdict: "reject", issues: ["music only"] })).llm);
  assert.equal(rj.skip, "review-rejected");
  assert.ok(existsSync(join(dataDir, `review/video/${ID}.json`)));
});
