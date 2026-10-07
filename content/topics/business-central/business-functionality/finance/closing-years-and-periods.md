---
id: topic/business-central/business-functionality/finance/closing-years-and-periods
type: topic
title: Closing years and periods
summary: Closing years and periods covers how to close accounting periods and fiscal years in Business Central. It answers questions about pre-closing checks, posting period controls, cost allocation, currency and VAT tasks, the Close Income Statement batch job, and posting the year-end closing entry.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:18:55.812Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a8f2ca61c16d85daa8b15c4117b3e9da2fd886862244e60559d37ff257268b51
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/year-close-account-periods
    title: Close accounting periods for a fiscal year
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/year-close-years-periods
    title: Close fiscal years and accounting periods
    date: "2024-08-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/year-close-income-statement
    title: Close income statement accounts
    date: "2024-08-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/year-close-books
    title: Closing the books
    date: "2024-08-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/year-how-complete-period-end-processes
    title: Optional activities for closing periods
    date: "2024-08-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/year-prepare-preclose-reports
    title: Overview of pre-closing reports to verify account accuracy
    date: "2024-08-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/year-prepare-close-statement
    title: Overview of reports to help prepare closing statements
    date: "2024-08-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/year-allocate-costs-income
    title: Overview of tasks to allocate costs and income
    date: "2024-12-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/year-how-post-year-end-close-entry
    title: Post the year-end closing entry
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-specify-posting-periods
    title: Specify posting periods
    date: "2026-03-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-report-vat
    title: Submit VAT reports to tax authorities
    date: "2026-01-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-update-currencies
    title: Update currency exchange rates
    date: "2026-06-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-accounting-periods-and-fiscal-years
    title: Working with accounting periods and fiscal years
    date: "2026-01-12"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/year-close-account-periods
    - https://learn.microsoft.com/dynamics365/business-central/year-close-years-periods
    - https://learn.microsoft.com/dynamics365/business-central/year-close-income-statement
    - https://learn.microsoft.com/dynamics365/business-central/year-close-books
    - https://learn.microsoft.com/dynamics365/business-central/year-how-complete-period-end-processes
    - https://learn.microsoft.com/dynamics365/business-central/year-prepare-preclose-reports
    - https://learn.microsoft.com/dynamics365/business-central/year-prepare-close-statement
    - https://learn.microsoft.com/dynamics365/business-central/year-allocate-costs-income
    - https://learn.microsoft.com/dynamics365/business-central/year-how-post-year-end-close-entry
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-specify-posting-periods
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-report-vat
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-update-currencies
    - https://learn.microsoft.com/dynamics365/business-central/finance-accounting-periods-and-fiscal-years
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/finance
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10096
    - change/bcapps/9733
learn_toc_path:
  - Business functionality
  - Finance
  - Closing years and periods
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance
children: []
coverage:
  learn: 13
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5
  - 100
  - 118
  - 283
  - 315
  - 321
  - 322
  - 323
  - 474
  - 475
  - 739
  - 740
  - 741
  - 742
  - 743
  - 744
  - 745
  - 746
  - 747
  - 748
  - 1393
  - 1394
  - 5629
  - 9401
member_hash: cf60b84306ed2d68b48915f1b1870b7482e350eab18c093898ebdfa68191cb3c
narrative: generated
---

# Closing years and periods

> Closing years and periods covers how to close accounting periods and fiscal years in Business Central. It answers questions about pre-closing checks, posting period controls, cost allocation, currency and VAT tasks, the Close Income Statement batch job, and posting the year-end closing entry.

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Closing years and periods · tier official · system finance · narrative reviewed by Opus

## Overview

This section describes the year-end and period-end process in finance. It starts with the structure of accounting periods and fiscal years, then moves through preparation tasks: verifying accounts with pre-closing reports, allocating costs and income, updating currency exchange rates, and submitting VAT reports.

The closing itself is covered in a few pages. "Closing the books" gives the overall sequence. Other pages cover closing accounting periods, running the Close Income Statement batch job, and posting the resulting year-end closing entry in a general journal. Posting periods can be restricted by date or by user.

Start with "Close fiscal years and accounting periods" or "Closing the books" for the overall flow. Then use the task pages as needed: "Optional activities for closing periods" is a checklist, and the report overview pages help verify balances before closing.

