/**
 * Topic links (Haiku, role `facts`, quota topic_links): which topic hubs a video or a community post is about.
 * data/links/topics.json; read by the topic pages ("Videos and posts") and the galaxy graph (edges, source touches).
 *
 * No title matching (AGENTS.md). A unit is one video (title, topics, extracted feature names) or one post (title,
 * summary, key points, topics): derived text only, never a post's own words. Its candidates are the topic hubs that
 * share a galaxy system with it. The model answers with a schema whose enums allow only that call's refs and topic
 * aliases; deterministic validation drops a topic that is not a candidate of the ref, a quote whose words do not
 * appear in order in the ref's text, and a ref with more than MAX_PER_UNIT topics (a generic item, not about them).
 *
 * A unit is redone only when its hash (its text plus its candidates) changes: new videos and posts get linked on the
 * run after they arrive, and a new topic re-checks the units of its system only. Same shape as link/roadmap.ts.
 */
import { resolve } from "node:path";
import matter from "gray-matter";
import { listFiles, readJson, readJsonOr, readText, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import { sha256 } from "../lib/text.js";
import type { Llm, VideoExtraction } from "../extract/video.js";
import type { PostExtraction } from "../extract/post.js";
import { pool } from "../summarize/hub.js";
import { quoteIn } from "./roadmap.js";

export const PROMPT_VERSION = 2;
export const STAGE = "link-topics";
export const BATCH_SIZE = 6;
export const MAX_PER_UNIT = 3;
const REJECTIONS_KEPT = 20;
const log = logger("topic-links");

export const SYSTEM = `You link Business Central videos and blog posts to topic hubs of a knowledge base. A topic hub is a section of the Microsoft Learn documentation (title and path).
For each evidence item, name the topic hubs it is about: the item explains, demonstrates or discusses something that Learn section documents.
Rules:
- Pick the most specific hub that fits ("Set up VAT" over "Finance"). A parent hub only when the item covers that area broadly.
- At most 3 hubs per item; most items fit 1 or 2. An item that fits none gets none.
- A passing mention is not "about". A video on the Sales Order Agent is about the agent's hub, not about every sales hub.
- The subject is what the item teaches, not its example data: a post on AI-assisted coding whose demo app does cost accounting is about AI-assisted development, not about cost accounting.
- Copilot and agent hubs are about Copilot and agents inside Business Central. GitHub Copilot, Claude, Azure OpenAI, Logic Apps or other tools outside Business Central only fit a hub that documents using them with Business Central (developer tools, MCP, integration).
- quote: copy 3 to 15 consecutive words verbatim from the evidence item's text (never from the hub) that show the subject. Do not shorten or reword them.
- Only refs and hub ids from the input.`;

export interface TopicCandidate { id: string; alias: string; title: string; path: string; system: string }
export interface TopicMatch { topic: string; quote: string }
export interface TopicLinkUnit { kind: "video" | "post"; key: string; hash: string; title: string; source: string | null; at: string; matches: TopicMatch[] }
export interface TopicLinks { prompt_version: number; units: Record<string, TopicLinkUnit> }
export interface TopicLinkRun {
  units: number; stale: number; calls: number; matched: number; rejected: number; failed: number; cost_usd: number;
  rejections: string[]; stopped: "done" | "quota" | "deadline" | "spend-cap" | "aborted"; errors: string[];
}

export const topicLinksPath = (dataDir: string) => resolve(dataDir, "links", "topics.json");
export const loadTopicLinks = (dataDir: string): TopicLinks => readJsonOr<TopicLinks>(topicLinksPath(dataDir), { prompt_version: 0, units: {} });

/** Topic hubs from the rendered topic pages (content/topics), by system. Aliases t1..tn are stable per run. */
export function topicCandidates(contentDir: string): TopicCandidate[] {
  const out: Omit<TopicCandidate, "alias">[] = [];
  for (const f of listFiles(resolve(contentDir, "topics"), ".md")) {
    let fm: Record<string, any>;
    try { fm = matter(readText(f)).data; } catch { continue; }
    if (fm.type !== "topic" || !fm.system) continue;
    out.push({ id: String(fm.id), title: String(fm.title), path: (fm.learn_toc_path ?? []).join(" > "), system: String(fm.system) });
  }
  return out.sort((a, b) => a.id.localeCompare(b.id)).map((c, i) => ({ ...c, alias: `t${i + 1}` }));
}

interface Pending { kind: "video" | "post"; key: string; title: string; source: string | null; text: string; systems: string[]; cands: TopicCandidate[]; hash: string }

const unitHash = (text: string, cands: TopicCandidate[]) => sha256(JSON.stringify({ v: PROMPT_VERSION, text, cands: cands.map((c) => [c.id, c.title, c.path]) }));
const inSystems = (all: TopicCandidate[], systems: string[]) => all.filter((c) => systems.includes(c.system));

export function videoUnit(x: VideoExtraction, all: TopicCandidate[]): Pending | null {
  const systems = [...new Set([...x.systems, ...x.features.map((f) => f.system)].filter(Boolean))];
  const cands = inSystems(all, systems);
  if (!cands.length) return null;
  const text = [x.title, x.topics.length ? `Topics: ${x.topics.join("; ")}` : "", x.features.length ? `Shows: ${x.features.map((f) => f.name).join("; ")}` : ""].filter(Boolean).join(". ");
  return { kind: "video", key: `video/${x.video_id}`, title: x.title, source: x.item_id.split("/")[1] ?? null, text, systems, cands, hash: unitHash(text, cands) };
}

export function postUnit(x: PostExtraction, all: TopicCandidate[]): Pending | null {
  const cands = inSystems(all, x.systems);
  if (!cands.length) return null;
  const text = [x.title, x.summary, ...x.key_points, x.topics.length ? `Topics: ${x.topics.join("; ")}` : ""].filter(Boolean).join(". ");
  return { kind: "post", key: x.item_id.replace(/^blog\//, "post/"), title: x.title, source: x.source, text, systems: x.systems, cands, hash: unitHash(text, cands) };
}

/** Every unit the video and post extractions on disk produce; units without candidates are absent. */
export function gatherTopicUnits(dataDir: string, contentDir: string): Pending[] {
  const all = topicCandidates(contentDir);
  const out: Pending[] = [];
  for (const p of listFiles(resolve(dataDir, "extract", "video"), ".json").sort()) { const u = videoUnit(readJson<VideoExtraction>(p), all); if (u) out.push(u); }
  for (const p of listFiles(resolve(dataDir, "extract", "blog"), ".json").sort()) { const u = postUnit(readJson<PostExtraction>(p), all); if (u) out.push(u); }
  return out;
}

interface Call { units: (Pending & { ref: string })[]; cands: TopicCandidate[] }

/** BATCH_SIZE units per call, grouped by their first system so the candidate list stays short. */
export function planTopicCalls(stale: Pending[]): Call[] {
  const groups = new Map<string, Pending[]>();
  for (const u of stale) groups.set(u.systems[0] ?? "", [...(groups.get(u.systems[0] ?? "") ?? []), u]);
  const calls: Call[] = [];
  for (const g of groups.values()) for (let i = 0; i < g.length; i += BATCH_SIZE) {
    const units = g.slice(i, i + BATCH_SIZE).map((u, j) => ({ ...u, ref: `e${j + 1}` }));
    const cands = [...new Map(units.flatMap((u) => u.cands).map((c) => [c.id, c])).values()].sort((a, b) => a.alias.localeCompare(b.alias, "en", { numeric: true }));
    calls.push({ units, cands });
  }
  return calls;
}

export function topicCallSchema(c: Call) {
  return {
    type: "object", additionalProperties: false, required: ["links"],
    properties: { links: { type: "array", items: { type: "object", additionalProperties: false, required: ["ref", "hub", "quote"], properties: {
      ref: { type: "string", enum: c.units.map((u) => u.ref) }, hub: { type: "string", enum: c.cands.map((x) => x.alias) }, quote: { type: "string" },
    } } } },
  };
}

export function topicCallPrompt(c: Call): string {
  const hubs = c.cands.map((x) => ({ id: x.alias, title: x.title, path: x.path }));
  const evidence = c.units.map((u) => ({ ref: u.ref, kind: u.kind, text: u.text, hubs: u.cands.map((x) => x.alias) }));
  return `Topic hubs (JSON):\n${JSON.stringify(hubs)}\n\nEvidence items (JSON; each lists the hub ids it may link to):\n${JSON.stringify(evidence, null, 1)}`;
}

/** Keep what the input allows: a candidate of that ref, a verbatim quote, at most MAX_PER_UNIT per unit, no duplicates. */
export function validateTopicLinks(c: Call, raw: { ref: string; hub: string; quote: string }[]): { kept: Map<string, TopicMatch[]>; rejected: string[] } {
  const byRef = new Map(c.units.map((u) => [u.ref, u]));
  const per = new Map<string, TopicMatch[]>();
  const rejected: string[] = [];
  for (const m of raw) {
    const u = byRef.get(m.ref);
    const cand = u?.cands.find((x) => x.alias === m.hub);
    const why = !u ? "unknown ref" : !cand ? "not a candidate of this item" : !quoteIn(m.quote, u.text) ? `quote not verbatim: "${m.quote.slice(0, 80)}"`
      : per.get(u.key)?.some((k) => k.topic === cand.id) ? "duplicate" : null;
    if (why) { rejected.push(`${u?.key ?? m.ref} -> ${cand?.id ?? m.hub}: ${why}`); continue; }
    per.set(u!.key, [...(per.get(u!.key) ?? []), { topic: cand!.id, quote: m.quote.trim() }]);
  }
  const kept = new Map<string, TopicMatch[]>(c.units.map((u) => [u.key, []]));
  for (const [key, ms] of per) {
    if (ms.length > MAX_PER_UNIT) { rejected.push(...ms.map((m) => `${key} -> ${m.topic}: more than ${MAX_PER_UNIT} hubs for one item`)); continue; }
    kept.set(key, ms);
  }
  return { kept, rejected };
}

export async function linkTopics(
  dataDir: string, contentDir: string,
  o: { quota: number; deadline: Date; clock: () => Date; llm?: Llm; concurrency?: number; only?: (key: string) => boolean },
): Promise<{ links: TopicLinks; run: TopicLinkRun }> {
  const llm = o.llm ?? complete;
  const prev = loadTopicLinks(dataDir);
  const run: TopicLinkRun = { units: 0, stale: 0, calls: 0, matched: 0, rejected: 0, failed: 0, cost_usd: 0, rejections: [], stopped: "done", errors: [] };
  const allowed = () => {
    if (run.stopped !== "done") return false;
    if (run.calls >= o.quota) { run.stopped = "quota"; return false; }
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; return false; }
    return true;
  };
  const units = gatherTopicUnits(dataDir, contentDir).filter((u) => !o.only || o.only(u.key));
  const live = new Set(units.map((u) => u.key));
  const links: TopicLinks = { prompt_version: PROMPT_VERSION, units: {} };
  for (const [k, u] of Object.entries(prev.units)) if (live.has(k) || (o.only && !o.only(k))) links.units[k] = u;
  const stale = units.filter((u) => prev.units[u.key]?.hash !== u.hash);
  Object.assign(run, { units: units.length, stale: stale.length });
  await pool(planTopicCalls(stale), o.concurrency ?? 1, async (c) => {
    if (!allowed()) return;
    run.calls++;
    const label = `${c.units[0].key}${c.units.length > 1 ? ` +${c.units.length - 1}` : ""}`;
    try {
      const res = await llm<{ links: { ref: string; hub: string; quote: string }[] }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "facts", system: SYSTEM, schema: topicCallSchema(c), prompt: topicCallPrompt(c),
        inputs: c.units.map((u) => ({ kind: "topic-link", id: u.key, hash: u.hash })), label,
      });
      if (!res.cached) run.cost_usd += res.meta.cost_usd ?? 0;
      const { kept, rejected } = validateTopicLinks(c, res.output.links);
      run.rejected += rejected.length;
      run.rejections.push(...rejected.slice(0, Math.max(0, REJECTIONS_KEPT - run.rejections.length)));
      const at = o.clock().toISOString();
      for (const u of c.units) {
        const ms = kept.get(u.key) ?? [];
        links.units[u.key] = { kind: u.kind, key: u.key, hash: u.hash, title: u.title, source: u.source, at, matches: ms };
        run.matched += ms.length;
      }
    } catch (e) {
      if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; return; }
      if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(`${label}: ${e.message}`); return; }
      run.failed++;
      run.errors.push(`topic links ${label}: ${String((e as Error).message).slice(0, 200)}`);
      log.warn(`${label} failed: ${String((e as Error).message).slice(0, 200)}`);
    }
  });
  writeJson(topicLinksPath(dataDir), { prompt_version: PROMPT_VERSION, units: Object.fromEntries(Object.entries(links.units).sort(([a], [b]) => a.localeCompare(b))) });
  return { links, run };
}

/** Per topic id: the videos and posts linked to it (the topic pages and the graph read this). */
export function mediaByTopic(links: TopicLinks): Map<string, { key: string; kind: "video" | "post"; title: string; quote: string }[]> {
  const m = new Map<string, { key: string; kind: "video" | "post"; title: string; quote: string }[]>();
  for (const u of Object.values(links.units)) for (const x of u.matches) m.set(x.topic, [...(m.get(x.topic) ?? []), { key: u.key, kind: u.kind, title: u.title, quote: x.quote }]);
  for (const l of m.values()) l.sort((a, b) => a.key.localeCompare(b.key));
  return m;
}
