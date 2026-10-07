/**
 * D77 review coverage in the nightly: the post and change review passes after linking, the re-render of the pages
 * they touched, and the run report's `reviews` block (videos are reviewed in their `reviewed` stage; their numbers
 * are read back from the manifest's stage records).
 */
import type { SourceDef } from "../lib/config.js";
import { exists, readJson } from "../lib/fsx.js";
import type { Manifest, ManifestItem } from "../lib/manifest.js";
import { rerenderPostPages } from "../render/post.js";
import { writeChangePage } from "../render/change.js";
import { reviewPosts } from "./post.js";
import { reviewChanges } from "./change.js";
import { reviewPath, type VideoReview } from "./video.js";
import type { ContentReviewRun } from "./batch.js";
import type { Llm } from "../extract/video.js";

/** One line per kind in the run report and summary. */
export interface ReviewCounts {
  reviewed: number; fixed: number; rejected: number; calls: number; cost_usd: number;
  candidates?: number; failed?: number; reset?: number; rerendered?: number; stopped?: string;
}
export interface ReviewsReport { video?: ReviewCounts; post?: ReviewCounts; change?: ReviewCounts }

const counts = (r: ContentReviewRun, rerendered: number): ReviewCounts => ({
  reviewed: r.reviewed, fixed: r.fixed, rejected: r.rejected, calls: r.calls, cost_usd: r.cost_usd,
  candidates: r.candidates, failed: r.failed, reset: r.reset, rerendered, stopped: r.stopped,
});

/** Tonight's video reviews, from the `reviewed` stage records and the rejected items' review files. */
export function videoReviewCounts(items: ManifestItem[], dataDir: string, since: string): ReviewCounts {
  const c: ReviewCounts = { reviewed: 0, fixed: 0, rejected: 0, calls: 0, cost_usd: 0 };
  for (const i of items) {
    if (i.pillar !== "video") continue;
    const st = i.stages.reviewed;
    if (st && String(st.at) >= since && i.state !== "skipped") {
      c.reviewed++; c.calls++;
      if (st.verdict === "fix") c.fixed++;
      if (typeof st.cost_usd === "number") c.cost_usd += st.cost_usd;
    } else if (i.state === "skipped" && i.skip === "review-rejected" && (i.skipped_at ?? "") >= since) {
      c.reviewed++; c.calls++; c.rejected++;
      const p = reviewPath(dataDir, i.id.slice(i.id.lastIndexOf("/") + 1));
      const cost = exists(p) ? readJson<VideoReview>(p).llm.cost_usd : null;
      if (typeof cost === "number") c.cost_usd += cost;
    }
  }
  c.cost_usd = Math.round(c.cost_usd * 1e6) / 1e6;
  return c;
}

export interface ContentReviewArgs {
  dataDir: string; contentDir: string; cacheDir: string; sources: SourceDef[];
  postQuota: number; changeQuota: number; deadline: Date; clock: () => Date; concurrency: number; now: Date;
  llm?: Llm; raw?: (item: ManifestItem) => string | null; body?: (item: ManifestItem) => Promise<string>;
}

/** The post and change passes, then their pages. A pass with quota 0 still resets and re-renders stale reviews. */
export async function runContentReviews(manifest: Pick<Manifest, "list" | "save">, a: ContentReviewArgs): Promise<{ post: ReviewCounts; change: ReviewCounts; errors: string[] }> {
  const save = (i: ManifestItem) => { manifest.save(i); };
  const base = { deadline: a.deadline, clock: a.clock, concurrency: a.concurrency, llm: a.llm, save };
  const ctx = { dataDir: a.dataDir, contentDir: a.contentDir, now: () => a.now };
  const posts = await reviewPosts(manifest.list("blog"), a.dataDir, { ...base, quota: a.postQuota, raw: a.raw });
  const blogs = new Map(a.sources.filter((s) => s.kind === "blog").map((s) => [s.id, { name: s.name, author: s.author ?? null, full_text: s.full_text, ...(s.embed === false ? { embed: false } : {}) }]));
  const postPages = await rerenderPostPages(posts.touched, blogs, ctx);
  const changes = await reviewChanges(manifest.list("change"), a.dataDir, { ...base, quota: a.changeQuota, cacheDir: a.cacheDir, body: a.body });
  let changePages = 0;
  for (const i of changes.touched) if (writeChangePage(i, ctx)?.written) changePages++;
  return { post: counts(posts.run, postPages), change: counts(changes.run, changePages), errors: [...posts.run.errors, ...changes.run.errors] };
}
