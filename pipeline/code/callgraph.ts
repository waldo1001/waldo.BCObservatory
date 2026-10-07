/**
 * Call graph (D67, docs/specs/code-atlas.md 4.3): the code pillar's `linked` stage runs the pinned graphify-al fork
 * (config/tooling.json `graphify_al`) on the snapshot checkout the `fetched` stage keeps in the cache, and projects its
 * graph.json onto our object keys: cross-object `calls` and `implements` edges only, aggregated per (source object,
 * target object, kind) with the number of distinct (caller procedure, callee procedure) pairs and up to VIA_KEPT of
 * them by name. Written to data/code/graph/<major>/calls.json (`al-calls@1`, one edge per line) and manifest.json.
 *
 * What is kept (D29: nothing guessed). graphify-al marks every cross-object call INFERRED: the fork's resolver
 * (`_resolve_al_facts`) resolves a call through the variable's declared type (`MyCdu.DoThing()` with
 * `MyCdu: Codeunit "X"`), through `Codeunit.Run(Codeunit::"X")` / `Page.Run` / `Report.Run`, or through a page's
 * usercontrol, and tags all of those `context: al_calls`; only calls inside one file are EXTRACTED. Those `al_calls`
 * edges are exact by declaration, so they are kept. Interface dispatch (`al_iface_calls`) fans one call out to every
 * implementer: a possible call, not an observed one, so it is counted and dropped, as is any other INFERRED or
 * AMBIGUOUS edge. `subscribes`, `extends`, `relates_to` ... live in the relations already (D45) and are ignored.
 *
 * Joining (decision 5): a graphify object node's label is the AL header (`Codeunit 80 "Sales-Post"`), so it gives
 * `type/id` (or `type/<lower-cased name>` for id-less types); the node's `source_file` must equal the snapshot
 * object's `file`. A procedure node is joined through its owning object (the `method` / `contains` edge, else the one
 * object of its file). Node ids are never parsed. No label, summary, source_location or any other node text leaves
 * the cache: the output is our keys, kinds, counts and procedure names (metadata the extractor already publishes).
 *
 * Memory: graph.json is read with a streaming scanner (it may pass 500 MB); only a slim record per node and the
 * calls / implements / method / contains edges (node ids) are held.
 */
import { spawn } from "node:child_process";
import { closeSync, createReadStream, existsSync, openSync, readSync, statSync } from "node:fs";
import { delimiter, join, resolve } from "node:path";
import { loadConfig } from "../lib/config.js";
import { ensureDir, exists, readJson, readText, writeJson, writeText } from "../lib/fsx.js";
import { git } from "../lib/git.js";
import { logger } from "../lib/log.js";
import type { ManifestItem } from "../lib/manifest.js";
import { CACHE_DIR, CONFIG_DIR } from "../lib/paths.js";
import { sha256, shortHash } from "../lib/text.js";
import { validateOrThrow } from "../lib/schema.js";
import { StageHold, type StageHandler } from "../orchestrator/execute.js";
import { inputsRecorded, writeIfInputsChanged } from "./diff.js";
import { candidatePaths, codeCheckoutDir, iterSnapshot, jobFor, resolveApps, snapshotDir, type CodeJob, type SnapshotManifest } from "./job.js";

const log = logger("callgraph");
/** Bump when the projection changes: every snapshot item goes back to `linked` on the next ingest. */
export const CALLGRAPH_VERSION = "1";
export const VIA_KEPT = 5;
export const VIA_MAX_CHARS = 200;
export const UNRESOLVED_KEPT = 3000;
export const TIMEOUT_MS = 60 * 60 * 1000;
/** INFERRED contexts kept as exact (resolved by declared type or by `Object::"Name"`); everything else INFERRED is dropped. */
export const KEPT_INFERRED = new Set(["al_calls"]);
const KINDS = new Set(["calls", "implements"]);

