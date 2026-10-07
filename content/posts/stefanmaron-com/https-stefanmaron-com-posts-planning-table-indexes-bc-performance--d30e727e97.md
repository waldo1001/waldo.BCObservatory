---
id: post/stefanmaron-com/https-stefanmaron-com-posts-planning-table-indexes-bc-performance--d30e727e97
type: post
title: Planning Table Indexes for the Best Performance
summary: Table indexes in Business Central speed up reads but slow down writes by 10-20% per index added, creating a tradeoff that requires careful planning. The post explains clustered and non-clustered indexes, SIFT views, columnstore indexes, and practical strategies for choosing which indexes to create based on actual query patterns and access needs.
tier: community
language: en
tags:
  - performance
  - indexes
  - sql server
  - deadlocks
  - table design
  - query optimization
system: platform
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
  input_hash: b1b4b6e35c0599654ee1f9cb400f1917520303ecab7d2b0829495c46dfabe935
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/planning-table-indexes-bc-performance/
    title: Planning Table Indexes for the Best Performance
    date: "2025-08-07"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/planning-table-indexes-bc-performance/
    title: Planning Table Indexes for the Best Performance
    date: "2025-08-07"
    commit: null
    t: null
    quote: Every index you add slows down writes. Insert, update, delete - all of them have to maintain every index on the table.
  - kind: blog
    url: https://stefanmaron.com/posts/planning-table-indexes-bc-performance/
    title: Planning Table Indexes for the Best Performance
    date: "2025-08-07"
    commit: null
    t: null
    quote: Reducing each to 1 SIFT view resolved the problem completely.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/planning-table-indexes-bc-performance/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/planning-table-indexes-bc-performance/
published_at: "2025-08-07T07:00:00.000Z"
author: Stefan Maron
full_text: false
words: 2072
quotes:
  - text: Every index you add slows down writes. Insert, update, delete - all of them have to maintain every index on the table.
    why_it_matters: This core tradeoff explains why indexes must be carefully justified; they solve read performance at the cost of write performance across all DML operations.
  - text: Reducing each to 1 SIFT view resolved the problem completely.
    why_it_matters: Demonstrates that multiple SIFT views cause real-world deadlock problems in production; shows the direct impact of configuration choices on system stability.
code_objects_mentioned:
  - other SIFT
  - other NCCI
  - query Query objects
systems:
  - platform
  - development
  - finance
versions_mentioned:
  - v26.0
  - 2025 release wave 1
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:59.398Z"
---

# Planning Table Indexes for the Best Performance

[Read the post](https://stefanmaron.com/posts/planning-table-indexes-bc-performance/) · Stefan Maron (Stefan Maron, MVP) · 2025-08-07 · 2072 words · tier community · **unreviewed** (machine-generated)

> Table indexes in Business Central speed up reads but slow down writes by 10-20% per index added, creating a tradeoff that requires careful planning. The post explains clustered and non-clustered indexes, SIFT views, columnstore indexes, and practical strategies for choosing which indexes to create based on actual query patterns and access needs.

## Key points

- Every added index increases insert or update time by 10-20% and can raise deadlock risk in multi-user environments; justify each index by confirming it's actually needed and used
- Clustered indexes define physical row ordering and are used by Get() and range queries; non-clustered indexes speed lookups on non-primary-key fields but BC limits you to 40 per table
- SIFT views pre-calculate aggregations for fast reads but acquire range locks that cause deadlocks under concurrent writes; limit to 1-2 SIFT views on write-heavy tables
- Columnstore indexes compress data and skip million-row segments but don't support seeks or ordering in BC, making them suited only for large infrequent GROUP BY queries, not loop-based CalcSums
- Use Query objects instead of FindSet for covering indexes because Query's predictable SELECT clause makes truly covering indexes achievable, whereas FindSet adds unpredictable system and subscriber fields

## Quotes

- "Every index you add slows down writes. Insert, update, delete - all of them have to maintain every index on the table." (This core tradeoff explains why indexes must be carefully justified; they solve read performance at the cost of write performance across all DML operations.)
- "Reducing each to 1 SIFT view resolved the problem completely." (Demonstrates that multiple SIFT views cause real-world deadlock problems in production; shows the direct impact of configuration choices on system stability.)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "SIFT"
- other "NCCI"
- query "Query objects"

Not found in BC28-30: query "Query objects".

## Context

- Features: Clustered Indexes, Non-Clustered Indexes, Covering Indexes, IncludedFields, SIFT Views, Columnstore Indexes, Query Objects
- Versions: v26.0, 2025 release wave 1

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
