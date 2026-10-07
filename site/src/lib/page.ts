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

// the source stage helpers (D60) live apart so tests can import them without the taxonomy read above
export { hms, readingMinutes, trimMeta } from "./stage";

// evidence chips moved to ./evidence (D64); re-exported for the pages that import them from here
export { evidenceMeta, evidenceTitle, type Evidence } from "./evidence";




/** Claude opens with a prompt that points at the page's markdown twin. */
export function openInClaude(title: string, markdownUrl: string): string {
  const q = `Read ${markdownUrl} (BC Observatory, ${title}) and help me with it. Cite the evidence it lists.`;
  return `https://claude.ai/new?q=${encodeURIComponent(q)}`;
}
