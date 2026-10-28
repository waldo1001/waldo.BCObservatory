---
id: topic/business-central/business-functionality/local-functionality/sweden/core-finance
type: topic
title: Core finance
summary: Core finance for the Swedish version of Business Central covers automatic account codes and groups, SIE import and export in earlier Swedish versions, and the Balance Sheet - SE and Income Statement - SE reports. It answers setup and usage questions for these Sweden-specific general ledger tasks.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:39.883Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7259249702abae20b2cc2cec508dacabc90e86aa3fad78bed71a276675e12974
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/automatic-account-codes
    title: Automatic Account Codes in the Swedish Version
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-import-and-export-data-in-standard-import-export-format
    title: Import and Export SIE Data in Earlier Swedish Versions [SE]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-print-balance-sheet-and-income-statement-reports
    title: Print Balance Sheet and Income Statement Reports
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-automatic-account-posting-groups
    title: Set Up Automatic Account Groups in Sweden
    date: "2026-10-23"
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
    - object/page/4850
    - object/page/4851
    - object/page/4852
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
  code: 3
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 4850
  - 4851
  - 4852
  - 11212
  - 11290
  - 11291
member_hash: 38ef0f39a2dc3560540f3a8f25aa46bc7e1b11bc2154746f3c8e446230477c63
narrative: generated
---

# Core finance

> Core finance for the Swedish version of Business Central covers automatic account codes and groups, SIE import and export in earlier Swedish versions, and the Balance Sheet - SE and Income Statement - SE reports. It answers setup and usage questions for these Sweden-specific general ledger tasks.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Sweden](../sweden.md) > Core finance · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section collects Sweden-specific general ledger functionality. It has no subtopics, so all four pages sit at one level: two on automatic account codes, one on SIE data exchange, and one on statutory-style financial reports.

For automatic account codes, start with the overview page on the Automatic Account Codes extension, then follow the setup page to define the account groups. Once set up, the groups can be used in journals and in sales and purchase documents to distribute amounts across accounts.

The SIE page applies to earlier Swedish versions and describes the SIE Import and SIE Export reports. The reporting page explains how to print or preview Balance Sheet - SE and Income Statement - SE for Swedish authorities and banks.

## Key points

- Automatic account codes in the Swedish version are provided through the Automatic Account Codes extension.
- Automatic account groups can be used in journals and in sales and purchase documents.
- Setting up an automatic account group involves assigning G/L accounts, allocation percentages and dimensions, with total balance validation.
- Automatic account groups distribute transaction amounts across multiple accounts by percentage.
- SIE Import and SIE Export reports handle general ledger data in SIE format in earlier Swedish versions.
- SIE options include dimension selection, file type configuration, document number series, periodic balances export and transaction export.
- Balance Sheet - SE and Income Statement - SE are meant for Swedish authorities and banks.
- These reports can be filtered by date, accounts and global dimensions, with a show all accounts option, and can be printed or previewed.

## Learn pages

- [Automatic Account Codes in the Swedish Version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/automatic-account-codes): Use customized posting groups to automate recurring transactions in journals, sales documents, or purchase documents in the Swedish version.
- [Import and Export SIE Data in Earlier Swedish Versions [SE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-import-and-export-data-in-standard-import-export-format): Find the earlier SIE import and export report procedures for the Swedish version of Business Central, with a link to the current extension.
- [Print Balance Sheet and Income Statement Reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-print-balance-sheet-and-income-statement-reports): Print Swedish balance sheet and income statement reports in Business Central, and filter the results by reporting period, account, and dimension.
- [Set Up Automatic Account Groups in Sweden](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-automatic-account-posting-groups): Set up automatic account groups in the Swedish version of Business Central to allocate journal and document amounts across accounts and dimensions.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4850 "Automatic Account Header"](../../../../../objects/page/4850.md) · captioned "Automatic Account Groups" · on [Table 4850 "Automatic Account Header"](../../../../../objects/table/4850.md)
- [Page 4851 "Automatic Account Line"](../../../../../objects/page/4851.md) · on [Table 4851 "Automatic Account Line"](../../../../../objects/table/4851.md)
- [Page 4852 "Automatic Account List"](../../../../../objects/page/4852.md) · captioned "Automatic Account Groups" · on [Table 4850 "Automatic Account Header"](../../../../../objects/table/4850.md)

Learn also names 3 objects with no object page: page/11212, page/11290, page/11291.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
