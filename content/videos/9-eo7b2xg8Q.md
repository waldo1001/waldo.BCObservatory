---
id: video/9-eo7b2xg8Q
type: video
title: The "Continue" Keyword Finally Comes to AL — 3 Practical Examples (BC 2025 Wave 1)
summary: "The continue keyword in AL for loops (for, while, repeat): skips the current iteration and moves to the next without ending the loop. Covers the difference from break, with three code examples: even numbers, sales invoice lines with customer emails, and a Microsoft IRS forms extension."
tier: community
language: en
tags:
  - al language
  - loop control
  - continue keyword
  - break vs continue
  - code examples
  - refactoring
  - al extensions
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:12:03.732Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: f94b23e7240160944c5a4c54626a844bbf1332b100b10245e184338c15d58f41
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=39s
    title: The "Continue" Keyword Finally Comes to AL — 3 Practical Examples (BC 2025 Wave 1)
    date: "2025-07-28T01:08:33.000Z"
    commit: null
    t: 39
    quote: we need to distinguish between what break does and what continue does.
  - kind: video
    url: https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=149s
    title: The "Continue" Keyword Finally Comes to AL — 3 Practical Examples (BC 2025 Wave 1)
    date: "2025-07-28T01:08:33.000Z"
    commit: null
    t: 149
    quote: we test if the number is an even number and if it's an even number we skip it
  - kind: video
    url: https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=188s
    title: The "Continue" Keyword Finally Comes to AL — 3 Practical Examples (BC 2025 Wave 1)
    date: "2025-07-28T01:08:33.000Z"
    commit: null
    t: 188
    quote: continue which means don't get here but rather here at the end and increment i to three
  - kind: video
    url: https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=494s
    title: The "Continue" Keyword Finally Comes to AL — 3 Practical Examples (BC 2025 Wave 1)
    date: "2025-07-28T01:08:33.000Z"
    commit: null
    t: 494
    quote: instead of spending the time to refactor all this function
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: 9-eo7b2xg8Q
channel: yt-bcmusings
source_name: Business Central Musings
url: https://www.youtube.com/watch?v=9-eo7b2xg8Q
published_at: "2025-07-28T01:08:33.000Z"
duration_s: 689
captions: derived
audience:
  - developer
chapters:
  - t: 0
    title: Introduction to the continue keyword
  - t: 39
    title: Distinguishing break and continue
  - t: 72
    title: Example 1 - simple for loop with even numbers
  - t: 223
    title: Example 2 - sales invoice lines and customer emails
  - t: 461
    title: Example 3 - Microsoft IRS forms extension
  - t: 629
    title: Summary and closing remarks
features:
  - name: continue keyword in AL
    status: unclear
    t: 11
    verified: false
    status_source: video
objects_mentioned:
  - table 1099 form do header
  - codeunit Coordinate IRS 1099 send email
quotes:
  - t: 39
    text: we need to distinguish between what break does and what continue does.
    check: exact
  - t: 149
    text: we test if the number is an even number and if it's an even number we skip it
    check: fuzzy
  - t: 188
    text: continue which means don't get here but rather here at the end and increment i to three
    check: fuzzy
  - t: 494
    text: instead of spending the time to refactor all this function
    check: fuzzy
---

# The "Continue" Keyword Finally Comes to AL — 3 Practical Examples (BC 2025 Wave 1)

> The continue keyword in AL for loops (for, while, repeat): skips the current iteration and moves to the next without ending the loop. Covers the difference from break, with three code examples: even numbers, sales invoice lines with customer emails, and a Microsoft IRS forms extension.

[Watch on YouTube](https://www.youtube.com/watch?v=9-eo7b2xg8Q) · Business Central Musings · 2025-07-28 · 11:29 · tier community · **unreviewed** (machine-generated)

## Overview

The video explains the new continue keyword in AL and how it differs from break. Break ends the loop, while continue jumps to the end of the current iteration and goes on with the next one. The presenter notes that the examples are made up, except one that comes from a Microsoft extension.

Three examples are shown: a simple for loop that skips even numbers, a loop over sales invoice lines tied to customer emails, and code in the Microsoft IRS forms extension (table 1099 form do header and codeunit Coordinate IRS 1099 send email). The presenter says continue is optional, so it is not a breaking change, and that the code could be restructured to avoid it. It can also save time compared with refactoring a whole function.

## Key points

- continue is a new AL keyword for loops: for, while and repeat.
- break ends the loop; continue skips only the current iteration and moves to the next one.
- In the first example, a for loop tests whether a number is even and skips it with continue.
- A second example applies continue to sales invoice lines and customer emails.
- A third example uses the Microsoft IRS forms extension, with table 1099 form do header and codeunit Coordinate IRS 1099 send email.
- continue is optional and not a breaking change; code can be restructured to avoid it.
- It can be used instead of refactoring a whole function.

## Chapters

- [0:00](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=0s) Introduction to the continue keyword
- [0:39](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=39s) Distinguishing break and continue
- [1:12](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=72s) Example 1 - simple for loop with even numbers
- [3:43](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=223s) Example 2 - sales invoice lines and customer emails
- [7:41](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=461s) Example 3 - Microsoft IRS forms extension
- [10:29](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=629s) Summary and closing remarks

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| continue keyword in AL | status not stated, demoed | [0:11](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=11s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "1099 form do header" at [9:37](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=577s)
- codeunit "Coordinate IRS 1099 send email" at [9:09](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=549s)

Not found in BC28-30: table "1099 form do header", codeunit "Coordinate IRS 1099 send email".

## Quotes

- [0:39](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=39s) "we need to distinguish between what break does and what continue does."
- [2:29](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=149s) "we test if the number is an even number and if it's an even number we skip it"
- [3:08](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=188s) "continue which means don't get here but rather here at the end and increment i to three"
- [8:14](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=494s) "instead of spending the time to refactor all this function"

## Disclaimers in the video

- [1:23](https://www.youtube.com/watch?v=9-eo7b2xg8Q&t=83s) other: They are all made up examples, nothing from uh my work uh daily work. Um so um and one example is from Microsoft
