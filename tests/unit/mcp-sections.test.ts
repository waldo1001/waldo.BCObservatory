import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { ROOT } from "../../pipeline/lib/paths.js";
import { memberAnswer, parseAnchor, type DiffObject } from "../../packages/mcp/src/country.js";
import { CONTROL_WORDS, OBJECT_KEYS, nearestKeys, anchorView, budgetOf, compactView, findSection, pageView, parsePage, sectionKey, sectionView } from "../../packages/mcp/src/sections.js";

// ---------------------------------------------------------------------------------------------- test 1, a hand-built page (D93 5)

const S = "https://example.test/x/", PATH = "objects/codeunit/9";
const URLS = Array.from({ length: 30 }, (_, i) => `    - https://learn.microsoft.com/dynamics365/business-central/demo-page-${String(i + 1).padStart(2, "0")}`);
const FIELDS = Array.from({ length: 12 }, (_, i) => `| ${i + 1} | Field ${i + 1} | Code[20] | Specifies field ${i + 1}. |  |`);
const EVENTS = Array.from({ length: 8 }, (_, i) => `- \`OnEvent${i + 1}(var Rec: Record "Demo")\` (integration): Raised ${i + 1}.`);
const SUBS = '  - subscribers: [Codeunit 1 "X"](../codeunit/1.md) OnEvent1Sub';
const SOURCE = "Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).";
const FM = ["id: object/codeunit/9", "type: object", 'title: Codeunit 9 "Demo"', "tags:", "  - codeunit", "links:", "  learn:", ...URLS,
  "generated:", '  at: "2026-10-12T00:00:00.000Z"', "  input_hash: abc", "present_in:", '  - "29"', '  - "30"'];
const P = ["---", ...FM, "---", "", '# Codeunit 9 "Demo"', "", "> Demo summary.", "",
  "## Fields", "", "Explanation: the field's ToolTip.", "", "| No. | Name | Type | Explanation | Notes |", "|---|---|---|---|---|", ...FIELDS, "",
  "## Events published", "", EVENTS[0], SUBS, ...EVENTS.slice(1), "",
  "## Procedures", "", "- `P1()`", "- `P1(X: Integer)`", "- `P2()`: Does two.", "", "Plus 3 local procedures.", "",
  "## Countries that replace it", "", "[BE](../../localizations/be.md)", "", SOURCE, "",
  "## Ask your agent", "", "Procedure bodies are not stored here (D10).", ""].join("\n");
const FIRST = (key: string) => `Codeunit 9 "Demo", section "${key}": ${S}${PATH}/`;
const KEYS = "fields, events, procedures, countries, ask, frontmatter";
const view = (a: { section?: string; offset?: number; limit?: number }, budget = 30_000, path = PATH) => pageView(P, path, a, budget, S);

test("1: parsePage splits sections, rows, continuation lines and the closing text", () => {
  const p = parsePage(P);
  assert.deepEqual(p.sections.map((s) => s.key), ["fields", "events", "procedures", "countries", "ask"]);
  assert.deepEqual(p.sections.map((s) => s.rows.length), [12, 8, 3, 0, 0]);
  assert.deepEqual(p.sections[1].rows[0].lines, [EVENTS[0], SUBS], "the subscribers line belongs to its event");
  assert.deepEqual(p.sections[2].tail, ["", "Plus 3 local procedures."]);
  assert.deepEqual(p.sections[0].rows[0].table, ["| No. | Name | Type | Explanation | Notes |", "|---|---|---|---|---|"]);
  assert.equal(p.frontmatter, FM.join("\n"));
  assert.equal(p.preamble, '# Codeunit 9 "Demo"\n\n> Demo summary.');
});

test("2: section keys: fixed for object headings, snake_case elsewhere, numbered when a heading repeats", () => {
  assert.equal(sectionKey("Events published"), "events");
  assert.equal(sectionKey("Fields on this page"), "controls");
  assert.equal(sectionKey("Objects of its own"), "objects_of_its_own");
  const twice = parsePage("---\nid: release/al-1\n---\n\n# AL 1\n\n## Bug fixes\n\n- one\n\n## Bug fixes\n\n- two\n");
  assert.deepEqual(twice.sections.map((s) => s.key), ["bug_fixes", "bug_fixes_2"]);
  assert.deepEqual(findSection(twice, "bug_fixes_2")?.rows[0].lines, ["- two"]);
});

