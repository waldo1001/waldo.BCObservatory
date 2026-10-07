/**
 * Design tokens (design/tokens.json, the Claude Design handoff, D42) as CSS custom properties. tokens.json stays the one
 * source: this module only maps it to variable names. Where the handoff says "TODO: not designed yet" the FILL values
 * below stand in until a design pass replaces them in tokens.json (a string value there means "not designed").
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const tokens = JSON.parse(readFileSync(resolve(process.cwd(), "..", "design", "tokens.json"), "utf8"));
const c = tokens.color;

/** A token value: plain string, or { value } with a contrast note; undefined when the token is a "TODO" note. */
const v = (t: unknown): string | undefined => {
  if (t && typeof t === "object" && "value" in (t as object)) return String((t as { value: unknown }).value);
  if (typeof t === "string" && !/^TODO|^none/.test(t)) return t;
  return undefined;
};

/** Stand-ins for what the handoff left undesigned (HANDOFF.md section 2). Each passes AA on its theme background. */
const FILL = {
  dark: {
    "tier-mixed-border": "#6B5FA8", "tier-mixed-text": "#C4B8FF",
    "ev-video-bg": "#2A1A2A", "ev-video-text": "#F0A6CF", "ev-blog-bg": "#13282A", "ev-blog-text": "#8FD6CC",
    "ev-roadmap-bg": "#2A2413", "ev-roadmap-text": "#FFD27A",
    "status-ga": "#9FDDB4", "status-preview": "#FFD27A", "status-other": "#9DB8FF",
    "diff-removed-bg": "#2A1618", "diff-removed-text": "#F2A7AE",
    // D64: guideline evidence, any kind added later, and the flagged review state (amber: never red)
    "ev-guideline-bg": "#22202E", "ev-guideline-text": "#C9C1F2", "ev-other-bg": "#1E222C", "ev-other-text": "#B4BCCB",
    "review-flagged": "#FFD27A",
  },
  light: {
    "surface-raised": "#ECEEF4", "accent-surface": "#FBF1DE",
    "tier-official-border": "#2447B8", "tier-official-text": "#2447B8",
    "tier-mixed-border": "#5B3FA8", "tier-mixed-text": "#4B3290",
    "review-border": "#8A93A6", "review-text": "#3A4356",
    "ev-learn-bg": "#E4EAFB", "ev-learn-text": "#2447B8", "ev-code-bg": "#E2F2E8",
    "ev-video-bg": "#F7E4EF", "ev-video-text": "#8E2460", "ev-blog-bg": "#DFF1EE", "ev-blog-text": "#14625A",
    "ev-roadmap-bg": "#FBF1DE", "ev-roadmap-text": "#7A4500",
    "status-ga": "#1B6B3F", "status-preview": "#7A4500", "status-other": "#2447B8",
    "diff-added-bg": "#E2F2E8", "diff-added-text": "#1B6B3F", "diff-removed-bg": "#FBE6E8", "diff-removed-text": "#9B1C2C",
    "g-edge": "#B7BFD0", "g-edge-active": "#2447B8", "g-star-active": "#131722",
    "ev-guideline-bg": "#ECE8FA", "ev-guideline-text": "#4B3290", "ev-other-bg": "#ECEEF4", "ev-other-text": "#3A4356",
    "review-flagged": "#7A4500",
  },
} as const;

function theme(name: "dark" | "light"): Record<string, string> {
  const t = c[name];
  const side = (o: any) => (o && typeof o === "object" ? o[name] : undefined);
  const out: Record<string, string | undefined> = {
    bg: v(t.background), surface: v(t.surface), "surface-raised": v(t.surfaceRaised ?? t.surfaceSunken),
    line: v(t.line), "line-strong": v(t.lineStrong), text: v(t.text), "text-2": v(t.textSecondary), muted: v(t.muted),
    link: v(t.link), "link-hover": v(t.linkHover), accent: v(t.accent), "accent-dot": v(t.accentDot ?? t.accent),
    "accent-surface": v(t.accentSurface), "primary-bg": v(t.primaryAction?.background), "primary-fg": v(t.primaryAction?.text),
    focus: v(t.focusRing),
    "g-bg": v(t.galaxy?.background), "g-core": v(t.galaxy?.coreGlow), "g-field": v(t.galaxy?.fieldStar),
    "g-edge": v(t.galaxy?.edge), "g-edge-active": v(t.galaxy?.edgeActive), "g-star-active": v(t.galaxy?.starActive),
    "tier-official-border": v(side(c.tier.official)?.border), "tier-official-text": v(side(c.tier.official)?.text),
    "tier-community-border": v(side(c.tier.community)?.border), "tier-community-text": v(side(c.tier.community)?.text),
    "review-border": v(side(c.review.unreviewed)?.border), "review-text": v(side(c.review.unreviewed)?.text),
    "ev-learn-bg": v(side(c.evidenceKind.learn)?.background), "ev-learn-text": v(side(c.evidenceKind.learn)?.text),
    "ev-code-bg": v(side(c.evidenceKind.code)?.background), "ev-code-text": v(side(c.evidenceKind.code)?.text),
    "diff-added-bg": v(side(c.diff)?.addedBackground), "diff-added-text": v(side(c.diff)?.addedText),
  };
  for (const [k, val] of Object.entries(FILL[name])) if (!out[k]) out[k] = val;
  for (const [id, hue] of Object.entries(c.system.hues as Record<string, number>)) out[`sys-${id}`] = String(c.system[name]).replace("{hue}", String(hue));
  const missing = Object.entries(out).filter(([, val]) => !val).map(([k]) => k);
  if (missing.length) throw new Error(`design/tokens.json: no ${name} value for ${missing.join(", ")}`);
  return out as Record<string, string>;
}

const decl = (o: Record<string, string>) => Object.entries(o).map(([k, val]) => `--${k}:${val};`).join("");

/** :root variables: dark by default (Deep field is dark-first), light on prefers-color-scheme or the theme toggle. */
export function tokenCss(): string {
  const ty = tokens.type, sp = tokens.space, r = tokens.radius, m = tokens.motion;
  const shared = decl({
    "font-ui": `'Bricolage Grotesque Variable', ${ty.family.ui}`, "font-mono": ty.family.mono,
    "page-max": sp.pageMaxWidth, gutter: sp.pageGutter, "section-gap": sp.sectionGap, "section-gap-home": sp.sectionGapHome,
    "column-gap": sp.columnGap, "card-pad": sp.cardPadding, "min-target": sp.minTarget,
    "r-badge": r.badge, "r-card": r.card, "r-panel": r.panel,
    "ease-fly": m.cameraFly.easing, "t-fly": m.cameraFly.duration, "t-panel": m.panelSlide.duration, "t-hover": m.hover.duration,
  });
  const dark = decl(theme("dark")), light = decl(theme("light"));
  return `:root{${shared}color-scheme:dark;${dark}}`
    + `@media (prefers-color-scheme: light){:root:not([data-theme="dark"]){color-scheme:light;${light}}}`
    + `:root[data-theme="light"]{color-scheme:light;${light}}`;
}

export const galaxyTokens = tokens.galaxy as { zoom: { galaxy: number; system: number; star: number } };
export const systemHues = c.system.hues as Record<string, number>;
