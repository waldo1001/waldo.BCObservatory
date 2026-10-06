/**
 * Learn page fact extraction (PLAN 4.3 stage 3, Haiku, batched): page body → data/extract/docs/<source>/<file>.json.
 *
 * Several pages per call, because a call's fixed CLI overhead (~$0.012) outweighs a median page (~$0.003). Pages are
 * packed into calls of at most CALL_CHARS; a page longer than that is split by H2 section into its own calls and the
 * parts merged deterministically (never truncated). Output per page: a short agent-facing summary, galaxy systems,
 * topics, AL objects as named, features, versions mentioned. These summaries are what hub narratives read (D12).
 * Generated reference pages (ms.topic reference) are declined: the code pillar documents objects and methods.
 */
import { resolve } from "node:path";
import matter from "gray-matter";
import { git } from "../lib/git.js";
import { writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { fileKey, type ManifestItem } from "../lib/manifest.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { taxonomy } from "../lib/config.js";
import { mirrorFor } from "../fetch/git-page.js";
import type { StageContext, StageHandler, StageResult } from "../orchestrator/execute.js";
import type { Llm } from "./video.js";
import { OBJECT_TYPES, SYSTEM_IDS } from "./video-schema.js";
import { clip, tidy } from "../summarize/video.js";

export const PROMPT_VERSION = 1;
export const STAGE = "extract-docs";
export const BATCH_SIZE = 8;
export const CALL_CHARS = 40_000;
const SUMMARY_MAX = 400;

const str = { type: "string" };
export const docsSchema = {
  type: "object", additionalProperties: false, required: ["pages"],
  properties: {
    pages: {
      type: "array",
      items: {
        type: "object", additionalProperties: false,
        required: ["key", "summary", "systems", "topics", "objects", "features", "versions"],
        properties: {
          key: str, summary: str,
          systems: { type: "array", items: { type: "string", enum: SYSTEM_IDS } },
          topics: { type: "array", items: str },
          objects: { type: "array", items: { type: "object", additionalProperties: false, required: ["type", "name"], properties: { type: { type: "string", enum: [...OBJECT_TYPES] }, name: str } } },
          features: { type: "array", items: str },
          versions: { type: "array", items: str },
        },
      },
    },
  },
};

export interface DocExtraction {
  item_id: string; url: string; title: string; blob: string | null;
  summary: string; systems: string[]; topics: string[]; objects: { type: string; name: string }[]; features: string[]; versions: string[];
  parts: number; prompt_version: number; llm: { model: string; cached: boolean; cost_usd: number | null; pages_in_call: number }[];
}

export const SYSTEM = `You extract facts from Microsoft Learn pages about Microsoft Dynamics 365 Business Central for an agent-first knowledge base.
You get several pages, each marked with a key. Return one entry per key, in any order, and no other keys.

Rules:
- Use only what each page says. No outside knowledge.
- summary: 1 or 2 plain sentences (at most ${SUMMARY_MAX} characters) that tell an AI agent what the page documents and when to use it. Start with the subject, not "This article". No hype, no em-dashes.
- systems: 1 to 3 galaxy system ids, most relevant first.
- topics: 2 to 8 short lowercase tags.
- objects: AL objects the page names explicitly (tables, pages, codeunits, reports, enums, interfaces, ...) with type and name as written. Never guess object IDs. Empty when none.
- features: named capabilities or settings the page is about (at most 8).
- versions: versions or release waves the page mentions (e.g. "2024 release wave 2", "version 25.0"). Empty when none.`;

/** Markdown body without frontmatter, comments, include directives and images; for the prompt only. */
export function cleanBody(text: string): string {
  let body = text;
  try { body = matter(text).content; } catch { /* keep raw */ }
  return body.replace(/<!--[\s\S]*?-->/g, "").replace(/^\s*\[!INCLUDE[^\]]*\][^\n]*$/gim, "").replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/:::[^\n]*:::/g, "").replace(/\n{3,}/g, "\n\n").trim();
}

