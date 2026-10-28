---
id: topic/business-central/business-functionality/local-functionality/mexico/tax
type: topic
title: Tax
summary: "Mexico tax functionality in Business Central: DIOT reports for SAT, tax identification types (RFC and CURP), and cash-basis VAT with exchange-rate adjustments. It answers setup and reporting questions for Mexican VAT and tax registration."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:50.326Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5d045c6a6f66adc6b90796f3ab7ebfa61d4fc81fbcb1d5dde2bd4a946141ad1a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/ui-extensions-setup-and-generate-diot-report-mx
    title: Set Up and Generate DIOT Reports
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/tax-identification-types-for-mexico
    title: Tax Identification Types for Mexico
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/vat-recalculation
    title: VAT Recalculation and Cash-Basis VAT in Mexico
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/ui-extensions-setup-and-generate-diot-report-mx
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/tax-identification-types-for-mexico
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/vat-recalculation
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/mexico
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Mexico
  - Tax
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/mexico
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 27030
  - 27031
  - 27032
  - 27033
  - 27034
member_hash: ab3baf80c4ed90887f9d6cc010be69a74c98a084303ff394b96bc9ab6848a34f
narrative: generated
---

# Tax

> Mexico tax functionality in Business Central: DIOT reports for SAT, tax identification types (RFC and CURP), and cash-basis VAT with exchange-rate adjustments. It answers setup and reporting questions for Mexican VAT and tax registration.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Mexico](../mexico.md) > Tax · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers three areas of Mexican tax handling. One page explains how to set up and generate DIOT reports for VAT reporting to SAT. Another describes tax identification types for customers, vendors, and companies. The third explains cash-basis VAT, where VAT is recorded when invoices are paid.

The pages are independent and have no subtopics. Start with the tax identification page if you are registering parties, since RFC and CURP data depends on the entity classification. Read the cash-basis VAT page when configuring VAT Posting Setup and General Ledger Setup. Use the DIOT page when you are ready to prepare the TXT export, which relies on vendor and VAT posting group setup.

## Key points

- DIOT reports are set up and generated for Mexican VAT reporting to SAT, with TXT export files compliant with 2025 regulations (version 26.3).
- DIOT setup involves vendor information, linking VAT posting groups, configuring DIOT concepts, and selecting operation types.
- DIOT reports include withholding tax reporting.
- Tax Identification Type defines whether a customer, vendor, or company registers with an RFC or CURP number.
- Registration depends on classification as Legal Entity or Natural Person.
- Cash-basis VAT records VAT when invoices are paid rather than when posted, using unrealized VAT.
- Foreign-currency transactions under cash-basis VAT get automatic exchange-rate adjustments.
- Cash-basis VAT is configured in VAT Posting Setup and General Ledger Setup.

## Learn pages

- [Set Up and Generate DIOT Reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/ui-extensions-setup-and-generate-diot-report-mx): Set up vendor operation types and VAT concept links, then export a 54-field DIOT declaration from Business Central for the Mexican tax authorities.
- [Tax Identification Types for Mexico](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/tax-identification-types-for-mexico): All customers and vendors must have a federal tax identification number. This article covers the tax identification types in the Mexican version.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 21 "Customer Card"](../../../../../objects/page/21.md), [Page 26 "Vendor Card"](../../../../../objects/page/26.md)
- [VAT Recalculation and Cash-Basis VAT in Mexico](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/vat-recalculation): Set up cash-basis VAT in Business Central to recognize VAT on customer payments and account for exchange-rate differences on foreign-currency invoices.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 5 objects with no object page: page/27030, page/27031, page/27032, page/27033, page/27034.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
