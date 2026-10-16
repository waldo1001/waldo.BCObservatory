---
id: topic/business-central/business-functionality/local-functionality/australia/core-finance
type: topic
title: Core finance
summary: Core finance for the Australian version of Business Central covers distribution amounts, balance sheet and income statement reports, and business unit setup for Business Activity Statements (BAS). It answers questions on Australia-specific financial reporting and BAS group consolidation.
tier: official
language: en
system: finance
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-16T01:18:16.191Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 539151739f38e50b09ee7d7dba9a9d805a80c5387999bc2b6a4ccf8fdf04a1b0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/calculating-distribution-amounts
    title: Calculating Distribution Amounts [AU]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-print-balance-sheet-reports
    title: Print balance sheet reports [AU]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-print-income-statements
    title: Print income statements [AU]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-set-up-business-units-for-business-activity-statements
    title: Set Up Business Units for Business Activity Statements (AU)
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/calculating-distribution-amounts
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-print-balance-sheet-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-print-income-statements
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-set-up-business-units-for-business-activity-statements
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/australia
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9590
learn_toc_path:
  - Business functionality
  - Local functionality
  - Australia
  - Core finance
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/australia
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 17101
member_hash: 9a6e3db51e7fd5caedda72e6779ea1e911d6142d1ef1fd8fad274040b5620ea1
narrative: generated
---

# Core finance

> Core finance for the Australian version of Business Central covers distribution amounts, balance sheet and income statement reports, and business unit setup for Business Activity Statements (BAS). It answers questions on Australia-specific financial reporting and BAS group consolidation.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Australia](../australia.md) > Core finance · tier official · system finance · narrative **unreviewed** (model text not yet checked)

## Overview

This section collects the Australia-specific core finance pages. Two pages cover statutory-style reports: printing balance sheet reports and printing the income statement. A third explains how to calculate distribution amounts. A fourth covers setting up business units for BAS.

The pages are independent tasks and have no subtopics. Start with the BAS business unit page if you need to lodge BAS as a group across several companies. Start with the report pages if you need to produce financial statements for compliance or auditing.

## Key points

- Calculating Distribution Amounts [AU] explains how to calculate distribution amounts in the Australian version.
- The balance sheet report produces standardized financial statements for compliance and reporting.
- The Income Statement report shows revenues and expenses for the current and previous year, as a legal auditing requirement.
- Income statements can be printed or previewed, and amounts can optionally be shown in the additional reporting currency.
- The income statement page mentions the financial report definition and amount rounding options.
- BAS business units are set up on the BAS Business Units page for parent companies, subsidiaries and affiliates.
- BAS business unit setup involves the BAS to be Lodged as a Group, BAS Group Company and Enable GST (Australia) settings.

## Learn pages

- [Calculating Distribution Amounts [AU]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/calculating-distribution-amounts): In the Australian version, you can reallocate amounts between general ledger accounts to keep account balances proportionate.
- [Print balance sheet reports [AU]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-print-balance-sheet-reports): Use the Balance Sheet report to view the company's balance sheet in the Australian version.
- [Print income statements [AU]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-print-income-statements): Learn how to view the company's annual income statement in the Australian version.
- [Set Up Business Units for Business Activity Statements (AU)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Australia/how-to-set-up-business-units-for-business-activity-statements): Learn how to consolidate the financial statements of various companies into one financial statement.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9590 Error message "Consolidated must be equal to Yes" when Exporting BAS Calculation Worksheet for consolidated Company in Australian localisationInitial commit](../../../../../changes/bcapps/9590.md) (code change): "Exporting the BAS Calculation Worksheet for a consolidated company"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 1 object with no object page: page/17101.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
