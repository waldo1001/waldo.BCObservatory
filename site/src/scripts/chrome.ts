/**
 * Page chrome shared by every page (Base.astro). A bundled module, not an inline script: inline, these lines were
 * repeated in each of 28k+ pages (about 43 MB of the site, which pushed the Pages build over its 900 MB budget on
 * 2026-10-07). Module scripts run after the document is parsed, and everything queried here is in the static HTML.
 */
import { PILL_KEY, installHref, pillVisible } from "./ask-agent-core";

/** D124: "Use it from your agent", after the week pill; not on home or /mcp, and gone for 90 days after ×. */
function mountAgentPill(menu: HTMLElement, base: string): void {
  const path = location.pathname;
  if (path === base || path === `${base}index.html` || path.startsWith(`${base}mcp/`)) return;
  let stored: string | null = null;
  try { stored = localStorage.getItem(PILL_KEY); } catch { /* no storage: show it */ }
  if (!pillVisible(stored, Date.now())) return;
  const pill = document.createElement("span");
  pill.className = "new-pill agent-pill";
  pill.innerHTML = '<a></a><button type="button" class="pill-x" aria-label="Hide for 90 days">×</button>';
  const a = pill.querySelector("a")!;
  a.href = installHref(base);
  a.textContent = "Use it from your agent →";
  pill.querySelector("button")!.addEventListener("click", () => {
    pill.remove();
    try { localStorage.setItem(PILL_KEY, String(Date.now())); } catch { /* hidden for this view only */ }
  });
  const week = menu.querySelector(".new-pill");
  if (week) week.after(pill); else menu.prepend(pill);
}

export function mountChrome(): void {
  // the header's height as --hdr-h, so a page can fill the rest of the viewport (the home galaxy, D70)
  const hdr = document.querySelector<HTMLElement>(".site-header");
  if (hdr) {
    const set = () => document.documentElement.style.setProperty("--hdr-h", `${hdr.offsetHeight}px`);
    set();
    if (window.ResizeObserver) new ResizeObserver(set).observe(hdr);
  }
  // a questions or version menu (D70, D72) closes on Esc, on a click outside it and on a pick (a same-page hash link
  // would leave it open)
  for (const d of document.querySelectorAll<HTMLDetailsElement>("details.ask")) {
    document.addEventListener("click", (e) => {
      const t = e.target as Element | null;
      if (d.open && (!t || !d.contains(t) || t.closest("a"))) d.open = false;
    });
    d.addEventListener("keydown", (e) => {
      if (!d.open) return;
      if (e.key.startsWith("Arrow")) e.stopPropagation();
      if (e.key === "Escape") { e.stopPropagation(); d.open = false; d.querySelector<HTMLElement>("summary")?.focus(); }
    });
  }
  // D90: the Theme and finder buttons do nothing without script, so they are built here (not shipped on 28,899 pages),
  // into the header's #menu: the Browse sheet under 900 px, the first tier of the header from 900 px. The lines below
  // label and wire them; palette.ts, mounted after this, finds the finder by [data-palette]
  const menu = document.querySelector<HTMLElement>(".site-header #menu");
  if (menu) {
    const tools = document.createElement("span");
    tools.className = "hdr-tools";
    tools.innerHTML = '<button class="icon-btn theme-btn" type="button" data-theme-toggle aria-label="Switch light or dark theme">◐</button><button class="icon-btn pal-btn" type="button" data-palette aria-label="Find an AL object (Ctrl+K)">⌘K</button>';
    menu.append(tools);
    mountAgentPill(menu, document.body.dataset.base ?? "/");
    // the sheet belongs to the bar: crossing 900 px closes it
    matchMedia("(min-width: 900px)").addEventListener("change", () => menu.hidePopover?.());
  }
  // D88 (A6): the finder button says Ctrl+K where there is no ⌘ key; the shortcut itself takes both (palette.ts)
  if (!/Mac|iPhone|iPad/.test(navigator.platform)) for (const b of document.querySelectorAll<HTMLElement>("[data-palette]")) b.textContent = "Ctrl+K";
  for (const b of document.querySelectorAll("[data-theme-toggle]")) b.addEventListener("click", () => {
    const root = document.documentElement;
    const now = root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = now === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("bcobs-theme", next); } catch {}
    dispatchEvent(new Event("bcobs-theme"));
  });
  // an object page's version timeline (VersionTimeline.astro): where the row scrolls, show the newest majors first.
  // Here rather than in the component, whose own module tag cost 130 bytes on each of 25,000 object pages (D76)
  for (const ol of document.querySelectorAll<HTMLElement>(".tl .timeline")) if (ol.scrollWidth > ol.clientWidth) ol.scrollLeft = ol.scrollWidth;
}
