/**
 * Page chrome shared by every page (Base.astro). A bundled module, not an inline script: inline, these lines were
 * repeated in each of 28k+ pages (about 43 MB of the site, which pushed the Pages build over its 900 MB budget on
 * 2026-10-07). Module scripts run after the document is parsed, and everything queried here is in the static HTML.
 */
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
  for (const b of document.querySelectorAll("[data-theme-toggle]")) b.addEventListener("click", () => {
    const root = document.documentElement;
    const now = root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = now === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("bcobs-theme", next); } catch {}
    dispatchEvent(new Event("bcobs-theme"));
  });
}
