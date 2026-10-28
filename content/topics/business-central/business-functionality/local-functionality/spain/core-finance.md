---
id: topic/business-central/business-functionality/local-functionality/spain/core-finance
type: topic
title: Core finance
summary: "Spain core finance local functionality in Business Central: chart of accounts handling, transaction numbering, official account books, invoice books, income statement closing, discount handling on G/L accounts, and ASC export of financial reports. Answers setup and reporting questions for Spanish tax authority requirements."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:37.851Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5a668232b97c6e5cd04c3931405e8ed1e95babe6ba33bd78399ceec7940169a7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-account-schedules-to-asc-format
    title: Export Financial Reports to ASC Format
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-ignore-discounts-in-general-ledger-accounts
    title: Ignore Discounts in General Ledger Accounts
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-indent-and-validate-chart-of-accounts
    title: Indent and Validate Chart of Accounts
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-post-and-print-all-transactions-for-a-period
    title: Post and Print All Transactions for a Period
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-print-account-book-reports
    title: Print Account Book Reports in the Spanish Version [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-print-sales-and-purchase-invoice-books
    title: Print Sales and Purchase Invoice Books
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-and-close-income-statement-balances
    title: Set Up and Close Income Statement Balances
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/transaction-numbers
    title: Transaction Numbers in Business Central for Spain
    date: "2026-10-20"
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
  changes:
    - change/bcapps/9306
    - change/bcapps/9886
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

> Spain core finance local functionality in Business Central: chart of accounts handling, transaction numbering, official account books, invoice books, income statement closing, discount handling on G/L accounts, and ASC export of financial reports. Answers setup and reporting questions for Spanish tax authority requirements.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Spain](../spain.md) > Core finance · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers the general ledger and reporting features specific to the Spanish localization. It has no subtopics; all eight pages sit directly under it. They cover the chart of accounts, period transaction numbering, official printed books, year-end closing, and exports for the tax authorities.

For setup, start with Indent and Validate Chart of Accounts (maximum 20 numbers per account, account types, Income Stmt. Bal. Acc. field) and Set Up and Close Income Statement Balances. Then read Transaction Numbers in Business Central for Spain and Post and Print All Transactions for a Period, which explain how entries are grouped and numbered sequentially for a fiscal year.

For reporting, use Print Account Book Reports (Official Account Book and Summarized Book), Print Sales and Purchase Invoice Books, and Export Financial Reports to ASC Format for balance sheet and income statement files. Ignore Discounts in General Ledger Accounts is a small configuration page for G/L account cards.

## Key points

- The chart of accounts can be indented and validated, with a maximum of 20 numbers per account and account types Posting, Heading, or Total (Total applies to Portugal); the page covers Spain and Portugal localization.
- The Set Period Trans. Nos. batch job assigns period transaction numbers to G/L entries in posting date and transaction number order.
- Transaction numbers group entries with the same document number and date so they can be balanced.
- Posting and printing all transactions for a period in General Journal and G/L Registers gives sequential numbers for fiscal year reporting to Spanish tax authorities.
- The Close Income Statement batch job closes balances at fiscal year end using income statement balancing accounts, with support for business units and dimensions.
- Official Account Book and Official Account Summarized Book reports show G/L entries for a period, with summarized or detailed options, custom first page number and additional currency display.
- Sales and Purchases Invoice Book reports can filter by invoices or credit memos, order by posting date and show additional reporting currency.
- Financial reports export to ASC format in Balance de Situación (Abreviado/Normal) and Cuenta de PyG (Abreviado/Normal) variants.

## Learn pages

- [Export Financial Reports to ASC Format](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-account-schedules-to-asc-format): Learn how to export financial report data to ASC format in Business Central for Spain and configure the options for the annual report file.
  - In the observatory: [Page 108 "Financial Reports"](../../../../../objects/page/108.md)
- [Ignore Discounts in General Ledger Accounts](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-ignore-discounts-in-general-ledger-accounts): Learn how to select Ignore Discounts on a general ledger account in Business Central for Spain to exclude payment and invoice discounts.
  - In the observatory: [Page 16 "Chart of Accounts"](../../../../../objects/page/16.md), [Page 17 "G/L Account Card"](../../../../../objects/page/17.md)
- [Indent and Validate Chart of Accounts](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-indent-and-validate-chart-of-accounts): Learn how to configure general ledger accounts, indent the chart of accounts, and validate account structure in Business Central for Spain.
  - In the observatory: [Page 16 "Chart of Accounts"](../../../../../objects/page/16.md), [Page 17 "G/L Account Card"](../../../../../objects/page/17.md)
- [Post and Print All Transactions for a Period](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-post-and-print-all-transactions-for-a-period): Businesses are required to provide annual reports to tax authorities, grouping their transaction entries by transaction numbers.
  - In the observatory: [Page 116 "G/L Registers"](../../../../../objects/page/116.md), [Page 39 "General Journal"](../../../../../objects/page/39.md)
- [Print Account Book Reports in the Spanish Version [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-print-account-book-reports): Learn how to print the Official Account Book report and the Official Account Summarize Book report with the Spanish version of Business Central.
  - In the observatory: [Report 10706 "Account - Official Acc. Book (ES)"](../../../../../objects/report/10706-es.md), [Report 10716 "Official Acc.Summarized Book (ES)"](../../../../../objects/report/10716-es.md)
- [Print Sales and Purchase Invoice Books](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-print-sales-and-purchase-invoice-books): The Sales Invoice Book report and Purchases Invoice Book report allow you to check all of the sales and purchase documents created for a specific period.
  - In the observatory: [Report 10704 "Sales Invoice Book (ES)"](../../../../../objects/report/10704-es.md), [Report 10705 "Purchases Invoice Book (ES)"](../../../../../objects/report/10705-es.md)
- [Set Up and Close Income Statement Balances](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-and-close-income-statement-balances): Learn how to set up income statement balancing accounts and run Close Income Statement to post year-end balances in Business Central for Spain.
  - In the observatory: [Page 16 "Chart of Accounts"](../../../../../objects/page/16.md), [Page 17 "G/L Account Card"](../../../../../objects/page/17.md), [Report 94 "Close Income Statement"](../../../../../objects/report/94.md)
- [Transaction Numbers in Business Central for Spain](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/transaction-numbers): Learn how transaction numbers group general ledger entries in Business Central for Spain and how period transaction numbers order entries by date.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9306 [Main] Unbalanced G/L Entries if you apply a Payment and a Posted Purchase Invoice having both different Posting Groups and using the "Applies-to Document No." on the line instead of using Apply Entries in the Spanish version.Initial commit](../../../../../changes/bcapps/9306.md) (code change): "Fixed unbalanced G/L entries when applying a payment to a purchase invoice"
- [#9886 [Master] Expense Report posting FCY rounding mismatch "Expense Report Posting Test" fail in Spain only (Source Currency Amount 649.97 vs 650](../../../../../changes/bcapps/9886.md) (code change): "foreign currency rounding mismatch in expense report posting for Spain"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
