/**
 * D89: the object page reads like a reference. Mounted from Page.astro's one module script (D76) on pages with a version
 * timeline, which every AL object page has and no other page has. Everything here is built from the markup the page
 * already ships (D88: nothing may add bytes to 25,646 object pages): an "On this page" list of the main column's
 * sections with counts and a back-to-top button (B1); a filter, an order and a compact one-line mode for member sections
 * of 12 rows or more (B2); "Changed in" chips per member section, set also from the timeline's changed majors, and the
 * member pills' titles (B3); the neighbourhood's legend lights a kind's lines and nodes (B6); an "Ask your agent" button
 * that opens the closing paragraph's bc-code-atlas calls with copy buttons and a prompt (B8). A hash naming a row (D86)
 * reveals, opens and scrolls to it, on load and on `hashchange`.
 * The pure helpers are in object-page-core.ts, tested.
 */
import { copyButton } from "./clipboard";
import {
  agentPrompt, clampColumns, currentSection, listItemName, MEMBER_SECTIONS, ringsByNode, MIN_ROWS, orderLabel, orderOptions, parsePill, pillTitle, revealPlan, rowMatches,
  sectionCount, sortOrder, tocWanted, transitionHref, versionChips, visibleRows, type Change, type Order, type RowFacts,
} from "./object-page-core";

