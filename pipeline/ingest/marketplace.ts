/**
 * The AL Language extension changelog on the Visual Studio Marketplace (D85): one manifest item per extension version.
 *
 * The marketplace page shows only the changelog of the highest version number, so the ingest asks the gallery API
 * (`extensionquery`, a POST without a key) for every upload, takes the newest stable and the newest pre-release upload,
 * downloads their changelog assets (immutable per upload), parses both (changelog-md.ts) and merges them per version.
 * A dated snapshot and a diff under data/releases/al/ are written only when a version changed, like the roadmap.
 *
 * The nightly check is one gallery request: the latest-version-only flags answer with the highest version number,
 * not the newest upload (a stable 18.0 upload after the 30.0 pre-release is invisible there), so the full upload list
 * is asked every night and the assets are fetched only when a track's newest upload is not the one in the snapshot.
 */
import { dirname, resolve } from "node:path";
import type { SourceDef } from "../lib/config.js";
import { listFiles, readJson, writeJson } from "../lib/fsx.js";
import { validateOrThrow } from "../lib/schema.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { parseChangelog, type ChangelogEntry, type ChangelogSection } from "./changelog-md.js";
import { newResult, tally, type IngestContext, type SourceResult } from "./types.js";

/** Every version with its files and properties (IncludeVersions | IncludeFiles | IncludeVersionProperties | ...). */
export const GALLERY_FLAGS_ALL = 51;
export const GALLERY_ACCEPT = "application/json;api-version=3.0-preview.1";
const CHANGELOG_ASSET = "Microsoft.VisualStudio.Services.Content.Changelog";
const PRERELEASE = "Microsoft.VisualStudio.Code.PreRelease";

export interface Upload { version: string; uploaded_at: string; prerelease: boolean; asset: string | null }
export interface Track { version: string; uploaded_at: string; asset: string; bytes: number }
export interface SnapshotVersion {
  key: string; version: string; wave: string | null; major: string | null;
  preview_at: string | null; released_at: string | null;
  /** The stable and the pre-release changelog differ for this version: the page says it merged them (spec section 9). */
  merged_tracks: boolean;
  entries: ChangelogEntry[];
}
export interface ReleaseSnapshot {
  taken_at: string; hash: string; extension: string; uploads: number;
  tracks: { stable: Track | null; prerelease: Track | null };
  dropped_bytes: number; versions: SnapshotVersion[];
}
export interface EntryDiff { added: string[]; changed: string[]; removed: string[] }
export interface ReleaseDiff { from: string | null; to: string; added: string[]; removed: string[]; changed: string[]; entries: Record<string, EntryDiff> }

export const releasesDir = (dataDir: string) => resolve(dataDir, "releases", "al");
/** The page key of a changelog version: `al-18.0`, `al-4.0.0`; the three "9.3 Update n" sections become `al-9.3-update-1`. */
export const releaseKey = (version: string) => `al-${version.trim().replace(/\s+/g, "-").toLowerCase()}`;
/** "18.0.2819426" and "18.0" and "9.3 Update 2" → "18.0" / "9.3": the upload versions a changelog version owns. */
export const minorOf = (version: string) => version.split(/[.\s]/).slice(0, 2).join(".");

export function latestSnapshot(dataDir: string): { path: string; date: string; snap: ReleaseSnapshot } | null {
  const path = listFiles(resolve(releasesDir(dataDir), "snapshots"), ".json").sort().at(-1);
  return path ? { path, date: path.slice(path.lastIndexOf("/") + 1, -5), snap: readJson<ReleaseSnapshot>(path) } : null;
}

