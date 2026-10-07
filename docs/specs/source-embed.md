# Source stage: the original source, in the page

Status: proposed, 2026-10-07. Decision: D60. Owner: waldo.
Scope: video pages, community post pages, then the surfaces listed in section 8.

## 1. Goal

A video page plays the video. A post page shows the post. Today both pages point away from the site with one
button ("Watch on YouTube", "Read the original on X") and a muted meta line; the reader leaves the observatory to
see what the page is about. After this change the reader clicks once and the source opens in place, above the
summary, with our chapters, quotes and features next to it. Chapter and quote timestamps seek the embedded
player instead of opening a new tab.

Everything the reader sees inside the stage is served by the source's own origin to the reader's browser. The
repository stores URLs, image dimensions and a flag; never a body, never an image. That is what keeps D08
("community derived only") intact, and it is the reason the feature can ship for every source without a new
consent round.

### Non-goals

- A reader mode that renders the text of `full_text: true` sources on our origin. `pipeline/render/post.ts`
  still writes derived pages for them. A reader mode is a separate decision.
- Storing posters, hero images or favicons in the repository or the vault.
- Injecting a provider's oEmbed `html`. It is third-party markup and an XSS surface; only scalar oEmbed fields
  are ever read (section 5.3).

### Design intent

Deep field, information first. The stage is a dark panel at the top of the main column: on a video page a 16:9
poster with a single primary-coloured play circle and a mono duration badge; on a post page a source card with
the post's own social image, the blog's favicon and name, the byline and one of our rights-cleared quotes. The
side column stays beside it, so the reader sees the thing and where it sits in the galaxy at the same time. One
click, no spinner before it, no third-party script before it.

## 2. Reader-facing behaviour

### 2.1 Video page

1. The page loads with the poster. Network before any click: one image from `i.ytimg.com`, nothing from
   `youtube.com`, no cookies.
2. Click the play circle, the poster, or the "Watch here" button in the actions row: the poster is replaced by
   the player from `youtube-nocookie.com`, autoplaying. Focus moves into the player.
3. Click a timestamp anywhere in the body (chapters, features, quotes, AL objects, evidence): the player seeks
   to that second and plays. If the player is not loaded yet it loads at that second. The stage scrolls into
   view when it is off screen and flashes a short accent ring. Focus stays on the link.
4. Modifier-click or middle-click on a timestamp keeps the native link, so "open at 0:47 on YouTube in a new
   tab" still works. Without JavaScript every link and the play affordance go to YouTube as today.
5. The caption under the stage shows the kind tag, channel, date, and a "Watch on YouTube" link as the escape
   hatch.

### 2.2 Post page, blog allows framing (`preview.embeddable: true`)

