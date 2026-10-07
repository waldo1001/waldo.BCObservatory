---
id: topic/business-central/business-functionality/sales/subscription-billing/contracts
type: topic
title: Contracts
summary: "Subscription Billing contracts in Business Central: customer and vendor subscription contracts, subscriptions, planned subscription lines, renewal, cancellation, price updates, and deferrals. It answers questions about setting up and managing recurring billing contracts and their lifecycle."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:37.954Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4e72d3ca9daa16826f48701e254acc5869fe57bbe4b1c452b292dcc551946a83
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/service-commitment-cancellation
    title: Cancel planned subscription lines
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/customer-contracts
    title: Customer subscription contracts
    date: "2026-05-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/contracts-services-mgmt
    title: Managing contracts, subscriptions, and subscription lines
    date: "2026-05-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/so-service-commitments
    title: Planned subscription lines in subscriptions
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/contract-deferrals
    title: Subscription contract deferrals
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/contract-renewal
    title: Subscription contract renewal
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/service-objects
    title: Subscriptions
    date: "2025-07-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/price-update
    title: Update prices
    date: "2026-05-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/vendor-contracts
    title: Vendor subscription contracts
    date: "2026-05-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/service-commitment-cancellation
    - https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/customer-contracts
    - https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/contracts-services-mgmt
    - https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/so-service-commitments
    - https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/contract-deferrals
    - https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/contract-renewal
    - https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/service-objects
    - https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/price-update
    - https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/vendor-contracts
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
  - Contracts
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/sales/subscription-billing
children: []
coverage:
  learn: 9
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 314
  - 8004
  - 8005
  - 8014
  - 8015
  - 8025
  - 8052
  - 8053
  - 8059
  - 8060
  - 8070
  - 8071
  - 8079
member_hash: e9a433133147bfe5cb8a43a4ae53f2fda40a39ce56fe3900400e4233834fde39
narrative: generated
---

# Contracts

> Subscription Billing contracts in Business Central: customer and vendor subscription contracts, subscriptions, planned subscription lines, renewal, cancellation, price updates, and deferrals. It answers questions about setting up and managing recurring billing contracts and their lifecycle.

Path: [Business functionality](../../../business-functionality.md) > [Sales](../../sales.md) > [Subscription billing](../subscription-billing.md) > Contracts · tier official · system sales · narrative reviewed by Opus

## Overview

This section covers the contract side of Subscription Billing. Customer subscription contracts record obligations to customers and resemble sales orders, with billing and shipping address details, contract lines, and invoice discounts. Vendor subscription contracts record supplier liabilities and support extending contracts, merging lines, creating invoices per contract, and tracking closed lines.

Subscriptions hold the history of products sold to customers, including item and customer data, quantity, dates, and subscription lines with pricing and terms. Planned subscription lines describe the monetary content of customer and supplier agreements, including billing recurrence and termination dates. The page on managing contracts, subscriptions, and subscription lines explains the key fields, such as billing rhythm, calculation base amount, billing base period, and line end date.

Other pages cover lifecycle tasks: renewing contracts through sales quotes and orders, cancelling lines using notice periods and terms, updating prices with templates, and deferring revenue and cost to future periods. Start with Customer subscription contracts and Managing contracts, subscriptions, and subscription lines, then move to the task page you need.

## Key points

- Customer subscription contracts hold contract lines, billing and shipping addresses, invoice details, and invoice discounts, and are used to generate contract invoices.
- Vendor subscription contracts support contract extension, merging contract lines, invoice creation per contract, and viewing closed contract lines.
- Subscriptions record products sold to customers, with serial number tracking, attributes, quantity changes, and subscription lines with pricing.
- Renewal extends lines at their end date by creating sales quotes and converting them to orders, which updates the subscription line end dates.
- Cancellation depends on Subscription Line End Date, Cancellation Possible Until date, Term Until date, notice period, initial term, and subsequent term.
- Price updates use a Price Update Template with a method (percentage, calculation base, or item list prices), Price Binding Period, and Perform Update on Date; planned or immediate changes are possible.
- Contract deferrals defer customer revenue and vendor cost to future periods, are created automatically, and use accrual accounts, posting groups, and monthly release.
- Planned subscription lines carry billing recurrence and termination dates, with change logging and archiving of subscription lines.

## Learn pages

- [Cancel planned subscription lines](https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/service-commitment-cancellation): You can cancel planned subscription lines in subscription billing.
- [Customer subscription contracts](https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/customer-contracts): You can use customer subscription contracts in subscription billing.
- [Managing contracts, subscriptions, and subscription lines](https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/contracts-services-mgmt): You can manage subscription contracts in subscription billing.
- [Planned subscription lines in subscriptions](https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/so-service-commitments): You can use planned subscription lines with subscriptions in subscription billing.
- [Subscription contract deferrals](https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/contract-deferrals): You can use contract deferrals in subscription billing.
- [Subscription contract renewal](https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/contract-renewal): You can renew contracts in subscription billing.
- [Subscriptions](https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/service-objects): You can use subscriptions in subscription billing.
- [Update prices](https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/price-update): You can update prices in subscription billing.
- [Vendor subscription contracts](https://learn.microsoft.com/dynamics365/business-central/SRB/working-with-contracts/vendor-contracts): You can use vendor subscription contracts in subscription billing.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 314, 8004, 8005, 8014, 8015, 8025, 8052, 8053, 8059, 8060, 8070, 8071, 8079.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
