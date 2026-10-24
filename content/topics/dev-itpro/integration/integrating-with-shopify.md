---
id: topic/dev-itpro/integration/integrating-with-shopify
type: topic
title: Integrating with Shopify
summary: "Integrating with Shopify covers the Shopify Connector for Business Central: setup and OAuth connection, day-to-day synchronization of items, prices, inventory, customers and orders, technical FAQ on API versions and extensibility, and troubleshooting sync problems."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:29.802Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 862621d8ff589fa553d7adfdc5a19f4ad455adba869996edb99076171e6a70c8
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
    title: Get started with the Shopify Connector
    date: "2026-09-22"
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
    date: "2026-10-14"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-faq
    - https://learn.microsoft.com/dynamics365/business-central/shopify/get-started
    - https://learn.microsoft.com/dynamics365/business-central/shopify/walkthrough-setting-up-and-using-shopify
    - https://learn.microsoft.com/dynamics365/business-central/shopify/troubleshoot
  objects:
    - object/page/30100
    - object/page/30101
    - object/page/30102
    - object/page/30103
    - object/page/30104
    - object/page/30106
    - object/page/30107
    - object/page/30113
    - object/page/30115
    - object/page/30118
    - object/page/30119
    - object/page/30120
    - object/page/30126
    - object/page/30135
    - object/page/30156
    - object/page/30157
  features: []
  topics:
    - topic/dev-itpro/integration
  localizations: []
  videos:
    - video/3tmaVpPTQLw
    - video/5Qfc7r618OM
    - video/6vHJQggN4F4
    - video/AR2FiD64wbw
    - video/B-pxLlb-UN0
    - video/BwBR8JwwQa4
    - video/cuez5kIanKo
    - video/e5Dr3jzCLM8
    - video/gy_6QnFpiEw
    - video/h5PQI4I4b7c
    - video/inuqqx12yJ8
    - video/lClKXB8xXIE
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10034
    - change/bcapps/10092
    - change/bcapps/10256
    - change/bcapps/10307
    - change/bcapps/10407
    - change/bcapps/10417
    - change/bcapps/10462
    - change/bcapps/10467
    - change/bcapps/10775
    - change/bcapps/11168
    - change/bcapps/11318
    - change/bcapps/11373
    - change/bcapps/11386
    - change/bcapps/11407
    - change/bcapps/11560
    - change/bcapps/11603
    - change/bcapps/11604
    - change/bcapps/11611
    - change/bcapps/11658
    - change/bcapps/12139
    - change/bcapps/12214
    - change/bcapps/12215
    - change/bcapps/12260
    - change/bcapps/12561
    - change/bcapps/8554
    - change/bcapps/8587
    - change/bcapps/8871
    - change/bcapps/9109
    - change/bcapps/9112
    - change/bcapps/9126
    - change/bcapps/9138
    - change/bcapps/9146
    - change/bcapps/9188
    - change/bcapps/9211
    - change/bcapps/9221
    - change/bcapps/9253
    - change/bcapps/9313
    - change/bcapps/9316
    - change/bcapps/9318
    - change/bcapps/9320
    - change/bcapps/9321
    - change/bcapps/9404
learn_toc_path:
  - Integration
  - Integrating with Shopify
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration
children: []
coverage:
  learn: 4
  code: 16
  video: 12
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

> Integrating with Shopify covers the Shopify Connector for Business Central: setup and OAuth connection, day-to-day synchronization of items, prices, inventory, customers and orders, technical FAQ on API versions and extensibility, and troubleshooting sync problems.

Path: [Integration](../integration.md) > Integrating with Shopify · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section explains how to connect Shopify online stores to Business Central with the Shopify Connector app. It has four pages and no subtopics: a getting-started page, a setup and usage walkthrough, a technical FAQ, and a troubleshooting guide.

Start with "Get started with the Shopify Connector" for prerequisites, installation, OAuth authentication and testing strategies. Then use "Set up and use the Shopify Connector" for product synchronization, inventory, prices, discounts, customer import, order processing and B2B flows.

Use the technical FAQ for product compatibility, supported API versions, the extensibility model and how quarterly API deprecations are handled. Use the troubleshooting page when syncs fail or data is skipped.

