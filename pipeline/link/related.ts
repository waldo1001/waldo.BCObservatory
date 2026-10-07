/**
 * Related (D65, discovery spec 3.7 and 6.1), deterministic, no LLM: for every topic hub, AL object, first-party app,
 * video, post and roadmap feature, up to MAX pages a reader may have meant instead, each with a reason from a closed
 * set (WHY). Derived from structure only: the Learn TOC (titles, parents, set-up slugs), the object pages' hubs
 * (`links.topics`, which already carry what a table inherits through its pages), the topic links of videos and posts
 * (data/links/topics.json), the apps snapshots, and object mentions by exact name (link/mentions.ts).
 *
 * Writes data/links/related.json: `{ schema, generated_by, why, nodes: { id: [title, kind, system] }, pages: { id:
 * [{ id, why }] } }`, one page per line so a night's diff reads page by page. The site draws the block from it, the
 * graph turns it into `relates` edges; the markdown pages do not carry it, so no page's input hash moves because a
 * neighbour changed.
 */
import { resolve } from "node:path";
import { parse as parseYaml } from "yaml";
import { appId, firstPartyApps } from "../lib/apps.js";
import { exists, listFiles, readJsonOr, readText, writeText } from "../lib/fsx.js";
import { objectSystem } from "../lib/systems.js";
import { mentionedObjects, objectByName } from "./mentions.js";
import { loadTopicLinks, loadTopicReview, mediaByTopic } from "./topics.js";

export const SCHEMA = "bcobs-related@1";
export const MAX = 8;
/** At most this many rows of one rank before the other ranks get their turn (an object keeps its app row). */
export const PER_RANK = 6;

/** The closed set of reasons, by rank; `<hub>`, `<app>` and `<n>` are filled in. Agents filter on these. */
export const WHY = [
  [1, "same title, different Learn section"],
  [2, "set-up guide for this feature"],
  [2, "the feature this sets up"],
  [3, "both documented in <hub>"],
  [3, "shares <n> AL objects"],
  [4, "same Learn section"],
  [5, "shares <n> videos/posts"],
  [5, "both linked to <hub>"],
  [6, "same app"],
  [6, "names objects of this app"],
  [6, "app name in the feature title"],
  [7, "implements <hub>"],
  [7, "implemented by <app>"],
] as const;

const WHY_RE = WHY.map(([n, w]) => [n, new RegExp(`^${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/<[a-z]+>/g, ".+")}$`)] as const);
/** Rank of a reason string (0 when it is not in the closed set). */
export const rankOf = (why: string) => WHY_RE.find(([, re]) => re.test(why))?.[0] ?? 0;

/** Title words that never make two hubs "the same title": the spec's stop list plus English function words. */
const STOP = new Set(["setup", "set", "overview", "general", "report", "analytic", "api", "management",
  "and", "the", "for", "with", "from", "your", "you", "using", "use", "how", "about", "into", "its", "are", "not", "all", "what"]);
/** IDF threshold over hub titles: log(N/df) >= log(605/5), i.e. a word in at most 5 of 605 hubs. */
const IDF_MIN = Math.log(605 / 5);

export interface RelHub { id: string; title: string; parent: string | null; children: string[]; system: string | null }
export interface RelObject { id: string; title: string; object_type: string; topics: string[]; app: string | null; system: string }
export interface RelMedia { id: string; title: string; kind: "video" | "post"; objects: string[]; system: string | null }
export interface RelFeature { id: string; title: string; system: string | null }
export interface RelatedInput {
  hubs: RelHub[]; objects: RelObject[]; media: RelMedia[]; features: RelFeature[];
  /** Hub id -> the video and post page ids linked to it (link/topics.ts). */
  hubMedia: Map<string, string[]>;
  /** First-party app folder names (the apps snapshots). */
  apps: Iterable<string>;
}
export interface RelatedRow { id: string; why: string }
export interface Related { schema: typeof SCHEMA; generated_by: string; why: string[]; nodes: Record<string, [string, string, string | null]>; pages: Record<string, RelatedRow[]> }

const words = (title: string) => [...new Set(title.toLowerCase().split(/[^a-z0-9]+/)
  .map((w) => (w.length > 3 && w.endsWith("s") ? w.slice(0, -1) : w)).filter((w) => w.length >= 3 && !/^\d+$/.test(w) && !STOP.has(w)))];
const sameTitle = (t: string) => t.toLowerCase().trim().replace(/s$/, "");
const lastSeg = (id: string) => id.slice(id.lastIndexOf("/") + 1);
const byTitle = (a: string, b: string) => a.localeCompare(b, "en", { numeric: true });

