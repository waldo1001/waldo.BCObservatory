/**
 * The MCP server's shard cache: what the sweep deletes and what it never touches (packages/mcp/src/cache.ts), and the
 * server itself against a site on localhost: the sweep runs after a complete load only.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import * as fs from "node:fs";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, statSync, symlinkSync, utimesSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { createServer } from "node:http";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { ROOT } from "../../pipeline/lib/paths.js";
import { GRACE_MS, cachePath, sweepCache, writeCached, type CacheFs } from "../../packages/mcp/src/cache.js";

const DAY = 86_400_000;
const NOW = Date.parse("2026-11-20T12:00:00Z");
const tmp = (name: string) => mkdtempSync(join(tmpdir(), `bcobs-cache-${name}-`));
/** A file whose mtime is `ageMs` before `now`. */
function put(path: string, ageMs: number, text = "[]", now = NOW): string {
  writeFileSync(path, text);
  utimesSync(path, new Date(now - ageMs), new Date(now - ageMs));
  return path;
}
const hex = (c: string) => c.repeat(64);

test("the grace is two days: a day of margin over the server's daily reload", () => {
  assert.equal(GRACE_MS, 2 * DAY);
  assert.match(readFileSync(join(ROOT, "packages/mcp/src/server.ts"), "utf8"), /if \(index && Date\.now\(\) - loadedAt < DAY\) return;/);
});

test("sweep: a stale file past the grace goes; a named file and a young one stay", () => {
  const dir = tmp("sweep");
  const named = put(join(dir, `${hex("a")}.json`), 30 * DAY);
  const multi = put(join(dir, `${hex("b")}-symbols-fields-1.json.json`), 30 * DAY); // a kind with several files: <sha>-<file>.json
  const stale = put(join(dir, `${hex("c")}.json`), GRACE_MS + 60_000);
  const young = put(join(dir, `${hex("d")}.json`), GRACE_MS - 60_000);
  const r = sweepCache(dir, new Set([`${hex("a")}.json`, `${hex("b")}-symbols-fields-1.json.json`]), true, NOW);
  assert.equal(r.removed, 1);
  assert.deepEqual(readdirSync(dir).sort(), [named, multi, young].map((p) => p.slice(dir.length + 1)).sort());
  assert.ok(!existsSync(stale));
  // a named file is marked as in use now, so another session's sweep leaves it alone for the grace after this load
  assert.equal(statSync(named).mtimeMs, NOW);
  assert.equal(statSync(multi).mtimeMs, NOW);
  assert.equal(statSync(young).mtimeMs, NOW - (GRACE_MS - 60_000), "a file no manifest names is never marked");
});

test("sweep: a file dropped by today's manifest survives a day after the last load that named it, however old its download", () => {
  const dir = tmp("handover"), name = `${hex("a")}.json`;
  put(join(dir, name), 20 * DAY); // downloaded 20 days ago, unchanged since
  sweepCache(dir, new Set([name]), true, NOW); // session A loads yesterday's manifest
  sweepCache(dir, new Set(), true, NOW + 60_000); // session B loads the new manifest a minute later
  assert.ok(existsSync(join(dir, name)), "A may read it for a day yet");
  sweepCache(dir, new Set(), true, NOW + DAY + 60_000);
  assert.ok(existsSync(join(dir, name)), "A's manifest is at most a day old: still inside the grace");
  sweepCache(dir, new Set(), true, NOW + GRACE_MS + 60_000);
  assert.ok(!existsSync(join(dir, name)));
});

test("sweep: without remove (a load that was not complete) nothing is deleted, and named files are still marked", () => {
  const dir = tmp("partial");
  const named = put(join(dir, `${hex("a")}.json`), 30 * DAY), stale = put(join(dir, `${hex("c")}.json`), 30 * DAY);
  assert.equal(sweepCache(dir, new Set([`${hex("a")}.json`]), false, NOW).removed, 0);
  assert.ok(existsSync(stale));
  assert.equal(statSync(named).mtimeMs, NOW);
});

