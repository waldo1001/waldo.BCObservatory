import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  ABBR, SYSTEM_ALIASES, anchorOf, editDistance, hasMajor, hints, hrefOf, indexTokens, isCodedId, learnRecords, pageToRecord, parseQuery, prepare, scoreRecord, search,
  stem, symbolLine, symbolToRecord, synonymsOf, systemOf, tokenize, type LearnShard, type PageRecord,
} from "@bc-observatory/search";

const COUNTRIES = ["at", "au", "be", "ca", "de", "fr", "gb", "in", "nl", "us"];
const p = (raw: string) => parseQuery(raw, { countries: COUNTRIES });

// ---------------------------------------------------------------------------------------------- parser (4.1)

test("references: type words, abbreviations, no space, plurals and a country", () => {
  for (const [raw, type, id, country] of [
    ["table 36", "table", 36, null], ["t36", "table", 36, null], ["cu 80", "codeunit", 80, null], ["codeunit80", "codeunit", 80, null],
    ["page 21", "page", 21, null], ["tables 36", "table", 36, null], ["table 11300 BE", "table", 11300, "be"], ["table 36-be", "table", 36, "be"],
    ["T36", "table", 36, null], ["pe 8051", "pageextension", 8051, null], ["cod 80", "codeunit", 80, null], ["xml 1", "xmlport", 1, null],
  ] as const) assert.deepEqual(p(raw).ref, { type, id, country }, raw);
  assert.equal(p("table 36 XX").ref, null, "an unknown country is no reference");
});

test("a bare number is an id, a version word is a major, never the other way round", () => {
  assert.equal(p("36").number, 36);
  assert.equal(p("36").terms.length, 0);
  for (const raw of ["bc30 sales", "bc 30 sales", "v30 sales", "sales BC30"]) { assert.equal(p(raw).major, "30", raw); assert.deepEqual(p(raw).terms.map((t) => t.text), ["sales"], raw); }
  assert.equal(p("bc30").warnings.length, 0, "bc30 is no unknown abbreviation");
  assert.equal(p("sales 2024").number, null);
  assert.deepEqual(p("sales 2024").terms.map((t) => [t.text, t.numeric]), [["sales", false], ["2024", true]]);
});

test("countries: uppercase alone, any case next to a type word; lowercase words stay words", () => {
  assert.deepEqual(p("BE").countries, ["be"]);
  assert.deepEqual(p("BE").terms, []);
  assert.deepEqual(p("be").countries, []);
  assert.deepEqual(p("be").terms.map((t) => t.text), ["be"]);
  assert.deepEqual(p("in the posting").terms.map((t) => t.text), ["in", "the", "posting"], "'in' is India only in capitals");
  assert.deepEqual(p("table be").countries, ["be"]);
  assert.deepEqual(p("VAT BE").countries, ["be"]);
  assert.deepEqual(p("VAT BE").terms.map((t) => t.text), ["vat"]);
});

test("type words anywhere; an abbreviation only as the whole query or in front of digits; t stays a word", () => {
  assert.deepEqual(p("page subscriptions").types, ["page"]);
  assert.deepEqual(p("page subscriptions").terms.map((t) => t.text), ["subscriptions"]);
  assert.deepEqual(p("customer tables").types, ["table"]);
  assert.deepEqual(p("cu").types, ["codeunit"]);
  assert.deepEqual(p("cu").terms.map((t) => t.text), ["cu"], "a type word alone is still searched as a word");
  assert.deepEqual(p("t").types, [], "a one-letter abbreviation needs digits");
  assert.deepEqual(p("t account").types, []);
  assert.deepEqual(p("t account").terms.map((t) => t.text), ["account"]);
  assert.equal(ABBR.cu, "codeunit");
  assert.equal(ABBR.pse, "permissionsetextension");
});

test("kind prefixes, quoted phrases, questions and CamelCase", () => {
  assert.equal(p("field:Posting Date").kind, "field");
  assert.deepEqual(p("field:Posting Date").terms.map((t) => t.text), ["posting", "date"]);
  assert.equal(p("event: OnAfterPost").kind, "event");
  assert.equal(p("proc: CopyToTempLines").kind, "proc");
  assert.equal(p("procedure:CopyToTempLines").kind, "proc");
  assert.equal(p("value: Order").kind, "value");
  assert.equal(p("event: OnAfterPost").ref, null);
  const phrase = p('"Sales Header"').terms;
  assert.equal(phrase.length, 1);
  assert.deepEqual([phrase[0].text, phrase[0].phrase], ["sales header", true]);
  assert.equal(p("how do I post a sales invoice").question, true);
  assert.deepEqual(p("how do I post a sales invoice").terms.map((t) => t.text), ["post", "sales", "invoice"], "question words go");
  assert.equal(p("what changed in table 36 in BC30").question, true);
  assert.equal(p("customer").question, false);
  assert.ok(p("OnAfterPostSalesDoc").terms[0].alts.includes("on after post sales doc"), "CamelCase alternate");
  assert.deepEqual(p("cx 80").warnings, ["unknown abbreviation cx"]);
});

test("a coded id is one plain term, never an abbreviation and a number; with a space it still is (D95)", () => {
  for (const raw of ["RT0005", "rt0005", "AS0020", "AL0281", "LC0234", "PTE0001"]) {
    const q = p(raw);
    assert.deepEqual([q.terms.map((t) => t.text), q.warnings, q.ref, q.number, q.types], [[raw.toLowerCase()], [], null, null, []], raw);
  }
  assert.deepEqual(p("rt 0005").warnings, ["unknown abbreviation rt"], "with a space it is an abbreviation and a number");
  assert.deepEqual(p("rt 0005").terms.map((t) => t.text), ["rt", "0005"]);
  assert.deepEqual(p("telemetry RT0005").terms.map((t) => t.text), ["telemetry", "rt0005"], "a coded word among words stays whole");
  // letters that are a type abbreviation keep their meaning as a reference
  assert.deepEqual(p("cu0080").ref, { type: "codeunit", id: 80, country: null });
  assert.deepEqual(p("t0036").ref, { type: "table", id: 36, country: null }, "one letter: no coded id");
  assert.equal(isCodedId("RT0005"), true);
  assert.equal(isCodedId("rt0005"), false);
});

