/**
 * Opus review of blog post pages (D77, role `review`): a nightly phase after linking, BATCH_SIZE posts per call.
 *
 * Opus sees, per post, the excerpt of the vault text the extractor saw (POST_CHARS per post, CALL_CHARS per call;
 * community raw text goes to the model, never into the public tree, CONTENT-NOTICE.md) and the extraction, and returns
 * approve, fix or reject. Edits: the summary, the key points, dropping a quote, an object, a feature or a system.
 * Every new string passes the extractor's checks and the 25-word guard of D33 against the post (an edit that repeats
 * 25+ words of the post is rejected, not trimmed), and the edited extraction as a whole is checked once more.
 * A rejection keeps the facts and drops the model text (summary, key points; spec section 2) and marks the page
 * `flagged`; the post is not reviewed again until its extraction changes.
 *
 * Writes data/review/post/<source>/<fileKey>.json tied to the input hash (D21) and item.review in the manifest; the
 * caller re-renders the touched pages.
 */
import { resolve } from "node:path";
import { exists, readJson, readText, writeJson } from "../lib/fsx.js";
import { complete } from "../lib/llm.js";
import { fileKey, type ManifestItem } from "../lib/manifest.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { repeatChecker } from "../validate/leak.js";
import { CALL_CHARS, POST_CHARS, postExtractionPath, type PostExtraction } from "../extract/post.js";
import { postKey, postRawPath } from "../fetch/post.js";
import type { Llm } from "../extract/video.js";
import { clip, tidy } from "../summarize/video.js";
import { byRef, newestFirst, newRun, reviewOfVerdict, runCalls, UNREVIEWED, type ContentReviewRun, type Verdict } from "./batch.js";

export const PROMPT_VERSION = 1;
export const STAGE = "review-post";
export const BATCH_SIZE = 4;
/** The extractor's summary bound (extract/post.ts SUMMARY_MAX + its clip margin). */
const SUMMARY_CHARS = 600;
/** What a rejected post's summary says instead: the frontmatter needs one, and it must not be model text. */
export const WITHHELD = "Summary withheld: an Opus review found that the machine-written summary did not match the post. Read the original post.";

const str = { type: "string" };
export const reviewSchema = (refs: string[]) => ({
  type: "object", additionalProperties: false, required: ["reviews"],
  properties: {
    reviews: {
      type: "array",
      items: {
        type: "object", additionalProperties: false,
        required: ["ref", "verdict", "issues", "summary", "key_points", "drop_quotes", "drop_objects", "drop_features", "drop_systems"],
        properties: {
          ref: { type: "string", enum: refs }, verdict: { type: "string", enum: ["approve", "fix", "reject"] }, issues: { type: "array", items: str },
          summary: { type: ["string", "null"] }, key_points: { type: ["array", "null"], items: str },
          drop_quotes: { type: "array", items: { type: "integer" } }, drop_objects: { type: "array", items: str },
          drop_features: { type: "array", items: str }, drop_systems: { type: "array", items: str },
        },
      },
    },
  },
});
export interface PostReviewOut {
  ref: string; verdict: Verdict; issues: string[]; summary: string | null; key_points: string[] | null;
  drop_quotes: number[]; drop_objects: string[]; drop_features: string[]; drop_systems: string[];
}

export interface PostReview {
  item_id: string; input_hash: string; verdict: Verdict; by: "opus"; at: string; issues: string[]; applied: string[]; rejected_edits: string[];
  prompt_version: number; llm: { model: string; cached: boolean; cost_usd: number | null; posts_in_call: number };
}

export const SYSTEM = `You review machine-written pages about blog posts on Microsoft Dynamics 365 Business Central before agents rely on them.
A smaller model read each post and wrote a summary, key points, quotes and the systems, AL objects and features the post is about. You get several posts, each with a ref: the post text the smaller model saw (the only ground truth) and what it wrote.

For each post decide:
- approve: everything written is supported by the post; no edits.
- fix: correct what is wrong with the edit fields; keep what is right.
- reject: the page cannot be fixed by these edits (the post is not about Business Central, the text is unusable, or the summary describes another post).

Edit rules:
- Only what the post says. No outside knowledge. Write in English.
- summary: 1 to 3 plain sentences, at most 500 characters, agent-facing, paraphrased; null keeps it. Never copy sentences from the post: a run of 25 words or more from the post is refused.
- key_points: 2 to 5 short points in your own words; null keeps them.
- drop_quotes: numbers of quotes that are not in the post or say nothing useful. drop_objects: "type name" exactly as listed, for objects the post does not name. drop_features, drop_systems: exact names or ids that the post does not support.
- issues: short notes on what you found, also when approving, in your own words; never quote the post. No em-dashes.
Return exactly one review per ref.`;

