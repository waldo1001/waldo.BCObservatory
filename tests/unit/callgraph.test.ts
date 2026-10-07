/**
 * Call graph (D67, docs/specs/code-atlas.md 4.3 and 5). tests/fixtures/graphify/graph.json is a real graphify-al run
 * (fork @ 8ee3d6ba, `graphify update`, directed seed) on tests/fixtures/graphify/tree with the job's own
 * .graphifyignore plus `!/README.md`, then two hand edits the fork never produces for AL today: one cross-object call
 * set to AMBIGUOUS (SalesAmbiguousCaller), and one `calls` edge from the README's document node (a doc node at an
 * edge end). To regenerate after a pin bump: copy the tree, write graphifyIgnore(...) + "!/README.md", seed
 * graphify-out/graph.json with {"directed": true, ...}, run `graphify update <copy>`, re-apply the two edits.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { chmodSync, cpSync, existsSync, mkdtempSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import { extractSource, loadParser, type AlObject } from "../../pipeline/code/extract.js";
import { codeCheckoutDir, writeSnapshot, type CodeJob } from "../../pipeline/code/job.js";
import { callsPath, graphifyIgnore, graphKey, keyOfLabel, memberName, projectGraph, runCallGraph, seedDirected, streamJsonArrays, type Calls, type ObjectIndex } from "../../pipeline/code/callgraph.js";
import { callsIncoming, callsOutgoing, readCalls } from "../../pipeline/code/relations.js";
import { listFiles } from "../../pipeline/lib/fsx.js";
import { validate } from "../../pipeline/lib/schema.js";

const FIXTURE = join(import.meta.dirname, "..", "fixtures", "graphify");
const GRAPH = join(FIXTURE, "graph.json");
const W = "src/Layers/W1/BaseApp/Sales/";
const PIN = { repo: "https://github.com/StefanMaron/graphify-al", ref: "8ee3d6ba8dd018afdc5af08c20e17b2094349df6", version: "0.9.46.post1" };
const TEMPLATE = "*.md\n*.json\n";

/** The snapshot as the extractor would key it, with the three deliberate misfits of the fixture. */
const INDEX: ObjectIndex = new Map([
  ["codeunit/80", [`${W}SalesPost.Codeunit.al`]], ["codeunit/12", [`${W}GenJnlPostLine.Codeunit.al`]], ["codeunit/414", [`${W}ReleaseSalesDocument.Codeunit.al`]],
  ["table/36", [`${W}SalesHeader.Table.al`]], ["interface/price calculation", [`${W}PriceCalculation.Interface.al`]], ["codeunit/7002", [`${W}PriceCalcV16.Codeunit.al`]],
  ["codeunit/7003", [`${W}SalesSubscriber.Codeunit.al`]], ["codeunit/7005", [`${W}SalesAmbiguousCaller.Codeunit.al`]],
  ["codeunit/30161", ["src/Apps/W1/Shopify/app/src/ShpfyOrder.Codeunit.al"]],
  // file_mismatch: the snapshot has the object in another file than graphify saw
  ["codeunit/7004", ["src/Layers/W1/BaseApp/Elsewhere/SalesMismatch.Codeunit.al"]],
  // ambiguous: two copies (an object moving between apps), neither in graphify's file
  ["codeunit/242", ["src/Business Foundation/App/Other/MovedSetup.Codeunit.al", "src/Layers/W1/BaseApp/Moved/MovedSetup.Codeunit.al"]],
  // no_object: codeunit 130509 "Library - Sales" (a test library) is not in the snapshot at all
]);

test("labels and member names: the AL header gives the key, the member label the procedure name", () => {
  assert.equal(keyOfLabel('Codeunit 80 "Sales-Post"', "codeunit"), "codeunit/80");
  assert.equal(keyOfLabel('Interface "Price Calculation"', "interface"), "interface/price calculation");
  assert.equal(keyOfLabel("Codeunit 50100 MyCodeunit"), "codeunit/50100");
  assert.equal(keyOfLabel("TableExtension 50 \"Cust Ext\""), "tableextension/50");
  assert.equal(keyOfLabel("ShpfyOrder.Codeunit.al"), null);
  assert.equal(memberName(".PostSalesDoc()"), "PostSalesDoc");
  assert.equal(memberName('.CheckAndUpdate() of Codeunit 80 "Sales-Post"'), "CheckAndUpdate");
});