type Attrs = Record<string, string>;
function el<K extends keyof HTMLElementTagNameMap>(tag: K, attrs: Attrs = {}, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (text !== undefined) e.textContent = text;
  return e;
}
const frame = (f: () => void) => { let id = 0; return () => { id ||= requestAnimationFrame(() => { id = 0; f(); }); }; };
const smooth = (): ScrollBehavior => (matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");

/** The siblings after a heading, up to the next h2: a markdown section, or the rest of a component's <section>. */
function sectionNodes(h: Element): Element[] {
  const out: Element[] = [];
  for (let n = h.nextElementSibling; n && n.tagName !== "H2"; n = n.nextElementSibling) out.push(n);
  return out;
}

/** B1: the section list, wide at the end of the side column (sticky), narrow in a closed details under the actions. */
function mountToc(): void {
  const main = document.querySelector<HTMLElement>(".columns > .main");
  const side = document.querySelector<HTMLElement>(".columns > .side");
  const h1 = document.querySelector<HTMLElement>(".page h1");
  if (!main || !side) return;
  const hs = [...main.querySelectorAll<HTMLElement>("h2[id]")];
  if (!tocWanted(hs.length, main.offsetHeight, innerHeight)) return;
  const nav = el("nav", { class: "otp", "aria-label": "On this page" });
  const ol = el("ol");
  nav.append(el("h2", {}, "On this page"), ol);
  const links = hs.map((h) => {
    const label = [...h.childNodes].filter((n) => n.nodeType === Node.TEXT_NODE).map((n) => n.textContent).join("").trim();
    const sib = sectionNodes(h);
    const table = sib.map((n) => (n.tagName === "TABLE" ? n : n.querySelector("table"))).find(Boolean) as HTMLTableElement | undefined;
    const ul = sib.find((n) => n.tagName === "UL");
    const count = sectionCount({
      small: h.querySelector("small")?.textContent,
      rows: table?.tBodies[0]?.rows.length,
      items: ul ? [...ul.children].map((li) => li.textContent ?? "") : undefined,
    });
    const a = el("a", { href: `#${h.id}` }, label);
    if (count !== null) a.append(el("span", { class: "mono-meta" }, count.toLocaleString("en")));
    const li = el("li");
    li.append(a);
    ol.append(li);
    return a;
  });
  // narrow: a closed details right under the actions row; choosing an entry closes it
  const d = el("details", { class: "otp-d" });
  d.append(el("summary", {}, `On this page · ${hs.length} sections`));
  d.addEventListener("click", (e) => { if ((e.target as Element).closest("a")) d.open = false; });
  (document.querySelector(".page .actions") ?? main).after(d);
  // wide when the side column sits beside the main one (measured, not a media query: a classic scrollbar moves the point)
  const place = () => {
    const wide = side.offsetLeft > main.offsetLeft;
    if (wide && nav.parentElement !== side) side.append(nav);
    if (!wide && nav.parentElement !== d) d.append(nav);
    d.hidden = wide;
  };
  place();
  addEventListener("resize", frame(place));
  // back to top, after the first screen; it focuses the title so the keyboard starts over too
  const top = el("button", { class: "totop", type: "button", "aria-label": "Back to top" }, "↑ Top");
  top.hidden = true;
  top.addEventListener("click", () => { scrollTo({ top: 0, behavior: smooth() }); h1?.focus({ preventScroll: true }); });
  document.body.append(top);
  h1?.setAttribute("tabindex", "-1");
  const mark = () => {
    const root = document.documentElement;
    const i = currentSection(hs.map((h) => h.getBoundingClientRect().top), innerHeight / 4, scrollY + innerHeight >= root.scrollHeight - 2);
    links.forEach((a, j) => (j === i ? a.setAttribute("aria-current", "location") : a.removeAttribute("aria-current")));
    top.hidden = scrollY <= innerHeight;
  };
  mark();
  addEventListener("scroll", frame(mark), { passive: true });
}

interface Row { el: HTMLElement; text: string; changes: Change[]; facts: RowFacts }
/** A member section with a toolbar (B2): its rows, what the toolbar has set, and how to show it. */
interface Members { h: HTMLElement; rows: Row[]; query: string; version: number | null; clamped: boolean; input: HTMLInputElement; chips: number[]; render: () => void }
const owner = new Map<Element, Members>();

/** B2, B3: the toolbar of one member section: filter, order, Full text, Changed in; compact rows by default where a column clamps. */
function mountMembers(h: HTMLElement, oldest: number): Members | null {
  const def = MEMBER_SECTIONS[h.id];
  const box = sectionNodes(h).find((n) => n.matches("div.table-scroll, ul")) as HTMLElement | undefined;
  if (!def || !box) return null;
  const table = box.querySelector("table");
  const host = table ? table.tBodies[0] : box;
  if (!host) return null;
  const els = [...host.children] as HTMLElement[];
  if (els.length < MIN_ROWS) return null;
  const headers = table ? [...(table.tHead?.rows[0]?.cells ?? [])].map((c) => c.textContent ?? "") : [];
  const rows: Row[] = els.map((r) => {
    const cells = (r as HTMLTableRowElement).cells;
    const pill = r.querySelector(".pill");
    const changes: Change[] = pill ? parsePill(pill.textContent ?? "") : [];
    let facts: RowFacts;
    if (cells) {
      const first = cells[1]?.firstChild;
      const no = Number(cells[0]?.textContent);
      facts = { no: cells[0]?.textContent?.trim() && Number.isFinite(no) ? no : null, name: (first?.nodeType === Node.TEXT_NODE ? first.textContent : cells[1]?.textContent)?.trim() ?? "", type: cells[2]?.textContent?.trim() ?? "", changes };
    } else {
      const code = r.firstElementChild?.tagName === "CODE" && r.firstChild === r.firstElementChild ? r.firstElementChild.textContent : null;
      facts = { no: null, name: listItemName(code, r.textContent ?? ""), type: "", changes };
    }
    return { el: r, text: r.textContent ?? "", changes, facts };
  });
  const clamp = clampColumns(h.id, headers);
  const m: Members = { h, rows, query: "", version: null, clamped: clamp !== null, input: el("input"), chips: [], render: () => {} };
  const bar = el("div", { class: "mt-bar" });
  const input = m.input;
  for (const [k, v] of Object.entries({ type: "search", placeholder: `Filter ${rows.length.toLocaleString("en")} ${def.noun}`, "aria-label": `Filter the ${def.noun}` })) input.setAttribute(k, v);
  bar.append(input);
  const orders = orderOptions(h.id, rows.some((r) => r.changes.length));
  if (orders.length > 1) {
    const sel = el("select", { "aria-label": `Order the ${def.noun}` });
    for (const o of orders) sel.append(el("option", { value: o }, orderLabel(h.id, o)));
    sel.addEventListener("change", () => { for (const i of sortOrder(rows.map((r) => r.facts), sel.value as Order)) host.append(rows[i].el); });
    bar.append(sel);
  }
  const clampBox = (table ?? box) as HTMLElement;
  if (clamp) {
    // compact: the long cells (or a list item up to its nested list) in a one-line box; the pill first so it stays visible
    for (const r of rows) {
      if (clamp === "item") {
        const x = el("div", { class: "mt-x" });
        const nested = r.el.querySelector(":scope > ul");
        while (r.el.firstChild && r.el.firstChild !== nested) x.append(r.el.firstChild);
        const pill = x.querySelector(":scope > .pill");
        if (pill) x.prepend(pill, " ");
        r.el.prepend(x);
      } else {
        for (const i of clamp) {
          const td = (r.el as HTMLTableRowElement).cells[i];
          if (!td) continue;
          const x = el("div", { class: "mt-x" });
          x.append(...td.childNodes);
          td.append(x);
        }
      }
    }
    clampBox.classList.add("mt-clamp");
    if (table && clamp !== "item") table.tHead?.rows[0]?.cells[clamp[0]]?.classList.add("mt-wide");
    // a row whose text is cut gets it as a tooltip, once laid out
    requestAnimationFrame(() => { for (const x of clampBox.querySelectorAll<HTMLElement>(".mt-x")) if (x.scrollHeight > x.clientHeight + 1) x.title = (x.textContent ?? "").replace(/\s+/g, " ").trim(); });
    // a click in a row opens it, unless it is on a link or a button, or ends a text selection
    clampBox.addEventListener("click", (e) => {
      const t = e.target as Element;
      if (!m.clamped || t.closest("a, button") || getSelection()?.toString()) return;
      let row: Element | null = t;
      while (row && row.parentElement !== host) row = row.parentElement;
      row?.classList.toggle("mt-open");
    });
    const full = el("button", { type: "button", class: "pill-btn", "aria-pressed": "false" }, "Full text");
    full.addEventListener("click", () => {
      m.clamped = !m.clamped;
      clampBox.classList.toggle("mt-clamp", m.clamped);
      full.setAttribute("aria-pressed", String(!m.clamped));
    });
    bar.append(full);
  }
  const status = el("span", { class: "mt-n", "aria-live": "polite" });
  bar.append(status);
  // B3: one version at a time, like the galaxy's version pill (D72); the pressed chip again returns to All
  const vs = versionChips(rows.map((r) => r.changes));
  const chipEls: HTMLButtonElement[] = [];
  const toTransition = el("a");
  if (vs) {
    const group = el("div", { class: "pills mt-v", role: "group", "aria-label": "Changed in" });
    group.append(el("span", { class: "mt-n" }, "Changed in"));
    for (const c of [null, ...vs]) {
      const b = el("button", { type: "button", class: "pill-btn", "aria-pressed": String(c === null) }, c ? `BC${c.version}` : "All");
      if (c) b.append(" ", el("small", {}, c.count.toLocaleString("en")));
      b.addEventListener("click", () => { m.version = c && m.version !== c.version ? c.version : null; m.render(); });
      chipEls.push(b);
    }
    toTransition.hidden = true;
    group.append(...chipEls, toTransition);
    bar.append(group);
    m.chips = vs.map((c) => c.version);
  }
  const empty = el("p", { class: "meta" }, `No ${def.noun} match.`);
  empty.hidden = true;
  box.before(bar);
  box.after(empty);
  m.render = () => {
    const vis = visibleRows(rows, m.query, m.version);
    let n = 0;
    rows.forEach((r, i) => { r.el.hidden = !vis[i]; if (vis[i]) n++; });
    status.textContent = m.query.trim() || m.version !== null ? `${n.toLocaleString("en")} of ${rows.length.toLocaleString("en")}` : "";
    empty.hidden = n > 0;
    chipEls.forEach((b, i) => b.setAttribute("aria-pressed", String((i ? m.chips[i - 1] : null) === m.version)));
    const href = m.version === null ? null : transitionHref(document.body.dataset.base ?? "/", m.version, oldest);
    toTransition.hidden = !href;
    if (href) { toTransition.href = href; toTransition.textContent = `every object changed in BC${m.version}`; }
  };
  input.addEventListener("input", () => { m.query = input.value; m.render(); });
  for (const r of rows) owner.set(r.el, m);
  return m;
}

/** D86: a search hit's hash (#field-20, #event-OnAfterPostSalesDoc) lands on its row, whatever the toolbar hides. */
function reveal(): void {
  let id = "";
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const t = id ? document.getElementById(id) : null;
  if (!t) return;
  const m = owner.get(t);
  const r = m?.rows.find((x) => x.el === t);
  if (m && r) {
    const plan = revealPlan({ query: m.query, version: m.version, matchesQuery: rowMatches(r.text, m.query), matchesVersion: m.version === null || r.changes.some((c) => c.version === m.version), clamped: m.clamped });
    if (plan.clearQuery) m.input.value = m.query = "";
    if (plan.clearVersion) m.version = null;
    if (plan.clearQuery || plan.clearVersion) m.render();
    if (plan.openRow) t.classList.add("mt-open");
  }
  t.scrollIntoView({ block: "start" });
}

/** B3: a changed major's label in the timeline sets that chip in every section that has it (All in the others). */
function mountTimeline(members: Members[]): void {
  for (const v of document.querySelectorAll<HTMLElement>(".tl li.changed .v")) {
    const ver = Number(/^BC(\d+)$/.exec(v.textContent?.trim() ?? "")?.[1]);
    const has = members.filter((m) => m.chips.includes(ver));
    if (!has.length) continue;
    const b = el("button", { type: "button", class: "v", "aria-label": `Show the members changed in BC${ver}` }, v.textContent ?? "");
    b.addEventListener("click", () => {
      for (const m of members) if (m.chips.length) { m.version = has.includes(m) ? ver : null; m.render(); }
      has[0].h.scrollIntoView({ block: "start", behavior: smooth() });
    });
    v.replaceWith(b);
  }
}

/** B6: pointing at or focusing a legend entry dims the diagram but that kind's lines and nodes. */
function mountNeighbourhood(): void {
  const svg = document.querySelector<SVGSVGElement>("section.nb svg");
  if (!svg) return;
  // lines and nodes are written from the same array in the same order (Neighbourhood.astro), the centre circle between them
  const rings = ringsByNode([...svg.querySelectorAll("line.e")].map((l) => l.getAttribute("class") ?? ""));
  [...svg.children].filter((n) => n.localName === "a" || n.localName === "g").forEach((n, i) => { if (rings[i]) n.classList.add(`r-${rings[i]}`); });
  for (const li of document.querySelectorAll<HTMLElement>(".nb-legend li")) {
    const ring = li.querySelector(".sw")?.classList[1];
    if (!ring) continue;
    const light = (on: boolean) => () => {
      svg.classList.toggle("dim", on);
      for (const x of svg.querySelectorAll(`.e.${ring}, .r-${ring}`)) x.classList.toggle("on", on);
    };
    li.addEventListener("pointerenter", light(true));
    li.addEventListener("pointerleave", light(false));
    li.addEventListener("focusin", light(true));
    li.addEventListener("focusout", light(false));
  }
}

/** B8: an "Ask your agent" button at the end of the actions row opens a copy of the closing paragraph, ready to copy. */
function mountAsk(): void {
  const h = document.getElementById("ask-your-agent");
  const actions = document.querySelector<HTMLElement>(".page .actions");
  if (!h || !actions) return;
  const ps: Element[] = [];
  for (let n = h.nextElementSibling; n?.tagName === "P" && ps.length < 2; n = n.nextElementSibling) ps.push(n);
  const isCall = (c: Element) => (c.textContent ?? "").startsWith("bcatlas_");
  const calls = [...(ps[0]?.querySelectorAll("code") ?? [])].filter(isCall).map((c) => c.textContent ?? "");
  if (!calls.length) return;
  const btn = el("button", { type: "button", class: "btn", "aria-expanded": "false", "aria-controls": "ask-pop" }, "Ask your agent");
  const pop = el("div", { id: "ask-pop", class: "ask-pop" });
  pop.hidden = true;
  for (const p of ps) {
    const c = p.cloneNode(true) as Element; // the paragraphs carry no ids
    for (const code of c.querySelectorAll("code")) if (isCall(code)) code.after(copyButton("Copy", code.textContent ?? ""));
    pop.append(c);
  }
  const title = document.querySelector(".page h1")?.textContent?.trim() ?? "";
  pop.append(copyButton("Copy as a prompt", agentPrompt(title, calls, ps[1]?.textContent?.trim() || null)));
  const set = (open: boolean) => { pop.hidden = !open; btn.setAttribute("aria-expanded", String(open)); };
  btn.addEventListener("click", () => set(pop.hidden));
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || pop.hidden || document.querySelector("dialog[open]")) return;
    set(false);
    btn.focus();
  });
  document.addEventListener("click", (e) => { if (!pop.hidden && !actions.contains(e.target as Node)) set(false); });
  actions.append(btn, pop);
}

export function mountObjectPage(): void {
  if (!document.querySelector("section.tl")) return;
  // B3: the pill titles left the HTML (2,526 pages); "changed in BC25, BC26" comes back here
  for (const p of document.querySelectorAll<HTMLElement>(".prose .pill")) {
    const c = parsePill(p.textContent ?? "");
    if (c.length) p.title = pillTitle(c);
  }
  // the timeline's first major ("BC23-25" gives 23) has no transition page before it
  const oldest = Number(/\d+/.exec(document.querySelector(".tl .timeline .v")?.textContent ?? "")?.[0] ?? 0);
  const members: Members[] = [];
  for (const h of document.querySelectorAll<HTMLElement>(".prose h2[id]")) {
    const m = mountMembers(h, oldest);
    if (m) members.push(m);
  }
  mountTimeline(members);
  mountNeighbourhood();
  mountAsk();
  mountToc();
  // popstate too: the finder (palette.ts) sets location.href, and a hit on the hash already in the URL fires no hashchange
  addEventListener("hashchange", reveal);
  addEventListener("popstate", reveal);
  if (location.hash) reveal();
}
