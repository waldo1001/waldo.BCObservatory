/**
 * Did-you-mean hints (D86 2.1), deterministic rules, at most three suggestions each:
 *   1. an unknown abbreviation in front of digits: the abbreviations one letter away whose object exists ("cx 80" -> cu 80);
 *   2. a reference to an id that does not exist: the nearest ids of that type;
 *   3. a word met only through a typo: the word it met and how many pages carry it;
 *   4. a question: where what-changed and how-to answers live, with the best hub; a how-to or concept question names the
 *      hub of the first Learn hit, else the best hub by the words that were not dropped (D95);
 *   5. a country reference the country has no object of its own for: the W1 object applies;
 *   6. a `kind:` query (field:, event:, proc:, value:) with no hit: no such symbol, and the nearest names (D95).
 */
import { editDistance } from "./normalize.js";
import { TYPE_WORDS } from "./parse.js";
import { idsOf, namedBy, objectsAt, typoWords } from "./score.js";
import { ABBR } from "./synonyms.js";
import type { Hint, Hit, Index, ParsedQuery, SearchRecord, SymbolKind } from "./types.js";

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
  // 4. a question: where the answer lives, and the hub to start from. A what-changed question keeps its text; a how-to or a
  // concept question names the hub of the best Learn article (D95), else the best hub by the words that were not dropped
  if (q.question) {
    const hubOf = (): SearchRecord | null => {
      let hub: SearchRecord | null = null, best = 0;
      for (const i of index.byType.get("topic") ?? []) {
        const r = index.records[i], named = namedBy(index, r, q);
        if (!named) continue;
        const s = 3 * named + Math.log2((r.members ?? 0) + 1) + (r.narrative === "reviewed" ? 2 : r.narrative === "none" ? -2 : 0);
        if (s > best) { best = s; hub = r; }
      }
      return hub;
    };
    if (q.shape === "what-changed" || !q.shape) {
      const hub = hubOf();
      out.push({ text: `For what changed, open the object's Versions section or Changes; for how-to, start with the hub${hub ? `: ${hub.title}` : ""}.`, ...(hub ? { path: hub.id } : {}) });
    } else {
      const hub = learnHub(index, hits) ?? hubOf();
      if (hub) out.push({ text: `For ${q.shape === "how-to" ? "how-to" : "a concept"}, start with the hub: ${hub.title}.`, path: hub.id });
    }
  }
  // 6. a symbol that does not exist: say so, name the nearest (it is the answer of a hit-less kind: query, so it comes first)
  if (q.kind && !hits.length) {
    const h = nearestSymbols(index, q.kind, q.raw);
    if (h) out.unshift(h);
  }
  return out;
}

/**
 * The hub the first Learn hit that has one is listed under, as its page record (null when the hub page is not in the
 * index). Only among the first ten hits: a Learn article at rank 30 is no answer to name a hub after.
 */
function learnHub(index: Index, hits: Hit[]): SearchRecord | null {
  for (const h of hits.slice(0, 10)) {
    const path = h.r.type === "learn" ? h.r.page?.hub : undefined;
    if (!path) continue;
    const hub = (index.byType.get("topic") ?? []).map((i) => index.records[i]).find((r) => r.id === path);
    if (hub) return hub;
  }
  return null;
}

const KIND_WORD = { field: "field", event: "event", proc: "procedure", value: "value" } as const;
const KIND_PREFIX = /^\s*(fields?|events?|procs?|procedures?|values?)\s*:\s*/i;

/**
 * `No event named "X". Nearest events: A (owner), B (owner).`: the symbols of the kind within two edits of the name, or
 * that start with its first five letters and share three quarters of it, by distance, then the owner's importance, three
 * at most. Nothing when the index holds no symbols of the kind yet (a lazily loaded shard), or when the name exists (the
 * hits were only filtered away).
 */
function nearestSymbols(index: Index, kind: SymbolKind, raw: string): Hint | null {
  const all = index.byType.get(kind) ?? [];
  const name = raw.replace(KIND_PREFIX, "").replace(/"/g, "").trim();
  const want = name.toLowerCase();
  if (!all.length || !want) return null;
  const head = want.slice(0, 5), shared = Math.ceil(0.75 * want.length);
  const near: { r: SearchRecord; d: number }[] = [];
  for (const i of all) {
    const r = index.records[i], n = r.name.toLowerCase();
    if (n === want) return null;
    let ok = editDistance(want, n, 2) <= 2;
    if (!ok && n.startsWith(head)) { let k = 0; while (k < n.length && k < want.length && n[k] === want[k]) k++; ok = k >= shared; }
    if (ok) near.push({ r, d: editDistance(want, n, 60) });
  }
  near.sort((a, b) => a.d - b.d || b.r.importance - a.r.importance || a.r.name.localeCompare(b.r.name) || a.r.id.localeCompare(b.r.id));
  const seen = new Set<string>(), pick: SearchRecord[] = [];
  for (const { r } of near) { if (pick.length >= 3) break; if (seen.has(r.id)) continue; seen.add(r.id); pick.push(r); }
  const word = KIND_WORD[kind], head1 = `No ${word} named "${name}".`;
  if (!pick.length) return { text: head1 };
  const plural = word === "procedure" ? "procedures" : `${word}s`;
  const label = (r: SearchRecord) => (r.owner ? `${r.name} (${r.owner.title})` : r.name);
  const qk = kind === "proc" ? "proc" : kind;
  return { text: `${head1} Nearest ${plural}: ${pick.map(label).join(", ")}.`, query: `${qk}: ${pick[0].name}` };
}