interface Cand { id: string; rank: number; why: string; key: (number | string)[] }

/** The Related lists. Pure: the same input gives the same file. */
export function buildRelated(inp: RelatedInput): Pick<Related, "nodes" | "pages"> {
  const nodes = new Map<string, [string, string, string | null]>();
  const hubs = new Map(inp.hubs.map((h) => [h.id, h]));
  for (const h of inp.hubs) nodes.set(h.id, [h.title, "topic", h.system]);
  const objects = new Map(inp.objects.map((o) => [o.id, o]));
  for (const o of inp.objects) nodes.set(o.id, [o.title, o.object_type, o.system]);
  for (const m of inp.media) nodes.set(m.id, [m.title, m.kind, m.system]);
  for (const f of inp.features) nodes.set(f.id, [f.title, "feature", f.system]);
  const title = (id: string) => nodes.get(id)?.[0] ?? id;
  const hubLabel = (id: string) => { const h = hubs.get(id); if (!h) return id; const p = h.parent ? hubs.get(h.parent) : undefined; return p ? `${p.title} > ${h.title}` : h.title; };

  // ancestry, for "different Learn section"
  const ancestors = new Map<string, Set<string>>();
  const anc = (id: string): Set<string> => {
    if (ancestors.has(id)) return ancestors.get(id)!;
    const s = new Set<string>();
    ancestors.set(id, s);
    for (let p = hubs.get(id)?.parent ?? null, guard = 0; p && guard < 64; p = hubs.get(p)?.parent ?? null, guard++) s.add(p);
    return s;
  };
  const sameSection = (a: string, b: string) => anc(a).has(b) || anc(b).has(a) || (!!hubs.get(a)?.parent && hubs.get(a)!.parent === hubs.get(b)?.parent);

  // first-party apps: their objects, system (most frequent among the objects), hubs
  const appNames = new Set(inp.apps);
  const appObjects = new Map<string, RelObject[]>();
  for (const o of inp.objects) if (o.app && appNames.has(o.app)) appObjects.set(o.app, [...(appObjects.get(o.app) ?? []), o]);
  const appOf = new Map<string, string>(); // object id -> app page id
  for (const [name, os] of appObjects) {
    const count = new Map<string, number>();
    for (const o of os) count.set(o.system, (count.get(o.system) ?? 0) + 1);
    const system = [...count].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0] ?? null;
    nodes.set(appId(name), [name, "app", system]);
    for (const o of os) appOf.set(o.id, appId(name));
  }

  const cands = new Map<string, Map<string, Cand>>();
  const add = (from: string, c: Cand) => {
    if (from === c.id || !nodes.has(from) || !nodes.has(c.id)) return;
    const m = cands.get(from) ?? cands.set(from, new Map()).get(from)!;
    const cur = m.get(c.id);
    if (!cur || c.rank < cur.rank) m.set(c.id, c);
  };

  // hub -> objects documented there (the objects' own hubs, so a table's inherited hubs count)
  const hubObjects = new Map<string, string[]>();
  for (const o of inp.objects) for (const h of o.topics) if (hubs.has(h)) hubObjects.set(h, [...(hubObjects.get(h) ?? []), o.id]);
  const hubSize = (h: string) => hubObjects.get(h)?.length ?? 0;

  // 2. set-up guide <-> feature, by slug: `<x>` and `set-up-<x>` (checked first: it is the more specific reason)
  const setupPairs = new Set<string>();
  const bySeg = new Map<string, string[]>();
  for (const h of inp.hubs) bySeg.set(lastSeg(h.id), [...(bySeg.get(lastSeg(h.id)) ?? []), h.id]);
  for (const h of inp.hubs) {
    const seg = lastSeg(h.id);
    if (!seg.startsWith("set-up-")) continue;
    for (const f of bySeg.get(seg.slice("set-up-".length)) ?? []) {
      if (f === h.id || anc(f).has(h.id)) continue;
      setupPairs.add(`${f}|${h.id}`).add(`${h.id}|${f}`);
      add(f, { id: h.id, rank: 2, why: "set-up guide for this feature", key: [title(h.id)] });
      add(h.id, { id: f, rank: 2, why: "the feature this sets up", key: [title(f)] });
    }
  }

  // 1. same title, different Learn section: equal titles, or a rare title word (IDF over hub titles)
  const df = new Map<string, number>();
  const hw = new Map(inp.hubs.map((h) => [h.id, words(h.title)]));
  for (const ws of hw.values()) for (const w of ws) df.set(w, (df.get(w) ?? 0) + 1);
  const rare = (w: string) => Math.log(inp.hubs.length / (df.get(w) ?? 1)) >= IDF_MIN - 1e-9;
  const byWord = new Map<string, string[]>();
  for (const [id, ws] of hw) for (const w of ws) if (rare(w)) byWord.set(w, [...(byWord.get(w) ?? []), id]);
  const byTitleKey = new Map<string, string[]>();
  for (const h of inp.hubs) if (hw.get(h.id)!.length) byTitleKey.set(sameTitle(h.title), [...(byTitleKey.get(sameTitle(h.title)) ?? []), h.id]);
  const titlePair = (a: string, b: string, equal: boolean, shared: number) => {
    if (a === b || sameSection(a, b) || setupPairs.has(`${a}|${b}`)) return;
    add(a, { id: b, rank: 1, why: "same title, different Learn section", key: [equal ? 0 : 1, -shared, title(b)] });
  };
  for (const ids of byTitleKey.values()) for (const a of ids) for (const b of ids) titlePair(a, b, true, 0);
  for (const a of inp.hubs) {
    const shared = new Map<string, number>();
    for (const w of hw.get(a.id)!) if (rare(w)) for (const b of byWord.get(w) ?? []) shared.set(b, (shared.get(b) ?? 0) + 1);
    for (const [b, n] of shared) titlePair(a.id, b, sameTitle(a.title) === sameTitle(hubs.get(b)!.title), n);
  }

  // 3. objects that share a hub; hubs that share >= 2 objects
  for (const o of inp.objects) {
    const agg = new Map<string, string[]>();
    for (const h of o.topics) for (const p of hubObjects.get(h) ?? []) if (p !== o.id) agg.set(p, [...(agg.get(p) ?? []), h]);
    for (const [p, hs] of agg) {
      const best = [...hs].sort((a, b) => hubSize(a) - hubSize(b) || byTitle(title(a), title(b)))[0];
      const q = objects.get(p)!;
      add(o.id, { id: p, rank: 3, why: `both documented in ${hubLabel(best)}`, key: [q.object_type === o.object_type ? 0 : 1, -hs.length, hubSize(best), title(p)] });
    }
  }
  const hubPairs = new Map<string, number>();
  for (const o of inp.objects) {
    const hs = [...new Set(o.topics.filter((h) => hubs.has(h)))].sort();
    for (let i = 0; i < hs.length; i++) for (let j = i + 1; j < hs.length; j++) { const k = `${hs[i]}|${hs[j]}`; hubPairs.set(k, (hubPairs.get(k) ?? 0) + 1); }
  }
  for (const [k, n] of hubPairs) {
    if (n < 2) continue;
    const [a, b] = k.split("|");
    add(a, { id: b, rank: 3, why: `shares ${n} AL objects`, key: [-n, title(b)] });
    add(b, { id: a, rank: 3, why: `shares ${n} AL objects`, key: [-n, title(a)] });
  }

  // 4. TOC siblings
  for (const h of inp.hubs) {
    const sibs = h.parent ? hubs.get(h.parent)?.children ?? [] : [];
    for (const s of sibs) if (s !== h.id && hubs.has(s)) add(h.id, { id: s, rank: 4, why: "same Learn section", key: [title(s)] });
  }

  // 5. hubs linked to the same videos and posts; videos and posts linked to the same hub
  const mediaIds = new Set(inp.media.map((m) => m.id));
  const mediaHubs = new Map<string, string[]>();
  for (const [h, ms] of inp.hubMedia) if (hubs.has(h)) for (const m of new Set(ms)) if (mediaIds.has(m)) mediaHubs.set(m, [...(mediaHubs.get(m) ?? []), h]);
  const hubMediaPairs = new Map<string, number>();
  for (const hs of mediaHubs.values()) {
    const s = [...new Set(hs)].sort();
    for (let i = 0; i < s.length; i++) for (let j = i + 1; j < s.length; j++) { const k = `${s[i]}|${s[j]}`; hubMediaPairs.set(k, (hubMediaPairs.get(k) ?? 0) + 1); }
  }
  for (const [k, n] of hubMediaPairs) {
    const [a, b] = k.split("|");
    add(a, { id: b, rank: 5, why: `shares ${n} videos/posts`, key: [-n, title(b)] });
    add(b, { id: a, rank: 5, why: `shares ${n} videos/posts`, key: [-n, title(a)] });
  }
  const hubMediaCount = (h: string) => inp.hubMedia.get(h)?.length ?? 0;
  for (const [m, hs] of mediaHubs) {
    const agg = new Map<string, string[]>();
    for (const h of hs) for (const o of inp.hubMedia.get(h) ?? []) if (o !== m && mediaIds.has(o)) agg.set(o, [...(agg.get(o) ?? []), h]);
    for (const [o, shared] of agg) {
      const best = [...shared].sort((a, b) => hubMediaCount(a) - hubMediaCount(b) || byTitle(title(a), title(b)))[0];
      add(m, { id: o, rank: 5, why: `both linked to ${hubLabel(best)}`, key: [-shared.length, title(o)] });
    }
  }

  // 6. an object's app; a video or post naming an app's objects; a feature whose title names an app
  for (const o of inp.objects) { const a = appOf.get(o.id); if (a) add(o.id, { id: a, rank: 6, why: "same app", key: [title(a)] }); }
  for (const m of inp.media) {
    const n = new Map<string, number>();
    for (const o of m.objects) { const a = appOf.get(o); if (a) n.set(a, (n.get(a) ?? 0) + 1); }
    for (const [a, c] of n) add(m.id, { id: a, rank: 6, why: "names objects of this app", key: [-c, title(a)] });
  }
  for (const name of appObjects.keys()) {
    const needle = name.toLowerCase();
    for (const f of inp.features) if (f.title.toLowerCase().includes(needle)) {
      add(f.id, { id: appId(name), rank: 6, why: "app name in the feature title", key: [title(appId(name))] });
      add(appId(name), { id: f.id, rank: 6, why: "app name in the feature title", key: [title(f.id)] });
    }
  }

  // 7. an app and the hubs its objects are documented in; apps that share a hub (3)
  const appHubs = new Map<string, Map<string, number>>();
  for (const [name, os] of appObjects) {
    const m = new Map<string, number>();
    for (const o of os) for (const h of new Set(o.topics)) if (hubs.has(h)) m.set(h, (m.get(h) ?? 0) + 1);
    appHubs.set(appId(name), m);
    for (const [h, c] of m) {
      add(appId(name), { id: h, rank: 7, why: `implements ${hubLabel(h)}`, key: [-c, title(h)] });
      add(h, { id: appId(name), rank: 7, why: `implemented by ${name}`, key: [-c, name] });
    }
  }
  const hubApps = new Map<string, string[]>();
  for (const [a, m] of appHubs) for (const h of m.keys()) hubApps.set(h, [...(hubApps.get(h) ?? []), a]);
  for (const [a, m] of appHubs) {
    const agg = new Map<string, string[]>();
    for (const h of m.keys()) for (const b of hubApps.get(h) ?? []) if (b !== a) agg.set(b, [...(agg.get(b) ?? []), h]);
    for (const [b, hs] of agg) {
      const best = [...hs].sort((x, y) => (hubApps.get(x)?.length ?? 0) - (hubApps.get(y)?.length ?? 0) || hubSize(x) - hubSize(y) || byTitle(title(x), title(y)))[0];
      add(a, { id: b, rank: 3, why: `both documented in ${hubLabel(best)}`, key: [-hs.length, title(b)] });
    }
  }

  // order by rank, then the rule's own key; at most PER_RANK of one rank first, then fill to MAX
  const cmp = (a: Cand, b: Cand) => a.rank - b.rank || cmpKey(a.key, b.key) || a.id.localeCompare(b.id);
  const pages: Record<string, RelatedRow[]> = {};
  const used = new Set<string>();
  for (const id of [...cands.keys()].sort()) {
    const all = [...cands.get(id)!.values()].sort(cmp);
    const perRank = new Map<number, number>();
    const pick: Cand[] = [];
    for (const c of all) { if (pick.length >= MAX) break; const n = perRank.get(c.rank) ?? 0; if (n < PER_RANK) { pick.push(c); perRank.set(c.rank, n + 1); } }
    for (const c of all) { if (pick.length >= MAX) break; if (!pick.includes(c)) pick.push(c); }
    pick.sort(cmp);
    pages[id] = pick.map((c) => ({ id: c.id, why: c.why }));
    for (const c of pick) used.add(c.id);
  }
  const outNodes: Record<string, [string, string, string | null]> = {};
  for (const id of [...used].sort()) outNodes[id] = nodes.get(id)!;
  return { nodes: outNodes, pages };
}

