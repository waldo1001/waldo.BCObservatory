/**
 * Localization narratives (PLAN M2, D31; Sonnet, role `prose`): data/hubs/localizations/<cc>.json.
 *
 * For the countries in config/countries.json `narrative_priority` (BE, NL first). A narrative reads the country's
 * code diff against W1 (data/code/diffs/country/) and the summaries of its Learn LocalFunctionality pages (the docs
 * extractions), never raw pages or code (D12). It is ready when READY_SHARE of those Learn pages are extracted, and
 * redone only when its input hash changes. Within the run's deadline and spend cap (D17). Since D50 the narrative
 * also tells the story per area (what the country changes there, why when Learn says so, on which objects): the
 * schema allows only the areas and object keys of the diff, so nothing is invented.
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
import { areaOf } from "../lib/systems.js";

export const PROMPT_VERSION = 2;
export const STAGE = "hub-localization";
export const READY_SHARE = 0.8;
const MAX_OBJECTS = 120;
const MAX_PAGES = 60;
const MAX_AREA_OBJECTS = 40;
const MAX_CITED = 8;
const log = logger("localization-narratives");

export const SYSTEM = `You write the narrative of a localization hub in an agent-first knowledge base about Microsoft Dynamics 365 Business Central.
A localization is a country layer of the Base Application. You get what the code of that country adds to or changes in the worldwide (W1) version, and short summaries of the Microsoft Learn pages that document the country's local functionality.

Rules:
- Only what the input says. No outside knowledge about tax law, regulations or versions.
- summary: 1 to 3 sentences, at most 600 characters, telling an AI agent what this localization covers and which questions it answers. Start with the country.
- overview: 1 to 3 short paragraphs for a consultant or developer: the main local capabilities, how the code supports them (objects, fields, events), where Learn documents them.
- key_points: 3 to 8 concrete points (capabilities, local reports, setup, extensibility) taken from the input.
- areas: one entry per area listed in the input (skip an area only when it holds nothing but upgrade or test plumbing). For each: what the country changes there in 1 to 3 sentences (the capability, the kind of change: new tables and reports, fields on W1 tables, events, procedures); why, in 1 or 2 sentences, only when a Learn page in the input explains the local requirement (a tax rule, a bank format, a legal report), otherwise null; objects: up to 8 keys from that area's list that carry the change, most important first.
- Name AL objects as "table 11300 \\"Name\\"" only when they are in the input. Plain language, no hype, no em-dashes.`;

export interface NarrativeArea { area: string; what: string; why: string | null; objects: string[] }
export interface LocalizationNarrative {
  country: string; version: string; input_hash: string; summary: string; overview: string; key_points: string[];
  /** Per area (D50): what changes, why (from Learn, or null), the objects that carry it. */
  areas?: NarrativeArea[];
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

/** The diff's objects grouped by area, biggest areas first; each area's objects by weight of change. */
export function areasOf(d: AlDiff): { area: string; objects: ObjectDiff[] }[] {
  const m = new Map<string, ObjectDiff[]>();
  for (const o of d.objects) if (o.change !== "removed") { const a = areaOf(o.ns, null); m.set(a, [...(m.get(a) ?? []), o]); }
  const weight = (o: ObjectDiff) => (o.change === "added" ? 3 : 1) + (o.fields?.length ?? 0) + (o.events?.length ?? 0) + (o.procedures?.length ?? 0);
  return [...m].map(([area, objects]) => ({ area, objects: objects.sort((a, b) => weight(b) - weight(a) || a.key.localeCompare(b.key)) })).sort((a, b) => b.objects.length - a.objects.length || a.area.localeCompare(b.area));
}

/** Response schema: areas and object keys limited to the diff (nothing invented). */
export function localizationSchema(d: AlDiff) {
  const areas = areasOf(d);
  return {
    type: "object", additionalProperties: false, required: ["summary", "overview", "key_points", "areas"],
    properties: {
      summary: { type: "string" }, overview: { type: "string" }, key_points: { type: "array", items: { type: "string" } },
      areas: { type: "array", items: { type: "object", additionalProperties: false, required: ["area", "what", "why", "objects"], properties: {
        area: { type: "string", enum: areas.map((a) => a.area) }, what: { type: "string" }, why: { type: ["string", "null"] },
        objects: { type: "array", maxItems: MAX_CITED, items: { type: "string", enum: [...new Set(d.objects.filter((o) => o.change !== "removed").map((o) => o.key))] } },
      } } },
    },
  };
}

