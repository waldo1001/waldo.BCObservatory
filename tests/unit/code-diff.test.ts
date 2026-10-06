import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { validate } from "../../pipeline/lib/schema.js";
import { extractSource, loadParser, type AlObject } from "../../pipeline/code/extract.js";
import { countryDiff, deprecations, refreshCodeDerived, timelines, versionDiff } from "../../pipeline/code/diff.js";
import { writeSnapshot } from "../../pipeline/code/job.js";

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
  assert.deepEqual([diff.from.commit, diff.to.commit, diff.inputs], ["c28", "c29", [2, ["c28", "c29", "1", "1"]]]);
  assert.equal(refreshCodeDerived(dataDir, ["28", "29"]).written, 0, "unchanged inputs: nothing rewritten");
});
