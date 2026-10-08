---
id: topic/business-central/business-functionality/local-functionality/russia/vat
type: topic
title: VAT
summary: "Russia VAT functionality in Business Central: uploading VAT purchase and sales books and declarations to XML, customer prepayment VAT, VAT reinstatement, VAT settlement, and the vendor tax agent scheme. It answers setup and process questions for each of these."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:22.536Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3541103abe3a5bcd5fa01f7ee695d6cea6f9a30447c10780e723e034841c9036
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/upload-books-purchases-sales-xml-vat-declaration
    title: Upload books of purchases and sales in Russia
    date: "2025-07-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/VAT-by-Customer-prepayments
    title: VAT by customer prepayment in Russia
    date: "2025-07-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/VAT-reinstatement
    title: VAT reinstatement in Russia
    date: "2025-07-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Settlement-VAT
    title: VAT settlement in Russia
    date: "2025-07-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Vendor-Tax-Agent-scheme
    title: Vendor tax agent scheme in Russia
    date: "2025-07-22"
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

> Russia VAT functionality in Business Central: uploading VAT purchase and sales books and declarations to XML, customer prepayment VAT, VAT reinstatement, VAT settlement, and the vendor tax agent scheme. It answers setup and process questions for each of these.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Russia](../russia.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

The VAT section for Russia covers the local VAT processes a Russian company runs in Business Central. It has five pages, each on one process: reporting (books of purchases and sales and VAT declarations), customer prepayments, reinstatement of deducted VAT, settlement, and the vendor tax agent scheme.\n\nStart with the process you need. For reporting, the upload page explains the folder settings and the XML generation through Statutory Report Setup. For the VAT lifecycle, the prepayment, settlement and reinstatement pages cover unrealized VAT, transit VAT and the worksheets used to process them. Reinstatement also draws on settlement concepts such as manual VAT settlement and realized VAT amounts. The tax agent page covers VAT handling for vendors with tax agent roles.

## Key points

- Upload VAT purchase and sales books and VAT declarations to XML files; set the Electronic Files Folder and generate the files through Statutory Report Setup.
- VAT by customer prepayment creates VAT invoices and records when a customer prepays. It supports unrealized VAT setup and uses VAT posting configuration.
- Prepayment returns are handled with corrective entries.
- VAT reinstatement returns previously deducted VAT to the budget. The VAT Reinstatement Worksheet finds the documents that need it, and configurable factors adjust the amounts.
- VAT settlement can be full or partial. It uses manual settlement worksheets and VAT allocation, with support for transit VAT and unrealized VAT tracking and a VAT register.
- The vendor tax agent scheme supports VAT payment from internal funds or from vendor funds, set up through agreements and payment journal operations.
- The tax agent scheme also covers multi-currency prepayments and payments to the Tax Authority.

## Learn pages

- [Upload books of purchases and sales in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/upload-books-purchases-sales-xml-vat-declaration): Russian enhancements include books of purchases and sales VAT in XML format.
- [VAT by customer prepayment in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/VAT-by-Customer-prepayments): Learn how to report VAT on customer prepayments in Russia, including setup and processing steps in Business Central.
- [VAT reinstatement in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/VAT-reinstatement): Learn how to manage VAT reinstatement in Business Central for Russian localizations, including setup and processing steps.
- [VAT settlement in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Settlement-VAT): Learn about VAT settlement in Russia, including setup, manual settlement, and VAT allocation features in Business Central.
- [Vendor tax agent scheme in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Vendor-Tax-Agent-scheme): Learn about vendor tax agent schemes in Russia, including enhancements for VAT processing and payment workflows.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
