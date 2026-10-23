import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { attachCautions, cautionsFromDisclaimers, majorsOf, type CautionItem, type GuardObject } from "../../pipeline/link/cautions.js";
import { objectIndexFromRows } from "../../pipeline/link/mentions.js";
import { keepCautions } from "../../pipeline/extract/cautions.js";

const fx = JSON.parse(readFileSync(resolve(import.meta.dirname, "../fixtures/cautions-v26.json"), "utf8"));
const objects: GuardObject[] = fx.objects;
const index = objectIndexFromRows(objects.map((o) => [o.id.replace(/^object\//, ""), o.type, o.object_id, o.name, "Base Application"] as [string, string, number, string, string]));
const owners = (extra: Record<string, string[]> = {}) => {
  const m = new Map<string, string[]>();
  for (const o of objects) for (const e of o.events ?? []) m.set(e.toLowerCase(), [...(m.get(e.toLowerCase()) ?? []), o.id]);
  for (const [e, ids] of Object.entries(extra)) m.set(e.toLowerCase(), ids);
  return m;
};
const item: CautionItem = fx.item;

test("guard: waldo's v26 caution attaches to Table 49 with its scope", () => {
  const a = attachCautions([item], index, owners(), new Map(objects.map((o) => [o.id, o])));
  const t49 = a.get("object/table/49")!;
  assert.equal(t49.length, 1);
  assert.equal(t49[0].from, "post/waldo-be/317951");
  assert.equal(t49[0].scope, 'Table 49 "Invoice Post. Buffer", Removed in 27.0');
});

test("guard: the v26 caution does NOT attach to Codeunit 80, though Codeunit 80 has obsolete events of its own", () => {
  const a = attachCautions([item], index, owners(), new Map(objects.map((o) => [o.id, o])));
  assert.equal(a.get("object/codeunit/80"), undefined);
  assert.ok(objects.find((o) => o.id === "object/codeunit/80")!.obsolete_events!.length === 3, "the fixture keeps Codeunit 80's three Pending obsolete events");
});

test("guard: an event attaches only where it is a member today, and the scope names it", () => {
  const withEvent: CautionItem = { ...item, cautions: [{ ...item.cautions[0], objects: [], events: ["OnBeforePostSalesDoc"] }] };
  const a = attachCautions([withEvent], index, owners(), new Map(objects.map((o) => [o.id, o])));
  assert.equal(a.get("object/codeunit/80")?.[0].scope, 'Codeunit 80 "Sales-Post" (event OnBeforePostSalesDoc)');
  const common = attachCautions([withEvent], index, owners({ OnBeforePostSalesDoc: ["object/codeunit/80", "object/codeunit/81", "object/codeunit/82", "object/codeunit/83"] }), new Map(objects.map((o) => [o.id, o])));
  assert.equal(common.size, 0, "an event more than three objects publish is too common to attach by");
});

test("guard: no resolvable object and no member event attaches nowhere; a version after the object's life blocks it", () => {
  const vague: CautionItem = { ...item, cautions: [{ kind: "warning", quote: "be careful with posting events", objects: [{ type: "codeunit", name: "Nonexistent" }], events: [], versions: [] }] };
  assert.equal(attachCautions([vague], index, owners(), new Map(objects.map((o) => [o.id, o]))).size, 0);
  const old: CautionItem = { ...item, cautions: [{ ...item.cautions[0], versions: ["31"] }] };
  assert.equal(attachCautions([old], index, owners(), new Map(objects.map((o) => [o.id, o]))).size, 0);
  assert.deepEqual(majorsOf(["v26", "BC 25", "29.x", "2024 release wave 2", "28.4"]), ["26", "25", "29", "28"]);
});

test("cautions extraction: quotes must be verbatim and under 25 words; at most four per item", () => {
  const body = "Watch out. I found 82 of such non-invoked events! Be mindful and fail your build pipelines when you are using obsoleted stuff.";
  const raw = [
    { kind: "breaking", quote: "I found 82 of such non-invoked events!", objects: [], events: [], versions: ["26"] },
    { kind: "warning", quote: "not in the post at all, made up", objects: [], events: [], versions: [] },
    { kind: "gotcha", quote: "word ".repeat(30), objects: [], events: [], versions: [] },
    ...Array.from({ length: 5 }, () => ({ kind: "warning", quote: "fail your build pipelines when you are using obsoleted stuff", objects: [], events: [], versions: [] })),
    { kind: "nonsense", quote: "Be mindful and fail your build pipelines", objects: [], events: [], versions: [] },
  ];
  const kept = keepCautions(raw, body);
  assert.deepEqual(kept.map((c) => c.kind), ["breaking", "warning", "warning"], "made-up and over-long quotes go, duplicates collapse, an unknown kind becomes warning");
});

test("video disclaimers become preview-disclaimer cautions without a model call", () => {
  const c = cautionsFromDisclaimers([{ t: 19, kind: "preview", text: "this is coming in public preview in version 29.x, likely 29.1" }, { t: 300, kind: "other", text: "x" }]);
  assert.deepEqual(c, [{ kind: "preview-disclaimer", quote: "this is coming in public preview in version 29.x, likely 29.1", t: 19, objects: [], events: [], versions: ["29"] }]);
});

test("cautions stage: a record per post, newest first, within the quota; only verbatim quotes survive", async () => {
  const { refreshCautions, cautionsPath } = await import("../../pipeline/extract/cautions.js");
  const { mkdtempSync } = await import("node:fs");
  const { tmpdir } = await import("node:os");
  const { join } = await import("node:path");
  const { readJson } = await import("../../pipeline/lib/fsx.js");
  const dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-ca-")), "data");
  const post = (n: number, date: string) => ({ id: `blog/waldo-be/${n}`, pillar: "blog", source: "waldo-be", tier: "community", title: `P${n}`, url: "u", published_at: date, language: "en", state: "published", stages: { published: { at: "x" } }, attempts: 0 }) as any;
  const body = "Intro. I found 82 of such non-invoked events! The rest of the post.";
  const llm = async <T,>(req: { prompt: string }) => ({ output: { posts: [...req.prompt.matchAll(/### POST key=(\S+)/g)].map((m) => ({ key: m[1], cautions: [{ kind: "breaking", quote: "I found 82 of such non-invoked events!", objects: [{ type: "table", name: "Invoice Post. Buffer" }], events: [], versions: ["26"] }, { kind: "warning", quote: "invented words never written there", objects: [], events: [], versions: [] }] })) } as T, cached: false, meta: { model: "claude-haiku-4-5", cost_usd: 0.01 } as any });
  const r = await refreshCautions([post(1, "2025-01-01"), post(2, "2026-01-01")], { dataDir, quota: 1, deadline: new Date(Date.now() + 60_000), clock: () => new Date(), llm: llm as any, read: () => body });
  assert.deepEqual([r.due, r.posts, r.cautions, r.stopped], [2, 1, 1, "quota"]);
  const rec = readJson<any>(cautionsPath(dataDir, post(2, "")));
  assert.equal(rec.page_id, "post/waldo-be/2");
  assert.equal(rec.cautions[0].quote, "I found 82 of such non-invoked events!");
});

test("cautions on pages: a post's Heads up section, the object page's section with its scope", async () => {
  const { renderPostPage } = await import("../../pipeline/render/post.js");
  const { headsUpSection } = await import("../../pipeline/link/cautions.js");
  const { validate } = await import("../../pipeline/lib/schema.js");
  const matter = (await import("gray-matter")).default;
  const x = { item_id: "blog/waldo-be/317951", url: "u", title: "t", source: "waldo-be", published_at: "2025-06-30T07:00:00Z", words: 1254, summary: "Legacy invoice posting events are no longer invoked in v26.", key_points: [], systems: ["development"], topics: [], objects: [], features: [], versions: [], language: "en", quotes: [], trimmed_for_policy: 0, prompt_version: 1, llm: {} };
  const it = { id: "blog/waldo-be/317951", pillar: "blog", source: "waldo-be", tier: "community", title: fx.item.title, url: "u", published_at: "2025-06-30T07:00:00Z", language: "en", state: "published", stages: {}, attempts: 0 } as any;
  const page = matter(renderPostPage(it, x as any, { name: "waldo's blog", full_text: true }, new Date(), undefined, null, [], fx.item.cautions));
  assert.match(page.content, /## Heads up\n\n- breaking: "I found 82 of such non-invoked events!" \(about table Invoice Post\. Buffer, interface Invoice Posting Interface, OnBeforeFillInvoicePostBuffer, version 26\)/);
  const v = validate("frontmatter.post", page.data);
  assert.equal(v.ok, true, v.errors.join("; "));
  const lines = headsUpSection([{ from: "post/waldo-be/317951", title: "Obsoleted events in v26", kind: "breaking", quote: "I found 82 of such non-invoked events!", scope: 'Table 49 "Invoice Post. Buffer", Removed in 27.0' }], "../../").join("\n");
  assert.match(lines, /## Heads up \(community\)[\s\S]*- breaking: "I found 82 of such non-invoked events!" — \[Obsoleted events in v26\]\(\.\.\/\.\.\/posts\/waldo-be\/317951\.md\), applies to Table 49 "Invoice Post\. Buffer", Removed in 27\.0/);
});
