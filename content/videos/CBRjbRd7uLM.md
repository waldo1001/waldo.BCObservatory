---
id: video/CBRjbRd7uLM
type: video
title: Building the World's Best ControlAddIn for AL code in Business Central
summary: Eric's open source starter control add-in for AL in Business Central covers flexible height control, keyboard routing, caption translation and resource streaming. It also covers the user control host page type, which has no page close event and is risky for editable data.
tier: community
language: en
tags:
  - control add-in
  - al development
  - keyboard routing
  - height control
  - javascript
  - captions
  - translations
  - resources
  - html rendering
  - accessibility
system: development
review:
  state: reviewed
  by: opus
  at: "2026-11-24T00:15:21.476Z"
  flags: []
generated:
  at: "2026-11-24T00:15:21.558Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 647069284254d25eb087ee20b7512c55f73a0197981d998b1a9969b1cec7e559
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=CBRjbRd7uLM&t=113s
    title: Building the World's Best ControlAddIn for AL code in Business Central
    date: "2026-11-23T11:00:02.000Z"
    commit: null
    t: 113
    quote: And the first thing is a more flexible of controlling the height of a controller then.
  - kind: video
    url: https://www.youtube.com/watch?v=CBRjbRd7uLM&t=325s
    title: Building the World's Best ControlAddIn for AL code in Business Central
    date: "2026-11-23T11:00:02.000Z"
    commit: null
    t: 325
    quote: And and and for me this is very much an accessibility issue there's nothing more annoying than suddenly you have to grab the mouse
  - kind: video
    url: https://www.youtube.com/watch?v=CBRjbRd7uLM&t=404s
    title: Building the World's Best ControlAddIn for AL code in Business Central
    date: "2026-11-23T11:00:02.000Z"
    commit: null
    t: 404
    quote: So for in order for that to work, you have to have labels sitting in AL that is get passed into the controller then
  - kind: video
    url: https://www.youtube.com/watch?v=CBRjbRd7uLM&t=533s
    title: Building the World's Best ControlAddIn for AL code in Business Central
    date: "2026-11-23T11:00:02.000Z"
    commit: null
    t: 533
    quote: the user control page user control host page type currently have an issue because there is no page close event.
  - kind: video
    url: https://www.youtube.com/watch?v=CBRjbRd7uLM&t=548s
    title: Building the World's Best ControlAddIn for AL code in Business Central
    date: "2026-11-23T11:00:02.000Z"
    commit: null
    t: 548
    quote: So you're if you have data in here and you want to save on exit and stuff like that, it it's super easy for
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: CBRjbRd7uLM
channel: yt-hougaard
source_name: Erik Hougaard
url: https://www.youtube.com/watch?v=CBRjbRd7uLM
published_at: "2026-11-23T11:00:02.000Z"
duration_s: 901
captions: derived
audience:
  - developer
chapters:
  - t: 0
    title: Introduction to control add-in challenges
  - t: 68
    title: Demo - control add-in overview and height control
  - t: 148
    title: Height adjustment features and flexibility
  - t: 276
    title: Keyboard routing and accessibility
  - t: 359
    title: Captions, translations, and content loading
  - t: 441
    title: Repository structure and user control host page type
  - t: 569
    title: Code walkthrough - load content and event handling
  - t: 723
    title: Resource management and HTML rendering
  - t: 870
    title: Summary and call to action
features:
  - name: Flexible height control for control add-ins
    status: unclear
    t: 113
    verified: false
    status_source: video
  - name: Keyboard input routing in control add-ins
    status: unclear
    t: 276
    verified: false
    status_source: video
  - name: Caption translation support in control add-ins
    status: unclear
    t: 368
    verified: false
    status_source: video
  - name: Resource streaming for control add-in content
    status: unclear
    t: 415
    verified: false
    status_source: video
  - name: Starter kit with skill document for new control add-ins
    status: unclear
    t: 441
    verified: false
    status_source: video
  - name: User control host page type limitation - no page close event
    status: unclear
    t: 523
    verified: false
    status_source: video
  - name: Control ready event for initialization timing
    status: unclear
    t: 602
    verified: false
    status_source: video
objects_mentioned:
  - codeunit caption code unit
  - page user control host
