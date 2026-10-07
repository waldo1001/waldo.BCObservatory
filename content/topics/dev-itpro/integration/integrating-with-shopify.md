---
id: topic/dev-itpro/integration/integrating-with-shopify
type: topic
title: Integrating with Shopify
summary: Shopify integration for Business Central through the Shopify Connector. It covers connecting stores, synchronizing items, prices, inventory, customers, companies and orders, technical details such as API versions and extensibility, and troubleshooting sync problems.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:58.336Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a73bbdbff0b4f31f1add6c66f16e419b04307066ea380b39f71344f1ebd14e77
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-faq
    title: FAQ for technical details
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/shopify/get-started
    title: Getting started with the connector for Shopify
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/shopify/walkthrough-setting-up-and-using-shopify
    title: Set up and use the Shopify Connector
    date: "2025-07-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/shopify/troubleshoot
    title: Troubleshooting the Shopify and Business Central synchronization
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-faq
    - https://learn.microsoft.com/dynamics365/business-central/shopify/get-started
    - https://learn.microsoft.com/dynamics365/business-central/shopify/walkthrough-setting-up-and-using-shopify
    - https://learn.microsoft.com/dynamics365/business-central/shopify/troubleshoot
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration
  localizations: []
  videos:
    - video/3tmaVpPTQLw
    - video/5Qfc7r618OM
    - video/6vHJQggN4F4
    - video/cuez5kIanKo
    - video/e5Dr3jzCLM8
    - video/h5PQI4I4b7c
    - video/inuqqx12yJ8
    - video/lClKXB8xXIE
    - video/p-pwG6f5srY
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10034
    - change/bcapps/10092
    - change/bcapps/10143
    - change/bcapps/10162
    - change/bcapps/10256
    - change/bcapps/10307
    - change/bcapps/10407
    - change/bcapps/10417
    - change/bcapps/10462
    - change/bcapps/10467
    - change/bcapps/10619
    - change/bcapps/10741
    - change/bcapps/10775
    - change/bcapps/11096
    - change/bcapps/11373
    - change/bcapps/11400
    - change/bcapps/11407
    - change/bcapps/11603
    - change/bcapps/11604
    - change/bcapps/11611
    - change/bcapps/11658
    - change/bcapps/11854
    - change/bcapps/11866
    - change/bcapps/12214
    - change/bcapps/12215
    - change/bcapps/9126
    - change/bcapps/9138
    - change/bcapps/9146
    - change/bcapps/9188
    - change/bcapps/9211
    - change/bcapps/9221
    - change/bcapps/9313
    - change/bcapps/9404
learn_toc_path:
  - Integration
  - Integrating with Shopify
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration
children: []
coverage:
  learn: 4
  code: 0
  video: 9
  blog: 0
  guideline: 0
bc_forms:
  - 30100
  - 30101
  - 30102
  - 30103
  - 30104
  - 30106
  - 30107
  - 30113
  - 30115
  - 30118
  - 30119
  - 30120
  - 30126
  - 30135
  - 30156
  - 30157
member_hash: 32c6ff0c0bbb23b78f5724724a4ddd5f8f0a1fb37c166784fdcea3a3a85d51af
narrative: generated
---

# Integrating with Shopify

> Shopify integration for Business Central through the Shopify Connector. It covers connecting stores, synchronizing items, prices, inventory, customers, companies and orders, technical details such as API versions and extensibility, and troubleshooting sync problems.

Path: [Integration](../integration.md) > Integrating with Shopify · tier official · system integration · narrative reviewed by Opus

## Overview

The Shopify Connector links Shopify stores to Business Central and keeps items, prices, inventory, customers, companies and orders in sync between the two systems. The section has four pages and no subtopics.

Start with "Getting started with the connector for Shopify" for the overall picture and how to connect a store. Then use "Set up and use the Shopify Connector" for the walkthrough of product sync, customer management, order processing, B2B flows, price and discount configuration, and importing data from Shopify.

For developers and administrators, the technical FAQ covers product compatibility, the supported GraphQL Admin API versions, the extensibility model, and how quarterly API deprecations are handled in Business Central online. When sync does not behave as expected, the troubleshooting page explains how to run tasks in the foreground, read logs, check skipped records and reset sync dates.

## Key points

- The connector synchronizes items, prices, inventory, customers, companies and orders between Shopify and Business Central.
- The setup walkthrough covers product synchronization, inventory sync, customer import, order sync, price management, discount configuration and B2B flows.
- The technical FAQ covers the GraphQL Admin API, API versioning and quarterly API deprecation management for Business Central online.
- Extensibility uses integration events, public façade codeunits and extensible enums.
- The FAQ mentions 2026 release wave 1 and 2026 release wave 2.
- Troubleshooting starts with running tasks in the foreground and reviewing logging modes and log entries.
- Skipped records can be tracked, and data retention policies apply to logs.
- A sync reset (resetting sync dates) is available as a troubleshooting step.

