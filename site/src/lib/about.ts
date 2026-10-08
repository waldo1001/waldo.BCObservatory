/**
 * The About page (D83, docs/specs/about-page.md): the owner's hand-written text in site/src/about/about.md, the seven
 * "for who" cards, the count placeholders, and the markdown twin. No Astro imports: tests/unit/about.test.ts runs it.
 */
export interface Persona { who: string; ask: string; answer: string; links: { label: string; href: string }[] }
export interface AboutCounts {
  topics: number; objects: number; apps: number; localizations: number; features: number;
  videos: number; posts: number; changes: number; digests: number; sources: number;
}
export interface AboutRun { date: string; status: string; items_changed: number }
export type AboutSection = "who" | "why" | "how" | "forWho";

export const REPO = "https://github.com/waldo1001/waldo.BCObservatory";
export const MCP_COMMANDS = ["claude mcp add bc-observatory -- npx -y bc-observatory@latest", "claude plugin marketplace add waldo1001/waldo.BCObservatory"];
export const MCP_TOOLS = ["search", "ls", "cat", "get_object", "diff_object", "localization", "whats_new", "blog_footprint", "feedback"];

/** The seven cards of the spec's section 2.2, in that order. */
export function personas(base: string, repo = REPO): Persona[] {
  return [
    { who: "The AL developer on a deadline", ask: "Is this field still on Customer in BC30?",
      answer: "The object page has every field, with the versions it exists in and its obsolete state, straight from the code.",
      links: [{ label: "Table 18 Customer", href: `${base}objects/table/18/` }, { label: "Who subscribes to an event?", href: `${base}neighbourhood/?mode=events` }] },
    { who: "The partner planning an upgrade", ask: "What breaks between BC28 and BC30?",
      answer: "What changed per version and per object, which elements are obsolete or due for cleanup, and what Microsoft merged this week.",
      links: [{ label: "Version lens", href: `${base}code/versions/` }, { label: "Deprecation radar", href: `${base}code/deprecations/` }, { label: "This week's code changes", href: `${base}changes/week/` }] },
    { who: "The consultant with a Belgian customer", ask: "What does BE change in W1?",
      answer: "Each country page diffs the layer against W1, down to the field, and the galaxy draws it as a constellation.",
      links: [{ label: "Belgium", href: `${base}localizations/be/` }, { label: "Pick a country in the galaxy", href: `${base}#lens=pick:localization` }] },
    { who: "The person whose agent lies to them", ask: "Table 18, what is field 7?",
      answer: "Two commands, then ask. The answer comes with the page, its tier and its evidence. Telemetry Buddy tells you what happened last night; the observatory tells you what the code says should happen. Same agent, both servers.",
      links: [{ label: "Install the MCP server", href: `${base}mcp/` }, { label: "The four plugin skills", href: `${base}mcp/#plugin` }] },
    { who: "The blogger or channel owner", ask: "Where does my content touch Business Central?",
      answer: "Your source page has your footprint and a flight path through the galaxy. One pull request to sources.yaml gets you in. Derived only: your words stay on your blog.",
      links: [{ label: "Sources", href: `${base}sources/` }, { label: "Add your blog or channel", href: `${repo}/blob/main/sources.yaml` }, { label: "Content notice", href: `${repo}/blob/main/CONTENT-NOTICE.md` }] },
    { who: "The reader who suspects Learn is out of date", ask: "Does Learn still document something that is gone?",
      answer: "The drift report lists obsolete objects Learn still documents and new objects nobody documented yet.",
      links: [{ label: "Drift", href: `${base}drift/` }] },
    { who: "Me", ask: "Did that nightly actually land?",
      answer: "I use this every day from Claude Code. That is why the bugs get fixed, and why you should tell me about the ones I missed.",
      links: [{ label: "Report a problem", href: `${repo}/issues` }] },
  ];
}

const n = (x: number) => x.toLocaleString("en");

/** Replace every `{{key}}` with the formatted count; an unknown key is a build error, never a blank. */
export function fillCounts(md: string, counts: AboutCounts): string {
  return md.replace(/\{\{(\w+)\}\}/g, (_m, key: string) => {
    if (key === "pages") return n(totalPages(counts));
    if (!(key in counts)) throw new Error(`about.md: unknown count placeholder {{${key}}}`);
    return n(counts[key as keyof AboutCounts]);
  });
}

export function totalPages(c: AboutCounts): number {
  return c.topics + c.objects + c.apps + c.localizations + c.features + c.videos + c.posts + c.changes + c.digests + c.sources;
}

const HEADINGS: [AboutSection, string][] = [["who", "Who"], ["why", "Why"], ["how", "How"], ["forWho", "For who"]];