## Key points

- The connector is the Shopify Connector app, installed in Business Central and connected to Shopify stores via OAuth, using offline access tokens.
- Setup options include auto create unknown items, auto create unknown customers, auto create sales documents, and whether Shopify can update items.
- Synchronization covers items, prices, inventory, customers and orders, plus discount configuration and B2B flows.
- The technical FAQ covers the GraphQL Admin API, API versioning and quarterly API deprecation management for Business Central online, with 2026 release wave 1 and wave 2 mentioned.
- Extensibility uses integration events, public façade codeunits and extensible enums.
- Troubleshooting tools include Run Syncs in Background, Logging Mode, Request ID tracking, a log entry retention policy, Skipped Records tracking and Data Capture.
- The troubleshooting page also covers access token management and common error scenarios with resolution steps.

## Learn pages

- [FAQ for technical details](https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-faq): Implementation details related to the Shopify connector.
  - In the observatory: [Codeunit 30234 "Shpfy Product"](../../../objects/codeunit/30234.md), [Codeunit 30409 "Shpfy Orders"](../../../objects/codeunit/30409.md), [Codeunit 30418 "Shpfy Metafields"](../../../objects/codeunit/30418.md)
- [Get started with the Shopify Connector](https://learn.microsoft.com/dynamics365/business-central/shopify/get-started): Learn how to connect one or more Shopify online stores to Business Central, including prerequisites, installation options, and testing strategies.
- [Set up and use the Shopify Connector](https://learn.microsoft.com/dynamics365/business-central/shopify/walkthrough-setting-up-and-using-shopify): Various integration scenarios for demonstrating workflow between Shopify and Business Central
  - In the observatory: [Page 36954 "Customers"](../../../objects/page/36954.md), [Page 42 "Sales Order"](../../../objects/page/42.md)
- [Troubleshooting the Shopify and Business Central synchronization](https://learn.microsoft.com/dynamics365/business-central/shopify/troubleshoot): Learn what to do if something goes wrong when you synchronize data between Shopify and Business Central.
  - In the observatory: [Page 2500 "Extension Management"](../../../objects/page/2500.md), [Table 5107 "Sales Header Archive"](../../../objects/table/5107.md), [Table 5108 "Sales Line Archive"](../../../objects/table/5108.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10034 [Shopify] Don't block Shops page when user lacks extension permissions](../../../changes/bcapps/10034.md) (code change): "The Shopify Shops page no longer fails to open on Belgian environments"
- [#10092 [Shopify] Add cues for Skipped Records and API Errors on Activities page](../../../changes/bcapps/10092.md) (code change): "Two new cues on the Shopify Activities page display counts of skipped sync records"
- [#10256 [Shopify] Fix customer matching when phone numbers contain spaces](../../../changes/bcapps/10256.md) (code change): "When exporting customers to Shopify, the connector now strips phone numbers"
- [#10307 [Shopify] Fix Order Totals factbox opening an unrelated sales order for a linked posted invoice](../../../changes/bcapps/10307.md) (code change): "The Shopify Order Totals factbox now correctly resolves and displays totals"
- [#10407 Shopify connector: persist order Tax Area Code, Tax Liable, and Tax Exempt (stack 1/3)](../../../changes/bcapps/10407.md) (code change): "Shopify connector now captures and persists tax area code, tax liable, and tax exempt"
- [#10417 [Shopify] Pace raw-text GraphQL calls to prevent excessive throttling](../../../changes/bcapps/10417.md) (code change): "Shopify connector now paces GraphQL requests issued through the raw-text overload"
- [#10462 [Shopify] Fix order edit retaining discount allocation for removed quantity](../../../changes/bcapps/10462.md) (code change): "Shopify connector now correctly adjusts line-level discount amounts when refunds reduce"
- [#10467 [Shopify] Fix more-expensive exchange refund: no balancing G/L line, no false processed-order warning](../../../changes/bcapps/10467.md) (code change): "Fixed Shopify exchange refund handling when the replacement item is more expensive"
- [#10775 [Shopify] Optimize unmapped cue counts](../../../changes/bcapps/10775.md) (code change): "Shopify Activities cues for unmapped customers products and companies now count records"
- [#11168 Restore E-Document vendor invoice field compatibility](../../../changes/bcapps/11168.md) (code change): "E-Document vendor invoice field compatibility. E-Document vendor invoice field name restored"
- [#11318 [main] Bug 649189: Update E-Document vendor invoice caption](../../../changes/bcapps/11318.md) (code change): "E-Document purchase header field caption and page labels were updated to use applies-to terminology"
- [#11373 [Shopify] Improve shop navigation and background sync guidance](../../../changes/bcapps/11373.md) (code change): "Shopify integration adds shop-filtered payment actions to the Shop Card's Related menu"
- [#11386 Fix E-Doc. Item Charge Mapping codeunit ID](../../../changes/bcapps/11386.md) (code change): "E-Doc. Item Charge Mapping codeunit ID was corrected from 6532 to the properly assigned ID"
- [#11407 [Shopify] Keep exchange shipments eligible for synchronization](../../../changes/bcapps/11407.md) (code change): "Exchange-refund Shopify orders now sync their shipments correctly"
- [#11560 [E-Documents Core] [Peppol] - Enabling EDI capabilities with E-Documents. Send path (Self-Billed Purchase Invoice/Credit Memo → E-Document)](../../../changes/bcapps/11560.md) (code change): "Enables exporting self-billed purchase invoices and credit memos as Peppol"
- [#11603 [Shopify] Show configured product status in Add to Shopify confirmation](../../../changes/bcapps/11603.md) (code change): "The Shopify connector now displays the configured product status"
- [#11604 fix: capture Shopify fulfillment deliveredAt timestamp](../../../changes/bcapps/11604.md) (code change): "Shopify connector now captures and displays the fulfillment delivery timestamp"
- [#11611 [Shopify] Add GraphQL type to request telemetry](../../../changes/bcapps/11611.md) (code change): "Shopify request telemetry now includes a GraphQL Type custom dimension"
- [#11658 [Shopify] Limit webhook subscription payload fields](../../../changes/bcapps/11658.md) (code change): "Shopify webhook subscriptions now request only the required fields"
- [#12139 [Shopify] Disable Create Sales Documents for empty order views](../../../changes/bcapps/12139.md) (code change): "The Create Sales Documents action on the Shopify Orders page"
- [#12214 [Shopify] Store currency handling for auto-created orders](../../../changes/bcapps/12214.md) (code change): "The Shopify connector now persists the currency handling mode used during order processing"
- [#12215 [Shopify] Link grouped invoice to all originating orders](../../../changes/bcapps/12215.md) (code change): "Invoice document linking to Shopify orders now correctly associates a single invoice"
- [#12260 [Shopify] Fix shop card transaction navigation](../../../changes/bcapps/12260.md) (code change): "Shopify Shop Card payment transaction navigation now opens"
- [#12561 [Shopify] Preserve tax match after rate conflict](../../../changes/bcapps/12561.md) (code change): "Shopify order processing now preserves tax mappings and holds document creation when a tax rate conflict occurs"
- [#8554 [Shopify] Fix incorrect G/L line on credit memo for refund with exchange item](../../../changes/bcapps/8554.md) (code change): "Shopify connector now correctly handles credit memos for refunds involving exchange items"
- [#8587 [Shopify] Make codeunit 30272 "Shpfy Update Price Source" public](../../../changes/bcapps/8587.md) (code change): "Codeunit 30272 "Shpfy Update Price Source" is now public, allowing partners to reference it for custom Shopify price calculation logic"
- [#8871 Issue#7867: Removed the access restriction for procedures in the confirmation window.](../../../changes/bcapps/8871.md) (code change): "The Shopify Add Item Confirm page now allows unrestricted access to its procedures"
- [#9109 [Shopify] Add Transactions navigation action to Shopify Refund page](../../../changes/bcapps/9109.md) (code change): "The Shopify Refund page now includes a Transactions navigation action"
- [#9112 [Shopify] Skip refund credit memo while transaction is pending](../../../changes/bcapps/9112.md) (code change): "Shopify refund processing now skips credit memo creation when the refund transaction is still pending"
- [#9126 [Shopify] Base price-sync bulk threshold on changed price count](../../../changes/bcapps/9126.md) (code change): "Product price synchronization with Shopify now triggers bulk operations"
- [#9138 [Shopify] Add Belgium localization for company tax id mapping (Enterprise No.)](../../../changes/bcapps/9138.md) (code change): "New Shopify Connector BE app adds Enterprise No. as a tax ID mapping option"
- [#9146 [Shopify] Fix GraphQL rate limiter under-waiting after elapsed time](../../../changes/bcapps/9146.md) (code change): "The Shopify connector's GraphQL rate limiter was waiting incorrectly"
- [#9188 [Shopify] Create BC customer on order import when Shopify customer has no default address](../../../changes/bcapps/9188.md) (code change): "The Shopify connector now handles customer sync when no default address is set"
- [#9211 [Shopify] Surface skipped records and sent JSONL for bulk price sync](../../../changes/bcapps/9211.md) (code change): "Shopify connector now logs a Shopify Skipped Record"
- [#9221 [Shopify] Uptake Admin GraphQL API to version 2026-07](../../../changes/bcapps/9221.md) (code change): "Shopify connector now supports the Admin GraphQL API version 2026-07"
- [#9253 [Shopify] Disambiguate Shopify timestamp field captions and tooltips](../../../changes/bcapps/9253.md) (code change): "Shopify timestamp field captions and tooltips are now clearly marked"
- [#9313 [Shopify] Fix Product Sync deleting mapped variants on stale Updated At timestamp](../../../changes/bcapps/9313.md) (code change): "Shopify variant sync now correctly distinguishes between variants that have stale"
- [#9316 [Shopify] Preserve manually set Sell-to Customer No. when Bill-to mapping fails](../../../changes/bcapps/9316.md) (code change): "Preserve manually set Sell-to Customer No. when Bill-to mapping fails"
- [#9318 [Shopify] Fix Get Catalogs tooltip to explain company dependency](../../../changes/bcapps/9318.md) (code change): "Get Catalogs action only retrieves B2B catalogs for companies already imported"
- [#9320 [Shopify] Import HS code and country of origin from Shopify](../../../changes/bcapps/9320.md) (code change): "Shopify connector now imports harmonized system codes and country of origin"
- [#9321 [Shopify] Add Unlisted product status](../../../changes/bcapps/9321.md) (code change): "Shopify Connector's product status enum now includes the Unlisted value"
- [#9404 [Shopify] Fix Sync Prices using stale WorkDate from SingleInstance cache](../../../changes/bcapps/9404.md) (code change): "Fixed the Shopify product price calculator to rebuild its cached temporary sales header when the Work Date changes"
- [What's New: Shopify Connector B2B Functionality (2024 release wave 1)](../../../videos/3tmaVpPTQLw.md) (video): "Shopify Connector B2B Functionality; order editing; company synchronization"
- [What's New in Shopify Connector: Troubleshoot export issues -skipped records page (2025)](../../../videos/5Qfc7r618OM.md) (video): "Shopify connector; skipped records; export validation; integration troubleshooting"
- [What's New: Product Information Management in Shopify Connector (2026 release wave 1)](../../../videos/6vHJQggN4F4.md) (video): "Item Variant Image Export to Shopify; Item Attributes for Shopify Options"
- [What's New: Shopify Connector (2024 release wave 2) in 2 minutes](../../../videos/AR2FiD64wbw.md) (video): "shopify connector; meta fields; data synchronization; language translation; pricing"
- [What's New: Shopify Connector - Overview (2026 release wave 1)](../../../videos/B-pxLlb-UN0.md) (video): "shopify connector; product information management; item variants; presentment currency; price synchronization"
- [What's New in Shopify Connector: Shopify B2B Companies and Company Locations (2025 release wave 1)](../../../videos/BwBR8JwwQa4.md) (video): "shopify connector; b2b; company locations; tax id mapping; payment terms"
- [What's New in Shopify Connector: Activate Sales Channels (2025 release wave 1)](../../../videos/cuez5kIanKo.md) (video): "Activate Specific Sales Channels; Multiple Sales Channels Setup; Product Export to Shopify"
- [Introducing: Shopify and Dynamics 365 Business Central (2023)](../../../videos/e5Dr3jzCLM8.md) (video): "Shopify integration with Business Central; Automatic inventory synchronization; Automatic order fulfillment"
- [What's New in Shopify Connector: Prices for Markets (2025 release wave 2)](../../../videos/gy_6QnFpiEw.md) (video): "Shopify connector; Market Catalog Import; Price Synchronization for Markets"
- [What's New in Shopify Connector: Metafields (2025 release wave 1)](../../../videos/h5PQI4I4b7c.md) (video): "Metafields synchronization from Shopify; Metafield mapping via extensibility model"
- [What's New in Shopify Connector: Point of Sale (2025 release wave 2)](../../../videos/inuqqx12yJ8.md) (video): "Shopify POS integration with Business Central; Cash rounding for POS transactions"
- [What's New: Troubleshooting Shopify Integration (2023 release wave 2)](../../../videos/lClKXB8xXIE.md) (video): "Enhanced Shopify Log Entries View; Request ID for Shopify Support; Logging Mode Option"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 30100 "Shpfy Activities"](../../../objects/page/30100.md) · captioned "Shopify Activities" · on [Table 30100 "Shpfy Cue"](../../../objects/table/30100.md)
- [Page 30101 "Shpfy Shop Card"](../../../objects/page/30101.md) · captioned "Shopify Shop Card" · on [Table 30102 "Shpfy Shop"](../../../objects/table/30102.md)
- [Page 30102 "Shpfy Shops"](../../../objects/page/30102.md) · captioned "Shopify Shops" · on [Table 30102 "Shpfy Shop"](../../../objects/table/30102.md)
- [Page 30103 "Shpfy Tag Factbox"](../../../objects/page/30103.md) · captioned "Shopify Tags" · on [Table 30104 "Shpfy Tag"](../../../objects/table/30104.md)
- [Page 30104 "Shpfy Tags"](../../../objects/page/30104.md) · captioned "Shopify Tags" · on [Table 30104 "Shpfy Tag"](../../../objects/table/30104.md)
- [Page 30106 "Shpfy Customer Card"](../../../objects/page/30106.md) · captioned "Shopify Customer Card" · on [Table 30105 "Shpfy Customer"](../../../objects/table/30105.md)
- [Page 30107 "Shpfy Customers"](../../../objects/page/30107.md) · captioned "Shopify Customers" · on [Table 30105 "Shpfy Customer"](../../../objects/table/30105.md)
- [Page 30113 "Shpfy Order"](../../../objects/page/30113.md) · captioned "Shopify Order" · on [Table 30118 "Shpfy Order Header"](../../../objects/table/30118.md)
- [Page 30115 "Shpfy Orders"](../../../objects/page/30115.md) · captioned "Shopify Orders" · on [Table 30118 "Shpfy Order Header"](../../../objects/table/30118.md)
- [Page 30118 "Shpfy Data Capture List"](../../../objects/page/30118.md) · captioned "Shopify Data Capture List" · on [Table 30114 "Shpfy Data Capture"](../../../objects/table/30114.md)
- [Page 30119 "Shpfy Log Entries"](../../../objects/page/30119.md) · captioned "Shopify Log Entries" · on [Table 30115 "Shpfy Log Entry"](../../../objects/table/30115.md)
- [Page 30120 "Shpfy Log Entry Card"](../../../objects/page/30120.md) · captioned "Shopify Log Entry" · on [Table 30115 "Shpfy Log Entry"](../../../objects/table/30115.md)
- [Page 30126 "Shpfy Products"](../../../objects/page/30126.md) · captioned "Shopify Products" · on [Table 30127 "Shpfy Product"](../../../objects/table/30127.md)
- [Page 30135 "Shpfy Authentication"](../../../objects/page/30135.md) · captioned "Waiting for a response - do not close this page"
- [Page 30156 "Shpfy Companies"](../../../objects/page/30156.md) · captioned "Shopify Companies" · on [Table 30150 "Shpfy Company"](../../../objects/table/30150.md)
- [Page 30157 "Shpfy Company Card"](../../../objects/page/30157.md) · captioned "Shopify Company Card" · on [Table 30150 "Shpfy Company"](../../../objects/table/30150.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
