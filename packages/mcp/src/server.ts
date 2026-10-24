#!/usr/bin/env node
/**
 * bc-observatory MCP server (PLAN 4.7, D35): BC Observatory's knowledge base for agents, over stdio.
 *
 * Data: the site's search index (index-manifest.json + its page shards, cached by sha256 in
 * ~/.cache/bc-observatory/<site hash>/, refreshed daily) and its markdown twins (<path>.md). Set
 * BC_OBSERVATORY_LOCAL=<repo checkout> to read content/ and data/ from disk instead (offline, tests), or
 * BC_OBSERVATORY_SITE to point at another deployment.
 *
 * Tools (D108: bc_ names, so a client that finds deferred tools by keyword finds them for Business Central questions): bc_search,
 * bc_brief, bc_ls, bc_cat, bc_get_object, bc_diff_object, bc_localization, bc_whats_new, bc_blog_footprint, bc_feedback, bc_status.
 * Every data answer ends with its data date; an empty one says so (NO_MATCH); a data source that does not answer is an error
 * that says "unreachable" (D108). brief (D106)
 * answers in five layers (Learn, code, changes, heads up, gaps) from the keyword hits and the pages they lead to.
 * Long pages come back compact (sections.ts, D93): over BC_OBSERVATORY_MAX_CHARS (30,000; 0 = no limit), cat, get_object
 * and localization answer with the frontmatter, the section keys and the first rows; section, offset and limit read one.
 *
 * Search ranks with the site's scorer (D86, packages/search, bundled into dist/server.js): the same parser (`t36`,
 * `cu 80`, `table 36 BE`, bare ids, plurals, one typo, synonyms) and the same order. Hybrid by default (D63): the exact
 * band (references and exact names) is pinned on top, the rest of the keyword list is fused with static embeddings
 * (model2vec potion-base-8M, MIT) by reciprocal rank, so "client" still finds Customer by meaning. The model (30 MB) is
 * downloaded once on the first search, pinned by revision and checked by SHA-256, into ~/.cache/bc-observatory/models/.
 * BC_OBSERVATORY_EMBEDDINGS=0 turns it off; BC_OBSERVATORY_MODEL_DIR uses a model on disk (offline, tests). Without a
 * model, search is keyword-only.
 */
import { createHash, randomUUID } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, realpathSync, statSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  KIND_OF, KINDS, countriesOf, hints, learnRecords, pageToRecord, parseQuery, prepare, search as rank, symbolLine, symbolRecords, systemOf, typeOfWord,
  type Hit, type Index, type LearnShard, type PageRecord, type SearchRecord, type SymbolShard,
} from "@bc-observatory/search";
import { dot, embed, parseModel, type StaticModel } from "./embed.js";
import { countryBlock, memberAnswer, parseAnchor, replacedInLine, type DiffObject } from "./country.js";
import { DEFAULT_BUDGET, anchorView, budgetOf, pageView, type ViewArgs } from "./sections.js";
import { brief } from "./brief.js";
import { createTelemetry, type Client, type ToolCall } from "./telemetry.js";

const VERSION = "0.12.0";
const SITE = (process.env.BC_OBSERVATORY_SITE ?? "https://waldo1001.github.io/waldo.BCObservatory/").replace(/\/?$/, "/");
const LOCAL = process.env.BC_OBSERVATORY_LOCAL ? resolve(process.env.BC_OBSERVATORY_LOCAL) : null;
/** D110: the Application Insights connection string, set by esbuild define in publish-mcp; tsx runs have none. */
declare const __BCOBS_AI__: string | undefined;
let clientOf: () => Client = () => ({});
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
/** D111: a random install id in `<dir>/install-id`, created once and reused; undefined when the folder cannot be written. */
export function installId(dir: string): string | undefined {
  const file = join(dir, "install-id");
  try {
    const have = existsSync(file) ? readFileSync(file, "utf8").trim() : "";
    if (UUID.test(have)) return have.toLowerCase();
    const id = randomUUID();
    mkdirSync(dir, { recursive: true });
    writeFileSync(file, `${id}\n`);
    return id;
  } catch { return undefined; }
}
const telemetry = createTelemetry({ env: process.env, connection: typeof __BCOBS_AI__ === "string" ? __BCOBS_AI__ : undefined,
  version: VERSION, getClient: () => clientOf(),
  getInstallId: () => installId(join(process.env.XDG_CACHE_HOME ?? join(homedir(), ".cache"), "bc-observatory")) });
/** One answer's characters (D93): a longer page comes back compact; B is how the descriptions say it. */
const BUDGET = budgetOf(process.env.BC_OBSERVATORY_MAX_CHARS);
const B = (Number.isFinite(BUDGET) ? BUDGET : DEFAULT_BUDGET).toLocaleString("en-US");
const REPO = "https://github.com/waldo1001/waldo.BCObservatory";
const DAY = 86_400_000;
/** D108: the majors the code pillar snapshots in full and the range of its version diffs; a test checks both against
 * config/versions.json and data/code/diffs/version/. */
export const SNAPSHOT_MAJORS = ["28", "29", "30"], DIFF_RANGE = ["23", "30"] as const;
const VNEXT = SNAPSHOT_MAJORS.at(-1)!;
/** D108: the last line of an answer that found nothing, so a client falls back on purpose and says so. */
export const NO_MATCH = "No match in the Observatory. Try Microsoft Learn or web search, and tell the user the Observatory had no answer.";
export const COVERAGE = `covers BC ${SNAPSHOT_MAJORS.join(", ")} (${VNEXT} is vNext) AL objects, version diffs BC ${DIFF_RANGE[0]} to ${DIFF_RANGE[1]}`;
/** The page types the nightly adds; the newest of their dates (up to today) is the data date of D108. */
const NEWS_TYPES = new Set(["change", "video", "post", "release", "digest", "hotfix"]);

export type { PageRecord };
interface IndexManifest { schema: string; pages: number; by_type?: Record<string, number>; shards: { file: string; count: number; sha256: string; kind?: string }[]; learn?: { file: string; count: number; sha256: string }; learn_facts?: { file: string; count: number; sha256: string } }

// ---------------------------------------------------------------------------------------------- data access

const cacheDir = join(process.env.XDG_CACHE_HOME ?? join(homedir(), ".cache"), "bc-observatory", createHash("sha256").update(SITE).digest("hex").slice(0, 12));
async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, { headers: { "user-agent": `bc-observatory-mcp/${VERSION}` } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}
/** A data file (index manifest, shard, diff): from disk in local mode, else from the site. */
async function dataFile(rel: string): Promise<string> {
  if (LOCAL) return readFileSync(join(LOCAL, "data", rel), "utf8");
  return fetchText(`${SITE}${rel}`);
}
/** A page's markdown: content/<path>.md locally, the site's markdown twin otherwise. */
async function pageMarkdown(path: string): Promise<string> {
  const clean = path.replace(/^\/+|\/+$/g, "").replace(/\.md$/, "");
  if (LOCAL) {
    const p = join(LOCAL, "content", `${clean}.md`);
    if (!existsSync(p)) throw new Error(`no page at ${clean}`);
    return readFileSync(p, "utf8");
  }
  return fetchText(`${SITE}${clean}.md`);
}