test("3: findSection by key, heading or snake_case, case-insensitive", () => {
  const p = parsePage(P);
  for (const w of ["events", "Events published", "EVENTS", "events_published"]) assert.equal(findSection(p, w)?.heading, "Events published", w);
  assert.equal(findSection(p, "foo"), null);
  assert.equal(findSection(p, "frontmatter")?.rows.length, 43);
});

test("4: budgetOf", () => {
  assert.equal(budgetOf(undefined), 30_000);
  assert.equal(budgetOf(""), 30_000);
  assert.equal(budgetOf("abc"), 30_000);
  assert.equal(budgetOf("0"), Infinity);
  assert.equal(budgetOf("1200"), 5_000);
  assert.equal(budgetOf("45000"), 45_000);
});

test("5: a page that fits comes back byte for byte", () => {
  assert.equal(P.length < 30_000, true);
  assert.equal(view({}), P);
  assert.equal(pageView(P, PATH, {}, Infinity, S), P);
});

test("6: the compact view", () => {
  const c = view({}, 2000);
  assert.ok(c.startsWith("---\nid: object/codeunit/9\n"), c.slice(0, 40));
  assert.ok(!c.includes("generated:") && !c.includes("input_hash"), "generated is dropped");
  assert.ok(c.includes(URLS[6]) && !c.includes(URLS[7]), "learn keeps demo-page-01 to -07");
  assert.ok(c.includes(`${URLS[6]}\n    # … 23 more; section: "frontmatter"\n`));
  assert.ok(c.includes('present_in:\n  - "29"\n  - "30"\n'), "a short list stays whole");
  assert.ok(c.includes(`Compact view: this page is ${P.length.toLocaleString("en-US")} characters and one answer holds 2,000, so each section shows its first 5 rows.`));
  assert.ok(c.includes(`Sections: fields (12), events (8), procedures (3), countries, ask, frontmatter. Read one with bc_cat("${PATH}", section: "<key>"); offset and limit page through a long one.`));
  assert.ok(c.includes(`## Fields\nExplanation: the field's ToolTip.\n| No. | Name | Type | Explanation | Notes |\n|---|---|---|---|---|\n${FIELDS.slice(0, 5).join("\n")}\n→ 7 more of 12: bc_cat("${PATH}", section: "fields", offset: 5)\n`));
  assert.ok(!c.includes(FIELDS[5]));
  assert.ok(c.includes(`## Events published\n${EVENTS.slice(0, 5).join("\n")}\n→ 3 more of 8: bc_cat("${PATH}", section: "events", offset: 5)\n`), "without the subscribers line");
  assert.ok(!c.includes("subscribers:"));
  assert.ok(c.includes("## Procedures\n- `P1()`\n- `P1(X: Integer)`\n- `P2()`: Does two.\nPlus 3 local procedures.\n"));
  assert.ok(c.includes(`## Countries that replace it\n[BE](../../localizations/be.md)\n${SOURCE}\n`));
  assert.ok(c.endsWith("## Ask your agent\nProcedure bodies are not stored here (D10).\n"));
  assert.ok(!/\n\n\n/.test(c));
  const fm = /^---\n([\s\S]*?)\n---\n/.exec(c)![1];
  const y = parseYaml(fm) as { links: { learn: string[] }; present_in: string[] };
  assert.equal(y.links.learn.length, 7);
  assert.deepEqual(y.present_in, ["29", "30"]);
  assert.equal(compactView(P, PATH, 2000), c);
});

test("7: a section that fits comes back as on the page", () => {
  assert.equal(view({ section: "fields" }), `${FIRST("fields")}\n\n## Fields\n\nExplanation: the field's ToolTip.\n\n| No. | Name | Type | Explanation | Notes |\n|---|---|---|---|---|\n${FIELDS.join("\n")}\n`);
});

