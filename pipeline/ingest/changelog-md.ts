/**
 * The AL Language extension changelog (D85), parsed: one section per `## Version x.y` under the wave H1 that precedes
 * it, one entry per heading inside a section. Pure, no I/O. Microsoft's text is kept verbatim in `body_md`.
 *
 * Fenced blocks and HTML comments are tracked: a `#` line inside either is content, not a heading (the 18.0 section
 * holds `# On-premises` inside a bash fence and a commented-out `<!-- ### Runtime changes ... #### Miscellaneous -->`
 * draft). Wave and version lines end an open comment: a comment never swallows a section.
 */
import { slugify } from "../lib/text.js";

export interface ChangelogEntry { slug: string; level: 3 | 4; title: string; body_md: string; issues: number[] }
export interface ChangelogSection { version: string; wave: string | null; major: string | null; entries: ChangelogEntry[] }
export interface ParsedChangelog { sections: ChangelogSection[]; dropped_bytes: number; waves: string[] }
type Majors = Record<string, { label?: unknown }>;

const WAVE = /^# Business Central (.+)$/;
// "9.3 Update 3" is a version of its own in the changelog (three sections between 9.4 and 9.2)
const VERSION = /^## Version (\d\S*(?:\s+Update\s+\d+)?)\s*$/;
const HEADING = /^(#{1,4}) (.+)$/;
const FENCE = /^ {0,3}(```|~~~)/;
const ISSUE = /github\.com\/microsoft\/AL\/issues\/(\d+)/g;

/** "2026 release wave 2" → "29" through the `majors.<n>.label` of config/versions.json; anything else → null. */
export function waveMajor(wave: string | null, majors: Majors): string | null {
  if (!wave) return null;
  const w = wave.trim().toLowerCase().replace(/\s+/g, " ");
  for (const [n, m] of Object.entries(majors)) {
    const label = typeof m?.label === "string" ? m.label.replace(/\s*\(BC\d+[^)]*\)\s*$/, "").trim().toLowerCase() : null;
    if (label && label === w) return n;
  }
  return null;
}

const cleanTitle = (s: string) => s.replace(/\s*-->\s*$/, "").replace(/\s+/g, " ").trim().replace(/:+$/, "").trim();
function trimBody(lines: string[]): string {
  let end = lines.length;
  while (end > 0 && !lines[end - 1].trim()) end--;
  let start = 0;
  while (start < end && !lines[start].trim()) start++;
  return lines.slice(start, end).join("\n");
}
const issuesOf = (body: string) => [...new Set([...body.matchAll(ISSUE)].map((m) => Number(m[1])))].sort((a, b) => a - b);

interface Open { section: ChangelogSection; entry: { level: 3 | 4; title: string; lines: string[] } | null; intro: string[]; slugs: Map<string, number> }

export function parseChangelog(md: string, majors: Majors): ParsedChangelog {
  const lines = md.replace(/^﻿/, "").replace(/\r/g, "").split("\n");
  const sections: ChangelogSection[] = [];
  const waves: string[] = [];
  let wave: string | null = null;
  let cur: Open | null = null;
  let fence = false, comment = false;
  let firstWave = -1, lastEnd = -1;

  const flushIntro = (o: Open) => {
    if (o.section.entries.length === 0 && o.intro.some((l) => l.trim())) {
      const body_md = trimBody(o.intro);
      o.section.entries.push({ slug: "_intro", level: 3, title: "", body_md, issues: issuesOf(body_md) });
    }
    o.intro = [];
  };
  const closeEntry = (o: Open) => {
    if (!o.entry) return flushIntro(o);
    const { level, title, lines: body } = o.entry;
    const base = slugify(title, 80) || "entry";
    const n = (o.slugs.get(base) ?? 0) + 1;
    o.slugs.set(base, n);
    const body_md = trimBody(body);
    o.section.entries.push({ slug: n > 1 ? `${base}-${n}` : base, level, title, body_md, issues: issuesOf(body_md) });
    o.entry = null;
  };
  const closeSection = (at: number) => {
    if (!cur) return;
    closeEntry(cur);
    lastEnd = at;
    cur = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!fence) {
      const w = line.match(WAVE);
      if (w) {
        closeSection(i);
        comment = false;
        wave = w[1].trim();
        waves.push(wave);
        if (firstWave < 0) firstWave = i;
        continue;
      }
      const v = line.match(VERSION);
      if (v) {
        closeSection(i);
        comment = false;
        const section: ChangelogSection = { version: v[1].replace(/\s+/g, " "), wave, major: waveMajor(wave, majors), entries: [] };
        sections.push(section);
        cur = { section, entry: null, intro: [], slugs: new Map() };
        continue;
      }
    }
    if (!cur) continue;
    const o: Open = cur;
    const h = !fence && !comment ? line.match(HEADING) : null;
    if (h) {
      closeEntry(o);
      o.entry = { level: h[1].length === 4 ? 4 : 3, title: cleanTitle(h[2]), lines: [] };
      continue;
    }
    (o.entry ? o.entry.lines : o.intro).push(line);
    if (FENCE.test(line) && !comment) fence = !fence;
    else if (!fence) {
      const open = line.lastIndexOf("<!--"), close = line.lastIndexOf("-->");
      if (open > close) comment = true;
      else if (close >= 0) comment = false;
    }
  }
  closeSection(lines.length);
  const before = firstWave > 0 ? Buffer.byteLength(lines.slice(0, firstWave).join("\n") + "\n", "utf8") : 0;
  // the tail: from where the last section ended (the next wave H1) to the end of the file, claimed by no section
  const tail = lastEnd >= 0 && lastEnd < lines.length ? Buffer.byteLength(lines.slice(lastEnd).join("\n"), "utf8") : 0;
  return { sections, dropped_bytes: before + tail, waves };
}
