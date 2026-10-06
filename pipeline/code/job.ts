/**
 * Code job (PLAN 4.6, D27): one code item = one (snapshot source, BC major), e.g. code/bcapps/29.
 *
 * fetched:   sparse, blobless, depth-1 checkout of the branch into <cache>/code/<source>-<major> (W1 apps and, for
 *            BCApps, every layer with its .layer metadata); Code History countries are checked out per country branch.
 * extracted: extract W1 apps in full and each country as an overlay (objects new in, or changed by, that country),
 *            BCApps countries assembled through their layer chain (W1 → DACH → DE, with each layer's excluded files),
 *            write data/code/<major>/<cc>/objects-<type>-<n>.jsonl (sorted by object key, shards of at most
 *            SHARD_BYTES) plus manifest.json (source, branch, commit, build, counts, extractor and grammar versions).
 * Per-object `commit`/`build` stay null in the shards and live in the manifest, so a new commit rewrites only the
 * lines of objects whose files changed. Only the major's `snapshot_source` (config/versions.json) runs; the other
 * code items are declined. Quota: code_jobs (one item per night).
 */
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, relative, resolve } from "node:path";
import { loadConfig } from "../lib/config.js";
import { ensureDir, listFiles, removeIfExists, writeJson, writeText } from "../lib/fsx.js";
import { git } from "../lib/git.js";
import { logger } from "../lib/log.js";
import type { ManifestItem } from "../lib/manifest.js";
import type { StageHandler } from "../orchestrator/execute.js";
import { EXTRACTOR_VERSION, extractSource, loadParser, objectKey, type AlObject } from "./extract.js";

const log = logger("code");
export const SHARD_BYTES = 10 * 1024 * 1024;

export interface CodeApp { app: string; path: string }
export interface SourceCodeConfig {
  w1: CodeApp[]; countries: "all" | string[]; country_app: string; docs: boolean;
  layers_root?: string; layer_app?: string; layers_config?: string; country_branch?: string; country_path?: string;
}
interface Versions { majors: Record<string, Record<string, unknown>>; repos: Record<string, string>; code: Record<string, SourceCodeConfig> }
const REPO_KEY: Record<string, string> = { bcapps: "bcapps", "sandbox-history": "sandbox_history", "onprem-history": "onprem_history" };
const BRANCH_FIELD: Record<string, string> = { bcapps: "bcapps_branch", "sandbox-history": "sandbox_branch", "onprem-history": "onprem_branch" };

export interface CodeJob { source: string; major: string; repo: string; branch: string; cfg: SourceCodeConfig }
/** The job for a code item, or null when the item is not its major's snapshot source. */
export function jobFor(item: Pick<ManifestItem, "source" | "meta">, versions: Versions = loadConfig<Versions>("versions")): CodeJob | null {
  const major = String(item.meta?.major ?? "");
  const def = versions.majors[major];
  const cfg = versions.code?.[item.source];
  if (!def || !cfg || def.snapshot_source !== item.source) return null;
  return { source: item.source, major, repo: versions.repos[REPO_KEY[item.source]], branch: String(def[BRANCH_FIELD[item.source]]), cfg };
}
export const codeCheckoutDir = (cacheDir: string, job: Pick<CodeJob, "source" | "major">, country = "w1") =>
  resolve(cacheDir, "code", `${job.source}-${job.major}${country === "w1" ? "" : `-${country}`}`);

/** Sparse, blobless, depth-1 checkout of `branch` with only `paths`; reused and fast-forwarded next time. Returns HEAD. */
export async function sparseCheckout(url: string, branch: string, paths: string[], dir: string): Promise<string> {
  const patterns = paths.map((p) => `/${p.replace(/^\/+|\/+$/g, "")}/`);
  if (!existsSync(join(dir, ".git"))) {
    ensureDir(dir);
    await git(["clone", "-q", "--filter=blob:none", "--sparse", "--depth", "1", "--single-branch", "--branch", branch, url, dir]);
  } else {
    await git(["fetch", "-q", "--depth", "1", "--filter=blob:none", "origin", branch], dir);
    await git(["reset", "-q", "--hard", "FETCH_HEAD"], dir);
  }
  await git(["sparse-checkout", "set", "--no-cone", ...patterns], dir);
  return (await git(["rev-parse", "HEAD"], dir)).trim();
}

