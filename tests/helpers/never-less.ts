/**
 * The D106 never-less check (tests/fixtures/never-less.json), shared by the unit test and npm run check:never-less: for
 * one acceptance question, what the brief shows against what the Learn MCP returned and what the spec requires.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../../pipeline/lib/paths.js";

export interface NeverLessRow { id: string; query: string; must_reach: string[]; learn_urls: string[]; must: string[]; labels: Record<string, string>; must_not: string[]; status_conflict?: boolean; pending?: string }
export const neverLessRows = (): NeverLessRow[] => JSON.parse(readFileSync(join(ROOT, "tests/fixtures/never-less.json"), "utf8")).rows;

const reached = (brief: string, u: string) => brief.toLowerCase().includes(u.toLowerCase());

/** What is missing from a brief for this row; empty when it holds. The gate is must_reach (the Learn pages that answer the question), not everything Learn's search returned. Paths are matched as the brief prints them. */
export function neverLessProblems(row: NeverLessRow, brief: string): string[] {
  const out: string[] = [];
  for (const u of row.must_reach) if (!reached(brief, u)) out.push(`Learn ${u} not reachable`);
  for (const p of row.must) if (!brief.includes(p)) out.push(`${p} missing`);
  for (const [p, label] of Object.entries(row.labels)) {
    const line = brief.split("\n").find((l) => l.includes(p) && l.includes(label));
    if (!line) out.push(`${p} not labelled "${label}"`);
  }
  for (const p of row.must_not) {
    const heads = brief.split("## Heads up")[1]?.split("\n## ")[0] ?? "";
    if (heads.includes(p)) out.push(`${p} must not be a heads up here`);
  }
  if (row.status_conflict && !/## Status statements, side by side/.test(brief)) out.push("no status statements side by side");
  return out;
}

/** Coverage, not a gate: how many of the URLs Learn's search returned the brief reaches, and which it misses. */
export function learnCoverage(row: NeverLessRow, brief: string): { reached: number; of: number; missed: string[] } {
  const missed = row.learn_urls.filter((u) => !reached(brief, u));
  return { reached: row.learn_urls.length - missed.length, of: row.learn_urls.length, missed };
}
