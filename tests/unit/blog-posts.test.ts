import { test, afterEach } from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import matter from "gray-matter";
import type { LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import type { StageFn } from "../../pipeline/orchestrator/execute.js";
import type { Llm } from "../../pipeline/extract/video.js";
import { htmlToText, mainContent, postFetched, postRawPath } from "../../pipeline/fetch/post.js";
import { extractPosts, verbatimQuote } from "../../pipeline/extract/post.js";
import { renderPostIndex, renderPostPage } from "../../pipeline/render/post.js";
import { validateContent } from "../../pipeline/validate/content.js";

const saved = process.env.BCOBS_VAULT_DIR;
afterEach(() => { if (saved === undefined) delete process.env.BCOBS_VAULT_DIR; else process.env.BCOBS_VAULT_DIR = saved; });
const vault = (git = true) => { const d = mkdtempSync(join(tmpdir(), "bcobs-vault-")); if (git) mkdirSync(join(d, ".git")); process.env.BCOBS_VAULT_DIR = d; return d; };
const BODY = Array.from({ length: 60 }, (_, i) => `word${i}`).join(" ");
const item = (over: Partial<ManifestItem> = {}): ManifestItem => ({ id: "blog/kauffmann-nl/1234", pillar: "blog", source: "kauffmann-nl", tier: "community", title: "Using the new API", url: "https://www.kauffmann.nl/2026/10/01/api/", published_at: "2026-10-01T08:00:00Z", language: "en", state: "discovered", stages: { discovered: { at: "x" } }, attempts: 0, ...over });

test("html to text keeps blocks and code, drops chrome; main content prefers the article", () => {
  const t = htmlToText(`<nav>menu</nav><h2>Intro</h2><p>Hello <b>world</b></p><pre>codeunit 50100 X\n{\n}</pre><script>x()</script><ul><li>one</li><li>two</li></ul>`);
  assert.equal(t, "Intro\n\nHello world\n\n```\ncodeunit 50100 X\n{\n}\n```\n\none\n\ntwo");
  assert.equal(mainContent(`<body><div class="sidebar">ads</div><article><div class="entry-content"><p>${BODY}</p></div></article></body>`), BODY);
});

test("fetched: WordPress REST content into the vault; feed sources read the page; only with a vault checkout", async () => {
  const v = vault();
  const calls: string[] = [];
  const http = (async (url: string) => { calls.push(url); return url.includes("/wp-json/") ? new Response(JSON.stringify({ content: { rendered: `<p>${BODY}</p>` } })) : new Response(`<article><p>${BODY} page</p></article>`); }) as any;
  const h = postFetched(new Map([["kauffmann-nl", { rest: "https://www.kauffmann.nl/wp-json/wp/v2/posts" }], ["freddysblog", {}]]), http) as { accepts: (i: ManifestItem) => boolean; run: StageFn };
  assert.equal(h.accepts(item()), true);
  const r = await h.run(item(), {} as any);
  assert.deepEqual([calls[0], r.data?.words], ["https://www.kauffmann.nl/wp-json/wp/v2/posts/1234?_fields=content", 60]);
  assert.equal(readFileSync(postRawPath(item(), v), "utf8"), `${BODY}\n`);
  await h.run(item({ id: "blog/freddysblog/https-freddysblog-com-x", source: "freddysblog", url: "https://freddysblog.com/x" }), {} as any);
  assert.equal(calls[1], "https://freddysblog.com/x");
  const gone = (async () => { throw new Error("HTTP 404 for x"); }) as any;
  assert.equal((await (postFetched(new Map(), gone) as any).run(item(), {})).skip, "unavailable");
  vault(false);
  assert.equal(h.accepts(item()), false, "no vault checkout: posts wait");
});

test("extracted: one Haiku pass, quotes must be verbatim and short, community fields trimmed, opted-in sources untouched", async () => {
  const v = vault();
  const text = `${BODY}. The new API page lets you post documents directly. ${BODY.replace(/word/g, "term")}`;
  for (const it of [item(), item({ id: "blog/waldo-be/9", source: "waldo-be" })]) { mkdirSync(join(postRawPath(it, v), ".."), { recursive: true }); writeFileSync(postRawPath(it, v), text); }
  const copied = BODY.split(" ").slice(0, 30).join(" ");
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(r: LlmRequest) => { reqs.push(r); return { output: { posts: ["p1", "p2"].map((key) => ({ key, summary: `About posting. ${copied}`, key_points: ["Post documents via the API"], systems: ["integration", "nope"], topics: ["API"], objects: [{ type: "page", name: "Sales Order" }], features: ["document posting"], versions: ["29.0"], language: "en",
    quotes: [{ text: "The new API page lets you post documents directly.", why_it_matters: "core idea" }, { text: "an invented sentence that is not in the post at all", why_it_matters: "x" }] })) } as T, cached: false, meta: { model: "claude-haiku-4-5", cost_usd: 0.02 } as any }; };
  const res = await extractPosts([item(), item({ id: "blog/waldo-be/9", source: "waldo-be" })], (s) => s === "waldo-be", llm);
  assert.deepEqual([reqs.length, reqs[0].role], [1, "facts"]);
  const c = res.get("blog/kauffmann-nl/1234") as any, o = res.get("blog/waldo-be/9") as any;
  assert.deepEqual(c.quotes.map((q: any) => q.text), ["The new API page lets you post documents directly."]);
  assert.deepEqual([c.systems, c.topics, c.trimmed_for_policy], [["integration"], ["api"], 1]);
  assert.ok(c.summary.endsWith(" ...") && c.summary.split(" ").length === 21);
  assert.equal(o.trimmed_for_policy, 0, "opted in (full_text): no trimming");
  assert.equal(verbatimQuote("too short", text), false);
});

test("extracted: a quote's why_it_matters that copies the post is trimmed too; a whole extraction that still repeats is skipped", async () => {
  const v = vault();
  const text = `${BODY}. The new API page lets you post documents directly. ${BODY.replace(/word/g, "term")}`;
  const it = item();
  mkdirSync(join(postRawPath(it, v), ".."), { recursive: true });
  writeFileSync(postRawPath(it, v), text);
  const copied = BODY.split(" ").slice(0, 30).join(" ");
  // the quote text stays under the limit, but "why it matters" copies 30 words of the post: it used to slip through
  const llm: Llm = async <T>() => ({ output: { posts: [{ key: "p1", summary: "A short summary.", key_points: ["k"], systems: ["integration"], topics: ["api"], objects: [], features: [], versions: [], language: "en",
    quotes: [{ text: "The new API page lets you post documents directly.", why_it_matters: copied }] }] } as T, cached: false, meta: { model: "claude-haiku-4-5", cost_usd: 0.01 } as any });
  const c = (await extractPosts([it], () => false, llm)).get(it.id) as any;
  assert.deepEqual(c.quotes.map((q: any) => q.text), ["The new API page lets you post documents directly."], "the verbatim quote itself is kept");
  assert.ok(c.quotes[0].why_it_matters.endsWith(" ..."), `why_it_matters trimmed, got: ${c.quotes[0].why_it_matters}`);
  assert.equal(c.trimmed_for_policy, 1);

  // six key points of five words each: none is long enough to trim on its own, but side by side in the extraction
  // they repeat 30 consecutive words of the post, so the item is skipped rather than published
  const w = BODY.split(" ");
  const chunks = Array.from({ length: 6 }, (_, i) => w.slice(i * 5, i * 5 + 5).join(" "));
  const sliced: Llm = async <T>() => ({ output: { posts: [{ key: "p1", summary: "A short summary.", key_points: chunks, systems: [], topics: [], objects: [], features: [], versions: [], language: "en", quotes: [] }] } as T, cached: false, meta: { model: "claude-haiku-4-5", cost_usd: 0.01 } as any });
  const skipped = (await extractPosts([it], () => false, sliced)).get(it.id);
  assert.equal((skipped as Error).name, "StillRepeats");
});

test("published: a valid post page and the index", async () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-posts-"));
  const x = { item_id: "blog/kauffmann-nl/1234", url: "u", title: "t", source: "kauffmann-nl", published_at: "2026-10-01T08:00:00Z", words: 900, summary: "How to post documents through the new API.", key_points: ["Use the action"], systems: ["integration"], topics: ["api"], objects: [{ type: "page", name: "Sales Order" }], features: [], versions: ["29.0"], language: "en", quotes: [{ text: "The new API page lets you post documents directly.", why_it_matters: "core" }], trimmed_for_policy: 0, prompt_version: 1, llm: { model: "m", cached: false, cost_usd: 0.01, posts_in_call: 1 } };
  const page = renderPostPage(item({ stages: { fetched: { at: "x", output_hash: "h" } } }), x as any, { name: "Kauffmann", author: { name: "Arend-Jan Kauffmann", mvp: true } }, new Date());
  const fm = matter(page);
  assert.deepEqual([fm.data.id, fm.data.type, fm.data.author, fm.data.quotes.length, fm.data.code_objects_mentioned], ["post/kauffmann-nl/1234", "post", "Arend-Jan Kauffmann", 1, ["page Sales Order"]]);
  mkdirSync(join(root, "content/posts/kauffmann-nl"), { recursive: true });
  writeFileSync(join(root, "content/posts/kauffmann-nl/1234.md"), page);
  assert.equal(renderPostIndex(join(root, "content")), 1);
  assert.ok(existsSync(join(root, "content/posts/llms.txt")));
  assert.deepEqual(validateContent(join(root, "content")).errors, []);
});
