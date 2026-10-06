/**
 * yt-dlp wrapper (Mini only: YouTube blocks GitHub-hosted runners, PLAN 3). Cookie-less, one request at a time with a
 * 5-10 s random pause between calls (config/budget.json yt_dlp). A bot check or HTTP 429 trips a breaker: every later
 * call this run throws StageHold, so items wait untouched instead of burning retry attempts.
 *
 * BCOBS_YTDLP_BIN overrides the binary (tests use a fake); BCOBS_YTDLP_SLEEP_MS=0 disables the pause.
 */
import { spawn } from "node:child_process";
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { budget } from "../lib/config.js";
import { StageHold } from "../orchestrator/execute.js";

const BLOCKED = /confirm you.?re not a bot|sign in to confirm|HTTP Error 429|Too Many Requests/i;
const UNAVAILABLE = /private video|video unavailable|has been removed|account .* terminated|members-only|join this channel/i;
let lastCall = 0;
let blocked: string | null = null;

export class YtUnavailable extends Error {}

/** For tests: forget the breaker and the pause clock. */
export function resetYtdlp(): void { lastCall = 0; blocked = null; }

async function pause(): Promise<void> {
  const env = process.env.BCOBS_YTDLP_SLEEP_MS;
  const { sleep_seconds_min: lo, sleep_seconds_max: hi } = budget().yt_dlp;
  const want = env !== undefined ? Number(env) : (lo + Math.random() * (hi - lo)) * 1000;
  const wait = lastCall ? lastCall + want - Date.now() : 0;
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  lastCall = Date.now();
}

export async function ytdlp(args: string[], timeoutMs = 180_000): Promise<string> {
  if (blocked) throw new StageHold(`yt-dlp held after a block earlier this run: ${blocked}`);
  await pause();
  const bin = process.env.BCOBS_YTDLP_BIN ?? "yt-dlp";
  const { code, stdout, stderr } = await new Promise<{ code: number | null; stdout: string; stderr: string }>((resolve, reject) => {
    const child = spawn(bin, ["--no-warnings", "--ignore-config", ...args], { stdio: ["ignore", "pipe", "pipe"] });
    let out = "", err = "";
    const timer = setTimeout(() => { child.kill("SIGKILL"); reject(new Error(`yt-dlp timeout after ${timeoutMs} ms`)); }, timeoutMs);
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (err += d));
    child.on("error", (e: any) => { clearTimeout(timer); reject(e?.code === "ENOENT" ? new StageHold(`yt-dlp not found (${bin})`) : e); });
    child.on("close", (c) => { clearTimeout(timer); resolve({ code: c, stdout: out, stderr: err }); });
  });
  if (code === 0) return stdout;
  const tail = stderr.trim().split("\n").slice(-3).join(" ").slice(0, 400);
  if (BLOCKED.test(stderr)) { blocked = tail; throw new StageHold(`YouTube blocked yt-dlp: ${tail}`); }
  if (UNAVAILABLE.test(stderr)) throw new YtUnavailable(tail);
  throw new Error(`yt-dlp exited ${code}: ${tail}`);
}

export interface FlatEntry { id: string; title: string; duration_s: number | null }
/** The channel's uploads tab, newest first. No dates in flat mode: the `fetched` stage learns them per video. */
export async function flatPlaylist(channelId: string): Promise<FlatEntry[]> {
  const out = await ytdlp(["--flat-playlist", "--dump-json", `https://www.youtube.com/channel/${channelId}/videos`], 600_000);
  return out.split("\n").filter((l) => l.trim().startsWith("{")).map((l) => JSON.parse(l))
    .filter((e) => typeof e.id === "string" && /^[A-Za-z0-9_-]{11}$/.test(e.id))
    .map((e) => ({ id: e.id, title: String(e.title ?? ""), duration_s: typeof e.duration === "number" ? Math.round(e.duration) : null }));
}

export interface VideoMeta {
  title: string; published_at: string | null; duration_s: number | null; live_status: string | null;
  /** Caption track to fetch: original-language auto captions, else manual English subtitles. */
  captions: { kind: "auto" | "manual"; lang: string } | null;
}
export function parseMeta(j: any): VideoMeta {
  const published_at = typeof j.timestamp === "number" ? new Date(j.timestamp * 1000).toISOString()
    : typeof j.release_timestamp === "number" ? new Date(j.release_timestamp * 1000).toISOString()
    : /^\d{8}$/.test(j.upload_date ?? "") ? `${j.upload_date.slice(0, 4)}-${j.upload_date.slice(4, 6)}-${j.upload_date.slice(6, 8)}T00:00:00.000Z` : null;
  const auto = Object.keys(j.automatic_captions ?? {});
  const manual = Object.keys(j.subtitles ?? {});
  const captions = auto.includes("en-orig") ? { kind: "auto" as const, lang: "en-orig" }
    : manual.includes("en") ? { kind: "manual" as const, lang: "en" }
    : auto.find((l) => l.endsWith("-orig")) ? { kind: "auto" as const, lang: auto.find((l) => l.endsWith("-orig"))! }
    : null;
  return { title: String(j.title ?? ""), published_at, duration_s: typeof j.duration === "number" ? Math.round(j.duration) : null, live_status: j.live_status ?? null, captions };
}
export async function videoMeta(videoId: string): Promise<VideoMeta> {
  return parseMeta(JSON.parse(await ytdlp(["--dump-json", "--skip-download", `https://www.youtube.com/watch?v=${videoId}`])));
}

/** Download one caption track as VTT text; null when yt-dlp wrote nothing (track vanished). */
export async function fetchCaptions(videoId: string, track: { kind: "auto" | "manual"; lang: string }): Promise<string | null> {
  const dir = mkdtempSync(join(tmpdir(), "bcobs-subs-"));
  try {
    await ytdlp(["--skip-download", track.kind === "auto" ? "--write-auto-subs" : "--write-subs", "--sub-langs", track.lang,
      "--sub-format", "vtt", "-o", join(dir, "%(id)s.%(ext)s"), `https://www.youtube.com/watch?v=${videoId}`]);
    const f = readdirSync(dir).find((n) => n.endsWith(".vtt"));
    return f ? readFileSync(join(dir, f), "utf8") : null;
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