let pages: PageRecord[] = [];
let index: Index | null = null;
let loadedAt = 0;
/** D108: the data date every answer ends with: the site's last deploy, else the newest nightly item up to today. */
let dataDate: string | null = null, newestItem: string | null = null;
/** The major the symbols index (and with it the country diffs of D95) is built for. */
let symbolsMajor: string | null = null;

/** A shard by its sha256: cached on disk, downloaded only when the manifest names a new hash. */
async function shard(file: string, sha: string): Promise<string> {
  const cached = join(cacheDir, `${sha}.json`);
  if (!LOCAL && existsSync(cached)) return readFileSync(cached, "utf8");
  const text = await dataFile(`index/${file}`);
  if (!LOCAL) writeFileSync(cached, text);
  return text;
}
/** D106: the Learn key facts file the index manifest names, read on the first brief. */
let learnFactsRef: IndexManifest["learn_facts"] | undefined;
let learnFacts: { at: number; facts: Map<string, [string, string][]> } | null = null;
async function loadLearnFacts(): Promise<Map<string, [string, string][]>> {
  await loadIndex();
  if (learnFacts && learnFacts.at === loadedAt) return learnFacts.facts;
  let facts = new Map<string, [string, string][]>();
  if (learnFactsRef) {
    try { facts = new Map(Object.entries((JSON.parse(await shard(learnFactsRef.file, learnFactsRef.sha256)) as { facts: Record<string, [string, string][]> }).facts)); } catch { /* the brief goes on without facts */ }
  }
  learnFacts = { at: loadedAt, facts };
  return facts;
}
/** The page shards, prepared for the shared scorer (D86); reloaded once a day. */
async function loadIndex(): Promise<void> {
  if (index && Date.now() - loadedAt < DAY) return;
  const manifest = JSON.parse(await dataFile("index/index-manifest.json")) as IndexManifest;
  const all: PageRecord[] = [];
  if (!LOCAL) mkdirSync(cacheDir, { recursive: true });
  for (const s of manifest.shards) all.push(...(JSON.parse(await shard(s.file, s.sha256)) as PageRecord[]));
  pages = all;
  const today = new Date().toISOString().slice(0, 10);
  newestItem = all.reduce<string | null>((d, p) => (p.date && NEWS_TYPES.has(p.type) && p.date <= today && (!d || p.date > d) ? p.date.slice(0, 10) : d), null);
  // the day the site last deployed (every nightly deploys, quiet or not); locally, and when the header is missing, the newest item
  dataDate = (LOCAL ? null : (await lastDeployed())?.slice(0, 10)) ?? newestItem;
  learnFactsRef = manifest.learn_facts;
  const idx = prepare(all.map(pageToRecord));
  // D94: the Learn articles, searchable but not pages here (ls, whats_new and the meaning ranking read `pages` only)
  if (manifest.learn) {
    try { prepare(learnRecords(JSON.parse(await shard(manifest.learn.file, manifest.learn.sha256)) as LearnShard).map(pageToRecord), idx); } catch { /* the pages still search */ }
  }
  // the symbols index (D86 4.4): fields, events, global procedures and enum values, under their objects' records
  let sm: SymbolsManifest | null = null;
  try { sm = JSON.parse(await dataFile("index/symbols-manifest.json")) as SymbolsManifest; } catch { sm = null; }
  symbolsMajor = sm?.major ?? null;
  if (sm) {
    const byPath = new Map(idx.records.map((r) => [r.id, r]));
    for (const [k, e] of Object.entries(sm.kinds) as [SymbolShard, SymbolsManifest["kinds"][SymbolShard]][]) {
      const files = e.files ?? (e.file ? [e.file] : []);
      for (const f of files) {
        const doc = JSON.parse(await shard(f, files.length === 1 ? e.sha256 : `${e.sha256}-${f}`)) as { rows: unknown[][] };
        prepare(symbolRecords(KIND_OF[k], doc.rows, (pk) => byPath.get(`objects/${pk}`)), idx);
      }
    }
  }
  index = idx;
  loadedAt = Date.now();
  countryDiffs.clear();
}
interface SymbolsManifest { major: string; commit?: string; built_at?: string; kinds: Record<SymbolShard, { file?: string; files?: string[]; sha256: string; count: number }> }

// ---------------------------------------------------------------------------------------------- country diffs (D95)

/** The objects a country layer replaces, by key, from data/code/diffs/country/<major>-<cc>.json; null when the file does not exist. */
type ReplacedObjects = Map<string, DiffObject> | null;
const countryDiffs = new Map<string, { at: number; objects: ReplacedObjects | Promise<ReplacedObjects> }>();
/** The major of the country diffs: the symbols manifest's, else the newest major any object page is present in. */
function diffMajor(): string | null {
  if (symbolsMajor) return symbolsMajor;
  let best = 0;
  for (const r of index?.records ?? []) for (const part of (r.major ?? "").split(/[\s,]+/)) { const n = Number(part.split("-").pop()); if (n > best) best = n; }
  return best ? String(best) : null;
}
/** One layer's replaced objects, read once and kept for a day (22 files for a W1 lookup without a country). */
function replacedObjects(major: string, cc: string): Promise<ReplacedObjects> {
  const key = `${major}-${cc}`, hit = countryDiffs.get(key);
  if (hit && Date.now() - hit.at < DAY) return Promise.resolve(hit.objects);
  const loading = (async (): Promise<ReplacedObjects> => {
    try {
      const diff = JSON.parse(await dataFile(`code/diffs/country/${key}.json`)) as { objects: DiffObject[] };
      return new Map(diff.objects.filter((o) => o.change === "replaced").map((o) => [o.key, o]));
    } catch { return null; }
  })();
  countryDiffs.set(key, { at: Date.now(), objects: loading });
  void loading.then((o) => { const e = countryDiffs.get(key); if (e) e.objects = o; });
  return loading;
}
/** The object a layer replaces, or null: the layer has no diff, or does not touch the object. */
const replacedBy = async (major: string, cc: string, key: string) => (await replacedObjects(major, cc))?.get(key) ?? null;

const url = (path: string) => `${SITE}${path}/`;
const line = (r: PageRecord, tag = "") => `- ${r.title}${r.caption ? ` (captioned "${r.caption}")` : ""} [${r.type}${r.tier ? `, ${r.tier}` : ""}${r.date ? `, ${r.date}` : ""}] path=${r.path}${tag}${r.path_label ? `\n  in: ${r.path_label}` : ""}${r.stats ? `\n  ${r.stats}` : ""}\n  ${r.summary}`;
const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });
/** A symbol hit: name, what it is and where, its path with the anchor, then its doc line. */
const symbolHit = (r: SearchRecord, tag = "") => `- ${r.name} (${symbolLine(r).replace(/ · /g, ", ")}) path=${r.id}${tag}${r.text ? `\n  ${r.text}` : ""}`;
/** A Learn article (D94): its URL on learn.microsoft.com instead of a path, and the hub that lists it. */
const learnLine = (r: PageRecord, tag = "") => `- ${r.title} [learn, official${r.date ? `, ${r.date}` : ""}] url=${r.path}${tag}${r.path_label ? `\n  in: ${r.path_label}${r.hub ? ` (hub: ${r.hub})` : ""}` : ""}\n  ${r.summary}`;
const hitLine = (r: SearchRecord, tag = "") => (r.kind === "page" && r.page ? (r.type === "learn" ? learnLine(r.page, tag) : line(r.page, tag)) : symbolHit(r, tag));

// ---------------------------------------------------------------------------------------------- embeddings (D63)

