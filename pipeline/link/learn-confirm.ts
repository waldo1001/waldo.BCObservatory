/**
 * Model confirmation of Learn links (D106, spec 4.1; Haiku, role `facts`, quota learn_confirm in units a night): for
 * an AL object or a code change that no Learn page names, which Learn pages, if any, document its behaviour.
 *
 * Deterministic first: a unit is an object or change that changed lately (a change merged in the last LOOKBACK_DAYS,
 * an object one of them touched) or that a video or post names, and that has no certain Learn link yet. Its
 * candidates are the MAX_CANDIDATES extracted Learn pages sharing the most distinctive words with it (IDF over the
 * Learn titles, summaries and keywords). The shared search scorer is not used here: it wants every query word to
 * match, which a name like "Environment Cleanup Subs" never does. Haiku only picks among the candidates (0 to
 * MAX_PICKS); a pick outside them is dropped. Every pick becomes a `possibly related` row with `by: model` in
 * crosslinks.ts, never a certain link.
 *
 * A unit is redone only when its hash (its text and its candidates) changes. Writes data/links/learn-confirm.json.
 */
import { resolve } from "node:path";
import { listFiles, readJson, readJsonOr, readText, writeJson } from "../lib/fsx.js";
import { complete, LlmBudgetExhausted, LlmInfraError } from "../lib/llm.js";
import { logger } from "../lib/log.js";
import { sha256 } from "../lib/text.js";
import type { Llm } from "../extract/video.js";
import { pool } from "../summarize/hub.js";
import { buildCrossLinks, isCertain, loadCrossLinkInput } from "./crosslinks.js";
import { frontmatterOf } from "./related.js";

const log = logger("learn-confirm");

export const PROMPT_VERSION = 1;
export const STAGE = "link-learn-confirm";
export const BATCH_SIZE = 8;
export const MAX_CANDIDATES = 5;
export const MAX_PICKS = 2;
export const LOOKBACK_DAYS = 183;
export const REASON_MAX = 140;
/** A candidate needs this many shared distinctive words and this score (sum of their IDF). */
export const MIN_SHARED = 2;
export const MIN_SCORE = 6;

export const SYSTEM = `You link Microsoft Dynamics 365 Business Central AL objects and code changes (merged pull requests of Microsoft's code) to Microsoft Learn pages that document their behaviour.
For each item you get its facts and a short list of candidate Learn pages (title and summary). Pick a page only when it documents what this object does or what this change changes, in a way a reader of the page would recognise (the setup, the process, the feature the code implements). A page that only shares words is not a pick. Pick at most ${MAX_PICKS} pages per item, often none.
For each pick give one reason of at most 20 words, in plain English, that says what the page documents about this item. Never invent pages: use the candidate ids given for that item only.`;

export type UnitKind = "object" | "change";
export interface LearnCandidate { alias: string; url: string; title: string; summary: string }
export interface ConfirmUnit { kind: UnitKind; key: string; title: string; text: string; cands: LearnCandidate[]; hash: string }
export interface ConfirmRecord { kind: UnitKind; hash: string; at: string; picks: { url: string; reason: string }[] }
export interface LearnConfirm { prompt_version: number; units: Record<string, ConfirmRecord> }
export interface LearnConfirmRun { units: number; stale: number; called: number; calls: number; picks: number; rejected: number; failed: number; cost_usd: number; rejections: string[]; stopped: "done" | "quota" | "deadline" | "spend-cap" | "aborted"; errors: string[] }

export const learnConfirmPath = (dataDir: string) => resolve(dataDir, "links", "learn-confirm.json");
export const loadLearnConfirm = (dataDir: string): LearnConfirm => readJsonOr<LearnConfirm>(learnConfirmPath(dataDir), { prompt_version: 0, units: {} });

// ---------------------------------------------------------------------------------------------- candidates

const STOP = new Set(("the and for with from your you are not all how what this that into its can use using used when which will about " +
  "business central microsoft dynamics learn page pages table tables codeunit codeunits report reports field fields setup set " +
  "data new add added change changes changed fix fixed fixes master main support issue update updated").split(" "));
/** Lower-cased words of at least 3 letters, CamelCase and punctuation split, stop words out. */
export function words(s: string): string[] {
  return s.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2").toLowerCase()
    .split(/[^a-z0-9]+/).filter((w) => w.length >= 3 && !/^\d+$/.test(w) && !STOP.has(w)).map((w) => (w.length > 4 && w.endsWith("s") ? w.slice(0, -1) : w));
}

