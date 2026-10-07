/**
 * The path → object index of a BC major (D61): data/code/<major>/files.json, schema `bcobs-files@1`. A pull request's
 * changed files join to object pages through it, by exact path (an id join like D29 and D45, never title matching).
 *
 * W1 and the first-party apps first; then every country layer, alphabetically. A country path whose object W1 or an
 * app also has keeps the W1 page (as object rendering does); a country's own object gets its own page key. A regional
 * base (DACH, NA) file appears in several countries' snapshots and resolves to the first child alphabetically.
 * Rebuilt only when the snapshots it reads changed (their commits and extractor).
 */
import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { exists, readJson, writeText } from "../lib/fsx.js";
import { objectSystem } from "../lib/systems.js";
import { objectPageKey, ownPageKey } from "../render/object.js";
import { APPS } from "./diff.js";
import { objectKey } from "./extract.js";
import { iterSnapshot, snapshotDir, type SnapshotManifest } from "./job.js";

export const FILES_VERSION = 1;
export interface FileEntry { key: string; type: string; id: number | null; name: string; app: string | null; namespace: string | null; cc: string; page: string }
export interface FileIndex { schema: "bcobs-files@1"; major: string; commit: string; extractor: string; inputs: unknown; files: Record<string, FileEntry> }

export const filesIndexPath = (dataDir: string, major: string) => resolve(dataDir, "code", major, "files.json");
const manifestOf = (dataDir: string, major: string, cc: string): SnapshotManifest | null => {
  const p = resolve(snapshotDir(dataDir, major, cc), "manifest.json");
  return exists(p) ? readJson<SnapshotManifest>(p) : null;
};
const countries = (dataDir: string, major: string) => {
  const dir = resolve(dataDir, "code", major);
  return existsSync(dir) ? readdirSync(dir).filter((cc) => cc !== "w1" && cc !== APPS && manifestOf(dataDir, major, cc)).sort() : [];
};
const inputsOf = (dataDir: string, major: string) =>
  [FILES_VERSION, ...["w1", APPS, ...countries(dataDir, major)].map((cc) => { const m = manifestOf(dataDir, major, cc); return m ? [cc, m.commit, m.extractor] : null; }).filter(Boolean)];

/** Build the index of one major from its snapshots (streamed: only the few fields per object are kept). */
export function buildFileIndex(dataDir: string, major: string): FileIndex | null {
  const w1 = manifestOf(dataDir, major, "w1");
  if (!w1 || w1.layer === "skeleton") return null;
  const files: Record<string, FileEntry> = {};
  const w1Keys = new Set<string>();
  for (const part of ["w1", APPS]) {
    if (!manifestOf(dataDir, major, part)) continue;
    for (const o of iterSnapshot(dataDir, major, part)) {
      const key = objectKey(o);
      w1Keys.add(key);
      if (!o.file || files[o.file]) continue;
      // a page key two objects share keeps the first (W1), as renderCodePages does: the change renderer links a page
      // only when its file exists, so the clash's loser is listed by name, not linked to the wrong object
      files[o.file] = { key, type: o.type, id: o.id ?? null, name: o.name, app: o.app ?? null, namespace: o.namespace ?? null, cc: "w1", page: objectPageKey(o) };
    }
  }
  for (const cc of countries(dataDir, major)) {
    for (const o of iterSnapshot(dataDir, major, cc)) {
      if (!o.file || files[o.file]) continue;
      const key = objectKey(o);
      files[o.file] = { key, type: o.type, id: o.id ?? null, name: o.name, app: o.app ?? null, namespace: o.namespace ?? null, cc, page: w1Keys.has(key) ? objectPageKey(o) : ownPageKey(o, cc) };
    }
  }
  const sorted = Object.fromEntries(Object.entries(files).sort(([a], [b]) => a.localeCompare(b)));
  return { schema: "bcobs-files@1", major, commit: w1.commit, extractor: w1.extractor, inputs: inputsOf(dataDir, major), files: sorted };
}

/** Write the index unless it already records the same snapshots. Returns true when written. */
export function refreshFileIndex(dataDir: string, major: string): boolean {
  const p = filesIndexPath(dataDir, major);
  if (exists(p) && JSON.stringify(readJson<FileIndex>(p).inputs) === JSON.stringify(inputsOf(dataDir, major))) return false;
  const idx = buildFileIndex(dataDir, major);
  if (!idx) return false;
  // one entry per line: still one JSON document, and a git diff reads file by file (like byObject, D62)
  const { files, ...head } = idx;
  const body = Object.entries(files).map(([k, v]) => `${JSON.stringify(k)}:${JSON.stringify(v)}`).join(",\n");
  writeText(p, `${JSON.stringify(head).slice(0, -1)},"files":{\n${body}\n}}\n`);
  return true;
}

/** The index of a major, built when missing or stale; null when the major has no full snapshot. */
export function loadFileIndex(dataDir: string, major: string): FileIndex | null {
  refreshFileIndex(dataDir, major);
  const p = filesIndexPath(dataDir, major);
  return exists(p) ? readJson<FileIndex>(p) : null;
}

export interface ChangedFile { path: string; status: string; previous_filename?: string }
export interface JoinedObject { path: string; status: string; key: string; type: string; id: number | null; name: string; app: string | null; cc: string; page: string; previous_filename?: string }
export interface Unjoined { path: string; status: string; reason: "removed" | "not-in-snapshot" }

/**
 * Paths compared without case: the snapshot spells an app folder `app/` where GitHub reports `App/`
 * (src/Apps/W1/EDocument/App/...), and the checkout's case is not the repository's. Built once per index.
 */
const lowered = new WeakMap<FileIndex, Map<string, FileEntry>>();
function byLowerPath(index: FileIndex): Map<string, FileEntry> {
  let m = lowered.get(index);
  if (!m) { m = new Map(Object.entries(index.files).map(([k, v]) => [k.toLowerCase(), v])); lowered.set(index, m); }
  return m;
}

/**
 * Join changed files to objects by exact path (case-insensitive, see above). A renamed file joins by its new name and keeps the old one; a removed
 * file or a path the snapshot does not have goes to `unjoined` with the reason.
 */
export function joinFiles(files: ChangedFile[], index: FileIndex | null): { objects: JoinedObject[]; unjoined: Unjoined[]; systems: string[] } {
  const objects: JoinedObject[] = [], unjoined: Unjoined[] = [];
  const systems = new Map<string, number>();
  for (const f of files) {
    if (f.status === "removed") { unjoined.push({ path: f.path, status: f.status, reason: "removed" }); continue; }
    const e = index ? index.files[f.path] ?? byLowerPath(index).get(f.path.toLowerCase()) : undefined;
    if (!e) { unjoined.push({ path: f.path, status: f.status, reason: "not-in-snapshot" }); continue; }
    objects.push({ path: f.path, status: f.status, key: e.key, type: e.type, id: e.id, name: e.name, app: e.app, cc: e.cc, page: e.page, ...(f.previous_filename ? { previous_filename: f.previous_filename } : {}) });
    const s = objectSystem(e.namespace);
    systems.set(s, (systems.get(s) ?? 0) + 1);
  }
  return { objects, unjoined, systems: [...systems].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([s]) => s) };
}
