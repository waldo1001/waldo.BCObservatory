---
id: video/LaA6UNdkvso
type: video
title: Generate Mermaid.js Diagrams with AL Code (2026 Edition)
summary: Eric demonstrates an open-source AL app that brings Pele, a lightweight MIT-licensed Mermaid-to-SVG renderer, into AL. AL code can then render Mermaid diagrams to SVG directly and embed them in generated HTML, instead of loading Mermaid in the browser at runtime. The Business Central playground demo shows flowcharts with click events returned to AL, many diagram types, CSS theming with dark mode, and render times of 4 to 5 milliseconds.
tier: community
language: en
tags:
  - mermaid diagrams
  - svg rendering
  - al code
  - visualization
  - pele library
  - interactive diagrams
  - diagram types
  - performance
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-20T00:22:36.953Z"
  flags: []
generated:
  at: "2026-10-20T00:22:37.002Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: b63a7bbdb28ce79813478b2805a53dd823bcd398bfa161695290712033dbc2ff
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=LaA6UNdkvso&t=45s
    title: Generate Mermaid.js Diagrams with AL Code (2026 Edition)
    date: "2026-10-19T11:00:08.000Z"
    commit: null
    t: 45
    quote: I have used that many times already. But the approach at that time was you created um your your mermaid thing, and then you
  - kind: video
    url: https://www.youtube.com/watch?v=LaA6UNdkvso&t=125s
    title: Generate Mermaid.js Diagrams with AL Code (2026 Edition)
    date: "2026-10-19T11:00:08.000Z"
    commit: null
    t: 125
    quote: this is a lightweight open-source library that renders mermaid diagrams to SVGs.
  - kind: video
    url: https://www.youtube.com/watch?v=LaA6UNdkvso&t=188s
    title: Generate Mermaid.js Diagrams with AL Code (2026 Edition)
    date: "2026-10-19T11:00:08.000Z"
    commit: null
    t: 188
    quote: this is open-source, this is MIT licensed, there's beautiful documentation and it just works.
  - kind: video
    url: https://www.youtube.com/watch?v=LaA6UNdkvso&t=286s
    title: Generate Mermaid.js Diagrams with AL Code (2026 Edition)
    date: "2026-10-19T11:00:08.000Z"
    commit: null
    t: 286
    quote: this took 4 milliseconds to render, which is interesting also that even these complex things are running pretty good in AL code.
  - kind: video
    url: https://www.youtube.com/watch?v=LaA6UNdkvso&t=312s
    title: Generate Mermaid.js Diagrams with AL Code (2026 Edition)
    date: "2026-10-19T11:00:08.000Z"
    commit: null
    t: 312
    quote: I can click on this, and we actually get an event back to to AL code. So, so it's possible to have interactions uh
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: LaA6UNdkvso
channel: yt-hougaard
source_name: Erik Hougaard
url: https://www.youtube.com/watch?v=LaA6UNdkvso
published_at: "2026-10-19T11:00:08.000Z"
duration_s: 669
captions: derived
audience:
  - developer
chapters:
  - t: 0
    title: Introduction and Background
  - t: 35
    title: Previous Approach and Limitations
  - t: 105
    title: Introducing Pele Library
  - t: 188
    title: New App Overview and Demo Setup
  - t: 247
    title: Flowchart Example and Interactive Features
  - t: 336
    title: Diagram Type Samples
  - t: 482
    title: Performance and Rendering Discussion
  - t: 558
    title: Benefits and Conclusion
features:
  - name: Mermaid Diagram Generation in AL
    status: unclear
    t: 125
    verified: false
    status_source: video
  - name: Interactive Diagram Elements
    status: unclear
    t: 299
    verified: false
    status_source: video
  - name: Multiple Diagram Types Support
    status: unclear
    t: 347
    verified: false
    status_source: video
  - name: CSS Theming Support
    status: unclear
    t: 354
    verified: false
    status_source: video
  - name: Fast Rendering Performance
    status: unclear
    t: 286
    verified: false
    status_source: video
objects_mentioned:
  - codeunit Mermaid diagram codeunits
quotes:
  - t: 45
    text: I have used that many times already. But the approach at that time was you created um your your mermaid thing, and then you
    check: exact
  - t: 125
    text: this is a lightweight open-source library that renders mermaid diagrams to SVGs.
    check: exact
  - t: 188
    text: this is open-source, this is MIT licensed, there's beautiful documentation and it just works.
    check: exact
  - t: 286
    text: this took 4 milliseconds to render, which is interesting also that even these complex things are running pretty good in AL code.
    check: exact
  - t: 312
    text: I can click on this, and we actually get an event back to to AL code. So, so it's possible to have interactions uh
    check: exact
---

# Generate Mermaid.js Diagrams with AL Code (2026 Edition)