export interface LearnText { url: string; title: string; summary: string; keywords: string[] }
export interface CandidateIndex { docs: { d: LearnText; w: Map<string, number> }[]; idf: Map<string, number> }

export function candidateIndex(docs: LearnText[]): CandidateIndex {
  const rows = docs.map((d) => {
    const w = new Map<string, number>();
    for (const t of words(d.title)) w.set(t, Math.max(w.get(t) ?? 0, 2));
    for (const t of [...words(d.summary), ...d.keywords.flatMap(words)]) w.set(t, Math.max(w.get(t) ?? 0, 1));
    return { d, w };
  });
  const df = new Map<string, number>();
  for (const r of rows) for (const t of r.w.keys()) df.set(t, (df.get(t) ?? 0) + 1);
  const n = Math.max(1, rows.length);
  return { docs: rows, idf: new Map([...df].map(([t, c]) => [t, Math.log(n / c)])) };
}

/** The best MAX_CANDIDATES Learn pages for a unit's text, each sharing MIN_SHARED words worth MIN_SCORE. */
export function candidatesFor(idx: CandidateIndex, text: string, exclude: ReadonlySet<string> = new Set(), minScore = MIN_SCORE): LearnText[] {
  const q = new Set(words(text));
  const scored: { d: LearnText; s: number }[] = [];
  for (const { d, w } of idx.docs) {
    if (exclude.has(d.url)) continue;
    let s = 0, shared = 0;
    for (const t of q) { const k = w.get(t); if (k) { s += k * (idf(idx, t)); shared++; } }
    if (shared >= MIN_SHARED && s >= minScore) scored.push({ d, s });
  }
  return scored.sort((a, b) => b.s - a.s || a.d.url.localeCompare(b.d.url)).slice(0, MAX_CANDIDATES).map((x) => x.d);
}
const idf = (idx: CandidateIndex, t: string) => idx.idf.get(t) ?? 0;

const unitHash = (text: string, cands: LearnCandidate[]) => sha256(JSON.stringify({ v: PROMPT_VERSION, text, cands: cands.map((c) => c.url) }));

/** The units of tonight, from the extracted Learn pages, last night's change, video and post pages and the cross-links. */
export function gatherConfirmUnits(dataDir: string, contentDir: string, now: Date, minScore = MIN_SCORE): ConfirmUnit[] {
  const { errors: _e, ...inp } = loadCrossLinkInput(dataDir, contentDir);
  const xl = buildCrossLinks({ ...inp, model: [] });
  const learnRows = (id: string) => (xl.pages[id] ?? []).filter((r) => isCertain(r) && /^https?:/.test(r.to)).map((r) => r.to);
  const certain = (id: string) => new Set([...(inp.documented.get(id) ?? []).map((d) => d.url), ...learnRows(id)]);
  const docs: LearnText[] = [];
  const items = new Map(listFiles(resolve(dataDir, "manifest", "docs"), ".json").map((f) => readJson<{ id: string; meta?: { keywords?: string[] } }>(f)).map((i) => [i.id, i]));
  for (const f of listFiles(resolve(dataDir, "extract", "docs"), ".json")) {
    const x = readJson<{ item_id: string; url: string; title: string; summary?: string }>(f);
    docs.push({ url: x.url, title: x.title, summary: x.summary ?? "", keywords: items.get(x.item_id)?.meta?.keywords ?? [] });
  }
  const idx = candidateIndex(docs.sort((a, b) => a.url.localeCompare(b.url)));
  const since = new Date(now.getTime() - LOOKBACK_DAYS * 86_400_000).toISOString();
  const units: ConfirmUnit[] = [];
  const lately = new Set<string>();
  const changes = listFiles(resolve(contentDir, "changes"), ".md").map((f) => frontmatterOf(readText(f))).filter((fm): fm is Record<string, any> => fm?.type === "change" && String(fm.merged_at ?? "") >= since);
  const make = (kind: UnitKind, key: string, title: string, text: string) => {
    const cs = candidatesFor(idx, text, certain(key), minScore).map((d, i) => ({ alias: `L${i + 1}`, url: d.url, title: d.title, summary: d.summary.slice(0, 300) }));
    if (cs.length) units.push({ kind, key, title, text, cands: cs, hash: unitHash(text, cs) });
  };
  for (const fm of changes.sort((a, b) => String(a.id).localeCompare(String(b.id)))) {
    const objs = (fm.links?.objects ?? []).map(String);
    // a change that touches no AL object (AL-Go, BCQuality) is not what Learn documents
    if (!objs.length) continue;
    for (const o of objs) lately.add(o);
    if (certain(String(fm.id)).size) continue;
    const named = objs.map((o: string) => inp.titles.get(o) ?? o);
    make("change", String(fm.id), String(fm.title), `${String(fm.title).replace(/^#\d+\s*/, "").replace(/\[[^\]]*\]/g, " ")}. Objects: ${named.join("; ")}`);
  }
  for (const m of inp.media) for (const o of m.objects) lately.add(o);
  // an object's facts: its title, namespace and app (data/index/objects.json), and the events it publishes
  const rows = readJsonOr<{ rows?: unknown[][] }>(resolve(dataDir, "index", "objects.json"), {}).rows ?? [];
  const where = new Map(rows.map((r) => [`object/${r[0]}`, { app: r[4] ? String(r[4]) : "", ns: r[5] ? String(r[5]) : "" }]));
  const events = new Map<string, string[]>();
  for (const [owner, name] of readJsonOr<{ rows?: [string, string][] }>(resolve(dataDir, "index", "events.json"), {}).rows ?? []) {
    const id = `object/${owner}`;
    events.set(id, [...(events.get(id) ?? []), String(name)]);
  }
  for (const id of [...lately].sort()) {
    if (!id.startsWith("object/") || certain(id).size) continue;
    const ref = inp.objects.refs.get(id);
    if (!ref) continue;
    const w = where.get(id), ev = (events.get(id) ?? []).slice(0, 12);
    make("object", id, inp.titles.get(id) ?? id, `${inp.titles.get(id) ?? ref.name}.${w?.ns ? ` Namespace ${w.ns}.` : ""}${w?.app ? ` App ${w.app}.` : ""}${ev.length ? ` Events: ${ev.join(", ")}.` : ""}`);
  }
  return units;
}

