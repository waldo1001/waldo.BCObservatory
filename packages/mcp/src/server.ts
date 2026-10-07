#!/usr/bin/env node
/**
 * bc-observatory MCP server (PLAN 4.7, D35): BC Observatory's knowledge base for agents, over stdio.
 *
 * Data: the site's search index (index-manifest.json + pages-<n>.json, cached by sha256 in
 * ~/.cache/bc-observatory/<site hash>/, refreshed daily) and its markdown twins (<path>.md). Set
 * BC_OBSERVATORY_LOCAL=<repo checkout> to read content/ and data/ from disk instead (offline, tests), or
 * BC_OBSERVATORY_SITE to point at another deployment.
 *
 * Tools: search, ls, cat, get_object, diff_object, localization, whats_new, blog_footprint, feedback.
 *
 * Search is hybrid (D63): MiniSearch keywords fused with static embeddings (model2vec potion-base-8M, MIT) by
 * reciprocal rank, so "client" finds Customer. The model (30 MB) is downloaded once on the first search, pinned by
 * revision and checked by SHA-256, into ~/.cache/bc-observatory/models/. BC_OBSERVATORY_EMBEDDINGS=0 turns it off;
 * BC_OBSERVATORY_MODEL_DIR uses a model on disk (offline, tests). Without a model, search is keyword-only.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import MiniSearch from "minisearch";
import { z } from "zod";
import { dot, embed, parseModel, type StaticModel } from "./embed.js";

const VERSION = "0.2.0";
const SITE = (process.env.BC_OBSERVATORY_SITE ?? "https://waldo1001.github.io/waldo.BCObservatory/").replace(/\/?$/, "/");
const LOCAL = process.env.BC_OBSERVATORY_LOCAL ? resolve(process.env.BC_OBSERVATORY_LOCAL) : null;
const REPO = "https://github.com/waldo1001/waldo.BCObservatory";
const DAY = 86_400_000;

export interface PageRecord {
  path: string; type: string; title: string; summary: string; tier: string; system?: string; date?: string; tags?: string[];
  object_type?: string; object_id?: number | null; app?: string | null; country?: string; source?: string; status?: string; obsolete?: string | null;
}
interface IndexManifest { schema: string; pages: number; shards: { file: string; count: number; sha256: string }[] }

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
let search: MiniSearch<PageRecord> | null = null;
let loadedAt = 0;

/** Index shards by sha256: cached on disk, downloaded only when the manifest names a new hash. */
async function loadIndex(): Promise<void> {
  if (search && Date.now() - loadedAt < DAY) return;
  const manifest = JSON.parse(await dataFile("index/index-manifest.json")) as IndexManifest;
  const all: PageRecord[] = [];
  if (!LOCAL) mkdirSync(cacheDir, { recursive: true });
  for (const s of manifest.shards) {
    const cached = join(cacheDir, `${s.sha256}.json`);
    let text: string;
    if (!LOCAL && existsSync(cached)) text = readFileSync(cached, "utf8");
    else {
      text = await dataFile(`index/${s.file}`);
      if (!LOCAL) writeFileSync(cached, text);
    }
    all.push(...(JSON.parse(text) as PageRecord[]));
  }
  const ms = new MiniSearch<PageRecord>({
    idField: "path", fields: ["title", "summary", "tagText", "path"],
    storeFields: ["path", "type", "title", "summary", "tier", "system", "date", "object_type", "object_id", "app", "country", "source", "status", "obsolete"],
    extractField: (doc, f) => (f === "tagText" ? (doc.tags ?? []).join(" ") : (doc as any)[f]),
    searchOptions: { boost: { title: 3, tagText: 1.5 }, prefix: true, fuzzy: 0.15 },
  });
  ms.addAll(all);
  pages = all;
  search = ms;
  loadedAt = Date.now();
}

