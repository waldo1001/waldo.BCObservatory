/** D61: the path → object index of a major and the exact path join of a pull request's files. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { filesIndexPath, joinFiles, loadFileIndex, refreshFileIndex } from "../../pipeline/code/files-index.js";
import { snapshotFixture } from "../helpers/change-fixture.js";

test("files.json: W1, apps and countries; a country copy keeps the W1 page, a country's own object its own", async () => {
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-join-"));
  await snapshotFixture(dataDir);
  assert.equal(refreshFileIndex(dataDir, "30"), true);
  assert.equal(refreshFileIndex(dataDir, "30"), false, "unchanged snapshots: not rewritten");
  const idx = loadFileIndex(dataDir, "30")!;
  assert.deepEqual(Object.keys(idx.files).length, 5);
  assert.deepEqual(idx.files["src/Layers/W1/BaseApp/Foundation/PaymentTerms/PaymentTerms.Table.al"], { key: "table/3", type: "table", id: 3, name: "Payment Terms", app: "Base Application", namespace: "Microsoft.Foundation.PaymentTerms", cc: "w1", page: "table/3" });
  assert.equal(idx.files["src/Layers/BE/BaseApp/Foundation/PaymentTerms/PaymentTerms.Table.al"].page, "table/3", "BE's copy: the W1 page");
  assert.equal(idx.files["src/Layers/BE/BaseApp/Local/BEOnly.Table.al"].page, "table/11300-be", "BE's own object");
  assert.equal(idx.files["src/Apps/W1/EDocument/app/src/EDocument.Table.al"].app, "E-Document Core");
  // one entry per line, still one JSON document
  assert.ok(readFileSync(filesIndexPath(dataDir, "30"), "utf8").split("\n").length > 5);
});

test("joinFiles: modified, added, renamed, removed; systems from namespaces; lazy build", async () => {
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-join-"));
  await snapshotFixture(dataDir);
  rmSync(filesIndexPath(dataDir, "30"), { force: true });
  const idx = loadFileIndex(dataDir, "30");
  assert.ok(existsSync(filesIndexPath(dataDir, "30")), "built when missing");
  const j = joinFiles([
    { path: "src/Layers/W1/BaseApp/Foundation/PaymentTerms/PaymentTerms.Table.al", status: "modified" },
    { path: "src/Layers/W1/BaseApp/Sales/Posting/SalesPost.Codeunit.al", status: "renamed", previous_filename: "src/Layers/W1/BaseApp/Sales/SalesPost.Codeunit.al" },
    { path: "src/Apps/W1/EDocument/App/src/EDocument.Table.al", status: "added" },
    { path: "src/Layers/W1/BaseApp/Old.Codeunit.al", status: "removed" },
    { path: "src/Layers/W1/BaseApp/New.Codeunit.al", status: "added" },
  ], idx);
  assert.deepEqual(j.objects.map((o) => [o.page, o.status]), [["table/3", "modified"], ["codeunit/80", "renamed"], ["table/6100", "added"]]);
  assert.equal(j.objects[1].previous_filename, "src/Layers/W1/BaseApp/Sales/SalesPost.Codeunit.al");
  assert.deepEqual(j.unjoined.map((u) => [u.path.split("/").pop(), u.reason]), [["Old.Codeunit.al", "removed"], ["New.Codeunit.al", "not-in-snapshot"]]);
  assert.deepEqual(j.systems, ["integration", "platform", "sales"], "one object each: by name");
  assert.deepEqual(joinFiles([{ path: "x.al", status: "added" }], null).unjoined[0].reason, "not-in-snapshot", "no snapshot: nothing joins");
});
