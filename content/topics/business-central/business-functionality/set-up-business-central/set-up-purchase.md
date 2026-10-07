---
id: topic/business-central/business-functionality/set-up-business-central/set-up-purchase
type: topic
title: Set up purchase
summary: "Set up purchase covers configuring purchasing in Business Central: payables setup, vendors and vendor bank accounts, purchasers, vendor priority, purchase prices and discounts, invoice posting policies, and total amount validation. It answers how-to setup questions for the purchasing area."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:14.674Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 2fa1c961aff11aca3436f9bb5c400b573d23e701630f33def9c14537c769c5b3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/purchasing-how-prioritize-vendors
    title: Assign a priority level to a vendor
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-setup-invoice-posting-policy
    title: Define an invoice posting policy for users
    date: "2024-06-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/purchasing-setup-purchasing
    title: Overview of tasks to set up purchasing
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/purchasing-how-record-purchase-price-discount-payment-agreements
    title: Record special purchase prices and discounts
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/purchasing-how-register-new-vendors
    title: Register a new vendor
    date: "2026-08-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-prices-and-discounts
    title: Set up prices and discounts
    date: "2026-08-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/purchasing-how-setup-purchasers
    title: Set up purchasers and assign purchasers to vendors
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/how-to-set-up-validation-of-purchase-amounts
    title: Set up validation of purchase amounts
    date: "2025-03-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/purchasing-how-set-up-vendors-bank-accounts
    title: Set up vendor bank accounts
    date: "2026-08-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-link-doc-dates-to-posting-dates
    title: Updating document dates with posting dates
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/purchasing-how-prioritize-vendors
    - https://learn.microsoft.com/dynamics365/business-central/admin-setup-invoice-posting-policy
    - https://learn.microsoft.com/dynamics365/business-central/purchasing-setup-purchasing
    - https://learn.microsoft.com/dynamics365/business-central/purchasing-how-record-purchase-price-discount-payment-agreements
    - https://learn.microsoft.com/dynamics365/business-central/purchasing-how-register-new-vendors
    - https://learn.microsoft.com/dynamics365/business-central/across-prices-and-discounts
    - https://learn.microsoft.com/dynamics365/business-central/purchasing-how-setup-purchasers
    - https://learn.microsoft.com/dynamics365/business-central/how-to-set-up-validation-of-purchase-amounts
    - https://learn.microsoft.com/dynamics365/business-central/purchasing-how-set-up-vendors-bank-accounts
    - https://learn.microsoft.com/dynamics365/business-central/across-link-doc-dates-to-posting-dates
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Set up purchase
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central
children: []
coverage:
  learn: 10
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 14
  - 26
  - 27
  - 34
  - 175
  - 176
  - 177
  - 178
  - 456
  - 457
  - 459
  - 460
  - 461
  - 786
  - 1346
  - 1379
  - 1385
  - 1386
  - 1628
  - 5116
  - 5727
  - 5729
  - 7001
  - 7011
  - 7012
  - 7014
  - 7015
  - 7016
  - 7017
  - 7018
  - 7189
  - 7190
  - 9307
member_hash: fd3dbe24cf353829c4e71c593c16cc04cd5e14689947779a3b86b6c251c3a2fc
narrative: generated
---

# Set up purchase

> Set up purchase covers configuring purchasing in Business Central: payables setup, vendors and vendor bank accounts, purchasers, vendor priority, purchase prices and discounts, invoice posting policies, and total amount validation. It answers how-to setup questions for the purchasing area.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up purchase · tier official · system none · narrative reviewed by Opus

## Overview

This section groups the pages needed to prepare Business Central for purchasing. It has no subtopics, so all content is on its own pages. The page "Overview of tasks to set up purchasing" is the natural starting point. It covers payables setup such as posting rules, number series, external document number requirements, exact cost reversing, discount calculation and prepayment checking.

