/**
 * Printed version lists (D72): one helper for pages, panel, list view and markdown. Pure, no `fs` and no config read,
 * so the site imports it as it imports `pipeline/lib/treemap` and `pipeline/lib/systems`.
 */

/** "BC24-26, BC28": majors as collapsed runs of consecutive integers, sorted, deduped; never bridges a gap. */
export function versionRanges(majors: readonly (string | number)[], prefix = "BC"): string {
  const ns = [...new Set(majors.map((m) => Number(m)).filter((n) => Number.isFinite(n)))].sort((a, b) => a - b);
  const runs: string[] = [];
  for (let i = 0; i < ns.length; ) {
    let j = i;
    while (j + 1 < ns.length && ns[j + 1] === ns[j] + 1) j++;
    runs.push(j > i ? `${prefix}${ns[i]}-${ns[j]}` : `${prefix}${ns[i]}`);
    i = j + 1;
  }
  return runs.join(", ");
}
