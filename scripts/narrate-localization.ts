/**
 * Localization narratives outside the nightly: write one country's narrative into a temp copy and print it, with the
 * cost. `npm run narrate:localization -- --country be [--write]`. Without --write nothing under data/ changes.
 */
import { cpSync, existsSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { llmStats } from "../pipeline/lib/llm.js";
import { DATA_DIR } from "../pipeline/lib/paths.js";
import { Manifest } from "../pipeline/lib/manifest.js";
import { loadLocalizationNarrative, refreshLocalizationNarratives } from "../pipeline/summarize/localization.js";

const argv = process.argv.slice(2);
const cc = (argv[argv.indexOf("--country") + 1] ?? "be").toLowerCase();
let dataDir = DATA_DIR;
if (!argv.includes("--write")) {
  dataDir = join(mkdtempSync(join(tmpdir(), "bcobs-locnarr-")), "data");
  for (const d of ["code/diffs/country", "extract/docs", "hubs/localizations", "manifest/docs"]) if (existsSync(resolve(DATA_DIR, d))) cpSync(resolve(DATA_DIR, d), resolve(dataDir, d), { recursive: true });
}
const docs = new Manifest(resolve(DATA_DIR, "manifest")).list("docs");
const run = await refreshLocalizationNarratives(dataDir, docs, { deadline: new Date(Date.now() + 1_800_000), clock: () => new Date(), countries: [cc.toUpperCase()] });
const n = loadLocalizationNarrative(dataDir, cc);
console.log(JSON.stringify({ run, llm: llmStats(), data_dir: dataDir }, null, 2));
if (n) {
  console.log(`\n# ${n.country} BC${n.version}\n\n${n.summary}\n\n${n.overview}\n\n${n.key_points.map((k) => `- ${k}`).join("\n")}\n`);
  for (const a of n.areas ?? []) console.log(`## ${a.area}\n${a.what}\nWhy: ${a.why ?? "(not from Learn)"}\nObjects: ${a.objects.join(", ")}\n`);
}