test("sweep: a locked file (EBUSY, EPERM on Windows) is skipped and the rest still goes; nothing throws", () => {
  const dir = tmp("locked");
  const locked = put(join(dir, `${hex("c")}.json`), 30 * DAY), free = put(join(dir, `${hex("d")}.json`), 30 * DAY);
  const pinned = put(join(dir, `${hex("a")}.json`), 30 * DAY);
  const err = (code: string) => Object.assign(new Error(`${code}: resource busy or locked`), { code });
  const io: CacheFs = {
    ...fs,
    unlinkSync: ((p: fs.PathLike) => { if (String(p) === locked) throw err("EBUSY"); fs.unlinkSync(p); }) as typeof fs.unlinkSync,
    utimesSync: (() => { throw err("EPERM"); }) as typeof fs.utimesSync,
  };
  const r = sweepCache(dir, new Set([`${hex("a")}.json`]), true, NOW, io);
  assert.equal(r.removed, 1);
  assert.ok(existsSync(locked) && existsSync(pinned) && !existsSync(free));
  // a folder that is not there, or cannot be listed
  assert.deepEqual(sweepCache(join(dir, "nope"), new Set(), true, NOW), { removed: 0 });
  assert.deepEqual(sweepCache(dir, new Set(), true, NOW, { ...fs, readdirSync: (() => { throw err("EACCES"); }) as unknown as typeof fs.readdirSync }), { removed: 0 });
});

test("sweep: only the cache's own files directly in its folder: never install-id, models/, another site's folder, a folder or a link", () => {
  const home = tmp("scope"), dir = join(home, "01e86ec9d208"), other = join(home, "ffffffffffff"), models = join(home, "models", "potion-base-8M@bf8b05665");
  for (const d of [dir, other, models, join(dir, "sub.json")]) mkdirSync(d, { recursive: true });
  const outside = put(join(home, "outside.json"), 30 * DAY);
  const stays = [
    put(join(home, "install-id"), 30 * DAY, "id\n"), put(join(models, "config.json"), 30 * DAY), put(join(models, "tokenizer.json"), 30 * DAY),
    put(join(other, `${hex("c")}.json`), 30 * DAY), put(join(dir, "sub.json", `${hex("c")}.json`), 30 * DAY),
    put(join(dir, "install-id"), 30 * DAY), put(join(dir, "notes.txt"), 30 * DAY), put(join(dir, "model.safetensors"), 30 * DAY), put(join(dir, "x.json.bak"), 30 * DAY),
    outside,
  ];
  let linked = true;
  try { symlinkSync(outside, join(dir, "link.json")); } catch { linked = false; /* Windows without the privilege */ }
  const gone = [put(join(dir, `${hex("c")}.json`), 30 * DAY), put(join(dir, `${hex("d")}.json.4242.0a1b2c3d.tmp`), 30 * DAY)];
  const fresh = put(join(dir, `${hex("e")}.json.4243.0a1b2c3d.tmp`), 60_000); // another session is writing it right now
  assert.equal(sweepCache(dir, new Set(), true, NOW).removed, 2);
  for (const p of [...stays, fresh]) assert.ok(existsSync(p), p);
  for (const p of gone) assert.ok(!existsSync(p), p);
  if (linked) assert.ok(fs.lstatSync(join(dir, "link.json")).isSymbolicLink());
});

test("writeCached: the whole file or no file, no temp file left, and a failure never throws", () => {
  const dir = tmp("write"), p = join(dir, `${hex("a")}.json`);
  writeCached(p, "[1,2,3]");
  assert.equal(readFileSync(p, "utf8"), "[1,2,3]");
  writeCached(p, "[4]"); // a second session downloaded the same shard
  assert.equal(readFileSync(p, "utf8"), "[4]");
  assert.deepEqual(readdirSync(dir), [`${hex("a")}.json`]);
  // the rename fails (the target is open elsewhere on Windows): the old file stays whole and the temp file goes
  const io: CacheFs = { ...fs, renameSync: (() => { throw Object.assign(new Error("EPERM"), { code: "EPERM" }); }) as typeof fs.renameSync };
  writeCached(p, "[5", io);
  assert.equal(readFileSync(p, "utf8"), "[4]");
  assert.deepEqual(readdirSync(dir), [`${hex("a")}.json`]);
  // no folder to write in
  writeCached(join(dir, "nope", "x.json"), "[]");
  assert.ok(!existsSync(join(dir, "nope")));
});

