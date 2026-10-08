#!/usr/bin/env node
/**
 * bc-observatory MCP server (PLAN 4.7, D35): BC Observatory's knowledge base for agents, over stdio.
 *
 * Data: the site's search index (index-manifest.json + its page shards, cached by sha256 in
 * ~/.cache/bc-observatory/<site hash>/, refreshed daily) and its markdown twins (<path>.md). Set
 * BC_OBSERVATORY_LOCAL=<repo checkout> to read content/ and data/ from disk instead (offline, tests), or
 * BC_OBSERVATORY_SITE to point at another deployment.
 *
 * Tools: search, ls, cat, get_object, diff_object, localization, whats_new, blog_footprint, feedback.
 *
 * Search ranks with the site's scorer (D86, packages/search, bundled into dist/server.js): the same parser (`t36`,
 * `cu 80`, `table 36 BE`, bare ids, plurals, one typo, synonyms) and the same order. Hybrid by default (D63): the exact
 * band (references and exact names) is pinned on top, the rest of the keyword list is fused with static embeddings
 * (model2vec potion-base-8M, MIT) by reciprocal rank, so "client" still finds Customer by meaning. The model (30 MB) is
 * downloaded once on the first search, pinned by revision and checked by SHA-256, into ~/.cache/bc-observatory/models/.
 * BC_OBSERVATORY_EMBEDDINGS=0 turns it off; BC_OBSERVATORY_MODEL_DIR uses a model on disk (offline, tests). Without a
 * model, search is keyword-only.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  countriesOf, hints, pageToRecord, parseQuery, prepare, search as rank, symbolLine, systemOf, typeOfWord,
  type Hit, type Index, type PageRecord, type SearchRecord,
} from "@bc-observatory/search";
import { dot, embed, parseModel, type StaticModel } from "./embed.js";

const VERSION = "0.3.0";
const SITE = (process.env.BC_OBSERVATORY_SITE ?? "https://waldo1001.github.io/waldo.BCObservatory/").replace(/\/?$/, "/");
const LOCAL = process.env.BC_OBSERVATORY_LOCAL ? resolve(process.env.BC_OBSERVATORY_LOCAL) : null;
const REPO = "https://github.com/waldo1001/waldo.BCObservatory";
const DAY = 86_400_000;

export type { PageRecord };
interface IndexManifest { schema: string; pages: number; shards: { file: string; count: number; sha256: string; kind?: string }[] }

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

/** A shard by its sha256: cached on disk, downloaded only when the manifest names a new hash. */
async function shard(file: string, sha: string): Promise<string> {
  const cached = join(cacheDir, `${sha}.json`);
  if (!LOCAL && existsSync(cached)) return readFileSync(cached, "utf8");
  const text = await dataFile(`index/${file}`);
  if (!LOCAL) writeFileSync(cached, text);
  return text;
}
/** The page shards, prepared for the shared scorer (D86); reloaded once a day. */
async function loadIndex(): Promise<void> {
  if (index && Date.now() - loadedAt < DAY) return;
  const manifest = JSON.parse(await dataFile("index/index-manifest.json")) as IndexManifest;
  const all: PageRecord[] = [];
  if (!LOCAL) mkdirSync(cacheDir, { recursive: true });
  for (const s of manifest.shards) all.push(...(JSON.parse(await shard(s.file, s.sha256)) as PageRecord[]));
  pages = all;
  index = prepare(all.map(pageToRecord));
  loadedAt = Date.now();
}

