import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeJson } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import type { Llm } from "../../pipeline/extract/video.js";
import { postExtractionPath, type PostExtraction } from "../../pipeline/extract/post.js";
import { applyPostReview, duePosts, planPostCalls, postReviewPath, reviewPosts, WITHHELD, type PostReviewOut } from "../../pipeline/review/post.js";

const POST = "Posting preview in Business Central shows the general ledger entries before you post. "
  + "The new background posting queue lets a company hand long journals to the job queue while users keep working in the same session without waiting for the posting routine to finish its run. "
  + "Codeunit Gen. Jnl.-Post Batch drives it. Use it for large month end journals.";
const item = (n: number, over: Partial<ManifestItem> = {}): ManifestItem => ({
  id: `blog/waldo-be/post-${n}`, pillar: "blog", source: "waldo-be", tier: "community", title: `Post ${n}`, url: `https://example.org/${n}`,
  published_at: `2026-10-0${n}T08:00:00Z`, state: "published", stages: { published: { at: "2026-10-07T01:00:00Z" } }, attempts: 0, flags: [], ...over,
});
const x = (it: ManifestItem): PostExtraction => ({
  item_id: it.id, url: it.url, title: it.title, source: it.source, published_at: it.published_at ?? null, words: 60,
  summary: "Posting preview and a background posting queue in Business Central.", key_points: ["Preview before posting", "Queue long journals"],
  systems: ["finance"], topics: ["posting"], objects: [{ type: "codeunit", name: "Gen. Jnl.-Post Batch" }, { type: "table", name: "Invented Table" }],
  features: ["Posting preview", "Made-up feature"], versions: [], language: "en",
  quotes: [{ text: "Use it for large month end journals.", why_it_matters: "when" }, { text: "Codeunit Gen. Jnl.-Post Batch drives it.", why_it_matters: "which" }],
  trimmed_for_policy: 0, prompt_version: 1, llm: { model: "haiku", cached: false, cost_usd: 0.01, posts_in_call: 1 },
});
const out = (ref: string, over: Partial<PostReviewOut> = {}): PostReviewOut => ({ ref, verdict: "approve", issues: ["fine"], summary: null, key_points: null, drop_quotes: [], drop_objects: [], drop_features: [], drop_systems: [], ...over });
const fake = (per: (ref: string) => PostReviewOut) => {
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(r: LlmRequest) => {
    reqs.push(r);
    const refs = [...r.prompt.matchAll(/### POST ref=(p\d+)/g)].map((m) => m[1]);
    return { output: { reviews: refs.map(per) } as T, cached: false, meta: { model: "claude-opus-5-5", cost_usd: 0.12 } as any };
  };
  return { llm, reqs };
};
function setup(n = 3) {
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-review-post-"));
  const items = Array.from({ length: n }, (_, i) => item(i + 1));
  for (const it of items) writeJson(postExtractionPath(dataDir, it), x(it));
  const saved = new Map<string, ManifestItem>();
  return { dataDir, items, saved, save: (i: ManifestItem) => { saved.set(i.id, i); } };
}
const opts = (s: ReturnType<typeof setup>, llm: Llm, quota = 10) => ({ quota, deadline: new Date("2099-01-01"), clock: () => new Date("2026-10-08T02:00:00Z"), llm, raw: () => POST, save: s.save });
const readX = (dataDir: string, it: ManifestItem) => JSON.parse(readFileSync(postExtractionPath(dataDir, it), "utf8")) as PostExtraction;
const readRec = (dataDir: string, it: ManifestItem) => JSON.parse(readFileSync(postReviewPath(dataDir, it), "utf8"));

test("fix edits pass the extractor's checks; the 25-word guard rejects an edit that copies the post", () => {
  const it = item(1);
  const copied = "The new background posting queue lets a company hand long journals to the job queue while users keep working in the same session without waiting for the posting routine";
  const r = applyPostReview(x(it), out("p1", {
    verdict: "fix", summary: copied, key_points: ["Preview shows ledger entries first", "Long journals go to the job queue"],
    drop_objects: ["table Invented Table", "page Nope"], drop_features: ["Made-up feature"], drop_quotes: [2, 9],
  }), POST);
  assert.equal(r.x.summary, x(it).summary, "the copied summary is refused");
  assert.ok(r.rejected.some((e) => /summary: repeats 25\+ words/.test(e)), r.rejected.join("; "));
  assert.deepEqual(r.x.key_points, ["Preview shows ledger entries first", "Long journals go to the job queue"]);
  assert.deepEqual(r.x.objects.map((o) => o.name), ["Gen. Jnl.-Post Batch"]);
  assert.deepEqual(r.x.features, ["Posting preview"]);
  assert.deepEqual(r.x.quotes.map((q) => q.why_it_matters), ["when"]);
  assert.equal(r.rejected.length, 3, r.rejected.join("; ")); // copied summary, unknown object, unknown quote
  assert.ok(!r.rejected.join(" ").includes("background posting queue lets"), "the record never repeats the refused text");
});

test("approve, fix and reject: records, extractions, manifest review and the call shape", async () => {
  const s = setup(3);
  const verdicts: Record<string, Partial<PostReviewOut>> = {
    p1: { verdict: "approve" },
    p2: { verdict: "fix", summary: "Background posting moves long journals to the job queue.", drop_features: ["Made-up feature", "Ghost"] },
    p3: { verdict: "reject", issues: ["the summary describes another post"] },
  };
  const { llm, reqs } = fake((ref) => out(ref, verdicts[ref]));
  const { run, touched } = await reviewPosts(s.items, s.dataDir, opts(s, llm));
  assert.equal(reqs.length, 1, "three posts share one call (batch of 4)");
  assert.deepEqual([reqs[0].role, reqs[0].stage], ["review", "review-post"]);
  assert.ok(reqs[0].prompt.includes("Posting preview in Business Central shows"), "Opus sees the post text the extractor saw");
  // newest first: post 3 (Oct 3) is p1
  const [i3, i2, i1] = [s.items[2], s.items[1], s.items[0]];
  assert.deepEqual([run.reviewed, run.fixed, run.rejected, run.calls, run.cost_usd], [3, 1, 1, 1, 0.12]);
  assert.equal(touched.length, 3);
  assert.deepEqual(s.saved.get(i3.id)!.review, { state: "reviewed", by: "opus", at: "2026-10-08T02:00:00.000Z" });
  assert.equal(s.saved.get(i2.id)!.review!.state, "reviewed");
  assert.equal(s.saved.get(i1.id)!.review!.state, "flagged");
  assert.deepEqual(readX(s.dataDir, i3), x(i3), "approve applies nothing");
  assert.equal(readX(s.dataDir, i2).summary, "Background posting moves long journals to the job queue.");
  assert.deepEqual(readX(s.dataDir, i2).features, ["Posting preview"]);
  const r2 = readRec(s.dataDir, i2);
  assert.deepEqual([r2.verdict, r2.applied.length, r2.rejected_edits.length, r2.by], ["fix", 2, 1, "opus"]);
  const x1 = readX(s.dataDir, i1);
  assert.deepEqual([x1.summary, x1.key_points], [WITHHELD, []], "reject drops the model text");
  assert.deepEqual([x1.objects.length, x1.quotes.length, x1.systems], [2, 2, ["finance"]], "and keeps the facts");
  assert.equal(readRec(s.dataDir, i1).verdict, "reject");
});

test("an unchanged input hash is not reviewed twice; a changed extraction is due again and loses its badge", async () => {
  const s = setup(2);
  await reviewPosts(s.items, s.dataDir, opts(s, fake((ref) => out(ref, { verdict: ref === "p1" ? "fix" : "approve", key_points: ref === "p1" ? ["New point one", "New point two"] : null })).llm));
  const reviewed = s.items.map((i) => s.saved.get(i.id)!);
  assert.equal(duePosts(reviewed, s.dataDir, () => POST).length, 0, "the fixed text is what the record is tied to");
  const again = fake((ref) => out(ref));
  const r = await reviewPosts(reviewed, s.dataDir, opts(s, again.llm));
  assert.deepEqual([again.reqs.length, r.run.candidates], [0, 0]);
  // the extraction changes (a re-extraction after the post changed)
  writeJson(postExtractionPath(s.dataDir, reviewed[0]), { ...x(reviewed[0]), summary: "Something else entirely." });
  const r3 = await reviewPosts(reviewed, s.dataDir, opts(s, fake((ref) => out(ref)).llm, 0));
  assert.deepEqual([r3.run.candidates, r3.run.reset, r3.run.calls, r3.run.stopped], [1, 1, 0, "quota"]);
  assert.equal(s.saved.get(reviewed[0].id)!.review!.state, "unreviewed", "a quota of 0 still takes the stale badge off");
});

test("quota counts calls of 4; a post without vault text is never due; a bad call leaves its posts due", async () => {
  const s = setup(6);
  assert.deepEqual(planPostCalls(duePosts(s.items, s.dataDir, () => POST)).map((c) => c.length), [4, 2]);
  assert.equal(duePosts(s.items, s.dataDir, () => null).length, 0);
  const short = fake((ref) => out(ref));
  const bad: Llm = async <T>(r: LlmRequest) => ({ ...(await short.llm<T>(r)), output: { reviews: [] } as T });
  const r = await reviewPosts(s.items, s.dataDir, opts(s, bad, 1));
  assert.deepEqual([r.run.calls, r.run.failed, r.run.reviewed, r.run.stopped], [1, 4, 0, "quota"]);
  assert.equal(duePosts(s.items, s.dataDir, () => POST).length, 6);
});