/** The gallery's answer as uploads, in the gallery's order (by version number, highest first). */
export function galleryUploads(json: any): Upload[] {
  const ext = json?.results?.[0]?.extensions?.[0];
  if (!ext || !Array.isArray(ext.versions)) throw new Error("gallery: no extension in the answer");
  return ext.versions.map((v: any) => ({
    version: String(v.version),
    uploaded_at: new Date(String(v.lastUpdated)).toISOString(),
    prerelease: (v.properties ?? []).some((p: any) => p?.key === PRERELEASE && String(p.value) === "true"),
    asset: (v.files ?? []).find((f: any) => f?.assetType === CHANGELOG_ASSET)?.source ?? null,
  }));
}
/** Per `major.minor`: the first pre-release upload is the preview, the first stable upload the release (UTC dates). */
export function releaseDates(uploads: Upload[]): Map<string, { preview_at: string | null; released_at: string | null }> {
  const out = new Map<string, { preview_at: string | null; released_at: string | null }>();
  for (const u of uploads) {
    const k = minorOf(u.version);
    const d = out.get(k) ?? { preview_at: null, released_at: null };
    const day = u.uploaded_at.slice(0, 10);
    if (u.prerelease) d.preview_at = d.preview_at && d.preview_at <= day ? d.preview_at : day;
    else d.released_at = d.released_at && d.released_at <= day ? d.released_at : day;
    out.set(k, d);
  }
  return out;
}
/**
 * Newest stable and newest pre-release upload. Both tracks are read even when the stable upload is the newer one: on
 * 2026-10-08 the stable 18.0.2819426 came five hours after the 30.0.2813176 pre-release, which alone holds 30.0.
 */
export function tracksOf(uploads: Upload[]): { stable: Upload | null; prerelease: Upload | null } {
  const newest = (xs: Upload[]) => xs.filter((u) => u.asset).sort((a, b) => b.uploaded_at.localeCompare(a.uploaded_at))[0] ?? null;
  return { stable: newest(uploads.filter((u) => !u.prerelease)), prerelease: newest(uploads.filter((u) => u.prerelease)) };
}

/**
 * Merge the parsed tracks, the later-uploaded first: the union of versions and, per version, of entries by slug; a
 * body that differs comes from the later track; order follows the later track, entries only in the other are appended.
 */
export function mergeTracks(later: ChangelogSection[], earlier: ChangelogSection[]): (ChangelogSection & { merged_tracks: boolean })[] {
  const other = new Map(earlier.map((s) => [s.version, s]));
  const out = later.map((s) => {
    const o = other.get(s.version);
    if (!o) return { ...s, merged_tracks: false };
    const have = new Set(s.entries.map((e) => e.slug));
    const entries = [...s.entries, ...o.entries.filter((e) => !have.has(e.slug))];
    return { ...s, wave: s.wave ?? o.wave, major: s.major ?? o.major, entries, merged_tracks: canonicalJson(s.entries) !== canonicalJson(o.entries) };
  });
  const seen = new Set(later.map((s) => s.version));
  return [...out, ...earlier.filter((s) => !seen.has(s.version)).map((s) => ({ ...s, merged_tracks: false }))];
}

/** "9.3 Update 2" → [9, 3, 0, 2]; "4.0.0" → [4, 0, 0, 0]. */
const versionParts = (v: string) => { const m = v.match(/^(\d+)\.(\d+)(?:\.(\d+))?(?:\s+Update\s+(\d+))?/); return m ? m.slice(1).map((x) => Number(x ?? 0)) : [0, 0, 0, 0]; };
/**
 * Newest first by version number, the changelog's own order. Not by date: 13 of the 62 versions on 2026-10-08 have no
 * upload left in the gallery (16.4, 15.3, ...), and the dated ones follow the version order but for one pair a day apart.
 */
export function sortVersions(vs: SnapshotVersion[]): SnapshotVersion[] {
  const cmp = (a: number[], b: number[]) => { for (let i = 0; i < 4; i++) if (a[i] !== b[i]) return b[i] - a[i]; return 0; };
  return [...vs].sort((a, b) => cmp(versionParts(a.version), versionParts(b.version)) || b.version.localeCompare(a.version));
}

const itemInput = (v: SnapshotVersion) => ({ version: v.version, wave: v.wave, major: v.major, preview_at: v.preview_at, released_at: v.released_at, entries: v.entries });

