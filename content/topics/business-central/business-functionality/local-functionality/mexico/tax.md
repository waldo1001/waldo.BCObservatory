---
id: topic/business-central/business-functionality/local-functionality/mexico/tax
type: topic
title: Tax
summary: "Mexico tax functionality in Business Central: DIOT reporting of vendor purchase VAT to SAT, RFC and CURP tax identification types for customers and vendors, and VAT recalculation on foreign currency payments. Answers setup and usage questions for these Mexico tax tasks."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:39.666Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8501bfb6807c1f7612144cc2ba6c550cedbcbf9f9bc442fb56b0e7990e6fd195
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/ui-extensions-setup-and-generate-diot-report-mx
    title: Set up and generate DIOT reports | Microsoft Docs
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/tax-identification-types-for-mexico
    title: Tax Identification Types for Mexico
    date: "2025-02-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/vat-recalculation
    title: VAT recalculation
    date: "2025-02-26"
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

> Mexico tax functionality in Business Central: DIOT reporting of vendor purchase VAT to SAT, RFC and CURP tax identification types for customers and vendors, and VAT recalculation on foreign currency payments. Answers setup and usage questions for these Mexico tax tasks.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Mexico](../mexico.md) > Tax · tier official · system localization · narrative reviewed by Opus

## Overview

This section covers three Mexico-specific tax areas. The DIOT page explains how to report VAT from vendor purchases to SAT by generating a text file. The tax identification page explains which identifier to use for Mexican customers and vendors. The VAT recalculation page explains how VAT is handled when customers pay in foreign currency.

Start with the tax identification page if you are setting up customers and vendors, because the DIOT report relies on vendor data such as the RFC number. Then move to the DIOT page for setup through Assisted Setup, vendor configuration and optional withholding tax reporting. Use the VAT recalculation page when payments arrive in a foreign currency.

## Key points

- The DIOT report extension for Mexico generates a text file to report VAT from vendor purchases to SAT.
- DIOT setup is done through Assisted Setup.
- Each vendor needs a DIOT type of operation, and DIOT concepts are part of the configuration.
- Withholding tax reporting in DIOT is optional.
- DIOT setup involves the RFC number and tax jurisdiction location; the DIOT page references version 26.3.
- RFC and CURP are the tax identification types, chosen by whether the customer or vendor is a company or a person.
- VAT recalculation on payment uses the exchange rates at payment time for foreign currency payments.
- VAT recalculation involves currency exchange adjustment and unrealized VAT reporting.

## Learn pages

- [Set up and generate DIOT reports \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/ui-extensions-setup-and-generate-diot-report-mx): Use this extension to set up and generate DIOT declarations in Business Central for the Mexican authorities.
- [Tax Identification Types for Mexico](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/tax-identification-types-for-mexico): All customers and vendors must have a federal tax identification number. This article covers the tax identification types in the Mexican version.
- [VAT recalculation](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/vat-recalculation): When a customer pays in a foreign currency, VAT must be recalculated using the exchange rate at the time of the invoice payment.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 5 objects with no object page: page/27030, page/27031, page/27032, page/27033, page/27034.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
