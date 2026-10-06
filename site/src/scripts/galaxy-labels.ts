/**
 * Caption visibility for the galaxy (D44): pure functions, no canvas. A star's caption appears at a zoom that depends
 * on its weight rank inside its system and fades in over a zoom window, so zooming in reveals captions gradually,
 * brightest first, wherever there is room. `zs` is system-relative zoom: cam.s / sysScale(system), 1 = the system
 * fills its share of the viewport.
 */
export const smoothstep = (a: number, b: number, x: number): number => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/**
 * System-relative zoom at which the caption of the star ranked `rank` (0 = heaviest) starts to appear. The large
 * systems sit at zs ~0.13 when the whole galaxy fits the viewport, so rank 0 starts at ~1.6x galaxy zoom and is full
 * at 2x; rank 4 is full at 0.87 (five captions at system level, HANDOFF 5); rank 14 starts at 1.5, rank 40 at 3.3.
 */
export const threshold = (rank: number): number => 0.2 * (1 + Math.max(0, rank)) ** 0.75;

/** Caption alpha for a star whose threshold is `t` at zoom `zs`; fades over 1.3x of zoom, a step under reduced motion. */
export const labelAlpha = (zs: number, t: number, reduced = false): number => (reduced ? (zs >= 1.15 * t ? 1 : 0) : smoothstep(t, 1.3 * t, zs));

export interface SysLike { id: string; x: number; y: number; r: number }
export interface CamLike { s: number; tx: number; ty: number; vx: number; vy: number }
export interface ViewRect { x0: number; y0: number; x1: number; y1: number }

/**
 * The system the reader has zoomed into by hand: the one nearest the view centre whose centre is inside the visible
 * rectangle, once the camera is at 0.8x that system's own zoom or closer. Null while zoomed out.
 */
export function dominantSystem<S extends SysLike>(systems: S[], cam: CamLike, view: ViewRect, sysScale: (s: S) => number): S | null {
  const cx = (view.x0 + view.x1) / 2, cy = (view.y0 + view.y1) / 2;
  let best: S | null = null, bd = Infinity;
  for (const s of systems) {
    if (cam.s < 0.8 * sysScale(s)) continue;
    const x = cam.vx + (s.x - cam.tx) * cam.s, y = cam.vy + (s.y - cam.ty) * cam.s;
    if (x < view.x0 || x > view.x1 || y < view.y0 || y > view.y1) continue;
    const d = (x - cx) ** 2 + (y - cy) ** 2;
    if (d < bd) { bd = d; best = s; }
  }
  return best;
}

/** Weight rank of every node inside its group, 0 = heaviest; ties by id so the ranks never change between frames. */
export function ranksByGroup(nodes: { id: string; group: string; weight: number }[]): Map<string, number> {
  const byGroup = new Map<string, { id: string; weight: number }[]>();
  for (const n of nodes) byGroup.set(n.group, [...(byGroup.get(n.group) ?? []), n]);
  const out = new Map<string, number>();
  for (const list of byGroup.values()) list.sort((a, b) => b.weight - a.weight || a.id.localeCompare(b.id)).forEach((n, i) => out.set(n.id, i));
  return out;
}