const url = (path: string) => `${SITE}${path}/`;
const line = (r: PageRecord, tag = "") => `- ${r.title}${r.caption ? ` (captioned "${r.caption}")` : ""} [${r.type}${r.tier ? `, ${r.tier}` : ""}${r.date ? `, ${r.date}` : ""}] path=${r.path}${tag}${r.path_label ? `\n  in: ${r.path_label}` : ""}${r.stats ? `\n  ${r.stats}` : ""}\n  ${r.summary}`;
const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });
/** A symbol hit: name, what it is and where, its path with the anchor, then its doc line. */
const symbolHit = (r: SearchRecord, tag = "") => `- ${r.name} (${symbolLine(r).replace(/ · /g, ", ")}) path=${r.id}${tag}${r.text ? `\n  ${r.text}` : ""}`;
const hitLine = (r: SearchRecord, tag = "") => (r.kind === "page" && r.page ? line(r.page, tag) : symbolHit(r, tag));

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
  limit?: number; mode?: "hybrid" | "keyword" | "semantic";
}
/** The filters of a search call, case-insensitive; a system by its id, label word or alias ("g/l" is finance). */
export function keepOf(a: SearchArgs): (r: SearchRecord) => boolean {
  const lc = (x: string | undefined) => x?.trim().toLowerCase() || undefined;
  const type = lc(a.type), tier = lc(a.tier), country = lc(a.country), app = lc(a.app), kind = lc(a.kind);
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
  const hits = rank(index!, q, { filter: keep });
  const byId = new Map<string, SearchRecord>(hits.map((h) => [h.r.id, h.r]));
  // the meaning list (D63): pages only, the top 50 by cosine similarity
  let semantic: string[] = [], note = "";
  if (mode !== "keyword") {
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
  const keyword = hits.map((h) => h.r.id);
  let order: string[], exactBand = 0;
  if (mode === "semantic") order = semantic.length ? semantic : keyword.slice(0, POOL);
  else if (mode === "keyword" || !semantic.length) order = keyword;
  else {
    // the exact band pinned in keyword order, the rest fused with the meaning list (D86 4.2)
    const exact = hits.filter((h) => h.band === "exact").map((h) => h.r.id), pinned = new Set(exact);
    exactBand = exact.length;
    order = [...exact, ...fuse([hits.filter((h) => h.band !== "exact").slice(0, POOL).map((h) => h.r.id), semantic.filter((p) => !pinned.has(p))])];
  }
  if (mode !== "semantic" && mode !== "keyword" && !semantic.length) exactBand = hits.filter((h) => h.band === "exact").length;
  const inKeyword = new Set(keyword.slice(0, Math.max(POOL, limit))), inMeaning = new Set(semantic);
  const tag = (id: string) => (inKeyword.has(id) && inMeaning.has(id) ? " [both]" : inMeaning.has(id) ? " [meaning]" : " [keyword]");
  const shown = order.slice(0, limit).map((id) => byId.get(id)!).filter(Boolean);
  const hs = hints(index!, q, hits as Hit[]).filter((h) => !hits.length || hits[0].s < 6 || q.question || !!q.ref || /: no page; /.test(h.text));
  const hintText = hs.length ? `\n${hs.map((h) => `Hint: ${h.text}${h.query ? ` (search "${h.query}")` : h.path ? ` (cat("${h.path}"))` : ""}`).join("\n")}` : "";
  if (!shown.length) return `No pages match "${a.query}". Try fewer words, or ls("") to browse sections.${note}${hintText}`;
  const how = semantic.length && keyword.length && mode === "hybrid" ? "keyword + meaning" : mode === "semantic" && semantic.length ? "meaning" : "keyword";
  return `${shown.length} results, ${how}${note}${how === "keyword + meaning" || mode === "hybrid" ? ` (exact band: ${exactBand})` : ""} (read one with cat(path)):\n${shown.map((r) => hitLine(r, tag(r.id))).join("\n")}${hintText}`;
}

export async function toolLs(a: { path?: string }): Promise<string> {
  await loadIndex();
  const prefix = (a.path ?? "").replace(/^\/+|\/+$/g, "");
  const under = pages.filter((p) => !prefix || p.path === prefix || p.path.startsWith(`${prefix}/`));
  if (!under.length) return `Nothing under "${prefix}". Sections: ${[...new Set(pages.map((p) => p.path.split("/")[0]))].sort().join(", ")}.`;
  const depth = prefix ? prefix.split("/").length : 0;
  const dirs = new Map<string, number>(), files: PageRecord[] = [];
  for (const p of under) {
    const parts = p.path.split("/");
    if (parts.length === depth + 1) files.push(p);
    else if (parts.length > depth + 1) dirs.set(parts.slice(0, depth + 1).join("/"), (dirs.get(parts.slice(0, depth + 1).join("/")) ?? 0) + 1);
  }
  const MAX = 200;
  const out = [...[...dirs].sort().map(([d, n]) => `${d}/ (${n} pages)`), ...files.slice(0, MAX).map((f) => `${f.path}: ${f.title}`)];
  return `${out.join("\n")}${files.length > MAX ? `\n... and ${files.length - MAX} more pages; use search() to narrow down` : ""}`;
}

export async function toolCat(a: { path: string }): Promise<string> {
  // a symbol's path carries its anchor ("objects/codeunit/80#event-OnAfterPostSalesDoc"): the object's page
  return pageMarkdown(a.path.replace(/#.*$/, ""));
}

/**
 * An object by type and id or name (D86): `t36`, `36`, `36-be`, its name, its caption, or its country title
 * ("VAT VIES Correction (BE)"), case-insensitive. A W1 or app object wins over its country twins unless a country is
 * asked; two candidates of the same standing are listed with their paths.
 */
export async function toolGetObject(a: { type: string; idOrName: string; country?: string }): Promise<string> {
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
      const note = country && !inCountry.length ? `(${country.toUpperCase()} has no ${type} of its own here; the W1 ${type} applies.)\n\n` : "";
      const also = !country && twins.length ? `\n\n(Also in ${twins.join(", ")}: get_object("${type}", "${pick[0].objectId ?? pick[0].name}", country).)` : "";
      return `${note}${await pageMarkdown(pick[0].id)}${also}`;
    }
    if (pick.length > 1) return `${pick.length} ${type} objects match "${a.idOrName}"; read one with cat(path):\n${pick.map((r) => `- ${r.title} path=${r.id}`).join("\n")}`;
  }
  return `No ${type} "${a.idOrName}" in W1, Microsoft's first-party apps or the country layers (BC28-30). Never invent object ids; search("${want}") lists near names.`;
}

export async function toolDiffObject(a: { type: string; id: string; from: string; to: string }): Promise<string> {
  const key = `${a.type.toLowerCase()}/${a.id.toLowerCase()}`;
  let diff: any;
  try { diff = JSON.parse(await dataFile(`code/diffs/version/${a.from}__${a.to}.json`)); } catch {
    return `No version diff ${a.from} -> ${a.to}. Diffs exist between consecutive majors from BC23 to BC30 (23 -> 24, ..., 29 -> 30); a changed member lists only what differs, as [from, to].`;
  }
  const o = (diff.objects as any[]).find((x) => x.key === key);
  if (!o) return `${key} did not change between BC${a.from} and BC${a.to} (or is not a W1 object).`;
  return `${key} "${o.name}" BC${a.from} -> BC${a.to}: ${o.change}\n${JSON.stringify(o, null, 1)}`;
}

export async function toolLocalization(a: { country: string }): Promise<string> {
  return pageMarkdown(`localizations/${a.country.toLowerCase()}`);
}

/** Dated pages on or after `since`, newest first; nothing dated after today unless asked (a feature's date is its GA month). */
export async function toolWhatsNew(a: { since: string; type?: string; limit?: number; include_future?: boolean }, today = new Date().toISOString().slice(0, 10)): Promise<string> {
  await loadIndex();
  const since = a.since.slice(0, 10);
  const dated = pages.filter((p) => p.date && p.date >= since && (!a.type || p.type === a.type));
  const future = dated.filter((p) => p.date! > today);
  const items = (a.include_future ? dated : dated.filter((p) => p.date! <= today)).sort((x, y) => y.date!.localeCompare(x.date!)).slice(0, a.limit ?? 30);
  const tail = !a.include_future && future.length ? `\n${future.length} roadmap ${future.length === 1 ? "feature" : "features"} scheduled after today: pass include_future: true` : "";
  if (!items.length) return `Nothing dated on or after ${since}${a.include_future ? "" : ` up to today (${today})`}.${tail}`;
  return `${items.length} items since ${since}, newest first:\n${items.map((p) => line(p)).join("\n")}${tail}`;
}

export async function toolBlogFootprint(a: { source: string }): Promise<string> {
  await loadIndex();
  const items = pages.filter((p) => p.source === a.source).sort((x, y) => (y.date ?? "").localeCompare(x.date ?? ""));
  if (!items.length) return `No posts or videos from source "${a.source}" yet. Source ids are listed in ${REPO}/blob/main/sources.yaml.`;
  const systems = new Map<string, number>();
  for (const p of items) if (p.system) systems.set(p.system, (systems.get(p.system) ?? 0) + 1);
  return `${a.source}: ${items.length} items, ${items.at(-1)!.date ?? "?"} to ${items[0].date ?? "?"}. Systems: ${[...systems].sort((x, y) => y[1] - x[1]).map(([s, n]) => `${s} ${n}`).join(", ")}.\n${items.slice(0, 20).map((p) => line(p)).join("\n")}`;
}

export function toolFeedback(a: { path: string; message: string }): string {
  const title = `Feedback on ${a.path}`;
  const body = `Page: ${url(a.path)}\n\n${a.message}\n\n(sent from the bc-observatory MCP server ${VERSION})`;
  return `Open this link to file the issue (no sign-in through the agent): ${REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=feedback`;
}

// ---------------------------------------------------------------------------------------------- server

export function createServer(): McpServer {
  const server = new McpServer({ name: "bc-observatory", version: VERSION }, {
    instructions: "BC Observatory: an agent-first knowledge base of Microsoft Dynamics 365 Business Central (Learn hubs, AL objects from the code for BC28-30, localizations, roadmap features, videos, community posts, code changes: merged pull requests of Microsoft's Business Central repositories, BCApps joined to the AL objects they changed, under changes/, and AL Language extension releases (the marketplace changelog, under releases/)). Every page carries a trust tier (official = Microsoft, community = everyone else) and a review state: say which tier a claim comes from. Never invent AL object ids or version numbers: look them up with get_object. Start with search(), read pages with cat(path), browse with ls(path).",
  });
  server.registerTool("search", { title: "Search the knowledge base", description: "Search every page (title, AL object name and caption, summary, tags) with the site's own scorer: per query word title or caption 3, tags 2, summary 1, through the exact word, a prefix, the plural, a synonym (client = customer, G/L = general ledger) or one typo; a name equal to the query +10; an object reference ('t36', 'cu 80', 'table 11300 BE') or a bare id ('36') goes straight to the object; base app before first-party app before country layer, then an object's importance (what references, calls and documents it); hubs by size and review state. Hybrid by default: the exact band (references and exact names) stays on top and the rest is fused with a meaning ranking, so a paraphrase still finds the page; each hit says [keyword], [meaning] or [both]. mode 'keyword' for the scorer alone, 'semantic' for meaning only. Filters: type (topic, app, feature, object, localization, video, post, change, source, digest, release), tier (official, community), system (finance, sales, ... or an alias such as 'g/l'), country ('BE'), app ('Subscription Billing'), object_type ('table').",
    inputSchema: { query: z.string(), type: z.string().optional(), tier: z.string().optional(), system: z.string().optional(), country: z.string().optional(), app: z.string().optional(), object_type: z.string().optional(), limit: z.number().int().min(1).max(50).optional(), mode: z.enum(["hybrid", "keyword", "semantic"]).optional() } },
  async (a) => text(await toolSearch(a)));
  server.registerTool("ls", { title: "List pages", description: "Browse the page tree, e.g. ls('objects/table') or ls('localizations'); empty path lists the sections.", inputSchema: { path: z.string().optional() } },
    async (a) => text(await toolLs(a)));
  server.registerTool("cat", { title: "Read a page", description: "The full markdown of a page (frontmatter with evidence and links, then the body), by its path from search or ls.", inputSchema: { path: z.string() } },
    async (a) => text(await toolCat(a)));
  server.registerTool("get_object", { title: "Look up an AL object", description: "An AL object of W1, a Microsoft first-party app or a country layer by type and id, reference or name, e.g. ('table', '18'), ('table', 't36'), ('table', '36-be'), ('codeunit', 'Sales-Post'), ('page', 'Customers') by its caption, ('table', 'VAT VIES Correction') or with country 'BE': fields, keys, events, public procedures, obsolete state, versions, countries that replace it, Learn pages. A W1 object wins over its country twins unless a country is given; two candidates of the same standing are listed with their paths.",
    inputSchema: { type: z.string(), idOrName: z.string(), country: z.string().length(2).optional() } }, async (a) => text(await toolGetObject(a)));
  server.registerTool("diff_object", { title: "What changed in an object", description: "Member-level changes of a W1 object between two consecutive versions (fields, events, procedures, keys, properties, obsolete state).",
    inputSchema: { type: z.string(), id: z.string(), from: z.string(), to: z.string() } }, async (a) => text(await toolDiffObject(a)));
  server.registerTool("localization", { title: "A country localization", description: "What a country layer (BE, NL, DE, ...) adds to or changes in W1, with its Learn local functionality hub.", inputSchema: { country: z.string().length(2) } },
    async (a) => text(await toolLocalization(a)));
  server.registerTool("whats_new", { title: "What is new", description: "Videos, posts, roadmap features, AL extension releases (type 'release') and code changes (merged pull requests of BCApps, AL-Go and BCQuality, type 'change') dated on or after a date (YYYY-MM-DD) and up to today, newest first; a roadmap feature's date is its GA month, so features scheduled after today are counted at the end and listed with include_future: true.",
    inputSchema: { since: z.string(), type: z.string().optional(), limit: z.number().int().min(1).max(100).optional(), include_future: z.boolean().optional() } }, async (a) => text(await toolWhatsNew(a)));
  server.registerTool("blog_footprint", { title: "A source's footprint", description: "What a blog or channel (source id from sources.yaml, e.g. 'kauffmann-nl', 'yt-hougaard') covers: its posts or videos and the systems they touch.",
    inputSchema: { source: z.string() } }, async (a) => text(await toolBlogFootprint(a)));
  server.registerTool("feedback", { title: "Report a problem with a page", description: "Returns a prefilled GitHub issue link for a page (wrong fact, missing evidence, broken link). Nothing is sent by the agent.",
    inputSchema: { path: z.string(), message: z.string() } }, async (a) => text(toolFeedback(a)));
  return server;
}

/** Started as a program (npx, bin symlink, node dist/server.js, tsx src/server.ts) rather than imported by a test. */
function isMain(): boolean {
  if (!process.argv[1]) return false;
  try { return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url)); } catch { return false; }
}
if (isMain()) {
  await createServer().connect(new StdioServerTransport());
}
