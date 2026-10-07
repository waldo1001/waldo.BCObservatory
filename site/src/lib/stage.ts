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

// --- phase 2 ---------------------------------------------------------------------------------------------------

/** The chapter playing at second `t`: the last one that starts at or before it; -1 before the first. */
export function chapterAt(starts: number[], t: number): number {
  let i = -1;
  for (let k = 0; k < starts.length; k++) if (starts[k] <= t) i = k;
  return i;
}

/** The video id of a YouTube watch link, or null. */
export function videoIdOf(href: string): string | null {
  try {
    const u = new URL(href);
    if (!/(^|\.)youtube\.com$/.test(u.hostname) && u.hostname !== "youtu.be") return null;
    const id = u.hostname === "youtu.be" ? u.pathname.slice(1) : u.searchParams.get("v");
    return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

/** A list poster (D60 phase 2): YouTube's 320x180 still, lazy; about 10 KB. */
export const listPoster = (videoId: string) => `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/mqdefault.jpg`;

/**
 * A digest's video rows get a lazy poster in front of the link: each `<li><a href="<base>videos/<id>/">` whose id is
 * not opted out (`embed: false`). The markdown twin is untouched.
 */
export function posterRows(html: string, base: string, skip: Set<string> = new Set()): string {
  const esc = base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.replace(new RegExp(`<li><a href="${esc}videos/([A-Za-z0-9_-]{11})/">`, "g"), (m, id: string) =>
    skip.has(id) ? m : `<li class="has-poster"><img class="row-poster" src="${listPoster(id)}" alt="" width="320" height="180" loading="lazy" decoding="async">${m.slice(4)}`);
}

/**
 * A WordPress embed card's height message (`{message: "height", value, secret}`), accepted only with our secret;
 * the height is clamped so a misbehaving frame cannot take the page.
 */
export function wpHeight(data: unknown, secret: string): number | null {
  if (!data || typeof data !== "object") return null;
  const m = data as { message?: unknown; value?: unknown; secret?: unknown };
  if (m.message !== "height" || m.secret !== secret) return null;
  const v = Number(m.value);
  return Number.isFinite(v) ? Math.min(1000, Math.max(200, Math.round(v))) : null;
}
