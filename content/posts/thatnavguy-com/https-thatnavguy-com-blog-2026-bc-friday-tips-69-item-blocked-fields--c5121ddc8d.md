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
  state: reviewed
  by: opus
  at: "2026-10-08T01:55:36.135Z"
  flags: []
generated:
  at: "2026-10-26T05:51:10.938Z"
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
  objects:
    - object/table/27
    - object/table/5401
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  related:
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-84-item-missing-from-sales-line-lookup--ac89a8fbc6
      title: "BC Friday Tips #84 Why Is Your Item Missing from the Sales Line Lookup?"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: post/yzhums-com/68174
      title: "Business Central 2025 wave 2 (BC27): App version in “Copy error details”/”Share details via”"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: post/demiliani-com/11962
      title: "Dynamics 365 Business Central: compressing API responses at max."
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: post/yzhums-com/74458
      title: "Dynamics 365 Business Central: How to add Filter by item attributes to the Item Ledger Entries page"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: post/yzhums-com/65326
      title: "Dynamics 365 Business Central: How to bulk import marketing text to items – Customization"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: post/yzhums-com/65156
      title: "Dynamics 365 Business Central: How to change Zero (0) of Flowfield field to Dash (-) on the page"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: post/yzhums-com/57334
      title: "Dynamics 365 Business Central: Why are the newly added fields in drop-down not displayed? (e.g., adding item Search Description to DropDown fieldgroup)"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: video/mHrY_OI0qNo
      title: "Introducing: AI-Powered Analysis with Copilot (2024 release wave 1)"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: video/cZCSi6khZFo
      title: "Introducing: Sales Lines Suggestions with Copilot ( 2024 release wave 1)"
      label: possibly related
      why: both name Table 27 "Item"
      by: code
    - to: post/aardvarklabs-blog/3118
      title: Leveraging RecordRef and FieldRef for Dynamic Coding
      label: possibly related
      why: both name Table 27 "Item"
      by: code
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
cautions:
  - kind: gotcha
    quote: If your code only checks the Blocked field, your logic can break.
    objects:
      - type: table
        name: Item
    events: []
    versions: []
  - kind: warning
    quote: You may allow actions that should be restricted, such as sales on items that are blocked for sales.
    objects:
      - type: table
        name: Item
    events: []
    versions: []
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

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-69-item-blocked-fields/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-04-10 · 109 words · tier community · reviewed (checked by Opus)

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

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 27 "Item"](../../objects/table/27.md)
- [table 5401 "Item Variant"](../../objects/table/5401.md)

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [BC Friday Tips #84 Why Is Your Item Missing from the Sales Line Lookup?](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-84-item-missing-from-sales-line-lookup--ac89a8fbc6.md) — possibly related: both name Table 27 "Item"
- [Business Central 2025 wave 2 (BC27): App version in “Copy error details”/”Share details via”](../../posts/yzhums-com/68174.md) — possibly related: both name Table 27 "Item"
- [Dynamics 365 Business Central: compressing API responses at max.](../../posts/demiliani-com/11962.md) — possibly related: both name Table 27 "Item"
- [Dynamics 365 Business Central: How to add Filter by item attributes to the Item Ledger Entries page](../../posts/yzhums-com/74458.md) — possibly related: both name Table 27 "Item"
- [Dynamics 365 Business Central: How to bulk import marketing text to items – Customization](../../posts/yzhums-com/65326.md) — possibly related: both name Table 27 "Item"
- [Dynamics 365 Business Central: How to change Zero (0) of Flowfield field to Dash (-) on the page](../../posts/yzhums-com/65156.md) — possibly related: both name Table 27 "Item"
- [Dynamics 365 Business Central: Why are the newly added fields in drop-down not displayed? (e.g., adding item Search Description to DropDown fieldgroup)](../../posts/yzhums-com/57334.md) — possibly related: both name Table 27 "Item"
- [Introducing: AI-Powered Analysis with Copilot (2024 release wave 1)](../../videos/mHrY_OI0qNo.md) — possibly related: both name Table 27 "Item"
- [Introducing: Sales Lines Suggestions with Copilot ( 2024 release wave 1)](../../videos/cZCSi6khZFo.md) — possibly related: both name Table 27 "Item"
- [Leveraging RecordRef and FieldRef for Dynamic Coding](../../posts/aardvarklabs-blog/3118.md) — possibly related: both name Table 27 "Item"

## Heads up

- gotcha: "If your code only checks the Blocked field, your logic can break." (about table Item)
- warning: "You may allow actions that should be restricted, such as sales on items that are blocked for sales." (about table Item)

## Context

- Features: Item blocking, Sales blocking, Purchasing blocking, Service blocking

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
