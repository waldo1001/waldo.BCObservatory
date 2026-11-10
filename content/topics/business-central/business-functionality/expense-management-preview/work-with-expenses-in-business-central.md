---
id: topic/business-central/business-functionality/expense-management-preview/work-with-expenses-in-business-central
type: topic
title: Work with expenses in Business Central
summary: "Expense management (preview) in Business Central covers the full expense flow: recording expenses, building and submitting expense reports, travel requests, approval, posting to the general ledger, and reimbursing employees. It answers how-to questions for employees, managers, and accountants."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-10T00:57:46.434Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0f84a5ae32904f4330b821bf4c88dd6f67609d3cbd65b88ade7d8201e510169a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-create-expenses
    title: Create and Manage Expenses in Business Central
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-submit-report
    title: Create and Submit Expense Reports
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-travel-requisitions
    title: Manage Travel Requests in Business Central
    date: "2026-11-04"
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
    date: "2026-11-04"
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
  objects:
    - object/page/63
    - object/page/234
    - object/page/625
    - object/page/5224
    - object/page/5237
    - object/page/5238
    - object/page/5239
    - object/page/5240
    - object/page/6903
    - object/page/6910
    - object/page/6911
    - object/page/6939
    - object/page/6953
    - object/page/6960
    - object/page/6974
    - object/page/6975
    - object/page/6979
    - object/page/6980
    - object/page/6981
    - object/page/6987
    - object/page/6988
    - object/page/6989
    - object/page/6992
    - object/page/6997
    - object/page/6998
    - object/page/7101
    - object/page/7129
    - object/page/7136
    - object/page/7137
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
  code: 29
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

> Expense management (preview) in Business Central covers the full expense flow: recording expenses, building and submitting expense reports, travel requests, approval, posting to the general ledger, and reimbursing employees. It answers how-to questions for employees, managers, and accountants.

Path: [Business functionality](../../business-functionality.md) > [Expense management (preview)](../expense-management-preview.md) > Work with expenses in Business Central · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section follows an expense from creation to reimbursement. Employees record individual expenses with amount, date, category, and receipts, and can use itemization, participant tracking, mileage, and per diem. Expenses are then grouped into an expense report, which is released and submitted for approval. Travel requests can be created before the trip to review planned costs and then linked to the report.

Managers and accountants review submitted reports using Expense Agent or approval workflows. They can approve, reject, or assign interim approvers, and they check rule violations and VAT reclaim decisions. Approved reports are posted to the general ledger after a preview, and employees are reimbursed through the Payment Journal.

Start with "Create and Manage Expenses" if you are an employee, or "Review and Approve Expense Reports" if you approve. Accountants will mainly need the posting and reimbursement pages.

## Key points

- Individual expenses capture amount, date, category, and receipts, with itemization, participant tracking, mileage, and per diem support.
- Expense reports group related expenses into one document that is released and submitted for approval; rule violations can be reviewed before submission.
- Travel requests record purpose, travelers, dates, estimated costs (by category or lump sum), and travel policy acknowledgment, and can be linked to expense reports to compare actual and expected spending.
- Approval can run through Expense Agent or approval workflows, with options to approve, reject, or assign interim approvers.
- Accountants validate VAT reclaim decisions before posting.
- Posting offers a preview and produces expense, employee, general ledger, and project ledger entries.
- Reimbursement is made through the Payment Journal against employee accounts, with foreign currency and withholding tax support, payment reconciliation, and reimbursement notifications.

## Learn pages

- [Create and Manage Expenses in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-create-expenses): Learn how to record individual expenses, attach receipts, add itemizations and participants, and track per diem and mileage in Business Central.
- [Create and Submit Expense Reports](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-submit-report): Learn how to create expense reports, add expenses, review rule violations, and submit reports for approval in Business Central.
  - In the observatory: [Page 6996 "Expense Agent Setup"](../../../../objects/page/6996.md)
