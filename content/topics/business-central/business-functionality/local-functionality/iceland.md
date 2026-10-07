---
id: topic/business-central/business-functionality/local-functionality/iceland
type: topic
title: Iceland
summary: "Iceland local functionality in Business Central: VAT summaries on documents, IRS number mapping, electronic invoicing rules for single-copy invoices, deletion of posted documents, audit data export, and the W1 core app migration from version 24.0. It answers Icelandic compliance and setup questions."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:36.644Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bb5038bc40d409688066ba6eff7a50a1720a0fd3e00539efc571732f0821748b
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/deleting-posted-invoices-and-credit-memos
    title: Deleting posted invoices and credit memos [IS]
    date: "2025-02-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/electronic-invoicing-requirement-issuing-single-copy-invoice
    title: Electronic invoicing requirement for issuing single-copy invoice
    date: "2025-02-05"
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
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/iceland-local-functionality
    title: Iceland local functionality
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/iceland-global-core-app
    title: Iceland W1 core app setup
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/how-to-map-irs-numbers-to-chart-of-accounts
    title: Map IRS numbers to chart of accounts [IS]
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/how-to-print-vat-summary-information-on-documents
    title: Print VAT Summary Information on Document [IS]
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/use-registration-no
    title: Registration numbers in the Icelandic localization
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/special-data-output-and-reports-for-the-tax-authority
    title: Special data output and reports for the tax authorities in Iceland
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/electronic-invoicing-requirement-issuing-single-copy-invoice
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/iceland-local-functionality
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/iceland-global-core-app
  objects:
    - object/page/5260
    - object/page/5264
    - object/page/5266
    - object/page/5267
    - object/page/5270
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality
    - topic/business-central/business-functionality/local-functionality/iceland/vat
    - topic/business-central/business-functionality/local-functionality/iceland/general
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Iceland
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality
children:
  - topic/business-central/business-functionality/local-functionality/iceland/vat
  - topic/business-central/business-functionality/local-functionality/iceland/general
coverage:
  learn: 9
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
member_hash: ca2a6b8dfe2e8d729991c28e7ed37cf3218ce8defb6848dd965c7efcfd5e1022
narrative: generated
---

# Iceland

> Iceland local functionality in Business Central: VAT summaries on documents, IRS number mapping, electronic invoicing rules for single-copy invoices, deletion of posted documents, audit data export, and the W1 core app migration from version 24.0. It answers Icelandic compliance and setup questions.

Path: [Business functionality](../../business-functionality.md) > [Local functionality](../local-functionality.md) > Iceland · tier official · system localization · narrative reviewed by Opus

## Overview

This section describes the Icelandic localization of Business Central. The overview page lists the available features: VAT reporting, electronic invoicing, IRS mapping and document deletion. It notes version 24.0.

Two pages stand on their own. One covers the legal requirement for issuing a single-copy invoice: when invoices are printed several times, a government report confirms ERP compliance, and the IRS Notification report prints the required legal statements. The other covers the Iceland W1 core app setup, which moves from the Icelandic localization to the W1 base app model, with features delivered as apps, starting from 24.0.

Two subtopics hold the detail. VAT covers printing VAT summary information and mapping chart of accounts entries to IRS tax numbers. General covers rules for deleting posted invoices and credit memos, exporting audit data, IRS number mapping, and registration number fields. Start with the overview page, then go to the subtopic that matches your task.

## Key points

- The overview page lists Icelandic features: VAT reporting, electronic invoicing, IRS mapping and document deletion.
- For single-copy invoices, printing an invoice several times requires a government report confirming ERP compliance.
- Sales & Receivables Setup has an electronic invoicing checkbox. It lets you print the IRS Notification report with the legal statements.
- The Iceland W1 core app setup applies from version 24.0 and delivers localization features as apps.
- Migration to the W1 base app model is a one-time manual data migration.
- VAT pages cover VAT summary information on sales and purchase documents.
- Chart of accounts entries can be mapped to IRS tax numbers for data files sent to the tax authorities.
- General pages cover deleting posted invoices and credit memos, exporting audit data, and registration number fields.

## Subtopics

- [VAT](iceland/vat.md) (2 pages)
- [General](iceland/general.md) (4 pages)

## More Learn pages

- [Electronic invoicing requirement for issuing single-copy invoice](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/electronic-invoicing-requirement-issuing-single-copy-invoice): In Iceland, a report must be sent to the government if an invoice is printed more than once when using electronic invoicing.
- [Iceland local functionality](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/iceland-local-functionality): This article provides links to descriptions of features that are specific to the Icelandic version of Dynamics 365 Business Central.
- [Iceland W1 core app setup](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/iceland-global-core-app): This article provides instructions about delocalization of the Icelandic version of Dynamics 365 Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5260 "G/L Account Mapping"](../../../../objects/page/5260.md) · on [Table 5260 "G/L Account Mapping Header"](../../../../objects/table/5260.md) · via [General](iceland/general.md)
- [Page 5264 "Audit File Export Setup"](../../../../objects/page/5264.md) · on [Table 5264 "Audit File Export Setup"](../../../../objects/table/5264.md) · via [General](iceland/general.md)
- [Page 5266 "Audit File Export Documents"](../../../../objects/page/5266.md) · on [Table 5265 "Audit File Export Header"](../../../../objects/table/5265.md) · via [General](iceland/general.md)
- [Page 5267 "Audit File Export Doc. Card"](../../../../objects/page/5267.md) · captioned "Audit File Export Document" · on [Table 5265 "Audit File Export Header"](../../../../objects/table/5265.md) · via [General](iceland/general.md)
- [Page 5270 "Audit File Export Format Setup"](../../../../objects/page/5270.md) · on [Table 5268 "Audit File Export Format Setup"](../../../../objects/table/5268.md) · via [General](iceland/general.md)

Learn also names 1 object with no object page: page/5261.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
