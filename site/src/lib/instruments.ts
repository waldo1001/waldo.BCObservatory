/**
 * The instruments strip (D90): eight cards with last night's numbers, on the home page under the galaxy and on
 * /objects/#instruments. Pure reductions of the files the instrument pages themselves read, then the card copy;
 * readInstruments is the only function that touches the disk. A missing or unreadable file gives no card, never a
 * blank card or a build failure.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { INSTRUMENTS } from "../../../pipeline/lib/sections.js";
import { landed } from "./state.js";

type Majors = Record<string, { vnext?: boolean }>;

export interface InstrumentInputs {
  version: { from: string; to: string; vnext: boolean; changed: number; added: number; removed: number } | null;
  deprecations: { major: string; count: number; due: number } | null;
  events: { major: string; count: number; subscriptions: number } | null;
  neighbours: { major: string; vnext: boolean; relations: number; objects: number } | null;
  countries: { countries: number; areas: number; replaced: number } | null;
  coverage: { empty: number; cells: number } | null;
  drift: { obsolete: number; undocumented: number } | null;
  /** changes null: the pipeline has not computed the week's changes yet (D81). */
  week: { items: number; changes: number | null } | null;
}
export interface InstrumentCard { id: string; name: string; value: string; caption: string; href: string }

const sum = (o: Record<string, number> | undefined) => Object.values(o ?? {}).reduce((n, x) => n + (Number(x) || 0), 0);

export function versionNumbers(diff: { from: { version: string }; to: { version: string }; summary: { by_change: Record<string, Record<string, number>> } }, majors: Majors): InstrumentInputs["version"] {
  const b = diff.summary.by_change;
  const to = String(diff.to.version);
  return { from: String(diff.from.version), to, vnext: !!majors[to]?.vnext, changed: sum(b.changed), added: sum(b.added), removed: sum(b.removed) };
}

/** due: the elements whose CLEAN version is at or below the major (the digest's cleanup_due rule). */
export function deprecationNumbers(file: { count: number; items: { clean_version?: string | null }[] }, major: string): InstrumentInputs["deprecations"] {
  const due = file.items.filter((i) => i.clean_version != null && Number(i.clean_version) <= Number(major)).length;
  return { major, count: file.count, due };
}

export function eventNumbers(file: { major: string; count: number; subscriptions: number; rows?: unknown[] }): InstrumentInputs["events"] {
  return { major: String(file.major), count: file.count, subscriptions: file.subscriptions };
}

/** objects: the distinct ends of the edges. */
export function neighbourNumbers(relations: { major: string; edges: { s: string; t: string }[] }, majors: Majors): InstrumentInputs["neighbours"] {
  const objects = new Set<string>();
  for (const e of relations.edges) { objects.add(e.s); objects.add(e.t); }
  const major = String(relations.major);
  return { major, vnext: !!majors[major]?.vnext, relations: relations.edges.length, objects: objects.size };
}

/** areas: those where some country replaces or adds an object (the heatmap's rows). */
export function countryNumbers(matrix: { areas: string[]; countries: Record<string, { cells: Record<string, { replaced: number; added: number }> }> }): InstrumentInputs["countries"] {
  const ccs = Object.values(matrix.countries);
  const areas = matrix.areas.filter((a) => ccs.some((c) => (c.cells[a]?.replaced ?? 0) + (c.cells[a]?.added ?? 0) > 0)).length;
  const replaced = ccs.reduce((n, c) => n + Object.values(c.cells).reduce((m, x) => m + (x.replaced ?? 0), 0), 0);
  return { countries: ccs.length, areas, replaced };
}

export function coverageNumbers(cov: { systems: string[]; pillars: string[]; counts: Record<string, Record<string, number>> }): InstrumentInputs["coverage"] {
  let empty = 0;
  for (const s of cov.systems) for (const p of cov.pillars) if (!cov.counts[s]?.[p]) empty++;
  return { empty, cells: cov.systems.length * cov.pillars.length };
}

export function driftNumbers(drift: { obsolete_documented: unknown[]; new_undocumented: unknown[]; missing?: unknown[] }): InstrumentInputs["drift"] {
  return { obsolete: drift.obsolete_documented.length, undocumented: drift.new_undocumented.length };
}

const n = (x: number) => x.toLocaleString("en");
const pl = (x: number, one: string, many: string) => (x === 1 ? one : many);
const bc = (major: string, vnext: boolean) => `BC${major}${vnext ? " (vNext)" : ""}`;

