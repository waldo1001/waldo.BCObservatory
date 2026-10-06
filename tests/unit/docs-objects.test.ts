import { test } from "node:test";
import assert from "node:assert/strict";
import { docsObjects, drift, formKey } from "../../pipeline/code/docs-objects.js";

test("ms.search.form ids map to object keys; UI entry points do not", () => {
  assert.deepEqual([
    formKey({ raw: "118", id: 118, kind: null }), formKey({ raw: "118_Primary", id: 118, kind: "Primary" }),
    formKey({ raw: "Report_6627_Primary", id: 6627, kind: "Report Primary" }), formKey({ raw: "Query_1_Primary", id: 1, kind: "Query Primary" }),
    formKey({ raw: "TellMe", id: null, kind: "TellMe" }),
  ], ["page/118", "page/118", "report/6627", "query/1", null]);
});

test("exact-id join, drift: missing, obsolete documented, new pages without docs", () => {
  const known = new Map([
    ["page/21", { name: "Customer Card", versions: new Set(["29"]), countries: new Set(["w1"]), obsolete: null }],
    ["page/431", { name: "Reminder Terms", versions: new Set(["29"]), countries: new Set(["w1"]), obsolete: { state: "Pending" as const, tag: "29.0", reason: null } }],
  ]);
  const item = (id: string, forms: unknown[]) => ({ id, url: `https://learn/${id}`, title: id, meta: { search_form: forms } } as any);
  const { index, refs } = docsObjects([item("a", [{ raw: "21", id: 21, kind: null }, { raw: "431", id: 431, kind: null }]), item("b", [{ raw: "9999", id: 9999, kind: null }])], known, ["29"], { "29": "c" });
  assert.deepEqual([index.docs, index.links, index.by_doc.a.map((o) => [o.key, o.name])], [2, 3, [["page/21", "Customer Card"], ["page/431", "Reminder Terms"]]]);
  const diff = { objects: [{ key: "page/700", name: "New Page", change: "added" }, { key: "page/21", name: "x", change: "added" }], to: { version: "29" } } as any;
  const d = drift(refs, known, ["29"], [diff]);
  assert.deepEqual([d.missing.map((m) => m.key), d.obsolete_documented.map((m) => m.key), d.new_undocumented.map((m) => m.key)], [["page/9999"], ["page/431"], ["page/700"]]);
});
