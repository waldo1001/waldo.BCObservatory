/**
 * Docs ↔ objects (PLAN 4.6, D29), deterministic: Learn pages name the BC pages and reports they document in their
 * `ms.search.form` front matter (`118_Primary` → page 118, `Report_6627_Primary` → report 6627). Those ids are joined
 * to the code snapshots by exact object key. No name or caption matching (AGENTS.md: no title matching); PLAN's
 * name/caption step is left out on purpose.
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

export interface DocRef { id: string; url: string; title: string }
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

/** Every object key in every snapshot (W1, first-party apps as "apps", country overlays), with where it occurs. */
function knownObjects(dataDir: string, majors: string[]): Map<string, Known> {
  const known = new Map<string, Known>();
  for (const m of majors) {
    for (const cc of countriesWithW1(dataDir, m)) {
      for (const o of readSnapshot(dataDir, m, cc)) {
        const k = objectKey(o);
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

export function docsObjects(items: ManifestItem[], known: Map<string, Known>, majors: string[], commits: Record<string, string>): { index: DocsObjects; refs: Map<string, DocRef[]> } {
  const by_doc: Record<string, ObjectRef[]> = {};
  const refs = new Map<string, DocRef[]>();
  let links = 0;
  for (const it of [...items].sort((a, b) => a.id.localeCompare(b.id))) {
    const forms = (it.meta?.search_form ?? []) as SearchForm[];
    const keys = [...new Set(forms.map(formKey).filter((k): k is string => !!k))];
    if (!keys.length) continue;
    by_doc[it.id] = keys.map((key) => {
      const k = known.get(key);
      const doc: DocRef = { id: it.id, url: it.url, title: it.title };
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

const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

/** Recompute the index and the drift report when the docs' forms or the snapshots changed. Returns files written. */
export function refreshDocsObjects(dataDir: string, majors: string[], docs: ManifestItem[]): { links: number; missing: number; obsolete: number; undocumented: number; written: number } {
  const present = majors.filter((m) => exists(resolve(snapshotDir(dataDir, m, "w1"), "manifest.json"))).sort((a, b) => Number(a) - Number(b));
  const commits = Object.fromEntries(present.map((m) => [m, readJson<SnapshotManifest>(resolve(snapshotDir(dataDir, m, "w1"), "manifest.json")).commit]));
  const forms = docs.filter((d) => (d.meta?.search_form as SearchForm[] | undefined)?.length).map((d) => [d.id, d.meta!.search_form]).sort();
  const inputs = { commits, forms: forms.length, forms_hash: sha256(JSON.stringify(forms)) };
  const indexPath = resolve(dataDir, "index", "docs-objects.json"), driftPath = resolve(dataDir, "code", "drift.json");
  const prev = exists(indexPath) ? readJson<DocsObjects & { inputs?: unknown }>(indexPath) : null;
  if (prev && same(prev.inputs, inputs) && exists(driftPath)) {
    const d = readJson<Drift>(driftPath);
    return { links: prev.links, missing: d.missing.length, obsolete: d.obsolete_documented.length, undocumented: d.new_undocumented.length, written: 0 };
  }
  const known = knownObjects(dataDir, present);
  const { index, refs } = docsObjects(docs, known, present, commits);
  const diffs = present.slice(1).map((m, i) => resolve(dataDir, "code", "diffs", "version", `${present[i]}__${m}.json`)).filter(exists).map((p) => readJson<AlDiff>(p));
  const d = drift(refs, known, present, diffs);
  writeJson(indexPath, { inputs, ...index });
  writeJson(driftPath, { inputs, ...d });
  return { links: index.links, missing: d.missing.length, obsolete: d.obsolete_documented.length, undocumented: d.new_undocumented.length, written: 2 };
}
