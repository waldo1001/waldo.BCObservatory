/**
 * What an evidence chip shows (design/HANDOFF.md 4, D64), without the DOM: the kind tag, the text, the right-aligned
 * meta, and the attributes a later script hooks into. The chip is always a link to the source itself; a video with a
 * second links to that second (`&t=`), and carries data-kind and data-t, which the source stage (D60) delegates on.
 */
export interface Evidence { kind: string; url: string; title: string; date: string | null; commit: string | null; t: number | null; quote: string | null }

/** Kinds with their own colours. Anything else (a kind added later, such as D61's `change`) gets a neutral tag. */
export const KINDS = ["learn", "code", "video", "blog", "guideline", "roadmap"] as const;
const LABEL: Record<string, string> = { blog: "post" };

const mmss = (t: number) => `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;

/** Right-aligned meta: the video second, `branch @ short commit`, or the date. */
export function evidenceMeta(e: Evidence): string {
  if (e.t != null) return `at ${mmss(e.t)}`;
  if (e.commit) {
    const branch = /\(([^)]+)\)\s*$/.exec(e.title)?.[1];
    return `${branch ? `${branch} @ ` : ""}${e.commit.slice(0, 8)}`;
  }
  return e.date ? String(e.date).slice(0, 10) : "";
}
/** The title without the trailing "(branch)" that code evidence carries in its title. */
export const evidenceTitle = (e: Evidence) => (e.commit ? e.title.replace(/\s*\([^)]+\)\s*$/, "") : e.title);

export interface Chip { href: string; kind: string; cls: string; label: string; text: string; title: string; meta: string; mono: boolean; t: number | null }

/** One chip. A quote is the chip's text (several chips can quote the same video at different seconds). */
export function chipOf(e: Evidence): Chip {
  const known = (KINDS as readonly string[]).includes(e.kind);
  const title = evidenceTitle(e);
  // code evidence is a file path in mono, except a pull request, which reads as one (D61 change pages)
  const pr = e.kind === "code" ? /github\.com\/[^/]+\/[^/]+\/pull\/(\d+)/.exec(e.url)?.[1] : undefined;
  return {
    href: e.url,
    kind: e.kind,
    cls: known ? e.kind : "other",
    label: LABEL[e.kind] ?? e.kind,
    text: e.quote ? `"${e.quote}"` : title || (pr ? `pull request #${pr}` : e.url),
    title: e.quote ? title : "",
    meta: evidenceMeta(e),
    mono: e.kind === "code" && !pr && !e.quote,
    t: e.t ?? null,
  };
}
