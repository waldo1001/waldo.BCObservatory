import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { validate } from "../../pipeline/lib/schema.js";
import { EXTRACTOR_VERSION, extractSource, loadParser, type AlObject } from "../../pipeline/code/extract.js";
import { byObject, changedMember, countryDiff, DERIVED_VERSION, deprecations, refreshCodeDerived, timelines, versionDiff } from "../../pipeline/code/diff.js";
import { fullSnapshotRoot, isSkeleton, readSnapshot, skeletonOf, writeSnapshot } from "../../pipeline/code/job.js";

async function objs(src: string, version: string, country = "w1"): Promise<AlObject[]> {
  return extractSource(await loadParser(), src, { version, country, layer: country === "w1" ? "base" : "overlay", file: "x.al" });
}
const V28 = `table 18 Customer
{
    fields { field(1; "No."; Code[20]) { } field(2; Name; Text[100]) { Caption = 'Name'; } }
    keys { key(PK; "No.") { Clustered = true; } }
    procedure Old() begin end;
    [IntegrationEvent(false, false)]
    local procedure OnA() begin end;
}
codeunit 99 Gone { }
`;
const V29 = `table 18 Customer
{
    fields
    {
        field(1; "No."; Code[20]) { }
        field(2; Name; Text[100]) { Caption = 'Customer Name'; }
        field(3; Email; Text[80]) { }
#if not CLEAN31
        field(4; Fax; Text[30]) { ObsoleteState = Pending; ObsoleteTag = '29.0'; ObsoleteReason = 'no fax'; }
#endif
    }
    keys { key(PK; "No.") { Clustered = true; } }
    [Obsolete('use New', '29.0')]
    procedure Old() begin end;
    procedure New(Force: Boolean) begin end;
    [IntegrationEvent(false, false)]
    local procedure OnA() begin end;
    [IntegrationEvent(false, false)]
    local procedure OnB() begin end;
    trigger OnInsert() begin end;
}
codeunit 100 Fresh { }
`;
const ref = (version: string, country = "w1") => ({ version, country, commit: null });

test("version diff: added/removed objects, member detail by stable identity, events apart from procedures", async () => {
  const d = versionDiff(await objs(V28, "28"), await objs(V29, "29"), ref("28"), ref("29"));
  assert.ok(validate("al-diff", d).ok);
  assert.deepEqual(d.objects.map((o) => `${o.key}:${o.change}`), ["codeunit/99:removed", "codeunit/100:added", "table/18:changed"]);
  const t = d.objects.find((o) => o.key === "table/18")!;
  assert.deepEqual(t.fields!.map((f) => `${f.name}:${f.change}`), ["Name:changed", "Email:added", "Fax:added"]);
  assert.deepEqual(t.procedures!.map((p) => `${p.name}:${p.change}`), ["Old:changed", "New:added"]);
  assert.deepEqual(t.events!.map((p) => `${p.name}:${p.change}`), ["OnB:added"]);
  assert.deepEqual(t.triggers, { added: ["OnInsert"], removed: [] });
  assert.equal(t.keys, undefined, "unchanged keys are not listed");
  assert.deepEqual([d.summary.fields_added, d.summary.events_added, d.summary.procedures_added], [2, 1, 1]);
});

test("country diff: replaced W1 objects with detail, country-only objects added, dropped ones removed", async () => {
  const w1 = await objs(V28, "29");
  const be = await objs(`${V28.replace("Caption = 'Name'", "Caption = 'Naam'")}\ntable 11300 "BE Only" { }`, "29", "be");
  const overlay = be.filter((o) => o.id !== 99); // the country does not change codeunit 99
  const d = countryDiff(w1, overlay.filter((o) => o.id !== 18 || true), ["codeunit/99"], ref("29"), ref("29", "be"));
  const keys = d.objects.map((o) => `${o.key}:${o.change}`);
  assert.deepEqual(keys, ["codeunit/99:removed", "table/18:replaced", "table/11300:added"]);
  assert.deepEqual(d.objects.find((o) => o.key === "table/18")!.fields!.map((f) => f.name), ["Name"]);
});

