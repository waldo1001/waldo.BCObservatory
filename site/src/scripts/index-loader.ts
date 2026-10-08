/**
 * The site's one copy of the search index (D86 4.6). The manifests (index-manifest.json, symbols-manifest.json) are
 * fetched once per document with `cache: "no-cache"` (revalidated by ETag, a few hundred bytes); the shards they list
 * carry their content hash in the name, so each is fetched once and kept in Cache Storage ("bcobs-index-v1") until a
 * manifest stops listing it. Shards load by kind, when a query asks: hubs and media first, objects next, the symbols
 * of a kind last. The search page, the live search and the palette share the one prepared index.
 *
 * A 404 on a hashed shard (a deploy between the manifest and the shard) refetches the manifest once. Without Cache
 * Storage (some private windows) it falls back to plain fetch and the browser's HTTP cache.
 */
import {
  KIND_OF, countriesOf, pageToRecord, prepare, symbolRecords, type Index, type PageRecord, type ParsedQuery, type SearchRecord, type SymbolShard,
} from "@bc-observatory/search";

export type PageKind = "hubs" | "media" | "objects";
export const CACHE = "bcobs-index-v1";
interface Shard { file: string; sha256?: string; kind?: string; count?: number }
interface PagesManifest { shards: Shard[] }
interface SymbolsManifest { major: string; kinds: Partial<Record<SymbolShard, { file?: string; files?: string[]; count: number }>> }
export interface LoaderDeps { fetch: (url: string, init?: RequestInit) => Promise<Response>; caches?: Pick<CacheStorage, "open"> | null }

class HttpError extends Error { constructor(public status: number, url: string) { super(`HTTP ${status} for ${url}`); } }

/**
 * A JSON file: a manifest revalidated every time, a hashed shard from Cache Storage when stored, else fetched and
 * stored. Exported for the unit test.
 */
export async function getJson<T>(deps: LoaderDeps, url: string, hashed: boolean): Promise<T> {
  if (!hashed) {
    const res = await deps.fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new HttpError(res.status, url);
    return res.json() as Promise<T>;
  }
  let cache: Cache | null = null;
  try { cache = deps.caches ? await deps.caches.open(CACHE) : null; } catch { cache = null; }
  const hit = cache ? await cache.match(url).catch(() => undefined) : undefined;
  if (hit) return hit.json() as Promise<T>;
  const res = await deps.fetch(url);
  if (!res.ok) throw new HttpError(res.status, url);
  if (cache) await cache.put(url, res.clone()).catch(() => undefined);
  return res.json() as Promise<T>;
}

/** Cached shards no manifest lists any more are deleted; `prefix` limits the sweep to one family (pages-, symbols-). */
export async function prune(deps: LoaderDeps, base: string, prefix: string, keep: Set<string>): Promise<number> {
  if (!deps.caches) return 0;
  let n = 0;
  try {
    const cache = await deps.caches.open(CACHE);
    for (const req of await cache.keys()) {
      const name = req.url.slice(req.url.lastIndexOf("/") + 1);
      if (req.url.includes(`${base}index/`) && name.startsWith(prefix) && !keep.has(name)) { await cache.delete(req); n++; }
    }
  } catch { /* quota, private window: the HTTP cache does what it can */ }
  return n;
}

/** The symbol shards a query needs (pure): field: -> fields, event: or an event-shaped word -> events, proc: -> procs, value: -> values, else all. */
export function kindsFor(q: ParsedQuery): SymbolShard[] {
  if (q.kind === "field") return ["fields"];
  if (q.kind === "event") return ["events"];
  if (q.kind === "proc") return ["procs"];
  if (q.kind === "value") return ["values"];
  if (q.terms.some((t) => /^on[a-z]/.test(t.text))) return ["events"];
  return ["fields", "events", "procs", "values"];
}

