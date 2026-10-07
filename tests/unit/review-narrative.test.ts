import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeJson } from "../../pipeline/lib/fsx.js";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { validate } from "../../pipeline/lib/schema.js";
import { docExtractionPath } from "../../pipeline/extract/docs.js";
import type { Llm } from "../../pipeline/extract/video.js";
import { loadLocalizationNarrative, narrativePath as locPath } from "../../pipeline/summarize/localization.js";
import { loadNarrative, narrativePath as weekPath } from "../../pipeline/summarize/changes-week.js";
import { renderLocalizationPage } from "../../pipeline/render/object.js";
import { renderDigest } from "../../pipeline/render/digest.js";
import { reviewDigestNarratives, reviewLocalizationNarratives } from "../../pipeline/review/narrative.js";

const CLOCK = () => new Date("2026-10-08T01:00:00Z");
const opus = (out: (r: LlmRequest) => unknown, reqs: LlmRequest[]): Llm => async <T>(r: LlmRequest) => { reqs.push(r); return { output: out(r) as T, cached: false, meta: { model: "claude-opus-5-5", cost_usd: 0.08 } as any }; };

// ------------------------------------------------------------------------------------------------ localization

const doc = (k: string): ManifestItem => ({ id: `docs/learn-smb-docs/business-central/LocalFunctionality/Belgium/${k}.md`, pillar: "docs", source: "learn-smb-docs", tier: "official", title: k, url: `https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Belgium/${k}`, state: "published", stages: {}, attempts: 0 });
const diff = { schema: "al-diff@1", kind: "country", from: { version: "29", country: "w1", commit: "c" }, to: { version: "29", country: "be", commit: "c" },
  summary: { objects: 1, fields_added: 0, events_added: 0 }, objects: [{ key: "table/11300", name: "CODA Statement", change: "added" }] };

function belgium(inputHash = "h1") {
  const dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-revloc-")), "data");
  writeJson(join(dataDir, "code/diffs/country/29-be.json"), diff);
  const docs = ["coda", "vat"].map(doc);
  for (const k of ["coda", "vat"]) writeJson(docExtractionPath(dataDir, doc(k)), { item_id: doc(k).id, url: doc(k).url, title: `Belgian ${k}`, blob: "b", summary: `How ${k} works in Belgium.`, systems: [], topics: [], objects: [], features: [], versions: [], parts: 1, prompt_version: 1, llm: [] });
  writeJson(locPath(dataDir, "be"), { country: "BE", version: "29", input_hash: inputHash, summary: "Belgium: CODA statements and a GA e-invoicing mandate.", overview: "Belgium adds CODA.", key_points: ["CODA", "VAT"], learn_pages_used: 2, prompt_version: 2, at: "x", llm: { model: "m", cached: false, cost_usd: null } });
  return { dataDir, docs };
}
const locOpts = (llm: Llm, quota = 5) => ({ quota, deadline: new Date("2099-01-01"), clock: CLOCK, llm, countries: ["BE"] });
const page = (dataDir: string) => matter(renderLocalizationPage("be", diff as any, [], () => null, null, CLOCK(), loadLocalizationNarrative(dataDir, "be")));

test("localization review: Opus sees the narrative and its inputs; approve marks the page reviewed; an unchanged hash is not reviewed twice", async () => {
  const { dataDir, docs } = belgium();
  const reqs: LlmRequest[] = [];
  const llm = opus(() => ({ verdict: "approve", issues: [], summary: null, overview: null, key_points: null }), reqs);
  assert.deepEqual(await reviewLocalizationNarratives(dataDir, docs, locOpts(llm, 0)).then((r) => [r.candidates, r.reviewed, r.stopped, reqs.length]), [1, 0, "quota", 0], "quota 0: no call");
  const r = await reviewLocalizationNarratives(dataDir, docs, locOpts(llm));
  assert.deepEqual([r.reviewed, r.fixed, r.rejected, r.calls, r.cost_usd, reqs[0].role, reqs[0].stage], [1, 0, 0, 1, 0.08, "review", "review-localization"]);
  assert.ok(reqs[0].prompt.includes("GA e-invoicing mandate") && reqs[0].prompt.includes('table/11300 "CODA Statement"') && reqs[0].prompt.includes("How coda works in Belgium."), "narrative and inputs");
  const n = loadLocalizationNarrative(dataDir, "be")!;
  assert.deepEqual([n.review?.state, n.review?.verdict, n.review?.input_hash, (n.review as any).applied], ["reviewed", "approve", "h1", []]);
  const p = page(dataDir);
  assert.deepEqual([p.data.review.state, p.data.review.by], ["reviewed", "opus"]);
  assert.match(p.content, /narrative reviewed \(checked by Opus\)/);
  assert.ok(validate("frontmatter.localization", p.data).ok);
  assert.equal((await reviewLocalizationNarratives(dataDir, docs, locOpts(llm))).candidates, 0, "same input hash: not due");
  assert.equal(reqs.length, 1);
});

