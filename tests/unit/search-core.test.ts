import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  ABBR, SYSTEM_ALIASES, anchorOf, editDistance, hasMajor, hints, hrefOf, indexTokens, pageToRecord, parseQuery, prepare, scoreRecord, search,
  stem, symbolLine, symbolToRecord, synonymsOf, systemOf, tokenize, type PageRecord,
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
  assert.match(qh[0].text, /start with the hub: Sales\./);
  assert.match(h("table 18 BE")[0].text, /^BE has no table 18 of its own; the W1 table applies\.$/);
  assert.deepEqual(h("customer"), []);
});
