/**
 * The scorer (D86 4.2): additive points per record, `why` collects the rules that fired. Every term must match
 * somewhere, through an exact word (1.0), a prefix of three letters or more (0.75), the stem (0.75), a synonym (0.8 of
 * the form it matched) or one typo (0.5, words of five letters or more that match nothing else). Scoring touches the
 * posting candidates only, never every record.
 */
import { editDistance, fold, indexTokens, stem, tokenize } from "./normalize.js";
import { anchorOf } from "./anchors.js";
import type { Hit, Index, PageRecord, ParsedQuery, SearchRecord, SymbolKind, Term } from "./types.js";

// ---------------------------------------------------------------------------------------------- records

/** An object's name, the part of its title in quotes: 'Table 11300 "VAT VIES Correction" (BE)' -> VAT VIES Correction. */
export const nameOf = (title: string) => /"(.*)"/.exec(title)?.[1] ?? title;

/** The layer of an object page: 0 base app, 1 first-party app, 2 country layer. Every other page is 0. */
export function layerOf(p: Pick<PageRecord, "type" | "app" | "country" | "path" | "object_id">): 0 | 1 | 2 {
  if (p.type !== "object") return 0;
  if (countryOf(p)) return 2;
  return !p.app || p.app === "Base Application" ? 0 : 1;
}
/** A country object's country, lowercase: the record's (D86), else the `-cc` of its path (records of before D86). */
export function countryOf(p: Pick<PageRecord, "type" | "country" | "path" | "object_id">): string | null {
  if (p.country) return String(p.country).toLowerCase();
  if (p.type === "object" && p.object_id != null) return /-([a-z]{2})$/.exec(p.path)?.[1] ?? null;
  return null;
}

export function pageToRecord(p: PageRecord): SearchRecord {
  const object = p.type === "object";
  const country = object ? countryOf(p) : p.country ? String(p.country).toLowerCase() : null;
  return {
    id: p.path, kind: "page", type: p.type, name: object ? (p.name ?? nameOf(p.title)) : p.title, title: p.title,
    ...(p.caption ? { caption: p.caption } : {}), text: p.summary ?? "", ...(p.tags?.length ? { tags: p.tags } : {}),
    ...(object ? { objectType: p.object_type, objectId: p.object_id ?? null, app: p.app ?? null, inbound: p.inbound ?? 0, subscribers: p.subscribers ?? 0 } : {}),
    country, layer: layerOf(p), importance: 0,
    system: p.system ?? null, date: p.date ?? null, ...(p.members !== undefined ? { members: p.members } : {}), ...(p.narrative ? { narrative: p.narrative } : {}),
    ...(p.present_in ? { major: p.present_in } : {}), tier: p.tier, page: p,
  };
}

/**
 * A symbol row of data/index/symbols-<kind>-*.json as a record, under its owner (the object's page record):
 *   fields [pk, name, id, type, tooltip], events [pk, name, kind, subscribers, doc, obsolete],
 *   procs [pk, name, paramCount, returnType, doc, obsolete], values [pk, name, ordinal, caption].
 */
export function symbolToRecord(kind: SymbolKind, row: unknown[], owner: SearchRecord): SearchRecord {
  const name = String(row[1]);
  const key = kind === "field" || kind === "value" ? Number(row[2]) : name;
  const base: SearchRecord = {
    id: `${owner.id}${anchorOf(kind, key)}`, kind, type: owner.type, name, title: name,
    objectType: owner.objectType, objectId: owner.objectId ?? null, country: owner.country ?? null, app: owner.app ?? null,
    layer: owner.layer, importance: owner.importance, inbound: owner.inbound ?? 0, system: owner.system ?? null, major: owner.major,
    tier: owner.tier, owner: { path: owner.id, title: owner.title },
  };
  if (kind === "field") return { ...base, text: (row[4] as string | null) ?? "", extra: { id: Number(row[2]), type: String(row[3]) } };
  if (kind === "event") return { ...base, text: (row[4] as string | null) ?? "", subscribers: Number(row[3]) || 0, extra: { kind: String(row[2]), subscribers: Number(row[3]) || 0, obsolete: (row[5] as string | null) ?? null } };
  if (kind === "proc") return { ...base, text: (row[4] as string | null) ?? "", extra: { params: Number(row[2]) || 0, returns: (row[3] as string | null) ?? null, obsolete: (row[5] as string | null) ?? null } };
  return { ...base, ...(row[3] ? { caption: String(row[3]) } : {}), text: "", extra: { ordinal: Number(row[2]), caption: (row[3] as string | null) ?? null } };
}

