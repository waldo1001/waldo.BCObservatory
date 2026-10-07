---
id: video/Z0K38pXvjWk
type: video
title: "Business Central: ToolTip Property Now Available on Pages"
summary: The ToolTip and ToolTipML properties can now be set on the AL page object; using both causes an error. Navigation actions that define no tooltip of their own inherit the page tooltip, as the version 29 client demo shows, while version 28 shows the action's own tooltip. The video covers less repeated code, table-field tooltips, consistent tooltips across the app, and why AI agents and MCP servers need meaningful tooltip text.
tier: community
language: en
tags:
  - tooltip property
  - page design
  - al development
  - code reduction
  - action inheritance
  - ai agents
  - consistency
  - table fields
  - navigation actions
  - developer guidelines
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:18:55.004Z"
  flags: []
generated:
  at: "2026-10-07T23:18:55.052Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 2f3e6fa89db6114ec1c7433005f9509a56f45f519cfb22461248666f89d11d8b
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=Z0K38pXvjWk&t=535s
    title: "ToolTip property on page objects: generally available"
    date: "2026-09-14T04:45:31.000Z"
    commit: null
    t: 535
    quote: Tool tip and or tool tip ML are now available directly on business central page object.
  - kind: video
    url: https://www.youtube.com/watch?v=Z0K38pXvjWk&t=20s
    title: "Business Central: ToolTip Property Now Available on Pages"
    date: "2026-09-14T04:45:31.000Z"
    commit: null
    t: 20
    quote: you can now define tool tip or or and tooltip ML properties directly into the page object.
  - kind: video
    url: https://www.youtube.com/watch?v=Z0K38pXvjWk&t=33s
    title: "Business Central: ToolTip Property Now Available on Pages"
    date: "2026-09-14T04:45:31.000Z"
    commit: null
    t: 33
    quote: navigation action can inherit those tool tip when they don't define one themsel.
  - kind: video
    url: https://www.youtube.com/watch?v=Z0K38pXvjWk&t=93s
    title: "Business Central: ToolTip Property Now Available on Pages"
    date: "2026-09-14T04:45:31.000Z"
    commit: null
    t: 93
    quote: With this change Microsoft have made tool tip and tool tip ML available on the page object level as well.
  - kind: video
    url: https://www.youtube.com/watch?v=Z0K38pXvjWk&t=376s
    title: "Business Central: ToolTip Property Now Available on Pages"
    date: "2026-09-14T04:45:31.000Z"
    commit: null
    t: 376
    quote: You cannot do both because that generates an error message that you should either use a tool tip or a tool tip ML.
  - kind: video
    url: https://www.youtube.com/watch?v=Z0K38pXvjWk&t=407s
    title: "Business Central: ToolTip Property Now Available on Pages"
    date: "2026-09-14T04:45:31.000Z"
    commit: null
    t: 407
    quote: AI uses these tool tips very seriously. So when you work with agents inside Business Central or when you use with MCP server, those
links:
  learn: []
  objects: []
  features:
    - feature/573313
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: Z0K38pXvjWk
channel: yt-saurav
source_name: Saurav Dhyani
url: https://www.youtube.com/watch?v=Z0K38pXvjWk
published_at: "2026-09-14T04:45:31.000Z"
duration_s: 600
captions: derived
audience:
  - developer
  - functional consultant
chapters:
  - t: 0
    title: Introduction to tooltip feature on pages
  - t: 57
    title: Understanding tooltips and context for users
  - t: 122
    title: Historical tooltip definition on pages
  - t: 197
    title: Reducing page size through action references and table-level tooltips
  - t: 296
    title: Page-level tooltips for consistency across the application
  - t: 387
    title: AI agents and meaningful tooltip content
  - t: 452
    title: Benefits and client-side demonstration
  - t: 514
    title: Key takeaways and action inheritance
features:
  - name: ToolTip property on page objects
    status: ga
    t: 20
    verified: true
    status_source: video
  - name: Action tooltip inheritance
    status: ga
    t: 33
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573313"
  - name: Page-level tooltip consistency
    status: unclear
    t: 324
    verified: false
    status_source: video
  - name: AI agent tooltip support
    status: unclear
    t: 407
    verified: false
    status_source: video
  - name: Table-level tooltip inheritance
    status: unclear
    t: 237
    verified: false
    status_source: video
