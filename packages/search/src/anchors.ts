/** Per-member anchors on object pages (D86 4.5): #field-20, #event-OnAfterPostSalesDoc, #proc-CopyToTempLines, #value-3. */
import type { SymbolKind } from "./types.js";

export const anchorOf = (kind: SymbolKind, key: string | number) => `#${kind}-${key}`;
/** A symbol's record id: its owner's page path and the anchor, "objects/codeunit/80#event-OnAfterPostSalesDoc". */
export const symbolId = (ownerPath: string, kind: SymbolKind, key: string | number) => `${ownerPath}${anchorOf(kind, key)}`;
/** A record id as a site link under `base`: "objects/codeunit/80#event-X" -> "<base>objects/codeunit/80/#event-X". */
export function hrefOf(base: string, id: string): string {
  const i = id.indexOf("#");
  return i < 0 ? `${base}${id}/` : `${base}${id.slice(0, i)}/${id.slice(i)}`;
}
