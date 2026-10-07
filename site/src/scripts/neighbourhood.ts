/**
 * "2 hops" on an object's neighbourhood diagram (D59). On demand it fetches the shards of the object types already
 * on screen (code/neighbours/<major>/<type>.json) and the objects index for names, then draws an outer ring of the
 * objects two hops away under the first-hop object they hang off. Nothing loads until the reader asks.
 */
import { layoutSecond, secondRing, type FirstHop, type ShardEntry } from "./neighbourhood-core.js";

const NS = "http://www.w3.org/2000/svg";
const RINGS = ["relates to", "referenced by", "pages and codeunits on it", "extended by", "event subscriber"];
const LABEL: Record<string, string> = { table: "Table", tableextension: "Table extension", page: "Page", pageextension: "Page extension", codeunit: "Codeunit", report: "Report", reportextension: "Report extension", query: "Query", xmlport: "XMLport", enum: "Enum", enumextension: "Enum extension", interface: "Interface", permissionset: "Permission set", permissionsetextension: "Permission set extension" };
type Row = [string, string, number | null, string, ...unknown[]];

const shardCache = new Map<string, Promise<Record<string, ShardEntry[]>>>();
let index: Promise<Map<string, Row>> | null = null;
const getJson = <T>(url: string, fallback: T): Promise<T> => fetch(url).then((r) => (r.ok ? r.json() : fallback)).catch(() => fallback);

export function mountNeighbourhood(el: HTMLElement): void {
  const svg = el.querySelector<SVGSVGElement>("svg");
  const btn = el.querySelector<HTMLButtonElement>(".nb-hops");
  const live = el.querySelector<HTMLElement>(".nb-live");
  if (!svg || !btn) return;
  const base = el.dataset.base ?? "/", major = el.dataset.major ?? "", centre = el.dataset.key ?? "";
  const vb = svg.getAttribute("viewBox")!;
  const [, , W, H] = vb.split(/\s+/).map(Number);
  let open = false;
  btn.addEventListener("click", async () => {
    if (open) {
      svg.querySelector(".hop2")?.remove();
      svg.setAttribute("viewBox", vb);
      btn.textContent = "Show 2 hops"; btn.setAttribute("aria-pressed", "false");
      if (live) live.textContent = "";
      open = false;
      return;
    }
    btn.disabled = true; btn.textContent = "Loading…";
    const first: FirstHop[] = [...svg.querySelectorAll<SVGElement>("[data-k]")].map((n) => ({ key: n.dataset.k!, x: Number(n.dataset.x), y: Number(n.dataset.y) }));
    const types = [...new Set(first.map((f) => f.key.split("/")[0]))];
    const shards = await Promise.all(types.map((t) => {
      const url = `${base}code/neighbours/${major}/${t}.json`;
      if (!shardCache.has(url)) shardCache.set(url, getJson(url, {}));
      return shardCache.get(url)!;
    }));
    index ??= getJson<{ rows: Row[] }>(`${base}index/objects.json`, { rows: [] }).then((j) => new Map(j.rows.map((r) => [r[0], r])));
    const rows = await index;
    const cx = W / 2, cy = H / 2, R = Math.min(W, H) / 2 - 36, R2 = R * 1.5;
    const placed = layoutSecond(secondRing(centre, first, Object.assign({}, ...shards)), first, cx, cy, R2);
    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", "hop2");
    for (const p of placed) {
      const line = document.createElementNS(NS, "line");
      for (const [k, v] of [["x1", p.px], ["y1", p.py], ["x2", p.x], ["y2", p.y]] as const) line.setAttribute(k, v.toFixed(1));
      g.append(line);
    }
    for (const p of placed) {
      const row = rows.get(p.key);
      const name = row ? `${LABEL[row[1]] ?? row[1]}${row[2] !== null ? ` ${row[2]}` : ""} "${row[3]}"` : p.key;
      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("cx", p.x.toFixed(1)); dot.setAttribute("cy", p.y.toFixed(1)); dot.setAttribute("r", String(Math.min(6, 2.5 + Math.sqrt(p.weight))));
      const title = document.createElementNS(NS, "title");
      title.textContent = `${name} (${RINGS[p.ring] ?? "related"} ${p.parent})`;
      const wrap = document.createElementNS(NS, row ? "a" : "g");
      if (row) wrap.setAttribute("href", `${base}objects/${row[0]}/`);
      wrap.append(title, dot);
      g.append(wrap);
    }
    // under the first ring, so its labels stay on top
    svg.insertBefore(g, svg.querySelector("line, circle, a, g"));
    const pad = Math.ceil(R2 - R + 24);
    svg.setAttribute("viewBox", `${-pad} ${-pad} ${W + 2 * pad} ${H + 2 * pad}`);
    btn.disabled = false; btn.textContent = "Hide 2 hops"; btn.setAttribute("aria-pressed", "true");
    if (live) live.textContent = placed.length ? `${placed.length} more objects two hops away` : "No further objects two hops away";
    open = true;
  });
}
