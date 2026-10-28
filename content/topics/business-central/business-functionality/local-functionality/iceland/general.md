---
id: topic/business-central/business-functionality/local-functionality/iceland/general
type: topic
title: General
summary: "General Icelandic functionality in Business Central: deleting posted invoices and credit memos, exporting audit data, mapping IRS numbers to the chart of accounts, and registration numbers. It answers setup and compliance questions for the Icelandic version."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:24.426Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 973b862524ca045985e0f23029bce0343b3f4232e5613cfb557e35ca81d7493d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/deleting-posted-invoices-and-credit-memos
    title: Delete Posted Invoices and Credit Memos in Iceland
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-to-export-audit-files
    title: Export data for auditing
    date: "2024-08-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/how-to-map-irs-numbers-to-chart-of-accounts
    title: Map IRS Numbers to the Chart of Accounts in Iceland
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/use-registration-no
    title: Registration Numbers in the Icelandic Localization
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/deleting-posted-invoices-and-credit-memos
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-to-export-audit-files
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/how-to-map-irs-numbers-to-chart-of-accounts
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/use-registration-no
  objects:
    - object/page/5260
    - object/page/5264
    - object/page/5266
    - object/page/5267
    - object/page/5270
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/iceland
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Iceland
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/iceland
children: []
coverage:
  learn: 4
  code: 5
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5260
  - 5261
  - 5264
  - 5266
  - 5267
  - 5270
member_hash: beb403e8ac42978e6f360e94ed24935f1bde071e15ac535688373cc1734e47ef
narrative: generated
---

# General

> General Icelandic functionality in Business Central: deleting posted invoices and credit memos, exporting audit data, mapping IRS numbers to the chart of accounts, and registration numbers. It answers setup and compliance questions for the Icelandic version.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Iceland](../iceland.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects four pages for the Icelandic version of Business Central. They cover deleting posted documents under retention rules, audit data export, mapping IRS numbers to the chart of accounts, and registration numbers on master data and documents.

The deletion and registration number pages rely on the IS Core app, introduced in version 24.0. The IRS number page covers mapping general ledger accounts for tax authority reporting, including the Trial Balance - IRS Number report. The audit export page describes the Audit File Export extension, which exports GL and VAT entries in formats such as SIE, FEC and SAF-T. That page is not specific to Iceland.

Start with the page that matches your task. Use the IRS number page for tax authority account mapping and the registration number page for setting up company, customer and vendor registration numbers. Use the deletion page when you remove old posted invoices or credit memos, and the audit export page when you prepare data for auditors.

## Key points

- Posted sales invoices, purchase invoices and credit memos can be deleted in the Icelandic version, subject to document retention and fiscal year rules (version 24.0, IS Core app).
- Deletion is controlled by Document Retention Period and Allow Document Deletion Before settings.
- The Audit File Export extension exports GL and VAT entries in formats such as SIE, FEC and SAF-T.
- Audit export supports GL account mapping, data quality checks, parallel processing and zip export.
- IRS numbers are mapped to chart of accounts entries to meet tax authority reporting, using Reverse Prefix and IRS Details.
- The Trial Balance - IRS Number report is part of the IRS number mapping topic.
- Registration numbers are stored on Company Information and on customer and vendor cards.
- Registration numbers populate sales invoices, orders, credit memos and payment exports automatically (IS Core app, version 24.0).

## Learn pages

- [Delete Posted Invoices and Credit Memos in Iceland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/deleting-posted-invoices-and-credit-memos): Learn how Icelandic document retention and setup dates control deletion of posted sales and purchase invoices and credit memos in Business Central.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md), [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md), [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md)
- [Export data for auditing](https://learn.microsoft.com/dynamics365/business-central/finance-how-to-export-audit-files): This article explains how to set up different export formats and then use them, based on auditor or authority requirements.
- [Map IRS Numbers to the Chart of Accounts in Iceland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/how-to-map-irs-numbers-to-chart-of-accounts): Learn how to create Icelandic IRS numbers, assign them to posting accounts, and review the mappings with IRS reports in Dynamics 365 Business Central.
- [Registration Numbers in the Icelandic Localization](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/use-registration-no): Learn where to enter Icelandic registration numbers in Business Central and how sales documents and payment exports use company and recipient details.
  - In the observatory: [Codeunit 1206 "Pmt Export Mgt Gen. Jnl Line"](../../../../../objects/codeunit/1206.md), [Codeunit 1207 "Pmt Export Mgt Vend Ledg Entry"](../../../../../objects/codeunit/1207.md), [Codeunit 1208 "Pmt Export Mgt Cust Ledg Entry"](../../../../../objects/codeunit/1208.md), [Table 1226 "Payment Export Data"](../../../../../objects/table/1226.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5260 "G/L Account Mapping"](../../../../../objects/page/5260.md) · on [Table 5260 "G/L Account Mapping Header"](../../../../../objects/table/5260.md)
- [Page 5264 "Audit File Export Setup"](../../../../../objects/page/5264.md) · on [Table 5264 "Audit File Export Setup"](../../../../../objects/table/5264.md)
- [Page 5266 "Audit File Export Documents"](../../../../../objects/page/5266.md) · on [Table 5265 "Audit File Export Header"](../../../../../objects/table/5265.md)
- [Page 5267 "Audit File Export Doc. Card"](../../../../../objects/page/5267.md) · captioned "Audit File Export Document" · on [Table 5265 "Audit File Export Header"](../../../../../objects/table/5265.md)
- [Page 5270 "Audit File Export Format Setup"](../../../../../objects/page/5270.md) · on [Table 5268 "Audit File Export Format Setup"](../../../../../objects/table/5268.md)

Learn also names 1 object with no object page: page/5261.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