const MODEL = {
  repo: "minishlab/potion-base-8M", revision: "bf8b056651a2c21b8d2565580b8569da283cab23",
  sha256: {
    "config.json": "2a6ac0e9aaa356a68a5688070db78fc3a464fefe85d2f06a1905ce3718687553",
    "tokenizer.json": "e67e803f624fb4d67dea1c730d06e1067e1b14d830e2c2202569e3ef0f70bb50",
    "model.safetensors": "f65d0f325faadc1e121c319e2faa41170d3fa07d8c89abd48ca5358d9a223de2",
  } as Record<string, string>,
};
const MODEL_DIR = process.env.BC_OBSERVATORY_MODEL_DIR ? resolve(process.env.BC_OBSERVATORY_MODEL_DIR) : null;
// a local checkout is for offline use and tests: no download there unless a model directory is named
const EMBEDDINGS = process.env.BC_OBSERVATORY_EMBEDDINGS !== "0" && (!LOCAL || !!MODEL_DIR);
let model: StaticModel | null = null;
let modelError: string | null = EMBEDDINGS ? null : "turned off";
let vectors: { at: number; data: Float32Array } | null = null;

async function loadModel(): Promise<StaticModel | null> {
  if (model || modelError) return model;
  try {
    let dir = MODEL_DIR;
    if (!dir) {
      dir = join(process.env.XDG_CACHE_HOME ?? join(homedir(), ".cache"), "bc-observatory", "models", `potion-base-8M@${MODEL.revision.slice(0, 12)}`);
      mkdirSync(dir, { recursive: true });
      for (const [file, sha] of Object.entries(MODEL.sha256)) {
        const p = join(dir, file);
        if (existsSync(p)) continue;
        const res = await fetch(`https://huggingface.co/${MODEL.repo}/resolve/${MODEL.revision}/${file}`, { headers: { "user-agent": `bc-observatory-mcp/${VERSION}` } });
        if (!res.ok) throw new Error(`HTTP ${res.status} for ${file}`);
        const buf = Buffer.from(await res.arrayBuffer());
        if (createHash("sha256").update(buf).digest("hex") !== sha) throw new Error(`${file} does not match its pinned SHA-256`);
        writeFileSync(p, buf);
      }
    }
    model = parseModel(readFileSync(join(dir, "tokenizer.json"), "utf8"), new Uint8Array(readFileSync(join(dir, "model.safetensors"))), JSON.parse(readFileSync(join(dir, "config.json"), "utf8")));
  } catch (e) {
    modelError = String((e as Error).message).slice(0, 160);
  }
  return model;
}
/** One vector per page (title, summary, tags), rebuilt when the index reloads: 22k pages take about 0.3 s. */
function pageVectors(m: StaticModel): Float32Array {
  if (vectors && vectors.at === loadedAt) return vectors.data;
  const data = new Float32Array(pages.length * m.dims);
  pages.forEach((p, i) => data.set(embed(m, [p.title, p.summary, ...(p.tags ?? [])].filter(Boolean).join(". ")), i * m.dims));
  vectors = { at: loadedAt, data };
  return data;
}
/** Reciprocal rank fusion of ranked lists of paths (k = 60). */
export function fuse(lists: string[][], k = 60): string[] {
  const score = new Map<string, number>();
  for (const list of lists) list.forEach((p, i) => score.set(p, (score.get(p) ?? 0) + 1 / (k + i + 1)));
  return [...score].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([p]) => p);
}

// ---------------------------------------------------------------------------------------------- tools

export interface SearchArgs {
  query: string; type?: string; tier?: string; system?: string; country?: string; app?: string; object_type?: string; kind?: string;
  limit?: number; mode?: "hybrid" | "keyword" | "semantic"; sort?: "match" | "date";
}
/** The filters of a search call, case-insensitive; a system by its id, label word or alias ("g/l" is finance). */
export function keepOf(a: SearchArgs): (r: SearchRecord) => boolean {
  const lc = (x: string | undefined) => x?.trim().toLowerCase() || undefined;
  const type = lc(a.type), tier = lc(a.tier), country = lc(a.country), app = lc(a.app), kind = KINDS[lc(a.kind) ?? ""] ?? lc(a.kind);
  const system = a.system ? systemOf(a.system) ?? lc(a.system) : undefined;
  const objectType = a.object_type ? typeOfWord(a.object_type.replace(/\s+/g, "")) ?? lc(a.object_type) : undefined;
  return (r) => (!type || r.type === type) && (!tier || r.tier === tier) && (!system || r.system === system)
    && (!country || (r.country ?? "") === country) && (!app || (r.app ?? "").toLowerCase() === app) && (!objectType || r.objectType === objectType)
    && (!kind || r.kind === kind);
}

