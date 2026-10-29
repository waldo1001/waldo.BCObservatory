import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { objectIndexFromRows } from "../../pipeline/link/mentions.js";
import {
  MAX_CHANGES, MAX_LEARN, MAX_OBJECTS, changesByRulePath, guidelineJoins, guidelinesByPath, learnJoins, spanObjects, typedObjects,
} from "../../pipeline/link/guidelines.js";
import { renderGuidelinePage } from "../../pipeline/render/guideline.js";

// D126: deterministic joins of a BCQuality rule, no title matching
const index = objectIndexFromRows([
  ["codeunit/80", "codeunit", 80, "Sales-Post", "Base Application"],
  ["table/32", "table", 32, "Item Ledger Entry", "Base Application"],
  ["table/37", "table", 37, "Sales Line", "Base Application"],
  ["page/516", "page", 516, "Sales Line", "Base Application"],
  ["table/90001", "table", 90001, "Twin Name", "App A"],
  ["table/90002", "table", 90002, "Twin Name", "App B"],
  ["permissionset/1001", "permissionset", 1001, "local", "Base Application"],
  ["report/706", "report", 706, "Status", "Base Application"],
]);
const LEARN = "https://learn.microsoft.com/dynamics365/business-central/";
const RULE_PATH = "microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf.md";

test("typed references resolve by type and name: names, by code", () => {
  assert.deepEqual(typedObjects('Posting runs in Codeunit 80 "Sales-Post" and Table "Item Ledger Entry".', index), ["object/codeunit/80", "object/table/32"]);
  assert.deepEqual(typedObjects('A `Codeunit 80 "Sales-Post"` in a fence:\n```al\nTable 37 "Sales Line"\n```\n', index), ["object/codeunit/80"]);
  assert.deepEqual(typedObjects('Table 99 "Nope"', index), []);
});

test("code spans: multi-word names only; one object, or the table over its pages; a shared name nothing", () => {
  assert.deepEqual(spanObjects("Use `local` and `Status` here.", index), []);
  assert.deepEqual(spanObjects("Post to `Item Ledger Entry`.", index), ["object/table/32"]);
  assert.deepEqual(spanObjects('Read `"Sales Line"` first.', index), ["object/table/37"]);
  assert.deepEqual(spanObjects("Both `Twin Name` tables.", index), []);
  assert.deepEqual(spanObjects("```al\n`Item Ledger Entry`\n```\n", index), []);
});

test("Learn: coded ids by path suffix; a method name only when exactly one methods-auto row has it", () => {
  const urls = [
    `${LEARN}dev-itpro/developer/analyzers/appsourcecop-as0001`,
    `${LEARN}dev-itpro/developer/methods-auto/record/record-setloadfields-method`,
    `${LEARN}dev-itpro/developer/methods-auto/recordref/recordref-setloadfields-method`,
    `${LEARN}dev-itpro/developer/methods-auto/record/record-findset-method`,
    `${LEARN}dev-itpro/developer/findset-guide`,
  ];
  assert.deepEqual(learnJoins(["AS0001"], urls).map((x) => x.url), [urls[0]]);
  assert.deepEqual(learnJoins(["SetLoadFields"], urls), []);
  assert.deepEqual(learnJoins(["FindSet"], urls).map((x) => [x.url, x.identifier]), [[urls[3], "FindSet"]]);
});

test("pull requests: a change page naming the rule's path joins both ways", () => {
  const content = mkdtempSync(join(tmpdir(), "bcobs-gl-"));
  const change = join(content, "changes", "bcquality", "249.md");
  mkdirSync(dirname(change), { recursive: true });
  writeFileSync(change, readFileSync(new URL("../fixtures/bcquality/change-249.md", import.meta.url), "utf8"));
  const byPath = changesByRulePath(content);
  assert.deepEqual(byPath.get(RULE_PATH)?.map((c) => [c.id, c.date]), [["change/bcquality/249", "2026-10-20"]]);

  const rule = readFileSync(new URL("../fixtures/bcquality/admin-and-migration-pages-tolerate-lower-perf.md", import.meta.url), "utf8");
  const joins = guidelineJoins({ repoPath: RULE_PATH, body: rule, tree: [], index, learnUrls: [], changesByPath: byPath, rulePaths: new Set([RULE_PATH]) });
  assert.deepEqual(joins.changes.map((c) => c.id), ["change/bcquality/249"]);
  const page = renderGuidelinePage({ repoPath: RULE_PATH, text: rule, blob: "b".repeat(40), commit: "a4593a1b1585a0fa663efbf39ff02c60f846d851", publishedAt: "2026-09-09T10:00:00Z" }, joins, new Date("2026-10-29T00:00:00Z"));
  const file = join(content, "guidelines", RULE_PATH);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page);
  assert.equal(guidelinesByPath(content).get(RULE_PATH), "guideline/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf");
});