test("cachePath: a key from the manifest that is not a plain file name gets no cache file", () => {
  const dir = join(tmpdir(), "bcobs-x");
  assert.equal(cachePath(dir, hex("a")), join(dir, `${hex("a")}.json`));
  assert.equal(cachePath(dir, `${hex("a")}-symbols-fields-1.json`), join(dir, `${hex("a")}-symbols-fields-1.json.json`));
  for (const key of ["../../../x", "..\\x", "a/b", "/etc/x", "C:\\x", "", "a b", "a\0"]) assert.equal(cachePath(dir, key), null, JSON.stringify(key));
});

// ---------------------------------------------------------------------------------------------- the server against a site

const sha = (t: string) => createHash("sha256").update(t).digest("hex");
/** A site on localhost with one page shard, a Learn shard, Learn facts and a symbols index; `fail` paths answer 500. */
async function site() {
  const pagesText = `${JSON.stringify([{ path: "objects/table/18", type: "object", title: 'Table 18 "Customer"', summary: "Customer master data.", tier: "official", object_type: "table", object_id: 18, name: "Customer" }])}\n`;
  const learnText = `${JSON.stringify({ schema: "bcobs-learn@1", base: "https://learn.microsoft.com/", hubs: [], rows: [["dynamics365/business-central/sales-how-register-new-customers", "Register new customers", "How to register a customer.", "2026-10-01", -1, null, []]] })}\n`;
  const factsText = `${JSON.stringify({ schema: "bcobs-learn-facts@1", facts: {} })}\n`;
  const eventsText = `${JSON.stringify({ schema: "bcobs-symbols@1", rows: [["table/18", "OnAfterInsertCustomer", "integration", 0, null, null]] })}\n`;
  const names = { pages: `pages-hubs-${sha(pagesText).slice(0, 12)}.json`, learn: `learn-${sha(learnText).slice(0, 12)}.json`, facts: `learn-facts-${sha(factsText).slice(0, 12)}.json`, events: `symbols-events-${sha(eventsText).slice(0, 12)}.json` };
  const files = new Map<string, string>([
    ["/index/index-manifest.json", JSON.stringify({ schema: "bcobs-index@1", pages: 1, shards: [{ file: names.pages, count: 1, sha256: sha(pagesText), kind: "hubs" }], learn: { file: names.learn, count: 1, sha256: sha(learnText) }, learn_facts: { file: names.facts, count: 0, sha256: sha(factsText) } })],
    ["/index/symbols-manifest.json", JSON.stringify({ schema: "bcobs-symbols@1", major: "29", kinds: { events: { file: names.events, count: 1, sha256: sha(eventsText) } } })],
    [`/index/${names.pages}`, pagesText], [`/index/${names.learn}`, learnText], [`/index/${names.facts}`, factsText], [`/index/${names.events}`, eventsText],
  ]);
  const fail = new Set<string>(), gets: string[] = [];
  const server = createServer((req, res) => {
    const url = req.url ?? "";
    if (req.method === "GET") gets.push(url);
    const body = files.get(url);
    if (fail.has(url)) { res.writeHead(500).end("down"); return; }
    if (body === undefined) { res.writeHead(404).end("not found"); return; }
    res.writeHead(200, { "content-type": "application/json", "last-modified": new Date(NOW).toUTCString() }).end(req.method === "HEAD" ? undefined : body);
  });
  await new Promise<void>((done) => server.listen(0, "127.0.0.1", done));
  const url = `http://127.0.0.1:${(server.address() as AddressInfo).port}/`;
  const keys = { pages: `${sha(pagesText)}.json`, learn: `${sha(learnText)}.json`, facts: `${sha(factsText)}.json`, events: `${sha(eventsText)}.json` };
  return { url, names, keys, fail, gets, files, close: () => new Promise<void>((done) => { server.closeAllConnections(); server.close(() => done()); }) };
}
/** The cache folder of a site under a cache home, as the server names it. */
const cacheOf = (home: string, url: string) => join(home, "bc-observatory", createHash("sha256").update(url).digest("hex").slice(0, 12));
async function connect(url: string, home: string) {
  const env = { ...process.env, BC_OBSERVATORY_SITE: url, XDG_CACHE_HOME: home, BC_OBSERVATORY_EMBEDDINGS: "0", BC_OBSERVATORY_TELEMETRY: "0" } as Record<string, string>;
  delete env.BC_OBSERVATORY_LOCAL;
  const transport = new StdioClientTransport({ command: process.execPath, args: ["--import", "tsx", join(ROOT, "packages/mcp/src/server.ts")], env, cwd: ROOT });
  const client = new Client({ name: "cache", version: "0" });
  await client.connect(transport);
  const call = async (name: string, args: Record<string, unknown>) => ((await client.callTool({ name, arguments: args })).content as { text: string }[])[0].text;
  return { client, call };
}
/** A cache home as a user's machine has it: install-id, the model, another site's folder, and in this site's folder old and young leftovers. */
function plant(home: string, url: string, keys: { facts: string }) {
  const dir = cacheOf(home, url), root = join(home, "bc-observatory"), other = join(root, "ffffffffffff"), models = join(root, "models", "potion-base-8M@bf8b05665");
  for (const d of [dir, other, models]) mkdirSync(d, { recursive: true });
  const now = Date.now();
  return {
    dir,
    stale: put(join(dir, `${hex("c")}.json`), 30 * DAY, "[]", now),
    young: put(join(dir, `${hex("d")}.json`), DAY, "[]", now),
    // the Learn facts of the manifest, downloaded long ago and not read by a search: named, so it stays
    facts: put(join(dir, keys.facts), 30 * DAY, JSON.stringify({ facts: {} }), now),
    untouched: [put(join(root, "install-id"), 30 * DAY, "id\n", now), put(join(models, "model.safetensors"), 30 * DAY, "m", now), put(join(other, `${hex("c")}.json`), 30 * DAY, "[]", now)],
  };
}

