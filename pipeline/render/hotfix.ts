/**
 * Hotfix list pages (D106, deterministic): content/hotfixes/<update>.md per Microsoft Support update page, and
 * content/hotfixes/llms.txt. One page per update, not per entry (bytes first, D88): each entry is a table row anchored
 * by its ID (`hotfixes/28.6.md#648146`).
 *
 * Joins, both exact:
 * - `fixes`: the entry's ID is a work item (AB#) of a code change page (data from the change pages' `work_items`);
 * - `possibly related`: the wording names an object by its exact name followed by its type word ("General Ledger
 *   Setup page"). Anything else stays standalone: the page never guesses which change fixes a support case.
 * No model text: review state derived.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { stringify as toYaml } from "yaml";
import { exists, listFiles, readJson, readText, removeIfExists, writeText } from "../lib/fsx.js";
import type { Manifest, ManifestItem } from "../lib/manifest.js";
import { reviewOf } from "../lib/review.js";
import { validateOrThrow } from "../lib/schema.js";
import { llmsTitle } from "../lib/sections.js";
import { objectTitle } from "../lib/object-title.js";
import type { StageContext, StageHandler } from "../orchestrator/execute.js";
import { PIPELINE_VERSION } from "../version.js";
import { hotfixSnapshotPath, type HotfixEntry, type HotfixSnapshot } from "../ingest/support-updates.js";
import { loadObjectIndex, type ObjectIndex } from "../link/mentions.js";
import { frontmatterOf } from "../link/related.js";
import { crossLinkSection, crossLinksFor, type CrossLink } from "../link/crosslinks.js";

const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const stable = (p: string) => p.replace(/^(generated:\n {2}at: ).*$/m, "$1");
export const hotfixPagePath = (contentDir: string, update: string) => resolve(contentDir, "hotfixes", `${update}.md`);
const GROUP_NAME = { platform: "Platform hotfixes", application: "Application hotfixes", local: "Local application hotfixes" } as const;
/** The most possibly-related object rows one page carries in frontmatter (the schema's cap on links.related). */
const MAX_RELATED = 24;

export interface ChangeByWorkItem { id: string; title: string }
/** Work item ID -> the change pages that carry it (content/changes/<repo>/<n>.md `work_items`). */
export function changesByWorkItem(contentDir: string): Map<string, ChangeByWorkItem[]> {
  const m = new Map<string, ChangeByWorkItem[]>();
  for (const f of listFiles(resolve(contentDir, "changes"), ".md")) {
    const fm = frontmatterOf(readText(f));
    if (fm?.type !== "change") continue;
    for (const wi of fm.work_items ?? []) m.set(String(wi), [...(m.get(String(wi)) ?? []), { id: String(fm.id), title: String(fm.title) }]);
  }
  for (const l of m.values()) l.sort((a, b) => a.id.localeCompare(b.id));
  return m;
}

