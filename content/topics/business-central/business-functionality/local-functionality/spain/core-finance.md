---
id: topic/business-central/business-functionality/local-functionality/spain/core-finance
type: topic
title: Core finance
summary: Core finance for Spain in Business Central covers general ledger setup, transaction numbering, official account book and invoice book reports, year-end income statement closing, and ASC export of financial reports. It answers how-to questions about Spanish statutory finance tasks.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:21:21.075Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1a90675604f388119888d1a52f20f298cad79ead58d4e0b44760d2adab541e44
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-account-schedules-to-asc-format
    title: How to Export Financial Reports to ASC Format
    date: "2025-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-ignore-discounts-in-general-ledger-accounts
    title: How to Ignore Discounts in General Ledger Accounts
    date: "2025-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-indent-and-validate-chart-of-accounts
    title: How to Indent and Validate Chart of Accounts
    date: "2025-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-post-and-print-all-transactions-for-a-period
    title: How to Post and Print All Transactions for a Period
    date: "2025-05-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-print-account-book-reports
    title: How to print account book reports [ES]
    date: "2025-05-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-print-sales-and-purchase-invoice-books
    title: How to Print Sales and Purchase Invoice Books
    date: "2025-05-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-and-close-income-statement-balances
    title: How to Set Up and Close Income Statement Balances
    date: "2025-05-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/transaction-numbers
    title: Transaction numbers
    date: "2025-05-29"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-account-schedules-to-asc-format
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-ignore-discounts-in-general-ledger-accounts
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-indent-and-validate-chart-of-accounts
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-post-and-print-all-transactions-for-a-period
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-print-account-book-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-print-sales-and-purchase-invoice-books
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-and-close-income-statement-balances
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/transaction-numbers
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/spain
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Spain
  - Core finance
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/spain
children: []
coverage:
  learn: 8
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 29390daef71090903acbd3a87c03ce479dc16b15649b681e3d39bcd751ffdb9a
narrative: generated
---

# Core finance

> Core finance for Spain in Business Central covers general ledger setup, transaction numbering, official account book and invoice book reports, year-end income statement closing, and ASC export of financial reports. It answers how-to questions about Spanish statutory finance tasks.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Spain](../spain.md) > Core finance · tier official · system finance · narrative reviewed by Opus

## Overview

This section collects the Spain-specific finance procedures in Business Central. They cover chart of accounts upkeep, how transactions are numbered and posted, the reports required by tax authorities and auditors, and year-end closing.

Start with the Transaction numbers page, which explains how sequential numbers group entries by document number and date. The posting and printing page builds on it. Chart of accounts pages (indenting and validating, ignoring discounts) cover setup. Reporting pages cover account books, sales and purchase invoice books, and ASC export. The income statement page covers year-end closing.

## Key points

- Transaction numbers group entries with the same document number and date for balancing, and start at 2 each fiscal year because 1 is reserved for the opening transaction.
- Journal posting uses sequential numbering, and the Set Period Transaction No. action supports printing all transactions of a period for tax authorities.
- The chart of accounts can be indented and validated to build the account hierarchy and check accuracy.
- A General Ledger account can be set with the Ignore Discounts checkbox so it does not accept payment or invoice discounts.
- Account book reports show general ledger entries by transaction or summary, with options for first page number, additional currency, opening and closing transaction descriptions, and account type filtering.
- Sales and Purchase Invoice Book reports list documents for a period, with additional currency, invoice or credit memo filtering, and ordering by posting date.
- The Close Income Statement batch job closes income statement balances at year end using a balancing account, and covers retained earnings, business units, and dimensions.
- Balance sheet and profit/loss annual reports can be exported to ASC format for tax authorities.

## Learn pages

- [How to Export Financial Reports to ASC Format](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-account-schedules-to-asc-format): Export financial report data to a digital file format approved by Spanish tax authorities for specific annual reports.
- [How to Ignore Discounts in General Ledger Accounts](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-ignore-discounts-in-general-ledger-accounts): Learn how to set up general ledger accounts in Business Central for Spain to exclude payment and invoice discounts.
- [How to Indent and Validate Chart of Accounts](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-indent-and-validate-chart-of-accounts): Learn how to indent and validate the chart of accounts on the G/L Account Card page.
- [How to Post and Print All Transactions for a Period](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-post-and-print-all-transactions-for-a-period): Businesses are required to provide annual reports to tax authorities, grouping their transaction entries by transaction numbers.
- [How to print account book reports [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-print-account-book-reports): Learn how to print the Official Account Book report and the Official Account Summarize Book report with the Spanish version of Business Central.
- [How to Print Sales and Purchase Invoice Books](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-print-sales-and-purchase-invoice-books): The Sales Invoice Book report and Purchases Invoice Book report allow you to check all of the sales and purchase documents created for a specific period.
- [How to Set Up and Close Income Statement Balances](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-and-close-income-statement-balances): Use income statement balancing accounts to efficiently track and balance multiple accounts simultaneously.
- [Transaction numbers](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/transaction-numbers): Use transaction numbers to group and balance entries that share the same document number and date.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
