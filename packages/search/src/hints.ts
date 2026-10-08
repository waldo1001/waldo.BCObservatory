/**
 * Did-you-mean hints (D86 2.1), deterministic rules, at most three suggestions each:
 *   1. an unknown abbreviation in front of digits: the abbreviations one letter away whose object exists ("cx 80" -> cu 80);
 *   2. a reference to an id that does not exist: the nearest ids of that type;
 *   3. a word met only through a typo: the word it met and how many pages carry it;
 *   4. a question: where what-changed and how-to answers live, with the best hub;
 *   5. a country reference the country has no object of its own for: the W1 object applies.
 */
import { editDistance } from "./normalize.js";
import { TYPE_WORDS } from "./parse.js";
import { idsOf, namedBy, objectsAt, typoWords } from "./score.js";
import { ABBR } from "./synonyms.js";
import type { Hint, Hit, Index, ParsedQuery, SearchRecord } from "./types.js";

export function hints(index: Index, q: ParsedQuery, hits: Hit[]): Hint[] {
  const out: Hint[] = [];
  // 1. unknown abbreviation
  const unknown = q.warnings.map((w) => /^unknown abbreviation (\w+)$/.exec(w)?.[1]).find(Boolean);
  const digits = /(\d+)\s*$/.exec(q.raw)?.[1];
  if (unknown && digits) {
    const seen = new Set<string>();
    // abbreviations and singular type words one edit away; the same first letter, then the same length, first
    const words = [...Object.entries(ABBR), ...Object.entries(TYPE_WORDS).filter(([w, t]) => w === t)];
    const cands = words.map(([w, type]) => ({ w, type, e: editDistance(unknown, w, 1) }))
      .filter((c) => c.e <= 1)
      .map((c) => ({ ...c, d: c.e + (c.w[0] === unknown[0] ? 0 : 0.5) + (c.w.length === unknown.length ? 0 : 0.25) }))
      .sort((a, b) => a.d - b.d || a.w.length - b.w.length || a.w.localeCompare(b.w));
    for (const c of cands) {
      if (seen.has(c.type) || out.length >= 3) continue;
      if (!objectsAt(index, c.type, Number(digits)).length) continue;
      seen.add(c.type);
      out.push({ text: `Did you mean "${c.w} ${digits}" (${c.type} ${digits})?`, query: `${c.w} ${digits}` });
    }
  }
  // 2. and 5. references
  if (q.ref) {
    const there = objectsAt(index, q.ref.type, q.ref.id);
    if (!there.length) {
      const ids = idsOf(index, q.ref.type).sort((a, b) => Math.abs(a - q.ref!.id) - Math.abs(b - q.ref!.id) || a - b).slice(0, 3).sort((a, b) => a - b);
      out.push({ text: `No ${q.ref.type} ${q.ref.id}.${ids.length ? ` Nearest ids: ${ids.map((i) => `${q.ref!.type} ${i}`).join(", ")}.` : ""}`, ...(ids.length ? { query: `${q.ref.type} ${ids[0]}` } : {}) });
    } else if (q.ref.country && !there.some((r) => r.country === q.ref!.country) && there.some((r) => !r.country)) {
      const w1 = there.find((r) => !r.country)!;
      out.push({ text: `${q.ref.country.toUpperCase()} has no ${q.ref.type} ${q.ref.id} of its own; the W1 ${q.ref.type} applies.`, path: w1.id });
    }
  }
  // 3. typos
  for (const t of typoWords(index, q)) {
    // how many pages carry the word (symbols are not pages)
    const pagesWith = (w: string) => (index.postings.get(w) ?? []).reduce((n, i) => n + (index.records[i].kind === "page" ? 1 : 0), 0);
    const words = t.words.map((w) => ({ w, n: pagesWith(w) })).sort((a, b) => b.n - a.n).slice(0, 3);
    const swap = (w: string) => q.raw.replace(new RegExp(t.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), w);
    out.push({ text: `${t.term}: no page; ${words.map((x) => `${x.w} (${x.n.toLocaleString("en")} ${x.n === 1 ? "page" : "pages"})`).join(", ")}`, query: swap(words[0].w) });
  }
  // 4. a question
  if (q.question) {
    let hub: SearchRecord | null = null, best = 0;
    for (const i of index.byType.get("topic") ?? []) {
      const r = index.records[i], named = namedBy(index, r, q);
      if (!named) continue;
      const s = 3 * named + Math.log2((r.members ?? 0) + 1) + (r.narrative === "reviewed" ? 2 : r.narrative === "none" ? -2 : 0);
      if (s > best) { best = s; hub = r; }
    }
    out.push({ text: `For what changed, open the object's Versions section or Changes; for how-to, start with the hub${hub ? `: ${hub.title}` : ""}.`, ...(hub ? { path: hub.id } : {}) });
  }
  void hits;
  return out;
}
