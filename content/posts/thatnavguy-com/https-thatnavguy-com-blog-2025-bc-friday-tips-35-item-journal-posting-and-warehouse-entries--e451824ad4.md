---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-35-item-journal-posting-and-warehouse-entries--e451824ad4
type: post
title: "BC Friday Tips #35 Item Journal Posting and Warehouse Entries"
summary: "Item journal posting in AL has two codeunits: Codeunit 22 posts individual lines while Codeunit 23 posts entire batches. When warehouse entries are needed, use Codeunit 23 even for single lines, as Codeunit 22 silently fails to create warehouse entries without throwing an error."
tier: community
language: en
tags:
  - item journal
  - posting
  - warehouse entries
  - codeunit
  - al development
system: warehouse
review:
  state: reviewed
  by: opus
  at: "2026-10-08T02:00:42.586Z"
  flags: []
generated:
  at: "2026-10-24T01:02:25.817Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 331a8ed079103b5a4367ba780fcc6c71ba3d0d6a65b7af6ad1b1d5cc7507dd69
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-35-item-journal-posting-and-warehouse-entries/
    title: "BC Friday Tips #35 Item Journal Posting and Warehouse Entries"
    date: "2025-06-13"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-35-item-journal-posting-and-warehouse-entries/
    title: "BC Friday Tips #35 Item Journal Posting and Warehouse Entries"
    date: "2025-06-13"
    commit: null
    t: null
    quote: Posting with Codeunit 22 doesn't create warehouse entries. It won't even throw an error.
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-35-item-journal-posting-and-warehouse-entries/
    title: "BC Friday Tips #35 Item Journal Posting and Warehouse Entries"
    date: "2025-06-13"
    commit: null
    t: null
    quote: Always use Codeunit 23 "Item Jnl.-Post Batch" when warehouse entries are involved. Even if you're only posting one line.
links:
  learn: []
  objects:
    - object/codeunit/22
    - object/codeunit/23
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/design-details-cost-adjustment
      title: Design details - Cost adjustment
      label: possibly related
      why: names Codeunit 22 "Item Jnl.-Post Line"
      by: code
    - to: https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-posting-structure
      title: Design details - Item tracking posting structure
      label: possibly related
      why: names Codeunit 22 "Item Jnl.-Post Line"
      by: code
    - to: post/gerardorenteria-blog/13043
      title: New Application Ideas of Dynamics 365 Business Central (2025 NOV)
      label: possibly related
      why: both name Codeunit 22 "Item Jnl.-Post Line"
      by: code
post_id: https://thatnavguy.com/blog/2025/bc-friday-tips-35-item-journal-posting-and-warehouse-entries/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2025/bc-friday-tips-35-item-journal-posting-and-warehouse-entries/
published_at: "2025-06-13T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 115
quotes:
  - text: Posting with Codeunit 22 doesn't create warehouse entries. It won't even throw an error.
    why_it_matters: Developers need to know that Codeunit 22 silently fails to create warehouse entries, which can lead to missed data without any error indication.
  - text: Always use Codeunit 23 "Item Jnl.-Post Batch" when warehouse entries are involved. Even if you're only posting one line.
    why_it_matters: This is the critical best practice that prevents data integrity issues when posting to warehouses.
code_objects_mentioned:
  - codeunit Item Jnl.-Post Line
  - codeunit Item Jnl.-Post Batch
systems:
  - warehouse
  - inventory
versions_mentioned: []
cautions:
  - kind: gotcha
    quote: Posting with Codeunit 22 doesn't create warehouse entries. It won't even throw an error.
    objects:
      - type: codeunit
        name: Item Jnl.-Post Line
    events: []
    versions: []
  - kind: warning
    quote: Always use Codeunit 23 "Item Jnl.-Post Batch" when warehouse entries are involved.
    objects:
      - type: codeunit
        name: Item Jnl.-Post Line
      - type: codeunit
        name: Item Jnl.-Post Batch
    events: []
    versions: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/og/2025/bc-friday-tips-35-item-journal-posting-and-warehouse-entries.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:51:32.290Z"
---

# BC Friday Tips #35 Item Journal Posting and Warehouse Entries

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-35-item-journal-posting-and-warehouse-entries/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-06-13 · 115 words · tier community · reviewed (checked by Opus)

> Item journal posting in AL has two codeunits: Codeunit 22 posts individual lines while Codeunit 23 posts entire batches. When warehouse entries are needed, use Codeunit 23 even for single lines, as Codeunit 22 silently fails to create warehouse entries without throwing an error.

## Key points

- Codeunit 22 posts one journal line at a time
- Codeunit 23 posts all lines in a batch
- Codeunit 22 does not create warehouse entries and won't error
- Always use Codeunit 23 when warehouse entries are involved

## Quotes

- "Posting with Codeunit 22 doesn't create warehouse entries. It won't even throw an error." (Developers need to know that Codeunit 22 silently fails to create warehouse entries, which can lead to missed data without any error indication.)
- "Always use Codeunit 23 "Item Jnl.-Post Batch" when warehouse entries are involved. Even if you're only posting one line." (This is the critical best practice that prevents data integrity issues when posting to warehouses.)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [codeunit 22 "Item Jnl.-Post Line"](../../objects/codeunit/22.md)
- [codeunit 23 "Item Jnl.-Post Batch"](../../objects/codeunit/23.md)

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Design details - Cost adjustment](https://learn.microsoft.com/dynamics365/business-central/design-details-cost-adjustment) — possibly related: names Codeunit 22 "Item Jnl.-Post Line"
- [Design details - Item tracking posting structure](https://learn.microsoft.com/dynamics365/business-central/design-details-item-tracking-posting-structure) — possibly related: names Codeunit 22 "Item Jnl.-Post Line"
- [New Application Ideas of Dynamics 365 Business Central (2025 NOV)](../../posts/gerardorenteria-blog/13043.md) — possibly related: both name Codeunit 22 "Item Jnl.-Post Line"

## Heads up

- gotcha: "Posting with Codeunit 22 doesn't create warehouse entries. It won't even throw an error." (about codeunit Item Jnl.-Post Line)
- warning: "Always use Codeunit 23 "Item Jnl.-Post Batch" when warehouse entries are involved." (about codeunit Item Jnl.-Post Line, codeunit Item Jnl.-Post Batch)

## Context

- Features: Item Journal Posting, Warehouse Entries

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
