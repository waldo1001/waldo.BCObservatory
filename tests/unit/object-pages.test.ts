import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import { extractSource, loadParser } from "../../pipeline/code/extract.js";
import { writeSnapshot } from "../../pipeline/code/job.js";
import { refreshCodeDerived } from "../../pipeline/code/diff.js";
import { renderCodePages } from "../../pipeline/render/object.js";
import { validateContent } from "../../pipeline/validate/content.js";
import { validate } from "../../pipeline/lib/schema.js";

const T28 = `table 18 Customer\n{\n    fields { field(1; "No."; Code[20]) { } }\n}\ncodeunit 99 Gone { }\n`;
const T29 = `table 18 Customer\n{\n    fields { field(1; "No."; Code[20]) { } field(2; Email; Text[80]) { ObsoleteState = Pending; ObsoleteTag = '29.0'; } }\n    [IntegrationEvent(false, false)]\n    local procedure OnAfterX() begin end;\n    procedure GetName(): Text begin end;\n}\ntableextension 50 "Cust Ext" extends Customer { }\npage 21 "Customer Card" { SourceTable = Customer; }\ntable 36 "Sales Header" { fields { field(2; "Sell-to Customer No."; Code[20]) { TableRelation = Customer; } } }\ncodeunit 80 "Sales-Post" { TableNo = "Sales Header"; [EventSubscriber(ObjectType::Table, Database::Customer, 'OnAfterX', '', false, false)] local procedure OnX() begin end; }\n`;
const BE = `table 18 Customer\n{\n    fields { field(1; "No."; Code[20]) { } field(2; Email; Text[80]) { ObsoleteState = Pending; ObsoleteTag = '29.0'; } field(11300; "Enterprise No."; Text[50]) { } }\n    [IntegrationEvent(false, false)]\n    local procedure OnAfterX() begin end;\n    procedure GetName(): Text begin end;\n}\ntable 11300 "BE Only" { }\n`;
const man = (major: string, cc: string, commit: string) => ({ major, country: cc, layer: (cc === "w1" ? "base" : "overlay") as "base" | "overlay", source: "bcapps", repo: "https://github.com/microsoft/BCApps", branch: `releases/${major}.x`, commit, build: null, apps: ["Base Application"], files: 1, parse_errors: 0 });

