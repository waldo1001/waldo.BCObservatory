/** Helpers shared by the page templates: system lookup, body trimming, evidence display, Open in Claude. */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { objectSystem } from "../../../pipeline/lib/systems";

export { objectSystem };

const taxonomy = JSON.parse(readFileSync(resolve(process.cwd(), "..", "config", "taxonomy.json"), "utf8")) as { systems: { id: string; label: string }[] };
const LABELS = new Map<string, string>([...taxonomy.systems.map((s) => [s.id, s.label] as [string, string]), ["sources", "Sources"]]);

export const systemLabel = (id: string | null | undefined) => (id ? LABELS.get(id) ?? id : null);
export const systems = () => [...LABELS].map(([id, label]) => ({ id, label }));

/** The galaxy system of a page: its `system`, objects by namespace, localizations in their own system. */
export function pageSystem(fm: Record<string, any>): string | null {
  if (fm.type === "object") return objectSystem(fm.namespace);
  if (fm.type === "localization") return "localization";
  if (fm.type === "source") return "sources";
  return fm.system ?? fm.systems?.[0] ?? null;
}

/** The page header (title, summary) is drawn by the layout: drop the markdown's own h1 and summary quote. */
export function trimBody(html: string): string {
  let out = html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/, "");
  out = out.replace(/^\s*<blockquote>[\s\S]*?<\/blockquote>\s*/, "");
  return out;
}

export interface Evidence { kind: string; url: string; title: string; date: string | null; commit: string | null; t: number | null; quote: string | null }

const mmss = (t: number) => `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;

/** Right-aligned meta of an evidence chip: the date, `branch @ short commit`, or the video second. */
export function evidenceMeta(e: Evidence): string {
  if (e.t != null) return `at ${mmss(e.t)}`;
  if (e.commit) {
    const branch = /\(([^)]+)\)\s*$/.exec(e.title)?.[1];
    return `${branch ? `${branch} @ ` : ""}${e.commit.slice(0, 8)}`;
  }
  return e.date ? String(e.date).slice(0, 10) : "";
}

export const evidenceTitle = (e: Evidence) => (e.commit ? e.title.replace(/\s*\([^)]+\)\s*$/, "") : e.title);

/** Claude opens with a prompt that points at the page's markdown twin. */
export function openInClaude(title: string, markdownUrl: string): string {
  const q = `Read ${markdownUrl} (BC Observatory, ${title}) and help me with it. Cite the evidence it lists.`;
  return `https://claude.ai/new?q=${encodeURIComponent(q)}`;
}