// ---------------------------------------------------------------------------------------------- words

test("tokenize keeps compound words, folds accents, drops one-letter words unless numeric", () => {
  assert.deepEqual(tokenize("Sales-Post (Yes/No)"), ["sales-post", "yes/no"]);
  assert.deepEqual(tokenize("G/L Entry No. 5"), ["g/l", "entry", "no", "5"]);
  assert.deepEqual(tokenize("Café Déjà a"), ["cafe", "deja"]);
  assert.deepEqual(indexTokens("Sales-Post"), ["sales-post", "sales", "post"]);
  assert.deepEqual(indexTokens("OnAfterPostSalesDoc", true), ["onafterpostsalesdoc", "on", "after", "post", "sales", "doc"]);
});

test("stem: plurals, then -ing and -ed, five letters and up", () => {
  assert.equal(stem("customers"), "customer");
  assert.equal(stem("entries"), "entry");
  assert.equal(stem("invoices"), "invoice");
  assert.equal(stem("addresses"), "address");
  assert.equal(stem("postings"), "post");
  assert.equal(stem("posting"), "post");
  assert.equal(stem("posted"), "post");
  assert.equal(stem("status"), "status");
  assert.equal(stem("tables"), "table");
  assert.equal(stem("post"), "post", "four letters are left alone");
  assert.equal(editDistance("custmer", "customer"), 1);
  assert.equal(editDistance("headr", "header"), 1);
  assert.equal(editDistance("teh", "the"), 1, "a transposition is one edit");
  assert.ok(editDistance("customer", "vendor") > 2);
});

test("synonyms: abbreviations both ways, the reader's word one way, phrases merge; system aliases match the taxonomy", () => {
  assert.ok(synonymsOf("client").includes("customer"));
  assert.ok(!synonymsOf("customer").includes("client"), "customer does not find the web client");
  assert.ok(synonymsOf("customer").includes("cust"));
  assert.ok(synonymsOf("g/l").includes("general ledger"));
  assert.ok(synonymsOf("FA").includes("fixed asset"));
  const gl = p("general ledger setup").terms;
  assert.deepEqual(gl.map((t) => [t.text, t.phrase]), [["general ledger", true], ["setup", false]]);
  assert.ok(gl[0].alts.includes("g/l"));
  const tax = JSON.parse(readFileSync(new URL("../../config/taxonomy.json", import.meta.url), "utf8")) as { systems: { id: string; aliases: string[] }[] };
  assert.deepEqual(SYSTEM_ALIASES, Object.fromEntries(tax.systems.map((s) => [s.id, s.aliases])), "synonyms.ts copies config/taxonomy.json");
  assert.equal(systemOf("g/l"), "finance");
  assert.equal(systemOf("Sales"), "sales");
  assert.equal(systemOf("nonsense"), null);
});

// ---------------------------------------------------------------------------------------------- scoring (4.2)

const obj = (path: string, type: string, id: number, name: string, app: string, inbound: number, over: Partial<PageRecord> = {}): PageRecord =>
  ({ path, type: "object", title: `${type[0].toUpperCase()}${type.slice(1)} ${id} "${name}"`, summary: `${name} in ${app}.`, tier: "official", object_type: type, object_id: id, name, app, inbound, ...over });
const PAGES: PageRecord[] = [
  obj("objects/table/18", "table", 18, "Customer", "Base Application", 338, { present_in: "23-30" }),
  obj("objects/table/21", "table", 21, "Cust. Ledger Entry", "Base Application", 180, { caption: "Customer Ledger Entry", summary: "Ledger entries." }),
  obj("objects/tableextension/10832-fr", "tableextension", 10832, "Customer", "FR layer", 1, { country: "fr", title: 'Table extension 10832 "Customer" (FR)' }),
  obj("objects/table/36", "table", 36, "Sales Header", "Base Application", 217),
  obj("objects/table/36-be", "table", 36, "Sales Header", "BE layer", 0, { country: "be", title: 'Table 36 "Sales Header" (BE)' }),
  obj("objects/page/36", "page", 36, "Assembly BOM", "Base Application", 3),
  obj("objects/page/21", "page", 21, "Customer Card", "Base Application", 150),
  obj("objects/table/37", "table", 37, "Sales Line", "Base Application", 190),
  obj("objects/table/360", "table", 360, "Microsoft 365 things", "Base Application", 3),
  obj("objects/tableextension/8053", "tableextension", 8053, "Sales Header", "Subscription Billing", 2),
  obj("objects/tableextension/1", "tableextension", 1, "Big", "Base Application", 100),
  obj("objects/table/11300-be", "table", 11300, "VAT VIES Correction", "BE layer", 0, { country: "be", title: 'Table 11300 "VAT VIES Correction" (BE)' }),
  obj("objects/codeunit/80", "codeunit", 80, "Sales-Post", "Base Application", 110, { subscribers: 83 }),
  { path: "topics/bc/sales/register-new-customers", type: "topic", title: "Register new customers", summary: "How to set up a new customer.", tier: "official", members: 12, narrative: "reviewed", tags: ["business functionality", "sales"] },
  { path: "topics/bc/sales", type: "topic", title: "Sales", summary: "Selling.", tier: "official", members: 200, narrative: "reviewed", tags: ["business functionality"] },
  { path: "localizations/be", type: "localization", title: "Belgium (BE)", summary: "Belgian localization.", tier: "official", country: "BE" },
  { path: "posts/x/1", type: "post", title: "Microsoft 365 and BC", summary: "365 things.", tier: "community", date: "2026-01-01" },
];
const index = prepare(PAGES.map(pageToRecord));
const rec = (id: string) => index.records.find((r) => r.id === id)!;
const sc = (q: string, id: string) => Math.round(scoreRecord(index, rec(id), p(q)).s * 100) / 100;
const ids = (q: string) => search(index, p(q)).map((h) => h.r.id);

