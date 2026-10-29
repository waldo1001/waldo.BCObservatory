import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import matter from "gray-matter";
import { validate } from "../../pipeline/lib/schema.js";
import { objectIndexFromRows } from "../../pipeline/link/mentions.js";
import { guidelineJoins, type GuidelineJoins } from "../../pipeline/link/guidelines.js";
import { examplesOf, guidelinePageId, guidelinePagePath, renderGuidelinePage, rewriteRuleLinks } from "../../pipeline/render/guideline.js";

// D126: a BCQuality rule as a page, rendered from the blob without a model
const RULE_PATH = "microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf.md";
const RULE = readFileSync(new URL("../fixtures/bcquality/admin-and-migration-pages-tolerate-lower-perf.md", import.meta.url), "utf8");
const SKILL = readFileSync(new URL("../fixtures/bcquality/al-performance-review.md", import.meta.url), "utf8");
const COMMIT = "a4593a1b1585a0fa663efbf39ff02c60f846d851";
const BLOB = "https://github.com/microsoft/BCQuality/blob/main/";
const now = new Date("2026-10-29T03:00:00Z");
const input = (repoPath: string, text: string) => ({ repoPath, text, blob: "c".repeat(40), commit: COMMIT, publishedAt: "2026-09-09T10:00:00Z" });
const empty: GuidelineJoins = { examples: [], objects: [], related: [], learn: [], changes: [], rulePaths: new Set() };