export type CallKind = "calls" | "implements";
export type UnresolvedReason = "no_label" | "no_object" | "file_mismatch" | "ambiguous" | "external";
export interface CallEdge { s: string; t: string; k: CallKind; n: number; via: string[] }
export interface CallUnresolved { s?: string; t?: string; k: CallKind; reason: UnresolvedReason }
export interface Calls {
  inputs?: unknown;
  schema: "al-calls@1"; major: string; commit: string;
  scope: { apps: boolean };
  graphify: { ref: string; version: string | null };
  edges: CallEdge[]; unresolved: CallUnresolved[]; stats: Record<string, number>;
}
export interface CallGraphConfig { apps: boolean }
export interface GraphifyPin { repo: string; ref: string; version?: string }

export const callsPath = (dataDir: string, major: string) => resolve(dataDir, "code", "graph", major, "calls.json");
export const callsManifestPath = (dataDir: string, major: string) => resolve(dataDir, "code", "graph", major, "manifest.json");
export const callGraphConfig = (): CallGraphConfig => ({ apps: true, ...(loadConfig<{ callgraph?: Partial<CallGraphConfig> }>("versions").callgraph ?? {}) });
export const graphifyPin = (): GraphifyPin => loadConfig<{ graphify_al: GraphifyPin }>("tooling").graphify_al;
/** The static part of .graphifyignore: non-AL files under the kept folders (config/graphify.ignore). */
export const ignoreTemplate = () => readText(resolve(CONFIG_DIR, "graphify.ignore"));
/** What decides whether a published snapshot item must run `linked` again (ingest compares it, D67). */
export function graphKey(pin = graphifyPin(), cfg = callGraphConfig(), template = ignoreTemplate()): string {
  return `${CALLGRAPH_VERSION}:${pin.ref.slice(0, 12)}:${cfg.apps ? "apps" : "w1"}:${shortHash(template, 8)}`;
}

// ---------------------------------------------------------------------------------------------- scope

/**
 * The .graphifyignore of a checkout: ignore everything, re-include the W1 app folders (and, with `apps`, every
 * first-party app folder of the `apps` glob) directory by directory, since graphify follows gitignore's rule that a
 * file under an excluded directory cannot be re-included; then the static rules (non-AL files). Every re-include is
 * anchored (`/src/...`), so a nested folder of the same name elsewhere is not pulled back in. Country layers stay out:
 * their objects share W1's ids.
 */
export function graphifyIgnore(folders: string[], template: string): string {
  const lines = ["# written by the call graph job (pipeline/code/callgraph.ts) before every run; do not edit", "*"];
  const seen = new Set<string>();
  for (const f of folders) {
    const parts = f.replace(/^\/+|\/+$/g, "").split("/");
    for (let i = 1; i <= parts.length; i++) {
      const dir = `!/${parts.slice(0, i).join("/")}/`;
      if (!seen.has(dir)) { seen.add(dir); lines.push(dir); }
    }
    lines.push(`!/${parts.join("/")}/**`);
  }
  return `${lines.join("\n")}\n\n${template.trim()}\n`;
}
/** The folders a job's graph covers: the W1 apps that exist in the checkout, plus the `apps` glob when enabled. */
export function graphFolders(root: string, job: Pick<CodeJob, "cfg">, cfg: CallGraphConfig): string[] {
  const w1 = existsSync(root) ? resolveApps(root, job.cfg.w1).map((a) => a.path) : job.cfg.w1.map((a) => candidatePaths(a)[0]);
  return [...w1, ...(cfg.apps && job.cfg.apps ? [job.cfg.apps] : [])];
}

// ---------------------------------------------------------------------------------------------- streaming read

/**
 * Stream the elements of top-level arrays (`nodes`, `links`) of a JSON document without loading it: a character
 * scanner that tracks depth and strings and hands each array element (an object) to JSON.parse on its own.
 */
