---
id: topic/business-central/business-functionality/local-functionality/iceland/general
type: topic
title: General
summary: "Iceland general localization in Business Central: rules for deleting posted invoices and credit memos, exporting audit data, mapping IRS numbers to the chart of accounts, and registration number fields. Answers questions on Icelandic legal and tax compliance setup."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:28.677Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 348aa8988011a9b2f68ab677442ebe4675892746e729bc4fcf57e0a67a31f0e4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/deleting-posted-invoices-and-credit-memos
    title: Deleting posted invoices and credit memos [IS]
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
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/how-to-map-irs-numbers-to-chart-of-accounts
    title: Map IRS numbers to chart of accounts [IS]
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

> Iceland general localization in Business Central: rules for deleting posted invoices and credit memos, exporting audit data, mapping IRS numbers to the chart of accounts, and registration number fields. Answers questions on Icelandic legal and tax compliance setup.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Iceland](../iceland.md) > General · tier official · system localization · narrative reviewed by Opus

## Overview

This section collects the general Iceland-specific topics in Business Central. They cover compliance-driven behavior: what can be deleted, how data is exported for auditors, how accounts are tied to tax authority codes, and how registration numbers appear on documents.

The pages are independent of each other. Start with the topic that matches your task. For tax reporting, see the IRS number mapping page. For auditor requests, use the audit export page, which describes the Audit Files Export extension. For document deletion, see the deletion page; the rules changed in version 24.0 for companies that have the new localization enabled. For sales and payment data, see the registration number page; the fields are available once activated, from version 24.0.

## Key points

- Before v24.0, posted invoices and credit memos cannot be deleted in Iceland, per legislation.
- After v24.0 with the new localization enabled, deletion is allowed only for documents older than seven years at the start of the fiscal year.
- The Audit Files Export extension exports GL and VAT entries in formats such as SIE, FEC, and SAF-T.
- Audit export supports GL account mapping, data quality checks, parallel processing, and zip export.
- IRS numbers are created as Internal Revenue Service codes and mapped to general ledger posting accounts for tax authority compliance; a reverse prefix option is mentioned.
- When activated from version 24.0, Registration No. and Sender Reg. No. fields can be added to sales invoices, orders, credit memos, and payment export data.

## Learn pages

- [Deleting posted invoices and credit memos [IS]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/deleting-posted-invoices-and-credit-memos): In Iceland, in accordance with legislation, you can't delete posted sales and purchase invoices and credit memos.
- [Export data for auditing](https://learn.microsoft.com/dynamics365/business-central/finance-how-to-export-audit-files): This article explains how to set up different export formats and then use them, based on auditor or authority requirements.
- [Map IRS numbers to chart of accounts [IS]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/how-to-map-irs-numbers-to-chart-of-accounts): This article explains how to map predefined Internal Revenue Service (IRS) account codes to general ledger accounts.
- [Registration numbers in the Icelandic localization](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/use-registration-no): This article provides instructions about how to use registration numbers in the Icelandic localization.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5260 "G/L Account Mapping"](../../../../../objects/page/5260.md) · on [Table 5260 "G/L Account Mapping Header"](../../../../../objects/table/5260.md)
- [Page 5264 "Audit File Export Setup"](../../../../../objects/page/5264.md) · on [Table 5264 "Audit File Export Setup"](../../../../../objects/table/5264.md)
- [Page 5266 "Audit File Export Documents"](../../../../../objects/page/5266.md) · on [Table 5265 "Audit File Export Header"](../../../../../objects/table/5265.md)
- [Page 5267 "Audit File Export Doc. Card"](../../../../../objects/page/5267.md) · captioned "Audit File Export Document" · on [Table 5265 "Audit File Export Header"](../../../../../objects/table/5265.md)
- [Page 5270 "Audit File Export Format Setup"](../../../../../objects/page/5270.md) · on [Table 5268 "Audit File Export Format Setup"](../../../../../objects/table/5268.md)

Learn also names 1 object with no object page: page/5261.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