test("8: offset and limit slice by rows", () => {
  assert.equal(view({ section: "Events published", offset: 2, limit: 3 }),
    `${FIRST("events")}\n\n## Events published\n\n${EVENTS.slice(2, 5).join("\n")}\n\nRows 3-5 of 8. Next: bc_cat("${PATH}", section: "events", offset: 5)\n`);
});

test("9: a table slice repeats its header", () => {
  assert.equal(view({ section: "fields", offset: 10 }),
    `${FIRST("fields")}\n\n## Fields\n\n| No. | Name | Type | Explanation | Notes |\n|---|---|---|---|---|\n${FIELDS.slice(10).join("\n")}\n\nRows 11-12 of 12.\n`);
});

test("10: an offset past the last row reads the closing text", () => {
  assert.equal(view({ section: "procedures", offset: 3 }), `${FIRST("procedures")}\n\n## Procedures\n\nPlus 3 local procedures.\n`);
  assert.equal(view({ section: "fields", offset: 12 }), `${FIRST("fields")}\n\n## Fields\n\nNo rows after 12 in section "fields" of ${PATH}.\n`);
});

test("11: a section without rows ignores offset and comes back whole", () => {
  assert.equal(view({ section: "countries", offset: 1 }), `${FIRST("countries")}\n\n## Countries that replace it\n\n[BE](../../localizations/be.md)\n\n${SOURCE}\n`);
});

test("12: the budget cuts a slice before the row that would cross it, keeping continuation lines", () => {
  const a = sectionView(P, PATH, "events", undefined, undefined, 600, S);
  assert.ok(a.length <= 600, String(a.length));
  assert.ok(a.includes(`${EVENTS[0]}\n${SUBS}\n${EVENTS[1]}\n\nRows 1-2 of 8. Next: bc_cat("${PATH}", section: "events", offset: 2)`), a);
  assert.ok(a.endsWith('offset: 2)\n') && !a.includes("OnEvent3"));
  // the closing text comes with the last slice when it fits, else the status line points at it
  assert.ok(view({ section: "procedures", offset: 1 }).endsWith("- `P2()`: Does two.\n\nPlus 3 local procedures.\n\nRows 2-3 of 3.\n"));
  assert.ok(view({ section: "procedures", offset: 1, limit: 2 }).endsWith(`Rows 2-3 of 3. The section's closing text: bc_cat("${PATH}", section: "procedures", offset: 3)\n`));
});

test("13-16: a symbol path returns its member's row", () => {
  assert.equal(view({}, 30_000, `${PATH}#event-OnEvent1`), `Codeunit 9 "Demo", event OnEvent1: ${S}${PATH}/#event-OnEvent1\n\n## Events published\n${EVENTS[0]}\n${SUBS}\n`);
  const proc = view({}, 30_000, `${PATH}#proc-P1`);
  assert.ok(proc.startsWith(`Codeunit 9 "Demo", procedure P1: ${S}${PATH}/#proc-P1\n\n## Procedures\n- \`P1()\`\n- \`P1(X: Integer)\`\n`), proc);
  assert.ok(!proc.includes("P2"));
  const field = view({}, 30_000, `${PATH}#field-3`);
  assert.equal(field, `Codeunit 9 "Demo", field 3: ${S}${PATH}/#field-3\n\n## Fields\n| No. | Name | Type | Explanation | Notes |\n|---|---|---|---|---|\n${FIELDS[2]}\n`);
  assert.ok(!field.includes("| 13 |"));
  assert.ok(view({ section: "fields", offset: 3 }, 30_000, `${PATH}#field-3`).endsWith(`${FIELDS[2]}\n`), "section, offset and limit are ignored with an anchor");
  assert.ok(view({}, 30_000, `${PATH}#event-Nope`).startsWith(`(No row for #event-Nope on this page.)\n\n---\nid: object/codeunit/9`));
  assert.equal(anchorView(P, PATH, "#value-1", S), null, "no values section");
});