/** layers_config.json → layer → base layer (W1 has none), for the configured app (BaseApp). */
export function layerParents(root: string, cfg: SourceCodeConfig): Map<string, string | null> {
  const doc = JSON.parse(readFileSync(resolve(root, cfg.layers_config!), "utf8"));
  const layers = doc[cfg.layer_app!] ?? doc;
  return new Map(Object.entries(layers as Record<string, { baseLayer?: string } | null>).map(([k, v]) => [k, v?.baseLayer ?? null]));
}
/** Countries = layers nobody builds on (regional bases such as DACH, APAC and NA are not countries), lowercase. */
export function bcappsCountries(parents: Map<string, string | null>): string[] {
  const bases = new Set([...parents.values()].filter((v): v is string => !!v));
  return [...parents.keys()].filter((l) => l !== "W1" && !bases.has(l)).map((l) => l.toLowerCase()).sort();
}
/** W1 → ... → layer. */
export function layerChain(parents: Map<string, string | null>, layer: string): string[] {
  const chain: string[] = [];
  for (let l: string | null | undefined = layer; l && !chain.includes(l); l = parents.get(l)) chain.unshift(l);
  return chain;
}
/**
 * The files of one country's view, relative to the app folder: W1's, then per layer of the chain (after W1) the
 * inherited files that layer excludes are dropped and its own files are added or override. Returns where each file
 * comes from and which W1 files the chain excluded.
 */
export function layerView(root: string, cfg: SourceCodeConfig, chain: string[]): { files: Map<string, { layer: string; abs: string }>; excluded: Set<string> } {
  const files = new Map<string, { layer: string; abs: string }>();
  const excluded = new Set<string>();
  const app = cfg.layer_app!;
  for (const layer of chain) {
    const layerRoot = resolve(root, cfg.layers_root!, layer);
    const exFile = join(layerRoot, ".layer", "excluded_view_files.json");
    if (layer !== chain[0] && existsSync(exFile)) {
      for (const p of JSON.parse(readFileSync(exFile, "utf8")) as string[]) {
        const rel = p.replace(/\\/g, "/");
        if (!rel.startsWith(`${app}/`)) continue;
        const key = rel.slice(app.length + 1);
        if (files.get(key)?.layer === chain[0]) excluded.add(key);
        files.delete(key);
      }
    }
    const appDir = join(layerRoot, app);
    for (const abs of listFiles(appDir, ".al")) files.set(relative(appDir, abs), { layer, abs });
  }
  return { files, excluded };
}

const appVersion = (dir: string) => {
  try { return String(JSON.parse(readFileSync(join(dir, "app.json"), "utf8")).version ?? "") || null; } catch { return null; }
};

/** Extract every .al file under each app folder. Later apps never shadow earlier ones (keys are app-scoped by type/id). */
export async function extractApps(root: string, apps: CodeApp[], ctx: { version: string; country: string; layer: "base" | "overlay"; docs: boolean }): Promise<{ objects: Map<string, AlObject>; files: number; errors: number; build: string | null }> {
  const parser = await loadParser();
  const objects = new Map<string, AlObject>();
  let files = 0, errors = 0, build: string | null = null;
  for (const a of apps) {
    const dir = resolve(root, a.path);
    if (!existsSync(dir)) { log.warn(`${a.app}: ${a.path} missing in ${root}`); continue; }
    if (a.app === "Base Application") build = appVersion(dir);
    for (const f of listFiles(dir, ".al")) {
      files++;
      for (const o of extractSource(parser, readFileSync(f, "utf8"), { version: ctx.version, country: ctx.country, layer: ctx.layer, app: a.app, file: relative(root, f), docs: ctx.docs })) {
        if (o.parse_error) errors++;
        objects.set(objectKey(o), o);
      }
    }
  }
  return { objects, files, errors, build };
}

/** Country objects that are new or differ from W1 (by content hash), marked overlay; plus W1 keys the country lacks. */
export function overlay(w1: Map<string, AlObject>, country: Map<string, AlObject>, scope?: Set<string>): { objects: AlObject[]; added: number; replaced: number; absent: string[] } {
  const objects: AlObject[] = [];
  let added = 0, replaced = 0;
  for (const [k, o] of country) {
    const base = w1.get(k);
    if (base && base.hash === o.hash) continue;
    if (base) replaced++; else added++;
    objects.push({ ...o, layer: "overlay" });
  }
  // absent only makes sense when the country view is complete (Code History branches), limited to its apps
  const absent = scope ? [...w1.keys()].filter((k) => scope.has(w1.get(k)!.app ?? "") && !country.has(k)).sort() : [];
  return { objects, added, replaced, absent };
}

