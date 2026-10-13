/**
 * The query parser (D86 4.1). Rules, in order: quoted phrases; a `kind:` prefix at the start; the whole query as an
 * object reference (`t36`, `cu 80`, `codeunit80`, `table 36 BE`); a bare number (an id across types); a version word
 * (`bc30`, `bc 30`, `v29`); type words (the 18 types, singular or plural, an abbreviation only when it is the whole
 * query); country codes (uppercase, or any case next to a reference or a type word); the rest tokenised, stemmed and
 * synonym-expanded. A question (D95: also "difference between", "X vs Y", "compare") drops its question words, only while
 * a content word or a quoted phrase is left; its shape says what it asks (what changed, how to, a concept).
 */
import { camelParts, fold, stem, tokenize } from "./normalize.js";
import { ABBR, QUESTION_WORDS, synonymPhrases, synonymsOf } from "./synonyms.js";
import { OBJECT_TYPES, type ObjectType, type ParsedQuery, type SymbolKind, type Term } from "./types.js";

/** Type words: the 18 types and their plurals. */
export const TYPE_WORDS: Record<string, ObjectType> = Object.fromEntries(
  OBJECT_TYPES.flatMap((t) => [[t, t], [`${t}s`, t], ...(t === "query" ? [["queries", t]] : [])] as [string, ObjectType][]));
/** The object type a word names: a type word, or an abbreviation (`cu`, `t`). */
export const typeOfWord = (w: string): ObjectType | null => TYPE_WORDS[w.toLowerCase()] ?? ABBR[w.toLowerCase()] ?? null;

export const KINDS: Record<string, SymbolKind> = { field: "field", fields: "field", event: "event", events: "event", proc: "proc", procs: "proc", procedure: "proc", procedures: "proc", value: "value", values: "value" };

/** One term of a word (or phrase) with its stem and alternates. */
export function term(text: string, phrase = false, raw = text): Term {
  const alts = [...synonymsOf(text)];
  const camel = camelParts(raw);
  if (camel.length > 1) alts.push(camel.join(" "));
  return { text, stem: phrase ? text.split(" ").map(stem).join(" ") : stem(text), alts, phrase, numeric: /^\d+$/.test(text), raw: raw || text };
}

/** The first words of a question: a question word, or an auxiliary verb ("is a codeunit an object", "should I use"). */
const QUESTION_START = /^(how|what|why|where|when|which|who|should|can|is|are|does|do|compare)\b/i;

