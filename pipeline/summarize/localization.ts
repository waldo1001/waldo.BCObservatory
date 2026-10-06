/**
 * Localization narratives (PLAN M2, D31; Sonnet, role `prose`): data/hubs/localizations/<cc>.json.
 *
 * For the countries in config/countries.json `narrative_priority` (BE, NL first). A narrative reads the country's
 * code diff against W1 (data/code/diffs/country/) and the summaries of its Learn LocalFunctionality pages (the docs
 * extractions), never raw pages or code (D12). It is ready when READY_SHARE of those Learn pages are extracted, and
 * redone only when its input hash changes. Within the run's deadline and spend cap (D17).
 */
import { resolve } from "node:path";
import { loadConfig } from "../lib/config.js";
import { exists, readJson, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import type { ManifestItem } from "../lib/manifest.js";
import { sha256 } from "../lib/text.js";
import { docExtractionPath, type DocExtraction } from "../extract/docs.js";
import type { Llm } from "../extract/video.js";
import type { AlDiff, ObjectDiff } from "../code/diff.js";
import { clip, tidy } from "./video.js";
import { hubSchema } from "./hub.js";

export const PROMPT_VERSION = 1;
export const STAGE = "hub-localization";
export const READY_SHARE = 0.8;
const MAX_OBJECTS = 120;
const MAX_PAGES = 60;
const log = logger("localization-narratives");

export const SYSTEM = `You write the narrative of a localization hub in an agent-first knowledge base about Microsoft Dynamics 365 Business Central.
A localization is a country layer of the Base Application. You get what the code of that country adds to or changes in the worldwide (W1) version, and short summaries of the Microsoft Learn pages that document the country's local functionality.

Rules:
- Only what the input says. No outside knowledge about tax law, regulations or versions.
- summary: 1 to 3 sentences, at most 600 characters, telling an AI agent what this localization covers and which questions it answers. Start with the country.
- overview: 1 to 3 short paragraphs for a consultant or developer: the main local capabilities, how the code supports them (objects, fields, events), where Learn documents them.
- key_points: 3 to 8 concrete points (capabilities, local reports, setup, extensibility) taken from the input.
- Name AL objects as "table 11300 \\"Name\\"" only when they are in the input. Plain language, no hype, no em-dashes.`;

export interface LocalizationNarrative {
  country: string; version: string; input_hash: string; summary: string; overview: string; key_points: string[];
  learn_pages_used: number; prompt_version: number; at: string; llm: { model: string; cached: boolean; cost_usd: number | null };
}
export const narrativePath = (dataDir: string, cc: string) => resolve(dataDir, "hubs", "localizations", `${cc}.json`);
export const loadLocalizationNarrative = (dataDir: string, cc: string): LocalizationNarrative | null => {
  const p = narrativePath(dataDir, cc);
  return exists(p) ? readJson<LocalizationNarrative>(p) : null;
};

const changes = (o: ObjectDiff) => {
  const added = (xs: { change: string; name: string }[] | undefined) => (xs ?? []).filter((x) => x.change === "added").map((x) => x.name);
  return { ...(added(o.fields).length ? { fields_added: added(o.fields).slice(0, 15) } : {}), ...(added(o.events).length ? { events_added: added(o.events).slice(0, 10) } : {}), ...(added(o.procedures).length ? { procedures_added: added(o.procedures).slice(0, 10) } : {}) };
};

export function localizationPrompt(cc: string, name: string, d: AlDiff, pages: DocExtraction[]): string {
  const added = d.objects.filter((o) => o.change === "added").slice(0, MAX_OBJECTS).map((o) => `${o.key} "${o.name}"`);
  const replaced = d.objects.filter((o) => o.change === "replaced").slice(0, MAX_OBJECTS).map((o) => ({ object: `${o.key} "${o.name}"`, ...changes(o) }));
  const learn = pages.slice(0, MAX_PAGES).map((p) => ({ title: p.title, summary: p.summary, ...(p.features.length ? { features: p.features.slice(0, 6) } : {}) }));
  return `Country: ${name} (${cc.toUpperCase()}), Business Central ${d.to.version}.
Code summary (JSON): ${JSON.stringify(d.summary)}

Objects of its own (${d.objects.filter((o) => o.change === "added").length}${added.length < d.objects.filter((o) => o.change === "added").length ? `, first ${added.length}` : ""}):
${added.join("\n")}

W1 objects it changes (JSON):
${JSON.stringify(replaced, null, 1)}

Learn local functionality pages (JSON):
${JSON.stringify(learn, null, 1)}`;
}

export interface LocalizationRun { ready: number; refreshed: number; failed: number; waiting: string[]; stopped: string; errors: string[] }

/** Narrate the priority countries whose inputs are ready and changed. `docs` = all docs manifest items. */
export async function refreshLocalizationNarratives(
  dataDir: string, docs: ManifestItem[], o: { deadline: Date; clock: () => Date; llm?: Llm; countries?: string[] },
): Promise<LocalizationRun> {
  const llm = o.llm ?? complete;
  const cfg = loadConfig<{ narrative_priority: string[]; learn_local_functionality: Record<string, string> }>("countries");
  const run: LocalizationRun = { ready: 0, refreshed: 0, failed: 0, waiting: [], stopped: "done", errors: [] };
  const order = loadConfig<{ narrative_order: string[] }>("versions").narrative_order;
  for (const CC of o.countries ?? cfg.narrative_priority) {
    const cc = CC.toLowerCase(), folder = cfg.learn_local_functionality[CC];
    const major = order.find((m) => exists(resolve(dataDir, "code", "diffs", "country", `${m}-${cc}.json`)));
    if (!major || !folder) continue;
    const d = readJson<AlDiff>(resolve(dataDir, "code", "diffs", "country", `${major}-${cc}.json`));
    const members = docs.filter((it) => it.url.includes(`/LocalFunctionality/${folder}/`) || it.id.toLowerCase().includes(`/localfunctionality/${folder.toLowerCase()}/`));
    const pages = members.map((it) => docExtractionPath(dataDir, it)).filter(exists).map((p) => readJson<DocExtraction>(p)).sort((a, b) => a.title.localeCompare(b.title));
    if (!members.length || pages.length < Math.ceil(members.length * READY_SHARE)) { run.waiting.push(`${cc} (${pages.length}/${members.length} Learn pages extracted)`); continue; }
    run.ready++;
    const prompt = localizationPrompt(cc, folder, d, pages);
    const hash = sha256(JSON.stringify({ v: PROMPT_VERSION, prompt }));
    if (loadLocalizationNarrative(dataDir, cc)?.input_hash === hash) continue;
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; break; }
    try {
      const res = await llm<{ summary: string; overview: string; key_points: string[] }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "prose", system: SYSTEM, schema: hubSchema, prompt,
        inputs: [{ kind: "country-diff", id: `${major}-${cc}`, hash: sha256(JSON.stringify(d.summary)) }, ...pages.map((p) => ({ kind: "learn", id: p.item_id, hash: p.blob ?? undefined }))],
        label: `localization ${cc} narrative`,
      });
      const n: LocalizationNarrative = {
        country: CC, version: major, input_hash: hash, summary: clip(tidy(res.output.summary)), overview: tidy(res.output.overview),
        key_points: res.output.key_points.map(tidy).filter(Boolean).slice(0, 8), learn_pages_used: Math.min(pages.length, MAX_PAGES),
        prompt_version: PROMPT_VERSION, at: o.clock().toISOString(), llm: { model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : res.meta.cost_usd ?? null },
      };
      writeJson(narrativePath(dataDir, cc), n);
      run.refreshed++;
    } catch (e) {
      if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; break; }
      if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(`${cc}: ${e.message}`); break; }
      run.failed++;
      run.errors.push(`localization ${cc} narrative: ${String((e as Error).message).slice(0, 200)}`);
      log.warn(`${cc} narrative failed: ${String((e as Error).message).slice(0, 200)}`);
    }
  }
  return run;
}
