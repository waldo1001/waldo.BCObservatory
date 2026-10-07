/**
 * Microsoft's first-party apps (D65, discovery spec 6.2): the folder names the apps snapshot of each major lists
 * (data/code/<major>/apps/manifest.json `apps`), which is also the `app` an object record carries. One app page each.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { exists, readJson } from "./fsx.js";

/** `Subscription Billing` -> `subscription-billing`: lower case, spaces and dots (and anything else) to `-`. */
export const appSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "app";
export const appId = (name: string) => `app/${appSlug(name)}`;

/** App folder name -> the majors whose apps snapshot lists it, ascending. Empty without an apps snapshot. */
export function firstPartyApps(dataDir: string): Map<string, string[]> {
  const root = resolve(dataDir, "code");
  const out = new Map<string, string[]>();
  if (!exists(root)) return out;
  for (const m of readdirSync(root).filter((d) => /^\d+$/.test(d)).sort((a, b) => Number(a) - Number(b))) {
    const p = resolve(root, m, "apps", "manifest.json");
    if (!exists(p)) continue;
    for (const a of readJson<{ apps?: string[] }>(p).apps ?? []) out.set(a, [...(out.get(a) ?? []), m]);
  }
  return out;
}
