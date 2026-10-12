/**
 * D89: the object page reads like a reference. Mounted from Page.astro's one module script (D76) on pages with a version
 * timeline, which every AL object page has and no other page has. Everything here is built from the markup the page
 * already ships (D88: nothing may add bytes to 25,646 object pages): an "On this page" list of the main column's
 * sections with counts and a back-to-top button (B1). A hash naming a row (D86) is scrolled to on load and on
 * `hashchange`. The pure helpers are in object-page-core.ts, tested.
 */
import { currentSection, sectionCount, tocWanted } from "./object-page-core";

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

/** D86: a search hit's hash (#field-20, #event-OnAfterPostSalesDoc) lands on its row. */
function reveal(): void {
  let id = "";
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const t = id ? document.getElementById(id) : null;
  t?.scrollIntoView({ block: "start" });
}

export function mountObjectPage(): void {
  if (!document.querySelector("section.tl")) return;
  mountToc();
  addEventListener("hashchange", reveal);
  if (location.hash) reveal();
}