export async function ingestMarketplace(source: SourceDef, ctx: IngestContext): Promise<SourceResult> {
  const r = newResult(source);
  const api = source.fetch?.api, extension = source.fetch?.extension;
  if (!api || !extension) throw new Error(`${source.id}: fetch.api and fetch.extension are required`);
  const dataDir = ctx.dataDir ?? dirname(ctx.roadmapDir);
  const query = { filters: [{ criteria: [{ filterType: 7, value: extension }], pageNumber: 1, pageSize: 1 }], flags: GALLERY_FLAGS_ALL };
  const res = await ctx.http(api, { method: "POST", body: JSON.stringify(query), accept: GALLERY_ACCEPT, headers: { "content-type": "application/json" } });
  const uploads = galleryUploads(await res.json());
  const tracks = tracksOf(uploads);
  if (!tracks.stable && !tracks.prerelease) throw new Error(`${source.id}: no upload carries a changelog`);
  const latest = [tracks.stable, tracks.prerelease].filter(Boolean).sort((a, b) => b!.uploaded_at.localeCompare(a!.uploaded_at))[0]!;
  const prev = latestSnapshot(dataDir);

  const discoverAll = (versions: SnapshotVersion[]) => {
    const present = new Set<string>();
    for (const v of versions) {
      present.add(v.key);
      const day = v.released_at ?? v.preview_at;
      const { change } = ctx.manifest.discover({
        pillar: "release", source: source.id, key: v.key, tier: source.tier, title: `AL Language extension ${v.version}`,
        url: source.url, published_at: day ? `${day}T00:00:00.000Z` : null, input_hash: sha256(canonicalJson(itemInput(v))),
        meta: { version: v.version, wave: v.wave, major: v.major, preview_at: v.preview_at, released_at: v.released_at, prerelease: !v.released_at, entries: v.entries.length },
      }, ctx.now);
      tally(r, change);
    }
    r.counts.removed = ctx.manifest.markRemoved("release", source.id, present);
  };

  // nothing moved: both tracks' newest uploads are the ones the snapshot was built from
  if (prev && prev.snap.tracks.stable?.asset === (tracks.stable?.asset ?? undefined) && prev.snap.tracks.prerelease?.asset === (tracks.prerelease?.asset ?? undefined)) {
    discoverAll(prev.snap.versions);
    r.note = `unchanged; latest ${latest.version} uploaded ${latest.uploaded_at.slice(0, 10)}`;
    return r;
  }

  // something moved: read both tracks (at most two GETs; the CDN assets are immutable per upload)
  const fetched: { track: "stable" | "prerelease"; up: Upload; md: string }[] = [];
  for (const track of ["stable", "prerelease"] as const) {
    const up = tracks[track];
    if (!up?.asset) continue;
    fetched.push({ track, up, md: await (await ctx.http(up.asset, { accept: "text/markdown" })).text() });
  }
  const majors = ctx.versions.majors as Record<string, { label?: unknown }>;
  const parsed = fetched.map((f) => ({ ...f, p: parseChangelog(f.md, majors) })).sort((a, b) => b.up.uploaded_at.localeCompare(a.up.uploaded_at));
  const merged = mergeTracks(parsed[0].p.sections, parsed[1]?.p.sections ?? []);
  const dates = releaseDates(uploads);
  const versions = sortVersions(merged.map((s) => {
    const d = dates.get(minorOf(s.version)) ?? { preview_at: null, released_at: null };
    return { key: releaseKey(s.version), version: s.version, wave: s.wave, major: s.major, preview_at: d.preview_at, released_at: d.released_at, merged_tracks: s.merged_tracks, entries: s.entries };
  }));
  discoverAll(versions);

  const trackOf = (t: "stable" | "prerelease"): Track | null => {
    const f = fetched.find((x) => x.track === t);
    return f ? { version: f.up.version, uploaded_at: f.up.uploaded_at, asset: f.up.asset!, bytes: Buffer.byteLength(f.md, "utf8") } : null;
  };
  const dropped = Math.max(...parsed.map((x) => x.p.dropped_bytes));
  const desc = (t: Track | null) => (t ? `${t.version} (${t.uploaded_at.slice(0, 10)})` : "none");
  r.note = `${versions.length} versions from ${uploads.length} uploads; stable ${desc(trackOf("stable"))}, pre-release ${desc(trackOf("prerelease"))}; `
    + `${dropped.toLocaleString("en-US")} bytes before 4.0.0 dropped; `
    + writeReleaseSnapshot(versions, { stable: trackOf("stable"), prerelease: trackOf("prerelease") }, { extension, uploads: uploads.length, dropped_bytes: dropped }, ctx.now, dataDir);
  return r;
}

