/** The preview probe (D60): framing decisions, the card fields from a page head, refresh and host inference. No network. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { ManifestItem } from "../../pipeline/lib/manifest.js";
import { deriveHosts, frameDecision, hostsPath, parseHead, previewFor, previewPath, probePost, refreshPreviews, type PostProbe } from "../../pipeline/extract/preview-probe.js";

const ORIGIN = "https://waldo1001.github.io";
const H = (h: Record<string, string> = {}) => new Headers(h);
const URL1 = "https://www.kauffmann.nl/2026/10/01/api/";

test("frameDecision: headers, CSP over X-Frame-Options, mixed content", () => {
  assert.equal(frameDecision(H(), URL1, ORIGIN), true, "no headers: framable");
  for (const xfo of ["DENY", "SAMEORIGIN", "ALLOW-FROM https://x.example"]) assert.equal(frameDecision(H({ "x-frame-options": xfo }), URL1, ORIGIN), false, xfo);
  assert.equal(frameDecision(H({ "content-security-policy": "frame-ancestors 'none'" }), URL1, ORIGIN), false);
  assert.equal(frameDecision(H({ "content-security-policy": "default-src 'self'; frame-ancestors 'self'" }), URL1, ORIGIN), false);
  assert.equal(frameDecision(H({ "content-security-policy": "frame-ancestors *" }), URL1, ORIGIN), true);
  assert.equal(frameDecision(H({ "content-security-policy": "frame-ancestors https:" }), URL1, ORIGIN), true);
  assert.equal(frameDecision(H({ "content-security-policy": "frame-ancestors 'self' https://waldo1001.github.io" }), URL1, ORIGIN), true, "our origin");
  assert.equal(frameDecision(H({ "content-security-policy": "frame-ancestors *.github.io" }), URL1, ORIGIN), true, "a github.io wildcard");
  assert.equal(frameDecision(H({ "content-security-policy": "frame-ancestors https://partner.example" }), URL1, ORIGIN), false, "another origin");
  assert.equal(frameDecision(H({ "content-security-policy": "default-src 'self'", "x-frame-options": "DENY" }), URL1, ORIGIN), false, "CSP without the directive: XFO decides");
  assert.equal(frameDecision(H({ "content-security-policy": "frame-ancestors *", "x-frame-options": "DENY" }), URL1, ORIGIN), true, "CSP wins over XFO");
  assert.equal(frameDecision(H({ "content-security-policy-report-only": "frame-ancestors 'none'" }), URL1, ORIGIN), true, "report-only ignored");
  assert.equal(frameDecision(H(), "http://insecure.example/post", ORIGIN), false, "http: mixed content");
});

test("parseHead: og image absolute and relative, dimensions, icons, oEmbed, alt truncation", () => {
  const h = parseHead(`<head><meta property="og:image" content="/img/hero.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${"a".repeat(200)}"><meta property="og:site_name" content="Kauffmann"><link rel="shortcut icon" href="/fav.png">
    <link rel="alternate" type="application/json+oembed" href="https://www.kauffmann.nl/wp-json/oembed/1.0/embed?url=x"></head>`, URL1);
  assert.deepEqual([h.image, h.image_w, h.image_h, h.site_name, h.favicon, h.image_alt?.length, h.wordpress],
    ["https://www.kauffmann.nl/img/hero.png", 1200, 630, "Kauffmann", "https://www.kauffmann.nl/fav.png", 160, true]);
  assert.match(h.oembed!, /wp-json\/oembed/);
  const bare = parseHead(`<head><title>x</title></head>`, URL1);
  assert.deepEqual([bare.image, bare.favicon, bare.oembed, bare.wordpress], [null, "https://www.kauffmann.nl/favicon.ico", null, false], "no icon: /favicon.ico");
  const abs = parseHead(`<meta property="og:image" content="https://cdn.example/a.jpg"><link rel="icon" href="https://cdn.example/i.ico"><link rel="alternate" type="application/json+oembed" href="https://public-api.wordpress.com/oembed/?url=x">`, URL1);
  assert.deepEqual([abs.image, abs.favicon, abs.oembed], ["https://cdn.example/a.jpg", "https://cdn.example/i.ico", "https://public-api.wordpress.com/oembed/?url=x"]);
  assert.equal(parseHead(`<meta property="og:image" content="http://cdn.example/a.jpg">`, URL1).image, null, "http images are not stored");
});

const fake = (status: number, html: string, headers: Record<string, string> = {}, url = URL1) => (async () => {
  const r = new Response(html, { status, headers });
  Object.defineProperty(r, "url", { value: url });
  return r;
}) as any;

test("probePost: reads the head, records the decision and a WordPress /embed/ url; failures are null", async () => {
  const now = new Date("2026-10-07T12:00:00Z");
  const html = `<html><head><meta name="generator" content="WordPress 6.6"><meta property="og:image" content="https://x.example/i.jpg"></head><body>${"secret body ".repeat(50)}</body></html>`;
  const ok = await probePost(URL1, { http: fake(200, html), now, origin: ORIGIN });
  assert.deepEqual([ok.status, ok.embeddable, ok.image, ok.frame_url], [200, true, "https://x.example/i.jpg", `${URL1}embed/`]);
  assert.ok(!JSON.stringify(ok).includes("secret body"), "nothing of the body is kept");
  const refused = await probePost(URL1, { http: fake(200, html, { "x-frame-options": "SAMEORIGIN" }), now, origin: ORIGIN });
  assert.equal(refused.embeddable, false);
  const gone = await probePost(URL1, { http: fake(403, "no"), now, origin: ORIGIN });
  assert.deepEqual([gone.status, gone.embeddable], [403, null]);
  const timeout = await probePost(URL1, { http: (async () => { throw new Error("timeout"); }) as any, now, origin: ORIGIN });
  assert.deepEqual([timeout.status, timeout.embeddable], [0, null]);
});

const item = (n: number, published: string, source = "kauffmann-nl", host = "www.kauffmann.nl"): ManifestItem => ({
  id: `blog/${source}/${n}`, pillar: "blog", source, tier: "community", title: `t${n}`, url: `https://${host}/p/${n}/`, published_at: published,
  language: "en", state: "published", stages: { published: { at: "x" } }, attempts: 0,
});
const record = (over: Partial<PostProbe>): PostProbe => ({ url: URL1, final_url: URL1, embeddable: true, frame_url: null, image: null, image_alt: null, image_w: null, image_h: null, site_name: null, favicon: null, status: 200, probed_at: "2026-10-01T00:00:00.000Z", ...over });

test("refreshPreviews: quota, newest first, TTL, a failed probe keeps the old record, hosts and flips", async () => {
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-preview-"));
  const items = [item(1, "2026-09-01"), item(2, "2026-10-01"), item(3, "2026-08-01"), item(4, "2026-07-01")];
  const manifest = { list: () => items };
  const sources = new Map([["kauffmann-nl", {}]]);
  const seen: string[] = [];
  const http = (async (url: string) => { seen.push(url); const r = new Response("<head></head>"); Object.defineProperty(r, "url", { value: url }); return r; }) as any;
  const now = new Date("2026-10-07T12:00:00Z");
  const r = await refreshPreviews(manifest, { dataDir }, { quota: 2, ttlDays: 30, concurrency: 3, http, now, gapMs: 0, sources });
  assert.deepEqual(seen, [items[1].url, items[0].url], "newest first, up to the quota");
  assert.deepEqual([r.probed, r.refreshed, r.failed, r.touched.length], [2, 0, 0, 2]);
  // a fresh record is not due; an old one is; a failed probe of a good record keeps it
  mkdirSync(join(previewPath(dataDir, items[2]), ".."), { recursive: true });
  writeFileSync(previewPath(dataDir, items[2]), JSON.stringify(record({ url: items[2].url, probed_at: "2026-08-01T00:00:00.000Z" })));
  seen.length = 0;
  const down = (async (url: string) => { seen.push(url); throw new Error("down"); }) as any;
  const r2 = await refreshPreviews(manifest, { dataDir }, { quota: 10, ttlDays: 30, concurrency: 1, http: down, now, gapMs: 0, sources });
  assert.deepEqual(seen.sort(), [items[2].url, items[3].url].sort(), "the old record and the never-probed one");
  assert.deepEqual([r2.failed, r2.touched.map((i) => i.id)], [2, [items[3].id]], "the good record is kept, the new failure recorded");
  assert.equal(previewFor(items[2], dataDir, {})?.embeddable, true);
  // opted-out sources are not probed at all
  const r3 = await refreshPreviews({ list: () => [item(9, "2026-10-02", "optout", "optout.example")] }, { dataDir }, { quota: 10, ttlDays: 30, concurrency: 1, http, now, gapMs: 0, sources: new Map([["optout", { embed: false }]]) });
  assert.equal(r3.probed, 0);
});

test("hosts: three agreeing probes infer a new post's decision; flips are reported", async () => {
  const hosts = deriveHosts([
    record({ probed_at: "2026-10-03T00:00:00Z" }), record({ probed_at: "2026-10-02T00:00:00Z" }), record({ probed_at: "2026-10-01T00:00:00Z" }),
    record({ url: "https://b.example/x", final_url: "https://b.example/x", embeddable: false, probed_at: "2026-10-03T00:00:00Z" }),
    record({ url: "https://b.example/y", final_url: "https://b.example/y", embeddable: true, probed_at: "2026-10-01T00:00:00Z" }),
  ]);
  assert.deepEqual([hosts["kauffmann.nl"].agree, hosts["kauffmann.nl"].embeddable, hosts["b.example"].agree, hosts["b.example"].embeddable], [3, true, 1, false]);
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-preview-"));
  mkdirSync(join(hostsPath(dataDir), ".."), { recursive: true });
  writeFileSync(hostsPath(dataDir), JSON.stringify(hosts));
  assert.deepEqual(previewFor(item(7, "2026-10-07"), dataDir, {}), { embeddable: true, frame_url: null, image: null, image_alt: null, image_w: null, image_h: null, site_name: null, favicon: null, probed_at: "2026-10-03T00:00:00Z" });
  assert.equal(previewFor(item(8, "2026-10-07", "b", "b.example"), dataDir, {}), undefined, "one probe is not enough");
  // a host that flips from true to false is named
  const http = (async (url: string) => { const r = new Response("<head></head>", { headers: { "x-frame-options": "DENY" } }); Object.defineProperty(r, "url", { value: url }); return r; }) as any;
  const fresh = [item(11, "2026-10-05"), item(12, "2026-10-04"), item(13, "2026-10-03")];
  const r = await refreshPreviews({ list: () => fresh }, { dataDir }, { quota: 10, ttlDays: 30, concurrency: 1, http, now: new Date("2026-10-07T12:00:00Z"), gapMs: 0, sources: new Map([["kauffmann-nl", {}]]) });
  assert.deepEqual(r.flipped, ["kauffmann.nl"]);
});

test("previewFor: the author's opt-out and the operator's override win over the record", () => {
  const dataDir = mkdtempSync(join(tmpdir(), "bcobs-preview-"));
  const it = item(1, "2026-10-01");
  mkdirSync(join(previewPath(dataDir, it), ".."), { recursive: true });
  writeFileSync(previewPath(dataDir, it), JSON.stringify(record({ url: it.url, image: "https://x.example/i.jpg", favicon: "https://x.example/f.ico", frame_url: "https://x.example/embed/" })));
  assert.equal(previewFor(it, dataDir, {})?.image, "https://x.example/i.jpg");
  const off = previewFor(it, dataDir, { embed: false })!;
  assert.deepEqual([off.embeddable, off.frame_url, off.image, off.favicon], [false, null, null, null]);
  mkdirSync(join(dataDir, "overrides"), { recursive: true });
  writeFileSync(join(dataDir, "overrides", "embeds.yaml"), `hosts:\n  kauffmann.nl: { frame: false, reason: "test", at: 2026-10-07 }\nvideos: []\n`);
  const ov = previewFor(it, dataDir, {})!;
  assert.deepEqual([ov.embeddable, ov.image], [false, "https://x.example/i.jpg"], "frame off, poster kept");
});

test("pendingPreviewPages: a page whose preview differs from what it would get now is pending", async () => {
  const { pendingPreviewPages } = await import("../../pipeline/render/post.js");
  const root = mkdtempSync(join(tmpdir(), "bcobs-preview-"));
  const dataDir = join(root, "data"), contentDir = join(root, "content");
  const its = [item(1, "2026-10-01"), item(2, "2026-10-01"), item(3, "2026-10-01")];
  const fresh = record({ probed_at: "2026-10-07T00:00:00.000Z" }), same = record({ probed_at: "2026-10-01T00:00:00.000Z" });
  const recs = [fresh, same, record({ embeddable: null, status: 403 })];
  const yaml = (r: PostProbe) => `preview:\n${Object.entries({ embeddable: r.embeddable, frame_url: r.frame_url, image: r.image, image_alt: r.image_alt, image_w: r.image_w, image_h: r.image_h, site_name: r.site_name, favicon: r.favicon, probed_at: r.probed_at }).map(([k, v]) => `  ${k}: ${JSON.stringify(v)}`).join("\n")}\n`;
  its.forEach((it, i) => {
    mkdirSync(join(previewPath(dataDir, it), ".."), { recursive: true });
    writeFileSync(previewPath(dataDir, it), JSON.stringify(recs[i]));
    mkdirSync(join(contentDir, "posts", "kauffmann-nl"), { recursive: true });
    writeFileSync(join(contentDir, "posts", "kauffmann-nl", `${i + 1}.md`), `---\nid: post/kauffmann-nl/${i + 1}\n${i === 2 ? "" : yaml(same)}---\n`);
  });
  const sources = new Map([["kauffmann-nl", { name: "K" }]]);
  // 1: the record is newer; 2: page matches; 3: a failed probe renders as such, and the page has none yet
  assert.deepEqual(pendingPreviewPages(its, dataDir, contentDir, sources).map((i) => i.id), [its[0].id, its[2].id]);
  // an opt-out makes the matching page pending too
  assert.ok(pendingPreviewPages([its[1]], dataDir, contentDir, new Map([["kauffmann-nl", { name: "K", embed: false }]])).length === 1);
});
