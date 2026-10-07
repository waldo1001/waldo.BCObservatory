/**
 * Static embeddings (model2vec, D63) in plain JavaScript: no native code, no ONNX, so `npx bc-observatory` stays light.
 *
 * A model2vec model is a matrix with one row per WordPiece token. A text's vector is the mean of the rows of its
 * tokens, L2-normalized. Tokenization is BERT's: the BertNormalizer (clean text, space out CJK ideographs, strip
 * accents, lowercase), the BertPreTokenizer (split on whitespace and punctuation) and greedy longest-match WordPiece.
 * Like the reference implementation, it adds no special tokens, drops [UNK] and keeps the first 512 tokens.
 * tests/unit/mcp-embed.test.ts checks tokens and vectors against Python model2vec 0.9.0 on potion-base-8M.
 */
export interface StaticModel { dims: number; vocab: Map<string, number>; unk: number | null; matrix: Float32Array; normalize: boolean; maxWordChars: number; prefix: string }

export const MAX_TOKENS = 512;

/** tokenizer.json (WordPiece), model.safetensors (one F32 tensor) and config.json into a model. */
export function parseModel(tokenizerJson: string, safetensors: Uint8Array, config: { normalize?: boolean } = {}): StaticModel {
  const t = JSON.parse(tokenizerJson) as { model: { type: string; vocab: Record<string, number>; unk_token?: string; continuing_subword_prefix?: string; max_input_chars_per_word?: number } };
  if (t.model.type !== "WordPiece") throw new Error(`unsupported tokenizer model ${t.model.type}`);
  const vocab = new Map(Object.entries(t.model.vocab));
  const view = new DataView(safetensors.buffer, safetensors.byteOffset, safetensors.byteLength);
  const headerLen = Number(view.getBigUint64(0, true));
  const header = JSON.parse(new TextDecoder().decode(safetensors.subarray(8, 8 + headerLen))) as Record<string, { dtype: string; shape: number[]; data_offsets: [number, number] }>;
  const name = Object.keys(header).find((k) => k !== "__metadata__");
  if (!name) throw new Error("safetensors file has no tensor");
  const { dtype, shape, data_offsets: [start, end] } = header[name];
  if (dtype !== "F32" || shape.length !== 2) throw new Error(`unsupported tensor ${name}: ${dtype} ${shape.join("x")}`);
  // copy into an aligned buffer: the data starts at 8 + headerLen, which need not be a multiple of 4
  const bytes = safetensors.slice(8 + headerLen + start, 8 + headerLen + end);
  const matrix = new Float32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 4);
  if (matrix.length !== shape[0] * shape[1]) throw new Error("tensor size does not match its shape");
  const unk = t.model.unk_token !== undefined ? (vocab.get(t.model.unk_token) ?? null) : null;
  return { dims: shape[1], vocab, unk, matrix, normalize: config.normalize !== false, maxWordChars: t.model.max_input_chars_per_word ?? 100, prefix: t.model.continuing_subword_prefix ?? "##" };
}

const CJK: [number, number][] = [[0x4e00, 0x9fff], [0x3400, 0x4dbf], [0x20000, 0x2a6df], [0x2a700, 0x2b73f], [0x2b740, 0x2b81f], [0x2b820, 0x2ceaf], [0xf900, 0xfaff], [0x2f800, 0x2fa1f]];
const isCjk = (cp: number) => CJK.some(([a, b]) => cp >= a && cp <= b);
const isPunct = (ch: string, cp: number) => (cp >= 33 && cp <= 47) || (cp >= 58 && cp <= 64) || (cp >= 91 && cp <= 96) || (cp >= 123 && cp <= 126) || /\p{P}/u.test(ch);

/** BertNormalizer: clean text, CJK ideographs spaced out, accents stripped, lowercased. */
export function normalize(text: string): string {
  let out = "";
  for (const ch of text) {
    const cp = ch.codePointAt(0)!;
    if (cp === 0 || cp === 0xfffd) continue;
    if (ch === "\t" || ch === "\n" || ch === "\r" || /\s/u.test(ch)) { out += " "; continue; }
    if (/[\p{Cc}\p{Cf}]/u.test(ch)) continue;
    out += isCjk(cp) ? ` ${ch} ` : ch;
  }
  return out.normalize("NFD").replace(/\p{Mn}/gu, "").toLowerCase();
}

/** BertPreTokenizer: words split on whitespace, every punctuation character a word of its own. */
export function preTokenize(text: string): string[] {
  const words: string[] = [];
  let cur = "";
  for (const ch of text) {
    if (/\s/u.test(ch)) { if (cur) words.push(cur); cur = ""; continue; }
    if (isPunct(ch, ch.codePointAt(0)!)) { if (cur) words.push(cur); words.push(ch); cur = ""; continue; }
    cur += ch;
  }
  if (cur) words.push(cur);
  return words;
}

/** Token ids of a text: no special tokens, no [UNK], at most MAX_TOKENS. */
export function tokenize(m: StaticModel, text: string): number[] {
  const ids: number[] = [];
  for (const word of preTokenize(normalize(text))) {
    const chars = [...word];
    if (chars.length > m.maxWordChars) continue; // the whole word would be [UNK], which is dropped
    const pieces: number[] = [];
    let start = 0, bad = false;
    while (start < chars.length) {
      let end = chars.length, found: number | undefined;
      while (start < end) {
        const sub = (start > 0 ? m.prefix : "") + chars.slice(start, end).join("");
        found = m.vocab.get(sub);
        if (found !== undefined) break;
        end--;
      }
      if (found === undefined) { bad = true; break; }
      pieces.push(found);
      start = end;
    }
    if (!bad) for (const id of pieces) if (id !== m.unk) ids.push(id);
    if (ids.length >= MAX_TOKENS) return ids.slice(0, MAX_TOKENS);
  }
  return ids;
}

/** The text's vector: mean of its tokens' rows, L2-normalized (all zeros for a text with no known token). */
export function embed(m: StaticModel, text: string): Float32Array {
  const v = new Float32Array(m.dims);
  const ids = tokenize(m, text);
  if (!ids.length) return v;
  for (const id of ids) { const off = id * m.dims; for (let d = 0; d < m.dims; d++) v[d] += m.matrix[off + d]; }
  for (let d = 0; d < m.dims; d++) v[d] /= ids.length;
  if (m.normalize) {
    let n = 0;
    for (let d = 0; d < m.dims; d++) n += v[d] * v[d];
    n = Math.sqrt(n);
    if (n > 0) for (let d = 0; d < m.dims; d++) v[d] /= n;
  }
  return v;
}

/** Dot product: the cosine similarity of two normalized vectors. */
export function dot(a: Float32Array, b: Float32Array, bOffset = 0): number {
  let s = 0;
  for (let d = 0; d < a.length; d++) s += a[d] * b[bOffset + d];
  return s;
}
