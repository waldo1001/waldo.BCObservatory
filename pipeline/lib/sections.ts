/**
 * One name per section and per instrument (D90, docs/specs/wayfinding.md): the nav, the crumbs, the index eyebrows,
 * page titles and h1 nouns, the home cards, About's counts, the root llms.txt and every section llms.txt read it.
 * No imports, so the site uses it at build time too (like systems.ts).
 */
export type SectionId = "topics" | "objects" | "apps" | "localizations" | "features" | "changes" | "releases" | "hotfixes" | "guidelines"
  | "videos" | "posts" | "digests" | "sources" | "mcp" | "about" | "instruments";

export interface Section {
  id: SectionId;
  /** Under the site base: "features/"; the instruments strip is an anchor on the home page, "#instruments". */
  path: string;
  /** The one name. */
  name: string;
  /** Singular and plural, for the index h1 ("80 roadmap features"). */
  noun?: [string, string];
  /** Nav group; absent: not in the nav. */
  group?: 1 | 2 | 3;
  /** Home card and About row; present: a content section. */
  blurb?: string;
  /** The galaxy system that is this section: its pages get no system chip. */
  system?: string;
}

/** Nav order first (three groups), then the sections the nav does not list. */
export const SECTIONS: readonly Section[] = [
  { id: "topics", path: "topics/", name: "Topics", noun: ["topic hub", "topic hubs"], group: 1,
    blurb: "Seeded from the Microsoft Learn tables of contents. What Learn documents per topic, linked to Learn." },
  { id: "objects", path: "objects/", name: "AL objects", noun: ["AL object", "AL objects"], group: 1,
    blurb: "Every W1 and first-party app object of BC28 to BC30, from the code: fields, events, procedures, versions, countries." },
  { id: "localizations", path: "localizations/", name: "Localizations", noun: ["country layer", "country layers"], group: 1, system: "localization",
    blurb: "What each country layer adds to or changes in W1, down to the field." },
  { id: "features", path: "features/", name: "Roadmap", noun: ["roadmap feature", "roadmap features"], group: 1,
    blurb: "Business Central on the Microsoft 365 roadmap, with the videos and Learn pages that cover each feature." },
  { id: "changes", path: "changes/", name: "Code changes", noun: ["code change", "code changes"], group: 2,
    blurb: "Merged pull requests of Microsoft's repositories, joined to the objects they changed." },
  { id: "guidelines", path: "guidelines/", name: "Quality rules", noun: ["BCQuality rule", "BCQuality rules"],
    blurb: "Microsoft's BCQuality knowledge base for AL: each rule with its good and bad examples, the objects it names and the pull requests that changed it." },
  { id: "videos", path: "videos/", name: "Videos", noun: ["video", "videos"], group: 2,
    blurb: "Sessions as timestamped evidence: chapters, key points, quotes that deep-link to the second." },
  { id: "posts", path: "posts/", name: "Posts", noun: ["community post", "community posts"], group: 2,
    blurb: "Blog posts as derived summaries with short quotes and a link to the original." },
  { id: "digests", path: "digests/", name: "Weekly digests", noun: ["weekly digest", "weekly digests"], group: 2,
    blurb: "What changed each week, with a deprecation radar. Also as RSS." },
  { id: "sources", path: "sources/", name: "Sources", noun: ["source", "sources"], group: 2, system: "sources",
    blurb: "Each blog and channel with its footprint and flight path through the galaxy." },
  { id: "mcp", path: "mcp/", name: "MCP", group: 3 },
  { id: "about", path: "about/", name: "About", group: 3 },
  { id: "apps", path: "apps/", name: "First-party apps", noun: ["first-party app", "first-party apps"],
    blurb: "Microsoft's first-party apps with their objects, Learn hubs, videos and posts." },
  { id: "releases", path: "releases/", name: "AL extension releases", noun: ["AL Language extension version", "AL Language extension versions"],
    blurb: "Microsoft's changelog of the AL Language extension, one page per version, with what was added to it later." },
  { id: "hotfixes", path: "hotfixes/", name: "Hotfix lists", noun: ["update", "updates"],
    blurb: "Microsoft's hotfix lists per Business Central update, each entry linked to the code changes that carry its ID." },
  { id: "instruments", path: "#instruments", name: "Instruments" },
];

const BY_ID = new Map(SECTIONS.map((s) => [s.id as string, s]));
/** The home cards and About's rows: the content sections in reading order. */
const CONTENT_ORDER: SectionId[] = ["topics", "objects", "apps", "localizations", "features", "changes", "guidelines", "releases", "videos", "posts", "digests", "sources"];

export function section(id: string): Section {
  const s = BY_ID.get(id);
  if (!s) throw new Error(`unknown section ${id}`);
  return s;
}

/** The eleven nav entries, in nav order. */
export function navSections(): Section[] {
  return SECTIONS.filter((s) => s.group !== undefined);
}

/** 1-based nav index of the first entry of each group after the first: [5, 10]. The header's CSS uses the same. */
export function navGroupStarts(): number[] {
  const nav = navSections();
  return nav.flatMap((s, i) => (i > 0 && s.group !== nav[i - 1].group ? [i + 1] : []));
}

export function contentSections(): Section[] {
  return CONTENT_ORDER.map((id) => section(id));
}

/** "80 roadmap features", "1 topic hub". */
export function countLabel(id: SectionId, n: number): string {
  const s = section(id);
  if (!s.noun) throw new Error(`section ${id} has no count noun`);
  return `${n.toLocaleString("en")} ${n === 1 ? s.noun[0] : s.noun[1]}`;
}

/** The heading of a section's llms.txt. */
export function llmsTitle(id: SectionId): string {
  return `# BC Observatory: ${section(id).name}`;
}

export interface Instrument { id: string; name: string; path: string }
/** The eight instruments, in the order of the home strip. Paths are under the site base. */
export const INSTRUMENTS: readonly Instrument[] = [
  { id: "versions", name: "Version lens", path: "code/versions/" },
  { id: "deprecations", name: "Deprecation radar", path: "code/deprecations/" },
  { id: "events", name: "Event explorer", path: "events/" },
  { id: "neighbourhood", name: "Neighbourhood explorer", path: "neighbourhood/" },
  { id: "countries", name: "Country heatmap", path: "localizations/#heat" },
  { id: "coverage", name: "Coverage heatmap", path: "coverage/" },
  { id: "drift", name: "Learn drift", path: "drift/" },
  { id: "week", name: "This week", path: "#lens=landed" },
];

export function instrument(id: string): Instrument {
  const i = INSTRUMENTS.find((x) => x.id === id);
  if (!i) throw new Error(`unknown instrument ${id}`);
  return i;
}
