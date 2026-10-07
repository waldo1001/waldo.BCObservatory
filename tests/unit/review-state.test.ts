import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeText } from "../../pipeline/lib/fsx.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { reviewOf, reviewWords } from "../../pipeline/lib/review.js";
import { validate } from "../../pipeline/lib/schema.js";
import { digestReview, syncDigestReview } from "../../pipeline/render/digest.js";
import { renderFeaturePage } from "../../pipeline/render/feature.js";
import { renderLocalizationPage } from "../../pipeline/render/object.js";
import { derivedErrors, validateContent } from "../../pipeline/validate/content.js";

const NOW = new Date("2026-10-08T01:00:00Z");

test("reviewOf: no model text is derived; model text follows its stored review, else unreviewed", () => {
  assert.deepEqual(reviewOf(false), { state: "derived", by: null, at: null, flags: [] });
  assert.deepEqual(reviewOf(false, { state: "reviewed", by: "opus", at: "x" }), { state: "derived", by: null, at: null, flags: [] }, "a stored review cannot make derived text reviewed");
  assert.deepEqual(reviewOf(true), { state: "unreviewed", by: null, at: null, flags: [] });
  assert.deepEqual(reviewOf(true, null), { state: "unreviewed", by: null, at: null, flags: [] });
  assert.deepEqual(reviewOf(true, { state: "reviewed", by: "opus", at: "2026-10-08" }), { state: "reviewed", by: "opus", at: "2026-10-08", flags: [] });
  assert.deepEqual(reviewOf(true, { state: "flagged", by: "opus", at: "2026-10-08", flags: ["narrative-rejected"] }), { state: "flagged", by: "opus", at: "2026-10-08", flags: ["narrative-rejected"] });
  assert.equal(reviewOf(true, { state: "derived" }).state, "unreviewed", "model text is never derived");
  assert.deepEqual(["derived", "unreviewed", "reviewed", "flagged"].map((s) => reviewWords(s as any)), ["derived (from the source, no model text)", "**unreviewed** (model text not yet checked)", "reviewed (checked by Opus)", "**flagged** (a review found a problem)"]);
});

test("feature and localization pages: derived without model text; a localization narrative follows its review", () => {
  const entry = { id: "1", title: "F", area: "Finance", description: "d", status: "Launched", release_phase: "General Availability", ga: "October CY2026", preview: null, created: null, modified: null, cloud: [], platforms: [] };
  const item: ManifestItem = { id: "roadmap/m365-roadmap/1", pillar: "roadmap", source: "m365-roadmap", tier: "official", title: "F", url: "https://www.microsoft.com/microsoft-365/roadmap?id=1", state: "published", stages: {}, attempts: 0, input_hash: "h" };
  assert.equal(matter(renderFeaturePage(item, entry as any, NOW)).data.review.state, "derived");

  const diff = { schema: "al-diff@1", kind: "country", from: { version: "29", country: "w1", commit: "c" }, to: { version: "29", country: "be", commit: "c" }, summary: { objects: 1, fields_added: 0, events_added: 0 }, objects: [{ key: "table/11300", name: "CODA Statement", change: "added" }] };
  const loc = (n: any) => matter(renderLocalizationPage("be", diff as any, [], () => null, null, NOW, n));
  assert.equal(loc(null).data.review.state, "derived");
  const n = { country: "BE", version: "29", input_hash: "h1", summary: "Belgium narrative.", overview: "o", key_points: ["k"], learn_pages_used: 3, prompt_version: 2, at: "x", llm: { model: "m", cached: false, cost_usd: null } };
  const un = loc(n);
  assert.deepEqual([un.data.review.state, un.data.summary], ["unreviewed", "Belgium narrative."]);
  assert.match(un.content, /narrative \*\*unreviewed\*\* \(model text not yet checked\)/);
  const review = { state: "reviewed", by: "opus", at: "2026-10-08T01:00:00Z", verdict: "approve", issues: [], input_hash: "h1", cost_usd: 0.08 };
  const ok = loc({ ...n, review });
  assert.deepEqual([ok.data.review.state, ok.data.review.by], ["reviewed", "opus"]);
  assert.match(ok.content, /narrative reviewed \(checked by Opus\)/);
  assert.equal(loc({ ...n, review: { ...review, input_hash: "old" } }).data.review.state, "unreviewed", "a review of another input hash does not count");
  const bad = loc({ ...n, review: { ...review, state: "flagged", verdict: "reject" } });
  assert.deepEqual([bad.data.review.state, bad.data.review.flags, bad.data.summary.startsWith("Belgium (BE) localization"), bad.content.includes("## Overview")], ["flagged", ["narrative-rejected"], true, false], "a rejected narrative is withheld");
  for (const p of [loc(null), un, ok, bad]) assert.ok(validate("frontmatter.localization", p.data).ok);
});

