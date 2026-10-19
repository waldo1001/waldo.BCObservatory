/** D98: a search hit's "#learn=<path>" lands a hub on one article's row. Pure; no imports, so the page module stays small. */

/** The base every Learn shard row sits under; literal here, pinned to pipeline/render/search.ts by a test. */
export const LEARN_BASE = "https://learn.microsoft.com/dynamics365/business-central/";

/** "#learn=" + the URL under LEARN_BASE (the full URL when it lies outside), encoded with "/" kept readable. */
export function learnHash(url: string): string {
  const v = url.startsWith(LEARN_BASE) ? url.slice(LEARN_BASE.length) : url;
  return `#learn=${encodeURIComponent(v).replace(/%2F/g, "/")}`;
}

/** The Learn URL a "#learn=" hash names, or null. */
export function learnFromHash(hash: string): string | null {
  if (!hash.startsWith("#learn=")) return null;
  let v: string;
  try { v = decodeURIComponent(hash.slice(7)); } catch { return null; }
  if (!v) return null;
  return /^https?:\/\//.test(v) ? v : LEARN_BASE + v;
}

const norm = (u: string): string | null => { try { return new URL(u).href; } catch { return null; } };

/** The index of the first href that is the same URL as `url`, or -1. */
export function learnRowIndex(hrefs: string[], url: string): number {
  const want = norm(url);
  if (want === null) return -1;
  return hrefs.findIndex((h) => norm(h) === want);
}
