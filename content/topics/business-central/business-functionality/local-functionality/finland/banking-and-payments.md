---
id: topic/business-central/business-functionality/local-functionality/finland/banking-and-payments
type: topic
title: Banking & payments
summary: "Finnish banking and payments functionality in Business Central: electronic banking with LM03 and LUM2 formats, bank reference file setup, payment file generation for vendors, SEPA credit transfer export, and disregarding payment discounts. It answers setup and how-to questions for domestic and foreign payments in the Finnish version."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:05.605Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0fc80c2c393f09dde89a09d4ce68d7ba9d773e04e9c6a7acc0f6d09b5fbe52cf
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/electronic-banking-in-finland
    title: Electronic banking in Finland
    date: "2025-02-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-generate-payment-files
    title: Generate Payment Files (FI)
    date: "2025-02-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-disregard-payment-discounts
    title: How to Disregard Payment Discounts
    date: "2025-02-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/sepa-credit-transfer-payments
    title: SEPA credit transfer payments (FI)
    date: "2025-02-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-bank-reference-files
    title: Set Up Bank Reference Files (FI)
    date: "2025-02-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/electronic-banking-in-finland
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-generate-payment-files
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-disregard-payment-discounts
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/sepa-credit-transfer-payments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-bank-reference-files
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/finland
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Finland
  - Banking & payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/finland
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 32000000
  - 32000001
  - 32000002
  - 32000004
  - 32000005
  - 32000006
member_hash: ce2f5a4ce8e68b225ad679f383d81283370742b7bb9660b7b76dc6eb3e156ba6
narrative: generated
---

# Banking & payments

> Finnish banking and payments functionality in Business Central: electronic banking with LM03 and LUM2 formats, bank reference file setup, payment file generation for vendors, SEPA credit transfer export, and disregarding payment discounts. It answers setup and how-to questions for domestic and foreign payments in the Finnish version.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Finland](../finland.md) > Banking & payments · tier official · system localization · narrative reviewed by Opus

## Overview

This section covers the Finland-specific tools for handling payments through the bank. Electronic banking supports domestic and foreign payment processing using the LM03 and LUM2 formats. It links customer payments to invoices automatically and exports vendor payments as bank transfer files.

The pages fit together as a flow. Set Up Bank Reference Files (FI) defines how payment data is imported and exported, including foreign payment handling, SEPA compliance, payment date processing and exchange rates. Generate Payment Files (FI) then covers sending domestic or foreign vendor payments, using Suggest Vendor Payments. SEPA credit transfer payments (FI) describes the newer SEPA export. A separate page explains how to disregard payment discounts on payment terms.

Start with the Electronic banking in Finland overview, then do the bank reference file setup before generating payment files.

## Key points

- Electronic banking in Finland supports domestic and foreign payments using LM03 and LUM2 formats.
- Customer payments can be linked to invoices automatically through bank reference files and reference numbers.
- Vendor payments are exported as bank transfer files; Suggest Vendor Payments is used when generating payment files.
- Bank reference file setup covers foreign payment handling, the SEPA standard, payment date processing and exchange rate management.
- SEPA credit transfer export uses codeunit 13413 and report 13413 with the pain.001.001.09 format.
- The disregard payment discount option is configured on payment terms and accepts full payment after the discount date within payment tolerance limits.

## Learn pages

- [Electronic banking in Finland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/electronic-banking-in-finland): The electronic banking feature allows processing domestic and foreign payments. Set up bank reference files first to export or import electronic payments.
- [Generate Payment Files (FI)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-generate-payment-files): Before making electronic payments to vendors, you must create a payment file for either domestic or international payments.
- [How to Disregard Payment Discounts](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-disregard-payment-discounts): Use the disregard payment discount at full payment feature to accept payments when certain conditions are true.
- [SEPA credit transfer payments (FI)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/sepa-credit-transfer-payments): Finnish enhancements allow you to create Single Euro Payments Area (SEPA) credit transfer files to send vendor payments to banks.
- [Set Up Bank Reference Files (FI)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-bank-reference-files): In the Finnish version, set up bank reference files to define how to import or export payment data for electronic transactions.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 6 objects with no object page: page/32000000, page/32000001, page/32000002, page/32000004, page/32000005, page/32000006.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
