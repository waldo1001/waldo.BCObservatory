/**
 * The D86 golden set (tests/fixtures/search-golden.json) and its checks, shared by the site scorer's run
 * (search-golden.test.ts) and the MCP's (mcp-golden.test.ts). Both run over an index rendered from the committed
 * content/ and data/code/ into a temporary directory: data/index/ on main is rewritten by the nightly and lags a
 * change of the record shape by a night.
 */
import { mkdtempSync, readFileSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { mkdirSync } from "node:fs";
import { ROOT } from "../../pipeline/lib/paths.js";
import { renderSearchIndex } from "../../pipeline/render/search.js";

export interface GoldenRow {
  q: string; expect?: string; where: string | string[]; covers: string; pending?: string;
  not_above?: string[]; major?: string; kind?: string; name?: string; within?: { id: string; n: number }; hint?: string; hint_path?: string;
}
/** One result as both runners see it. */
export interface GoldenHit { id: string; symbol: boolean; object: boolean; name?: string; kind?: string; majorOk?: boolean }

export const goldenRows = (): GoldenRow[] => JSON.parse(readFileSync(join(ROOT, "tests/fixtures/search-golden.json"), "utf8")).rows;

/** The symbols index lands in phase C; until then its rows stay pending. */
export async function symbolsRenderer(): Promise<((contentDir: string, dataDir: string) => unknown) | null> {
  try { return (await import("../../pipeline/render/symbols-index.js" as string)).renderSymbolsIndex; } catch { return null; }
}

/** A checkout-shaped root: content/ and data/code/ linked to the repository, data/index/ rendered fresh. */
export async function goldenRoot(): Promise<{ root: string; symbols: boolean }> {
  const root = mkdtempSync(join(tmpdir(), "bcobs-golden-"));
  mkdirSync(join(root, "data"), { recursive: true });
  symlinkSync(join(ROOT, "content"), join(root, "content"));
  symlinkSync(join(ROOT, "data", "code"), join(root, "data", "code"));
  renderSearchIndex(join(ROOT, "content"), join(root, "data"));
  const sym = await symbolsRenderer();
  if (sym) sym(join(ROOT, "content"), join(root, "data"));
  return { root, symbols: !!sym };
}

/** null when the row holds, else what went wrong. */
export function checkRow(row: GoldenRow, hits: GoldenHit[], hints: { text: string; path?: string }[]): string | null {
  const wheres = Array.isArray(row.where) ? row.where : [row.where];
  const at = (pred: (h: GoldenHit) => boolean) => hits.findIndex(pred);
  const show = (n = 5) => hits.slice(0, n).map((h) => h.id).join(", ");
  for (const w of wheres) {
    if (w === "top" && row.expect && hits[0]?.id !== row.expect) return `top is ${hits[0]?.id ?? "nothing"}, want ${row.expect} (${show()})`;
    if (w === "top3" && row.expect && !hits.slice(0, 3).some((h) => h.id === row.expect)) return `${row.expect} not in the top 3 (${show(3)})`;
    if (w === "first-object") {
      const i = at((h) => h.object);
      if (i < 0 || hits[i].id !== row.expect) return `first object is ${hits[i]?.id ?? "none"}, want ${row.expect} (${show()})`;
      for (const bad of row.not_above ?? []) if (hits.slice(0, i).some((h) => h.id.includes(bad))) return `a path with ${bad} ranks above ${row.expect}`;
    }
    if (w === "first-symbol") {
      const syms = hits.filter((h) => h.symbol);
      if (!syms.length) return "no symbol hit";
      if (row.expect && syms[0].id !== row.expect) return `first symbol is ${syms[0].id}, want ${row.expect}`;
      if (row.name && syms[0].name !== row.name) return `first symbol is named ${syms[0].name}, want ${row.name}`;
      if (row.kind && syms[0].kind !== row.kind) return `first symbol is a ${syms[0].kind}, want a ${row.kind}`;
      if (row.within && !syms.slice(0, row.within.n).some((h) => h.id === row.within!.id)) return `${row.within.id} not among the first ${row.within.n} symbols (${syms.slice(0, row.within.n).map((h) => h.id).join(", ")})`;
    }
    if (w === "none" && hits.length) return `want no hits, got ${show(3)}`;
  }
  if (row.major && !hits[0]?.majorOk) return `the first hit (${hits[0]?.id}) is not present in BC${row.major}`;
  if (row.hint && !hints.some((h) => new RegExp(row.hint!, "i").test(h.text))) return `no hint matches /${row.hint}/i (${hints.map((h) => h.text).join(" | ") || "no hints"})`;
  if (row.hint_path && !hints.some((h) => h.path === row.hint_path)) return `no hint links ${row.hint_path}`;
  return null;
}