test("digestReview and the older-week sync: derived without a narrative, the review's state with one", () => {
  const w = { week: "2026-W40", input_hash: "h", text: "t", changes: 3, model: "m", cost_usd: null, at: "x" };
  assert.equal(digestReview(null).review.state, "derived");
  assert.equal(digestReview(w).review.state, "unreviewed");
  const rv = { state: "reviewed" as const, by: "opus" as const, at: "2026-10-08T01:00:00Z", verdict: "approve" as const, issues: [], input_hash: "h", cost_usd: null };
  assert.deepEqual(digestReview({ ...w, review: rv }).review, { state: "reviewed", by: "opus", at: "2026-10-08T01:00:00Z", flags: [] });
  const flagged = digestReview({ ...w, review: { ...rv, state: "flagged", verdict: "reject" } });
  assert.deepEqual([flagged.story, flagged.review.state], [null, "flagged"]);

  const dir = mkdtempSync(join(tmpdir(), "bcobs-dsync-"));
  const f = join(dir, "2026-W38.md");
  writeText(f, `---\nid: digest/2026-W38\nreview:\n  state: unreviewed\n  by: null\n  at: null\n  flags: []\ngenerated:\n  at: "x"\n---\n\n# body\n`);
  assert.equal(syncDigestReview(f, digestReview(null).review), true);
  assert.deepEqual(matter(readFileSync(f, "utf8")).data, { id: "digest/2026-W38", review: { state: "derived", by: null, at: null, flags: [] }, generated: { at: "x" } });
  assert.equal(syncDigestReview(f, digestReview(null).review), false, "idempotent");
  syncDigestReview(f, flagged.review);
  assert.deepEqual(matter(readFileSync(f, "utf8")).data.review, { state: "flagged", by: "opus", at: "2026-10-08T01:00:00Z", flags: ["narrative-rejected"] });
  assert.match(readFileSync(f, "utf8"), /\n# body\n$/);
});

test("validate:content: a derived page with model text fails", () => {
  const fm = (over: object) => ({ type: "topic", narrative: "none", review: { state: "derived", by: null, at: null, flags: [] }, generated: { prompts: {} }, ...over });
  assert.deepEqual(derivedErrors(fm({})), []);
  assert.match(derivedErrors(fm({ narrative: "generated" }))[0], /derived but narrative/);
  assert.match(derivedErrors(fm({ type: "localization", generated: { prompts: { "hub-localization": 2 } } }))[0], /generated\.prompts names hub-localization/);
  assert.match(derivedErrors(fm({ type: "video" }))[0], /video page always holds model text/);
  assert.match(derivedErrors(fm({ review: { state: "derived", by: "opus", at: null } }))[0], /review\.by or review\.at/);
  assert.deepEqual(derivedErrors(fm({ narrative: "generated", review: { state: "unreviewed" } })), [], "only derived is checked");

  const dir = join(mkdtempSync(join(tmpdir(), "bcobs-derived-")), "content");
  const entry = { id: "1", title: "F", area: "Finance", description: "d", status: "Launched", release_phase: "General Availability", ga: "October CY2026", preview: null, created: null, modified: null, cloud: [], platforms: [] };
  const item: ManifestItem = { id: "roadmap/m365-roadmap/1", pillar: "roadmap", source: "m365-roadmap", tier: "official", title: "F", url: "https://www.microsoft.com/microsoft-365/roadmap?id=1", state: "published", stages: {}, attempts: 0, input_hash: "h" };
  const page = renderFeaturePage(item, entry as any, NOW);
  writeText(join(dir, "features/1.md"), page);
  assert.deepEqual(validateContent(dir, NOW).errors, []);
  writeText(join(dir, "features/1.md"), page.replace("  prompts: {}", "  prompts:\n    summarize-feature: 1"));
  assert.match(validateContent(dir, NOW).errors.join("\n"), /features\/1\.md: review\.state derived but generated\.prompts names summarize-feature/);
});
