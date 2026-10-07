/**
 * Opus review of the topic links (D54; quota topic_reviews, role `review`). The counterpart of review/coverage.ts.
 *
 * Opus gets a hub (title, its Learn TOC path, its subtopic titles and its sibling hubs) and every link the Haiku
 * matcher proposed to it, each with the evidence text the matcher saw and its quote, and keeps or drops each link.
 * Judging a hub's links together is what the matcher could not do: the matcher saw six items and never saw what
 * else pointed at the same hub, so a weak link only stands out next to its siblings. The sibling hubs are in the
 * prompt for the commonest error, an item that belongs one section over.
 *
 * A hub with two or more links gets its own call, because that comparison is the point. A hub with a single link
 * has nothing to compare, so BATCH_HUBS of those share one call: on a 2026-10-07 sample of 38 links, 30 hubs had
 * exactly one, and paying a full Opus call for each cost $0.072 a verdict.
 *
 * Verdicts are stored per link and unit hash (data/links/topics-review.json); mediaByTopic leaves dropped links out,
 * so the topic pages lose them and the graph, which reads those pages, loses the edge and the source touch with
 * them. A hub is due when one of its links has no verdict yet; hubs with the most unreviewed links go first.
 */
import { listFiles, readJson, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import type { Llm } from "../extract/video.js";
import { pool } from "../summarize/hub.js";
import { tidy } from "../summarize/video.js";
import {
  loadTopicLinks, loadTopicReview, topicCandidates, topicReviewPath, topicVerdictKey, topicVerdictOf,
  videoUnit, postUnit, type TopicCandidate, type TopicLinks, type TopicReview, type TopicVerdict,
} from "../link/topics.js";
import { resolve } from "node:path";
import type { VideoExtraction } from "../extract/video.js";
import type { PostExtraction } from "../extract/post.js";

export const PROMPT_VERSION = 1;
export const STAGE = "review-topics";
export const BATCH_HUBS = 6;
const log = logger("topic-review");

export const SYSTEM = `You review links between a section of the Microsoft Learn documentation for Microsoft Dynamics 365 Business Central and the videos and blog posts that are said to be about it, before the links are published.
A smaller model proposed each link from the evidence text shown, seeing only a few items at a time and never the other items proposed for this same section. You see each section, the sections around it, and every proposed link together.

For each link decide:
- keep: the item explains, demonstrates or discusses something this Learn section documents. One part of the section is enough: a video on a single setting of a feature the section documents is kept.
- drop: the item only shares the product area, module, agent or vocabulary; it is about a different capability; it is about something a sibling or parent section documents instead; its subject is the example rather than the lesson (a post on AI-assisted coding whose demo app does cost accounting is not about cost accounting); or it is too general to tell.
Hold the whole set to one standard. If one item is plainly the section's subject and another only mentions it in passing, the passing one is a drop even when nothing is obviously wrong with it.
Judge only from the texts given; never from the title alone. reason: one short sentence. Return exactly one verdict per ref.`;

export const reviewSchema = (refs: string[]) => ({
  type: "object", additionalProperties: false, required: ["verdicts"],
  properties: {
    verdicts: {
      type: "array",
      items: {
        type: "object", additionalProperties: false, required: ["ref", "verdict", "reason"],
        properties: { ref: { type: "string", enum: refs }, verdict: { type: "string", enum: ["keep", "drop"] }, reason: { type: "string" } },
      },
    },
  },
});

export interface TopicReviewLink { ref: string; key: string; hash: string; kind: "video" | "post"; title: string; source: string | null; text: string; quote: string }
export interface TopicReviewRun { candidates: number; calls: number; reviewed: number; kept: number; dropped: number; failed: number; cost_usd: number; stopped: string; errors: string[] }

/**
 * Every proposed link per topic id, with the evidence text the matcher saw. The text is rebuilt from the extraction
 * the same way the matcher built it, so a verdict is about what the matcher judged; a unit whose extraction is gone
 * is skipped, and its stale verdict falls away when the review is written.
 */
export function gatherTopicLinks(links: TopicLinks, dataDir: string, contentDir: string): Map<string, TopicReviewLink[]> {
  const all = topicCandidates(contentDir);
  const text = new Map<string, string>();
  for (const p of listFiles(resolve(dataDir, "extract", "video"), ".json")) { const u = videoUnit(readJson<VideoExtraction>(p), all); if (u) text.set(u.key, u.text); }
  for (const p of listFiles(resolve(dataDir, "extract", "blog"), ".json")) { const u = postUnit(readJson<PostExtraction>(p), all); if (u) text.set(u.key, u.text); }
  const m = new Map<string, TopicReviewLink[]>();
  for (const u of Object.values(links.units)) {
    const t = text.get(u.key);
    if (!t) continue;
    for (const x of u.matches) m.set(x.topic, [...(m.get(x.topic) ?? []), { ref: "", key: u.key, hash: u.hash, kind: u.kind, title: u.title, source: u.source, text: t, quote: x.quote }]);
  }
  for (const ls of m.values()) {
    ls.sort((a, b) => a.key.localeCompare(b.key));
    ls.forEach((l, i) => (l.ref = `l${i + 1}`));
  }
  return m;
}

/** The hub's own subtopics and the hubs beside it, by Learn TOC path: the context the matcher never had. */
export function hubContext(hub: TopicCandidate, all: TopicCandidate[]): { children: string[]; siblings: string[] } {
  const depth = (p: string) => (p ? p.split(" > ").length : 0);
  const under = (p: string, parent: string) => parent !== "" && p.startsWith(`${parent} > `);
  const d = depth(hub.path);
  const parent = hub.path.split(" > ").slice(0, -1).join(" > ");
  return {
    children: all.filter((c) => c.id !== hub.id && under(c.path, hub.path) && depth(c.path) === d + 1).map((c) => c.title).sort().slice(0, 20),
    siblings: all.filter((c) => c.id !== hub.id && depth(c.path) === d && (parent === "" ? depth(c.path) === 1 : under(c.path, parent))).map((c) => c.title).sort().slice(0, 20),
  };
}

export interface ReviewSection { id: string; hub: TopicCandidate; links: TopicReviewLink[] }
export interface ReviewCall { sections: ReviewSection[] }

/**
 * A hub whose links can be weighed against each other gets its own call; the single-link hubs, which have nothing
 * to weigh, share one. Refs are unique across the whole call, so one schema enum covers it.
 */
export function planReviewCalls(todo: { id: string; hub: TopicCandidate; links: TopicReviewLink[] }[]): ReviewCall[] {
  const calls: ReviewCall[] = todo.filter((t) => t.links.length > 1).map((t) => ({ sections: [t] }));
  const solo = todo.filter((t) => t.links.length === 1);
  for (let i = 0; i < solo.length; i += BATCH_HUBS) calls.push({ sections: solo.slice(i, i + BATCH_HUBS) });
  let n = 0;
  for (const c of calls) for (const s of c.sections) for (const l of s.links) l.ref = `l${++n}`;
  return calls;
}

export const callRefs = (c: ReviewCall) => c.sections.flatMap((s) => s.links.map((l) => l.ref));

export function reviewPrompt(c: ReviewCall, all: TopicCandidate[]): string {
  const body = c.sections.map((s) => {
    const ctx = hubContext(s.hub, all);
    return {
      section: { title: s.hub.title, learn_path: s.hub.path, subtopics: ctx.children, sections_beside_it: ctx.siblings },
      links: s.links.map((l) => ({ ref: l.ref, kind: l.kind, source: l.source, evidence: l.text, quoted: l.quote })),
    };
  });
  return `${c.sections.length > 1 ? `${c.sections.length} Learn sections, each with the links proposed for it` : "A Learn section with the links proposed for it"} (JSON):
${JSON.stringify(body, null, 1)}`;
}

export async function reviewTopicLinks(
  dataDir: string, contentDir: string,
  o: { quota: number; deadline: Date; clock: () => Date; llm?: Llm; concurrency?: number },
): Promise<TopicReviewRun> {
  const llm = o.llm ?? complete;
  const review = loadTopicReview(dataDir);
  const hubs = new Map(topicCandidates(contentDir).map((c) => [c.id, c]));
  const all = [...hubs.values()];
  const byTopic = gatherTopicLinks(loadTopicLinks(dataDir), dataDir, contentDir);
  const todo = [...byTopic].filter(([id]) => hubs.has(id))
    .map(([id, ls]) => ({ id, hub: hubs.get(id)!, links: ls, open: ls.filter((l) => !topicVerdictOf(review, id, l.key, l.hash)).length }))
    .filter((t) => t.open > 0).sort((a, b) => b.open - a.open || a.id.localeCompare(b.id));
  const calls = planReviewCalls(todo);
  const run: TopicReviewRun = { candidates: todo.length, calls: 0, reviewed: 0, kept: 0, dropped: 0, failed: 0, cost_usd: 0, stopped: "done", errors: [] };
  let started = 0;
  await pool(calls, o.concurrency ?? 1, async (c) => {
    if (run.stopped !== "done") return;
    if (started >= o.quota) { run.stopped = "quota"; return; }
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; return; }
    started++;
    run.calls++;
    const refs = callRefs(c);
    const label = `${c.sections[0].id}${c.sections.length > 1 ? ` +${c.sections.length - 1}` : ""} topic review`;
    try {
      const res = await llm<{ verdicts: { ref: string; verdict: "keep" | "drop"; reason: string }[] }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "review", system: SYSTEM, schema: reviewSchema(refs),
        prompt: reviewPrompt(c, all),
        inputs: c.sections.flatMap((s) => s.links.map((l) => ({ kind: "topic-link", id: `${s.id}/${l.key}`, hash: l.hash }))), label,
      });
      if (!res.cached) run.cost_usd += res.meta.cost_usd ?? 0;
      const byRef = new Map(res.output.verdicts.map((v) => [v.ref, v]));
      // one verdict per ref, or the call is not trusted at all (every hub in it stays due)
      if (byRef.size !== refs.length || res.output.verdicts.length !== refs.length) throw new Error(`expected ${refs.length} verdicts, got ${res.output.verdicts.length} for ${byRef.size} refs`);
      const at = o.clock().toISOString();
      for (const s of c.sections) {
        const kept: Record<string, TopicVerdict> = {};
        for (const l of s.links) {
          const v = byRef.get(l.ref)!;
          kept[topicVerdictKey(l.key, l.hash)] = { verdict: v.verdict, reason: tidy(v.reason).slice(0, 300), at };
          if (v.verdict === "keep") run.kept++; else run.dropped++;
        }
        review.verdicts[s.id] = kept; // only this hub's current links: verdicts of links that are gone fall away
        run.reviewed++;
      }
    } catch (e) {
      if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; return; }
      if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(`${label}: ${e.message}`); return; }
      run.failed += c.sections.length;
      run.errors.push(`${label}: ${String((e as Error).message).slice(0, 200)}`);
      log.warn(`${label} failed: ${String((e as Error).message).slice(0, 200)}`);
    }
  });
  if (run.reviewed) {
    const verdicts = Object.fromEntries(Object.entries(review.verdicts).filter(([id]) => hubs.has(id)).sort(([a], [b]) => a.localeCompare(b)));
    writeJson(topicReviewPath(dataDir), { prompt_version: PROMPT_VERSION, verdicts } satisfies TopicReview);
  }
  return run;
}
