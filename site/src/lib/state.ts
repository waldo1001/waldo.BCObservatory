/** Build-time view of the pipeline state: newest run report and item counts per pillar from data/manifest. */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const DATA = resolve(process.cwd(), "..", "data");
const MANIFEST = join(DATA, "manifest");

export interface RunSummary { date: string; status: string; items_changed: number; guard: { decision: string; status: string }; plan: { work: number } }

export function latestRun(): RunSummary | null {
  const dir = join(MANIFEST, "_runs");
  if (!existsSync(dir)) return null;
  const files = readdirSync(dir).filter((f) => f.endsWith(".json")).sort();
  return files.length ? (JSON.parse(readFileSync(join(dir, files[files.length - 1]), "utf8")) as RunSummary) : null;
}

/** The videos and posts of the week (data/graph/landed.json, D66): the header's "new this week" pill (D70). */
export function landed(): { anchor: string | null; count: number } {
  const p = join(DATA, "graph", "landed.json");
  if (!existsSync(p)) return { anchor: null, count: 0 };
  const j = JSON.parse(readFileSync(p, "utf8")) as { anchor?: string | null; items?: unknown[] };
  return { anchor: j.anchor ?? null, count: j.items?.length ?? 0 };
}

function countJson(dir: string): number {
  let n = 0;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) n += countJson(p);
    else if (name.endsWith(".json")) n++;
  }
  return n;
}

export function pillarCounts(): { pillar: string; items: number }[] {
  if (!existsSync(MANIFEST)) return [];
  return readdirSync(MANIFEST)
    .filter((d) => !d.startsWith("_") && d !== "hubs" && statSync(join(MANIFEST, d)).isDirectory())
    .map((pillar) => ({ pillar, items: countJson(join(MANIFEST, pillar)) }))
    .sort((a, b) => b.items - a.items);
}
