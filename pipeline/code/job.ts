/**
 * Code job (PLAN 4.6, D27): one code item = one (snapshot source, BC major), e.g. code/bcapps/29.
 *
 * fetched:   sparse, blobless, depth-1 checkout of the branch into <cache>/code/<source>-<major> (W1 apps and, for
 *            BCApps, every layer with its .layer metadata); Code History countries are checked out per country branch.
 * extracted: extract W1 apps in full and each country as an overlay (objects new in, or changed by, that country),
 *            BCApps countries assembled through their layer chain (W1 → DACH → DE, with each layer's excluded files),
 *            plus the country's own extension apps of every layer in that chain (src/Apps/DACH/*, src/Apps/DE/*: D58),
 *            write data/code/<major>/<cc>/objects-<type>-<n>.jsonl (sorted by object key, shards of at most
 *            SHARD_BYTES) plus manifest.json (source, branch, commit, build, counts, extractor and grammar versions).
 * Per-object `commit`/`build` stay null in the shards and live in the manifest, so a new commit rewrites only the
 * lines of objects whose files changed. Only the major's `snapshot_source` (config/versions.json) runs; the other
 * code items are declined. Quota: code_jobs (one item per night).
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
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
  /** Glob of first-party app folders, one `*` segment = the app (e.g. src/Apps/W1/*\/app) → data/code/<major>/apps. */
  apps?: string;
  /** A country's own extension apps, `<layer>` = each layer of its chain after W1 (src/Apps/<layer>/*\/app, D58). */
  country_apps?: string;
  /** Regex of app folder names left out of a country view (demo data is not localization). */
  country_apps_exclude?: string;
}
interface Versions { majors: Record<string, Record<string, unknown>>; repos: Record<string, string>; code: Record<string, SourceCodeConfig> }
const REPO_KEY: Record<string, string> = { bcapps: "bcapps", "sandbox-history": "sandbox_history", "onprem-history": "onprem_history" };
const BRANCH_FIELD: Record<string, string> = { bcapps: "bcapps_branch", "sandbox-history": "sandbox_branch", "onprem-history": "onprem_branch" };

