import { test } from "node:test";
import assert from "node:assert/strict";
import { parseQuery } from "@bc-observatory/search";
import { CACHE, createLoader, getJson, kindsFor, prune, type LoaderDeps } from "../../site/src/scripts/index-loader.js";

const p = (raw: string) => parseQuery(raw, { countries: ["be"] });

test("kindsFor: the symbol shards a query needs (D86 4.6)", () => {
  assert.deepEqual(kindsFor(p("field:Posting Date")), ["fields"]);
  assert.deepEqual(kindsFor(p("event: OnAfterPost")), ["events"]);
  assert.deepEqual(kindsFor(p("OnAfterPostSalesDoc")), ["events"], "an event-shaped word");
  assert.deepEqual(kindsFor(p("proc: CopyToTempLines")), ["procs"]);
  assert.deepEqual(kindsFor(p("value: Order")), ["values"]);
  assert.deepEqual(kindsFor(p("Posting Date")), ["fields", "events", "procs", "values"]);
});

/** A Cache Storage stand-in: one cache of url -> body, with the calls it saw. */
function fakeCaches() {
  const store = new Map<string, string>(), log: string[] = [];
  const cache = {
    match: async (url: string) => { log.push(`match ${url}`); return store.has(url) ? new Response(store.get(url)) : undefined; },
    put: async (url: string, res: Response) => { log.push(`put ${url}`); store.set(url, await res.text()); },
    keys: async () => [...store.keys()].map((u) => new Request(u)),
    delete: async (req: Request) => { log.push(`delete ${req.url}`); return store.delete(req.url); },
  };
  return { store, log, caches: { open: async (name: string) => { assert.equal(name, CACHE); return cache as unknown as Cache; } } };
}
/** A site: url -> body (or a status), with the requests it answered. */
function fakeSite(files: Record<string, unknown>) {
  const seen: string[] = [];
  const fetch = async (url: string, init?: RequestInit) => {
    seen.push(`${url}${init?.cache ? ` (${init.cache})` : ""}`);
    const body = files[url];
    if (body === undefined) return new Response("not found", { status: 404 });
    return new Response(typeof body === "string" ? body : JSON.stringify(body));
  };
  return { fetch, seen };
}

const B = "https://x.test/b/";
const rec = (path: string, type: string, title: string, over: Record<string, unknown> = {}) => ({ path, type, title, summary: "", tier: "official", ...over });

test("getJson: manifests revalidate, hashed shards come from Cache Storage when stored, else are fetched and stored", async () => {
  const c = fakeCaches(), site = fakeSite({ [`${B}index/index-manifest.json`]: { shards: [] }, [`${B}index/pages-hubs-aaaaaaaaaaaa.json`]: [rec("topics/a", "topic", "A")] });
  const deps: LoaderDeps = { fetch: site.fetch, caches: c.caches };
  await getJson(deps, `${B}index/index-manifest.json`, false);
  assert.deepEqual(site.seen, [`${B}index/index-manifest.json (no-cache)`]);
  const first = await getJson<unknown[]>(deps, `${B}index/pages-hubs-aaaaaaaaaaaa.json`, true);
  const second = await getJson<unknown[]>(deps, `${B}index/pages-hubs-aaaaaaaaaaaa.json`, true);
  assert.deepEqual(first, second);
  assert.equal(site.seen.filter((u) => u.includes("pages-hubs")).length, 1, "a hashed shard is fetched once, then served from the cache");
  assert.ok(c.store.has(`${B}index/pages-hubs-aaaaaaaaaaaa.json`));
  // without Cache Storage: plain fetch every time
  const plain = fakeSite({ [`${B}index/pages-hubs-aaaaaaaaaaaa.json`]: [] });
  await getJson({ fetch: plain.fetch, caches: null }, `${B}index/pages-hubs-aaaaaaaaaaaa.json`, true);
  await getJson({ fetch: plain.fetch, caches: null }, `${B}index/pages-hubs-aaaaaaaaaaaa.json`, true);
  assert.equal(plain.seen.length, 2);
});

