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
  at: "2026-10-08T00:04:31.553Z"
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
  objects:
    - object/page/370
    - object/page/371
    - object/page/372
    - object/page/373
    - object/page/375
    - object/page/423
    - object/page/424
    - object/page/425
    - object/page/426
    - object/page/427
    - object/page/1207
    - object/page/1208
    - object/page/1230
    - object/page/1240
    - object/page/1280
    - object/page/1290
    - object/page/20100
    - object/page/20101
    - object/page/20102
    - object/page/20105
    - object/page/20106
    - object/page/20107
    - object/page/20109
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
  code: 23
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

Path: [Business functionality](../../../business-functionality.md) > [General business functionality](../../general-business-functionality.md) > [Exchange data electronically](../exchange-data-electronically.md) > Collect payments with SEPA direct debit · tier official · system localization · narrative reviewed (checked by Opus)

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

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 370 "Bank Account Card"](../../../../../objects/page/370.md) · on [Table 270 "Bank Account"](../../../../../objects/table/270.md)
- [Page 371 "Bank Account List"](../../../../../objects/page/371.md) · captioned "Bank Accounts" · on [Table 270 "Bank Account"](../../../../../objects/table/270.md)
- [Page 372 "Bank Account Ledger Entries"](../../../../../objects/page/372.md) · on [Table 271 "Bank Account Ledger Entry"](../../../../../objects/table/271.md)
- [Page 373 "Bank Account Posting Groups"](../../../../../objects/page/373.md) · on [Table 277 "Bank Account Posting Group"](../../../../../objects/table/277.md)
- [Page 375 "Bank Account Statistics"](../../../../../objects/page/375.md) · on [Table 270 "Bank Account"](../../../../../objects/table/270.md)
- [Page 423 "Customer Bank Account Card"](../../../../../objects/page/423.md) · on [Table 287 "Customer Bank Account"](../../../../../objects/table/287.md)
- [Page 424 "Customer Bank Account List"](../../../../../objects/page/424.md) · on [Table 287 "Customer Bank Account"](../../../../../objects/table/287.md)
- [Page 425 "Vendor Bank Account Card"](../../../../../objects/page/425.md) · on [Table 288 "Vendor Bank Account"](../../../../../objects/table/288.md)
- [Page 426 "Vendor Bank Account List"](../../../../../objects/page/426.md) · on [Table 288 "Vendor Bank Account"](../../../../../objects/table/288.md)
- [Page 427 "Payment Methods"](../../../../../objects/page/427.md) · on [Table 289 "Payment Method"](../../../../../objects/table/289.md)
- [Page 1207 "Direct Debit Collections"](../../../../../objects/page/1207.md) · on [Table 1207 "Direct Debit Collection"](../../../../../objects/table/1207.md)
- [Page 1208 "Direct Debit Collect. Entries"](../../../../../objects/page/1208.md) · on [Table 1208 "Direct Debit Collection Entry"](../../../../../objects/table/1208.md)
- [Page 1230 "SEPA Direct Debit Mandates"](../../../../../objects/page/1230.md) · captioned "Direct Debit Mandates" · on [Table 1230 "SEPA Direct Debit Mandate"](../../../../../objects/table/1230.md)
- [Page 1240 "SWIFT Codes"](../../../../../objects/page/1240.md) · on [Table 1210 "SWIFT Code"](../../../../../objects/table/1210.md)
- [Page 1280 "Bank Clearing Standards"](../../../../../objects/page/1280.md) · on [Table 1280 "Bank Clearing Standard"](../../../../../objects/table/1280.md)
- [Page 1290 "Payment Reconciliation Journal"](../../../../../objects/page/1290.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../../objects/table/274.md)
- [Page 20100 "AMC Bank Bank Name List"](../../../../../objects/page/20100.md) · captioned "AMC Banking Bank Name List" · on [Table 20100 "AMC Bank Banks"](../../../../../objects/table/20100.md)
- [Page 20101 "AMC Banking Setup"](../../../../../objects/page/20101.md) · on [Table 20101 "AMC Banking Setup"](../../../../../objects/table/20101.md)
- [Page 20102 "AMC Bank Pmt. Types"](../../../../../objects/page/20102.md) · captioned "AMC Banking Payment Types" · on [Table 20102 "AMC Bank Pmt. Type"](../../../../../objects/table/20102.md)
- [Page 20105 "AMC Bank Assisted Setup"](../../../../../objects/page/20105.md) · captioned "AMC Banking 365 Fundamentals Assisted Setup" · on [Table 20101 "AMC Banking Setup"](../../../../../objects/table/20101.md)
- [Page 20106 "AMC Bank Assist Bank Account"](../../../../../objects/page/20106.md) · on [Table 777 "Online Bank Acc. Link"](../../../../../objects/table/777.md)
- [Page 20107 "AMC Bank Webcall Log"](../../../../../objects/page/20107.md) · captioned "AMC Banking 365 Webservice Log" · on [Table 710 "Activity Log"](../../../../../objects/table/710.md)
- [Page 20109 "AMC Bank Signup to Service"](../../../../../objects/page/20109.md) · captioned "AMC Banking Signup webservice" · on [Table 79 "Company Information"](../../../../../objects/table/79.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
