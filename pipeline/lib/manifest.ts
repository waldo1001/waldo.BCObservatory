/**
 * Pipeline manifest: one JSON state file per source item (PLAN 4.2), validated by schemas/manifest-item.json.
 *
 * Path: data/manifest/<pillar>/<source>/<fileKey>.json, id = "<pillar>/<source>/<itemKey>".
 * The item key is the stable source id (videoId, Learn path, object key, post id); file names are a safe
 * encoding of it. Files are written only when their content changes, so a quiet night commits nothing.
 */
import { resolve } from "node:path";
import { exists, listFiles, readJson, readText, writeJson } from "./fsx.js";
import { MANIFEST_DIR } from "./paths.js";
import { validateOrThrow } from "./schema.js";
import { canonicalJson, shortHash, slugify, truncate } from "./text.js";

export type Pillar = "docs" | "code" | "guidelines" | "video" | "blog" | "roadmap";
export type Stage = "discovered" | "fetched" | "captioned" | "extracted" | "summarized" | "linked" | "reviewed" | "published";
export type State = Stage | "failed" | "skipped" | "stale";

export interface ManifestItem {
  id: string;
  pillar: Pillar;
  source: string;
  tier: "official" | "community";
  title: string;
  url: string;
  published_at?: string | null;
  language?: string;
  state: State;
  stages: Partial<Record<Stage, { at: string; [k: string]: unknown }>>;
  input_hash?: string | null;
  output_hash?: string | null;
  attempts: number;
  last_error?: string | null;
  retry_after?: string | null;
  flags?: string[];
  review?: { state: "unreviewed" | "reviewed" | "flagged"; by: string | null; at: string | null };
  skip?: string | null;
  /** When the item was skipped; lets a retryable skip (no-captions) come back later. */
  skipped_at?: string | null;
  meta?: Record<string, unknown>;
}

/**
 * Stage order per pillar. `reviewed` runs only for flagged items (Opus reviews hubs + flagged items, D07).
 * Roadmap and code are deterministic in v0.1; their flows grow when an LLM stage is added for them.
 */
export const FLOWS: Record<Pillar, Stage[]> = {
  video: ["discovered", "fetched", "captioned", "extracted", "summarized", "linked", "reviewed", "published"],
  docs: ["discovered", "fetched", "extracted", "summarized", "linked", "reviewed", "published"],
  guidelines: ["discovered", "fetched", "extracted", "summarized", "linked", "reviewed", "published"],
  blog: ["discovered", "fetched", "extracted", "summarized", "linked", "reviewed", "published"],
  code: ["discovered", "fetched", "extracted", "linked", "published"],
  roadmap: ["discovered", "fetched", "linked", "published"],
};
export const REMOVED_UPSTREAM = "removed-upstream";
const TERMINAL = new Set<State>(["published", "failed", "skipped"]);

export function itemId(pillar: Pillar, source: string, key: string): string {
  return `${pillar}/${source}/${key}`;
}
export function parseItemId(id: string): { pillar: Pillar; source: string; key: string } {
  const a = id.indexOf("/"), b = id.indexOf("/", a + 1);
  if (a < 0 || b < 0) throw new Error(`bad manifest id: ${id}`);
  const pillar = id.slice(0, a) as Pillar;
  if (!(pillar in FLOWS)) throw new Error(`bad manifest pillar in ${id}`);
  return { pillar, source: id.slice(a + 1, b), key: id.slice(b + 1) };
}
/** File-name-safe, collision-safe encoding of an item key; readable keys pass through unchanged. */
export function fileKey(key: string): string {
  if (/^[A-Za-z0-9][A-Za-z0-9._-]{0,119}$/.test(key) && !key.endsWith(".json")) return key;
  return `${slugify(key, 100) || "item"}--${shortHash(key, 10)}`;
}

export function nextStage(item: ManifestItem): Stage | null {
  if (item.state === "stale") return "fetched";
  if (TERMINAL.has(item.state)) return null;
  const flow = FLOWS[item.pillar];
  const next = flow[flow.indexOf(item.state as Stage) + 1];
  if (next === "reviewed" && !(item.flags?.length)) return "published";
  return next ?? null;
}

/** Record a completed stage. Throws when the stage is not the item's next stage (catches pipeline bugs). */
export function advance(item: ManifestItem, stage: Stage, data: Record<string, unknown> = {}, now = new Date()): ManifestItem {
  const expected = nextStage(item);
  if (stage !== expected) throw new Error(`${item.id}: cannot advance to ${stage} from ${item.state} (expected ${expected ?? "none"})`);
  return {
    ...item, state: stage, stages: { ...item.stages, [stage]: { at: now.toISOString(), ...data } },
    attempts: 0, last_error: null, retry_after: null,
  };
}

/** Item-level failure: exponential retry_after (base^attempts hours), `failed` after max attempts. */
export function fail(item: ManifestItem, error: string, retry: { max_attempts: number; backoff_hours_base: number }, now = new Date()): ManifestItem {
  const attempts = item.attempts + 1;
  const last_error = truncate(error.replace(/\s+/g, " "), 500);
  if (attempts >= retry.max_attempts) return { ...item, attempts, last_error, retry_after: null, state: "failed" };
  const retry_after = new Date(now.getTime() + Math.pow(retry.backoff_hours_base, attempts) * 3_600_000).toISOString();
  return { ...item, attempts, last_error, retry_after };
}

export function skip(item: ManifestItem, reason: string, now = new Date()): ManifestItem {
  return { ...item, state: "skipped", skip: reason, skipped_at: now.toISOString(), retry_after: null };
}

