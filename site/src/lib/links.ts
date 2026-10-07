import { posix } from "node:path";
/**
 * Generated markdown links pages relatively (`../../localizations/be.md`, works on GitHub). On the site every page is a
 * directory URL: resolve each relative .md link against the page's own path and point it at that directory.
 */
export function siteLinks(html: string, base: string, pagePath: string): string {
  return html.replace(/href="([^":#?]+)\.md(#[^"]*)?"/g, (_m: string, rel: string, hash = "") =>
    `href="${base}${posix.normalize(posix.join(posix.dirname(pagePath), rel))}/${hash}"`);
}

/**
 * Links to a second of this page's own video seek the in-page player (D60): `data-seek="<n>"` on every
 * `href="https://www.youtube.com/watch?v=<id>&t=<n>s"`, whatever the renderer did to the `&`. Links to other videos
 * keep navigating; the markdown twin is untouched.
 */
export function tagSeekLinks(html: string, videoId: string): string {
  const id = videoId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`<a href="(https://www\\.youtube\\.com/watch\\?v=${id}(?:&amp;|&#x26;|&#38;|&)t=(\\d+)s)"`, "g");
  return html.replace(re, (_m, href: string, t: string) => `<a href="${href}" data-seek="${t}"`);
}

/**
 * Every top-level `<table>` of rendered markdown goes into `div.table-scroll` (D74): the wrapper scrolls sideways on a
 * phone, the table stays a real table and fills the width. Idempotent: a table already directly inside the wrapper is
 * left alone. Rendered markdown has no nested tables.
 */
export function wrapTables(html: string): string {
  return html.replace(/(<div class="table-scroll">\s*)?(<table[\s>][\s\S]*?<\/table>)/g, (m: string, wrapped: string | undefined, table: string) =>
    wrapped ? m : `<div class="table-scroll">${table}</div>`);
}