objects_mentioned:
  - page customer
quotes:
  - t: 20
    text: you can now define tool tip or or and tooltip ML properties directly into the page object.
    check: exact
  - t: 33
    text: navigation action can inherit those tool tip when they don't define one themsel.
    check: exact
  - t: 93
    text: With this change Microsoft have made tool tip and tool tip ML available on the page object level as well.
    check: exact
  - t: 376
    text: You cannot do both because that generates an error message that you should either use a tool tip or a tool tip ML.
    check: exact
  - t: 407
    text: AI uses these tool tips very seriously. So when you work with agents inside Business Central or when you use with MCP server, those
    check: exact
---

# Business Central: ToolTip Property Now Available on Pages

> The ToolTip and ToolTipML properties can now be set on the AL page object; using both causes an error. Navigation actions that define no tooltip of their own inherit the page tooltip, as the version 29 client demo shows, while version 28 shows the action's own tooltip. The video covers less repeated code, table-field tooltips, consistent tooltips across the app, and why AI agents and MCP servers need meaningful tooltip text.

[Watch on YouTube](https://www.youtube.com/watch?v=Z0K38pXvjWk) · Saurav Dhyani · 2026-09-14 · 10:00 · tier community · reviewed (checked by Opus)

## Overview

The video shows that ToolTip and ToolTipML are now available at page object level in Business Central AL development. Before this, tooltips were defined repeatedly on individual actions. A tooltip set once on the page can now be reused wherever an action navigates to that page.

It also covers defining tooltips on table fields so pages inherit them, which reduces page code size. The presenter stresses that AI agents and MCP servers rely on tooltips, so the text should be meaningful and not just generated static text. A client-side demo shows the inheritance.

## Key points

- ToolTip and ToolTipML can be defined directly on a page object.
- Using both ToolTip and ToolTipML on the same object generates an error; use one or the other.
- A navigation action inherits the page tooltip only if the action defines no tooltip of its own.
- An action can still override the page-level tooltip by defining its own.
- Defining the tooltip once on the page keeps it consistent where the same page is referenced from several places in the application.
- Tooltips defined on table fields can be inherited by page fields, which reduces page code. This is recommended but not mandatory.
- AI agents and MCP servers use tooltips on pages, tables and fields, so write meaningful text instead of tool-generated placeholders.

## Chapters

- [0:00](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=0s) Introduction to tooltip feature on pages
- [0:57](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=57s) Understanding tooltips and context for users
- [2:02](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=122s) Historical tooltip definition on pages
- [3:17](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=197s) Reducing page size through action references and table-level tooltips
- [4:56](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=296s) Page-level tooltips for consistency across the application
- [6:27](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=387s) AI agents and meaningful tooltip content
- [7:32](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=452s) Benefits and client-side demonstration
- [8:34](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=514s) Key takeaways and action inheritance

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| ToolTip property on page objects | generally available | [0:20](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=20s) | "Tool tip and or tool tip ML are now available directly on business central page object." ([8:55](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=535s)) |
| Action tooltip inheritance | generally available (roadmap [573313](../features/573313.md)), demoed | [0:33](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=33s) |  |
| Page-level tooltip consistency | status not stated, demoed | [5:24](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=324s) |  |
| AI agent tooltip support | status not stated | [6:47](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=407s) |  |
| Table-level tooltip inheritance | status not stated | [3:57](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=237s) |  |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- page "customer" at [8:04](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=484s)

Not found in BC28-30: page "customer".

## Quotes

- [0:20](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=20s) "you can now define tool tip or or and tooltip ML properties directly into the page object."
- [0:33](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=33s) "navigation action can inherit those tool tip when they don't define one themsel."
- [1:33](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=93s) "With this change Microsoft have made tool tip and tool tip ML available on the page object level as well."
- [6:16](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=376s) "You cannot do both because that generates an error message that you should either use a tool tip or a tool tip ML."
- [6:47](https://www.youtube.com/watch?v=Z0K38pXvjWk&t=407s) "AI uses these tool tips very seriously. So when you work with agents inside Business Central or when you use with MCP server, those"

Presenters (as heard): S. of Bhyani.
