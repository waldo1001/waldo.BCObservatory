import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../../pipeline/lib/paths.js";
import { validate } from "../../pipeline/lib/schema.js";
import { EXTRACTOR_VERSION, extractSource, loadParser, objectKey, runObjectOf, unquote, type AlObject } from "../../pipeline/code/extract.js";

const fx = (f: string) => readFileSync(join(ROOT, "tests/fixtures/al", f), "utf8");
const ctx = { version: "29", country: "w1", layer: "base" as const, file: "x.al", commit: "abc" };
async function objects(f: string, docs = false): Promise<Map<string, AlObject>> {
  const p = await loadParser();
  return new Map(extractSource(p, fx(f), { ...ctx, file: f, docs }).map((o) => [objectKey(o), o]));
}

test("every object type, ids, names, extends, namespace; every record passes al-object@1", async () => {
  const m = await objects("objects.al");
  assert.deepEqual([...m.keys()], [
    "table/18", "tableextension/11300", "codeunit/80", "enum/18", "page/21", "interface/i x", "pageextension/11300", "report/6", "query/100",
    "permissionset/1", "enumextension/11300", "xmlport/1", "controladdin/foo", "profile/accountant", "reportextension/50", "permissionsetextension/50", "entitlement/e",
  ]);
  for (const o of m.values()) assert.ok(validate("al-object", o).ok, `${objectKey(o)}: ${validate("al-object", o).errors.join("; ")}`);
  const ext = m.get("tableextension/11300")!;
  assert.deepEqual([ext.name, ext.extends, ext.namespace, ext.fields.map((f) => [f.id, f.name, f.type])], ["BE Customer", "Customer", "Fixture.Sales", [[11300, "Enterprise No.", "Text[50]"]]]);
  assert.deepEqual([m.get("page/21")!.properties, m.get("interface/i x")!.id], [{ PageType: "Card", SourceTable: "Customer" }, null]);
});

test("table members: fields with types and obsolete state, keys, procedure scopes, params, returns, events", async () => {
  const t = (await objects("objects.al")).get("table/18")!;
  assert.deepEqual(t.fields.map((f) => [f.id, f.name, f.type, f.obsolete?.state ?? null]), [[1, "No.", "Code[20]", null], [2, "Name", "Text[100]", "Removed"], [3, "Blocked", 'Enum "Customer Blocked"', null]]);
  assert.deepEqual(t.fields[0].properties, { Caption: "No.", DataClassification: "CustomerContent" });
  assert.deepEqual(t.keys, [{ name: "PK", fields: ["No."], clustered: true }, { name: "Key2", fields: ["Name", "No."], clustered: false }]);
  const [get, onAfter, old] = t.procedures;
  assert.deepEqual([get.scope, get.params, get.returns], ["global", [{ name: "Prefix", type: "Text", var: false }, { name: "Cust", type: "Record Customer temporary", var: true }], "Text[50]"]);
  assert.deepEqual([onAfter.scope, onAfter.event, onAfter.attributes], ["local", "integration", [{ name: "IntegrationEvent", args: ["false", "false"] }]]);
  assert.deepEqual([old.scope, old.obsolete], ["internal", { state: "Pending", tag: "26.0", reason: "use Y" }]);
});

test("codeunit: subscriptions, triggers, doc comments only when the license allows; enum values with obsolete", async () => {
  const cu = (await objects("objects.al")).get("codeunit/80")!;
  assert.deepEqual(cu.triggers, ["OnRun"]);
  assert.deepEqual(cu.procedures.find((p) => p.name === "OnCust")!.subscribes_to, { object_type: "Table", object_name: "Customer", event: "OnAfterInsertEvent", element: null });
  assert.equal(cu.procedures.find((p) => p.name === "OnBiz")!.event, "business");
  assert.equal(cu.procedures[0].doc, null, "no docs unless asked");
  assert.equal((await objects("objects.al", true)).get("codeunit/80")!.procedures[0].doc, "Posts it.");
  const en = (await objects("objects.al")).get("enum/18")!;
  assert.deepEqual(en.values.map((v) => [v.id, v.name, v.obsolete?.tag ?? null]), [[0, " ", null], [1, "Ship", "26.0"]]);
});

