/**
 * A page's review block (D77): what kind of text the page holds decides the state, not the renderer.
 *
 * No model-written text on the page (facts from code, Learn, the roadmap or sources.yaml placed by deterministic code):
 * `derived`, with `by` and `at` null; Opus never read it and never needs to. Model text: the stored review when there
 * is one (`reviewed` or `flagged`), else `unreviewed`. Pure; every renderer calls it instead of writing the literal.
 */
export type ReviewState = "derived" | "unreviewed" | "reviewed" | "flagged";
export interface Review { state: ReviewState; by: string | null; at: string | null; flags: string[] }
/** A stored review as the manifest item or a review record carries it; any field may be missing. */
export interface StoredReview { state?: ReviewState | string | null; by?: string | null; at?: string | null; flags?: string[] | null }

export function reviewOf(modelText: boolean, review?: StoredReview | null): Review {
  if (!modelText) return { state: "derived", by: null, at: null, flags: [] };
  const state = review?.state;
  if (state === "reviewed" || state === "flagged" || state === "unreviewed") return { state, by: review?.by ?? null, at: review?.at ?? null, flags: [...(review?.flags ?? [])] };
  return { state: "unreviewed", by: null, at: null, flags: [...(review?.flags ?? [])] };
}

/** The words a page body uses for its state, next to the tier: the badge texts (Badges.astro), unreviewed and flagged bold. */
export function reviewWords(state: ReviewState): string {
  switch (state) {
    case "reviewed": return "reviewed (checked by Opus)";
    case "flagged": return "**flagged** (a review found a problem)";
    case "derived": return "derived (from the source, no model text)";
    default: return "**unreviewed** (model text not yet checked)";
  }
}
