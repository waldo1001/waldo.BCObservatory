---
id: topic/business-central/analytics-business-intelligence-and-repo/built-in-reports/finance
type: topic
title: Finance
summary: "Finance built-in reports in Business Central: an overview of report categories, payables and receivables analytics, building financial reports from account categories, and sustainability reports. It answers questions about which finance reports exist and how to analyze vendor, customer and ledger data."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:50.212Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4b6fe899b9812fcaa555f04eb47523a6bb7f2cfe15913c021c89130dc5f116ff
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/payables-reports
    title: Accounts payables analytics
    date: "2024-07-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/receivables-reports
    title: Accounts receivable analytics
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bi-how-work-account-schedule
    title: Build financial reports using financial data and account categories
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-reports
    title: Built-in finance reports in Business Central
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/sustainability-reports
    title: Sustainability reports and analytics
    date: "2026-08-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/payables-reports
    - https://learn.microsoft.com/dynamics365/business-central/receivables-reports
    - https://learn.microsoft.com/dynamics365/business-central/bi-how-work-account-schedule
    - https://learn.microsoft.com/dynamics365/business-central/finance-reports
    - https://learn.microsoft.com/dynamics365/business-central/sustainability-reports
  objects: []
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo/built-in-reports
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Built-in reports
  - Finance
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo/built-in-reports
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1
  - 3
  - 4
  - 5
  - 6
  - 7
  - 9
  - 10
  - 11
  - 12
  - 13
  - 16
  - 17
  - 18
  - 19
  - 20
  - 25
  - 27
  - 28
  - 30
  - 31
  - 32
  - 33
  - 36
  - 37
  - 38
  - 101
  - 103
  - 104
  - 108
  - 109
  - 112
  - 117
  - 120
  - 121
  - 129
  - 195
  - 196
  - 197
  - 198
  - 211
  - 301
  - 304
  - 305
  - 312
  - 317
  - 319
  - 321
  - 322
  - 329
  - 347
  - 488
  - 489
  - 490
  - 503
  - 512
  - 743
  - 764
  - 765
  - 766
  - 1123
  - 1125
  - 1126
  - 1127
  - 1128
  - 1129
  - 1133
  - 1138
  - 1316
  - 1700
  - 1701
  - 1702
  - 2500
  - 2501
  - 2502
  - 4405
  - 6210
  - 6211
  - 6212
  - 6221
  - 10007
  - 10008
  - 36992
  - 36993
member_hash: 16605e466ebb9176c17d1a6be90bcc23b9467734a23f27dbaac92e3f07b37b77
narrative: generated
---

# Finance

> Finance built-in reports in Business Central: an overview of report categories, payables and receivables analytics, building financial reports from account categories, and sustainability reports. It answers questions about which finance reports exist and how to analyze vendor, customer and ledger data.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Built-in reports](../built-in-reports.md) > Finance · tier official · system finance · narrative reviewed by Opus

## Overview

This section covers the built-in reports and analytics that support finance work. The overview page, "Built-in finance reports in Business Central", lists the report groups (core finance, deferral, VAT, consolidation, cost accounting, receivables and payables) and mentions the report explorer. It is the best starting point for finding a standard report.

Two pages cover payables and receivables. Accounts payables analytics helps you analyze what you owe vendors using Power BI reports, Data Analysis, Aged Payables and Vendor Ledger reports, and the Payment Practice page for payment timing. Accounts receivable analytics helps you manage customer receivables with Power BI reports, Data Analysis and standard reports, including Average Collection Period and Aged Receivables.

For custom reporting, the page on building financial reports explains how to analyze general ledger accounts and compare them against budgets using row definitions, column definitions and G/L account categories. It covers prerequisites such as chart of accounts structure, dimensions and G/L budgets. A separate page covers sustainability reports, including the Track Item of Concern report and the Role Explorer.

## Key points

- The overview page groups built-in reports into core finance, deferral, VAT, consolidation, cost accounting, and receivables and payables, and mentions the report explorer.
- Accounts payables analytics uses Power BI reports, Data Analysis, Aged Payables and Vendor Ledger reports, and the Payment Practice page to review payment timing.
- Accounts receivable analytics uses Power BI reports, Data Analysis and standard reports, including Average Collection Period and Aged Receivables.
- Financial reports analyze general ledger accounts and compare them against budgets using row definitions, column definitions and G/L account categories. You can create them from scratch or copy existing ones.
- Prerequisites for financial reports include a structured chart of accounts, dimensions and G/L budgets. The page is tagged for 2025 release wave 1.
- Sustainability reports use the Item of Concern field and the Track Item of Concern report to monitor inbound and outbound transactions of items with high pollution levels.
- The Role Explorer is used with sustainability reports to analyze emissions.

## Learn pages

- [Accounts payables analytics](https://learn.microsoft.com/dynamics365/business-central/payables-reports): See which analytics options are available in Business Central so that you can keep track of your accounts payable.
- [Accounts receivable analytics](https://learn.microsoft.com/dynamics365/business-central/receivables-reports): Explore the reports and analytics in the standard version of Business Central that can help you track your accounts receivable.
- [Build financial reports using financial data and account categories](https://learn.microsoft.com/dynamics365/business-central/bi-how-work-account-schedule): Describes how to use financial reports to create various views and reports for analyzing financial performance data.
- [Built-in finance reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/finance-reports): Explore the built-in financial reports in the standard version of Business Central.
- [Sustainability reports and analytics](https://learn.microsoft.com/dynamics365/business-central/sustainability-reports): Explore the sustainability reports and analytics in the standard version of Business Central.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 25, 27, 28, 30, 31, 32, 33, 36, 37, 38, 101, 103, 104, 108, 109, 112, 117, 120, 121, 129, 195, 196, 197, 198, 211, 301, 304, 305, 312, 317, 319, 321, 322, 329, 347, 488, 489, 490, 503, 512, 743, 764, 765, 766, 1123, 1125, 1126, 1127, 1128, 1129, 1133, 1138, 1316, 1700, 1701, 1702, 2500, 2501, 2502, 4405, 6210, 6211, 6212, 6221, 10007, 10008, 36992, 36993.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
