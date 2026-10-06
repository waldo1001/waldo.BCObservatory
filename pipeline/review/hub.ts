/**
 * Opus review of topic hub narratives (D07: Opus reviews every hub; quota opus_reviews, biggest hubs first).
 *
 * Opus gets the narrative and the same inputs Sonnet had (own page summaries, subtopic narratives) and checks every
 * claim against them. approve keeps it; fix replaces summary, overview or key points (tidied and clipped); reject
 * marks the narrative flagged: it stays on disk so it is not regenerated from unchanged inputs, but pages do not show
 * it. A review belongs to one narrative input_hash; a refreshed narrative needs a new review.
 */
import { writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import type { ManifestItem } from "../lib/manifest.js";
import type { TopicHub } from "../link/toc.js";
import type { Llm } from "../extract/video.js";
import { clip, tidy } from "../summarize/video.js";
import { gatherInputs, hubPrompt, narrativePath, type HubNarrative } from "../summarize/hub.js";

export const PROMPT_VERSION = 1;
export const STAGE = "review-hub";

export interface HubReview { state: "reviewed" | "flagged"; by: "opus"; at: string; verdict: "approve" | "fix" | "reject"; issues: string[]; input_hash: string; cost_usd: number | null }
export type ReviewedNarrative = HubNarrative & { review?: HubReview };

export const hubReviewSchema = {
  type: "object", additionalProperties: false, required: ["verdict", "issues", "summary", "overview", "key_points"],
  properties: {
    verdict: { type: "string", enum: ["approve", "fix", "reject"] },
    issues: { type: "array", items: { type: "string" } },
    summary: { type: ["string", "null"] }, overview: { type: ["string", "null"] },
    key_points: { type: ["array", "null"], items: { type: "string" } },
  },
};

export const SYSTEM = `You review the narrative of a topic hub in an agent-first knowledge base about Microsoft Dynamics 365 Business Central before it is marked reviewed.
The narrative was written by another model from short summaries of the hub's Microsoft Learn pages and of its subtopics. Those summaries are your only ground truth.

Check every claim in the summary, overview and key points against them:
- approve: everything is supported and the narrative is useful; issues may note small things.
- fix: return corrected fields (null keeps a field). Remove or correct unsupported claims, wrong status words (generally available, preview, announced), invented versions or features; keep what is right.
- reject: the narrative is mostly unsupported or misleading.
Rules for your text: summary at most 600 characters, agent-facing, starts with the subject; key points 3 to 8; plain language; no em-dashes; no "This hub".`;

export function reviewPrompt(hub: TopicHub, n: HubNarrative, inputs: string): string {
  return `Narrative under review (JSON):
${JSON.stringify({ summary: n.summary, overview: n.overview, key_points: n.key_points }, null, 1)}

The inputs it was written from:
${inputs}`;
}

export interface HubReviewRun { candidates: number; reviewed: number; fixed: number; rejected: number; stopped: string; errors: string[] }

export async function reviewHubs(
  hubs: TopicHub[], items: ManifestItem[], dataDir: string, narratives: Map<string, ReviewedNarrative>,
  o: { quota: number; deadline: Date; clock: () => Date; llm?: Llm },
): Promise<HubReviewRun> {
  const llm = o.llm ?? complete;
  const byId = new Map(hubs.map((h) => [h.id, h]));
  const byItem = new Map(items.map((i) => [i.id, i]));
  const run: HubReviewRun = { candidates: 0, reviewed: 0, fixed: 0, rejected: 0, stopped: "done", errors: [] };
  const todo = hubs.filter((h) => { const n = narratives.get(h.id); return n && n.review?.input_hash !== n.input_hash; })
    .sort((a, b) => b.members.length - a.members.length || a.id.localeCompare(b.id));
  run.candidates = todo.length;
  for (const hub of todo) {
    if (run.reviewed >= o.quota) { run.stopped = "quota"; break; }
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; break; }
    const n = narratives.get(hub.id)!;
    const inputs = hubPrompt(hub, gatherInputs(hub, byId, byItem, dataDir, narratives));
    try {
      const res = await llm<{ verdict: HubReview["verdict"]; issues: string[]; summary: string | null; overview: string | null; key_points: string[] | null }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "review", system: SYSTEM, schema: hubReviewSchema,
        prompt: reviewPrompt(hub, n, inputs), inputs: [{ kind: "hub-narrative", id: hub.id, hash: n.input_hash }], label: `${hub.id} review`,
      });
      const out = res.output;
      const review: HubReview = {
        state: out.verdict === "reject" ? "flagged" : "reviewed", by: "opus", at: o.clock().toISOString(), verdict: out.verdict,
        issues: out.issues.map(tidy), input_hash: n.input_hash, cost_usd: res.cached ? null : res.meta.cost_usd ?? null,
      };
      const next: ReviewedNarrative = out.verdict === "fix"
        ? { ...n, ...(out.summary ? { summary: clip(tidy(out.summary)) } : {}), ...(out.overview ? { overview: tidy(out.overview) } : {}),
            ...(out.key_points?.length ? { key_points: out.key_points.map(tidy).filter(Boolean).slice(0, 8) } : {}), review }
        : { ...n, review };
      writeJson(narrativePath(dataDir, hub.id), next);
      narratives.set(hub.id, next);
      run.reviewed++;
      if (out.verdict === "fix") run.fixed++;
      if (out.verdict === "reject") run.rejected++;
    } catch (e) {
      if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; break; }
      if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(`${hub.id}: ${e.message}`); break; }
      run.errors.push(`${hub.id} review: ${String((e as Error).message).slice(0, 200)}`);
    }
  }
  return run;
}
