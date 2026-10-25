/**
 * The galaxy's pure parts (D66), no canvas and no DOM: the deep-link hash, where a port sits on the canvas edge and
 * how the ports share the border (D92), the list view's sort, the Lenses menu and its chip (D92).
 */

import type { Box, ViewRect } from "./galaxy-labels.js";
import { parsePills, pillDisabled, pillsParam, togglePill, usablePills } from "./pills-core.js";

/** `#system=finance&lens=version:30` -> Map; the older single-key form (`#star=object/table/18`) parses the same. */
export function parseHash(hash: string): Map<string, string> {
  const out = new Map<string, string>();
  for (const part of hash.replace(/^#/, "").split("&")) {
    const i = part.indexOf("=");
    if (i <= 0) continue;
    const k = part.slice(0, i), v = decodeURIComponent(part.slice(i + 1));
    if (["system", "star", "lens", "q", "view", "tilt", "kinds", "plane"].includes(k) && v) out.set(k, v);
  }
  return out;
}

/**
 * D100: does a first search send the reader to the galaxy level? From a flat system or star level the reader typed it
 * at (D44); never while tilted (or sliding), never when the hash named the scope.
 */
export function searchLeaves(s: { had: boolean; level: number; tilt: number; fromHash: boolean }): boolean {
  return !s.had && s.level > 1 && !(s.level === 2 && s.tilt > 0) && !s.fromHash;
}

/**
 * Where a port goes: the point where the ray from the star towards the target system leaves the rectangle. A target
 * system inside the rectangle still gets its port on the edge, in its direction, so the port never covers a star.
 */
export function portSpot(from: { x: number; y: number }, to: { x: number; y: number }, r: { x0: number; y0: number; x1: number; y1: number }): { x: number; y: number } {
  let dx = to.x - from.x, dy = to.y - from.y;
  if (!dx && !dy) dx = 1;
  const cx = Math.min(Math.max(from.x, r.x0), r.x1), cy = Math.min(Math.max(from.y, r.y0), r.y1);
  const ts = [dx > 0 ? (r.x1 - cx) / dx : dx < 0 ? (r.x0 - cx) / dx : Infinity, dy > 0 ? (r.y1 - cy) / dy : dy < 0 ? (r.y0 - cy) / dy : Infinity];
  const t = Math.max(0, Math.min(...ts));
  return { x: Math.round(cx + dx * t), y: Math.round(cy + dy * t) };
}

/**
 * D92: where each port goes. `want` = each port's spot (from portSpot) and size, in the order of the star's `cross`
 * (heaviest first). A port first tries its box centred on the spot and clamped into `area`; if that conflicts, it takes
 * the free slot whose centre is nearest the spot (ties: top, right, bottom, left, then along the edge). Slots for a
 * w x h port: top y = y0 and bottom y = y1 - h at x = x0 + k(w + gap) while x + w <= x1; right x = x1 - w and left
 * x = x0 at y = y0 + k(h + gap) while y + h <= y1. Conflict: closer than `gap` to a port placed before it, or hitting
 * an obstacle. Null when the port is larger than the area or no slot is free.
 */
export function packPorts(want: readonly { x: number; y: number; w: number; h: number }[], area: ViewRect, obstacles: readonly Box[], gap = 8): (Box | null)[] {
  const placed: Box[] = [];
  const hit = (a: Box, b: Box) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
  const near = (a: Box, b: Box) => a.x < b.x + b.w + gap && b.x < a.x + a.w + gap && a.y < b.y + b.h + gap && b.y < a.y + a.h + gap;
  const free = (b: Box) => !placed.some((p) => near(b, p)) && !obstacles.some((o) => hit(b, o));
  return want.map(({ x, y, w, h }) => {
    if (w > area.x1 - area.x0 || h > area.y1 - area.y0) return null;
    const centred = { x: Math.min(Math.max(x - w / 2, area.x0), area.x1 - w), y: Math.min(Math.max(y - h / 2, area.y0), area.y1 - h), w, h };
    let box: Box | null = free(centred) ? centred : null;
    if (!box) {
      const slots: Box[] = [];
      for (let sx = area.x0; sx + w <= area.x1; sx += w + gap) slots.push({ x: sx, y: area.y0, w, h });
      for (let sy = area.y0; sy + h <= area.y1; sy += h + gap) slots.push({ x: area.x1 - w, y: sy, w, h });
      for (let sx = area.x0; sx + w <= area.x1; sx += w + gap) slots.push({ x: sx, y: area.y1 - h, w, h });
      for (let sy = area.y0; sy + h <= area.y1; sy += h + gap) slots.push({ x: area.x0, y: sy, w, h });
      let bd = Infinity;
      for (const s of slots) {
        if (!free(s)) continue;
        const d = (s.x + w / 2 - x) ** 2 + (s.y + h / 2 - y) ** 2;
        if (d < bd) { bd = d; box = s; }
      }
    }
    if (box) placed.push(box);
    return box;
  });
}

export type SortKey = "star" | "kind" | "system" | "connections" | "evidence" | "changed";
interface Sortable { id: string; label: string; type: string; group: string; weight: number; ev?: number; cv?: string[] }
/** The list view's order: names and kinds A to Z, numbers and versions highest first; ties by label, then id. */
export function sortRows<T extends Sortable>(rows: T[], key: SortKey): T[] {
  const by: Record<SortKey, (a: T, b: T) => number> = {
    star: (a, b) => a.label.localeCompare(b.label, "en", { numeric: true }),
    kind: (a, b) => a.type.localeCompare(b.type),
    system: (a, b) => a.group.localeCompare(b.group),
    connections: (a, b) => b.weight - a.weight,
    evidence: (a, b) => (b.ev ?? 0) - (a.ev ?? 0),
    changed: (a, b) => (b.cv?.at(-1) ?? "").localeCompare(a.cv?.at(-1) ?? "") || (b.cv?.length ?? 0) - (a.cv?.length ?? 0),
  };
  return [...rows].sort((a, b) => by[key](a, b) || a.label.localeCompare(b.label, "en", { numeric: true }) || a.id.localeCompare(b.id));
}

/** D71: the landed-this-week rings and pulse draw only while the this-week lens is the active lens. */
export const landedRingsOn = (lensId: string | null | undefined): boolean => lensId === "landed";

/** D113: one turn of a hub's media bodies, in ms. */
export const ORBIT_MS = 40_000;
/** D113: frames while orbits are the only motion are at least this far apart (30 fps). */
export const ORBIT_FRAME_MS = 33;
/** D113: a hub's start angle in [0, 2π), stable per id (FNV-1a), so neighbouring hubs are not in step. */
export function orbitPhase(id: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 0x01000193);
  return ((h >>> 0) / 2 ** 32) * 2 * Math.PI;
}
/** D113: body i of k round its hub. No time: the static fan (reduced motion); else evenly spaced, turning clockwise. */
export function bodyAngle(i: number, k: number, t: number | null, phase: number): number {
  if (t === null) return -Math.PI / 2 + (i * Math.PI) / 6;
  return -Math.PI / 2 + phase + (2 * Math.PI * i) / k + (2 * Math.PI * (t % ORBIT_MS)) / ORBIT_MS;
}
/** D113: media bodies orbit at system and star level in the flat view, never under reduced motion. */
export const orbiting = (s: { level: number; tilted: boolean; reduced: boolean; bodies: boolean }): boolean => s.level >= 2 && !s.tilted && !s.reduced && s.bodies;

