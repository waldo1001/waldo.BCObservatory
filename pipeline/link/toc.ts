/**
 * Topic hubs seeded from Learn's TOC.md files (PLAN M1 step 4, deterministic).
 *
 * Each Learn repo's TOC.md is a heading tree: `## [Title](href)` is a page, `## Title` a group. Nested TOC.md links
 * are inlined. Hrefs resolve to canonical Learn URLs and match manifest items by URL, so cross-repo links count too.
 * A hub is a group node down to HUB_MAX_DEPTH with at least HUB_MIN_PAGES pages beneath it; deeper groups fold into
 * their nearest hub. Each hub gets a galaxy system from config/taxonomy.json (alias match on its title path,
 * inherited from the parent otherwise) and a member hash, so a narrative is refreshed only when members change (D12).
 */
import { posix } from "node:path";
import type { SourceDef } from "../lib/config.js";
import { taxonomy } from "../lib/config.js";
import { git } from "../lib/git.js";
import type { ManifestItem } from "../lib/manifest.js";
import { sha256, slugify } from "../lib/text.js";
import { pageUrl } from "../ingest/git-content.js";

export const HUB_MAX_DEPTH = 4;
export const HUB_MIN_PAGES = 2;
const LEARN = "https://learn.microsoft.com";

export interface TocNode { title: string; href: string | null; depth: number; children: TocNode[]; /** canonical Learn URL, set while loading */ url?: string }

/** Heading tree of one TOC.md (comments removed). */
export function parseToc(text: string): TocNode[] {
  const clean = text.replace(/<!--[\s\S]*?-->/g, "").replace(/^---[\s\S]*?---\s*/, "");
  const roots: TocNode[] = [];
  const stack: TocNode[] = [];
  for (const line of clean.split("\n")) {
    const m = line.match(/^(#{1,9})\s+(.+?)\s*$/);
    if (!m) continue;
    const depth = m[1].length;
    const link = m[2].match(/^\[(.+)\]\(\s*([^)\s]*)\s*\)$/);
    const node: TocNode = { title: (link ? link[1] : m[2]).replace(/\s+/g, " ").trim(), href: link ? link[2] : null, depth, children: [] };
    while (stack.length && stack[stack.length - 1].depth >= depth) stack.pop();
    (stack.length ? stack[stack.length - 1].children : roots).push(node);
    stack.push(node);
  }
  return roots;
}

/** Canonical Learn URL for an href in a TOC at tocPath, or a nested TOC path, or null for external/non-pages. */
export function resolveHref(href: string, tocPath: string, source: Pick<SourceDef, "kind" | "url" | "repo" | "branch" | "paths">): { url?: string; toc?: string } | null {
  const h = href.split(/[?#]/)[0].trim();
  if (!h || /^[a-z]+:/i.test(h)) return null;
  if (h.startsWith("/")) {
    const p = h.replace(/^\/[a-z]{2}-[a-z]{2}\//i, "/").replace(/\/$/, "");
    return p.startsWith("/dynamics365/business-central/") ? { url: LEARN + p.replace(/\/index$/, "") } : null;
  }
  const path = posix.normalize(posix.join(posix.dirname(tocPath), h));
  if (/(^|\/)toc\.md$/i.test(path)) return { toc: path };
  if (!path.endsWith(".md")) return null;
  return { url: pageUrl(source, path).replace(/\/$/, "") };
}

export interface TopicHub {
  id: string; title: string; toc: string; breadcrumb: string[]; parent: string | null; children: string[];
  members: string[]; system: string | null; member_hash: string;
}

/** Galaxy system by alias match on the hub's own title first, then its ancestors' titles. */
export function systemFor(titles: string[]): string | null {
  const systems = taxonomy().systems;
  for (const t of [...titles].reverse()) {
    const words = ` ${t.toLowerCase().replace(/[^a-z0-9/&.-]+/g, " ")} `;
    const hit = systems.find((s) => [s.label.toLowerCase(), s.id.replace(/-/g, " "), ...s.aliases].some((a) => words.includes(` ${a.toLowerCase()} `)));
    if (hit) return hit.id;
  }
  return null;
}

export interface TocSource { source: SourceDef; tocPath: string; read: (path: string) => Promise<string | null> }

/** Build hubs for every TOC source; items are the docs manifest items (matched by url). */
export async function buildTopicHubs(tocs: TocSource[], items: ManifestItem[]): Promise<TopicHub[]> {
  const byUrl = new Map(items.map((i) => [i.url.replace(/\/$/, ""), i.id]));
  const hubs: TopicHub[] = [];
  const usedIds = new Set<string>();

  for (const t of tocs) {
    const rootSlug = t.source.id === "learn-devitpro" ? "dev-itpro" : t.source.id === "learn-smb-docs" ? "business-central" : t.source.id;
    // inline nested TOCs (guard against cycles)
    const load = async (path: string, seen: Set<string>): Promise<TocNode[]> => {
      if (seen.has(path)) return [];
      const text = await t.read(path);
      if (text === null) return [];
      const nodes = parseToc(text);
      const visit = async (ns: TocNode[], base: number): Promise<TocNode[]> => {
        const out: TocNode[] = [];
        for (const n of ns) {
          const r = n.href ? resolveHref(n.href, path, t.source) : null;
          if (r?.toc) {
            const inner = await load(r.toc, new Set([...seen, path]));
            out.push({ ...n, href: null, depth: n.depth + base, children: [...(await visit(n.children, base)), ...shift(inner, n.depth + base)] });
          } else {
            out.push({ ...n, ...(r?.url ? { url: r.url } : {}), depth: n.depth + base, children: await visit(n.children, base) });
          }
        }
        return out;
      };
      return visit(nodes, 0);
    };
    const tree = await load(t.tocPath, new Set());
    const memberOf = (n: TocNode): string[] => {
      const id = n.url ? byUrl.get(n.url) : undefined;
      return [...(id ? [id] : []), ...n.children.flatMap(memberOf)];
    };
    const walk = (nodes: TocNode[], crumbs: string[], parent: TopicHub | null, level: number) => {
      for (const n of nodes) {
        if (!n.children.length) continue;
        const members = [...new Set(memberOf(n))];
        const isHub = level <= HUB_MAX_DEPTH && members.length >= HUB_MIN_PAGES;
        if (!isHub) continue; // deeper or tiny groups stay inside the parent's members
        const titles = [...crumbs, n.title];
        let id = `topic/${rootSlug}/${titles.map((x) => slugify(x, 40)).filter(Boolean).join("/")}`;
        for (let k = 2; usedIds.has(id); k++) id = `${id.replace(/-\d+$/, "")}-${k}`;
        usedIds.add(id);
        const hub: TopicHub = {
          id, title: n.title, toc: t.tocPath, breadcrumb: crumbs, parent: parent?.id ?? null, children: [], members,
          system: systemFor(titles) ?? parent?.system ?? null, member_hash: sha256(members.slice().sort().join("\n")),
        };
        hubs.push(hub);
        parent?.children.push(id);
        walk(n.children, titles, hub, level + 1);
      }
    };
    walk(tree, [], null, 1);
  }
  return hubs;
}

function shift(nodes: TocNode[], by: number): TocNode[] {
  return nodes.map((n) => ({ ...n, depth: n.depth + by, children: shift(n.children, by) }));
}

/** Read a TOC from a blobless mirror at the branch head (git fetches the blob on demand). */
export function mirrorReader(mirror: string, branch = "main"): (path: string) => Promise<string | null> {
  return async (path) => {
    try { return await git(["show", `${branch}:${path}`], mirror); } catch { return null; }
  };
}
