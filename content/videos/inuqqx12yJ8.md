---
id: video/inuqqx12yJ8
type: video
title: "What's New in Shopify Connector: Point of Sale (2025 release wave 2)"
summary: "Shopify Connector for Business Central and Shopify POS (2025 release wave 2): POS orders import as normal sales orders, with cash rounding handled through a configured G/L account and POS staff mapped to salesperson codes. Demos show the setup and import."
tier: official
language: en
tags:
  - shopify pos
  - point of sale
  - cash rounding
  - employee tracking
  - salesperson mapping
  - shopify connector
  - payment methods
  - order synchronization
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:12:03.732Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 4df514656b6ce42d03faac4888a4941081d5244dd41ab26c4cac08350fa09519
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=inuqqx12yJ8&t=61s
    title: "What's New in Shopify Connector: Point of Sale (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 61
    quote: shopify pos point of sale which allows people in store to perform transactions
  - kind: video
    url: https://www.youtube.com/watch?v=inuqqx12yJ8&t=104s
    title: "What's New in Shopify Connector: Point of Sale (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 104
    quote: all transactions sales transactions performed on Shopify POS are integrated into Shopify admin store as a normal sales order
  - kind: video
    url: https://www.youtube.com/watch?v=inuqqx12yJ8&t=138s
    title: "What's New in Shopify Connector: Point of Sale (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 138
    quote: usually there is a person who performs a sales transaction. So you want to track your employees performance
  - kind: video
    url: https://www.youtube.com/watch?v=inuqqx12yJ8&t=345s
    title: "What's New in Shopify Connector: Point of Sale (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 345
    quote: cash rounding account is missing. Correct. We need to put this difference somewhere
  - kind: video
    url: https://www.youtube.com/watch?v=inuqqx12yJ8&t=453s
    title: "What's New in Shopify Connector: Point of Sale (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 453
    quote: we have a new field or new mapping table which is called staff members mapping and
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: inuqqx12yJ8
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=inuqqx12yJ8
published_at: "2025-10-01T00:00:00Z"
duration_s: 520
captions: full
audience:
  - functional consultant
  - administrator
  - partner
chapters:
  - t: 0
    title: Why in-person shopping matters
  - t: 61
    title: Introduction to Shopify POS
  - t: 104
    title: POS integration with Business Central and employee tracking
  - t: 153
    title: Cash rounding in POS transactions
  - t: 214
    title: "Demo: Creating and viewing a POS transaction"
  - t: 289
    title: "Demo: Importing orders and configuring cash rounding"
  - t: 375
    title: "Demo: Salesperson mapping from POS to Business Central"
  - t: 453
    title: Pricing and future capabilities
features:
  - name: Shopify POS integration with Business Central
    status: unclear
    t: 61
    verified: false
    status_source: video
  - name: Cash rounding for POS transactions
    status: unclear
    t: 127
    verified: false
    status_source: video
  - name: Staff members mapping for employee tracking
    status: unclear
    t: 438
    verified: false
    status_source: video
  - name: Payment routing amount field
    status: unclear
    t: 312
    verified: false
    status_source: video
  - name: Cash rounding account configuration
    status: unclear
    t: 345
    verified: false
    status_source: video
  - name: Catalog and market-based pricing for POS
    status: unclear
    t: 482
    verified: false
    status_source: video
objects_mentioned:
  - table staff members mapping
  - other Shopify shops
quotes:
  - t: 61
    text: shopify pos point of sale which allows people in store to perform transactions
    check: fuzzy
  - t: 104
    text: all transactions sales transactions performed on Shopify POS are integrated into Shopify admin store as a normal sales order
    check: exact
  - t: 138
    text: usually there is a person who performs a sales transaction. So you want to track your employees performance
    check: exact
  - t: 345
    text: cash rounding account is missing. Correct. We need to put this difference somewhere
    check: exact
  - t: 453
    text: we have a new field or new mapping table which is called staff members mapping and
    check: fuzzy
---

# What's New in Shopify Connector: Point of Sale (2025 release wave 2)

> Shopify Connector for Business Central and Shopify POS (2025 release wave 2): POS orders import as normal sales orders, with cash rounding handled through a configured G/L account and POS staff mapped to salesperson codes. Demos show the setup and import.

