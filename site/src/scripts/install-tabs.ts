/**
 * D124: the install section of /mcp as one tab per harness. The markup is one section per tab, in order, so the page
 * reads top to bottom without script; this turns it into a tablist, remembers the last tab and opens #install-<id>.
 */
import { copyButton } from "./clipboard.js";

export const TAB_KEY = "bcobs-install-tab";

/** The tab to open: the hash's (#install-<id>), else the remembered one, else the first. */
export function pickTab(hash: string, stored: string | null, ids: string[]): string {
  const fromHash = /^#install-([a-z-]+)$/.exec(hash)?.[1];
  if (fromHash && ids.includes(fromHash)) return fromHash;
  if (stored && ids.includes(stored)) return stored;
  return ids[0];
}

export function mountInstallTabs(): void {
  for (const pre of document.querySelectorAll<HTMLElement>("pre[data-copy]")) pre.append(copyButton("Copy", pre.querySelector("code")?.textContent ?? ""));
  const box = document.querySelector<HTMLElement>("[data-itabs]");
  if (!box) return;
  const panels = [...box.querySelectorAll<HTMLElement>(":scope > .itab")];
  const ids = panels.map((p) => p.id.replace(/^install-/, ""));
  const list = document.createElement("div");
  list.className = "itab-list";
  list.setAttribute("role", "tablist");
  list.setAttribute("aria-label", "Where you install it");
  const tabs = panels.map((p, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.id = `${p.id}-tab`;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-controls", p.id);
    b.textContent = p.querySelector("h3")?.textContent ?? ids[i];
    p.setAttribute("role", "tabpanel");
    p.setAttribute("aria-labelledby", b.id);
    return b;
  });
  const select = (id: string, focus = false, remember = true) => {
    tabs.forEach((b, i) => {
      const on = ids[i] === id;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
      panels[i].hidden = !on;
      if (on && focus) b.focus();
    });
    if (remember) try { localStorage.setItem(TAB_KEY, id); } catch { /* no storage */ }
  };
  tabs.forEach((b, i) => {
    b.addEventListener("click", () => select(ids[i]));
    b.addEventListener("keydown", (e) => {
      const n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? ids.length - 1 : -2;
      if (n === -2) return;
      e.preventDefault();
      select(ids[(n + ids.length) % ids.length], true);
    });
  });
  list.append(...tabs);
  box.prepend(list);
  box.classList.add("tabbed");
  let stored: string | null = null;
  try { stored = localStorage.getItem(TAB_KEY); } catch { /* no storage */ }
  const open = () => {
    const id = pickTab(location.hash, stored, ids);
    select(id, false, false);
    if (location.hash === `#install-${id}`) box.scrollIntoView();
  };
  open();
  addEventListener("hashchange", () => { if (location.hash.startsWith("#install-")) open(); });
}
