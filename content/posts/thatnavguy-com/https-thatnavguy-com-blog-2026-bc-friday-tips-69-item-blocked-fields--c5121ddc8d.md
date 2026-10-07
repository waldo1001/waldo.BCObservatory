---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-69-item-blocked-fields--c5121ddc8d
type: post
title: "BC Friday Tips #69 Item Blocked Fields"
summary: The Item table in Business Central has multiple blocked fields (Blocked, Sales Blocked, Purchasing Blocked, Service Blocked) that control item restrictions. Checking only the main Blocked field can miss module-specific restrictions and cause logic errors.
tier: community
language: en
tags:
  - item management
  - blocked fields
  - data validation
  - development best practices
  - business logic
system: inventory
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
  input_hash: 8d89b9998ffac1cfe33ff35a9617ed26ed121a3f7c963486b97735e3b5045eff
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-69-item-blocked-fields/
    title: "BC Friday Tips #69 Item Blocked Fields"
    date: "2026-04-10"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-69-item-blocked-fields/
    title: "BC Friday Tips #69 Item Blocked Fields"
    date: "2026-04-10"
    commit: null
    t: null
    quote: If your code only checks the Blocked field, your logic can break.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-69-item-blocked-fields/
    title: "BC Friday Tips #69 Item Blocked Fields"
    date: "2026-04-10"
    commit: null
    t: null
    quote: You may allow actions that should be restricted, such as sales on items that are blocked for sales.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2026/bc-friday-tips-69-item-blocked-fields/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-friday-tips-69-item-blocked-fields/
published_at: "2026-04-10T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 109
quotes:
  - text: If your code only checks the Blocked field, your logic can break.
    why_it_matters: Highlights the critical risk of incomplete validation that leads to unintended behavior
  - text: You may allow actions that should be restricted, such as sales on items that are blocked for sales.
    why_it_matters: Demonstrates the specific consequence of ignoring module-specific blocked fields
code_objects_mentioned:
  - table Item
  - table Item Variant
systems:
  - inventory
  - sales
  - purchasing
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/og/2026/bc-friday-tips-69-item-blocked-fields.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:50:41.168Z"
---

# BC Friday Tips #69 Item Blocked Fields

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-69-item-blocked-fields/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-04-10 · 109 words · tier community · **unreviewed** (machine-generated)

> The Item table in Business Central has multiple blocked fields (Blocked, Sales Blocked, Purchasing Blocked, Service Blocked) that control item restrictions. Checking only the main Blocked field can miss module-specific restrictions and cause logic errors.

## Key points

- Item table contains multiple separate blocked fields for different modules
- Checking only the generic Blocked field can allow restricted actions like sales on sales-blocked items
- Item Variant and other tables also have multiple blocked fields
- Developers should validate against all relevant blocked fields based on context
- Ignoring module-specific fields creates bugs that only appear in certain scenarios

## Quotes

- "If your code only checks the Blocked field, your logic can break." (Highlights the critical risk of incomplete validation that leads to unintended behavior)
- "You may allow actions that should be restricted, such as sales on items that are blocked for sales." (Demonstrates the specific consequence of ignoring module-specific blocked fields)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- table "Item"
- table "Item Variant"

## Context

- Features: Item blocking, Sales blocking, Purchasing blocking, Service blocking

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