/** The text before the first `##` (the byline) and the four section bodies; a missing heading throws by name. */
export function splitSections(md: string): Record<AboutSection | "byline", string> {
  const out = { byline: "", who: "", why: "", how: "", forWho: "" };
  const parts = md.split(/^## (.+)$/m);
  out.byline = parts[0].trim();
  const found = new Map<string, string>();
  for (let i = 1; i < parts.length; i += 2) found.set(parts[i].trim(), (parts[i + 1] ?? "").trim());
  for (const [key, title] of HEADINGS) {
    const body = found.get(title);
    if (!body) throw new Error(`about.md: missing or empty section "## ${title}"`);
    out[key] = body;
  }
  return out;
}

/** The rendered HTML cut at the `<h2 id="how">` and `<h2 id="for-who">` headings, so the page can place the graphics. */
export function splitHtml(html: string): { whoWhy: string; how: string; forWho: string } {
  const cut = (s: string, id: string): [string, string] => {
    const i = s.search(new RegExp(`<h2[^>]*\\bid="${id}"`));
    if (i < 0) throw new Error(`about.md: rendered HTML has no heading with id "${id}"`);
    return [s.slice(0, i), s.slice(i)];
  };
  const [whoWhy, rest] = cut(html, "how");
  const [how, forWho] = cut(rest, "for-who");
  return { whoWhy, how, forWho };
}

/** The sections of "What is in it today", one line each, with the live counts. */
export function countRows(counts: AboutCounts, base: string): { label: string; count: number; href: string; text: string }[] {
  return [
    { label: "Topic hubs", count: counts.topics, href: `${base}topics/`, text: "Seeded from the Microsoft Learn tables of contents, linked to Learn." },
    { label: "AL objects", count: counts.objects, href: `${base}objects/`, text: "Every W1 and first-party app object of BC28 to BC30, from the code." },
    { label: "First-party apps", count: counts.apps, href: `${base}apps/`, text: "Microsoft's apps with their objects, Learn hubs, videos and posts." },
    { label: "Localizations", count: counts.localizations, href: `${base}localizations/`, text: "What each country layer adds to or changes in W1, down to the field." },
    { label: "Roadmap features", count: counts.features, href: `${base}features/`, text: "Business Central on the Microsoft 365 roadmap, with status." },
    { label: "Videos", count: counts.videos, href: `${base}videos/`, text: "Sessions as timestamped evidence." },
    { label: "Community posts", count: counts.posts, href: `${base}posts/`, text: "Blog posts as derived summaries with short quotes and a link to the original." },
    { label: "Code changes", count: counts.changes, href: `${base}changes/`, text: "Merged pull requests of Microsoft's repositories, joined to the objects they changed." },
    { label: "Weekly digests", count: counts.digests, href: `${base}digests/`, text: "What changed each week, with a deprecation radar. Also as RSS." },
    { label: "Sources", count: counts.sources, href: `${base}sources/`, text: "Each blog and channel with its footprint and flight path." },
  ];
}

/** One sentence each for the two graphics; the SVG `<desc>` and the twin print the same words. */
export const TELESCOPE_DESC = "Five sources (Microsoft Learn, microsoft/BCApps and the version history, the Microsoft 365 roadmap, YouTube, community blogs via sources.yaml) feed a nightly pipeline on a Mac Mini: a deterministic stage first (tree-sitter parses the code, validators check every id, evidence is attached), then models only on what changed (Haiku for facts, Sonnet for prose, Opus to review, which sets the review state), onto two outputs: the site with a markdown twin per page, and the MCP server with the plugin and an llms.txt per section.";
export const KEY_DESC = "The galaxy key: a circle is a hub (a star), a rounded square an AL object, a triangle a video, a bar a post, a dashed line crosses into another system, a dashed ring marks community coverage, and a bright ring marks what was lit this week.";

/** The markdown twin (/about.md): the same prose and counts, the graphics in words, the cards as a list. */
export function aboutMarkdown(md: string, counts: AboutCounts, cards: Persona[], run: AboutRun | null, site: string): string {
  const s = splitSections(fillCounts(md, counts));
  const abs = (href: string) => (href.startsWith("http") ? href : href.startsWith("#") ? `${site}about/${href}` : href.replace(/^\/[^/]*\/?/, site));
  const lines = [
    "# About BC Observatory", "", s.byline, "",
    "## Who", "", s.who, "",
    "## Why", "", s.why, "",
    "## How", "", `The pipeline, drawn on the site as a telescope: ${TELESCOPE_DESC}`, "", s.how, "", KEY_DESC, "",
    "## For who", "", s.forWho, "",
    ...cards.map((c) => `- **${c.who}**: "${c.ask}" ${c.answer} ${c.links.map((l) => `[${l.label}](${abs(l.href)})`).join(", ")}.`), "",
    "## For your agent", "",
    `Every page has a markdown twin (this file is one), every section an [llms.txt](${site}llms.txt), and the MCP server reads the same files: ${MCP_TOOLS.join(", ")}. What to ask and how to install it, in Claude Code and other clients: [MCP](${site}mcp.md).`, "",
    "```", ...MCP_COMMANDS, "```", "",
    "## What is in it today", "",
    ...countRows(counts, site).map((r) => `- [${r.label}](${r.href}): ${n(r.count)}. ${r.text}`), "",
    "## Housekeeping", "",
    `Last nightly: ${run ? `${run.date} (${run.status}, ${n(run.items_changed)} items new or changed)` : "none yet"}.`, "",
    "Code MIT, generated content CC BY 4.0; third-party material keeps its own terms. Unofficial; not affiliated with Microsoft.", "",
    `[Repository](${REPO}) · [AGENTS.md](${REPO}/blob/main/AGENTS.md) · [Plan](${REPO}/blob/main/docs/PLAN.md) · [Runbook](${REPO}/blob/main/docs/RUNBOOK.md) · [Content notice](${REPO}/blob/main/CONTENT-NOTICE.md) · [sources.yaml](${REPO}/blob/main/sources.yaml) · [llms.txt](${site}llms.txt) · [RSS](${site}rss.xml)`, "",
  ];
  return lines.join("\n");
}
