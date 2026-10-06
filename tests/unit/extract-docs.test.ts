import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { cleanBody, docExtractionPath, docsExtractedHandler, pack, splitSections } from "../../pipeline/extract/docs.js";
import { LlmBudgetExhausted, type LlmRequest } from "../../pipeline/lib/llm.js";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import type { Llm } from "../../pipeline/extract/video.js";

function mirror(files: Record<string, string>) {
  const root = mkdtempSync(join(tmpdir(), "bcobs-docsx-"));
  const src = join(root, "src");
  const g = (cwd: string, ...a: string[]) => execFileSync("git", a, { cwd, stdio: "pipe" }).toString().trim();
  mkdirSync(join(src, "bc"), { recursive: true });
  g(src, "init", "-q", "-b", "main"); g(src, "config", "user.email", "t@example.com"); g(src, "config", "user.name", "t");
  for (const [p, t] of Object.entries(files)) writeFileSync(join(src, p), t);
  g(src, "add", "-A"); g(src, "commit", "-q", "-m", "x");
  mkdirSync(join(root, "mirrors"));
  g(join(root, "mirrors"), "clone", "-q", "--bare", `file://${src}`, "learn.git");
  const blob = (p: string) => g(src, "rev-parse", `HEAD:${p}`);
  return { root, mirrorsDir: join(root, "mirrors"), blob };
}
const item = (path: string, blob: string, over: Partial<ManifestItem> = {}): ManifestItem => ({
  id: `docs/learn/${path}`, pillar: "docs", source: "learn", tier: "official", title: path, url: `https://learn/${path}`,
  state: "fetched", stages: {}, attempts: 0, input_hash: blob, meta: { ms_topic: "how-to" }, ...over,
});
const page = (key: string, over: Record<string, unknown> = {}) => ({ key, summary: `Summary ${key} — done.`, systems: ["finance", "nope"], topics: ["Posting"], objects: [{ type: "table", name: "G/L Account" }], features: ["Posting preview"], versions: [], ...over });
function fake(handler: (req: LlmRequest) => unknown) {
  const reqs: LlmRequest[] = [];
  const llm: Llm = async <T>(r: LlmRequest) => { reqs.push(r); return { output: handler(r) as T, cached: false, meta: { model: "claude-haiku-4-5", cost_usd: 0.02 } as any }; };
  return { llm, reqs };
}
const keysOf = (prompt: string) => [...prompt.matchAll(/### PAGE key=(\S+)/g)].map((m) => m[1]);
const run = (h: any, items: ManifestItem[], ctx: any) => h.batch.run(items, ctx);

test("body cleaning, section splitting and call packing", () => {
  assert.equal(cleanBody("---\ntitle: x\n---\n# T\n<!-- hidden -->\n[!INCLUDE [x](inc.md)]\n![img](a.png)\ntext"), "# T\n\ntext");
  const long = ["intro", ...Array.from({ length: 5 }, (_, i) => `## S${i}\n${"word ".repeat(3000)}`)].join("\n");
  const parts = splitSections(long, 40_000);
  assert.ok(parts.length >= 2 && parts.every((p) => p.length <= 40_000));
  assert.equal(parts.join("\n").replace(/\s+/g, " ").length, long.replace(/\s+/g, " ").length, "nothing is dropped");
  const u = (n: number) => ({ item: {} as any, key: `k${n}`, part: 0, text: "x".repeat(n) });
  assert.deepEqual(pack([u(30_000), u(5_000), u(10_000), u(1)], 40_000).map((c) => c.map((x) => x.text.length)), [[30_000, 5_000], [10_000, 1]]);
});

test("batch: one Haiku call for several pages, cleaned facts stored per page, reference pages declined", async () => {
  const m = mirror({ "bc/a.md": "---\ntitle: A\n---\n# A\nPosting groups.", "bc/b.md": "# B\nDimensions." });
  const items = [item("bc/a.md", m.blob("bc/a.md")), item("bc/b.md", m.blob("bc/b.md"))];
  const { llm, reqs } = fake((r) => ({ pages: keysOf(r.prompt).map((k) => page(k)) }));
  const h = docsExtractedHandler(llm) as any;
  assert.equal(h.accepts(item("bc/r.md", "x", { meta: { ms_topic: "reference" } })), false);
  const out = await run(h, items, { mirrorsDir: m.mirrorsDir, dataDir: join(m.root, "data") });
  assert.equal(reqs.length, 1);
  assert.deepEqual([reqs[0].role, reqs[0].stage], ["facts", "extract-docs"]);
  assert.ok(reqs[0].prompt.includes("Posting groups.") && !reqs[0].prompt.includes("title: A"));
  const saved = JSON.parse(readFileSync(docExtractionPath(join(m.root, "data"), items[0]), "utf8"));
  assert.deepEqual([saved.summary, saved.systems, saved.topics, saved.llm[0].pages_in_call, saved.llm[0].cost_usd], ["Summary p0 - done.", ["finance"], ["posting"], 2, 0.01]);
  assert.match(out.get(items[1].id).output_hash, /^[0-9a-f]{64}$/);
});

test("batch: a page the model skipped fails alone; spend cap stops the run unchanged", async () => {
  const m = mirror({ "bc/a.md": "# A\none", "bc/b.md": "# B\ntwo" });
  const items = [item("bc/a.md", m.blob("bc/a.md")), item("bc/b.md", m.blob("bc/b.md")), item("bc/c.md", "0".repeat(40))];
  const { llm } = fake((r) => ({ pages: keysOf(r.prompt).slice(0, 1).map((k) => page(k)) }));
  const out = await run(docsExtractedHandler(llm), items, { mirrorsDir: m.mirrorsDir, dataDir: join(m.root, "data") });
  assert.ok(!(out.get(items[0].id) instanceof Error));
  assert.match(out.get(items[1].id).message, /returned 0 of 1/);
  assert.ok(out.get(items[2].id) instanceof Error, "an unreadable blob fails that page only");
  const capped: Llm = async () => { throw new LlmBudgetExhausted(10, 10); };
  await assert.rejects(run(docsExtractedHandler(capped), items.slice(0, 1), { mirrorsDir: m.mirrorsDir, dataDir: join(m.root, "data") }), LlmBudgetExhausted);
});
