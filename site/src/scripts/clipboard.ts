/**
 * Copy to the clipboard (D89 B8, shared since D124 by the object page, the "Ask your agent" prompts and /mcp).
 */

/** The Clipboard API, else a selected textarea and execCommand (an http page has no Clipboard API). */
export async function copy(text: string): Promise<boolean> {
  try { await navigator.clipboard.writeText(text); return true; } catch { /* fall back */ }
  const ta = document.createElement("textarea");
  ta.readOnly = true;
  ta.style.cssText = "position:fixed;opacity:0";
  ta.value = text;
  document.body.append(ta);
  ta.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch { /* not supported */ }
  ta.remove();
  return ok;
}

/** A small button that copies `text` and says so for 1.5 s. */
export function copyButton(label: string, text: string): HTMLButtonElement {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "pill-btn";
  b.textContent = label;
  let timer = 0;
  b.addEventListener("click", async () => {
    b.textContent = (await copy(text)) ? "Copied" : "Copy failed";
    clearTimeout(timer);
    timer = window.setTimeout(() => { b.textContent = label; }, 1500);
  });
  return b;
}
