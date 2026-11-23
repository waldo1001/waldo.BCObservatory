---
id: post/bccaptain-com-au/https-bccaptain-com-au-2026-11-22-bc-word-layout-mcp-2-1-0--f0536bec81
type: post
title: "BC Word Layout MCP 2.1.0: What changes when you print with a report theme?"
summary: BC Word Layout MCP 2.1.0 adds support for report themes in Word layouts, allowing layout elements to follow selected Business Central themes via theme colour references instead of fixed colours. The update enables conditional footer text, improved merged cell handling, and requires BC 29 or higher for new theme and style features.
tier: community
language: en
tags:
  - word layouts
  - report themes
  - mcp server
  - theme colours
  - report design
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-11-23T00:56:29.997Z"
  flags: []
generated:
  at: "2026-11-23T00:15:10.597Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 8a3ef3c7ddd6aa74a8c9520b6d7c4824b8bb7c22a26335ac45735867069f4b34
evidence:
  - kind: blog
    url: https://bccaptain.com.au/2026/11/22/bc-word-layout-mcp-2-1-0/
    title: "BC Word Layout MCP 2.1.0: What changes when you print with a report theme?"
    date: "2026-11-22"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://bccaptain.com.au/2026/11/22/bc-word-layout-mcp-2-1-0/
    title: "BC Word Layout MCP 2.1.0: What changes when you print with a report theme?"
    date: "2026-11-22"
    commit: null
    t: null
    quote: Instead of asking for a blue heading, ask for accent1. That's a slot in the theme, not a particular colour.
  - kind: blog
    url: https://bccaptain.com.au/2026/11/22/bc-word-layout-mcp-2-1-0/
    title: "BC Word Layout MCP 2.1.0: What changes when you print with a report theme?"
    date: "2026-11-22"
    commit: null
    t: null
    quote: Theme colours, their tints and theme fonts followed the report theme. Fixed colours and explicitly named fonts stayed as they were.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://bccaptain.com.au/2026/11/22/bc-word-layout-mcp-2-1-0/
source_id: bccaptain-com-au
source_name: BC Captain
url: https://bccaptain.com.au/2026/11/22/bc-word-layout-mcp-2-1-0/
published_at: "2026-11-22T12:00:00.000Z"
author: Tom Kapitan
full_text: false
words: 743
quotes:
  - text: Instead of asking for a blue heading, ask for accent1. That's a slot in the theme, not a particular colour.
    why_it_matters: Explains the core distinction between theme colours and fixed colours, which is essential for layouts that should follow report themes
  - text: Theme colours, their tints and theme fonts followed the report theme. Fixed colours and explicitly named fonts stayed as they were.
    why_it_matters: Demonstrates the tested behavior showing which formatting elements adapt to themes and which remain static
code_objects_mentioned: []
systems:
  - reporting
  - development
versions_mentioned:
  - BC 29
  - MCP 2.1.0
preview:
  embeddable: false
  frame_url: null
  image: https://bccaptain.com.au/favicon.svg
  image_alt: null
  image_w: null
  image_h: null
  site_name: BC Captain
  favicon: https://bccaptain.com.au/favicon.svg
  probed_at: "2026-11-23T00:53:20.577Z"
---

# BC Word Layout MCP 2.1.0: What changes when you print with a report theme?

[Read the post](https://bccaptain.com.au/2026/11/22/bc-word-layout-mcp-2-1-0/) · BC Captain (Tom Kapitan, MVP) · 2026-11-22 · 743 words · tier community · reviewed (checked by Opus)

> BC Word Layout MCP 2.1.0 adds support for report themes in Word layouts, allowing layout elements to follow selected Business Central themes via theme colour references instead of fixed colours. The update enables conditional footer text, improved merged cell handling, and requires BC 29 or higher for new theme and style features.

## Key points

- Theme colours like accent1 are slots that follow the selected report theme, while hex colours like #0070C0 remain fixed and always print the same way
- The new set_layout_theme tool edits the theme inside the layout itself, changing colour slots and fonts independently of report themes in Business Central
- insert_page_conditional_text uses Word IF fields to control footer and static text visibility based on page position (notLastPage, lastPage, firstPage)
- Table tools now work with vertically merged cells while preserving merges when changing column widths, and you must target the cell where the merge starts
- Theme colour and style edits require BC 29 or higher; the server reads the target from AL app.json or the BCWL_BC_VERSION environment variable

## Quotes

- "Instead of asking for a blue heading, ask for accent1. That's a slot in the theme, not a particular colour." (Explains the core distinction between theme colours and fixed colours, which is essential for layouts that should follow report themes)
- "Theme colours, their tints and theme fonts followed the report theme. Fixed colours and explicitly named fonts stayed as they were." (Demonstrates the tested behavior showing which formatting elements adapt to themes and which remain static)

## Context

- Features: Theme colour support, Report theme integration, Conditional footer text, Merged cell handling, Layout theme editing, AI agent tools for layout creation
- Versions: BC 29, MCP 2.1.0

Source: BC Captain, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