test("17-18: unknown sections and offset without a section answer with the section keys", () => {
  assert.equal(view({ section: "foo" }), `No section "foo" on ${PATH}. Sections: ${KEYS}.`);
  assert.equal(view({ offset: 5 }), `offset and limit read one section: bc_cat("${PATH}", section: "<key>", offset: 5). Sections: ${KEYS}.`);
  assert.equal(view({ limit: 5 }), `offset and limit read one section: bc_cat("${PATH}", section: "<key>", offset: 0). Sections: ${KEYS}.`);
});

// ---------------------------------------------------------------------------------------------- D97, section aliases

const PGPATH = "objects/page/25";
const PG = ["---", "id: object/page/25", "type: object", 'title: Page 25 "Demo"', "---", "", '# Page 25 "Demo"', "", "> Demo page.", "",
  "## Properties", "", "| Property | Value |", "|---|---|", "| PageType | List |", "",
  "## Fields on this page", "", "| Control | Source |", "|---|---|", "| No. | Rec.No |", "| Name | Rec.Name |", "| Amount | Rec.Amount |", "",
  "## Actions", "", "- `Post`", "- `Print`", "",
  "## Trigger event subscribers", "", "- `OnX` in Codeunit 1", "",
  "## Calls", "", "- Codeunit 80", ""].join("\n");
const NOCTRL = ["---", "id: object/pageextension/9", "---", "", "# Page extension 9", "", "## Properties", "", "| Property | Value |", "|---|---|", "| A | B |", ""].join("\n");
const TBL = ["---", "id: object/table/9", "---", "", "# Table 9", "", "## Fields", "", "| No. | Name |", "|---|---|", "| 1 | A |", ""].join("\n");

test("D97 1-3: fields, columns and members read a page's controls; a real key is never shadowed", () => {
  const pg = parsePage(PG);
  for (const w of ["fields", "Fields", "columns", "MEMBERS", "controls"]) assert.equal(findSection(pg, w)?.key, "controls", w);
  assert.equal(findSection(parsePage(P), "fields")?.key, "fields");
  assert.equal(findSection(parsePage(TBL), "fields")?.key, "fields");
  assert.equal(findSection(parsePage(NOCTRL), "fields"), null);
  assert.deepEqual([...CONTROL_WORDS], ["fields", "columns", "members"]);
});

test("D97 4: section fields on a page answers with the controls section", () => {
  const a = pageView(PG, PGPATH, { section: "fields" }, 30_000, S);
  assert.ok(a.startsWith(`Page 25 "Demo", section "controls": ${S}${PGPATH}/`), a);
  for (const r of ["No.", "Name", "Amount"]) assert.ok(a.includes(`| ${r} |`), r);
});

test("D97 5-6: nearestKeys", () => {
  const pg = parsePage(PG);
  assert.deepEqual(nearestKeys(pg, "control"), ["controls"]);
  assert.deepEqual(nearestKeys(pg, "subscribers"), ["trigger_subscribers"]);
  assert.deepEqual(nearestKeys(pg, "action"), ["actions"]);
  assert.deepEqual(nearestKeys(pg, "call"), ["calls"]);
  assert.deepEqual(nearestKeys(pg, "foo"), []);
  assert.deepEqual(nearestKeys(pg, "zzzzzz"), []);
  assert.deepEqual(nearestKeys(parsePage(NOCTRL), "fields"), [], "an alias word gets no suggestion");
});

test("D97 7-8: the not-found answer names the nearest key, and says nothing extra without one", () => {
  const a = pageView(PG, PGPATH, { section: "control" }, 30_000, S);
  assert.equal(a, `No section "control" on ${PGPATH}. Did you mean "controls"? Sections: properties, controls, actions, trigger_subscribers, calls, frontmatter.`);
  assert.equal(view({ section: "foo" }), `No section "foo" on ${PATH}. Sections: ${KEYS}.`);
});

