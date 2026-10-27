/**
 * D124: the pure half of "Ask your agent" (ask-agent.ts), the empty-search hint and the header pill. Tested in
 * tests/unit/ask-agent.test.ts. Prompts never name a BC version: they go stale at every wave, and the server knows
 * which versions it has.
 */
export type AskKind = "object" | "object-no-events" | "feature" | "change";

/** Object types under content/objects/ that publish no events of their own. */
const NO_EVENTS = new Set(["enum", "enumextension", "interface", "controladdin", "dotnet", "permissionset", "permissionsetextension", "profile", "entitlement", "pagecustomization"]);
const WITH_EVENTS = new Set(["codeunit", "page", "pageextension", "query", "report", "reportextension", "table", "tableextension", "xmlport"]);

/** From the page's .type-label text; null for every kind that gets no prompts. */
export function askKind(typeLabel: string): AskKind | null {
  const t = typeLabel.trim().toLowerCase();
  if (WITH_EVENTS.has(t)) return "object";
  if (NO_EVENTS.has(t)) return "object-no-events";
  if (t === "roadmap feature") return "feature";
  if (t.startsWith("code change")) return "change";
  return null;
}

const USE = "Use BC Observatory.";

export function askPrompts(kind: AskKind, title: string): [string, string] {
  switch (kind) {
    case "object": return [`What changed in ${title} between the last Business Central versions? ${USE}`, `Which events does ${title} publish, and who subscribes to them? ${USE}`];
    case "object-no-events": return [`What changed in ${title} between the last Business Central versions? ${USE}`, `Where is ${title} used in the base application? ${USE}`];
    case "feature": return [`What is the status of the Business Central roadmap feature "${title}", and what do Learn and the community say about it? ${USE}`, `Which AL objects does "${title}" touch? ${USE}`];
    case "change": return [`Explain the Business Central code change "${title}" and what it means for my extensions. ${USE}`, `Which other changes touched the same objects as "${title}"? ${USE}`];
  }
}

export const PILL_KEY = "bcobs-agent-pill";
export const PILL_DAYS = 90;

/** The header pill shows unless it was dismissed less than 90 days ago; an unreadable value shows it. */
export function pillVisible(stored: string | null, now: number): boolean {
  const at = Number(stored);
  if (stored === null || !Number.isFinite(at) || stored.trim() === "") return true;
  return now - at >= PILL_DAYS * 864e5;
}

export const installHref = (base: string) => `${base}mcp/#install`;

export function emptySearchHint(base: string): { text: string; href: string } {
  return { text: "Your agent can search this too, with every field and event:", href: installHref(base) };
}
