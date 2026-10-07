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
  at: "2026-10-07T01:47:27.191Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 40a30aa69f604489baa5104d41158df0666fd5fd218ffbbf9a7794fdc3c0ff97
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
  objects: []
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

As named in the post; not yet joined to the code pillar.

- table "Sales Invoice Entity Aggregate"
- table "Sales Header"
- table "Sales Invoice Header"
- page "API Data Upgrade List"

## Context

- Features: Sales Invoices API, API Data Upgrade, Job Queue, Posted Sales Invoices, Unposted Sales Invoices

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