test("localization review: a fix applies the edits that pass and records the ones that do not; reject withholds the narrative", async () => {
  const { dataDir, docs } = belgium();
  const reqs: LlmRequest[] = [];
  const fix = opus(() => ({ verdict: "fix", issues: ["the e-invoicing mandate is not in the input"], summary: "Belgium — CODA bank statements.", overview: "   ", key_points: null }), reqs);
  const r = await reviewLocalizationNarratives(dataDir, docs, locOpts(fix));
  assert.deepEqual([r.reviewed, r.fixed, r.rejected], [1, 1, 0]);
  const n = loadLocalizationNarrative(dataDir, "be")!;
  assert.deepEqual([n.summary, n.overview, (n.review as any).applied, (n.review as any).rejected_edits], ["Belgium - CODA bank statements.", "Belgium adds CODA.", ["summary"], ["overview: empty"]]);
  assert.equal(page(dataDir).data.summary, "Belgium - CODA bank statements.");

  const { dataDir: d2 } = belgium();
  const reject = opus(() => ({ verdict: "reject", issues: ["invented"], summary: null, overview: null, key_points: null }), reqs);
  assert.equal((await reviewLocalizationNarratives(d2, docs, locOpts(reject))).rejected, 1);
  const p = page(d2);
  assert.deepEqual([p.data.review.state, p.data.review.flags, p.content.includes("## Overview"), p.data.summary.startsWith("Belgium (BE) localization")], ["flagged", ["narrative-rejected"], false, true]);
  assert.match(p.content, /\*\*flagged\*\*: narrative withheld after review/);
  assert.ok(validate("frontmatter.localization", p.data).ok);

  const { dataDir: d3 } = belgium();
  const empty = opus(() => ({ verdict: "fix", issues: ["wrong"], summary: "", overview: null, key_points: [" "] }), reqs);
  const r3 = await reviewLocalizationNarratives(d3, docs, locOpts(empty));
  const n3 = loadLocalizationNarrative(d3, "be")!;
  assert.deepEqual([r3.rejected, n3.review?.state, n3.review?.verdict, (n3.review as any).rejected_edits], [1, "flagged", "reject", ["summary: empty", "key_points: none left"]], "a fix none of whose edits pass is a reject");

  // a refreshed narrative (another input hash) is due again
  writeJson(locPath(d3, "be"), { ...n3, input_hash: "h2" });
  assert.equal((await reviewLocalizationNarratives(d3, docs, locOpts(empty, 0))).candidates, 1);
});

// ------------------------------------------------------------------------------------------------ digest

const NOW = new Date("2026-10-07T03:00:00Z"); // week 2026-W41
const changePage = (n: number) => `---\n${Object.entries({ id: `change/bcapps/${n}`, type: "change", title: `#${n} Change ${n}`, summary: `Summary of change ${n}.`, tier: "official", source_id: "bcapps-prs", repo: "microsoft/BCApps", number: n,
  merged_at: "2026-10-06T10:00:00Z", base_branch: "main", change_kind: "fix", behavior_change: n % 2 === 0, breaking: false, objects_touched: [{ type: "table", name: "Payment Terms" }] })
  .map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n")}\n---\n\n# #${n}\n`;
