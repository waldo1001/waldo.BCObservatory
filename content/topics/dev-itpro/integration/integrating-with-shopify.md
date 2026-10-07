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
  at: "2026-10-07T02:32:59.251Z"
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

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

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