test("object and localization pages: valid frontmatter, cross-links that resolve, life across versions", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-objpages-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const p = await loadParser();
  const ex = (src: string, version: string, cc = "w1") => extractSource(p, src, { version, country: cc, layer: cc === "w1" ? "base" : "overlay", app: "Base Application", file: "src/X.al" });
  writeSnapshot(dataDir, ex(T28, "28"), man("28", "w1", "c28"));
  writeSnapshot(dataDir, ex(T29, "29"), man("29", "w1", "c29"));
  writeSnapshot(dataDir, ex(BE, "29", "be"), { ...man("29", "be", "c29"), absent: [] });
  refreshCodeDerived(dataDir, ["28", "29"]);
  writeJson(join(dataDir, "index/docs-objects.json"), { majors: ["28", "29"], commits: {}, docs: 1, links: 1, by_doc: {}, by_object: { "page/21": [{ id: "docs/learn/bc/customer.md", url: "https://learn/customer", title: "Customer card" }] } });
  const r = renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  assert.deepEqual([r.objects, r.localizations, r.own_objects], [7, 1, 1], "table 18, codeunit 99 (gone in 29), tableextension 50, page 21, table 36, codeunit 80, BE's own table 11300; BE");
  const t = matter(readFileSync(join(contentDir, "objects/table/18.md"), "utf8"));
  assert.deepEqual([t.data.present_in, t.data.changed_in, t.data.versions.introduced, t.data.countries, t.data.links.localizations], [["28", "29"], ["29"], null, ["be"], ["localization/be"]]);
  assert.match(t.content, /\| 2 \| Email \| Text\[80\] \| — \| obsolete Pending 29.0 \|/);
  assert.match(t.content, /OnAfterX\(\)` \(integration\)\n  - subscribers: \[Codeunit 80 "Sales-Post"\]\(\.\.\/codeunit\/80\.md\) OnX/);
  assert.match(t.content, /## Referenced by\n\n1 fields in 1 objects[\s\S]*- \[Table 36 "Sales Header"\]\(\.\.\/table\/36\.md\): Sell-to Customer No\./);
  assert.match(t.content, /## Pages and codeunits on this table\n\n- \[Page 21 "Customer Card"\]\(\.\.\/page\/21\.md\) \(source table\)/);
  assert.match(t.content, /## Extended by\n\n- \[Table extension 50 "Cust Ext"\]/);
  assert.deepEqual(t.data.relations, { out: 0, referenced_by: 1, pages: 1, extended_by: 1, event_subscribers: 1 });
  const sh = matter(readFileSync(join(contentDir, "objects/table/36.md"), "utf8"));
  assert.match(sh.content, /## Relations\n\n- Sell-to Customer No\.: TableRelation \[Table 18 "Customer"\]\(\.\.\/table\/18\.md\)/);
  assert.match(sh.content, /- \[Codeunit 80 "Sales-Post"\]\(\.\.\/codeunit\/80\.md\) \(codeunit runs on it\)/);
  const gone = matter(readFileSync(join(contentDir, "objects/codeunit/99.md"), "utf8"));
  assert.match(gone.data.summary, /gone after BC28/);
  const ext = matter(readFileSync(join(contentDir, "objects/tableextension/50.md"), "utf8"));
  assert.deepEqual([ext.data.versions.introduced, ext.data.links.objects], ["29", ["object/table/18"]]);
  assert.deepEqual(matter(readFileSync(join(contentDir, "objects/page/21.md"), "utf8")).data.links.learn, ["https://learn/customer"]);
  const be = matter(readFileSync(join(contentDir, "localizations/be.md"), "utf8"));
  assert.match(be.content, /## By area\n\n\| Area \| W1 objects changed \| Own objects \| Fields added \|\n\|---\|---\|---\|---\|\n\| \(no namespace\) \| 1 \| 1 \| 1 \|/);
  assert.ok(existsSync(join(dataDir, "code/diffs/country/matrix.json")), "country matrix written by the derived step");
  assert.deepEqual([be.data.country, be.data.added_objects, be.data.replaced_objects, be.data.added_fields], ["BE", 1, 1, 1]);
  // the country's own object gets a page of its own, keyed per country, and the localization links it (D52)
  const own = matter(readFileSync(join(contentDir, "objects/table/11300-be.md"), "utf8"));
  assert.ok(validate("frontmatter.object", own.data).ok, JSON.stringify(validate("frontmatter.object", own.data).errors));
  assert.deepEqual([own.data.id, own.data.title, own.data.country, own.data.links.localizations, own.data.countries], ["object/table/11300-be", 'Table 11300 "BE Only" (BE)', "BE", ["localization/be"], []]);
  assert.match(own.content, /An object of the \[BE localization\]\(\.\.\/\.\.\/localizations\/be\.md\), not part of W1\./);
  assert.match(be.content, /## Objects of its own\n\n1 objects only this country has\.\n\n- \[table\/11300 "BE Only"\]\(\.\.\/objects\/table\/11300-be\.md\)/);
  assert.ok(existsSync(join(contentDir, "objects/table/llms.txt")) && existsSync(join(contentDir, "localizations/llms.txt")));
  assert.deepEqual(validateContent(contentDir).errors, []);
  // a second render changes nothing; an object that leaves every snapshot loses its page
  assert.equal(renderCodePages(dataDir, contentDir).written, 0);
  writeText(join(contentDir, "objects/table/77.md"), "stale");
  assert.equal(renderCodePages(dataDir, contentDir).removed, 1);
});

// D72: version lists print as collapsed runs; three consecutive changes read "BC28-30", never "BC28, BC29, BC30"
test("object pages: changed and present majors print as collapsed runs (D72)", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-objruns-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const p = await loadParser();
  const src = (n: number) => `table 18 Customer\n{\n    fields { field(1; "No."; Code[20]) { } ${Array.from({ length: n }, (_, i) => `field(${i + 2}; F${i}; Integer) { }`).join(" ")} }\n}\ncodeunit 99 Same { }\n`;
  for (const [i, m] of ["27", "28", "29", "30"].entries())
    writeSnapshot(dataDir, extractSource(p, src(i), { version: m, country: "w1", layer: "base", app: "Base Application", file: "src/X.al" }), man(m, "w1", `c${m}`));
  refreshCodeDerived(dataDir, ["27", "28", "29", "30"]);
  renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  const t = matter(readFileSync(join(contentDir, "objects/table/18.md"), "utf8"));
  assert.deepEqual([t.data.present_in, t.data.changed_in], [["27", "28", "29", "30"], ["28", "29", "30"]]);
  assert.match(t.data.summary, /Present since at least BC27, still in BC30, changed in BC28-30\./);
  assert.match(t.content, /## Across versions\n\n- Present in: BC27-30\n- Changed \(declaration\) in: BC28-30\n/);
  const same = matter(readFileSync(join(contentDir, "objects/codeunit/99.md"), "utf8"));
  assert.match(same.content, /- Present in: BC27-30\n- Changed \(declaration\) in: none\n/);
});

// D65 tranche 1: a Subscription Billing slice: a table with every Explanation/Notes case, two pages on it that Learn
// names, the enum of one of its fields, an event with a doc comment
const SB = `table 18 Customer { fields { field(1; "No."; Code[20]) { } } }
table 8057 "Subscription Header"
{
    DataClassification = CustomerContent;
    fields
    {
        field(1; "No."; Code[20]) { ToolTip = 'Specifies the number of the subscription, e.g. %1.'; NotBlank = true; }
        field(2; "Customer No."; Code[20]) { Caption = 'Customer Number'; TableRelation = Customer; }
        field(3; Type; Enum "Service Object Type") { Tooltip = 'Specifies whether the subscription is for an item or a G/L account.'; }
        field(4; "Archived Lines exist"; Boolean) { FieldClass = FlowField; CalcFormula = exist("Subscription Header" where("No." = field("No."))); Editable = false; }
        field(5; Old; Text[50]) { ObsoleteState = Pending; ObsoleteTag = '29.0'; DataClassification = SystemMetadata; }
        field(6; Note; Text[50]) { Caption = 'Note'; }
        field(7; "Date Filter"; Date) { FieldClass = FlowFilter; }
        field(8; Kind; Option) { OptionMembers = A,B; OptionCaption = 'First,Second'; }
        field(9; "Bill-to No."; Code[20]) { TableRelation = Customer where("No." = filter('C*')); }
        field(10; "Entry No."; Integer) { AutoIncrement = true; }
    }
    /// <summary>Raised after the subscription is created.</summary>
    [IntegrationEvent(false, false)]
    local procedure OnAfterCreate() begin end;
}
enum 8000 "Service Object Type" { value(0; Item) { Caption = 'Article'; } value(1; "G/L Account") { } }
page 8059 "Service Objects" { Caption = 'Subscriptions'; PageType = List; SourceTable = "Subscription Header"; }
page 8060 "Service Object" { PageType = Card; SourceTable = "Subscription Header"; }
`;

test("object pages explain their fields, enum captions and event docs; tables inherit Learn and hubs through their pages (D65)", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-objpages-d65-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const p = await loadParser();
  writeSnapshot(dataDir, extractSource(p, SB, { version: "29", country: "w1", layer: "base", app: "Subscription Billing", file: "src/SB.al", docs: true }), man("29", "w1", "c29"));
  refreshCodeDerived(dataDir, ["29"]);
  const d = (n: number) => ({ id: `docs/learn/sb-${n}.md`, url: `https://learn/sb-${n}`, title: `SB ${n}` });
  writeJson(join(dataDir, "index/docs-objects.json"), { majors: ["29"], commits: {}, docs: 3, links: 4, by_doc: {}, by_object: { "page/8059": [d(1), d(2)], "page/8060": [d(2), d(3)] } });
  writeText(join(contentDir, "topics/sb.md"), `---\nid: topic/sb\ntype: topic\nlinks:\n  learn: ["https://learn/sb-1"]\n---\n`);
  writeText(join(contentDir, "topics/sb/contracts.md"), `---\nid: topic/sb/contracts\ntype: topic\nlinks:\n  learn: ["https://learn/sb-3"]\n---\n`);
  renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  const t = matter(readFileSync(join(contentDir, "objects/table/8057.md"), "utf8"));
  assert.ok(validate("frontmatter.object", t.data).ok);
  const row = (no: number) => t.content.split("\n").find((l) => l.startsWith(`| ${no} |`));
  assert.match(t.content, /\| No\. \| Name \| Type \| Explanation \| Notes \|/);
  assert.equal(row(1), "| 1 | No. | Code[20] | Specifies the number of the subscription, e.g. %1. | NotBlank |", "ToolTip verbatim, placeholders kept");
  assert.equal(row(2), '| 2 | Customer No. | Code[20] | Customer Number <small>caption</small> | TableRelation [Table 18 "Customer"](../table/18.md) |');
  assert.equal(row(3), '| 3 | Type | Enum "Service Object Type" | Specifies whether the subscription is for an item or a G/L account. | enum [Enum 8000 "Service Object Type"](../enum/8000.md) |', "Tooltip spelling counts");
  assert.equal(row(4), '| 4 | Archived Lines exist | Boolean | — | FlowField: exist("Subscription Header" where("No." = field("No."))); not editable |');
  assert.equal(row(5), "| 5 | Old | Text[50] | — | obsolete Pending 29.0; DataClassification SystemMetadata |");
  assert.equal(row(6), "| 6 | Note | Text[50] | — |  |", "a Caption equal to the name explains nothing");
  assert.equal(row(7), "| 7 | Date Filter | Date | — | FlowFilter |");
  assert.equal(row(8), "| 8 | Kind | Option | — | OptionCaption: First,Second |");
  assert.equal(row(9), `| 9 | Bill-to No. | Code[20] | — | TableRelation [Table 18 "Customer"](../table/18.md) (Customer where("No." = filter('C*'))) |`);
  assert.equal(row(10), "| 10 | Entry No. | Integer | — | AutoIncrement |");
  assert.match(t.content, /- `OnAfterCreate\(\)` \(integration\): Raised after the subscription is created\./);
  // inherited through the pages on the table: Learn links and hubs in frontmatter, one line in the body, evidence untouched
  assert.deepEqual(t.data.links.learn, ["https://learn/sb-1", "https://learn/sb-2", "https://learn/sb-3"]);
  assert.deepEqual(t.data.links.topics, ["topic/sb", "topic/sb/contracts"]);
  assert.deepEqual(t.data.evidence.map((e: any) => e.kind), ["code"]);
  assert.match(t.content, /Learn documents this table through its pages: \[Page 8059 "Service Objects"\]\(\.\.\/page\/8059\.md\) \(2 Learn pages\), \[Page 8060 "Service Object"\]\(\.\.\/page\/8060\.md\) \(2\)\./);
  const en = matter(readFileSync(join(contentDir, "objects/enum/8000.md"), "utf8"));
  assert.match(en.content, /\| Ordinal \| Name \| Caption \| Notes \|\n\|---\|---\|---\|---\|\n\| 0 \| Item \| Article \|  \|\n\| 1 \| G\/L Account \|  \|  \|/);
  const pg = matter(readFileSync(join(contentDir, "objects/page/8059.md"), "utf8"));
  assert.deepEqual([pg.data.caption, pg.data.links.learn, pg.data.links.topics], ["Subscriptions", ["https://learn/sb-1", "https://learn/sb-2"], ["topic/sb"]]);
  assert.equal(matter(readFileSync(join(contentDir, "objects/page/8060.md"), "utf8")).data.caption, undefined, "no caption when it equals the name or is absent");
});

