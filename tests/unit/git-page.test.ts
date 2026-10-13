import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { IDENTIFIERS_MAX, IDENTIFIERS_RULE, backfillIdentifiers, gitPageFetched, isCodedId, isIdentifier, pageIdentifiers, parseMsDate, parsePage, parseSearchForm, prefetchBlobs, readBlobs } from "../../pipeline/fetch/git-page.js";
import { Manifest, type ManifestItem } from "../../pipeline/lib/manifest.js";
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
  assert.deepEqual((r.patch?.meta as any).identifiers, [], "D94: the stage writes identifiers (none here: the only code is fenced)");
  await assert.rejects((gitPageFetched() as StageFn)({ ...item, input_hash: null }, { mirrorsDir: mirrors } as any), /no blob id/);
});

// ---------------------------------------------------------------------------------------------- identifiers (D94)

const POLICY = `---
title: Resource exposure policy setting
ms.date: 01/03/2024
---

# Resource exposure policy setting

Set \`resourceExposurePolicy\` in the app.json file. Its properties are \`allowDebugging\`, \`allowDownloadingSource\` and
\`includeSourceInSymbolFile\`; Learn also writes \`includesourceInSymbolFile\` once. \`ShowMyCode\` is the old name.

Not identifiers: \`app.json\`, \`true\`, \`JSON\`, \`Customer\`, \`ms_date\`, \`Record.SetRange\`, \`\`doubleTicked\`\`.

\`\`\`json
"resourceExposurePolicy": { "allowDebugging": true, \`notInCode\` }
\`\`\`

1. In a list:

    \`\`\`al
    \`indentedFenceId\`
    \`\`\`

\`NonDebuggable\` and \`SetRange\` are PascalCase.
`;

test("identifiers: camelCase or PascalCase code spans, outside code fences, first spelling once, in order (D94)", () => {
  assert.deepEqual(pageIdentifiers(POLICY), ["resourceExposurePolicy", "allowDebugging", "allowDownloadingSource", "includeSourceInSymbolFile", "ShowMyCode", "NonDebuggable", "SetRange"]);
  assert.deepEqual(parsePage(POLICY).identifiers, pageIdentifiers(POLICY.replace(/^---[\s\S]*?---\n/, "")));
  for (const w of ["allowDebugging", "SetRange", "HttpClient", "BCContainerHelper", "iOS"]) assert.ok(isIdentifier(w), w);
  for (const w of ["Customer", "JSON", "AL0118", "app.json", "ms_date", "true", "a b"]) assert.ok(!isIdentifier(w), w);
  const many = Array.from({ length: 60 }, (_, k) => `\`fontName${k}\``).join(" ");
  assert.equal(pageIdentifiers(many).length, IDENTIFIERS_MAX, "capped");
  assert.deepEqual(pageIdentifiers("plain text"), []);
});

test("identifiers rule 2: coded ids from single-backtick spans, bold spans and table cells, never from prose or fences (D95)", () => {
  const body = [
    "Set `allowDebugging` first, then read `RT0009` in the trace. Prose mentions RT0007 only in a sentence.",
    "",
    "| Dimension | Description |",
    "|---|---|",
    "| eventId | **RT0006**This event is logged ... |",
    "| LC0234 | The app validation trace. Also see RT0011 in this cell, and XRT00123 is no id. |",
    "",
    "**RT0005**",
    "",
    "Bold prose **see RT0012 for more** is no whole span.",
    "",
    "```kusto",
    "traces | where customDimensions.eventId == 'RT0008'",
    "```",
  ].join("\n");
  // code spans first (a coded id in a single backtick counts, isIdentifier alone rejects it), then bold spans, then cells
  assert.deepEqual(pageIdentifiers(body), ["allowDebugging", "RT0009", "RT0006", "RT0005", "LC0234", "RT0011"]);
  assert.ok(isCodedId("RT0005") && isCodedId("AS0020") && isCodedId("PTE0001") && isCodedId("AL0281"));
  for (const w of ["rt0005", "R0005", "ABCD0005", "RT005", "RT00055", "IRS1099x", "AL 0281"]) assert.ok(!isCodedId(w), w);
  assert.ok(!isIdentifier("RT0005"), "the camelCase rule does not read it; the coded-id rule does");
  const spec = ["`allowDebugging`", "**RT0005**", "| eventId | **RT0006**This ... |", "| LC0234 | ... |", "RT0007 in prose", "```", "RT0008", "```"].join("\n");
  assert.deepEqual(pageIdentifiers(spec), ["allowDebugging", "RT0005", "RT0006", "LC0234"], "the spec's example: prose and fence give nothing");
  // the cap and the dedup are shared with the code-span pass: RT0005 in a span and in bold is one entry, case-insensitively
  assert.deepEqual(pageIdentifiers("`RT0005` and **RT0005** and | rt0005 | RT0005 |"), ["RT0005"]);
  const rows = Array.from({ length: 50 }, (_, k) => `| RT${String(k).padStart(4, "0")} |`).join("\n");
  assert.equal(pageIdentifiers(`\`aaBb\`\n${rows}`).length, IDENTIFIERS_MAX, "capped with the table cells");
  assert.deepEqual(pageIdentifiers(`\`aaBb\`\n${rows}`).slice(0, 2), ["aaBb", "RT0000"]);
  assert.deepEqual(parsePage(`---\ntitle: T\n---\n\n**RT0005** x`).identifiers, ["RT0005"]);
});

