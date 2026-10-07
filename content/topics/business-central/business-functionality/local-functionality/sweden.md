---
id: topic/business-central/business-functionality/local-functionality/sweden
type: topic
title: Sweden
summary: "Sweden local functionality in Business Central: how the Swedish version handles VAT, EU third-party purchase transactions, automatic account codes, SIE import and export, and balance sheet and income statement reports. It answers setup and usage questions for Swedish accounting and compliance."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:53.826Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 6afd8dfd1defddd1060990675dbc4515d62fd77b9fda1e720aed19e17c1d201d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/automatic-account-codes
    title: Automatic account codes in the Swedish version
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-eu-third-party-purchase-transactions
    title: EU Third-Party Purchase Transactions [SE]
    date: "2025-02-07"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/sweden-local-functionality
    title: Sweden Local Functionality [SE]
    date: "2025-02-06"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-eu-third-party-purchase-transactions
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/sweden-local-functionality
  objects: []
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
  code: 0
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
member_hash: fc969d45234df5ce763d47291b3a78317dc97d8f22ac897c0195592d685e5ef2
narrative: generated
---

# Sweden

> Sweden local functionality in Business Central: how the Swedish version handles VAT, EU third-party purchase transactions, automatic account codes, SIE import and export, and balance sheet and income statement reports. It answers setup and usage questions for Swedish accounting and compliance.

Path: [Business functionality](../../business-functionality.md) > [Local functionality](../local-functionality.md) > Sweden · tier official · system localization · narrative reviewed by Opus

## Overview

The Sweden section describes what the Swedish version of Business Central adds on top of the global product. Since release 2023 wave 1, the Swedish localization runs as an extension on the W1 BaseApp. The overview page lists the Swedish features: VAT, automatic account codes, SIE import and export, and financial reporting.

Two kinds of pages sit here. One page covers EU third-party purchase transactions, used for Swedish VAT reporting and VIES requirements. This feature moved to a global extension starting version 22.1. The Core finance subtopic covers automatic account codes and posting groups, SIE import and export of general ledger data, and printing balance sheet and income statement reports.

Start with the Sweden Local Functionality page for the overall picture. Then go to Core finance for accounting setup, or to the EU third-party page if you need VAT and VIES reporting.

## Key points

- Swedish localization is an extension on the W1 BaseApp starting release 2023 wave 1.
- EU third-party purchase transactions (EU 3-Party Trade) support Swedish VAT reporting and VIES declarations, including purchase transaction filtering.
- The EU third-party feature moved to a global extension starting version 22.1.
- Automatic account codes and automatic account posting groups are part of the Swedish core finance setup.
- SIE import and export moves general ledger data in and out of Business Central.
- Balance sheet and income statement reports can be printed in the Swedish version.
- The Core finance subtopic has 4 pages covering these accounting topics.

## Subtopics

- [Core finance](sweden/core-finance.md) (4 pages)

## More Learn pages

- [EU Third-Party Purchase Transactions [SE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/how-to-set-up-eu-third-party-purchase-transactions): This article explains how to set up EU Third-Party Purchase Transactions with the Swedish version of Business Central.
- [Sweden Local Functionality [SE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Sweden/sweden-local-functionality): The links in this article describe the different local functionality in the Swedish version of Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#8646 [PEPPOL] Add PEPPOL SE localization: Swedish organisation number for endpoints under scheme 0007](../../../../changes/bcapps/8646.md) (code change): "Swedish organisation numbers stripped to 10 digits when scheme 0007 is used"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 9001, 9027, 11206, 11207, 11208, 11212.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
