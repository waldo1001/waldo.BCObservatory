/**
 * The galaxy's pure parts (D66), no canvas and no DOM: the deep-link hash, where a port sits on the canvas edge, and
 * the list view's sort.
 */

/** `#system=finance&lens=version:30` -> Map; the older single-key form (`#star=object/table/18`) parses the same. */
export function parseHash(hash: string): Map<string, string> {
  const out = new Map<string, string>();
  for (const part of hash.replace(/^#/, "").split("&")) {
    const i = part.indexOf("=");
    if (i <= 0) continue;
    const k = part.slice(0, i), v = decodeURIComponent(part.slice(i + 1));
    if (["system", "star", "lens", "q", "view", "tilt", "kinds"].includes(k) && v) out.set(k, v);
  }
  return out;
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
/** The hash's `kinds=` ("c", "v,p"): unknown letters dropped; empty, missing or all unknown means all three. */
export function parseKinds(s: string | null | undefined): Set<WeekKind> {
  const on = new Set((s ?? "").split(",").map((x) => x.trim()).filter((x): x is WeekKind => (WEEK_KINDS as readonly string[]).includes(x)));
  return on.size ? on : new Set(WEEK_KINDS);
}
/** The hash value for the pills: null when all three are on (the hash leaves `kinds` out), else the letters in pill order. */
export function kindsParam(on: Set<WeekKind>): string | null {
  const ks = WEEK_KINDS.filter((k) => on.has(k));
  return ks.length === WEEK_KINDS.length || !ks.length ? null : ks.join(",");
}
/** Toggle one pill; switching off the last one turns all three on, so the list is never empty. */
export function toggleKind(on: Set<WeekKind>, k: WeekKind): Set<WeekKind> {
  const next = new Set(on);
  if (next.has(k)) next.delete(k); else next.add(k);
  return next.size ? next : new Set(WEEK_KINDS);
}
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
