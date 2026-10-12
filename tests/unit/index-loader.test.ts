import { test } from "node:test";
import assert from "node:assert/strict";
import { parseQuery } from "@bc-observatory/search";
import { CACHE, createLoader, getJson, kindsFor, mediaRecords, prune, type LoaderDeps } from "../../site/src/scripts/index-loader.js";

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

test("the Learn articles load only when asked, from the manifest's `learn` entry, into the one index (D94)", async () => {
  const c = fakeCaches();
  c.store.set(`${B}index/learn-old000000000.json`, "{}");
  const learn = { schema: "bcobs-learn@1", base: "https://learn.microsoft.com/dynamics365/business-central/", hubs: [["topics/dev-itpro/configure", "Development › Configure", "administration"]],
    rows: [["dev-itpro/developer/devenv-security-settings-and-ip-protection", "Resource exposure policy setting", "IP protection.", "2024-01-03", 0, null, ["includeSourceInSymbolFile"]]] };
  const files: Record<string, unknown> = {
    [`${B}index/index-manifest.json`]: { shards: [{ file: "pages-hubs-111111111111.json", kind: "hubs" }], learn: { file: "learn-555555555555.json", count: 1 } },
    [`${B}index/pages-hubs-111111111111.json`]: [rec("topics/dev-itpro/configure", "topic", "Configure")],
    [`${B}index/learn-555555555555.json`]: learn,
  };
  const site = fakeSite(files);
  const loader = createLoader({ fetch: site.fetch, caches: c.caches }, B);
  await loader.loadPages(["hubs", "media", "objects"]);
  assert.ok(!site.seen.some((u) => u.includes("learn-")), "hubs, media and objects never load the Learn shard");
  assert.equal(loader.has("learn"), false);
  const idx = await loader.loadPages(["learn"]);
  assert.deepEqual(idx.records.map((r) => [r.id, r.type]), [["topics/dev-itpro/configure", "topic"], ["https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-security-settings-and-ip-protection", "learn"]]);
  assert.equal(idx.records[1].page?.hub, "topics/dev-itpro/configure");
  assert.ok(c.store.has(`${B}index/learn-555555555555.json`) && !c.store.has(`${B}index/learn-old000000000.json`), "kept in Cache Storage; an older Learn shard pruned");
  await loader.loadPages(["learn"]);
  assert.equal(site.seen.filter((u) => u.includes("learn-")).length, 1, "once");
  // a manifest without `learn` (before D94): nothing to load, no error
  const old = createLoader({ fetch: fakeSite({ [`${B}index/index-manifest.json`]: { shards: [] } }).fetch, caches: null }, B);
  assert.equal((await old.loadPages(["learn"])).records.length, 0);
});

test("mediaRecords: the list pages' records, the manifest revalidated, the media shard once into Cache Storage, a 404 refetches the manifest once (D91 4.6)", async () => {
  const c = fakeCaches();
  const files: Record<string, unknown> = {
    [`${B}index/index-manifest.json`]: { shards: [{ file: "pages-hubs-111111111111.json", kind: "hubs" }, { file: "pages-media-222222222222.json", kind: "media" }, { file: "pages-objects-1-333333333333.json", kind: "objects" }] },
    [`${B}index/pages-hubs-111111111111.json`]: [rec("topics/a", "topic", "A")],
    [`${B}index/pages-media-222222222222.json`]: [rec("videos/v", "video", "V"), rec("changes/bcapps/1", "change", "#1 C")],
    [`${B}index/pages-objects-1-333333333333.json`]: [rec("objects/table/18", "object", 'Table 18 "Customer"')],
  };
  const site = fakeSite(files);
  const deps: LoaderDeps = { fetch: site.fetch, caches: c.caches };
  assert.deepEqual((await mediaRecords(deps, B)).map((r) => r.path), ["videos/v", "changes/bcapps/1"]);
  assert.deepEqual(site.seen, [`${B}index/index-manifest.json (no-cache)`, `${B}index/pages-media-222222222222.json`], "the manifest and the media shard only");
  site.seen.length = 0;
  assert.equal((await mediaRecords(deps, B)).length, 2);
  assert.deepEqual(site.seen, [`${B}index/index-manifest.json (no-cache)`], "the shard from Cache Storage");
  // a deploy race: the manifest names a shard the site no longer serves; the refetched manifest names the new one
  const race = fakeSite({ [`${B}index/pages-media-444444444444.json`]: [rec("posts/s/1", "post", "P")] });
  let calls = 0;
  const raceFetch = async (url: string, init?: RequestInit) => {
    if (url.endsWith("index-manifest.json")) {
      race.seen.push(`${url} (${init?.cache})`);
      return new Response(JSON.stringify({ shards: [{ file: calls++ === 0 ? "pages-media-222222222222.json" : "pages-media-444444444444.json", kind: "media" }] }));
    }
    return race.fetch(url, init);
  };
  assert.deepEqual((await mediaRecords({ fetch: raceFetch, caches: null }, B)).map((r) => r.path), ["posts/s/1"]);
  assert.equal(race.seen.filter((u) => u.includes("index-manifest")).length, 2, "the manifest twice");
  assert.equal(race.seen.filter((u) => u.includes("pages-media-444444444444")).length, 1, "the new shard once");
  // a manifest without a media shard
  const bare = fakeSite({ [`${B}index/index-manifest.json`]: { shards: [{ file: "pages-hubs-111111111111.json", kind: "hubs" }] } });
  assert.deepEqual(await mediaRecords({ fetch: bare.fetch, caches: null }, B), []);
});
