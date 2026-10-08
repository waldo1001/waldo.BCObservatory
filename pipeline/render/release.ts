/**
 * AL Language extension release pages (D85, deterministic): content/releases/al-<version>.md + content/releases/llms.txt.
 *
 * One page per changelog version, from the newest snapshot under data/releases/al/: Microsoft's entries verbatim (level
 * 3 → `##`, level 4 → `###`), the gallery's preview and release dates, the BC major of the wave, and "What changed on
 * this page" from every diff that touched the version after its first snapshot. No model text: review state derived.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { stringify as toYaml } from "yaml";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import type { Manifest, ManifestItem } from "../lib/manifest.js";
import { reviewOf } from "../lib/review.js";
import { validateOrThrow } from "../lib/schema.js";
import { clip } from "../summarize/video.js";
import { latestSnapshot, releasesDir, type ReleaseDiff, type SnapshotVersion } from "../ingest/marketplace.js";
import type { StageContext, StageHandler } from "../orchestrator/execute.js";
import { PIPELINE_VERSION } from "../version.js";

export interface VersionChange { at: string; added: string[]; changed: string[]; removed: string[] }

const EXTENSION = "ms-dynamics-smb.al";
const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");
const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
export const releasePagePath = (contentDir: string, key: string) => resolve(contentDir, "releases", `${key}.md`);
const realEntries = (v: SnapshotVersion) => v.entries.filter((e) => e.slug !== "_intro");
const issuesOf = (v: SnapshotVersion) => [...new Set(v.entries.flatMap((e) => e.issues))].sort((a, b) => a - b);
/** "Business Central 2026 release wave 2 (BC29)", or the wave alone, or null. */
const waveText = (v: SnapshotVersion) => (v.wave ? `Business Central ${v.wave}${v.major ? ` (BC${v.major})` : ""}` : null);

/** Per version key, the diffs that touched its entries after its first snapshot, newest first. */
export function releaseChanges(dataDir: string): Map<string, VersionChange[]> {
  const out = new Map<string, VersionChange[]>();
  for (const f of listFiles(resolve(releasesDir(dataDir), "diffs"), ".json").sort().reverse()) {
    const d = readJson<ReleaseDiff>(f);
    if (!d.from) continue;
    for (const [key, e] of Object.entries(d.entries ?? {})) out.set(key, [...(out.get(key) ?? []), { at: d.to, added: e.added, changed: e.changed, removed: e.removed }]);
  }
  return out;
}

