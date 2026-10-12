/** D91, build only: the media records of data/index (videos, posts, code changes) for the list pages, so their static
 *  rows, title lists and pill counts come from the same records, in the same order, as the rows the browser renders. */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { PageRecord } from "@bc-observatory/search";
import { listOrder, type MediaType } from "../scripts/list-rows.js";

const memo = new Map<string, PageRecord[]>();

/** The media records of data/index (memoised per directory): the manifest's shards of kind "media", in manifest order.
 *  Throws "no media shard in <dir>/index-manifest.json" when there is none. */
export function readMediaRecords(indexDir = resolve(process.cwd(), "..", "data", "index")): PageRecord[] {
  let recs = memo.get(indexDir);
  if (!recs) {
    const manifest = resolve(indexDir, "index-manifest.json");
    const shards = (JSON.parse(readFileSync(manifest, "utf8")) as { shards: { file: string; kind?: string }[] }).shards.filter((s) => s.kind === "media");
    if (!shards.length) throw new Error(`no media shard in ${manifest}`);
    recs = shards.flatMap((s) => JSON.parse(readFileSync(resolve(indexDir, s.file), "utf8")) as PageRecord[]);
    memo.set(indexDir, recs);
  }
  return recs;
}

/** One type, in listOrder. */
export const mediaRows = (type: MediaType, indexDir?: string): PageRecord[] => readMediaRecords(indexDir).filter((r) => r.type === type).sort(listOrder);
