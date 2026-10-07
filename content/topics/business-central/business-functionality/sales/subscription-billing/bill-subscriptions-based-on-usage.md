---
id: topic/business-central/business-functionality/sales/subscription-billing/bill-subscriptions-based-on-usage
type: topic
title: Bill subscriptions based on usage
summary: "Usage-based billing in Business Central subscription billing: importing supplier usage data, mapping it to subscriptions, pricing it, and invoicing customers and vendors. It answers questions on data exchange definitions, suppliers, references, subscription linking, pricing options, and rebilling corrections."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:09.180Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 01c6e61115c90b63f6fc94c8af177ef87ef785c65995b73038fe9aea1851fc57
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/dataexchangedefinitions
    title: Data exchange definitions
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/extend-contract
    title: Extend contract
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/imports-processing
    title: Import data in usage-based billing
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/connect-subscription-service-object
    title: Link supplier subscriptions with subscriptions
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/UBB/welcome
    title: Overview of usage-based billing
    date: "2025-05-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/rebilling
    title: Rebilling usage data
    date: "2026-08-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/service-commitments
    title: Subscription lines in usage billing
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/references
    title: Usage data supplier references
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/suppliers
    title: Usage data suppliers
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/customers-subscriptions
    title: Usage-based billing customers and subscriptions
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/dataexchangedefinitions
    - https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/extend-contract
    - https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/imports-processing
    - https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/connect-subscription-service-object
    - https://learn.microsoft.com/dynamics365/business-central/UBB/welcome
    - https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/rebilling
    - https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/service-commitments
    - https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/references
    - https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/suppliers
    - https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/customers-subscriptions
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/sales/subscription-billing
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Sales
  - Subscription billing
  - Bill subscriptions based on usage
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/sales/subscription-billing
children: []
coverage:
  learn: 10
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 8031
  - 8035
  - 8036
  - 8037
  - 8038
  - 8041
  - 8042
  - 8043
  - 8044
  - 8053
  - 8096
member_hash: 35ed15fe30791a121ba2f8822fb699d0028bf83a388d04c75b3df2540961e2a2
narrative: generated
---

# Bill subscriptions based on usage

> Usage-based billing in Business Central subscription billing: importing supplier usage data, mapping it to subscriptions, pricing it, and invoicing customers and vendors. It answers questions on data exchange definitions, suppliers, references, subscription linking, pricing options, and rebilling corrections.

Path: [Business functionality](../../../business-functionality.md) > [Sales](../../sales.md) > [Subscription billing](../subscription-billing.md) > Bill subscriptions based on usage · tier official · system sales · narrative reviewed by Opus

## Overview

Usage-based billing lets a company import usage data from external vendors, calculate prices, and create contract invoices for subscription services with usage-dependent fees. The overview page explains the flow, including CSV import, billing proposals, credit memos, and refunds.

Setup pages cover the building blocks: data exchange definitions (CSV field mappings), usage data suppliers, supplier references, and customers and subscriptions master data. Subscription lines in usage billing define the pricing method. The import page describes file or API import, subscription matching, and pricing. The Connect Supplier Subscription to Subscription page links imported data to the correct subscription line. Extend contract adds subscription lines when imported data reveals missing subscriptions or references. Rebilling covers corrections for periods already invoiced.

Start with the overview, then set up a data exchange definition and a supplier before importing data.

## Key points

- Data exchange definitions set file encoding, column separation, table mappings, and transformation rules for CSV usage imports.
- Usage data can be imported through a file or through an API.
- Pricing options on subscription lines are Usage Quantity, Fixed Quantity, and Unit Cost Surcharge, set with the Usage Based Billing toggle and Usage Based Pricing field.
- Usage data suppliers have settings such as Create Customers, Create Subscriptions, Unit Price from Import, and Vendor Invoice per.
- Supplier references map supplier subscriptions and products to contracts and items, and support customer reference creation and automatic subscription creation.
- The Connect Supplier Subscription to Subscription page links imported data to the correct subscription line before processing.
- Extend contract adds subscription lines when imported data shows missing subscriptions or references.
- Rebilling treats new data for already invoiced periods as adjustments and invoices only the delta, with credit memos where needed.

## Learn pages

- [Data exchange definitions](https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/dataexchangedefinitions): You can use data exchange definitions in usage-based billing.
- [Extend contract](https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/extend-contract): You can extend contracts in usage-based billing.
- [Import data in usage-based billing](https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/imports-processing): You can import and process data in usage-based billing.
- [Link supplier subscriptions with subscriptions](https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/connect-subscription-service-object): You can link supplier subscriptions with subscriptions in usage-based billing.
- [Overview of usage-based billing](https://learn.microsoft.com/dynamics365/business-central/UBB/welcome): Get an overview of the features for usage-based billing.
- [Rebilling usage data](https://learn.microsoft.com/dynamics365/business-central/UBB/processing-usage-data/rebilling): Business Central automatically rebills usage data that arrives for an already-invoiced period.
- [Subscription lines in usage billing](https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/service-commitments): You can use subscription lines in usage-based billing.
- [Usage data supplier references](https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/references): You can use references in usage-based billing.
- [Usage data suppliers](https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/suppliers): You can use suppliers in usage-based billing.
- [Usage-based billing customers and subscriptions](https://learn.microsoft.com/dynamics365/business-central/UBB/masterdata/customers-subscriptions): You can use customer subscriptions in usage-based billing.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 8031, 8035, 8036, 8037, 8038, 8041, 8042, 8043, 8044, 8053, 8096.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
