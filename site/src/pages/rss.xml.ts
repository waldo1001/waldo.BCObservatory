// RSS 2.0 feed of the weekly digests (newest first).
import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export const GET: APIRoute = async () => {
  const site = `${import.meta.env.SITE}${import.meta.env.BASE_URL}`;
  type Digest = CollectionEntry<"digests">;
  const all = (await getCollection("digests")).sort((a: Digest, b: Digest) => b.id.localeCompare(a.id)).slice(0, 52);
  const items = all.map((e: Digest) => `<item><title>${esc(e.data.title)}</title><link>${site}digests/${e.id}/</link><guid isPermaLink="true">${site}digests/${e.id}/</guid><pubDate>${new Date(`${e.data.range.end}T23:59:00Z`).toUTCString()}</pubDate><description>${esc(e.data.summary)}</description></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>BC Observatory weekly</title><link>${site}</link><description>What changed in Microsoft Dynamics 365 Business Central each week.</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8" } });
};