/** A major's labels from config/versions.json, passed to the galaxy as `data-majors` (D72). */
export interface MajorMeta { label: string; vnext?: boolean }
export interface VersionEntry { id: string; version: string; label: string; title: string; count: number; active: boolean }
/**
 * D72, the version menu: every major the graph has changes for, newest first; `remembered` = active ?? newest. A major
 * config does not list falls back to `BC<v>`; a major config lists but no star changed in gets no entry.
 */
export function versionMenu(
  versions: readonly string[], counts: ReadonlyMap<string, number>, majors: Record<string, MajorMeta>, active: string | null,
): { remembered: string | null; entries: VersionEntry[] } {
  const vs = [...new Set(versions)].sort((a, b) => Number(b) - Number(a));
  const entries = vs.map((v) => ({
    id: `version:${v}`, version: v, label: `BC${v}${majors[v]?.vnext ? " vNext" : ""}`, title: majors[v]?.label ?? `BC${v}`,
    count: counts.get(v) ?? 0, active: v === active,
  }));
  return { remembered: active && vs.includes(active) ? active : vs[0] ?? null, entries };
}

/** D92, D103: the groups of the Lenses menu, in menu order (Time first): the lens group, the menu group's id and its heading. */
const MENU_GROUPS: readonly [string, LensGroupId, string][] = [
  ["Time", "time", "Time"], ["Version", "version", "Version"], ["Type", "type", "Type"], ["Tier", "tier", "Tier"],
  ["Coverage", "coverage", "Coverage"], ["Localization", "country", "Country"], ["Source", "source", "Source"],
];
export type LensGroupId = "version" | "time" | "type" | "tier" | "coverage" | "country" | "source";
export interface LensEntry { id: string; label: string; n: number; on: boolean; title: string | null }
export interface LensGroup { id: LensGroupId; label: string; entries: LensEntry[] }
/**
 * D92, the Lenses menu: every lens in groups, a group with no lens left out. Version entries come from `versionMenu`
 * (newest first, `BC30 vNext`, the config label as title); Type, Tier, Coverage and Time entries are the lens label and
 * its count (`counts` by lens id, 0 when missing). Country and Source are one entry each that opens the panel picker
 * (D78): `n` is the number of lenses in the group, pressed while one of them is on. `on` elsewhere: the entry is `active`.
 */
