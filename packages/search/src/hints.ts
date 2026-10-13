/**
 * Did-you-mean hints (D86 2.1), deterministic rules, at most three suggestions each:
 *   1. an unknown abbreviation in front of digits: the abbreviations one letter away whose object exists ("cx 80" -> cu 80);
 *   2. a reference to an id that does not exist: the nearest ids of that type;
 *   3. a word met only through a typo: the word it met and how many pages carry it;
 *   4. a question: where what-changed and how-to answers live, with the best hub; a how-to or concept question names the
 *      hub of the first Learn hit, else the best hub by the words that were not dropped (D95);
 *   5. a country reference the country has no object of its own for: the W1 object applies;
 *   6. a `kind:` query (field:, event:, proc:, value:, or the caller's kind parameter) with no hit: no such symbol and
 *      the nearest names, or, when the same query without the caller's filters has hits, that the filters removed them (D95).
 */
import { editDistance } from "./normalize.js";
import { TYPE_WORDS } from "./parse.js";
import { idsOf, namedBy, objectsAt, typoWords } from "./score.js";
import { ABBR } from "./synonyms.js";
import type { Hint, Hit, Index, ParsedQuery, SearchRecord, SymbolKind } from "./types.js";

/** What only a caller that filters knows (the MCP's filters, its kind parameter); the site passes none of it. */
export interface HintOptions {
  /** the symbol kind the caller asks for when the query names none (the MCP's `kind` parameter) */
  kind?: SymbolKind | null;
  /** the hits of the same query before the caller's filters, of the asked kind; `hits` is then the filtered list */
  unfiltered?: Hit[];
  /** the caller's filters, to say so ("object_type=codeunit") */
  filters?: string;
  /** the caller's filters as a predicate: the nearest names respect it */
  keep?: (r: SearchRecord) => boolean;
}

export function hints(index: Index, q: ParsedQuery, hits: Hit[], opts: HintOptions = {}): Hint[] {
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
  // 6. a symbol that does not exist: say so, name the nearest (it is the answer of a hit-less kind: query, so it comes first).
  // Existence is what the search found without the caller's filters: with filters that removed every hit, the filters are
  // the answer, never an absence
  const kind = q.kind ?? opts.kind ?? null;
  if (kind && !hits.length) {
    const name = nameOf(q);
    if (opts.unfiltered?.length) {
      const n = opts.unfiltered.length;
      out.unshift({ text: `No ${KIND_WORD[kind]} named "${name}" matches the filters${opts.filters ? ` (${opts.filters})` : ""}; without them: ${n} ${n === 1 ? "hit" : "hits"}.` });
    } else {
      const h = nearestSymbols(index, kind, name, opts.keep);
      if (h) out.unshift(h);
    }
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

/**
 * The name a `kind:` query looks up as typed: its words and quoted phrases, without the type, country or version words;
 * the text after the prefix when no term is left (a one-letter name is no term).
 */
function nameOf(q: ParsedQuery): string {
  const typed = q.terms.map((t) => t.raw || t.text).join(" ").replace(/"/g, "").trim();
  return typed || (q.kind ? q.raw.replace(/^\s*\w+\s*:\s*/, "").replace(/"/g, "").trim() : "");
}

/**
 * `No event named "X". Nearest events: A (owner), B (owner).`: the symbols of the kind that the name is a typo of (one edit
 * up to seven letters, two from eight; a shorter name has none) or that start with its first five letters and share three
 * quarters of it, by distance, then the owner's importance, three at most; only those the caller's filters keep. Nothing
 * when the index holds no symbols of the kind yet (a lazily loaded shard), or when the name exists (the hits were only
 * filtered away).
 */
function nearestSymbols(index: Index, kind: SymbolKind, name: string, keep?: (r: SearchRecord) => boolean): Hint | null {
  const all = index.byType.get(kind) ?? [];
  const want = name.toLowerCase();
  if (!all.length || !want) return null;
  const word = KIND_WORD[kind], head1 = `No ${word} named "${name}".`;
  const near: { r: SearchRecord; d: number }[] = [];
  // a name of one to three letters is near everything: no list
  if (want.length >= 4) {
    const head = want.slice(0, 5), shared = Math.ceil(0.75 * want.length), reach = Math.min(2, Math.max(1, Math.floor(want.length / 4)));
    for (const i of all) {
      const r = index.records[i], n = r.name.toLowerCase();
      if (n === want) return null;
      if (keep && !keep(r)) continue;
      let ok = editDistance(want, n, reach) <= reach;
      if (!ok && n.startsWith(head)) { let k = 0; while (k < n.length && k < want.length && n[k] === want[k]) k++; ok = k >= shared; }
      if (ok) near.push({ r, d: editDistance(want, n, 60) });
    }
  } else if (all.some((i) => index.records[i].name.toLowerCase() === want)) return null;
  near.sort((a, b) => a.d - b.d || b.r.importance - a.r.importance || a.r.name.localeCompare(b.r.name) || a.r.id.localeCompare(b.r.id));
  const seen = new Set<string>(), pick: SearchRecord[] = [];
  for (const { r } of near) { if (pick.length >= 3) break; if (seen.has(r.id)) continue; seen.add(r.id); pick.push(r); }
  if (!pick.length) return { text: head1 };
  const plural = word === "procedure" ? "procedures" : `${word}s`;
  const label = (r: SearchRecord) => (r.owner ? `${r.name} (${r.owner.title})` : r.name);
  const qk = kind === "proc" ? "proc" : kind;
  return { text: `${head1} Nearest ${plural}: ${pick.map(label).join(", ")}.`, query: `${qk}: ${pick[0].name}` };
}