export function renderReleasePage(item: ManifestItem, v: SnapshotVersion, changes: VersionChange[], sourceUrl: string, now: Date): string {
  const entries = realEntries(v);
  const issues = issuesOf(v);
  const wave = waveText(v);
  const dates = v.preview_at && v.released_at ? `previewed ${v.preview_at}, released ${v.released_at}`
    : v.released_at ? `released ${v.released_at}` : v.preview_at ? `previewed ${v.preview_at}, no stable release yet` : "no upload of it left in the marketplace gallery";
  const summary = clip(`AL Language extension ${v.version}${wave ? ` for ${wave}` : ""}: ${dates}; ${plural(entries.length, "changelog entry", "changelog entries")}${issues.length ? `, ${plural(issues.length, "GitHub issue")} linked` : ""}.`);
  const date = v.released_at ?? v.preview_at ?? null;
  const fm = {
    id: `release/${v.key}`, type: "release", title: `AL Language extension ${v.version}`, summary, tier: "official", language: "en",
    system: "development", tags: entries.slice(0, 8).map((e) => e.title.toLowerCase()),
    review: reviewOf(false),
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: {}, input_hash: item.input_hash ?? null },
    evidence: [{ kind: "marketplace", url: sourceUrl, title: `AL Language extension changelog, version ${v.version}`, date, commit: null, t: null, quote: null }],
    links: { learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [] },
    source_id: item.source, extension: EXTENSION, version: v.version, wave: v.wave, major: v.major, preview_at: v.preview_at, released_at: v.released_at,
    published_at: date, prerelease: !v.released_at, entry_count: entries.length, issues, changes,
  };
  validateOrThrow("frontmatter.release", fm, `release page ${v.key}`);
  const title = new Map(v.entries.map((e) => [e.slug, e.title]));
  const name = (slug: string) => `"${title.get(slug) || slug}"`;
  // blocks joined by one blank line; entry bodies stay verbatim (blank lines inside a fence are kept)
  const blocks: string[] = [
    `# AL Language extension ${v.version}`,
    `> ${summary}`,
    [`[Changelog on the Visual Studio Marketplace](${sourceUrl})`, v.wave ? `Business Central ${v.wave}` : null, v.major ? `BC${v.major}` : null].filter(Boolean).join(" · "),
  ];
  if (changes.length) {
    const lines = changes.flatMap((c) => [
      ...c.added.map((s) => `- ${c.at}: added ${name(s)}`), ...c.changed.map((s) => `- ${c.at}: changed ${name(s)}`), ...c.removed.map((s) => `- ${c.at}: removed ${name(s)}`),
    ]);
    if (lines.length) blocks.push("## What changed on this page", lines.join("\n"));
  }
  for (const e of v.entries) {
    if (e.slug !== "_intro") blocks.push(`${e.level === 4 ? "###" : "##"} ${e.title}`);
    if (e.body_md.trim()) blocks.push(e.body_md);
  }
  blocks.push(`Source: Visual Studio Marketplace, ${EXTENSION} changelog, Microsoft's text unchanged. Dates from the gallery's upload records.${v.merged_tracks ? " Merged from the stable and pre-release changelogs, which differ for this version." : ""}`);
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${blocks.join("\n\n")}\n`;
}

/** Write one release page if its content changed. Null when the newest snapshot lacks the version. */
function writeReleasePage(item: ManifestItem, versions: Map<string, SnapshotVersion>, changes: Map<string, VersionChange[]>, contentDir: string, now: Date): string | null {
  const key = item.id.slice(item.id.lastIndexOf("/") + 1);
  const v = versions.get(key);
  if (!v) return null;
  const page = renderReleasePage(item, v, changes.get(key) ?? [], item.url, now);
  const path = releasePagePath(contentDir, key);
  if (!exists(path) || stable(readText(path)) !== stable(page)) writeText(path, page);
  return key;
}
const snapshotVersions = (dataDir: string) => new Map((latestSnapshot(dataDir)?.snap.versions ?? []).map((v) => [v.key, v]));

/** Release `published`: the page from the newest snapshot and every diff (feature.ts pattern). */
export function releasePublished(): StageHandler {
  return async (item, ctx: StageContext) => {
    const key = writeReleasePage(item, snapshotVersions(ctx.dataDir), releaseChanges(ctx.dataDir), ctx.contentDir, ctx.now());
    if (!key) return { skip: "removed-upstream" };
    return { data: { path: `content/releases/${key}.md` }, output_hash: item.input_hash ?? undefined };
  };
}

/** After ingest: re-render every published release page, so a diff written tonight reaches pages published earlier. */
export function rerenderReleasePages(manifest: Manifest, dataDir: string, contentDir: string, now: Date): number {
  const versions = snapshotVersions(dataDir), changes = releaseChanges(dataDir);
  return manifest.list("release").filter((i) => i.stages.published).map((i) => writeReleasePage(i, versions, changes, contentDir, now)).filter(Boolean).length;
}

/** content/releases/llms.txt in the snapshot's order (newest version first); drops pages of versions the snapshot lacks. */
export function renderReleaseIndex(contentDir: string, dataDir: string): number {
  const dir = resolve(contentDir, "releases");
  if (!exists(dir)) return 0;
  const snap = latestSnapshot(dataDir)?.snap;
  const live = new Map((snap?.versions ?? []).map((v) => [v.key, v]));
  for (const f of readdirSync(dir).filter((n) => n.endsWith(".md"))) if (!live.has(f.slice(0, -3))) removeIfExists(resolve(dir, f));
  const have = new Set(readdirSync(dir).filter((n) => n.endsWith(".md")).map((f) => f.slice(0, -3)));
  const rows = (snap?.versions ?? []).filter((v) => have.has(v.key));
  if (!rows.length) { removeIfExists(resolve(dir, "llms.txt")); return 0; }
  const line = (v: SnapshotVersion) => {
    const parts = [v.wave ? `${v.wave}${v.major ? ` (BC${v.major})` : ""}` : null, v.preview_at ? `preview ${v.preview_at}` : null,
      v.released_at ? `released ${v.released_at}` : v.preview_at ? "not yet released" : "no upload date", plural(realEntries(v).length, "entry", "entries")].filter(Boolean);
    return `- [AL Language extension ${cell(v.version)}](${v.key}.md): ${parts.join(", ")}`;
  };
  const text = [
    "# BC Observatory: releases", "",
    "> Microsoft's changelog of the AL Language extension for Visual Studio Code, one page per extension version, with",
    "> dates from the marketplace gallery. Each page has strict frontmatter (schemas/frontmatter.release.json).", "",
    `${rows.length} versions, newest first.`, "",
    ...rows.map(line),
    "",
  ].join("\n");
  const idx = resolve(dir, "llms.txt");
  if (!exists(idx) || readText(idx) !== text) writeText(idx, text);
  return rows.length;
}