test("worked example 'customer': name, importance and layer put the base object first (4.2)", () => {
  assert.equal(rec("objects/table/18").importance, 1, "inbound 338 is the tables' maximum");
  assert.equal(sc("customer", "objects/table/18"), 17.3, "title 3 + name 10 + 2 x importance 1.0 + base 1 + table 0.3 + summary 1, demotion lifted");
  assert.equal(sc("customer", "objects/tableextension/10832-fr"), 14.3, "title 3 + name 10 + 2 x 0.15 + country 0 + summary 1");
  assert.equal(sc("customer", "objects/table/21"), 5.45, "(caption 3 + starts 3 + 2 x 0.89 + 1 + 0.3) x 0.6: the caption scores, it does not lift");
  assert.equal(sc("customer", "topics/bc/sales/register-new-customers"), 9.95, "title 3 x 0.75 (stem) + log2(13) 3.7 + reviewed 2 + 1 + summary 1");
  assert.deepEqual(ids("customer"), ["objects/table/18", "objects/tableextension/10832-fr", "topics/bc/sales/register-new-customers", "objects/page/21", "objects/table/21"]);
});

test("worked example 'Sales Header': the base table above the extensions named the same (4.2)", () => {
  assert.equal(sc("Sales Header", "objects/table/36"), 21.15, "6 + 10 + 2 x 0.92 + 1 + 0.3 + summary 2");
  assert.equal(sc("Sales Header", "objects/tableextension/8053"), 18.98, "6 + 10 + 2 x 0.24 + app 0.5 + summary 2");
  assert.deepEqual(ids("Sales Header").slice(0, 3), ["objects/table/36", "objects/tableextension/8053", "objects/table/36-be"]);
  assert.deepEqual(ids('"Sales Header"').slice(0, 2), ["objects/table/36", "objects/tableextension/8053"]);
});

test("forgiving words: plural, one typo, a synonym say how they matched", () => {
  for (const q of ["customers", "custmer", "client"]) assert.equal(ids(q)[0], "objects/table/18", q);
  assert.ok(search(index, p("custmer"))[0].why.includes('matched "customer"'));
  assert.ok(search(index, p("client"))[0].why.includes('matched "customer"'));
  assert.equal(sc("cust", "objects/table/21") > 0, true, "a prefix of three letters or more");
  assert.equal(ids("sales-post")[0], "objects/codeunit/80", "hyphen kept");
  assert.equal(ids("sales post")[0], "objects/codeunit/80", "and its parts still meet");
});

test("references, bare numbers and countries", () => {
  assert.equal(sc("t36", "objects/table/36"), 1000);
  assert.equal(sc("t36", "objects/table/36-be"), 900, "the country twin under the W1 object");
  assert.deepEqual(ids("table 36"), ["objects/table/36", "objects/table/36-be"]);
  assert.equal(sc("table 36 BE", "objects/table/36-be"), 1000);
  assert.equal(sc("table 36 BE", "objects/table/36"), 900);
  assert.deepEqual(ids("table 11300"), ["objects/table/11300-be"], "an id that exists only in a country layer");
  assert.deepEqual(ids("36"), ["objects/table/36", "objects/page/36", "objects/table/36-be"], "the id across types, never 360 or Microsoft 365");
  assert.equal(sc("36", "objects/table/36"), 11.15, "8 + table 0.3 + base 1 + 2 x 0.92");
  assert.equal(ids("BE")[0], "localizations/be");
  assert.ok(ids("BE").includes("objects/table/11300-be"));
  assert.equal(search(index, p("BE"))[0].band, "exact");
  assert.ok(sc("Sales Header BE", "objects/table/36-be") > sc("Sales Header BE", "objects/tableextension/8053") - 3, "a named country lifts its objects by 3");
});

test("version words filter by the majors a record is present in; type words filter objects", () => {
  assert.equal(hasMajor({ major: "23-30" }, "30"), true);
  assert.equal(hasMajor({ major: "28 30" }, "29"), false);
  assert.equal(hasMajor({}, "30"), false);
  assert.deepEqual(ids("bc30 customer"), ["objects/table/18"]);
  assert.deepEqual(ids("bc22 customer"), []);
  assert.deepEqual(ids("tableextension customer").filter((x) => x.startsWith("objects/")), ["objects/tableextension/10832-fr"], "objects of the named type only");
});

test("hubs: size and narrative when named; a hub's own words do not count again in its tags", () => {
  const r = pageToRecord({ path: "topics/a/b", type: "topic", title: "Subscription billing analytics", summary: "", tier: "official", members: 18, narrative: "reviewed", tags: ["business functionality", "sales", "subscription billing"] });
  const i = prepare([r]);
  assert.equal(Math.round(scoreRecord(i, i.records[0], p("subscription")).s * 10) / 10, 13.2, "title 3 + starts 3 + log2(19) 4.2 + reviewed 2 + 1: the tag 'subscription billing' adds nothing");
  const app = pageToRecord({ path: "apps/x", type: "app", title: "Subscription Billing", summary: "", tier: "official", members: 377 });
  const j = prepare([app]);
  assert.equal(Math.round(scoreRecord(j, j.records[0], p("subscription")).s * 100) / 100, 13.56, "title 3 + starts 3 + log2(378) 8.56 + no narrative -2 + 1");
});

// ---------------------------------------------------------------------------------------------- symbols

test("symbols: rows become records under their owner, gated, with an anchor and a row line", () => {
  const owner = rec("objects/codeunit/80");
  const ev = symbolToRecord("event", ["codeunit/80", "OnAfterPostSalesDoc", "integration", 8, "Raised after posting a sales document.", null], owner);
  const fld = symbolToRecord("field", ["table/36", "Posting Date", 20, "Date", "Specifies the date."], rec("objects/table/36"));
  const proc = symbolToRecord("proc", ["codeunit/80", "CopyToTempLines", 2, null, null, null], owner);
  const val = symbolToRecord("value", ["enum/36", "Order", 1, "Order"], rec("objects/page/36"));
  assert.equal(ev.id, "objects/codeunit/80#event-OnAfterPostSalesDoc");
  assert.equal(fld.id, "objects/table/36#field-20");
  assert.equal(proc.id, "objects/codeunit/80#proc-CopyToTempLines");
  assert.equal(val.id, "objects/page/36#value-1");
  assert.equal(symbolLine(fld), 'field 20 of Table 36 "Sales Header" · Date');
  assert.equal(symbolLine(ev), 'event of Codeunit 80 "Sales-Post" · integration · 8 subscribers');
  assert.equal(symbolLine(proc), 'procedure of Codeunit 80 "Sales-Post" · 2 parameters');
  const i = prepare(PAGES.map(pageToRecord));
  prepare([ev, fld, proc, val].map((s) => ({ ...s })), i);
  const q = (raw: string) => search(i, p(raw)).map((h) => h.r.id);
  assert.equal(q("OnAfterPostSalesDoc")[0], "objects/codeunit/80#event-OnAfterPostSalesDoc");
  assert.equal(q("event: OnAfterPost")[0], "objects/codeunit/80#event-OnAfterPostSalesDoc");
  assert.equal(q("field:Posting Date")[0], "objects/table/36#field-20");
  assert.equal(q("proc: CopyToTempLines")[0], "objects/codeunit/80#proc-CopyToTempLines");
  assert.ok(!q("sales").some((x) => x.includes("#")), "the symbol gate: 'sales' is no symbol's word");
  assert.ok(!q("after").some((x) => x.includes("#")), "CamelCase parts do not open the gate");
  assert.equal(anchorOf("field", 20), "#field-20");
  assert.equal(anchorOf("event", "OnAfterPostSalesDoc"), "#event-OnAfterPostSalesDoc");
  assert.equal(hrefOf("/b/", "objects/codeunit/80#event-X"), "/b/objects/codeunit/80/#event-X");
  assert.equal(hrefOf("/b/", "objects/codeunit/80"), "/b/objects/codeunit/80/");
});

