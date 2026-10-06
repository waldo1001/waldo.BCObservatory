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
  at: "2026-10-06T21:54:52.208Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 118ab49805d31b5b1b0cd74e6877aa744842c73faa5bccd0dd8dcff005de289a
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
  objects: []
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
---

# BC Friday Tips #74 Copy Document and Custom Field

> When adding custom fields to Sales Header or Sales Invoice Header tables, developers must consider how the Copy Document feature will handle those fields. The post explains that custom fields are automatically copied along with documents, requiring developers to decide whether values should be copied, cleared, or recalculated to maintain data integrity.

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-06-26 · 122 words · tier community · **unreviewed** (machine-generated)

## Key points

- Custom fields added to Sales tables are automatically included when users copy documents
- Developers must determine for each field whether its value should be copied, cleared, or recalculated
- Improper Copy Document behavior can introduce invalid data and cause process issues
- Field design decisions at creation time prevent problems during document operations

## Quotes

- "If users use Copy Document, your custom field will be copied too." (This explains that custom fields are not exempt from Copy Document behavior, making developers responsible for controlling this behavior)
- "A small design decision now can prevent a lot of problems later." (This emphasizes the importance of planning Copy Document behavior upfront rather than fixing it reactively)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- table "Sales Header"
- table "Sales Invoice Header"

## Context

- Features: Copy Document, Custom Fields, Data Validation

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
