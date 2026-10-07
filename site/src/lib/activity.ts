/** Build-time view of data/changes/<repo>/activity.json (D61 section 9): open pull requests, open issues, releases. */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export interface Activity {
  open: { number: number; title: string; url: string; base: string; major: string | null; author: string | null; labels: string[]; draft: boolean; updated_at: string; community_contribution: boolean }[];
  issues: { number: number; title: string; url: string; labels: string[]; created_at: string; comments: number }[];
  releases: { tag: string; name: string; url: string; published_at: string | null; prerelease: boolean }[];
}
const DIR = resolve(process.cwd(), "..", "data", "changes");

/** Per repository folder (bcapps, al-go, ...): its activity lists, when it has any. */
export function activities(): { slug: string; activity: Activity }[] {
  if (!existsSync(DIR)) return [];
  return readdirSync(DIR).sort().filter((d) => existsSync(resolve(DIR, d, "activity.json")))
    .map((slug) => ({ slug, activity: JSON.parse(readFileSync(resolve(DIR, slug, "activity.json"), "utf8")) as Activity }));
}
