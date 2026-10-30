---
id: post/bccaptain-com-au/https-bccaptain-com-au-2026-08-24-bc-word-layout-mcp-totals-and-page-numbers--5f64af29b4
type: post
title: "BC Word Layout MCP (Part 3): Add totals and page numbers"
summary: Adding document totals and page numbers to Word layouts in Business Central using BC Word Layout MCP requires distinguishing between document totals (once after all lines) and group subtotals (once per group). The post explains how to insert non-repeating total rows with proper formatting and real Word page numbers that update automatically.
tier: community
language: en
tags:
  - word layouts
  - totals
  - page numbers
  - report design
  - mcp tool
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
  input_hash: b94587ee92258dc4c2899f3280c7db2886c508bfdb2ab59adf01014c066d199e
evidence:
  - kind: blog
    url: https://bccaptain.com.au/2026/08/24/bc-word-layout-mcp-totals-and-page-numbers/
    title: "BC Word Layout MCP (Part 3): Add totals and page numbers"
    date: "2026-08-24"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://bccaptain.com.au/2026/08/24/bc-word-layout-mcp-totals-and-page-numbers/
    title: "BC Word Layout MCP (Part 3): Add totals and page numbers"
    date: "2026-08-24"
    commit: null
    t: null
    quote: The layout prints the amount supplied by the report. It does not calculate discounts, tax, or rounding.
  - kind: blog
    url: https://bccaptain.com.au/2026/08/24/bc-word-layout-mcp-totals-and-page-numbers/
    title: "BC Word Layout MCP (Part 3): Add totals and page numbers"
    date: "2026-08-24"
    commit: null
    t: null
    quote: A number inserted into the default footer can be correct and still be invisible on a one-page printout.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://bccaptain.com.au/2026/08/24/bc-word-layout-mcp-totals-and-page-numbers/
source_id: bccaptain-com-au
source_name: BC Captain
url: https://bccaptain.com.au/2026/08/24/bc-word-layout-mcp-totals-and-page-numbers/
published_at: "2026-08-24T12:00:00.000Z"
author: Tom Kapitan
full_text: false
words: 796
quotes:
  - text: The layout prints the amount supplied by the report. It does not calculate discounts, tax, or rounding.
    why_it_matters: Clarifies that totals should come from the dataset, not computed in the layout, ensuring correctness and maintainability
  - text: A number inserted into the default footer can be correct and still be invisible on a one-page printout.
    why_it_matters: Warns that testing must validate actual print behavior, not just visual design in Word, due to footer variations
code_objects_mentioned: []
systems:
  - development
  - reporting
versions_mentioned:
  - v1.1.0
  - v2.0.0
cautions:
  - kind: warning
    quote: The layout prints the amount supplied by the report. It does not calculate discounts, tax, or rounding.
    objects: []
    events: []
    versions: []
  - kind: gotcha
    quote: Older Word compatibility settings can cause repeating sections to be lost when someone saves the layout in Word.
    objects: []
    events: []
    versions:
      - 2.0.0
  - kind: warning
    quote: A number inserted into the default footer can be correct and still be invisible on a one-page printout.
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
  probed_at: "2026-10-30T07:51:49.930Z"
---

# BC Word Layout MCP (Part 3): Add totals and page numbers

[Read the post](https://bccaptain.com.au/2026/08/24/bc-word-layout-mcp-totals-and-page-numbers/) · BC Captain (Tom Kapitan) · 2026-08-24 · 796 words · tier community · reviewed (checked by Opus)

> Adding document totals and page numbers to Word layouts in Business Central using BC Word Layout MCP requires distinguishing between document totals (once after all lines) and group subtotals (once per group). The post explains how to insert non-repeating total rows with proper formatting and real Word page numbers that update automatically.

## Key points

- Clarify whether a total requirement means a document total, group subtotal, or line amount, as the distinction affects layout structure and implementation
- Insert totals as final table rows using insert_table_row with proper cell spanning and formatting, binding to dataset amounts rather than calculating in the layout
- Add page numbers with insert_page_number as real Word fields, not static text, and verify they appear correctly on all pages including first-page-only footers
- Test behavior on representative documents (one-page and multi-page) to confirm totals appear once and page numbers follow printed pages

## Quotes

- "The layout prints the amount supplied by the report. It does not calculate discounts, tax, or rounding." (Clarifies that totals should come from the dataset, not computed in the layout, ensuring correctness and maintainability)
- "A number inserted into the default footer can be correct and still be invisible on a one-page printout." (Warns that testing must validate actual print behavior, not just visual design in Word, due to footer variations)

## Heads up

- warning: "The layout prints the amount supplied by the report. It does not calculate discounts, tax, or rounding."
- gotcha: "Older Word compatibility settings can cause repeating sections to be lost when someone saves the layout in Word." (about version 2.0.0)
- warning: "A number inserted into the default footer can be correct and still be invisible on a one-page printout."

## Context

- Features: insert_table_row, insert_subtotal_row, set_cell_format, insert_page_number, repeating sections, document totals, page numbering, field binding
- Versions: v1.1.0, v2.0.0

Source: BC Captain, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
