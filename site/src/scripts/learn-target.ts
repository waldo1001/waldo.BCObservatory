import { learnFromHash, learnRowIndex } from "./learn-target-core";

/** D98: a search hit's #learn=<path> lands a hub on that article's row in its Learn list. */
export function mountLearnTarget(): void {
  const land = () => {
    const url = learnFromHash(location.hash);
    if (!url) return;
    const links = [...document.querySelectorAll<HTMLAnchorElement>('.prose li > a[href^="https://learn.microsoft.com/"]')];
    const i = learnRowIndex(links.map((a) => a.href), url);
    if (i < 0) return;
    for (const old of document.querySelectorAll(".prose li.learn-target")) old.classList.remove("learn-target");
    const li = links[i].parentElement!;
    li.classList.add("learn-target");
    li.scrollIntoView({ block: "center" });
    links[i].focus({ preventScroll: true });
  };
  if (location.hash.startsWith("#learn=")) land();
  addEventListener("hashchange", land);
}
