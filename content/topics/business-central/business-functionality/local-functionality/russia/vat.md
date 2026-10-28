---
id: topic/business-central/business-functionality/local-functionality/russia/vat
type: topic
title: VAT
summary: "Russian VAT functionality in Business Central: uploading purchase and sales ledgers and VAT declarations to XML, VAT on customer prepayments, VAT reinstatement, manual VAT settlement, and the vendor tax agent scheme. Answers setup and posting questions for these Russia-specific VAT processes."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:11.098Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 83b4fb665dd5d4741d71497de067af98f86672b747d212fe9e0d4fac1d59193b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/upload-books-purchases-sales-xml-vat-declaration
    title: Upload books of purchases and sales in Russia
    date: "2026-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/VAT-by-Customer-prepayments
    title: VAT by customer prepayment in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/VAT-reinstatement
    title: VAT reinstatement in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Settlement-VAT
    title: VAT settlement in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Vendor-Tax-Agent-scheme
    title: Vendor tax agent scheme in Russia
    date: "2026-10-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/upload-books-purchases-sales-xml-vat-declaration
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/VAT-by-Customer-prepayments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/VAT-reinstatement
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Settlement-VAT
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Vendor-Tax-Agent-scheme
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/russia
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Russia
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/russia
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 2fbce15ca4100d8dba60829d76e40728aab1130e6bdf4051292fead2b97fa453
narrative: generated
---

# VAT

> Russian VAT functionality in Business Central: uploading purchase and sales ledgers and VAT declarations to XML, VAT on customer prepayments, VAT reinstatement, manual VAT settlement, and the vendor tax agent scheme. Answers setup and posting questions for these Russia-specific VAT processes.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Russia](../russia.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers the Russia-specific VAT features in Business Central. Each page describes one process: statutory reporting of VAT books, handling VAT on customer prepayments, reinstating previously deducted VAT, settling VAT manually, and the vendor tax agent scheme.

The pages are independent. The prepayment, reinstatement and settlement pages depend on VAT posting setup, such as VAT posting groups, calculation types and accounts. The tax agent scheme depends on vendor card setup, and the upload page depends on statutory report setup. The prepayment, reinstatement and settlement pages also deal with unrealized VAT or transit VAT, so it helps to read their setup sections first.

Use the VAT settlement page for manual full or partial settlement in the VAT settlement worksheet. Use the customer prepayment or VAT reinstatement pages for those specific cases. Use the upload page when you need to produce the Purchase and Sales Ledgers as XML files for statutory reporting.

## Key points

- Upload of VAT Purchase Ledgers, VAT Sales Ledgers and VAT declarations to XML files for Russian statutory reporting, including report folder configuration and additional sheets.
- VAT by customer prepayment creates VAT entries and a VAT invoice when a customer prepayment is posted. It is configured in General Ledger Setup, VAT Posting Setup and customer posting groups, and covers returned prepayments.
- VAT reinstatement records the reversal of previously deducted VAT in the VAT Reinstatement Worksheet, using transit VAT with manual posting. It involves the Suggest Documents task and the VAT Amount Factor, and needs specific VAT posting setup.
- VAT settlement is manual and can be full or partial, through the VAT settlement worksheet. It needs VAT posting groups, calculation types and accounts set up, handles transit VAT and unrealized VAT, and covers VAT allocation and write-off.
- The vendor tax agent scheme processes VAT on prepayments and payments, paid from internal funds or from vendor funds.
- The vendor tax agent scheme needs a vendor card with agreement details and payment journal entries. It supports multi-currency payments.

## Learn pages

- [Upload books of purchases and sales in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/upload-books-purchases-sales-xml-vat-declaration): Russian enhancements include books of purchases and sales VAT in XML format.
  - In the observatory: [Page 26581 "Statutory Report Setup (RU)"](../../../../../objects/page/26581-ru.md)
- [VAT by customer prepayment in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/VAT-by-Customer-prepayments): Learn how to report VAT on customer prepayments in Russia, including setup and processing steps in Business Central.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md), [Page 25 "Customer Ledger Entries"](../../../../../objects/page/25.md), [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md), [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md)
- [VAT reinstatement in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/VAT-reinstatement): Learn how to manage VAT reinstatement in Business Central for Russian localizations, including setup and processing steps.
  - In the observatory: [Page 14946 "VAT Reinstatement Journal (RU)"](../../../../../objects/page/14946-ru.md), [Page 14947 "VAT Reinstatement Worksheet (RU)"](../../../../../objects/page/14947-ru.md), [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md)
- [VAT settlement in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Settlement-VAT): Learn about VAT settlement in Russia, including setup, manual settlement, and VAT allocation features in Business Central.
  - In the observatory: [Page 12437 "VAT Settlement Journal (RU)"](../../../../../objects/page/12437-ru.md), [Page 14925 "VAT Settlement Worksheet (RU)"](../../../../../objects/page/14925-ru.md), [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md)
- [Vendor tax agent scheme in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Vendor-Tax-Agent-scheme): Learn about vendor tax agent schemes in Russia, including enhancements for VAT processing and payment workflows.
  - In the observatory: [Page 14925 "VAT Settlement Worksheet (RU)"](../../../../../objects/page/14925-ru.md), [Page 256 "Payment Journal"](../../../../../objects/page/256.md), [Page 26 "Vendor Card"](../../../../../objects/page/26.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
