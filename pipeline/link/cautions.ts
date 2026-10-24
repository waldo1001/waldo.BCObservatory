/**
 * The relevance guard (D106, spec 4.3): where a caution from a post or a video may show. A caution attaches to an
 * object page only when
 *   (a) one of its objects resolves exactly to that object (mentions.ts), or
 *   (b) one of its events is published by that object in today's code (data/index/events.json) and by at most
 *       MAX_EVENT_OWNERS objects in all;
 * and, when it names versions, one of them falls in the object's life (or before the oldest snapshot, where the
 * object's history is unknown) or within one major of its obsolete tag. Nothing else attaches: no topic, system or
 * keyword overlap. Waldo's v26 post on the legacy invoice posting events attaches to Table 49 "Invoice Post. Buffer",
 * never to Codeunit 80, whose own obsolete events are other ones (spec 1.3).
 *
 * Writes data/links/cautions.json (`bcobs-cautions@1`): per object page, the cautions with their scope. Object pages
 * render them as "Heads up (community)" and carry them in frontmatter `cautions` (the MCP reads pages, not data/links).
 */
import { statSync } from "node:fs";
import { resolve } from "node:path";
import { exists, listFiles, readJson, readJsonOr, readText, writeText } from "../lib/fsx.js";
import type { Caution, CautionKind, CautionRecord } from "../extract/cautions.js";
import { loadObjectIndex, objectIndexFromRows, resolveMentions, type ObjectIndex } from "./mentions.js";
import { frontmatterOf } from "./related.js";
import { pagePathOf } from "./overrides.js";
import { crossLinkHref, type CrossLink } from "./crosslinks.js";

export const SCHEMA = "bcobs-cautions@1";
export const MAX_EVENT_OWNERS = 3;
export const MAX_PER_OBJECT = 6;
/** A video disclaimer applies to the objects named this close to it (seconds). */
export const NEAR_SECONDS = 30;

export interface CautionItem { id: string; title: string; kind: "post" | "video"; cautions: Caution[] }
export interface GuardObject { id: string; title: string; present_in: string[]; obsolete: { state: string; tag: string | null } | null; type?: string; object_id?: number; name?: string; events?: string[]; obsolete_events?: string[] }
export interface Attached { from: string; title: string; kind: CautionKind; quote: string; t?: number; scope: string }

/** Majors a version list names: "v26", "BC 25", "29.x", "28.4" -> 26, 25, 29, 28; a release wave names none. */
export function majorsOf(versions: string[]): string[] {
  const out: string[] = [];
  for (const v of versions) {
    if (/wave/i.test(v)) continue;
    const m = /(?:^|[^\d])(\d{2})(?:\.(?:\d+|x))?(?:[^\d]|$)/i.exec(` ${v} `);
    if (m && !out.includes(m[1])) out.push(m[1]);
  }
  return out;
}

const tagMajor = (tag: string | null | undefined) => (tag ? Number(/^(\d+)/.exec(tag)?.[1] ?? NaN) : NaN);
function inLife(o: GuardObject, majors: string[]): boolean {
  if (!majors.length) return true;
  const life = o.present_in.map(Number).filter((n) => !Number.isNaN(n));
  const oldest = Math.min(...life);
  return majors.map(Number).some((m) => life.includes(m) || m < oldest || Math.abs(m - tagMajor(o.obsolete?.tag)) <= 1);
}
const scopeOf = (o: GuardObject, events: string[]) => `${o.title}${o.obsolete?.state && o.obsolete.state !== "No" ? `, ${o.obsolete.state}${o.obsolete.tag ? ` in ${o.obsolete.tag}` : ""}` : ""}${events.length ? ` (event${events.length > 1 ? "s" : ""} ${events.join(", ")})` : ""}`;

