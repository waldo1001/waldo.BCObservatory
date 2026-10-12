/** Tier, review and status badges (HANDOFF 4): the words of Badges.astro, and the same markup as a string for rows the
 *  browser renders (D91). Plain wording, review dashed while unreviewed, never red, never an icon. D77: derived = no model text. */

/** & < > " to entities: text and attribute values of rows built as strings. */
export const esc = (s: string): string => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const TIER_LABEL: Record<string, string> = { official: "official - Microsoft", community: "community - not Microsoft", mixed: "mixed - official and community" };
export const STATUS_LABEL: Record<string, string> = { ga: "generally available", preview: "in preview", announced: "announced - not shipped yet", unclear: "status unclear" };
// flagged = a review found a problem with this page (D64); like the other badges, plain words, never red, never an icon
// derived = the page holds no model text, only facts placed by deterministic code (D77): neutral, solid, never a warning
export const REVIEW_LABEL: Record<string, string> = { derived: "derived - from the source, no model text", reviewed: "reviewed - checked by Opus", flagged: "flagged - a review found a problem", unreviewed: "unreviewed - model text not yet checked" };

/** Exactly what Badges.astro renders for the same props. */
export function badgesHtml(tier?: string | null, review?: string | null, status?: string | null): string {
  return (tier ? `<span class="badge ${esc(tier)}">${esc(TIER_LABEL[tier] ?? tier)}</span>` : "")
    + (review ? `<span class="badge ${review in REVIEW_LABEL ? esc(review) : "unreviewed"}">${esc(REVIEW_LABEL[review] ?? REVIEW_LABEL.unreviewed)}</span>` : "")
    + (status ? `<span class="badge status-${status === "ga" || status === "preview" ? status : "other"}">${esc(STATUS_LABEL[status] ?? status)}</span>` : "");
}
