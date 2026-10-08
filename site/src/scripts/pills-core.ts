/**
 * D82: toggle pills over any pill set, the D80 semantics generalised: all on by default, each one toggles, the last one
 * never turns off, a pill with nothing behind it is disabled only while off. Pure, no DOM: the galaxy's this-week
 * pills (galaxy-core.ts) and the changes list's repository pills both use it. `all` is the pill ids in pill order.
 */

/** `?repo=` or `kinds=`: unknown ids dropped, whitespace trimmed; empty, missing or all unknown means every pill. */
export function parsePills<K extends string>(s: string | null | undefined, all: readonly K[]): Set<K> {
  const on = new Set((s ?? "").split(",").map((x) => x.trim()).filter((x): x is K => (all as readonly string[]).includes(x)));
  return on.size ? on : new Set(all);
}
/** The parameter value: null when every pill is on (the URL leaves it out) or none is, else the ids in pill order. */
export function pillsParam<K extends string>(on: Set<K>, all: readonly K[]): string | null {
  const ks = all.filter((k) => on.has(k));
  return ks.length === all.length || !ks.length ? null : ks.join(",");
}
/** Toggle one pill; switching off the last one turns every pill on, so the list is never empty. */
export function togglePill<K extends string>(on: Set<K>, k: K, all: readonly K[]): Set<K> {
  const next = new Set(on);
  if (next.has(k)) next.delete(k); else next.add(k);
  return next.size ? next : new Set(all);
}
/** When no pill that is on has anything behind it, every pill comes back on; an all-empty set stays as asked. */
export function usablePills<K extends string>(on: Set<K>, counts: Record<K, number>, all: readonly K[]): Set<K> {
  return all.some((k) => on.has(k) && counts[k] > 0) || !all.some((k) => counts[k] > 0) ? on : new Set(all);
}
/** A pill is disabled only when it has nothing behind it and is off: a pressed pill can always be switched off. */
export const pillDisabled = (pressed: boolean, count: number): boolean => !pressed && count === 0;
/** The kind counts line: kinds A to Z, `<n> <kind>` joined with " · ", "" when there is nothing. */
export function kindsLine(kinds: Iterable<string>): string {
  const n = new Map<string, number>();
  for (const k of kinds) n.set(k, (n.get(k) ?? 0) + 1);
  return [...n.keys()].sort().map((k) => `${n.get(k)} ${k}`).join(" · ");
}

/** The changes list's repositories, in pill order, with the label each pill prints (the D61 source slugs). */
export const CHANGE_REPOS: readonly (readonly [slug: string, label: string])[] =
  [["bcapps", "BCApps"], ["al-go", "AL-Go"], ["bcquality", "BCQuality"]];
/** The repository slug of a change entry id (`bcapps/12207` → `bcapps`). */
export const repoOf = (id: string): string => id.split("/")[0];
