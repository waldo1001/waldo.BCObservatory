/**
 * The preview probe outside the nightly (D60): backfill, or re-probe one source.
 *
 *   npm run probe:previews -- [--limit N] [--source id] [--force] [--concurrency N] [--no-channels]
 *
 * Probes published posts with no record (with --force: every post, whatever its age) and writes data/preview/.
 * Network only, no LLM. With the vault it also re-renders the probed posts' pages. Without it, it does not: a
 * render without the vault skips the repeat check (D55) and could undo a scrub, so the next nightly renders them
 * (pendingPreviewPages).
 */
import { resolve } from "node:path";
import { loadSources } from "../pipeline/lib/config.js";
import { httpGet } from "../pipeline/lib/http.js";
import { Manifest } from "../pipeline/lib/manifest.js";
import { CONTENT_DIR, DATA_DIR } from "../pipeline/lib/paths.js";
import { channelAvatar } from "../pipeline/caption/ytdlp.js";
import { refreshChannels, refreshPreviews, writeIcons } from "../pipeline/extract/preview-probe.js";
import { vaultReady } from "../pipeline/fetch/post.js";
import { rerenderPostPages } from "../pipeline/render/post.js";

const argv = process.argv.slice(2);
const val = (f: string) => { const i = argv.indexOf(f); return i >= 0 ? argv[i + 1] : undefined; };
const source = val("--source");
const sources = loadSources();
const blogs = new Map(sources.filter((s) => s.kind === "blog").map((s) => [s.id, {
  name: s.name, author: s.author ?? null, full_text: s.full_text, user_agent: s.fetch?.user_agent, ...(s.embed === false ? { embed: false } : {}),
}]));
const now = new Date();
const t0 = Date.now();
const r = await refreshPreviews(new Manifest(resolve(DATA_DIR, "manifest")), { dataDir: DATA_DIR }, {
  quota: Number(val("--limit") ?? Number.MAX_SAFE_INTEGER), ttlDays: argv.includes("--force") ? 0 : 30,
  concurrency: Number(val("--concurrency") ?? 3), http: httpGet, now, sources: blogs,
  ...(source ? { only: (i) => i.source === source } : {}),
});
const rerendered = vaultReady() ? await rerenderPostPages(r.touched, blogs, { dataDir: DATA_DIR, contentDir: CONTENT_DIR, now: () => now }) : 0;
console.log(`probed ${r.probed} (${r.refreshed} refreshed, ${r.failed} failed), re-rendered ${rerendered} pages in ${Math.round((Date.now() - t0) / 1000)} s`);
if (!vaultReady() && r.touched.length) console.log(`no vault checkout: ${r.touched.length} pages wait for the next nightly to render their preview`);
// channel avatars (yt-dlp), then the icons the site reads
const ch = argv.includes("--no-channels") ? { asked: 0, failed: 0 }
  : await refreshChannels(sources.filter((s) => s.kind === "youtube" && s.enabled && (!source || s.id === source)), DATA_DIR, { avatar: channelAvatar, now, ttlDays: argv.includes("--force") ? 0 : 30 });
const icons = writeIcons(DATA_DIR, sources);
console.log(`channels: ${ch.asked} asked, ${ch.failed} failed; ${Object.keys(icons).length} source icons`);
if (r.flipped.length) console.log(`framing now refused by: ${r.flipped.join(", ")}`);
