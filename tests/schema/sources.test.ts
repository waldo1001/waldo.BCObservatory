/** Schema compilation + sources.yaml policy contract (CONTENT-NOTICE.md). No network, no LLM. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { loadSources, loadSourcesRaw, type SourceDef, type SourcesDoc } from "../../pipeline/lib/config.js";
import { SCHEMAS_DIR } from "../../pipeline/lib/paths.js";
import { validator } from "../../pipeline/lib/schema.js";
import { validateSourcesDoc } from "../../pipeline/validate/sources.js";

test("every schema in schemas/ compiles", () => {
  const names = readdirSync(SCHEMAS_DIR).filter((f) => f.endsWith(".json"));
  assert.ok(names.length >= 6, `expected at least 6 schemas, found ${names.length}`);
  for (const n of names) assert.doesNotThrow(() => validator(n), `schema ${n} failed to compile`);
});

test("sources.yaml passes schema and policy", () => {
  const r = validateSourcesDoc(loadSourcesRaw(), loadSources());
  assert.deepEqual(r.errors, []);
  assert.equal(r.ok, true);
});

/** Run the policy rules on one modified copy of the real registry. */
function withSource(patch: (s: SourceDef) => SourceDef, pick: (s: SourceDef) => boolean) {
  const raw = loadSourcesRaw();
  const applied = loadSources().map((s) => (pick(s) ? patch({ ...s }) : s));
  return validateSourcesDoc(raw as SourcesDoc, applied);
}
const firstBlog = (s: SourceDef) => s.kind === "blog" && !s.full_text;

test("policy: community full_text without consent is rejected", () => {
  const r = withSource((s) => ({ ...s, full_text: true, consent: undefined }), firstBlog);
  assert.equal(r.ok, false);
  assert.ok(r.errors.some((e) => e.includes("full_text requires")));
});

test("policy: tier official is reserved for Microsoft-owned material", () => {
  const r = withSource((s) => ({ ...s, tier: "official" }), firstBlog);
  assert.ok(r.errors.some((e) => e.includes("tier official is reserved")));
});

test("policy: code sources must be metadata-only", () => {
  const r = withSource((s) => ({ ...s, mode: "links-only" }), (s) => s.kind === "code-git");
  assert.ok(r.errors.some((e) => e.includes("metadata-only")));
});

test("policy: duplicate ids are rejected", () => {
  const applied = loadSources();
  const r = validateSourcesDoc(loadSourcesRaw(), [...applied, applied[0]]);
  assert.ok(r.errors.some((e) => e.includes("duplicate id")));
});

test("schema: a source's embed opt-out (D60) is a boolean", () => {
  const raw = loadSourcesRaw();
  const i = raw.sources.findIndex(firstBlog);
  const withEmbed = (v: unknown) => ({ ...raw, sources: raw.sources.map((s, j) => (j === i ? { ...s, embed: v } : s)) }) as SourcesDoc;
  assert.deepEqual(validateSourcesDoc(withEmbed(false), loadSources()).errors, []);
  assert.ok(validateSourcesDoc(withEmbed("no"), loadSources()).errors.length > 0, "embed: \"no\" is rejected");
});