test("caps: at most 24 objects, 12 Learn rows, 30 changes", () => {
  const many = objectIndexFromRows(Array.from({ length: 30 }, (_, i) => [`table/${50000 + i}`, "table", 50000 + i, `Thing ${i}`, "App"] as [string, string, number, string, string]));
  const body = Array.from({ length: 30 }, (_, i) => `Table ${50000 + i} "Thing ${i}"`).join("\n");
  const changes = new Map([[RULE_PATH, Array.from({ length: 40 }, (_, i) => ({ id: `change/bcquality/${i}`, title: `#${i} x`, date: `2026-01-${String((i % 28) + 1).padStart(2, "0")}` }))]]);
  const learnUrls = Array.from({ length: 20 }, (_, i) => `${LEARN}dev-itpro/developer/diagnostics/diagnostic-al${String(i).padStart(4, "0")}`);
  const ids = Array.from({ length: 20 }, (_, i) => `\`AL${String(i).padStart(4, "0")}\``).join(" ");
  const j = guidelineJoins({ repoPath: RULE_PATH, body: `${body}\n${ids}`, tree: [], index: many, learnUrls, changesByPath: changes, rulePaths: new Set() });
  assert.equal([MAX_OBJECTS, MAX_LEARN, MAX_CHANGES].join(), "24,12,30");
  assert.equal(j.objects.length, 24);
  assert.equal(j.learn.length, 12);
  assert.equal(j.changes.length, 30);
  assert.ok(j.changes[0].date >= j.changes[29].date, "newest first");
});

test("a BCQuality change page lists the rules it changed in links.guidelines and links their unjoined lines", async () => {
  const { renderChangePage } = await import("../../pipeline/render/change.js");
  const rec = {
    number: 249, repo: "microsoft/BCQuality", source: "bcquality-prs", url: "https://github.com/microsoft/BCQuality/pull/249", title: "Route guard-dependent conditions", base: "main", major: null,
    merged_at: "2026-10-20T15:59:46Z", merge_commit_sha: "a4593a1b1585a0fa663efbf39ff02c60f846d851", author: "x", author_type: "User", community_contribution: false, labels: [], issues: [],
    fixes_issues: [], work_items: [], systems: ["development"], change_class: "code", apps: [], totals: { files: 2, additions: 2, deletions: 0, al: 1 },
    join: { major: null, commit: null, objects: [], unjoined: [{ path: RULE_PATH, status: "modified", reason: "not-in-snapshot" }, { path: "microsoft/skills/review/other.md", status: "modified", reason: "not-in-snapshot" }] },
  };
  const x = { summary: "A rule changed.", change_kind: "feature", prompt_version: 1, quote: null, key_points: ["A rule changed."], breaking: false, behavior_change: false, obsoletions: [], systems: [] };
  const item = { id: "change/bcquality-prs/249", pillar: "change", source: "bcquality-prs", meta: { repo: "microsoft/BCQuality", number: 249 }, state: "published", stages: {}, flags: [] } as any;
  const id = "guideline/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf";
  const page = renderChangePage(item, rec as any, x as any, [], "/nonexistent", new Date("2026-10-29T00:00:00Z"), [], new Map([[RULE_PATH, id]]));
  const { data, content } = (await import("gray-matter")).default(page);
  assert.deepEqual(data.links.guidelines, [id]);
  assert.ok(content.includes(`- [\`${RULE_PATH}\`](../../guidelines/${RULE_PATH}): modified`), content);
  assert.ok(content.includes("- `microsoft/skills/review/other.md`: modified"));
  const bcapps = renderChangePage(item, { ...rec, repo: "microsoft/BCApps" } as any, x as any, [], "/nonexistent", new Date(), [], new Map([[RULE_PATH, id]]));
  assert.deepEqual((await import("gray-matter")).default(bcapps).data.links.guidelines, [], "only a BCQuality change joins rule paths");
});
