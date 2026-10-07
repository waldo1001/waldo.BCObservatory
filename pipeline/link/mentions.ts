/**
 * Object mentions of videos and posts (D65, factored out of graph.ts): AL objects by exact type and name ("table
 * Customer"), the way the extractors record them in `objects_mentioned` and `code_objects_mentioned`. Exact only, and
 * a name two objects of one type share (an object moved between apps) is left out rather than guessed. This is the one
 * place outside the seed import that resolves by name (spec section 1, design intent); the graph and the app pages
 * share it.
 */

/** Object page frontmatter fields the index needs. */
export interface ObjectNameRow { id: string; fm: Record<string, any> }
/** `"<object type> <name>"` lower-cased -> object page id, or null when two objects share it. */
export type ObjectByName = Map<string, string | null>;

export function objectByName(pages: Iterable<ObjectNameRow>): ObjectByName {
  const m: ObjectByName = new Map();
  for (const { id, fm } of pages) {
    if (fm.type !== "object" || !fm.object_type || !fm.name) continue;
    const k = `${fm.object_type} ${String(fm.name)}`.toLowerCase();
    m.set(k, m.has(k) && m.get(k) !== id ? null : id);
  }
  return m;
}

/** The object page ids a video's or post's frontmatter names, distinct, in mention order. */
export function mentionedObjects(fm: Record<string, any>, byName: ObjectByName): string[] {
  return [...new Set([...(fm.objects_mentioned ?? []), ...(fm.code_objects_mentioned ?? [])]
    .map((m: unknown) => byName.get(String(m).toLowerCase().trim())).filter((x): x is string => !!x))];
}