1. The page loads with the source card: hero image (the post's `og:image`, lazy), favicon and site name, byline
   `author · date · words · about N min`, one pull-quote, and two actions: "Show the post here" (primary) and
   "Read on <site>".
2. "Show the post here" (or "Read it here" in the actions row) replaces the card with the post in a sandboxed
   frame, 70vh tall, with a drag handle and a "Taller" button. A toolbar keeps "Open on <site>" one click away
   and says "Not showing? The site may refuse to be framed; open it directly."
3. Links inside the frame open as normal tabs. The frame can never navigate our page.

### 2.3 Post page, blog refuses framing or was not probed (`embeddable: false | null`)

The source card is the whole stage. "Read on <site>" is the primary action. Nothing is framed. This is also what
the reader sees without JavaScript and for a source that opted out (`embed: false`).

### 2.4 Everywhere

- Dark and light theme. The video letterbox is dark in both; a framed blog keeps its own colours (usually
  light), which is the honest rendering of the source.
- Widths 1440, 1024, 390. The play circle stays 64px at 390; the card hero drops from 2:1 to 16:9.
- `prefers-reduced-motion`: no smooth scroll, no hover scale, the cue ring appears without animation. The
  global kill switch in `site/src/styles/site.css:134` already removes transitions.
- Keyboard: Tab reaches the play button; Enter opens the stage and focuses the player; Tab leaves the player
  through the caption link. The actions-row button carries `aria-expanded`.
- Screen reader: the play control is named "Play video: <title>, 8:48, from YouTube"; iframes carry `title`.

## 3. The `SourceStage` component (site)

Files: `site/src/components/SourceStage.astro` (new), `site/src/scripts/source-stage.ts` (new). Mounting
follows `site/src/components/PageGalaxy.astro:19-23`: a bundled `<script>` in the component imports the module
and mounts on `data-*` elements. No framework, no island.

### 3.1 Props

```ts
interface Props {
  kind: "video" | "post";
  title: string;             // page title: aria labels and iframe title
  url: string;               // canonical external URL (watch?v= or the post)
  sourceName: string;        // channel or blog name
  date?: string | null;
  // video
  videoId?: string; durationS?: number;
  // post
  author?: string | null; words?: number;
  preview?: { image?: string | null; image_alt?: string | null; image_w?: number | null; image_h?: number | null;
              site_name?: string | null; favicon?: string | null; embeddable: boolean | null;
              frame_url?: string | null; probed_at?: string };
  quote?: string | null;     // frontmatter quotes[0].text, rights-cleared, under 25 words
}
```

### 3.2 Data attributes (the script reads nothing else)

| attribute | video | frame | card |
|---|---|---|---|
| `data-stage` | `video` | `frame` | `card` |
| `data-state` | `poster`, `live` | `poster`, `loading`, `live` | `poster` |
| `data-video` | id | | |
| `data-title` | title | title | |
| `data-src` | | iframe URL (post URL, or `frame_url` in card frame mode) | |
| `data-frame-mode` | | `page` (phase 1) or `card` (phase 2, WordPress `/embed/`) | |

### 3.3 Placement

The route renders `<SourceStage>` as the first child of the default slot, directly above `<div class="prose">`,
in `site/src/pages/videos/[id]/index.astro` and `site/src/pages/posts/[...id]/index.astro`. `Page.astro` does
not place it.

Why not a full-width band between `.actions` and `.columns`: `.main` is `flex: 999 1 560px`, about 900px wide
at 1440, so the player is about 500px tall and the Overview heading stays near the fold. A 1160px band would be
650px tall and push the locator and connections below the fold. At 1024 and 390 both layouts collapse the same
way, so `.main` only wins and never loses.

### 3.4 The meta line becomes the caption

The pipeline writes the body's first paragraph as `[Watch on YouTube](…) · channel · date · 8:48 · tier ·
unreviewed` (posts: `[Read the post](…) · author · date · words · tier`), styled muted by
`.prose > p:first-child` (`site.css:79`). The stage caption now carries that information, so the route strips
the paragraph with a new `trimMeta(html)` next to `trimBody` in `site/src/lib/page.ts:23-27`: remove the first
`<p>` whose first child is an `<a>` with text `Watch on YouTube` or `Read the post`. The markdown twin
(`[id].md.ts`) serves the raw file and is unchanged.

### 3.5 The context button opens the stage

`site/src/layouts/Page.astro:46` renders the one contextual action. `context` gains `opens?: "stage"`. When set,
the anchor keeps its external `href` and gets `data-stage-open` and `aria-expanded="false"`. Labels: "Watch here"
on videos; "Read it here" on posts with `embeddable: true`; the current "Read the original on <site>" otherwise
(no `opens`). With JavaScript the script intercepts the click, opens the stage, scrolls it into view and focuses
the player; without JavaScript the link goes to the source as today.

## 4. Video stage

### 4.1 Poster (server-rendered)

```html
<figure class="stage" data-stage="video" data-state="poster" data-video="-SGaVGOkiF0" data-title="…">
  <div class="stage-frame">
    <img class="stage-poster" src="https://i.ytimg.com/vi/-SGaVGOkiF0/hqdefault.jpg" alt=""
         width="480" height="360" decoding="async" fetchpriority="high">
    <a class="stage-play" href="https://www.youtube.com/watch?v=-SGaVGOkiF0" data-stage-play
       aria-label="Play video: Introducing Payment Times Analysis, 8:48, from YouTube">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
    </a>
    <span class="stage-badge" aria-hidden="true">8:48</span>
  </div>
  <figcaption class="stage-caption">
    <span class="stage-source"><span class="kind video">video</span> Microsoft Dynamics 365 Business Central · 2023-12-11</span>
    <a class="stage-ext" href="https://www.youtube.com/watch?v=-SGaVGOkiF0" rel="noopener" target="_blank">Watch on YouTube</a>
  </figcaption>
</figure>
```

- `hqdefault.jpg` (480x360) exists for every video; `object-fit: cover` on the 16:9 frame crops its bars. On
  mount the script loads `maxresdefault.jpg` in a detached `Image()`; YouTube answers a missing maxres with a
  120x90 placeholder, so the swap condition is `naturalWidth > 120` on `load`, not `onerror`. One extra
  request at most; `sddefault` is not tried.
- `alt=""`: the title is the page h1 and the play control carries the accessible name.
- The play affordance is an `<a>` so it works without JavaScript. On mount the script swaps it for a
  `<button type="button">` with the same class and label, so assistive tech announces a button once it is one.
- Duration from `duration_s` with `mmss` (`site/src/lib/page.ts:31`), extended to `h:mm:ss` over an hour.

### 4.2 Live (built by the script)

```ts
export const YT_ORIGIN = "https://www.youtube-nocookie.com";
export function ytEmbedUrl(id: string, start: number, origin: string): string {
  const q = new URLSearchParams({ enablejsapi: "1", autoplay: "1", rel: "0", playsinline: "1", origin });
  if (start > 0) q.set("start", String(Math.floor(start)));
  return `${YT_ORIGIN}/embed/${encodeURIComponent(id)}?${q}`;
}
```

```html
<iframe class="stage-player" src="https://www.youtube-nocookie.com/embed/<id>?enablejsapi=1&autoplay=1&rel=0&playsinline=1&origin=<location.origin>&start=47"
        title="YouTube video: <title>" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"></iframe>
```

`origin` is `location.origin` at runtime, not a build constant: the player only posts events back to that
origin, and the dev server runs on another one.

### 4.3 Player protocol (IFrame API JSON protocol, no external script)

Outgoing, `iframe.contentWindow.postMessage(JSON.stringify(msg), YT_ORIGIN)`:

```json
{"event":"listening","id":"bcobs","channel":"widget"}
{"event":"command","func":"seekTo","args":[47,true],"id":"bcobs","channel":"widget"}
{"event":"command","func":"playVideo","args":[],"id":"bcobs","channel":"widget"}
{"event":"command","func":"pauseVideo","args":[],"id":"bcobs","channel":"widget"}
```

Incoming on `window` `message`, accepted only when `e.origin === YT_ORIGIN`, `e.source === iframe.contentWindow`
and `typeof e.data === "string"`, then parsed:

```json
{"event":"onReady","info":{},"id":"bcobs"}
{"event":"initialDelivery","info":{"duration":528,"currentTime":0,"videoData":{"video_id":"…","title":"…"}}}
{"event":"infoDelivery","info":{"currentTime":12.3,"playerState":1,"duration":528}}
{"event":"onStateChange","info":1}
```

`playerState`: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued. Handshake: on iframe `load`,
send `listening` every 250ms until the first message arrives, then stop. Commands queue until `onReady`.

```ts
export function parsePlayerMessage(data: unknown): { event: string; info?: unknown } | null {
  if (typeof data !== "string" || data[0] !== "{") return null;
  try { const m = JSON.parse(data); return typeof m?.event === "string" ? m : null; } catch { return null; }
}
```

### 4.4 Seek links

Build time: `tagSeekLinks(html, videoId)` in `site/src/lib/links.ts` matches
`href="https://www.youtube.com/watch?v=<id>&t=<n>s"` for this page's id only and appends `data-seek="<n>"`.
Links to other videos keep navigating. Chapters, features, AL objects, quotes and the evidence list gain it for
free; the markdown twin is untouched.

Runtime, one delegated click handler on `document`:

```
click on [data-seek], primary button, no modifier:
  preventDefault
  t = Number(el.dataset.seek)
  poster  -> load(t)                      // iframe with start=t, autoplay
  live    -> post seekTo [t, true]; post playVideo
  stage off screen -> scrollIntoView({ block: "start", behavior: reduced ? "auto" : "smooth" })
  stage.classList.add("is-cued"); remove after 1200ms
```

Focus never moves on a seek.

### 4.5 Phase 2 (video)

- Chapter rail: `<ol class="stage-chapters">` from `fm.chapters` under the player, each a `data-seek` link;
  `infoDelivery.currentTime` sets `aria-current="true"` on the last chapter whose `t` is at or below it.
- Sticky mini-player: `IntersectionObserver` on the stage; when it leaves the viewport while `playerState === 1`,
  add `.stage--mini` (fixed, bottom right, 320px, a close button that posts `pauseVideo` and removes the class).

## 5. Blog stage

### 5.1 Poster: the source card (both modes)

```html
<figure class="stage" data-stage="frame" data-state="poster" data-frame-mode="page" data-src="<post url>" data-title="…">
  <div class="stage-card">
    <img class="stage-hero" src="<og:image>" alt="" width="1024" height="1024" loading="lazy" decoding="async">
    <div class="stage-card-body">
      <p class="stage-site"><img class="stage-favicon" src="<favicon>" alt="" width="16" height="16" loading="lazy"> think about IT</p>
      <p class="stage-meta mono-meta">Steven Renders · 2025-12-11 · 1,240 words · about 6 min</p>
      <blockquote class="stage-quote">"Payables Agent and Sales Order Agent"</blockquote>
      <div class="stage-actions">
        <a class="btn primary" href="<post url>" data-stage-play rel="noopener">Show the post here</a>
        <a class="btn" href="<post url>" rel="noopener" target="_blank">Read on think about IT</a>
      </div>
    </div>
  </div>
</figure>
```

- `card` mode drops the first action and makes "Read on <site>" the primary button.
- Reading time: `readingMinutes(words) = max(1, round(words / 220))`.
- The summary is not repeated; the lead sits directly above the stage.
- The hero's `onerror` removes the image, so a dead hotlink collapses to a text card, never a broken-image icon.
- Missing `og:image`: no hero, the card starts at the site line.

### 5.2 Live (`frame` mode)

```html
<div class="stage-frame stage-frame--page" style="height: clamp(480px, 70vh, 960px)">
  <iframe class="stage-doc" src="<post url>" title="<site>: <title>"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
          referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>
</div>
<div class="stage-toolbar">
  <button type="button" class="btn" data-stage-taller>Taller</button>
  <a class="btn" href="<post url>" rel="noopener" target="_blank">Open on <site></a>
  <span class="mono-meta">Not showing? The site may refuse to be framed; open it directly.</span>
</div>
```

- Sandbox: the one capability deliberately missing is `allow-top-navigation`. A frame-busting script
  (`if (top !== self) top.location = …`) then throws inside the frame instead of taking our page; the worst
  case is an empty frame, never a redirect. `allow-scripts` with `allow-same-origin` is only a risk for
  same-origin content, and every blog is cross-origin. `allow-popups-to-escape-sandbox` lets the frame's links
  open normal tabs.
- Height: `resize: vertical; overflow: hidden` on the wrapper gives a drag handle in Chromium, Firefox and
  Safari; "Taller" adds 40vh per press for keyboard and touch. The height is kept per session in
  `sessionStorage` under `bcobs-stage-h`.
- `data-state="loading"` shows a shimmer until the iframe `load` event. `load` fires even when the blog refuses
  to connect, so it means "attempted", not "shown". A silent refusal is undetectable cross-origin. The probe
  (section 6) is therefore the only guard, and the toolbar is the honest fallback.
- Mixed content: when the probe's final URL is `http:`, `embeddable` is false. Browsers block http frames on an
  https page.

### 5.3 Phase 2 (blog)

- WordPress `/embed/` card. WordPress serves `<post>/embed/` as a framable card (title, excerpt, featured image,
  site icon, 600px wide) and posts its height to the parent: `{"message":"height","value":338,"secret":"…"}`.
  When the full page refuses framing but `/embed/` does not, the stage uses `data-frame-mode="card"`: height
  starts at 360px and follows `height` messages from the frame's origin; sandbox
  `allow-scripts allow-popups allow-popups-to-escape-sandbox`. The excerpt stays on the author's origin. The
  probe records `frame_url` in phase 1 so the data is ready. A live check on 2026-10-07 found every sampled
  registered blog framable in full, so the value of `/embed/` is for future hosts and is unproven.
- oEmbed scalars (`thumbnail_url`, `provider_name`, `author_name`) as a fallback when `og:*` is missing.

## 6. Pipeline: the preview probe

Deterministic, no LLM, on deltas only. It answers two questions per post: may we frame it, and what does its
card look like.

### 6.1 Module `pipeline/extract/preview-probe.ts` (new)

```ts
export type Frameable = boolean | null;
export function frameDecision(headers: Headers, finalUrl: string, ourOrigin: string): Frameable;
export function parseHead(html: string, baseUrl: string): { image; image_alt; image_w; image_h; site_name; favicon; oembed };
export async function probePost(url: string, o: { http: HttpGet; ua: keyof typeof USER_AGENTS; origin: string; now: Date }): Promise<PostProbe>;
export async function refreshPreviews(manifest: Manifest, opts: { dataDir: string; contentDir: string },
  o: { quota: number; ttlDays: number; concurrency: number; http: HttpGet; now: Date; deadline?: Date }): Promise<PreviewReport>;
export const previewPath = (dataDir: string, item: ManifestItem) => string;
```

`frameDecision`, in order:

1. Final URL not `https:` → `false` (mixed content).
2. Any `Content-Security-Policy` header containing `frame-ancestors` decides, and `X-Frame-Options` is then
   ignored, as browsers do. `'none'` or `'self'` → `false`; `*`, `https:`, our origin, or a `*.github.io`
   wildcard → `true`; any other list → `false`. `Content-Security-Policy-Report-Only` is ignored.
   `<meta http-equiv>` is not parsed: browsers ignore `frame-ancestors` in meta.
3. Else `X-Frame-Options` `DENY`, `SAMEORIGIN` or `ALLOW-FROM …` → `false`.
4. Else `true`.
5. Non-2xx after redirects, or a network error → `null`; an existing record is kept.

Fetching: one `GET`, `accept: text/html`, the source's `fetch.user_agent` (thinkaboutit.be needs `browser`),
20s timeout. Read the body stream only until `</head>` or 256KB, then abort. Parse with cheerio (already a
dependency), discard the body: nothing of it is written anywhere. `httpGet` in `pipeline/lib/http.ts` throws
on non-2xx, so it gets a `raw: true` option (or a sibling) that returns the `Response` for any status.
Politeness: 3 in flight overall, at most 1 per host, 1s gap per host.

### 6.2 Storage

- Truth per post: `data/preview/posts/<source>/<fileKey>.json`: `{ url, final_url, embeddable, frame_url, image,
  image_alt, image_w, image_h, site_name, favicon, status, probed_at }`.
- Derived per host: `data/preview/hosts.json`: `{ <host>: { embeddable, probed_at, agree: n, wp_embed: bool } }`.
  Used to infer `embeddable` for a brand-new post of a host whose last three probes agreed (so it renders with
  a decision the night it appears) and to key the re-probe cadence (a host whose fetch fails is re-probed
  early).
- Not under `data/index/`: that folder is served publicly as-is by `site/src/pages/index/[file].ts`.

Overrides and opt-outs are applied by the renderer, never by the probe, so a record stays factual and a policy
change needs no re-probe.

### 6.3 Orchestrator

`pipeline/orchestrator/nightly.ts`: a deterministic `phase("preview-probe", …)` after `code-pages` (line 279)
and before `indexes` (line 299), gated like the link passes (`stop_reason` is `done` or `memory`). It selects
published blog items with no record or a record older than `preview_ttl_days`, newest first, up to
`quotas.preview_probes`, probes them, then re-renders the touched posts through `postPublished` (a
`rerenderPostPages(items)` like `rerenderVideoPages`), so a post published tonight gets its preview tonight.

- `config/budget.json`: `quotas.preview_probes: 80`, `preview_ttl_days: 30`. `lanes.web` stays 3.
- `schemas/run-report.json`: `previews: { probed, refreshed, failed, rerendered, flipped }`; `flipped` lists
  hosts whose decision changed from `true` to `false`, named in the report's note. No issue is opened.
- Backfill: `scripts/probe-previews.ts`, `npm run probe:previews -- [--limit N] [--source id] [--force]`.
  594 posts at concurrency 3 take about five minutes. Documented in `docs/RUNBOOK.md`.

### 6.4 Schemas and config

`schemas/frontmatter.post.json`, optional `preview`:

```json
"preview": { "type": "object", "required": ["embeddable", "probed_at"], "additionalProperties": false, "properties": {
  "embeddable": { "type": ["boolean", "null"] },
  "frame_url":  { "type": ["string", "null"], "pattern": "^https://" },
  "image":      { "type": ["string", "null"], "pattern": "^https://" },
  "image_alt":  { "type": ["string", "null"], "maxLength": 160 },
  "image_w":    { "type": ["integer", "null"] }, "image_h": { "type": ["integer", "null"] },
  "site_name":  { "type": ["string", "null"] },
  "favicon":    { "type": ["string", "null"], "pattern": "^https://" },
  "probed_at":  { "type": "string" } } }
```

`og:title` and `og:description` are deliberately not stored: the description is the author's text, the title we
already have.

- `schemas/frontmatter.video.json`: optional `embed: boolean`. Absent means allowed; `false` comes only from the
  channel's `embed: false` or an override. No thumbnail field: the client-side maxres check costs one image
  request and no probe.
- `schemas/sources.json` and `SourceDef` in `pipeline/lib/config.ts`: optional `embed: boolean`, the author's
  opt-out, checked by `validate:sources`.
- `data/overrides/embeds.yaml` (new):

```yaml
# Hosts and items that must not be framed or postered, whatever the probe found (D60). Reason and date, always.
hosts: {}      # example.com: { frame: false, poster: false, reason: "author asked in #123", at: 2026-10-07 }
videos: []     # - { id: dQw4w9WgXcQ, reason: "...", at: 2026-10-07 }
```

### 6.5 Renderer

- `pipeline/render/post.ts`: `renderPostPage(item, x, src, now, preview?)` adds `preview` when a record or a
  host inference exists, then applies `src.embed === false` and `embeds.yaml` (`embeddable: false`,
  `image: null`, `favicon: null`). `postPublished` reads the record via `previewPath`. The `stable()`
  comparison is unchanged, so an unchanged preview does not bump `generated.at`.
- `pipeline/render/video.ts`: `embed: false` when the channel has `embed: false` or the id is in `embeds.yaml`.

### 6.6 Validation

`pipeline/validate/content.ts`: when `preview.embeddable === true`, `probed_at` must parse and be within 120
days (a stale "yes" is the one state that can mislead a reader); `image`, `favicon` and `frame_url` must be
https.

### 6.7 Tests

- `tests/unit/preview-probe.test.ts`: `frameDecision` over no headers; `DENY`; `SAMEORIGIN`; `ALLOW-FROM`;
  CSP `frame-ancestors 'none'`, `'self'`, `*`, `https:`, our origin, another origin; CSP without the directive;
  CSP plus XFO (CSP wins); report-only ignored; http final URL; 403; timeout. `parseHead` over absolute and
  relative `og:image`, missing image, `og:image:width/height`, `<link rel="icon">`, `shortcut icon`, none
  (fallback `/favicon.ico`), oEmbed discovery self-hosted and wordpress.com, `image_alt` truncation.
  `probePost` with a fake `http` returning `new Response(html, { headers })`. `refreshPreviews`: TTL, quota,
  host inference, a failed probe keeps the old record.
- `tests/unit/blog-posts.test.ts`: golden frontmatter with a preview record, without one (no `preview` key),
  with `embed: false` on the source; `validateContent` passes on each.
- `tests/unit/source-stage.test.ts`: `tagSeekLinks` (tags only this video's `&t=` links, preserves other hrefs
  and attributes), `ytEmbedUrl`, `parsePlayerMessage` (rejects non-JSON, non-string, missing event),
  `readingMinutes`, `trimMeta`.
- `tests/schema/sources.test.ts`: `embed: false` accepted, `embed: "no"` rejected.

## 7. Visual specification

All values are token variables from `site/src/lib/tokens.ts`; three new FILL entries per theme until a design
pass promotes them to `design/tokens.json`:

| token | dark | light | use |
|---|---|---|---|
| `--stage-bg` | `#05070B` | `#0E1118` | video letterbox, dark in both themes |
| `--stage-scrim` | `rgba(9,12,18,.55)` | same | poster gradient |
| `--stage-badge-bg` | `rgba(9,12,18,.8)` | same | duration badge |

CSS, a `.stage` block in `site/src/styles/site.css` after the markdown body rules, about 70 lines:

- `.stage`: `margin: 0 0 28px; border: 1px solid var(--line); border-radius: var(--r-panel); overflow: hidden;
  background: var(--surface)`.
- `.stage-frame`: `position: relative; aspect-ratio: 16 / 9; background: var(--stage-bg)`. `.stage-poster`,
  `.stage-player`: `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border: 0`.
- Poster scrim: `.stage-frame::after` with `linear-gradient(to top, var(--stage-scrim), transparent 45%)`,
  `pointer-events: none`, removed in `[data-state="live"]`.
- `.stage-play`: 64px circle (72px from 1024 up), centred, `background: var(--primary-bg); color:
  var(--primary-fg)`, 28px triangle, `box-shadow: 0 8px 32px rgba(0,0,0,.45)`, hover `transform: scale(1.04)`
  over `var(--t-hover)`, focus ring `2px solid var(--focus)` offset 4px. Target 64px, above the 44px minimum.
- `.stage-badge`: bottom right 10px, `font: 500 12px var(--font-mono); color: #fff; background:
  var(--stage-badge-bg); padding: 2px 6px; border-radius: var(--r-badge)`.
- `.stage-caption`: `display: flex; flex-wrap: wrap; gap: 6px 12px; justify-content: space-between; padding:
  10px 14px; font-size: 13px; color: var(--muted)`. Reuses `.kind.video` / `.kind.blog` from the evidence chips.
- `.stage-card`: `display: grid`. `.stage-hero`: `aspect-ratio: 2 / 1; max-height: 280px; width: 100%;
  object-fit: cover` (16:9 under 600px). `.stage-card-body`: `padding: var(--card-pad)`, `display: grid; gap:
  8px`. `.stage-quote` reuses the `.prose blockquote` rules. `.stage-actions` reuses `.actions` without the
  bottom margin.
- `.stage-frame--page`: `aspect-ratio: auto; resize: vertical; overflow: hidden; min-height: 320px; max-height:
  95vh; background: var(--surface-raised)`. `.stage-doc`: `width: 100%; height: 100%; border: 0; background:
  #fff`.
- `.stage-toolbar`: same flex as the caption, buttons `.btn`.
- `.stage.is-cued`: `outline: 2px solid var(--accent); outline-offset: 2px`.
- `[data-state="loading"] .stage-frame--page::before`: a shimmer on `--surface-raised`, static under reduced
  motion.

Contrast: white badge text on `--stage-badge-bg` over any poster passes AA; the caption uses the existing
muted-on-surface pair.

## 8. Surfaces and phases

The owner put every surface in scope on 2026-10-07. Phase 1 ships first; each phase 2 item is one PR.

| Surface | What | Phase |
|---|---|---|
| Video pages, post pages, probe, D60, notice | sections 2 to 7 | 1 |
| Video evidence chips with `t` on topic, feature and object pages | a `<dialog class="stage-dialog">` with a live video stage at `t`, `showModal()` like `scripts/palette.ts`, Esc closes and removes the iframe so audio stops; the chip keeps its href for modifier clicks and no-JS. The chip component is `site/src/components/EvidenceChip.astro` (D64, agreed 2026-10-07): an `<a>` whose href is the real deep link, carrying `data-kind="video|blog|learn|code|roadmap"` and, when there is a second, `data-t="47"`. This item delegates on `a[data-kind="video"][data-t]` only and does not edit the chip, the object page or the topic page | 2 |
| `site/src/pages/videos/index.astro`, digest pages | `mqdefault.jpg` (320x180, about 10KB) lazy posters per row; 617 third-party image requests on one page is a privacy and bandwidth change and gets its own line in D60 before it ships | 2 |
| `site/src/pages/sources/[id]/index.astro`, `posts/index.astro` | blog favicon in the identity row from `hosts.json`; one request per host. Channel avatars need yt-dlp channel metadata in `pipeline/ingest/youtube.ts` (open) | 2 |
| Video stage | chapter rail, sticky mini-player (4.5) | 2 |
| Blog stage | WordPress `/embed/` card, oEmbed scalars (5.3) | 2 |

## 9. Files

| File | Change |
|---|---|
| `site/src/components/SourceStage.astro` | new: poster modes, caption, data attributes, mounting script |
| `site/src/scripts/source-stage.ts` | new: `mountStage`, `mountSeekLinks`, `mountStageOpeners`, player protocol, poster upgrade, frame height, exported pure helpers |
| `site/src/lib/links.ts` | `tagSeekLinks(html, videoId)` |
| `site/src/lib/page.ts` | `trimMeta`, `hms`, `readingMinutes` |
| `site/src/layouts/Page.astro` | `context.opens === "stage"` → `data-stage-open`, `aria-expanded` |
| `site/src/pages/videos/[id]/index.astro` | stage first in slot, `trimMeta`, `tagSeekLinks`, context "Watch here" |
| `site/src/pages/posts/[...id]/index.astro` | stage with `fm.preview`, `fm.author`, `fm.words`, `fm.quotes[0]`; context "Read it here" when embeddable |
| `site/src/styles/site.css` | the `.stage` block |
| `site/src/lib/tokens.ts` | three FILL tokens per theme |
| `pipeline/extract/preview-probe.ts` | new: probe, parse, refresh |
| `pipeline/lib/http.ts` | raw response option |
| `pipeline/orchestrator/nightly.ts` | `preview-probe` phase, report field |
| `pipeline/render/post.ts`, `pipeline/render/video.ts` | `preview` block, `embed` flag, overrides |
| `pipeline/validate/content.ts` | preview checks |
| `schemas/frontmatter.post.json`, `frontmatter.video.json`, `sources.json`, `run-report.json` | fields above |
| `config/budget.json` | `preview_probes`, `preview_ttl_days` |
| `data/overrides/embeds.yaml` | new |
| `scripts/probe-previews.ts`, `package.json` | backfill CLI |
| `docs/RUNBOOK.md` | backfill and override how-to |
| `tests/unit/preview-probe.test.ts`, `source-stage.test.ts`, `blog-posts.test.ts`, `tests/schema/sources.test.ts` | section 6.7 |

## 10. Verification

1. `npm run typecheck`, `npm test`, `npm run validate:sources`, `npm run validate:content`.
2. `npm run probe:previews -- --limit 20` against live blogs; inspect `data/preview/` and three rendered post
   pages; `npm run check:leak` stays green (the probe writes no body).
3. `npm run site:build` before and after, `du -sh site/dist`: expected delta under 3MB (about 1.5KB per page
   over 1,211 pages plus one shared chunk and the CSS). The 900MB Pages check is unaffected.
4. Manual, at 1440, 1024 and 390, dark and light: poster, click to play, a chapter link seeks while playing, a
   chapter link loads at `start` when not yet playing, modifier-click still opens YouTube; a post with
   `embeddable: true` loads the frame, drag and "Taller" resize, "Open on <site>" works; a post with
   `embeddable: false` shows the card; both actions-row buttons open and scroll.
5. Keyboard only: Tab to play, Enter, focus lands in the player; Tab out to "Watch on YouTube"; `data-seek`
   links activate with Enter.
6. JavaScript disabled: the play affordance and the actions-row button go to the source; the card shows; no
   empty boxes anywhere.
7. Reduced motion: no smooth scroll, no scale, cue ring without animation.
8. Network panel before any click: only `i.ytimg.com` on a video page; only the `og:image` and favicon hosts on
   a post page; nothing from `youtube.com`; no cookies set.
9. VoiceOver on one video and one post page: control names, iframe titles, caption order.

## 11. Risks and open questions

- The poster is a third-party request before consent. D60 names it as the one exception. If that is ever
  unacceptable, the component switches to a two-click design (neutral placeholder, poster on hover or click)
  behind a flag.
- Blogs that allow framing but look broken framed (cookie banners, sticky headers, themes that assume 100vh).
  The sandbox cannot fix that. Mitigation: "Taller", the escape hatch, and `embeds.yaml` to force a host to
  card mode.
- Frame-busting scripts: neutralised by the missing `allow-top-navigation`; the symptom is an empty frame the
  toolbar line explains but the page cannot detect.
- CDN referrer checks (`i0.wp.com` and similar) may refuse the hotlinked hero. We send
  `strict-origin-when-cross-origin` on purpose so authors see the traffic and can block it; `onerror` collapses
  the hero cleanly.
- Posts whose canonical URL redirects to `http:` get `embeddable: false` by the mixed-content rule.
- iOS Safari may need a second tap after the iframe is inserted (autoplay policy). Acceptable: the poster is
  replaced by the player with YouTube's own play button.
- A host flipping from `true` to `false` is reported, not escalated (6.3).
- Channel avatars for source pages have no data source yet.

## 12. Proposed edits to other files (not applied)

To be made in the implementation PR, not before.

### `docs/DECISIONS.md`, append

- **D60 Sources are shown in place, click-to-load, and the content stays on its origin.** Video and post pages get
  a stage above the summary that plays the YouTube video, or shows the blog post, inside the page
  (`docs/specs/source-embed.md`). (a) Nothing third-party loads before the reader clicks, with one named
  exception: the poster image (`i.ytimg.com` for videos, the post's own `og:image` for blogs), lazily, hotlinked and
  never stored. A click loads the player from `youtube-nocookie.com` (no cookie domain, `enablejsapi` so the
  chapter and quote links seek the player) or the post in a sandboxed iframe without `allow-top-navigation`, so a
  frame-busting script cannot take the page. (b) Embeddability is probed, not assumed: the pipeline GETs each post
  once (`X-Frame-Options`, `Content-Security-Policy: frame-ancestors`, `og:*`, favicon, oEmbed discovery), reads
  only up to `</head>`, writes a `preview` block into the post frontmatter and re-probes after 30 days. A blog that
  refuses framing gets a source card with a "Read on <site>" primary action instead. (c) This does not change D08:
  the embedded content is served by the source's origin to the reader's browser; the repository stores URLs, image
  dimensions and a flag, and the probe never persists a body. (d) An author sets `embed: false` on their source to
  opt out of both the frame and the poster; the operator can force a host or an item off in
  `data/overrides/embeds.yaml`. The `.md` twins and `llms.txt` are unchanged: agents read the same pages as before,
  plus the preview URLs.

### `CONTENT-NOTICE.md`, new section "Embedded sources" before "Accuracy"

Video and post pages can show the original in the page. Nothing loads from the source until you click, except a
preview image (the YouTube poster or the post's own social image), which is linked, not copied. Videos play from
`youtube-nocookie.com`. Posts load in a restricted frame when the blog permits framing; otherwise the page shows a
card that links to the post. The original stays on its author's site in both cases; this repository stores only
the link, the image URL and whether framing is allowed. Authors who do not want their site framed or previewed set
`embed: false` on their entry in `sources.yaml`, or open an issue.

### `docs/PLAN.md` section 5, row after M4

| **M5 source stage** | the original in the page (`docs/specs/source-embed.md`, D60): click-to-load YouTube player with chapter seeking, blog post in a sandboxed frame or a source card, deterministic embeddability probe writing `preview` frontmatter, `embed` opt-out; phase 2: evidence chips open the player at `t`, list posters, source identity | 1 week | none: deterministic, no LLM |

### `AGENTS.md` layout table

`docs/` row: add "; `docs/specs/` holds feature specs".