Vendor setup pages cover registering a vendor (manually or from templates), setting up vendor bank accounts with preferred accounts and approval workflows, assigning a priority level to a vendor, and assigning purchasers to vendors for filtering reports and statistics.

Further pages cover pricing and control. They explain recording special purchase prices and discounts, setting up sales and purchase prices and discounts in general, defining invoice posting policies per user, and validating purchase amounts against document totals. A page on updating document dates with posting dates is also included, although its source describes it for sales transactions.

## Key points

- Start with the overview of purchasing setup tasks: posting rules, number series, external document number, exact cost reversing, prepayment checking.
- Register vendors manually or with templates; the vendor card can hold remit-to addresses, bank accounts, dimensions and optional self-billing agreements.
- Vendor bank accounts support preferred accounts, IBAN management and approval workflows for new accounts.
- Vendor priority numbers control ranking in payment suggestions and vendor lists.
- Purchaser codes assigned to vendors help filter reports and prepare purchasing statistics.
- Invoice posting policies per user can prohibit, allow or require posting invoices together with receipts or shipments.
- The prices and discounts pages (tagged 2020 release wave 2) cover line discounts, invoice discounts, vendor price groups, discount posting principles, price lists with new and legacy pricing experiences, and automatic best price calculation.
- Total amount validation on purchase invoices and credit memos checks document totals against line totals before posting (2025 release wave 1).

## Learn pages

- [Assign a priority level to a vendor](https://learn.microsoft.com/dynamics365/business-central/purchasing-how-prioritize-vendors): Assign priority numbers to vendors or suppliers in Business Central to streamline payment suggestions and manage payables efficiently.
- [Define an invoice posting policy for users](https://learn.microsoft.com/dynamics365/business-central/admin-setup-invoice-posting-policy): Use invoice posting policies to control whether a user can post sales and purchase invoices.
- [Overview of tasks to set up purchasing](https://learn.microsoft.com/dynamics365/business-central/purchasing-setup-purchasing): Describes the tasks to define your company's procurement policies and set up your purchasing processes.
- [Record special purchase prices and discounts](https://learn.microsoft.com/dynamics365/business-central/purchasing-how-record-purchase-price-discount-payment-agreements): Set up and manage special purchase prices and discounts for vendors, and automatically apply them to purchase documents.
- [Register a new vendor](https://learn.microsoft.com/dynamics365/business-central/purchasing-how-register-new-vendors): Learn how to register vendors, save vendor cards as templates, and set up vendor-specific number series for self-billed purchase invoices.
- [Set up prices and discounts](https://learn.microsoft.com/dynamics365/business-central/across-prices-and-discounts): Describes how to define standard and special price and discount agreements for sales and purchases.
- [Set up purchasers and assign purchasers to vendors](https://learn.microsoft.com/dynamics365/business-central/purchasing-how-setup-purchasers): Organize purchasers or purchasing agents in your company to enable efficient tracking and statistical analysis.
- [Set up validation of purchase amounts](https://learn.microsoft.com/dynamics365/business-central/how-to-set-up-validation-of-purchase-amounts): You can validate the total amount on purchase invoices and credit memos before you post the documents.
- [Set up vendor bank accounts](https://learn.microsoft.com/dynamics365/business-central/purchasing-how-set-up-vendors-bank-accounts): Learn how to associate bank accounts to vendors, including contact information, SWIFT, and IBAN codes.
- [Updating document dates with posting dates](https://learn.microsoft.com/dynamics365/business-central/across-link-doc-dates-to-posting-dates): Learn how to make sure that document dates on sales and purchase documents match their posting dates.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 14, 26, 27, 34, 175, 176, 177, 178, 456, 457, 459, 460, 461, 786, 1346, 1379, 1385, 1386, 1628, 5116, 5727, 5729, 7001, 7011, 7012, 7014, 7015, 7016, 7017, 7018, 7189, 7190, 9307.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
