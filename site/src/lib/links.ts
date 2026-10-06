import { posix } from "node:path";
/**
 * Generated markdown links pages relatively (`../../localizations/be.md`, works on GitHub). On the site every page is a
 * directory URL: resolve each relative .md link against the page's own path and point it at that directory.
 */
export function siteLinks(html: string, base: string, pagePath: string): string {
  return html.replace(/href="([^":#?]+)\.md(#[^"]*)?"/g, (_m: string, rel: string, hash = "") =>
    `href="${base}${posix.normalize(posix.join(posix.dirname(pagePath), rel))}/${hash}"`);
}
