/**
 * Words as the scorer sees them (D86): NFKD without accents, lowercase, split on anything but letters, digits and a
 * `.`, `-` or `/` inside a word (`Sales-Post`, `G/L` stay whole), one-character words dropped unless numeric.
 */

export const fold = (s: string): string => s.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase();

const TOKEN = /[\p{L}\p{N}]+(?:[.\-/][\p{L}\p{N}]+)*/gu;
const keep = (t: string) => t.length > 1 || /\d/.test(t);

export function tokenize(s: string): string[] {
  const out: string[] = [];
  for (const m of fold(s).matchAll(TOKEN)) if (keep(m[0])) out.push(m[0]);
  return out;
}

/** The parts of a compound word: "sales-post" -> ["sales", "post"]; a plain word has none. */
export function parts(token: string): string[] {
  if (!/[.\-/]/.test(token)) return [];
  return token.split(/[.\-/]/).filter(keep);
}

/** CamelCase words of a raw word: "OnAfterPostSalesDoc" -> ["on", "after", "post", "sales", "doc"]; plain words have none. */
export function camelParts(raw: string): string[] {
  if (!/[a-z][A-Z]|[A-Z]{2}[a-z]/.test(raw)) return [];
  return (raw.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g) ?? []).map((w) => fold(w)).filter(keep);
}

/**
 * Everything a field is findable by: its words, the parts of its compound words and, for symbol names, the CamelCase
 * words. Deduplicated, in order.
 */
export function indexTokens(raw: string, camel = false): string[] {
  const out = new Set<string>();
  for (const t of tokenize(raw)) { out.add(t); for (const p of parts(t)) out.add(p); }
  if (camel) for (const w of raw.split(/[^\p{L}\p{N}]+/u)) for (const p of camelParts(w)) out.add(p);
  return [...out];
}

/**
 * A light stemmer for words of five letters or more: plurals first (`ies` -> `y`, `es` after s/x/z/ch/sh, `s`), then
 * `ing` and `ed`. Applied to the query and the index alike, so both sides meet: "postings", "posting", "posted" -> "post".
 */
export function stem(t: string): string {
  if (t.length < 5 || /\d/.test(t) || /[.\-/]/.test(t)) return t;
  let s = t;
  if (s.endsWith("ies")) s = `${s.slice(0, -3)}y`;
  else if (/(ss|x|z|ch|sh)es$/.test(s)) s = s.slice(0, -2);
  else if (s.endsWith("s") && !/(ss|us|is)$/.test(s)) s = s.slice(0, -1);
  if (s.length >= 6 && s.endsWith("ing")) s = s.slice(0, -3);
  else if (s.length >= 5 && s.endsWith("ed")) s = s.slice(0, -2);
  return s;
}

/** Optimal string alignment distance (Damerau-Levenshtein with adjacent transpositions), stopping above `max`. */
export function editDistance(a: string, b: string, max = 2): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const n = a.length, m = b.length;
  let prev2 = new Array<number>(m + 1).fill(0), prev = Array.from({ length: m + 1 }, (_, j) => j), cur = new Array<number>(m + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    cur[0] = i;
    let best = cur[0];
    for (let j = 1; j <= m; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur[j] = v;
      if (v < best) best = v;
    }
    if (best > max) return max + 1;
    [prev2, prev, cur] = [prev, cur, prev2];
  }
  return prev[m];
}