test("server: a complete load sweeps the cache, keeps every file a manifest names, and the next session downloads nothing", async () => {
  const s = await site(), home = tmp("home"), planted = plant(home, s.url, s.keys);
  try {
    const a = await connect(s.url, home);
    try { assert.match(await a.call("bc_search", { query: "customer" }), /Table 18 "Customer"/); } finally { await a.client.close(); }
    assert.deepEqual(readdirSync(planted.dir).sort(), [s.keys.pages, s.keys.learn, s.keys.facts, s.keys.events, `${hex("d")}.json`].sort());
    assert.ok(!existsSync(planted.stale));
    assert.ok(Date.now() - statSync(planted.facts).mtimeMs < 60_000, "the facts file is marked as in use");
    for (const p of planted.untouched) { assert.ok(existsSync(p), p); assert.ok(Date.now() - statSync(p).mtimeMs > 29 * DAY, p); }
    assert.deepEqual(s.gets.filter((g) => !g.endsWith("-manifest.json")).sort(), [s.names.pages, s.names.learn, s.names.events].map((n) => `/index/${n}`).sort());

    s.gets.length = 0;
    const b = await connect(s.url, home);
    try { assert.match(await b.call("bc_search", { query: "customer" }), /Table 18 "Customer"/); } finally { await b.client.close(); }
    assert.deepEqual(s.gets.filter((g) => !g.endsWith("-manifest.json")), [], "every shard came from the cache");
  } finally { await s.close(); }
});

