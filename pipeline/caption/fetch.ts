/**
 * Video `fetched` and `captioned` stages (PLAN 4.3 stage 2, deterministic, Mini only).
 *
 * fetched: per-video metadata (yt-dlp --dump-json): real upload time, title, duration, which caption track exists.
 * captioned: that track as VTT plus cleaned segments (D09). Microsoft (tier official) → data/captions/microsoft/,
 * full text in the public repo; community → vault/captions/community/<source>/, never in the public repo (D08).
 * No track → skipped `no-captions` (retried weekly, see reviveCaptionSkips); private or removed → skipped
 * `unavailable`; upcoming or live → retried later.
 * Community videos are accepted only when the vault is a git checkout (the Mini), so their raw text always lands in
 * the private repository and the leak scan (D24) can see it; elsewhere they wait.
 */
import { relative, resolve } from "node:path";
import { exists, readText, writeText } from "../lib/fsx.js";
import { vaultDir } from "../lib/paths.js";
import type { ManifestItem } from "../lib/manifest.js";
import { sha256 } from "../lib/text.js";
import type { StageHandler } from "../orchestrator/execute.js";
import { cleanVtt } from "./vtt-clean.js";
import { fetchCaptions, videoMeta, YtUnavailable, type VideoMeta } from "./ytdlp.js";

const videoIdOf = (item: ManifestItem) => item.id.slice(item.id.lastIndexOf("/") + 1);
export const officialOnly = (item: ManifestItem) => item.tier === "official";
/** Official videos always; community videos once the vault is a git checkout that the nightly pushes. */
export const captionable = (item: ManifestItem) => item.tier === "official" || exists(resolve(vaultDir(), ".git"));
/** Where a video's captions go: the public data dir for Microsoft, the private vault for everyone else. */
export function captionDir(item: ManifestItem, dataDir: string): { dir: string; label: string } {
  if (item.tier === "official") return { dir: resolve(dataDir, "captions", "microsoft"), label: "data/captions/microsoft" };
  const dir = resolve(vaultDir(), "captions", "community", item.source);
  return { dir, label: `vault:${relative(vaultDir(), dir)}` };
}

export interface CaptionDeps { meta: typeof videoMeta; captions: typeof fetchCaptions }
const real: CaptionDeps = { meta: videoMeta, captions: fetchCaptions };

export function fetchedHandler(deps: CaptionDeps = real): StageHandler {
  return {
    accepts: captionable,
    lane: "youtube",
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
    accepts: captionable,
    lane: "youtube",
    run: async (item, ctx) => {
      const track = item.meta?.captions_track as VideoMeta["captions"] | undefined;
      if (!track) return { skip: "no-captions" };
      const id = videoIdOf(item);
      const vtt = await deps.captions(id, track);
      if (!vtt) return { skip: "no-captions", data: { track: `${track.kind}:${track.lang}` } };
      const cleaned = cleanVtt(vtt, typeof item.meta?.duration_s === "number" ? item.meta.duration_s : undefined);
      if (!cleaned.segments.length) return { skip: "no-captions", data: { track: `${track.kind}:${track.lang}`, empty: true } };
      const { dir, label } = captionDir(item, ctx.dataDir);
      const write = (p: string, t: string) => { if (!exists(p) || readText(p) !== t) writeText(p, t); };
      write(resolve(dir, `${id}.vtt`), vtt);
      write(resolve(dir, `${id}.segments.json`), JSON.stringify({ video_id: id, source: "yt-dlp", ...cleaned }, null, 2) + "\n");
      return {
        output_hash: sha256(vtt),
        data: { path: `${label}/${id}.vtt`, vtt_sha256: sha256(vtt), segments: cleaned.segments.length, words: cleaned.word_count, lang: track.lang, kind: track.kind },
      };
    },
  };
}
