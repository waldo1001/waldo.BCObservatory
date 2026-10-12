/**
 * The Learn shard (D94): one row per Microsoft Learn article. A Learn article has no page on the observatory; it is an
 * evidence row of the topic hubs. Its record carries the article's URL as its path (hrefOf returns it as it is), the
 * hub that lists it as the "where" label, and the identifiers it documents in code spans as tags.
 *
 * Tuple rows keep the shard lean: the URL prefix is written once (`base`), and a hub's path, label and system once per
 * hub (`hubs`), not once per article.
 */
import type { PageRecord } from "./types.js";

/** [hub page path, or "" for a reference section without a hub; the "where" label; the hub's galaxy system] */
export type LearnHub = [string, string, string | null];
/** [path under `base`, title, summary, ms.date, index into `hubs` (-1: none), system when it differs from the hub's, identifiers] */
export type LearnRow = [string, string, string, string | null, number, (string | null)?, string[]?];
export interface LearnShard { schema: "bcobs-learn@1"; base: string; hubs: LearnHub[]; rows: LearnRow[] }

/** The shard's rows as page records of type `learn`, tier `official`, for pageToRecord. */
export function learnRecords(doc: LearnShard): PageRecord[] {
  return doc.rows.map(([path, title, summary, date, h, system, ids]) => {
    const hub = h >= 0 ? doc.hubs[h] : undefined;
    const sys = system ?? hub?.[2] ?? null;
    return {
      path: /^https?:\/\//.test(path) ? path : `${doc.base}${path}`, type: "learn", title, summary, tier: "official",
      ...(sys ? { system: sys } : {}), ...(date ? { date } : {}), ...(ids?.length ? { tags: ids } : {}),
      ...(hub?.[1] ? { path_label: hub[1] } : {}), ...(hub?.[0] ? { hub: hub[0] } : {}),
    };
  });
}