test("projection keeps exactly the accepted cross-object calls and implements, aggregated, every unresolved reason once", async () => {
  const p = await projectGraph(GRAPH, INDEX);
  assert.deepEqual(p.edges, [
    { s: "codeunit/30161", t: "codeunit/80", k: "calls", n: 1, via: ["ImportOrder → PostSalesDoc"] },
    { s: "codeunit/414", t: "codeunit/80", k: "calls", n: 1, via: ["PerformManualRelease → PostSalesDoc"] },
    { s: "codeunit/7002", t: "interface/price calculation", k: "implements", n: 1, via: [] },
    // seven distinct procedure pairs, five kept by name
    { s: "codeunit/80", t: "codeunit/12", k: "calls", n: 7, via: ["PostLines → PostA", "PostLines → PostB", "PostLines → PostC", "PostLines → PostD", "PostLines → PostE"] },
    // Codeunit.Run(Codeunit::"Release Sales Document") lands on the object itself
    { s: "codeunit/80", t: "codeunit/414", k: "calls", n: 2, via: ["PostSalesDoc → (object)", "PostSalesDoc → PerformManualRelease"] },
  ]);
  assert.deepEqual(p.unresolved, [
    { t: "codeunit/12", k: "calls", reason: "file_mismatch" },
    { t: "codeunit/12", k: "calls", reason: "no_label" },
    { s: "codeunit/80", k: "calls", reason: "ambiguous" },
    { s: "codeunit/80", k: "calls", reason: "external" },
    { s: "codeunit/80", k: "calls", reason: "no_object" },
  ]);
  for (const r of ["no_label", "no_object", "file_mismatch", "ambiguous", "external"]) assert.equal(p.stats[`unresolved_${r}`], 1, r);
  assert.equal(p.stats.dropped_intra, 6, "the EXTRACTED calls inside one object");
  assert.equal(p.stats.dropped_ambiguous, 1);
  assert.equal(p.stats.dropped_iface_fanout, 1, "interface dispatch fanned out to every implementer is a possible call, not an observed one");
  assert.equal(p.stats.rel_subscribes, 1, "subscribes is seen and ignored (it lives in the relations, D45)");
  assert.equal(p.stats.rel_relates_to, 1);
  assert.equal(p.stats.kept, 12);
});

test("streaming reader: every node and link, across chunk boundaries, strings with braces and escapes intact", async () => {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-stream-"));
  const f = join(dir, "g.json");
  const nodes = Array.from({ length: 3000 }, (_, i) => ({ id: `n${i}`, label: `x {[ "q" ] } \\ ${"é".repeat(i % 7)}` }));
  writeFileSync(f, JSON.stringify({ directed: true, graph: { nodes: "decoy" }, nodes, links: [{ source: "n1", target: "n2", relation: "calls" }], hyperedges: [] }, null, 2));
  const got: Record<string, unknown[]> = { nodes: [], links: [] };
  await streamJsonArrays(f, ["nodes", "links"], (k, x) => got[k].push(x));
  assert.deepEqual(got.nodes, nodes);
  assert.equal(got.links.length, 1);
  writeFileSync(f, '{"nodes": [{"id": "a"}');
  await assert.rejects(streamJsonArrays(f, ["nodes"], () => {}), /truncated/);
});

test(".graphifyignore: everything out, the W1 folders and the apps glob back in directory by directory, anchored", () => {
  const txt = graphifyIgnore(["src/Layers/W1/BaseApp", "src/System Application/App", "src/Apps/W1/*/app"], TEMPLATE);
  const lines = txt.split("\n").filter((l) => l && !l.startsWith("#"));
  assert.deepEqual(lines, [
    "*", "!/src/", "!/src/Layers/", "!/src/Layers/W1/", "!/src/Layers/W1/BaseApp/", "!/src/Layers/W1/BaseApp/**",
    "!/src/System Application/", "!/src/System Application/App/", "!/src/System Application/App/**",
    "!/src/Apps/", "!/src/Apps/W1/", "!/src/Apps/W1/*/", "!/src/Apps/W1/*/app/", "!/src/Apps/W1/*/app/**",
    "*.md", "*.json",
  ]);
  assert.ok(!txt.includes("DE"), "country layers never re-included");
  const real = readFileSync(join(import.meta.dirname, "..", "..", "config", "graphify.ignore"), "utf8");
  for (const ext of ["*.md", "*.png", "*.json", "*.js", "*.ps1"]) assert.ok(real.split("\n").includes(ext), ext);
  assert.ok(!real.split("\n").includes("*.al"));
  assert.notEqual(graphKey(PIN, { apps: true }, TEMPLATE), graphKey(PIN, { apps: false }, TEMPLATE), "the scope switch changes the key");
});

