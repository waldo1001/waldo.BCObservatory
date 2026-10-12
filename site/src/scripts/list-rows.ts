/**
 * D91: the rows of the changes, videos and posts lists, from the media records of the search index (D86). Pure: the
 * pages render their 50 static rows, the title list and the pill counts with it at build, and media-list.ts renders
 * every row after "Show more" or a filter with it in the browser, so both are the same markup from the same records.
 * Links are relative to the list page ("al-go/2229/" on /changes/).
 */
import type { PageRecord } from "@bc-observatory/search";
import { badgesHtml, esc } from "../lib/badges.js";
import type { Facet, Switch } from "./facets-core.js";
import { CHANGE_REPOS } from "./pills-core.js";

export type MediaType = "change" | "video" | "post";
export const LIST_STATIC = 50;
export const LIST_STEP = 100;
export { esc };

const fmt = (n: number) => n.toLocaleString("en");
const cmp = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0);
const lastSegment = (path: string) => path.slice(path.lastIndexOf("/") + 1);
/** listPoster of lib/stage.ts (D60 phase 2), repeated here so video and post pages keep stage.ts inside their own chunk
 *  instead of sharing it with this module (one more request on 1,217 pages); a unit test keeps the two equal. */
const posterUrl = (videoId: string) => `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/mqdefault.jpg`;

/** Date (the record's day) newest first; for changes the PR number (the path's last segment) highest first; then the path. */
export function listOrder(a: PageRecord, b: PageRecord): number {
  return cmp(b.date ?? "", a.date ?? "")
    || (a.type === "change" && b.type === "change" ? (Number(lastSegment(b.path)) || 0) - (Number(lastSegment(a.path)) || 0) : 0)
    || cmp(a.path, b.path);
}

/** A row's link relative to its section index: "changes/al-go/2229" -> "al-go/2229/". */
export const relHref = (path: string): string => `${path.slice(path.indexOf("/") + 1)}/`;

const link = (r: PageRecord) => `<a href="${esc(relHref(r.path))}">${esc(r.title)}</a>`;

/** Today's change row, links relative, no data attributes. A record without the D91 fields prints what it has: no
 *  branch, major or object count. */
export function changeRow(r: PageRecord): string {
  const badges = (r.status ? `<span class="badge">${esc(r.status)}</span>` : "") + (r.breaking ? `<span class="badge obsolete">breaking</span>` : "")
    + (r.community ? `<span class="badge">community contribution</span>` : "");
  const meta = [r.branch, r.major ? `BC${r.major}` : "", r.date, r.objects === undefined ? "" : `${fmt(r.objects)} ${r.objects === 1 ? "object" : "objects"}`].filter(Boolean).join(" · ");
  return `<li>${link(r)}<span class="row-meta">${badges}</span><div class="meta">${esc(meta)}</div><div>${esc(r.summary ?? "")}</div></li>`;
}

/** Today's video row: the poster (YouTube's still, D60) unless the author opted out (`embed: false`), tier and review badges. */
export function videoRow(r: PageRecord): string {
  const href = esc(relHref(r.path));
  const poster = r.embed === false ? "" : `<a class="row-poster-link" href="${href}" tabindex="-1" aria-hidden="true"><img class="row-poster" src="${esc(posterUrl(lastSegment(r.path)))}" alt="" width="320" height="180" loading="lazy" decoding="async"></a>`;
  const meta = [r.path_label, r.date].filter(Boolean).join(" · ");
  return `<li${poster ? ` class="has-poster"` : ""}>${poster}<div class="row-body">${link(r)}<span class="row-meta">${badgesHtml(r.tier, r.review)}</span><div class="meta">${esc(meta)}</div><div>${esc(r.summary ?? "")}</div></div></li>`;
}

/** Today's post row: the blog's icon (one URL per blog, D60 phase 2), the title, the blog and the day. */
export function postRow(r: PageRecord, icon: string | null): string {
  const img = icon ? `<img class="row-icon" src="${esc(icon)}" alt="" width="16" height="16" loading="lazy" decoding="async" referrerpolicy="strict-origin-when-cross-origin" onerror="this.remove()">` : "";
  return `<li>${img}${link(r)} <span class="meta">${esc([r.path_label, r.date].filter(Boolean).join(" · "))}</span></li>`;
}

