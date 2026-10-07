import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import { validate } from "../../pipeline/lib/schema.js";
import type { StageFn } from "../../pipeline/orchestrator/execute.js";
import { bcappsCountries, codeExtracted, codeFetched, fullSnapshotRoot, jobFor, layerChain, readSnapshot, snapshotDir, type SourceCodeConfig } from "../../pipeline/code/job.js";
import { readJson } from "../../pipeline/lib/fsx.js";
import { extractSource, loadParser } from "../../pipeline/code/extract.js";

const al = (type: string, id: number, name: string, extra = "") => `${type} ${id} "${name}"\n{\n${extra}\n}\n`;
const BCAPPS: SourceCodeConfig = {
  w1: [{ app: "Base Application", path: "src/Layers/W1/BaseApp" }, { app: "System Application", path: "src/System Application/App" }],
  layers_root: "src/Layers", layer_app: "BaseApp", layers_config: "src/Layers/.config/layers_config.json", country_app: "Base Application", countries: "all", docs: true,
};
const versions = (code: Record<string, SourceCodeConfig>) => ({
  majors: { "29": { bcapps_branch: "releases/29.x", sandbox_branch: "w1-29", snapshot_source: "bcapps" }, "28": { sandbox_branch: "w1-28", snapshot_source: "sandbox-history" } },
  repos: { bcapps: "https://github.com/microsoft/BCApps", sandbox_history: "https://github.com/x/history" }, code,
});

/**
 * A BCApps-shaped checkout: W1 → DACH → DE, BE on W1; DE excludes one W1 file. `moved`: table 242 lives in the System
 * Application (standing in for Business Foundation) with an obsolete Moved copy in W1 and BE.
 */
function bcappsRepo(moved = false): string {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-bcapps-"));
  const L = (p: string) => join(dir, "src/Layers", p);
  writeJson(L(".config/layers_config.json"), { BaseApp: { W1: null, DACH: { baseLayer: "W1" }, DE: { baseLayer: "DACH" }, BE: { baseLayer: "W1" } } });
  writeJson(L("W1/BaseApp/app.json"), { version: "29.1.0.0" });
  writeText(L("W1/BaseApp/Customer.Table.al"), al("table", 18, "Customer", "fields { field(1; \"No.\"; Code[20]) { } }"));
  writeText(L("W1/BaseApp/Vendor.Table.al"), al("table", 23, "Vendor"));
  writeText(L("W1/BaseApp/Intrastat.Page.al"), al("page", 742, "Intrastat"));
  writeText(join(dir, "src/System Application/App/Helper.Codeunit.al"), al("codeunit", 1, "Helper"));
  writeText(L("DACH/BaseApp/Customer.Table.al"), al("table", 18, "Customer", "fields { field(1; \"No.\"; Code[20]) { } field(5000; \"DACH Field\"; Integer) { } }"));
  writeText(L("DE/BaseApp/DeOnly.Codeunit.al"), al("codeunit", 5000001, "DE Only"));
  writeText(L("DE/BaseApp/Vendor.Table.al"), al("table", 23, "Vendor")); // identical to W1: not an overlay
  writeJson(L("DE/.layer/excluded_view_files.json"), [".layer\\excluded_view_files.json", "BaseApp\\Intrastat.Page.al", "AlCosting\\X.al"]);
  writeText(L("BE/BaseApp/BeOnly.Report.al"), al("report", 11300, "BE Only"));
  // country extension apps (D58): DACH's is shared by DE through the chain; a test folder is never extracted
  const A = (p: string) => join(dir, "src/Apps", p);
  writeText(A("DACH/DachTax/app/DachTax.Codeunit.al"), al("codeunit", 5000100, "DACH Tax"));
  writeText(A("DE/DeReports/app/DeVat.Report.al"), al("report", 5000200, "DE VAT"));
  writeText(A("DE/DeReports/test/DeVat.Test.Codeunit.al"), al("codeunit", 5000299, "DE VAT Test"));
  writeText(A("BE/BeCoda/app/Coda.Table.al"), al("table", 11350, "CODA Statement"));
  writeText(A("BE/ContosoCoffeeDemoDatasetBE/app/Demo.Codeunit.al"), al("codeunit", 11399, "Create BE Demo Data"));
  if (moved) {
    const copy = (extra = "") => al("table", 242, "Source Code Setup", `ObsoleteState = Moved;\nfields { field(1; "Primary Key"; Code[10]) { } field(2; Sales; Code[10]) { } ${extra} }`);
    writeText(join(dir, "src/System Application/App/SourceCodeSetup.Table.al"), al("table", 242, "Source Code Setup", "fields { field(1; \"Primary Key\"; Code[10]) { } }"));
    writeText(L("W1/BaseApp/SourceCodeSetup.Table.al"), copy());
    writeText(L("BE/BaseApp/SourceCodeSetup.Table.al"), copy("field(11300; \"BE Code\"; Code[10]) { }"));
  }
  const g = (...a: string[]) => execFileSync("git", a, { cwd: dir, stdio: "pipe" });
  g("init", "-q"); g("add", "-A"); g("-c", "user.name=t", "-c", "user.email=t@e", "commit", "-q", "-m", "x");
  return dir;
}
const run = (h: unknown) => (h as { run: StageFn }).run;
const item = (source: string, major: string) => ({ id: `code/${source}/${major}`, pillar: "code", source, tier: "official", title: "t", url: "u", state: "discovered", stages: {}, attempts: 0, meta: { major } } as any);