test("preprocessor: the shipped branch (no symbols) is taken, CLEAN guards are recorded", async () => {
  const t = (await objects("preproc.al")).get("table/1")!;
  assert.deepEqual([t.clean, t.obsolete?.tag], [["CLEAN28"], "28.0"]);
  const b = t.fields.find((f) => f.name === "B")!;
  assert.deepEqual([b.obsolete?.state, b.clean], ["Pending", ["CLEANSCHEMA26"]], "#if not CLEAN26 wins over #else");
  assert.deepEqual(t.procedures.map((p) => [p.name, p.clean ?? null, p.obsolete?.tag ?? null]), [["Old", ["CLEAN27"], "27.0"], ["New", null, null]]);
});

test("a syntax error marks the object; the hash ignores where the object came from", async () => {
  const p = await loadParser();
  const [broken] = extractSource(p, fx("broken.al"), ctx);
  assert.deepEqual([broken.id, broken.parse_error], [50100, true]);
  const a = extractSource(p, fx("objects.al"), { ...ctx, file: "a.al", commit: "1" })[0];
  const b = extractSource(p, fx("objects.al"), { ...ctx, file: "moved/b.al", commit: "2", build: "29.1" })[0];
  assert.equal(a.hash, b.hash);
  assert.notEqual(a.hash, extractSource(p, fx("objects.al").replace("Text[100]", "Text[120]"), ctx)[0].hash);
  const shifted = extractSource(p, fx("objects.al").replace("keys {", "\n\n\nkeys {"), { ...ctx, docs: true })[0];
  assert.equal(shifted.hash, a.hash, "moved lines and doc comments are not declaration changes");
  assert.deepEqual([unquote('"No."'), unquote("'it''s'"), unquote(" Name ")], ["No.", "it's", "Name"]);
});

test("field ToolTips: both spellings BCApps uses (ToolTip, Tooltip) land in `tooltip` (D65)", async () => {
  const p = await loadParser();
  const src = `table 8057 "Subscription Header"\n{\n    fields\n    {\n        field(1; "No."; Code[20]) { ToolTip = 'Specifies the number.'; }\n        field(2; Description; Text[100]) { Tooltip = 'Specifies a description.'; }\n        field(3; Plain; Integer) { Caption = 'Plain'; }\n    }\n}\n`;
  const [t] = extractSource(p, src, ctx);
  assert.deepEqual(t.fields.map((f) => f.tooltip), ["Specifies the number.", "Specifies a description.", null]);
});

test("page controls: fields with their binding, ToolTip and Caption, grouped by container, CLEAN marks kept (D65)", async () => {
  assert.equal(EXTRACTOR_VERSION, "4");
  const m = await objects("pages.al");
  assert.deepEqual([...m.keys()], ["page/8060", "page/8059", "pageextension/8061"]);
  for (const o of m.values()) {
    assert.equal(o.parse_error, false, objectKey(o));
    assert.ok(validate("al-object", o).ok, `${objectKey(o)}: ${validate("al-object", o).errors.join("; ")}`);
  }
  const card = m.get("page/8060")!;
  assert.deepEqual(card.controls!.map((c) => [c.kind, c.name, c.source_expr, c.group]), [
    ["field", "No.", 'Rec."No."', "General"],
    ["field", "Description", "Description", "General"],
    ["field", "Item No.", 'Rec."Item No."', "General"],
    ["field", "TotalAmount", "Rec.Amount + Rec.Fee", "General"],
    ["label", "HintLabel", null, "Hints"],
    ["part", "Lines", "Service Commitments", "Content"],
    ["usercontrol", "Chart", "Business Chart", "FactBoxes"],
  ], "source order; systemparts left out; the area spelled as documented");
  const [no, desc, item, total] = card.controls!;
  assert.deepEqual([no.tooltip, no.caption, no.properties], ["Specifies the number of the subscription.", null, {}], "the trigger is not a property");
  assert.deepEqual([desc.tooltip, desc.caption], ["Specifies a description of the subscription.", "Subscription Description"], "Tooltip spelling, Caption lifted out");
  assert.deepEqual([item.obsolete?.tag, item.clean], ["27.0", ["CLEAN27"]]);
  assert.deepEqual([total.caption, total.tooltip, total.properties], ["Total", null, { Editable: "false" }]);
  const list = m.get("page/8059")!;
  assert.deepEqual(list.controls!.map((c) => [c.name, c.source_expr, c.group]), [["No.", 'Rec."No."', "Group"], ["Status", "Format(Rec.Status)", "Group"], ["Open", "OpenCount", "Activities"]]);
});

