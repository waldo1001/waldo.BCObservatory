/** Ingest dispatcher: every enabled source, by kind, isolated failures, bounded concurrency. */
import type { SourceDef, SourceKind } from "../lib/config.js";
import { pMap } from "../lib/llm.js";
import type { Pillar } from "../lib/manifest.js";
import { ingestBlog } from "./blogs.js";
import { ingestCode } from "./code.js";
import { hostOf, ingestDiscovery } from "./discovery.js";
import { ingestGitContent } from "./git-content.js";
import { ingestGithubPrs } from "./github-prs.js";
import { ingestMarketplace } from "./marketplace.js";
import { ingestRoadmap } from "./roadmap.js";
import { newResult, PILLAR_OF, type IngestContext, type SourceResult } from "./types.js";
import { ingestYoutube } from "./youtube.js";

const BY_KIND: Record<SourceKind, (s: SourceDef, ctx: IngestContext) => Promise<SourceResult>> = {
  "docs-git": ingestGitContent, "guidelines-git": ingestGitContent, "code-git": ingestCode, youtube: ingestYoutube,
  blog: ingestBlog, "roadmap-api": ingestRoadmap, discovery: ingestDiscovery, "github-pr": ingestGithubPrs,
  vsmarketplace: ingestMarketplace,
};

export function knownHosts(sources: SourceDef[]): Set<string> {
  const hosts = new Set<string>();
  for (const s of sources) {
    if (s.kind === "discovery") continue;
    for (const u of [s.url, s.fetch?.feed, s.fetch?.rest]) { const h = u ? hostOf(u) : null; if (h) hosts.add(h); }
  }
  return hosts;
}

export interface IngestOptions { pillars?: Pillar[]; only?: string[]; concurrency?: number }

export async function runIngest(sources: SourceDef[], ctx: IngestContext, opts: IngestOptions = {}): Promise<(SourceResult & { duration_ms: number })[]> {
  const selected = sources.filter((s) => s.enabled
    && (!opts.only || opts.only.includes(s.id))
    && (!opts.pillars || (PILLAR_OF[s.kind] !== null && opts.pillars.includes(PILLAR_OF[s.kind]!))));
  return pMap(selected, async (s) => {
    const started = Date.now();
    try {
      return { ...(await BY_KIND[s.kind](s, ctx)), duration_ms: Date.now() - started };
    } catch (e) {
      return { ...newResult(s), ok: false, error: String((e as Error).message ?? e).slice(0, 500), duration_ms: Date.now() - started };
    }
  }, opts.concurrency ?? 4);
}
