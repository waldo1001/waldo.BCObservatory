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
  state: reviewed
  by: opus
  at: "2026-10-08T02:00:48.630Z"
  flags: []
generated:
  at: "2026-10-23T22:03:43.080Z"
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
  related:
    - to: post/gerardorenteria-blog/15143
      title: 🧩 Deriving dimensions in Business Central beyond Default Dimensions
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/aardvarklabs-blog/3837
      title: Background Page Tasks in Business Central Explained
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-483274250682537951--01a78739b7
      title: BC 29 lets a single index span base table and table extension fields
      label: possibly related
      why: both name Table 112 "Sales Invoice Header"
      by: code
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea
      title: "BC Friday Tips #56 Understand Missing Fields in Copy Documents"
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-74-copy-document--70de705561
      title: "BC Friday Tips #74 Copy Document and Custom Field"
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-77-testfield-show-record-action--16034e644a
      title: "BC Friday Tips #77 TestField Show Record Action"
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/aardvarklabs-blog/3118
      title: Leveraging RecordRef and FieldRef for Dynamic Coding
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-skip-api-data-upgrade
      title: Skip API data upgrade in cloud migration
      label: possibly related
      why: names Page 9994 "API Data Upgrade List"
      by: code
    - to: post/aardvarklabs-blog/4056
      title: "Smarter Keys, Better Performance: Exploring Business Central v29 Index Updates"
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/duiliotacconi-com/1667
      title: Sorting by Type and Line No. in Sales and Purchase Postings
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
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

[Read the post](https://thatnavguy.com/blog/2025/d365-business-central-how-to-fix-missing-sales-invoices-in-the-api/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-05-20 · 162 words · tier community · reviewed (checked by Opus)

> The Sales Invoices API in Business Central aggregates posted and unposted invoices from two source tables. When invoices are missing from the API results, running the API Data Upgrade process from the API Data Upgrade List page resolves the issue by synchronizing the underlying Sales Invoice Entity Aggregate table.

## Key points

- The Sales Invoices API is built on the Sales Invoice Entity Aggregate table, which combines unposted invoices from Sales Header with posted ones from Sales Invoice Header
- Missing invoices in the API most likely mean the aggregate table did not update properly
- Fix: on the API Data Upgrade List page, select SALES INVOICES and choose Schedule Upgrades, which creates a Job Queue Entry
- Schedule the job queue entry, ideally outside business hours; when it finishes, the missing invoices should appear in the API

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

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [🧩 Deriving dimensions in Business Central beyond Default Dimensions](../../posts/gerardorenteria-blog/15143.md) — possibly related: both name Table 36 "Sales Header"
- [Background Page Tasks in Business Central Explained](../../posts/aardvarklabs-blog/3837.md) — possibly related: both name Table 36 "Sales Header"
- [BC 29 lets a single index span base table and table extension fields](../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-483274250682537951--01a78739b7.md) — possibly related: both name Table 112 "Sales Invoice Header"
- [BC Friday Tips #56 Understand Missing Fields in Copy Documents](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea.md) — possibly related: both name Table 36 "Sales Header"
- [BC Friday Tips #74 Copy Document and Custom Field](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-74-copy-document--70de705561.md) — possibly related: both name Table 36 "Sales Header"
- [BC Friday Tips #77 TestField Show Record Action](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-77-testfield-show-record-action--16034e644a.md) — possibly related: both name Table 36 "Sales Header"
- [Leveraging RecordRef and FieldRef for Dynamic Coding](../../posts/aardvarklabs-blog/3118.md) — possibly related: both name Table 36 "Sales Header"
- [Skip API data upgrade in cloud migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-skip-api-data-upgrade) — possibly related: names Page 9994 "API Data Upgrade List"
- [Smarter Keys, Better Performance: Exploring Business Central v29 Index Updates](../../posts/aardvarklabs-blog/4056.md) — possibly related: both name Table 36 "Sales Header"
- [Sorting by Type and Line No. in Sales and Purchase Postings](../../posts/duiliotacconi-com/1667.md) — possibly related: both name Table 36 "Sales Header"

## Context

- Features: Sales Invoices API, API Data Upgrade, Job Queue, Posted Sales Invoices, Unposted Sales Invoices

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
