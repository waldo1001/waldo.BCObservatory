import { loadSources, loadSourcesRaw } from "../lib/config.js";
import { validateSourcesDoc } from "./sources.js";

const file = process.argv[2];
const raw = loadSourcesRaw(file);
const applied = loadSources(file);
const r = validateSourcesDoc(raw, applied);
for (const w of r.warnings) console.error(`warning: ${w}`);
for (const e of r.errors) console.error(`error: ${e}`);
const byKind = applied.reduce<Record<string, number>>((acc, s) => ((acc[s.kind] = (acc[s.kind] ?? 0) + 1), acc), {});
console.log(`${applied.length} sources (${Object.entries(byKind).map(([k, n]) => `${k}: ${n}`).join(", ")}); full_text: ${applied.filter((s) => s.full_text).length}; official: ${applied.filter((s) => s.tier === "official").length}`);
console.log(r.ok ? "sources.yaml OK" : `sources.yaml INVALID (${r.errors.length} errors)`);
process.exit(r.ok ? 0 : 1);
