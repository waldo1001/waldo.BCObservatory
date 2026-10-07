// Shared by the MCP tests (D63): a model2vec-shaped model built in memory, so no test downloads anything.
/** A model2vec-shaped model from a vocab and rows: tokenizer.json, safetensors bytes, config. */
export function toyModel(rows: Record<string, number[]>) {
  const words = ["[UNK]", ...Object.keys(rows)];
  const dims = Object.values(rows)[0].length;
  const tokenizer = JSON.stringify({ model: { type: "WordPiece", vocab: Object.fromEntries(words.map((w, i) => [w, i])), unk_token: "[UNK]", continuing_subword_prefix: "##", max_input_chars_per_word: 100 } });
  const data = new Float32Array(words.length * dims);
  Object.values(rows).forEach((r, i) => data.set(r, (i + 1) * dims));
  const header = new TextEncoder().encode(JSON.stringify({ embeddings: { dtype: "F32", shape: [words.length, dims], data_offsets: [0, data.byteLength] } }));
  const bytes = new Uint8Array(8 + header.length + data.byteLength);
  new DataView(bytes.buffer).setBigUint64(0, BigInt(header.length), true);
  bytes.set(header, 8);
  bytes.set(new Uint8Array(data.buffer), 8 + header.length);
  return { tokenizer, bytes, config: { normalize: true } };
}
