/**
 * Topic hub narratives (PLAN 4.3 stage 5 for hubs, Sonnet, quota hub_refresh): data/hubs/narratives/<path>.json.
 *
 * D12: a hub reads its members' summaries, never raw pages: its own Learn pages (Haiku extractions) and the
 * narratives of its subtopics. A hub is ready when at least READY_SHARE of those inputs exist, so leaves narrate
 * first and parents follow on later nights. input_hash covers every input; a narrative is refreshed only when it
 * changes. Most recently changed hubs first, within the quota, the deadline and the spend cap (D17).
 */
import { resolve } from "node:path";
import { exists, readJson, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import type { ManifestItem } from "../lib/manifest.js";
import { sha256 } from "../lib/text.js";
import type { TopicHub } from "../link/toc.js";
import { docExtractionPath, type DocExtraction } from "../extract/docs.js";
import type { Llm } from "../extract/video.js";
import { clip, tidy } from "./video.js";

export const PROMPT_VERSION = 1;
export const STAGE = "hub-topic";
export const READY_SHARE = 0.8;
export const MAX_MEMBERS_IN_PROMPT = 80;
const log = logger("hubs");

export const hubSchema = {
  type: "object", additionalProperties: false, required: ["summary", "overview", "key_points"],
  properties: { summary: { type: "string" }, overview: { type: "string" }, key_points: { type: "array", items: { type: "string" } } },
};
export interface HubNarrative {
  hub_id: string; input_hash: string; summary: string; overview: string; key_points: string[]; members_used: number; subtopics_used: number;
  prompt_version: number; at: string; llm: { model: string; cached: boolean; cost_usd: number | null };
}

export const SYSTEM = `You write the narrative of a topic hub in an agent-first knowledge base about Microsoft Dynamics 365 Business Central.
A hub groups Microsoft Learn pages of one section of the Learn table of contents. You get short summaries of the hub's own pages and of its subtopics, written from those pages.

Rules:
- Only what the summaries say. No outside knowledge, no versions or features that are not in the input.
- summary: 1 to 3 sentences, at most 600 characters, telling an AI agent what this section covers and which kinds of questions it answers. Start with the subject.
- overview: 1 to 3 short paragraphs for a practitioner: what the area is, how the pages fit together, where to start.
- key_points: 3 to 8 concrete points (capabilities, setup steps, limits, versions) taken from the summaries.
- Plain language, no hype, no em-dashes (use a plain hyphen), no "This hub".`;

export const narrativePath = (dataDir: string, hubId: string) => resolve(dataDir, "hubs", "narratives", `${hubId.replace(/^topic\//, "")}.json`);

export interface HubInputs { own: DocExtraction[]; ownTotal: number; subs: { hub: TopicHub; narrative: HubNarrative | null }[] }

/** Own members = members not covered by a subtopic. */
export function ownMembers(hub: TopicHub, byId: Map<string, TopicHub>): string[] {
  const sub = new Set(hub.children.flatMap((c) => byId.get(c)?.members ?? []));
  return hub.members.filter((m) => !sub.has(m));
}

export function gatherInputs(hub: TopicHub, byId: Map<string, TopicHub>, items: Map<string, ManifestItem>, dataDir: string, narratives: Map<string, HubNarrative>): HubInputs {
  const ownIds = ownMembers(hub, byId);
  const own = ownIds.map((id) => items.get(id)).filter((i): i is ManifestItem => !!i)
    .map((i) => docExtractionPath(dataDir, i)).filter(exists).map((p) => readJson<DocExtraction>(p));
  const subs = hub.children.map((c) => byId.get(c)).filter((h): h is TopicHub => !!h).map((h) => ({ hub: h, narrative: narratives.get(h.id) ?? null }));
  return { own, ownTotal: ownIds.length, subs };
}

export function isReady(x: HubInputs): boolean {
  const total = x.ownTotal + x.subs.length;
  const have = x.own.length + x.subs.filter((s) => s.narrative).length;
  return total > 0 && have >= Math.ceil(total * READY_SHARE);
}

export function inputHash(x: HubInputs): string {
  return sha256(JSON.stringify({ v: PROMPT_VERSION, own: x.own.map((d) => [d.item_id, d.summary]).sort(), subs: x.subs.map((s) => [s.hub.id, s.narrative?.summary ?? null]) }));
}

export function hubPrompt(hub: TopicHub, x: HubInputs): string {
  const own = [...x.own].sort((a, b) => a.title.localeCompare(b.title)).slice(0, MAX_MEMBERS_IN_PROMPT)
    .map((d) => ({ title: d.title, summary: d.summary, ...(d.features.length ? { features: d.features.slice(0, 6) } : {}), ...(d.versions.length ? { versions: d.versions } : {}) }));
  const subs = x.subs.map((s) => ({ title: s.hub.title, pages: s.hub.members.length, ...(s.narrative ? { summary: s.narrative.summary } : {}) }));
  return `Hub: "${hub.title}" (Learn TOC path: ${[...hub.breadcrumb, hub.title].join(" > ")}).
${x.own.length > MAX_MEMBERS_IN_PROMPT ? `The hub has ${x.own.length} own pages; the first ${MAX_MEMBERS_IN_PROMPT} by title are listed.\n` : ""}
Subtopics (JSON):
${JSON.stringify(subs, null, 1)}

Own pages (JSON):
${JSON.stringify(own, null, 1)}`;
}

export function loadNarratives(dataDir: string, hubs: TopicHub[]): Map<string, HubNarrative> {
  const m = new Map<string, HubNarrative>();
  for (const h of hubs) { const p = narrativePath(dataDir, h.id); if (exists(p)) m.set(h.id, readJson<HubNarrative>(p)); }
  return m;
}

export interface NarrativeRun { ready_stale: number; refreshed: number; failed: number; stopped: "done" | "quota" | "deadline" | "spend-cap" | "aborted"; errors: string[] }

/** Refresh stale, ready hub narratives within the quota. Children before parents within one night when possible. */
export async function refreshNarratives(
  hubs: TopicHub[], items: ManifestItem[], dataDir: string,
  o: { quota: number; deadline: Date; clock: () => Date; llm?: Llm; concurrency?: number },
): Promise<{ narratives: Map<string, HubNarrative>; run: NarrativeRun }> {
  const llm = o.llm ?? complete;
  const byId = new Map(hubs.map((h) => [h.id, h]));
  const byItem = new Map(items.map((i) => [i.id, i]));
  const narratives = loadNarratives(dataDir, hubs);
  const run: NarrativeRun = { ready_stale: 0, refreshed: 0, failed: 0, stopped: "done", errors: [] };
  const recency = (h: TopicHub) => Math.max(0, ...h.members.map((id) => Date.parse(byItem.get(id)?.published_at ?? "") || 0));
  // deepest first, so a parent can use tonight's child narratives; then most recently changed
  const order = [...hubs].sort((a, b) => b.breadcrumb.length - a.breadcrumb.length || recency(b) - recency(a));
  let started = 0;
  const levels = [...new Set(order.map((h) => h.breadcrumb.length))]; // already deepest first
  for (const depth of levels) {
    // a level's inputs are complete once the deeper level has finished
    const todo: { hub: TopicHub; x: HubInputs; hash: string }[] = [];
    for (const hub of order.filter((h) => h.breadcrumb.length === depth)) {
      const x = gatherInputs(hub, byId, byItem, dataDir, narratives);
      if (!isReady(x)) continue;
      const hash = inputHash(x);
      if (narratives.get(hub.id)?.input_hash === hash) continue;
      run.ready_stale++;
      todo.push({ hub, x, hash });
    }
    await pool(todo, o.concurrency ?? 1, async ({ hub, x, hash }) => {
      if (run.stopped !== "done") return; // keep counting the backlog
      if (started >= o.quota) { run.stopped = "quota"; return; }
      if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; return; }
      started++;
      try {
        const res = await llm<{ summary: string; overview: string; key_points: string[] }>({
          stage: STAGE, promptVersion: PROMPT_VERSION, role: "prose", system: SYSTEM, schema: hubSchema, prompt: hubPrompt(hub, x),
          inputs: [{ kind: "hub", id: hub.id, hash }], label: `${hub.id} narrative`,
        });
        const n: HubNarrative = {
          hub_id: hub.id, input_hash: hash, summary: clip(tidy(res.output.summary)), overview: tidy(res.output.overview),
          key_points: res.output.key_points.map(tidy).filter(Boolean).slice(0, 8), members_used: Math.min(x.own.length, MAX_MEMBERS_IN_PROMPT),
          subtopics_used: x.subs.filter((s) => s.narrative).length, prompt_version: PROMPT_VERSION, at: o.clock().toISOString(),
          llm: { model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : res.meta.cost_usd ?? null },
        };
        writeJson(narrativePath(dataDir, hub.id), n);
        narratives.set(hub.id, n);
        run.refreshed++;
      } catch (e) {
        if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; return; }
        if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(`${hub.id}: ${e.message}`); return; }
        run.failed++;
        run.errors.push(`${hub.id}: ${String((e as Error).message).slice(0, 200)}`);
        log.warn(`${hub.id} narrative failed: ${String((e as Error).message).slice(0, 200)}`);
      }
    });
  }
  return { narratives, run };
}

/** Run fn over items with at most n in flight, in order of start. */
export async function pool<T>(items: T[], n: number, fn: (item: T) => Promise<void>): Promise<void> {
  let next = 0;
  await Promise.all(Array.from({ length: Math.max(1, Math.min(n, items.length)) }, async () => {
    while (next < items.length) await fn(items[next++]);
  }));
}
