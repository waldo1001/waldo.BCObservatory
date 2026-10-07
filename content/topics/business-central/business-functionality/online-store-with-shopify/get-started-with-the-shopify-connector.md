---
id: topic/business-central/business-functionality/online-store-with-shopify/get-started-with-the-shopify-connector
type: topic
title: Get started with the Shopify connector
summary: The Shopify connector getting-started section explains how to connect a Shopify store to Business Central and synchronize items, prices, inventory, customers, companies and orders. It also covers creating a Shopify test account. It answers first-setup and test-environment questions.
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:07.016Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 93979d630fd742982e5019a7687985874b47d52ac7487dcb649a8323bb3ff955
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
    title: Getting started with the connector for Shopify
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-account
    - https://learn.microsoft.com/dynamics365/business-central/shopify/get-started
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/online-store-with-shopify
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9221
    - change/bcapps/9253
    - change/bcapps/9313
    - change/bcapps/9316
    - change/bcapps/9317
    - change/bcapps/9318
    - change/bcapps/9320
    - change/bcapps/9321
    - change/bcapps/9327
    - change/bcapps/9357
learn_toc_path:
  - Business functionality
  - Online store with Shopify
  - Get started with the Shopify connector
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/online-store-with-shopify
children: []
coverage:
  learn: 2
  code: 0
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

> The Shopify connector getting-started section explains how to connect a Shopify store to Business Central and synchronize items, prices, inventory, customers, companies and orders. It also covers creating a Shopify test account. It answers first-setup and test-environment questions.

Path: [Business functionality](../../business-functionality.md) > [Online store with Shopify](../online-store-with-shopify.md) > Get started with the Shopify connector · tier official · system integration · narrative reviewed by Opus

## Overview

This section is the entry point for the Shopify connector in Business Central. It has two pages and no subtopics. One page introduces the connector and what it synchronizes. The other explains how to create a Shopify account to test it.

Start with "Getting started with the connector for Shopify" to learn how to connect a store and which data flows between Shopify and Business Central: items, prices, inventory, customers, companies and orders. Then use "Create and set up a Shopify account" if you need a store to try it on. That page covers a trial setup for end-users and a development store for partners.

## Key points

- The Shopify Connector connects Shopify stores to Business Central.
- Synchronization covers items, prices, inventory, customers, companies and orders.
- The account page covers creating a Shopify account for testing the connector.
- End-users use a trial setup. Partners use development stores.
- Account setup includes plan selection and customer account configuration.
- Test payments are activated for testing, using either Bogus Gateway or Shopify Payments.

## Learn pages

- [Create and set up a Shopify account](https://learn.microsoft.com/dynamics365/business-central/shopify/shopify-account): Learn how to get a Shopify account so you can demonstrate the workflow for integrating Shopify and Business Central.
- [Getting started with the connector for Shopify](https://learn.microsoft.com/dynamics365/business-central/shopify/get-started): First steps when configuring a connection between Business Central and Shopify.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9221 [Shopify] Uptake Admin GraphQL API to version 2026-07](../../../../changes/bcapps/9221.md) (code change): "Updated API version from 2026-01 to 2026-07 following Shopify's deprecation schedule"
- [#9253 [Shopify] Disambiguate Shopify timestamp field captions and tooltips](../../../../changes/bcapps/9253.md) (code change): "Shopify timestamp field captions and tooltips are now clearly marked with a (Shopify) suffix"
- [#9313 [Shopify] Fix Product Sync deleting mapped variants on stale Updated At timestamp](../../../../changes/bcapps/9313.md) (code change): "RetrieveShopifyVariant now returns true when the Shopify variant exists"
- [#9316 [Shopify] Preserve manually set Sell-to Customer No. when Bill-to mapping fails](../../../../changes/bcapps/9316.md) (code change): "Fixed a Shopify Connector bug where manually set Sell-to Customer No. was overwritten"
- [#9317 [Shopify] Add Companies to Shopify navigation menu](../../../../changes/bcapps/9317.md) (code change): "The Shopify Companies list is now accessible from the Shopify navigation group"
- [#9318 [Shopify] Fix Get Catalogs tooltip to explain company dependency](../../../../changes/bcapps/9318.md) (code change): "Get Catalogs action on the Shopify Catalogs page now displays a clearer tooltip"
- [#9320 [Shopify] Import HS code and country of origin from Shopify](../../../../changes/bcapps/9320.md) (code change): "Shopify connector now imports harmonized system codes and country of origin"
- [#9321 [Shopify] Add Unlisted product status](../../../../changes/bcapps/9321.md) (code change): "Shopify Connector's product status enum now includes the Unlisted value"
- [#9327 [Shopify] Migrate Shopify Connector to Expiring Offline Access Tokens](../../../../changes/bcapps/9327.md) (code change): "Shopify Connector now supports Shopify's expiring offline access tokens"
- [#9357 [Shopify] Add Compare-at Price field to Shopify Variants page for personalization](../../../../changes/bcapps/9357.md) (code change): "Shopify Variants page now includes a Compare at Price field control"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 30100, 30101, 30102, 30103, 30104, 30135.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