/** The cards in strip order; a null input has no card. */
export function instrumentCards(inputs: InstrumentInputs, base: string): InstrumentCard[] {
  const { version: v, deprecations: d, events: e, neighbours: r, countries: c, coverage: cov, drift: dr, week: w } = inputs;
  const copy: Record<string, { value: string; caption: string } | null> = {
    versions: v && { value: n(v.changed), caption: `${pl(v.changed, "object", "objects")} changed from BC${v.from} to ${bc(v.to, v.vnext)}, ${n(v.added)} added, ${n(v.removed)} removed` },
    deprecations: d && { value: n(d.count), caption: `obsolete ${pl(d.count, "element", "elements")} in BC${d.major}, ${n(d.due)} with ${pl(d.due, "its", "their")} cleanup due` },
    events: e && { value: n(e.count), caption: `published ${pl(e.count, "event", "events")} in BC${e.major}, ${n(e.subscriptions)} first-party ${pl(e.subscriptions, "subscription", "subscriptions")}` },
    neighbourhood: r && { value: n(r.relations), caption: `code ${pl(r.relations, "relation", "relations")} between ${n(r.objects)} ${pl(r.objects, "object", "objects")} in ${bc(r.major, r.vnext)}` },
    countries: c && { value: n(c.replaced), caption: `W1 ${pl(c.replaced, "object", "objects")} replaced by ${n(c.countries)} country ${pl(c.countries, "layer", "layers")}, across ${n(c.areas)} ${pl(c.areas, "area", "areas")} of the code` },
    coverage: cov && { value: `${n(cov.empty)} of ${n(cov.cells)}`, caption: "galaxy system and pillar cells with nothing in them: no Learn page, AL object, video, post or roadmap feature" },
    drift: dr && { value: n(dr.obsolete), caption: `obsolete ${pl(dr.obsolete, "object", "objects")} Learn still documents; ${n(dr.undocumented)} new ${pl(dr.undocumented, "page or report", "pages and reports")} without docs` },
    week: w && (w.changes === null
      ? { value: `${n(w.items)} new`, caption: "videos and posts of the last 7 days; open them in the galaxy" }
      : { value: `${n(w.items)} new · ${n(w.changes)} ${pl(w.changes, "PR", "PRs")}`, caption: "videos and posts, and merged pull requests, of the last 7 days; open them in the galaxy" }),
  };
  return INSTRUMENTS.flatMap((i) => {
    const c = copy[i.id];
    return c ? [{ id: i.id, name: i.name, value: c.value, caption: c.caption, href: `${base}${i.path}` }] : [];
  });
}

let built: { base: string; cards: InstrumentCard[] } | null = null;
/** The cards of the site build (it runs in site/: data/ and config/versions.json are one level up), read once. */
export function siteInstrumentCards(base: string): InstrumentCard[] {
  if (built?.base !== base) {
    const root = resolve(process.cwd(), "..");
    let versions = { narrative_order: [] as string[], majors: {} as Majors };
    try { versions = JSON.parse(readFileSync(join(root, "config", "versions.json"), "utf8")); } catch { /* no version-dependent cards */ }
    built = { base, cards: instrumentCards(readInstruments(join(root, "data"), versions), base) };
  }
  return built.cards;
}

/** A parsed JSON file, or null when it is missing or unreadable; then a reduction, or null when it throws. */
function read<T, R>(path: string, reduce: (j: T) => R): R | null {
  try {
    return existsSync(path) ? reduce(JSON.parse(readFileSync(path, "utf8")) as T) : null;
  } catch {
    return null;
  }
}

const jsonNames = (dir: string) => (existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".json")) : []);

/**
 * Every instrument's numbers from the repository's data/ (and config/versions.json), each from the file its page opens
 * on: the version pair with the highest `to` major, the deprecations of the first narrative major with a file, the
 * events index, the relations of the highest major, the country matrix, the coverage index, the drift report, the week.
 */
export function readInstruments(dataDir: string, versions: { narrative_order: string[]; majors: Majors }): InstrumentInputs {
  const majors = versions.majors ?? {};
  const pairs = jsonNames(join(dataDir, "code", "diffs", "version")).filter((f) => /^\d+__\d+\.json$/.test(f))
    .sort((a, b) => Number(b.split("__")[1].slice(0, -5)) - Number(a.split("__")[1].slice(0, -5)));
  const depMajor = versions.narrative_order.find((m) => existsSync(join(dataDir, "code", "deprecations", `${m}.json`)));
  const relMajor = jsonNames(join(dataDir, "code", "relations")).map((f) => f.slice(0, -5)).filter((m) => /^\d+$/.test(m)).sort((a, b) => Number(b) - Number(a))[0];
  const landedPath = join(dataDir, "graph", "landed.json");
  return {
    version: pairs[0] ? read(join(dataDir, "code", "diffs", "version", pairs[0]), (j: any) => versionNumbers(j, majors)) : null,
    deprecations: depMajor ? read(join(dataDir, "code", "deprecations", `${depMajor}.json`), (j: any) => deprecationNumbers(j, depMajor)) : null,
    events: read(join(dataDir, "index", "events.json"), eventNumbers),
    neighbours: relMajor ? read(join(dataDir, "code", "relations", `${relMajor}.json`), (j: any) => neighbourNumbers(j, majors)) : null,
    countries: read(join(dataDir, "code", "diffs", "country", "matrix.json"), countryNumbers),
    coverage: read(join(dataDir, "index", "coverage.json"), coverageNumbers),
    drift: read(join(dataDir, "code", "drift.json"), driftNumbers),
    week: (() => {
      if (!existsSync(landedPath)) return null;
      try {
        const l = landed(landedPath); // the header pill's own reader
        return { items: l.count, changes: l.hasChanges ? l.changes : null };
      } catch {
        return null;
      }
    })(),
  };
}