export async function streamJsonArrays(path: string, keys: string[], onItem: (key: string, item: Record<string, unknown>) => void): Promise<void> {
  const want = new Set(keys);
  let depth = 0, inStr = false, esc = false;
  let keyOn = false, keyBuf = "", lastKey: string | null = null;
  let arrKey: string | null = null, inItem = false, itemBuf = "";
  for await (const chunk of createReadStream(path, { encoding: "utf8", highWaterMark: 1 << 20 })) {
    const s = chunk as string;
    let itemStart = 0, keyStart = 0;
    for (let i = 0; i < s.length; i++) {
      const c = s.charCodeAt(i);
      if (inStr) {
        if (esc) esc = false;
        else if (c === 92) esc = true;
        else if (c === 34) { inStr = false; if (keyOn) { lastKey = keyBuf + s.slice(keyStart, i); keyOn = false; keyBuf = ""; } }
        continue;
      }
      if (c === 34) { inStr = true; if (depth === 1) { keyOn = true; keyStart = i + 1; keyBuf = ""; } continue; }
      if (c === 123 || c === 91) {
        depth++;
        if (c === 91 && depth === 2) arrKey = lastKey !== null && want.has(lastKey) ? lastKey : null;
        else if (c === 123 && depth === 3 && arrKey) { inItem = true; itemStart = i; itemBuf = ""; }
        continue;
      }
      if (c === 125 || c === 93) {
        depth--;
        if (c === 125 && depth === 2 && inItem) {
          const text = itemBuf + s.slice(itemStart, i + 1);
          inItem = false; itemBuf = "";
          onItem(arrKey!, JSON.parse(text) as Record<string, unknown>);
        } else if (c === 93 && depth === 1) arrKey = null;
      }
    }
    if (inItem) itemBuf += s.slice(itemStart);
    if (keyOn) keyBuf += s.slice(keyStart);
  }
  if (depth !== 0 || inStr) throw new Error(`${path}: truncated JSON (depth ${depth})`);
}

// ---------------------------------------------------------------------------------------------- projection

/** Snapshot objects of a major by key: the file of each copy (a key can ship twice while an object moves apps). */
export type ObjectIndex = Map<string, string[]>;
export function objectIndex(dataDir: string, major: string): ObjectIndex {
  const idx: ObjectIndex = new Map();
  for (const part of ["w1", "apps"]) {
    if (!exists(join(snapshotDir(dataDir, major, part), "manifest.json"))) continue;
    for (const o of iterSnapshot(dataDir, major, part)) {
      const k = `${o.type}/${o.id ?? o.name.toLowerCase()}`;
      idx.set(k, [...(idx.get(k) ?? []), o.file]);
    }
  }
  return idx;
}

const HEADER = /^([A-Za-z]+)(?: (\d+))? (?:"(.+)"|(\S+))$/;
/** `Codeunit 80 "Sales-Post"` -> codeunit/80; `Interface "Price Calculation"` -> interface/price calculation. */
export function keyOfLabel(label: string, type?: unknown): string | null {
  const m = HEADER.exec(label.trim());
  if (!m) return null;
  const t = (typeof type === "string" && type ? type : m[1]).toLowerCase();
  return m[2] ? `${t}/${m[2]}` : `${t}/${(m[3] ?? m[4]).toLowerCase()}`;
}
/** `.PostSalesDoc()` (or `.PostSalesDoc() of Codeunit 80 "Sales-Post"`) -> PostSalesDoc. */
export const memberName = (label: string) => label.replace(/^\./, "").replace(/\(\)(?: of .*)?$/, "").replace(/^"|"$/g, "");

type Slim =
  | { k: "object"; res: string | UnresolvedReason; file: string }
  | { k: "member"; name: string; file: string }
  | { k: "external" }
  | { k: "other" };
