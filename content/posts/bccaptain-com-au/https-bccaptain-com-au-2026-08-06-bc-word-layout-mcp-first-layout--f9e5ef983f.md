---
id: post/bccaptain-com-au/https-bccaptain-com-au-2026-08-06-bc-word-layout-mcp-first-layout--f9e5ef983f
type: post
title: "BC Word Layout MCP (Part 2): Build your first sales quote layout"
summary: This walkthrough guides creating a custom Word layout for a Business Central sales quote report using BC Word Layout MCP v2.0.0, covering schema preparation, field mapping, layout design with repeating line tables, validation, and preview testing with both sample and real data.
tier: community
language: en
tags:
  - word layouts
  - report design
  - mcp agent
  - document preview
  - data binding
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-30T08:07:45.919Z"
  flags: []
generated:
  at: "2026-10-30T07:47:07.587Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 4771c522d5f87273789bf636184450ab3cc69b6303fdfc6da3697e2554b79dbe
evidence:
  - kind: blog
    url: https://bccaptain.com.au/2026/08/06/bc-word-layout-mcp-first-layout/
    title: "BC Word Layout MCP (Part 2): Build your first sales quote layout"
    date: "2026-08-06"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://bccaptain.com.au/2026/08/06/bc-word-layout-mcp-first-layout/
    title: "BC Word Layout MCP (Part 2): Build your first sales quote layout"
    date: "2026-08-06"
    commit: null
    t: null
    quote: "A report's Send to > XML export is different: it supplies values from a report run for previewing. It does not replace the layout's schema."
  - kind: blog
    url: https://bccaptain.com.au/2026/08/06/bc-word-layout-mcp-first-layout/
    title: "BC Word Layout MCP (Part 2): Build your first sales quote layout"
    date: "2026-08-06"
    commit: null
    t: null
    quote: Confirm the mapping, especially the amounts. A unit price, a line amount, and an amount including VAT are not interchangeable.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://bccaptain.com.au/2026/08/06/bc-word-layout-mcp-first-layout/
source_id: bccaptain-com-au
source_name: BC Captain
url: https://bccaptain.com.au/2026/08/06/bc-word-layout-mcp-first-layout/
published_at: "2026-08-06T12:00:00.000Z"
author: Tom Kapitan
full_text: false
words: 855
quotes:
  - text: "A report's Send to > XML export is different: it supplies values from a report run for previewing. It does not replace the layout's schema."
    why_it_matters: Clarifies the distinction between schema files and data exports, essential for proper testing workflow
  - text: Confirm the mapping, especially the amounts. A unit price, a line amount, and an amount including VAT are not interchangeable.
    why_it_matters: Highlights critical attention to field accuracy before layout creation to avoid financial reporting errors
code_objects_mentioned: []
systems:
  - development
  - sales
  - reporting
versions_mentioned:
  - v2.0.0
cautions:
  - kind: gotcha
    quote: "A report's Send to > XML export is different: it supplies values from a report run for previewing. It does not replace the layout's schema."
    objects: []
    events: []
    versions: []
  - kind: warning
    quote: Older comma-separated column lists are not accepted by v2.0.0.
    objects: []
    events: []
    versions:
      - 2.0.0
  - kind: gotcha
    quote: Generated sample data is useful for a quick check, but it is not your customer's data.
    objects: []
    events: []
    versions: []
preview:
  embeddable: false
  frame_url: null
  image: https://bccaptain.com.au/images/bc-word-layout-mcp-cover.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: BC Captain
  favicon: https://bccaptain.com.au/favicon.svg
  probed_at: "2026-10-30T07:51:50.996Z"
---

# BC Word Layout MCP (Part 2): Build your first sales quote layout

[Read the post](https://bccaptain.com.au/2026/08/06/bc-word-layout-mcp-first-layout/) · BC Captain (Tom Kapitan) · 2026-08-06 · 855 words · tier community · reviewed (checked by Opus)

> This walkthrough guides creating a custom Word layout for a Business Central sales quote report using BC Word Layout MCP v2.0.0, covering schema preparation, field mapping, layout design with repeating line tables, validation, and preview testing with both sample and real data.

## Key points

- Export a Word layout from BC as the schema source so the agent knows which fields the report provides
- Agree on the dataset field mapping before building, especially which amount field is meant
- Have the agent create the heading, date and a repeating line table bound to the report's line data item
- Run full validation and preview with sample rows, then with an XML data export from a real report run
- Upload to a BC sandbox and print short and long quotes to confirm the result

## Quotes

- "A report's Send to > XML export is different: it supplies values from a report run for previewing. It does not replace the layout's schema." (Clarifies the distinction between schema files and data exports, essential for proper testing workflow)
- "Confirm the mapping, especially the amounts. A unit price, a line amount, and an amount including VAT are not interchangeable." (Highlights critical attention to field accuracy before layout creation to avoid financial reporting errors)

## Heads up

- gotcha: "A report's Send to > XML export is different: it supplies values from a report run for previewing. It does not replace the layout's schema."
- warning: "Older comma-separated column lists are not accepted by v2.0.0." (about version 2.0.0)
- gotcha: "Generated sample data is useful for a quick check, but it is not your customer's data."

## Context

- Features: BC Word Layout MCP, schema export, repeating tables, field binding, layout validation, preview rendering, XML data export
- Versions: v2.0.0

Source: BC Captain, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
