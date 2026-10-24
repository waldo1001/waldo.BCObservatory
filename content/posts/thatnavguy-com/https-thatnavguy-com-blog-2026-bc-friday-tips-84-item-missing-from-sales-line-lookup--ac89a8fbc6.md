---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-84-item-missing-from-sales-line-lookup--ac89a8fbc6
type: post
title: "BC Friday Tips #84 Why Is Your Item Missing from the Sales Line Lookup?"
summary: When an item does not appear in the Sales Line item lookup, check the Blocked and Sales Blocked fields on the Item card. If either is enabled, standard filtering hides the item from the lookup, so check these fields before debugging AL code.
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
  state: reviewed
  by: opus
  at: "2026-10-16T01:16:52.043Z"
  flags: []
generated:
  at: "2026-10-23T22:03:43.080Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: bfee70f14ae2d1981d99c4329c949234f3fe2fca8e72be763df33ade70df682f
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
  related:
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea
      title: "BC Friday Tips #56 Understand Missing Fields in Copy Documents"
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-69-item-blocked-fields--c5121ddc8d
      title: "BC Friday Tips #69 Item Blocked Fields"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: post/kine-cz/https-blog-kine-cz-posts-bcdevelopmentserie-02b--0078d7faba
      title: "Business Central Development Serie - Part 2b: AI for BC Development — The Knowledge Gap That Ships to Production"
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: post/demiliani-com/11962
      title: "Dynamics 365 Business Central: compressing API responses at max."
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: post/aardvarklabs-blog/1891
      title: Implementing a Multi-Step Process for AI Recommendations in Business Central
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: post/duiliotacconi-com/2001
      title: Index Management with Dynamics 365 Business Central 2026 Wave 1
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: video/mHrY_OI0qNo
      title: "Introducing: AI-Powered Analysis with Copilot (2024 release wave 1)"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: video/cZCSi6khZFo
      title: "Introducing: Sales Lines Suggestions with Copilot ( 2024 release wave 1)"
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: post/aardvarklabs-blog/3118
      title: Leveraging RecordRef and FieldRef for Dynamic Coding
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: post/duiliotacconi-com/2149
      title: "Partial Record vs NST Caching : the strange case of Calculate Low Level Code"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
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
  image: https://thatnavguy.com/_astro/MissingItemOnSalesLine.BLf0GInI_1yyXm.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-16T01:14:09.508Z"
---

# BC Friday Tips #84 Why Is Your Item Missing from the Sales Line Lookup?

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-84-item-missing-from-sales-line-lookup/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-10-09 · 93 words · tier community · reviewed (checked by Opus)

> When an item does not appear in the Sales Line item lookup, check the Blocked and Sales Blocked fields on the Item card. If either is enabled, standard filtering hides the item from the lookup, so check these fields before debugging AL code.

## Key points

- Enabling Blocked or Sales Blocked on the Item card hides the item from the standard Sales Line item lookup.
- Check these two fields first when an item is missing from the lookup.
- Doing so can show that standard BC filtering is the cause before anyone spends time debugging AL code.

## Quotes

- "If either field is enabled, the item is filtered out of the standard Sales Line lookup." (Identifies the exact mechanism that prevents items from appearing in lookups, enabling quick resolution.)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 27 "Item"](../../objects/table/27.md)
- [table 37 "Sales Line"](../../objects/table/37.md)

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [BC Friday Tips #56 Understand Missing Fields in Copy Documents](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea.md) — possibly related: both name Table 37 "Sales Line"
- [BC Friday Tips #69 Item Blocked Fields](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-69-item-blocked-fields--c5121ddc8d.md) — possibly related: both name Table 27 "Item"
- [Business Central Development Serie - Part 2b: AI for BC Development — The Knowledge Gap That Ships to Production](../../posts/kine-cz/https-blog-kine-cz-posts-bcdevelopmentserie-02b--0078d7faba.md) — possibly related: both name Table 37 "Sales Line"
- [Dynamics 365 Business Central: compressing API responses at max.](../../posts/demiliani-com/11962.md) — possibly related: both name Table 27 "Item"
- [Implementing a Multi-Step Process for AI Recommendations in Business Central](../../posts/aardvarklabs-blog/1891.md) — possibly related: both name Table 37 "Sales Line"
- [Index Management with Dynamics 365 Business Central 2026 Wave 1](../../posts/duiliotacconi-com/2001.md) — possibly related: both name Table 37 "Sales Line"
- [Introducing: AI-Powered Analysis with Copilot (2024 release wave 1)](../../videos/mHrY_OI0qNo.md) — possibly related: both name Table 27 "Item"
- [Introducing: Sales Lines Suggestions with Copilot ( 2024 release wave 1)](../../videos/cZCSi6khZFo.md) — possibly related: both name Table 37 "Sales Line"
- [Leveraging RecordRef and FieldRef for Dynamic Coding](../../posts/aardvarklabs-blog/3118.md) — possibly related: both name Table 27 "Item"
- [Partial Record vs NST Caching : the strange case of Calculate Low Level Code](../../posts/duiliotacconi-com/2149.md) — possibly related: both name Table 27 "Item"

## Context

- Features: Item lookup, Sales Line filtering, Blocked field, Sales Blocked field

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