export async function toolSearch(a: SearchArgs): Promise<string> {
  await loadIndex();
  const keep = keepOf(a);
  const limit = a.limit ?? 10, mode = a.mode ?? "hybrid", POOL = 50;
  const q = parseQuery(a.query, { countries: countriesOf(index!) });
  // sort "date" (D101): every keyword match, newest day first; the meaning list is not used
  const byDay = a.sort === "date";
  const hits = rank(index!, q, { filter: keep, ...(byDay ? { sort: "date" as const } : {}) });
  // the kind asked for, by the `kind:` prefix or by the kind parameter ("page" is no symbol kind): no meaning list, and a
  // hit-less answer says what is missing (D95)
  const kind = q.kind ?? KINDS[a.kind?.trim().toLowerCase() ?? ""] ?? null;
  // CA, MX and US add the same field id to a W1 table: the layer is part of a symbol's identity here (D95)
  const uid = (r: SearchRecord) => (r.kind !== "page" && r.country ? `${r.id} ${r.country}` : r.id);
  const byId = new Map<string, SearchRecord>(hits.map((h) => [uid(h.r), h.r]));
  // the meaning list (D63): pages only, the top 50 by cosine similarity
  let semantic: string[] = [], note = "";
  // a kind: query asks for a symbol, and symbols are never in the meaning list: no padding with pages (D95)
  if (mode !== "keyword" && !kind && !byDay) {
    const m = await loadModel();
    if (m) {
      const v = embed(m, a.query), data = pageVectors(m);
      if (v.some((x) => x !== 0)) {
        const scored: [number, number][] = [];
        index!.records.forEach((r, i) => { if (r.kind === "page" && i < pages.length && keep(r)) scored.push([dot(v, data, i * m.dims), i]); });
        semantic = scored.sort((x, y) => y[0] - x[0]).slice(0, POOL).map(([, i]) => { const r = index!.records[i]; byId.set(r.id, r); return r.id; });
      }
    } else if (mode === "semantic") note = ` (semantic search unavailable: ${modelError}; keyword results instead)`;
  }
  const keyword = hits.map((h) => uid(h.r));
  let order: string[], exactBand = 0;
  if (byDay) order = keyword;
  else if (mode === "semantic") order = semantic.length ? semantic : keyword.slice(0, POOL);
  else if (mode === "keyword" || !semantic.length) order = keyword;
  else {
    // the exact band pinned in keyword order, the rest fused with the meaning list (D86 4.2)
    const exact = hits.filter((h) => h.band === "exact").map((h) => uid(h.r)), pinned = new Set(exact);
    exactBand = exact.length;
    order = [...exact, ...fuse([hits.filter((h) => h.band !== "exact").slice(0, POOL).map((h) => uid(h.r)), semantic.filter((p) => !pinned.has(p))])];
  }
  if (mode !== "semantic" && mode !== "keyword" && !semantic.length) exactBand = hits.filter((h) => h.band === "exact").length;
  const inKeyword = new Set(keyword.slice(0, Math.max(POOL, limit))), inMeaning = new Set(semantic);
  const tag = (id: string) => (inKeyword.has(id) && inMeaning.has(id) ? " [both]" : inMeaning.has(id) ? " [meaning]" : " [keyword]");
  const shown = order.slice(0, limit).map((id) => byId.get(id)!).filter(Boolean);
  // what the filters hide: the same query without them (of the asked kind), only when they left no hit of that kind
  const filters = (["type", "tier", "system", "country", "app", "object_type"] as const).filter((k) => a[k]?.trim()).map((k) => `${k}=${a[k]!.trim()}`).join(", ");
  const unfiltered = kind && !hits.length && filters ? rank(index!, q, { filter: (r) => r.kind === kind }) : undefined;
  const hs = hints(index!, q, hits as Hit[], { kind, unfiltered, filters, keep }).filter((h) => !hits.length || hits[0].s < 6 || q.question || !!q.ref || /: no page; /.test(h.text));
  const hintText = hs.length ? `\n${hs.map((h) => `Hint: ${h.text}${h.query ? ` (bc_search "${h.query}")` : h.path ? ` (bc_cat("${h.path}"))` : ""}`).join("\n")}` : "";
  // a kind: query with no hit: the hint ("No event named ...", the nearest names) is the answer
  if (!shown.length && kind && /^No \w+ named /.test(hs[0]?.text ?? "")) {
    const [first, ...more] = hs, via = (h: (typeof hs)[number]) => (h.query ? ` (bc_search "${h.query}")` : h.path ? ` (bc_cat("${h.path}"))` : "");
    return `${first.text}${via(first)}${note}${more.map((h) => `\nHint: ${h.text}${via(h)}`).join("")}\n${NO_MATCH}`;
  }
  if (!shown.length) return `No pages match "${a.query}". Try fewer words, or bc_ls("") to browse sections.${note}${hintText}\n${NO_MATCH}`;
  const how = byDay ? "keyword, newest first" : semantic.length && keyword.length && mode === "hybrid" ? "keyword + meaning" : mode === "semantic" && semantic.length ? "meaning" : "keyword";
  if (byDay && mode === "semantic") note = ` (sort "date" orders the keyword matches; mode "semantic" ignored)`;
  const learnNote = shown.some((r) => r.type === "learn") ? "; a Learn article's url reads with the Learn MCP's microsoft_docs_fetch (the plugin connects it), else open it on learn.microsoft.com; bc_cat(hub) reads its hub" : "";
  // an empty keyword list says so: the hits are by meaning only (D95)
  // D106: grouped by layer; a Learn article in the exact band (its title is covered by the query) leads
  const learnFirst = hits.some((h) => h.band === "exact" && h.r.type === "learn" && shown.includes(h.r));
  const body = groupLines(shown, (r) => hitLine(r, tag(uid(r))), learnFirst);
  if (mode === "hybrid" && !keyword.length && semantic.length) return `No keyword match for "${a.query}"; ${shown.length} pages by meaning only (read one with bc_cat(path)${learnNote}):\n${body}${hintText}`;
  return `${shown.length} results, ${how}${note}${how === "keyword + meaning" ? ` (exact band: ${exactBand})` : ""} (read one with bc_cat(path)${learnNote}):\n${body}${hintText}`;
}

/** D106: the search result's layer, the brief's order (Learn, code, changes, community and videos, other). */
const LAYERS = ["Learn", "Code", "Code members", "Changes", "Community and videos", "Other"] as const;
export function layerOf(r: SearchRecord): (typeof LAYERS)[number] {
  // fields, events, procedures and values: their own group, after the objects (a generic word keeps them low, D95)
  if (r.kind !== "page") return "Code members";
  const t = r.type;
  return t === "learn" ? "Learn" : t === "object" ? "Code" : t === "change" || t === "release" || t === "hotfix" ? "Changes" : t === "video" || t === "post" ? "Community and videos" : "Other";
}
/**
 * Hits grouped by layer: groups in the order of their best hit, the lines inside unchanged. A Learn title the query
 * covers puts Learn first. Fields, events, procedures and values lead only when one of them is the best hit; else they
 * come last, so a generic word ("journal") keeps them below the pages, as the ranking does (D95).
 */
export function groupLines(shown: SearchRecord[], line: (r: SearchRecord) => string, learnFirst: boolean): string {
  const groups = new Map<string, string[]>();
  if (learnFirst) groups.set("Learn", []);
  for (const r of shown) { const g = layerOf(r); groups.set(g, [...(groups.get(g) ?? []), line(r)]); }
  const members = groups.get("Code members");
  if (members && shown[0] && layerOf(shown[0]) !== "Code members") { groups.delete("Code members"); groups.set("Code members", members); }
  return [...groups].filter(([, ls]) => ls.length).map(([g, ls]) => `## ${g}\n${ls.join("\n")}`).join("\n");
}

/** A country named in words: its Learn local functionality is then an answer, not noise. */
const COUNTRY_WORD = /\b(belgi|netherland|dutch|german|france|french|spain|italy|austria|swiss|switzerland|denmark|norway|sweden|finland|iceland|czech|india|mexico|russia|australia|zealand|canada|united kingdom|uk)\w*/i;
/** Words of a query that say something: lower-case, three letters or more, function words out, a plural folded. */
const BRIEF_STOP = new Set(["the", "and", "for", "with", "from", "what", "which", "when", "how", "does", "are", "can", "this", "that", "into", "about", "business", "central", "lately", "changed", "change", "fix", "fixes"]);
const wordsOf = (s: string) => [...new Set(s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length >= 3 && !BRIEF_STOP.has(w)).map((w) => (w.length > 4 && w.endsWith("s") ? w.slice(0, -1) : w)))];
/** Learn articles whose title and summary hold at least a third of the query's words (two at least), most words first, title words counting double. */
export function learnByWords(query: string, limit = 3): PageRecord[] {
  const q = wordsOf(query);
  if (q.length < 2 || !index) return [];
  // a country's page waits unless the query names a country: "VAT ledgers in Russia" is no answer to a W1 question
  const country = parseQuery(query, { countries: countriesOf(index) }).countries.length > 0 || COUNTRY_WORD.test(query);
  const need = Math.max(2, Math.ceil(q.length / 3));
  const scored: { r: PageRecord; n: number; s: number }[] = [];
  for (const rec of index.records) {
    if (rec.kind !== "page" || rec.type !== "learn" || !rec.page) continue;
    const t = new Set(wordsOf(rec.page.title)), b = new Set(wordsOf(rec.page.summary ?? ""));
    const hit = q.filter((w) => t.has(w) || b.has(w));
    const local = /\/LocalFunctionality\//i.test(rec.page.path) && !country;
    if (hit.length >= need) scored.push({ r: rec.page, n: hit.length - (local ? 10 : 0), s: hit.reduce((x, w) => x + (t.has(w) ? 2 : 1), 0) });
  }
  return scored.sort((a, b) => b.n - a.n || b.s - a.s || a.r.title.localeCompare(b.r.title)).slice(0, limit).map((x) => x.r);
}

