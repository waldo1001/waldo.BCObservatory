/**
 * The source stage (D60, docs/specs/source-embed.md): the original source, in the page, on one click.
 *
 * Video: the server renders a poster from i.ytimg.com; a click swaps in the player from youtube-nocookie.com, and the
 * page's own `data-seek` links seek it through the IFrame API's JSON protocol (no external script). Post: the server
 * renders a source card; when the blog allows framing, a click swaps in the post in a sandboxed frame without
 * `allow-top-navigation`, so a frame-busting script cannot take the page. Nothing third-party loads before the
 * click except the poster or card image. Without JavaScript every control is a plain link to the source.
 */

export const YT_ORIGIN = "https://www.youtube-nocookie.com";
const LISTEN_MS = 250;
const CUE_MS = 1200;
const STEP_VH = 40;
const HEIGHT_KEY = "bcobs-stage-h";

export function ytEmbedUrl(id: string, start: number, origin: string): string {
  const q = new URLSearchParams({ enablejsapi: "1", autoplay: "1", rel: "0", playsinline: "1", origin });
  if (start > 0) q.set("start", String(Math.floor(start)));
  return `${YT_ORIGIN}/embed/${encodeURIComponent(id)}?${q}`;
}

/** A player message: a JSON string with an `event`; anything else is not ours. */
export function parsePlayerMessage(data: unknown): { event: string; info?: unknown } | null {
  if (typeof data !== "string" || data[0] !== "{") return null;
  try { const m = JSON.parse(data); return typeof m?.event === "string" ? m : null; } catch { return null; }
}

/** A plain primary click: modifier and middle clicks keep the native link (open at that second on YouTube). */
export const plainClick = (e: Pick<MouseEvent, "button" | "metaKey" | "ctrlKey" | "shiftKey" | "altKey">) =>
  e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;

interface Stage { open(focus: boolean): void; seek?(t: number): void; el: HTMLElement }

const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

function reveal(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  if (r.top < 0 || r.top > innerHeight - 120) el.scrollIntoView({ block: "start", behavior: reduced() ? "auto" : "smooth" });
  el.classList.remove("is-cued");
  void el.offsetWidth;
  el.classList.add("is-cued");
  setTimeout(() => el.classList.remove("is-cued"), CUE_MS);
}

/** Swap the server's `<a data-stage-play>` for a button with the same class and name: a button once it is one. */
function asButton(a: HTMLAnchorElement): HTMLButtonElement {
  const b = document.createElement("button");
  b.type = "button";
  b.className = a.className;
  for (const k of ["aria-label", "title"]) { const v = a.getAttribute(k); if (v) b.setAttribute(k, v); }
  b.innerHTML = a.innerHTML;
  a.replaceWith(b);
  return b;
}

function videoStage(el: HTMLElement): Stage {
  const id = el.dataset.video!;
  const title = el.dataset.title ?? "";
  const frame = el.querySelector<HTMLElement>(".stage-frame")!;
  const poster = frame.querySelector<HTMLImageElement>(".stage-poster");
  // the server ships hqdefault (exists for every video); YouTube answers a missing maxres with a 120x90 placeholder
  if (poster) {
    const hi = new Image();
    hi.addEventListener("load", () => { if (hi.naturalWidth > 120) poster.src = hi.src; });
    hi.src = `https://i.ytimg.com/vi/${encodeURIComponent(id)}/maxresdefault.jpg`;
  }
  let iframe: HTMLIFrameElement | null = null;
  let ready = false;
  let listen: ReturnType<typeof setInterval> | undefined;
  const queue: unknown[] = [];
  const post = (msg: Record<string, unknown>) => {
    const m = { ...msg, id: "bcobs", channel: "widget" };
    if (!ready || !iframe?.contentWindow) { queue.push(m); return; }
    iframe.contentWindow.postMessage(JSON.stringify(m), YT_ORIGIN);
  };
  addEventListener("message", (e) => {
    if (!iframe || e.origin !== YT_ORIGIN || e.source !== iframe.contentWindow) return;
    const m = parsePlayerMessage(e.data);
    if (!m) return;
    if (listen) { clearInterval(listen); listen = undefined; }
    if (!ready && (m.event === "onReady" || m.event === "initialDelivery" || m.event === "infoDelivery")) {
      ready = true;
      for (const q of queue.splice(0)) iframe.contentWindow!.postMessage(JSON.stringify(q), YT_ORIGIN);
    }
  });
  const load = (t: number, focus: boolean) => {
    if (iframe) return;
    iframe = document.createElement("iframe");
    iframe.className = "stage-player";
    iframe.src = ytEmbedUrl(id, t, location.origin);
    iframe.title = `YouTube video: ${title}`;
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.addEventListener("load", () => {
      // the handshake: say "listening" until the player answers, then commands flow
      const say = () => iframe?.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: "bcobs", channel: "widget" }), YT_ORIGIN);
      say();
      listen = setInterval(say, LISTEN_MS);
      setTimeout(() => { if (listen) { clearInterval(listen); listen = undefined; } }, 15_000);
    });
    frame.replaceChildren(iframe);
    el.dataset.state = "live";
    for (const b of document.querySelectorAll<HTMLElement>("[data-stage-open]")) b.setAttribute("aria-expanded", "true");
    if (focus) iframe.focus();
  };
  const play = frame.querySelector<HTMLAnchorElement>("a[data-stage-play]");
  if (play) asButton(play).addEventListener("click", () => load(0, true));
  poster?.addEventListener("click", () => load(0, true));
  return {
    el,
    open: (focus) => load(0, focus),
    seek: (t) => {
      if (!iframe) { load(t, false); return; }
      post({ event: "command", func: "seekTo", args: [t, true] });
      post({ event: "command", func: "playVideo", args: [] });
    },
  };
}