/** A loader over one base: the manifests once, each shard once, appended to one index in the order they arrive. */
export function createLoader(deps: LoaderDeps, base: string) {
  let index: Index | null = null;
  let manifest: Promise<PagesManifest> | null = null, symbols: Promise<SymbolsManifest | null> | null = null;
  const kinds = new Map<string, Promise<void>>();
  const byPath = new Map<string, SearchRecord>();
  let chain: Promise<unknown> = Promise.resolve();
  /** Appends in order: prepare() is not reentrant. */
  const append = (recs: () => SearchRecord[]) => (chain = chain.then(() => { const r = recs(); index = prepare(r, index ?? undefined); }));
  const pagesManifest = (fresh = false) => (fresh || !manifest ? (manifest = getJson<PagesManifest>(deps, `${base}index/index-manifest.json`, false)) : manifest);
  const symbolsManifest = () => (symbols ??= getJson<SymbolsManifest>(deps, `${base}index/symbols-manifest.json`, false).catch(() => null));

  async function loadKind(kind: PageKind): Promise<void> {
    for (let attempt = 0; ; attempt++) {
      const man = await pagesManifest(attempt > 0);
      // records of before D86 have no kind: every shard is then one kind, loaded with the objects
      const mine = man.shards.filter((s) => (s.kind ?? "objects") === kind);
      try {
        const parts = await Promise.all(mine.map((s) => getJson<PageRecord[]>(deps, `${base}index/${s.file}`, !!s.kind)));
        await append(() => parts.flat().map((p) => { const r = pageToRecord(p); byPath.set(r.id, r); return r; }));
        void prune(deps, base, "pages-", new Set(man.shards.map((s) => s.file)));
        return;
      } catch (e) {
        if (attempt === 0 && e instanceof HttpError && e.status === 404) continue; // a deploy race: the manifest once more
        throw e;
      }
    }
  }
  async function loadPages(want: PageKind[]): Promise<Index> {
    await Promise.all(want.map((k) => { let p = kinds.get(k); if (!p) { p = loadKind(k); kinds.set(k, p); p.catch(() => kinds.delete(k)); } return p; }));
    await chain;
    return index ?? prepare([]);
  }
  async function loadSymbols(want: SymbolShard[]): Promise<Index> {
    await loadPages(["objects"]); // a symbol hangs under its object's record
    const man = await symbolsManifest();
    if (man) {
      await Promise.all(want.map((k) => {
        const key = `sym:${k}`, entry = man.kinds[k];
        if (!entry) return Promise.resolve();
        let p = kinds.get(key);
        if (!p) {
          p = (async () => {
            const files = entry.files ?? (entry.file ? [entry.file] : []);
            const docs = await Promise.all(files.map((f) => getJson<{ rows: unknown[][] }>(deps, `${base}index/${f}`, true)));
            await append(() => docs.flatMap((d) => symbolRecords(KIND_OF[k], d.rows, (pk) => byPath.get(`objects/${pk}`))));
            const all = new Set(Object.values(man.kinds).flatMap((v) => v?.files ?? (v?.file ? [v.file] : [])));
            void prune(deps, base, "symbols-", all);
          })();
          kinds.set(key, p);
          p.catch(() => kinds.delete(key));
        }
        return p;
      }));
    }
    await chain;
    return index ?? prepare([]);
  }
  return {
    loadPages, loadSymbols,
    /** Whether a kind (a page kind, or "sym:fields" and the like) is in the index already. */
    has: (kind: string) => kinds.has(kind),
    symbolsAvailable: async () => !!(await symbolsManifest()),
  };
}

const loaders = new Map<string, ReturnType<typeof createLoader>>();
const loaderOf = (base: string) => {
  let l = loaders.get(base);
  if (!l) { l = createLoader({ fetch: (u, i) => fetch(u, i), caches: typeof caches === "undefined" ? null : caches }, base); loaders.set(base, l); }
  return l;
};
/** Page shards of the given kinds, prepared into the one shared index. */
export const loadPages = (base: string, kinds: PageKind[]): Promise<Index> => loaderOf(base).loadPages(kinds);
/** Symbol shards of the given kinds (after the objects they hang under). */
export const loadSymbols = (base: string, kinds: SymbolShard[]): Promise<Index> => loaderOf(base).loadSymbols(kinds);
/** Whether a kind is loaded or loading. */
export const hasKind = (base: string, kind: string) => loaderOf(base).has(kind);

/** The country codes of the loaded index, for parseQuery. */
export const countriesNow = (index: Index) => countriesOf(index);