## Key points

- Closing a fiscal year locks its accounting periods against modification, but posting to a closed year is still possible if adjustments are needed.
- The Close Income Statement batch job transfers the year's result to the balance sheet and zeroes income statement accounts. It generates entries that you then review and post in a general journal.
- Posting periods are controlled with Allow Posting From and Allow Posting To, using fixed dates or date formulas, with user-level overrides.
- Pre-closing reports include detail trial balance reports for banks, customers, vendors, and consolidated companies.
- Closing statement reports include trial balance, accounts receivable and payable aging, and budget comparisons.
- Costs and income can be allocated in recurring general journals using quantity, percentage, or amount allocation keys.
- Currency exchange rates can be updated manually or automatically through an external rate service, with adjustments for realized and unrealized gains and losses.
- VAT reporting covers the EC Sales List and VAT Return reports, including setup, submission, test mode, and VAT settlement.

## Learn pages

- [Close accounting periods for a fiscal year](https://learn.microsoft.com/dynamics365/business-central/year-close-account-periods): This article describes how to close the accounting periods that make up the fiscal year for year end closing.
- [Close fiscal years and accounting periods](https://learn.microsoft.com/dynamics365/business-central/year-close-years-periods): Outlines the tasks to close a fiscal year or an accounting period, such as ensuring documents and journals are posted and verifying bank balances.
- [Close income statement accounts](https://learn.microsoft.com/dynamics365/business-central/year-close-income-statement): At year closing, you must run the Close Income Statement batch job to close the accounting periods that make up the fiscal year.
- [Closing the books](https://learn.microsoft.com/dynamics365/business-central/year-close-books): Learn about the process of closing the books for a fiscal year or period, and what happens after you close at the end of a year.
- [Optional activities for closing periods](https://learn.microsoft.com/dynamics365/business-central/year-how-complete-period-end-processes): This article outlines the optional processes and activities for closing accounting periods in Business Central.
- [Overview of pre-closing reports to verify account accuracy](https://learn.microsoft.com/dynamics365/business-central/year-prepare-preclose-reports): Provides an overview of the reports you can use to verify the accuracy of accounts before closing the books at the end of a year or period.
- [Overview of reports to help prepare closing statements](https://learn.microsoft.com/dynamics365/business-central/year-prepare-close-statement): Provides an overview of the reports you can use to gather information to prepare your company's closing statements when closing the fiscal year.
- [Overview of tasks to allocate costs and income](https://learn.microsoft.com/dynamics365/business-central/year-allocate-costs-income): Outlines the tasks to allocate an entry in a recurring general journal to several different accounts when you post the journal.
- [Post the year-end closing entry](https://learn.microsoft.com/dynamics365/business-central/year-how-post-year-end-close-entry): Describes how to open the journal you specified in the Close Income Statement batch job, and then review and post the year-end closing entry.
- [Specify posting periods](https://learn.microsoft.com/dynamics365/business-central/finance-how-specify-posting-periods): You specify posting periods (posting start and end dates) to set up when users can post to the general ledger.
- [Submit VAT reports to tax authorities](https://learn.microsoft.com/dynamics365/business-central/finance-how-report-vat): Learn how to prepare reports that list VAT from sales during a period, or from sales and purchases, and submit the report to a tax authority.
- [Update currency exchange rates](https://learn.microsoft.com/dynamics365/business-central/finance-how-update-currencies): Learn how to use Business Central to adjust exchange rates for amounts in different currencies.
- [Working with accounting periods and fiscal years](https://learn.microsoft.com/dynamics365/business-central/finance-accounting-periods-and-fiscal-years): Learn how to work with accounting periods to define when your company reports financial performance.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10096 Fix Close Income Statement grouping when no dimensions are selected](../../../../changes/bcapps/10096.md) (code change): "Fixed the Close Income Statement report to properly group G/L entries by account"
- [#9733 [main] bug 644111 - Reorder "Open Balance Sheet" action in Accountant CZ Role Center CZL page](../../../../changes/bcapps/9733.md) (code change): "Open Balance Sheet action after the Close Balance Sheet action, aligning the menu with the standard year-end closing workflow"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 5, 100, 118, 283, 315, 321, 322, 323, 474, 475, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 1393, 1394, 5629, 9401.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
