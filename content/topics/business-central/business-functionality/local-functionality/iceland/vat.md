---
id: topic/business-central/business-functionality/local-functionality/iceland/vat
type: topic
title: VAT
summary: "VAT functionality for Iceland in Business Central: printing VAT summary information on purchase and sales documents, and preparing data and reports for the Icelandic tax authority using IRS number mapping. It answers questions about document VAT summaries and tax authority reporting."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:58.682Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b37f8e97b169c0a2ad936b1748e2ec3347237fc36caaa74bab8b5e20c421b62e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/how-to-print-vat-summary-information-on-documents
    title: Print VAT Summary Information on Documents in Iceland
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/special-data-output-and-reports-for-the-tax-authority
    title: Special Data Output and Reports for the Icelandic Tax Authority
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/how-to-print-vat-summary-information-on-documents
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/special-data-output-and-reports-for-the-tax-authority
  objects: []
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
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/iceland
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: decef53c9e713102c7a3d5ecaf815eda3c80e0fc1b167bc4883eca2d8518894a
narrative: generated
---

# VAT

> VAT functionality for Iceland in Business Central: printing VAT summary information on purchase and sales documents, and preparing data and reports for the Icelandic tax authority using IRS number mapping. It answers questions about document VAT summaries and tax authority reporting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Iceland](../iceland.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers two Iceland-specific VAT and tax topics. The first explains how to show VAT summary information on purchase and sales documents, even when only a single VAT identifier is used, by selecting the Always Show VAT Summary option on supported reports.

The second describes the tax reporting requirements and the process for submitting data files in a predefined format to the Icelandic tax authority. It relies on mapping IRS numbers to the chart of accounts, then reviewing balances in the IRS Details and Trial Balance - IRS Number reports.

Start with the document printing page if your question is about how invoices, credit memos or orders look. Start with the tax authority page if you need to prepare or check data for submission.

## Key points

- The Always Show VAT Summary option prints VAT details on purchase and sales documents even when only a single VAT identifier is used.
- The option is available on supported reports, including Purchase - Invoice, Purchase - Credit Memo, Order and Blanket Sales Order.
- Without the option, the VAT summary can be left off documents that use a single VAT identifier.
- Data for the Icelandic tax authority is submitted as data files in a predefined format.
- Submission relies on mapping IRS numbers to the chart of accounts, which relates accounts to government account codes.
- The IRS Details report and the Trial Balance - IRS Number report are used to review balances before submission.
- Balance at date reporting is part of the tax authority output.

## Learn pages

- [Print VAT Summary Information on Documents in Iceland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/how-to-print-vat-summary-information-on-documents): Learn how to show VAT summary information on supported purchase and blanket sales order reports with the Icelandic IS Core app in Business Central.
- [Special Data Output and Reports for the Icelandic Tax Authority](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Iceland/special-data-output-and-reports-for-the-tax-authority): Learn how to prepare Icelandic tax reporting data in Business Central by mapping IRS numbers to posting accounts and reviewing account balances.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