- [Manage Travel Requests in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-travel-requisitions): Learn how to create, submit, track, and close travel requests, estimate travel costs, and link approved requests to expense reports in Business Central.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../objects/page/118.md), [Page 6939 "Expense Approval Setup"](../../../../objects/page/6939.md)
- [Post Expense Reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-post-reports): Learn how to verify VAT reclaim decisions, preview and post approved expense reports, and review the entries and documents created by posting.
- [Record and reimburse employees' expenses](https://learn.microsoft.com/dynamics365/business-central/finance-how-record-reimburse-employee-expenses): Post employees' expenses with the general journal to the employee's account then post a payment to their bank account to reimburse the business-related expense.
  - In the observatory: [Page 6998 "Posted Expense Report"](../../../../objects/page/6998.md)
- [Review and Approve Expense Reports](https://learn.microsoft.com/dynamics365/business-central/expense-management/expense-management-approve-reports): Learn how managers and accountants review expense reports, decide VAT reclaim, approve or reject reports, and prepare them for posting.
  - In the observatory: [Page 6910 "Expense Report"](../../../../objects/page/6910.md), [Page 6997 "Expense Reports"](../../../../objects/page/6997.md), [Page 7091 "Accountant Expense Reports"](../../../../objects/page/7091.md), [Page 9807 "User Card"](../../../../objects/page/9807.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 63 "Applied Employee Entries"](../../../../objects/page/63.md) · on [Table 5222 "Employee Ledger Entry"](../../../../objects/table/5222.md)
- [Page 234 "Apply Employee Entries"](../../../../objects/page/234.md) · on [Table 5222 "Employee Ledger Entry"](../../../../objects/table/5222.md)
- [Page 625 "Unapply Employee Entries"](../../../../objects/page/625.md) · on [Table 5223 "Detailed Employee Ledger Entry"](../../../../objects/table/5223.md)
- [Page 5224 "Employee Posting Groups"](../../../../objects/page/5224.md) · on [Table 5221 "Employee Posting Group"](../../../../objects/table/5221.md)
- [Page 5237 "Employee Ledger Entries"](../../../../objects/page/5237.md) · on [Table 5222 "Employee Ledger Entry"](../../../../objects/table/5222.md)
- [Page 5238 "Detailed Empl. Ledger Entries"](../../../../objects/page/5238.md) · captioned "Detailed Employee Ledger Entries" · on [Table 5223 "Detailed Employee Ledger Entry"](../../../../objects/table/5223.md)
- [Page 5239 "Empl. Ledger Entries Preview"](../../../../objects/page/5239.md) · captioned "Employee Entries Preview" · on [Table 5222 "Employee Ledger Entry"](../../../../objects/table/5222.md)
- [Page 5240 "Detailed Empl. Entries Preview"](../../../../objects/page/5240.md) · on [Table 5223 "Detailed Employee Ledger Entry"](../../../../objects/table/5223.md)
- [Page 6903 "Expense Ledger Entries"](../../../../objects/page/6903.md) · on [Table 6912 "Expense Ledger Entry"](../../../../objects/table/6912.md)
- [Page 6910 "Expense Report"](../../../../objects/page/6910.md) · on [Table 6906 "Expense Report Header"](../../../../objects/table/6906.md)
- [Page 6911 "Expense Report Lines"](../../../../objects/page/6911.md) · on [Table 6907 "Expense Report Line"](../../../../objects/table/6907.md)
- [Page 6939 "Expense Approval Setup"](../../../../objects/page/6939.md) · on [Table 6932 "Expense Approval Setup"](../../../../objects/table/6932.md)
- [Page 6953 "Posted Expense Report Lines"](../../../../objects/page/6953.md) · on [Table 6916 "Posted Expense Report Line"](../../../../objects/table/6916.md)
- [Page 6960 "Add Expenses To Expense Report"](../../../../objects/page/6960.md)
- [Page 6974 "Per Diem Expenses"](../../../../objects/page/6974.md) · on [Table 6905 "Expense Per Diem"](../../../../objects/table/6905.md)
- [Page 6975 "Expense Itemizations"](../../../../objects/page/6975.md) · on [Table 6902 "Expense Itemization"](../../../../objects/table/6902.md)
- [Page 6979 "Expense Report List"](../../../../objects/page/6979.md) · on [Table 6906 "Expense Report Header"](../../../../objects/table/6906.md)
- [Page 6980 "Manager Expense Report"](../../../../objects/page/6980.md) · on [Table 6906 "Expense Report Header"](../../../../objects/table/6906.md)
- [Page 6981 "Manager Expense Reports"](../../../../objects/page/6981.md) · on [Table 6906 "Expense Report Header"](../../../../objects/table/6906.md)
- [Page 6987 "Posted Expense Reports"](../../../../objects/page/6987.md) · on [Table 6915 "Posted Expense Report Header"](../../../../objects/table/6915.md)
- [Page 6988 "Expense"](../../../../objects/page/6988.md) · on [Table 6900 "Expense"](../../../../objects/table/6900.md)
- [Page 6989 "Expenses"](../../../../objects/page/6989.md) · on [Table 6900 "Expense"](../../../../objects/table/6900.md)
- [Page 6992 "Expense Participants"](../../../../objects/page/6992.md) · on [Table 6904 "Expense Participant"](../../../../objects/table/6904.md)
- [Page 6997 "Expense Reports"](../../../../objects/page/6997.md) · on [Table 6906 "Expense Report Header"](../../../../objects/table/6906.md)
- [Page 6998 "Posted Expense Report"](../../../../objects/page/6998.md) · on [Table 6915 "Posted Expense Report Header"](../../../../objects/table/6915.md)
- [Page 7101 "Travelers"](../../../../objects/page/7101.md) · on [Table 6938 "Traveler"](../../../../objects/table/6938.md)
- [Page 7129 "Travel Request Card"](../../../../objects/page/7129.md) · captioned "Travel Request" · on [Table 6840 "Spend Request"](../../../../objects/table/6840.md)
- [Page 7136 "Travel Request List"](../../../../objects/page/7136.md) · captioned "Travel Requests" · on [Table 6840 "Spend Request"](../../../../objects/table/6840.md)
- [Page 7137 "Travel Request Subform"](../../../../objects/page/7137.md) · captioned "Lines" · on [Table 6841 "Spend Request Detail"](../../../../objects/table/6841.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