test("backfill: Learn items fetched before D94 get identifiers from their fetched blob, nothing else changes, once (D94)", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-ids-"));
  const src = join(root, "src");
  const g = (cwd: string, ...a: string[]) => execFileSync("git", a, { cwd, stdio: "pipe" }).toString().trim();
  mkdirSync(join(src, "docs"), { recursive: true });
  g(src, "init", "-q", "-b", "main"); g(src, "config", "user.email", "t@example.com"); g(src, "config", "user.name", "t");
  g(src, "config", "uploadpack.allowFilter", "true"); g(src, "config", "uploadpack.allowAnySHA1InWant", "true");
  writeFileSync(join(src, "docs/policy.md"), POLICY);
  writeFileSync(join(src, "docs/plain.md"), "# Plain\n\nNo code spans.");
  writeFileSync(join(src, "docs/gone.md"), "# Gone\n\n`neverRead`");
  g(src, "add", "-A"); g(src, "commit", "-q", "-m", "x");
  const mirrors = join(root, "mirrors");
  mkdirSync(mirrors);
  g(mirrors, "clone", "-q", "--bare", "--filter=blob:none", `file://${src}`, "learn.git");
  const blob = (f: string) => g(src, "rev-parse", `HEAD:docs/${f}`);
  const m = new Manifest(join(root, "manifest"));
  const item = (key: string, b: string | null, meta: Record<string, unknown> = {}): ManifestItem => ({
    id: `docs/learn/${key}`, pillar: "docs", source: "learn", tier: "official", title: key, url: `https://learn.microsoft.com/dynamics365/business-central/${key}`,
    state: "fetched", stages: { discovered: { at: "2026-10-01T00:00:00.000Z" }, ...(b ? { fetched: { at: "2026-10-01T00:00:00.000Z", blob: b, words: 1, forms: 0 } } : {}) },
    attempts: 0, input_hash: b, flags: [], meta: { path: key, description: "d", ...meta },
  });
  m.save(item("docs/policy.md", blob("policy.md")));
  m.save(item("docs/plain.md", blob("plain.md")));
  m.save(item("docs/new.md", blob("plain.md"), { identifiers: ["fromTheStage"], identifiers_rule: IDENTIFIERS_RULE }));
  m.save({ ...item("docs/never.md", null), state: "discovered" });
  // a blob the mirror never had: counted as missing, left for the next run
  m.save(item("docs/missing.md", "0123456789abcdef0123456789abcdef01234567"));
  // read-only check first: nothing is local in a blobless clone, and readBlobs never fetches
  assert.equal((await readBlobs(join(mirrors, "learn.git"), [blob("policy.md")])).get(blob("policy.md")), null);
  const before = m.get("docs/learn/docs/policy.md")!;
  const r = await backfillIdentifiers(m, mirrors);
  assert.deepEqual({ ...r, ms: 0 }, { items: 3, filled: 2, prefetched: 2, missing: 1, ms: 0, rule: 2 });
  const after = m.get("docs/learn/docs/policy.md")!;
  assert.deepEqual(after.meta?.identifiers, ["resourceExposurePolicy", "allowDebugging", "allowDownloadingSource", "includeSourceInSymbolFile", "ShowMyCode", "NonDebuggable", "SetRange"]);
  const { meta: a, ...restAfter } = after, { meta: b, ...restBefore } = before;
  assert.deepEqual(restAfter, restBefore, "state, stages and hashes untouched: nothing re-runs");
  assert.deepEqual({ ...a, identifiers: undefined, identifiers_rule: undefined }, { ...b, identifiers: undefined, identifiers_rule: undefined });
  assert.equal(a?.identifiers_rule, 2, "D95: the rule the identifiers were written under");
  assert.deepEqual(m.get("docs/learn/docs/plain.md")!.meta?.identifiers, [], "an empty list marks the item done");
  assert.deepEqual(m.get("docs/learn/docs/new.md")!.meta?.identifiers, ["fromTheStage"], "an item the stage filled is not read");
  assert.equal(m.get("docs/learn/docs/never.md")!.meta?.identifiers, undefined, "never fetched: the stage fills it");
  const again = await backfillIdentifiers(m, mirrors);
  assert.deepEqual([again.items, again.filled, again.missing], [1, 0, 1], "only the missing blob is tried again");
  assert.deepEqual((await backfillIdentifiers(m, join(root, "no-mirrors"))).missing, 1, "no mirror: nothing read, nothing fails");
});

