/**
 * Learn docs (docs-git) and guidelines (guidelines-git): one item per markdown page in a blobless mirror.
 * Key = repo path, input hash = git blob id, published_at = last commit touching the file. No file contents
 * are read here; the fetched stage does that. links-only sources are kept for the link index, never processed.
 */
import { resolve } from "node:path";
import type { SourceDef } from "../lib/config.js";
import { ensureMirror, headSha, lastCommitDates, lsTree } from "../lib/git.js";
import { skip } from "../lib/manifest.js";
import { newResult, tally, type IngestContext, type SourceResult } from "./types.js";

export function isContentPage(path: string): boolean {
  if (!path.endsWith(".md")) return false;
  const base = path.slice(path.lastIndexOf("/") + 1);
  return base !== "TOC.md" && !/(^|\/)includes\//.test(path);
}

export function pageUrl(source: Pick<SourceDef, "kind" | "url" | "repo" | "branch" | "paths">, path: string): string {
  if (source.kind === "docs-git") {
    const prefix = (source.paths ?? []).find((p) => path.startsWith(p)) ?? "";
    const rel = path.slice(prefix.length).replace(/\.md$/, "").replace(/(^|\/)index$/, "$1");
    return source.url.replace(/\/?$/, "/") + rel;
  }
  return `https://github.com/${source.repo}/blob/${source.branch ?? "main"}/${encodeURI(path)}`;
}

function titleFromPath(path: string): string {
  return path.slice(path.lastIndexOf("/") + 1).replace(/\.md$/, "").replace(/[-_]+/g, " ").trim();
}

export async function ingestGitContent(source: SourceDef, ctx: IngestContext): Promise<SourceResult> {
  const r = newResult(source);
  const pillar = source.kind === "docs-git" ? "docs" : "guidelines";
  if (!source.repo) throw new Error(`${source.id}: repo missing`);
  const branch = source.branch ?? "main";
  const paths = source.paths ?? [];
  const dir = await ensureMirror(ctx.repoUrl(source.repo), resolve(ctx.mirrorsDir, `${source.id}.git`), branch);
  const [entries, dates, sha] = await Promise.all([lsTree(dir, branch, paths), lastCommitDates(dir, branch, paths), headSha(dir, branch)]);
  const pages = entries.filter((e) => isContentPage(e.path));
  const present = new Set<string>();
  for (const e of pages) {
    present.add(e.path);
    const { item, change } = ctx.manifest.discover({
      pillar, source: source.id, key: e.path, tier: source.tier, title: titleFromPath(e.path), url: pageUrl(source, e.path),
      published_at: dates.get(e.path) ?? null, language: source.language, input_hash: e.blob,
      meta: { repo: source.repo, path: e.path },
    }, ctx.now);
    if (source.mode === "links-only" && change === "new") ctx.manifest.save(skip(item, "links-only"));
    tally(r, change);
  }
  r.counts.removed = ctx.manifest.markRemoved(pillar, source.id, present);
  r.note = `${pages.length} pages at ${sha.slice(0, 12)}`;
  return r;
}
