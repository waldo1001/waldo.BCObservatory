/**
 * D89: the object page's reading aids without the DOM, so the tests import them the way they import pills-core.ts
 * (no `node:` imports, nothing that runs at import). object-page.ts mounts them from Page.astro's one module script:
 * every aid is built in the browser from the markup the page already ships, so no object page gains a byte (D88).
 */

/** B1: an "On this page" list when the main column has 6+ sections, or 3+ and is taller than four screens. */
export function tocWanted(sections: number, mainHeight: number, viewport: number): boolean {
  return sections >= 3 && (sections >= 6 || mainHeight > 4 * viewport);
}

const num = (s: string) => Number(s.replace(/,/g, ""));
/**
 * B1: what a section lists. The leading number of the heading's <small> ("311 connected ...", "1,234 sources"); else
 * the rows of its table; else its top-level items, where an item "and <n> more ..." counts n. Null when there is
 * nothing to count or the count is 0.
 */
export function sectionCount(s: { small?: string | null; rows?: number; items?: string[] }): number | null {
  const lead = /^\s*(\d[\d,]*)/.exec(s.small ?? "");
  if (lead) return num(lead[1]) || null;
  if (s.rows) return s.rows;
  let n = 0;
  for (const t of s.items ?? []) {
    const more = /^\s*and (\d[\d,]*) more\b/.exec(t);
    n += more ? num(more[1]) : 1;
  }
  return n || null;
}

/** B1: the section being read: the last heading whose top is at or above the line; 0 before the first; the last at the bottom. */
export function currentSection(tops: number[], line: number, atBottom: boolean): number {
  if (atBottom) return tops.length - 1;
  let i = 0;
  tops.forEach((t, j) => { if (t <= line) i = j; });
  return i;
}
