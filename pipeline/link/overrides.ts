/**
 * Hand-made cross-links (D106): data/overrides/links.yaml, schema overrides-links. A human checked each row, so the
 * linker writes it in both directions and lets it win over a generated link with the same target (merged last, the
 * repository's rule for overrides). The loader only parses and validates; crosslinks.ts places the rows.
 */
import { resolve } from "node:path";
import { parse as parseYaml } from "yaml";
import { exists, readText } from "../lib/fsx.js";
import { validateOrThrow } from "../lib/schema.js";
import type { Label } from "./crosslinks.js";

export interface OverrideLink {
  from: string; to: string; label: Label; why: string;
  evidence: { by: string; at: string; url?: string };
}

export const overrideLinksPath = (dataDir: string) => resolve(dataDir, "overrides", "links.yaml");

/** The rows of data/overrides/links.yaml; none when the file does not exist. Throws when it does not validate. */
export function loadOverrideLinks(dataDir: string): OverrideLink[] {
  const p = overrideLinksPath(dataDir);
  if (!exists(p)) return [];
  const doc = parseYaml(readText(p)) ?? { links: [] };
  validateOrThrow("overrides-links", doc, "overrides-links (data/overrides/links.yaml)");
  return (doc as { links: OverrideLink[] }).links;
}

/** Content folder per page type (an id's first segment). */
const DIRS: Record<string, string> = {
  object: "objects", change: "changes", video: "videos", post: "posts", topic: "topics", feature: "features",
  hotfix: "hotfixes", release: "releases", source: "sources", localization: "localizations", app: "apps", digest: "digests",
};

export const isUrl = (to: string) => /^https?:\/\//.test(to);

/** `object/codeunit/1886` -> `objects/codeunit/1886.md` (the path under content/); an anchor is dropped. */
export function pagePathOf(id: string): string {
  const bare = id.split("#")[0];
  const i = bare.indexOf("/");
  return `${DIRS[bare.slice(0, i)] ?? `${bare.slice(0, i)}s`}/${bare.slice(i + 1)}.md`;
}

/** Rows whose page id has no page or whose URL is no Learn page we know: one message each. */
export function checkOverrideTargets(links: OverrideLink[], pageExists: (id: string) => boolean, learnUrls: Set<string>): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  const check = (x: string) => {
    if (seen.has(x)) return;
    seen.add(x);
    if (isUrl(x)) { if (!learnUrls.has(x)) errors.push(`overrides/links.yaml: ${x} is no known Learn page`); }
    else if (!pageExists(x)) errors.push(`overrides/links.yaml: ${x} has no page`);
  };
  for (const l of links) { check(l.from); check(l.to); }
  return errors;
}