/** Whether a record's majors ("23-30", "28 29 30", "29") include a major. */
export function hasMajor(r: Pick<SearchRecord, "major">, major: string): boolean {
  if (!r.major) return false;
  const m = Number(major);
  return r.major.split(/[\s,]+/).some((part) => { const [a, b] = part.split("-").map(Number); return b === undefined || Number.isNaN(b) ? a === m : a <= m && m <= b; });
}

// ---------------------------------------------------------------------------------------------- the index

interface Norm {
  /** name, title and caption words (one field for scoring: a word counts 3 once) */
  main: string[];
  tags: string[];
  text: string[] | null;
  /** names a whole query can equal: an object's name and caption, a page's title, a symbol's name (words, no parts) */
  eqs: string[][];
}
interface State {
  norms: (Norm | undefined)[];
  stems: Map<string, Set<string>>;
  buckets: Map<string, string[]>;
  sorted: string[] | null;
  byObject: Map<string, number[]>;
  byId: Map<number, number[]>;
  byCountry: Map<string, number[]>;
  maxSubs: number;
  /** term match maps per query */
  matchers: WeakMap<ParsedQuery, Matcher[]>;
}
const STATE = new WeakMap<Index, State>();
const NORM = new WeakMap<SearchRecord, Norm>();

const push = <K, V>(m: Map<K, V[]>, k: K, v: V) => { const l = m.get(k); if (l) l.push(v); else m.set(k, [v]); };

function normOf(r: SearchRecord): Norm {
  const cached = NORM.get(r);
  if (cached) return cached;
  const symbol = r.kind !== "page";
  const main = new Set<string>([...indexTokens(r.name, symbol), ...indexTokens(r.title, symbol), ...(r.caption ? indexTokens(r.caption) : [])]);
  // a hub's tags are the titles above it in the Learn TOC: a word of its own title does not count again (D65)
  const own = r.type === "topic" ? new Set(tokenize(r.title)) : null;
  const tags = (r.tags ?? []).flatMap((t) => indexTokens(t)).filter((t) => !own?.has(t));
  const eqs = r.type === "object" || symbol ? [tokenize(r.name), ...(r.caption ? [tokenize(r.caption)] : [])] : [tokenize(r.title)];
  const n: Norm = { main: [...main], tags: [...new Set(tags)], text: symbol ? null : indexTokens(r.text ?? ""), eqs };
  NORM.set(r, n);
  return n;
}
const textOf = (r: SearchRecord, n: Norm) => (n.text ??= indexTokens(r.text ?? ""));

/**
 * Postings over name, title, caption, tags and, for pages, the summary; a symbol is findable by its name only (its
 * tooltip still scores). `prev` appends a lazily loaded shard to an index and returns it.
 */
