---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-74-copy-document--70de705561
type: post
title: "BC Friday Tips #74 Copy Document and Custom Field"
summary: When adding custom fields to Sales Header or Sales Invoice Header tables, developers must consider how the Copy Document feature will handle those fields. The post explains that custom fields are automatically copied along with documents, requiring developers to decide whether values should be copied, cleared, or recalculated to maintain data integrity.
tier: community
language: en
tags:
  - copy document
  - custom fields
  - sales header
  - data integrity
  - al development
system: sales
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T20:00:32.874Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 91d2081fd023c776064f3952909bfcdc6c9c5a8b0bf6e527c590947f103ea281
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/
    title: "BC Friday Tips #74 Copy Document and Custom Field"
    date: "2026-06-26"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/
    title: "BC Friday Tips #74 Copy Document and Custom Field"
    date: "2026-06-26"
    commit: null
    t: null
    quote: If users use Copy Document, your custom field will be copied too.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/
    title: "BC Friday Tips #74 Copy Document and Custom Field"
    date: "2026-06-26"
    commit: null
    t: null
    quote: A small design decision now can prevent a lot of problems later.
links:
  learn: []
  objects:
    - object/table/36
    - object/table/112
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/
published_at: "2026-06-26T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 122
quotes:
  - text: If users use Copy Document, your custom field will be copied too.
    why_it_matters: This explains that custom fields are not exempt from Copy Document behavior, making developers responsible for controlling this behavior
  - text: A small design decision now can prevent a lot of problems later.
    why_it_matters: This emphasizes the importance of planning Copy Document behavior upfront rather than fixing it reactively
code_objects_mentioned:
  - table Sales Header
  - table Sales Invoice Header
systems:
  - sales
  - development
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/_astro/CopyDocument.DLm8tooG_Z2d0HU3.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:50:25.803Z"
---

# BC Friday Tips #74 Copy Document and Custom Field

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-06-26 · 122 words · tier community · **unreviewed** (machine-generated)

> When adding custom fields to Sales Header or Sales Invoice Header tables, developers must consider how the Copy Document feature will handle those fields. The post explains that custom fields are automatically copied along with documents, requiring developers to decide whether values should be copied, cleared, or recalculated to maintain data integrity.

## Key points

- Custom fields added to Sales tables are automatically included when users copy documents
- Developers must determine for each field whether its value should be copied, cleared, or recalculated
- Improper Copy Document behavior can introduce invalid data and cause process issues
- Field design decisions at creation time prevent problems during document operations

## Quotes

- "If users use Copy Document, your custom field will be copied too." (This explains that custom fields are not exempt from Copy Document behavior, making developers responsible for controlling this behavior)
- "A small design decision now can prevent a lot of problems later." (This emphasizes the importance of planning Copy Document behavior upfront rather than fixing it reactively)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 36 "Sales Header"](../../objects/table/36.md)
- [table 112 "Sales Invoice Header"](../../objects/table/112.md)

## Context

- Features: Copy Document, Custom Fields, Data Validation

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
