/**
 * A small GitHub REST client for the change pillar (D61): one GET with the API version, the token when there is one,
 * the ETag of the previous answer, and the rate-limit headers read back. No SDK.
 *
 * Token: `BCOBS_GITHUB_TOKEN` (an optional fine-grained PAT for manual and backfill runs, public read only), else
 * `GITHUB_TOKEN` (the nightly workflow passes the Actions token as step env: 1,000 requests an hour, ephemeral).
 * Unauthenticated (60 an hour) still carries a normal night. The token never appears in a message or a report.
 */
import { httpGet, ok, type HttpGet } from "./http.js";

export const GITHUB_API = "https://api.github.com";
/** Stop before the limit: the last few calls are left for whatever else runs this hour. */
export const RESERVE = 5;

export class GithubRateLimited extends Error {
  constructor(readonly reset: number | null) { super(`GitHub rate limit reached${reset ? `; resets ${new Date(reset * 1000).toISOString()}` : ""}`); this.name = "GithubRateLimited"; }
}
export class GithubError extends Error {
  constructor(readonly status: number, path: string) { super(`GitHub ${status} for ${path}`); this.name = "GithubError"; }
}

export const githubToken = (): string | undefined => process.env.BCOBS_GITHUB_TOKEN || process.env.GITHUB_TOKEN || undefined;

export interface GhResponse<T> { status: 200 | 304; json: T | null; etag: string | null; next: string | null; remaining: number | null; reset: number | null }

/** The `rel="next"` URL of a `link` header. */
export function nextLink(link: string | null): string | null {
  if (!link) return null;
  for (const part of link.split(",")) {
    const m = part.match(/<([^>]+)>\s*;\s*rel="next"/);
    if (m) return m[1];
  }
  return null;
}

/** Counted per process so a run can report its GitHub calls (run report `changes.api_calls`). */
let calls = 0;
export const githubCalls = () => calls;
export const resetGithubCalls = () => { calls = 0; };

/**
 * GET a GitHub API path (or a full URL from a `next` link). 304 when `etag` matches. Throws GithubRateLimited on an
 * exhausted limit (403/429 with remaining 0) and pre-emptively when fewer than RESERVE calls are left after this one.
 */
export async function ghGet<T = unknown>(path: string, o: { token?: string; etag?: string | null; http?: HttpGet } = {}): Promise<GhResponse<T>> {
  const url = path.startsWith("http") ? path : `${GITHUB_API}${path}`;
  const token = o.token ?? githubToken();
  const headers: Record<string, string> = { "x-github-api-version": "2022-11-28", ...(token ? { authorization: `Bearer ${token}` } : {}), ...(o.etag ? { "if-none-match": o.etag } : {}) };
  calls++;
  const res = await (o.http ?? httpGet)(url, { accept: "application/vnd.github+json", headers, raw: true, timeoutMs: 30_000 });
  const num = (h: string) => { const v = res.headers.get(h); return v === null ? null : Number(v); };
  const remaining = num("x-ratelimit-remaining"), reset = num("x-ratelimit-reset");
  if ((res.status === 403 || res.status === 429) && (remaining === 0 || res.headers.has("retry-after"))) throw new GithubRateLimited(reset);
  if (!ok(res.status)) throw new GithubError(res.status, url.replace(GITHUB_API, ""));
  const out: GhResponse<T> = {
    status: res.status === 304 ? 304 : 200, json: res.status === 304 ? null : ((await res.json()) as T),
    etag: res.headers.get("etag"), next: nextLink(res.headers.get("link")), remaining, reset,
  };
  if (remaining !== null && remaining < RESERVE) throw Object.assign(new GithubRateLimited(reset), { partial: out });
  return out;
}
