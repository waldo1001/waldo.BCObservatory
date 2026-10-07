/**
 * Build-time view of data/links/related.json (D65, discovery spec 3.7 and 6.1): the Related rows of a page with the
 * title, kind and system of each target and its site path. Read once per build; nothing here runs in the browser.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

interface RelatedFile { nodes: Record<string, [string, string, string | null]>; pages: Record<string, { id: string; why: string }[]> }
export interface RelatedRow { id: string; why: string; title: string; kind: string; system: string | null; href: string }

/** How a target's kind reads in the block; an object shows its AL type (table, page, ...). */
const KIND: Record<string, string> = { topic: "topic hub", app: "first-party app", video: "video", post: "community post", feature: "roadmap feature" };

let cache: RelatedFile | null = null;
function load(): RelatedFile {
  if (cache) return cache;
  const p = resolve(process.cwd(), "..", "data", "links", "related.json");
  cache = existsSync(p) ? (JSON.parse(readFileSync(p, "utf8")) as RelatedFile) : { nodes: {}, pages: {} };
  return cache;
}

/** Site path of a page id: `topic/a/b` -> `topics/a/b/`, `app/x` -> `apps/x/`. */
export const pathOfId = (id: string) => { const i = id.indexOf("/"); return `${id.slice(0, i)}s/${id.slice(i + 1)}/`; };

export function relatedFor(id: string): RelatedRow[] {
  const f = load();
  return (f.pages[id] ?? []).map((r) => {
    const [title, kind, system] = f.nodes[r.id] ?? [r.id, r.id.split("/")[0], null];
    return { id: r.id, why: r.why, title, kind: KIND[kind] ?? kind, system, href: pathOfId(r.id) };
  });
}
