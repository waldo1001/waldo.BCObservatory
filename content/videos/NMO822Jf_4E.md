---
id: video/NMO822Jf_4E
type: video
title: "What's New: Processing of Presentment Currencies in Shopify (2026 release wave 1)"
summary: "Shopify connector in Business Central: a new currency handling setting on the Shopify shop card lets sales documents be created in the presentment currency instead of the shop currency. Covers the default behavior, the new processed currency field on orders, and switching between modes."
tier: official
language: en
tags:
  - shopify
  - presentment currency
  - multi-currency
  - price synchronization
  - markets
  - sales documents
  - order processing
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T22:48:51.841Z"
  flags: []
generated:
  at: "2026-10-09T00:29:02.995Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 82d291972f659ce507f77db48d99edd4e90199e6eb7e8c2294ed7bee47041215
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=NMO822Jf_4E&t=20s
    title: "What's New: Processing of Presentment Currencies in Shopify (2026 release wave 1)"
    date: "2026-04-01T12:01:27.000Z"
    commit: null
    t: 20
    quote: it's all for often very important to allow user or buyer in the local market to buy in local currency
  - kind: video
    url: https://www.youtube.com/watch?v=NMO822Jf_4E&t=56s
    title: "What's New: Processing of Presentment Currencies in Shopify (2026 release wave 1)"
    date: "2026-04-01T12:01:27.000Z"
    commit: null
    t: 56
    quote: Currency used at the checkout time. In the Business Central, we used to import both of them but create sales documents only in the
  - kind: video
    url: https://www.youtube.com/watch?v=NMO822Jf_4E&t=88s
    title: "What's New: Processing of Presentment Currencies in Shopify (2026 release wave 1)"
    date: "2026-04-01T12:01:27.000Z"
    commit: null
    t: 88
    quote: The currency handling, the new field. It has two options, shop currency, the default one, to make sure that there are no sudden changes
  - kind: video
    url: https://www.youtube.com/watch?v=NMO822Jf_4E&t=152s
    title: "What's New: Processing of Presentment Currencies in Shopify (2026 release wave 1)"
    date: "2026-04-01T12:01:27.000Z"
    commit: null
    t: 152
    quote: Because we configured uh orders to be created in presentment currency you can see the new field here, processed currency
  - kind: video
    url: https://www.youtube.com/watch?v=NMO822Jf_4E&t=189s
    title: "What's New: Processing of Presentment Currencies in Shopify (2026 release wave 1)"
    date: "2026-04-01T12:01:27.000Z"
    commit: null
    t: 189
    quote: I cannot change this presentment currency, it's not editable, but I can always unlink processed document
  - kind: video
    url: https://www.youtube.com/watch?v=NMO822Jf_4E&t=252s
    title: "What's New: Processing of Presentment Currencies in Shopify (2026 release wave 1)"
    date: "2026-04-01T12:01:27.000Z"
    commit: null
    t: 252
    quote: creation orders in the presentment currency it's a safe and a logical step after defining currencies in the catalogs linked to the markets
links:
  learn: []
  objects: []
  features:
    - feature/573342
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: NMO822Jf_4E
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=NMO822Jf_4E
published_at: "2026-04-01T12:01:27.000Z"
duration_s: 293
captions: full
audience:
  - functional consultant
  - administrator
  - partner
chapters:
  - t: 0
    title: "Background: Markets, currencies, and the problem"
  - t: 73
    title: New currency handling setting in Shopify shop card
  - t: 110
    title: Synchronizing orders and viewing store currency
  - t: 142
    title: Creating sales documents in presentment currency
  - t: 177
    title: Editing documents and switching between currency modes
  - t: 235
    title: Summary and next steps
features:
  - name: Presentment currency support in Shopify order processing
    status: unclear
    t: 56
    verified: false
    status_source: video
  - name: Currency handling field on Shopify shop card
    status: unclear
    t: 73
    verified: false
    status_source: video
  - name: Processed currency field in orders
    status: unclear
    t: 152
    verified: false
    status_source: video
  - name: Price synchronization for catalogs linked to markets
    status: ga
    t: 7
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573342"
objects_mentioned: []
quotes:
  - t: 20
    text: it's all for often very important to allow user or buyer in the local market to buy in local currency
    check: exact
  - t: 56
    text: Currency used at the checkout time. In the Business Central, we used to import both of them but create sales documents only in the
    check: exact
  - t: 88
    text: The currency handling, the new field. It has two options, shop currency, the default one, to make sure that there are no sudden changes
    check: exact
  - t: 152
    text: Because we configured uh orders to be created in presentment currency you can see the new field here, processed currency
    check: exact
  - t: 189
    text: I cannot change this presentment currency, it's not editable, but I can always unlink processed document
    check: exact
  - t: 252
    text: creation orders in the presentment currency it's a safe and a logical step after defining currencies in the catalogs linked to the markets
    check: exact