/** Per object page id, the cautions that pass the guard. `eventOwners`: event name, lower-cased -> publishing object page ids. */
export function attachCautions(items: CautionItem[], index: ObjectIndex, eventOwners: Map<string, string[]>, objects: Map<string, GuardObject>): Map<string, Attached[]> {
  const out = new Map<string, Attached[]>();
  for (const it of [...items].sort((a, b) => a.id.localeCompare(b.id))) for (const c of it.cautions) {
    const hits = new Map<string, string[]>(); // object id -> events it was matched by
    for (const id of resolveMentions(c.objects, index).pageIds) hits.set(id, []);
    for (const e of c.events) {
      const owners = eventOwners.get(e.toLowerCase()) ?? [];
      if (!owners.length || owners.length > MAX_EVENT_OWNERS) continue;
      for (const id of owners) hits.set(id, [...(hits.get(id) ?? []), e]);
    }
    const majors = majorsOf(c.versions);
    for (const [id, events] of hits) {
      const o = objects.get(id);
      if (!o || !inLife(o, majors)) continue;
      const list = out.get(id) ?? [];
      if (list.some((a) => a.from === it.id && a.quote === c.quote) || list.length >= MAX_PER_OBJECT) continue;
      list.push({ from: it.id, title: it.title, kind: c.kind, quote: c.quote, ...(c.t !== undefined ? { t: Math.floor(c.t) } : {}), scope: scopeOf(o, [...new Set(events)]) });
      out.set(id, list);
    }
  }
  return out;
}

/** A caution's quote in frontmatter: at most QUOTE_MAX characters, cut at a word (a video's disclaimer can run long). */
export const QUOTE_MAX = 240;
export const clipQuote = (t: string) => { const s = t.replace(/\s+/g, " ").trim(); return s.length <= QUOTE_MAX ? s : `${s.slice(0, s.lastIndexOf(" ", QUOTE_MAX - 1))}…`; };
const DISCLAIMER_KINDS = new Set(["preview", "subject-to-change", "not-in-this-release", "coming-later"]);
/** A video's disclaimers (extract/video.ts, verbatim and timed) as preview-disclaimer cautions; `other` is left out. */
export function cautionsFromDisclaimers(ds: { t: number; kind: string; text: string }[]): Caution[] {
  return ds.filter((d) => DISCLAIMER_KINDS.has(d.kind)).map((d) => ({ kind: "preview-disclaimer" as const, quote: clipQuote(d.text), t: Math.floor(d.t), objects: [], events: [], versions: majorsOf([d.text]) }));
}

/** The page a caution comes from as a certain cross-link row (it names this object), so it joins links.posts/videos. */
export const cautionRows = (heads: Attached[]): CrossLink[] => [...new Map(heads.map((h) => [h.from, { to: h.from, title: h.title, label: "names" as const, why: "carries a caution about this object", by: "code" as const }])).values()];

const esc = (s: string) => s.replace(/([[\]])/g, "\\$1").replace(/\s+/g, " ").trim();
/** `## Heads up (community)`: each attached caution with its source page and what it applies to. */
export function headsUpSection(heads: Attached[], up: string): string[] {
  if (!heads.length) return [];
  return ["## Heads up (community)", "", "Warnings from posts and videos that name this object or one of its events; each says what it applies to.", "",
    ...heads.map((h) => `- ${h.kind}: "${esc(h.quote)}" — [${esc(h.title)}](${crossLinkHref(h.from, up)}), applies to ${esc(h.scope)}`), ""];
}

// ---------------------------------------------------------------------------------------------- io

export const cautionLinksPath = (dataDir: string) => resolve(dataDir, "links", "cautions.json");

let cache: { stamp: string; objects: Record<string, Attached[]> } | null = null;
/** Per object page id, its attached cautions (empty when the stage has not run). */
export function loadCautionLinks(dataDir: string): Record<string, Attached[]> {
  const p = cautionLinksPath(dataDir);
  let stamp: string;
  try { const st = statSync(p); stamp = `${p}|${st.mtimeMs}|${st.size}`; } catch { return {}; }
  if (cache?.stamp === stamp) return cache.objects;
  // whole seconds on read as well: a file written before the fix (nightly 2026-10-24) carried fractional ones
  const objects = readJson<{ objects?: Record<string, Attached[]> }>(p).objects ?? {};
  for (const list of Object.values(objects)) for (const a of list) if (a.t !== undefined) a.t = Math.floor(a.t);
  cache = { stamp, objects };
  return cache.objects;
}