// ---------------------------------------------------------------------------------------------- calls

export interface Call { units: (ConfirmUnit & { ref: string })[]; cands: LearnCandidate[] }

/** Units in batches of BATCH_SIZE; each call carries the union of its units' candidates under call-wide aliases. */
export function planConfirmCalls(units: ConfirmUnit[]): Call[] {
  const calls: Call[] = [];
  for (let i = 0; i < units.length; i += BATCH_SIZE) {
    const byUrl = new Map<string, LearnCandidate>();
    const us = units.slice(i, i + BATCH_SIZE).map((u, j) => ({
      ...u, ref: `U${j + 1}`,
      cands: u.cands.map((c) => { if (!byUrl.has(c.url)) byUrl.set(c.url, { ...c, alias: `L${byUrl.size + 1}` }); return byUrl.get(c.url)!; }),
    }));
    calls.push({ units: us, cands: [...byUrl.values()] });
  }
  return calls;
}

export function confirmCallSchema(c: Call) {
  return {
    type: "object", additionalProperties: false, required: ["picks"],
    properties: { picks: { type: "array", items: { type: "object", additionalProperties: false, required: ["ref", "page", "reason"], properties: {
      ref: { type: "string", enum: c.units.map((u) => u.ref) }, page: { type: "string", enum: c.cands.map((x) => x.alias) }, reason: { type: "string" },
    } } } },
  };
}

export function confirmCallPrompt(c: Call): string {
  const pages = c.cands.map((x) => ({ id: x.alias, title: x.title, summary: x.summary }));
  const items = c.units.map((u) => ({ ref: u.ref, kind: u.kind, title: u.title, facts: u.text, pages: u.cands.map((x) => x.alias) }));
  return `Learn pages (JSON):\n${JSON.stringify(pages)}\n\nItems (JSON; each lists the page ids it may link to):\n${JSON.stringify(items, null, 1)}`;
}

