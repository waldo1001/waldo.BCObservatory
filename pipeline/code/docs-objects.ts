/**
 * Docs ↔ objects (PLAN 4.6, D29, D32), deterministic, by identifiers only:
 * - Learn pages name the BC pages and reports they document in their `ms.search.form` front matter (`118_Primary` →
 *   page 118, `Report_6627_Primary` → report 6627), joined to the snapshots by exact object key;
 * - the Learn API reference (`api-reference/v2.0/resources/dynamics_customer`, `.../api/dynamics_customer_get`)
 *   documents the standard API pages (no APIPublisher) of that APIVersion whose EntityName is that entity.
 * No name or caption matching (AGENTS.md: no title matching); PLAN's name/caption step is left out on purpose.
 *
 * Outputs (rewritten only when their inputs change):
 * - data/index/docs-objects.json: by_doc (Learn item → objects) and by_object (object key → Learn pages)
 * - data/code/drift.json: documented objects that exist in no snapshot, documented objects that are obsolete, and
 *   pages/reports new in the latest version diffs that no Learn page names
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { sha256 } from "../lib/text.js";
import { exists, readJson, writeJson } from "../lib/fsx.js";
import type { ManifestItem } from "../lib/manifest.js";
import { objectKey, type AlObject } from "./extract.js";
import { readSnapshot, snapshotDir, type SnapshotManifest } from "./job.js";
import type { AlDiff } from "./diff.js";

export interface SearchForm { raw: string; id: number | null; kind: string | null }
/** `ms.search.form` entry → object key; null for UI entry points (TellMe, RoleExplorer, HelpAndSupport). */
export function formKey(f: SearchForm): string | null {
  if (f.id === null || !Number.isFinite(f.id)) return null;
  const k = (f.kind ?? "").toLowerCase();
  if (k === "" || k === "primary") return `page/${f.id}`;
  if (k.startsWith("report")) return `report/${f.id}`;
  if (k.startsWith("query")) return `query/${f.id}`;
  return null;
}

export interface DocRef { id: string; url: string; title: string; via?: "ms.search.form" | "api-reference" }
export interface ObjectRef { key: string; name: string | null; versions: string[]; countries: string[]; obsolete: string | null }
export interface DocsObjects {
  majors: string[]; commits: Record<string, string>; docs: number; links: number;
  by_doc: Record<string, ObjectRef[]>; by_object: Record<string, DocRef[]>;
}
export interface Drift {
  majors: string[]; missing: { key: string; docs: DocRef[] }[]; obsolete_documented: { key: string; name: string; state: string; tag: string | null; docs: DocRef[] }[];
  new_undocumented: { key: string; name: string; since: string }[];
}

interface Known { name: string; versions: Set<string>; countries: Set<string>; obsolete: AlObject["obsolete"] }
/** `<version>|<entityname lowercase>` → key of the standard API page (no APIPublisher), from W1 and first-party apps. */
export type ApiIndex = Map<string, string>;

export function apiIndex(dataDir: string, majors: string[]): ApiIndex {
  const idx: ApiIndex = new Map();
  for (const m of [...majors].sort((a, b) => Number(b) - Number(a))) {
    for (const part of ["w1", "apps"]) {
      if (!exists(resolve(snapshotDir(dataDir, m, part), "manifest.json"))) continue;
      for (const o of readSnapshot(dataDir, m, part)) {
        const p = o.properties;
        if (o.type !== "page" || p.PageType !== "API" || p.APIPublisher || !p.EntityName || !p.APIVersion) continue;
        for (const v of p.APIVersion.split(",").map((x) => x.trim().replace(/^'|'$/g, ""))) {
          const k = `${v}|${p.EntityName.toLowerCase()}`;
          if (!idx.has(k)) idx.set(k, objectKey(o));
        }
      }
    }
  }
  return idx;
}
const API_RE = /\/api-reference\/(v\d+\.\d+)\/(resources|api)\/dynamics_([a-z0-9_]+)$/i;
/** API page keys a Learn API reference page documents: the resource's entity, or the longest entity an operation starts with. */
export function apiKeys(url: string, idx: ApiIndex): string[] {
  const m = url.match(API_RE);
  if (!m) return [];
  const [, version, kind, rest] = m;
  const name = rest.toLowerCase();
  if (kind === "resources") { const k = idx.get(`${version}|${name}`); return k ? [k] : []; }
  let best: string | null = null;
  for (const key of idx.keys()) {
    const [v, entity] = key.split("|");
    if (v === version && name.startsWith(`${entity}_`) && (!best || entity.length > best.length)) best = entity;
  }
  return best ? [idx.get(`${version}|${best}`)!] : [];
}

/** Every object key in every snapshot (W1, first-party apps as "apps", country overlays), with where it occurs. */
function knownObjects(dataDir: string, majors: string[]): Map<string, Known> {
  const known = new Map<string, Known>();
  for (const m of majors) {
    for (const cc of countriesWithW1(dataDir, m)) {
      const seen = new Set<string>();
      for (const o of readSnapshot(dataDir, m, cc)) {
        const k = objectKey(o);
        if (seen.has(k)) continue; // a Moved copy of the same key: the live object (sorted first) describes it
        seen.add(k);
        const e = known.get(k) ?? known.set(k, { name: o.name, versions: new Set(), countries: new Set(), obsolete: null }).get(k)!;
        e.versions.add(m);
        e.countries.add(cc);
        if (cc === "w1" || cc === "apps") { e.name = o.name; e.obsolete = o.obsolete; }
      }
    }
  }
  return known;
}
function countriesWithW1(dataDir: string, major: string): string[] {
  const p = resolve(dataDir, "code", major, "w1", "manifest.json");
  if (!exists(p)) return [];
  return ["w1", ...readdirSync(resolve(dataDir, "code", major)).filter((cc) => cc !== "w1" && exists(resolve(snapshotDir(dataDir, major, cc), "manifest.json")))];
}