---

# What's New: Processing of Presentment Currencies in Shopify (2026 release wave 1)

> Shopify connector in Business Central: a new currency handling setting on the Shopify shop card lets sales documents be created in the presentment currency instead of the shop currency. Covers the default behavior, the new processed currency field on orders, and switching between modes.

[Watch on YouTube](https://www.youtube.com/watch?v=NMO822Jf_4E) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-04-01 · 4:53 · tier official · reviewed (checked by Opus)

## Overview

The video from the 2026 release wave 1 explains how Business Central handles currencies for Shopify orders. Shopify markets can sell in local currencies, but Business Central used to import both the store and presentment currency and create sales documents only in the store currency.

A demo shows the new currency handling field in the order processing section of the Shopify shop card, synchronizing orders, and creating sales documents in the presentment currency. It also shows the processed currency field on orders, and how to unlink a processed document and switch between currency modes.

## Key points

- The Shopify shop card has a new currency handling field in the order processing section; click 'show more' to see it.
- Options are shop currency (default) or presentment currency. The default stays shop currency so upgrades cause no sudden changes.
- The presentment currency is the currency the customer sees at checkout. Before this change, sales documents were created only in the store currency.
- Orders get a new processed currency field, populated only after the order is processed. It shows whether the store or presentment currency was used.
- The presentment currency field on an order is not editable once populated.
- To change modes, switch the setting between shop and presentment currency, unlink the processed document and recreate it.
- The video presents presentment-currency order creation as a logical step after defining currencies in catalogs linked to markets, which builds on the earlier price synchronization for market catalogs.

## Chapters

- [0:00](https://www.youtube.com/watch?v=NMO822Jf_4E&t=0s) Background: Markets, currencies, and the problem
- [1:13](https://www.youtube.com/watch?v=NMO822Jf_4E&t=73s) New currency handling setting in Shopify shop card
- [1:50](https://www.youtube.com/watch?v=NMO822Jf_4E&t=110s) Synchronizing orders and viewing store currency
- [2:22](https://www.youtube.com/watch?v=NMO822Jf_4E&t=142s) Creating sales documents in presentment currency
- [2:57](https://www.youtube.com/watch?v=NMO822Jf_4E&t=177s) Editing documents and switching between currency modes
- [3:55](https://www.youtube.com/watch?v=NMO822Jf_4E&t=235s) Summary and next steps

## Features

| Feature | Status | At |
|---|---|---|
| Presentment currency support in Shopify order processing | status not stated, demoed | [0:56](https://www.youtube.com/watch?v=NMO822Jf_4E&t=56s) |
| Currency handling field on Shopify shop card | status not stated, demoed | [1:13](https://www.youtube.com/watch?v=NMO822Jf_4E&t=73s) |
| Processed currency field in orders | status not stated, demoed | [2:32](https://www.youtube.com/watch?v=NMO822Jf_4E&t=152s) |
| Price synchronization for catalogs linked to markets | generally available (roadmap [Manage Shopify B2B companies, catalogs, and pricing](../features/573342.md)) | [0:07](https://www.youtube.com/watch?v=NMO822Jf_4E&t=7s) |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## Quotes

- [0:20](https://www.youtube.com/watch?v=NMO822Jf_4E&t=20s) "it's all for often very important to allow user or buyer in the local market to buy in local currency"
- [0:56](https://www.youtube.com/watch?v=NMO822Jf_4E&t=56s) "Currency used at the checkout time. In the Business Central, we used to import both of them but create sales documents only in the"
- [1:28](https://www.youtube.com/watch?v=NMO822Jf_4E&t=88s) "The currency handling, the new field. It has two options, shop currency, the default one, to make sure that there are no sudden changes"
- [2:32](https://www.youtube.com/watch?v=NMO822Jf_4E&t=152s) "Because we configured uh orders to be created in presentment currency you can see the new field here, processed currency"
- [3:09](https://www.youtube.com/watch?v=NMO822Jf_4E&t=189s) "I cannot change this presentment currency, it's not editable, but I can always unlink processed document"
- [4:12](https://www.youtube.com/watch?v=NMO822Jf_4E&t=252s) "creation orders in the presentment currency it's a safe and a logical step after defining currencies in the catalogs linked to the markets"