> Eric demonstrates an open-source AL app that brings Pele, a lightweight MIT-licensed Mermaid-to-SVG renderer, into AL. AL code can then render Mermaid diagrams to SVG directly and embed them in generated HTML, instead of loading Mermaid in the browser at runtime. The Business Central playground demo shows flowcharts with click events returned to AL, many diagram types, CSS theming with dark mode, and render times of 4 to 5 milliseconds.

[Watch on YouTube](https://www.youtube.com/watch?v=LaA6UNdkvso) · Erik Hougaard · 2026-10-19 · 11:09 · tier community · reviewed (checked by Opus)

## Overview

Erik Hougaard describes how his earlier Mermaid approach in Business Central worked and its limitations. He then presents a new app built on the Pele library, an open-source, MIT-licensed, lightweight library that renders Mermaid diagrams to SVG inside AL code, so diagrams can be embedded in HTML that AL already generates.

The demo covers a flowchart with interactive elements, samples of other diagram types, CSS theming including dark mode, and a discussion of performance. A complex diagram rendered in 4 milliseconds. He notes that some Mermaid diagram types are not yet ported because he did not need them.

## Key points

- Pele is a lightweight, open-source, MIT-licensed library that renders Mermaid diagrams to SVG. The author brought it into AL as an open-source app with codeunits, tests and a playground.
- The previous approach ran Mermaid in a control add-in to render at runtime. Now AL generates the SVG directly and can embed it in HTML it already builds.
- Click events can be set on all diagram elements or only on elements configured as clickable. The click is passed back to AL code, for example a callback to open job 001.
- Demoed diagram types include flowcharts, sequence, entity relationship, state, Gantt, pie, git graph, mind map, journey and timeline.
- Some Mermaid capabilities have not been ported yet, because the author did not need them.
- Diagrams are CSS themed, so dark mode is possible.
- A complex flowchart rendered in 4 milliseconds and a mind map in 5 milliseconds. The hard part is the layout, not the drawing.

## Chapters

- [0:00](https://www.youtube.com/watch?v=LaA6UNdkvso&t=0s) Introduction and Background
- [0:35](https://www.youtube.com/watch?v=LaA6UNdkvso&t=35s) Previous Approach and Limitations
- [1:45](https://www.youtube.com/watch?v=LaA6UNdkvso&t=105s) Introducing Pele Library
- [3:08](https://www.youtube.com/watch?v=LaA6UNdkvso&t=188s) New App Overview and Demo Setup
- [4:07](https://www.youtube.com/watch?v=LaA6UNdkvso&t=247s) Flowchart Example and Interactive Features
- [5:36](https://www.youtube.com/watch?v=LaA6UNdkvso&t=336s) Diagram Type Samples
- [8:02](https://www.youtube.com/watch?v=LaA6UNdkvso&t=482s) Performance and Rendering Discussion
- [9:18](https://www.youtube.com/watch?v=LaA6UNdkvso&t=558s) Benefits and Conclusion

## Features

Every feature below: status not stated, demoed.

| Feature | At |
|---|---|
| Mermaid Diagram Generation in AL | [2:05](https://www.youtube.com/watch?v=LaA6UNdkvso&t=125s) |
| Interactive Diagram Elements | [4:59](https://www.youtube.com/watch?v=LaA6UNdkvso&t=299s) |
| Multiple Diagram Types Support | [5:47](https://www.youtube.com/watch?v=LaA6UNdkvso&t=347s) |
| CSS Theming Support | [5:54](https://www.youtube.com/watch?v=LaA6UNdkvso&t=354s) |
| Fast Rendering Performance | [4:46](https://www.youtube.com/watch?v=LaA6UNdkvso&t=286s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "Mermaid diagram codeunits" at [3:44](https://www.youtube.com/watch?v=LaA6UNdkvso&t=224s)

Not found in BC28-30: codeunit "Mermaid diagram codeunits".

## Quotes

- [0:45](https://www.youtube.com/watch?v=LaA6UNdkvso&t=45s) "I have used that many times already. But the approach at that time was you created um your your mermaid thing, and then you"
- [2:05](https://www.youtube.com/watch?v=LaA6UNdkvso&t=125s) "this is a lightweight open-source library that renders mermaid diagrams to SVGs."
- [3:08](https://www.youtube.com/watch?v=LaA6UNdkvso&t=188s) "this is open-source, this is MIT licensed, there's beautiful documentation and it just works."
- [4:46](https://www.youtube.com/watch?v=LaA6UNdkvso&t=286s) "this took 4 milliseconds to render, which is interesting also that even these complex things are running pretty good in AL code."
- [5:12](https://www.youtube.com/watch?v=LaA6UNdkvso&t=312s) "I can click on this, and we actually get an event back to to AL code. So, so it's possible to have interactions uh"

Presenters (as heard): Eric.
