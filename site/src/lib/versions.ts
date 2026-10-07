/**
 * Per-member version history for the object pages, from the version diffs the code job writes
 * (data/code/diffs/version/<from>__<to>.json, D31): which field, procedure or event was added, changed or removed in
 * which BC major. Loaded once per build.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const DIR = resolve(process.cwd(), "..", "data", "code", "diffs", "version");
const VERSIONS = JSON.parse(readFileSync(resolve(process.cwd(), "..", "config", "versions.json"), "utf8")) as { snapshot: string[]; majors: Record<string, { label: string }> };

export type Change = "added" | "changed" | "removed";
export interface MemberChange { version: string; change: Change }
export interface ObjectHistory {
  change: Map<string, Change>; // per version: the object itself
  members: { fields: Map<string, MemberChange[]>; procedures: Map<string, MemberChange[]>; events: Map<string, MemberChange[]> };
  counts: Map<string, Record<string, number>>; // per version: "fields added" -> n
}

let cache: Map<string, ObjectHistory> | null = null;

function load(): Map<string, ObjectHistory> {
  const out = new Map<string, ObjectHistory>();
  if (!existsSync(DIR)) return out;
  for (const f of readdirSync(DIR).filter((x) => x.endsWith(".json")).sort()) {
    const d = JSON.parse(readFileSync(join(DIR, f), "utf8"));
    const to = String(d.to?.version);
    for (const o of d.objects ?? []) {
      let h = out.get(o.key);
      if (!h) out.set(o.key, (h = { change: new Map(), members: { fields: new Map(), procedures: new Map(), events: new Map() }, counts: new Map() }));
      h.change.set(to, o.change);
      const counts: Record<string, number> = {};
      for (const kind of ["fields", "procedures", "events"] as const) {
        for (const m of o[kind] ?? []) {
          const list = h.members[kind].get(m.name) ?? [];
          list.push({ version: to, change: m.change });
          h.members[kind].set(m.name, list);
          const k = `${kind} ${m.change}`;
          counts[k] = (counts[k] ?? 0) + 1;
        }
      }
      h.counts.set(to, counts);
    }
  }
  return out;
}

export function objectHistory(key: string): ObjectHistory | null {
  cache ??= load();
  return cache.get(key) ?? null;
}

/** Every major with W1 data, full or a skeleton kept for its history (D62), oldest first: the timeline's columns. */
export const majors = () => Object.keys(VERSIONS.majors)
  .filter((v) => VERSIONS.snapshot.includes(v) || existsSync(resolve(process.cwd(), "..", "data", "code", v, "w1", "manifest.json")))
  .sort((a, b) => Number(a) - Number(b))
  .map((v) => ({ version: v, label: VERSIONS.majors[v]?.label ?? `BC${v}` }));

const pill = (c: MemberChange[]) => c.map((x) => `<span class="pill" title="${x.change} in BC${x.version}">${x.change === "added" ? "+" : x.change === "removed" ? "−" : "Δ"} BC${x.version}</span>`).join(" ");

/**
 * Mark members that changed across versions in the rendered markdown: the field table's name cell and the first code
 * span of each procedure or event list item. Matching is by exact member name.
 */
export function markMembers(html: string, h: ObjectHistory | null): string {
  if (!h) return html;
  let out = html.replace(/(<td>\d+<\/td>\s*<td>)([^<]+)(<\/td>)/g, (m, a: string, name: string, b: string) => {
    const c = h.members.fields.get(decode(name));
    return c ? `${a}${name} ${pill(c)}${b}` : m;
  });
  out = out.replace(/<li><code>([A-Za-z_][\w]*)\(([^<]*)<\/code>/g, (m, name: string) => {
    const c = h.members.procedures.get(name) ?? h.members.events.get(name);
    return c ? `${m} ${pill(c)}` : m;
  });
  return out;
}

const decode = (s: string) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
