/**
 * Microsoft Support "Update 28.x" hotfix lists (D106, spec 4.4): one manifest item per update page, one entry per
 * resolved problem (ID, Microsoft's one-line wording, functional area, group and country). Deterministic, no LLM.
 *
 * The release-wave index page ("Released updates for Microsoft Dynamics 365 Business Central 2026 release wave 1")
 * links every update; `fetch.updates` in sources.yaml allows the ones to read (28.4 to 28.6 first). Each update page
 * holds tables under "Problems that are resolved in this update": Platform hotfixes (ID, Title), Application hotfixes
 * (ID, Title, Functional Area) and Local application hotfixes, one table per country ("AT - Austria"). A snapshot per
 * update under data/hotfixes/<major>/<update>.json is written when its entries change.
 *
 * Content policy: Microsoft Support pages are not CC BY like Learn; the repository keeps the ID, the area and the one
 * line of wording per entry with attribution and a link (CONTENT-NOTICE.md), never the rest of the page.
 */
import { dirname, resolve } from "node:path";
import type { SourceDef } from "../lib/config.js";
import { exists, readJson, writeJson } from "../lib/fsx.js";
import { canonicalJson, sha256 } from "../lib/text.js";
import { newResult, tally, type IngestContext, type SourceResult } from "./types.js";

export const SCHEMA = "bcobs-hotfix@1";
export type HotfixGroup = "platform" | "application" | "local";
export interface HotfixEntry { id: string; title: string; area: string | null; group: HotfixGroup; country: string | null }
export interface UpdateLink { update: string; major: string; kb: string | null; url: string; month: string | null }
export interface HotfixSnapshot {
  schema: typeof SCHEMA; update: string; major: string; kb: string | null; url: string; month: string | null;
  application_build: string | null; platform_build: string | null; title: string; fetched_at: string; entries: HotfixEntry[];
}

