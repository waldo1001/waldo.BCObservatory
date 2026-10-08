---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-57-use-teststatusopen-procedure--4cae7fe378
type: post
title: "BC Friday Tips #57 Use TestStatusOpen Procedure"
summary: When adding new fields to Sales or Purchase documents in Business Central, use the TestStatusOpen procedure during validation to ensure fields cannot be edited after the document is released. This prevents accidental changes to important order data and maintains workflow consistency.
tier: community
language: en
tags:
  - document management
  - field validation
  - order release
  - data protection
  - sales orders
  - purchase orders
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:58:17.935Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 13777d64701c042190cd98caecb38e303ba93c04ad3c5ad0118632c637839f4f
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-57-use-teststatusopen-procedure/
    title: "BC Friday Tips #57 Use TestStatusOpen Procedure"
    date: "2025-11-21"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-57-use-teststatusopen-procedure/
    title: "BC Friday Tips #57 Use TestStatusOpen Procedure"
    date: "2025-11-21"
    commit: null
    t: null
    quote: Use the TestStatusOpen procedure when you validate your new fields. It gives you a standard check on document status.
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-57-use-teststatusopen-procedure/
    title: "BC Friday Tips #57 Use TestStatusOpen Procedure"
    date: "2025-11-21"
    commit: null
    t: null
    quote: A released Sales Order locks the document for processing.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2025/bc-friday-tips-57-use-teststatusopen-procedure/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2025/bc-friday-tips-57-use-teststatusopen-procedure/
published_at: "2025-11-21T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 101
quotes:
  - text: Use the TestStatusOpen procedure when you validate your new fields. It gives you a standard check on document status.
    why_it_matters: It provides the recommended method for validating field editability based on document release status
  - text: A released Sales Order locks the document for processing.
    why_it_matters: Understanding document locking behavior is essential when adding custom fields that should respect this constraint
code_objects_mentioned:
  - other TestStatusOpen
systems:
  - sales
  - purchasing
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/og/2025/bc-friday-tips-57-use-teststatusopen-procedure.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:50:57.870Z"
---

# BC Friday Tips #57 Use TestStatusOpen Procedure

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-57-use-teststatusopen-procedure/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-11-21 · 101 words · tier community · reviewed (checked by Opus)

> When adding new fields to Sales or Purchase documents in Business Central, use the TestStatusOpen procedure during validation to ensure fields cannot be edited after the document is released. This prevents accidental changes to important order data and maintains workflow consistency.

## Key points

- TestStatusOpen procedure provides a standard check to validate document status before allowing field edits
- Released Sales Orders lock documents and prevent editing of important fields like Shipment Method Code
- Using TestStatusOpen when validating new fields prevents inconsistent field behavior across documents
- Protects workflow accuracy by enforcing edit restrictions on released documents

## Quotes

- "Use the TestStatusOpen procedure when you validate your new fields. It gives you a standard check on document status." (It provides the recommended method for validating field editability based on document release status)
- "A released Sales Order locks the document for processing." (Understanding document locking behavior is essential when adding custom fields that should respect this constraint)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "TestStatusOpen"

## Context

- Features: TestStatusOpen procedure, field validation, document status checking, order locking

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