export function prepare(records: SearchRecord[], prev?: Index): Index {
  const index: Index = prev ?? { records: [], postings: new Map(), vocab: new Map(), byType: new Map(), maxInbound: new Map() };
  let st = STATE.get(index);
  if (!st) { st = { norms: [], stems: new Map(), buckets: new Map(), sorted: null, byObject: new Map(), byId: new Map(), byCountry: new Map(), maxSubs: 0, matchers: new WeakMap() }; STATE.set(index, st); }
  for (const r of records) {
    const i = index.records.length;
    index.records.push(r);
    const n = normOf(r);
    st.norms[i] = n;
    const toks = new Set<string>([...n.main, ...n.tags, ...(n.text ?? [])]);
    for (const t of toks) {
      const df = index.vocab.get(t);
      if (df === undefined) {
        index.vocab.set(t, 1);
        const s = stem(t);
        (st.stems.get(s) ?? st.stems.set(s, new Set()).get(s)!).add(t);
        if (/^[a-z]{4,}$/.test(t)) push(st.buckets, `${t[0]}${t.length}`, t);
        st.sorted = null;
      } else index.vocab.set(t, df + 1);
      push(index.postings, t, i);
    }
    push(index.byType, r.kind === "page" ? r.type : r.kind, i);
    if (r.kind === "page" && r.type === "object" && r.objectType) {
      push(st.byObject, `${r.objectType}/${r.objectId ?? fold(r.name)}`, i);
      if (r.objectId != null) push(st.byId, r.objectId, i);
      index.maxInbound.set(r.objectType, Math.max(index.maxInbound.get(r.objectType) ?? 0, r.inbound ?? 0));
    }
    if (r.country && (r.kind === "page")) push(st.byCountry, r.country, i);
    if (r.kind === "event") st.maxSubs = Math.max(st.maxSubs, r.subscribers ?? 0);
  }
  // importance against the maxima as they stand now: a later shard can raise a type's maximum
  for (const r of index.records) r.importance = importance(index, r);
  st.matchers = new WeakMap();
  return index;
}

/** 0..1: log2(1 + inbound) / log2(1 + the highest inbound of the type); an event adds half its subscriber share, capped at 1. */
export function importance(index: Index, r: SearchRecord): number {
  if (!r.objectType) return 0;
  const max = index.maxInbound.get(r.objectType) ?? 0;
  let v = max > 0 ? Math.log2(1 + (r.inbound ?? 0)) / Math.log2(1 + max) : 0;
  if (r.kind === "event") {
    const ms = STATE.get(index)?.maxSubs ?? 0;
    if (ms > 0) v += 0.5 * Math.log2(1 + (r.subscribers ?? 0)) / Math.log2(1 + ms);
  }
  return Math.min(1, v);
}

// ---------------------------------------------------------------------------------------------- term matching

type How = "exact" | "prefix" | "stem" | "syn" | "fuzzy";
interface Form { f: number; how: How; via?: string }
interface Matcher {
  term: Term;
  /** single words: index word -> how well it matches */
  words: Map<string, Form>;
  /** phrases to find in a field: the term's own (a quoted phrase), and synonym or CamelCase phrases */
  phrases: { words: string[]; f: number; how: How; via?: string }[];
  /** the words whose postings hold every candidate */
  seeds: string[];
}

function sortedVocab(index: Index, st: State): string[] {
  return (st.sorted ??= [...index.vocab.keys()].sort());
}
function prefixed(sorted: string[], p: string): string[] {
  let lo = 0, hi = sorted.length;
  while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < p) lo = mid + 1; else hi = mid; }
  const out: string[] = [];
  for (let i = lo; i < sorted.length && sorted[i].startsWith(p); i++) out.push(sorted[i]);
  return out;
}
/** Index words one typo away (two from nine letters), bucketed by first letter and length +-2. */
export function fuzzyCandidates(index: Index, word: string): string[] {
  const st = STATE.get(index);
  if (!st || word.length < 5 || !/^[a-z]+$/.test(word)) return [];
  const max = word.length >= 9 ? 2 : 1, out: string[] = [];
  for (let len = word.length - 2; len <= word.length + 2; len++) for (const t of st.buckets.get(`${word[0]}${len}`) ?? []) if (editDistance(word, t, max) <= max) out.push(t);
  return out;
}

