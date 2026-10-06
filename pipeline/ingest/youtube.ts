/** YouTube channel RSS (last 15 uploads). The weekly yt-dlp reconcile for full backfill arrives with M1. */
import type { SourceDef } from "../lib/config.js";
import { parseFeed } from "./feed.js";
import { newResult, tally, type IngestContext, type SourceResult } from "./types.js";

export const channelFeedUrl = (channelId: string) => `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

export async function ingestYoutube(source: SourceDef, ctx: IngestContext): Promise<SourceResult> {
  const r = newResult(source);
  if (!source.channel_id) throw new Error(`${source.id}: channel_id missing`);
  const xml = await (await ctx.http(channelFeedUrl(source.channel_id), { accept: "application/atom+xml" })).text();
  const entries = parseFeed(xml).filter((e) => e.videoId);
  for (const e of entries) {
    const { change } = ctx.manifest.discover({
      pillar: "video", source: source.id, key: e.videoId!, tier: source.tier, title: e.title,
      url: `https://www.youtube.com/watch?v=${e.videoId}`, published_at: e.published, language: source.language,
      meta: { channel_id: source.channel_id },
    }, ctx.now);
    tally(r, change);
  }
  r.note = `${entries.length} feed entries`;
  return r;
}