test("only a major's snapshot source runs", () => {
  const v = versions({ bcapps: BCAPPS });
  assert.equal(jobFor(item("bcapps", "29"), v)?.branch, "releases/29.x");
  assert.equal(jobFor(item("sandbox-history", "29"), v), null, "29 comes from BCApps");
  assert.equal(jobFor(item("bcapps", "28"), v), null);
});

test("content hash ignores where an object was found", async () => {
  const p = await loadParser();
  const src = al("table", 23, "Vendor");
  const [a] = extractSource(p, src, { version: "28", country: "w1", layer: "base", file: "a.al" });
  const [b] = extractSource(p, src, { version: "29", country: "de", layer: "overlay", file: "b.al" });
  assert.equal(a.hash, b.hash);
});

test("layers: countries are the layers nobody builds on; chains run from W1", () => {
  const parents = new Map<string, string | null>([["W1", null], ["DACH", "W1"], ["DE", "DACH"], ["AT", "DACH"], ["BE", "W1"]]);
  assert.deepEqual(bcappsCountries(parents), ["at", "be", "de"]);
  assert.deepEqual(layerChain(parents, "DE"), ["W1", "DACH", "DE"]);
});

test("BCApps job: W1 in full, countries as overlays through their layer chain, shards without per-object commit", async () => {
  const repo = bcappsRepo();
  const dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-codedata-")), "data");
  const cacheDir = mkdtempSync(join(tmpdir(), "bcobs-cache-"));
  const checkouts: string[][] = [];
  // the "checkout" is the fixture repo itself: point the job's checkout dir at it
  const deps = { cacheDir, checkout: async (_url: string, _branch: string, paths: string[], dir: string) => { checkouts.push(paths); execFileSync("ln", ["-s", repo, dir]); return "abc"; } };
  execFileSync("mkdir", ["-p", join(cacheDir, "code")]);
  const it = item("bcapps", "29"); // the handlers read config/versions.json, where bcapps/29 has this fixture's shape
  await run(codeFetched(deps))(it, { dataDir } as any);
  assert.deepEqual(checkouts[0].slice(-5), ["src/Layers/*/BaseApp", "src/Layers/*/.layer", "src/Layers/.config", "src/Apps/W1/*/app", "src/Apps/*/*/app"]);
  const r = await run(codeExtracted(deps))(it, { dataDir } as any);
  const w1 = readSnapshot(dataDir, "29", "w1");
  assert.deepEqual(w1.map((o) => `${o.type}/${o.id}`).sort(), ["codeunit/1", "page/742", "table/18", "table/23"]);
  assert.ok(w1.every((o) => o.commit === null && o.build === null && validate("al-object", o).ok));
  const w1m = readJson<any>(join(snapshotDir(dataDir, "29", "w1"), "manifest.json"));
  assert.deepEqual([w1m.build, w1m.objects, w1m.layer], ["29.1.0.0", 4, "base"]);
  const de = readSnapshot(dataDir, "29", "de");
  assert.deepEqual(de.map((o) => `${o.type}/${o.id}:${o.layer}`).sort(),
    ["codeunit/5000001:overlay", "codeunit/5000100:overlay", "report/5000200:overlay", "table/18:overlay"],
    "DACH's Customer + DE's own + DACH's and DE's apps; the identical Vendor is not an overlay, the test app is not extracted");
  assert.equal(de.find((o) => o.id === 5000100)!.app, "DachTax", "an app keeps its folder name, like the W1 apps");
  const dem = readJson<any>(join(snapshotDir(dataDir, "29", "de"), "manifest.json"));
  assert.deepEqual([dem.chain, dem.added, dem.replaced, dem.absent], [["w1", "dach", "de"], 3, 1, ["page/742"]]);
  assert.deepEqual(dem.apps, ["Base Application", "DachTax", "DeReports"]);
  assert.deepEqual(readSnapshot(dataDir, "29", "be").map((o) => `${o.type}/${o.id}`).sort(), ["report/11300", "table/11350"]);
  assert.deepEqual(Object.keys((r as any).data.countries), ["be", "de"]);
});

