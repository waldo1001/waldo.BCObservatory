/**
 * Change facts (D61, spec section 4.6): one Haiku pass per batch of BATCH_SIZE merged pull requests, in our words.
 * Input per pull request: its title, an excerpt of the body (read from tonight's cache, never stored), the changed
 * files (AL source first) and the objects the exact path join found. Output: a short summary, key points, the kind of
 * change, whether behaviour changes or breaks, obsoletions, systems (a fallback for when nothing joined) and at most
 * one quote. Validators, not the prompt, decide what stays: an obsoletion must name a joined object, the quote must be
 * verbatim in the body and under 25 words. Only `code` pull requests reach this stage.
 */
import { resolve } from "node:path";
import { exists, readJson, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import type { HttpGet } from "../lib/http.js";
import type { ManifestItem } from "../lib/manifest.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { taxonomy } from "../lib/config.js";
import type { StageHandler, StageResult } from "../orchestrator/execute.js";
import type { Llm } from "./video.js";
import { SYSTEM_IDS } from "./video-schema.js";
import { clip, tidy } from "../summarize/video.js";
import { verbatimQuote } from "./post.js";
import { changeBody, changeNumber, readChangeRecord, type ChangeRecord } from "../fetch/change.js";

export const PROMPT_VERSION = 1;
export const STAGE = "extract-change";
export const BATCH_SIZE = 6;
export const BODY_CHARS = 4_000;
export const FILE_LINES = 60;
const SUMMARY_MAX = 400;
export const CHANGE_KINDS = ["feature", "fix", "refactor", "obsoletion", "performance", "breaking", "other"] as const;
export type ChangeKind = typeof CHANGE_KINDS[number];

const str = { type: "string" };
export const changeSchema = {
  type: "object", additionalProperties: false, required: ["changes"],
  properties: {
    changes: {
      type: "array",
      items: {
        type: "object", additionalProperties: false,
        required: ["key", "summary", "key_points", "change_kind", "behavior_change", "breaking", "obsoletions", "systems", "quote"],
        properties: {
          key: str, summary: str, key_points: { type: "array", items: str },
          change_kind: { type: "string", enum: [...CHANGE_KINDS] }, behavior_change: { type: "boolean" }, breaking: { type: "boolean" },
          obsoletions: { type: "array", items: { type: "object", additionalProperties: false, required: ["object", "member", "replacement"], properties: { object: str, member: { type: ["string", "null"] }, replacement: { type: ["string", "null"] } } } },
          systems: { type: "array", items: { type: "string", enum: SYSTEM_IDS } },
          quote: { type: ["string", "null"] },
        },
      },
    },
  },
};

export interface ChangeExtraction {
  item_id: string; number: number; title?: string; repo?: string; systems_joined?: string[]; summary: string; key_points: string[]; change_kind: ChangeKind; behavior_change: boolean; breaking: boolean;
  obsoletions: { object: string; member: string | null; replacement: string | null }[]; systems: string[]; quote: string | null;
  prompt_version: number; llm: { model: string; cached: boolean; cost_usd: number | null; changes_in_call: number };
}

export const changeExtractionPath = (dataDir: string, item: Pick<ManifestItem, "id" | "source">) => resolve(dataDir, "extract", "change", item.source, `${changeNumber(item)}.json`);
export const readChangeExtraction = (dataDir: string, item: Pick<ManifestItem, "id" | "source">) => { const p = changeExtractionPath(dataDir, item); return exists(p) ? readJson<ChangeExtraction>(p) : null; };

export const SYSTEM = `You describe merged pull requests of Microsoft's Business Central repositories for an agent-first knowledge base: microsoft/BCApps (the application code in AL), microsoft/AL-Go (the DevOps actions and templates) and microsoft/BCQuality (quality rules and skills for Business Central development).
You get several pull requests, each marked with a key: repository, title, an excerpt of its description, the changed files and, for BCApps, the AL objects they belong to. Return one entry per key and no other keys.

Rules:
- Use only what is given. No outside knowledge.
- summary: 1 to 3 plain sentences (at most ${SUMMARY_MAX} characters) saying what changed for a developer or a user of Business Central. Start with the subject, not "This PR". Paraphrase; never copy sentences. No hype, no em-dashes.
- key_points: 1 to 5 short points in your own words.
- change_kind: feature, fix, refactor, obsoletion, performance, breaking or other.
- behavior_change: true when users or extensions see different behaviour; false for refactors, tests or wording.
- breaking: true only when existing extensions can stop compiling or working (removed or changed public members, events, fields).
- obsoletions: objects or members the change marks obsolete or removes, named exactly as in the listed objects ("Table 3 Payment Terms" style is not needed: give the object name only), with the member and the replacement when stated; empty when none.
- systems: 1 to 3 galaxy system ids the change belongs to.
- quote: one short sentence copied exactly from the description (under 25 words) that states the change, or null.`;

interface Unit { item: ManifestItem; key: string; rec: ChangeRecord; body: string }

const objectLine = (o: ChangeRecord["join"]["objects"][number]) => `${o.type} ${o.id ?? ""} "${o.name}"${o.app ? ` (${o.app})` : ""}`.replace(/  +/g, " ");
export function changePrompt(units: Unit[]): string {
  const sys = taxonomy().systems.map((s) => `${s.id} (${s.label})`).join(", ");
  return `Galaxy systems: ${sys}.\n\n` + units.map((u) => {
    const files = [...u.rec.files].sort((a, b) => (a.class === "al-src" ? 0 : 1) - (b.class === "al-src" ? 0 : 1) || a.path.localeCompare(b.path));
    const body = u.body.length > BODY_CHARS ? `${u.body.slice(0, BODY_CHARS)}\n[...]` : u.body;
    return [`### PR key=${u.key}`, `Repository: ${u.rec.repo}`, `Title: ${u.rec.title}`, `Branch: ${u.rec.base}${u.rec.major ? ` (BC${u.rec.major})` : ""}; labels: ${u.rec.labels.join(", ") || "none"}`,
      `Objects: ${u.rec.join.objects.map(objectLine).join("; ") || "none joined"}`,
      `Files (${u.rec.totals.files}, +${u.rec.totals.additions} -${u.rec.totals.deletions}):`, ...files.slice(0, FILE_LINES).map((f) => `- ${f.status} ${f.path} (+${f.additions} -${f.deletions})`),
      ...(files.length > FILE_LINES ? [`- and ${files.length - FILE_LINES} more`] : []), "", "Description:", body.replace(/<!--[\s\S]*?-->/g, "").trim() || "(none)"].join("\n");
  }).join("\n\n");
}

/** Keep what the validators accept: obsoletions of joined objects only, a verbatim quote only. */
export function acceptExtraction(got: any, rec: ChangeRecord, body: string): Omit<ChangeExtraction, "item_id" | "number" | "prompt_version" | "llm"> {
  const joined = new Set(rec.join.objects.map((o) => o.name.toLowerCase()));
  const kind = CHANGE_KINDS.includes(got.change_kind) ? got.change_kind as ChangeKind : "other";
  const quote = typeof got.quote === "string" && verbatimQuote(got.quote, body.replace(/<!--[\s\S]*?-->/g, "")) ? tidy(got.quote) : null;
  return {
    summary: clip(tidy(String(got.summary ?? "")), SUMMARY_MAX + 100), key_points: (got.key_points as string[] ?? []).map(tidy).filter(Boolean).slice(0, 5),
    change_kind: kind, behavior_change: !!got.behavior_change, breaking: !!got.breaking || kind === "breaking",
    obsoletions: (got.obsoletions as any[] ?? []).filter((o) => joined.has(String(o.object ?? "").toLowerCase().trim()))
      .map((o) => ({ object: String(o.object).trim(), member: o.member ? String(o.member).trim() : null, replacement: o.replacement ? String(o.replacement).trim() : null })),
    systems: [...new Set((got.systems as string[] ?? []).filter((s) => SYSTEM_IDS.includes(s)))].slice(0, 3), quote,
  };
}

export async function extractChanges(items: ManifestItem[], o: { dataDir: string; cacheDir: string; http?: HttpGet }, llm: Llm = complete): Promise<Map<string, ChangeExtraction | Error>> {
  const results = new Map<string, ChangeExtraction | Error>();
  const units: Unit[] = [];
  for (const [i, item] of items.entries()) {
    const rec = readChangeRecord(o.dataDir, item);
    if (!rec) { results.set(item.id, new Error("change record missing: fetch first")); continue; }
    units.push({ item, key: `c${i + 1}`, rec, body: await changeBody(item, o.cacheDir, o.http) });
  }
  for (let i = 0; i < units.length; i += BATCH_SIZE) {
    const call = units.slice(i, i + BATCH_SIZE);
    let res;
    try {
      res = await llm<{ changes: any[] }>({ stage: STAGE, promptVersion: PROMPT_VERSION, role: "facts", system: SYSTEM, schema: changeSchema, prompt: changePrompt(call),
        inputs: call.map((u) => ({ kind: "change", id: u.item.id, hash: sha256(`${u.rec.merge_commit_sha}|${u.rec.title}|${u.rec.body_hash}`) })), label: `${call[0].item.id}${call.length > 1 ? ` +${call.length - 1}` : ""}` });
    } catch (e) {
      if (e instanceof LlmBudgetExhausted || e instanceof LlmInfraError) throw e;
      for (const u of call) results.set(u.item.id, e as Error);
      continue;
    }
    const byKey = new Map(res.output.changes.map((c) => [c.key, c]));
    for (const u of call) {
      const got = byKey.get(u.key);
      if (!got) { results.set(u.item.id, new Error("model returned no entry for this pull request")); continue; }
      results.set(u.item.id, {
        item_id: u.item.id, number: u.rec.number, title: u.rec.title, repo: u.rec.repo, systems_joined: u.rec.systems, ...acceptExtraction(got, u.rec, u.body), prompt_version: PROMPT_VERSION,
        llm: { model: res.meta.model, cached: res.cached, cost_usd: res.cached ? null : Number(((res.meta.cost_usd ?? 0) / call.length).toFixed(6)), changes_in_call: call.length },
      });
    }
  }
  return results;
}

export function changeExtractedHandler(deps: { cacheDir: string; http?: HttpGet }, llm: Llm = complete): StageHandler {
  return {
    batch: {
      size: BATCH_SIZE,
      run: async (items, ctx) => {
        const res = await extractChanges(items, { dataDir: ctx.dataDir, cacheDir: deps.cacheDir, http: deps.http }, llm);
        const out = new Map<string, StageResult | Error>();
        for (const item of items) {
          const x = res.get(item.id)!;
          if (x instanceof Error) { out.set(item.id, x); continue; }
          writeJson(changeExtractionPath(ctx.dataDir, item), x);
          const { llm: _l, ...facts } = x;
          out.set(item.id, { output_hash: sha256(canonicalJson(facts)), data: { prompt: `${STAGE}@${PROMPT_VERSION}`, kind: x.change_kind, behavior: x.behavior_change, cost_usd: x.llm.cost_usd } });
        }
        return out;
      },
    },
  };
}
