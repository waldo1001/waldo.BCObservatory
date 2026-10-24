---
id: topic/business-central/business-functionality/online-store-with-shopify/get-started-with-the-shopify-connector
type: topic
title: Get started with the Shopify connector
summary: "Getting started with the Shopify connector for Business Central: setting up a Shopify test account, installing and connecting the connector, and testing the sync of items, prices, inventory, customers, and orders. It answers questions about prerequisites, authentication, and test setup."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:59.535Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bf811fdea6b163205367687f7aa10ac001f200d6ef0ff62e8be8fde1f2587baa
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-account
    title: Create and set up a Shopify account
    date: "2025-07-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/shopify/get-started
    title: Get started with the Shopify Connector
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-account
    - https://learn.microsoft.com/dynamics365/business-central/shopify/get-started
  objects:
    - object/page/30100
    - object/page/30101
    - object/page/30102
    - object/page/30103
    - object/page/30104
    - object/page/30135
  features: []
  topics:
    - topic/business-central/business-functionality/online-store-with-shopify
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/12139
    - change/bcapps/9313
    - change/bcapps/9316
    - change/bcapps/9317
    - change/bcapps/9318
    - change/bcapps/9320
    - change/bcapps/9327
learn_toc_path:
  - Business functionality
  - Online store with Shopify
  - Get started with the Shopify connector
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/online-store-with-shopify
children: []
coverage:
  learn: 2
  code: 6
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 30100
  - 30101
  - 30102
  - 30103
  - 30104
  - 30135
member_hash: 2e15db73e26122c3c46b434a012fbb2a50d3f86ab19c70fb426c146737508213
narrative: generated
---

# Get started with the Shopify connector

> Getting started with the Shopify connector for Business Central: setting up a Shopify test account, installing and connecting the connector, and testing the sync of items, prices, inventory, customers, and orders. It answers questions about prerequisites, authentication, and test setup.

Path: [Business functionality](../../business-functionality.md) > [Online store with Shopify](../online-store-with-shopify.md) > Get started with the Shopify connector · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section covers the first steps for connecting a Shopify online store to Business Central. It has two pages and no subtopics.

"Get started with the Shopify Connector" is the main page. It covers prerequisites, installing the Shopify Connector app, OAuth authentication, and testing strategies for synchronizing items, prices, inventory, customers, and orders. It also covers settings such as automatically creating unknown items, unknown customers, and sales documents, and whether Shopify can update items.

"Create and set up a Shopify account" supports testing. It describes creating a trial account for end-users or a development store for partners. It also covers choosing a plan, configuring customer accounts, and activating test payments.

Start with the account page if you have no Shopify store to test with. Otherwise start with the main connector page.

## Key points

- The Shopify Connector app is installed in Business Central and connects to the store using OAuth authentication.
- The connector synchronizes items, prices, inventory, customers, and orders.
- Offline access tokens are part of the authentication setup.
- Options include auto create unknown items, auto create unknown customers, and auto create sales documents.
- A 'Shopify can update items' option controls whether Shopify changes items.
- End-users can test with a Shopify trial account. Partners can use a development store.
- Test account setup covers plan selection, customer account configuration, and test payment activation.
- Test payments can use the Bogus Gateway or Shopify Payments.

## Learn pages

- [Create and set up a Shopify account](https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-account): Learn how to get a Shopify account so you can demonstrate the workflow for integrating Shopify and Business Central.
- [Get started with the Shopify Connector](https://learn.microsoft.com/dynamics365/business-central/shopify/get-started): Learn how to connect one or more Shopify online stores to Business Central, including prerequisites, installation options, and testing strategies.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12139 [Shopify] Disable Create Sales Documents for empty order views](../../../../changes/bcapps/12139.md) (code change): "Create Sales Documents action on the Shopify Orders page is now disabled"
- [#9313 [Shopify] Fix Product Sync deleting mapped variants on stale Updated At timestamp](../../../../changes/bcapps/9313.md) (code change): "Fix Product Sync deleting mapped variants on stale Updated At timestamp"
- [#9316 [Shopify] Preserve manually set Sell-to Customer No. when Bill-to mapping fails](../../../../changes/bcapps/9316.md) (code change): "Shopify Connector bug where manually set Sell-to Customer No. was overwritten"
- [#9317 [Shopify] Add Companies to Shopify navigation menu](../../../../changes/bcapps/9317.md) (code change): "Companies action added to Shopify navigation menu in three role centers"
- [#9318 [Shopify] Fix Get Catalogs tooltip to explain company dependency](../../../../changes/bcapps/9318.md) (code change): "Fix Get Catalogs tooltip to explain company dependency"
- [#9320 [Shopify] Import HS code and country of origin from Shopify](../../../../changes/bcapps/9320.md) (code change): "Import HS code and country of origin from Shopify"
- [#9327 [Shopify] Migrate Shopify Connector to Expiring Offline Access Tokens](../../../../changes/bcapps/9327.md) (code change): "The Shopify Connector now supports Shopify's expiring offline access tokens with automatic refresh-token rotation"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 30100 "Shpfy Activities"](../../../../objects/page/30100.md) · captioned "Shopify Activities" · on [Table 30100 "Shpfy Cue"](../../../../objects/table/30100.md)
- [Page 30101 "Shpfy Shop Card"](../../../../objects/page/30101.md) · captioned "Shopify Shop Card" · on [Table 30102 "Shpfy Shop"](../../../../objects/table/30102.md)
- [Page 30102 "Shpfy Shops"](../../../../objects/page/30102.md) · captioned "Shopify Shops" · on [Table 30102 "Shpfy Shop"](../../../../objects/table/30102.md)
- [Page 30103 "Shpfy Tag Factbox"](../../../../objects/page/30103.md) · captioned "Shopify Tags" · on [Table 30104 "Shpfy Tag"](../../../../objects/table/30104.md)
- [Page 30104 "Shpfy Tags"](../../../../objects/page/30104.md) · captioned "Shopify Tags" · on [Table 30104 "Shpfy Tag"](../../../../objects/table/30104.md)
- [Page 30135 "Shpfy Authentication"](../../../../objects/page/30135.md) · captioned "Waiting for a response - do not close this page"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