const decode = (s: string) => s.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, "\"").replace(/&#39;|&#x27;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/\s+/g, " ").trim();

/** The update links of an index page: `Update 28.6` from the href, the KB number from the link text, the month from the path. */
export function parseUpdateIndex(html: string, base: string): UpdateLink[] {
  const out = new Map<string, UpdateLink>();
  for (const m of html.matchAll(/<a\s[^>]*href="([^"]*update-(\d+)-(\d+)-for-[^"]*)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const update = `${m[2]}.${m[3]}`;
    if (out.has(update)) continue;
    // resolved like a browser does: against the index page itself, so "update/..." lands next to it
    const url = new URL(m[1], base).toString();
    const month = /\/update\/(\d{4})\/(\d{2})\//.exec(url);
    const kb = /^\d{6,8}$/.test(decode(m[4])) ? decode(m[4]) : null;
    out.set(update, { update, major: m[2], kb, url, month: month ? `${month[1]}-${month[2]}` : null });
  }
  return [...out.values()].sort((a, b) => Number(b.update.split(".")[1]) - Number(a.update.split(".")[1]) || b.major.localeCompare(a.major));
}

/** The resolved problems of an update page, in page order; throws when the page has no such section (markup changed). */
export function parseUpdatePage(html: string): { title: string; application_build: string | null; platform_build: string | null; entries: HotfixEntry[] } {
  const h1 = /<h1[^>]*>([\s\S]*?)<\/h1>/.exec(html);
  const title = h1 ? decode(h1[1]) : "";
  const start = html.indexOf('id="problems-that-are-resolved-in-this-update"');
  if (start < 0) throw new Error("no 'Problems that are resolved in this update' section");
  const end = html.indexOf('id="resolution"', start);
  const sec = html.slice(start, end < 0 ? undefined : end);
  const entries: HotfixEntry[] = [];
  let group: HotfixGroup = "application", country: string | null = null;
  // labels (<p><strong>...</strong></p>) and tables, in order
  for (const m of sec.matchAll(/<p>\s*<strong>([\s\S]*?)<\/strong>\s*<\/p>|<table[\s\S]*?<\/table>/g)) {
    if (m[1] !== undefined) {
      const label = decode(m[1]);
      if (/^platform hotfixes$/i.test(label)) { group = "platform"; country = null; }
      else if (/^application hotfixes$/i.test(label)) { group = "application"; country = null; }
      else if (/^local application hotfixes$/i.test(label)) { group = "local"; country = null; }
      else if (group === "local") country = /^([A-Z]{2})\b/.exec(label)?.[1] ?? null;
      continue;
    }
    const heads = [...m[0].matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map((x) => decode(x[1]).toLowerCase());
    const col = (re: RegExp) => heads.findIndex((h) => re.test(h));
    const ci = col(/^id$/), ct = col(/^title$/), ca = col(/area/);
    for (const row of m[0].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
      const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((x) => decode(x[1]));
      if (!cells.length) continue;
      const id = cells[ci < 0 ? 0 : ci] ?? "";
      if (!/^\d{5,8}$/.test(id)) continue;
      entries.push({ id, title: cells[ct < 0 ? 1 : ct] ?? "", area: ca >= 0 ? cells[ca] || null : null, group, country });
    }
  }
  const build = (kind: string) => new RegExp(`${kind} Build (\\d+\\.\\d+\\.\\d+)`, "i").exec(title)?.[1] ?? null;
  return { title, application_build: build("Application"), platform_build: build("Platform"), entries };
}

export const hotfixDir = (dataDir: string, major: string) => resolve(dataDir, "hotfixes", major);
export const hotfixSnapshotPath = (dataDir: string, update: string) => resolve(hotfixDir(dataDir, update.split(".")[0]), `${update}.json`);
export const hotfixKey = (update: string) => update;

export async function ingestSupportUpdates(source: SourceDef, ctx: IngestContext): Promise<SourceResult> {
  const r = newResult(source);
  const allow = new Set((source.fetch?.updates ?? []).map(String));
  const dataDir = ctx.dataDir ?? dirname(ctx.roadmapDir);
  const res = await ctx.http(source.url, { accept: "text/html" });
  const links = parseUpdateIndex(await res.text(), source.url).filter((l) => !allow.size || allow.has(l.update));
  const present = new Set<string>();
  const failed: string[] = [];
  for (const l of links) {
    let parsed: ReturnType<typeof parseUpdatePage>;
    try { parsed = parseUpdatePage(await (await ctx.http(l.url, { accept: "text/html" })).text()); }
    catch (e) { failed.push(`${l.update}: ${String((e as Error).message).slice(0, 120)}`); continue; }
    if (!parsed.entries.length) { failed.push(`${l.update}: no entries`); continue; }
    present.add(hotfixKey(l.update));
    const input_hash = sha256(canonicalJson({ entries: parsed.entries, builds: [parsed.application_build, parsed.platform_build] }));
    const p = hotfixSnapshotPath(dataDir, l.update);
    const prev = exists(p) ? readJson<HotfixSnapshot>(p) : null;
    if (!prev || sha256(canonicalJson({ entries: prev.entries, builds: [prev.application_build, prev.platform_build] })) !== input_hash) {
      const snap: HotfixSnapshot = { schema: SCHEMA, update: l.update, major: l.major, kb: l.kb, url: l.url, month: l.month, application_build: parsed.application_build, platform_build: parsed.platform_build, title: parsed.title, fetched_at: ctx.now.toISOString(), entries: parsed.entries };
      writeJson(p, snap);
    }
    const { change } = ctx.manifest.discover({
      pillar: "hotfix", source: source.id, key: hotfixKey(l.update), tier: source.tier, title: `Update ${l.update} for Business Central`,
      url: l.url, published_at: l.month ? `${l.month}-01T00:00:00.000Z` : null, input_hash,
      meta: { update: l.update, major: l.major, kb: l.kb, entries: parsed.entries.length, application_build: parsed.application_build },
    }, ctx.now);
    tally(r, change);
  }
  // an update that failed tonight keeps its item; only one that left the index (or the allow list) is removed
  for (const f of failed) present.add(f.split(":")[0]);
  r.counts.removed = ctx.manifest.markRemoved("hotfix", source.id, present);
  if (failed.length) { r.ok = links.length > failed.length; r.note = `failed: ${failed.join("; ")}`; }
  else r.note = `${links.length} updates: ${links.map((l) => l.update).join(", ")}`;
  return r;
}