function cmpKey(a: (number | string)[], b: (number | string)[]): number {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const x = a[i], y = b[i];
    if (x === y) continue;
    if (x === undefined) return -1;
    if (y === undefined) return 1;
    if (typeof x === "number" && typeof y === "number") return x - y;
    return byTitle(String(x), String(y));
  }
  return 0;
}

// ---------------------------------------------------------------------------------------------- io

export const relatedPath = (dataDir: string) => resolve(dataDir, "links", "related.json");

/** The file, or empty lists when the stage has not run yet. */
export function loadRelated(dataDir: string): Related {
  return readJsonOr<Related>(relatedPath(dataDir), { schema: SCHEMA, generated_by: "", why: [], nodes: {}, pages: {} });
}

/** Frontmatter only, parsed without gray-matter's cache (25,000 object pages). */
export function frontmatterOf(text: string): Record<string, any> | null {
  if (!text.startsWith("---")) return null;
  const end = text.indexOf("\n---", 3);
  if (end < 0) return null;
  try { return (parseYaml(text.slice(text.indexOf("\n") + 1, end + 1)) ?? null) as Record<string, any> | null; } catch { return null; }
}

/** Everything the stage reads: hub data, object, video, post and feature pages, topic links, the apps snapshots. */
export function loadRelatedInput(dataDir: string, contentDir: string): RelatedInput {
  const topics = readJsonOr<{ topics?: { id: string; title: string; parent: string | null; children: string[]; system: string | null }[] }>(resolve(dataDir, "hubs", "topics.json"), {}).topics ?? [];
  const hubs: RelHub[] = topics.map((h) => ({ id: h.id, title: h.title, parent: h.parent ?? null, children: h.children ?? [], system: h.system ?? null }));
  const pages = (section: string) => listFiles(resolve(contentDir, section), ".md").map((f) => frontmatterOf(readText(f))).filter((fm): fm is Record<string, any> => !!fm?.id);
  const allObjects = pages("objects").filter((fm) => fm.type === "object");
  // a country's own object has no hubs and no app; it still counts for names, as in the graph
  const objectPages = allObjects.filter((fm) => !fm.country);
  const objects: RelObject[] = objectPages.map((fm) => ({ id: fm.id, title: String(fm.title), object_type: String(fm.object_type), topics: (fm.links?.topics ?? []).map(String), app: fm.app ? String(fm.app) : null, system: objectSystem(fm.namespace) }));
  const byName = objectByName(allObjects.map((fm) => ({ id: fm.id, fm })));
  const media: RelMedia[] = [...pages("videos"), ...pages("posts")].filter((fm) => fm.type === "video" || fm.type === "post")
    .map((fm) => ({ id: fm.id, title: String(fm.title), kind: fm.type, objects: mentionedObjects(fm, byName), system: fm.system ?? null }));
  const features: RelFeature[] = pages("features").filter((fm) => fm.type === "feature").map((fm) => ({ id: fm.id, title: String(fm.title), system: fm.system ?? null }));
  const hubMedia = new Map<string, string[]>();
  for (const [h, ms] of mediaByTopic(loadTopicLinks(dataDir), loadTopicReview(dataDir))) hubMedia.set(h, ms.filter((m) => m.kind === "video" || m.kind === "post").map((m) => m.key));
  return { hubs, objects, media, features, hubMedia, apps: firstPartyApps(dataDir).keys() };
}