const TYPE_WORDS: Record<string, string> = { page: "page", pages: "page", table: "table", tables: "table", report: "report", reports: "report", codeunit: "codeunit" };
/** Objects the wording names exactly: up to six words before a type word ("General Ledger Setup page"), longest first. */
export function objectsNamed(wording: string, index: ObjectIndex): string[] {
  const words = wording.replace(/[‘’“”"(),.;:!?]/g, " ").split(/\s+/).filter(Boolean);
  const out: string[] = [];
  words.forEach((w, i) => {
    const type = TYPE_WORDS[w.toLowerCase()];
    if (!type) return;
    for (let n = Math.min(6, i); n >= 1; n--) {
      const id = index.byName.get(`${type} ${words.slice(i - n, i).join(" ")}`.toLowerCase());
      if (id) { if (!out.includes(id)) out.push(id); break; }
    }
  });
  return out;
}

export interface HotfixJoins { byWorkItem: Map<string, ChangeByWorkItem[]>; index: ObjectIndex | null }

export function renderHotfixPage(snap: HotfixSnapshot, joins: HotfixJoins, now: Date, xlinks: CrossLink[] = []): string {
  const id = `hotfix/${snap.update}`;
  const groups = (["platform", "application", "local"] as const).map((g) => [g, snap.entries.filter((e) => e.group === g)] as const).filter(([, es]) => es.length);
  const areas = new Map<string, number>();
  for (const e of snap.entries) if (e.area) areas.set(e.area, (areas.get(e.area) ?? 0) + 1);
  const countries = [...new Set(snap.entries.map((e) => e.country).filter((c): c is string => !!c))].sort();
  const fixes = new Map(snap.entries.map((e) => [e.id, joins.byWorkItem.get(e.id) ?? []]));
  const named = new Map(snap.entries.map((e) => [e.id, joins.index ? objectsNamed(e.title, joins.index) : []]));
  const refTitle = (oid: string) => { const r = joins.index?.refs.get(oid); return r ? objectTitle(r) : oid; };
  const related: CrossLink[] = [];
  for (const e of snap.entries) for (const oid of named.get(e.id) ?? []) {
    if (related.length < MAX_RELATED && !related.some((r) => r.to === oid)) related.push({ to: oid, title: refTitle(oid), label: "possibly related", why: `entry ${e.id} names it`, by: "code" });
  }
  // hand-made links to an entry (data/overrides/links.yaml) come first; the page caps links.related at MAX_RELATED
  for (const r of [...xlinks].reverse()) if (!related.some((x) => x.to === r.to)) related.unshift(r);
  related.splice(MAX_RELATED);
  const changeIds = [...new Set([...fixes.values()].flat().map((c) => c.id))].sort();
  const month = snap.month ?? null;
  const summary = `Microsoft's hotfix list for Business Central Update ${snap.update}${snap.application_build ? ` (application build ${snap.application_build})` : ""}: ${snap.entries.length} resolved problems${groups.map(([g, es]) => `, ${es.length} ${g}`).join("")}${countries.length ? ` in ${countries.length} countries` : ""}. Each entry with its ID, area and Microsoft's one-line wording; ${changeIds.length} code changes carry one of the IDs as a work item.`;
  const fm = {
    id, type: "hotfix", title: `Update ${snap.update} for Business Central`, summary: summary.slice(0, 600), tier: "official", language: "en",
    tags: ["hotfix", `bc${snap.major}`, ...[...areas].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([a]) => a.toLowerCase())],
    review: reviewOf(false),
    generated: { at: now.toISOString(), pipeline: PIPELINE_VERSION, prompts: {}, input_hash: null },
    evidence: [{ kind: "support", url: snap.url, title: snap.title || `Update ${snap.update}`, date: month, commit: null, t: null, quote: null }],
    links: {
      learn: [], objects: [], features: [], topics: [], localizations: [], videos: [], posts: [], guidelines: [], changes: changeIds,
      ...(related.length ? { related } : {}),
    },
    update: snap.update, major: snap.major, kb: snap.kb, url: snap.url, month, application_build: snap.application_build, platform_build: snap.platform_build,
    entry_count: snap.entries.length, areas: Object.fromEntries([...areas].sort((a, b) => b[1] - a[1])), countries,
    entry_ids: snap.entries.map((e) => e.id),
  };
  validateOrThrow("frontmatter.hotfix", fm, `hotfix page ${snap.update}`);
  const link = (e: HotfixEntry) => [
    ...(fixes.get(e.id) ?? []).map((c) => `fixes [${cell(c.title.split(" ")[0])}](../${c.id.replace(/^change\//, "changes/")}.md)`),
    ...(named.get(e.id) ?? []).map((oid) => `possibly related [${cell(refTitle(oid))}](../${oid.replace(/^object\//, "objects/")}.md)`),
  ].join("; ");
  const lines = [`# Update ${snap.update} for Business Central`, "", `> ${summary}`, "",
    `[Microsoft Support${snap.kb ? `, KB${snap.kb}` : ""}](${snap.url})${month ? ` · ${month}` : ""}${snap.application_build ? ` · application build ${snap.application_build}` : ""}${snap.platform_build ? ` · platform build ${snap.platform_build}` : ""} · tier official · derived`, ""];
  for (const [g, es] of groups) {
    lines.push(`## ${GROUP_NAME[g]}`, "");
    const byCountry = g === "local" ? [...new Set(es.map((e) => e.country ?? "?"))] : [null];
    for (const cc of byCountry) {
      const rows = es.filter((e) => cc === null || (e.country ?? "?") === cc);
      if (cc) lines.push(`### ${cc}`, "");
      const area = g !== "platform";
      lines.push(area ? "| ID | Wording | Area | Links |" : "| ID | Wording | Links |", area ? "|---|---|---|---|" : "|---|---|---|");
      for (const e of rows) lines.push(`| <a id="${e.id}"></a>${e.id} | ${cell(e.title)} |${area ? ` ${cell(e.area ?? "")} |` : ""} ${link(e)} |`);
      lines.push("");
    }
  }
  lines.push(...crossLinkSection(xlinks, "../"));
  lines.push(`Source: Microsoft Support, Update ${snap.update} for Microsoft Dynamics 365 Business Central. Per entry the ID, the area and Microsoft's one-line wording, with a link (D106, CONTENT-NOTICE.md); read the page for prerequisites and downloads. "fixes" means a code change carries the ID as a work item; "possibly related" means the wording names that object, and no source states more.`, "");
  return `---\n${toYaml(fm, { lineWidth: 0, version: "1.1" })}---\n\n${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

function writeHotfixPage(update: string, dataDir: string, contentDir: string, joins: HotfixJoins, now: Date): boolean {
  const p = hotfixSnapshotPath(dataDir, update);
  if (!exists(p)) return false;
  const page = renderHotfixPage(readJson<HotfixSnapshot>(p), joins, now, crossLinksFor(dataDir, `hotfix/${update}`));
  const path = hotfixPagePath(contentDir, update);
  if (!exists(path) || stable(readText(path)) !== stable(page)) writeText(path, page);
  return true;
}

const joinsOf = (dataDir: string, contentDir: string): HotfixJoins => ({ byWorkItem: changesByWorkItem(contentDir), index: loadObjectIndex(dataDir) });

/** Hotfix `published`: the update's page from its snapshot. */
export function hotfixPublished(): StageHandler {
  return async (item: ManifestItem, ctx: StageContext) => {
    const update = String(item.meta?.update ?? item.id.split("/").pop());
    if (!writeHotfixPage(update, ctx.dataDir, ctx.contentDir, joinsOf(ctx.dataDir, ctx.contentDir), ctx.now())) return { skip: "removed-upstream" };
    return { data: { path: `content/hotfixes/${update}.md` }, output_hash: item.input_hash ?? undefined };
  };
}

/** After the change pages: re-render every published hotfix page, so tonight's work items reach pages written earlier. */
export function rerenderHotfixPages(manifest: Manifest, dataDir: string, contentDir: string, now: Date): number {
  const joins = joinsOf(dataDir, contentDir);
  return manifest.list("hotfix").filter((i) => i.stages.published).filter((i) => writeHotfixPage(String(i.meta?.update), dataDir, contentDir, joins, now)).length;
}

/** content/hotfixes/llms.txt, newest update first; drops pages whose snapshot is gone. */
export function renderHotfixIndex(contentDir: string, dataDir: string): number {
  const dir = resolve(contentDir, "hotfixes");
  if (!exists(dir)) return 0;
  const pages = readdirSync(dir).filter((n) => n.endsWith(".md"));
  for (const f of pages) if (!exists(hotfixSnapshotPath(dataDir, f.slice(0, -3)))) removeIfExists(resolve(dir, f));
  const snaps = readdirSync(dir).filter((n) => n.endsWith(".md")).map((f) => readJson<HotfixSnapshot>(hotfixSnapshotPath(dataDir, f.slice(0, -3))))
    .sort((a, b) => Number(b.major) - Number(a.major) || Number(b.update.split(".")[1]) - Number(a.update.split(".")[1]));
  if (!snaps.length) { removeIfExists(resolve(dir, "llms.txt")); return 0; }
  const text = [llmsTitle("hotfixes"), "",
    "> Microsoft's hotfix lists for Business Central from Microsoft Support, one page per update. Each entry is a row anchored",
    "> by its ID (hotfixes/28.6.md#648146), with links to the code changes that carry the ID as a work item. Frontmatter:",
    "> schemas/frontmatter.hotfix.json.", "",
    `${snaps.length} updates, newest first.`, "",
    ...snaps.map((s) => `- [Update ${s.update}](${s.update}.md): ${s.entries.length} entries${s.month ? `, ${s.month}` : ""}${s.application_build ? `, application build ${s.application_build}` : ""}`), ""].join("\n");
  const idx = resolve(dir, "llms.txt");
  if (!exists(idx) || readText(idx) !== text) writeText(idx, text);
  return snaps.length;
}