// ---------------------------------------------------------------------------------------------- symbols rank by their owner (D95)

/** A small index with symbols: owners of the same type, a base table, a first-party app's table, and their fields and events. */
function withSymbols() {
  const owners: PageRecord[] = [
    obj("objects/table/18", "table", 18, "Customer", "Base Application", 338),
    obj("objects/table/36", "table", 36, "Sales Header", "Base Application", 217),
    obj("objects/table/30102", "table", 30102, "Shpfy Shop", "Shopify", 20),
    obj("objects/table/11300-be", "table", 11300, "VAT VIES Correction", "BE layer", 40, { country: "be", title: 'Table 11300 "VAT VIES Correction" (BE)' }),
    obj("objects/codeunit/80", "codeunit", 80, "Sales-Post", "Base Application", 110),
  ];
  const i = prepare(owners.map(pageToRecord));
  const by = (id: string) => i.records.find((r) => r.id === id)!;
  prepare([
    symbolToRecord("field", ["table/36", "VAT Bus. Posting Group", 116, "Code[20]", "Specifies the VAT specification that applies."], by("objects/table/36")),
    symbolToRecord("field", ["table/30102", "VAT Bus. Posting Group", 54, "Code[20]", "Specifies which VAT Bus. Posting Group is used for the shop."], by("objects/table/30102")),
    symbolToRecord("field", ["table/11300-be", "VAT Bus. Posting Group", 5, "Code[20]", "The VAT Bus. Posting Group of the correction."], by("objects/table/11300-be")),
    symbolToRecord("field", ["table/36", "Posting Date", 20, "Date", "Specifies the posting date of the document."], by("objects/table/36")),
    symbolToRecord("field", ["table/36", "Posting Date Filter", 21, "Date", null], by("objects/table/36")),
    symbolToRecord("event", ["codeunit/80", "OnAfterPostSalesDoc", "integration", 8, "Raised after posting a sales document.", null], by("objects/codeunit/80")),
    symbolToRecord("event", ["codeunit/80", "OnAfterPostSalesDocDropShipment", "integration", 0, null, null], by("objects/codeunit/80")),
  ], i);
  return i;
}

test("lift: a symbol takes its owner's layer and type prior; a tooltip repeating the name does not outrank the base application (D95)", () => {
  const i = withSymbols();
  const q = p("field: VAT Bus. Posting Group"), hits = search(i, q);
  assert.deepEqual(hits.map((h) => h.r.id), ["objects/table/36#field-116", "objects/table/30102#field-54", "objects/table/11300-be#field-5"],
    "base application (layer 1), then first-party app (0.5), then country layer (0), whatever the tooltip says");
  for (const h of hits) assert.ok(h.why.includes("name"), h.r.id);
  const [a, b, c] = hits.map((h) => h.s);
  assert.ok(a > b && b > c);
  // the owner's standing: layer + 2 x importance + the table prior; the text adds nothing on an exact name
  const imp = (id: string) => i.records.find((r) => r.id === id)!.importance;
  assert.equal(Math.round((a - b) * 100) / 100, Math.round((0.5 + 2 * (imp("objects/table/36") - imp("objects/table/30102"))) * 100) / 100);
  assert.equal(search(i, p("field: VAT Bus. Posting Group"), { filter: (r) => r.objectType === "table" })[0].r.id, "objects/table/36#field-116");
});

test("text on an exact name: a hit named like the query takes no points from its tooltip (D95)", () => {
  const i = withSymbols();
  const sc2 = (q: string, id: string) => Math.round(scoreRecord(i, i.records.find((r) => r.id === id)!, p(q)).s * 100) / 100;
  const exact = sc2("field: Posting Date", "objects/table/36#field-20"), starts = sc2("field: Posting Date", "objects/table/36#field-21");
  assert.equal(Math.round((exact - starts) * 100) / 100, 7, "name 10 against starts 3, and no text point for either");
  assert.deepEqual(search(i, p("field: Posting Date")).map((h) => [h.r.name, h.why.join(",")]), [["Posting Date", "name"], ["Posting Date Filter", "starts"]]);
  // pages keep their summary points on an exact name (the D86 worked examples above pin them)
  assert.equal(sc("customer", "objects/table/18"), 17.3);
});

