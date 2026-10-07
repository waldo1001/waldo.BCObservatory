import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ROOT } from "../../pipeline/lib/paths.js";
import { validate } from "../../pipeline/lib/schema.js";
import { extractSource, loadParser, type AlObject } from "../../pipeline/code/extract.js";
import { buildRelations } from "../../pipeline/code/relations.js";
import { boundField, buildFieldDocs, fieldDocsPath, loadFieldDocs } from "../../pipeline/code/field-docs.js";
import { writeSnapshot } from "../../pipeline/code/job.js";
import { refreshCodeDerived } from "../../pipeline/code/diff.js";
import { renderObjectsIndex } from "../../pipeline/render/objects-index.js";

const ctx = { version: "30", country: "w1", layer: "base" as const, file: "x.al", commit: "abc" };
// the tables behind tests/fixtures/al/pages.al: Subscription Header (pages 8059, 8060), Customer and its Customer Card
// (extended by pageextension 8061), and a tableextension that brings the field the page extension binds
const TABLES = `table 8057 "Subscription Header"
{
    fields
    {
        field(1; "No."; Code[20]) { }
        field(2; Description; Text[100]) { }
        field(3; "Item No."; Code[20]) { }
        field(4; Amount; Decimal) { }
        field(5; Fee; Decimal) { }
        field(6; Status; Enum "Subscription Status") { }
    }
}
table 18 Customer { fields { field(1; "No."; Code[20]) { } field(2; Name; Text[100]) { } } }
tableextension 8062 "Sub. Customer" extends Customer { fields { field(8000; "Subscription No."; Code[20]) { } field(8001; "Open Subscriptions"; Integer) { } } }
page 21 "Customer Card" { PageType = Card; SourceTable = Customer; layout { area(Content) { field(Name; Rec.Name) { ToolTip = 'Specifies the name.'; } } } }
page 22 "Customer List" { PageType = List; SourceTable = Customer; layout { area(Content) { repeater(R) { field(Name; Rec.Name) { ToolTip = 'Specifies the customer name in the list.'; } } } } }
page 9 "Customer Lookup" { PageType = Worksheet; SourceTable = Customer; layout { area(Content) { field("No."; Rec."No.") { ToolTip = 'Specifies the number on a worksheet.'; } field(Ghost; Rec.Ghost) { ToolTip = 'No such field.'; } } } }
`;

async function fixture(): Promise<AlObject[]> {
  const p = await loadParser();
  const pages = readFileSync(join(ROOT, "tests/fixtures/al/pages.al"), "utf8");
  return [...extractSource(p, TABLES, ctx), ...extractSource(p, pages, { ...ctx, file: "pages.al" })];
}

test("boundField: Rec.\"Field\", Rec.Field, \"Field\" and Field bind; expressions, calls and other records do not (D65)", () => {
  assert.deepEqual(['Rec."No."', "Rec.Description", '"Item No."', "Description", "rec.Amount", 'REC."No."'].map(boundField), ["No.", "Description", "Item No.", "Description", "Amount", "No."]);
  assert.deepEqual(["Rec.Amount + Rec.Fee", "Format(Rec.Status)", 'Rec."No." + Rec.Fee', "CurrPage.Lines", 'Rec."No.".Value', "Rec.GetName()", "SalesLine.Amount", "", null, "1"].map(boundField), [null, null, null, null, null, null, null, null, null, null]);
});

test("field docs: one ToolTip per table field, Card before List before others, lowest id on a tie, provenance kept (D65)", async () => {
  const objs = await fixture();
  const rel = buildRelations("30", [{ w1: true, objects: () => objs }]);
  const fd = buildFieldDocs("30", [{ objects: () => objs }], rel);
  assert.ok(validate("field-docs", fd).ok, validate("field-docs", fd).errors.join("; "));
  assert.equal(fd.schema, "bcobs-field-docs@1");
  const sh = fd.tables["table/8057"];
  // page 8059 (List, lower id) and 8060 (Card) both explain "No.": the Card wins
  assert.deepEqual(sh["No."], { tooltip: "Specifies the number of the subscription.", page: "page/8060", control: "No." });
  assert.deepEqual(sh["Description"], { tooltip: "Specifies a description of the subscription.", page: "page/8060", control: "Description" }, "a bare field name binds; Tooltip spelling counts");
  assert.equal(sh["Item No."]?.page, "page/8060", "an obsolete control still explains when it is the only one");
  assert.deepEqual(Object.keys(sh).sort(), ["Description", "Item No.", "No."], "expressions (Rec.Amount + Rec.Fee) and controls without a ToolTip explain nothing");
  const cu = fd.tables["table/18"];
  assert.deepEqual(cu["Name"], { tooltip: "Specifies the name.", page: "page/21", control: "Name" }, "Card before List");
  assert.equal(cu["No."].page, "page/9", "a Worksheet is an other page, used when nothing else explains the field");
  // a page extension explains the fields a tableextension adds to the base page's table
  assert.deepEqual(cu["Subscription No."], { tooltip: "Specifies the subscription of the customer.", page: "pageextension/8061", control: "Subscription No." });
  assert.equal(cu["Ghost"], undefined, "a binding to no field of the table is dropped");
  assert.deepEqual(fd.stats, { tooltips: 9, bound: 8, unparsed: 0, unmatched: 1, tables: 2, fields: 6 });
});

test("field docs are derived per major next to the relations and re-derived only when their inputs change (D65)", async () => {
  const dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-fielddocs-")), "data");
  writeSnapshot(dataDir, await fixture(), { major: "30", country: "w1", layer: "base", source: "bcapps", repo: "https://github.com/microsoft/BCApps", branch: "main", commit: "c30", build: null, apps: ["Base Application"], files: 2, parse_errors: 0 });
  const r = refreshCodeDerived(dataDir, ["30"]);
  assert.equal(r.field_docs, 1);
  const fd = loadFieldDocs(dataDir, "30")!;
  assert.equal(fd.tables["table/8057"]["No."].page, "page/8060");
  assert.ok(fieldDocsPath(dataDir, "30").endsWith(join("code", "field-docs", "30.json")));
  const before = readFileSync(fieldDocsPath(dataDir, "30"), "utf8");
  refreshCodeDerived(dataDir, ["30"]);
  assert.equal(readFileSync(fieldDocsPath(dataDir, "30"), "utf8"), before);
  assert.equal(loadFieldDocs(dataDir, "29"), null);
  // the preferred major's copy for agents, next to fields.json
  assert.equal(renderObjectsIndex(join(dataDir, "..", "content"), dataDir).field_docs, 6);
  const idx = JSON.parse(readFileSync(join(dataDir, "index", "field-docs.json"), "utf8"));
  assert.deepEqual([idx.schema, idx.major, "inputs" in idx, idx.tables["table/8057"]["No."].page], ["bcobs-field-docs@1", "30", false, "page/8060"]);
  assert.ok(validate("field-docs", idx).ok);
});
