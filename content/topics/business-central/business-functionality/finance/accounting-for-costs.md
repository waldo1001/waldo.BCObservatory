---
id: topic/business-central/business-functionality/finance/accounting-for-costs
type: topic
title: Accounting for costs
summary: "Cost accounting in Business Central: terminology, setup of cost types, cost centers and cost objects, transferring ledger entries, allocating costs, cost budgets, and built-in reports. It answers how-to and concept questions about analyzing costs by type, location, and bearer."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:27.418Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: fde34798879f0f5f594d0791ed8e6604504b4c90a91a05db665c5745533ea653
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-about-cost-accounting
    title: About cost accounting
    date: "2024-07-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-manage-cost-accounting
    title: Accounting for costs overview
    date: "2024-07-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-cost-accounting-reports
    title: Built-in cost accounting reports in Business Central
    date: "2025-06-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-create-cost-budgets
    title: Creating cost budgets
    date: "2024-07-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-define-and-allocate-costs
    title: Defining and allocating costs
    date: "2024-07-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-to-delete-cost-budget-entries
    title: Delete cost budget entries
    date: "2024-07-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-set-up-cost-accounting
    title: Set up cost accounting
    date: "2024-07-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-terminology-in-cost-accounting
    title: Terminology in cost accounting
    date: "2024-07-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-transfer-and-post-cost-entries
    title: Transferring and posting cost entries
    date: "2024-07-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-about-cost-accounting
    - https://learn.microsoft.com/dynamics365/business-central/finance-manage-cost-accounting
    - https://learn.microsoft.com/dynamics365/business-central/finance-cost-accounting-reports
    - https://learn.microsoft.com/dynamics365/business-central/finance-create-cost-budgets
    - https://learn.microsoft.com/dynamics365/business-central/finance-define-and-allocate-costs
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-to-delete-cost-budget-entries
    - https://learn.microsoft.com/dynamics365/business-central/finance-set-up-cost-accounting
    - https://learn.microsoft.com/dynamics365/business-central/finance-terminology-in-cost-accounting
    - https://learn.microsoft.com/dynamics365/business-central/finance-transfer-and-post-cost-entries
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/finance
  localizations: []
  videos:
    - video/BZF4MrVfvfY
    - video/xh63GaWwZqA
  posts:
    - post/thedynamicsexplorer-com/37257
  guidelines: []
  changes:
    - change/bcapps/11710
    - change/bcapps/11907
    - change/bcapps/9545
learn_toc_path:
  - Business functionality
  - Finance
  - Accounting for costs
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance
children: []
coverage:
  learn: 9
  code: 0
  video: 2
  blog: 1
  guideline: 0
bc_forms:
  - 1100
  - 1101
  - 1102
  - 1103
  - 1104
  - 1105
  - 1106
  - 1107
  - 1108
  - 1109
  - 1111
  - 1112
  - 1113
  - 1114
  - 1115
  - 1116
  - 1117
  - 1118
  - 1119
  - 1120
  - 1121
  - 1122
  - 1123
  - 1124
  - 1125
  - 1126
  - 1127
  - 1128
  - 1129
  - 1131
  - 1132
  - 1133
  - 1135
  - 1138
  - 1700
  - 1701
  - 1702
  - 4405
  - 10007
  - 10008
member_hash: 253009b5170bcbde2efda8d28b609be2a69b1bc2cf29742ab0d494b533034c10
narrative: generated
---

# Accounting for costs

> Cost accounting in Business Central: terminology, setup of cost types, cost centers and cost objects, transferring ledger entries, allocating costs, cost budgets, and built-in reports. It answers how-to and concept questions about analyzing costs by type, location, and bearer.

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Accounting for costs · tier official · system finance · narrative reviewed by Opus

## Overview

Cost accounting analyzes business costs by type, location, and bearer to determine profitability. It works through cost types, cost centers, and cost objects, with allocations, budgets, and reports built on top of them.

The pages follow the working order. Start with the overview, "About cost accounting" and the terminology page for concepts. Then use "Set up cost accounting" to define cost types, centers, and objects and link them to general ledger accounts. Next come transferring and posting cost entries, defining and allocating costs, and creating cost budgets. Reports and budget entry cleanup are covered last.