[Watch on YouTube](https://www.youtube.com/watch?v=inuqqx12yJ8) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-10-01 · 8:40 · tier official · **unreviewed** (machine-generated)

## Overview

The video explains how Shopify POS, used for in-store sales, works with the Shopify Connector. Sales made in POS appear in Shopify admin as normal sales orders and can be imported into Business Central as sales documents or invoices. POS orders have nuances around rounding and employee tracking, and the video covers both.

Demos show creating and viewing a POS transaction, importing orders, configuring the cash rounding account, and mapping Shopify staff members to Business Central salespersons. The video ends with a short note on catalogs and market-based pricing for POS, which is left for a separate video.

## Key points

- Shopify POS sales are integrated into Shopify admin as normal sales orders, and can be imported into Business Central as sales documents or invoices.
- Cash rounding applies in countries such as Denmark and Canada. Shopify POS applies it automatically and tracks the rounding difference.
- A cash rounding account field is on the order synchronization and processing tab of the Shopify shop setup. It names the G/L account that receives the difference, and must be set before creating sales documents from POS orders.
- A new staff members mapping table links Shopify POS staff to Business Central salesperson codes. Staff must be registered in Shopify and the mapping must be configured.
- On import, the salesperson is assigned automatically from the staff member who performed the transaction in Shopify.
- A new payment routing amount field on imported POS orders tracks payment method and routing information.
- Catalogs tied to markets, representing POS locations in specific countries, affect pricing. Details are left for the next video.

## Chapters

- [0:00](https://www.youtube.com/watch?v=inuqqx12yJ8&t=0s) Why in-person shopping matters
- [1:01](https://www.youtube.com/watch?v=inuqqx12yJ8&t=61s) Introduction to Shopify POS
- [1:44](https://www.youtube.com/watch?v=inuqqx12yJ8&t=104s) POS integration with Business Central and employee tracking
- [2:33](https://www.youtube.com/watch?v=inuqqx12yJ8&t=153s) Cash rounding in POS transactions
- [3:34](https://www.youtube.com/watch?v=inuqqx12yJ8&t=214s) Demo: Creating and viewing a POS transaction
- [4:49](https://www.youtube.com/watch?v=inuqqx12yJ8&t=289s) Demo: Importing orders and configuring cash rounding
- [6:15](https://www.youtube.com/watch?v=inuqqx12yJ8&t=375s) Demo: Salesperson mapping from POS to Business Central
- [7:33](https://www.youtube.com/watch?v=inuqqx12yJ8&t=453s) Pricing and future capabilities

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Shopify POS integration with Business Central | status not stated, demoed | [1:01](https://www.youtube.com/watch?v=inuqqx12yJ8&t=61s) |  |
| Cash rounding for POS transactions | status not stated, demoed | [2:07](https://www.youtube.com/watch?v=inuqqx12yJ8&t=127s) |  |
| Staff members mapping for employee tracking | status not stated, demoed | [7:18](https://www.youtube.com/watch?v=inuqqx12yJ8&t=438s) |  |
| Payment routing amount field | status not stated, demoed | [5:12](https://www.youtube.com/watch?v=inuqqx12yJ8&t=312s) |  |
| Cash rounding account configuration | status not stated, demoed | [5:45](https://www.youtube.com/watch?v=inuqqx12yJ8&t=345s) |  |
| Catalog and market-based pricing for POS | status not stated | [8:02](https://www.youtube.com/watch?v=inuqqx12yJ8&t=482s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "staff members mapping" at [7:33](https://www.youtube.com/watch?v=inuqqx12yJ8&t=453s)
- other "Shopify shops" at [4:49](https://www.youtube.com/watch?v=inuqqx12yJ8&t=289s)

Not found in BC28-30: table "staff members mapping".

## Quotes

- [1:01](https://www.youtube.com/watch?v=inuqqx12yJ8&t=61s) "shopify pos point of sale which allows people in store to perform transactions"
- [1:44](https://www.youtube.com/watch?v=inuqqx12yJ8&t=104s) "all transactions sales transactions performed on Shopify POS are integrated into Shopify admin store as a normal sales order"
- [2:18](https://www.youtube.com/watch?v=inuqqx12yJ8&t=138s) "usually there is a person who performs a sales transaction. So you want to track your employees performance"
- [5:45](https://www.youtube.com/watch?v=inuqqx12yJ8&t=345s) "cash rounding account is missing. Correct. We need to put this difference somewhere"
- [7:33](https://www.youtube.com/watch?v=inuqqx12yJ8&t=453s) "we have a new field or new mapping table which is called staff members mapping and"

## Disclaimers in the video

- [8:22](https://www.youtube.com/watch?v=inuqqx12yJ8&t=502s) coming-later: about this one in the next video

Presenters (as heard): Andre.
