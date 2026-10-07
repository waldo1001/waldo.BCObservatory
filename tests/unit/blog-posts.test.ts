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
import { pendingMentionPages, policyCheckedPage, renderPostIndex, renderPostPage } from "../../pipeline/render/post.js";
import { objectIndexFromRows } from "../../pipeline/link/mentions.js";
import { writeJson } from "../../pipeline/lib/fsx.js";
import { repeatChecker } from "../../pipeline/validate/leak.js";
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
  assert.equal(fm.data.review.state, "unreviewed", "D77: model text, no review yet");
  const rv = matter(renderPostPage(item({ stages: { fetched: { at: "x", output_hash: "h" } }, review: { state: "reviewed", by: "opus", at: "2026-10-08T01:00:00Z" } }), x as any, { name: "Kauffmann" }, new Date()));
  assert.deepEqual([rv.data.review.state, rv.data.review.by], ["reviewed", "opus"], "the post review sets item.review; the page follows it");
  assert.match(rv.content, /· reviewed \(checked by Opus\)/);
  mkdirSync(join(root, "content/posts/kauffmann-nl"), { recursive: true });
  writeFileSync(join(root, "content/posts/kauffmann-nl/1234.md"), page);
  assert.equal(renderPostIndex(join(root, "content")), 1);
  assert.ok(existsSync(join(root, "content/posts/llms.txt")));
  assert.deepEqual(validateContent(join(root, "content")).errors, []);
});

test("published: the preview block (D60) is optional, validated, and stale yeses are caught", () => {
  const x = { item_id: "blog/kauffmann-nl/1234", url: "u", title: "t", source: "kauffmann-nl", published_at: "2026-10-01T08:00:00Z", words: 900, summary: "How to post documents through the new API.", key_points: [], systems: [], topics: [], objects: [], features: [], versions: [], language: "en", quotes: [], trimmed_for_policy: 0, prompt_version: 1, llm: {} } as any;
  const it = item({ stages: { fetched: { at: "x", output_hash: "h" } } });
  const now = new Date("2026-10-07T12:00:00Z");
  const preview = { embeddable: true, frame_url: null, image: "https://www.kauffmann.nl/hero.png", image_alt: null, image_w: 1200, image_h: 630, site_name: "Kauffmann", favicon: "https://www.kauffmann.nl/favicon.ico", probed_at: "2026-10-07T01:00:00.000Z" };
  const write = (page: string) => {
    const root = mkdtempSync(join(tmpdir(), "bcobs-posts-"));
    mkdirSync(join(root, "content/posts/kauffmann-nl"), { recursive: true });
    writeFileSync(join(root, "content/posts/kauffmann-nl/1234.md"), page);
    return join(root, "content");
  };
  const without = renderPostPage(it, x, { name: "Kauffmann" }, now);
  assert.equal("preview" in matter(without).data, false, "never probed: no preview key");
  assert.deepEqual(validateContent(write(without), now).errors, []);
  const withPreview = renderPostPage(it, x, { name: "Kauffmann" }, now, preview);
  assert.deepEqual(matter(withPreview).data.preview, preview);
  assert.deepEqual(validateContent(write(withPreview), now).errors, []);
  const optedOut = renderPostPage(it, x, { name: "Kauffmann", embed: false }, now, { ...preview, embeddable: false, image: null, favicon: null });
  assert.deepEqual(validateContent(write(optedOut), now).errors, []);
  const errs = validateContent(write(withPreview), new Date("2027-03-01T00:00:00Z")).errors;
  assert.equal(errs.length, 1);
  assert.match(errs[0], /preview\.embeddable is true but was probed 2026-10-07, over 120 days ago/);
  assert.throws(() => renderPostPage(it, x, { name: "Kauffmann" }, now, { ...preview, image: "http://insecure.example/i.png" }), /preview/, "the schema rejects http images");
});

// --- the page is what check:leak scans, so the page is what the guard checks (D55) ---------------------------