test("lift: a generic word keeps the symbols' baseline: enum values named like it stay below the hub that out-ranked them (D95 review)", () => {
  const owners: PageRecord[] = [
    obj("objects/enum/1", "enum", 1, "Big Enum", "Base Application", 1000),
    obj("objects/enum/16", "enum", 16, "Gen. Journal Account Type", "Base Application", 50),
    obj("objects/enum/6211", "enum", 6211, "Shpfy Thing", "Shopify", 5),
    { path: "topics/bc/finance/posting", type: "topic", title: "Posting documents", summary: "How posting works.", tier: "official", members: 1, narrative: "unreviewed" },
  ];
  const i = prepare(owners.map(pageToRecord));
  const by = (id: string) => i.records.find((r) => r.id === id)!;
  prepare([symbolToRecord("value", ["enum/16", "Posting", 0, null], by("objects/enum/16")), symbolToRecord("value", ["enum/6211", "Posting", 1, null], by("objects/enum/6211"))], i);
  assert.deepEqual(search(i, p("posting")).map((h) => h.r.id), ["topics/bc/finance/posting", "objects/enum/16#value-0", "objects/enum/6211#value-1"], "the hub first, the values after it, whatever their owner's layer");
  // the baseline of a symbol: 2 x the owner's importance, the layer and the type prior only when the query asked for symbols
  const imp = (id: string) => by(id).importance;
  const generic = (id: string) => Math.round(scoreRecord(i, by(id), p("posting")).s * 100) / 100, kind = (id: string) => Math.round(scoreRecord(i, by(id), p("value: Posting")).s * 100) / 100;
  assert.equal(Math.round((generic("objects/enum/16#value-0") - generic("objects/enum/6211#value-1")) * 100) / 100, Math.round(0.6 * 2 * (imp("objects/enum/16") - imp("objects/enum/6211")) * 100) / 100, "a generic word: the importance only");
  assert.equal(Math.round((kind("objects/enum/16#value-0") - kind("objects/enum/6211#value-1")) * 100) / 100, Math.round((0.5 + 2 * (imp("objects/enum/16") - imp("objects/enum/6211"))) * 100) / 100, "a kind: the owner's layer too");
});

test("hints 6: a kind: query with no hit says so and names the nearest symbols (D95)", () => {
  const i = withSymbols();
  const h = (raw: string, hit = false) => { const q = p(raw); return hints(i, q, hit ? search(i, q) : []); };
  const near = h("event: OnAfterPostSalesDocs");
  assert.equal(near[0].text, 'No event named "OnAfterPostSalesDocs". Nearest events: OnAfterPostSalesDoc (Codeunit 80 "Sales-Post"), OnAfterPostSalesDocDropShipment (Codeunit 80 "Sales-Post").');
  assert.equal(near[0].query, "event: OnAfterPostSalesDoc");
  assert.deepEqual(h("event: OnBeforeValidateWidgetCode").map((x) => x.text), ['No event named "OnBeforeValidateWidgetCode".'], "nothing is near: the first sentence only");
  assert.equal(h("event: OnBeforeValidateWidgetCode")[0].query, undefined);
  assert.equal(h("field: Posting Dat")[0].text.startsWith('No field named "Posting Dat". Nearest fields: Posting Date (Table 36 "Sales Header")'), true, "a name that extends the query");
  assert.deepEqual(h("proc: NoSuchProc"), [], "no procedures loaded (a lazy shard): no claim");
  assert.deepEqual(h("event: OnAfterPostSalesDoc", true), [], "a hit: no hint");
  assert.deepEqual(h("event: OnAfterPostSalesDoc", false), [], "the name exists but the caller's filters left no hit: no false 'No event named'");
  // symbols not loaded (the site's lazy shards): no claim
  assert.deepEqual(hints(index, p("event: OnAfterPostSalesDocs"), []), []);
  assert.deepEqual(hints(i, p("Posting Date"), []), [], "only a kind: query");
});

test("hints 6: filters never turn into an absence; the kind parameter counts; short names have no neighbours; the name is what was typed (D95 review)", () => {
  const i = withSymbols();
  const h = (raw: string, opts = {}, hits = false) => { const q = p(raw); return hints(i, q, hits ? search(i, q) : [], opts); };
  // the caller's filters removed every hit although the field exists (the unfiltered search found one)
  const q = p("field: vat bus posting group"), all = search(i, q);
  assert.ok(all.length > 0);
  assert.equal(hints(i, q, [], { unfiltered: all, filters: "object_type=codeunit" })[0].text, `No field named "vat bus posting group" matches the filters (object_type=codeunit); without them: ${all.length} hits.`);
  assert.equal(hints(i, p("field: Posting Dat"), [], { unfiltered: search(i, p("field: Posting Dat")).slice(0, 1) })[0].text, 'No field named "Posting Dat" matches the filters; without them: 1 hit.');
  // nothing without the filters either: an absence, and the nearest names respect the filters
  assert.equal(h("event: OnAfterPostSalesDocs", { unfiltered: [] })[0].text.startsWith('No event named "OnAfterPostSalesDocs". Nearest events: OnAfterPostSalesDoc '), true);
  assert.equal(h("event: OnAfterPostSalesDocs", { unfiltered: [], keep: (r: { objectType?: string }) => r.objectType === "table" })[0].text, 'No event named "OnAfterPostSalesDocs".');
  assert.equal(h("field: Posting Dat", { keep: (r: { objectType?: string }) => r.objectType === "codeunit" })[0].text, 'No field named "Posting Dat".', "only the events of Codeunit 80 are kept: no field is near");
  // the kind parameter: a query without a prefix, asked for events
  assert.equal(h("OnBeforeValidateWidgetCode", { kind: "event" })[0].text, 'No event named "OnBeforeValidateWidgetCode".');
  assert.deepEqual(h("OnBeforeValidateWidgetCode"), [], "no kind, no claim");
  assert.equal(h("OnAfterPostSalesDocs", { kind: "event" })[0].query, "event: OnAfterPostSalesDoc");
  // a name of one to three letters is near everything: no list
  assert.deepEqual(h("proc: x").map((x) => x.text), [], "no procedures loaded here: no claim");
  assert.equal(h("event: x")[0].text, 'No event named "x".');
  assert.equal(h("event: OnA")[0].text, 'No event named "OnA".', "three letters: nothing is near");
  // the name is the terms as typed, without the type, country and version words
  assert.equal(h("event: OnAfterPostSalesDocs codeunit")[0].text.startsWith('No event named "OnAfterPostSalesDocs". Nearest events: OnAfterPostSalesDoc '), true);
  assert.equal(h("field: Posting Dat BE")[0].text.startsWith('No field named "Posting Dat". Nearest fields: Posting Date '), true);
  assert.equal(h("field: Posting Dat bc30")[0].text.startsWith('No field named "Posting Dat". Nearest fields: Posting Date '), true);
  assert.equal(h('field: "VAT Bus. Postin"')[0].text.startsWith('No field named "VAT Bus. Postin". '), true, "a quoted phrase as typed");
  // an edit-distance neighbour: one edit up to seven letters
  assert.equal(h("event: OnAfterPostSalesDocz")[0].text.includes("Nearest events: OnAfterPostSalesDoc "), true);
});

