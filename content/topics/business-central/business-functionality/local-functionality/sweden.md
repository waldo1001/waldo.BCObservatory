---
id: topic/business-central/business-functionality/local-functionality/sweden
type: topic
title: Sweden
summary: "Sweden local functionality in the Swedish version of Business Central: EU third-party purchase transactions for VAT reporting, automatic account codes and posting groups, SIE import/export, and the Balance Sheet - SE and Income Statement - SE reports. It answers Sweden-specific setup and usage questions."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:48.912Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d94d7f57a6fe5577ee3bf20b772099b7628fd6d734ff55d4eaa1bb6305181a7f
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-eu-third-party-purchase-transactions
    title: Set Up EU Third-Party Purchase Transactions in Sweden
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/sweden-local-functionality
    title: Sweden Local Functionality in the Swedish Version [SE]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-eu-third-party-purchase-transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/sweden-local-functionality
  objects:
    - object/page/51
    - object/page/472
    - object/page/4850
    - object/page/4851
    - object/page/4852
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality
    - topic/business-central/business-functionality/local-functionality/sweden/core-finance
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/8646
learn_toc_path:
  - Business functionality
  - Local functionality
  - Sweden
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality
children:
  - topic/business-central/business-functionality/local-functionality/sweden/core-finance
coverage:
  learn: 6
  code: 5
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 51
  - 472
  - 4850
  - 4851
  - 4852
  - 11212
  - 11290
  - 11291
member_hash: fc969d45234df5ce763d47291b3a78317dc97d8f22ac897c0195592d685e5ef2
narrative: generated
---

# Sweden

> Sweden local functionality in the Swedish version of Business Central: EU third-party purchase transactions for VAT reporting, automatic account codes and posting groups, SIE import/export, and the Balance Sheet - SE and Income Statement - SE reports. It answers Sweden-specific setup and usage questions.

Path: [Business functionality](../../business-functionality.md) > [Local functionality](../local-functionality.md) > Sweden · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

The Sweden section describes features built for Swedish regulatory requirements in Business Central. It covers VAT handling, automatic account codes, automatic account posting groups, SIE data import and export, and Swedish balance sheet and income statement reports.

The section has an overview page that lists these features, a page on setting up EU third-party purchase transactions, and a Core finance subtopic. Core finance holds the general ledger pages: automatic account codes and groups, SIE import and export in earlier Swedish versions, and the Balance Sheet - SE and Income Statement - SE reports.

Start with the overview page to find the feature you need. For VAT questions about purchases between EU countries, go to the EU third-party purchase page. For ledger and reporting tasks, go to Core finance.

## Key points

- EU third-party purchases are purchases from one EU country where the products are sent to another country without entering Sweden. They are reported separately for VAT compliance.
- The EU third-party purchase setup page is marked version 25.0.
- Setup steps for EU third-party purchases: enable EU 3-Party Purchase, mark transactions as EU 3-Party Trade, and filter the VAT statement.
- The VAT-VIES Declaration Tax Auth report is part of the EU third-party purchase reporting.
- Automatic account codes and automatic account posting groups are Sweden-specific general ledger features.
- SIE data import and export is covered for earlier Swedish versions.
- Balance Sheet - SE and Income Statement - SE are the Swedish financial reports.
- The Core finance subtopic has 4 pages for general ledger setup and usage.

## Subtopics

- [Core finance](sweden/core-finance.md) (4 pages)

## More Learn pages

- [Set Up EU Third-Party Purchase Transactions in Sweden](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-eu-third-party-purchase-transactions): Set up EU third-party purchase transactions in the Swedish version of Business Central, enable VAT tracking, and mark qualifying purchase invoices.
- [Sweden Local Functionality in the Swedish Version [SE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/sweden-local-functionality): Explore Swedish functionality in Business Central, including SIE import and export, automatic account groups, EU third-party purchases, and reports.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#8646 [PEPPOL] Add PEPPOL SE localization: Swedish organisation number for endpoints under scheme 0007](../../../../changes/bcapps/8646.md) (code change): "A Swedish PEPPOL localization app normalizes Swedish organisation numbers"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 51 "Purchase Invoice"](../../../../objects/page/51.md) · on [Table 38 "Purchase Header"](../../../../objects/table/38.md)
- [Page 472 "VAT Posting Setup"](../../../../objects/page/472.md) · on [Table 325 "VAT Posting Setup"](../../../../objects/table/325.md)
- [Page 4850 "Automatic Account Header"](../../../../objects/page/4850.md) · captioned "Automatic Account Groups" · on [Table 4850 "Automatic Account Header"](../../../../objects/table/4850.md) · via [Core finance](sweden/core-finance.md)
- [Page 4851 "Automatic Account Line"](../../../../objects/page/4851.md) · on [Table 4851 "Automatic Account Line"](../../../../objects/table/4851.md) · via [Core finance](sweden/core-finance.md)
- [Page 4852 "Automatic Account List"](../../../../objects/page/4852.md) · captioned "Automatic Account Groups" · on [Table 4850 "Automatic Account Header"](../../../../objects/table/4850.md) · via [Core finance](sweden/core-finance.md)

Learn also names 3 objects with no object page: page/11212, page/11290, page/11291.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