export interface CodeJob { source: string; major: string; repo: string; branch: string; cfg: SourceCodeConfig; diffOnly: boolean }
/** The job for a code item, or null when the item is not its major's snapshot source. */
export function jobFor(item: Pick<ManifestItem, "source" | "meta">, versions: Versions = loadConfig<Versions>("versions")): CodeJob | null {
  const major = String(item.meta?.major ?? "");
  const def = versions.majors[major];
  const cfg = versions.code?.[item.source];
  if (!def || !cfg || def.snapshot_source !== item.source) return null;
  return { source: item.source, major, repo: versions.repos[REPO_KEY[item.source]], branch: String(def[BRANCH_FIELD[item.source]]), cfg, diffOnly: def.diff_only === true };
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

/** Expand an `apps` glob (`src/Apps/W1/*\/app`) into one CodeApp per existing folder, named after the `*` segment. */
export function expandApps(root: string, glob: string): CodeApp[] {
  const [before, after] = glob.split("*");
  const parent = resolve(root, before);
  if (!existsSync(parent)) return [];
  return readdirSync(parent).sort().map((name) => ({ app: name, path: `${before}${name}${after}` })).filter((a) => existsSync(resolve(root, a.path)));
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

/**
 * Map key of an extracted object: app plus type/id. A type/id can ship twice in W1 while an object moves between apps
 * (table 242 "Source Code Setup": Business Foundation, and the obsolete Moved copy in the Base Application); both are
 * kept so a country layer's copy is compared with the copy of its own app.
 */
export const appKey = (o: AlObject) => `${o.app ?? ""}|${objectKey(o)}`;
const isMoved = (o: AlObject) => o.properties?.ObsoleteState === "Moved";

/** Extract every .al file under each app folder, keyed by appKey. */
export async function extractApps(root: string, apps: CodeApp[], ctx: { version: string; country: string; layer: "base" | "overlay"; docs: boolean }): Promise<{ objects: Map<string, AlObject>; files: number; errors: number; build: string | null }> {
  const parser = await loadParser();
  const objects = new Map<string, AlObject>();
  let files = 0, errors = 0, build: string | null = null;
  for (const a of apps) {
    const dir = resolve(root, a.path);
    if (!existsSync(dir)) { log.warn(`${a.app}: ${a.path} missing in ${root}`); continue; }
    if (a.app === "Base Application") build = appVersion(dir);
    for (const f of listFiles(dir, ".al")) {
      // parsing is synchronous: yield every 200 files so the nightly's other workers keep their LLM calls moving
      if (++files % 200 === 0) await new Promise((r) => setImmediate(r));
      for (const o of extractSource(parser, readFileSync(f, "utf8"), { version: ctx.version, country: ctx.country, layer: ctx.layer, app: a.app, file: relative(root, f), docs: ctx.docs })) {
        if (o.parse_error) errors++;
        objects.set(appKey(o), o);
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
  const absent = scope ? [...w1.keys()].filter((k) => scope.has(w1.get(k)!.app ?? "") && !country.has(k)).map((k) => objectKey(w1.get(k)!)).sort() : [];
  return { objects, added, replaced, absent };
}

export interface SnapshotManifest {
  schema: "code-snapshot@1"; major: string; country: string; layer: "base" | "overlay" | "skeleton"; source: string; repo: string; branch: string;
  commit: string; build: string | null; extractor: string; grammar: string; apps: string[]; files: number; parse_errors: number;
  objects: number; by_type: Record<string, number>; shards: string[]; added?: number; replaced?: number; absent?: string[];
  /** BCApps layer chain of a country view, e.g. ["w1", "dach", "de"]. */
  chain?: string[];
}
export const snapshotDir = (dataDir: string, major: string, country: string) => resolve(dataDir, "code", major, country);
/**
 * Older majors are kept as diffs (PLAN 4.6, D62): their full W1 snapshot lives in the runner's cache, outside the
 * repository, and data/ gets a skeleton of key, name, hash and obsolete state per object, which is all a timeline
 * needs. This root takes the place of a data dir for the full copies: <cache>/code-snapshots/code/<major>/w1.
 */
export const fullSnapshotRoot = (cacheDir: string) => resolve(cacheDir, "code-snapshots");
export const skeletonOf = (o: AlObject) => ({ type: o.type, id: o.id, name: o.name, app: o.app, hash: o.hash, obsolete: o.obsolete }) as AlObject;
export function isSkeleton(dataDir: string, major: string): boolean {
  const p = join(snapshotDir(dataDir, major, "w1"), "manifest.json");
  return existsSync(p) && (JSON.parse(readFileSync(p, "utf8")) as SnapshotManifest).layer === "skeleton";
}

/** Replace a snapshot's shards: objects sorted by key per type, split at SHARD_BYTES; commit/build moved to the manifest. */
export function writeSnapshot(dataDir: string, objects: AlObject[], m: Omit<SnapshotManifest, "schema" | "objects" | "by_type" | "shards" | "extractor" | "grammar">): SnapshotManifest {
  const dir = snapshotDir(dataDir, m.major, m.country);
  ensureDir(dir);
  for (const f of listFiles(dir, ".jsonl")) removeIfExists(f);
  const byType = new Map<string, AlObject[]>();
  for (const o of objects) byType.set(o.type, [...(byType.get(o.type) ?? []), { ...o, commit: null, build: null }]);
  const shards: string[] = [];
  for (const [type, list] of [...byType].sort(([a], [b]) => a.localeCompare(b))) {
    // a Moved copy sorts after the live object of the same key, so readers that take the first one get the live one
    list.sort((a, b) => cmpKey(objectKey(a), objectKey(b)) || Number(isMoved(a)) - Number(isMoved(b)));
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
  return [...iterSnapshot(dataDir, major, country)];
}
/** One shard at a time, so callers that keep only a little per object never hold a whole snapshot. */
export function* iterSnapshot(dataDir: string, major: string, country: string): Generator<AlObject> {
  for (const f of listFiles(snapshotDir(dataDir, major, country), ".jsonl")) {
    for (const l of readFileSync(f, "utf8").split("\n")) if (l) yield JSON.parse(l) as AlObject;
  }
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
      const paths = [...job.cfg.w1.map((a) => a.path), ...layers, ...(job.cfg.apps ? [job.cfg.apps] : []), ...(job.cfg.country_apps ? [job.cfg.country_apps.replace("<layer>", "*")] : [])];
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
      const w1m = { ...base, major: job.major, country: "w1", branch: job.branch, commit, build: w1.build, apps: job.cfg.w1.map((a) => a.app), files: w1.files, parse_errors: w1.errors };
      if (job.diffOnly) {
        // D62: the full copy for the version diff stays in the cache; the repository gets the skeleton. No countries
        // and no apps: an older major is there for the W1 history, not for its localizations.
        writeSnapshot(fullSnapshotRoot(deps.cacheDir), [...w1.objects.values()], { ...w1m, layer: "base" });
        writeSnapshot(ctx.dataDir, [...w1.objects.values()].map(skeletonOf), { ...w1m, layer: "skeleton" });
        log.info(`code ${job.source}/${job.major}: ${w1.objects.size} W1 objects, kept as a diff`);
        return { output_hash: commit, data: { commit, w1_objects: w1.objects.size, files: w1.files, parse_errors: w1.errors, diff_only: true } };
      }
      writeSnapshot(ctx.dataDir, [...w1.objects.values()], { ...w1m, layer: "base" });
      let appObjects = 0;
      if (job.cfg.apps) {
        const apps = expandApps(root, job.cfg.apps);
        const a = await extractApps(root, apps, { version: job.major, country: "w1", layer: "base", docs: job.cfg.docs });
        writeSnapshot(ctx.dataDir, [...a.objects.values()], { ...base, major: job.major, country: "apps", layer: "base", branch: job.branch, commit, build: w1.build, apps: apps.map((x) => x.app), files: a.files, parse_errors: a.errors });
        appObjects = a.objects.size;
      }
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
            if (++files % 200 === 0) await new Promise((r) => setImmediate(r));
            for (const o of extractSource(parser, readFileSync(f.abs, "utf8"), { version: job.major, country: cc, layer: "overlay", app: job.cfg.country_app, file: relative(root, f.abs), docs: job.cfg.docs })) {
              if (o.parse_error) errors++;
              country.set(appKey(o), o);
            }
          }
          // the country's own extension apps, from every layer of its chain after W1 (NA's apps belong to US, CA and MX).
          // Each keeps its folder name as app, like the W1 apps, so nothing in it pairs with a W1 object: all added.
          const skip = job.cfg.country_apps_exclude ? new RegExp(job.cfg.country_apps_exclude) : null;
          const ownApps = job.cfg.country_apps ? chain.slice(1).flatMap((layer) => expandApps(root, job.cfg.country_apps!.replace("<layer>", layer))).filter((a) => !skip?.test(a.app)) : [];
          if (ownApps.length) {
            const a = await extractApps(root, ownApps, { version: job.major, country: cc, layer: "overlay", docs: job.cfg.docs });
            for (const [k, o] of a.objects) country.set(k, o);
            files += a.files; errors += a.errors;
          }
          const ov = overlay(w1.objects, country);
          const absent = [...view.excluded].flatMap((rel) => w1ByFile.get(rel) ?? []).filter((k) => !country.has(k)).map((k) => objectKey(w1.objects.get(k)!)).sort();
          writeSnapshot(ctx.dataDir, ov.objects, { ...base, major: job.major, country: cc, layer: "overlay", branch: job.branch, commit, build: w1.build, apps: [job.cfg.country_app, ...ownApps.map((x) => x.app)], files, parse_errors: errors, added: ov.added, replaced: ov.replaced, absent, chain: chain.map((l) => l.toLowerCase()) });
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
      return { output_hash: commit, data: { commit, w1_objects: w1.objects.size, app_objects: appObjects, files: w1.files, parse_errors: w1.errors, countries } };
    },
  };
}