test("D97: over the committed content, every page with a layout resolves the aliases and every table keeps fields", (t) => {
  const root = join(ROOT, "content");
  if (!existsSync(root)) return t.skip("no content/");
  let pages = 0, tables = 0;
  for (const kind of ["page", "pageextension"]) {
    const dir = join(root, "objects", kind);
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir)) {
      const md = readFileSync(join(dir, f), "utf8");
      if (!md.includes("\n## Fields on this page\n")) continue;
      const p = parsePage(md);
      for (const w of CONTROL_WORDS) assert.equal(findSection(p, w)?.key, "controls", `${kind}/${f} ${w}`);
      pages++;
    }
  }
  const tdir = join(root, "objects", "table");
  if (existsSync(tdir)) for (const f of readdirSync(tdir)) {
    const md = readFileSync(join(tdir, f), "utf8");
    if (!md.includes("\n## Fields\n")) continue;
    assert.equal(findSection(parsePage(md), "fields")?.key, "fields", f);
    tables++;
  }
  t.diagnostic(`${pages} pages with controls, ${tables} tables with fields`);
});

test("19-20: the frontmatter is a section of lines", () => {
  assert.equal(view({ section: "frontmatter" }), `${FIRST("frontmatter")}\n\n---\n${FM.join("\n")}\n---\n`);
  assert.equal(view({ section: "frontmatter", limit: 4 }), `${FIRST("frontmatter")}\n\n${FM.slice(0, 4).join("\n")}\n\nRows 1-4 of 43. Next: bc_cat("${PATH}", section: "frontmatter", offset: 4)\n`);
});

test("21: fenced code is text, not a heading or a row", () => {
  const md = "---\nid: topic/x\n---\n\n# X\n\n## Example\n\nSome text.\n\n```md\n## Not a heading\n- not a row\n```\n";
  const p = parsePage(md);
  assert.deepEqual(p.sections.map((s) => s.key), ["example"]);
  assert.equal(p.sections[0].rows.length, 0);
  assert.ok(p.sections[0].head.includes("## Not a heading") && p.sections[0].head.includes("- not a row"));
});

// ---------------------------------------------------------------------------------------------- test 2, the headings pin

test("every object-page heading the renderer emits has a fixed key, and no other key exists", () => {
  const src = readFileSync(join(ROOT, "pipeline/render/object.ts"), "utf8");
  const cut = src.search(/\/\/ -+ localizations/);
  assert.ok(cut > 0, "the localizations marker");
  const literals = [...src.slice(0, cut).matchAll(/"## ([^"]+)"/g)].map((m) => m[1]);
  const headings = [...new Set(literals)];
  assert.equal(literals.length, 26, literals.join(", "));
  assert.equal(headings.length, 25);
  for (const h of headings) assert.ok(OBJECT_KEYS[h], `no key for "## ${h}"`);
  assert.deepEqual(Object.keys(OBJECT_KEYS).sort(), headings.sort());
});

// ---------------------------------------------------------------------------------------------- test 3, the committed content