test("country and version diffs pair objects by app when two W1 apps share a key (table 242 moved to Business Foundation)", async () => {
  const parser = await loadParser();
  const app = (src: string, version: string, appName: string, country = "w1") =>
    extractSource(parser, src, { version, country, layer: country === "w1" ? "base" : "overlay", app: appName, file: "x.al" });
  const bf = `table 242 "Source Code Setup" { fields { field(1; "Primary Key"; Code[10]) { } } }`;
  const moved = `table 242 "Source Code Setup" { ObsoleteState = Moved; fields { field(1; "Primary Key"; Code[10]) { } field(2; Sales; Code[10]) { } } }`;
  // Base Application last, so a key-only lookup would also land on it: the order must not matter
  const w1 = [...app(moved, "29", "Base Application"), ...app(bf, "29", "Business Foundation")];
  const be = app(moved.replace("field(2; Sales; Code[10]) { }", "field(2; Sales; Code[10]) { } field(11300; \"BE Code\"; Code[10]) { }"), "29", "Base Application", "be");
  const d = countryDiff(w1, be, [], ref("29"), ref("29", "be"));
  assert.deepEqual(d.objects[0].fields!.map((f) => `${f.change}:${f.name}`), ["added:BE Code"]);
  const w1next = [...app(moved.replace("Code[10]) { } }", "Code[20]) { } }"), "30", "Base Application"), ...app(bf, "30", "Business Foundation")];
  const v = versionDiff(w1, w1next, ref("29"), ref("30"));
  assert.deepEqual(v.objects.map((o) => `${o.key}:${o.change}:${(o.fields ?? []).map((f) => f.name).join(",")}`), ["table/242:changed:Sales"]);
});

test("timelines and the deprecation radar", async () => {
  const [a, b] = [await objs(V28, "28"), await objs(V29, "29")];
  const tl = timelines([{ version: "28", objects: a }, { version: "29", objects: b }]);
  assert.deepEqual(tl.get("table")!["18"], { name: "Customer", versions: ["28", "29"], introduced: "28", changed: ["29"], obsoleted: [], removed: null });
  assert.equal(tl.get("codeunit")!["99"].removed, "29");
  assert.equal(tl.get("codeunit")!["100"].introduced, "29");
  const dep = deprecations(b);
  assert.deepEqual(dep.map((x) => `${x.kind}:${x.member}:${x.tag}:${x.clean_version}`), ["field:Fax:29.0:31", "procedure:Old:29.0:null"]);
});

test("refresh writes diffs, timelines and radar once, and again only when a snapshot changes", async () => {
  const dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-derive-")), "data");
  const man = (major: string, cc: string, commit: string) => ({ major, country: cc, layer: (cc === "w1" ? "base" : "overlay") as "base" | "overlay", source: "bcapps", repo: "r", branch: "b", commit, build: null, apps: ["Base Application"], files: 1, parse_errors: 0, ...(cc === "w1" ? {} : { absent: [] }) });
  writeSnapshot(dataDir, await objs(V28, "28"), man("28", "w1", "c28"));
  writeSnapshot(dataDir, await objs(V29, "29"), man("29", "w1", "c29"));
  writeSnapshot(dataDir, (await objs(V29, "29", "be")).filter((o) => o.id === 100), man("29", "be", "c29be"));
  const r1 = refreshCodeDerived(dataDir, ["28", "29", "30"]);
  assert.deepEqual([r1.version_diffs, r1.country_diffs, r1.deprecations, r1.timelines], [1, 1, 2, 2]);
  const diff = JSON.parse(readFileSync(join(dataDir, "code/diffs/version/28__29.json"), "utf8"));
  assert.deepEqual([diff.from.commit, diff.to.commit, diff.inputs], ["c28", "c29", [DERIVED_VERSION, ["c28", "c29", EXTRACTOR_VERSION, EXTRACTOR_VERSION]]]);
  assert.equal(refreshCodeDerived(dataDir, ["28", "29"]).written, 0, "unchanged inputs: nothing rewritten");
});