test("seedDirected: an absent or undirected graph.json gets a directed seed, a directed one is left alone", () => {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-seed-"));
  const g = join(dir, "graphify-out", "graph.json");
  assert.equal(seedDirected(g), true);
  assert.equal(JSON.parse(readFileSync(g, "utf8")).directed, true);
  assert.equal(seedDirected(g), false);
  writeFileSync(g, JSON.stringify({ directed: false, nodes: [] }, null, 2));
  assert.equal(seedDirected(g), true);
});

// ---------------------------------------------------------------------------------------------- the job

const JOB: CodeJob = {
  source: "bcapps", major: "29", repo: "https://github.com/microsoft/BCApps", branch: "releases/29.x", diffOnly: false,
  cfg: { w1: [{ app: "Base Application", path: "src/Layers/W1/BaseApp" }, { app: "System Application", path: "src/System Application/App" }, { app: "Business Foundation", path: "src/Business Foundation/App" }], apps: "src/Apps/W1/*/app", countries: "all", country_app: "Base Application", docs: false },
};
const gitIn = (dir: string, ...args: string[]) => execFileSync("git", args, { cwd: dir, encoding: "utf8" }).trim();
/** A cache with the fixture tree checked out at a commit, and a data dir whose W1 + apps snapshot is at that commit. */
async function world(snapshotCommit?: string) {
  const root = mkdtempSync(join(tmpdir(), "bcobs-callgraph-"));
  const cacheDir = join(root, "cache"), dataDir = join(root, "data");
  const dir = codeCheckoutDir(cacheDir, JOB);
  cpSync(join(FIXTURE, "tree"), dir, { recursive: true });
  gitIn(dir, "init", "-q"); gitIn(dir, "add", "-A");
  gitIn(dir, "-c", "user.name=t", "-c", "user.email=t@t", "commit", "-qm", "tree");
  const head = gitIn(dir, "rev-parse", "HEAD");
  const parser = await loadParser();
  const objs = (prefix: string, app: string) => listFiles(join(dir, prefix), ".al").flatMap((f) => extractSource(parser, readFileSync(f, "utf8"), { version: "29", country: "w1", layer: "base", app, file: relative(dir, f) }));
  const w1: AlObject[] = [...objs("src/Layers/W1", "Base Application"), ...objs("src/Business Foundation", "Business Foundation")]
    .map((o) => (o.id === 7004 ? { ...o, file: "src/Layers/W1/BaseApp/Elsewhere/SalesMismatch.Codeunit.al" } : o.id === 242 ? { ...o, file: "src/Business Foundation/App/Other/MovedSetup.Codeunit.al" } : o));
  const moved = w1.find((o) => o.id === 242)!;
  w1.push({ ...moved, app: "Base Application", file: "src/Layers/W1/BaseApp/Moved/MovedSetup.Codeunit.al" });
  const m = { source: "bcapps", repo: JOB.repo, branch: JOB.branch, commit: snapshotCommit ?? head, build: null, files: 1, parse_errors: 0 };
  writeSnapshot(dataDir, w1, { ...m, major: "29", country: "w1", layer: "base", apps: ["Base Application"] });
  writeSnapshot(dataDir, objs("src/Apps/W1", "Shopify"), { ...m, major: "29", country: "apps", layer: "base", apps: ["Shopify"] });
  // a fake graphify: writes the fixture where the real one would, and records its arguments
  const bin = join(root, "graphify");
  writeFileSync(bin, `#!/bin/sh\necho "$@" >> "${join(root, "calls.log")}"\n[ "$1" = update ] || exit 2\nmkdir -p "$2/graphify-out" && cp "${GRAPH}" "$2/graphify-out/graph.json"\n`);
  chmodSync(bin, 0o755);
  const runs = () => (existsSync(join(root, "calls.log")) ? readFileSync(join(root, "calls.log"), "utf8").trim().split("\n").length : 0);
  return { root, cacheDir, dataDir, dir, head, bin, runs, deps: { cacheDir, graphifyBin: bin, timeBin: null, pin: PIN, config: { apps: true }, template: TEMPLATE } };
}

