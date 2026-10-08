/** The AL Language extension changelog parser (D85): sections, waves, entries, issues, the dropped tail. No I/O. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseChangelog, waveMajor } from "../../pipeline/ingest/changelog-md.js";

const ROOT = resolve(import.meta.dirname, "../..");
const md = readFileSync(resolve(ROOT, "tests/fixtures/al-changelog.md"), "utf8");
const majors = JSON.parse(readFileSync(resolve(ROOT, "config/versions.json"), "utf8")).majors as Record<string, { label: string }>;
const parsed = parseChangelog(md, majors);
const section = (v: string) => parsed.sections.find((s) => s.version === v)!;
const entry = (v: string, slug: string) => section(v).entries.find((e) => e.slug === slug)!;

test("changelog: five sections in file order, each with its wave and major (test 1)", () => {
  assert.deepEqual(parsed.sections.map((s) => s.version), ["30.0", "18.0", "12.7", "12.6", "4.0.0"]);
  assert.deepEqual(parsed.sections.map((s) => s.wave), ["2027 release wave 1", "2026 release wave 2", "2023 release wave 2", "2023 release wave 2", "2019 release wave 2 update"]);
  assert.deepEqual(parsed.sections.map((s) => s.major), ["30", "29", "23", "23", null]);
  assert.deepEqual(parsed.waves, ["2027 release wave 1", "2026 release wave 2", "2023 release wave 2", "2019 release wave 2 update", "April ‘19 update (2019/04)"]);
});

test("changelog: waveMajor matches config/versions.json labels without their (BCnn) suffix (test 2)", () => {
  assert.equal(waveMajor("2026 release wave 2", majors), "29");
  assert.equal(waveMajor("2027 release wave 1", majors), "30");
  assert.equal(waveMajor(" 2026 Release Wave 2 ", majors), "29");
  assert.equal(waveMajor("2019 release wave 2 update", majors), null);
  assert.equal(waveMajor("2021 release wave 1 update 3", majors), null);
  assert.equal(waveMajor(null, majors), null);
});

test("changelog: a stray H1 opens a level-3 entry; a fenced '# comment' stays in the body (test 3)", () => {
  const s = section("18.0");
  const i = s.entries.findIndex((e) => e.slug === "on-premises");
  assert.ok(i > 0, "on-premises entry exists");
  assert.equal(s.entries[i].level, 3);
  assert.equal(s.entries[i].title, "On-premises");
  const prev = s.entries[i - 1];
  assert.equal(prev.slug, "performance-profiling-mcp-capture-cpu-profiles-from-a-running-session");
  assert.equal(prev.level, 4);
  assert.match(prev.body_md, /```bash\n# On-premises\naltool launchprofilingmcpproxy/);
  assert.match(prev.body_md, /# Cloud \(sandbox\)/);
});

test("changelog: '## Miscellaneous' and '## GitHub Issues' are level-3 entries, not sections (test 4)", () => {
  assert.equal(parsed.sections.length, 5);
  assert.deepEqual([entry("12.7", "miscellaneous").level, entry("12.6", "github-issues").level], [3, 3]);
  assert.deepEqual(section("12.6").entries.map((e) => e.slug), ["github-issues", "miscellaneous"]);
});

test("changelog: a repeated heading gets -2 (test 5)", () => {
  assert.deepEqual(section("18.0").entries.filter((e) => e.title === "Bug fixes").map((e) => e.slug), ["bug-fixes", "bug-fixes-2"]);
});

test("changelog: text before a section's first heading is the _intro entry (test 6)", () => {
  const intro = section("4.0.0").entries[0];
  assert.deepEqual([intro.slug, intro.level, intro.title], ["_intro", 3, ""]);
  assert.match(intro.body_md, /^Welcome to version 4\.0\.0!/);
  assert.equal(section("12.7").entries[0].slug, "_intro");
  assert.equal(section("12.7").entries[0].issues.length, 2);
  assert.ok(!section("30.0").entries.some((e) => e.slug === "_intro"));
  assert.ok(!section("18.0").entries.some((e) => e.slug === "_intro"));
});

test("changelog: issues are distinct and ascending (test 7)", () => {
  assert.deepEqual(entry("30.0", "github-issues").issues, [8171, 8273, 8280]);
  assert.deepEqual(entry("30.0", "markdown-page-fields").issues, []);
});

test("changelog: dropped_bytes is the UTF-8 length of the tail after the last section (test 8)", () => {
  const tail = md.slice(md.indexOf("# Business Central April ‘19 update"));
  assert.equal(parsed.dropped_bytes, Buffer.byteLength(tail, "utf8"));
  assert.ok(!section("4.0.0").entries.some((e) => /February/.test(e.title) || /February/.test(e.body_md)));
});

test("changelog: a BOM and CRLF line ends parse to the same sections (test 9)", () => {
  const crlf = parseChangelog(`﻿${md.replace(/\n/g, "\r\n")}`, majors);
  assert.deepEqual(crlf.sections, parsed.sections);
});

test("changelog: a heading's trailing ' -->' and ':' are removed; a heading inside an HTML comment is content (test 10)", () => {
  const p = parseChangelog("# Business Central 2026 release wave 2\n## Version 18.0\n#### Miscellaneous -->\n- x\n### Notes:\n- y\n", majors);
  assert.deepEqual(p.sections[0].entries.map((e) => [e.slug, e.level, e.title]), [["miscellaneous", 4, "Miscellaneous"], ["notes", 3, "Notes"]]);
  // the real 18.0 section holds "<!-- ### Runtime changes ... #### Miscellaneous -->": a commented-out draft, not an entry
  const altool = entry("18.0", "altool-changes");
  assert.match(altool.body_md, /<!-- ### Runtime changes[\s\S]*#### Miscellaneous -->$/);
  assert.deepEqual(section("18.0").entries.filter((e) => e.title === "Miscellaneous").map((e) => e.slug), ["miscellaneous"]);
});

test("changelog: body_md is verbatim between headings, trailing blank lines removed", () => {
  const e = entry("18.0", "inherent-permissions-validation-in-multi-root-workspaces");
  assert.equal(e.body_md, "The compiler now reports AL0720 when an `InherentPermissions` attribute in one project references an object from another project in a multi-root workspace.");
  assert.equal(entry("4.0.0", "al-go-version-selection").level, 3);
});