export interface SnapshotManifest {
  schema: "code-snapshot@1"; major: string; country: string; layer: "base" | "overlay"; source: string; repo: string; branch: string;
  commit: string; build: string | null; extractor: string; grammar: string; apps: string[]; files: number; parse_errors: number;
  objects: number; by_type: Record<string, number>; shards: string[]; added?: number; replaced?: number; absent?: string[];
  /** BCApps layer chain of a country view, e.g. ["w1", "dach", "de"]. */
  chain?: string[];
}
export const snapshotDir = (dataDir: string, major: string, country: string) => resolve(dataDir, "code", major, country);

/** Replace a snapshot's shards: objects sorted by key per type, split at SHARD_BYTES; commit/build moved to the manifest. */
export function writeSnapshot(dataDir: string, objects: AlObject[], m: Omit<SnapshotManifest, "schema" | "objects" | "by_type" | "shards" | "extractor" | "grammar">): SnapshotManifest {
  const dir = snapshotDir(dataDir, m.major, m.country);
  ensureDir(dir);
  for (const f of listFiles(dir, ".jsonl")) removeIfExists(f);
  const byType = new Map<string, AlObject[]>();
  for (const o of objects) byType.set(o.type, [...(byType.get(o.type) ?? []), { ...o, commit: null, build: null }]);
  const shards: string[] = [];
  for (const [type, list] of [...byType].sort(([a], [b]) => a.localeCompare(b))) {
    list.sort((a, b) => cmpKey(objectKey(a), objectKey(b)));
    let n = 1, buf: string[] = [], size = 0;
    const flush = () => { if (!buf.length) return; const name = `objects-${type}-${n++}.jsonl`; writeText(join(dir, name), buf.join("")); shards.push(name); buf = []; size = 0; };
    for (const o of list) {
      const line = `${JSON.stringify(o)}\n`;
      if (size + line.length > SHARD_BYTES) flush();
      buf.push(line); size += line.length;
    }
    flush();
  }
  const manifest: SnapshotManifest = {
    schema: "code-snapshot@1", ...m, extractor: EXTRACTOR_VERSION, grammar: grammarVersion(), objects: objects.length,
    by_type: Object.fromEntries([...byType].map(([t, l]) => [t, l.length]).sort(([a], [b]) => String(a).localeCompare(String(b)))), shards,
  };
  writeJson(join(dir, "manifest.json"), manifest);
  return manifest;
}
/** Numeric ids sort numerically within a type (table/18 before table/100), names alphabetically. */
function cmpKey(a: string, b: string): number {
  const [ta, ia] = a.split("/"), [tb, ib] = b.split("/");
  if (ta !== tb) return ta.localeCompare(tb);
  const na = Number(ia), nb = Number(ib);
  return Number.isFinite(na) && Number.isFinite(nb) ? na - nb : ia.localeCompare(ib);
}
let grammar: string | null = null;
function grammarVersion(): string {
  grammar ??= String(JSON.parse(readFileSync(createRequire(import.meta.url).resolve("@sshadows/tree-sitter-al/package.json"), "utf8")).version);
  return grammar;
}

/** Read a snapshot back: every object of every shard. */
export function readSnapshot(dataDir: string, major: string, country: string): AlObject[] {
  const dir = snapshotDir(dataDir, major, country);
  return listFiles(dir, ".jsonl").flatMap((f) => readFileSync(f, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l) as AlObject));
}

// ---------------------------------------------------------------------------------------------- stage handlers

export interface CodeDeps { checkout: typeof sparseCheckout; cacheDir: string }

/** `fetched`: check out W1 (and BCApps country layers) for this job. */
export function codeFetched(deps: CodeDeps): StageHandler {
  return {
    accepts: (item) => !!jobFor(item),
    run: async (item) => {
      const job = jobFor(item)!;
      const layers = job.cfg.layers_root ? [`${job.cfg.layers_root}/*/${job.cfg.layer_app}`, `${job.cfg.layers_root}/*/.layer`, job.cfg.layers_config!.slice(0, job.cfg.layers_config!.lastIndexOf("/"))] : [];
      const paths = [...job.cfg.w1.map((a) => a.path), ...layers];
      const sha = await deps.checkout(job.repo, job.branch, paths, codeCheckoutDir(deps.cacheDir, job));
      return { data: { commit: sha, branch: job.branch } };
    },
  };
}

