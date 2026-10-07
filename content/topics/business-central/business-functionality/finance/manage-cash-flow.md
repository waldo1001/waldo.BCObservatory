---
id: topic/business-central/business-functionality/finance/manage-cash-flow
type: topic
title: Manage cash flow
summary: "Cash flow management in Business Central: forecasting and analyzing cash inflows and outflows from sales, purchasing and fixed assets. It answers questions about the cash flow forecast, the analysis charts and worksheet on the Accountant Role Center, and building forecast reports from financial report definitions."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:11.917Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 015819f591bd63f76527960c200ef3938a4a980d5cdc5b0e796e2d44086c0b93
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-analyze-cash-flow
    title: Analyze cash flows
    date: "2024-07-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-cash-flow-overview
    title: Cash flow overview
    date: "2024-07-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/walkthrough-making-cash-flow-forecasts-by-using-account-schedules
    title: Make cash flow forecasts using financial reports
    date: "2024-08-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-analyze-cash-flow
    - https://learn.microsoft.com/dynamics365/business-central/finance-cash-flow-overview
    - https://learn.microsoft.com/dynamics365/business-central/walkthrough-making-cash-flow-forecasts-by-using-account-schedules
  objects:
    - object/page/103
    - object/page/104
    - object/page/108
    - object/page/488
    - object/page/489
    - object/page/762
    - object/page/840
    - object/page/841
    - object/page/847
    - object/page/848
    - object/page/849
    - object/page/850
    - object/page/851
    - object/page/857
    - object/page/858
    - object/page/859
    - object/page/860
    - object/page/862
    - object/page/863
    - object/page/865
    - object/page/866
    - object/page/867
    - object/page/868
    - object/page/869
    - object/page/1818
  features: []
  topics:
    - topic/business-central/business-functionality/finance
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9421
    - change/bcapps/9528
learn_toc_path:
  - Business functionality
  - Finance
  - Manage cash flow
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance
children: []
coverage:
  learn: 3
  code: 25
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 103
  - 104
  - 108
  - 488
  - 489
  - 762
  - 840
  - 841
  - 847
  - 848
  - 849
  - 850
  - 851
  - 857
  - 858
  - 859
  - 860
  - 862
  - 863
  - 865
  - 866
  - 867
  - 868
  - 869
  - 1818
member_hash: 37d49d2d709704ba1ca534f068643f8125b28378fa5cf75b426bb6b83737cb24
narrative: generated
---

# Manage cash flow

> Cash flow management in Business Central: forecasting and analyzing cash inflows and outflows from sales, purchasing and fixed assets. It answers questions about the cash flow forecast, the analysis charts and worksheet on the Accountant Role Center, and building forecast reports from financial report definitions.

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Manage cash flow · tier official · system finance · narrative reviewed by Opus

## Overview

This section covers how to forecast and analyze cash flow. The overview page explains the concepts: cash receipts, cash disbursements and net cash flow, drawn from sources such as sales, purchasing and fixed assets, plus manual revenues and manual expenses.

The other two pages are task oriented. One describes the analysis tools on the Accountant Role Center, including charts and a worksheet. The other is a walkthrough for building cash flow forecast reports with row and column definitions.

Start with the cash flow overview to learn the terms. Then use the analysis page for day-to-day review, or the financial reports walkthrough if you need a printable forecast report.

## Key points

- Cash flow forecasting covers inflows and outflows from sales, purchasing and fixed assets.
- Manual revenues and manual expenses can be added to the forecast.
- Key measures are cash receipts, cash disbursements and net cash flow.
- The Accountant Role Center offers a cash cycle chart, a cash flow chart and an income and expense chart.
- The cash flow worksheet and cash flow forecast support planning, and timeline filtering changes the period shown.
- Forecast reports use financial report row definitions and column definitions, cash flow accounts and forecast formulas.
- Forecast reports built from financial reports can be printed.

## Learn pages

