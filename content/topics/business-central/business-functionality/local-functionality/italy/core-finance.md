---
id: topic/business-central/business-functionality/local-functionality/italy/core-finance
type: topic
title: Core finance
summary: Core finance for the Italian version of Business Central covers closing a fiscal year, entering debit and credit amounts in the General Journal, and reversing journal entries under Italy-specific checks. It answers how-to and restriction questions for these three tasks.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:47.201Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0562fb67ed27611ad6435b756b9dd2dc4331426c7488ff1e2a1f1cc8d3c486b3
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-close-a-fiscal-year
    title: Close a Fiscal Year in Business Central for Italy
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-define-debit-and-credit-amounts
    title: Define Debit and Credit Amounts
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/reversing-journal-entries
    title: Reversing Journal Entries in the Italian Version [IT]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-close-a-fiscal-year
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-define-debit-and-credit-amounts
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/reversing-journal-entries
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/italy
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Italy
  - Core finance
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/italy
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 10a1899e5555c1789fe0d1cf274e78f348e46775053a5753bb39c135923ec3ac
narrative: generated
---

# Core finance

> Core finance for the Italian version of Business Central covers closing a fiscal year, entering debit and credit amounts in the General Journal, and reversing journal entries under Italy-specific checks. It answers how-to and restriction questions for these three tasks.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > Core finance · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section collects three pages on core general ledger tasks in the Italian localization. They deal with year-end closing, how journal lines are entered with debit and credit amounts, and what limits apply when reversing entries.

Start with the debit and credit page if you work with the General Journal, since journal lines must balance before posting. The fiscal year page then shows how closing entries are generated and posted to the general journal. The reversal page explains the extra Italian checks that can block a reversal, and which workflows to use instead.

## Key points

- Closing a fiscal year: close the accounting period, run Close Income Statement to generate closing entries, then post them from the general journal.
- The year-end process uses Fiscal Year Ending Date, Gen. Journal Template, Gen. Journal Batch and Balancing Account.
- Debit Amount and Credit Amount fields in the General Journal are used in the Italian localization, and journal lines must balance before posting.
- Reverse Transaction in the Italian version has additional checks beyond the standard ones.
- You cannot reverse invoices or credit memos with Reverse Transaction; use document correction or credit memo workflows for sales and purchase documents.
- Transactions with final G/L book progressive numbers cannot be reversed.
- Closed or already-reversed VAT entries cannot be reversed.

## Learn pages

- [Close a Fiscal Year in Business Central for Italy](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-close-a-fiscal-year): Learn how to close an accounting year in the Italian version of Business Central, generate income statement closing entries, and post the journal.
  - In the observatory: [Page 100 "Accounting Periods"](../../../../../objects/page/100.md), [Report 94 "Close Income Statement"](../../../../../objects/report/94.md)
- [Define Debit and Credit Amounts](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-define-debit-and-credit-amounts): In the Italian version of Business Central, the Debit Amount and Credit Amount fields are included in multiple journals and tables.
- [Reversing Journal Entries in the Italian Version [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/reversing-journal-entries): Reversing Journal Entries feature introduces controls on the Reverse Transaction Entries page to ensure compliance with Italian legal requirements.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
