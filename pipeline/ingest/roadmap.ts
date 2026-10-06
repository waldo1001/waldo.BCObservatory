/**
 * Microsoft 365 roadmap API (replaces the retired release plans): Business Central items become roadmap items
 * keyed by roadmap id. A dated snapshot + diff is written only when the BC item set changed.
 */
import { resolve } from "node:path";
import type { SourceDef } from "../lib/config.js";
import { listFiles, readJson, writeJson } from "../lib/fsx.js";
import { stripHtml } from "../lib/http.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { newResult, tally, type IngestContext, type SourceResult } from "./types.js";

export interface RoadmapEntry {
  id: string; title: string; area: string | null; description: string; status: string; release_phase: string | null;
  ga: string | null; preview: string | null; created: string | null; modified: string | null;
  cloud: string[]; platforms: string[];
}

const tags = (v: any, k: string): string[] => (v?.tagsContainer?.[k] ?? []).map((t: any) => String(t.tagName));
const utc = (s: unknown) => (typeof s === "string" && s ? new Date(/[zZ]|[+-]\d\d:?\d\d$/.test(s) ? s : `${s}Z`).toISOString() : null);

export function toRoadmapEntry(raw: any): RoadmapEntry {
  const full = String(raw.title ?? "").replace(/^Dynamics 365 Business Central:\s*/i, "");
  const dash = full.indexOf(" - ");
  return {
    id: String(raw.id), title: dash > 0 ? full.slice(dash + 3) : full, area: dash > 0 ? full.slice(0, dash) : null,
    description: stripHtml(String(raw.description ?? "")), status: String(raw.status ?? ""),
    release_phase: tags(raw, "releasePhase")[0] ?? null, ga: raw.publicDisclosureAvailabilityDate || null,
    preview: raw.publicPreviewDate || null, created: utc(raw.created), modified: utc(raw.modified),
    cloud: tags(raw, "cloudInstances"), platforms: tags(raw, "platforms"),
  };
}

export async function ingestRoadmap(source: SourceDef, ctx: IngestContext): Promise<SourceResult> {
  const r = newResult(source);
  const api = source.fetch?.api;
  const product = source.fetch?.product_filter;
  if (!api || !product) throw new Error(`${source.id}: fetch.api and fetch.product_filter are required`);
  const all = (await (await ctx.http(api, { accept: "application/json" })).json()) as any[];
  const entries = all.filter((x) => tags(x, "products").includes(product)).map(toRoadmapEntry).sort((a, b) => a.id.localeCompare(b.id));

  const present = new Set<string>();
  for (const e of entries) {
    present.add(e.id);
    const { change } = ctx.manifest.discover({
      pillar: "roadmap", source: source.id, key: e.id, tier: source.tier, title: e.title,
      url: `https://www.microsoft.com/microsoft-365/roadmap?id=${e.id}`, published_at: e.created, input_hash: sha256(canonicalJson(e)),
      meta: { status: e.status, release_phase: e.release_phase, ga: e.ga, preview: e.preview, area: e.area },
    }, ctx.now);
    tally(r, change);
  }
  r.counts.removed = ctx.manifest.markRemoved("roadmap", source.id, present);
  r.note = `${entries.length} Business Central items of ${all.length}` + writeSnapshot(entries, ctx);
  return r;
}

/** Snapshot only on change, plus a diff against the previous snapshot. Returns a note suffix. */
function writeSnapshot(entries: RoadmapEntry[], ctx: IngestContext): string {
  const snapDir = resolve(ctx.roadmapDir, "snapshots");
  const prevPath = listFiles(snapDir, ".json").at(-1);
  const prev: RoadmapEntry[] = prevPath ? readJson<{ items: RoadmapEntry[] }>(prevPath).items : [];
  const hash = sha256(canonicalJson(entries));
  if (prevPath && sha256(canonicalJson(prev)) === hash) return "; snapshot unchanged";
  const date = ctx.now.toISOString().slice(0, 10);
  writeJson(resolve(snapDir, `${date}.json`), { taken_at: ctx.now.toISOString(), hash, count: entries.length, items: entries });
  const before = new Map(prev.map((e) => [e.id, e]));
  const after = new Map(entries.map((e) => [e.id, e]));
  const diff = {
    from: prevPath ? prevPath.slice(prevPath.lastIndexOf("/") + 1, -5) : null, to: date,
    added: entries.filter((e) => !before.has(e.id)).map((e) => e.id),
    removed: prev.filter((e) => !after.has(e.id)).map((e) => e.id),
    changed: entries.filter((e) => before.has(e.id) && canonicalJson(before.get(e.id)) !== canonicalJson(e)).map((e) => e.id),
  };
  writeJson(resolve(ctx.roadmapDir, "diffs", `${date}.json`), diff);
  return `; snapshot written (+${diff.added.length} -${diff.removed.length} ~${diff.changed.length})`;
}