// ---------------------------------------------------------------------------------------------- question shapes and phrases (D95 phase D)

test("question shapes: a question drops its question words and keeps the content words (D95)", () => {
  const terms = (raw: string) => p(raw).terms.map((t) => t.text);
  const d = p("difference between IntegrationEvent and BusinessEvent");
  assert.deepEqual(d.terms.map((t) => t.text), ["integrationevent", "businessevent"]);
  assert.deepEqual(d.dropped, ["difference", "between", "and"]);
  assert.deepEqual([d.question, d.shape], [true, "concept"]);
  const w = p("what is the difference between IntegrationEvent and BusinessEvent");
  assert.deepEqual(w.terms.map((t) => t.text), ["integrationevent", "businessevent"]);
  assert.deepEqual(w.dropped, ["what", "is", "the", "difference", "between", "and"]);
  assert.equal(w.shape, "concept");
  for (const raw of ["IntegrationEvent vs BusinessEvent", "IntegrationEvent versus BusinessEvent", "compare IntegrationEvent and BusinessEvent"]) {
    assert.deepEqual([terms(raw), p(raw).question, p(raw).shape], [["integrationevent", "businessevent"], true, "concept"], raw);
  }
  assert.deepEqual(p("IntegrationEvent vs BusinessEvent").dropped, ["vs"]);
  assert.deepEqual([terms("how to use IntegrationEvent"), p("how to use IntegrationEvent").shape], [["integrationevent"], "how-to"]);
  assert.deepEqual([terms("when to use BusinessEvent"), p("when to use BusinessEvent").shape], [["businessevent"], "how-to"]);
  assert.equal(p("how do I post a sales invoice").shape, "how-to");
  assert.equal(p("what changed in table 36 in BC30").shape, "what-changed");
  assert.equal(p("what is a codeunit").shape, "concept");
  assert.equal(p("customer").shape, null);
  assert.deepEqual(p("customer").dropped, []);
  // no question shape: a name keeps its words
  const name = p("Sales and Receivables Setup");
  assert.deepEqual(name.terms.map((t) => t.text), ["sales", "and", "receivables", "setup"]);
  assert.deepEqual([name.question, name.shape, name.dropped], [false, null, []]);
  // a quoted phrase keeps every word, whatever surrounds it
  assert.deepEqual(p('"between the lines"').terms.map((t) => [t.text, t.phrase]), [["between the lines", true]]);
  assert.deepEqual(p('how to use "between the lines"').terms.map((t) => t.text), ["between the lines"]);
  assert.deepEqual(p('how to use "between the lines"').dropped, ["how", "to", "use"]);
  // a question of nothing but question words keeps them: there is nothing left to search otherwise
  assert.deepEqual([terms("what is"), p("what is").dropped, p("what is").question], [["what", "is"], [], true]);
  assert.deepEqual(terms("difference between"), ["difference", "between"]);
  // "use" and "mean" are words of a name until the query is a question
  assert.deepEqual(terms("Use Case Mean"), ["use", "case", "mean"]);
});

test("question shapes: names that start like a question or carry vs stay names with every word (D95 phase D review)", () => {
  const terms = (raw: string) => p(raw).terms.map((t) => t.text);
  // an auxiliary verb opens a question only before a pronoun (or an article in a longer query), never before a name word
  for (const [raw, words] of [
    ["Is Enabled", ["is", "enabled"]], ["Is Total", ["is", "total"]], ["Can Approve", ["can", "approve"]], ["Do Not Allow", ["do", "not", "allow"]],
    ["Does Not Contain", ["does", "not", "contain"]], ["Should Retry", ["should", "retry"]], ["Is a System User", ["is", "system", "user"]],
    ["Compare List", ["compare", "list"]], ["Compare at Price", ["compare", "at", "price"]],
    ["VS Code", ["vs", "code"]], ["AL in VS Code", ["al", "in", "vs", "code"]], ["vs code extension", ["vs", "code", "extension"]], ["VS Code Integration", ["vs", "code", "integration"]],
    ["Actual vs. Budget", ["actual", "vs", "budget"]], ["CO2 % vs Baseline", ["co2", "vs", "baseline"]],
  ] as [string, string[]][]) {
    const q = p(raw);
    assert.deepEqual([q.question, q.shape, q.dropped, q.terms.map((t) => t.text)], [false, null, [], words], raw);
  }
  // "IS" in capitals is Iceland's country code, a name word of the object, not a question
  const is = parseQuery("IS Customer Card", { countries: [...COUNTRIES, "is"] });
  assert.deepEqual([is.question, is.countries, is.terms.map((t) => t.text)], [false, ["is"], ["customer", "card"]]);
  // "Where Used Base Calendar" is a question as at the parent (where goes) but keeps "used"
  const where = p("Where Used Base Calendar");
  assert.deepEqual([where.question, where.dropped, where.terms.map((t) => t.text)], [true, ["where"], ["used", "base", "calendar"]]);
  assert.deepEqual(terms("What's New: Using Power Automate"), ["new", "using", "power", "automate"]);
  // the questions stay questions
  for (const raw of ["should I use events", "can you post a sales order", "is it possible to post", "is a codeunit an object", "compare tables and pages", "compare IntegrationEvent with BusinessEvent", "Posting vs Journal Lines"]) {
    assert.equal(p(raw).question, true, raw);
  }
  assert.deepEqual(p("should I use events").dropped, ["should", "use"]);
  assert.deepEqual(p("Posting vs Journal Lines").dropped, ["vs"]);
  // vs in front of code stays a word inside a question
  assert.deepEqual(terms("how to install VS Code"), ["install", "vs", "code"]);
  assert.deepEqual(terms("what is VS Code"), ["vs", "code"]);
});

