import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { FAIL_MB, MB, WARN_MB, measure, summaryMarkdown, tarEntryBytes, verdict } from "../../scripts/site-size.js";
import { validate } from "../../pipeline/lib/schema.js";

function tree(files: Record<string, number>): string {
  const root = mkdtempSync(join(tmpdir(), "site-size-"));
  for (const [rel, size] of Object.entries(files)) {
    const p = join(root, rel);
    mkdirSync(join(p, ".."), { recursive: true });
    writeFileSync(p, Buffer.alloc(size, 120));
  }
  return root;
}

test("tar entry: one 512-byte header plus whole data blocks (the spec's 0, 1 and 513 bytes: 4,096 with end-of-archive)", () => {
  assert.equal(tarEntryBytes("./a", 0), 512);
  assert.equal(tarEntryBytes("./b", 1), 1024);
  assert.equal(tarEntryBytes("./c", 513), 1536);
  assert.equal(tarEntryBytes("./a", 0) + tarEntryBytes("./b", 1) + tarEntryBytes("./c", 513) + 1024, 4096);
});

test("tar entry: a path over 100 bytes adds a GNU long-name header of 1,024 bytes", () => {
  const long = "./" + "n".repeat(118);
  assert.equal(long.length, 120);
  assert.equal(tarEntryBytes(long, 1) - tarEntryBytes("./short", 1), 1024);
  assert.equal(tarEntryBytes("./" + "n".repeat(98), 1), 1024, "exactly 100 bytes still fits the name field");
  assert.equal(tarEntryBytes("./" + "n".repeat(600), 0) - 512, 512 + 1024, "a name over 511 bytes takes two blocks");
});

test("measure: apparent bytes, files, and tar bytes with directory entries, end-of-archive and the 10 KB record", () => {
  const root = tree({ a: 0, b: 1, "d/c": 513 });
  const r = measure(root);
  assert.equal(r.apparent_bytes, 514);
  assert.equal(r.files, 3);
  assert.equal(r.dirs, 2, "./ and ./d/");
  // files 3,072 + two directory headers 1,024 + end-of-archive 1,024 = 5,120, padded to one 10,240-byte record
  assert.equal(r.tar_bytes, 10240);
});

test("measure: sections by first path segment, sorted by bytes, ten at most; extensions grouped", () => {
  const files: Record<string, number> = { "objects/table/18/index.html": 5000, "objects/table/18.md": 700, "code/x.json": 3000, "index.html": 10 };
  for (let i = 0; i < 12; i++) files[`s${i}/index.html`] = 100 + i;
  const r = measure(tree(files));
  assert.equal(r.sections.length, 10);
  assert.deepEqual(r.sections.slice(0, 3).map((s) => [s.name, s.bytes, s.files]), [["objects", 5700, 2], ["code", 3000, 1], ["s11", 111, 1]]);
  assert.ok(r.sections.every((s, i, a) => i === 0 || a[i - 1].bytes >= s.bytes));
  assert.equal(r.section_count, 15, "objects, code, (root) and s0..s11");
  assert.deepEqual(r.exts[".md"], { bytes: 700, files: 1 });
  assert.equal(r.exts[".html"].files, 14);
  assert.equal(r.exts[".json"].bytes, 3000);
});

test("verdict: 799 MB passes quietly, 800 MB warns, 900 MB fails", () => {
  assert.equal(WARN_MB, 800);
  assert.equal(FAIL_MB, 900);
  assert.deepEqual(verdict(799 * MB), { level: "ok", exit: 0, annotation: null });
  const w = verdict(800 * MB);
  assert.equal(w.level, "warn"); assert.equal(w.exit, 0);
  assert.equal(w.annotation, "::warning::site is 800 MB of 900 MB (tar bytes; Pages limit 1 GB)");
  const f = verdict(900 * MB);
  assert.equal(f.level, "fail"); assert.equal(f.exit, 1);
  assert.match(f.annotation ?? "", /^::error::site is 900 MB/);
  assert.equal(verdict(900 * MB - 1).exit, 0);
});

test("summary: a markdown table with tar, apparent, files, headroom and the largest sections", () => {
  const r = measure(tree({ "objects/a.html": 2000, "code/b.json": 1000 }));
  const md = summaryMarkdown(r);
  assert.match(md, /\| tar bytes \| [\d.]+ MB \|/);
  assert.match(md, /\| headroom to 900 MB \| [\d.]+ MB \|/);
  assert.match(md, /\| objects \| [\d.]+ \| 1 \|/);
  assert.ok(md.indexOf("| objects |") < md.indexOf("| code |"));
});

test("json: validates against schemas/site-size.json", () => {
  const r = measure(tree({ "objects/a.html": 2000, "code/b.json": 1000, "x.md": 5 }));
  const v = validate("site-size", JSON.parse(JSON.stringify(r)));
  assert.ok(v.ok, v.errors.join("\n"));
  assert.ok(!validate("site-size", { ...r, tar_bytes: "1" }).ok);
  assert.ok(readFileSync(new URL("../../schemas/site-size.json", import.meta.url), "utf8").includes("tar_bytes"));
});
