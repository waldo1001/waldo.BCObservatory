/** HTTP GET for ingest: one attempt, timeout, honest user agent by default. Callers record failures per source. */
export const USER_AGENTS = {
  default: "BCObservatory/0.1 (+https://github.com/waldo1001/waldo.BCObservatory)",
  // only for sources whose registry entry says user_agent: browser
  browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 15_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
} as const;

export type HttpGet = (url: string, opts?: { ua?: keyof typeof USER_AGENTS; accept?: string; timeoutMs?: number }) => Promise<Response>;

export const httpGet: HttpGet = async (url, opts = {}) => {
  const res = await fetch(url, {
    headers: { "user-agent": USER_AGENTS[opts.ua ?? "default"], accept: opts.accept ?? "*/*" },
    signal: AbortSignal.timeout(opts.timeoutMs ?? 45_000),
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res;
};

/** Decode the HTML entities that show up in feed and WordPress titles. */
export function decodeEntities(s: string): string {
  const named: Record<string, string> = {
    amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…", ndash: "–", mdash: "—",
    lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”", laquo: "«", raquo: "»", euro: "€", copy: "©", reg: "®", trade: "™",
  };
  return s
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => named[n.toLowerCase()] ?? m);
}
export function stripHtml(s: string): string {
  return decodeEntities(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}