export interface PostUnit { item: ManifestItem; ref: string; x: PostExtraction; text: string; hash: string }

export const postReviewPath = (dataDir: string, item: Pick<ManifestItem, "id" | "source">) => resolve(dataDir, "review", "post", item.source, `${fileKey(postKey(item))}.json`);
export const excerptOf = (text: string) => (text.length > POST_CHARS ? `${text.slice(0, POST_CHARS)}\n[...]` : text);
/** The input a review is tied to (D21): the excerpt Opus saw and the extraction as the page shows it. */
export const postInputHash = (x: PostExtraction, text: string) => sha256(canonicalJson({ text: sha256(excerptOf(text)), x: { ...x, llm: null } }));

export function postReviewPrompt(units: PostUnit[]): string {
  return units.map((u) => {
    const facts = {
      summary: u.x.summary, key_points: u.x.key_points, systems: u.x.systems, topics: u.x.topics,
      objects: u.x.objects.map((o) => `${o.type} ${o.name}`), features: u.x.features, versions: u.x.versions,
      quotes: u.x.quotes.map((q, i) => ({ n: i + 1, text: q.text, why_it_matters: q.why_it_matters })),
    };
    return `### POST ref=${u.ref}\nTitle: ${u.item.title}\nURL: ${u.item.url}\nPublished: ${u.item.published_at ?? "unknown"}\n\nWhat the page says (JSON):\n${JSON.stringify(facts, null, 1)}\n\nPost text:\n${excerptOf(u.text)}`;
  }).join("\n\n");
}

/** Apply a fix through the extractor's checks and the 25-word guard. Pure: a new extraction and a log. */
export function applyPostReview(x: PostExtraction, out: PostReviewOut, text: string): { x: PostExtraction; applied: string[]; rejected: string[] } {
  const check = repeatChecker(text);
  const applied: string[] = [], rejected: string[] = [];
  let next: PostExtraction = { ...x };
  if (out.summary !== null) {
    const s = clip(tidy(out.summary), SUMMARY_CHARS);
    if (!s) rejected.push("summary: empty");
    else if (check(s)) rejected.push("summary: repeats 25+ words of the post (D33)");
    else { next.summary = s; applied.push("summary rewritten"); }
  }
  if (out.key_points !== null) {
    const kp = out.key_points.map(tidy).filter(Boolean).slice(0, 5);
    if (!kp.length) rejected.push("key points: empty");
    else if (kp.some((k) => check(k))) rejected.push("key points: repeat 25+ words of the post (D33)");
    else { next.key_points = kp; applied.push("key points rewritten"); }
  }
  const drop = <T>(list: T[], names: string[], name: (t: T) => string, what: string): T[] => {
    const want = new Set(names.map((n) => n.toLowerCase().trim()));
    const kept = list.filter((t) => !want.has(name(t).toLowerCase().trim()));
    for (const n of names) if (!list.some((t) => name(t).toLowerCase().trim() === n.toLowerCase().trim())) rejected.push(`drop ${what}: none listed as "${n.slice(0, 60)}"`);
    if (kept.length < list.length) applied.push(`dropped ${list.length - kept.length} ${what}(s)`);
    return kept;
  };
  if (out.drop_quotes.length) {
    const ns = new Set(out.drop_quotes);
    for (const n of ns) if (!(n >= 1 && n <= x.quotes.length)) rejected.push(`drop quote: no quote ${n}`);
    const kept = next.quotes.filter((_, i) => !ns.has(i + 1));
    if (kept.length < next.quotes.length) applied.push(`dropped ${next.quotes.length - kept.length} quote(s)`);
    next.quotes = kept;
  }
  if (out.drop_objects.length) next.objects = drop(next.objects, out.drop_objects, (o) => `${o.type} ${o.name}`, "object");
  if (out.drop_features.length) next.features = drop(next.features, out.drop_features, (f) => f, "feature");
  if (out.drop_systems.length) next.systems = drop(next.systems, out.drop_systems, (s) => s, "system");
  // the extractor's last check: fields side by side must not form a run of the post either
  if (applied.length && check(JSON.stringify({ ...next, llm: null }))) {
    return { x, applied: [], rejected: [...rejected, ...applied.map((a) => `${a}: the edited page repeats 25+ words of the post (D33)`)] };
  }
  return { x: next, applied, rejected };
}

/** Rejected: the facts stay, the model text goes (spec section 2: summary and key points). */
export const withheld = (x: PostExtraction): PostExtraction => ({ ...x, summary: WITHHELD, key_points: [] });

const readRaw = (item: ManifestItem): string | null => { const p = postRawPath(item); return exists(p) ? readText(p) : null; };