test("prune: cached shards the manifest no longer lists go, other families stay", async () => {
  const c = fakeCaches();
  for (const f of ["pages-hubs-old000000000.json", "pages-hubs-new000000000.json", "symbols-fields-aaaaaaaaaaaa.json"]) c.store.set(`${B}index/${f}`, "[]");
  const n = await prune({ fetch: fakeSite({}).fetch, caches: c.caches }, B, "pages-", new Set(["pages-hubs-new000000000.json"]));
  assert.equal(n, 1);
  assert.deepEqual([...c.store.keys()].sort(), [`${B}index/pages-hubs-new000000000.json`, `${B}index/symbols-fields-aaaaaaaaaaaa.json`]);
});

test("the loader: kinds on demand, each shard once, a 404 refetches the manifest once, old caches pruned", async () => {
  const c = fakeCaches();
  c.store.set(`${B}index/pages-hubs-stale0000000.json`, "[]");
  const files: Record<string, unknown> = {
    [`${B}index/index-manifest.json`]: { shards: [{ file: "pages-hubs-111111111111.json", kind: "hubs" }, { file: "pages-media-222222222222.json", kind: "media" }, { file: "pages-objects-1-333333333333.json", kind: "objects" }] },
    [`${B}index/pages-hubs-111111111111.json`]: [rec("localizations/be", "localization", "Belgium (BE)", { country: "BE" })],
    [`${B}index/pages-media-222222222222.json`]: [rec("videos/v", "video", "Posting video")],
    // a deploy race: the manifest names objects-1-333..., the site already serves objects-1-444...
    [`${B}index/pages-objects-1-444444444444.json`]: [rec("objects/table/18", "object", 'Table 18 "Customer"', { object_type: "table", object_id: 18, name: "Customer", app: "Base Application" })],
  };
  const site = fakeSite(files);
  const loader = createLoader({ fetch: site.fetch, caches: c.caches }, B);
  const idx = await loader.loadPages(["hubs", "media"]);
  assert.equal(idx.records.length, 2);
  assert.ok(!site.seen.some((u) => u.includes("objects")), "no objects before a query asks");
  assert.ok(!c.store.has(`${B}index/pages-hubs-stale0000000.json`), "a shard the manifest no longer lists is pruned");
  files[`${B}index/index-manifest.json`] = { shards: [{ file: "pages-hubs-111111111111.json", kind: "hubs" }, { file: "pages-media-222222222222.json", kind: "media" }, { file: "pages-objects-1-444444444444.json", kind: "objects" }] };
  const all = await loader.loadPages(["objects"]);
  assert.equal(all, idx, "one shared index, appended");
  assert.deepEqual(all.records.map((r) => r.id), ["localizations/be", "videos/v", "objects/table/18"]);
  assert.equal(site.seen.filter((u) => u.includes("index-manifest")).length, 2, "the 404 refetched the manifest once");
  await loader.loadPages(["hubs", "media", "objects"]);
  assert.equal(site.seen.filter((u) => u.includes("pages-")).length, 4, "nothing twice: hubs, media, the 404 and the new objects shard");
  // a reload: a new loader over the same cache fetches the manifest only
  const reload = fakeSite(files);
  await createLoader({ fetch: reload.fetch, caches: c.caches }, B).loadPages(["hubs", "media", "objects"]);
  assert.deepEqual(reload.seen, [`${B}index/index-manifest.json (no-cache)`]);
});

test("the loader reads a manifest of before D86 (no kinds, unhashed names) as one objects kind", async () => {
  const site = fakeSite({ [`${B}index/index-manifest.json`]: { shards: [{ file: "pages-1.json" }] }, [`${B}index/pages-1.json`]: [rec("topics/a", "topic", "A"), rec("objects/table/18", "object", 'Table 18 "Customer"', { object_type: "table", object_id: 18 })] });
  const loader = createLoader({ fetch: site.fetch, caches: null }, B);
  assert.equal((await loader.loadPages(["hubs", "media"])).records.length, 0);
  assert.equal((await loader.loadPages(["objects"])).records.length, 2);
});