quotes:
  - t: 113
    text: And the first thing is a more flexible of controlling the height of a controller then.
    check: exact
  - t: 325
    text: And and and for me this is very much an accessibility issue there's nothing more annoying than suddenly you have to grab the mouse
    check: exact
  - t: 404
    text: So for in order for that to work, you have to have labels sitting in AL that is get passed into the controller then
    check: exact
  - t: 533
    text: the user control page user control host page type currently have an issue because there is no page close event.
    check: exact
  - t: 548
    text: So you're if you have data in here and you want to save on exit and stuff like that, it it's super easy for
    check: exact
---

# Building the World's Best ControlAddIn for AL code in Business Central

> Eric's open source starter control add-in for AL in Business Central covers flexible height control, keyboard routing, caption translation and resource streaming. It also covers the user control host page type, which has no page close event and is risky for editable data.

[Watch on YouTube](https://www.youtube.com/watch?v=CBRjbRd7uLM) · Erik Hougaard · 2026-11-23 · 15:01 · tier community · reviewed (checked by Opus)

## Overview

Erik Hougaard demonstrates an open source control add-in project for Business Central AL development. It addresses recurring problems with control add-ins: inconsistent height handling, keyboard input captured by the control, translating captions, and managing content such as HTML and SVG.

The video walks through the repository structure and code, including loading content and event handling. It also explains the user control host page type and the control ready event. Hougaard says the project may not be the world's best yet, and that it is community-maintained and still evolving.

## Key points

- Height control options include fill parent, fixed height, standard height and an offset, as an alternative to Microsoft's inconsistent default height handling. The same options also work in fact boxes.
- Keyboard presses are routed through the control add-in so standard Business Central keys keep working when focus is in the control. The presenter treats this as an accessibility issue and says it takes a bit of hacking.
- Caption translation requires labels defined in AL and passed into the control add-in as a JSON object. The text then changes when the application language changes.
- Resources such as HTML, SVG, icons and text are streamed from the app into the control add-in instead of being embedded as strings. This requires a resource folder to be specified.
- The user control host page type has no page close event, so it risks data loss for editable content. The presenter considers it great for read-only scenarios. He thinks it was built mainly for Power BI and says he has raised his concerns with Microsoft.
- The on control ready event fires after page open, so developers cannot assume the control is ready when the page opens.
- The repository includes a skill document for creating new control add-ins, so AI agents such as Codex can use the repo as a template. JavaScript cannot be shared as a library across control add-ins, which is why a starter template approach is used.

## Chapters

- [0:00](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=0s) Introduction to control add-in challenges
- [1:08](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=68s) Demo - control add-in overview and height control
- [2:28](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=148s) Height adjustment features and flexibility
- [4:36](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=276s) Keyboard routing and accessibility
- [5:59](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=359s) Captions, translations, and content loading
- [7:21](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=441s) Repository structure and user control host page type
- [9:29](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=569s) Code walkthrough - load content and event handling
- [12:03](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=723s) Resource management and HTML rendering
- [14:30](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=870s) Summary and call to action

## Features

| Feature | Status | At |
|---|---|---|
| Flexible height control for control add-ins | status not stated, demoed | [1:53](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=113s) |
| Keyboard input routing in control add-ins | status not stated, demoed | [4:36](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=276s) |
| Caption translation support in control add-ins | status not stated, demoed | [6:08](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=368s) |
| Resource streaming for control add-in content | status not stated, demoed | [6:55](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=415s) |
| Starter kit with skill document for new control add-ins | status not stated, demoed | [7:21](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=441s) |
| User control host page type limitation - no page close event | status not stated | [8:43](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=523s) |
| Control ready event for initialization timing | status not stated, demoed | [10:02](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=602s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "caption code unit" at [10:38](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=638s)
- page "user control host" at [8:43](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=523s)

Not found in BC28-30: codeunit "caption code unit", page "user control host".

## Quotes

- [1:53](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=113s) "And the first thing is a more flexible of controlling the height of a controller then."
- [5:25](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=325s) "And and and for me this is very much an accessibility issue there's nothing more annoying than suddenly you have to grab the mouse"
- [6:44](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=404s) "So for in order for that to work, you have to have labels sitting in AL that is get passed into the controller then"
- [8:53](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=533s) "the user control page user control host page type currently have an issue because there is no page close event."
- [9:08](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=548s) "So you're if you have data in here and you want to save on exit and stuff like that, it it's super easy for"

## Disclaimers in the video

- [0:58](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=58s) other: maybe this is not the world's best control add-in yet, but it's open source
- [9:18](https://www.youtube.com/watch?v=CBRjbRd7uLM&t=558s) other: So I have advocated my my concerns to Microsoft on this.

Presenters (as heard): Eric.