test("runCallGraph: writes calls.json (compact, one edge per line, schema-valid, allowlist only) and manifest.json; a rerun writes nothing", async () => {
  const w = await world();
  const r = await runCallGraph(JOB, w.dataDir, w.deps);
  assert.equal(r.written, true);
  assert.equal(r.edges, 5);
  assert.equal(w.runs(), 1);
  const text = readFileSync(callsPath(w.dataDir, "29"), "utf8");
  const doc = JSON.parse(text) as Calls;
  assert.deepEqual(validate("al-graph", doc).errors, []);
  assert.equal(doc.commit, w.head);
  assert.deepEqual(doc.graphify, { ref: PIN.ref, version: PIN.version });
  assert.equal(text.split("\n").filter((l) => l.startsWith('{"s":')).length, 5, "one edge per line");
  for (const e of doc.edges) assert.deepEqual(Object.keys(e).sort(), ["k", "n", "s", "t", "via"]);
  for (const banned of ["source_location", "summary", "content", "snippet", '"label"', "source_file", "Sales-Post", "graphify-out"]) assert.ok(!text.includes(banned), banned);
  const ignore = readFileSync(join(w.dir, ".graphifyignore"), "utf8");
  assert.match(ignore, /^!\/src\/Apps\/W1\/\*\/app\/\*\*$/m);
  assert.match(ignore, /^!\/src\/Business Foundation\/App\/\*\*$/m);
  const man = JSON.parse(readFileSync(join(w.dataDir, "code/graph/29/manifest.json"), "utf8"));
  assert.equal(man.graph_json_bytes, statSync(GRAPH).size);
  assert.equal(man.edges, 5);
  assert.equal(man.max_rss_bytes, null, "no /usr/bin/time in the test");
  const again = await runCallGraph(JOB, w.dataDir, w.deps);
  assert.equal(again.written, false);
  assert.equal(again.skipped, "unchanged");
  assert.equal(w.runs(), 1, "same inputs: graphify does not run again");
  const off = await runCallGraph(JOB, w.dataDir, { ...w.deps, config: { apps: false } });
  assert.equal(off.written, true, "the scope is an input");
  assert.doesNotMatch(readFileSync(join(w.dir, ".graphifyignore"), "utf8"), /src\/Apps/);
});

test("runCallGraph: a checkout that is not at the snapshot commit is skipped with a logged reason; no graphify run", async () => {
  const w = await world("0".repeat(40));
  const r = await runCallGraph(JOB, w.dataDir, w.deps);
  assert.equal(r.skipped, "commit_mismatch");
  assert.equal(r.written, false);
  assert.equal(w.runs(), 0);
  assert.equal(existsSync(callsPath(w.dataDir, "29")), false);
});

test("runCallGraph: the timeout kills graphify and fails the item; a missing binary holds it", async () => {
  const w = await world();
  const slow = join(w.root, "slow-graphify");
  writeFileSync(slow, "#!/bin/sh\nsleep 30\n");
  chmodSync(slow, 0o755);
  const t0 = Date.now();
  await assert.rejects(runCallGraph(JOB, w.dataDir, { ...w.deps, graphifyBin: slow, timeoutMs: 300 }), /timed out after .* \(killed\)/);
  assert.ok(Date.now() - t0 < 10_000, "killed, not waited for");
  await assert.rejects(runCallGraph(JOB, w.dataDir, { ...w.deps, graphifyBin: join(w.root, "nope") }), (e: Error) => e.name === "StageHold" && /not installed/.test(e.message));
});

test("readCalls and the incoming / outgoing maps", async () => {
  const w = await world();
  assert.equal(readCalls(w.dataDir, "29"), null);
  await runCallGraph(JOB, w.dataDir, w.deps);
  const c = readCalls(w.dataDir, "29")!;
  const inc = callsIncoming(c), out = callsOutgoing(c);
  assert.deepEqual(inc.get("codeunit/80")!.map((e) => e.s), ["codeunit/30161", "codeunit/414"]);
  assert.deepEqual(out.get("codeunit/80")!.map((e) => `${e.t}:${e.n}`), ["codeunit/12:7", "codeunit/414:2"]);
  assert.deepEqual(inc.get("interface/price calculation")!.map((e) => `${e.s}:${e.k}`), ["codeunit/7002:implements"]);
});
