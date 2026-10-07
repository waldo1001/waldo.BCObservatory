/**
 * Nightly planner (PLAN 4.3, orchestrator step 4): which items get work tonight, in which order.
 *
 * Per pillar: non-terminal items, opted-in full-text sources first (waldo.be: "the owner first, the rest opt in"),
 * then newest first (published_at desc, undated last), skipping items whose
 * retry_after is in the future. Items older than their source's backfill horizon are returned as skips.
 * Quotas (already scaled by the guard) cap items per quota key; deterministic tail stages (linked,
 * published) never consume quota, except the code pillar's `linked` (the call graph, D67: minutes of CPU, graph_jobs).
 * Code items go in `narrative_order` (29, 28, 30): one graph a night, and a moving vNext must not starve BC29. Pillars interleave round-robin so a hard clock stop starves none.
 */
import type { SourceDef } from "./config.js";
import { nextStage, type ManifestItem, type Pillar, type Stage } from "./manifest.js";

export interface PlannedWork { id: string; pillar: Pillar; stage: Stage; quota: string | null }
export interface Plan {
  work: PlannedWork[];
  skips: { id: string; reason: "horizon" }[];
  quota_use: Record<string, { selected: number; available: number; limit: number | null }>;
}

const PILLAR_ORDER: Pillar[] = ["video", "docs", "blog", "change", "guidelines", "code", "roadmap"];
const PILLAR_QUOTA: Record<Pillar, string | null> = {
  video: "video_extract", docs: "docs", blog: "posts", guidelines: "guidelines", code: "code_jobs", roadmap: null, change: "changes",
};

/** Which quota an item's next unit of work consumes; null = always runs (deterministic and cheap). */
export function quotaFor(pillar: Pillar, stage: Stage): string | null {
  if (pillar === "code" && stage === "linked") return "graph_jobs";
  if (stage === "linked" || stage === "published") return null;
  // reading a page from a local git mirror is deterministic and cheap
  if (stage === "fetched" && (pillar === "docs" || pillar === "guidelines")) return null;
  if (stage === "reviewed") return "opus_reviews";
  if (pillar === "video" && (stage === "fetched" || stage === "captioned")) return "captions";
  // a pull request's record and file list: GitHub calls, deterministic (D61)
  if (pillar === "change" && stage === "fetched") return "change_fetch";
  return PILLAR_QUOTA[pillar];
}

/** Oldest published_at a source still backfills; null = no horizon (backfill.all or official git sources). */
export function horizonFor(source: Pick<SourceDef, "backfill"> | undefined, now: Date): Date | null {
  const months = source?.backfill?.all ? undefined : source?.backfill?.months;
  if (!months) return null;
  const d = new Date(now);
  d.setUTCMonth(d.getUTCMonth() - months);
  return d;
}

export function planQueue(
  items: ManifestItem[],
  quotas: Record<string, number>,
  sources: Map<string, Pick<SourceDef, "backfill"> & Partial<Pick<SourceDef, "full_text">>>,
  now = new Date(),
  /** config/versions.json narrative_order: code items of these majors first, in this order (D67). */
  codeOrder: string[] = [],
): Plan {
  const skips: Plan["skips"] = [];
  const quota_use: Plan["quota_use"] = {};
  const byPillar = new Map<Pillar, PlannedWork[]>();
  const candidates: { item: ManifestItem; stage: Stage; quota: string | null }[] = [];

  for (const item of items) {
    const stage = nextStage(item);
    if (!stage) continue;
    if (item.retry_after && Date.parse(item.retry_after) > now.getTime()) continue;
    const horizon = horizonFor(sources.get(item.source), now);
    if (horizon && item.published_at && Date.parse(item.published_at) < horizon.getTime() && item.state === "discovered") {
      skips.push({ id: item.id, reason: "horizon" });
      continue;
    }
    candidates.push({ item, stage, quota: quotaFor(item.pillar, stage) });
  }

  const first = (c: { item: ManifestItem }) => (sources.get(c.item.source)?.full_text ? 0 : 1);
  const codeRank = (c: { item: ManifestItem }) => { if (c.item.pillar !== "code") return 0; const i = codeOrder.indexOf(String(c.item.meta?.major ?? "")); return i < 0 ? codeOrder.length : i; };
  candidates.sort((a, b) => {
    if (first(a) !== first(b)) return first(a) - first(b);
    if (codeRank(a) !== codeRank(b)) return codeRank(a) - codeRank(b);
    const ta = a.item.published_at ? Date.parse(a.item.published_at) : -Infinity;
    const tb = b.item.published_at ? Date.parse(b.item.published_at) : -Infinity;
    // undated items from a channel reconcile keep the channel's newest-first order
    const ra = typeof a.item.meta?.channel_rank === "number" ? a.item.meta.channel_rank : Infinity;
    const rb = typeof b.item.meta?.channel_rank === "number" ? b.item.meta.channel_rank : Infinity;
    return tb - ta || (ta === -Infinity && tb === -Infinity ? ra - rb : 0) || a.item.id.localeCompare(b.item.id);
  });

  for (const c of candidates) {
    const key = c.quota ?? "unlimited";
    const limit = c.quota === null ? null : quotas[c.quota] ?? 0;
    const use = (quota_use[key] ??= { selected: 0, available: 0, limit });
    use.available++;
    if (limit !== null && use.selected >= limit) continue;
    use.selected++;
    const list = byPillar.get(c.item.pillar) ?? [];
    list.push({ id: c.item.id, pillar: c.item.pillar, stage: c.stage, quota: c.quota });
    byPillar.set(c.item.pillar, list);
  }

  // round-robin across pillars, each pillar keeping its newest-first order
  const work: PlannedWork[] = [];
  const lists = PILLAR_ORDER.map((p) => byPillar.get(p) ?? []);
  for (let i = 0; lists.some((l) => i < l.length); i++) for (const l of lists) if (i < l.length) work.push(l[i]);
  return { work, skips, quota_use };
}
