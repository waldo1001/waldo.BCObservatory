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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:47:21.509Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: b5bbf9d96120a852458deb5459c3775cc8033cc98176b23df9b2fdd714262142
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
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
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
---

# BC Friday Tips #35 Item Journal Posting and Warehouse Entries

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-35-item-journal-posting-and-warehouse-entries/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-06-13 · 115 words · tier community · **unreviewed** (machine-generated)

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

As named in the post; not yet joined to the code pillar.

- codeunit "Item Jnl.-Post Line"
- codeunit "Item Jnl.-Post Batch"

## Context

- Features: Item Journal Posting, Warehouse Entries

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
