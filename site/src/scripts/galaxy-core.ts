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
    if (["system", "star", "lens", "q", "view", "tilt"].includes(k) && v) out.set(k, v);
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
