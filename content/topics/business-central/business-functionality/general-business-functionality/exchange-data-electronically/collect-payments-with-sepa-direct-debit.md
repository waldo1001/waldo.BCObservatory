---
id: topic/business-central/business-functionality/general-business-functionality/exchange-data-electronically/collect-payments-with-sepa-direct-debit
type: topic
title: Collect payments with SEPA direct debit
summary: SEPA direct debit collection in Business Central, plus related bank setup and data exchange pages. It answers questions on setting up mandates and export formats, exporting collection XML files, setting up bank accounts, Yodlee bank feeds, the AMC Banking 365 Fundamentals extension, and XML schemas for data exchange definitions.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:59.205Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a4fb95ee436b82c36d67f89349216889e7d8017d501e8b9e5120387fbb0c1dfc
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-collect-payments-with-sepa-direct-debit
    title: SEPA Direct Debit in Business Central
    date: "2024-07-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-accounts
    title: Set up bank accounts
    date: "2025-06-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service
    title: Set Up Yodlee Bank Feeds
    date: "2024-03-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-extensions-amc-banking
    title: Using the AMC banking 365 fundamentals extension
    date: "2024-07-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-use-xml-schemas-to-prepare-data-exchange-definitions
    title: XML schemas to prepare data exchange definitions
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-collect-payments-with-sepa-direct-debit
    - https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-accounts
    - https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service
    - https://learn.microsoft.com/dynamics365/business-central/ui-extensions-amc-banking
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-use-xml-schemas-to-prepare-data-exchange-definitions
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/general-business-functionality/exchange-data-electronically
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - General business functionality
  - Exchange data electronically
  - Collect payments with SEPA direct debit
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/general-business-functionality/exchange-data-electronically
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 370
  - 371
  - 372
  - 373
  - 375
  - 423
  - 424
  - 425
  - 426
  - 427
  - 1207
  - 1208
  - 1230
  - 1240
  - 1280
  - 1290
  - 20100
  - 20101
  - 20102
  - 20105
  - 20106
  - 20107
  - 20109
member_hash: a446170dce48d14116a01838b15bac658ebf36f3ec6b296930b8352fee1d3497
narrative: generated
---

# Collect payments with SEPA direct debit

> SEPA direct debit collection in Business Central, plus related bank setup and data exchange pages. It answers questions on setting up mandates and export formats, exporting collection XML files, setting up bank accounts, Yodlee bank feeds, the AMC Banking 365 Fundamentals extension, and XML schemas for data exchange definitions.

Path: [Business functionality](../../../business-functionality.md) > [General business functionality](../../general-business-functionality.md) > [Exchange data electronically](../exchange-data-electronically.md) > Collect payments with SEPA direct debit · tier official · system localization · narrative reviewed by Opus

## Overview

This section covers collecting customer payments by SEPA direct debit in EURO. You set up bank export formats, payment methods and mandates, create collection entries, and export an XML file to the bank. Payment receipts are then posted and reconciled.

The other pages support that flow. Bank account setup covers transaction tracking, payment and bank reconciliation, file import and export, and multi-currency use. Yodlee bank feeds import statements automatically into the Payment Reconciliation Journal. The AMC Banking 365 Fundamentals extension converts bank data to formats used by over 600 banks. The XML schema page explains how to generate data exchange definitions from schema nodes.

Start with the SEPA Direct Debit page for the end-to-end process. Then read Set up bank accounts, and pick the Yodlee or AMC page if you need automated statement import or bank format conversion.

## Key points

- SEPA Direct Debit collects customer payments from bank accounts in EURO using the SEPA format.
- Setup involves bank export formats, payment methods and direct debit mandates; collection entries are then exported as an XML file to the bank.
- Payment receipts are posted and bank reconciliation follows the collection.
- Bank account setup supports payment reconciliation, bank reconciliation, bank file import/export and local and foreign currencies.
- Yodlee bank feeds (Envestnet) import bank statements into the Payment Reconciliation Journal about every two hours, in supported regions.
- AMC Banking 365 Fundamentals converts bank data for over 600 banks, with SWIFT and IBAN support, for payment export and statement import.
- XML schemas can be loaded, nodes selected, and data exchange definitions or XMLports generated from them.

## Learn pages

- [SEPA Direct Debit in Business Central](https://learn.microsoft.com/dynamics365/business-central/finance-collect-payments-with-sepa-direct-debit): With your customer's consent, you can collect payments directly from the customer's bank account according to the SEPA format.
- [Set up bank accounts](https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-accounts): Learn how bank accounts are used in Business Central, and how you can reconcile amounts with your bank.
- [Set Up Yodlee Bank Feeds](https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service): You can convert payment information to any data format that your bank requires and enable the export or import of bank files.
- [Using the AMC banking 365 fundamentals extension](https://learn.microsoft.com/dynamics365/business-central/ui-extensions-amc-banking): Learn how to easily exchange data with your banks by transforming data into the format that they require.
- [XML schemas to prepare data exchange definitions](https://learn.microsoft.com/dynamics365/business-central/across-how-to-use-xml-schemas-to-prepare-data-exchange-definitions): Use XML schemas to set up the data exchange framework to define which data elements you want to exchange with.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 370, 371, 372, 373, 375, 423, 424, 425, 426, 427, 1207, 1208, 1230, 1240, 1280, 1290, 20100, 20101, 20102, 20105, 20106, 20107, 20109.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
