---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-67-reset-page-number-in-rdlc--4fc41d0f62
type: post
title: "BC Friday Tips #67 Reset Page Number in RDLC"
summary: The ResetPageNumber property in RDLC reports restarts page numbering at 1 for each group or document, matching user expectations when printing multiple groups.
tier: community
language: en
tags:
  - rdlc
  - page numbers
  - row groups
  - report design
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T12:54:54.417Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 04ccf933eaa5f031eb9767c9b82c4e04c6e2749511335e06ade5fe9f5a055d85
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-67-reset-page-number-in-rdlc/
    title: "BC Friday Tips #67 Reset Page Number in RDLC"
    date: "2026-03-27"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-67-reset-page-number-in-rdlc/
    title: "BC Friday Tips #67 Reset Page Number in RDLC"
    date: "2026-03-27"
    commit: null
    t: null
    quote: Each group or document starts at Page 1
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-67-reset-page-number-in-rdlc/
    title: "BC Friday Tips #67 Reset Page Number in RDLC"
    date: "2026-03-27"
    commit: null
    t: null
    quote: Use the ResetPageNumber property on your row group. Set it to True.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2026/bc-friday-tips-67-reset-page-number-in-rdlc/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-friday-tips-67-reset-page-number-in-rdlc/
published_at: "2026-03-27T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 55
quotes:
  - text: Each group or document starts at Page 1
    why_it_matters: Explains the key benefit of using ResetPageNumber - users see logical page breaks aligned with their data grouping
  - text: Use the ResetPageNumber property on your row group. Set it to True.
    why_it_matters: Provides the exact implementation approach - a simple configuration change on row groups solves the problem
code_objects_mentioned: []
systems:
  - reporting
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/og/2026/bc-friday-tips-67-reset-page-number-in-rdlc.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:50:44.182Z"
---

# BC Friday Tips #67 Reset Page Number in RDLC

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-67-reset-page-number-in-rdlc/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-03-27 · 55 words · tier community · **unreviewed** (machine-generated)

> The ResetPageNumber property in RDLC reports restarts page numbering at 1 for each group or document, matching user expectations when printing multiple groups.

## Key points

- Set ResetPageNumber to True on row groups in RDLC
- Page numbering restarts at 1 for each group or document
- Aligns report output with typical user expectations for grouped or multi-document reports

## Quotes

- "Each group or document starts at Page 1" (Explains the key benefit of using ResetPageNumber - users see logical page breaks aligned with their data grouping)
- "Use the ResetPageNumber property on your row group. Set it to True." (Provides the exact implementation approach - a simple configuration change on row groups solves the problem)

## Context

- Features: ResetPageNumber property

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
