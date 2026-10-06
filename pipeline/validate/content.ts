/**
 * validate:content (PLAN stage 9, validate-2): deterministic checks over the generated knowledge base.
 *
 * - every content/**\/*.md has frontmatter that passes schemas/frontmatter.<type>.json
 * - its id is `<type>/<path under content/<type>s/ without .md>` and unique
 * - every id in frontmatter `links` (videos, features, topics, ...) names an existing page
 * - every relative markdown link in a page body or an llms.txt resolves to an existing file
 * Renderers validate frontmatter as they write; this catches what no single renderer sees (stale pages, dangling
 * cross-references, hand edits). No network, no LLM; runs in PR CI and after the nightly renders.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import matter from "gray-matter";
import { listFiles } from "../lib/fsx.js";
import { validate } from "../lib/schema.js";

export interface ContentReport { pages: number; indexes: number; errors: string[] }

/** Link kinds in frontmatter `links` that name pages by id (learn holds URLs, objects wait for the code pillar). */
const ID_LINKS = ["features", "topics", "videos", "posts", "localizations", "guidelines"] as const;
const LINK_RE = /\[[^\]]*\]\(([^)\s]+)\)/g;

/** `<type>/<path>` for content/<type>s/<path>.md; null outside a section folder. */
export function expectedId(contentDir: string, file: string, type: string): string | null {
  const rel = relative(resolve(contentDir, `${type}s`), file).split(sep).join("/");
  return rel.startsWith("..") ? null : `${type}/${rel.replace(/\.md$/, "")}`;
}

/** Relative link targets of a markdown text (http(s), mailto and pure anchors are not files). */
export function relativeLinks(text: string): string[] {
  const out: string[] = [];
  for (const m of text.matchAll(LINK_RE)) {
    const href = m[1];
    // "#x" and "?x=y" address the page itself (the localization pages filter their own diff with ?ns=, D50)
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("#") || href.startsWith("?")) continue;
    out.push(decodeURIComponent(href.split(/[#?]/)[0]));
  }
  return out.filter(Boolean);
}

export function validateContent(contentDir: string): ContentReport {
  const errors: string[] = [];
  const rel = (p: string) => relative(contentDir, p).split(sep).join("/");
  const pages = listFiles(contentDir, ".md");
  const ids = new Map<string, string>();
  const parsed: { file: string; data: any; body: string }[] = [];

  for (const file of pages) {
    let fm: matter.GrayMatterFile<string>;
    try { fm = matter(readFileSync(file, "utf8")); } catch (e) { errors.push(`${rel(file)}: frontmatter does not parse: ${(e as Error).message.slice(0, 120)}`); continue; }
    const data = fm.data as any;
    const type = typeof data.type === "string" ? data.type : "";
    if (!type) { errors.push(`${rel(file)}: no type in frontmatter`); continue; }
    let r;
    try { r = validate(`frontmatter.${type}`, data); } catch { errors.push(`${rel(file)}: no schema for type ${type}`); continue; }
    if (!r.ok) errors.push(...r.errors.slice(0, 5).map((e) => `${rel(file)}: schema frontmatter.${type}: ${e}`));
    const want = expectedId(contentDir, file, type);
    if (want === null) errors.push(`${rel(file)}: type ${type} page outside content/${type}s/`);
    else if (data.id !== want) errors.push(`${rel(file)}: id ${data.id} should be ${want}`);
    if (typeof data.id === "string") {
      if (ids.has(data.id)) errors.push(`${rel(file)}: id ${data.id} also used by ${ids.get(data.id)}`);
      else ids.set(data.id, rel(file));
    }
    parsed.push({ file, data, body: fm.content });
  }

  for (const { file, data, body } of parsed) {
    for (const kind of ID_LINKS) {
      for (const id of (data.links?.[kind] ?? []) as unknown[]) {
        if (typeof id === "string" && !ids.has(id)) errors.push(`${rel(file)}: links.${kind} names ${id}, which has no page`);
      }
    }
    for (const href of relativeLinks(body)) {
      if (!existsSync(resolve(dirname(file), href))) errors.push(`${rel(file)}: broken link ${href}`);
    }
  }

  const indexes = listFiles(contentDir, "llms.txt");
  for (const file of indexes) {
    for (const href of relativeLinks(readFileSync(file, "utf8"))) {
      if (!existsSync(resolve(dirname(file), href))) errors.push(`${rel(file)}: broken link ${href}`);
    }
  }
  return { pages: pages.length, indexes: indexes.length, errors };
}