function frameStage(el: HTMLElement): Stage {
  const src = el.dataset.src!;
  const title = el.dataset.title ?? "";
  const site = el.dataset.site ?? new URL(src).hostname;
  let opened = false;
  const open = (focus: boolean) => {
    if (opened) return;
    opened = true;
    const wrap = document.createElement("div");
    wrap.className = "stage-frame stage-frame--page";
    let saved: string | null = null;
    try { saved = sessionStorage.getItem(HEIGHT_KEY); } catch { /* private mode */ }
    if (saved) wrap.style.height = saved;
    const doc = document.createElement("iframe");
    doc.className = "stage-doc";
    doc.src = src;
    doc.title = `${site}: ${title}`;
    doc.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms");
    doc.referrerPolicy = "strict-origin-when-cross-origin";
    // load fires on a refusal too: it means "attempted", not "shown"; the toolbar line is the honest fallback
    doc.addEventListener("load", () => { el.dataset.state = "live"; });
    wrap.append(doc);
    const keep = () => { try { sessionStorage.setItem(HEIGHT_KEY, `${wrap.getBoundingClientRect().height}px`); } catch { /* ignore */ } };
    new ResizeObserver(keep).observe(wrap);
    const bar = document.createElement("div");
    bar.className = "stage-toolbar";
    const taller = document.createElement("button");
    taller.type = "button";
    taller.className = "btn";
    taller.textContent = "Taller";
    taller.addEventListener("click", () => { wrap.style.height = `${wrap.getBoundingClientRect().height + innerHeight * STEP_VH / 100}px`; });
    const ext = document.createElement("a");
    ext.className = "btn";
    ext.href = src;
    ext.rel = "noopener";
    ext.target = "_blank";
    ext.textContent = `Open on ${site}`;
    const note = document.createElement("span");
    note.className = "mono-meta";
    note.textContent = "Not showing? The site may refuse to be framed; open it directly.";
    bar.append(taller, ext, note);
    el.querySelector(".stage-card")?.replaceWith(wrap, bar);
    el.dataset.state = "loading";
    for (const b of document.querySelectorAll<HTMLElement>("[data-stage-open]")) b.setAttribute("aria-expanded", "true");
    if (focus) doc.focus();
  };
  el.querySelector<HTMLAnchorElement>("a[data-stage-play]")?.addEventListener("click", (e) => {
    if (!plainClick(e)) return;
    e.preventDefault();
    open(true);
  });
  return { el, open };
}

/** Mount every stage on the page, the actions-row openers and the seek links. */
export function mountStages(root: ParentNode = document): void {
  const stages: Stage[] = [];
  for (const el of root.querySelectorAll<HTMLElement>("figure.stage")) {
    for (const img of el.querySelectorAll<HTMLImageElement>(".stage-hero, .stage-favicon")) {
      // a dead hotlink collapses to a text card, never a broken-image icon
      const drop = () => img.remove();
      if (img.complete && img.naturalWidth === 0 && img.src) drop(); else img.addEventListener("error", drop);
    }
    if (el.dataset.stage === "video") stages.push(videoStage(el));
    else if (el.dataset.stage === "frame") stages.push(frameStage(el));
  }
  const first = stages[0];
  if (!first) return;
  for (const b of document.querySelectorAll<HTMLAnchorElement>("[data-stage-open]")) {
    b.addEventListener("click", (e) => {
      if (!plainClick(e)) return;
      e.preventDefault();
      reveal(first.el);
      first.open(true);
    });
  }
  const video = stages.find((s) => s.seek);
  if (!video) return;
  document.addEventListener("click", (e) => {
    const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[data-seek]");
    if (!a || !plainClick(e)) return;
    const t = Number(a.dataset.seek);
    if (!Number.isFinite(t)) return;
    e.preventDefault();
    video.seek!(t);
    reveal(video.el);
  });
}
