/** D91 C4: the words of a source card on the sources index, and the source page's kind. Pure, build only. */

const KINDS: Record<string, { label: string; noun: string }> = {
  blog: { label: "blog", noun: "posts" }, youtube: { label: "channel", noun: "videos" },
  "github-pr": { label: "repository", noun: "changes" }, vsmarketplace: { label: "changelog", noun: "releases" },
};

/** blog: blog/posts, youtube: channel/videos, github-pr: repository/changes, vsmarketplace: changelog/releases; any other kind: itself/items. */
export function sourceKind(kind: string): { label: string; noun: string } {
  return KINDS[kind] ?? { label: kind, noun: "items" };
}

/** "blog · community · 81 posts"; one item takes the singular ("1 post"). */
export function countLine(kind: string, tier: string, n: number): string {
  const { label, noun } = sourceKind(kind);
  return `${label} · ${tier} · ${n.toLocaleString("en")} ${n === 1 ? noun.replace(/s$/, "") : noun}`;
}

/** The newest item: date (YYYY-MM-DD) newest first, then href; null for none. */
export function lastStop<T extends { date: string; href: string }>(items: readonly T[]): T | null {
  let best: T | null = null;
  for (const x of items) if (!best || x.date > best.date || (x.date === best.date && x.href < best.href)) best = x;
  return best;
}
