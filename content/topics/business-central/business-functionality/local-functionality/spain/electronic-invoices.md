---
id: topic/business-central/business-functionality/local-functionality/spain/electronic-invoices
type: topic
title: Electronic invoices
summary: "Spanish electronic invoicing and Cartera functionality in Business Central: VERI*FACTU reporting to AEAT (embedded mode or B2Brouter), SII invoice and credit memo types, and the Cartera modules for receivables and payables bills. It answers setup and scope questions for Spain compliance."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:51.771Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 12ee462006c4a452e925e3e55c3b28e1ebc2fe9906ad44e4a3471f1fded3862f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/cartera-module
    title: Cartera Module
    date: "2025-05-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/enable-real-time-invoice-reporting
    title: Enable embedded VERIFACTU mode [ES]
    date: "2026-06-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-cartera-module
    title: Payments Cartera Module
    date: "2025-05-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/receivables-cartera-module
    title: Receivables Cartera module [ES]
    date: "2025-05-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/SII-invoice-types-sales-purchase-documents
    title: SII Invoice Types in Sales and Purchase Documents
    date: "2025-05-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/verifactu-setup
    title: VERIFACTU with external service integration [ES]
    date: "2026-06-15"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/cartera-module
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/enable-real-time-invoice-reporting
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-cartera-module
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/receivables-cartera-module
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/SII-invoice-types-sales-purchase-documents
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/verifactu-setup
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/spain
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Spain
  - Electronic invoices
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/spain
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 10751
  - 10752
  - 10753
  - 10770
  - 10771
  - 35291
  - 35292
  - 35293
  - 35294
  - 35295
  - 35296
  - 35297
  - 35298
  - 35299
  - 35300
  - 35301
  - 35302
  - 35303
  - 35304
  - 35305
  - 35306
  - 35848
  - 35850
  - 700071
  - 700072
  - 7000003
  - 7000004
  - 7000005
  - 7000006
  - 7000007
  - 7000008
  - 7000009
  - 7000010
  - 7000011
  - 7000012
  - 7000014
  - 7000015
  - 7000016
  - 7000017
  - 7000018
  - 7000019
  - 7000020
  - 7000021
  - 7000022
  - 7000024
  - 7000025
  - 7000029
  - 7000030
  - 7000031
  - 7000032
  - 7000033
  - 7000034
  - 7000036
  - 7000037
  - 7000040
  - 7000041
  - 7000044
  - 7000045
  - 70000013
member_hash: fb4f792c745264526782c056b2d7bee76f1d439ffd17284321f8b519c401588d
narrative: generated
---

# Electronic invoices

> Spanish electronic invoicing and Cartera functionality in Business Central: VERI*FACTU reporting to AEAT (embedded mode or B2Brouter), SII invoice and credit memo types, and the Cartera modules for receivables and payables bills. It answers setup and scope questions for Spain compliance.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Spain](../spain.md) > Electronic invoices · tier official · system localization · narrative reviewed by Opus

## Overview

This section covers Spain-specific e-invoicing and bill handling. Two pages deal with VERI*FACTU, Spain's real-time invoice reporting to the Spanish Tax Agency (AEAT): one for the embedded mode, which uses digital signing, hash chaining and QR codes through the e-document framework, and one for integration with an external service through the B2Brouter API. VERI*FACTU is presented as an alternative to SII.

A separate page lists the SII invoice and credit memo types for sales and purchase documents, including which types Business Central supports and how they appear in the XML.

The Cartera pages describe handling of bills of exchange and promissory notes. An overview page introduces the module, with separate pages for Receivables Cartera (bill groups, collections, discounts, factoring) and Payments Cartera (payables documents, payment orders). Start with the VERI*FACTU page that matches your chosen approach, or the Cartera overview if you work with bills.

## Key points

- VERI*FACTU is Spain's e-invoicing standard for real-time reporting of invoices to AEAT.
- Embedded VERI*FACTU mode uses digital signatures, hash chaining, QR codes and the e-document framework.
- The external option connects through the B2Brouter API and is described as an alternative to SII.
- The SII invoice types page states which invoice and credit memo types are supported, with XML details.
- Cartera manages bills of exchange and promissory notes for customers and vendors, with multi-currency support.
- Receivables Cartera covers bill groups, collections, discounting, factoring, finance charges and interest.
- Payments Cartera builds payables documents from purchase invoices grouped by bank, due date, value or currency, and supports draft payment orders and payment confirmation.

## Learn pages

- [Cartera Module](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/cartera-module): Learn how to use the Cartera module to manage customer and vendor payments with documents such as bills of exchange and promissory notes.
- [Enable embedded VERIFACTU mode [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/enable-real-time-invoice-reporting): Enable real-time invoice reporting to AEAT with Verifactu in Business Central, ensuring QR code, hash chaining, and digital signature compliance.
- [Payments Cartera Module](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-cartera-module): Manage payables documents from generated from purchase invoices or the Cartera Journal using the Payments Cartera module.
- [Receivables Cartera module [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/receivables-cartera-module): Use the Receivables Cartera module to manage bills generated from sales invoices, including grouping, collection, and factoring, through the Cartera Journal.
- [SII Invoice Types in Sales and Purchase Documents](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/SII-invoice-types-sales-purchase-documents): Learn how Business Central supports SII and the different invoice and credit memo types used in the Spanish version.
- [VERIFACTU with external service integration [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/verifactu-setup): Learn how to set up and use VERI*FACTU in the Spanish version of Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 59 objects with no object page: page/10751, page/10752, page/10753, page/10770, page/10771, page/35291, page/35292, page/35293, page/35294, page/35295, page/35296, page/35297, page/35298, page/35299, page/35300, page/35301, page/35302, page/35303, page/35304, page/35305, page/35306, page/35848, page/35850, page/700071, page/700072, page/7000003, page/7000004, page/7000005, page/7000006, page/7000007, page/7000008, page/7000009, page/7000010, page/7000011, page/7000012, page/7000014, page/7000015, page/7000016, page/7000017, page/7000018, page/7000019, page/7000020, page/7000021, page/7000022, page/7000024, page/7000025, page/7000029, page/7000030, page/7000031, page/7000032, page/7000033, page/7000034, page/7000036, page/7000037, page/7000040, page/7000041, page/7000044, page/7000045, page/70000013.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