test("seq: a phrase meets summary text word for word although the deduplicated word list lost the order (D95)", () => {
  const post = (path: string, title: string, summary: string): PageRecord => ({ path, type: "post", title, summary, tier: "community", date: "2026-01-01" });
  const plural = prepare([pageToRecord(post("posts/a/1", "Event types", "Types include business events, integration events, global events."))]);
  const single = prepare([pageToRecord(post("posts/a/2", "Event types", "A business event and an integration event."))]);
  // a page adds 1 for itself (`lift`); what is asserted is the rest, the text weight
  const s = (i: typeof plural, raw: string) => { const h = search(i, p(raw))[0]; return h ? h.s - 1 : 0; };
  // "events" came first in the summary: the deduplicated list reads business events integration global, so no phrase met
  assert.equal(s(plural, '"integration event"'), 0.75, "a quoted phrase, one word by its stem: a text match (1 x 0.75), not a name match (3)");
  assert.equal(s(single, '"integration event"'), 1, "the same words in a row: a text point");
  assert.equal(s(plural, "IntegrationEvent"), 0.5625, "the CamelCase alternate (0.75) of a stem-met phrase (0.75), text weight 1");
  assert.equal(s(single, "IntegrationEvent"), 0.75, "the CamelCase alternate in a row: text weight 1 x 0.75");
  assert.deepEqual(search(plural, p("IntegrationEvent"))[0].why, [], "no name, no caption");
  assert.equal(s(plural, "IntegrationEvent BusinessEvent"), 0.5625 * 2, "both terms, each a text match");
  assert.equal(s(plural, '"integration business"'), 0, "order matters");
  // fields keep their own sequence: name and title never run into each other
  assert.deepEqual(ids('"header table"'), [], "'Sales Header' then 'Table 36 ...' is no phrase");
  assert.equal(ids('"sales header"')[0], "objects/table/36", "a phrase inside one field still holds");
});

test("hints 4 by shape: what-changed keeps its text; how-to and a concept name the first Learn hit's hub; a dropped word finds no hub (D95)", () => {
  const hub = (path: string, title: string): PageRecord => ({ path, type: "topic", title, summary: "", tier: "official", members: 20, narrative: "reviewed", tags: ["development"] });
  const shard: LearnShard = {
    schema: "bcobs-learn@1", base: "https://learn.microsoft.com/dynamics365/business-central/", hubs: [["topics/dev/events", "Development › Events", "development"], ["", "AL reference", null]],
    rows: [
      ["dev-itpro/developer/devenv-event-types", "Event types", "Types include business events, integration events, global events.", null, 0],
      ["dev-itpro/developer/devenv-integration-events", "Integration events", "Integration events and the attribute.", null, 1],
    ],
  };
  const hubs = [hub("topics/dev/events", "Events"), hub("topics/dev/migrating", "Migrating tables and fields between extensions"), hub("topics/bc/sales", "Sales")];
  const withLearn = prepare([...hubs, ...learnRecords(shard)].map((r) => pageToRecord(r as PageRecord)));
  const h = (i: typeof withLearn, raw: string) => { const q = p(raw); return hints(i, q, search(i, q)); };
  const concept = h(withLearn, "difference between IntegrationEvent and BusinessEvent");
  assert.equal(concept[0].text, "For a concept, start with the hub: Events.");
  assert.equal(concept[0].path, "topics/dev/events", "the hub the best Learn hit is listed under");
  assert.equal(h(withLearn, "IntegrationEvent vs BusinessEvent")[0].path, "topics/dev/events");
  // the first Learn hit without a hub page (a reference section) does not name one: the next does
  const noHub = h(withLearn, "how to use integration events");
  assert.deepEqual([noHub[0].text, noHub[0].path], ["For how-to, start with the hub: Events.", "topics/dev/events"]);
  // no Learn hit: the best hub by the kept terms; "between" is dropped, so the migrating hub is not found through it
  const hubsOnly = prepare(hubs.map((r) => pageToRecord(r)));
  assert.deepEqual(h(hubsOnly, "difference between IntegrationEvent and BusinessEvent"), [], "no hub names a kept term");
  assert.equal(h(hubsOnly, "what is the difference between sales and purchase")[0].path, "topics/bc/sales");
  const named = prepare([hub("topics/dev/events", "Integration events"), ...hubs.slice(1)].map((r) => pageToRecord(r)));
  assert.equal(h(named, "difference between IntegrationEvent and BusinessEvent")[0].path, "topics/dev/events", "a hub named by a kept term (the CamelCase phrase)");
  // what-changed: today's text, today's hub
  const wc = h(withLearn, "what changed in sales");
  assert.equal(wc[0].text, "For what changed, open the object's Versions section or Changes; for how-to, start with the hub: Sales.");
  assert.equal(wc[0].path, "topics/bc/sales");
  assert.equal(h(index, "what changed in customer")[0].text.startsWith("For what changed, open the object's Versions section or Changes; for how-to, start with the hub"), true);
  assert.deepEqual(h(withLearn, "customer"), [], "no question: no hint");
});

// ---------------------------------------------------------------------------------------------- Learn articles (D94)

const LEARN: LearnShard = {
  schema: "bcobs-learn@1", base: "https://learn.microsoft.com/dynamics365/business-central/",
  hubs: [["topics/dev-itpro/development/development-environment/configure-the-development-environment", "… › Development environment › Configure the development environment", "administration"], ["", "AL reference › Methods", null]],
  rows: [
    ["dev-itpro/developer/devenv-security-settings-and-ip-protection", "Resource exposure policy setting", "IP protection for extensions.", "2024-01-03", 0, "development",
      ["ShowMyCode", "resourceExposurePolicy", "applyToDevExtension", "allowDebugging", "allowDownloadingSource", "includeSourceInSymbolFile"]],
    ["dev-itpro/developer/devenv-json-files", "JSON files", "The app.json and launch.json files.", "2026-08-25", 0, null, ["allowDownloadingSource", "includeSourceInSymbolFile", "repositoryUrl"]],
    ["dev-itpro/developer/methods-auto/record/record-setrange-method", "Record.SetRange(Any [, Any]) Method", "Sets a simple filter on a field.", "2025-01-01", 1],
    ["dev-itpro/developer/devenv-symbols", "Symbols", "Symbol files include source in a package.", null, -1],
  ],
};