test("an older major kept as a diff: skeleton in data, full copy in the cache, history reaching back (D62)", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-derive-old-"));
  const dataDir = join(root, "data"), cacheDir = join(root, "cache");
  const man = (major: string, layer: "base" | "skeleton", commit: string) => ({ major, country: "w1", layer, source: "sandbox-history", repo: "r", branch: "b", commit, build: null, apps: ["Base Application"], files: 1, parse_errors: 0 });
  const full28 = await objs(V28, "28");
  // 28 kept as a diff: the full copy in the cache, a skeleton in data/; 29 in full as usual
  writeSnapshot(fullSnapshotRoot(cacheDir), full28, man("28", "base", "c28"));
  writeSnapshot(dataDir, full28.map(skeletonOf), man("28", "skeleton", "c28"));
  writeSnapshot(dataDir, await objs(V29, "29"), man("29", "base", "c29"));
  assert.equal(isSkeleton(dataDir, "28"), true);
  assert.ok(readSnapshot(dataDir, "28", "w1").every((o) => (o as any).fields === undefined), "the skeleton carries no members");

  const r = refreshCodeDerived(dataDir, ["28", "29"], { cacheDir });
  assert.equal(r.version_diffs, 1);
  const diff = JSON.parse(readFileSync(join(dataDir, "code/diffs/version/28__29.json"), "utf8"));
  const customer = diff.objects.find((o: any) => o.key === "table/18");
  assert.ok(customer.fields.some((f: any) => f.name === "Email" && f.change === "added"), "member-level diff, from the cached full copy");
  assert.equal(r.deprecations, 1, "the radar reads only the full major");
  assert.ok(!existsSync(join(dataDir, "code/deprecations/28.json")) && !existsSync(join(dataDir, "code/relations/28.json")));
  const tl = JSON.parse(readFileSync(join(dataDir, "code/timelines/table.json"), "utf8"));
  assert.deepEqual(tl.versions, ["28", "29"], "the timeline reaches back to the skeleton");

  // a lost cache leaves the committed diff alone
  const before = readFileSync(join(dataDir, "code/diffs/version/28__29.json"), "utf8");
  refreshCodeDerived(dataDir, ["28", "29"], {});
  assert.equal(readFileSync(join(dataDir, "code/diffs/version/28__29.json"), "utf8"), before);
});

test("an older major with neither a diff nor a cached copy is skipped, not diffed from its skeleton", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-derive-old-"));
  const dataDir = join(root, "data");
  const man = (major: string, layer: "base" | "skeleton", commit: string) => ({ major, country: "w1", layer, source: "s", repo: "r", branch: "b", commit, build: null, apps: [], files: 1, parse_errors: 0 });
  writeSnapshot(dataDir, (await objs(V28, "28")).map(skeletonOf), man("28", "skeleton", "c28"));
  writeSnapshot(dataDir, await objs(V29, "29"), man("29", "base", "c29"));
  refreshCodeDerived(dataDir, ["28", "29"], { cacheDir: join(root, "no-cache") });
  assert.ok(!existsSync(join(dataDir, "code/diffs/version/28__29.json")));
});

test("a changed member keeps its signature and only what differs, property by property (D62)", () => {
  const from = { name: "Discount %", type: "Decimal", obsolete: null, clean: null, properties: { Caption: "Discount %", MaxValue: "100" } };
  const to = { name: "Discount %", type: "Decimal", obsolete: null, clean: null, properties: { AutoFormatType: "0", Caption: "Discount %", MaxValue: "100" } };
  const c = changedMember(from, to);
  assert.deepEqual(c.to, { name: "Discount %", type: "Decimal", obsolete: null, clean: null }, "the signature, no properties");
  assert.deepEqual(c.delta, { properties: { AutoFormatType: [null, "0"] } }, "only the property that changed");
  assert.deepEqual(changedMember({ type: "Text[30]", properties: {} }, { type: "Text[50]", properties: {} }).delta, { type: ["Text[30]", "Text[50]"] });
});

test("a diff is written as one JSON document with one object per line (D62)", () => {
  const text = byObject({ inputs: [1], schema: "al-diff@1", objects: [{ key: "table/18" }, { key: "table/23" }] });
  assert.deepEqual(JSON.parse(text), { inputs: [1], schema: "al-diff@1", objects: [{ key: "table/18" }, { key: "table/23" }] });
  assert.deepEqual(text.trim().split("\n"), ['{"inputs":[1],"schema":"al-diff@1","objects":[', '{"key":"table/18"},', '{"key":"table/23"}', "]}"]);
  assert.deepEqual(JSON.parse(byObject({ objects: [] })), { objects: [] });
});
