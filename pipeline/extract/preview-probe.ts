/**
 * The preview probe (D60, docs/specs/source-embed.md section 6): may a post be framed, and what does its card look
 * like. Deterministic, no LLM. One GET per post, read only up to `</head>` (256 KB at most), then the body is
 * dropped: nothing of the post is written anywhere. What is written is URLs, image dimensions and a flag:
 *
 *   data/preview/posts/<source>/<fileKey>.json   the truth per post
 *   data/preview/hosts.json                      derived per host: a brand-new post of a host whose last three
 *                                                probes agreed renders with that decision the night it appears
 *
 * Opt-outs (`embed: false` on the source) and data/overrides/embeds.yaml are applied by the renderer
 * (`previewFor`), never by the probe, so a record stays factual and a policy change needs no re-probe.
 */
import { resolve } from "node:path";
import * as cheerio from "cheerio";
import { parse as parseYaml } from "yaml";
import { exists, listFiles, readJson, readJsonOr, readText, writeJson } from "../lib/fsx.js";
import { USER_AGENTS, type HttpGet } from "../lib/http.js";
import { fileKey, type Manifest, type ManifestItem } from "../lib/manifest.js";
import { postKey } from "../fetch/post.js";

/** Where the site is served; a CSP `frame-ancestors` that names it (or `*.github.io`) allows our frame. */
export const OUR_ORIGIN = "https://waldo1001.github.io";
const HEAD_LIMIT = 256 * 1024;
/** A failed probe (non-2xx, network) is tried again after this many days, not after the full TTL. */
const RETRY_FAILED_DAYS = 3;

export type Frameable = boolean | null;

export interface HeadInfo {
  image: string | null; image_alt: string | null; image_w: number | null; image_h: number | null;
  site_name: string | null; favicon: string | null; oembed: string | null; wordpress: boolean;
}
export interface PostProbe {
  url: string; final_url: string | null; embeddable: Frameable; frame_url: string | null;
  image: string | null; image_alt: string | null; image_w: number | null; image_h: number | null;
  site_name: string | null; favicon: string | null; status: number; probed_at: string;
}
/** The frontmatter block (schemas/frontmatter.post.json `preview`). */
export interface PreviewBlock {
  embeddable: Frameable; frame_url: string | null; image: string | null; image_alt: string | null;
  image_w: number | null; image_h: number | null; site_name: string | null; favicon: string | null; probed_at: string;
}
export interface HostEntry { embeddable: Frameable; probed_at: string; agree: number; wp_embed: boolean }
export interface EmbedOverrides {
  hosts: Record<string, { frame?: boolean; poster?: boolean; reason?: string; at?: string }>;
  videos: { id: string; reason?: string; at?: string }[];
}
export interface PreviewReport { probed: number; refreshed: number; failed: number; flipped: string[]; touched: ManifestItem[] }

export const previewDir = (dataDir: string) => resolve(dataDir, "preview");
export const previewPath = (dataDir: string, item: Pick<ManifestItem, "id" | "source">) =>
  resolve(previewDir(dataDir), "posts", item.source, `${fileKey(postKey(item))}.json`);
export const hostsPath = (dataDir: string) => resolve(previewDir(dataDir), "hosts.json");
export const embedsPath = (dataDir: string) => resolve(dataDir, "overrides", "embeds.yaml");

const hostOf = (url: string): string | null => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return null; } };

