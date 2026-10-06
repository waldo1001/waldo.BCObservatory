import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { gitPageFetched, parseMsDate, parsePage, parseSearchForm, prefetchBlobs } from "../../pipeline/fetch/git-page.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import type { StageFn } from "../../pipeline/orchestrator/execute.js";

const PAGE = `---
title: Posting group setup
description: Learn how to use posting groups.
ms.topic: install-set-up-deploy
ms.search.keywords: posting setup, initialize
ms.search.form: 312, 313_Primary, Report_6627_Primary
ms.date: 08/13/2025
ai-usage: ai-assisted
---

# Set up posting groups

Posting groups map entities to G/L accounts.

## Gen. posting setup

\`\`\`al
codeunit 50100 Foo { }
\`\`\`
`;

test("Learn frontmatter: search form ids, US dates, keywords, words without code", () => {
  assert.deepEqual(parseSearchForm("312, 313_Primary, Report_6627_Primary"), [
    { raw: "312", id: 312, kind: null }, { raw: "313_Primary", id: 313, kind: "Primary" }, { raw: "Report_6627_Primary", id: 6627, kind: "Report Primary" },
  ]);
  assert.deepEqual(parseSearchForm(undefined), []);
  assert.deepEqual([parseMsDate("8/3/2025"), parseMsDate(new Date("2025-08-13T00:00:00Z")), parseMsDate("soon")], ["2025-08-03", "2025-08-13", null]);
  const m = parsePage(PAGE);
  assert.deepEqual([m.title, m.ms_date, m.ms_topic, m.ai_usage, m.keywords, m.h2], ["Posting group setup", "2025-08-13", "install-set-up-deploy", "ai-assisted", ["posting setup", "initialize"], 1]);
  assert.ok(m.words > 8 && m.words < 20, `words ${m.words}`);
  assert.equal(parsePage("# Only a heading\n\ntext").title, "Only a heading");
  assert.equal(parsePage("---\nbad: [unclosed\n---\n# H\n").title, "H", "malformed frontmatter falls back to the body");
});

test("blobless mirror: batch prefetch, then the stage reads the page at its blob id", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-gitpage-"));
  const src = join(root, "src");
  const g = (cwd: string, ...a: string[]) => execFileSync("git", a, { cwd, stdio: "pipe" }).toString().trim();
  mkdirSync(join(src, "docs"), { recursive: true });
  g(src, "init", "-q", "-b", "main"); g(src, "config", "user.email", "t@example.com"); g(src, "config", "user.name", "t");
  g(src, "config", "uploadpack.allowFilter", "true"); g(src, "config", "uploadpack.allowAnySHA1InWant", "true");
  writeFileSync(join(src, "docs/a.md"), PAGE);
  writeFileSync(join(src, "docs/b.md"), "# B page\n\nhello world");
  g(src, "add", "-A"); g(src, "commit", "-q", "-m", "x");
  const mirrors = join(root, "mirrors");
  mkdirSync(mirrors);
  g(mirrors, "clone", "-q", "--bare", "--filter=blob:none", `file://${src}`, "learn.git");
  const blobA = g(src, "rev-parse", "HEAD:docs/a.md"), blobB = g(src, "rev-parse", "HEAD:docs/b.md");
  assert.equal(await prefetchBlobs(join(mirrors, "learn.git"), [blobA, blobB]), 2);
  assert.equal(await prefetchBlobs(join(mirrors, "learn.git"), [blobA, blobB]), 0, "nothing left to fetch");

  const item = { id: "docs/learn/docs/a.md", pillar: "docs", source: "learn", tier: "official", title: "a", url: "u", state: "discovered", stages: {}, attempts: 0, input_hash: blobA } as ManifestItem;
  const r = await (gitPageFetched() as StageFn)(item, { mirrorsDir: mirrors } as any);
  assert.equal(r.output_hash, blobA);
  assert.equal(r.patch?.title, "Posting group setup");
  assert.deepEqual((r.patch?.meta as any).search_form.map((f: any) => f.id), [312, 313, 6627]);
  await assert.rejects((gitPageFetched() as StageFn)({ ...item, input_hash: null }, { mirrorsDir: mirrors } as any), /no blob id/);
});