/** The post cautions (data/extract/cautions/) and the video disclaimers whose page exists, with their page titles. */
export function loadCautionItems(dataDir: string, contentDir: string): CautionItem[] {
  const items: CautionItem[] = [];
  const titleOf = (id: string) => String(frontmatterOf(readText(resolve(contentDir, pagePathOf(id))))?.title ?? id);
  for (const f of listFiles(resolve(dataDir, "extract", "cautions"), ".json")) {
    const r = readJson<CautionRecord>(f);
    if (r.cautions?.length && exists(resolve(contentDir, pagePathOf(r.page_id)))) items.push({ id: r.page_id, title: titleOf(r.page_id), kind: "post", cautions: r.cautions });
  }
  for (const f of listFiles(resolve(dataDir, "extract", "video"), ".json")) {
    const x = readJson<{ video_id: string; title?: string; disclaimers?: { t: number; kind: string; text: string }[]; objects?: { type: string; name: string; t: number }[] }>(f);
    const id = `video/${x.video_id}`;
    const cs = cautionsFromDisclaimers(x.disclaimers ?? []);
    if (!cs.length || !exists(resolve(contentDir, pagePathOf(id)))) continue;
    // a disclaimer is about the objects the video names within NEAR_SECONDS of it, and only those
    for (const c of cs) c.objects = (x.objects ?? []).filter((o) => Math.abs(o.t - (c.t ?? 0)) <= NEAR_SECONDS).map((o) => ({ type: o.type, name: o.name }));
    items.push({ id, title: x.title ?? titleOf(id), kind: "video", cautions: cs });
  }
  return items;
}

export interface CautionLinksRun { items: number; cautions: number; objects: number; attached: number; written: boolean }

/** The nightly stage: run the guard over every caution and write data/links/cautions.json when it changed. */
export function refreshCautionLinks(dataDir: string, contentDir: string): CautionLinksRun {
  const items = loadCautionItems(dataDir, contentDir);
  const index = loadObjectIndex(dataDir) ?? objectIndexFromRows([]);
  const eventOwners = new Map<string, string[]>();
  for (const [owner, name] of readJsonOr<{ rows?: [string, string][] }>(resolve(dataDir, "index", "events.json"), {}).rows ?? []) {
    const k = String(name).toLowerCase(), id = `object/${owner}`;
    const l = eventOwners.get(k) ?? [];
    if (!l.includes(id)) l.push(id);
    eventOwners.set(k, l);
  }
  // only the objects a caution can reach are read
  const want = new Set<string>();
  for (const it of items) for (const c of it.cautions) {
    for (const id of resolveMentions(c.objects, index).pageIds) want.add(id);
    for (const e of c.events) for (const id of (eventOwners.get(e.toLowerCase()) ?? []).slice(0, MAX_EVENT_OWNERS + 1)) want.add(id);
  }
  const objects = new Map<string, GuardObject>();
  for (const id of want) {
    const p = resolve(contentDir, pagePathOf(id));
    const fm = exists(p) ? frontmatterOf(readText(p)) : null;
    if (fm) objects.set(id, { id, title: String(fm.title), present_in: (fm.present_in ?? []).map(String), obsolete: fm.obsolete ?? null });
  }
  const attached = attachCautions(items, index, eventOwners, objects);
  const body = Object.fromEntries([...attached].sort(([a], [b]) => a.localeCompare(b)));
  const text = `{"schema":${JSON.stringify(SCHEMA)},\n"generated_by":"pipeline/link/cautions.ts",\n"objects":{\n${Object.entries(body).map(([k, v]) => `${JSON.stringify(k)}:${JSON.stringify(v)}`).join(",\n")}\n}}\n`;
  const p = cautionLinksPath(dataDir);
  const written = !exists(p) || readText(p) !== text;
  if (written) writeText(p, text);
  return { items: items.length, cautions: items.reduce((n, i) => n + i.cautions.length, 0), objects: attached.size, attached: [...attached.values()].reduce((n, l) => n + l.length, 0), written };
}
