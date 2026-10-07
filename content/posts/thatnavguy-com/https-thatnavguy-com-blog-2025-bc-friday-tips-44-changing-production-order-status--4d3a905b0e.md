---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-44-changing-production-order-status--4d3a905b0e
type: post
title: "BC Friday Tips #44 Changing Production Order Status"
summary: When a Production Order status changes in Business Central, the system inserts a new record and deletes the old one rather than modifying it. Understanding this behavior helps avoid errors when subscribing to Insert, Modify, or Delete triggers on Production Orders.
tier: community
language: en
tags:
  - production orders
  - status management
  - al development
  - codeunit behavior
  - trigger logic
system: manufacturing
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:39:23.806Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 624a0930b5676ee4d7378c09a746e04ee1075f6bd1995bc972b30b47936753e5
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-44-changing-production-order-status/
    title: "BC Friday Tips #44 Changing Production Order Status"
    date: "2025-08-22"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-44-changing-production-order-status/
    title: "BC Friday Tips #44 Changing Production Order Status"
    date: "2025-08-22"
    commit: null
    t: null
    quote: You can see this in the TransProdOrder procedure inside codeunit 5407 "Prod. Order Status Management".
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2025/bc-friday-tips-44-changing-production-order-status/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2025/bc-friday-tips-44-changing-production-order-status/
published_at: "2025-08-22T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 94
quotes:
  - text: You can see this in the TransProdOrder procedure inside codeunit 5407 "Prod. Order Status Management".
    why_it_matters: Points developers to the exact location in the codebase where this behavior is implemented
code_objects_mentioned:
  - codeunit Prod. Order Status Management
systems:
  - manufacturing
versions_mentioned: []
---

# BC Friday Tips #44 Changing Production Order Status

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-44-changing-production-order-status/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-08-22 · 94 words · tier community · **unreviewed** (machine-generated)

> When a Production Order status changes in Business Central, the system inserts a new record and deletes the old one rather than modifying it. Understanding this behavior helps avoid errors when subscribing to Insert, Modify, or Delete triggers on Production Orders.

## Key points

- Changing Production Order status creates a new record and removes the old one instead of updating the existing record
- This behavior occurs in the TransProdOrder procedure in codeunit 5407
- Subscriptions to Insert, Modify, or Delete triggers on Production Orders may encounter unexpected results without awareness of this mechanism
- Extra trigger logic can cause errors if not accounting for this record replacement pattern

## Quotes

- "You can see this in the TransProdOrder procedure inside codeunit 5407 "Prod. Order Status Management"." (Points developers to the exact location in the codebase where this behavior is implemented)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- codeunit "Prod. Order Status Management"

## Context

- Features: Production Order status changes, record insertion and deletion

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
