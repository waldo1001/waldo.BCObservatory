import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { embed, normalize, parseModel, preTokenize, tokenize } from "../../packages/mcp/src/embed.js";
import { ROOT } from "../../pipeline/lib/paths.js";
import { toyModel } from "../helpers/toy-model.js";


test("BERT normalization and pre-tokenization: accents off, lowercase, punctuation split, CJK spaced", () => {
  assert.equal(normalize("Café DÉJÀ\tvu"), "cafe deja vu");
  assert.deepEqual(preTokenize("sales-post (BE), ok."), ["sales", "-", "post", "(", "BE", ")", ",", "ok", "."], "case is the normalizer's job");
  assert.deepEqual(preTokenize(normalize("日本")), ["日", "本"]);
});

test("WordPiece: longest match first, ## continuations, an unknown word is dropped whole", () => {
  const t = toyModel({ post: [1, 0], "##ing": [0, 1], "##s": [1, 1], sales: [0, 1] });
  const m = parseModel(t.tokenizer, t.bytes, t.config);
  const id = (w: string) => m.vocab.get(w)!;
  assert.deepEqual(tokenize(m, "Posting sales"), [id("post"), id("##ing"), id("sales")]);
  assert.deepEqual(tokenize(m, "posts xylophone"), [id("post"), id("##s")], "xylophone has no pieces: [UNK], dropped");
  assert.deepEqual(tokenize(m, "x".repeat(120)), [], "longer than max_input_chars_per_word");
});

test("a vector is the normalized mean of its tokens' rows; no known token gives zeros", () => {
  const t = toyModel({ customer: [3, 4], client: [3, 4], sales: [0, 2] });
  const m = parseModel(t.tokenizer, t.bytes, t.config);
  assert.deepEqual([...embed(m, "client")].map((x) => +x.toFixed(6)), [0.6, 0.8]);
  // mean of [3, 4] and [0, 2] is [1.5, 3], normalized
  assert.deepEqual([...embed(m, "customer sales")].map((x) => +x.toFixed(4)), [+(1.5 / Math.hypot(1.5, 3)).toFixed(4), +(3 / Math.hypot(1.5, 3)).toFixed(4)]);
  assert.deepEqual([...embed(m, "nothing known")], [0, 0]);
});

// the real model, when present: BC_OBSERVATORY_MODEL_DIR=<dir with config.json, tokenizer.json, model.safetensors>
const dir = process.env.BC_OBSERVATORY_MODEL_DIR;
test("identical to Python model2vec on potion-base-8M", { skip: !dir || !existsSync(join(dir ?? "", "model.safetensors")) ? "set BC_OBSERVATORY_MODEL_DIR to the downloaded model" : false }, () => {
  const m = parseModel(readFileSync(join(dir!, "tokenizer.json"), "utf8"), new Uint8Array(readFileSync(join(dir!, "model.safetensors"))), JSON.parse(readFileSync(join(dir!, "config.json"), "utf8")));
  const ref = JSON.parse(readFileSync(join(ROOT, "tests/fixtures/model2vec/potion-base-8M.ref.json"), "utf8"));
  for (const c of ref.cases) {
    assert.deepEqual(tokenize(m, c.text), c.ids, `tokens of ${JSON.stringify(c.text)}`);
    const v = embed(m, c.text);
    assert.ok(c.vec.every((x: number, i: number) => Math.abs(x - v[i]) < 1e-5), `vector of ${JSON.stringify(c.text)}`);
  }
});
