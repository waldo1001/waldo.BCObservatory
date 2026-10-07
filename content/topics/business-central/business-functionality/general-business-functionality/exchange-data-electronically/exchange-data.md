---
id: topic/business-central/business-functionality/general-business-functionality/exchange-data-electronically/exchange-data
type: topic
title: Exchange data
summary: "Exchange data covers how Business Central exchanges data with external files and services: data exchange definitions, bank payment file export and import, SEPA credit transfer and direct debit, Yodlee bank feeds, and sending, receiving and OCR conversion of electronic documents. It answers setup and field-mapping questions."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:58.610Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b211df3a03f862799d98a8550ad4abc9febebf330df2edd52bc88352a38dff5b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-data-exchange-definitions
    title: Define how data is exchanged electronically
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-exchange-data
    title: Exchanging data
    date: "2025-10-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-field-mapping-when-exporting-payment-files-using-bank-data-conversion-service
    title: Field mapping for exporting bank payment files | Microsoft Docs
    date: "2025-10-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-field-mapping-when-importing-sepa-camt-files
    title: Field mapping when importing SEPA CAMT files | Microsoft Docs
    date: "2025-11-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer
    title: Make payments with AMC banking (US) or SEPA credit transfer (EU)
    date: "2024-08-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/purchasing-how-to-receive-and-convert-electronic-documents
    title: Receive and convert electronic documents
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/sales-how-to-send-electronic-documents
    title: Send Electronic Documents
    date: "2021-06-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-collect-payments-with-sepa-direct-debit
    title: SEPA Direct Debit in Business Central
    date: "2024-07-17"
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
    url: https://learn.microsoft.com/dynamics365/business-central/across-how-use-ocr-pdf-images-files
    title: Use OCR to turn PDF into e-invoices
    date: "2025-10-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-data-exchange-definitions
    - https://learn.microsoft.com/dynamics365/business-central/across-exchange-data
    - https://learn.microsoft.com/dynamics365/business-central/across-field-mapping-when-exporting-payment-files-using-bank-data-conversion-service
    - https://learn.microsoft.com/dynamics365/business-central/across-field-mapping-when-importing-sepa-camt-files
    - https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer
    - https://learn.microsoft.com/dynamics365/business-central/purchasing-how-to-receive-and-convert-electronic-documents
    - https://learn.microsoft.com/dynamics365/business-central/sales-how-to-send-electronic-documents
    - https://learn.microsoft.com/dynamics365/business-central/finance-collect-payments-with-sepa-direct-debit
    - https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service
    - https://learn.microsoft.com/dynamics365/business-central/across-how-use-ocr-pdf-images-files
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
  - Exchange data
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/general-business-functionality/exchange-data-electronically
children: []
coverage:
  learn: 10
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 189
  - 190
  - 191
  - 256
  - 371
  - 423
  - 424
  - 427
  - 1205
  - 1206
  - 1207
  - 1208
  - 1209
  - 1210
  - 1211
  - 1213
  - 1214
  - 1215
  - 1216
  - 1217
  - 1230
  - 1280
  - 1290
  - 10810
  - 10811
member_hash: 0ee8f7a17442710130c2fa00ebe2b9cbd2ad01d9f7544eae1cdef2c54f69af84
narrative: generated
---

# Exchange data

> Exchange data covers how Business Central exchanges data with external files and services: data exchange definitions, bank payment file export and import, SEPA credit transfer and direct debit, Yodlee bank feeds, and sending, receiving and OCR conversion of electronic documents. It answers setup and field-mapping questions.

Path: [Business functionality](../../../business-functionality.md) > [General business functionality](../../general-business-functionality.md) > [Exchange data electronically](../exchange-data-electronically.md) > Exchange data · tier official · system none · narrative reviewed by Opus

## Overview

This area explains the data exchange framework and the business tasks built on it. The framework lets you define how data is mapped between Business Central and external files in XML, delimited, fixed-width or JSON formats, using line and column definitions, field mapping and transformation rules. The framework and related areas must be set up before any exchange is processed.

