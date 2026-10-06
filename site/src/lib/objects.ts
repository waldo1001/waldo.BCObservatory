/** Build-time lookup over data/index/objects.json: title, namespace and app of an object page key. Read once per build. */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

type Row = [string, string, number | null, string, string | null, string | null, string | null, string | null, string, number, number];
export interface ObjectInfo { pk: string; type: string; id: number | null; name: string; app: string | null; ns: string | null; obsolete: string | null; introduced: string | null; changed: string[]; learn: number; countries: number }

export const TYPE_LABEL: Record<string, string> = {
  table: "Table", tableextension: "Table extension", page: "Page", pageextension: "Page extension", codeunit: "Codeunit", report: "Report",
  reportextension: "Report extension", query: "Query", xmlport: "XMLport", enum: "Enum", enumextension: "Enum extension", interface: "Interface",
  permissionset: "Permission set", permissionsetextension: "Permission set extension", entitlement: "Entitlement", profile: "Profile",
  controladdin: "Control add-in", pagecustomization: "Page customization", dotnet: "DotNet",
};

let cache: Map<string, ObjectInfo> | null = null;
export function objectsIndex(): Map<string, ObjectInfo> {
  if (cache) return cache;
  cache = new Map();
  const p = resolve(process.cwd(), "..", "data", "index", "objects.json");
  if (!existsSync(p)) return cache;
  for (const r of (JSON.parse(readFileSync(p, "utf8")) as { rows: Row[] }).rows) {
    cache.set(r[0], { pk: r[0], type: r[1], id: r[2], name: r[3], app: r[4], ns: r[5], obsolete: r[6], introduced: r[7], changed: r[8] ? r[8].split(" ") : [], learn: r[9], countries: r[10] });
  }
  return cache;
}
export const titleOf = (o: Pick<ObjectInfo, "type" | "id" | "name">) => `${TYPE_LABEL[o.type] ?? o.type}${o.id !== null ? ` ${o.id}` : ""} "${o.name}"`;
/** Top namespace segment after the vendor ("Microsoft.Sales.Customer" -> "Sales"); app name when there is none. */
export const area = (o: Pick<ObjectInfo, "ns" | "app">) => {
  if (o.ns) { const p = o.ns.split("."); return p[0] === "Microsoft" || p[0] === "System" ? p[1] ?? p[0] : p[0]; }
  return o.app ?? "(no namespace)";
};
