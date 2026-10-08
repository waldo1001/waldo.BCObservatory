---
id: topic/business-central/business-functionality/finance/manage-inventory-costs/report-inventory-costs-and-reconcile-wit
type: topic
title: Report inventory costs and reconcile with the general ledger
summary: Inventory cost reporting and general ledger reconciliation in Business Central. It answers questions about manually adjusting item costs, posting inventory costs to the G/L, restricting backdated postings, scheduling cost jobs, and managing inventory periods.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:49.452Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cb20d96f66a87f93ae07a6973eb9edd8996a9c6fcba5caad824282314b1b14af
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-adjust-item-costs
    title: Manually adjust the costs of items
    date: "2025-04-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-to-post-inventory-costs-to-the-general-ledger
    title: Reconcile inventory costs with the general ledger
    date: "2024-07-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-restrict-backdated-cost-postings
    title: Restrict backdated cost postings
    date: "2026-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-adjust-reconcile-inventory-cost-job-queue
    title: Schedule jobs for adjusting & reconciling inventory cost
    date: "2024-07-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-to-work-with-inventory-periods
    title: Work with inventory periods
    date: "2026-05-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-adjust-item-costs
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-to-post-inventory-costs-to-the-general-ledger
    - https://learn.microsoft.com/dynamics365/business-central/finance-restrict-backdated-cost-postings
    - https://learn.microsoft.com/dynamics365/business-central/finance-adjust-reconcile-inventory-cost-job-queue
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-to-work-with-inventory-periods
  objects:
    - object/page/461
    - object/page/5828
    - object/page/9297
  features: []
  topics:
    - topic/business-central/business-functionality/finance/manage-inventory-costs
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Finance
  - Manage inventory costs
  - Report inventory costs and reconcile with the general ledger
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance/manage-inventory-costs
children: []
coverage:
  learn: 5
  code: 3
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 461
  - 5828
  - 9297
member_hash: 68d3df1f66217b4820d3fe445b237acdbde93de7983cff066983db0fc8942838
narrative: generated
---

# Report inventory costs and reconcile with the general ledger

> Inventory cost reporting and general ledger reconciliation in Business Central. It answers questions about manually adjusting item costs, posting inventory costs to the G/L, restricting backdated postings, scheduling cost jobs, and managing inventory periods.

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Manage inventory costs](../manage-inventory-costs.md) > Report inventory costs and reconcile with the general ledger · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers the tasks that keep inventory values correct and in agreement with the general ledger. It includes adjusting item costs (manually for items that use FIFO or Average costing, or automatically), posting those costs to the G/L, and checking that inventory accounts match the G/L.

The pages fit together as a cost workflow. Cost adjustment updates item costs and value entries. The Post Inventory Cost to G/L batch job then moves the results to the G/L, and the Inventory - G/L Reconciliation page is used to check them. Inventory periods and the Earliest Allowed Valuation Date field control which periods accept postings, so closed periods are protected. A separate page explains how to schedule the adjustment and posting jobs through job queue entries to reduce application load.

To start, read "Reconcile inventory costs with the general ledger" for the core posting and reconciliation process. Then read "Schedule jobs for adjusting & reconciling inventory cost" to automate it. Use the pages on inventory periods and backdated postings when you close periods.

## Key points

- Manual cost adjustment is available for items using FIFO or Average costing. It corrects unit cost and value entries so inventory values and financial KPIs are right.
- The Post Inventory Cost to G/L batch job posts inventory value changes to the general ledger.
- The Inventory - G/L Reconciliation page is used to reconcile inventory accounts with the general ledger. The reconciliation page also covers expected cost posting.
- The Earliest Allowed Valuation Date field blocks cost postings into closed periods. Current invoicing and cost adjustment of existing entries are still allowed.
- Inventory periods can be created, closed, and reopened to control when inventory changes can be posted.
- Automatic cost adjustment and G/L reconciliation can be scheduled as background jobs with job queue entries, which improves performance and reduces application load. The scheduling page also covers assisted setup.

## Learn pages

- [Manually adjust the costs of items](https://learn.microsoft.com/dynamics365/business-central/inventory-how-adjust-item-costs): You can adjust the inventory valuation of an item using the FIFO or Average costing methods when the costs of products change.
- [Reconcile inventory costs with the general ledger](https://learn.microsoft.com/dynamics365/business-central/finance-how-to-post-inventory-costs-to-the-general-ledger): At the end of accounting periods a sequence of cost control and auditing tasks must be performed to report a correct and balanced inventory value.
- [Restrict backdated cost postings](https://learn.microsoft.com/dynamics365/business-central/finance-restrict-backdated-cost-postings): Set a date floor on the Inventory Setup page so that user postings can no longer write cost into closed periods.
- [Schedule jobs for adjusting & reconciling inventory cost](https://learn.microsoft.com/dynamics365/business-central/finance-adjust-reconcile-inventory-cost-job-queue): Learn how you can use the job queue to move the tasks for adjusting inventory cost or reconciling it with the general ledger to the background. For example, if your company runs many tasks or processes many transactions.
- [Work with inventory periods](https://learn.microsoft.com/dynamics365/business-central/finance-how-to-work-with-inventory-periods): You can control the timeframe in which people can post changes to inventory by defining inventory periods.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 461 "Inventory Setup"](../../../../../objects/page/461.md) · on [Table 313 "Inventory Setup"](../../../../../objects/table/313.md)
- [Page 5828 "Inventory Periods"](../../../../../objects/page/5828.md) · on [Table 5814 "Inventory Period"](../../../../../objects/table/5814.md)
- [Page 9297 "Inventory - G/L Recon Matrix"](../../../../../objects/page/9297.md) · captioned "Inventory - G/L Reconciliation" · on [Table 367 "Dimension Code Buffer"](../../../../../objects/table/367.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
