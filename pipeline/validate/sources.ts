/** Schema + policy validation of sources.yaml. Policy rules are the content contract from CONTENT-NOTICE.md. */
import { validate } from "../lib/schema.js";
import type { SourceDef, SourcesDoc } from "../lib/config.js";

/** Only Microsoft-owned material may be tier official. Stefan Maron's history repos republish Microsoft's code. */
const OFFICIAL_REPO_OWNERS = new Set(["microsoft", "MicrosoftDocs"]);
const OFFICIAL_REPOS = new Set(["StefanMaron/MSDyn365BC.Sandbox.Code.History", "StefanMaron/MSDyn365BC.Code.History"]);
const OFFICIAL_CHANNELS = new Set(["UCLErzd6kpQ0DAJSGsGjtxbA"]);
const OFFICIAL_HOSTS = new Set(["www.microsoft.com", "learn.microsoft.com"]);

export interface SourcesValidation { ok: boolean; errors: string[]; warnings: string[] }

export function validateSourcesDoc(raw: SourcesDoc, applied: SourceDef[]): SourcesValidation {
  const errors: string[] = [];
  const warnings: string[] = [];
  const schema = validate("sources", JSON.parse(JSON.stringify(raw, dateReplacer)));
  errors.push(...schema.errors.map((e) => `schema: ${e}`));

  const ids = new Set<string>();
  for (const s of applied) {
    const at = `source ${s.id}`;
    if (ids.has(s.id)) errors.push(`${at}: duplicate id`);
    ids.add(s.id);

    if (s.tier === "official" && !isOfficial(s)) errors.push(`${at}: tier official is reserved for Microsoft-owned material`);
    if (s.full_text && s.tier !== "official" && !s.consent) errors.push(`${at}: full_text requires tier official or a consent block`);
    if (s.full_text && s.kind === "discovery") errors.push(`${at}: discovery sources never store content`);
    if (s.consent && s.tier === "official") warnings.push(`${at}: consent block on an official source is unnecessary`);
    if (s.kind === "blog" && !s.fetch?.feed && !s.fetch?.rest && !s.fetch?.scrape) errors.push(`${at}: blog needs fetch.feed, fetch.rest or fetch.scrape`);
    if (s.kind === "youtube" && s.full_text && !OFFICIAL_CHANNELS.has(s.channel_id ?? "") && !s.consent) errors.push(`${at}: community channel captions need consent for full_text`);
    if (s.kind === "code-git" && s.mode !== "metadata-only") errors.push(`${at}: code sources must be mode metadata-only (never vendor source text)`);
    if (s.kind === "github-pr" && s.mode !== "metadata-only") errors.push(`${at}: pull-request sources must be mode metadata-only (D61: no body, no patch)`);
    if (s.tier === "community" && !s.author?.name) warnings.push(`${at}: community source without author.name`);
  }
  return { ok: errors.length === 0, errors, warnings };
}

function isOfficial(s: SourceDef): boolean {
  if (s.repo) {
    const owner = s.repo.split("/")[0];
    if (OFFICIAL_REPO_OWNERS.has(owner) || OFFICIAL_REPOS.has(s.repo)) return true;
  }
  if (s.channel_id && OFFICIAL_CHANNELS.has(s.channel_id)) return true;
  try {
    if (s.kind === "roadmap-api" && OFFICIAL_HOSTS.has(new URL(s.fetch?.api ?? s.url).host)) return true;
  } catch { /* fall through */ }
  return false;
}
function dateReplacer(_k: string, v: unknown) {
  return v instanceof Date ? v.toISOString().slice(0, 10) : v;
}