/** Published posts whose current extraction has no review of this input hash, newest first. */
export function duePosts(items: ManifestItem[], dataDir: string, raw: (item: ManifestItem) => string | null = readRaw): Omit<PostUnit, "ref">[] {
  const due: Omit<PostUnit, "ref">[] = [];
  for (const item of [...items].filter((i) => i.pillar === "blog" && i.state === "published").sort(newestFirst)) {
    const xp = postExtractionPath(dataDir, item);
    if (!exists(xp)) continue;
    const text = raw(item);
    if (text === null) continue; // no vault (CI, a laptop): nothing to review against
    const x = readJson<PostExtraction>(xp);
    const hash = postInputHash(x, text);
    const rp = postReviewPath(dataDir, item);
    if (exists(rp) && readJson<PostReview>(rp).input_hash === hash) continue;
    due.push({ item, x, text, hash });
  }
  return due;
}

/** Calls of at most BATCH_SIZE posts and CALL_CHARS of text, like the extractor's batches. */
export function planPostCalls(due: Omit<PostUnit, "ref">[]): PostUnit[][] {
  const calls: PostUnit[][] = [];
  let cur: PostUnit[] = [], size = 0;
  for (const d of due) {
    const len = excerptOf(d.text).length;
    if (cur.length && (size + len > CALL_CHARS || cur.length >= BATCH_SIZE)) { calls.push(cur); cur = []; size = 0; }
    cur.push({ ...d, ref: `p${cur.length + 1}` });
    size += len;
  }
  if (cur.length) calls.push(cur);
  return calls;
}

export interface PostReviewOptions {
  quota: number; deadline: Date; clock: () => Date; concurrency?: number; llm?: Llm;
  /** The post text the extractor saw; defaults to the vault file. */
  raw?: (item: ManifestItem) => string | null;
  save: (item: ManifestItem) => void;
}

/** The nightly pass. Returns the run numbers and the items whose page must be re-rendered. */
export async function reviewPosts(items: ManifestItem[], dataDir: string, o: PostReviewOptions): Promise<{ run: ContentReviewRun; touched: ManifestItem[] }> {
  const llm = o.llm ?? complete;
  const due = duePosts(items, dataDir, o.raw);
  const run = newRun(due.length);
  const touched: ManifestItem[] = [];
  // text that changed since its review is no longer reviewed, whether or not tonight's quota reaches it
  for (const d of due) {
    if (!d.item.review || d.item.review.state === "unreviewed") continue;
    d.item = { ...d.item, review: { ...UNREVIEWED } };
    o.save(d.item);
    touched.push(d.item);
    run.reset++;
  }
  const calls = planPostCalls(due);
  await runCalls(calls, run, o, (c) => ({ label: `${c[0].item.id}${c.length > 1 ? ` +${c.length - 1}` : ""} post review`, size: c.length }), async (c) => {
    const refs = c.map((u) => u.ref);
    const res = await llm<{ reviews: PostReviewOut[] }>({
      stage: STAGE, promptVersion: PROMPT_VERSION, role: "review", system: SYSTEM, schema: reviewSchema(refs), prompt: postReviewPrompt(c),
      inputs: c.map((u) => ({ kind: "post-review", id: u.item.id, hash: u.hash })), label: `${c[0].item.id}${c.length > 1 ? ` +${c.length - 1}` : ""} post review`,
    });
    const got = byRef(res.output.reviews, refs);
    const at = o.clock().toISOString();
    for (const u of c) {
      const out = got.get(u.ref)!;
      const check = repeatChecker(u.text);
      let x = u.x, applied: string[] = [], rejected: string[] = [];
      if (out.verdict === "fix") ({ x, applied, rejected } = applyPostReview(u.x, out, u.text));
      if (out.verdict === "reject") { x = withheld(u.x); applied = ["summary and key points withheld"]; }
      if (x !== u.x) writeJson(postExtractionPath(dataDir, u.item), x);
      const record: PostReview = {
        item_id: u.item.id, input_hash: postInputHash(x, u.text), verdict: out.verdict, by: "opus", at,
        // the record is public: an issue that repeats the post is dropped (D33)
        issues: out.issues.map(tidy).filter((i) => i && !check(i)).slice(0, 10), applied, rejected_edits: rejected, prompt_version: PROMPT_VERSION,
        llm: { model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : Number(((res.meta.cost_usd ?? 0) / c.length).toFixed(6)), posts_in_call: c.length },
      };
      writeJson(postReviewPath(dataDir, u.item), record);
      const item = { ...u.item, review: reviewOfVerdict(out.verdict, at) };
      o.save(item);
      touched.push(item);
      run.reviewed++;
      if (out.verdict === "fix") run.fixed++;
      if (out.verdict === "reject") run.rejected++;
    }
    return res.cached ? 0 : res.meta.cost_usd ?? 0;
  });
  return { run, touched: [...new Map(touched.map((t) => [t.id, t])).values()] };
}