The other pages apply it to specific tasks. For payments: paying vendors by SEPA credit transfer (EU) or AMC Banking 365 Fundamentals (US), collecting customer payments by SEPA direct debit, importing SEPA CAMT bank files, and automatic bank statement import through Yodlee bank feeds. For documents: sending PEPPOL invoices and credit memos, receiving and converting PEPPOL and OCR documents into purchase documents, and using an OCR service to turn PDFs into e-invoices.

Start with "Exchanging data" for the overview, then "Define how data is exchanged electronically" for the framework. Move to the payment or document page that fits your task. The two field-mapping pages are reference material for bank export and CAMT import.

## Key points

- Data exchange definitions support XML, delimited, fixed-width and JSON, with column and line definitions, field mapping, transformation rules, XML schema support and field grouping.
- Vendor payments can be exported in SEPA Credit Transfer format (EU) or via the AMC Banking 365 Fundamentals extension (US), with credit transfer registration and export history tracking.
- A reference page maps Business Central bank accounts, general journal lines, customers and vendors (including IBAN and SWIFT) to the AMC payment export file.
- SEPA Direct Debit collects customer payments in EURO; it needs a bank export format, payment methods, mandates and collection entries, then an exported XML file for the bank.
- SEPA CAMT import mapping supports bank statement import and payment reconciliation, including transaction ID verification and automatic payment application.
- Yodlee bank feeds import bank statements into the Payment Reconciliation Journal about every two hours, in supported regions.
- Receiving PEPPOL and OCR invoices and credit memos into purchase documents uses text-to-account mapping; this page is tagged 2023 release wave 2.
- Sending PEPPOL sales invoices and credit memos through a document exchange service is documented for versions before 2023 release wave 2.

## Learn pages

- [Define how data is exchanged electronically](https://learn.microsoft.com/dynamics365/business-central/across-how-to-set-up-data-exchange-definitions): Define how Business Central exchange data with external files like electronic documents, bank data, item catalogs and more.
- [Exchanging data](https://learn.microsoft.com/dynamics365/business-central/across-exchange-data): Exchange electronic business documents, for example bank files, between Business Central and external parties.
- [Field mapping for exporting bank payment files \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/across-field-mapping-when-exporting-payment-files-using-bank-data-conversion-service): Exporting payment files with the AMC Banking 365 Fundamentals extension exposes your data to the service provider.
- [Field mapping when importing SEPA CAMT files \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/across-field-mapping-when-importing-sepa-camt-files): Import bank statement files in the regional SEPA (Single Euro Payments Area) format for European markets.
- [Make payments with AMC banking (US) or SEPA credit transfer (EU)](https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer): Process payments to your vendors by exporting a file (EFT) together with the payment information from the journal lines.
- [Receive and convert electronic documents](https://learn.microsoft.com/dynamics365/business-central/purchasing-how-to-receive-and-convert-electronic-documents): Learn how to receive and convert electronic documents in Business Central, either directly from trading partners or through an OCR service.
- [Send Electronic Documents](https://learn.microsoft.com/dynamics365/business-central/sales-how-to-send-electronic-documents): Learn how to use Business Central to send electric invoices and credit memos in the PEPPOL format.
- [SEPA Direct Debit in Business Central](https://learn.microsoft.com/dynamics365/business-central/finance-collect-payments-with-sepa-direct-debit): With your customer's consent, you can collect payments directly from the customer's bank account according to the SEPA format.
- [Set Up Yodlee Bank Feeds](https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service): You can convert payment information to any data format that your bank requires and enable the export or import of bank files.
- [Use OCR to turn PDF into e-invoices](https://learn.microsoft.com/dynamics365/business-central/across-how-use-ocr-pdf-images-files): Describes how you can use an OCR service to convert incoming PDF or image files to electronic documents.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 189, 190, 191, 256, 371, 423, 424, 427, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1213, 1214, 1215, 1216, 1217, 1230, 1280, 1290, 10810, 10811.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
