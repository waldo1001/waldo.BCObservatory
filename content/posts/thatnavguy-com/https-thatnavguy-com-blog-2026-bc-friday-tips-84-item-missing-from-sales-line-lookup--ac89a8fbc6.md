---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-84-item-missing-from-sales-line-lookup--ac89a8fbc6
type: post
title: "BC Friday Tips #84 Why Is Your Item Missing from the Sales Line Lookup?"
summary: Items missing from sales line lookups are often caused by the Blocked or Sales Blocked fields being enabled on the item card, not by AL code issues. Checking these two fields first can quickly resolve lookup filtering problems.
tier: community
language: en
tags:
  - item lookup
  - sales line
  - item blocking
  - filtering
  - troubleshooting
system: sales
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-15T00:21:58.873Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 4fb374325fbb06bbe349c29b4318f304568bed493f4cefe7c506e24433f2a2d2
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-84-item-missing-from-sales-line-lookup/
    title: "BC Friday Tips #84 Why Is Your Item Missing from the Sales Line Lookup?"
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-84-item-missing-from-sales-line-lookup/
    title: "BC Friday Tips #84 Why Is Your Item Missing from the Sales Line Lookup?"
    date: "2026-10-09"
    commit: null
    t: null
    quote: If either field is enabled, the item is filtered out of the standard Sales Line lookup.
links:
  learn: []
  objects:
    - object/table/27
    - object/table/37
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2026/bc-friday-tips-84-item-missing-from-sales-line-lookup/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-friday-tips-84-item-missing-from-sales-line-lookup/
published_at: "2026-10-09T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 93
quotes:
  - text: If either field is enabled, the item is filtered out of the standard Sales Line lookup.
    why_it_matters: Identifies the exact mechanism that prevents items from appearing in lookups, enabling quick resolution.
code_objects_mentioned:
  - table Item
  - table Sales Line
systems:
  - sales
  - inventory
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: null
  probed_at: "2026-10-07T11:51:44.627Z"
---

# BC Friday Tips #84 Why Is Your Item Missing from the Sales Line Lookup?

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-84-item-missing-from-sales-line-lookup/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-10-09 · 93 words · tier community · **unreviewed** (model text not yet checked)

> Items missing from sales line lookups are often caused by the Blocked or Sales Blocked fields being enabled on the item card, not by AL code issues. Checking these two fields first can quickly resolve lookup filtering problems.

## Key points

- The Blocked and Sales Blocked fields on the item card filter items out of the standard Sales Line lookup.
- These fields are the first place to check when items don't appear in sales line dropdowns.
- Understanding standard Business Central filtering can prevent unnecessary AL code debugging.
- This is a configuration issue resolved through the item card, not a development problem.

## Quotes

- "If either field is enabled, the item is filtered out of the standard Sales Line lookup." (Identifies the exact mechanism that prevents items from appearing in lookups, enabling quick resolution.)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 27 "Item"](../../objects/table/27.md)
- [table 37 "Sales Line"](../../objects/table/37.md)

## Context

- Features: Item lookup, Sales Line filtering, Blocked field, Sales Blocked field

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