test("backfill rule 2: an item with identifiers but no rule (or a lower one) is read again, one written under rule 2 is left alone; the stage writes the rule (D95)", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-ids2-"));
  const src = join(root, "src");
  const g = (cwd: string, ...a: string[]) => execFileSync("git", a, { cwd, stdio: "pipe" }).toString().trim();
  mkdirSync(join(src, "docs"), { recursive: true });
  g(src, "init", "-q", "-b", "main"); g(src, "config", "user.email", "t@example.com"); g(src, "config", "user.name", "t");
  g(src, "config", "uploadpack.allowFilter", "true"); g(src, "config", "uploadpack.allowAnySHA1InWant", "true");
  const page = "---\ntitle: Long running SQL\n---\n\n# Long running\n\nThe `eventID` dimension.\n\n| Dimension | Description |\n|---|---|\n| eventId | **RT0005**Long running query |\n";
  writeFileSync(join(src, "docs/trace.md"), page);
  g(src, "add", "-A"); g(src, "commit", "-q", "-m", "x");
  const mirrors = join(root, "mirrors");
  mkdirSync(mirrors);
  g(mirrors, "clone", "-q", "--bare", "--filter=blob:none", `file://${src}`, "learn.git");
  const blob = g(src, "rev-parse", "HEAD:docs/trace.md");
  const m = new Manifest(join(root, "manifest"));
  const item = (key: string, meta: Record<string, unknown>): ManifestItem => ({
    id: `docs/learn/${key}`, pillar: "docs", source: "learn", tier: "official", title: key, url: `https://learn.microsoft.com/dynamics365/business-central/${key}`,
    state: "fetched", stages: { discovered: { at: "2026-10-01T00:00:00.000Z" }, fetched: { at: "2026-10-01T00:00:00.000Z", blob, words: 1, forms: 0 } },
    attempts: 0, input_hash: blob, flags: [], meta: { path: key, description: "d", ...meta },
  });
  m.save(item("docs/rule1.md", { identifiers: ["eventID"] }));
  m.save(item("docs/rule1b.md", { identifiers: ["eventID"], identifiers_rule: 1 }));
  m.save(item("docs/rule2.md", { identifiers: ["fromTheStage"], identifiers_rule: IDENTIFIERS_RULE }));
  const r = await backfillIdentifiers(m, mirrors);
  assert.deepEqual({ ...r, ms: 0 }, { items: 2, filled: 2, prefetched: 1, missing: 0, ms: 0, rule: 2 }, "the item written under rule 2 is not read; the report names the rule");
  for (const k of ["rule1", "rule1b"]) {
    const it = m.get(`docs/learn/docs/${k}.md`)!;
    assert.deepEqual([it.meta?.identifiers, it.meta?.identifiers_rule], [["eventID", "RT0005"], 2], k);
    assert.equal(it.state, "fetched", "state and stages stay: nothing re-runs");
  }
  assert.deepEqual(m.get("docs/learn/docs/rule2.md")!.meta?.identifiers, ["fromTheStage"]);
  assert.equal((await backfillIdentifiers(m, mirrors)).items, 0, "once under rule 2, never again");
  // the stage writes the rule with the identifiers
  const out = await (gitPageFetched() as StageFn)(item("docs/new.md", {}), { mirrorsDir: mirrors } as any);
  assert.deepEqual([(out.patch?.meta as any)?.identifiers, (out.patch?.meta as any)?.identifiers_rule], [["eventID", "RT0005"], 2]);
});
