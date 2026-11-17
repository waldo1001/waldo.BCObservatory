---
id: topic/business-central/business-functionality/purchasing/purchasing-analytics/legacy-reports-will-be-removed
type: topic
title: Legacy reports (will be removed)
summary: "Legacy purchasing reports in Business Central that are obsolete and planned for removal: Aged Accounts Payable, Payments on Hold, Vendor - Top 10 List, and Vendor - List. It answers questions about what each report shows, its options, and what replaces it."
tier: official
language: en
system: purchasing
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-17T01:01:17.322Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 93512177b77777d53e74db97a43680a2f1e943d07a42ab25dbb40338eca368c8
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-322
    title: Aged Accounts Payable (Report)
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-319
    title: Payments on Hold Report in Business Central
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-311
    title: Vendor - Top 10 List Report in Business Central
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-301
    title: Vendor List Report for Vendor Details
    date: "2026-11-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-322
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-319
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-311
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-301
  objects:
    - object/report/301
    - object/report/311
    - object/report/319
    - object/report/322
  features: []
  topics:
    - topic/business-central/business-functionality/purchasing/purchasing-analytics
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Purchasing
  - Purchasing analytics
  - Legacy reports (will be removed)
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/purchasing/purchasing-analytics
children: []
coverage:
  learn: 4
  code: 4
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 301
  - 311
  - 319
  - 322
member_hash: 41c7fb9a4866210af3e9064e3d88086ae72a96934cfb76bc61ab0f0e2da858bd
narrative: generated
---

# Legacy reports (will be removed)

> Legacy purchasing reports in Business Central that are obsolete and planned for removal: Aged Accounts Payable, Payments on Hold, Vendor - Top 10 List, and Vendor - List. It answers questions about what each report shows, its options, and what replaces it.

Path: [Business functionality](../../../business-functionality.md) > [Purchasing](../../purchasing.md) > [Purchasing analytics](../purchasing-analytics.md) > Legacy reports (will be removed) · tier official · system purchasing · narrative **unreviewed** (model text not yet checked)

## Overview

This section lists four older purchasing analytics reports that Microsoft Learn marks as obsolete or to be removed. They cover vendor payables aging, held vendor payments, top vendors by purchases or balance, and a general vendor details list. The pages are standalone, so there is no required reading order.

Each page describes what the report displays and its options, which helps when you maintain existing setups that still use them. Some pages also name the replacement. Payments on Hold is replaced by filtering the Vendor Ledger Entries page, and Vendor - Top 10 List is replaced by the Vendor - Top 10 List Excel report. Aged Accounts Payable and Vendor - List are marked with version 28.0.

Start with the report you currently use. Check its page for the obsolete status and plan a move to the alternative before removal.

## Key points

- Aged Accounts Payable shows outstanding vendor invoices, credit memos, and payments with aging periods. It is used to monitor payments and reconcile subledgers.
- Aged Accounts Payable options: Aged As Of date, Period Length, aging by due date, posting date, or document date, Heading Type, percentage calculation, and summary or detailed vendor views.
- Payments on Hold lists open vendor ledger entries with an On Hold value. It is obsolete, and the replacement is to filter the Vendor Ledger Entries page.
- Vendor - Top 10 List ranks vendors by Purchases (LCY) or Balance (LCY). You can adjust how many vendors appear. It is obsolete, and the Vendor - Top 10 List Excel report is the recommended alternative.
- Vendor - List (Report 301) shows posting groups, payment terms, discounts, priority, default currency, and current balance.
- Vendor - List and Aged Accounts Payable are marked for version 28.0, and Vendor - List is obsolete from that version and planned for removal.

## Learn pages

- [Aged Accounts Payable (Report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-322): Analyze vendor balances at the end of each period. Use this report to monitor unpaid invoices and prioritize payments for overdue accounts.
- [Payments on Hold Report in Business Central](https://learn.microsoft.com/dynamics365/business-central/reports/report-319): Review open vendor ledger entries with an On Hold value to follow up on held payments. Learn about alternatives to this obsolete report.
  - In the observatory: [Page 29 "Vendor Ledger Entries"](../../../../../objects/page/29.md)
- [Vendor - Top 10 List Report in Business Central](https://learn.microsoft.com/dynamics365/business-central/reports/report-311): Rank vendors by purchase amounts or balances in local currency. Choose how many vendors to include and compare their amounts with the report totals.
- [Vendor List Report for Vendor Details](https://learn.microsoft.com/dynamics365/business-central/reports/report-301): Review vendor posting groups, payment terms, discounts, and balances in local currency with the legacy Vendor List report in Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Report 301 "Vendor - List"](../../../../../objects/report/301.md) · captioned "Vendor List (Obsolete)"
- [Report 311 "Vendor - Top 10 List"](../../../../../objects/report/311.md) · captioned "Vendor - Top 10 List (Obsolete)"
- [Report 319 "Payments on Hold"](../../../../../objects/report/319.md) · captioned "Payments on Hold (Obsolete)"
- [Report 322 "Aged Accounts Payable"](../../../../../objects/report/322.md) · captioned "Aged Accounts Payable (Obsolete)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
