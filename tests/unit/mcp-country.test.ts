import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { BLOCK_MEMBERS, addedSummary, countryBlock, memberAnswer, parseAnchor, replacedInLine, type DiffMember, type DiffObject } from "../../packages/mcp/src/country.js";

const diff = JSON.parse(readFileSync(new URL("../fixtures/country-diff/29-be.json", import.meta.url), "utf8")) as { objects: DiffObject[] };
const customer = diff.objects.find((o) => o.key === "table/18")!;
const TITLE = 'Table 18 "Customer"';

test("countryBlock: the headline, what the layer adds with signatures, what it changes, the source (spec 2.3)", () => {
  assert.equal(countryBlock(customer, "be", "29", { title: TITLE }), [
    'BE replaces Table 18 "Customer" (BC29): +2 fields, +1 event, +2 procedures; 1 field changed, 1 key changed.',
    'Fields added: 11310 "Enterprise No." Text[50]; 2000020 "Domiciliation No." Text[12]',
    "Events added: OnBeforeValidateEnterpriseNo(var Customer: Record Customer; xCustomer: Record Customer; CurrFieldNo: Integer; var IsHandled: Boolean) (integration)",
    "Procedures added: FormatEnterpriseNo(EnterpriseNo: Text; CountryCode: Code[10]): Text (global); HiddenBe() (local)",
    "Keys changed: Key14 (+Enterprise No.)",
    'Fields changed: 5 "Posting Date" (Caption: Posting Date -> Invoice Date)',
    "Source: data/code/diffs/country/29-be.json; the BE page: localizations/be.",
  ].join("\n"));
});

test("countryBlock: the owner's title is optional, a layer that adds nothing says so, the member cap counts the rest", () => {
  assert.match(countryBlock(customer, "be", "29"), /^BE replaces Table 18 "Customer" \(BC29\)/);
  const bare: DiffObject = { key: "codeunit/80", name: "Sales-Post", change: "replaced", properties: [{}, {}] };
  assert.equal(countryBlock(bare, "nl", "30", { title: 'Codeunit 80 "Sales-Post"' }), 'NL replaces Codeunit 80 "Sales-Post" (BC30): no member added; 2 properties changed.\nSource: data/code/diffs/country/30-nl.json; the NL page: localizations/nl.');
  const many: DiffMember[] = Array.from({ length: 55 }, (_, i) => ({ id: String(i), name: `P${i}`, change: "added", to: { scope: "global", params: [], returns: null, event: null } }));
  const lines = countryBlock({ key: "codeunit/9998", name: "Upgrade Tag Definitions", change: "replaced", procedures: many }, "be", "29").split("\n");
  assert.match(lines[0], /\+55 procedures\.$/);
  assert.equal(lines[1].split("; ").length, BLOCK_MEMBERS, "40 members shown");
  assert.equal(lines[2], '... and 15 more: bc_localization("BE", section: "w1_objects_this_country_changes")');
});

test("replacedInLine: alphabetical, counts where a layer adds members, bare codes where it adds none", () => {
  const none: DiffObject = { key: "table/18", name: "Customer", change: "replaced", keys: [{ id: "k", name: "K", change: "changed" }] };
  assert.equal(replacedInLine([{ cc: "us", object: { ...none, fields: [{ id: "1", name: "A", change: "added" }, { id: "2", name: "B", change: "added" }, { id: "3", name: "C", change: "added" }] } }, { cc: "be", object: customer }, { cc: "ca", object: none }, { cc: "au", object: { ...none, fields: [{ id: "1", name: "A", change: "added" }, { id: "2", name: "B", change: "added" }] } }]),
    "Replaced in: AU (+2 fields), BE (+2 fields, +1 event, +2 procedures), CA, US (+3 fields).");
  assert.equal(replacedInLine([]), null);
  assert.equal(addedSummary(none), "");
});

test("memberAnswer: a field, an event, a procedure and a value only a layer has; null for anything the layer did not add", () => {
  const o = { title: TITLE, site: "https://example.test/x/", path: "objects/table/18" };
  assert.equal(memberAnswer(customer, parseAnchor("#field-11310")!, "be", o), [
    'Table 18 "Customer", field 11310 (added by the BE layer, not in W1):',
    "| No. | Name | Type | Properties | Layer |", "|---|---|---|---|---|",
    '| 11310 | Enterprise No. | Text[50] | Caption "Enterprise No."; ToolTip "Specifies the enterprise number of the customer."; OptimizeForTextSearch | BE |',
    "", "W1 page: https://example.test/x/objects/table/18/ · BE layer: localizations/be", "",
  ].join("\n"));
  assert.match(memberAnswer(customer, parseAnchor("#event-OnBeforeValidateEnterpriseNo")!, "be", o)!, /^Table 18 "Customer", event OnBeforeValidateEnterpriseNo \(added by the BE layer, not in W1\):\n- `OnBeforeValidateEnterpriseNo\(var Customer: Record Customer;.*\)` \(integration\)\n/);
  assert.match(memberAnswer(customer, parseAnchor("#proc-FormatEnterpriseNo")!, "be", o)!, /procedure FormatEnterpriseNo[\s\S]*`FormatEnterpriseNo\(EnterpriseNo: Text; CountryCode: Code\[10\]\): Text` \(global\)/);
  assert.equal(memberAnswer(customer, parseAnchor("#field-5")!, "be", o), null, "a changed field is on the W1 page");
  assert.equal(memberAnswer(customer, parseAnchor("#field-999")!, "be", o), null);
  const en = diff.objects.find((x) => x.key === "enum/36")!;
  assert.match(memberAnswer(en, parseAnchor("value-11300")!, "be", { ...o, title: 'Enum 36 "Sales Document Type"', path: "objects/enum/36" })!, /value 11300 \(added by the BE layer[\s\S]*\| 11300 \| Belgian Credit Note \| BE \|/);
  assert.equal(parseAnchor("#nope-1"), null);
});