## Learn pages

- [FAQ for technical details](https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-faq): Implementation details related to the Shopify connector.
- [Getting started with the connector for Shopify](https://learn.microsoft.com/dynamics365/business-central/shopify/get-started): First steps when configuring a connection between Business Central and Shopify.
- [Set up and use the Shopify Connector](https://learn.microsoft.com/dynamics365/business-central/shopify/walkthrough-setting-up-and-using-shopify): Various integration scenarios for demonstrating workflow between Shopify and Business Central
- [Troubleshooting the Shopify and Business Central synchronization](https://learn.microsoft.com/dynamics365/business-central/shopify/troubleshoot): Learn what to do if something goes wrong when you synchronize data between Shopify and Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10034 [Shopify] Don't block Shops page when user lacks extension permissions](../../../changes/bcapps/10034.md) (code change): "The Shopify Shops page no longer fails to open on Belgian environments"
- [#10092 [Shopify] Add cues for Skipped Records and API Errors on Activities page](../../../changes/bcapps/10092.md) (code change): "Two new cues on the Shopify Activities page display counts of skipped sync records"
- [#10143 Handle non-invoice or currupt PDF extraction](../../../changes/bcapps/10143.md) (code change): "E-document extraction now detects non-invoice or corrupt PDFs"
- [#10162 Fix stale start status in e-document import pipeline](../../../changes/bcapps/10162.md) (code change): "e-document import pipeline now uses the initial processing status"
- [#10256 [Shopify] Fix customer matching when phone numbers contain spaces](../../../changes/bcapps/10256.md) (code change): "Shopify connector now normalizes phone numbers before search"
- [#10307 [Shopify] Fix Order Totals factbox opening an unrelated sales order for a linked posted invoice](../../../changes/bcapps/10307.md) (code change): "Shopify Order Totals factbox now correctly resolves and displays totals"
- [#10407 Shopify connector: persist order Tax Area Code, Tax Liable, and Tax Exempt (stack 1/3)](../../../changes/bcapps/10407.md) (code change): "Shopify connector now captures and persists tax area code"
- [#10417 [Shopify] Pace raw-text GraphQL calls to prevent excessive throttling](../../../changes/bcapps/10417.md) (code change): "Shopify connector now paces GraphQL requests issued through the raw-text overload"
- [#10462 [Shopify] Fix order edit retaining discount allocation for removed quantity](../../../changes/bcapps/10462.md) (code change): "The Shopify connector now correctly adjusts line-level discount amounts"
- [#10467 [Shopify] Fix more-expensive exchange refund: no balancing G/L line, no false processed-order warning](../../../changes/bcapps/10467.md) (code change): "Fixed Shopify exchange refund handling when the replacement item is more expensive"
- [#10619 [Shopify] Index Has Order State Error to fix slow Shopify Activities cue](../../../changes/bcapps/10619.md) (code change): "database index is added to the Shopify Order Header table on the"
- [#10741 [Shopify] Fix exchange refund order links, totals, and refund page layout](../../../changes/bcapps/10741.md) (code change): "Shopify return-with-exchange processing by ensuring exchange credit memos retain order identifiers"
- [#10775 [Shopify] Optimize unmapped cue counts](../../../changes/bcapps/10775.md) (code change): "Shopify cue counts for unmapped items now use stored SystemId fields"
- [#11096 PEPPOL FR improvements](../../../changes/bcapps/11096.md) (code change): "French PEPPOL exports now correctly handle billing profiles, identifiers"
- [#11373 [Shopify] Improve shop navigation and background sync guidance](../../../changes/bcapps/11373.md) (code change): "Shopify integration adds shop-filtered payment actions to the Shop Card"
- [#11400 [Shopify] Handle missing variant mapping in product action](../../../changes/bcapps/11400.md) (code change): "Shopify product action now validates that a linked Shopify Variant still exists"
- [#11407 [Shopify] Keep exchange shipments eligible for synchronization](../../../changes/bcapps/11407.md) (code change): "Exchange-refund Shopify orders now sync their shipments correctly"
- [#11603 [Shopify] Show configured product status in Add to Shopify confirmation](../../../changes/bcapps/11603.md) (code change): "Shopify connector now displays the configured product status"
- [#11604 fix: capture Shopify fulfillment deliveredAt timestamp](../../../changes/bcapps/11604.md) (code change): "Shopify connector now captures and displays the fulfillment delivery timestamp"
- [#11611 [Shopify] Add GraphQL type to request telemetry](../../../changes/bcapps/11611.md) (code change): "Shopify request telemetry now includes a GraphQL Type custom dimension"
- [#11658 [Shopify] Limit webhook subscription payload fields](../../../changes/bcapps/11658.md) (code change): "Shopify webhook subscriptions now request only the required fields"
- [#11854 [Shopify] Make refund currency codes read-only](../../../changes/bcapps/11854.md) (code change): "Currency Code and Presentment Currency Code fields on the Shopify Refund Header table are now read-only"
- [#11866 [Shopify] Disable Sync Shipments To Shopify when no Shopify orders exist](../../../changes/bcapps/11866.md) (code change): "The Sync Shipments To Shopify action on the Shopify Orders page is now disabled when no Shopify orders are available"
- [#12214 [Shopify] Store currency handling for auto-created orders](../../../changes/bcapps/12214.md) (code change): "Shopify connector now persists the currency handling mode used during order processing"
- [#12215 [Shopify] Link grouped invoice to all originating orders](../../../changes/bcapps/12215.md) (code change): "Invoice document linking to Shopify orders now correctly associates a single invoice"
- [#9126 [Shopify] Base price-sync bulk threshold on changed price count](../../../changes/bcapps/9126.md) (code change): "Product price synchronization with Shopify now triggers bulk operations based on the count of changed variants"
- [#9138 [Shopify] Add Belgium localization for company tax id mapping (Enterprise No.)](../../../changes/bcapps/9138.md) (code change): "Belgium localization for company tax id mapping for Belgian B2B company sync"
- [#9146 [Shopify] Fix GraphQL rate limiter under-waiting after elapsed time](../../../changes/bcapps/9146.md) (code change): "Shopify connector's GraphQL rate limiter was waiting incorrectly"
- [#9188 [Shopify] Create BC customer on order import when Shopify customer has no default address](../../../changes/bcapps/9188.md) (code change): "Shopify connector now handles customer sync when no default address"
- [#9211 [Shopify] Surface skipped records and sent JSONL for bulk price sync](../../../changes/bcapps/9211.md) (code change): "Shopify bulk price sync now creates skipped records with error details"
- [#9221 [Shopify] Uptake Admin GraphQL API to version 2026-07](../../../changes/bcapps/9221.md) (code change): "The Shopify connector now supports the Admin GraphQL API version 2026-07"
- [#9313 [Shopify] Fix Product Sync deleting mapped variants on stale Updated At timestamp](../../../changes/bcapps/9313.md) (code change): "The Shopify variant sync now correctly distinguishes between variants that have stale local timestamps"
- [#9404 [Shopify] Fix Sync Prices using stale WorkDate from SingleInstance cache](../../../changes/bcapps/9404.md) (code change): "Fix Sync Prices using stale WorkDate from SingleInstance cache"
- [What's New: Shopify Connector B2B Functionality (2024 release wave 1)](../../../videos/3tmaVpPTQLw.md) (video): "shopify connector; b2b; order editing; company synchronization"
- [What's New in Shopify Connector: Troubleshoot export issues -skipped records page (2025)](../../../videos/5Qfc7r618OM.md) (video): "Shopify skipped records page; Logging mode field for Shopify connector"
- [What's New: Product Information Management in Shopify Connector (2026 release wave 1)](../../../videos/6vHJQggN4F4.md) (video): "Item Variant Image Export to Shopify; Item Attributes for Shopify Options"
- [What's New in Shopify Connector: Activate Sales Channels (2025 release wave 1)](../../../videos/cuez5kIanKo.md) (video): "shopify connector; sales channels; product export; channel activation"
- [Introducing: Shopify and Dynamics 365 Business Central (2023)](../../../videos/e5Dr3jzCLM8.md) (video): "Shopify integration with Business Central; Automatic inventory synchronization"
- [What's New in Shopify Connector: Metafields (2025 release wave 1)](../../../videos/h5PQI4I4b7c.md) (video): "Metafields synchronization from Shopify; Metafield mapping via extensibility"
- [What's New in Shopify Connector: Point of Sale (2025 release wave 2)](../../../videos/inuqqx12yJ8.md) (video): "Shopify POS integration with Business Central; Cash rounding for POS transactions"
- [What's New: Troubleshooting Shopify Integration (2023 release wave 2)](../../../videos/lClKXB8xXIE.md) (video): "Enhanced Shopify Log Entries View; Request ID for Shopify Support; User Error Section"
- [What's New: Shopify Connector (2024 release wave 2)](../../../videos/p-pwG6f5srY.md) (video): "Shopify connector; custom fields; product synchronization; translations"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 30100, 30101, 30102, 30103, 30104, 30106, 30107, 30113, 30115, 30118, 30119, 30120, 30126, 30135, 30156, 30157.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