## Key points

- Setup defines cost types, cost centers, and cost objects and links them to general ledger accounts; cost center and cost object dimensions and automatic cost adjustment are part of it.
- General ledger entries are transferred to cost accounting automatically by set criteria or posted manually; combined entries and tracing between cost and ledger entries are supported.
- Cost allocations move costs and revenues between cost types, centers, and objects using allocation sources and targets.
- Allocation bases can be static or dynamic, for example employee counts or sales figures.
- Cost budgets are based on cost types for a fiscal period; batch jobs copy, allocate, and report budgets, with comparison to actual costs.
- A batch job deletes cost budget entries from the cost budget register while preventing gaps in the register sequence.
- Report Explorer gives access to the built-in cost accounting reports.

## Learn pages

- [About cost accounting](https://learn.microsoft.com/dynamics365/business-central/finance-about-cost-accounting): Cost accounting can help you understand the costs of running a business. Cost accounting information is designed to analyze various issues.
- [Accounting for costs overview](https://learn.microsoft.com/dynamics365/business-central/finance-manage-cost-accounting): Cost accounting helps you understand the costs of running a business. This article provides links to other articles with more information.
- [Built-in cost accounting reports in Business Central](https://learn.microsoft.com/dynamics365/business-central/finance-cost-accounting-reports): Explore the built-in cost accounting reports in the standard version of Business Central.
- [Creating cost budgets](https://learn.microsoft.com/dynamics365/business-central/finance-create-cost-budgets): This article provides an overview of where to create and analyze cost budgets. Budgeting in cost accounting resembles budgeting in the general ledger.
- [Defining and allocating costs](https://learn.microsoft.com/dynamics365/business-central/finance-define-and-allocate-costs): Cost allocations move costs and revenues between cost types, cost centers, and cost objects. You can define as many allocations as you need.
- [Delete cost budget entries](https://learn.microsoft.com/dynamics365/business-central/finance-how-to-delete-cost-budget-entries): You use the Delete Cost Budget Entries batch job to cancel cost budget entries from the cost budget register.
- [Set up cost accounting](https://learn.microsoft.com/dynamics365/business-central/finance-set-up-cost-accounting): Before you start working with cost accounting, you must setup. Each cost entry must have a cost type assigned and a cost center code or a cost object assigned.
- [Terminology in cost accounting](https://learn.microsoft.com/dynamics365/business-central/finance-terminology-in-cost-accounting): This article defines the key terms that are used in cost accounting, such as allocation key and allocation source.
- [Transferring and posting cost entries](https://learn.microsoft.com/dynamics365/business-central/finance-transfer-and-post-cost-entries): Before you define cost allocations, you must understand the various sources that cost entries come from.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11710 [29.x]-Not enough inventory available at vendor location for this order](../../../../changes/bcapps/11710.md) (code change): "Component consumption was being posted twice during subcontracting receipt"
- [#11907 [29.x]-Incident 51000001968459: Issue while creating any import purchase invoice](../../../../changes/bcapps/11907.md) (code change): "Custom Duty now correctly included in Inventory and Direct Cost Applied entries"
- [#9545 636017 Move Cost Accounting report action tooltips to report objects](../../../../changes/bcapps/9545.md) (code change): "Tooltips for 16 Cost Accounting reports moved to report objects"
- [Dynamics 365 Business Central – How to proportionally split costs across Dimensions using Statistical Accounts and Allocation Accounts](../../../../posts/thedynamicsexplorer-com/37257.md) (community post): "how to automatically split costs across cost center dimensions in Business Central using Statistical Accounts"
- [What's New: Fixed and Variable G/L Allocations (2023 release wave 2)](../../../../videos/BZF4MrVfvfY.md) (video): "GL allocations; statistical accounts; cost allocation; revenue allocation"
- [Adjust Cost Allocations Before Posting](../../../../videos/xh63GaWwZqA.md) (video): "allocation accounts; cost allocation; posting; expense splitting"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1131, 1132, 1133, 1135, 1138, 1700, 1701, 1702, 4405, 10007, 10008.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