export function docsObjects(items: ManifestItem[], known: Map<string, Known>, majors: string[], commits: Record<string, string>, api: ApiIndex = new Map()): { index: DocsObjects; refs: Map<string, DocRef[]> } {
  const by_doc: Record<string, ObjectRef[]> = {};
  const refs = new Map<string, DocRef[]>();
  let links = 0;
  for (const it of [...items].sort((a, b) => a.id.localeCompare(b.id))) {
    const forms = (it.meta?.search_form ?? []) as SearchForm[];
    const via = new Map<string, DocRef["via"]>();
    for (const k of forms.map(formKey)) if (k) via.set(k, "ms.search.form");
    for (const k of apiKeys(it.url, api)) if (!via.has(k)) via.set(k, "api-reference");
    const keys = [...via.keys()];
    if (!keys.length) continue;
    by_doc[it.id] = keys.map((key) => {
      const k = known.get(key);
      const doc: DocRef = { id: it.id, url: it.url, title: it.title, via: via.get(key) };
      refs.set(key, [...(refs.get(key) ?? []), doc]);
      links++;
      return { key, name: k?.name ?? null, versions: k ? [...k.versions].sort() : [], countries: k ? [...k.countries].sort() : [], obsolete: k?.obsolete ? k.obsolete.state : null };
    });
  }
  const by_object = Object.fromEntries([...refs].sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true })));
  return { index: { majors, commits, docs: Object.keys(by_doc).length, links, by_doc, by_object }, refs };
}

export function drift(refs: Map<string, DocRef[]>, known: Map<string, Known>, majors: string[], versionDiffs: AlDiff[]): Drift {
  const missing = [...refs].filter(([k]) => !known.has(k)).map(([key, docs]) => ({ key, docs })).sort((a, b) => a.key.localeCompare(b.key, "en", { numeric: true }));
  const obsolete_documented = [...refs].flatMap(([key, docs]) => {
    const k = known.get(key);
    return k?.obsolete && k.obsolete.state !== "No" ? [{ key, name: k.name, state: k.obsolete.state, tag: k.obsolete.tag, docs }] : [];
  }).sort((a, b) => a.key.localeCompare(b.key, "en", { numeric: true }));
  const new_undocumented = versionDiffs.flatMap((d) => d.objects.filter((o) => o.change === "added" && /^(page|report)\//.test(o.key) && !refs.has(o.key)).map((o) => ({ key: o.key, name: o.name, since: d.to.version })))
    .sort((a, b) => a.key.localeCompare(b.key, "en", { numeric: true }));
  return { majors, missing, obsolete_documented, new_undocumented };
}

/** The join as the renderers read it (object pages, topic hubs); null before the first code-derived run. */
export function loadDocsObjects(dataDir: string): DocsObjects | null {
  const p = resolve(dataDir, "index", "docs-objects.json");
  return exists(p) ? readJson<DocsObjects>(p) : null;
}

const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

/** Recompute the index and the drift report when the docs' forms or the snapshots changed. Returns files written. */
export function refreshDocsObjects(dataDir: string, majors: string[], docs: ManifestItem[]): { links: number; missing: number; obsolete: number; undocumented: number; written: number } {
  const present = majors.filter((m) => exists(resolve(snapshotDir(dataDir, m, "w1"), "manifest.json"))).sort((a, b) => Number(a) - Number(b));
  const commits = Object.fromEntries(present.map((m) => [m, readJson<SnapshotManifest>(resolve(snapshotDir(dataDir, m, "w1"), "manifest.json")).commit]));
  const forms = docs.filter((d) => (d.meta?.search_form as SearchForm[] | undefined)?.length || API_RE.test(d.url)).map((d) => [d.id, d.meta?.search_form ?? d.url]).sort();
  const inputs = { commits, forms: forms.length, forms_hash: sha256(JSON.stringify(forms)) };
  const indexPath = resolve(dataDir, "index", "docs-objects.json"), driftPath = resolve(dataDir, "code", "drift.json");
  const prev = exists(indexPath) ? readJson<DocsObjects & { inputs?: unknown }>(indexPath) : null;
  if (prev && same(prev.inputs, inputs) && exists(driftPath)) {
    const d = readJson<Drift>(driftPath);
    return { links: prev.links, missing: d.missing.length, obsolete: d.obsolete_documented.length, undocumented: d.new_undocumented.length, written: 0 };
  }
  const known = knownObjects(dataDir, present);
  const { index, refs } = docsObjects(docs, known, present, commits, apiIndex(dataDir, present));
  const diffs = present.slice(1).map((m, i) => resolve(dataDir, "code", "diffs", "version", `${present[i]}__${m}.json`)).filter(exists).map((p) => readJson<AlDiff>(p));
  const d = drift(refs, known, present, diffs);
  writeJson(indexPath, { inputs, ...index });
  writeJson(driftPath, { inputs, ...d });
  return { links: index.links, missing: d.missing.length, obsolete: d.obsolete_documented.length, undocumented: d.new_undocumented.length, written: 2 };
}