export function lensMenu(
  lenses: readonly { id: string; label: string; group: string; version?: string }[],
  counts: ReadonlyMap<string, number>, majors: Record<string, MajorMeta>, active: string | null,
): LensGroup[] {
  const out: LensGroup[] = [];
  for (const [group, id, label] of MENU_GROUPS) {
    const ls = lenses.filter((l) => l.group === group);
    if (!ls.length) continue;
    let entries: LensEntry[];
    if (id === "version") {
      const vs = ls.map((l) => l.version ?? l.id.replace(/^version:/, ""));
      entries = versionMenu(vs, new Map(vs.map((v) => [v, counts.get(`version:${v}`) ?? 0])), majors, null).entries
        .map((e) => ({ id: e.id, label: e.label, n: e.count, on: e.id === active, title: e.title }));
    } else if (id === "country" || id === "source") {
      const [pick, name, prefix] = id === "country" ? ["pick:localization", "Pick a country", "loc:"] : ["pick:source", "Pick a source", "src:"];
      entries = [{ id: pick, label: name, n: ls.length, on: !!active?.startsWith(prefix), title: null }];
    } else entries = ls.map((l) => ({ id: l.id, label: l.label, n: counts.get(l.id) ?? 0, on: l.id === active, title: null }));
    out.push({ id, label, entries });
  }
  return out;
}

/** D92, the active-lens chip: the label cut to 27 characters and "…" past 28 (the full label in title), the count, the name. */
export function lensChip(label: string, n: number): { text: string; count: string; aria: string; title: string | null } {
  const cut = label.length > 28;
  return { text: cut ? `${label.slice(0, 27)}…` : label, count: String(n), aria: `Clear the lens: ${label}`, title: cut ? label : null };
}

/** The parts of a media row's second line (D73): kind pill, source name, date; unknown parts left out. */
export function mediaMeta(kind: string, source: string | null | undefined, date: string | null | undefined): { kind: "video" | "post"; parts: string[] } {
  return { kind: kind === "v" ? "video" : "post", parts: [source, date].filter((x): x is string => !!x) };
}

/** A lens picker row (D78): the lens, the number of stars it lights, and its marker. */
export interface PickerRow { id: string; label: string; n: number; marker: "loc" | "tri" | "bar" | "dot" }
/**
 * D78, the lens picker (`#lens=pick:localization|source`): every lens of the group with the count of stars it lights
 * (the same number the lens chip shows), highest first, then by label. The marker: the localization dot, a source's
 * kind (youtube a triangle, blog a bar, as the media rows of D73), a plain dot for any other or unknown kind.
 */
export function pickerRows<N>(
  lenses: readonly { id: string; label: string; group: string; kind?: string; match: (n: N) => boolean }[], nodes: readonly N[], group: string,
): PickerRow[] {
  return lenses.filter((l) => l.group === group)
    .map((l): PickerRow => ({
      id: l.id, label: l.label, n: nodes.filter(l.match).length,
      marker: group === "Localization" ? "loc" : l.kind === "youtube" ? "tri" : l.kind === "blog" ? "bar" : "dot",
    }))
    .sort((a, b) => b.n - a.n || a.label.localeCompare(b.label, "en"));
}

