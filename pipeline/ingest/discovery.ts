/** Discovery feeds (Wingate digest): never create items, only suggest hosts that are not registered yet. */
import type { SourceDef } from "../lib/config.js";
import { parseFeed } from "./feed.js";
import { newResult, type IngestContext, type SourceResult, type Suggestion } from "./types.js";

export function hostOf(url: string): string | null {
  try { return new URL(url).host.replace(/^www\./, "").toLowerCase(); } catch { return null; }
}

export async function ingestDiscovery(source: SourceDef, ctx: IngestContext): Promise<SourceResult> {
  const r = newResult(source);
  if (!source.fetch?.feed) throw new Error(`${source.id}: fetch.feed missing`);
  const items = parseFeed(await (await ctx.http(source.fetch.feed)).text());
  const byHost = new Map<string, Suggestion>();
  for (const it of items) {
    const host = hostOf(it.link);
    if (!host || ctx.knownHosts.has(host)) continue;
    const s = byHost.get(host) ?? { host, count: 0, sample_title: it.title, sample_url: it.link };
    s.count++;
    byHost.set(host, s);
  }
  r.suggestions = [...byHost.values()].sort((a, b) => b.count - a.count || a.host.localeCompare(b.host));
  r.note = `${items.length} digest entries, ${r.suggestions.length} unregistered hosts`;
  return r;
}
