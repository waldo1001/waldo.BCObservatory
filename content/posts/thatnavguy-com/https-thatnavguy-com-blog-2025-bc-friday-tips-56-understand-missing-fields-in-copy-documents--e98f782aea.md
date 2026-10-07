---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea
type: post
title: "BC Friday Tips #56 Understand Missing Fields in Copy Documents"
summary: When copying documents in Sales Order processing, not all fields transfer to Posted Sales Shipment and Posted Sales Invoice. Shipping Agent Code and Service Code only appear in header tables, not line tables, which can leave key fields blank. Copying from Archived Sales Orders preserves more data than copying from Posted Invoices.
tier: community
language: en
tags:
  - copy documents
  - sales orders
  - posted documents
  - archived documents
  - data fields
system: sales
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:31:07.400Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: c1a04839a674df2e178266fe4ab477e5488ca6f274ee6896555ef332b25f840e
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-56-understand-missing-fields-in-copy-documents/
    title: "BC Friday Tips #56 Understand Missing Fields in Copy Documents"
    date: "2025-11-14"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2025/bc-friday-tips-56-understand-missing-fields-in-copy-documents/
    title: "BC Friday Tips #56 Understand Missing Fields in Copy Documents"
    date: "2025-11-14"
    commit: null
    t: null
    quote: Not all fields in a Sales Order transfer to the Posted Sales Shipment or Posted Sales Invoice.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2025/bc-friday-tips-56-understand-missing-fields-in-copy-documents/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2025/bc-friday-tips-56-understand-missing-fields-in-copy-documents/
published_at: "2025-11-14T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 133
quotes:
  - text: Not all fields in a Sales Order transfer to the Posted Sales Shipment or Posted Sales Invoice.
    why_it_matters: This is the core issue affecting document copying workflows and data consistency
code_objects_mentioned:
  - table Sales Header
  - table Sales Line
  - table Sales Shipment Header
  - table Sales Invoice Header
  - table Posted Sales Shipment
  - table Posted Sales Invoice
  - table Archived Sales Order
systems:
  - sales
versions_mentioned: []
---

# BC Friday Tips #56 Understand Missing Fields in Copy Documents

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-56-understand-missing-fields-in-copy-documents/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-11-14 · 133 words · tier community · **unreviewed** (machine-generated)

> When copying documents in Sales Order processing, not all fields transfer to Posted Sales Shipment and Posted Sales Invoice. Shipping Agent Code and Service Code only appear in header tables, not line tables, which can leave key fields blank. Copying from Archived Sales Orders preserves more data than copying from Posted Invoices.

## Key points

- Shipping Agent Code and Shipping Agent Service Code exist in Sales Header/Line but only appear in Posted Shipment/Invoice headers
- Copying from Posted Sales Invoice can result in missing fields compared to copying from Archived Sales Order
- Field inconsistencies across related documents need awareness to prevent data loss during document workflows
- Understanding which fields transfer between document types helps maintain data accuracy

## Quotes

- "Not all fields in a Sales Order transfer to the Posted Sales Shipment or Posted Sales Invoice." (This is the core issue affecting document copying workflows and data consistency)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- table "Sales Header"
- table "Sales Line"
- table "Sales Shipment Header"
- table "Sales Invoice Header"
- table "Posted Sales Shipment"
- table "Posted Sales Invoice"
- table "Archived Sales Order"

## Context

- Features: copy documents, sales order processing, posted documents, archived documents, field mapping

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
