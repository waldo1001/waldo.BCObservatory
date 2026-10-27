/**
 * D124: "Ask your agent" on object, roadmap-feature and code-change pages, built from the page's own markup (the type
 * label and the h1) so no page carries a byte of it. On an object page that already has the B8 popover (D89: the
 * bc-code-atlas calls), the Observatory's prompts join that popover; elsewhere they get a button of their own.
 */
import { copyButton } from "./clipboard";
import { askKind, askPrompts, installHref } from "./ask-agent-core";

function promptsBlock(prompts: string[], base: string): DocumentFragment {
  const f = document.createDocumentFragment();
  const head = document.createElement("p");
  head.innerHTML = "<b>Ask the Observatory</b>";
  f.append(head);
  for (const text of prompts) {
    const p = document.createElement("p");
    const code = document.createElement("code");
    code.textContent = text;
    p.append(code, copyButton("Copy", text));
    f.append(p);
  }
  const more = document.createElement("p");
  more.className = "meta";
  more.append("No agent set up? ");
  const a = document.createElement("a");
  a.href = installHref(base);
  a.textContent = "Install the plugin →";
  more.append(a);
  f.append(more);
  return f;
}

export function mountAskAgent(): void {
  const label = document.querySelector(".page .identity .type-label")?.textContent ?? "";
  const kind = askKind(label);
  const actions = document.querySelector<HTMLElement>(".page .actions");
  const title = document.querySelector(".page h1")?.textContent?.trim();
  if (!kind || !actions || !title) return;
  const block = promptsBlock(askPrompts(kind, title), document.body.dataset.base ?? "/");
  const existing = document.getElementById("ask-pop");
  if (existing) { existing.append(block); return; }
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn";
  btn.textContent = "Ask your agent";
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "ask-pop");
  const pop = document.createElement("div");
  pop.id = "ask-pop";
  pop.className = "ask-pop";
  pop.hidden = true;
  pop.append(block);
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
