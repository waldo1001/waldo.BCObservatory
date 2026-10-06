/** RSS 2.0 / Atom / YouTube feed parsing into one flat shape. */
import { XMLParser } from "fast-xml-parser";
import { decodeEntities } from "../lib/http.js";

export interface FeedItem { id: string; link: string; title: string; published: string | null; updated: string | null; videoId?: string }

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_", textNodeName: "#text", processEntities: false });
const arr = <T>(v: T | T[] | undefined): T[] => (v === undefined ? [] : Array.isArray(v) ? v : [v]);
const text = (v: unknown): string => {
  if (v == null) return "";
  if (typeof v === "object") return String((v as Record<string, unknown>)["#text"] ?? "");
  return String(v);
};
const iso = (v: unknown): string | null => {
  const s = text(v).trim();
  if (!s) return null;
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
};

export function parseFeed(xml: string): FeedItem[] {
  const doc = parser.parse(xml);
  if (doc.rss) {
    return arr(doc.rss.channel?.item).map((it: any) => {
      const link = text(it.link).trim();
      return { id: text(it.guid).trim() || link, link, title: decodeEntities(text(it.title)).trim(), published: iso(it.pubDate ?? it["dc:date"]), updated: iso(it["atom:updated"]) };
    });
  }
  if (doc.feed) {
    return arr(doc.feed.entry).map((e: any) => {
      const links = arr(e.link);
      const alt = links.find((l: any) => !l["@_rel"] || l["@_rel"] === "alternate") ?? links[0];
      const link = String(alt?.["@_href"] ?? text(alt)).trim();
      const videoId = text(e["yt:videoId"]).trim() || undefined;
      return { id: text(e.id).trim() || link, link, title: decodeEntities(text(e.title)).trim(), published: iso(e.published), updated: iso(e.updated), ...(videoId ? { videoId } : {}) };
    });
  }
  throw new Error("not an RSS or Atom feed");
}

/** WordPress post id from a guid or link ("https://site/?p=123"), so REST and RSS discovery share keys. */
export function wpPostId(s: string): string | null {
  return s.match(/[?&]p=(\d+)/)?.[1] ?? null;
}
