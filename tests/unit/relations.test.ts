import { test } from "node:test";
import assert from "node:assert/strict";
import { extractSource, loadParser, type AlObject } from "../../pipeline/code/extract.js";
import { buildRelations, calcTarget, incoming, refName, relationTargets } from "../../pipeline/code/relations.js";

test("refName and relationTargets read AL references the way the compiler does", () => {
  assert.equal(refName("Customer"), "Customer");
  assert.equal(refName('"Post Code".City where("Country/Region Code" = field("Country/Region Code"))'), "Post Code");
  assert.equal(refName('Bin.Code where("Location Code" = field(Code))'), "Bin");
  assert.equal(refName('"Dimension Value".Code where("Global Dimension No." = const(1))'), "Dimension Value");
  const r = relationTargets(`if ("Country/Region Code" = const('')) "Post Code".City else if ("Country/Region Code" = filter(<> '')) "Post Code".City where("Country/Region Code" = field("Country/Region Code"))`);
  assert.deepEqual(r, { names: ["Post Code"], cond: true, clipped: false });
  const two = relationTargets('if (Type = const(Item)) Item else if (Type = const(Resource)) Resource');
  assert.deepEqual(two.names, ["Item", "Resource"]);
  assert.equal(relationTargets('"Cust. Ledger Entry" where("Customer No." = field("Cust...').clipped, true);
  assert.equal(calcTarget('sum("Detailed Cust. Ledg. Entry".Amount where("Customer No." = field("Customer Filter")))').name, "Detailed Cust. Ledg. Entry");
  assert.equal(calcTarget('exist("Cust. Ledger Entry" where("Customer No." = field("Customer Filter")))').name, "Cust. Ledger Entry");
  assert.equal(calcTarget("- sum(\"Value Entry\".\"Cost Amount (Actual)\" where(x = const(1)))").name, "Value Entry");
  assert.equal(refName('Microsoft.Foundation.Company."Company-Initialize"'), "Company-Initialize");
  assert.equal(refName("System.Globalization.Language"), "Language");
});

async function objs(src: string, app: string): Promise<AlObject[]> {
  return extractSource(await loadParser(), src, { version: "29", country: "w1", layer: "base", app, file: `${app}.al` });
}
const BASE = `table 18 Customer
{
    fields
    {
        field(1; "No."; Code[20]) { }
        field(5; "Country/Region Code"; Code[10]) { TableRelation = "Country/Region"; }
        field(7; City; Text[30]) { TableRelation = if ("Country/Region Code" = const('')) "Post Code".City else if ("Country/Region Code" = filter(<> '')) "Post Code".City where("Country/Region Code" = field("Country/Region Code")); }
        field(58; Balance; Decimal) { FieldClass = FlowField; CalcFormula = sum("Cust. Ledger Entry".Amount where("Customer No." = field("No."))); }
        field(99; Ghost; Code[10]) { TableRelation = "Nowhere Table"; }
    }
    [IntegrationEvent(false, false)]
    local procedure OnAfterCopy(var Rec: Record Customer) begin end;
    [IntegrationEvent(false, false)]
    local procedure OnNobodyCares() begin end;
}
table 9 "Country/Region" { fields { field(1; Code; Code[10]) { } } }
table 225 "Post Code" { fields { field(1; Code; Code[20]) { } field(2; City; Text[30]) { } } }
table 21 "Cust. Ledger Entry" { fields { field(1; "Entry No."; Integer) { } } }
page 21 "Customer Card" { PageType = Card; SourceTable = Customer; }
page 22 "Customer List" { PageType = List; SourceTable = Customer; CardPageId = "Customer Card"; }
codeunit 80 "Sales-Post" { TableNo = "Sales Header"; }
table 36 "Sales Header" { fields { field(1; "Document Type"; Integer) { } } }
tableextension 50100 "Customer Ext" extends Customer { fields { field(50100; Extra; Code[10]) { } } }
`;
const APP = `codeunit 50200 "Shopify Sync"
{
    [EventSubscriber(ObjectType::Table, Database::Customer, 'OnAfterCopy', '', false, false)]
    local procedure HandleCopy(var Rec: Record Customer) begin end;
    [EventSubscriber(ObjectType::Table, Database::Customer, 'OnAfterDeleteEvent', '', false, false)]
    local procedure HandleDelete(var Rec: Record Customer) begin end;
    [EventSubscriber(ObjectType::Table, Database::"Sales Header", 'OnAfterValidateEvent', 'Sell-to Customer No.', false, false)]
    local procedure HandleSellTo(var Rec: Record "Sales Header") begin end;
}
table 50201 "Sales Header" { fields { field(1; Code; Code[10]) { } } }
`;

test("relations: TableRelation, CalcFormula, SourceTable, CardPage, TableNo and extends become edges; unknown names are reported", async () => {
  const objects = [...(await objs(BASE, "Base Application")), ...(await objs(APP, "Shopify Connector"))];
  const rel = buildRelations("29", [{ w1: true, objects: () => objects.filter((o) => o.app === "Base Application") }, { w1: false, objects: () => objects.filter((o) => o.app !== "Base Application") }]);
  const e = (k: string) => rel.edges.filter((x) => x.k === k).map((x) => `${x.s}>${x.t}${x.via ? `:${x.via}` : ""}${x.cond ? "?" : ""}`);
  assert.deepEqual(e("table_relation"), ["table/18>table/225:City?", "table/18>table/9:Country/Region Code"]);
  assert.deepEqual(e("calc_formula"), ["table/18>table/21:Balance"]);
  assert.deepEqual(e("source_table"), ["page/21>table/18", "page/22>table/18"]);
  assert.deepEqual(e("card_page"), ["page/22>page/21"]);
  assert.deepEqual(e("extends"), ["tableextension/50100>table/18"]);
  // "Sales Header" exists twice (W1 and the app): the W1 codeunit resolves to W1's; nothing is guessed elsewhere
  assert.deepEqual(e("runs_on"), ["codeunit/80>table/36"]);
  assert.deepEqual(rel.unresolved.map((u) => `${u.k}:${u.reason}`), ["table_relation:unknown"]);
  const inc = incoming(rel);
  assert.equal(inc.get("table/18")!.length, 3, "two pages and one extension point at Customer");
});

test("relations: subscribers land on the published event, trigger events get their own entry, dead events are listed", async () => {
  const objects = [...(await objs(BASE, "Base Application")), ...(await objs(APP, "Shopify Connector"))];
  const rel = buildRelations("29", [{ w1: true, objects: () => objects.filter((o) => o.app === "Base Application") }, { w1: false, objects: () => objects.filter((o) => o.app !== "Base Application") }]);
  const cust = rel.events["table/18"];
  assert.deepEqual(Object.keys(cust).sort(), ["OnAfterCopy", "OnAfterDeleteEvent", "OnNobodyCares"]);
  assert.deepEqual(cust.OnAfterCopy.subs, [{ s: "codeunit/50200", proc: "HandleCopy", app: "Shopify Connector" }]);
  assert.equal(cust.OnAfterDeleteEvent.kind, "trigger_event");
  assert.equal(cust.OnNobodyCares.subs.length, 0);
  // the app's subscription to "Sales Header" is ambiguous from the app's point of view? no: same app first -> the app's own table
  assert.deepEqual(Object.keys(rel.events["table/50201"] ?? {}), ["OnAfterValidateEvent(Sell-to Customer No.)"]);
  assert.deepEqual(rel.dead_events, { count: 1 });
  assert.equal(rel.stats.subscribes, 3);
});