/** D107: a Learn article is near a question by meaning at this cosine or more (potion-base-8M, measured 2026-10-23). */
export const LEARN_MEANING_MIN = 0.45;
/** Per query word the article's title, summary or identifiers hold: measured on the six D106 questions, it moves Fabric's setup page from 3rd to 2nd and "Set up value-added tax" to 2nd or 3rd. */
export const LEARN_WORD_BONUS = 0.05;
/** Country code -> its folder under Learn's LocalFunctionality/. */
const LEARN_COUNTRY: Record<string, string> = { at: "Austria", au: "Australia", be: "Belgium", ca: "Canada", ch: "Switzerland", cz: "Czech", de: "Germany", dk: "Denmark", es: "Spain", fi: "Finland", fr: "France", gb: "UnitedKingdom", in: "India", is: "Iceland", it: "Italy", mx: "Mexico", nl: "Netherlands", no: "Norway", nz: "NewZealand", ru: "Russia", se: "Sweden", us: "UnitedStates" };
let learnVecs: { at: number; rows: number[]; data: Float32Array } | null = null;
/** One vector per Learn row (title, summary, documented identifiers), rebuilt when the index reloads. */
function learnVectors(m: StaticModel): { rows: number[]; data: Float32Array } {
  if (learnVecs && learnVecs.at === loadedAt) return learnVecs;
  const rows: number[] = [];
  index!.records.forEach((r, i) => { if (r.kind === "page" && r.type === "learn" && r.page) rows.push(i); });
  const data = new Float32Array(rows.length * m.dims);
  rows.forEach((i, k) => { const p = index!.records[i].page!; data.set(embed(m, [p.title, p.summary, ...(p.tags ?? [])].filter(Boolean).join(". ")), k * m.dims); });
  learnVecs = { at: loadedAt, rows, data };
  return learnVecs;
}
/**
 * Learn articles nearest a query by meaning (cosine at LEARN_MEANING_MIN or more), then nudged by the query's words
 * they hold. Generated report pages and other countries' local pages go down; the country the query names goes up.
 * None without a model.
 */
export async function learnByMeaning(query: string, limit = 5): Promise<PageRecord[]> {
  await loadIndex();
  const m = await loadModel();
  if (!m || !index) return [];
  const v = embed(m, query);
  if (!v.some((x) => x !== 0)) return [];
  const { rows, data } = learnVectors(m);
  const named = parseQuery(query, { countries: countriesOf(index) }).countries.map((c) => LEARN_COUNTRY[c]).filter(Boolean);
  const anyCountry = named.length > 0 || COUNTRY_WORD.test(query);
  const q = wordsOf(query);
  const scored: { r: PageRecord; s: number }[] = [];
  rows.forEach((i, k) => {
    const cos = dot(v, data, k * m.dims);
    if (cos < LEARN_MEANING_MIN) return;
    const r = index!.records[i].page!;
    const have = new Set(wordsOf(`${r.title} ${r.summary ?? ""} ${(r.tags ?? []).join(" ")}`));
    let s = cos + LEARN_WORD_BONUS * q.filter((w) => have.has(w)).length;
    if (/\/reports\/report-\d+/.test(r.path) && !/\breports?\b/i.test(query)) s -= 0.2;
    const local = /\/LocalFunctionality\/([^/]+)\//i.exec(r.path)?.[1];
    if (local) s += named.some((n) => n.toLowerCase() === local.toLowerCase()) ? 0.1 : anyCountry && !named.length ? 0 : -0.3;
    scored.push({ r, s });
  });
  return scored.sort((a, b) => b.s - a.s || a.r.title.localeCompare(b.r.title)).slice(0, limit).map((x) => x.r);
}

export async function toolBrief(a: { query?: string; path?: string }): Promise<string> {
  await loadIndex();
  const byPath = new Map(pages.map((p) => [p.path, p]));
  const out = await brief(a, {
    hits: (query) => rank(index!, parseQuery(query, { countries: countriesOf(index!) }), {}).slice(0, 60).map((h) => h.r),
    record: (path) => byPath.get(path),
    page: async (path) => { try { return await pageMarkdown(path); } catch { return null; } },
    learnFacts: loadLearnFacts,
    learnByWords: (query) => learnByWords(query),
    learnByMeaning: (query) => learnByMeaning(query),
  });
  return /^(No page at|Nothing found for) /.test(out) ? `${out}\n${NO_MATCH}` : out;
}

export async function toolLs(a: { path?: string }): Promise<string> {
  await loadIndex();
  const prefix = (a.path ?? "").replace(/^\/+|\/+$/g, "");
  const under = pages.filter((p) => !prefix || p.path === prefix || p.path.startsWith(`${prefix}/`));
  if (!under.length) return `Nothing under "${prefix}". Sections: ${[...new Set(pages.map((p) => p.path.split("/")[0]))].sort().join(", ")}.\n${NO_MATCH}`;
  const depth = prefix ? prefix.split("/").length : 0;
  const dirs = new Map<string, number>(), files: PageRecord[] = [];
  for (const p of under) {
    const parts = p.path.split("/");
    if (parts.length === depth + 1) files.push(p);
    else if (parts.length > depth + 1) dirs.set(parts.slice(0, depth + 1).join("/"), (dirs.get(parts.slice(0, depth + 1).join("/")) ?? 0) + 1);
  }
  const MAX = 200;
  const out = [...[...dirs].sort().map(([d, n]) => `${d}/ (${n} pages)`), ...files.slice(0, MAX).map((f) => `${f.path}: ${f.title}`)];
  return `${out.join("\n")}${files.length > MAX ? `\n... and ${files.length - MAX} more pages; use bc_search() to narrow down` : ""}`;
}