/** Keep a candidate of that ref, at most MAX_PICKS per unit, no duplicates; reasons clipped at REASON_MAX. */
export function validatePicks(c: Call, raw: { ref: string; page: string; reason: string }[]): { kept: Map<string, { url: string; reason: string }[]>; rejected: string[] } {
  const byRef = new Map(c.units.map((u) => [u.ref, u]));
  const kept = new Map<string, { url: string; reason: string }[]>(c.units.map((u) => [u.key, []]));
  const rejected: string[] = [];
  for (const p of raw) {
    const u = byRef.get(p.ref);
    const cand = u?.cands.find((x) => x.alias === p.page);
    const have = u ? kept.get(u.key)! : [];
    const why = !u ? "unknown ref" : !cand ? "not a candidate of this item" : have.some((h) => h.url === cand.url) ? "duplicate"
      : have.length >= MAX_PICKS ? `more than ${MAX_PICKS} picks` : !p.reason.trim() ? "no reason" : null;
    if (why) { rejected.push(`${u?.key ?? p.ref} -> ${cand?.url ?? p.page}: ${why}`); continue; }
    const r = p.reason.replace(/\s+/g, " ").trim();
    have.push({ url: cand!.url, reason: r.length > REASON_MAX ? `${r.slice(0, r.lastIndexOf(" ", REASON_MAX)).trim()}…` : r });
  }
  return { kept, rejected };
}

export async function confirmLearnLinks(
  dataDir: string, contentDir: string,
  o: { quota: number; deadline: Date; clock: () => Date; llm?: Llm; concurrency?: number; only?: (key: string) => boolean; minScore?: number },
): Promise<{ confirm: LearnConfirm; run: LearnConfirmRun }> {
  const llm = o.llm ?? complete;
  const prev = loadLearnConfirm(dataDir);
  const run: LearnConfirmRun = { units: 0, stale: 0, called: 0, calls: 0, picks: 0, rejected: 0, failed: 0, cost_usd: 0, rejections: [], stopped: "done", errors: [] };
  const now = o.clock();
  const units = gatherConfirmUnits(dataDir, contentDir, now, o.minScore).filter((u) => !o.only || o.only(u.key));
  const live = new Set(units.map((u) => u.key));
  const out: LearnConfirm = { prompt_version: PROMPT_VERSION, units: {} };
  // a unit that is gone (it got a certain link, or left the window) keeps nothing; others keep their record
  for (const [k, r] of Object.entries(prev.units)) if (live.has(k) || (o.only && !o.only(k))) out.units[k] = r;
  const stale = units.filter((u) => prev.units[u.key]?.hash !== u.hash);
  Object.assign(run, { units: units.length, stale: stale.length });
  await pool(planConfirmCalls(stale), o.concurrency ?? 1, async (c) => {
    if (run.stopped !== "done") return;
    if (run.called >= o.quota) { run.stopped = "quota"; return; }
    if (o.clock().getTime() >= o.deadline.getTime()) { run.stopped = "deadline"; return; }
    run.calls++;
    run.called += c.units.length;
    const label = `${c.units[0].key}${c.units.length > 1 ? ` +${c.units.length - 1}` : ""}`;
    try {
      const res = await llm<{ picks: { ref: string; page: string; reason: string }[] }>({
        stage: STAGE, promptVersion: PROMPT_VERSION, role: "facts", system: SYSTEM, schema: confirmCallSchema(c), prompt: confirmCallPrompt(c),
        inputs: c.units.map((u) => ({ kind: "learn-confirm", id: u.key, hash: u.hash })), label,
      });
      if (!res.cached) run.cost_usd += res.meta.cost_usd ?? 0;
      const { kept, rejected } = validatePicks(c, res.output.picks);
      run.rejected += rejected.length;
      run.rejections.push(...rejected.slice(0, Math.max(0, 20 - run.rejections.length)));
      const at = o.clock().toISOString();
      for (const u of c.units) {
        const picks = kept.get(u.key) ?? [];
        out.units[u.key] = { kind: u.kind, hash: u.hash, at, picks };
        run.picks += picks.length;
      }
    } catch (e) {
      if (e instanceof LlmBudgetExhausted) { run.stopped = "spend-cap"; return; }
      if (e instanceof LlmInfraError) { run.stopped = "aborted"; run.errors.push(`${label}: ${e.message}`); return; }
      run.failed++;
      run.errors.push(`learn confirm ${label}: ${String((e as Error).message).slice(0, 200)}`);
      log.warn(`${label} failed: ${String((e as Error).message).slice(0, 200)}`);
    }
  });
  writeJson(learnConfirmPath(dataDir), { prompt_version: PROMPT_VERSION, units: Object.fromEntries(Object.entries(out.units).sort(([a], [b]) => a.localeCompare(b))) });
  return { confirm: out, run };
}