/** One line of the title list: <li><a href="<relHref>">title</a></li>. */
export const titleItem = (r: PageRecord): string => `<li>${link(r)}</li>`;

/** The bottom line before the reader acts: "Newest 50 of 1,083", or "All 12 shown" for a short list. */
export const staticStatus = (total: number): string => (total > LIST_STATIC ? `Newest ${LIST_STATIC} of ${fmt(total)}` : `All ${fmt(total)} shown`);

/** The bottom line and the button after: "Showing 150 of 1,083" with "Show 100 more" or "Show the last 33";
 *  "All 28 shown" with no button; "Nothing matches these filters." for 0. */
export function moreText(shown: number, total: number, step = LIST_STEP): { button: string | null; status: string } {
  if (!total) return { button: null, status: "Nothing matches these filters." };
  if (shown >= total) return { button: null, status: `All ${fmt(total)} shown` };
  const left = total - shown;
  return { button: left > step ? `Show ${step} more` : `Show the last ${fmt(left)}`, status: `Showing ${fmt(shown)} of ${fmt(total)}` };
}

/** The facets of each list and the changes switch. */
export const CHANGE_FACETS: Facet<PageRecord>[] = [
  { id: "repo", value: (r) => r.path.split("/")[1] ?? "" },
  { id: "kind", value: (r) => r.status ?? "" },
  { id: "major", value: (r) => r.major ?? "none" },
];
/** "breaking only": the flag or the kind (D80's rule). */
export const CHANGE_SWITCHES: Switch<PageRecord>[] = [{ id: "breaking", test: (r) => !!r.breaking || r.status === "breaking" }];
export const MEDIA_FACETS: Facet<PageRecord>[] = [
  { id: "source", value: (r) => r.source ?? "" },
  { id: "year", value: (r) => (r.date ?? "").slice(0, 4) || "none" },
];

type Value = { id: string; label: string; count: number };
/** Pill order, labels and counts for the build: repositories as CHANGE_REPOS, kinds A to Z, majors highest first then
 *  "none" ("BC30", "no major"), sources by count then label (label = path_label), years newest first. */
export function facetValues(rows: readonly PageRecord[], type: MediaType): Record<string, Value[]> {
  const out: Record<string, Value[]> = {};
  for (const f of type === "change" ? CHANGE_FACETS : MEDIA_FACETS) {
    const n = new Map<string, number>(), label = new Map<string, string>();
    for (const r of rows) { const v = f.value(r); n.set(v, (n.get(v) ?? 0) + 1); if (!label.has(v) && r.path_label) label.set(v, r.path_label); }
    const seen = [...n].map(([id, count]) => ({ id, label: id, count }));
    const none = (word: string) => (n.has("none") ? [{ id: "none", label: word, count: n.get("none")! }] : []);
    if (f.id === "repo") {
      // the three D61 repositories always (a repository with no change yet shows 0, D82), any other after them
      const known = new Set(CHANGE_REPOS.map(([id]) => id));
      out.repo = [...CHANGE_REPOS.map(([id, l]) => ({ id, label: l, count: n.get(id) ?? 0 })), ...seen.filter((v) => !known.has(v.id)).sort((a, b) => cmp(a.id, b.id))];
    } else if (f.id === "kind") out.kind = seen.sort((a, b) => cmp(a.id, b.id));
    else if (f.id === "major") out.major = [...seen.filter((v) => v.id !== "none").sort((a, b) => Number(b.id) - Number(a.id)).map((v) => ({ ...v, label: `BC${v.id}` })), ...none("no major")];
    else if (f.id === "source") out.source = seen.map((v) => ({ ...v, label: label.get(v.id) ?? v.id })).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "en"));
    else if (f.id === "year") out.year = [...seen.filter((v) => v.id !== "none").sort((a, b) => cmp(b.id, a.id)), ...none("no date")];
  }
  return out;
}
