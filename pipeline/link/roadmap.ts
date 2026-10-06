/**
 * Roadmap links (Haiku, role `facts`, quota roadmap_links): which videos and Learn pages cover which Microsoft 365
 * roadmap feature. data/links/roadmap.json.
 *
 * No title matching (AGENTS.md). An evidence unit is one video (its extracted features) or one Learn page (its
 * extraction). Its candidates are the roadmap features that share a galaxy system with the unit. Evidence carries 1 to
 * 3 systems from its extraction; a roadmap feature gets the same from a Haiku classification (data/links/
 * roadmap-systems.json, redone only when the item's text changes) on top of its area's system, because one area system
 * per feature missed real coverage ("Expense Agent" is copilot, its withholding-tax video is finance).
 *
 * The model answers with a schema whose enums allow only the refs and roadmap ids of that call; deterministic
 * validation then drops a match whose roadmap id is not a candidate of that ref, whose quote words do not appear in
 * order in the ref's text, or whose ref matched more than MAX_PER_REF features (a generic page, not coverage).
 *
 * A unit is redone only when its hash (its text plus its candidates' text) changes, so a new roadmap feature
 * re-checks the units of its systems and nothing else. Learn pages go BATCH_SIZE per call (D20); a video is one call.
 */
import { resolve } from "node:path";
import { listFiles, readJson, readJsonOr, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import { sha256 } from "../lib/text.js";
import type { RoadmapEntry } from "../ingest/roadmap.js";
import type { DocExtraction } from "../extract/docs.js";
import type { Llm, VideoExtraction } from "../extract/video.js";
import { SYSTEM_IDS } from "../extract/video-schema.js";
import { taxonomy } from "../lib/config.js";
import { pool } from "../summarize/hub.js";
import { areaSystem, latestRoadmap } from "../render/feature.js";
import { linksPath, loadLinks, type LinkUnit, type RoadmapLinks } from "./coverage.js";

export { linksPath, loadLinks };

export const PROMPT_VERSION = 3;
/** Classification has its own version so a matching prompt change does not re-classify the roadmap. */
export const CLASSIFY_VERSION = 2;
export const STAGE = "link-roadmap";
export const BATCH_SIZE = 8;
export const MAX_PER_REF = 3;
export const QUOTE_MAX_WORDS = 20;
export const CLASSIFY_BATCH = 10;
const REJECTIONS_KEPT = 20;
const DESC_MAX = 400;
const log = logger("roadmap-links");

export const SYSTEM = `You link evidence to Microsoft 365 roadmap features of Microsoft Dynamics 365 Business Central.
You get roadmap features (id, area, title, description) and evidence items (features extracted from a video, or a Microsoft Learn page), each with a ref.

For each pair you report, say how they relate:
- covers: the evidence item announces, demonstrates, explains or documents the capability the roadmap feature adds, or a part of it (one of its settings, steps, tools or behaviors). A video segment showing one piece of a roadmap feature covers it.
- related: same product area, agent, module or topic, but the evidence is about the area in general or about a different capability.
Rules:
- "Withholding tax for vendors" only relates to "withholding tax in expense reports". A Learn page about an agent in general (for example the Sales Order Agent), Copilot in general, or a module's setup only relates to a new feature in that area (for example a new Copilot chat experience); it covers it only when its text describes that feature.
- Most Learn pages cover nothing. An evidence item rarely covers more than one roadmap feature.
- quote: copy 3 to 15 consecutive words verbatim from the evidence item's text (never from the roadmap feature) that name the capability. Do not shorten or reword them.
- Only refs and roadmap ids from the input. Leave out pairs that are not even related.`;

export const CLASSIFY_SYSTEM = `You classify Microsoft 365 roadmap features of Microsoft Dynamics 365 Business Central into galaxy systems (functional areas).
For each feature return 1 to 3 system ids, most relevant first: the areas a user or developer of that capability works in, judged from the title and description, not from the roadmap area name alone.
For example, an Expense Agent feature that calculates withholding tax belongs to copilot and finance. Only ids from the list.`;

export interface Candidate { id: string; area: string | null; title: string; description: string; systems: string[] }
interface Ref { ref: string; text: string; systems: string[] }
export interface LinkRun {
  units: number; stale: number; calls: number; matched: number; rejected: number; failed: number; cost_usd: number;
  /** Pairs the model itself called related (same area, not this capability): dropped, not rejections. */
  related: number;
  /** First REJECTIONS_KEPT rejected matches with the reason, for the run report and sample runs. */
  rejections: string[];
  stopped: "done" | "quota" | "deadline" | "spend-cap" | "aborted"; errors: string[];
  /** Roadmap features classified this run, and those still on their area system alone. */
  classified: number; unclassified: number;
}
export interface RoadmapSystems { prompt_version: number; items: Record<string, { hash: string; systems: string[] }> }


export const systemsPath = (dataDir: string) => resolve(dataDir, "links", "roadmap-systems.json");
const entryHash = (e: RoadmapEntry) => sha256(JSON.stringify({ v: CLASSIFY_VERSION, area: e.area, title: e.title, description: e.description }));

/** Area system first, then the classified ones; a feature with neither is no candidate anywhere. */
export function candidates(roadmap: Map<string, RoadmapEntry>, classified: RoadmapSystems["items"] = {}): Candidate[] {
  return [...roadmap.values()].map((e) => {
    const c = classified[e.id];
    const extra = c && c.hash === entryHash(e) ? c.systems : [];
    const systems = [...new Set([areaSystem(e.area), ...extra].filter((s): s is string => !!s))];
    return { id: e.id, area: e.area, title: e.title, description: clipText(e.description, DESC_MAX), systems };
  }).filter((c) => c.systems.length).sort((a, b) => a.id.localeCompare(b.id));
}
const clipText = (s: string, max: number) => (s.length <= max ? s : `${s.slice(0, max).replace(/\s+\S*$/, "")} ...`);
const inSystems = (cands: Candidate[], systems: string[]) => cands.filter((c) => c.systems.some((s) => systems.includes(s)));

/** Lowercase words only. */
export const norm = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
/**
 * A quote is grounded when it has 3 to QUOTE_MAX_WORDS words and they appear in this order in the ref's text. Gaps are allowed:
 * Haiku drops an article or a list item when it copies ("in preview posting" for "in the preview posting view"),
 * but a word that is not in the text is invented and rejects the match.
 */
export function quoteIn(quote: string, text: string): boolean {
  const q = norm(quote).split(" ").filter(Boolean);
  const t = norm(text).split(" ");
  if (q.length < 3 || q.length > QUOTE_MAX_WORDS) return false;
  let i = 0;
  for (const w of t) if (w === q[i] && ++i === q.length) return true;
  return false;
}

/** Classify roadmap features whose text changed since their last classification. Returns calls made. */
export async function classifyRoadmap(
  dataDir: string, roadmap: Map<string, RoadmapEntry>, llm: Llm, run: LinkRun, allowed: () => boolean,
): Promise<RoadmapSystems> {
  const prev = readJsonOr<RoadmapSystems>(systemsPath(dataDir), { prompt_version: CLASSIFY_VERSION, items: {} });
  const out: RoadmapSystems = { prompt_version: CLASSIFY_VERSION, items: {} };
  for (const [id, v] of Object.entries(prev.items)) if (roadmap.has(id)) out.items[id] = v;
  const todo = [...roadmap.values()].filter((e) => out.items[e.id]?.hash !== entryHash(e)).sort((a, b) => a.id.localeCompare(b.id));
  const labels = taxonomy().systems.map((s) => ({ id: s.id, label: s.label, ...(s.aliases?.length ? { aliases: s.aliases.slice(0, 8) } : {}) }));
  for (let i = 0; i < todo.length; i += CLASSIFY_BATCH) {
    if (!allowed()) break;
    const batch = todo.slice(i, i + CLASSIFY_BATCH);
    run.calls++;
    try {
      const res = await llm<{ items: { id: string; systems: string[] }[] }>({
        stage: STAGE, promptVersion: CLASSIFY_VERSION, role: "facts", system: CLASSIFY_SYSTEM,
        schema: {
          type: "object", additionalProperties: false, required: ["items"],
          properties: { items: { type: "array", items: { type: "object", additionalProperties: false, required: ["id", "systems"], properties: {
            id: { type: "string", enum: batch.map((e) => e.id) }, systems: { type: "array", minItems: 1, maxItems: 3, items: { type: "string", enum: SYSTEM_IDS } },
          } } } },
        },
        prompt: `Systems (JSON):\n${JSON.stringify(labels)}\n\nRoadmap features (JSON):\n${JSON.stringify(batch.map((e) => ({ id: e.id, area: e.area, title: e.title, description: clipText(e.description, DESC_MAX) })), null, 1)}`,
        inputs: batch.map((e) => ({ kind: "roadmap", id: e.id, hash: entryHash(e) })), label: `roadmap systems ${batch[0].id} +${batch.length - 1}`,
      });
      if (!res.cached) run.cost_usd += res.meta.cost_usd ?? 0;
      const byId = new Map(batch.map((e) => [e.id, e]));
      for (const x of res.output.items) {
        const e = byId.get(x.id);
        if (!e) continue;
        out.items[e.id] = { hash: entryHash(e), systems: [...new Set(x.systems.filter((s) => SYSTEM_IDS.includes(s)))].slice(0, 3) };
        run.classified++;
      }
    } catch (err) {
      if (err instanceof LlmBudgetExhausted || err instanceof LlmInfraError) throw err;
      run.failed++;
      run.errors.push(`roadmap systems ${batch[0].id}: ${String((err as Error).message).slice(0, 200)}`);
    }
  }
  run.unclassified = [...roadmap.values()].filter((e) => out.items[e.id]?.hash !== entryHash(e)).length;
  writeJson(systemsPath(dataDir), { prompt_version: CLASSIFY_VERSION, items: Object.fromEntries(Object.entries(out.items).sort(([a], [b]) => a.localeCompare(b))) });
  return out;
}

// ------------------------------------------------------------------------------------------------- units

interface Pending { key: string; title: string; hash: string; refs: Ref[]; cands: Candidate[]; build: (matches: { ref: string; roadmap_id: string; quote: string }[], at: string) => LinkUnit }

function videoPending(x: VideoExtraction, all: Candidate[]): Pending | null {
  const systems = [...new Set([...x.systems, ...x.features.map((f) => f.system)])];
  const cands = inSystems(all, systems);
  const refs = x.features.map((f, i) => ({ ref: `f${i + 1}`, text: `${f.name}. ${f.description}`, systems }));
  if (!cands.length || !refs.length) return null;
  const key = `video/${x.video_id}`;
  return {
    key, title: x.title, refs, cands, hash: unitHash(`${x.title}\n${refs.map((r) => r.text).join("\n")}`, cands),
    build: (ms, at) => ({
      kind: "video", key, hash: "", video_id: x.video_id, title: x.title, at,
      matches: ms.map((m) => { const i = Number(m.ref.slice(1)) - 1, f = x.features[i]; return { feature: i, name: f.name, t: Math.floor(f.t_start), roadmap_id: m.roadmap_id, quote: m.quote }; }),
    }),
  };
}

function docPending(d: DocExtraction, all: Candidate[]): Pending | null {
  const cands = inSystems(all, d.systems);
  if (!cands.length) return null;
  const text = [d.title, d.summary, ...(d.features.length ? [`Features: ${d.features.join("; ")}`] : []), ...(d.versions.length ? [`Versions: ${d.versions.join("; ")}`] : [])].join(". ");
  return {
    key: d.item_id, title: d.title, refs: [{ ref: "d", text, systems: d.systems }], cands, hash: unitHash(text, cands),
    build: (ms, at) => ({ kind: "doc", key: d.item_id, hash: "", url: d.url, title: d.title, at, matches: ms.map((m) => ({ roadmap_id: m.roadmap_id, quote: m.quote })) }),
  };
}

const unitHash = (text: string, cands: Candidate[]) => sha256(JSON.stringify({ v: PROMPT_VERSION, text, cands: cands.map((c) => [c.id, c.area, c.title, c.description]) }));

/** Every unit the extractions on disk produce, keyed; units without candidates are absent. */
export function gatherUnits(dataDir: string, roadmap: Map<string, RoadmapEntry>, classified: RoadmapSystems["items"] = {}): Pending[] {
  const all = candidates(roadmap, classified);
  const out: Pending[] = [];
  for (const p of listFiles(resolve(dataDir, "extract", "video"), ".json").sort()) {
    const u = videoPending(readJson<VideoExtraction>(p), all);
    if (u) out.push(u);
  }
  for (const p of listFiles(resolve(dataDir, "extract", "docs"), ".json")) {
    const u = docPending(readJson<DocExtraction>(p), all);
    if (u) out.push(u);
  }
  return out;
}

// ------------------------------------------------------------------------------------------------- calls

interface Call { units: Pending[]; refs: (Ref & { unit: Pending; local: string })[]; cands: Candidate[] }

/** A video is one call; Learn pages go BATCH_SIZE per call, grouped by first system so the candidate list stays short. */
export function planCalls(stale: Pending[]): Call[] {
  const calls: Call[] = [];
  const mk = (units: Pending[]): Call => {
    const refs = units.flatMap((u, ui) => u.refs.map((r) => ({ ...r, unit: u, local: u.key.startsWith("video/") ? r.ref : `d${ui + 1}` })));
    const cands = [...new Map(units.flatMap((u) => u.cands).map((c) => [c.id, c])).values()].sort((a, b) => a.id.localeCompare(b.id));
    return { units, refs, cands };
  };
  const docs = new Map<string, Pending[]>();
  for (const u of stale) {
    if (u.key.startsWith("video/")) calls.push(mk([u]));
    else { const s = u.refs[0].systems[0] ?? ""; docs.set(s, [...(docs.get(s) ?? []), u]); }
  }
  for (const group of docs.values()) for (let i = 0; i < group.length; i += BATCH_SIZE) calls.push(mk(group.slice(i, i + BATCH_SIZE)));
  return calls;
}

export function callSchema(c: Call) {
  return {
    type: "object", additionalProperties: false, required: ["matches"],
    properties: {
      matches: {
        type: "array",
        items: {
          type: "object", additionalProperties: false, required: ["ref", "roadmap_id", "relation", "quote"],
          properties: {
            ref: { type: "string", enum: c.refs.map((r) => r.local) }, roadmap_id: { type: "string", enum: c.cands.map((x) => x.id) },
            relation: { type: "string", enum: ["covers", "related"] }, quote: { type: "string" },
          },
        },
      },
    },
  };
}

export function callPrompt(c: Call): string {
  const video = c.units.length === 1 && c.units[0].key.startsWith("video/");
  const roadmap = c.cands.map((x) => ({ id: x.id, area: x.area, title: x.title, description: x.description }));
  const evidence = c.refs.map((r) => ({ ref: r.local, text: r.text, ...(video ? {} : { candidates: r.unit.cands.map((x) => x.id) }) }));
  return `${video ? `Evidence: features extracted from the Microsoft video "${c.units[0].title}".` : "Evidence: Microsoft Learn pages. Each lists the roadmap ids it may match."}

Roadmap features (JSON):
${JSON.stringify(roadmap, null, 1)}

Evidence items (JSON):
${JSON.stringify(evidence, null, 1)}`;
}

/** Keep what the input allows: a candidate of that ref, a verbatim quote, at most MAX_PER_REF per ref, no duplicates. */
export function validateMatches(c: Call, raw: { ref: string; roadmap_id: string; quote: string }[]): { kept: Map<Pending, { ref: string; roadmap_id: string; quote: string }[]>; rejected: string[] } {
  const byLocal = new Map(c.refs.map((r) => [r.local, r]));
  const perRef = new Map<string, { ref: string; roadmap_id: string; quote: string }[]>();
  const rejected: string[] = [];
  for (const m of raw) {
    const r = byLocal.get(m.ref);
    const why = !r ? "unknown ref" : !r.unit.cands.some((x) => x.id === m.roadmap_id) ? "not a candidate of this ref"
      : !quoteIn(m.quote, r.text) ? `quote not verbatim: "${m.quote.slice(0, 80)}"` : perRef.get(m.ref)?.some((k) => k.roadmap_id === m.roadmap_id) ? "duplicate" : null;
    if (why) { rejected.push(`${r?.unit.key ?? "?"} ${m.ref} -> ${m.roadmap_id}: ${why}`); continue; }
    perRef.set(m.ref, [...(perRef.get(m.ref) ?? []), { ref: r!.ref, roadmap_id: m.roadmap_id, quote: m.quote.trim() }]);
  }
  const kept = new Map<Pending, { ref: string; roadmap_id: string; quote: string }[]>(c.units.map((u) => [u, []]));
  for (const [local, ms] of perRef) {
    const unit = byLocal.get(local)!.unit;
    if (ms.length > MAX_PER_REF) { rejected.push(...ms.map((m) => `${unit.key} ${local} -> ${m.roadmap_id}: more than ${MAX_PER_REF} matches for one ref`)); continue; }
    kept.get(unit)!.push(...ms);
  }
  return { kept, rejected };
}

// ------------------------------------------------------------------------------------------------- run

export async function linkRoadmap(
  dataDir: string,
  o: { quota: number; deadline: Date; clock: () => Date; llm?: Llm; concurrency?: number; only?: (key: string) => boolean },
): Promise<{ links: RoadmapLinks; run: LinkRun }> {
  const llm = o.llm ?? complete;
  const roadmap = latestRoadmap(dataDir);
  const prev = loadLinks(dataDir);
  const run: LinkRun = { units: 0, stale: 0, calls: 0, matched: 0, rejected: 0, related: 0, failed: 0, cost_usd: 0, rejections: [], stopped: "done", errors: [], classified: 0, unclassified: 0 };
  const allowed = () => {
    if (run.stopped !== "done") return false;
    if (run.calls >= o.quota) { run.stopped = "quota"; return false; }
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; return false; }
    return true;
  };
  if (!roadmap.size) return { links: prev, run }; // no snapshot yet: nothing to link, nothing to write
  let classified: RoadmapSystems;
  try {
    classified = await classifyRoadmap(dataDir, roadmap, llm, run, allowed);
  } catch (e) {
    run.stopped = e instanceof LlmBudgetExhausted ? "spend-cap" : "aborted";
    if (e instanceof LlmInfraError) run.errors.push(`roadmap systems: ${e.message}`);
    return { links: prev, run };
  }
  // a feature still waiting for its classification would shrink candidate lists and redo units twice: wait for it
  if (run.unclassified) { if (run.stopped === "done") run.stopped = "quota"; return { links: prev, run }; }
  const units = gatherUnits(dataDir, roadmap, classified.items).filter((u) => !o.only || o.only(u.key));
  const live = new Set(units.map((u) => u.key));
  const links: RoadmapLinks = { prompt_version: PROMPT_VERSION, units: {} };
  // keep current units; drop units whose extraction or candidates are gone (unless this run is a sample)
  for (const [k, u] of Object.entries(prev.units)) if (live.has(k) || (o.only && !o.only(k))) links.units[k] = u;
  const stale = units.filter((u) => prev.units[u.key]?.hash !== u.hash);
  const calls = planCalls(stale);
  Object.assign(run, { units: units.length, stale: stale.length });
  await pool(calls, o.concurrency ?? 1, async (c) => {
    if (!allowed()) return;
    run.calls++;
    const label = `${c.units[0].key}${c.units.length > 1 ? ` +${c.units.length - 1}` : ""}`;
    try {
      const res = await llm<{ matches: { ref: string; roadmap_id: string; relation: string; quote: string }[] }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "facts", system: SYSTEM, schema: callSchema(c), prompt: callPrompt(c),
        inputs: c.units.map((u) => ({ kind: "roadmap-link", id: u.key, hash: u.hash })), label,
      });
      if (!res.cached) run.cost_usd += res.meta.cost_usd ?? 0;
      const covers = res.output.matches.filter((m) => m.relation === "covers");
      run.related += res.output.matches.length - covers.length;
      const { kept, rejected } = validateMatches(c, covers);
      run.rejected += rejected.length;
      run.rejections.push(...rejected.slice(0, Math.max(0, REJECTIONS_KEPT - run.rejections.length)));
      const at = o.clock().toISOString();
      for (const [u, ms] of kept) {
        links.units[u.key] = { ...u.build(ms, at), hash: u.hash };
        run.matched += ms.length;
      }
    } catch (e) {
      if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; return; }
      if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(`${label}: ${e.message}`); return; }
      run.failed++;
      run.errors.push(`roadmap links ${label}: ${String((e as Error).message).slice(0, 200)}`);
      log.warn(`${label} failed: ${String((e as Error).message).slice(0, 200)}`);
    }
  });
  writeJson(linksPath(dataDir), { prompt_version: PROMPT_VERSION, units: Object.fromEntries(Object.entries(links.units).sort(([a], [b]) => a.localeCompare(b))) });
  return { links, run };
}