function matcherOf(index: Index, st: State, t: Term): Matcher {
  const words = new Map<string, Form>(), phrases: Matcher["phrases"] = [];
  const set = (w: string, f: Form) => { const o = words.get(w); if (!o || o.f < f.f) words.set(w, f); };
  const rarest = (ws: string[]) => {
    // the phrase word with the fewest records, by its exact and stemmed forms
    let best: string[] = [], n = Infinity;
    for (const w of ws) {
      const forms = [...new Set([w, ...(st.stems.get(stem(w)) ?? [])])].filter((x) => index.vocab.has(x));
      const c = forms.reduce((a, x) => a + (index.vocab.get(x) ?? 0), 0);
      if (c < n) { n = c; best = forms; }
    }
    return best;
  };
  const seeds: string[] = [];
  if (t.phrase) {
    phrases.push({ words: t.text.split(" "), f: 1, how: "exact" });
    seeds.push(...rarest(t.text.split(" ")));
  } else if (t.numeric) {
    if (index.vocab.has(t.text)) set(t.text, { f: 1, how: "exact" });
  } else {
    if (index.vocab.has(t.text)) set(t.text, { f: 1, how: "exact" });
    // the stem before the prefix: "customers" meets "customer" as a plural (a name may equal it), not as a prefix
    for (const w of st.stems.get(t.stem) ?? []) set(w, { f: 0.75, how: "stem" });
    if (t.text.length >= 3) for (const w of prefixed(sortedVocab(index, st), t.text)) set(w, { f: 0.75, how: "prefix" });
    if (!words.size) for (const w of fuzzyCandidates(index, t.text)) set(w, { f: 0.5, how: "fuzzy", via: w });
  }
  for (const alt of t.alts) {
    if (alt.includes(" ")) {
      const ws = alt.split(" ");
      const camel = t.text === ws.join("") || ws.join("") === t.text.replace(/[^a-z0-9]/g, "");
      phrases.push({ words: ws, f: camel ? 0.75 : 0.8, how: camel ? "prefix" : "syn", ...(camel ? {} : { via: alt }) });
      seeds.push(...rarest(ws));
    } else {
      if (index.vocab.has(alt)) set(alt, { f: 0.8, how: "syn", via: alt });
      for (const w of st.stems.get(stem(alt)) ?? []) set(w, { f: 0.6, how: "syn", via: alt });
    }
  }
  seeds.push(...words.keys());
  return { term: t, words, phrases, seeds: [...new Set(seeds)] };
}
function matchersOf(index: Index, q: ParsedQuery): Matcher[] {
  const st = STATE.get(index)!;
  let m = st.matchers.get(q);
  if (!m) { m = q.terms.map((t) => matcherOf(index, st, t)); st.matchers.set(q, m); }
  return m;
}

/** The best form a field gives a term (0 when it does not match), and through which word. */
function best(m: Matcher, toks: string[]): Form | null {
  let b: Form | null = null;
  for (const t of toks) { const f = m.words.get(t); if (f && (!b || f.f > b.f)) b = f; }
  for (const p of m.phrases) {
    if (b && b.f >= p.f) continue;
    const f = phraseForm(p.words, toks);
    if (f) { const v = p.f * f; if (!b || v > b.f) b = { f: v, how: p.how, ...(p.via ? { via: p.via } : {}) }; }
  }
  return b;
}
/** Words in a row: 1 when every word is exact, 0.75 when one only meets by its stem. */
function phraseForm(words: string[], toks: string[]): number {
  let bestF = 0;
  for (let i = 0; i + words.length <= toks.length; i++) {
    let f = 1;
    for (let j = 0; j < words.length && f; j++) { const t = toks[i + j], w = words[j]; f = t === w ? f : stem(t) === stem(w) ? Math.min(f, 0.75) : 0; }
    if (f > bestF) bestF = f;
    if (bestF === 1) break;
  }
  return bestF;
}

/**
 * How a name equals (or starts with) the query: each name word meets the next term in turn. Equality takes exact,
 * stem, synonym or typo forms; starts-with also a prefix on the last word.
 */
