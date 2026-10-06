/** Typed loaders for config/*.json and sources.yaml (with defaults applied). */
import { parse as parseYaml } from "yaml";
import { resolve } from "node:path";
import { readJson, readText } from "./fsx.js";
import { CONFIG_DIR, SOURCES_FILE } from "./paths.js";

export type Tier = "official" | "community";
export type SourceKind = "blog" | "youtube" | "docs-git" | "code-git" | "guidelines-git" | "roadmap-api" | "discovery";

export interface SourceDef {
  id: string;
  kind: SourceKind;
  name: string;
  url: string;
  tier: Tier;
  author?: { name: string; mvp?: boolean; github?: string; url?: string };
  language: string;
  full_text: boolean;
  consent?: { evidence: string; at: string; note?: string };
  fetch?: { feed?: string; rest?: string; scrape?: string; api?: string; product_filter?: string; user_agent?: "default" | "browser" };
  channel_id?: string;
  repo?: string;
  branch?: string;
  paths?: string[];
  license?: string;
  mode?: "links-only" | "metadata-only";
  backfill: { months?: number; all?: boolean };
  enabled: boolean;
  notes?: string;
}
export interface SourcesDoc { version: 1; defaults?: Partial<SourceDef>; sources: SourceDef[] }

export function loadConfig<T = any>(name: string): T {
  return readJson<T>(resolve(CONFIG_DIR, name.endsWith(".json") ? name : `${name}.json`));
}
export function loadSourcesRaw(path = SOURCES_FILE): SourcesDoc {
  return parseYaml(readText(path)) as SourcesDoc;
}
/** Sources with defaults applied. Dates in consent blocks are normalized to ISO strings. */
export function loadSources(path = SOURCES_FILE): SourceDef[] {
  const doc = loadSourcesRaw(path);
  const d = { tier: "community", full_text: false, language: "en", backfill: { months: 18 }, enabled: true, ...(doc.defaults ?? {}) };
  return doc.sources.map((s) => {
    const merged: SourceDef = { ...d, ...s } as SourceDef;
    if (merged.consent && (merged.consent.at as unknown) instanceof Date) merged.consent = { ...merged.consent, at: (merged.consent.at as unknown as Date).toISOString().slice(0, 10) };
    return merged;
  });
}
export function enabledSources(kind?: SourceKind | SourceKind[]): SourceDef[] {
  const kinds = kind === undefined ? null : Array.isArray(kind) ? kind : [kind];
  return loadSources().filter((s) => s.enabled && (!kinds || kinds.includes(s.kind)));
}
export interface Budget {
  window: { start_local: string; hard_stop_local: string; timezone: string };
  usage_guard: { max_5h_pct: number; max_7d_pct: number; recheck_every_llm_calls: number; on_unavailable: "reduced" | "skip" };
  headroom_scale: { min_headroom_pct: number; factor: number; facts_only?: boolean }[];
  reduced_factor: number;
  spend_caps: { night_usd: number; week_usd: number };
  quotas: Record<string, number>;
  retry: { max_attempts: number; backoff_hours_base: number };
  yt_dlp: { sleep_seconds_min: number; sleep_seconds_max: number };
}
export const budget = () => loadConfig<Budget>("budget");
export const models = () => loadConfig<{ roles: Record<string, string>; max_budget_usd_per_call: Record<string, number>; timeout_minutes: Record<string, number> }>("models");
export const taxonomy = () => loadConfig<{ systems: { id: string; label: string; aliases: string[] }[] }>("taxonomy");