export interface RelatedRun { pages: number; rows: number; by_rank: Record<string, number>; written: boolean }

/** The nightly stage: build and write data/links/related.json when it changed. */
export function refreshRelated(dataDir: string, contentDir: string): RelatedRun {
  const r = buildRelated(loadRelatedInput(dataDir, contentDir));
  const text = serialize(r);
  const p = relatedPath(dataDir);
  const written = !exists(p) || readText(p) !== text;
  if (written) writeText(p, text);
  const by_rank: Record<string, number> = {};
  let rows = 0;
  for (const list of Object.values(r.pages)) for (const row of list) { rows++; const n = String(rankOf(row.why)); by_rank[n] = (by_rank[n] ?? 0) + 1; }
  return { pages: Object.keys(r.pages).length, rows, by_rank, written };
}

/** One page (and one node) per line: valid JSON whose git diff reads page by page. */
export function serialize(r: Pick<Related, "nodes" | "pages">): string {
  const block = (o: Record<string, unknown>) => Object.entries(o).map(([k, v]) => `${JSON.stringify(k)}:${JSON.stringify(v)}`).join(",\n");
  return `{"schema":${JSON.stringify(SCHEMA)},\n"generated_by":"pipeline/link/related.ts",\n"why":${JSON.stringify(WHY.map(([, w]) => w))},\n"nodes":{\n${block(r.nodes)}\n},\n"pages":{\n${block(r.pages)}\n}}\n`;
}
