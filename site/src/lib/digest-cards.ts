/** D91 C3: the lines of a week card on the digests index. Pure, build only. */

type Sections = Record<string, number | undefined>;
const fmt = (n: number) => n.toLocaleString("en");
const count = (n: number, one: string, many: string) => `${fmt(n)} ${n === 1 ? one : many}`;

/** "running" while the build's day (YYYY-MM-DD, UTC) is on or before the week's last day, else "complete". */
export function weekState(end: string, today: string): "running" | "complete" {
  return today <= end ? "running" : "complete";
}

/** The week's numbers in card order, with their singular and plural words. */
const PARTS: readonly (readonly [key: string, one: string, many: string])[] = [
  ["changes", "PR", "PRs"], ["videos", "video", "videos"], ["posts", "post", "posts"], ["docs", "Learn page", "Learn pages"],
  ["roadmap_added", "roadmap feature added", "roadmap features added"], ["roadmap_changed", "roadmap feature changed", "roadmap features changed"],
];

/** PRs, videos, posts, Learn pages, roadmap features added, roadmap features changed, each when above zero, joined with
 *  " · "; nothing: "Nothing has landed yet this week." (running) or "A quiet week." (complete). */
export function weekLine(sections: Sections, running: boolean): string {
  const parts = PARTS.filter(([k]) => (sections[k] ?? 0) > 0).map(([k, one, many]) => count(sections[k]!, one, many));
  return parts.length ? parts.join(" · ") : running ? "Nothing has landed yet this week." : "A quiet week.";
}

/** "1,225 obsolete elements, 1,055 with their cleanup due"; "" when the digest has no radar numbers. */
export function radarLine(sections: Sections): string {
  if (sections.deprecations === undefined) return "";
  return `${count(sections.deprecations, "obsolete element", "obsolete elements")}, ${fmt(sections.cleanup_due ?? 0)} with their cleanup due`;
}