const url = (path: string) => `${SITE}${path}/`;
const line = (r: PageRecord) => `- ${r.title} [${r.type}${r.tier ? `, ${r.tier}` : ""}${r.date ? `, ${r.date}` : ""}] path=${r.path}\n  ${r.summary}`;
const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });

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

export async function toolSearch(a: { query: string; type?: string; tier?: string; system?: string; limit?: number; mode?: "hybrid" | "keyword" | "semantic" }): Promise<string> {
  await loadIndex();
  const keep = (r: PageRecord) => (!a.type || r.type === a.type) && (!a.tier || r.tier === a.tier) && (!a.system || r.system === a.system);
  const limit = a.limit ?? 10, mode = a.mode ?? "hybrid", POOL = 50;
  const keyword = mode === "semantic" ? [] : (search!.search(a.query, { filter: (r: any) => keep(r) }).slice(0, POOL) as unknown as PageRecord[]).map((r) => r.path);
  let semantic: string[] = [], note = "";
  if (mode !== "keyword") {
    const m = await loadModel();
    if (m) {
      const q = embed(m, a.query), data = pageVectors(m);
      if (q.some((x) => x !== 0)) {
        const scored: [number, number][] = [];
        pages.forEach((p, i) => { if (keep(p)) scored.push([dot(q, data, i * m.dims), i]); });
        semantic = scored.sort((x, y) => y[0] - x[0]).slice(0, POOL).map(([, i]) => pages[i].path);
      }
    } else if (mode === "semantic") note = ` (semantic search unavailable: ${modelError}; keyword results instead)`;
    if (!m && mode === "semantic") semantic = (search!.search(a.query, { filter: (r: any) => keep(r) }).slice(0, POOL) as unknown as PageRecord[]).map((r) => r.path);
  }
  const byPath = new Map(pages.map((p) => [p.path, p]));
  const hits = fuse([keyword, semantic].filter((l) => l.length)).slice(0, limit).map((p) => byPath.get(p)!).filter(Boolean);
  if (!hits.length) return `No pages match "${a.query}". Try fewer words, or ls("") to browse sections.`;
  const how = semantic.length && keyword.length ? "keyword + semantic" : semantic.length ? "semantic" : "keyword";
  return `${hits.length} results, ${how}${note} (read one with cat(path)):\n${hits.map(line).join("\n")}`;
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
  return pageMarkdown(a.path);
}