export function localizationPrompt(cc: string, name: string, d: AlDiff, pages: DocExtraction[]): string {
  const added = d.objects.filter((o) => o.change === "added").slice(0, MAX_OBJECTS).map((o) => `${o.key} "${o.name}"`);
  const replaced = d.objects.filter((o) => o.change === "replaced").slice(0, MAX_OBJECTS).map((o) => ({ object: `${o.key} "${o.name}"`, ...changes(o) }));
  const learn = pages.slice(0, MAX_PAGES).map((p) => ({ title: p.title, summary: p.summary, ...(p.features.length ? { features: p.features.slice(0, 6) } : {}) }));
  const byArea = areasOf(d).map((a) => ({ area: a.area, objects: a.objects.length, [a.objects.length > MAX_AREA_OBJECTS ? `first_${MAX_AREA_OBJECTS}` : "list"]: a.objects.slice(0, MAX_AREA_OBJECTS).map((o) => ({ key: o.key, name: o.name, change: o.change === "added" ? "own object" : "changes W1", ...changes(o) })) }));
  return `Country: ${name} (${cc.toUpperCase()}), Business Central ${d.to.version}.
Code summary (JSON): ${JSON.stringify(d.summary)}

By area (JSON; "own object" = the country adds it, "changes W1" = it changes the worldwide object):
${JSON.stringify(byArea, null, 1)}

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
  const cfg = loadConfig<{ narrative_priority: string[]; known: string[]; learn_local_functionality: Record<string, string> }>("countries");
  // the priority countries first, then every other known country (one Sonnet call each, redone only on change)
  const order0 = [...cfg.narrative_priority, ...cfg.known.filter((c) => !cfg.narrative_priority.includes(c))];
  const run: LocalizationRun = { ready: 0, refreshed: 0, failed: 0, waiting: [], stopped: "done", errors: [] };
  const order = loadConfig<{ narrative_order: string[] }>("versions").narrative_order;
  for (const CC of o.countries ?? order0) {
    const cc = CC.toLowerCase(), folder = cfg.learn_local_functionality[CC];
    const major = order.find((m) => exists(resolve(dataDir, "code", "diffs", "country", `${m}-${cc}.json`)));
    if (!major || !folder) continue;
    const d = readJson<AlDiff>(resolve(dataDir, "code", "diffs", "country", `${major}-${cc}.json`));
    // nothing changed against W1 means nothing to narrate, and an empty enum is an invalid schema (D58: DK and IN
    // read as empty until their extension apps were extracted)
    if (!areasOf(d).length) { run.waiting.push(`${cc} (no code changes against W1 in BC${major})`); continue; }
    const members = docs.filter((it) => it.url.includes(`/LocalFunctionality/${folder}/`) || it.id.toLowerCase().includes(`/localfunctionality/${folder.toLowerCase()}/`));
    const pages = members.map((it) => docExtractionPath(dataDir, it)).filter(exists).map((p) => readJson<DocExtraction>(p)).sort((a, b) => a.title.localeCompare(b.title));
    if (!members.length || pages.length < Math.ceil(members.length * READY_SHARE)) { run.waiting.push(`${cc} (${pages.length}/${members.length} Learn pages extracted)`); continue; }
    run.ready++;
    const prompt = localizationPrompt(cc, folder, d, pages);
    const hash = sha256(JSON.stringify({ v: PROMPT_VERSION, prompt }));
    if (loadLocalizationNarrative(dataDir, cc)?.input_hash === hash) continue;
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; break; }
    try {
      const res = await llm<{ summary: string; overview: string; key_points: string[]; areas: NarrativeArea[] }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "prose", system: SYSTEM, schema: localizationSchema(d), prompt,
        inputs: [{ kind: "country-diff", id: `${major}-${cc}`, hash: sha256(JSON.stringify(d.summary)) }, ...pages.map((p) => ({ kind: "learn", id: p.item_id, hash: p.blob ?? undefined }))],
        label: `localization ${cc} narrative`,
      });
      const n: LocalizationNarrative = {
        country: CC, version: major, input_hash: hash, summary: clip(tidy(res.output.summary)), overview: tidy(res.output.overview),
        key_points: res.output.key_points.map(tidy).filter(Boolean).slice(0, 8),
        areas: (res.output.areas ?? []).map((a) => ({ area: a.area, what: tidy(a.what), why: a.why ? tidy(a.why) : null, objects: [...new Set(a.objects)].slice(0, MAX_CITED) })).filter((a) => a.what),
        learn_pages_used: Math.min(pages.length, MAX_PAGES),
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