test("page actions: RunObject parsed, groups and areas, actionrefs and separators left out, cuegroup actions kept (D65)", async () => {
  const m = await objects("pages.al");
  const card = m.get("page/8060")!;
  assert.deepEqual(card.actions!.map((a) => [a.kind, a.name, a.group, a.run_object]), [
    ["action", "CreateInvoice", "Processing", { type: "report", name: null, id: 8012 }],
    ["action", "OpenList", "&Navigate", { type: "page", name: "Service Objects", id: null }],
    ["action", "OldPost", "&Navigate", { type: "codeunit", name: "Sales-Post", id: null }],
  ]);
  const [post, open, old] = card.actions!;
  assert.deepEqual([post.caption, post.tooltip, post.properties], ["Create Invoice", "Creates the invoice for the subscription.", { Image: "Invoice", RunObject: "Report 8012" }]);
  assert.equal(open.properties.RunPageLink, '"No." = field("No.")');
  assert.deepEqual([old.obsolete?.state, old.clean], ["Pending", ["CLEAN28"]]);
  assert.deepEqual(m.get("page/8059")!.actions!.map((a) => [a.name, a.group, a.run_object?.name]), [["NewSubscription", "Activities", "Service Object"]]);
  assert.deepEqual([runObjectOf(null), runObjectOf("Page 21"), runObjectOf('Report "Customer - Order Detai...')], [null, { type: "page", name: null, id: 21 }, { type: "report", name: null, id: null }]);
});

test("page extension: controls and actions under their anchor, modify() recorded as kind modify (D65)", async () => {
  const ext = (await objects("pages.al")).get("pageextension/8061")!;
  assert.deepEqual(ext.controls!.map((c) => [c.kind, c.name, c.group, c.tooltip]), [
    ["field", "Subscription No.", "addafter(Name)", "Specifies the subscription of the customer."],
    ["field", "Open Subscriptions", "Subscriptions", null],
    ["modify", "No.", "modify(No.)", "Specifies the customer number, also used on subscriptions."],
  ]);
  assert.deepEqual(ext.controls![0].properties, { ApplicationArea: "All" });
  assert.deepEqual(ext.actions!.map((a) => [a.kind, a.name, a.group, a.properties]), [
    ["action", "ShowSubscriptions", "addfirst(Processing)", { RunObject: 'Page "Service Objects"' }],
    ["modify", "Post", "modify(Post)", { Visible: "false" }],
  ]);
});

test("controls and actions stay out of the hash and off other object types; fixture parse errors unchanged (D65)", async () => {
  const p = await loadParser();
  const src = fx("pages.al");
  const [card] = extractSource(p, src, ctx);
  const [relaid] = extractSource(p, src.replace("Specifies the number of the subscription.", "Specifies another number.").replace("RunObject = Report 8012;", ""), ctx);
  assert.notDeepEqual(relaid.controls, card.controls);
  assert.equal(relaid.hash, card.hash, "a layout-only change does not change the object hash");
  assert.notEqual(extractSource(p, src.replace("PageType = Card;", "PageType = Document;"), ctx)[0].hash, card.hash, "page properties still count");
  const all = [...(await objects("objects.al")).values()];
  for (const o of all) assert.equal("controls" in o || "actions" in o, o.type === "page" || o.type === "pageextension", objectKey(o));
  assert.deepEqual(all.find((o) => o.type === "pageextension")!.controls, [], "an empty extension has empty lists, not missing ones");
  const errors = (f: string) => extractSource(p, fx(f), ctx).filter((o) => o.parse_error).length;
  assert.deepEqual(["objects.al", "preproc.al", "broken.al", "pages.al"].map(errors), [0, 0, 1, 0]);
});