export async function toolCat(a: { path: string } & ViewArgs): Promise<string> {
  // a symbol's path keeps its anchor ("objects/codeunit/80#event-OnAfterPostSalesDoc"): that member's row (D93)
  const [base, anchor] = a.path.split(/(?=#)/);
  const clean = `${base.replace(/^\/+|\/+$/g, "").replace(/\.md$/, "")}${anchor ?? ""}`;
  const path = clean.replace(/#.*$/, ""), md = await pageMarkdown(path);
  // a member the page lacks may be one a country layer adds to this W1 object (D95): answer from the layer's diff
  if (anchor && anchorView(md, path, anchor, SITE) === null) {
    const added = await layerMember(path, anchor);
    if (added) return added;
  }
  return pageView(md, clean, a, BUDGET, SITE);
}

/** `bc_cat("objects/table/18#field-11310")` for a member only a country layer has: one answer per layer that adds it (CA, MX and US can share an id). */
async function layerMember(path: string, anchor: string): Promise<string | null> {
  const want = parseAnchor(anchor), major = diffMajor();
  if (!want || !major) return null;
  await loadIndex();
  const id = `${path}${anchor}`;
  const layers = [...new Set(index!.records.filter((r) => r.kind !== "page" && r.id === id && r.country && r.app === `${r.country.toUpperCase()} layer`).map((r) => r.country!))].sort();
  const owner = index!.records.find((r) => r.kind === "page" && r.id === path);
  const out: string[] = [];
  for (const cc of layers) {
    const o = owner?.objectId != null ? await replacedBy(major, cc, `${owner.objectType}/${owner.objectId}`) : null;
    const text = o && memberAnswer(o, want, cc, { title: owner?.title, site: SITE, path });
    if (text) out.push(text);
  }
  return out.length ? out.join("\n") : null;
}

/**
 * An object by type and id or name (D86): `t36`, `36`, `36-be`, its name, its caption, or its country title
 * ("VAT VIES Correction (BE)"), case-insensitive. A W1 or app object wins over its country twins unless a country is
 * asked; two candidates of the same standing are listed with their paths.
 */
export async function toolGetObject(a: { type: string; idOrName: string; country?: string } & ViewArgs): Promise<string> {
  await loadIndex();
  const type = typeOfWord(a.type.toLowerCase().replace(/\s+/g, "")) ?? a.type.toLowerCase().replace(/\s+/g, "");
  let want = a.idOrName.trim().replace(/^"|"$/g, "");
  let country = a.country?.trim().toLowerCase() || null;
  const objs = index!.records.filter((r) => r.kind === "page" && r.type === "object" && r.objectType === type);
  let id: number | null = null;
  const q = parseQuery(want, { countries: countriesOf(index!) });
  if (q.ref && q.ref.type === type) { id = q.ref.id; country ??= q.ref.country; }
  else if (q.number !== null) id = q.number;
  else { const m = /^(\d+)-([a-z]{2})$/i.exec(want); if (m) { id = Number(m[1]); country ??= m[2].toLowerCase(); } }
  // a trailing " (BE)" names the country
  const cc = /^(.*?)\s*\(([A-Za-z]{2})\)$/.exec(want);
  if (id === null && cc) { want = cc[1]; country ??= cc[2].toLowerCase(); }
  const lw = want.toLowerCase();
  const tiers: SearchRecord[][] = id !== null ? [objs.filter((r) => r.objectId === id)]
    : [objs.filter((r) => r.name.toLowerCase() === lw), objs.filter((r) => (r.caption ?? "").toLowerCase() === lw)];
  for (const found of tiers) {
    if (!found.length) continue;
    const inCountry = country ? found.filter((r) => r.country === country) : [];
    const w1 = found.filter((r) => !r.country);
    const pick = country ? (inCountry.length ? inCountry : w1) : (w1.length ? w1 : found);
    if (pick.length === 1) {
      const twins = found.filter((r) => r !== pick[0] && r.country).map((r) => r.country!.toUpperCase());
      // a country with no object of its own may still replace this W1 object: print what the layer adds (D95)
      const major = diffMajor(), key = `${type}/${pick[0].objectId ?? pick[0].name.toLowerCase()}`;
      let note = "";
      if (country && !inCountry.length) {
        const replaced = major ? await replacedBy(major, country, key) : null;
        note = replaced && major ? `${countryBlock(replaced, country, major, { title: pick[0].title })}\n\n` : `(${country.toUpperCase()} has no ${type} of its own here; the W1 ${type} applies.)\n\n`;
      }
      let also = !country && twins.length ? `\n\n(Also in ${twins.join(", ")}: bc_get_object("${type}", "${pick[0].objectId ?? pick[0].name}", country).)` : "";
      if (!country && !pick[0].country && major && !a.section) {
        const layers = (await Promise.all(countriesOf(index!).map(async (cc) => ({ cc, object: await replacedBy(major, cc, key) })))).filter((l): l is { cc: string; object: DiffObject } => !!l.object);
        const line = replacedInLine(layers);
        if (line) also += `${also ? "\n" : "\n\n"}${line}`;
      }
      return `${note}${pageView(await pageMarkdown(pick[0].id), pick[0].id, a, BUDGET, SITE)}${a.section ? "" : also}`;
    }
    if (pick.length > 1) return `${pick.length} ${type} objects match "${a.idOrName}"; read one with bc_cat(path):\n${pick.map((r) => `- ${r.title} path=${r.id}`).join("\n")}`;
  }
  return `No ${type} "${a.idOrName}" in W1, Microsoft's first-party apps or the country layers (BC ${SNAPSHOT_MAJORS.join(", ")}). Never invent object ids; bc_search("${want}") lists near names.\n${NO_MATCH}`;
}

export async function toolDiffObject(a: { type: string; id: string; from: string; to: string }): Promise<string> {
  const key = `${a.type.toLowerCase()}/${a.id.toLowerCase()}`;
  let diff: any;
  try { diff = JSON.parse(await dataFile(`code/diffs/version/${a.from}__${a.to}.json`)); } catch {
    return `No version diff ${a.from} -> ${a.to}. Diffs exist between consecutive majors from BC${DIFF_RANGE[0]} to BC${DIFF_RANGE[1]} (${DIFF_RANGE[0]} -> ${Number(DIFF_RANGE[0]) + 1}, ..., ${Number(DIFF_RANGE[1]) - 1} -> ${DIFF_RANGE[1]}); a changed member lists only what differs, as [from, to].\n${NO_MATCH}`;
  }
  const o = (diff.objects as any[]).find((x) => x.key === key);
  if (!o) return `${key} did not change between BC${a.from} and BC${a.to} (or is not a W1 object).`;
  return `${key} "${o.name}" BC${a.from} -> BC${a.to}: ${o.change}\n${JSON.stringify(o, null, 1)}`;
}

export async function toolLocalization(a: { country: string } & ViewArgs): Promise<string> {
  const p = `localizations/${a.country.toLowerCase()}`;
  return pageView(await pageMarkdown(p), p, a, BUDGET, SITE);
}

/** Dated pages on or after `since`, newest first; nothing dated after today unless asked (a feature's date is its GA month). */
export async function toolWhatsNew(a: { since: string; type?: string; limit?: number; include_future?: boolean }, today = new Date().toISOString().slice(0, 10)): Promise<string> {
  await loadIndex();
  const since = a.since.slice(0, 10);
  const dated = pages.filter((p) => p.date && p.date >= since && (!a.type || p.type === a.type));
  const future = dated.filter((p) => p.date! > today);
  const items = (a.include_future ? dated : dated.filter((p) => p.date! <= today)).sort((x, y) => y.date!.localeCompare(x.date!)).slice(0, a.limit ?? 30);
  const tail = !a.include_future && future.length ? `\n${future.length} roadmap ${future.length === 1 ? "feature" : "features"} scheduled after today: pass include_future: true` : "";
  if (!items.length) return `Nothing dated on or after ${since}${a.include_future ? "" : ` up to today (${today})`}.${tail}\n${NO_MATCH}`;
  return `${items.length} items since ${since}, newest first:\n${items.map((p) => line(p)).join("\n")}${tail}`;
}

export async function toolBlogFootprint(a: { source: string }): Promise<string> {
  await loadIndex();
  const items = pages.filter((p) => p.source === a.source).sort((x, y) => (y.date ?? "").localeCompare(x.date ?? ""));
  if (!items.length) return `No posts or videos from source "${a.source}" yet. Source ids are listed in ${REPO}/blob/main/sources.yaml.\n${NO_MATCH}`;
  const systems = new Map<string, number>();
  for (const p of items) if (p.system) systems.set(p.system, (systems.get(p.system) ?? 0) + 1);
  return `${a.source}: ${items.length} items, ${items.at(-1)!.date ?? "?"} to ${items[0].date ?? "?"}. Systems: ${[...systems].sort((x, y) => y[1] - x[1]).map(([s, n]) => `${s} ${n}`).join(", ")}.\n${items.slice(0, 20).map((p) => line(p)).join("\n")}`;
}

export function toolFeedback(a: { path: string; message: string }): string {
  const title = `Feedback on ${a.path}`;
  const body = `Page: ${url(a.path)}\n\n${a.message}\n\n(sent from the bc-observatory MCP server ${VERSION})`;
  return `Open this link to file the issue (no sign-in through the agent): ${REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=feedback`;
}

/**
 * D108: what a client can tell apart: "down" (the data source does not answer) from "no answer" (NO_MATCH). Cheap: the
 * index manifest and the symbols manifest only, never the shards; never throws.
 */
export async function toolStatus(): Promise<string> {
  const out = [`BC Observatory MCP ${VERSION}, data from ${LOCAL ?? SITE}`];
  let manifest: IndexManifest;
  try {
    manifest = JSON.parse(await dataFile("index/index-manifest.json")) as IndexManifest;
  } catch (e) {
    out.push(`Reachable: no (${errorText(e)}). Tell the user the Observatory is down; answer from Microsoft Learn or web search and say so.`);
    return out.join("\n");
  }
  out.push(`Reachable: yes. ${manifest.pages.toLocaleString("en-US")} pages${manifest.by_type ? `: ${Object.entries(manifest.by_type).sort((x, y) => y[1] - x[1]).map(([t, n]) => `${t} ${n}`).join(", ")}` : ""}.`);
  out.push(`Coverage: ${COVERAGE}.`);
  try {
    const sm = JSON.parse(await dataFile("index/symbols-manifest.json")) as SymbolsManifest;
    out.push(`Code index: fields, events and procedures of BC ${sm.major}${sm.built_at ? `, built ${sm.built_at.slice(0, 10)}` : ""}${sm.commit ? ` from ${sm.commit.slice(0, 10)}` : ""}.`);
  } catch { out.push("Code index: no symbols manifest; search finds pages only."); }
  const deployed = await lastDeployed();
  if (deployed) out.push(`Data last deployed: ${deployed}.`);
  out.push(index ? `Data as of ${dataDate ?? "unknown"}; newest item ${newestItem ?? "unknown"}; index loaded ${new Date(loadedAt).toISOString().slice(0, 16)}Z.` : "Index not loaded in this session yet: the first search loads it, and every answer then ends with its data date.");
  out.push(`Search by meaning: ${model ? "on" : modelError ?? "loads on the first search"}.`);
  return out.join("\n");
}
/** When the index manifest last changed: the site's Last-Modified (GitHub Pages sets it per deploy), the file's mtime locally. */
async function lastDeployed(): Promise<string | null> {
  try {
    if (LOCAL) return statSync(join(LOCAL, "data", "index", "index-manifest.json")).mtime.toISOString().slice(0, 16) + "Z";
    const res = await fetch(`${SITE}index/index-manifest.json`, { method: "HEAD", headers: { "user-agent": `bc-observatory-mcp/${VERSION}` } });
    const lm = res.headers.get("last-modified");
    return lm ? new Date(lm).toISOString().slice(0, 16) + "Z" : null;
  } catch { return null; }
}

const errorText = (e: unknown) => String((e as Error)?.message ?? e).slice(0, 200);
/** The data date line every data answer ends with (D108); empty when the index cannot load. */
export async function stamp(): Promise<string> {
  try { await loadIndex(); } catch { return ""; }
  return `Data as of ${dataDate ?? "unknown"}, ${COVERAGE}.`;
}
/** A missing page is a not-found answer, not an outage: the local reader's error, or a 404 on a page's markdown twin. */
const missingPage = (m: string) => /^no page at (.+)$/.exec(m)?.[1] ?? (/^HTTP 404 for (.+)\.md$/.exec(m)?.[1]?.replace(SITE, "") ?? null);
/**
 * D108: a tool's answer with its data date; a page that is not there says so; anything else that throws is "unreachable".
 * D110: each call is counted once by tool name and outcome (ok, nomatch, notfound, error); the arguments are never sent.
 */
export function answer<A>(tool: string, fn: (a: A) => Promise<string> | string, stamped = true, track: (c: ToolCall) => void = telemetry.track) {
  return async (a: A) => {
    const t0 = performance.now();
    const count = (outcome: ToolCall["outcome"]) => track({ tool, outcome, ms: performance.now() - t0 });
    try {
      const t = await fn(a);
      const s = stamped ? await stamp() : "";
      count(t.includes(NO_MATCH) ? "nomatch" : "ok");
      return text(s ? `${t}\n\n${s}` : t);
    } catch (e) {
      const m = errorText(e), missing = missingPage(m);
      if (missing !== null) {
        const s = await stamp();
        count("notfound");
        return text(`No page at ${missing}. bc_search finds the path.\n${NO_MATCH}${s ? `\n\n${s}` : ""}`);
      }
      count("error");
      return { ...text(`BC Observatory unreachable (${m}). Tell the user the Observatory is down (bc_status checks it); then answer from Microsoft Learn or web search and say so. Never skip this silently.`), isError: true };
    }
  };
}

// ---------------------------------------------------------------------------------------------- server

/** section, offset and limit of bc_cat, bc_get_object and bc_localization (D93). */
const VIEW = { section: z.string().optional(), offset: z.number().int().min(0).max(100000).optional(), limit: z.number().int().min(1).max(5000).optional() };

/** D108: directive, short, and the coverage from the same constants the answers use. */
export const INSTRUCTIONS = [
  "BC Observatory: Microsoft Dynamics 365 Business Central (BC) knowledge with trust tiers and evidence.",
  "1. Use these tools FIRST for any Business Central question: features, release waves, what is new, roadmap, AL objects (tables, pages, codeunits, reports, enums), fields, events, procedures, localizations, version diffs, Learn articles, blog and video coverage.",
  "2. Start with bc_search. \"What is new\" or \"what changed in BC NN\": bc_whats_new. One AL object: bc_get_object; its changes between versions: bc_diff_object. Read a hit with bc_cat.",
  "3. Fall back to Microsoft Learn or web search only when this server has no answer, and tell the user the Observatory had none.",
  `4. Coverage: AL objects of W1, Microsoft's first-party apps and the country layers for BC ${SNAPSHOT_MAJORS.join(", ")} (${VNEXT} is vNext); version diffs BC ${DIFF_RANGE[0]} to ${DIFF_RANGE[1]}; Microsoft 365 roadmap features; Learn hubs and an index of Learn articles; merged pull requests of BCApps, AL-Go and BCQuality; AL Language extension releases; community posts and videos. Not included: the Learn release plan documents, and procedure bodies (bc-code-atlas has those). Updated nightly; every answer ends with its data date.`,
  "5. Say which trust tier a claim comes from (official = Microsoft, community = everyone else). Never invent AL object ids or version numbers: look them up.",
  `6. An answer that says "${NO_MATCH.split(".")[0]}" found nothing: say so, then fall back. An error saying "unreachable" means the Observatory is down: tell the user (bc_status checks it), never skip it silently.`,
  "7. A Learn hit (type learn) carries a url: read it with the Learn MCP's microsoft_docs_fetch, else open it on learn.microsoft.com.",
].join("\n");

export function createServer(): McpServer {
  const server = new McpServer({ name: "bc-observatory", version: VERSION }, { instructions: INSTRUCTIONS });
  clientOf = () => server.server.getClientVersion() ?? {};
  server.registerTool("bc_search", { title: "Business Central search", description: "Business Central search across the BC Observatory: features and release wave news (e.g. Fabric mirroring), AL objects (tables, pages, codeunits, reports, enums), fields, events, procedures, Learn articles, roadmap features, blog posts, videos and code changes. Use FIRST for any Business Central question; bc_cat reads a hit. Takes names ('Sales Header'), references ('t36', 'cu 80'), bare ids ('36') and symbol prefixes ('event: OnAfterPost', 'proc: CopyToTempLines'); a symbol hit's path ends in its anchor (#event-<Name>, #field-<id>, #proc-<Name>, #value-<n>). Learn hits carry a url, not a path. Hybrid (exact first, then by meaning); hits say [keyword], [meaning] or [both]. sort 'date': newest first. Filters: type (topic, learn, app, feature, object, localization, video, post, change, source, digest, release, hotfix), tier (official, community), system (finance, sales, ... or 'g/l'), country ('BE'), app, object_type, kind (page, field, event, proc, value). Returns hits grouped by layer.",
    inputSchema: { query: z.string(), type: z.string().optional(), tier: z.string().optional(), system: z.string().optional(), country: z.string().optional(), app: z.string().optional(), object_type: z.string().optional(), kind: z.enum(["page", "field", "event", "proc", "value"]).optional(), limit: z.number().int().min(1).max(50).optional(), mode: z.enum(["hybrid", "keyword", "semantic"]).optional(), sort: z.enum(["match", "date"]).optional() } },
  answer("bc_search", toolSearch));
  server.registerTool("bc_brief", { title: "Business Central answer in layers", description: "Business Central answer in layers for one question (query) or page (path): Learn with key facts, the AL code, what changed lately, scoped warnings, and the gaps no source fills; each line with its tier and source. Use for 'how does X work in BC' when one call should give the whole picture. Not for a list of hits (bc_search).",
    inputSchema: { query: z.string().optional(), path: z.string().optional() } }, answer("bc_brief", toolBrief));
  server.registerTool("bc_ls", { title: "Business Central page tree", description: "Business Central Observatory page tree: bc_ls('objects/table'), bc_ls('localizations'); an empty path lists the sections. For browsing; bc_search finds faster.", inputSchema: { path: z.string().optional() } },
    answer("bc_ls", toolLs));
  server.registerTool("bc_cat", { title: "Business Central page", description: `Business Central page by its path from bc_search or bc_ls: frontmatter with evidence and links, then the body. A page over ${B} characters comes back compact with its section keys; section (or 'frontmatter'), offset and limit read one part. A symbol path ('objects/codeunit/80#event-OnAfterPostSalesDoc') returns that member's row.`, inputSchema: { path: z.string(), ...VIEW } },
    answer("bc_cat", toolCat));
  server.registerTool("bc_get_object", { title: "Business Central AL object", description: `Business Central AL object (table, page, codeunit, report, enum, query, xmlport, ...) of W1, a Microsoft first-party app or a country layer, by type and id, reference, name or caption: ('table', '18'), ('table', 't36'), ('table', '36-be'), ('codeunit', 'Sales-Post'), ('page', 'Customers'), or with country 'BE' (what that layer adds prints first). Returns its page: fields, keys, events, procedures, calls, obsolete state, the BC versions it exists in, countries, Learn pages. A page over ${B} characters comes back compact: pass section ('fields' on a table, 'controls' on a page, 'events', 'calls', ...) with offset and limit. To check an id and name, or that a field, event or procedure exists, bc_search('page 25', kind: 'page') or bc_search('event: <Name>') is cheaper. Changes between versions: bc_diff_object. counts.procedures counts every procedure; the summary's 'public procedures' excludes locals and events.`,
    inputSchema: { type: z.string(), idOrName: z.string(), country: z.string().length(2).optional(), ...VIEW } }, answer("bc_get_object", toolGetObject));
  server.registerTool("bc_diff_object", { title: "Business Central diff between versions", description: `Business Central diff between versions of one W1 AL object (table, page, codeunit, ...): the fields, events, procedures, keys, properties and obsolete state that changed from one BC major to the next (consecutive majors, BC ${DIFF_RANGE[0]} to ${DIFF_RANGE[1]}). Use for questions such as: what changed in table 18 between BC 28 and BC 29. Pass type, id (the object number) and from, to as majors ('28', '29'). Returns the changed members as [from, to]; 'did not change' is an answer.`,
    inputSchema: { type: z.string(), id: z.string(), from: z.string(), to: z.string() } }, answer("bc_diff_object", toolDiffObject));
  server.registerTool("bc_localization", { title: "Business Central localization", description: `Business Central country localization (BE, NL, DE, FR, US, ...): what that country layer adds to or changes in W1 (objects, fields, events), with its Learn local functionality hub. Use for country-specific BC questions. Over ${B} characters it comes back compact; section, offset and limit read one section, as in bc_cat.`, inputSchema: { country: z.string().length(2), ...VIEW } },
    answer("bc_localization", toolLocalization));
  server.registerTool("bc_whats_new", { title: "Business Central what's new", description: "Business Central what's new: videos, community posts, Microsoft 365 roadmap features (new features by release wave), AL Language extension releases (type 'release'), weekly digests (type 'digest'), hotfix lists (type 'hotfix') and merged pull requests of BCApps, AL-Go and BCQuality (type 'change'), dated on or after since (YYYY-MM-DD) up to today, newest first. Use for questions such as: what is new in the latest BC release, what changed in BC 29, what is new in Business Central this week, new features in the 2026 release wave 2. One object's changes: bc_diff_object. A roadmap feature's date is its GA month: later ones are counted at the end and listed with include_future: true.",
    inputSchema: { since: z.string(), type: z.string().optional(), limit: z.number().int().min(1).max(100).optional(), include_future: z.boolean().optional() } }, answer("bc_whats_new", (a: Parameters<typeof toolWhatsNew>[0]) => toolWhatsNew(a)));
  server.registerTool("bc_blog_footprint", { title: "Business Central blog coverage", description: "Business Central blog or channel coverage: what one community source (id from sources.yaml, e.g. 'kauffmann-nl', 'yt-hougaard') writes about: its posts or videos and the BC systems they touch.",
    inputSchema: { source: z.string() } }, answer("bc_blog_footprint", toolBlogFootprint));
  server.registerTool("bc_feedback", { title: "Business Central Observatory feedback", description: "Business Central Observatory feedback: a prefilled GitHub issue link to report a wrong fact, missing evidence or a broken link on a page. Nothing is sent by the agent.",
    inputSchema: { path: z.string(), message: z.string() } }, answer("bc_feedback", toolFeedback, false));
  server.registerTool("bc_status", { title: "Business Central Observatory status", description: "Business Central Observatory status: server version, whether the data is reachable, page counts by type, the code index version and when the data was last deployed. Cheap. Use when a tool fails, to tell 'the Observatory is down' from 'it has no answer'.",
    inputSchema: {} }, answer("bc_status", toolStatus, false));
  return server;
}

/** Started as a program (npx, bin symlink, node dist/server.js, tsx src/server.ts) rather than imported by a test. */
function isMain(): boolean {
  if (!process.argv[1]) return false;
  try { return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url)); } catch { return false; }
}
if (isMain()) {
  await createServer().connect(new StdioServerTransport());
  const notice = telemetry.notice(SITE);
  if (notice) process.stderr.write(`${notice}\n`);
}
