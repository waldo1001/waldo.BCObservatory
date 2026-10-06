import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../../pipeline/lib/paths.js";
import { validate } from "../../pipeline/lib/schema.js";
import { extractSource, loadParser, objectKey, unquote, type AlObject } from "../../pipeline/code/extract.js";

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
  assert.deepEqual([unquote('"No."'), unquote("'it''s'"), unquote(" Name ")], ["No.", "it's", "Name"]);
});