/** D80: the kinds of the this-week lens, in pill order: videos, posts, code changes. */
export type WeekKind = "v" | "p" | "c";
export const WEEK_KINDS: readonly WeekKind[] = ["v", "p", "c"];
/**
 * D81: the pills the week offers. Without a `changes` key landed.json predates the code that computes the week's
 * changes: that is "not computed yet", not "no changes", so there is no Code pill rather than a false "Code 0".
 */
export const weekPills = (hasCode: boolean): readonly WeekKind[] => (hasCode ? WEEK_KINDS : WEEK_KINDS.filter((k) => k !== "c"));
/** The hash's `kinds=` ("c", "v,p"): unknown letters dropped; empty, missing or all unknown means all three. */
export const parseKinds = (s: string | null | undefined): Set<WeekKind> => parsePills(s, WEEK_KINDS);
/** The hash value for the pills: null when all three are on (the hash leaves `kinds` out), else the letters in pill order. */
export const kindsParam = (on: Set<WeekKind>): string | null => pillsParam(on, WEEK_KINDS);
/** Toggle one pill; switching off the last one turns all three on, so the list is never empty. */
export const toggleKind = (on: Set<WeekKind>, k: WeekKind): Set<WeekKind> => togglePill(on, k, WEEK_KINDS);
/**
 * The pills a reader can actually use: when none of the kinds that are on has anything this week (a `kinds=c` link
 * before the week has code changes), all three come back on, so the lens never opens empty and stuck.
 */
export const usableKinds = (on: Set<WeekKind>, counts: Record<WeekKind, number>): Set<WeekKind> => usablePills(on, counts, WEEK_KINDS);
/** A pill is disabled only when it has nothing this week and is off: a pressed pill can always be switched off (D82: pills-core). */
export { pillDisabled };
export type CodeGroup = "breaking" | "features" | "fixes" | "other" | "tooling";
export const CODE_GROUPS: readonly CodeGroup[] = ["breaking", "features", "fixes", "other", "tooling"];
/** D80: a change's group in the week's code list. Not BCApps -> tooling; then breaking, feature, fix, the rest other. */
export function codeGroup(id: string, kind: string, breaking: number): CodeGroup {
  if (!id.startsWith("change/bcapps/")) return "tooling";
  if (breaking || kind === "breaking") return "breaking";
  return kind === "feature" ? "features" : kind === "fix" ? "fixes" : "other";
}
/** The week's changes per group, in group order; empty groups left out, rows keep their order. */
export function groupChanges<T extends [string, string, string, string[], string, string, number, string[]]>(rows: readonly T[]): { group: CodeGroup; rows: T[] }[] {
  const by = new Map<CodeGroup, T[]>();
  for (const r of rows) { const k = codeGroup(r[0], r[1], r[6]); (by.get(k) ?? by.set(k, []).get(k)!).push(r); }
  return CODE_GROUPS.filter((k) => by.has(k)).map((group) => ({ group, rows: by.get(group)! }));
}

/** D87: the key under the galaxy says only what the canvas draws at this level. */
export type LegendItem = "hub" | "obj" | "tri" | "bar" | "cross" | "com" | "week";
export function legendItems(level: number, lensId: string | null | undefined): LegendItem[] {
  const items: LegendItem[] = ["hub", "obj"];
  if (level >= 2) items.push("tri", "bar"); // media bodies are drawn beside the hubs of the system in view
  if (level >= 3) items.push("cross"); // dashed edges to the ports exist only for a focused star
  items.push("com");
  if (landedRingsOn(lensId)) items.push("week");
  return items;
}

/** D87: one sentence that says what a star is, from the summary's own counts; types with no node are left out. */
export function starIntro(counts: Record<string, number>): string {
  const label: Record<string, [string, string]> = { topic: ["Learn hub", "Learn hubs"], app: ["first-party app", "first-party apps"], feature: ["roadmap feature", "roadmap features"], localization: ["country", "countries"], source: ["source", "sources"] };
  const parts = Object.keys(label).filter((t) => counts[t] > 0).map((t) => `${counts[t]} ${label[t][counts[t] === 1 ? 0 : 1]}`);
  if (counts.object > 0) parts.push(`the ${counts.object} most connected AL objects`);
  const list = parts.length > 1 ? `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}` : parts[0] ?? "";
  return `A star is a page that other pages link to: ${list}. Videos and posts are not stars: they are the triangles and bars drawn beside the hubs they link to once you open a system.`;
}