interface RawEdge { s: string; t: string; rel: CallKind }
export interface Projection { edges: CallEdge[]; unresolved: CallUnresolved[]; stats: Record<string, number> }

/** Project a graphify graph.json onto object keys (see the header). */
export async function projectGraph(graphPath: string, index: ObjectIndex): Promise<Projection> {
  const nodes = new Map<string, Slim>();
  const objectsInFile = new Map<string, string[]>();
  const ownerPairs: [string, string][] = [];
  const raw: RawEdge[] = [];
  const stats: Record<string, number> = { nodes: 0, links: 0, kept: 0, dropped_intra: 0, dropped_inferred: 0, dropped_ambiguous: 0, dropped_iface_fanout: 0 };
  const bump = (k: string, n = 1) => { stats[k] = (stats[k] ?? 0) + n; };
  const resolveObject = (key: string | null, file: string): string | UnresolvedReason => {
    if (!key) return "no_label";
    const files = index.get(key);
    if (!files?.length) return "no_object";
    const hits = files.filter((f) => f === file);
    if (hits.length) return key;
    return files.length === 1 ? "file_mismatch" : "ambiguous";
  };
  await streamJsonArrays(graphPath, ["nodes", "links"], (arr, x) => {
    if (arr === "nodes") {
      stats.nodes++;
      const id = String(x.id), label = String(x.label ?? ""), file = String(x.source_file ?? "");
      if (x.file_type === "concept" || (!file && x.al_object_type)) { nodes.set(id, { k: "external" }); return; }
      if (x.al_object_type && file) {
        nodes.set(id, { k: "object", res: resolveObject(keyOfLabel(label, x.al_object_type), file), file });
        objectsInFile.set(file, [...(objectsInFile.get(file) ?? []), id]);
        return;
      }
      if (label.startsWith(".") && file) { nodes.set(id, { k: "member", name: memberName(label), file }); return; }
      nodes.set(id, { k: "other" });
      return;
    }
    stats.links++;
    const rel = String(x.relation ?? "");
    bump(`rel_${rel}`);
    const s = String(x.source), t = String(x.target);
    if (rel === "method" || rel === "contains") { ownerPairs.push([s, t]); return; }
    if (!KINDS.has(rel)) return;
    const conf = String(x.confidence ?? "");
    if (conf === "AMBIGUOUS") { bump("dropped_ambiguous"); return; }
    if (conf === "INFERRED" && x.context === "al_iface_calls") { bump("dropped_iface_fanout"); return; }
    if (conf !== "EXTRACTED" && !(conf === "INFERRED" && KEPT_INFERRED.has(String(x.context ?? "")))) { bump("dropped_inferred"); return; }
    raw.push({ s, t, rel: rel as CallKind });
  });
  // a procedure's object: the `method` / `contains` edge from an object node, else the only object of its file
  const owner = new Map<string, string>();
  for (const [s, t] of ownerPairs) if (nodes.get(s)?.k === "object" && nodes.get(t)?.k === "member" && !owner.has(t)) owner.set(t, s);
  const end = (id: string): { obj: string | UnresolvedReason; proc: string | null } => {
    const n = nodes.get(id);
    if (!n || n.k === "other") return { obj: "no_label", proc: null };
    if (n.k === "external") return { obj: "external", proc: null };
    if (n.k === "object") return { obj: n.res, proc: null };
    const o = owner.get(id) ?? (objectsInFile.get(n.file)?.length === 1 ? objectsInFile.get(n.file)![0] : null);
    const on = o ? nodes.get(o) : null;
    return { obj: on?.k === "object" ? on.res : "no_label", proc: n.name };
  };
  const isKey = (x: string) => x.includes("/");
  const agg = new Map<string, { s: string; t: string; k: CallKind; pairs: Set<string> }>();
  const unresolved: CallUnresolved[] = [];
  for (const e of raw) {
    const a = end(e.s), b = end(e.t);
    if (!isKey(a.obj) || !isKey(b.obj)) {
      const reason = (!isKey(a.obj) ? a.obj : b.obj) as UnresolvedReason;
      bump(`unresolved_${reason}`);
      if (unresolved.length < UNRESOLVED_KEPT) unresolved.push({ ...(isKey(a.obj) ? { s: a.obj } : {}), ...(isKey(b.obj) ? { t: b.obj } : {}), k: e.rel, reason });
      continue;
    }
    if (a.obj === b.obj) { bump("dropped_intra"); continue; }
    bump("kept");
    const id = `${a.obj}|${b.obj}|${e.rel}`;
    let g = agg.get(id);
    if (!g) agg.set(id, (g = { s: a.obj, t: b.obj, k: e.rel, pairs: new Set() }));
    if (e.rel === "calls") g.pairs.add(`${a.proc ?? "(object)"} → ${b.proc ?? "(object)"}`.slice(0, VIA_MAX_CHARS));
  }
  const edges: CallEdge[] = [...agg.values()].map((g) => {
    const via = [...g.pairs].sort((x, y) => x.localeCompare(y));
    return { s: g.s, t: g.t, k: g.k, n: Math.max(1, via.length), via: via.slice(0, VIA_KEPT) };
  }).sort((x, y) => x.s.localeCompare(y.s) || x.t.localeCompare(y.t) || x.k.localeCompare(y.k));
  unresolved.sort((x, y) => (x.s ?? "").localeCompare(y.s ?? "") || (x.t ?? "").localeCompare(y.t ?? "") || x.reason.localeCompare(y.reason));
  stats.edges = edges.length;
  stats.calls = edges.filter((e) => e.k === "calls").length;
  stats.implements = edges.filter((e) => e.k === "implements").length;
  return { edges, unresolved, stats: Object.fromEntries(Object.entries(stats).sort(([x], [y]) => x.localeCompare(y))) };
}

