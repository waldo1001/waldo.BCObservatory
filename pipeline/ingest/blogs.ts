/**
 * Community blogs: WordPress REST (exact backfill to the source horizon) with the RSS/Atom feed as fallback.
 * Only metadata is stored here (id, title, url, dates); post bodies go to the private vault in the fetched stage.
 * Keys: the WordPress post id when there is one (REST id or ?p= guid), else the feed guid or link.
 */
import type { SourceDef } from "../lib/config.js";
import { decodeEntities } from "../lib/http.js";
import { horizonFor } from "../lib/queue.js";
import { parseFeed, wpPostId } from "./feed.js";
import { newResult, tally, type IngestContext, type SourceResult } from "./types.js";

export interface PostRef { key: string; title: string; url: string; published_at: string | null; modified: string | null }

const MAX_REST_PAGES = 40;
const utc = (s: string | undefined | null) => (s ? new Date(/[zZ]|[+-]\d\d:?\d\d$/.test(s) ? s : `${s}Z`).toISOString() : null);

export async function fetchWordPress(rest: string, horizon: Date | null, ctx: IngestContext, ua: "default" | "browser"): Promise<PostRef[]> {
  const out: PostRef[] = [];
  for (let page = 1; page <= MAX_REST_PAGES; page++) {
    const url = new URL(rest);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", String(page));
    url.searchParams.set("orderby", "date");
    url.searchParams.set("order", "desc");
    url.searchParams.set("_fields", "id,date_gmt,modified_gmt,link,title");
    if (horizon) url.searchParams.set("after", horizon.toISOString());
    const res = await ctx.http(url.toString(), { ua, accept: "application/json" });
    const posts = (await res.json()) as any[];
    for (const p of posts) {
      out.push({ key: String(p.id), title: decodeEntities(String(p.title?.rendered ?? "")).trim(), url: String(p.link), published_at: utc(p.date_gmt), modified: utc(p.modified_gmt) });
    }
    const totalPages = Number(res.headers.get("x-wp-totalpages") ?? "1");
    if (!posts.length || page >= totalPages) break;
  }
  return out;
}

export async function fetchFeedPosts(feed: string, horizon: Date | null, ctx: IngestContext, ua: "default" | "browser"): Promise<PostRef[]> {
  const xml = await (await ctx.http(feed, { ua, accept: "application/rss+xml, application/atom+xml, application/xml" })).text();
  return parseFeed(xml)
    .filter((e) => !horizon || !e.published || Date.parse(e.published) >= horizon.getTime())
    .map((e) => ({ key: wpPostId(e.id) ?? wpPostId(e.link) ?? e.id, title: e.title, url: e.link, published_at: e.published, modified: e.updated }));
}

export async function ingestBlog(source: SourceDef, ctx: IngestContext): Promise<SourceResult> {
  const r = newResult(source);
  const f = source.fetch ?? {};
  const ua = f.user_agent ?? "default";
  const horizon = horizonFor(source, ctx.now);
  let posts: PostRef[];
  if (f.rest) {
    try {
      posts = await fetchWordPress(f.rest, horizon, ctx, ua);
      r.note = `${posts.length} posts via WordPress REST`;
    } catch (e) {
      if (!f.feed) throw e;
      posts = await fetchFeedPosts(f.feed, horizon, ctx, ua);
      r.note = `${posts.length} posts via feed (REST failed: ${String((e as Error).message).slice(0, 120)})`;
    }
  } else if (f.feed) {
    posts = await fetchFeedPosts(f.feed, horizon, ctx, ua);
    r.note = `${posts.length} posts via feed`;
  } else {
    r.deferred = true;
    r.note = "scrape-only source: HTML ingest arrives with the blogs milestone (M3)";
    return r;
  }
  for (const p of posts) {
    const { change } = ctx.manifest.discover({
      pillar: "blog", source: source.id, key: p.key, tier: source.tier, title: p.title || p.url, url: p.url,
      published_at: p.published_at, language: source.language, input_hash: p.modified,
    }, ctx.now);
    tally(r, change);
  }
  return r;
}