test("server: a load that lost its Learn shard or its symbols manifest still answers and deletes nothing", async () => {
  for (const down of ["learn", "symbols-manifest"] as const) {
    const s = await site(), home = tmp("partial-home"), planted = plant(home, s.url, s.keys);
    s.fail.add(down === "learn" ? `/index/${s.names.learn}` : "/index/symbols-manifest.json");
    try {
      const a = await connect(s.url, home);
      try { assert.match(await a.call("bc_search", { query: "customer" }), /Table 18 "Customer"/, down); } finally { await a.client.close(); }
      assert.ok(existsSync(planted.stale) && existsSync(planted.young) && existsSync(planted.facts), down);
      assert.ok(existsSync(join(planted.dir, s.keys.pages)), down);
    } finally { await s.close(); }
  }
});

test("server: a site without a symbols index is whole without it, so its cache is swept too", async () => {
  const s = await site(), home = tmp("nosymbols-home"), planted = plant(home, s.url, s.keys);
  s.files.delete("/index/symbols-manifest.json"); // 404
  try {
    const a = await connect(s.url, home);
    try { assert.match(await a.call("bc_search", { query: "customer" }), /Table 18 "Customer"/); } finally { await a.client.close(); }
    assert.ok(!existsSync(planted.stale) && existsSync(planted.young) && existsSync(planted.facts));
  } finally { await s.close(); }
});

test("server: two sessions, two manifests: the newer one's sweep leaves the older one's Learn facts, which it has not read yet", async () => {
  const s = await site(), home = tmp("two-home"), planted = plant(home, s.url, s.keys);
  try {
    const older = await connect(s.url, home);
    try {
      assert.match(await older.call("bc_search", { query: "customer" }), /Table 18 "Customer"/); // loads the manifest, reads no facts
      // the nightly deploys: new Learn facts under a new name, the old file gone from the site
      const manifest = JSON.parse(s.files.get("/index/index-manifest.json")!), next = `${JSON.stringify({ schema: "bcobs-learn-facts@1", facts: { x: [["a", "b"]] } })}\n`;
      s.files.delete(`/index/${s.names.facts}`);
      s.files.set(`/index/learn-facts-${sha(next).slice(0, 12)}.json`, next);
      manifest.learn_facts = { file: `learn-facts-${sha(next).slice(0, 12)}.json`, count: 1, sha256: sha(next) };
      s.files.set("/index/index-manifest.json", JSON.stringify(manifest));
      put(join(planted.dir, `${hex("e")}.json`), 30 * DAY, "[]", Date.now());
      const newer = await connect(s.url, home);
      try { assert.match(await newer.call("bc_search", { query: "customer" }), /Table 18 "Customer"/); } finally { await newer.client.close(); }
      assert.ok(!existsSync(join(planted.dir, `${hex("e")}.json`)), "the newer session did sweep");
      assert.ok(existsSync(planted.facts), "downloaded 30 days ago, dropped by the new manifest, named by the older session a moment ago");
      s.gets.length = 0;
      await older.call("bc_brief", { query: "customer" });
      assert.ok(!s.gets.includes(`/index/${s.names.facts}`), "the older session reads its facts from the cache, not from a name the site no longer has");
    } finally { await older.client.close(); }
  } finally { await s.close(); }
});

test("server: a load that fails (a page shard, a symbol shard) deletes nothing and leaves no half file", async () => {
  for (const down of ["pages", "events"] as const) {
    const s = await site(), home = tmp("failed-home"), planted = plant(home, s.url, s.keys);
    s.fail.add(`/index/${s.names[down]}`);
    try {
      const a = await connect(s.url, home);
      try { assert.doesNotMatch(await a.call("bc_search", { query: "customer" }), /Table 18 "Customer"/, down); } finally { await a.client.close(); }
      assert.ok(existsSync(planted.stale) && existsSync(planted.young) && existsSync(planted.facts), down);
      assert.ok(!existsSync(join(planted.dir, s.keys[down])), down);
      assert.ok(readdirSync(planted.dir).every((f) => f.endsWith(".json")), "no temp file");
    } finally { await s.close(); }
  }
});