const CONTENT = join(ROOT, "content");
function mdFiles(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) mdFiles(p, out);
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}
const pathOf = (file: string) => file.slice(CONTENT.length + 1).replace(/\.md$/, "");
const STATUS = /\nRows (\d+)-(\d+) of (\d+)\.(?: Next: bc_cat\("[^"]+", section: "[^"]+", offset: (\d+)\)| The section's closing text: bc_cat\("[^"]+", section: "[^"]+", offset: (\d+)\))?\n$/;

test("real pages: Codeunit 80, Table 18 and Table 36 compact", (t) => {
  for (const [path, max] of [["objects/codeunit/80", 12_000], ["objects/table/18", 17_000], ["objects/table/36", 18_000]] as const) {
    const md = readFileSync(join(CONTENT, `${path}.md`), "utf8");
    const c = compactView(md, path, 30_000);
    t.diagnostic(`${path}: ${md.length} characters, compact ${c.length}`);
    assert.ok(c.length < max, `${path}: ${c.length}`);
    assert.ok(c.startsWith("---\nid: object/"));
    if (path === "objects/codeunit/80") {
      const events = /\ncounts:\n(?: {2}.*\n)*? {2}events: (\d+)\n/.exec(md)?.[1];
      if (events === "530") assert.ok(c.includes('→ 525 more of 530: bc_cat("objects/codeunit/80", section: "events", offset: 5)'));
      else t.diagnostic(`Codeunit 80 has ${events} events now, not 530: the continuation line is not checked`);
    }
  }
});

test("real pages: every page over the budget has a compact view that parses, and every section reads in slices under it", (t) => {
  const big = mdFiles(CONTENT).filter((f) => statSync(f).size > 30_000).map((f) => ({ f, md: readFileSync(f, "utf8") })).filter((x) => x.md.length > 30_000);
  t.diagnostic(`${big.length} pages over 30,000 characters`);
  assert.ok(big.length > 100);
  let largestCompact = [0, ""] as [number, string], largestAnswer = [0, ""] as [number, string], mostCalls = [0, ""] as [number, string];
  const problems: string[] = [];
  for (const { f, md } of big) {
    const path = pathOf(f);
    const c = pageView(md, path, {}, 30_000, S);
    if (c.length > largestCompact[0]) largestCompact = [c.length, path];
    if (c.length >= 20_000) problems.push(`${path}: compact ${c.length}`);
    try { parseYaml(/^---\n([\s\S]*?)\n---\n/.exec(c)![1]); } catch (e) { problems.push(`${path}: compact frontmatter does not parse: ${(e as Error).message.slice(0, 80)}`); }
    const p = parsePage(md);
    for (const key of [...p.sections.map((s) => s.key), "frontmatter"]) {
      const n = findSection(p, key)!.rows.length;
      let off = 0, calls = 0, covered = 0;
      for (;;) {
        const a = sectionView(md, path, key, off, undefined, 30_000, S);
        calls++;
        if (a.length > largestAnswer[0]) largestAnswer = [a.length, `${path} ${key} offset ${off}`];
        if (a.length > 30_000) problems.push(`${path} ${key} offset ${off}: ${a.length}`);
        const m = STATUS.exec(a);
        if (!m) { covered += n; break; }
        if (Number(m[1]) !== off + 1 || Number(m[3]) !== n) problems.push(`${path} ${key}: ${m[0].trim()} at offset ${off}`);
        covered += Number(m[2]) - Number(m[1]) + 1;
        if (m[4]) { off = Number(m[4]); continue; }
        if (m[5]) {
          const tail = sectionView(md, path, key, Number(m[5]), undefined, 30_000, S);
          calls++;
          if (tail.length > 30_000) problems.push(`${path} ${key} closing text: ${tail.length}`);
        }
        break;
      }
      if (covered !== n) problems.push(`${path} ${key}: ${covered} of ${n} rows`);
      if (calls > mostCalls[0]) mostCalls = [calls, `${path} ${key}`];
      if (calls > 30) problems.push(`${path} ${key}: ${calls} calls`);
    }
  }
  t.diagnostic(`largest compact view ${largestCompact[0]} (${largestCompact[1]}), largest answer ${largestAnswer[0]} (${largestAnswer[1]}), most calls ${mostCalls[0]} (${mostCalls[1]})`);
  assert.deepEqual(problems.slice(0, 20), []);
});

test("real pages: symbol paths resolve to their rows", (t) => {
  const cu80 = readFileSync(join(CONTENT, "objects/codeunit/80.md"), "utf8");
  const ev = anchorView(cu80, "objects/codeunit/80", "#event-OnAfterPostSalesDoc", S);
  assert.ok(ev?.startsWith('Codeunit 80 "Sales-Post", event OnAfterPostSalesDoc: '), ev ?? "null");
  assert.ok(ev!.length < 5_000);
  const t36 = readFileSync(join(CONTENT, "objects/table/36.md"), "utf8");
  assert.match(anchorView(t36, "objects/table/36", "#field-20", S) ?? "", /\n\| 20 \| Posting Date \|/);
  const manifest = JSON.parse(readFileSync(join(ROOT, "data/index/symbols-manifest.json"), "utf8")) as { major: string; country_rows: Record<string, number>; kinds: Record<string, { file?: string; files?: string[] }> };
  const KIND: Record<string, string> = { fields: "field", events: "event", procs: "proc", values: "value" };
  // a W1 or app row has this many columns; a country row (D95 phase B) has one more, the country code. Its path is the
  // W1 page plus an anchor the W1 page lacks (`objects/table/18#field-11310`), so it resolves through the country diff
  const BASE: Record<string, number> = { fields: 5, events: 6, procs: 6, values: 4 };
  const byPage = new Map<string, string[]>();
  const layered: { pk: string; anchor: string; cc: string }[] = [];
  for (const [k, e] of Object.entries(manifest.kinds)) {
    for (const file of e.files ?? (e.file ? [e.file] : [])) {
      for (const row of (JSON.parse(readFileSync(join(ROOT, "data/index", file), "utf8")) as { rows: unknown[][] }).rows) {
        const pk = String(row[0]), key = k === "fields" || k === "values" ? Number(row[2]) : String(row[1]), anchor = `#${KIND[k]}-${key}`;
        if (row.length > BASE[k]) layered.push({ pk, anchor, cc: String(row[row.length - 1]) });
        else byPage.set(pk, [...(byPage.get(pk) ?? []), anchor]);
      }
    }
  }
  const resolves = (pk: string, a: string) => {
    const file = join(CONTENT, "objects", `${pk}.md`);
    return existsSync(file) && anchorView(readFileSync(file, "utf8"), `objects/${pk}`, a, S) !== null;
  };
  // W1 and app rows resolve to their row on the page
  let total = 0, ok = 0;
  const misses: string[] = [];
  for (const [pk, anchors] of byPage) {
    for (const a of anchors) {
      total++;
      if (resolves(pk, a)) ok++;
      else misses.push(`objects/${pk}${a}`);
    }
  }
  t.diagnostic(`${ok} of ${total} W1 and app symbols resolve; misses: ${misses.slice(0, 5).join(", ")}`);
  assert.ok(total > 100_000);
  assert.ok(ok / total >= 0.995, `${ok} of ${total}`);

  // country rows: the manifest counts them; the W1 page lacks nearly all of them and `cat` answers each from the country
  // diff (`toolCat` -> `layerMember` -> `memberAnswer`). The few that resolve on the page share an event or procedure
  // name with a W1 member (an overload the layer adds): the page row answers those. Every 50th row is checked.
  assert.equal(layered.length, Object.values(manifest.country_rows).reduce((a, b) => a + b, 0), "the manifest's country_rows count the rows with a country column");
  assert.ok(layered.length > 1_000);
  const onPage = layered.filter((r) => resolves(r.pk, r.anchor)).length;
  t.diagnostic(`${layered.length} country rows: ${layered.length - onPage} only the layer has, ${onPage} share a member name with the W1 page`);
  assert.ok(onPage / layered.length < 0.05, `${onPage} of ${layered.length} country rows resolve on the W1 page`);
  const diffs = new Map<string, Map<string, DiffObject>>();
  const replaced = (cc: string) => {
    let m = diffs.get(cc);
    if (!m) {
      const file = join(ROOT, "data/code/diffs/country", `${manifest.major}-${cc}.json`);
      m = new Map((JSON.parse(readFileSync(file, "utf8")) as { objects: DiffObject[] }).objects.filter((o) => o.change === "replaced").map((o) => [o.key, o]));
      diffs.set(cc, m);
    }
    return m;
  };
  const wrong: string[] = [];
  let checked = 0;
  layered.forEach(({ pk, anchor, cc }, i) => {
    if (i % 50) return;
    checked++;
    const want = parseAnchor(anchor), obj = replaced(cc).get(pk);
    const text = want && obj ? memberAnswer(obj, want, cc, { site: S, path: `objects/${pk}` }) : null;
    if (!text?.includes(`added by the ${cc.toUpperCase()} layer`)) wrong.push(`objects/${pk}${anchor} (${cc})`);
  });
  t.diagnostic(`${checked} country rows answered from the diff`);
  assert.ok(checked > 100);
  assert.deepEqual(wrong.slice(0, 10), []);
});