// ---------------------------------------------------------------------------------------------- the run

export interface CallGraphDeps {
  cacheDir: string;
  /** `graphify` (the uv tool shim on PATH, /Users/bcobs/.local/bin on the Mini); tests pass a fake. */
  graphifyBin?: string;
  /** `/usr/bin/time` for max RSS (macOS `-l`); null = not measured. */
  timeBin?: string | null;
  timeoutMs?: number;
  pin?: GraphifyPin;
  config?: CallGraphConfig;
  template?: string;
}
export interface CallGraphRun {
  major: string; written: boolean; edges: number; unresolved: number; ms: number;
  skipped?: "commit_mismatch" | "unchanged"; key: string;
}

/** Spawn graphify with a timeout that kills it; resolves with stderr (for /usr/bin/time) or rejects. */
function runGraphify(bin: string, dir: string, timeBin: string | null, timeoutMs: number): Promise<{ stderr: string }> {
  const args = [...(timeBin ? ["-l", "nice", "-n", "10", bin] : ["-n", "10", bin]), "update", dir];
  const cmd = timeBin ?? "nice";
  return new Promise((ok, fail) => {
    // its own process group: a timeout kills graphify and any worker it started, not only the `nice` / `time` wrapper
    const child = spawn(cmd, args, { cwd: dir, detached: true, env: { ...process.env, GRAPHIFY_MAX_GRAPH_BYTES: process.env.GRAPHIFY_MAX_GRAPH_BYTES ?? "2GB" }, stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    child.stderr.on("data", (d: Buffer) => { stderr = (stderr + d.toString("utf8")).slice(-20_000); });
    let timedOut = false;
    const killGroup = (sig: NodeJS.Signals) => { try { process.kill(-child.pid!, sig); } catch { /* already gone */ } };
    const timer = setTimeout(() => { timedOut = true; killGroup("SIGTERM"); setTimeout(() => killGroup("SIGKILL"), 5000).unref(); }, timeoutMs);
    child.on("error", (e) => { clearTimeout(timer); fail(e); });
    child.on("close", (code, signal) => {
      clearTimeout(timer);
      if (timedOut) fail(new Error(`graphify update timed out after ${Math.round(timeoutMs / 60000)} min (killed)`));
      else if (code !== 0) fail(new Error(`graphify update exited ${code ?? signal}: ${stderr.trim().split("\n").slice(-3).join(" / ")}`));
      else ok({ stderr });
    });
  });
}
/**
 * graphify stores an undirected graph unless the graph.json it updates is directed (`update` inherits the flag); two
 * procedures calling each other across objects then collapse into one edge and one direction is lost. A directed seed
 * before the first run keeps both (checked on the fixture tree: 64 edges directed, 63 undirected).
 */
export function seedDirected(graphPath: string): boolean {
  if (existsSync(graphPath)) {
    const fd = openSync(graphPath, "r");
    const head = Buffer.alloc(256);
    try { readSync(fd, head, 0, 256, 0); } finally { closeSync(fd); }
    if (/"directed"\s*:\s*true/.test(head.toString("utf8"))) return false;
  }
  ensureDir(resolve(graphPath, ".."));
  writeText(graphPath, `${JSON.stringify({ directed: true, multigraph: false, graph: {}, nodes: [], links: [], hyperedges: [] })}\n`);
  return true;
}
/** An executable path, or a name found on PATH. */
export const onPath = (bin: string) => (bin.includes("/") ? existsSync(bin) : (process.env.PATH ?? "").split(delimiter).some((d) => d && existsSync(join(d, bin))));
const maxRss = (stderr: string) => { const m = /(\d+)\s+maximum resident set size/.exec(stderr); return m ? Number(m[1]) : null; };

/** One snapshot major: run graphify on its checkout and write data/code/graph/<major>/ when the inputs changed. */
export async function runCallGraph(job: CodeJob, dataDir: string, deps: CallGraphDeps): Promise<CallGraphRun> {
  const pin = deps.pin ?? graphifyPin(), cfg = deps.config ?? callGraphConfig(), template = deps.template ?? ignoreTemplate();
  const key = graphKey(pin, cfg, template);
  const dir = codeCheckoutDir(deps.cacheDir, job);
  const t0 = Date.now();
  const base = { major: job.major, written: false, edges: 0, unresolved: 0, key };
  if (!existsSync(join(dir, ".git"))) throw new StageHold(`call graph ${job.major}: no checkout at ${dir}`);
  const snap = readJson<SnapshotManifest>(join(snapshotDir(dataDir, job.major, "w1"), "manifest.json"));
  const head = (await git(["rev-parse", "HEAD"], dir)).trim();
  if (head !== snap.commit) {
    log.warn(`call graph ${job.major}: checkout HEAD ${head.slice(0, 12)} is not the snapshot commit ${snap.commit.slice(0, 12)}; skipped`);
    return { ...base, ms: Date.now() - t0, skipped: "commit_mismatch" };
  }
  const appsM = join(snapshotDir(dataDir, job.major, "apps"), "manifest.json");
  const appsCommit = exists(appsM) ? readJson<SnapshotManifest>(appsM).commit : null;
  const inputs = [CALLGRAPH_VERSION, snap.commit, appsCommit, pin.ref, cfg.apps, shortHash(template, 8)];
  const out = callsPath(dataDir, job.major);
  if (inputsRecorded(out, inputs)) {
    const prev = readJson<Calls>(out);
    return { ...base, edges: prev.edges.length, unresolved: Object.entries(prev.stats).filter(([k]) => k.startsWith("unresolved_")).reduce((n, [, v]) => n + v, 0), ms: Date.now() - t0, skipped: "unchanged" };
  }
  writeText(join(dir, ".graphifyignore"), graphifyIgnore(graphFolders(dir, job, cfg), template));
  seedDirected(join(dir, "graphify-out", "graph.json"));
  const bin = deps.graphifyBin ?? "graphify";
  const timeBin = deps.timeBin === undefined ? (process.platform === "darwin" && existsSync("/usr/bin/time") ? "/usr/bin/time" : null) : deps.timeBin;
  log.info(`call graph ${job.major}: graphify update ${dir} (${cfg.apps ? "W1 + apps" : "W1 only"}, ref ${pin.ref.slice(0, 12)})`);
  // nice would report a missing graphify as exit 127: look it up first, so a Mini without the tool holds the item
  if (!onPath(bin)) throw new StageHold(`call graph: ${bin} is not installed (infra/mini/35-tools.sh)`);
  const { stderr } = await runGraphify(bin, dir, timeBin, deps.timeoutMs ?? TIMEOUT_MS);
  const graphMs = Date.now() - t0;
  const graphPath = join(dir, "graphify-out", "graph.json");
  if (!existsSync(graphPath)) throw new Error(`call graph ${job.major}: graphify wrote no ${graphPath}`);
  const p = await projectGraph(graphPath, objectIndex(dataDir, job.major));
  const doc: Omit<Calls, "inputs"> = {
    schema: "al-calls@1", major: job.major, commit: snap.commit, scope: { apps: cfg.apps },
    graphify: { ref: pin.ref, version: pin.version ?? null }, edges: p.edges, unresolved: p.unresolved, stats: p.stats,
  };
  validateOrThrow("al-graph", { inputs, ...doc }, `calls ${job.major}`);
  ensureDir(resolve(out, ".."));
  const written = writeIfInputsChanged(out, inputs, () => doc, "by-object", "edges");
  const ms = Date.now() - t0;
  writeJson(callsManifestPath(dataDir, job.major), {
    schema: "al-calls-manifest@1", major: job.major, commit: snap.commit, apps_commit: appsCommit, scope: { apps: cfg.apps },
    graphify: { ref: pin.ref, version: pin.version ?? null }, graphify_ms: graphMs, total_ms: ms, max_rss_bytes: maxRss(stderr),
    graph_json_bytes: statSync(graphPath).size, nodes: p.stats.nodes, links: p.stats.links, edges: p.edges.length,
    unresolved: Object.entries(p.stats).filter(([k]) => k.startsWith("unresolved_")).reduce((n, [, v]) => n + v, 0),
  });
  log.info(`call graph ${job.major}: ${p.edges.length} edges (${p.stats.calls} calls, ${p.stats.implements} implements), ${p.stats.kept} graph edges kept, ${Math.round(ms / 1000)} s`);
  return { ...base, written, edges: p.edges.length, unresolved: p.unresolved.length, ms };
}

const isSnapshotMajor = (item: Pick<ManifestItem, "meta">) => loadConfig<{ snapshot: string[] }>("versions").snapshot.includes(String(item.meta?.major ?? ""));

/**
 * `linked` of the code pillar (lane `cpu`, quota `graph_jobs`). A snapshot major's own source runs the graph; every
 * other code item (diff-only majors, D62) moves on at once, as it did when `linked` was a pass-through.
 */
export function callGraphHandler(deps: Partial<CallGraphDeps> = {}): StageHandler {
  return {
    lane: "cpu",
    run: async (item, ctx) => {
      const job = jobFor(item);
      if (!job || job.diffOnly || !isSnapshotMajor(item)) return { data: {} };
      const run = await runCallGraph(job, ctx.dataDir, { cacheDir: CACHE_DIR, ...deps });
      const out = callsPath(ctx.dataDir, job.major);
      // a skipped run (checkout moved on) records no graph key, so the next ingest brings the item back to `linked`
      return { output_hash: exists(out) ? sha256(readText(out)) : undefined, data: { graph: run, ...(run.skipped === "commit_mismatch" ? {} : { graph_key: run.key }) } };
    },
  };
}
