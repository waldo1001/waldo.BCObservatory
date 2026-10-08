import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { KIND_OF, hasMajor, hints, pageToRecord, parseQuery, prepare, search, symbolRecords, type Index, type SearchRecord, type SymbolShard } from "@bc-observatory/search";
import { loadConfig } from "../../pipeline/lib/config.js";
import { checkRow, goldenRoot, goldenRows, type GoldenHit } from "../helpers/search-golden.js";

/** The site's index in node: every page shard, then the symbol shards under their owners. */
function load(dataDir: string): { index: Index; symbols: boolean } {
  const dir = join(dataDir, "index");
  const man = JSON.parse(readFileSync(join(dir, "index-manifest.json"), "utf8")) as { shards: { file: string }[] };
  const pages: SearchRecord[] = man.shards.flatMap((s) => (JSON.parse(readFileSync(join(dir, s.file), "utf8")) as any[]).map(pageToRecord));
  const index = prepare(pages);
  const sp = join(dir, "symbols-manifest.json");
  if (!existsSync(sp)) return { index, symbols: false };
  const sm = JSON.parse(readFileSync(sp, "utf8")) as { kinds: Record<SymbolShard, { file?: string; files?: string[] }> };
  const byPath = new Map(pages.map((r) => [r.id, r]));
  for (const [k, v] of Object.entries(sm.kinds) as [SymbolShard, { file?: string; files?: string[] }][]) {
    for (const f of v.files ?? [v.file!]) prepare(symbolRecords(KIND_OF[k], JSON.parse(readFileSync(join(dir, f), "utf8")).rows, (pk) => byPath.get(`objects/${pk}`)), index);
  }
  return { index, symbols: true };
}

test("the golden queries on the site scorer, with timings (D86 5, test 2)", async () => {
  const { root } = await goldenRoot();
  const t0 = Date.now();
  const { index, symbols } = load(join(root, "data"));
  const prep = Date.now() - t0;
  const countries = loadConfig<{ known: string[] }>("countries").known;
  const failures: string[] = [], times: number[] = [];
  for (const row of goldenRows()) {
    if (row.pending && !symbols) { console.log(`pending (${row.pending}): ${row.q}`); continue; }
    const q = parseQuery(row.q, { countries });
    const t = performance.now();
    const hits = search(index, q);
    times.push(performance.now() - t);
    const list: GoldenHit[] = hits.map((h) => ({ id: h.r.id, symbol: h.r.kind !== "page", object: h.r.kind === "page" && h.r.type === "object", name: h.r.name, kind: h.r.kind, majorOk: row.major ? hasMajor(h.r, row.major) : undefined }));
    const err = checkRow(row, list, hints(index, q, hits));
    if (err) failures.push(`${row.q}: ${err}`);
  }
  const sorted = [...times].sort((a, b) => a - b);
  console.log(`prepare ${prep} ms for ${index.records.length} records; search median ${sorted[sorted.length >> 1].toFixed(1)} ms, max ${sorted.at(-1)!.toFixed(1)} ms over ${times.length} queries`);
  assert.deepEqual(failures, []);
  assert.ok(sorted.at(-1)! < 150, `max ${sorted.at(-1)} ms: the CI tripwire is 150 ms`);
});
