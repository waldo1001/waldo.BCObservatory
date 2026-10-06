---
id: topic/business-central/business-functionality/expense-management-preview/work-with-expenses-in-business-central
type: topic
title: Work with expenses in Business Central
summary: "Expense management (preview) in Business Central covers the full expense lifecycle: creating expenses, travel requests, expense reports, approval, VAT reclaim review, and posting. It answers how-to questions about each step from entry to the general ledger."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T13:43:32.763Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 2eb697dda51c98749a9a6312bf334e91ac1360ababe5bb7236de5afaa504374e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-create-expenses
    title: Create and Manage Expenses in Business Central
    date: "2026-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-submit-report
    title: Create and Submit Expense Reports
    date: "2026-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-travel-requisitions
    title: Manage Travel Requests in Business Central
    date: "2026-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-post-reports
    title: Post Expense Reports in Business Central
    date: "2026-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-record-reimburse-employee-expenses
    title: Record and reimburse employees' expenses
    date: "2026-09-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-approve-reports
    title: Review and Approve Expense Reports
    date: "2026-09-24"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-create-expenses
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-submit-report
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-travel-requisitions
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-post-reports
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-record-reimburse-employee-expenses
    - https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-approve-reports
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/expense-management-preview
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Expense management (preview)
  - Work with expenses in Business Central
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/expense-management-preview
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 63
  - 234
  - 625
  - 5224
  - 5237
  - 5238
  - 5239
  - 5240
  - 6903
  - 6910
  - 6911
  - 6939
  - 6953
  - 6960
  - 6974
  - 6975
  - 6979
  - 6980
  - 6981
  - 6987
  - 6988
  - 6989
  - 6992
  - 6997
  - 6998
  - 7101
  - 7129
  - 7136
  - 7137
member_hash: 69807bf9369c27e230c618df2a097c0fbd89b5917a7da32eceb2fa99d3b02b39
narrative: generated
---

# Work with expenses in Business Central

> Expense management (preview) in Business Central covers the full expense lifecycle: creating expenses, travel requests, expense reports, approval, VAT reclaim review, and posting. It answers how-to questions about each step from entry to the general ledger.

Path: [Business functionality](../../business-functionality.md) > [Expense management (preview)](../expense-management-preview.md) > Work with expenses in Business Central · tier official · system none · **unreviewed** (machine-generated narrative)

## Overview

This section walks through the expense process in order. Employees create individual expenses with category, date, receipt, itemizations, participants, mileage or per diem details. They then collect those expenses on an expense report, review rule violations, optionally link a travel request, and release the report for approval.

Travel requests record planned travel and costs for review before expenses are incurred, and can be linked to an expense report so planned and actual spending can be compared. Managers and accountants then approve the report against policy and VAT reclaim rules, with separate workflows for approval and VAT verification. Finally, approved reports are posted to the general ledger.

Start with the page on creating and managing expenses if you are an employee, or with the review and approval page if you are a manager or accountant. The posting page is the place for accounting questions about the resulting ledger entries.

## Key points

- Expenses have a card with category and date, receipt attachment and preview, itemizations with subcategories, and participants for business meals.
- Mileage expenses use vehicle types, and per diem is calculated by location.
- Expense reports are created, filled with expense lines, checked for rule violations, optionally linked to a travel request, and released for approval.
- Travel requests record planned travel and costs, track status, include travel policy acknowledgment and international travel, and are described for version 29.
- Travel requests can be linked to expense reports to compare planned and actual spending.
- Approvers review policy compliance, rule violations, receipts and report statistics; VAT reclaim review and VAT specification approval are separate workflows.
- Posting previews entries first and requires verifying VAT reclaim status.
- Posted results include expense ledger entries, employee ledger entries (reimbursement), general ledger entries and project ledger entries.

## Learn pages

- [Create and Manage Expenses in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-create-expenses): Learn how to record individual expenses, attach receipts, add itemizations and participants, and track per diem and mileage in Business Central.
- [Create and Submit Expense Reports](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-submit-report): Learn how to create expense reports, add expenses, review rule violations, and submit reports for approval in Business Central.
- [Manage Travel Requests in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-travel-requisitions): Learn how to create, submit, track, and close travel requests, estimate travel costs, and link approved requests to expense reports in Business Central.
- [Post Expense Reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-post-reports): Learn how to verify VAT reclaim decisions, preview and post approved expense reports, and review the entries and documents created by posting.
- [Record and reimburse employees' expenses](https://learn.microsoft.com/dynamics365/business-central/finance-how-record-reimburse-employee-expenses): Post employees' expenses with the general journal to the employee's account then post a payment to their bank account to reimburse the business-related expense.
- [Review and Approve Expense Reports](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-approve-reports): Learn how managers and accountants review expense reports, decide VAT reclaim, approve or reject reports, and prepare them for posting.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 63, 234, 625, 5224, 5237, 5238, 5239, 5240, 6903, 6910, 6911, 6939, 6953, 6960, 6974, 6975, 6979, 6980, 6981, 6987, 6988, 6989, 6992, 6997, 6998, 7101, 7129, 7136, 7137.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