export function parseQuery(raw: string, opts: { countries: string[] }): ParsedQuery {
  const countries = new Set(opts.countries.map((c) => c.toLowerCase()));
  const q: ParsedQuery = { raw, ref: null, number: null, types: [], kind: null, major: null, countries: [], question: false, dropped: [], shape: null, terms: [], warnings: [] };
  let s = raw.trim();
  // quoted phrases
  const phrases: { text: string; raw: string }[] = [];
  s = s.replace(/"([^"]*)"/g, (_, p: string) => { const t = tokenize(p); if (t.length) phrases.push({ text: t.join(" "), raw: p }); return " "; }).trim();
  // a kind: prefix at the start
  const k = /^(fields?|events?|procs?|procedures?|values?)\s*:\s*/i.exec(s);
  if (k) { q.kind = KINDS[k[1].toLowerCase()]; s = s.slice(k[0].length).trim(); }
  // the whole query as a reference
  if (!q.kind && !phrases.length) {
    const m = /^([a-z]+)\s*(\d+)(?:(?:\s+|\s*-\s*)([a-z]{2}))?$/i.exec(s);
    if (m) {
      const type = typeOfWord(m[1]);
      const cc = m[3]?.toLowerCase() ?? null;
      if (type && (!cc || countries.has(cc))) { q.ref = { type, id: Number(m[2]), country: cc }; if (cc) q.countries.push(cc); return q; }
      const version = /^(bc|v)$/i.test(m[1]) && /^(2[3-9]|3\d)$/.test(m[2]);
      if (!type && !version && m[1].length <= 4 && !cc) q.warnings.push(`unknown abbreviation ${m[1].toLowerCase()}`);
    }
    if (/^\d+$/.test(s)) { q.number = Number(s); return q; }
  }
  // a version word
  s = s.replace(/(?:^|\s)(?:bc|v)\s?(2[3-9]|3\d)(?=\s|$)/i, (_, v: string) => { q.major = v; return " "; }).trim();
  // a `kind:` query looks a name up ("field: Is Blocked"): never a question
  q.question = !q.kind && (QUESTION_START.test(s) || /\bchanged in\b/i.test(s) || /\bdifferences? between\b/i.test(s) || /\b(vs|versus)\b/i.test(s));
  if (q.question) q.shape = /\bchanged in\b/i.test(s) ? "what-changed" : /^(how (do|to)|when to)\b/i.test(s) ? "how-to" : "concept";
  const words = s.split(/\s+/).filter(Boolean);
  const typeAt = (i: number) => i >= 0 && i < words.length && !!TYPE_WORDS[words[i].toLowerCase()];
  const typeWords: string[] = [];
  const rest: string[] = [];
  words.forEach((w, i) => {
    const lw = w.toLowerCase();
    if (TYPE_WORDS[lw]) { q.types.push(TYPE_WORDS[lw]); typeWords.push(w); return; }
    // a multi-letter abbreviation as the whole query ("cu"); a one-letter one never outside a reference
    if (words.length === 1 && lw.length > 1 && ABBR[lw]) { q.types.push(ABBR[lw]); typeWords.push(w); return; }
    if (/^[a-z]{2}$/i.test(w) && countries.has(lw) && (w === w.toUpperCase() || typeAt(i - 1) || typeAt(i + 1))) { if (!q.countries.includes(lw)) q.countries.push(lw); return; }
    rest.push(w);
  });
  // type words alone ("tables", "cu") stay searchable words too: they are the whole question
  if (!rest.length && !phrases.length && !q.countries.length && !q.kind) rest.push(...typeWords);
  // the rest, word by word; question words go from a question
  let toks: { text: string; raw: string }[] = [];
  for (const w of rest) {
    const t = tokenize(w);
    for (const x of t) toks.push({ text: x, raw: t.length === 1 ? w.replace(/[^\p{L}\p{N}.\-/]/gu, "") : x });
  }
  // the question words go, unless nothing else is left to search for ("what is", "difference between"); a quoted phrase
  // keeps every word of its own and counts as content
  if (q.question) {
    const chaff = (t: { text: string }) => QUESTION_WORDS.has(t.text) || t.text.length === 1;
    if (phrases.length || toks.some((t) => !chaff(t))) {
      for (const t of toks) if (QUESTION_WORDS.has(t.text) && !q.dropped.includes(t.text)) q.dropped.push(t.text);
      toks = toks.filter((t) => !chaff(t));
    }
  }
  // words that together are a synonym phrase ("general ledger") become one term
  const multi = synonymPhrases().map((p) => p.split(" ")).sort((a, b) => b.length - a.length);
  for (let i = 0; i < toks.length; i++) {
    const hit = multi.find((p) => p.every((w, j) => toks[i + j]?.text === w));
    if (hit) { q.terms.push({ ...term(hit.join(" "), true), raw: toks.slice(i, i + hit.length).map((t) => t.raw || t.text).join(" ") }); i += hit.length - 1; continue; }
    q.terms.push(term(toks[i].text, false, toks[i].raw));
  }
  for (const p of phrases) q.terms.push(p.text.includes(" ") ? term(p.text, true, p.raw) : term(p.text, false, p.raw));
  return q;
}

/** The query as words, for a hint that swaps one of them. */
export const queryWords = (q: ParsedQuery) => fold(q.raw).split(/\s+/).filter(Boolean);
