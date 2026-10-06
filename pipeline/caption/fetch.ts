/**
 * Video `fetched` and `captioned` stages (PLAN 4.3 stage 2, deterministic, Mini only).
 *
 * fetched: per-video metadata (yt-dlp --dump-json): real upload time, title, duration, which caption track exists.
 * captioned: that track as VTT → data/captions/microsoft/<id>.{vtt,segments.json} (D09). No track → skipped
 * `no-captions`; private or removed → skipped `unavailable`; upcoming or live → retried later.
 * Official tier only until community captions can go to the private vault (deploy key not approved yet, D14).
 */
import { resolve } from "node:path";
import { exists, readText, writeText } from "../lib/fsx.js";
import type { ManifestItem } from "../lib/manifest.js";
import { sha256 } from "../lib/text.js";
import type { StageHandler } from "../orchestrator/execute.js";
import { cleanVtt } from "./vtt-clean.js";
import { fetchCaptions, videoMeta, YtUnavailable, type VideoMeta } from "./ytdlp.js";

const videoIdOf = (item: ManifestItem) => item.id.slice(item.id.lastIndexOf("/") + 1);
export const officialOnly = (item: ManifestItem) => item.tier === "official";

export interface CaptionDeps { meta: typeof videoMeta; captions: typeof fetchCaptions }
const real: CaptionDeps = { meta: videoMeta, captions: fetchCaptions };

export function fetchedHandler(deps: CaptionDeps = real): StageHandler {
  return {
    accepts: officialOnly,
    run: async (item) => {
      let m: VideoMeta;
      try { m = await deps.meta(videoIdOf(item)); } catch (e) {
        if (e instanceof YtUnavailable) return { skip: "unavailable", data: { reason: e.message.slice(0, 200) } };
        throw e;
      }
      if (m.live_status === "is_upcoming" || m.live_status === "is_live") throw new Error(`not captionable yet (${m.live_status})`);
      return {
        patch: {
          ...(m.published_at ? { published_at: m.published_at } : {}), ...(m.title ? { title: m.title } : {}),
          meta: { ...(m.duration_s !== null ? { duration_s: m.duration_s } : {}), captions_track: m.captions },
        },
        data: { captions: m.captions ? `${m.captions.kind}:${m.captions.lang}` : null, duration_s: m.duration_s },
      };
    },
  };
}

export function captionedHandler(deps: CaptionDeps = real): StageHandler {
  return {
    accepts: officialOnly,
    run: async (item, ctx) => {
      const track = item.meta?.captions_track as VideoMeta["captions"] | undefined;
      if (!track) return { skip: "no-captions" };
      const id = videoIdOf(item);
      const vtt = await deps.captions(id, track);
      if (!vtt) return { skip: "no-captions", data: { track: `${track.kind}:${track.lang}` } };
      const cleaned = cleanVtt(vtt, typeof item.meta?.duration_s === "number" ? item.meta.duration_s : undefined);
      if (!cleaned.segments.length) return { skip: "no-captions", data: { track: `${track.kind}:${track.lang}`, empty: true } };
      const dir = resolve(ctx.dataDir, "captions", "microsoft");
      const write = (p: string, t: string) => { if (!exists(p) || readText(p) !== t) writeText(p, t); };
      write(resolve(dir, `${id}.vtt`), vtt);
      write(resolve(dir, `${id}.segments.json`), JSON.stringify({ video_id: id, source: "yt-dlp", ...cleaned }, null, 2) + "\n");
      return {
        output_hash: sha256(vtt),
        data: { path: `data/captions/microsoft/${id}.vtt`, vtt_sha256: sha256(vtt), segments: cleaned.segments.length, words: cleaned.word_count, lang: track.lang, kind: track.kind },
      };
    },
  };
}
