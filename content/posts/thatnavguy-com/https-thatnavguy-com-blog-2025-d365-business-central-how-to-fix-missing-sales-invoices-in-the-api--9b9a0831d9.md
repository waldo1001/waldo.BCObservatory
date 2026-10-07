---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-d365-business-central-how-to-fix-missing-sales-invoices-in-the-api--9b9a0831d9
type: post
title: "D365 Business Central: How to Fix Missing Sales Invoices in the API"
summary: The Sales Invoices API in Business Central aggregates posted and unposted invoices from two source tables. When invoices are missing from the API results, running the API Data Upgrade process from the API Data Upgrade List page resolves the issue by synchronizing the underlying Sales Invoice Entity Aggregate table.
tier: community
language: en
tags:
  - api
  - sales invoices
  - data synchronization
  - troubleshooting
  - job queue
system: integration
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
  input_hash: 6f74293bcf3829646fe58fe7a6e0fcedabddb39a7e8ab52e11e37b5f7744e3c7
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2025/d365-business-central-how-to-fix-missing-sales-invoices-in-the-api/
    title: "D365 Business Central: How to Fix Missing Sales Invoices in the API"
    date: "2025-05-20"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2025/d365-business-central-how-to-fix-missing-sales-invoices-in-the-api/
    title: "D365 Business Central: How to Fix Missing Sales Invoices in the API"
    date: "2025-05-20"
    commit: null
    t: null
    quote: The API for Sales Invoices is based on the table called Sales Invoice Entity Aggregate.
  - kind: blog
    url: https://thatnavguy.com/blog/2025/d365-business-central-how-to-fix-missing-sales-invoices-in-the-api/
    title: "D365 Business Central: How to Fix Missing Sales Invoices in the API"
    date: "2025-05-20"
    commit: null
    t: null
    quote: If invoices are missing, the most likely cause is that the Sales Invoice Entity Aggregate table didn't update properly.
  - kind: blog
    url: https://thatnavguy.com/blog/2025/d365-business-central-how-to-fix-missing-sales-invoices-in-the-api/
    title: "D365 Business Central: How to Fix Missing Sales Invoices in the API"
    date: "2025-05-20"
    commit: null
    t: null
    quote: "Go to the API Data Upgrade List page in Business Central. Find the relevant record: SALES INVOICES, and click Schedule Upgrades."
links:
  learn: []
  objects:
    - object/table/5475
    - object/table/36
    - object/table/112
    - object/page/9994
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2025/d365-business-central-how-to-fix-missing-sales-invoices-in-the-api/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2025/d365-business-central-how-to-fix-missing-sales-invoices-in-the-api/
published_at: "2025-05-20T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 162
quotes:
  - text: The API for Sales Invoices is based on the table called Sales Invoice Entity Aggregate.
    why_it_matters: Identifies the underlying table structure that powers the Sales Invoices API
  - text: If invoices are missing, the most likely cause is that the Sales Invoice Entity Aggregate table didn't update properly.
    why_it_matters: Pinpoints the root cause of missing invoices in API results
  - text: "Go to the API Data Upgrade List page in Business Central. Find the relevant record: SALES INVOICES, and click Schedule Upgrades."
    why_it_matters: Provides the specific steps to resolve the issue
code_objects_mentioned:
  - table Sales Invoice Entity Aggregate
  - table Sales Header
  - table Sales Invoice Header
  - page API Data Upgrade List
systems:
  - integration
  - sales
  - platform
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/og/2025/d365-business-central-how-to-fix-missing-sales-invoices-in-the-api.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:51:36.632Z"
---

# D365 Business Central: How to Fix Missing Sales Invoices in the API

[Read the post](https://thatnavguy.com/blog/2025/d365-business-central-how-to-fix-missing-sales-invoices-in-the-api/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-05-20 · 162 words · tier community · **unreviewed** (machine-generated)

> The Sales Invoices API in Business Central aggregates posted and unposted invoices from two source tables. When invoices are missing from the API results, running the API Data Upgrade process from the API Data Upgrade List page resolves the issue by synchronizing the underlying Sales Invoice Entity Aggregate table.

## Key points

- The Sales Invoices API consolidates data from Sales Header (unposted) and Sales Invoice Header (posted) tables
- Missing invoices indicate the Sales Invoice Entity Aggregate table is out of sync
- The API Data Upgrade process must be scheduled and run as a job queue entry to restore missing data
- Run the upgrade outside business hours for optimal performance

## Quotes

- "The API for Sales Invoices is based on the table called Sales Invoice Entity Aggregate." (Identifies the underlying table structure that powers the Sales Invoices API)
- "If invoices are missing, the most likely cause is that the Sales Invoice Entity Aggregate table didn't update properly." (Pinpoints the root cause of missing invoices in API results)
- "Go to the API Data Upgrade List page in Business Central. Find the relevant record: SALES INVOICES, and click Schedule Upgrades." (Provides the specific steps to resolve the issue)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 5475 "Sales Invoice Entity Aggregate"](../../objects/table/5475.md)
- [table 36 "Sales Header"](../../objects/table/36.md)
- [table 112 "Sales Invoice Header"](../../objects/table/112.md)
- [page 9994 "API Data Upgrade List"](../../objects/page/9994.md)

## Context

- Features: Sales Invoices API, API Data Upgrade, Job Queue, Posted Sales Invoices, Unposted Sales Invoices

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
