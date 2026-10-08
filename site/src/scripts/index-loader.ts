/**
 * The site's one copy of the search index (D86 4.6): the page shards of data/index/ (served under index/), loaded once
 * per document and prepared for the shared scorer of packages/search. The search page, the live search on the home
 * page and the palette share it.
 */
import { countriesOf, pageToRecord, prepare, type Index, type PageRecord } from "@bc-observatory/search";

export type PageKind = "hubs" | "media" | "objects";

let pages: Promise<Index> | null = null;
/** Every page shard (manifest, then the shards), prepared once per document. */
export function loadPages(base: string, _kinds: PageKind[] = ["hubs", "media", "objects"]): Promise<Index> {
  return (pages ??= (async () => {
    const man = await (await fetch(`${base}index/index-manifest.json`)).json() as { shards: { file: string }[] };
    const recs: PageRecord[] = [];
    for (const s of man.shards) recs.push(...(await (await fetch(`${base}index/${s.file}`)).json() as PageRecord[]));
    return prepare(recs.map(pageToRecord));
  })());
}

/** The country codes of the loaded index, for parseQuery. */
export const countriesNow = (index: Index) => countriesOf(index);
