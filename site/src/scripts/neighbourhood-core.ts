/**
 * The second ring of an object's neighbourhood (D59), without the DOM: which objects two hops away to show and where.
 * The shards (code/neighbours/<major>/<type>.json) hold each object's heaviest neighbours as [key, ring, weight].
 */
export type ShardEntry = [string, number, number];
export interface FirstHop { key: string; x: number; y: number }
export interface SecondHop { key: string; parent: string; ring: number; weight: number }
export interface PlacedSecond extends SecondHop { x: number; y: number; px: number; py: number }

/**
 * Neighbours of the first-hop objects that are neither the centre nor already on screen. An object reachable through
 * several first-hop objects is shown once, under the one it is most strongly tied to, and its weights add up so it
 * ranks higher. Heaviest first, at most `perParent` under one parent and `cap` in all.
 */
export function secondRing(centre: string, first: FirstHop[], shards: Record<string, ShardEntry[]>, cap = 60, perParent = 4): SecondHop[] {
  const shown = new Set([centre, ...first.map((f) => f.key)]);
  // total weight over every path to it, and the single strongest tie, which decides the parent it is drawn under
  const acc = new Map<string, SecondHop & { top: number }>();
  for (const f of first) {
    for (const [key, ring, weight] of shards[f.key] ?? []) {
      if (shown.has(key)) continue;
      const cur = acc.get(key);
      if (!cur) { acc.set(key, { key, parent: f.key, ring, weight, top: weight }); continue; }
      cur.weight += weight;
      if (weight > cur.top) Object.assign(cur, { top: weight, parent: f.key, ring });
    }
  }
  const per = new Map<string, number>();
  const out: SecondHop[] = [];
  for (const { top: _t, ...s } of [...acc.values()].sort((a, b) => b.weight - a.weight || a.key.localeCompare(b.key))) {
    if (out.length >= cap) break;
    const n = per.get(s.parent) ?? 0;
    if (n >= perParent) continue;
    per.set(s.parent, n + 1);
    out.push(s);
  }
  return out;
}

/** Each second-hop object on an outer ring at its parent's angle, siblings fanned out a little around it. */
export function layoutSecond(picks: SecondHop[], first: FirstHop[], cx: number, cy: number, radius: number): PlacedSecond[] {
  const at = new Map(first.map((f) => [f.key, f]));
  const kids = new Map<string, SecondHop[]>();
  for (const p of picks) kids.set(p.parent, [...(kids.get(p.parent) ?? []), p]);
  const out: PlacedSecond[] = [];
  for (const [parent, list] of kids) {
    const f = at.get(parent);
    if (!f) continue;
    const a = Math.atan2(f.y - cy, f.x - cx);
    const step = 0.09; // radians between siblings
    list.forEach((s, i) => {
      const t = a + (i - (list.length - 1) / 2) * step;
      out.push({ ...s, x: cx + Math.cos(t) * radius, y: cy + Math.sin(t) * radius * 0.9, px: f.x, py: f.y });
    });
  }
  return out;
}