function nameMatch(eq: string[], ms: Matcher[], plural: boolean): { eq: number; starts: number } {
  let pos = 0, f = 1, lastPrefix = false;
  for (const m of ms) {
    const ws = m.term.phrase ? m.term.text.split(" ") : null;
    if (ws) {
      for (const w of ws) { const t = eq[pos++]; if (t === undefined) return { eq: 0, starts: 0 }; f = Math.min(f, t === w ? 1 : stem(t) === stem(w) ? (plural ? 1 : 0.75) : 0); }
      if (!f) return { eq: 0, starts: 0 };
      lastPrefix = false;
      continue;
    }
    const t = eq[pos++];
    if (t === undefined) return { eq: 0, starts: 0 };
    const form = m.words.get(t);
    if (!form) {
      // a synonym phrase that spells a name ("fa" -> "fixed asset")
      const p = m.phrases.find((x) => x.words.every((w, j) => eq[pos - 1 + j] === w));
      if (!p) return { eq: 0, starts: 0 };
      pos += p.words.length - 1; f = Math.min(f, p.f); lastPrefix = p.how === "prefix";
      continue;
    }
    // singular and plural are the same name of an object or symbol: "customers" equals Customer
    f = Math.min(f, form.how === "stem" && plural ? 1 : form.f);
    lastPrefix = form.how === "prefix";
  }
  // a page title equals the query only word for word; a plural of it starts with it
  if (pos === eq.length && !lastPrefix && (plural || f === 1)) return { eq: f, starts: 0 };
  return { eq: 0, starts: pos <= eq.length ? f : 0 };
}

// ---------------------------------------------------------------------------------------------- scoring

const NARRATIVE: Record<string, number> = { reviewed: 2, unreviewed: 0, none: -2, derived: -2 };
/** Tie-break among objects, last before the title: a table is asked for more often than a page, ... */
export const TYPE_PRIOR: Record<string, number> = { table: 0.3, page: 0.2, codeunit: 0.2, report: 0.1 };
const LAYER = [1, 0.5, 0];
/** Words that say the reader is after an AL object or a member of one: no demotion then. */
const OBJECT_WORDS = /\b(field|fields|event|events|procedure|procedures|proc|member|members)\b/i;