/** `extracted`: W1 in full, every configured country as an overlay; writes data/code/<major>/<cc>/. */
export function codeExtracted(deps: CodeDeps): StageHandler {
  return {
    accepts: (item) => !!jobFor(item),
    run: async (item, ctx) => {
      const job = jobFor(item)!;
      const root = codeCheckoutDir(deps.cacheDir, job);
      const commit = (await git(["rev-parse", "HEAD"], root)).trim();
      const base = { source: job.source, repo: job.repo };
      const w1 = await extractApps(root, job.cfg.w1, { version: job.major, country: "w1", layer: "base", docs: job.cfg.docs });
      writeSnapshot(ctx.dataDir, [...w1.objects.values()], { ...base, major: job.major, country: "w1", layer: "base", branch: job.branch, commit, build: w1.build, apps: job.cfg.w1.map((a) => a.app), files: w1.files, parse_errors: w1.errors });
      const countries: Record<string, { added: number; replaced: number; absent: number }> = {};
      if (job.cfg.layers_root) {
        const parents = layerParents(root, job.cfg);
        const w1ByFile = new Map<string, string[]>();
        const w1App = job.cfg.w1.find((a) => a.app === job.cfg.country_app)!;
        for (const [k, o] of w1.objects) if (o.app === job.cfg.country_app) w1ByFile.set(relative(w1App.path, o.file), [...(w1ByFile.get(relative(w1App.path, o.file)) ?? []), k]);
        const list = job.cfg.countries === "all" ? bcappsCountries(parents) : job.cfg.countries;
        for (const cc of list) {
          const chain = layerChain(parents, cc.toUpperCase());
          const view = layerView(root, job.cfg, chain);
          const parser = await loadParser();
          const country = new Map<string, AlObject>();
          let files = 0, errors = 0;
          for (const [, f] of view.files) {
            if (f.layer === chain[0]) continue; // W1 files are W1 objects; only what the chain adds or overrides can differ
            files++;
            for (const o of extractSource(parser, readFileSync(f.abs, "utf8"), { version: job.major, country: cc, layer: "overlay", app: job.cfg.country_app, file: relative(root, f.abs), docs: job.cfg.docs })) {
              if (o.parse_error) errors++;
              country.set(objectKey(o), o);
            }
          }
          const ov = overlay(w1.objects, country);
          const absent = [...view.excluded].flatMap((rel) => w1ByFile.get(rel) ?? []).filter((k) => !country.has(k)).sort();
          writeSnapshot(ctx.dataDir, ov.objects, { ...base, major: job.major, country: cc, layer: "overlay", branch: job.branch, commit, build: w1.build, apps: [job.cfg.country_app], files, parse_errors: errors, added: ov.added, replaced: ov.replaced, absent, chain: chain.map((l) => l.toLowerCase()) });
          countries[cc] = { added: ov.added, replaced: ov.replaced, absent: absent.length };
        }
      } else if (job.cfg.country_branch && Array.isArray(job.cfg.countries)) {
        for (const cc of job.cfg.countries) {
          const branch = job.cfg.country_branch.replace("<cc>", cc).replace("<major>", job.major);
          const dir = codeCheckoutDir(deps.cacheDir, job, cc);
          const sha = await deps.checkout(job.repo, branch, [job.cfg.country_path!], dir);
          const c = await extractApps(dir, [{ app: job.cfg.country_app, path: job.cfg.country_path! }], { version: job.major, country: cc, layer: "overlay", docs: job.cfg.docs });
          const ov = overlay(w1.objects, c.objects, new Set([job.cfg.country_app]));
          writeSnapshot(ctx.dataDir, ov.objects, { ...base, major: job.major, country: cc, layer: "overlay", branch, commit: sha, build: c.build, apps: [job.cfg.country_app], files: c.files, parse_errors: c.errors, added: ov.added, replaced: ov.replaced, absent: ov.absent });
          countries[cc] = { added: ov.added, replaced: ov.replaced, absent: ov.absent.length };
        }
      }
      log.info(`code ${job.source}/${job.major}: ${w1.objects.size} W1 objects, ${Object.keys(countries).length} countries`);
      return { output_hash: commit, data: { commit, w1_objects: w1.objects.size, files: w1.files, parse_errors: w1.errors, countries } };
    },
  };
}
