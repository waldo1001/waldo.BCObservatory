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

export interface Box { x: number; y: number; w: number; h: number }
/** Overlap of two boxes, strict: boxes that only touch do not overlap (the galaxy's `hit`). */
const hit = (a: Box, b: Box): boolean => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

/** Canvas fonts as literal families: a canvas `font` cannot resolve `var()` and keeps the previous font (D92). */
export const CANVAS_FONT = {
  caption: "600 12px 'Bricolage Grotesque Variable', system-ui, sans-serif",
  plot: "400 10px 'JetBrains Mono', ui-monospace, monospace",
} as const;

/** D92: a caption may cover at most this many other stars, else it gives way. */
export const CAPTION_MAX_COVER = 1;

export type CaptionSpot = 0 | 1 | 2 | 3;
/**
 * D92: where a star's caption goes. Spots, in order: 0 right, 1 left, 2 below, 3 above; 20 px high. Valid: inside
 * `view` and hitting no `taken` box. Best: the fewest `stars` boxes hit (a box centred on the star, within half a
 * pixel, is its own dot and is ignored; a neighbour that merely overlaps the star still counts, or a caption could sit
 * on a big overlapping object square); ties to `prev`, then spot order. Null when no spot is valid or the best covers
 * more than `maxCover`.
 */
export function captionSpot(
  star: { x: number; y: number; d: number }, w: number, view: ViewRect, taken: readonly Box[], stars: readonly Box[],
  maxCover = CAPTION_MAX_COVER, prev?: CaptionSpot,
): { box: Box; spot: CaptionSpot; cover: number } | null {
  const { x: cx, y: cy, d } = star;
  const boxes: Box[] = [
    { x: cx + d / 2 + 6, y: cy - 10, w, h: 20 },
    { x: cx - d / 2 - 6 - w, y: cy - 10, w, h: 20 },
    { x: cx - w / 2, y: cy + d / 2 + 4, w, h: 20 },
    { x: cx - w / 2, y: cy - d / 2 - 24, w, h: 20 },
  ];
  const others = stars.filter((s) => Math.abs(s.x + s.w / 2 - cx) > 0.5 || Math.abs(s.y + s.h / 2 - cy) > 0.5);
  let best: { box: Box; spot: CaptionSpot; cover: number } | null = null;
  boxes.forEach((box, i) => {
    if (box.x < view.x0 || box.y < view.y0 || box.x + box.w > view.x1 || box.y + box.h > view.y1) return;
    if (taken.some((t) => hit(box, t))) return;
    const spot = i as CaptionSpot, cover = others.filter((s) => hit(box, s)).length;
    if (!best || cover < best.cover || (cover === best.cover && spot === prev && best.spot !== prev)) best = { box, spot, cover };
  });
  const b = best as { box: Box; spot: CaptionSpot; cover: number } | null;
  return b && b.cover <= maxCover ? b : null;
}

/** D92: the plot labels to draw: each one that hits no `taken` box and no label kept before it; indices in order. */
export function visibleLabels(boxes: readonly Box[], taken: readonly Box[]): number[] {
  const kept: number[] = [];
  boxes.forEach((b, i) => { if (!taken.some((t) => hit(b, t)) && !kept.some((k) => hit(b, boxes[k]))) kept.push(i); });
  return kept;
}