export function scoreRecord(index: Index, r: SearchRecord, q: ParsedQuery): { s: number; why: string[] } {
  const why: string[] = [];
  const object = r.kind === "page" && r.type === "object", symbol = r.kind !== "page", objectish = object || symbol;
  const none = { s: 0, why };
  if (q.kind && r.kind !== q.kind) return none;
  if (q.major && !hasMajor(r, q.major)) return none;
  if (q.types.length && objectish && !q.types.includes(r.objectType as never)) return none;
  const country = r.country ? r.country.toLowerCase() : null;
  // an object reference: the object, its country twins below it
  if (q.ref) {
    if (!object || r.objectType !== q.ref.type || r.objectId !== q.ref.id) return none;
    why.push("reference");
    if (q.ref.country) return { s: country === q.ref.country ? 1000 : country === null ? 900 : 850, why };
    return { s: country === null ? 1000 : 900, why };
  }
  const prior = object ? TYPE_PRIOR[r.objectType ?? ""] ?? 0 : 0;
  const lift = (base: number) => base + (object ? LAYER[r.layer] : symbol ? 0 : 1) + (objectish ? 2 * r.importance : 0) + prior;
  // a bare number: the objects carrying that id, across types
  if (q.number !== null) {
    if (!object || r.objectId !== q.number) return none;
    why.push("id");
    return { s: lift(8) + countryPoints(q, r, country), why };
  }
  // a country alone: its localization page, then its objects
  if (!q.terms.length) {
    if (!q.countries.length) return none;
    if (r.type === "localization" && country && q.countries.includes(country)) { why.push("name"); return { s: 20, why }; }
    if (object && country && q.countries.includes(country)) return { s: 3 + 2 * r.importance + prior, why };
    return none;
  }
  const n = normOf(r), ms = matchersOf(index, q);
  let s = 0, named = false, gate = !symbol || !!q.kind;
  for (const m of ms) {
    const main = best(m, n.main), tags = best(m, n.tags), text = best(m, textOf(r, n));
    if (!main && !tags && !text) return none;
    if (main || tags) named = true;
    // the gate reads the name's own words, not its CamelCase parts: "post" alone does not open 25k OnAfterPost... events
    if (symbol && !gate && n.eqs[0].some((t) => { const f = m.words.get(t); return f && (f.how === "exact" || f.how === "prefix"); })) gate = true;
    if (symbol && /^on[a-z]/.test(m.term.text)) gate = true;
    s += 3 * (main?.f ?? 0) + 2 * (tags?.f ?? 0) + (text?.f ?? 0);
    const via = [main, tags, text].find((x) => x?.via && (x.how === "syn" || x.how === "fuzzy"))?.via;
    if (via && !why.includes(`matched "${via}"`)) why.push(`matched "${via}"`);
  }
  if (!gate) return none;
  // the name equals the whole query (+10) or starts with it (+3), by the weakest form a word met
  let eq = 0, starts = 0, byName = false;
  n.eqs.forEach((e, k) => { const x = nameMatch(e, ms, objectish); if (x.eq > eq) { eq = x.eq; byName = k === 0; } starts = Math.max(starts, x.starts); });
  // "name" (the exact band) is the record's own name or title; a caption that equals the query scores the same, but
  // is no reason to pin it above a hub
  // through a synonym ("client" is Customer) it is still the name; through a typo it is a guess ("name~")
  if (eq) { s += 10 * eq; why.push(!byName ? "caption" : eq >= 0.75 ? "name" : "name~"); }
  else if (starts) { s += 3 * starts; why.push("starts"); }
  // a hub (or an app page) is a starting point in proportion to what hangs off it, when its title or TOC names the query
  if ((r.type === "topic" || r.type === "app") && !symbol && named) s += Math.log2((r.members ?? 0) + 1);
  // an app page has no narrative: it ranks as "none", as D77 ranks a derived hub
  if ((r.type === "topic" || r.type === "app") && !symbol) s += NARRATIVE[r.narrative ?? (r.type === "app" ? "none" : "unreviewed")] ?? 0;
  s += countryPoints(q, r, country);
  if (q.types.length && objectish) s += 3;
  s = lift(s);
  // 25k object pages and 120k symbols would drown a generic query: a digit, a type word, a member word or a kind lifts
  // the demotion; for an object page also its name (the name, not the caption: "subscription" is the caption of Table
  // 8057 "Subscription Header" and must not lift it over the Subscription billing hub); for a symbol an event-shaped
  // word ("OnAfterPostSalesDoc"), not its name (six enum values are named "Posting")
  const lifted = q.kind || q.types.length || /\d/.test(q.raw) || OBJECT_WORDS.test(q.raw)
    || (object && eq && byName) || (symbol && ms.some((m) => /^on[a-z]/.test(m.term.text) && m.term.alts.some((a) => a.startsWith("on "))));
  if (objectish && !lifted) { s *= 0.6; why.push("demoted"); }
  return { s, why };
}
function countryPoints(q: ParsedQuery, r: SearchRecord, country: string | null): number {
  if (!q.countries.length || !country) return 0;
  if (q.countries.includes(country)) return 3;
  return r.type === "object" ? -1 : 0;
}

/** Score, then date (newest), then members, then importance, then title. */
export const byRank = (a: Hit, b: Hit) => b.s - a.s || (b.r.date ?? "").localeCompare(a.r.date ?? "") || (b.r.members ?? 0) - (a.r.members ?? 0)
  || b.r.importance - a.r.importance || a.r.title.localeCompare(b.r.title);

export function search(index: Index, q: ParsedQuery, opts: { limit?: number; kinds?: SearchRecord["kind"][]; filter?: (r: SearchRecord) => boolean } = {}): Hit[] {
  const st = STATE.get(index);
  if (!st) return [];
  let cand: Iterable<number>;
  if (q.ref) cand = st.byObject.get(`${q.ref.type}/${q.ref.id}`) ?? [];
  else if (q.number !== null) cand = st.byId.get(q.number) ?? [];
  else if (!q.terms.length) cand = q.countries.flatMap((c) => st.byCountry.get(c) ?? []);
  else {
    const ms = matchersOf(index, q), N = index.records.length;
    const count = new Uint8Array(N);
    ms.forEach((m, k) => {
      for (const w of m.seeds) for (const i of index.postings.get(w) ?? []) if (count[i] === k) count[i] = k + 1;
    });
    const out: number[] = [];
    for (let i = 0; i < N; i++) if (count[i] === ms.length) out.push(i);
    cand = out;
  }
  const hits: Hit[] = [];
  for (const i of cand) {
    const r = index.records[i];
    if (opts.kinds && !opts.kinds.includes(r.kind)) continue;
    if (opts.filter && !opts.filter(r)) continue;
    const { s, why } = scoreRecord(index, r, q);
    // the exact band: a reference, or the record's own name equal to the query and not demoted as generic
    if (s > 0) hits.push({ r, s, why, band: s >= 900 || (why.includes("name") && !why.includes("demoted")) ? "exact" : "match" });
  }
  hits.sort(byRank);
  return opts.limit ? hits.slice(0, opts.limit) : hits;
}

