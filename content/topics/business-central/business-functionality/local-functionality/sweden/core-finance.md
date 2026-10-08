---
id: topic/business-central/business-functionality/local-functionality/sweden/core-finance
type: topic
title: Core finance
summary: Core finance for the Swedish version of Business Central covers automatic account codes and posting groups, SIE import and export of general ledger data, and printing balance sheet and income statement reports. It answers setup and usage questions for Swedish accounting.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:33.077Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c9c49f7d05489f7b22169c12c44ef352cd6a6fc1e2e372596098046eb8e27e1a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/automatic-account-codes
    title: Automatic account codes in the Swedish version
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-import-and-export-data-in-standard-import-export-format
    title: Import and Export Data in SIE [SE]
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-print-balance-sheet-and-income-statement-reports
    title: Print Balance Sheet and Income Statement Reports
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-automatic-account-posting-groups
    title: Set Up Automatic Account Posting Groups [SE]
    date: "2025-02-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/automatic-account-codes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-import-and-export-data-in-standard-import-export-format
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-print-balance-sheet-and-income-statement-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-automatic-account-posting-groups
  objects:
    - object/page/9001
    - object/page/9027
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/sweden
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Sweden
  - Core finance
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/sweden
children: []
coverage:
  learn: 4
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 9001
  - 9027
  - 11206
  - 11207
  - 11208
  - 11212
member_hash: 38ef0f39a2dc3560540f3a8f25aa46bc7e1b11bc2154746f3c8e446230477c63
narrative: generated
---

# Core finance

> Core finance for the Swedish version of Business Central covers automatic account codes and posting groups, SIE import and export of general ledger data, and printing balance sheet and income statement reports. It answers setup and usage questions for Swedish accounting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Sweden](../sweden.md) > Core finance · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section collects the Sweden-specific finance features in Business Central. Two pages deal with automatic account assignment during posting: one describes the automatic account codes functionality, and one explains how to set up automatic account posting groups.

The other two pages cover reporting and data exchange. One explains how to import and export general ledger data in the Standard Import Export (SIE) format. The other explains how to print balance sheet and income statement reports for banks and authorities.

Start with the automatic account codes page to understand the posting behavior and its move to an extension. Then use the posting groups page to configure it. Use the SIE and report pages when you exchange ledger data or prepare statutory reporting.

## Key points

- Automatic account codes assign accounts automatically during posting in the Swedish version.
- From version 22.1 the automatic account codes feature moved to an extension, with no functional changes.
- Automatic account posting groups are set up to configure how accounts are assigned during general ledger transactions.
- SIE (Standard Import Export) lets you import and export general ledger data.
- In SIE you specify dimensions and file types to control the detail level of transactions.
- SIE data can include year-end balances, periodic balances and object balances.
- Balance sheet and income statement reports show assets, liabilities, equity, income and expenses, and are meant for banks and authorities.
- The reports support account filtering and a show all accounts option.

## Learn pages

- [Automatic account codes in the Swedish version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/automatic-account-codes): Use customized posting groups to automate recurring transactions in journals, sales documents, or purchase documents in the Swedish version.
- [Import and Export Data in SIE [SE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-import-and-export-data-in-standard-import-export-format): You can import and export general ledger data according to the standard import export (SIE) format explained in this article.
- [Print Balance Sheet and Income Statement Reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-print-balance-sheet-and-income-statement-reports): You can print balance sheet reports and income statement reports to submit to banks and other authorities.
- [Set Up Automatic Account Posting Groups [SE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-automatic-account-posting-groups): To use automatic account codes, you must create an automatic account posting group in the Swedish version.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9001 "Accounting Manager Role Center"](../../../../../objects/page/9001.md) · captioned "Accounting Manager"
- [Page 9027 "Accountant Role Center"](../../../../../objects/page/9027.md) · captioned "Accountant"

Learn also names 4 objects with no object page: page/11206, page/11207, page/11208, page/11212.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
