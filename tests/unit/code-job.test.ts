import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeJson, writeText } from "../../pipeline/lib/fsx.js";
import { validate } from "../../pipeline/lib/schema.js";
import type { StageFn } from "../../pipeline/orchestrator/execute.js";
import { bcappsCountries, codeExtracted, codeFetched, jobFor, layerChain, readSnapshot, snapshotDir, type SourceCodeConfig } from "../../pipeline/code/job.js";
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

/** A BCApps-shaped checkout: W1 → DACH → DE, BE on W1; DE excludes one W1 file. */
function bcappsRepo(): string {
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
  assert.deepEqual(checkouts[0].slice(-4), ["src/Layers/*/BaseApp", "src/Layers/*/.layer", "src/Layers/.config", "src/Apps/W1/*/app"]);
  const r = await run(codeExtracted(deps))(it, { dataDir } as any);
  const w1 = readSnapshot(dataDir, "29", "w1");
  assert.deepEqual(w1.map((o) => `${o.type}/${o.id}`).sort(), ["codeunit/1", "page/742", "table/18", "table/23"]);
  assert.ok(w1.every((o) => o.commit === null && o.build === null && validate("al-object", o).ok));
  const w1m = readJson<any>(join(snapshotDir(dataDir, "29", "w1"), "manifest.json"));
  assert.deepEqual([w1m.build, w1m.objects, w1m.layer], ["29.1.0.0", 4, "base"]);
  const de = readSnapshot(dataDir, "29", "de");
  assert.deepEqual(de.map((o) => `${o.type}/${o.id}:${o.layer}`).sort(), ["codeunit/5000001:overlay", "table/18:overlay"], "DACH's Customer + DE's own; the identical Vendor is not an overlay");
  const dem = readJson<any>(join(snapshotDir(dataDir, "29", "de"), "manifest.json"));
  assert.deepEqual([dem.chain, dem.added, dem.replaced, dem.absent], [["w1", "dach", "de"], 1, 1, ["page/742"]]);
  assert.deepEqual(readSnapshot(dataDir, "29", "be").map((o) => `${o.type}/${o.id}`), ["report/11300"]);
  assert.deepEqual(Object.keys((r as any).data.countries), ["be", "de"]);
});