// D65 tranche 4b: table fields explained through the page controls bound to them; Fields and Actions on page pages
const SB4 = `table 8057 "Subscription Header"
{
    fields
    {
        field(1; "No."; Code[20]) { }
        field(2; Description; Text[100]) { ToolTip = 'The table field says so itself.'; }
        field(3; "Item No."; Code[20]) { }
        field(4; Amount; Decimal) { Caption = 'Amount (LCY)'; }
        field(5; Fee; Decimal) { }
    }
}
table 18 Customer { fields { field(1; "No."; Code[20]) { } field(2; Name; Text[100]) { } } }
tableextension 8062 "Sub. Customer" extends Customer { fields { field(8000; "Subscription No."; Code[20]) { } field(8001; "Open Subscriptions"; Integer) { ToolTip = 'Specifies how many subscriptions are open.'; } } }
page 21 "Customer Card" { PageType = Card; SourceTable = Customer; layout { area(Content) { field(Name; Rec.Name) { } } } actions { area(Processing) { action(Post) { Caption = 'P&ost'; } } } }
report 8012 "Create Invoices" { }
`;

test("tables explain fields through bound page controls with the page named; page pages list their Fields and Actions (D65)", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-objpages-d65b-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const p = await loadParser();
  const pagesAl = readFileSync(join(process.cwd(), "tests/fixtures/al/pages.al"), "utf8");
  const ex = (pages: string) => [...extractSource(p, SB4, { version: "30", country: "w1", layer: "base", app: "Subscription Billing", file: "src/SB.al" }),
    ...extractSource(p, pages, { version: "30", country: "w1", layer: "base", app: "Subscription Billing", file: "src/Pages.al" })];
  writeSnapshot(dataDir, ex(pagesAl), man("30", "w1", "c30"));
  refreshCodeDerived(dataDir, ["30"]);
  renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  const t = matter(readFileSync(join(contentDir, "objects/table/8057.md"), "utf8"));
  const row = (md: string, no: number) => md.split("\n").find((l) => l.startsWith(`| ${no} |`));
  assert.match(t.content, /Explanation: the field's ToolTip in the code; without one, the ToolTip of a page control bound to the field \(marked via the page\)/);
  assert.equal(row(t.content, 1), '| 1 | No. | Code[20] | Specifies the number of the subscription. <small>via [Page 8060 "Service Object"](../page/8060.md)</small> |  |', "the Card's ToolTip, not the List's");
  assert.equal(row(t.content, 2), "| 2 | Description | Text[100] | The table field says so itself. |  |", "the field's own ToolTip comes first");
  assert.equal(row(t.content, 4), "| 4 | Amount | Decimal | Amount (LCY) <small>caption</small> |  |", "an expression binds nothing; the Caption is the last resort");
  const te = matter(readFileSync(join(contentDir, "objects/tableextension/8062.md"), "utf8"));
  assert.equal(row(te.content, 8000), '| 8000 | Subscription No. | Code[20] | Specifies the subscription of the customer. <small>via [Page extension 8061 "Sub. Customer Card"](../pageextension/8061.md)</small> |  |');

  const pg = matter(readFileSync(join(contentDir, "objects/page/8060.md"), "utf8"));
  assert.ok(validate("frontmatter.object", pg.data).ok, validate("frontmatter.object", pg.data).errors.join("; "));
  assert.deepEqual([pg.data.counts.controls, pg.data.counts.actions], [7, 3]);
  assert.match(pg.content, /· captioned "Subscription" ·/);
  assert.match(pg.content, /## Fields on this page\n\n[^\n]+\n\n\| Group \| Control \| Shows \| ToolTip \|\n\|---\|---\|---\|---\|\n/);
  const line = (md: string, start: string) => md.split("\n").find((l) => l.startsWith(start));
  assert.equal(line(pg.content, "| General | No. |"), "| General | No. | [No.](../table/8057.md#fields) | Specifies the number of the subscription. |");
  assert.equal(line(pg.content, "|  | Subscription Description |"), "|  | Subscription Description | [Description](../table/8057.md#fields) | Specifies a description of the subscription. |", "the group is printed once");
  assert.equal(line(pg.content, "|  | Item No."), "|  | Item No. <small>obsolete Pending 27.0; #if not CLEAN27</small> | [Item No.](../table/8057.md#fields) | Specifies the item. |");
  assert.equal(line(pg.content, "|  | Total |"), "|  | Total | `Rec.Amount + Rec.Fee` | — |");
  assert.equal(line(pg.content, "| Hints |"), "| Hints | Lines are billed monthly. | label | — |");
  assert.equal(line(pg.content, "| Content |"), "| Content | Subscription Lines | part Service Commitments | — |");
  assert.equal(line(pg.content, "| FactBoxes |"), "| FactBoxes | Chart | add-in Business Chart | — |");
  assert.match(pg.content, /## Actions\n\n\| Group \| Action \| ToolTip \| Runs \|\n\|---\|---\|---\|---\|\n/);
  assert.equal(line(pg.content, "| Processing |"), '| Processing | Create Invoice | Creates the invoice for the subscription. | [Report 8012 "Create Invoices"](../report/8012.md) |');
  assert.equal(line(pg.content, "| Navigate |"), '| Navigate | Subscriptions | Opens the list of subscriptions. | [Page 8059 "Service Objects"](../page/8059.md) |', "the & accelerator is stripped");
  assert.equal(line(pg.content, "|  | OldPost"), '|  | OldPost <small>obsolete Pending 28.0; #if not CLEAN28</small> | — | Codeunit "Sales-Post" |');
  const list = matter(readFileSync(join(contentDir, "objects/page/8059.md"), "utf8")).content;
  assert.equal(line(list, "|  | Status |"), "|  | Status | `Format(Rec.Status)` | — |");
  assert.equal(line(list, "| Activities | New Subscription |"), '| Activities | New Subscription | — | [Page 8060 "Service Object"](../page/8060.md) |');
  const ext = matter(readFileSync(join(contentDir, "objects/pageextension/8061.md"), "utf8")).content;
  assert.equal(line(ext, "| addafter(Name) |"), "| addafter(Name) | Subscription No. | [Subscription No.](../tableextension/8062.md#fields) | Specifies the subscription of the customer. |", "a field a tableextension adds links to that extension");
  assert.equal(line(ext, "| Subscriptions |"), "| Subscriptions | Open Subscriptions | [Open Subscriptions](../tableextension/8062.md#fields) | Specifies how many subscriptions are open. <small>from the table field</small> |");
  assert.equal(line(ext, "| modify(No.) |"), "| modify(No.) | No. | modifies `No.` | Specifies the customer number, also used on subscriptions. |");
  assert.equal(line(ext, "| modify(Post) |"), "| modify(Post) | Post | — | modifies `Post` |");
  const card21 = matter(readFileSync(join(contentDir, "objects/page/21.md"), "utf8")).content;
  assert.match(card21, /\| Processing \| Post \| — \|  \|/, "P&ost reads Post");
  assert.equal(matter(readFileSync(join(contentDir, "objects/report/8012.md"), "utf8")).content.includes("## Fields on this page"), false);
  assert.deepEqual(validateContent(contentDir).errors, []);

  // a layout-only change re-renders the page: the object hash ignores controls, the page's input_hash does not
  const hash0 = pg.data.generated.input_hash;
  writeSnapshot(dataDir, ex(pagesAl.replace("Specifies the number of the subscription.", "Specifies another number.")), man("30", "w1", "c30b"));
  refreshCodeDerived(dataDir, ["30"]);
  renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  const pg2 = matter(readFileSync(join(contentDir, "objects/page/8060.md"), "utf8"));
  assert.notEqual(pg2.data.generated.input_hash, hash0);
  assert.match(pg2.content, /\| General \| No\. \| \[No\.\]\(\.\.\/table\/8057\.md#fields\) \| Specifies another number\. \|/);
});

test("call graph sections (D67): Calls, Called by, Implements, Implemented by with counts, capped; none without calls.json", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-objcalls-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const p = await loadParser();
  const src29 = `codeunit 80 "Sales-Post" { }\ncodeunit 12 "Gen. Jnl.-Post Line" { }\ninterface "Price Calculation" { procedure CalcPrice() }\ncodeunit 7002 "Price Calculation - V16" implements "Price Calculation" { procedure CalcPrice() begin end; }\n`;
  const ex = (src: string, version: string) => extractSource(p, src, { version, country: "w1", layer: "base", app: "Base Application", file: "src/X.al" });
  writeSnapshot(dataDir, ex(`codeunit 80 "Sales-Post" { }\n`, "28"), man("28", "w1", "c28"));
  writeSnapshot(dataDir, ex(src29, "29"), man("29", "w1", "c29"));
  refreshCodeDerived(dataDir, ["28", "29"]);
  const callers = Array.from({ length: 52 }, (_, i) => ({ s: `codeunit/${9000 + i}`, t: "codeunit/80", k: "calls", n: 1, via: ["Run → PostSalesDoc"] }));
  const doc = {
    schema: "al-calls@1", major: "29", commit: "a".repeat(40), scope: { apps: true }, graphify: { ref: "b".repeat(40), version: "0.9.46.post1" },
    edges: [
      { s: "codeunit/7002", t: "interface/price calculation", k: "implements", n: 1, via: [] },
      { s: "codeunit/80", t: "codeunit/12", k: "calls", n: 7, via: ["PostLines → PostA", "PostLines → PostB", "PostLines → PostC", "PostLines → PostD", "PostLines → PostE"] },
      ...callers,
    ],
    unresolved: [], stats: { edges: 54 },
  };
  assert.deepEqual(validate("al-graph", doc).errors, []);
  writeJson(join(dataDir, "code/graph/29/calls.json"), doc);
  renderCodePages(dataDir, contentDir, new Date("2026-10-07T00:00:00Z"));
  const cu = readFileSync(join(contentDir, "objects/codeunit/80.md"), "utf8");
  const { data: fm, content } = matter(cu);
  assert.deepEqual([fm.relations.calls, fm.relations.called_by, fm.relations.implements], [1, 52, 0]);
  assert.match(content, /## Calls\n\nFrom the extracted call graph of BC29 [^\n]+\n\n- \[Codeunit 12 "Gen\. Jnl\.-Post Line"\]\(\.\.\/codeunit\/12\.md\) \(7 calls: `PostLines → PostA`, `PostLines → PostB`, `PostLines → PostC`, …\)\n/);
  assert.match(content, /## Called by\n\n(- codeunit\/9\d{3} \(1 call: `Run → PostSalesDoc`\)\n){50}- and 2 more: data\/code\/graph\/29\/calls\.json\n/);
  assert.ok(content.indexOf("## Called by") < content.indexOf("## Ask your agent"), "the sections come before the atlas block");
  assert.ok(content.includes('`bcatlas_resolve_node(object_type: "codeunit", object_name: "Sales-Post")`'));
  const v16 = matter(readFileSync(join(contentDir, "objects/codeunit/7002.md"), "utf8"));
  assert.match(v16.content, /## Implements\n\n- \[Interface "Price Calculation"\]\(\.\.\/interface\/price-calculation\.md\)\n/);
  const iface = matter(readFileSync(join(contentDir, "objects/interface/price-calculation.md"), "utf8"));
  assert.equal(iface.data.relations.implemented_by, 1);
  assert.match(iface.content, /## Implemented by\n\n- \[Codeunit 7002 "Price Calculation - V16"\]/);
  assert.deepEqual(validateContent(contentDir).errors, []);
  // no call graph for the page's major: the atlas block, no sections, no counts
  const { rmSync } = await import("node:fs");
  rmSync(join(dataDir, "code/graph"), { recursive: true });
  const bare = join(root, "content-bare");
  renderCodePages(dataDir, bare, new Date("2026-10-07T00:00:00Z"));
  const plain = matter(readFileSync(join(bare, "objects/codeunit/80.md"), "utf8"));
  assert.doesNotMatch(plain.content, /## Calls|## Called by|## Implements/);
  assert.match(plain.content, /## Ask your agent/);
  assert.equal(plain.data.relations.calls, undefined);
});
