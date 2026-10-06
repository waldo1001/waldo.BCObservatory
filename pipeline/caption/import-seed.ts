/**
 * One-off seed import (D09, D18): the 84 Microsoft launch-event VTTs from the release-wave repo become caption
 * artifacts (data/captions/microsoft/<videoId>.{vtt,segments.json}) and video items at state `captioned`.
 *
 * The videoId comes from `[videoId]` in the file name, else from data/overrides/seed-videos.yaml. This is the
 * only place where a file name stands in for an id; nothing is matched on titles at run time. Idempotent:
 * caption files are rewritten only when their content changes, items already past `discovered` are left alone.
 *
 *   npm run seed:videos -- [--from <dir with .vtt files>] [--data-dir <path>]
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { parse as parseYaml } from "yaml";
import { exists, readText, writeText } from "../lib/fsx.js";
import { logger } from "../lib/log.js";
import { advance, Manifest, nextStage } from "../lib/manifest.js";
import { DATA_DIR, OVERRIDES_DIR } from "../lib/paths.js";
import { sha256 } from "../lib/text.js";
import { cleanVtt } from "./vtt-clean.js";

const log = logger("seed");
export const SEED_SOURCE = "yt-microsoft";
export const DEFAULT_SEED_DIR = "/Users/waldo/SourceCode/Community/msdyn365-2026-release-wave-2/data/transcripts/raw";
const VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;

export interface SeedFile { name: string; vtt: string }
export interface SeedEntry { file: string; videoId: string; title: string; published_at: string; via: "filename" | "override" }
export interface SeedReport { files: number; imported: number; already: number; captions_written: number; unresolved: string[]; duplicates: string[] }

/** `2026-10-01 - BCLE - What's new： X (2026 release wave 2) [id].vtt` → date, readable title, id when present. */
export function parseSeedName(name: string): { date: string | null; title: string; videoId: string | null } {
  const base = name.replace(/\.vtt$/i, "");
  const id = base.match(/\[([A-Za-z0-9_-]{11})\]\s*$/)?.[1] ?? null;
  const date = base.match(/^(\d{4}-\d{2}-\d{2})\b/)?.[1] ?? null;
  const title = base
    .replace(/\s*\[[A-Za-z0-9_-]{11}\]\s*$/, "")
    .replace(/^\d{4}-\d{2}-\d{2}\s+-\s+/, "")
    .replace(/^BCLE\s+-\s+/, "")
    .replace(/：/g, ":")
    .trim();
  return { date, title, videoId: id };
}

export function resolveSeed(files: SeedFile[], overrides: Record<string, string>): { entries: SeedEntry[]; unresolved: string[]; duplicates: string[] } {
  const entries: SeedEntry[] = [];
  const unresolved: string[] = [];
  const seen = new Map<string, string>();
  const duplicates: string[] = [];
  for (const f of files) {
    const p = parseSeedName(f.name);
    const videoId = p.videoId ?? overrides[f.name] ?? null;
    if (!videoId || !VIDEO_ID.test(videoId) || !p.date) { unresolved.push(f.name); continue; }
    if (seen.has(videoId)) { duplicates.push(`${videoId}: ${seen.get(videoId)} | ${f.name}`); continue; }
    seen.set(videoId, f.name);
    entries.push({ file: f.name, videoId, title: p.title, published_at: `${p.date}T00:00:00Z`, via: p.videoId ? "filename" : "override" });
  }
  return { entries, unresolved, duplicates };
}

/** Write caption artifacts and bring items to `captioned`. Refuses to touch anything while an id is unresolved. */
export function importSeed(files: SeedFile[], overrides: Record<string, string>, manifest: Manifest, captionsDir: string, now = new Date()): SeedReport {
  const { entries, unresolved, duplicates } = resolveSeed(files, overrides);
  const report: SeedReport = { files: files.length, imported: 0, already: 0, captions_written: 0, unresolved, duplicates };
  if (unresolved.length || duplicates.length) return report;
  const byName = new Map(files.map((f) => [f.name, f.vtt]));
  for (const e of entries) {
    const vtt = byName.get(e.file)!;
    const cleaned = cleanVtt(vtt);
    const vttPath = join(captionsDir, `${e.videoId}.vtt`);
    const segPath = join(captionsDir, `${e.videoId}.segments.json`);
    const segJson = JSON.stringify({ video_id: e.videoId, source: "seed", ...cleaned }, null, 2) + "\n";
    if (!exists(vttPath) || readText(vttPath) !== vtt) { writeText(vttPath, vtt); report.captions_written++; }
    if (!exists(segPath) || readText(segPath) !== segJson) writeText(segPath, segJson);

    // an item the RSS ingest already found keeps its exact title and upload time; the file name is a fallback
    const prev = manifest.get(`video/${SEED_SOURCE}/${e.videoId}`);
    let { item } = manifest.discover({
      pillar: "video", source: SEED_SOURCE, key: e.videoId, tier: "official", title: prev?.title ?? e.title,
      url: `https://www.youtube.com/watch?v=${e.videoId}`, published_at: prev?.published_at ?? e.published_at, language: "en",
      meta: { channel_id: "UCLErzd6kpQ0DAJSGsGjtxbA", seed_file: e.file },
    }, now);
    if (item.state !== "discovered") { report.already++; continue; }
    const caption = { path: `data/captions/microsoft/${e.videoId}.vtt`, vtt_sha256: sha256(vtt), segments: cleaned.segments.length, words: cleaned.word_count, lang: "en-orig", seed: true, id_via: e.via };
    item = advance(item, "fetched", { seed: true }, now);
    if (nextStage(item) !== "captioned") throw new Error(`${item.id}: unexpected flow after fetched`);
    item = advance(item, "captioned", caption, now);
    manifest.save(item);
    report.imported++;
  }
  return report;
}

export function loadSeedOverrides(path = resolve(OVERRIDES_DIR, "seed-videos.yaml")): Record<string, string> {
  if (!exists(path)) return {};
  return (parseYaml(readText(path)) as { videos?: Record<string, string> })?.videos ?? {};
}

function main(): void {
  const argv = process.argv.slice(2);
  const val = (f: string) => { const i = argv.indexOf(f); return i >= 0 ? argv[i + 1] : undefined; };
  const from = resolve(val("--from") ?? DEFAULT_SEED_DIR);
  const dataDir = resolve(val("--data-dir") ?? DATA_DIR);
  const files = readdirSync(from).filter((n) => n.toLowerCase().endsWith(".vtt")).sort()
    .map((name) => ({ name, vtt: readFileSync(join(from, name), "utf8") }));
  const report = importSeed(files, loadSeedOverrides(), new Manifest(resolve(dataDir, "manifest")), resolve(dataDir, "captions", "microsoft"));
  for (const u of report.unresolved) log.error(`no videoId: ${u} (add it to data/overrides/seed-videos.yaml)`);
  for (const d of report.duplicates) log.error(`duplicate videoId ${d}`);
  log.info(`seed: ${report.files} files, ${report.imported} imported, ${report.already} already past discovered, ${report.captions_written} caption files written`);
  if (report.unresolved.length || report.duplicates.length) process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) main();