test("Learn rows become records of type learn: the URL as path, the hub as where, the identifiers as tags (D94)", () => {
  const [sec, json, setrange, symbols] = learnRecords(LEARN);
  assert.deepEqual(sec, {
    path: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-security-settings-and-ip-protection", type: "learn",
    title: "Resource exposure policy setting", summary: "IP protection for extensions.", tier: "official", system: "development", date: "2024-01-03",
    tags: ["ShowMyCode", "resourceExposurePolicy", "applyToDevExtension", "allowDebugging", "allowDownloadingSource", "includeSourceInSymbolFile"],
    path_label: "… › Development environment › Configure the development environment", hub: "topics/dev-itpro/development/development-environment/configure-the-development-environment",
  });
  assert.equal(json.system, "administration", "no system of its own: the hub's");
  assert.deepEqual([setrange.path_label, setrange.hub, setrange.system, setrange.tags], ["AL reference › Methods", undefined, undefined, undefined], "a reference section: a label, no hub page");
  assert.deepEqual([symbols.path_label, symbols.date, symbols.hub], [undefined, undefined, undefined]);
  assert.equal(hrefOf("/b/", sec.path), sec.path, "a Learn article opens on learn.microsoft.com");
  assert.equal(pageToRecord(sec).id, sec.path);
});

test("identifier tags meet the identifier, its CamelCase words and the phrase; hubs keep their tags as they were (D94)", () => {
  const i = prepare([...PAGES.map(pageToRecord), ...learnRecords(LEARN).map(pageToRecord)]);
  const q = (raw: string) => search(i, p(raw)).map((h) => h.r.id.replace(LEARN.base, "L:"));
  assert.deepEqual(q("includeSourceInSymbolFile"), ["L:dev-itpro/developer/devenv-json-files", "L:dev-itpro/developer/devenv-security-settings-and-ip-protection"], "the two pages that document it; equal scores, newest first");
  assert.deepEqual(q("include source in symbol file").slice(0, 2).sort(), ["L:dev-itpro/developer/devenv-json-files", "L:dev-itpro/developer/devenv-security-settings-and-ip-protection"]);
  assert.ok(!q("include source in symbol file").includes("L:dev-itpro/developer/devenv-symbols") || q("include source in symbol file").indexOf("L:dev-itpro/developer/devenv-symbols") > 1, "summary words alone rank below the identifier");
  assert.deepEqual(q('"include source in symbol file"').sort(), ["L:dev-itpro/developer/devenv-json-files", "L:dev-itpro/developer/devenv-security-settings-and-ip-protection"], "the phrase holds although 'source' is also a word of an earlier tag");
  assert.equal(q("resourceExposurePolicy")[0], "L:dev-itpro/developer/devenv-security-settings-and-ip-protection");
  assert.equal(q("allow debugging")[0], "L:dev-itpro/developer/devenv-security-settings-and-ip-protection");
  assert.equal(q("SetRange")[0], "L:dev-itpro/developer/methods-auto/record/record-setrange-method");
  const sec = i.records.find((r) => r.id.endsWith("devenv-security-settings-and-ip-protection"))!;
  assert.equal(scoreRecord(i, sec, p("includeSourceInSymbolFile")).s, 13, "tags 2 + a page's 1 + the exact band 10 (the tag equals the query, D95); the summary does not name it here");
  // a hub's tags are TOC titles: no CamelCase split there (D65 as it was)
  const hub = pageToRecord({ path: "topics/x", type: "topic", title: "Hub", summary: "", tier: "official", tags: ["AppSource"] });
  const j = prepare([hub]);
  assert.equal(search(j, p("source")).length, 0, "'AppSource' as a hub tag is one word");
  assert.equal(indexTokens("includeSourceInSymbolFile", true).join(" "), "includesourceinsymbolfile include source in symbol file");
});

test("a Learn article's identifier tags are one-word names: the whole query equal to a tag is the exact band, a prefix of one is no start (D95)", () => {
  const shard: LearnShard = {
    schema: "bcobs-learn@1", base: "https://learn.microsoft.com/dynamics365/business-central/", hubs: [],
    rows: [
      ["dev-itpro/developer/analyzers/appsourcecop-as0020", "AppSourceCop Error AS0020", "Breaking change.", "2024-01-03", -1, null, ["AS0020"]],
      ["dev-itpro/developer/devenv-json-files", "JSON files", "The app.json file.", "2026-08-25", -1, null, ["includeSourceInSymbolFile", "AS0020Extra"]],
    ],
  };
  const i = prepare(learnRecords(shard).map(pageToRecord));
  const as20 = i.records[0], json = i.records[1];
  assert.ok(scoreRecord(i, as20, p("AS0020")).why.includes("name"), "a tag equal to the query");
  assert.ok(scoreRecord(i, as20, p("appsourcecop error as0020")).why.includes("name"), "the title equal to the query");
  assert.ok(scoreRecord(i, json, p("includeSourceInSymbolFile")).why.includes("name"));
  assert.ok(!scoreRecord(i, json, p("AS0020")).why.some((w) => w === "name" || w === "starts"), "AS0020Extra is another word");
  assert.ok(!scoreRecord(i, json, p("includeSource")).why.includes("starts"), "a prefix of a tag is no start");
  assert.equal(search(i, p("AS0020"))[0].band, "exact");
  assert.equal(search(i, p("AS0020"))[0].r.id, as20.id);
});

// ---------------------------------------------------------------------------------------------- hints

test("hints 1-5: unknown abbreviation, missing id, typo, question, a country without its own object", () => {
  const h = (raw: string) => { const q = p(raw); return hints(index, q, search(index, q)); };
  assert.match(h("cx 80")[0].text, /Did you mean "cu 80" \(codeunit 80\)\?/);
  assert.equal(h("cx 80")[0].query, "cu 80");
  assert.match(h("t999999")[0].text, /^No table 999999\. Nearest ids: table 360, table 11300, table 36\.$|^No table 999999\. Nearest ids: /);
  assert.match(h("custmer")[0].text, /^custmer: no page; customer \(\d+ pages?\)$/);
  assert.equal(h("custmer")[0].query, "customer");
  const qh = h("how do I post a sales invoice");
  assert.equal(qh[0].path, "topics/bc/sales");
  assert.equal(qh[0].text, "For how-to, start with the hub: Sales.", "a how-to question (D95 phase D)");
  assert.match(h("table 18 BE")[0].text, /^BE has no table 18 of its own; the W1 table applies\.$/);
  assert.deepEqual(h("customer"), []);
});