/** Captions often appear days after upload: a `no-captions` skip is retried weekly, CAPTION_RETRIES times. */
export const CAPTION_RETRY_DAYS = 7;
export const CAPTION_RETRIES = 4;
export function captionRetryDue(item: ManifestItem, now: Date): boolean {
  if (item.pillar !== "video" || item.state !== "skipped" || item.skip !== "no-captions") return false;
  if (Number(item.meta?.caption_retries ?? 0) >= CAPTION_RETRIES) return false;
  // skips older than skipped_at fall back to the fetch time, which is when the missing track was seen
  const since = Date.parse(item.skipped_at ?? (item.stages.fetched?.at as string | undefined) ?? "");
  return Number.isFinite(since) && now.getTime() - since >= CAPTION_RETRY_DAYS * 86_400_000;
}
/** Back to `discovered`: the next run re-reads the video's metadata (which caption tracks exist) and tries again. */
export function reviveForCaptions(item: ManifestItem): ManifestItem {
  return { ...item, state: "discovered", skip: null, skipped_at: null, attempts: 0, last_error: null, retry_after: null, meta: { ...(item.meta ?? {}), caption_retries: Number(item.meta?.caption_retries ?? 0) + 1 } };
}

export interface DiscoveredInput {
  pillar: Pillar; source: string; key: string; tier: "official" | "community"; title: string; url: string;
  published_at?: string | null; language?: string; input_hash?: string | null; meta?: Record<string, unknown>;
}
export type DiscoverChange = "new" | "changed" | "updated" | "unchanged";

export class Manifest {
  constructor(readonly root: string = MANIFEST_DIR) {}

  path(id: string): string {
    const { pillar, source, key } = parseItemId(id);
    return resolve(this.root, pillar, source, `${fileKey(key)}.json`);
  }
  get(id: string): ManifestItem | null {
    const p = this.path(id);
    return exists(p) ? readJson<ManifestItem>(p) : null;
  }
  /** Validate and write; returns false when the file already holds exactly this content. */
  save(item: ManifestItem): boolean {
    validateOrThrow("manifest-item", item, item.id);
    const p = this.path(item.id);
    const next = JSON.stringify(item, null, 2) + "\n";
    if (exists(p) && readText(p) === next) return false;
    writeJson(p, item);
    return true;
  }
  /**
   * Discovery upsert. New items start at `discovered`. A changed input hash on an item that already moved on
   * makes it `stale` (re-enters at `fetched`). Metadata refreshes (title, url, dates) never reset progress.
   */
  discover(input: DiscoveredInput, now = new Date()): { item: ManifestItem; change: DiscoverChange } {
    const id = itemId(input.pillar, input.source, input.key);
    const prev = this.get(id);
    if (!prev) {
      const item: ManifestItem = {
        id, pillar: input.pillar, source: input.source, tier: input.tier, title: input.title, url: input.url,
        published_at: input.published_at ?? null, ...(input.language ? { language: input.language } : {}),
        state: "discovered", stages: { discovered: { at: now.toISOString() } },
        input_hash: input.input_hash ?? null, attempts: 0, flags: [], ...(input.meta ? { meta: input.meta } : {}),
      };
      this.save(item);
      return { item, change: "new" };
    }
    let item: ManifestItem = {
      ...prev, tier: input.tier, title: input.title, url: input.url,
      published_at: input.published_at ?? prev.published_at ?? null,
      ...(input.language ? { language: input.language } : {}),
      ...(input.meta ? { meta: { ...(prev.meta ?? {}), ...input.meta } } : {}),
    };
    let change: DiscoverChange = "unchanged";
    if (prev.state === "skipped" && prev.skip === REMOVED_UPSTREAM) {
      // the item came back upstream: resume from scratch, or from fetch when it had been processed before
      const processed = Object.keys(prev.stages).some((s) => s !== "discovered");
      item = { ...item, state: processed ? "stale" : "discovered", skip: null, input_hash: input.input_hash ?? prev.input_hash ?? null };
      this.save(item);
      return { item, change: "changed" };
    }
    const hashChanged = input.input_hash != null && input.input_hash !== prev.input_hash;
    if (hashChanged) {
      item.input_hash = input.input_hash;
      if (prev.state !== "discovered" && prev.state !== "skipped") {
        item = { ...item, state: "stale", attempts: 0, last_error: null, retry_after: null };
      }
      change = "changed";
    }
    if (change === "unchanged" && canonicalJson(item) !== canonicalJson(prev)) change = "updated";
    if (change !== "unchanged") this.save(item);
    return { item, change };
  }
  /** Items of one source; used to notice upstream removals. */
  listSource(pillar: Pillar, source: string): ManifestItem[] {
    return listFiles(resolve(this.root, pillar, source), ".json").map((p) => readJson<ManifestItem>(p));
  }
  /** Mark items that disappeared upstream as skipped (revived automatically if they return). */
  markRemoved(pillar: Pillar, source: string, presentKeys: Set<string>): number {
    let n = 0;
    for (const it of this.listSource(pillar, source)) {
      if (it.state === "skipped" || presentKeys.has(parseItemId(it.id).key)) continue;
      this.save(skip(it, REMOVED_UPSTREAM));
      n++;
    }
    return n;
  }
  /** All items, optionally for one pillar; hubs and run reports live elsewhere under the manifest root. */
  list(pillar?: Pillar): ManifestItem[] {
    const dir = pillar ? resolve(this.root, pillar) : this.root;
    return listFiles(dir, ".json")
      .filter((p) => !p.includes("/_runs/") && !p.includes("/hubs/"))
      .map((p) => readJson<ManifestItem>(p));
  }
}
