import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { checkOverrideTargets, loadOverrideLinks, pagePathOf } from "../../pipeline/link/overrides.js";
import { learnUrlsOf } from "../../pipeline/link/crosslinks.js";

const ROOT = resolve(import.meta.dirname, "../..");

test("overrides: pagePathOf maps ids to their content file, keeping no anchor", () => {
  assert.equal(pagePathOf("object/codeunit/1886"), "objects/codeunit/1886.md");
  assert.equal(pagePathOf("change/bcapps/10207"), "changes/bcapps/10207.md");
  assert.equal(pagePathOf("video/kOCiyVql0go"), "videos/kOCiyVql0go.md");
  assert.equal(pagePathOf("post/waldo-be/318707"), "posts/waldo-be/318707.md");
  assert.equal(pagePathOf("hotfix/28.6#648146"), "hotfixes/28.6.md");
});

test("overrides: the file validates and a row that names no page or no known Learn URL is an error", () => {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-ovr-"));
  mkdirSync(join(dir, "overrides"));
  writeFileSync(join(dir, "overrides", "links.yaml"), [
    "links:",
    "  - from: object/codeunit/1",
    "    to: https://learn.microsoft.com/x",
    "    label: documents",
    "    why: because",
    "    evidence: { by: waldo, at: \"2026-10-23\" }",
    "  - from: object/codeunit/2",
    "    to: https://learn.microsoft.com/unknown",
    "    label: documents",
    "    why: because",
    "    evidence: { by: waldo, at: \"2026-10-23\" }",
  ].join("\n"));
  const links = loadOverrideLinks(dir);
  assert.equal(links.length, 2);
  const errors = checkOverrideTargets(links, (id) => id === "object/codeunit/1", new Set(["https://learn.microsoft.com/x"]));
  assert.deepEqual(errors, ["overrides/links.yaml: object/codeunit/2 has no page", "overrides/links.yaml: https://learn.microsoft.com/unknown is no known Learn page"]);
  writeFileSync(join(dir, "overrides", "links.yaml"), "links:\n  - from: object/codeunit/1\n    to: x\n    label: maybe\n    why: w\n    evidence: { by: waldo, at: \"2026-10-23\" }\n");
  assert.throws(() => loadOverrideLinks(dir), /overrides-links/);
});

test("overrides: a missing file is no links", () => {
  assert.deepEqual(loadOverrideLinks(mkdtempSync(join(tmpdir(), "bcobs-ovr-"))), []);
});

test("overrides: every seed in data/overrides/links.yaml names a committed page or a known Learn page", () => {
  const links = loadOverrideLinks(resolve(ROOT, "data"));
  assert.ok(links.length >= 10, "the spec's seeds are there");
  const pageExists = (id: string) => existsSync(resolve(ROOT, "content", pagePathOf(id)));
  assert.deepEqual(checkOverrideTargets(links, pageExists, learnUrlsOf(resolve(ROOT, "data"))), []);
  const from = (id: string) => links.filter((l) => l.from === id).map((l) => l.to);
  assert.ok(from("object/codeunit/1886").some((u) => u.endsWith("/tenant-admin-center-environments-copy")));
  assert.ok(from("video/kOCiyVql0go").some((u) => u.endsWith("/admin-set-up-fabric-mirroring")));
  for (const p of ["object/permissionset/48530", "object/permissionset/48531", "object/permissionset/48532", "post/waldo-be/318707"]) assert.ok(from("video/kOCiyVql0go").includes(p), p);
});
