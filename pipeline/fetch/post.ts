/**
 * Blog `fetched` (PLAN M3, D08, D34): the post body as plain text into the private vault,
 * vault/posts/<source>/<fileKey>.md (the layout check:leak reads). Never into the public repo.
 *
 * WordPress sources: the REST endpoint's rendered content for that post id (clean, no theme). Feed sources: the post
 * page, main content found by the usual article selectors. HTML becomes text with block breaks and fenced code kept
 * readable. Accepted only when the vault is a git checkout (the Mini), like community captions (D25). One fetch at a
 * time ("web" lane) with an honest user agent; a 404/410 skips the item (`unavailable`).
 */
import { resolve } from "node:path";
import * as cheerio from "cheerio";
import { exists, readText, writeText } from "../lib/fsx.js";
import { httpGet, type HttpGet } from "../lib/http.js";
import { fileKey, type ManifestItem } from "../lib/manifest.js";
import { vaultDir } from "../lib/paths.js";
import { sha256 } from "../lib/text.js";
import type { StageHandler } from "../orchestrator/execute.js";

export const MIN_WORDS = 40;
const CONTENT_SELECTORS = [".entry-content", ".post-content", ".post-body", "article .content", "article", "main", "#content", ".content"];

export const postKey = (item: Pick<ManifestItem, "id">) => item.id.split("/").slice(2).join("/");
export const postRawPath = (item: Pick<ManifestItem, "id" | "source">, vault = vaultDir()) => resolve(vault, "posts", item.source, `${fileKey(postKey(item))}.md`);
export const vaultReady = () => exists(resolve(vaultDir(), ".git"));

/** HTML → readable text: headings, paragraphs, list items and code blocks on their own lines; scripts and chrome gone. */
export function htmlToText(html: string): string {
  const $ = cheerio.load(html);
  $("script, style, noscript, iframe, svg, nav, header, footer, form, .sharedaddy, .jp-relatedposts, .comments, #comments").remove();
  $("pre").each((_, el) => { $(el).replaceWith(`\n\n\`\`\`\n${$(el).text().trim()}\n\`\`\`\n\n`); });
  $("br").replaceWith("\n");
  $("h1, h2, h3, h4, h5, h6, p, li, blockquote, tr, div, section").each((_, el) => { $(el).prepend("\n").append("\n"); });
  return $.root().text().replace(/ /g, " ").replace(/[ \t]+\n/g, "\n").replace(/\n[ \t]+/g, "\n").replace(/[ \t]{2,}/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}

/** The main content of a full post page. */
export function mainContent(html: string): string {
  const $ = cheerio.load(html);
  for (const sel of CONTENT_SELECTORS) {
    const el = $(sel).first();
    if (el.length && el.text().trim().split(/\s+/).length >= MIN_WORDS) return htmlToText($.html(el));
  }
  return htmlToText($("body").html() ?? html);
}

export interface PostSource { rest?: string; ua?: "default" | "browser" }

export async function fetchPostText(item: ManifestItem, src: PostSource, http: HttpGet): Promise<string> {
  const key = postKey(item);
  if (src.rest && /^\d+$/.test(key)) {
    const url = `${src.rest.replace(/\/+$/, "")}/${key}?_fields=content`;
    const j = (await (await http(url, { ua: src.ua, accept: "application/json" })).json()) as { content?: { rendered?: string } };
    const text = htmlToText(String(j.content?.rendered ?? ""));
    if (text.split(/\s+/).length >= MIN_WORDS) return text;
  }
  return mainContent(await (await http(item.url, { ua: src.ua, accept: "text/html" })).text());
}

export function postFetched(sources: Map<string, { rest?: string; user_agent?: "default" | "browser" }>, http: HttpGet = httpGet): StageHandler {
  return {
    accepts: (item) => vaultReady(),
    lane: "web",
    run: async (item) => {
      const f = sources.get(item.source) ?? {};
      let text: string;
      try { text = await fetchPostText(item, { rest: f.rest, ua: f.user_agent }, http); } catch (e) {
        if (/HTTP (404|410)\b/.test((e as Error).message)) return { skip: "unavailable", data: { reason: (e as Error).message.slice(0, 200) } };
        throw e;
      }
      const words = text.split(/\s+/).filter(Boolean).length;
      if (words < MIN_WORDS) return { skip: "no-content", data: { words } };
      const p = postRawPath(item);
      if (!exists(p) || readText(p) !== `${text}\n`) writeText(p, `${text}\n`);
      return { output_hash: sha256(text), data: { path: `vault:posts/${item.source}/${fileKey(postKey(item))}.md`, words } };
    },
  };
}