/** How a symbol hit reads: `field 20 of Table 36 "Sales Header" · Date`, `event of Codeunit 80 "Sales-Post" · integration · 8 subscribers`. */
export function symbolLine(r: SearchRecord): string {
  const of = r.owner ? ` of ${r.owner.title}` : "", x = r.extra ?? {};
  if (r.kind === "field") return `field ${x.id}${of} · ${x.type}`;
  if (r.kind === "event") return `event${of} · ${x.kind} · ${x.subscribers} ${x.subscribers === 1 ? "subscriber" : "subscribers"}${x.obsolete ? ` · obsolete ${x.obsolete}` : ""}`;
  if (r.kind === "proc") return `procedure${of} · ${x.params} ${x.params === 1 ? "parameter" : "parameters"}${x.returns ? ` · returns ${x.returns}` : ""}${x.obsolete ? ` · obsolete ${x.obsolete}` : ""}`;
  if (r.kind === "value") return `value ${x.ordinal}${of}${x.caption && x.caption !== r.name ? ` · "${x.caption}"` : ""}`;
  return r.title;
}


// ---------------------------------------------------------------------------------------------- for hints

/** The object pages of a type and id (W1 or app first, then country twins), as records. */
export function objectsAt(index: Index, type: string, id: number): SearchRecord[] {
  return (STATE.get(index)?.byObject.get(`${type}/${id}`) ?? []).map((i) => index.records[i]);
}
/** Every id of an object type in the index. */
export function idsOf(index: Index, type: string): number[] {
  const out = new Set<number>();
  for (const i of index.byType.get("object") ?? []) { const r = index.records[i]; if (r.objectType === type && r.objectId != null) out.add(r.objectId); }
  return [...out];
}
/** Per term, the words it met only by a typo (empty when it met anything better, or nothing). */
export function typoWords(index: Index, q: ParsedQuery): { term: string; words: string[] }[] {
  if (!STATE.get(index)) return [];
  return matchersOf(index, q).filter((m) => m.words.size && [...m.words.values()].every((f) => f.how === "fuzzy"))
    .map((m) => ({ term: m.term.text, words: [...m.words.keys()] }));
}
/** How a term meets a record's name, title, caption or tags (0 when it does not): for the question hint's hub. */
export function namedBy(index: Index, r: SearchRecord, q: ParsedQuery): number {
  if (!STATE.get(index)) return 0;
  const n = normOf(r);
  return matchersOf(index, q).reduce((a, m) => a + (best(m, n.main)?.f ?? best(m, n.tags)?.f ?? 0), 0);
}

/** Symbol rows of one shard as records, each under its owner's page record; rows whose owner is not loaded are skipped. */
export function symbolRecords(kind: SymbolKind, rows: unknown[][], ownerOf: (pk: string) => SearchRecord | undefined): SearchRecord[] {
  const out: SearchRecord[] = [];
  for (const row of rows) { const o = ownerOf(String(row[0])); if (o) out.push(symbolToRecord(kind, row, o)); }
  return out;
}

/** The country codes the index knows (its localization pages and country objects), lowercase, for parseQuery. */
export function countriesOf(index: Index): string[] {
  const st = STATE.get(index);
  return st ? [...st.byCountry.keys()].sort() : [];
}
