/** One Ajv instance, schemas loaded from /schemas by name. */
import AjvModule from "ajv/dist/2020.js";
import addFormatsModule from "ajv-formats";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { readJson } from "./fsx.js";
import { SCHEMAS_DIR } from "./paths.js";

const Ajv: any = (AjvModule as any).default ?? AjvModule;
const addFormats: any = (addFormatsModule as any).default ?? addFormatsModule;

const ajv = new Ajv({ strict: false, allErrors: true, allowUnionTypes: true });
addFormats(ajv);
const compiled = new Map<string, any>();

export function loadSchema(name: string): Record<string, unknown> {
  return readJson(resolve(SCHEMAS_DIR, name.endsWith(".json") ? name : `${name}.json`));
}
let registered = false;
/** Register every top-level schema once so cross-file $refs (frontmatter.video -> frontmatter.base) resolve. */
function registerAll(): void {
  if (registered) return;
  for (const f of readdirSync(SCHEMAS_DIR).filter((n) => n.endsWith(".json"))) ajv.addSchema(loadSchema(f));
  registered = true;
}
export function validator(name: string) {
  // "sources" and "sources.json" are the same schema
  const key = name.replace(/\.json$/, "");
  let v = compiled.get(key);
  if (!v) {
    registerAll();
    const id = loadSchema(key).$id as string | undefined;
    v = id ? ajv.getSchema(id) : ajv.compile(loadSchema(key));
    if (!v) throw new Error(`schema ${key} not registered`);
    compiled.set(key, v);
  }
  return v;
}
export interface ValidationResult { ok: boolean; errors: string[] }
export function validate(name: string, data: unknown): ValidationResult {
  const v = validator(name);
  const ok = v(data) as boolean;
  const errors = ok ? [] : (v.errors ?? []).map((e: any) => `${e.instancePath || "/"} ${e.message ?? ""}${e.params?.allowedValues ? " (" + e.params.allowedValues.join("|") + ")" : ""}`.trim());
  return { ok, errors };
}
export function validateOrThrow(name: string, data: unknown, label = name): void {
  const r = validate(name, data);
  if (!r.ok) throw new Error(`${label} failed schema ${name}:\n  - ${r.errors.join("\n  - ")}`);
}
/** Compile an inline schema (LLM output schemas are passed to claude --json-schema and validated again here). */
export function compileInline(schema: Record<string, unknown>) {
  return ajv.compile(schema);
}
