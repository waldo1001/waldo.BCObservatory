---
id: topic/business-central/business-functionality/purchasing/purchasing-analytics/legacy-reports-will-be-removed
type: topic
title: Legacy reports (will be removed)
summary: "Legacy purchasing analytics reports in Business Central that are marked for removal: Aged Accounts Payable, Payments on Hold, Vendor - List, and Vendor - Top 10 List. It answers questions about what each report shows and who uses it."
tier: official
language: en
system: purchasing
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:36.422Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1cc452a8840057d0a03e5eb5dd8b42d1f489f40e548ddf4caae4c41012da7b31
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-322
    title: Aged Accounts Payable (report)
    date: "2024-12-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-319
    title: Payments on Hold (report)
    date: "2024-10-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-301
    title: Vendor - List (report)
    date: "2024-10-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/reports/report-311
    title: Vendor - Top 10 List (report)
    date: "2024-12-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-322
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-319
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-301
    - https://learn.microsoft.com/dynamics365/business-central/reports/report-311
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

> Legacy purchasing analytics reports in Business Central that are marked for removal: Aged Accounts Payable, Payments on Hold, Vendor - List, and Vendor - Top 10 List. It answers questions about what each report shows and who uses it.

Path: [Business functionality](../../../business-functionality.md) > [Purchasing](../../purchasing.md) > [Purchasing analytics](../purchasing-analytics.md) > Legacy reports (will be removed) · tier official · system purchasing · narrative reviewed by Opus

## Overview

This section lists four older vendor-focused reports under Purchasing analytics. The Learn table of contents labels them "will be removed", so they describe reports that are being phased out.

The pages are independent of each other. Aged Accounts Payable and Payments on Hold cover open vendor balances and held entries. Vendor - List and Vendor - Top 10 List cover vendor master data and vendor ranking by purchases. Start with the page that matches the question: aging and reconciliation, held payments, vendor setup data, or top vendors.

## Key points

- Aged Accounts Payable shows outstanding invoice and payment amounts per vendor, calculates aging periods, and supports monitoring vendor payments and reconciling subledgers.
- Aged Accounts Payable includes vendor balance calculation, an outstanding document breakdown, and percentage calculations.
- Payments on Hold lists all vendor ledger entries where the On Hold field is populated.
- Payments on Hold is aimed at procurement coordinators, accounts payable specialists, and controllers handling vendor disputes and invoice processing.
- Vendor - List shows vendor master data: posting groups, payment terms, discounts, priority levels, default currency, and current balance.
- Vendor - Top 10 List ranks vendors by transaction volume in a selected period and compares them with total purchases across all vendors.
- All four reports are in a section marked as legacy and due to be removed.

## Learn pages

- [Aged Accounts Payable (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-322): Analyze vendor balances at the end of each period. Use this report to monitor unpaid invoices and prioritize payments for overdue accounts.
- [Payments on Hold (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-319): Get a checklist of all vendor ledger entries where the invoice is in dispute and the On Hold field isn't blank.
- [Vendor - List (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-301): Use the report, for example, to maintain information about the vendor.
- [Vendor - Top 10 List (report)](https://learn.microsoft.com/dynamics365/business-central/reports/report-311): Analyze the vendor effect on cash flow and prioritize vendor payments.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Report 301 "Vendor - List"](../../../../../objects/report/301.md) · captioned "Vendor List (Obsolete)"
- [Report 311 "Vendor - Top 10 List"](../../../../../objects/report/311.md) · captioned "Vendor - Top 10 List (Obsolete)"
- [Report 319 "Payments on Hold"](../../../../../objects/report/319.md) · captioned "Payments on Hold (Obsolete)"
- [Report 322 "Aged Accounts Payable"](../../../../../objects/report/322.md) · captioned "Aged Accounts Payable (Obsolete)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
