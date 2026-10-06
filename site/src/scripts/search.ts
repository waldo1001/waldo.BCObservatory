/**
 * Site search over the same index the MCP server uses (data/index/pages-<n>.json, served under index/). Loaded on
 * demand; scoring is plain and deterministic: an exact object reference ("table 18") first, then title, tags and
 * summary matches per query word.
 */
export interface Row { path: string; type: string; title: string; summary: string; tier: string; system?: string | null; date?: string | null; tags?: string[]; status?: string }

const TYPE: Record<string, string> = { topic: "topic hub", feature: "roadmap feature", object: "AL object", localization: "localization", video: "video", post: "community post", source: "source", digest: "weekly digest" };
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const words = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s.-]/gu, " ").split(/\s+/).filter((w) => w.length > 1 || /\d/.test(w));

export function score(r: Row, q: string): number {
  const ws = words(q);
  if (!ws.length) return 0;
  const ref = /^(table|page|codeunit|report|enum|query|xmlport|interface|permissionset)\s*(\d+)$/i.exec(q.trim());
  if (ref && r.path === `objects/${ref[1].toLowerCase()}/${ref[2]}`) return 1000;
  const title = r.title.toLowerCase(), tags = (r.tags ?? []).join(" ").toLowerCase(), summary = r.summary.toLowerCase();
  let s = 0;
  for (const w of ws) {
    const t = title.includes(w) ? 3 : 0, g = tags.includes(w) ? 2 : 0, m = summary.includes(w) ? 1 : 0;
    if (!t && !g && !m) return 0; // every word must match somewhere
    s += t + g + m;
  }
  if (title === q.toLowerCase().trim()) s += 10;
  if (r.type !== "object") s += 0.5; // hubs before the 16k object pages on a tie
  return s;
}

let rowsPromise: Promise<Row[]> | null = null;
/** The whole index (manifest, then every shard), fetched once per page. */
export function loadRows(base: string): Promise<Row[]> {
  return (rowsPromise ??= (async () => {
    const man = await (await fetch(`${base}index/index-manifest.json`)).json();
    let rows: Row[] = [];
    for (const s of man.shards) rows = rows.concat(await (await fetch(`${base}index/${s.file}`)).json());
    return rows;
  })());
}

export async function mountSearch(root: HTMLElement): Promise<void> {
  const base = root.dataset.base ?? "/";
  const input = root.querySelector<HTMLInputElement>("input[name=q]")!;
  const out = root.querySelector<HTMLElement>(".results")!;
  const status = root.querySelector<HTMLElement>(".status")!;
  const type = root.querySelector<HTMLSelectElement>("select[name=type]")!;
  const params = new URLSearchParams(location.search);
  input.value = params.get("q") ?? "";
  type.value = params.get("type") ?? "";
  status.textContent = "Loading the index...";
  let rows: Row[] = [];
  try { rows = await loadRows(base); } catch { status.textContent = "The search index is not available right now."; return; }
  const run = () => {
    const q = input.value.trim();
    const url = new URL(location.href);
    if (q) url.searchParams.set("q", q); else url.searchParams.delete("q");
    if (type.value) url.searchParams.set("type", type.value); else url.searchParams.delete("type");
    history.replaceState(null, "", url);
    if (!q) { out.innerHTML = ""; status.textContent = `${rows.length.toLocaleString("en")} pages indexed. Try "table 18", "Sales-Post" or "Belgium".`; return; }
    const hits = rows.filter((r) => !type.value || r.type === type.value).map((r) => ({ r, s: score(r, q) })).filter((h) => h.s > 0)
      .sort((a, b) => b.s - a.s || a.r.title.localeCompare(b.r.title)).slice(0, 50);
    status.textContent = hits.length ? `${hits.length === 50 ? "First 50" : hits.length} results for "${q}"` : `No results for "${q}".`;
    out.innerHTML = hits.map(({ r }) => `<li><a class="row-title" href="${base}${esc(r.path)}/">${esc(r.title)}</a>
      <span class="row-meta"><span class="type-label"${r.system ? ` style="color: var(--sys-${esc(r.system)})"` : ""}>${TYPE[r.type] ?? r.type}</span><span class="badge ${esc(r.tier)}">${r.tier === "community" ? "community - not Microsoft" : r.tier === "mixed" ? "mixed - official and community" : "official - Microsoft"}</span>${r.date ? `<span class="mono-meta">${esc(r.date)}</span>` : ""}</span>
      <p class="meta">${esc(r.summary.length > 220 ? `${r.summary.slice(0, 217)}...` : r.summary)}</p><span class="mono-meta">${esc(r.path)}.md</span></li>`).join("");
  };
  let t = 0;
  input.addEventListener("input", () => { clearTimeout(t); t = window.setTimeout(run, 150); });
  type.addEventListener("change", run);
  root.querySelector("form")!.addEventListener("submit", (e) => { e.preventDefault(); run(); });
  run();
}
