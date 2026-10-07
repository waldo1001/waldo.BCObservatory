---
id: topic/business-central/business-functionality/local-functionality/italy/core-finance
type: topic
title: Core finance
summary: Core finance for the Italian version of Business Central covers fiscal year closing, how debit and credit amounts are defined in journals and ledger entries, and the restrictions on reversing journal entries. It answers how-to and rule questions for Italian accounting.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:34.995Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a76056bb426b046a7921ccbac3a81ecba64aaab496f3c56beee760d179547698
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-close-a-fiscal-year
    title: How to Close a Fiscal Year
    date: "2025-05-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-define-debit-and-credit-amounts
    title: How to Define Debit and Credit Amounts
    date: "2025-05-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/reversing-journal-entries
    title: Reversing Journal Entries [IT]
    date: "2025-05-23"
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

> Core finance for the Italian version of Business Central covers fiscal year closing, how debit and credit amounts are defined in journals and ledger entries, and the restrictions on reversing journal entries. It answers how-to and rule questions for Italian accounting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > Core finance · tier official · system finance · narrative reviewed by Opus

## Overview

This section collects three Italy-specific pages on core finance tasks. They cover closing a fiscal year, defining debit and credit amounts, and the limits on reversing transactions in the Italian version.

For year-end work, start with the fiscal year closing page. It walks through closing accounting periods, running the Close Income Statement batch job to generate closing entries, and posting them from the general journal. The debit and credit page explains the matching rule that applies in the General Journal, Customer Ledger Entry, and Vendor Ledger Entry tables. The reversing entries page explains what the Italian Reverse Transaction Entries page blocks.

## Key points

- Fiscal year closing steps: close accounting periods, generate closing entries with the Close Income Statement batch job, then post them to the general journal.
- The closing process includes options for business units and dimensions, so entries can be filtered by them.
- Closing entries transfer the income statement result to the balance sheet.
- Debit and credit amounts can be defined in the General Journal, Customer Ledger Entry, and Vendor Ledger Entry tables.
- Debit and credit amounts must match before the entry can be posted or saved.
- The Italian Reverse Transaction Entries page prevents reversal of invoices, credit notes, and VAT-related documents.
- Posted documents cannot be deleted, and reserved documents cannot be reversed.

## Learn pages

- [How to Close a Fiscal Year](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-close-a-fiscal-year): Learn to close a fiscal year, create a closing entry with the Close Income Statement option, and post it.
- [How to Define Debit and Credit Amounts](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-define-debit-and-credit-amounts): In the Italian version of Business Central, the Debit Amount and Credit Amount fields are included in multiple journals and tables.
- [Reversing Journal Entries [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/reversing-journal-entries): Reversing Journal Entries feature introduces controls on the Reverse Transaction Entries page to ensure compliance with Italian legal requirements.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
