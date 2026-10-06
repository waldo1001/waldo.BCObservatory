/**
 * YouTube discovery: channel RSS nightly (last 15 uploads) and, for sources with `backfill.all`, a weekly
 * `yt-dlp --flat-playlist` reconcile that adds every older upload. Reconciled items are undated until the `fetched`
 * stage reads their metadata; meta.channel_rank (0 = newest) orders them meanwhile. A failed reconcile never fails
 * the source: RSS discovery already happened.
 */
import { resolve } from "node:path";
import type { SourceDef } from "../lib/config.js";
import { readJsonOr, writeJson } from "../lib/fsx.js";
import { logger } from "../lib/log.js";
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
  if (source.backfill?.all && ctx.stateDir && ctx.flatPlaylist) {
    try {
      const added = await reconcile(source, ctx);
      if (added !== null) { r.note += `; reconcile added ${added}`; r.counts.new += added; }
    } catch (e) {
      log.warn(`${source.id}: reconcile failed: ${(e as Error).message}`);
      r.note += `; reconcile failed: ${(e as Error).message.slice(0, 120)}`;
    }
  }
  return r;
}

const log = logger("youtube");
export const RECONCILE_EVERY_DAYS = 7;

/** Returns the number of new items, or null when the reconcile is not due. */
export async function reconcile(source: SourceDef, ctx: IngestContext): Promise<number | null> {
  const statePath = resolve(ctx.stateDir!, "youtube-reconcile.json");
  const state = readJsonOr<Record<string, string>>(statePath, {});
  const last = state[source.id] ? Date.parse(state[source.id]) : 0;
  if (ctx.now.getTime() - last < RECONCILE_EVERY_DAYS * 86_400_000) return null;
  const entries = await ctx.flatPlaylist!(source.channel_id!);
  let added = 0;
  entries.forEach((e, rank) => {
    if (ctx.manifest.get(`video/${source.id}/${e.id}`)) return;
    ctx.manifest.discover({
      pillar: "video", source: source.id, key: e.id, tier: source.tier, title: e.title,
      url: `https://www.youtube.com/watch?v=${e.id}`, published_at: null, language: source.language,
      meta: { channel_id: source.channel_id, channel_rank: rank, ...(e.duration_s !== null ? { duration_s: e.duration_s } : {}), via: "reconcile" },
    }, ctx.now);
    added++;
  });
  writeJson(statePath, { ...state, [source.id]: ctx.now.toISOString() });
  return added;
}
