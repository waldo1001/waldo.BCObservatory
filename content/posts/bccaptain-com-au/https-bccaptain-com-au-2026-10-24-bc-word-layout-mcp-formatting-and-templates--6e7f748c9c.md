---
id: post/bccaptain-com-au/https-bccaptain-com-au-2026-10-24-bc-word-layout-mcp-formatting-and-templates--6e7f748c9c
type: post
title: "BC Word Layout MCP (Part 5): Format layouts and reuse a Word design"
summary: Word layout formatting tools allow changing text and cell styles in Business Central reports while preserving data bindings and field connections. Version 2.0.0 adds font validation warnings and improved table formatting APIs, enabling designers to modify appearance or convert existing Word documents to BC layouts without rebuilding fields.
tier: community
language: en
tags:
  - word layouts
  - report formatting
  - mcp tools
  - template design
  - field bindings
  - font management
  - layout reuse
system: reporting
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
  input_hash: 87c1c220fcbe1e78ea5e2dc3ff7713ea609c9e660a5bbeec4fe7a30b954c50c0
evidence:
  - kind: blog
    url: https://bccaptain.com.au/2026/10/24/bc-word-layout-mcp-formatting-and-templates/
    title: "BC Word Layout MCP (Part 5): Format layouts and reuse a Word design"
    date: "2026-10-24"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://bccaptain.com.au/2026/10/24/bc-word-layout-mcp-formatting-and-templates/
    title: "BC Word Layout MCP (Part 5): Format layouts and reuse a Word design"
    date: "2026-10-24"
    commit: null
    t: null
    quote: Formatting is selective. Asking for a blue date field should not reset its existing size or font.
  - kind: blog
    url: https://bccaptain.com.au/2026/10/24/bc-word-layout-mcp-formatting-and-templates/
    title: "BC Word Layout MCP (Part 5): Format layouts and reuse a Word design"
    date: "2026-10-24"
    commit: null
    t: null
    quote: A font installed on your laptop is not necessarily available in BC online.
  - kind: blog
    url: https://bccaptain.com.au/2026/10/24/bc-word-layout-mcp-formatting-and-templates/
    title: "BC Word Layout MCP (Part 5): Format layouts and reuse a Word design"
    date: "2026-10-24"
    commit: null
    t: null
    quote: That confirmation matters more than the colour choices. A sample customer's PO number should not become BC's own document number.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://bccaptain.com.au/2026/10/24/bc-word-layout-mcp-formatting-and-templates/
source_id: bccaptain-com-au
source_name: BC Captain
url: https://bccaptain.com.au/2026/10/24/bc-word-layout-mcp-formatting-and-templates/
published_at: "2026-10-24T12:00:00.000Z"
author: Tom Kapitan
full_text: false
words: 1192
quotes:
  - text: Formatting is selective. Asking for a blue date field should not reset its existing size or font.
    why_it_matters: Explains that format objects only override specified properties, preserving unmodified settings
  - text: A font installed on your laptop is not necessarily available in BC online.
    why_it_matters: Critical reminder that local design preview does not guarantee font availability in production BC
  - text: That confirmation matters more than the colour choices. A sample customer's PO number should not become BC's own document number.
    why_it_matters: Emphasizes that field mapping accuracy is more important than visual design when converting existing documents
code_objects_mentioned:
  - other BcWordLayout.Mcp@2.0.0
  - other al-word-layout-from-design
  - other al-word-layout-composite
systems:
  - reporting
  - development
versions_mentioned:
  - 2.0.0
cautions:
  - kind: warning
    quote: A font installed on your laptop is not necessarily available in BC online.
    objects: []
    events: []
    versions:
      - 2.0.0
  - kind: gotcha
    quote: A good local preview is not a promise of identical fonts or pagination in BC.
    objects: []
    events: []
    versions:
      - 2.0.0
  - kind: warning
    quote: BC can refuse layouts that retain a link to an external Word template.
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
  probed_at: "2026-10-30T07:51:47.614Z"
---

# BC Word Layout MCP (Part 5): Format layouts and reuse a Word design

[Read the post](https://bccaptain.com.au/2026/10/24/bc-word-layout-mcp-formatting-and-templates/) · BC Captain (Tom Kapitan) · 2026-10-24 · 1192 words · tier community · reviewed (checked by Opus)

> Word layout formatting tools allow changing text and cell styles in Business Central reports while preserving data bindings and field connections. Version 2.0.0 adds font validation warnings and improved table formatting APIs, enabling designers to modify appearance or convert existing Word documents to BC layouts without rebuilding fields.

## Key points

- set_text_format and set_cell_format tools change visual appearance while keeping field bindings intact
- Font warnings alert users when layouts use fonts unavailable in BC online unless embedded
- Designers can start from existing Word documents by mapping sample values to BC fields with agent guidance
- Letterhead templates can be reused by providing templatePath and schemaSource to create_layout without replacing design content
- API structure changed in v2.0.0 to use JSON arrays instead of comma-separated values and moved format properties into format object

## Quotes

- "Formatting is selective. Asking for a blue date field should not reset its existing size or font." (Explains that format objects only override specified properties, preserving unmodified settings)
- "A font installed on your laptop is not necessarily available in BC online." (Critical reminder that local design preview does not guarantee font availability in production BC)
- "That confirmation matters more than the colour choices. A sample customer's PO number should not become BC's own document number." (Emphasizes that field mapping accuracy is more important than visual design when converting existing documents)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "BcWordLayout.Mcp@2.0.0"
- other "al-word-layout-from-design"
- other "al-word-layout-composite"

## Heads up

- warning: "A font installed on your laptop is not necessarily available in BC online." (about version 2.0.0)
- gotcha: "A good local preview is not a promise of identical fonts or pagination in BC." (about version 2.0.0)
- warning: "BC can refuse layouts that retain a link to an external Word template." (about version 2.0.0)

## Context

- Features: set_text_format tool, set_cell_format tool, create_layout with templates, font validation warnings, cell fill and border formatting, field binding preservation, design-to-layout conversion workflow, header/footer layout support
- Versions: 2.0.0

Source: BC Captain, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