/** A run that spans the title/summary seam on the page and no seam in the JSON: what killed the 2026-10-07 run. */
test("a page that repeats the post across the title seam is scrubbed, and skipped if it still repeats", () => {
  const v = mkdtempSync(join(tmpdir(), "bcobs-vault-"));
  const prev = process.env.BCOBS_VAULT_DIR;
  process.env.BCOBS_VAULT_DIR = v;
  try {
    const TITLE = "Business Central executes agent tasks with the intersection of";
    const TAIL = "the agent profile and the user permissions of whoever started the task in the client today";
    const raw = `${TITLE} ${TAIL}, which is what the documentation means by least privilege.`;
    const it = item({ id: "blog/bertverbeek-nl/1252", source: "bertverbeek-nl", title: TITLE });
    mkdirSync(join(postRawPath(it, v), ".."), { recursive: true });
    writeFileSync(postRawPath(it, v), raw);
    const x = { item_id: it.id, url: it.url, title: TITLE, source: it.source, published_at: null, words: 20,
      summary: TAIL, key_points: [], systems: [], topics: [], objects: [], features: [], versions: [],
      language: "en", quotes: [], trimmed_for_policy: 0, prompt_version: 1, llm: {} } as any;
    const src = { name: "Bert Verbeek" };
    // the JSON keeps title and summary apart; the page puts them on consecutive lines, which is the 25-word run
    assert.equal(repeatChecker(raw)(JSON.stringify(x)), null, "the extract-time guard sees no run");
    // the byline between them is our own words, so the seam no longer forms a run at all
    const page = policyCheckedPage(it, x, src, new Date());
    assert.ok(page, "the page is published");
    assert.equal(repeatChecker(raw)(page!), null, "and it does not repeat");
    assert.match(page!, /# Business Central[\s\S]*Read the post[\s\S]*> the agent profile/, "byline between title and summary");
    // when the title alone already carries the run there is nothing left to scrub: no page at all
    const long = { ...x, title: `${TITLE} ${TAIL}`, summary: "Short." };
    const it2 = item({ id: it.id, source: it.source, title: `${TITLE} ${TAIL}` });
    assert.equal(policyCheckedPage(it2, long, src, new Date()), null, "no page rather than a leaking page");
    // a source that may carry full text is not checked at all
    assert.ok(policyCheckedPage(it2, long, { ...src, full_text: true }, new Date()));
  } finally {
    if (prev === undefined) delete process.env.BCOBS_VAULT_DIR; else process.env.BCOBS_VAULT_DIR = prev;
  }
});

test("published: objects the post names link to their pages and fill links.objects (D67); unresolved and ambiguous stay text", () => {
  const root = mkdtempSync(join(tmpdir(), "bcobs-posts-"));
  const objects = [{ type: "codeunit", name: "Sales Line-Reserve" }, { type: "table", name: "SalesLine" }, { type: "page", name: "Customer Card" }, { type: "codeunit", name: "Search" }, { type: "table", name: "SalesLine" }];
  const x = { item_id: "blog/kauffmann-nl/1234", url: "u", title: "t", source: "kauffmann-nl", published_at: "2026-10-01T08:00:00Z", words: 900, summary: "How to reserve.", key_points: [], systems: [], topics: [], objects, features: [], versions: [], language: "en", quotes: [], trimmed_for_policy: 0, prompt_version: 1, llm: {} } as any;
  const rows: any[] = [["codeunit/99000845", "codeunit", 99000845, "Sales Line-Reserve", "Base Application", null, null, "25", "", 0, 0],
    ["table/37", "table", 37, "Sales Line", "Base Application", null, null, "25", "", 0, 0], ["page/21", "page", 21, "Customer Card", "Base Application", null, null, "25", "", 0, 0], ["page/21-be", "page", 21, "Customer Card (BE)", "BE layer", null, null, "29", "", 0, 0],
    ["codeunit/7282", "codeunit", 7282, "Search", "App A", null, null, "28", "", 0, 0], ["codeunit/7333", "codeunit", 7333, "Search", "App B", null, null, "28", "", 0, 0]];
  const it = item({ stages: { fetched: { at: "x", output_hash: "h" }, published: { at: "x" } } });
  const page = renderPostPage(it, x, { name: "Kauffmann" }, new Date(), undefined, objectIndexFromRows(rows));
  const { data, content } = matter(page);
  assert.deepEqual(data.links.objects, ["object/codeunit/99000845"]);
  assert.ok(content.includes('- [codeunit 99000845 "Sales Line-Reserve"](../../objects/codeunit/99000845.md)'));
  assert.ok(content.includes('- table "SalesLine"'));
  assert.ok(content.includes('Not found in BC28-30: table "SalesLine".'), "named once, however often the post names it");
  assert.ok(content.includes('More than one object has this name, so none is linked: page "Customer Card", codeunit "Search".'), "a country layer's page shares the W1 name, as on the object pages");
  // the nightly re-renders a post whose page lacks the join it would get now, and only that one
  writeJson(join(root, "data/extract/blog/kauffmann-nl/1234.json"), x);
  writeJson(join(root, "data/index/objects.json"), { schema: "bcobs-objects@1", count: rows.length, rows });
  mkdirSync(join(root, "content/posts/kauffmann-nl"), { recursive: true });
  writeFileSync(join(root, "content/posts/kauffmann-nl/1234.md"), renderPostPage(it, x, { name: "Kauffmann" }, new Date()));
  assert.deepEqual(pendingMentionPages([it], join(root, "data"), join(root, "content")).map((i) => i.id), [it.id]);
  writeFileSync(join(root, "content/posts/kauffmann-nl/1234.md"), page);
  assert.deepEqual(pendingMentionPages([it], join(root, "data"), join(root, "content")), []);
});