/** Which entries a version gained, lost or changed between two snapshots, by slug. */
export function entryDiff(before: ChangelogEntry[], after: ChangelogEntry[]): EntryDiff {
  const b = new Map(before.map((e) => [e.slug, e])), a = new Map(after.map((e) => [e.slug, e]));
  return {
    added: after.filter((e) => !b.has(e.slug)).map((e) => e.slug),
    changed: after.filter((e) => b.has(e.slug) && canonicalJson(b.get(e.slug)) !== canonicalJson(e)).map((e) => e.slug),
    removed: before.filter((e) => !a.has(e.slug)).map((e) => e.slug),
  };
}

/** Snapshot and diff only when the versions changed (roadmap.ts writeSnapshot pattern). Returns the note's tail. */
export function writeReleaseSnapshot(
  versions: SnapshotVersion[], tracks: ReleaseSnapshot["tracks"], info: { extension: string; uploads: number; dropped_bytes: number }, now: Date, dataDir: string,
): string {
  const dir = releasesDir(dataDir);
  const prev = latestSnapshot(dataDir);
  const hash = sha256(canonicalJson(versions));
  if (prev && prev.snap.hash === hash) return "snapshot unchanged";
  const date = now.toISOString().slice(0, 10);
  const snap: ReleaseSnapshot = { taken_at: now.toISOString(), hash, extension: info.extension, uploads: info.uploads, tracks, dropped_bytes: info.dropped_bytes, versions };
  validateOrThrow("release-snapshot", snap, `release snapshot ${date}`);
  // a second run on the same day compares against the day before, as the roadmap does
  const base = prev && prev.date === date ? previousTo(dataDir, date) : prev;
  const before = new Map((base?.snap.versions ?? []).map((v) => [v.key, v]));
  const after = new Map(versions.map((v) => [v.key, v]));
  const changed = versions.filter((v) => before.has(v.key) && canonicalJson(before.get(v.key)) !== canonicalJson(v)).map((v) => v.key);
  const entries: Record<string, EntryDiff> = {};
  for (const k of changed) {
    const d = entryDiff(before.get(k)!.entries, after.get(k)!.entries);
    if (d.added.length || d.changed.length || d.removed.length) entries[k] = d;
  }
  const diff: ReleaseDiff = {
    from: base?.date ?? null, to: date,
    added: versions.filter((v) => !before.has(v.key)).map((v) => v.key),
    removed: [...before.keys()].filter((k) => !after.has(k)),
    changed, entries,
  };
  validateOrThrow("release-diff", diff, `release diff ${date}`);
  writeJson(resolve(dir, "snapshots", `${date}.json`), snap);
  writeJson(resolve(dir, "diffs", `${date}.json`), diff);
  const detail = Object.entries(entries).map(([k, d]) => `${k}${d.added.length ? ` +${d.added.length} ${d.added.length === 1 ? "entry" : "entries"}` : ""}${d.changed.length ? ` ~${d.changed.length}` : ""}${d.removed.length ? ` -${d.removed.length}` : ""}`);
  return `snapshot written (+${diff.added.length} -${diff.removed.length} ~${diff.changed.length}${detail.length ? `: ${detail.join(", ")}` : ""})`;
}
function previousTo(dataDir: string, date: string): { date: string; snap: ReleaseSnapshot } | null {
  const path = listFiles(resolve(releasesDir(dataDir), "snapshots"), ".json").sort().filter((p) => p.slice(p.lastIndexOf("/") + 1, -5) < date).at(-1);
  return path ? { date: path.slice(path.lastIndexOf("/") + 1, -5), snap: readJson<ReleaseSnapshot>(path) } : null;
}
