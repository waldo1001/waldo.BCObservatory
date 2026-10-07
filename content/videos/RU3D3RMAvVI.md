---
id: video/RU3D3RMAvVI
type: video
title: "What's New: Power BI Embedding (For Developers) (2025 release wave 1)"
summary: "Power BI embedding changes in the 2025 release wave 1 for Business Central: a cleaner embed UI and a new AL page type, User Control Host, for hosting control addins. The video demos migrating a page to this type and lists unsupported properties and actions. Shown in preview version 26."
tier: official
language: en
tags:
  - power bi embedding
  - user control host
  - page type
  - control addin
  - ui improvements
  - developer experience
  - al development
system: reporting
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
  input_hash: c28d884b38a7adf4f6c935817b520f7b98fa98b13c8b09f24ad9e19c9151191c
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=RU3D3RMAvVI&t=64s
    title: "What's New: Power BI Embedding (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 64
    quote: we had a lot around 70 to 80 new reports included in Business Central um in the last few waves.
  - kind: video
    url: https://www.youtube.com/watch?v=RU3D3RMAvVI&t=111s
    title: "What's New: Power BI Embedding (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 111
    quote: the report is going to look nice in a couple of seconds when it loads. But the UI around it is just a bit
  - kind: video
    url: https://www.youtube.com/watch?v=RU3D3RMAvVI&t=233s
    title: "What's New: Power BI Embedding (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 233
    quote: a lot of the things and a lot of the controls for example and triggers that don't really apply to a control adin have
  - kind: video
    url: https://www.youtube.com/watch?v=RU3D3RMAvVI&t=260s
    title: "What's New: Power BI Embedding (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 260
    quote: We have more improvements planned for this page type which means um stay tuned and be sure that um you will get more goodness
  - kind: video
    url: https://www.youtube.com/watch?v=RU3D3RMAvVI&t=380s
    title: "What's New: Power BI Embedding (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 380
    quote: actions are not supported in a user control host. That's because the whole space of the page is taken by the user control itself
links:
  learn: []
  objects:
    - object/page/37059
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: RU3D3RMAvVI
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=RU3D3RMAvVI
published_at: "2025-04-01T15:00:29.000Z"
duration_s: 496
captions: full
audience:
  - developer
  - functional consultant
chapters:
  - t: 0
    title: Introduction and Overview
  - t: 45
    title: Power BI Embed UI Improvements
  - t: 134
    title: "Demo: Power BI Report Comparison"
  - t: 222
    title: User Control Host Page Type Overview
  - t: 280
    title: "Developer Demo: Migrating to User Control Host"
  - t: 417
    title: Live Demo and Conclusion
features:
  - name: Improved Power BI Embed User Interface
    status: unclear
    t: 45
    verified: false
    status_source: video
  - name: User Control Host Page Type
    status: unclear
    t: 222
    verified: false
    status_source: video
  - name: Simplified Property Model for User Control Host
    status: unclear
    t: 356
    verified: false
    status_source: video
  - name: Power BI Report Reflow and Responsive Design
    status: unclear
    t: 157
    verified: false
    status_source: video
objects_mentioned:
  - page Finance Report
  - page User Control Host Demo
quotes:
  - t: 64
    text: we had a lot around 70 to 80 new reports included in Business Central um in the last few waves.
    check: exact
  - t: 111
    text: the report is going to look nice in a couple of seconds when it loads. But the UI around it is just a bit
    check: exact
  - t: 233
    text: a lot of the things and a lot of the controls for example and triggers that don't really apply to a control adin have
    check: exact
  - t: 260
    text: We have more improvements planned for this page type which means um stay tuned and be sure that um you will get more goodness
    check: exact
  - t: 380
    text: actions are not supported in a user control host. That's because the whole space of the page is taken by the user control itself
    check: exact
---

# What's New: Power BI Embedding (For Developers) (2025 release wave 1)

> Power BI embedding changes in the 2025 release wave 1 for Business Central: a cleaner embed UI and a new AL page type, User Control Host, for hosting control addins. The video demos migrating a page to this type and lists unsupported properties and actions. Shown in preview version 26.

[Watch on YouTube](https://www.youtube.com/watch?v=RU3D3RMAvVI) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 8:16 · tier official · **unreviewed** (machine-generated)

## Overview

The video covers two areas. The first is a cleaner look for embedded Power BI reports, with better margins and spacing and fewer unnecessary buttons. It compares a report before and after the change. It notes that around 70 to 80 new reports were added to Business Central over the last few waves.

The second area is the new User Control Host page type in AL, built for hosting user controls and control addins. It drops properties and triggers that do not apply to control addins. A developer demo shows migrating an existing page to it. Control addins on this page type reflow and resize to fill the page. More improvements to the page type are planned.

## Key points

- The Power BI embed UI is cleaner, with better margins and spacing and unnecessary buttons removed.
- User Control Host is a new AL page type for hosting user controls and control addins.
- It removes the source table property and the insertion, modification and deletion allowed properties.
- Event triggers such as on after get record do not apply to this page type.
- Actions are not supported, because the user control takes the whole page space. Support may be considered later.
- Control addins on this page type reflow and resize to fill the Business Central page.
- The demo ran on Business Central preview version 26, and more improvements to the page type are planned.

## Chapters

- [0:00](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=0s) Introduction and Overview
- [0:45](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=45s) Power BI Embed UI Improvements
- [2:14](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=134s) Demo: Power BI Report Comparison
- [3:42](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=222s) User Control Host Page Type Overview
- [4:40](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=280s) Developer Demo: Migrating to User Control Host
- [6:57](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=417s) Live Demo and Conclusion

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Improved Power BI Embed User Interface | status not stated, demoed | [0:45](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=45s) |  |
| User Control Host Page Type | status not stated, demoed | [3:42](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=222s) |  |
| Simplified Property Model for User Control Host | status not stated, demoed | [5:56](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=356s) |  |
| Power BI Report Reflow and Responsive Design | status not stated, demoed | [2:37](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=157s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- [page 37059 "Finance Report"](../objects/page/37059.md) at [1:38](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=98s)
- page "User Control Host Demo" at [7:09](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=429s)

Not found in BC28-30: page "User Control Host Demo".

## Quotes

- [1:04](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=64s) "we had a lot around 70 to 80 new reports included in Business Central um in the last few waves."
- [1:51](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=111s) "the report is going to look nice in a couple of seconds when it loads. But the UI around it is just a bit"
- [3:53](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=233s) "a lot of the things and a lot of the controls for example and triggers that don't really apply to a control adin have"
- [4:20](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=260s) "We have more improvements planned for this page type which means um stay tuned and be sure that um you will get more goodness"
- [6:20](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=380s) "actions are not supported in a user control host. That's because the whole space of the page is taken by the user control itself"

## Disclaimers in the video

- [2:14](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=134s) preview: Business Central in the preview version 26
- [4:20](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=260s) coming-later: We have more improvements planned for this page type
- [6:20](https://www.youtube.com/watch?v=RU3D3RMAvVI&t=380s) subject-to-change: actions are not supported in a user control host. That's because the whole space of the page is taken by the user control itself rather than by the actions. But of course if you think we should support them in the future

Presenters (as heard): Niko Chimitan.