export async function toolGetObject(a: { type: string; idOrName: string }): Promise<string> {
  await loadIndex();
  const type = a.type.toLowerCase().replace(/\s+/g, "");
  const want = a.idOrName.trim().replace(/^"|"$/g, "");
  const objs = pages.filter((p) => p.type === "object" && p.object_type === type);
  const hit = /^\d+$/.test(want) ? objs.find((p) => p.object_id === Number(want))
    : objs.find((p) => p.title.toLowerCase().endsWith(`"${want.toLowerCase()}"`));
  if (!hit) return `No ${type} "${want}" in W1 or Microsoft's first-party apps (BC28-30). Never invent object ids; country-only objects are listed on localization pages.`;
  return pageMarkdown(hit.path);
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

export async function toolWhatsNew(a: { since: string; type?: string; limit?: number }): Promise<string> {
  await loadIndex();
  const since = a.since.slice(0, 10);
  const items = pages.filter((p) => p.date && p.date >= since && (!a.type || p.type === a.type)).sort((x, y) => y.date!.localeCompare(x.date!)).slice(0, a.limit ?? 30);
  if (!items.length) return `Nothing dated on or after ${since}.`;
  return `${items.length} items since ${since}, newest first:\n${items.map(line).join("\n")}`;
}

export async function toolBlogFootprint(a: { source: string }): Promise<string> {
  await loadIndex();
  const items = pages.filter((p) => p.source === a.source).sort((x, y) => (y.date ?? "").localeCompare(x.date ?? ""));
  if (!items.length) return `No posts or videos from source "${a.source}" yet. Source ids are listed in ${REPO}/blob/main/sources.yaml.`;
  const systems = new Map<string, number>();
  for (const p of items) if (p.system) systems.set(p.system, (systems.get(p.system) ?? 0) + 1);
  return `${a.source}: ${items.length} items, ${items.at(-1)!.date ?? "?"} to ${items[0].date ?? "?"}. Systems: ${[...systems].sort((x, y) => y[1] - x[1]).map(([s, n]) => `${s} ${n}`).join(", ")}.\n${items.slice(0, 20).map(line).join("\n")}`;
}

export function toolFeedback(a: { path: string; message: string }): string {
  const title = `Feedback on ${a.path}`;
  const body = `Page: ${url(a.path)}\n\n${a.message}\n\n(sent from the bc-observatory MCP server ${VERSION})`;
  return `Open this link to file the issue (no sign-in through the agent): ${REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=feedback`;
}

// ---------------------------------------------------------------------------------------------- server

export function createServer(): McpServer {
  const server = new McpServer({ name: "bc-observatory", version: VERSION }, {
    instructions: "BC Observatory: an agent-first knowledge base of Microsoft Dynamics 365 Business Central (Learn hubs, AL objects from the code for BC28-30, localizations, roadmap features, videos, community posts). Every page carries a trust tier (official = Microsoft, community = everyone else) and a review state: say which tier a claim comes from. Never invent AL object ids or version numbers: look them up with get_object. Start with search(), read pages with cat(path), browse with ls(path).",
  });
  server.registerTool("search", { title: "Search the knowledge base", description: "Search every page (title, summary, tags). Hybrid by default: keywords plus meaning, so a synonym or a paraphrase still finds the page; mode 'keyword' for exact terms such as an object name, 'semantic' for meaning only. Filter by type (topic, feature, object, localization, video, post), tier (official, community) or galaxy system (finance, sales, development, ...).",
    inputSchema: { query: z.string(), type: z.string().optional(), tier: z.string().optional(), system: z.string().optional(), limit: z.number().int().min(1).max(50).optional(), mode: z.enum(["hybrid", "keyword", "semantic"]).optional() } },
  async (a) => text(await toolSearch(a)));
  server.registerTool("ls", { title: "List pages", description: "Browse the page tree, e.g. ls('objects/table') or ls('localizations'); empty path lists the sections.", inputSchema: { path: z.string().optional() } },
    async (a) => text(await toolLs(a)));
  server.registerTool("cat", { title: "Read a page", description: "The full markdown of a page (frontmatter with evidence and links, then the body), by its path from search or ls.", inputSchema: { path: z.string() } },
    async (a) => text(await toolCat(a)));
  server.registerTool("get_object", { title: "Look up an AL object", description: "An AL object of W1 or a Microsoft first-party app by type and id or exact name, e.g. ('table', '18') or ('codeunit', 'Sales-Post'): fields, keys, events, public procedures, obsolete state, versions, countries that replace it, Learn pages.",
    inputSchema: { type: z.string(), idOrName: z.string() } }, async (a) => text(await toolGetObject(a)));
  server.registerTool("diff_object", { title: "What changed in an object", description: "Member-level changes of a W1 object between two consecutive versions (fields, events, procedures, keys, properties, obsolete state).",
    inputSchema: { type: z.string(), id: z.string(), from: z.string(), to: z.string() } }, async (a) => text(await toolDiffObject(a)));
  server.registerTool("localization", { title: "A country localization", description: "What a country layer (BE, NL, DE, ...) adds to or changes in W1, with its Learn local functionality hub.", inputSchema: { country: z.string().length(2) } },
    async (a) => text(await toolLocalization(a)));
  server.registerTool("whats_new", { title: "What is new", description: "Videos, posts and roadmap features dated on or after a date (YYYY-MM-DD), newest first.",
    inputSchema: { since: z.string(), type: z.string().optional(), limit: z.number().int().min(1).max(100).optional() } }, async (a) => text(await toolWhatsNew(a)));
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
