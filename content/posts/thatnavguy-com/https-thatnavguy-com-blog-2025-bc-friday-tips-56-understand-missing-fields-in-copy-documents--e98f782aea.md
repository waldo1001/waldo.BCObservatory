---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea
type: post
title: "BC Friday Tips #56 Understand Missing Fields in Copy Documents"
summary: Some Sales Order fields do not carry over to posted shipments and invoices. For example, Shipping Agent Code and Shipping Agent Service Code exist on both Sales Header and Sales Line but only reach the Sales Shipment Header and Sales Invoice Header. As a result, copying from a posted invoice can leave fields blank, and the post recommends copying from an archived sales order instead.
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
  state: reviewed
  by: opus
  at: "2026-10-08T01:58:16.843Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: faa9d78fcd78412ed7c21c24e51d60bce6b4bc6308328d7cb35b5c7bc0e7ea32
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
  objects:
    - object/table/36
    - object/table/37
    - object/table/110
    - object/table/112
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
systems:
  - sales
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/og/2025/bc-friday-tips-56-understand-missing-fields-in-copy-documents.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:51:00.994Z"
---

# BC Friday Tips #56 Understand Missing Fields in Copy Documents

[Read the post](https://thatnavguy.com/blog/2025/bc-friday-tips-56-understand-missing-fields-in-copy-documents/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-11-14 · 133 words · tier community · reviewed (checked by Opus)

> Some Sales Order fields do not carry over to posted shipments and invoices. For example, Shipping Agent Code and Shipping Agent Service Code exist on both Sales Header and Sales Line but only reach the Sales Shipment Header and Sales Invoice Header. As a result, copying from a posted invoice can leave fields blank, and the post recommends copying from an archived sales order instead.

## Key points

- Shipping Agent Code and Shipping Agent Service Code exist in Sales Header/Line but only appear in Posted Shipment/Invoice headers
- Copying from Posted Sales Invoice can result in missing fields compared to copying from Archived Sales Order
- Field inconsistencies across related documents need awareness to prevent data loss during document workflows
- Understanding which fields transfer between document types helps maintain data accuracy

## Quotes

- "Not all fields in a Sales Order transfer to the Posted Sales Shipment or Posted Sales Invoice." (This is the core issue affecting document copying workflows and data consistency)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 36 "Sales Header"](../../objects/table/36.md)
- [table 37 "Sales Line"](../../objects/table/37.md)
- [table 110 "Sales Shipment Header"](../../objects/table/110.md)
- [table 112 "Sales Invoice Header"](../../objects/table/112.md)

## Context

- Features: copy documents, sales order processing, posted documents, archived documents

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