test("a rule page: schema-valid derived frontmatter, the rule's sections in order, examples, names, changes, MIT footer", () => {
  const index = objectIndexFromRows([["codeunit/80", "codeunit", 80, "Sales-Post", "Base Application"]]);
  const stem = RULE_PATH.replace(/\.md$/, "");
  const joins = guidelineJoins({
    repoPath: RULE_PATH, body: `${RULE}\nSee Codeunit 80 "Sales-Post".\n`, tree: [`${stem}.good.al`, `${stem}.bad.al`, RULE_PATH], index, learnUrls: [],
    changesByPath: new Map([[RULE_PATH, [{ id: "change/bcquality/249", title: "#249 Route guard-dependent and/or conditions to the short-circuit article", date: "2026-10-20" }]]]),
    rulePaths: new Set([RULE_PATH]),
  });
  const page = renderGuidelinePage(input(RULE_PATH, RULE), joins, now);
  const { data: fm, content: body } = matter(page);
  const r = validate("frontmatter.guideline", fm);
  assert.ok(r.ok, r.errors.join("; "));
  assert.equal(fm.id, "guideline/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf");
  assert.deepEqual([fm.type, fm.tier, fm.layer, fm.kind, fm.domain, fm.examples, fm.system], ["guideline", "official", "microsoft", "rule", "performance", 2, "development"]);
  assert.equal(fm.review.state, "derived");
  assert.deepEqual(fm.links.changes, ["change/bcquality/249"]);
  assert.deepEqual(fm.links.objects, ["object/codeunit/80"]);
  assert.equal(fm.evidence[0].kind, "guideline");
  assert.equal(fm.evidence[0].url, `${BLOB}${RULE_PATH}`);
  assert.equal(fm.evidence[0].date, "2026-09-09");
  assert.equal(fm.summary, "Some pages run rarely and against small datasets, and the upstream guidance explicitly calls for treating them as lower severity.");
  // the rule's own H1 is replaced by the page title: one H1 in all
  assert.deepEqual(body.match(/^# .*$/gm), ["# Admin and migration pages tolerate lower performance discipline"]);
  const h2 = body.match(/^## .*$/gm) ?? [];
  assert.deepEqual(h2, ["## Description", "## Best Practice", "## Anti Pattern", "## Examples", "## Names", "## Changed by"]);
  const examples = body.split("## Examples")[1].split("## Names")[0].trim().split("\n");
  assert.equal(examples.length, 2);
  assert.match(examples[0], /^- \[Good: admin-and-migration-pages-tolerate-lower-perf\.good\.al\]\(https:\/\/github\.com\/microsoft\/BCQuality\/blob\/main\/microsoft\/knowledge\/performance\/admin-and-migration-pages-tolerate-lower-perf\.good\.al\)$/);
  assert.match(body, /\[codeunit 80 "Sales-Post"\]\(\.\.\/\.\.\/\.\.\/\.\.\/objects\/codeunit\/80\.md\)/);
  assert.match(body, /\[#249 Route guard-dependent[^\]]*\]\(\.\.\/\.\.\/\.\.\/\.\.\/changes\/bcquality\/249\.md\), 2026-10-20/);
  assert.match(body, /Per the review checklist, "Admin\/migration pages/, "the rule text is verbatim");
  const last = body.trim().split("\n").at(-1)!;
  assert.match(last, /^From microsoft\/BCQuality at a4593a1, MIT License, Copyright \(c\) .*Microsoft Corporation \(\[license\]\(\.\.\/\.\.\/\.\.\/LICENSE-BCQuality\.txt\)\)\.$/);
});

test("no examples and no joins: no Examples, Names or Changed by sections", () => {
  const { content: body } = matter(renderGuidelinePage(input(RULE_PATH, RULE), empty, now));
  for (const h of ["## Examples", "## Names", "## Changed by"]) assert.ok(!body.includes(h), h);
});

test("a review skill: kind skill, domain null, labelled as a review skill", () => {
  const p = "microsoft/skills/review/al-performance-review.md";
  const { data: fm, content: body } = matter(renderGuidelinePage(input(p, SKILL), empty, now));
  assert.ok(validate("frontmatter.guideline", fm).ok);
  assert.deepEqual([fm.kind, fm.domain, fm.summary], ["skill", null, "Reviews AL source changes against performance guidance from BCQuality."]);
  assert.match(body, /review skill/);
});

test("rewriteRuleLinks: a rule with a page stays a page link, other relative links go to GitHub, fences untouched", () => {
  const from = "microsoft/knowledge/performance/a.md";
  const set = new Set(["microsoft/knowledge/style/foo.md"]);
  assert.equal(rewriteRuleLinks("[x](../style/foo.md)", from, set, BLOB), "[x](../style/foo.md)");
  assert.equal(rewriteRuleLinks("[x](../style/foo.md)", from, new Set(), BLOB), `[x](${BLOB}microsoft/knowledge/style/foo.md)`);
  assert.equal(rewriteRuleLinks("[x](../style/foo.md#part)", from, new Set(), BLOB), `[x](${BLOB}microsoft/knowledge/style/foo.md#part)`);
  assert.equal(rewriteRuleLinks("[y](https://example.com/a.md)", from, set, BLOB), "[y](https://example.com/a.md)");
  assert.equal(rewriteRuleLinks("[z](#anchor)", from, set, BLOB), "[z](#anchor)");
  assert.equal(rewriteRuleLinks("[s](a.good.al)", from, set, BLOB), `[s](${BLOB}microsoft/knowledge/performance/a.good.al)`);
  const fenced = "```md\n[x](../style/foo.md)\n```";
  assert.equal(rewriteRuleLinks(fenced, from, new Set(), BLOB), fenced);
});

test("examplesOf: good, bad and numbered variants of the same stem only", () => {
  const ex = examplesOf(["microsoft/knowledge/performance/a.good.al", "microsoft/knowledge/performance/a.bad.al", "microsoft/knowledge/performance/a.good.2.al",
    "microsoft/knowledge/performance/ab.good.al", "microsoft/knowledge/performance/a.md"], "microsoft/knowledge/performance/a.md");
  assert.deepEqual(ex.map((e) => e.label), ["Good", "Bad", "Good 2"]);
  assert.ok(ex.every((e) => !e.path.includes("/ab.")));
});

test("page path and id follow the repo path", () => {
  assert.equal(guidelinePagePath("/c", "community/knowledge/agents/x.md"), "/c/guidelines/community/knowledge/agents/x.md");
  assert.equal(guidelinePageId("community/knowledge/agents/x.md"), "guideline/community/knowledge/agents/x");
});
