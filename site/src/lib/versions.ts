/**
 * Per-member version history for the object pages, from the version diffs the code job writes
 * (data/code/diffs/version/<from>__<to>.json, D31): which field, procedure or event was added, changed or removed in
 * which BC major. Loaded once per build.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const DIR = resolve(process.cwd(), "..", "data", "code", "diffs", "version");
type Versions = { snapshot: string[]; majors: Record<string, { label: string; vnext?: boolean }> };
let versionsCache: Versions | null = null;
// read on first use, so a unit test can import the pure helpers below from the repository root (D88)
const VERSIONS = (): Versions => versionsCache ??= JSON.parse(readFileSync(resolve(process.cwd(), "..", "config", "versions.json"), "utf8")) as Versions;

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

/** Every major with W1 data, full or a skeleton kept for its history (D62), oldest first: the timeline's columns, the galaxy's version menu and the atlas lens (D72). */
export const majors = () => Object.keys(VERSIONS().majors)
  .filter((v) => VERSIONS().snapshot.includes(v) || existsSync(resolve(process.cwd(), "..", "data", "code", v, "w1", "manifest.json")))
  .sort((a, b) => Number(a) - Number(b))
  .map((v) => ({ version: v, label: VERSIONS().majors[v]?.label ?? `BC${v}`, vnext: !!VERSIONS().majors[v]?.vnext }));

export interface TimelineCol { from: string; to: string; present: boolean; changed: boolean; text: string }
/**
 * The columns of the version timeline (VersionTimeline.astro): one per major, oldest first, then every run of majors
 * that say the same quiet thing (present, unchanged, not present) folded into one column labelled with the range,
 * "BC23-25" (D88: a column was 170 bytes on each of 25,666 object pages, and most objects are quiet most of the time).
 */
export function timelineCols(ms: { version: string }[], presentIn: string[], changedIn: string[], history: ObjectHistory | null): TimelineCol[] {
  const cols: TimelineCol[] = ms.map(({ version }, i) => {
    const present = presentIn.includes(version);
    const changed = changedIn.includes(version);
    const counts = history?.counts.get(version) ?? {};
    const parts = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 2).map(([k, n]) => `${n} ${k}`);
    const objChange = history?.change.get(version);
    const text = !present ? "not present"
      : i === 0 || !presentIn.includes(ms[i - 1]?.version) ? (objChange === "added" ? "added" : "present")
      : changed ? (parts.join(", ") || (objChange === "changed" ? "declaration changed" : "changed"))
      : "unchanged";
    return { from: version, to: version, present, changed, text };
  });
  // a "present" column followed by "unchanged" ones is one range that says "present"; "not present" runs fold too
  const quiet = (c: TimelineCol) => !c.changed && (c.text === "present" || c.text === "unchanged" || c.text === "not present");
  const out: TimelineCol[] = [];
  for (const c of cols) {
    const last = out[out.length - 1];
    if (last && quiet(last) && quiet(c) && last.present === c.present) last.to = c.from;
    else out.push({ ...c });
  }
  return out;
}

const SYM: Record<Change, string> = { added: "+", removed: "−", changed: "Δ" };
/**
 * One pill per member with every version it changed in (D88: a pill per version was 56 bytes each, 171 of them on
 * Table 18). No title: "changed in BC25, BC26" was 26 bytes a pill on 2,526 pages; object-page.ts sets it (D89, pillTitle).
 */
const pill = (c: MemberChange[]) => `<span class="pill">${c.map((x) => `${SYM[x.change]} BC${x.version}`).join(" ")}</span>`;

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

/**
 * Per-member anchors (D86 4.5), so a search hit on a symbol lands on its row: `id="field-<id>"` on a row of the Fields
 * table, `id="value-<ordinal>"` on a row of the Values table, `id="event-<Name>"` on an item under "Events published",
 * `id="proc-<Name>"` under "Procedures". The same two shapes markMembers reads; AL has no overloading, so a name is
 * unique per object. The markdown twins keep their section anchors only.
 */
export function anchorMembers(html: string): string {
  const row = (part: string, kind: string) => part.replace(/<tr>(\s*)<td>(\d+)<\/td>/g, (_m, sp: string, id: string) => `<tr id="${kind}-${id}">${sp}<td>${id}</td>`);
  const item = (part: string, kind: string) => part.replace(/<li><code>([A-Za-z_][\w]*)\(/g, (_m, name: string) => `<li id="${kind}-${name}"><code>${name}(`);
  return html.split(/(?=<h2 id=")/).map((part) => {
    const id = /^<h2 id="([^"]+)"/.exec(part)?.[1];
    return id === "fields" ? row(part, "field") : id === "values" ? row(part, "value") : id === "events-published" ? item(part, "event") : id === "procedures" ? item(part, "proc") : part;
  }).join("");
}

const decode = (s: string) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
