---
id: post/bccaptain-com-au/https-bccaptain-com-au-2026-10-18-bc-word-layout-mcp-body-repeaters--dd2b775ce5
type: post
title: "BC Word Layout MCP (Part 4): Customer statements and work-description lines"
summary: Word Layout MCP's body repeaters create flexible document structures beyond line tables, such as separate pages per customer in statements or paragraphs per work-description record. The post explains when to use repeaters versus tables and provides step-by-step instructions for implementing each pattern, with version 2.0.0 fixes for preview-to-print discrepancies.
tier: community
language: en
tags:
  - word layout
  - report design
  - document repeaters
  - customer statements
  - work descriptions
  - body content
  - page breaks
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
  input_hash: a696e3d2b5829e4dc75b92813d3011dd7062b0a0da0137a0989fdf8ae30124a4
evidence:
  - kind: blog
    url: https://bccaptain.com.au/2026/10/18/bc-word-layout-mcp-body-repeaters/
    title: "BC Word Layout MCP (Part 4): Customer statements and work-description lines"
    date: "2026-10-18"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://bccaptain.com.au/2026/10/18/bc-word-layout-mcp-body-repeaters/
    title: "BC Word Layout MCP (Part 4): Customer statements and work-description lines"
    date: "2026-10-18"
    commit: null
    t: null
    quote: A line table is not always the right answer. A customer statement might need a new page for each customer.
  - kind: blog
    url: https://bccaptain.com.au/2026/10/18/bc-word-layout-mcp-body-repeaters/
    title: "BC Word Layout MCP (Part 4): Customer statements and work-description lines"
    date: "2026-10-18"
    commit: null
    t: null
    quote: Start on a new page is not the same as fit on one page. A customer's statement can still continue over several pages.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://bccaptain.com.au/2026/10/18/bc-word-layout-mcp-body-repeaters/
source_id: bccaptain-com-au
source_name: BC Captain
url: https://bccaptain.com.au/2026/10/18/bc-word-layout-mcp-body-repeaters/
published_at: "2026-10-18T12:00:00.000Z"
author: Tom Kapitan
full_text: false
words: 814
quotes:
  - text: A line table is not always the right answer. A customer statement might need a new page for each customer.
    why_it_matters: Establishes that body repeaters solve document layout problems where line tables are inadequate.
  - text: Start on a new page is not the same as fit on one page. A customer's statement can still continue over several pages.
    why_it_matters: Clarifies the practical distinction between page break boundaries and content overflow in document design.
code_objects_mentioned: []
systems:
  - development
  - reporting
versions_mentioned:
  - 2.0.0
cautions:
  - kind: breaking
    quote: v2.0.0 includes the fix for descriptions that looked correct in the mock preview but did not print in BC.
    objects: []
    events: []
    versions:
      - 2.0.0
preview:
  embeddable: false
  frame_url: null
  image: https://bccaptain.com.au/images/bc-word-layout-mcp-cover.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: BC Captain
  favicon: https://bccaptain.com.au/favicon.svg
  probed_at: "2026-10-30T07:51:48.853Z"
---

# BC Word Layout MCP (Part 4): Customer statements and work-description lines

[Read the post](https://bccaptain.com.au/2026/10/18/bc-word-layout-mcp-body-repeaters/) · BC Captain (Tom Kapitan) · 2026-10-18 · 814 words · tier community · reviewed (checked by Opus)

> Word Layout MCP's body repeaters create flexible document structures beyond line tables, such as separate pages per customer in statements or paragraphs per work-description record. The post explains when to use repeaters versus tables and provides step-by-step instructions for implementing each pattern, with version 2.0.0 fixes for preview-to-print discrepancies.

## Key points

- Body repeaters handle repeated content that is not table rows, such as customer statements starting on new pages or work descriptions as paragraphs.
- The wrap_in_repeater tool applies repeating logic to existing body content and respects page break requirements.
- Version 2.0.0 fixes nested work-description cases that could display correctly in preview but print empty in Business Central.
- Test documents thoroughly in Business Central sandbox for multiple customers and varying record counts to verify values do not mix and page breaks occur correctly.
- Body repeaters work only with body paragraphs and tables, not with headers, footers, or arbitrary cells.

## Quotes

- "A line table is not always the right answer. A customer statement might need a new page for each customer." (Establishes that body repeaters solve document layout problems where line tables are inadequate.)
- "Start on a new page is not the same as fit on one page. A customer's statement can still continue over several pages." (Clarifies the practical distinction between page break boundaries and content overflow in document design.)

## Heads up

- breaking: "v2.0.0 includes the fix for descriptions that looked correct in the mock preview but did not print in BC." (about version 2.0.0)

## Context

- Features: body repeaters, wrap_in_repeater tool, page break control, nested repeaters, field binding validation, document preview and validation
- Versions: 2.0.0

Source: BC Captain, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
