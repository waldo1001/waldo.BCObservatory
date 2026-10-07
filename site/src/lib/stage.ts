/** Pure helpers of the source stage (D60): no file reads, so the unit tests import them directly. */

/**
 * The stage caption carries the source, date and link (D60), so the body's meta line goes: the first paragraph
 * that opens with "Watch on YouTube" or "Read the post". The markdown twin keeps it.
 */
export function trimMeta(html: string): string {
  return html.replace(/<p><a href="[^"]*"[^>]*>(?:Watch on YouTube|Read the post)<\/a>[\s\S]*?<\/p>\s*/, "");
}

/** 8:48, or 1:02:05 over an hour. */
export function hms(t: number): string {
  const s = Math.max(0, Math.floor(t)), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  return h ? `${h}:${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}` : `${m}:${String(r).padStart(2, "0")}`;
}

/** About N minutes to read, at 220 words a minute; never 0. */
export const readingMinutes = (words: number) => Math.max(1, Math.round(words / 220));
