---
id: topic/business-central/business-functionality/expense-management-preview/work-with-expenses-in-business-central
type: topic
title: Work with expenses in Business Central
summary: "Expense management (preview) in Business Central covers the full expense lifecycle: creating expenses, travel requests, expense reports, review and approval, posting, and employee reimbursement. It answers how-to questions about each step, from the expense card to the Payment Journal."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T14:24:07.451Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a0e57150338a859582b6c9756c6dd474fe92ff9153deb4e0697fc95af3592dc7
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

> Expense management (preview) in Business Central covers the full expense lifecycle: creating expenses, travel requests, expense reports, review and approval, posting, and employee reimbursement. It answers how-to questions about each step, from the expense card to the Payment Journal.

Path: [Business functionality](../../business-functionality.md) > [Expense management (preview)](../expense-management-preview.md) > Work with expenses in Business Central · tier official · system none · **unreviewed** (machine-generated narrative)

## Overview

This section walks through the expense process in the order it is used. An employee creates individual expenses (with receipts, itemizations, participants, mileage or per diem), optionally records a travel request for approval before travelling, then collects expenses into an expense report and submits it.

After submission, managers and accountants review the report against policy rules and VAT reclaim rules and approve it. The approved report is then posted to the general ledger after a posting preview and VAT reclaim check. The last step is to reimburse the employee through the Payment Journal.

Start with the page on creating and managing expenses if you are setting up the employee side. Start with the review and approve page or the posting page if you work in finance. The travel request page covers planning and comparing planned against actual spending.

## Key points

- Expenses are created on an expense card with category, date, receipt attachment and preview, and itemizations with subcategories.
- Special expense types include business meals with participants, mileage with vehicle types, and per diem calculated by location.
- Expense reports are created, filled with expense lines, checked for rule violations, optionally linked to a travel request, and released for approval.
- Travel requests record planned travel and costs for review before expenses are incurred, with policy acknowledgment, international travel and spending comparison; the summary cites version 29.
- Reviewers handle approval and policy rule violations, plus a separate VAT reclaim review and VAT specification approval, with access to receipts and report statistics.
- Posting previews entries and verifies VAT reclaim status, then creates expense, employee, general ledger and project ledger entries.
- Reimbursement is made through the Payment Journal against employee accounts, with foreign currency, withholding tax, payment reconciliation and reimbursement notifications supported.

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
