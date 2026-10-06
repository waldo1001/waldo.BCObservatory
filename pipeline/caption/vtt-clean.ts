/**
 * YouTube auto-caption VTT to timed segments (ported from the release-wave pipeline, step 01).
 *
 * The caption VTT is the canonical video intermediate (D09). Auto-caption quirks handled: word-level
 * <c> timing tags, each cue repeated as a rolling line and as a full line, [Music] markers,
 * align/position attributes, HTML entities. Pure functions; callers decide where files go.
 */

export interface Word { t: number; w: string }
export interface Marker { t: number; text: string }
export interface Segment { t: number; end: number; text: string }
export interface Paragraph { t: number; text: string }
export interface CleanedCaptions { segments: Segment[]; markers: Marker[]; word_count: number }

const TS = /(\d{2}):(\d{2}):(\d{2})\.(\d{3})/;
const TAG_TS = /<(\d{2}:\d{2}:\d{2}\.\d{3})>/;
const MARKER = /^\[[^\]]+\]$/;

function parseTs(s: string): number {
  const m = s.match(TS);
  return m ? +m[1] * 3600 + +m[2] * 60 + +m[3] + +m[4] / 1000 : NaN;
}
function decodeEntities(s: string): string {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
}
function stripTags(s: string): string {
  return decodeEntities(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}
const round1 = (n: number) => Math.round(n * 10) / 10;

/** Parse a VTT file into a stream of timed words, de-duplicating YouTube's rolling repeats. */
export function vttToWords(vtt: string): { words: Word[]; markers: Marker[] } {
  const out: Word[] = [];
  const markers: Marker[] = [];
  const recent: string[] = [];
  const seen = (plain: string) => recent.includes(plain);
  const remember = (plain: string) => { recent.push(plain); if (recent.length > 4) recent.shift(); };

  for (const block of vtt.replace(/\r/g, "").split(/\n\n+/)) {
    const lines = block.split("\n");
    const ti = lines.findIndex((l) => l.includes("-->"));
    if (ti < 0) continue;
    const start = parseTs(lines[ti].split("-->")[0].trim());
    if (Number.isNaN(start)) continue;
    for (const raw of lines.slice(ti + 1)) {
      const line = raw.trim();
      if (!line) continue;
      const plain = stripTags(line);
      if (!plain) continue;
      if (MARKER.test(plain)) { markers.push({ t: start, text: plain }); remember(plain); continue; }
      if (!TAG_TS.test(line)) {
        if (seen(plain)) continue; // rolling repeat of a line already emitted
        // untagged new line (first cue of a file or single-line cues): spread words evenly
        plain.split(" ").filter(Boolean).forEach((w, i) => out.push({ t: start + i * 0.3, w }));
        remember(plain);
        continue;
      }
      // tagged line: "Hello<00:00:07.279><c> and</c><00:00:07.600><c> welcome</c>" splits into [text, ts, text, ts, ...]
      const parts = line.split(/<(\d{2}:\d{2}:\d{2}\.\d{3})>/);
      let t = start;
      for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 1) { t = parseTs(parts[i]); continue; }
        const txt = stripTags(parts[i]);
        if (!txt) continue;
        for (const w of txt.split(" ").filter(Boolean)) {
          if (MARKER.test(w)) markers.push({ t, text: w });
          else out.push({ t, w });
        }
      }
      remember(plain);
    }
  }
  // guard against tiny out-of-order timestamps
  for (let i = 1; i < out.length; i++) if (out[i].t < out[i - 1].t) out[i].t = out[i - 1].t;
  return { words: out, markers };
}

/** Group timed words into segments of roughly 10-20 seconds, preferring sentence and pause boundaries. */
export function wordsToSegments(words: Word[], durationHint?: number): Segment[] {
  const segs: Segment[] = [];
  let cur: Word[] = [];
  const flush = (nextT?: number) => {
    if (!cur.length) return;
    const t = cur[0].t;
    const last = cur[cur.length - 1].t;
    const end = Math.min(nextT ?? last + 2, last + 4);
    segs.push({ t: round1(t), end: round1(Math.max(end, t + 0.5)), text: cur.map((w) => w.w).join(" ") });
    cur = [];
  };
  for (const w of words) {
    const prev = cur.length ? cur[cur.length - 1] : null;
    if (prev) {
      const dur = w.t - cur[0].t;
      const gap = w.t - prev.t;
      const sentenceEnd = /[.!?]$/.test(prev.w);
      if (gap > 3 || dur >= 20 || (dur >= 10 && (sentenceEnd || gap > 1.2)) || (dur >= 14 && /[,;:]$/.test(prev.w))) flush(w.t);
    }
    cur.push(w);
  }
  flush(durationHint);
  return segs;
}

/** Paragraphs of roughly 30 seconds for markdown rendering. */
export function segmentsToParagraphs(segs: Segment[]): Paragraph[] {
  const paras: Paragraph[] = [];
  let cur: Segment[] = [];
  for (const s of segs) {
    if (cur.length && s.t - cur[0].t >= 30) { paras.push({ t: cur[0].t, text: cur.map((x) => x.text).join(" ") }); cur = []; }
    cur.push(s);
  }
  if (cur.length) paras.push({ t: cur[0].t, text: cur.map((x) => x.text).join(" ") });
  return paras;
}

/** One call for the caption stage: VTT text in, segments + markers out. */
export function cleanVtt(vtt: string, durationHint?: number): CleanedCaptions {
  const { words, markers } = vttToWords(vtt);
  return { segments: wordsToSegments(words, durationHint), markers, word_count: words.length };
}
