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
  at: "2026-10-07T13:37:30.849Z"
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
  objects: []
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
  code: 0
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

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 103, 104, 108, 488, 489, 762, 840, 841, 847, 848, 849, 850, 851, 857, 858, 859, 860, 862, 863, 865, 866, 867, 868, 869, 1818.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