/** Split a long body at H2 boundaries into parts of at most max chars (a single huge section is cut at max). */
export function splitSections(body: string, max = CALL_CHARS): string[] {
  if (body.length <= max) return [body];
  const sections = body.split(/\n(?=## )/);
  const parts: string[] = [];
  let cur = "";
  for (const sec of sections) {
    for (let i = 0; i < sec.length; i += max) {
      const piece = sec.slice(i, i + max);
      if (cur && cur.length + piece.length + 1 > max) { parts.push(cur); cur = ""; }
      cur = cur ? `${cur}\n${piece}` : piece;
    }
  }
  if (cur) parts.push(cur);
  return parts;
}

interface Unit { item: ManifestItem; key: string; part: number; text: string }

export function docsPrompt(units: Unit[]): string {
  const sys = taxonomy().systems.map((s) => `${s.id} (${s.label})`).join(", ");
  return `Galaxy systems: ${sys}.\n\n` + units.map((u) =>
    `### PAGE key=${u.key}\nTitle: ${u.item.title}\nURL: ${u.item.url}${u.part ? `\n(part ${u.part + 1} of a long page)` : ""}\n\n${u.text}`).join("\n\n");
}

/** Greedy packing of units into calls of at most max chars. */
export function pack(units: Unit[], max = CALL_CHARS): Unit[][] {
  const calls: Unit[][] = [];
  let cur: Unit[] = [], size = 0;
  for (const u of units) {
    if (cur.length && size + u.text.length > max) { calls.push(cur); cur = []; size = 0; }
    cur.push(u); size += u.text.length;
  }
  if (cur.length) calls.push(cur);
  return calls;
}

export const docExtractionPath = (dataDir: string, item: Pick<ManifestItem, "id" | "source">) =>
  resolve(dataDir, "extract", "docs", item.source, `${fileKey(item.id.slice(item.id.indexOf("/", item.id.indexOf("/") + 1) + 1))}.json`);

const uniq = (xs: string[], n: number) => [...new Set(xs.map((x) => x.trim()).filter(Boolean))].slice(0, n);

export async function extractDocs(items: ManifestItem[], ctx: Pick<StageContext, "mirrorsDir">, llm: Llm = complete): Promise<Map<string, DocExtraction | Error>> {
  const results = new Map<string, DocExtraction | Error>();
  const units: Unit[] = [];
  for (const [i, item] of items.entries()) {
    try {
      if (!item.input_hash) throw new Error("no blob id (input_hash) on item");
      const body = cleanBody(await git(["cat-file", "-p", item.input_hash], mirrorFor(ctx.mirrorsDir, item)));
      if (!body) throw new Error("empty page body");
      splitSections(body).forEach((text, part) => units.push({ item, key: `p${i}${part ? `-${part}` : ""}`, part, text }));
    } catch (e) { results.set(item.id, e as Error); }
  }
  const parts = new Map<string, { units: number; got: any[]; llm: DocExtraction["llm"] }>();
  for (const u of units) { const p = parts.get(u.item.id) ?? { units: 0, got: [], llm: [] }; p.units++; parts.set(u.item.id, p); }

  for (const call of pack(units)) {
    let out: { pages: any[] }, meta: { model: string; cached: boolean; cost: number | null };
    try {
      const res = await llm<{ pages: any[] }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "facts", system: SYSTEM, schema: docsSchema, prompt: docsPrompt(call),
        inputs: call.map((u) => ({ kind: "learn", id: u.item.id, hash: u.item.input_hash ?? undefined })), label: `${call.length} Learn page part(s)`,
      });
      out = res.output;
      meta = { model: res.meta.model, cached: res.cached, cost: res.cached ? null : res.meta.cost_usd ?? null };
    } catch (e) {
      // run-level errors (spend cap, auth) must reach the executor unchanged
      if (e instanceof LlmBudgetExhausted || e instanceof LlmInfraError) throw e;
      for (const u of call) results.set(u.item.id, e as Error);
      continue;
    }
    const byKey = new Map(out.pages.map((p) => [p.key, p]));
    for (const u of call) {
      const p = parts.get(u.item.id)!;
      p.llm.push({ model: meta.model, cached: meta.cached, cost_usd: meta.cost === null ? null : Number((meta.cost / call.length).toFixed(6)), pages_in_call: call.length });
      const got = byKey.get(u.key);
      if (got) p.got.push(got);
    }
  }

  for (const item of items) {
    if (results.has(item.id)) continue;
    const p = parts.get(item.id);
    if (!p || p.got.length < p.units) { results.set(item.id, new Error(`model returned ${p?.got.length ?? 0} of ${p?.units ?? 0} part(s)`)); continue; }
    const objKey = new Set<string>();
    results.set(item.id, {
      item_id: item.id, url: item.url, title: item.title, blob: item.input_hash ?? null,
      summary: clip(tidy(p.got.map((g) => g.summary).join(" ")), SUMMARY_MAX + 200),
      systems: uniq(p.got.flatMap((g) => g.systems).filter((s: string) => SYSTEM_IDS.includes(s)), 3),
      topics: uniq(p.got.flatMap((g) => g.topics).map((t: string) => t.toLowerCase()), 10),
      objects: p.got.flatMap((g) => g.objects).filter((o: any) => { const k = `${o.type}|${String(o.name).toLowerCase().trim()}`; if (objKey.has(k) || !String(o.name).trim()) return false; objKey.add(k); return true; })
        .map((o: any) => ({ type: o.type, name: String(o.name).trim() })),
      features: uniq(p.got.flatMap((g) => g.features), 12), versions: uniq(p.got.flatMap((g) => g.versions), 10),
      parts: p.units, prompt_version: PROMPT_VERSION, llm: p.llm,
    });
  }
  return results;
}

/** Pages worth an LLM call: everything except generated reference pages. */
export const extractable = (item: ManifestItem) => item.meta?.ms_topic !== "reference";

export function docsExtractedHandler(llm: Llm = complete): StageHandler {
  return {
    accepts: extractable,
    batch: {
      size: BATCH_SIZE,
      run: async (items, ctx) => {
        const res = await extractDocs(items, ctx, llm);
        const out = new Map<string, StageResult | Error>();
        for (const item of items) {
          const x = res.get(item.id)!;
          if (x instanceof Error) { out.set(item.id, x); continue; }
          writeJson(docExtractionPath(ctx.dataDir, item), x);
          const { llm: _l, ...facts } = x;
          out.set(item.id, {
            output_hash: sha256(canonicalJson(facts)),
            data: { prompt: `${STAGE}@${PROMPT_VERSION}`, parts: x.parts, objects: x.objects.length, cost_usd: Number(x.llm.reduce((s, l) => s + (l.cost_usd ?? 0), 0).toFixed(6)) },
          });
        }
        return out;
      },
    },
  };
}

/** Docs have no per-page Sonnet summary or page (D01, D12): these stages only move the item along. */
export const passThrough = (data: Record<string, unknown>): StageHandler => async () => ({ data });