/** Does one CSP `frame-ancestors` source list allow a page on `ourOrigin` to frame? */
function ancestorsAllow(list: string[], ourOrigin: string): boolean {
  const ours = new URL(ourOrigin).hostname;
  return list.some((raw) => {
    const t = raw.replace(/\/+$/, "");
    if (t === "*" || t === "https:") return true;
    if (t.startsWith("'")) return false; // 'none', 'self'
    const host = t.replace(/^https?:\/\//, "").replace(/:\d+$/, "");
    if (host === ours) return true;
    return host.startsWith("*.") && ours.endsWith(host.slice(1));
  });
}

/**
 * May `ourOrigin` frame the page at `finalUrl`, given its response headers? CSP `frame-ancestors` decides when
 * present (X-Frame-Options is then ignored, as browsers do); report-only and `<meta>` CSP never count.
 */
export function frameDecision(headers: Headers, finalUrl: string, ourOrigin = OUR_ORIGIN): Frameable {
  if (!finalUrl.startsWith("https:")) return false; // an http frame on an https page is blocked as mixed content
  const csp = headers.get("content-security-policy");
  if (csp && /frame-ancestors/i.test(csp)) {
    // several CSP headers arrive joined by ", " and are all enforced: every one that names frame-ancestors must allow
    for (const policy of csp.split(",")) {
      const dir = policy.split(";").map((d) => d.trim().split(/\s+/)).find((d) => d[0]?.toLowerCase() === "frame-ancestors");
      if (dir && !ancestorsAllow(dir.slice(1).map((s) => s.toLowerCase()), ourOrigin)) return false;
    }
    return true;
  }
  const xfo = headers.get("x-frame-options");
  if (xfo && /deny|sameorigin|allow-from/i.test(xfo)) return false;
  return true;
}

const https = (u: string | undefined, base: string): string | null => {
  if (!u) return null;
  try { const abs = new URL(u.trim(), base); return abs.protocol === "https:" ? abs.href : null; } catch { return null; }
};
const int = (v: string | undefined) => { const n = Number.parseInt(v ?? "", 10); return Number.isFinite(n) && n > 0 ? n : null; };

/** The card fields from a page head: og:*, twitter:*, the icon and oEmbed discovery. Nothing of the body. */
export function parseHead(html: string, baseUrl: string): HeadInfo {
  const $ = cheerio.load(html);
  const meta = (...keys: string[]) => {
    for (const k of keys) {
      const v = $(`meta[property="${k}"], meta[name="${k}"]`).first().attr("content");
      if (v?.trim()) return v.trim();
    }
    return undefined;
  };
  const icon = $("link[rel]").toArray().find((l) => ($(l).attr("rel") ?? "").toLowerCase().split(/\s+/).includes("icon"));
  const oembed = $('link[rel="alternate"][type="application/json+oembed"]').first().attr("href");
  const generator = meta("generator") ?? "";
  const alt = meta("og:image:alt", "twitter:image:alt");
  let origin: string | null = null;
  try { origin = new URL(baseUrl).origin; } catch { /* keep null */ }
  return {
    image: https(meta("og:image:secure_url", "og:image", "og:image:url", "twitter:image", "twitter:image:src"), baseUrl),
    image_alt: alt ? alt.slice(0, 160) : null,
    image_w: int(meta("og:image:width")), image_h: int(meta("og:image:height")),
    site_name: meta("og:site_name") ?? null,
    favicon: https(icon ? $(icon).attr("href") : undefined, baseUrl) ?? (origin?.startsWith("https:") ? `${origin}/favicon.ico` : null),
    oembed: https(oembed, baseUrl),
    wordpress: /wordpress/i.test(generator) || /\/wp-json\/oembed\//.test(oembed ?? ""),
  };
}

/** The head of a response body: read until `</head>` or 256 KB, then stop reading. */
async function readHead(res: Response): Promise<string> {
  if (!res.body) return "";
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let html = "";
  try {
    while (html.length < HEAD_LIMIT) {
      const { done, value } = await reader.read();
      if (done) break;
      html += dec.decode(value, { stream: true });
      if (/<\/head>/i.test(html)) break;
    }
  } finally {
    await reader.cancel().catch(() => undefined);
  }
  return html.slice(0, HEAD_LIMIT);
}

export async function probePost(url: string, o: { http: HttpGet; ua?: keyof typeof USER_AGENTS; origin?: string; now: Date; timeoutMs?: number }): Promise<PostProbe> {
  const base: PostProbe = { url, final_url: null, embeddable: null, frame_url: null, image: null, image_alt: null, image_w: null, image_h: null, site_name: null, favicon: null, status: 0, probed_at: o.now.toISOString() };
  let res: Response;
  try {
    res = await o.http(url, { ua: o.ua ?? "default", accept: "text/html", timeoutMs: o.timeoutMs ?? 20_000, raw: true });
  } catch {
    return base;
  }
  const finalUrl = res.url || url;
  if (!res.ok) { await res.body?.cancel().catch(() => undefined); return { ...base, final_url: finalUrl, status: res.status }; }
  const head = parseHead(await readHead(res), finalUrl);
  const embeddable = frameDecision(res.headers, finalUrl, o.origin ?? OUR_ORIGIN);
  // WordPress serves <post>/embed/ as a framable card (phase 2 uses it when the full page refuses framing)
  const frame_url = head.wordpress && finalUrl.startsWith("https:") ? `${finalUrl.split(/[?#]/)[0].replace(/\/?$/, "/")}embed/` : null;
  return {
    ...base, final_url: finalUrl, status: res.status, embeddable, frame_url,
    image: head.image, image_alt: head.image_alt, image_w: head.image_w, image_h: head.image_h, site_name: head.site_name, favicon: head.favicon,
  };
}

export function loadEmbedOverrides(dataDir: string): EmbedOverrides {
  const p = embedsPath(dataDir);
  const doc = exists(p) ? (parseYaml(readText(p)) ?? {}) as Partial<EmbedOverrides> : {};
  return { hosts: doc.hosts ?? {}, videos: doc.videos ?? [] };
}

/** Per host: the newest decision, how many of the newest probes agree with it, whether it is WordPress. */
export function deriveHosts(records: PostProbe[]): Record<string, HostEntry> {
  const by = new Map<string, PostProbe[]>();
  for (const r of records) {
    const h = hostOf(r.final_url ?? r.url);
    if (!h || r.embeddable === null) continue;
    by.set(h, [...(by.get(h) ?? []), r]);
  }
  const out: Record<string, HostEntry> = {};
  for (const [h, rs] of [...by].sort((a, b) => a[0].localeCompare(b[0]))) {
    rs.sort((a, b) => b.probed_at.localeCompare(a.probed_at));
    let agree = 0;
    while (agree < rs.length && rs[agree].embeddable === rs[0].embeddable) agree++;
    out[h] = { embeddable: rs[0].embeddable, probed_at: rs[0].probed_at, agree, wp_embed: rs.some((r) => !!r.frame_url) };
  }
  return out;
}

/**
 * The `preview` frontmatter block for a post: its record, else the host's decision when its last three probes
 * agreed; then the author's opt-out and the operator's overrides. Undefined when there is nothing to say.
 */
export function previewFor(item: Pick<ManifestItem, "id" | "source" | "url">, dataDir: string, src: { embed?: boolean }, overrides = loadEmbedOverrides(dataDir)): PreviewBlock | undefined {
  const p = previewPath(dataDir, item);
  let block: PreviewBlock | undefined;
  if (exists(p)) {
    const r = readJson<PostProbe>(p);
    block = { embeddable: r.embeddable, frame_url: r.frame_url, image: r.image, image_alt: r.image_alt, image_w: r.image_w, image_h: r.image_h, site_name: r.site_name, favicon: r.favicon, probed_at: r.probed_at };
  } else {
    const h = hostOf(item.url);
    const e = h ? readJsonOr<Record<string, HostEntry>>(hostsPath(dataDir), {})[h] : undefined;
    if (e && e.agree >= 3 && e.embeddable !== null) block = { embeddable: e.embeddable, frame_url: null, image: null, image_alt: null, image_w: null, image_h: null, site_name: null, favicon: null, probed_at: e.probed_at };
  }
  if (!block) return undefined;
  const ov = overrides.hosts[hostOf(item.url) ?? ""] ?? {};
  if (src.embed === false || ov.frame === false) block = { ...block, embeddable: false, frame_url: null };
  if (src.embed === false || ov.poster === false) block = { ...block, image: null, image_alt: null, image_w: null, image_h: null, favicon: null };
  return block;
}

/** Run `fn` over items with `n` in flight overall, one per host, and `gapMs` between two requests to a host. */
async function politeEach<T>(items: T[], host: (t: T) => string, n: number, gapMs: number, fn: (t: T) => Promise<void>, stop: () => boolean): Promise<void> {
  const pending = [...items];
  const busy = new Set<string>();
  const last = new Map<string, number>();
  const worker = async () => {
    while (pending.length && !stop()) {
      const i = pending.findIndex((t) => !busy.has(host(t)) && Date.now() - (last.get(host(t)) ?? -Infinity) >= gapMs);
      if (i < 0) { await new Promise((r) => setTimeout(r, Math.min(gapMs, 100) || 10)); continue; }
      const [t] = pending.splice(i, 1);
      const h = host(t);
      busy.add(h);
      try { await fn(t); } finally { busy.delete(h); last.set(h, Date.now()); }
    }
  };
  await Promise.all(Array.from({ length: Math.max(1, n) }, worker));
}

/**
 * Probe the published posts with no record, a record older than `ttlDays`, or a failed record older than three
 * days; newest first, up to `quota`. A failed probe keeps the record it had. Rewrites hosts.json and returns the
 * items whose record changed, for the caller to re-render.
 */
export async function refreshPreviews(manifest: Pick<Manifest, "list">, opts: { dataDir: string }, o: {
  quota: number; ttlDays: number; concurrency: number; http: HttpGet; now: Date; deadline?: Date; gapMs?: number;
  sources: Map<string, { user_agent?: "default" | "browser"; embed?: boolean }>; only?: (item: ManifestItem) => boolean; origin?: string;
}): Promise<PreviewReport> {
  const report: PreviewReport = { probed: 0, refreshed: 0, failed: 0, flipped: [], touched: [] };
  const age = (iso: string) => (o.now.getTime() - Date.parse(iso)) / 86_400_000;
  const due = manifest.list("blog")
    .filter((i) => i.stages.published && o.sources.get(i.source)?.embed !== false && (!o.only || o.only(i)))
    .filter((i) => {
      const p = previewPath(opts.dataDir, i);
      if (!exists(p)) return true;
      const r = readJson<PostProbe>(p);
      return r.embeddable === null ? age(r.probed_at) >= RETRY_FAILED_DAYS : age(r.probed_at) >= o.ttlDays;
    })
    .sort((a, b) => String(b.published_at ?? "").localeCompare(String(a.published_at ?? "")) || a.id.localeCompare(b.id))
    .slice(0, Math.max(0, o.quota));
  if (!due.length) return report;
  const before = readJsonOr<Record<string, HostEntry>>(hostsPath(opts.dataDir), {});
  await politeEach(due, (i) => hostOf(i.url) ?? i.url, o.concurrency, o.gapMs ?? 1000, async (item) => {
    const probe = await probePost(item.url, { http: o.http, ua: o.sources.get(item.source)?.user_agent ?? "default", now: new Date(), origin: o.origin });
    report.probed++;
    const p = previewPath(opts.dataDir, item);
    const had = exists(p) ? readJson<PostProbe>(p) : null;
    if (probe.embeddable === null) {
      report.failed++;
      // keep a good record; a post never probed successfully records the failure so it waits RETRY_FAILED_DAYS
      if (had && had.embeddable !== null) return;
    } else if (had) report.refreshed++;
    writeJson(p, probe);
    // every written record re-renders its page: the page carries probed_at, and a "yes" older than 120 days fails
    // validate:content (a stale yes is the one state that can mislead a reader)
    report.touched.push(item);
  }, () => !!o.deadline && Date.now() > o.deadline.getTime());
  const records = listFiles(resolve(previewDir(opts.dataDir), "posts"), ".json").map((f) => readJson<PostProbe>(f));
  const hosts = deriveHosts(records);
  writeJson(hostsPath(opts.dataDir), hosts);
  report.flipped = Object.keys(hosts).filter((h) => before[h]?.embeddable === true && hosts[h].embeddable === false);
  return report;
}
