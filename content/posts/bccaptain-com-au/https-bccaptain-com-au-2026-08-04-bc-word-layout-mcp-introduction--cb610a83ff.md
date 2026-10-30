---
id: post/bccaptain-com-au/https-bccaptain-com-au-2026-08-04-bc-word-layout-mcp-introduction--cb610a83ff
type: post
title: "BC Word Layout MCP (Part 1): Get started with AI-assisted Word layouts"
summary: BC Word Layout MCP is an AI-assisted tool for developers and functional consultants to modify Word report layouts in Business Central. It provides inspection, editing, validation, and preview capabilities without requiring knowledge of Word's internal document structure, and works with exported layouts using local file permissions.
tier: community
language: en
tags:
  - word layouts
  - report design
  - ai-assisted editing
  - mcp
  - agent tools
  - layout validation
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-30T08:07:46.172Z"
  flags: []
generated:
  at: "2026-10-30T07:47:07.587Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: e91a50ed1c136e3acffb6beee739c410c7e096cfa3a0e4e1cb1c224c646dfa2f
evidence:
  - kind: blog
    url: https://bccaptain.com.au/2026/08/04/bc-word-layout-mcp-introduction/
    title: "BC Word Layout MCP (Part 1): Get started with AI-assisted Word layouts"
    date: "2026-08-04"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://bccaptain.com.au/2026/08/04/bc-word-layout-mcp-introduction/
    title: "BC Word Layout MCP (Part 1): Get started with AI-assisted Word layouts"
    date: "2026-08-04"
    commit: null
    t: null
    quote: The layout can only print what the report dataset provides.
  - kind: blog
    url: https://bccaptain.com.au/2026/08/04/bc-word-layout-mcp-introduction/
    title: "BC Word Layout MCP (Part 1): Get started with AI-assisted Word layouts"
    date: "2026-08-04"
    commit: null
    t: null
    quote: "Use this short loop: inspect, edit, validate, preview, then test in BC."
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://bccaptain.com.au/2026/08/04/bc-word-layout-mcp-introduction/
source_id: bccaptain-com-au
source_name: BC Captain
url: https://bccaptain.com.au/2026/08/04/bc-word-layout-mcp-introduction/
published_at: "2026-08-04T12:00:00.000Z"
author: Tom Kapitan
full_text: false
words: 810
quotes:
  - text: The layout can only print what the report dataset provides.
    why_it_matters: Explains why missing fields require AL developer involvement rather than layout-only solutions
  - text: "Use this short loop: inspect, edit, validate, preview, then test in BC."
    why_it_matters: Provides the recommended workflow for layout changes before production deployment
code_objects_mentioned: []
systems:
  - development
  - reporting
versions_mentioned:
  - v2.0.0
  - v1.0.0
cautions:
  - kind: gotcha
    quote: Do not ask it to invent a dataset field or calculate a missing total inside the Word layout.
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
  probed_at: "2026-10-30T07:51:52.036Z"
---

# BC Word Layout MCP (Part 1): Get started with AI-assisted Word layouts

[Read the post](https://bccaptain.com.au/2026/08/04/bc-word-layout-mcp-introduction/) · BC Captain (Tom Kapitan) · 2026-08-04 · 810 words · tier community · reviewed (checked by Opus)

> BC Word Layout MCP is an AI-assisted tool for developers and functional consultants to modify Word report layouts in Business Central. It provides inspection, editing, validation, and preview capabilities without requiring knowledge of Word's internal document structure, and works with exported layouts using local file permissions.

## Key points

- The agent inspects a layout with get_layout_info and list_dataset_fields, then edits, validates and produces a local preview
- The user must confirm which dataset field matches the business requirement, since the agent only finds the fields that are available
- Missing data has to be added to the report or report extension by an AL developer, after which refresh_xml_part updates the working layout
- v2.0.0 adds two skills: one turns a finished Word design into a bound layout, and one handles separate body, header/footer and theme layouts
- Validation and preview do not prove the right values print, so test the layout in a sandbox before replacing a production layout

## Quotes

- "The layout can only print what the report dataset provides." (Explains why missing fields require AL developer involvement rather than layout-only solutions)
- "Use this short loop: inspect, edit, validate, preview, then test in BC." (Provides the recommended workflow for layout changes before production deployment)

## Heads up

- gotcha: "Do not ask it to invent a dataset field or calculate a missing total inside the Word layout."

## Context

- Features: Word layout inspection, Layout editing, Field binding validation, Document preview generation, Dataset field listing, XML part refresh, Companion design skills
- Versions: v2.0.0, v1.0.0

Source: BC Captain, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