test("BCApps job: an object shipped by two apps keeps both copies; a country copy is compared with its own app's copy", async () => {
  const repo = bcappsRepo(true);
  const dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-codedata-")), "data");
  const cacheDir = mkdtempSync(join(tmpdir(), "bcobs-cache-"));
  const deps = { cacheDir, checkout: async (_url: string, _branch: string, _paths: string[], dir: string) => { execFileSync("ln", ["-s", repo, dir]); return "abc"; } };
  execFileSync("mkdir", ["-p", join(cacheDir, "code")]);
  const it = item("bcapps", "29");
  await run(codeFetched(deps))(it, { dataDir } as any);
  await run(codeExtracted(deps))(it, { dataDir } as any);
  const copies = readSnapshot(dataDir, "29", "w1").filter((o) => o.type === "table" && o.id === 242);
  assert.deepEqual(copies.map((o) => `${o.app}:${o.fields.length}`), ["System Application:1", "Base Application:2"], "both copies, the live one first");
  const be = readSnapshot(dataDir, "29", "be").find((o) => o.id === 242)!;
  const bem = readJson<any>(join(snapshotDir(dataDir, "29", "be"), "manifest.json"));
  assert.equal(be.app, "Base Application");
  assert.deepEqual([bem.added, bem.replaced], [2, 1], "report 11300 and BE's CODA app table are new; table 242 replaces the Base Application copy");
});

test("an older major (config diff_only) leaves a skeleton in data and its full copy in the cache, no countries (D62)", async () => {
  // Code History shape: one complete branch, the apps at the top level
  const repo = mkdtempSync(join(tmpdir(), "bcobs-history-"));
  writeText(join(repo, "Base Application/Customer.Table.al"), al("table", 18, "Customer", "fields { field(1; \"No.\"; Code[20]) { } }"));
  writeText(join(repo, "System Application/Helper.Codeunit.al"), al("codeunit", 1, "Helper"));
  writeText(join(repo, "Business Foundation/NoSeries.Table.al"), al("table", 308, "No. Series"));
  const g = (...a: string[]) => execFileSync("git", a, { cwd: repo, stdio: "pipe" });
  g("init", "-q"); g("add", "-A"); g("-c", "user.name=t", "-c", "user.email=t@e", "commit", "-q", "-m", "x");
  const dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-codedata-")), "data");
  const cacheDir = mkdtempSync(join(tmpdir(), "bcobs-cache-"));
  const checkouts: string[] = [];
  const deps = { cacheDir, checkout: async (_url: string, branch: string, _p: string[], dir: string) => { checkouts.push(branch); execFileSync("ln", ["-s", repo, dir]); return "abc"; } };
  execFileSync("mkdir", ["-p", join(cacheDir, "code")]);
  const it = item("sandbox-history", "23"); // config/versions.json: BC23 from w1-23, diff_only
  assert.equal(jobFor(it)?.diffOnly, true);
  await run(codeFetched(deps))(it, { dataDir } as any);
  const r = await run(codeExtracted(deps))(it, { dataDir } as any);
  assert.equal((r as any).data.diff_only, true);
  assert.deepEqual(checkouts, ["w1-23"], "W1 only: the country branches are not checked out");
  const skel = readSnapshot(dataDir, "23", "w1");
  assert.deepEqual(skel.map((o) => `${o.type}/${o.id}`).sort(), ["codeunit/1", "table/18", "table/308"]);
  assert.ok(skel.every((o) => (o as any).fields === undefined && o.hash), "key, name, hash, obsolete: no members");
  assert.equal(readJson<any>(join(snapshotDir(dataDir, "23", "w1"), "manifest.json")).layer, "skeleton");
  const full = readSnapshot(fullSnapshotRoot(cacheDir), "23", "w1").find((o) => o.id === 18)!;
  assert.equal(full.fields.length, 1, "the full copy, for the version diff, is in the cache");
  for (const cc of ["be", "nl"]) assert.equal(existsSync(snapshotDir(dataDir, "23", cc)), false);
});