const SAID = "Payment terms moved this week. #102 and #104 change behaviour for invoices, while #101 and #103 fix rounding. ".repeat(4).trim();

function week() {
  const root = mkdtempSync(join(tmpdir(), "bcobs-revdig-"));
  for (const n of [101, 102, 103, 104]) { mkdirSync(join(root, "content/changes/bcapps"), { recursive: true }); writeFileSync(join(root, "content/changes/bcapps", `${n}.md`), changePage(n)); }
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  writeJson(weekPath(dataDir, "2026-W41"), { week: "2026-W41", input_hash: "w1", text: SAID, changes: 4, model: "claude-sonnet", cost_usd: 0.05, at: "x" });
  writeJson(weekPath(dataDir, "2026-W30"), { week: "2026-W30", input_hash: "old", text: SAID, changes: 4, model: "claude-sonnet", cost_usd: 0.05, at: "x" });
  return { dataDir, contentDir };
}
const digOpts = (llm: Llm, quota = 5) => ({ quota, deadline: new Date("2099-01-01"), clock: CLOCK, llm });
const digest = (dataDir: string, contentDir: string) => matter(renderDigest({ id: "2026-W41", start: "2026-10-05", end: "2026-10-11" }, { items: [], dataDir, contentDir, currentMajor: "30" }, NOW).page);

test("digest review: only the weeks the digest re-renders; the page follows the review; a fix that fails acceptNarrative rejects", async () => {
  const { dataDir, contentDir } = week();
  assert.deepEqual([digest(dataDir, contentDir).data.review.state, digest(dataDir, contentDir).data.generated.prompts], ["unreviewed", { "narrate-changes": 1 }]);
  const reqs: LlmRequest[] = [];
  const fixed = `${SAID.replace("fix rounding", "fix rounding in the payment terms table")}`;
  const llm = opus(() => ({ verdict: "fix", issues: ["#103 is a rounding fix in a table"], text: fixed }), reqs);
  const r = await reviewDigestNarratives(contentDir, dataDir, NOW, digOpts(llm));
  assert.deepEqual([r.candidates, r.reviewed, r.fixed, reqs.length, reqs[0].role, reqs[0].stage], [1, 1, 1, 1, "review", "review-digest"], "W30 is outside the re-rendered weeks");
  assert.ok(reqs[0].prompt.includes("Paragraph under review:") && reqs[0].prompt.includes('"number": 103'), "the paragraph and the week's change rows");
  const n = loadNarrative(dataDir, "2026-W41")!;
  assert.deepEqual([n.text.includes("payment terms table"), n.review?.state, (n.review as any).applied], [true, "reviewed", ["text"]]);
  const d = digest(dataDir, contentDir);
  assert.deepEqual([d.data.review.state, d.data.review.by], ["reviewed", "opus"]);
  assert.match(d.content, /payment terms table[\s\S]*\(4 changes summarised by Sonnet from the change pages; reviewed, checked by Opus\.\)/);
  assert.ok(validate("frontmatter.digest", d.data).ok);
  assert.equal((await reviewDigestNarratives(contentDir, dataDir, NOW, digOpts(llm))).candidates, 0, "unchanged input hash: not reviewed twice");

  const w2 = week();
  const bad = opus(() => ({ verdict: "fix", issues: ["x"], text: `${SAID} See #999.` }), reqs);
  const r2 = await reviewDigestNarratives(w2.contentDir, w2.dataDir, NOW, digOpts(bad));
  const n2 = loadNarrative(w2.dataDir, "2026-W41")!;
  assert.deepEqual([r2.rejected, n2.review?.state, n2.text, (n2.review as any).rejected_edits.length], [1, "flagged", SAID, 1], "an invented #number fails the first pass's validator");
  const d2 = digest(w2.dataDir, w2.contentDir);
  assert.deepEqual([d2.data.review.state, d2.data.review.flags, d2.content.includes("Payment terms moved")], ["flagged", ["narrative-rejected"], false]);
  assert.match(d2.content, /withheld after an Opus review found a problem/);
});
