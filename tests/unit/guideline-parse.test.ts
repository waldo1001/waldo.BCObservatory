import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { BCQ_META_RULE, parsePage } from "../../pipeline/fetch/git-page.js";

// D126: BCQuality rule frontmatter (domain, keywords, bc-version, ...) and a summary from the Description section
const fixture = (name: string) => readFileSync(new URL(`../fixtures/bcquality/${name}`, import.meta.url), "utf8");
const RULE = fixture("admin-and-migration-pages-tolerate-lower-perf.md");
const SKILL = fixture("al-performance-review.md");
const LEARN = `---
title: Posting group setup
description: Learn how to use posting groups.
ms.topic: install-set-up-deploy
ms.search.keywords: posting setup, initialize
ms.date: 08/13/2025
---

# Set up posting groups

Posting groups map entities to G/L accounts. Use \`SetRange\` to filter.
`;

test("a BCQuality rule: domain, keywords, facets, kind rule, summary cut at a sentence end", () => {
  const m = parsePage(RULE, "microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf.md");
  assert.ok(m.bcq);
  assert.equal(m.bcq.domain, "performance");
  assert.equal(m.bcq.keywords.length, 6);
  assert.deepEqual(m.bcq.keywords, ["admin-page", "migration", "wizard", "hybrid", "permissions", "lower-severity"]);
  assert.deepEqual([m.bcq.bc_version, m.bcq.technologies, m.bcq.countries, m.bcq.application_area], [["all"], ["al"], ["w1"], ["all"]]);
  assert.equal(m.bcq.kind, "rule");
  assert.equal(m.bcq.summary, "Some pages run rarely and against small datasets, and the upstream guidance explicitly calls for treating them as lower severity.");
  assert.equal(m.title, "Admin and migration pages tolerate lower performance discipline");
});

test("a summary drops link targets and code-span backticks, and stays within 300 characters", () => {
  const m = parsePage("---\ndomain: style\nkeywords: [a]\nbc-version: [all]\n---\n# T\n\n## Description\n\nUse [`SetLoadFields`](https://x.example/y) before `FindSet`. Then read.\n");
  assert.equal(m.bcq?.summary, "Use SetLoadFields before FindSet. Then read.");
  const long = `${"word ".repeat(40).trim()}. ${"more ".repeat(60).trim()}.`;
  const s = parsePage(`---\ndomain: style\n---\n# T\n\n## Description\n\n${long}\n`).bcq?.summary ?? "";
  assert.ok(s.length <= 300 && s.endsWith("."), s);
});

test("a review skill: kind skill, no domain, summary from the frontmatter description", () => {
  const m = parsePage(SKILL, "microsoft/skills/review/al-performance-review.md");
  assert.equal(m.bcq?.kind, "skill");
  assert.equal(m.bcq?.domain, null);
  assert.equal(m.bcq?.summary, "Reviews AL source changes against performance guidance from BCQuality.");
  assert.deepEqual(m.bcq?.keywords, []);
  assert.equal(m.title, "AL performance review");
});

test("a Learn page has no bcq and keeps every field it had", () => {
  const m = parsePage(LEARN);
  assert.equal(m.bcq, undefined);
  assert.deepEqual([m.title, m.description, m.ms_date, m.ms_topic, m.keywords, m.identifiers], ["Posting group setup", "Learn how to use posting groups.", "2025-08-13", "install-set-up-deploy", ["posting setup", "initialize"], ["SetRange"]]);
  assert.ok(BCQ_META_RULE >= 1);
});
