/** Build-time view of data/preview (D60 phase 2): the per-source icon the pipeline wrote, opt-outs already applied. */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const ICONS = resolve(process.cwd(), "..", "data", "preview", "icons.json");
let icons: Record<string, string> | null = null;

/** The blog's favicon or the channel's avatar; null when there is none or the author opted out. */
export function sourceIcon(sourceId: string | null | undefined): string | null {
  icons ??= existsSync(ICONS) ? (JSON.parse(readFileSync(ICONS, "utf8")) as Record<string, string>) : {};
  return sourceId ? icons[sourceId] ?? null : null;
}
