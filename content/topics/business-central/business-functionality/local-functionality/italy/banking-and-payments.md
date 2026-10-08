---
id: topic/business-central/business-functionality/local-functionality/italy/banking-and-payments
type: topic
title: Banking & payments
summary: "Banking and payments in the Italian version of Business Central: automatic payments and bills, issuing vendor payments and customer bills with SEPA Credit Transfer and SEPA Direct Debit, and payment terms with installments. It answers setup and processing questions for Italian bill and payment handling."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:26.790Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1df75923ae5097b1872600b0f68a5a440a2ef63f2a44ff69e0a1cb5bed959b74
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-automatic-payments-and-automatic-bills
    title: Automatic Payments and Automatic Bills [IT]
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-issue-vendor-payments-and-customer-bills
    title: Issue Vendor Payments and Customer Bills (IT)
    date: "2025-05-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-payment-terms
    title: Set Up Payment Terms (IT)
    date: "2025-05-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/vendor-payments-and-customer-bills-overview
    title: Vendor Payments Customer Bills Overview [IT]
    date: "2025-05-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-automatic-payments-and-automatic-bills
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-issue-vendor-payments-and-customer-bills
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-payment-terms
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/vendor-payments-and-customer-bills-overview
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/italy
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Italy
  - Banking & payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/italy
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 12102
  - 12170
  - 12171
  - 12172
  - 12173
  - 12174
  - 12175
  - 12176
  - 12178
  - 12180
  - 12181
  - 12182
  - 12183
  - 12184
  - 12185
  - 12186
  - 12188
  - 12190
  - 12192
  - 12193
  - 12194
  - 12195
  - 12203
  - 12204
member_hash: 852d10e93340a78451f9a2a34c1001697e700d81447ac6d4fba4f70e236f8278
narrative: generated
---

# Banking & payments

> Banking and payments in the Italian version of Business Central: automatic payments and bills, issuing vendor payments and customer bills with SEPA Credit Transfer and SEPA Direct Debit, and payment terms with installments. It answers setup and processing questions for Italian bill and payment handling.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > Banking & payments · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers the Italy-specific way of handling bills and payments. It explains how customer and vendor bills are processed automatically, which payment formats are supported (SEPA Credit Transfer, SEPA Direct Debit and Italian bill formats), and how payment terms are defined for invoices.

Start with the overview page on vendor payments and customer bills to see the formats and bill posting groups. Then use the automatic payments and automatic bills page for setup of bank information, sales and receivables setup, and bill codes on payment methods. The issuing page describes how to export bill lists to file and review errors. The payment terms page covers installments and discounts.

## Key points

- Automatic bills to customers and from vendors are supported in the Italian version.
- Supported formats include SEPA Credit Transfer, SEPA Direct Debit and Italian bill formats.
- Automatic payments setup involves bank account information, sales and receivables setup, and bill codes for payment methods.
- Issuing payments and bills uses Export Bill List to File, with a File Export Errors FactBox for problems.
- The TRASFBANC payment method is mentioned for issuing SEPA-based payments.
- Bill posting groups are part of the vendor payments and customer bills overview.
- Payment terms support installments with payment percentages, due date calculations, discount dates and discount percentages.
- Payment terms apply to both customer and vendor invoices.

## Learn pages

- [Automatic Payments and Automatic Bills [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-automatic-payments-and-automatic-bills): Learn how to set up automatic payments and bills in the Italian version of Business Central.
- [Issue Vendor Payments and Customer Bills (IT)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-issue-vendor-payments-and-customer-bills): The vendor and customer bill pay feature supports SEPA-based formats in addition to Italian file formats.
- [Set Up Payment Terms (IT)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-payment-terms): In Business Central for Italy, you can define payment terms that allow payments in one or multiple installments, specifying details for each installment as needed.
- [Vendor Payments Customer Bills Overview [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/vendor-payments-and-customer-bills-overview): Manage automatic customer bills and vendor payments in the Italian version of Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 24 objects with no object page: page/12102, page/12170, page/12171, page/12172, page/12173, page/12174, page/12175, page/12176, page/12178, page/12180, page/12181, page/12182, page/12183, page/12184, page/12185, page/12186, page/12188, page/12190, page/12192, page/12193, page/12194, page/12195, page/12203, page/12204.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
