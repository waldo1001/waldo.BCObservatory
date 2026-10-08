import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { extractSource, loadParser } from "../../pipeline/code/extract.js";
import { writeSnapshot } from "../../pipeline/code/job.js";
import { refreshCodeDerived } from "../../pipeline/code/diff.js";
import { sha256 } from "../../pipeline/lib/text.js";
import { renderCodePages } from "../../pipeline/render/object.js";
import { objectPagesByKey, renderObjectsIndex } from "../../pipeline/render/objects-index.js";
import { cutText, renderSymbolsIndex } from "../../pipeline/render/symbols-index.js";

const LONG = "Specifies the date when the posting of the sales document will be recorded, which is a long tooltip that goes on and on past the cut of one hundred and sixty characters.";
const SRC = `table 18 Customer { fields { field(1; "No."; Code[20]) { } field(5; "Posting Date"; Date) { ToolTip = '${LONG}'; } }
  /// <summary>Raised after X.</summary>
  [IntegrationEvent(false, false)] local procedure OnAfterX() begin end;
  [BusinessEvent(false)] procedure OnBizY() begin end;
  procedure GetName(Full: Boolean; Extra: Integer): Text begin end;
  local procedure Hidden() begin end;
  [Obsolete('gone', '25.0')] procedure OldOne() begin end; }
table 36 "Sales Header" { fields { field(20; "Posting Date"; Date) { } } }
enum 36 "Sales Document Type" { value(0; Quote) { Caption = 'Quote'; } value(1; "Order") { Caption = 'Sales Order'; } }
codeunit 80 "Sales-Post" { [EventSubscriber(ObjectType::Table, Database::Customer, 'OnAfterX', '', false, false)] local procedure OnX() begin end; procedure CopyToTempLines(H: Integer; var L: Integer) begin end; }
`;
const BE = `table 11300 "VAT VIES Correction" { fields { field(1; "Entry No."; Integer) { } } }\n`;

async function fixture() {
  const root = mkdtempSync(join(tmpdir(), "bcobs-sym-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const parser = await loadParser();
  const man = (cc: string) => ({ major: "29", country: cc, layer: (cc === "w1" ? "base" : "overlay") as "base" | "overlay", source: "bcapps", repo: "r", branch: "b", commit: `c-${cc}`, build: null, apps: ["Base Application"], files: 1, parse_errors: 0, ...(cc === "w1" ? {} : { absent: [] }) });
  writeSnapshot(dataDir, extractSource(parser, SRC, { version: "29", country: "w1", layer: "base", app: "Base Application", file: "x.al", docs: true }), man("w1"));
  writeSnapshot(dataDir, extractSource(parser, BE, { version: "29", country: "be", layer: "overlay", app: "Base Application", file: "be.al" }), man("be"));
  refreshCodeDerived(dataDir, ["29"]);
  renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  const pages = objectPagesByKey(contentDir);
  renderObjectsIndex(contentDir, dataDir, pages);
  return { dataDir, contentDir, pages };
}
const read = (dataDir: string, f: string) => JSON.parse(readFileSync(join(dataDir, "index", f), "utf8"));

test("symbols index: one file per kind of tuple rows, sorted, W1 and apps only, tooltips cut, a manifest (D86 4.4, test 5)", async () => {
  const { dataDir, contentDir, pages } = await fixture();
  assert.ok([...pages.pageOfKey.values()].every((pk) => !pk.endsWith("-be")), "country pages are not in the key map");
  const m = renderSymbolsIndex(contentDir, dataDir, pages, new Date("2026-10-08T00:00:00Z"));
  assert.equal(m.schema, "bcobs-symbols@1");
  assert.equal(m.major, "29");
  assert.equal(m.commit, "c-w1");
  assert.equal(m.objects, 4, "table 18, table 36, enum 36, codeunit 80: the BE layer stays out");
  const rows = (k: "fields" | "events" | "procs" | "values") => read(dataDir, m.kinds[k].file!).rows;
  assert.deepEqual(rows("fields"), [["table/18", "No.", 1, "Code[20]", null], ["table/18", "Posting Date", 5, "Date", cutText(LONG)], ["table/36", "Posting Date", 20, "Date", null]]);
  assert.equal(cutText(LONG)!.length, 160);
  assert.ok(cutText(LONG)!.endsWith("…"));
  assert.deepEqual(rows("events"), [["table/18", "OnAfterX", "integration", 1, "Raised after X.", null], ["table/18", "OnBizY", "business", 0, null, null]], "subscribers from events.json");
  assert.deepEqual(rows("procs"), [["codeunit/80", "CopyToTempLines", 2, null, null, null], ["table/18", "GetName", 2, "Text", null, null], ["table/18", "OldOne", 0, null, null, "Pending"]], "global procedures only, not local, not events");
  assert.deepEqual(rows("values"), [["enum/36", "Quote", 0, "Quote"], ["enum/36", "Order", 1, "Sales Order"]]);
  for (const k of ["fields", "events", "procs", "values"] as const) {
    const e = m.kinds[k], text = readFileSync(join(dataDir, "index", e.file!), "utf8");
    assert.match(e.file!, new RegExp(`^symbols-${k}-[0-9a-f]{12}\\.json$`));
    assert.equal(e.sha256, sha256(text));
    assert.equal(e.file!.slice(-17, -5), e.sha256.slice(0, 12));
    assert.equal(e.bytes, Buffer.byteLength(text));
    assert.equal(e.count, read(dataDir, e.file!).count);
    assert.equal(read(dataDir, e.file!).kind, k);
  }
  assert.deepEqual(read(dataDir, "symbols-manifest.json"), JSON.parse(JSON.stringify(m)));
});

test("symbols index: unchanged input rewrites nothing, a stale file is swept", async () => {
  const { dataDir, contentDir, pages } = await fixture();
  renderSymbolsIndex(contentDir, dataDir, pages, new Date("2026-10-08T00:00:00Z"));
  const dir = join(dataDir, "index");
  writeFileSync(join(dir, "symbols-fields-000000000000.json"), "{}\n");
  writeFileSync(join(dir, "symbols-procs-2-000000000000.json"), "{}\n");
  renderSymbolsIndex(contentDir, dataDir, pages, new Date("2026-10-09T00:00:00Z"));
  const names = readdirSync(dir).filter((f) => f.startsWith("symbols-")).sort();
  assert.equal(names.length, 5, "four kinds and the manifest; the stale ones are gone");
  assert.equal(read(dataDir, "symbols-manifest.json").built_at, "2026-10-08T00:00:00.000Z", "built_at moves only with the content");
  const before = names.map((f) => statSync(join(dir, f)).mtimeMs);
  renderSymbolsIndex(contentDir, dataDir, pages, new Date("2026-10-10T00:00:00Z"));
  assert.deepEqual(names.map((f) => statSync(join(dir, f)).mtimeMs), before, "a quiet night rewrites nothing");
});