- [Analyze cash flows](https://learn.microsoft.com/dynamics365/business-central/finance-analyze-cash-flow): Describes how to use the Cash Cycle, Income & Expense, Cash Flow, and Cash Flow Forecast charts to analyze the past and future flow of money in and out of your company.
- [Cash flow overview](https://learn.microsoft.com/dynamics365/business-central/finance-cash-flow-overview): An overview of cash inflows and outflows to help forecast money to be received and paid out.
- [Make cash flow forecasts using financial reports](https://learn.microsoft.com/dynamics365/business-central/walkthrough-making-cash-flow-forecasts-by-using-account-schedules): This walkthrough describes how you can use financial reports to make cash flow forecasts in Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9421 [Event Request] codeunit 367 "CheckManagement": add OnFinancialVoidCh…](../../../../changes/bcapps/9421.md) (code change): "OnFinancialVoidCheckOnBeforePostBalanceAccount enables extension of void check"
- [#9528 636017 Move CashFlow report action tooltips to report objects (W1)](../../../../changes/bcapps/9528.md) (code change): "Cash Flow report action tooltips are moved from role center page actions to the report objects"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 103 "Account Schedule Names"](../../../../objects/page/103.md) · captioned "(Financial Report) Row Definitions" · on [Table 84 "Acc. Schedule Name"](../../../../objects/table/84.md)
- [Page 104 "Account Schedule"](../../../../objects/page/104.md) · captioned "(Financial Report) Row Definition" · on [Table 85 "Acc. Schedule Line"](../../../../objects/table/85.md)
- [Page 108 "Financial Reports"](../../../../objects/page/108.md) · on [Table 88 "Financial Report"](../../../../objects/table/88.md)
- [Page 488 "Column Layout Names"](../../../../objects/page/488.md) · captioned "(Financial Report) Column Definitions" · on [Table 333 "Column Layout Name"](../../../../objects/table/333.md)
- [Page 489 "Column Layout"](../../../../objects/page/489.md) · captioned "(Financial Report) Column Definitions" · on [Table 334 "Column Layout"](../../../../objects/table/334.md)
- [Page 762 "Finance Performance"](../../../../objects/page/762.md) · on [Table 485 "Business Chart Buffer"](../../../../objects/table/485.md)
- [Page 840 "CF Forecast Statistics FactBox"](../../../../objects/page/840.md) · captioned "Cash Flow Forecast Statistic" · on [Table 840 "Cash Flow Forecast"](../../../../objects/table/840.md)
- [Page 841 "Cash Flow Worksheet"](../../../../objects/page/841.md) · on [Table 846 "Cash Flow Worksheet Line"](../../../../objects/table/846.md)
- [Page 847 "Cash Flow Forecast Card"](../../../../objects/page/847.md) · on [Table 840 "Cash Flow Forecast"](../../../../objects/table/840.md)
- [Page 848 "Cash Flow Comment"](../../../../objects/page/848.md) · on [Table 842 "Cash Flow Account Comment"](../../../../objects/table/842.md)
- [Page 849 "Cash Flow Forecast List"](../../../../objects/page/849.md) · captioned "Cash Flow Forecasts" · on [Table 840 "Cash Flow Forecast"](../../../../objects/table/840.md)
- [Page 850 "Cash Flow Forecast Entries"](../../../../objects/page/850.md) · captioned "Cash Flow Ledger Entries" · on [Table 847 "Cash Flow Forecast Entry"](../../../../objects/table/847.md)
- [Page 851 "Chart of Cash Flow Accounts"](../../../../objects/page/851.md) · on [Table 841 "Cash Flow Account"](../../../../objects/table/841.md)
- [Page 857 "Cash Flow Manual Revenues"](../../../../objects/page/857.md) · on [Table 849 "Cash Flow Manual Revenue"](../../../../objects/table/849.md)
- [Page 858 "Cash Flow Comment List"](../../../../objects/page/858.md) · on [Table 842 "Cash Flow Account Comment"](../../../../objects/table/842.md)
- [Page 859 "Cash Flow Manual Expenses"](../../../../objects/page/859.md) · on [Table 850 "Cash Flow Manual Expense"](../../../../objects/table/850.md)
- [Page 860 "CF Entries Dim. Overview"](../../../../objects/page/860.md) · captioned "CF Forcst. Entries Dimension Overview" · on [Table 847 "Cash Flow Forecast Entry"](../../../../objects/table/847.md)
- [Page 862 "Cash Flow Account Card"](../../../../objects/page/862.md) · on [Table 841 "Cash Flow Account"](../../../../objects/table/841.md)
- [Page 863 "CF Entries Dim. Matrix"](../../../../objects/page/863.md) · captioned "CF Forcst. Entries Dim. Overv. M." · on [Table 847 "Cash Flow Forecast Entry"](../../../../objects/table/847.md)
- [Page 865 "Report Selection - Cash Flow"](../../../../objects/page/865.md) · on [Table 856 "Cash Flow Report Selection"](../../../../objects/table/856.md)
- [Page 866 "Cash Flow Availability Lines"](../../../../objects/page/866.md) · captioned "Lines" · on [Table 930 "Cash Flow Availability Buffer"](../../../../objects/table/930.md)
- [Page 867 "CF Availability by Periods"](../../../../objects/page/867.md) · on [Table 840 "Cash Flow Forecast"](../../../../objects/table/840.md)
- [Page 868 "Cash Flow Forecast Statistics"](../../../../objects/page/868.md) · on [Table 840 "Cash Flow Forecast"](../../../../objects/table/840.md)
- [Page 869 "Cash Flow Forecast Chart"](../../../../objects/page/869.md) · captioned "Cash Flow Forecast" · on [Table 485 "Business Chart Buffer"](../../../../objects/table/485.md)
- [Page 1818 "Cash Flow Forecast Wizard"](../../../../objects/page/1818.md) · captioned "Set Up Cash Flow Forecast"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
