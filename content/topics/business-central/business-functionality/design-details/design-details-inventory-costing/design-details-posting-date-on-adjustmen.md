---
id: topic/business-central/business-functionality/design-details/design-details-inventory-costing/design-details-posting-date-on-adjustmen
type: topic
title: "Design details: Posting date on adjustment value entry"
summary: Posting date handling on adjustment value entries created by the Adjust Cost - Item Entries batch job. It answers how the date is assigned, how it compares to the source entry in revaluation and item charge cases, and how to fix the "Posting Date is not within your range of allowed posting dates" error.
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:15.277Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d3c70fd8da7223f5cfeafa5a57a9cea7ede5dc821ba2741d852dcd946931579c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-inventory-adjustment-value-entry-allowed-posting-dates
    title: Error message "Posting Date is not within your range of allowed posting dates"
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-inventory-adjustment-value-entry-source-entry
    title: Posting date on adjustment value entry compared to the source entry
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-inventory-adjustment-value-entry-posting-date
    title: Posting date on value entries
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/design-details-inventory-adjustment-value-entry-allowed-posting-dates
    - https://learn.microsoft.com/dynamics365/business-central/design-details-inventory-adjustment-value-entry-source-entry
    - https://learn.microsoft.com/dynamics365/business-central/design-details-inventory-adjustment-value-entry-posting-date
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/design-details/design-details-inventory-costing
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Design details
  - "Design details: Inventory costing"
  - "Design details: Posting date on adjustment value entry"
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/design-details/design-details-inventory-costing
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: d6d24c5cbf1753cde7012558989eb262ebb6b6d6d9f8ecbf253b66da1a577aeb
narrative: generated
---

# Design details: Posting date on adjustment value entry

> Posting date handling on adjustment value entries created by the Adjust Cost - Item Entries batch job. It answers how the date is assigned, how it compares to the source entry in revaluation and item charge cases, and how to fix the "Posting Date is not within your range of allowed posting dates" error.

Path: [Business functionality](../../../business-functionality.md) > [Design details](../../design-details.md) > [Design details: Inventory costing](../design-details-inventory-costing.md) > Design details: Posting date on adjustment value entry · tier official · system inventory · narrative reviewed by Opus

## Overview

This section explains which posting date Business Central gives to adjustment value entries when the Adjust Cost - Item Entries batch job runs. The date is checked against Inventory Periods and General Ledger Setup, and the result affects the timing of cost adjustments.

The three pages build on each other. "Posting date on value entries" describes the assignment rule. "Posting date on adjustment value entry compared to the source entry" shows the effect in revaluation and item charge scenarios. The error page helps when the batch job fails because of a date restriction.

Start with the value entries page for the rule. Go to the error page if the job is failing now.

## Key points

- The Adjust Cost - Item Entries batch job checks the initial posting date against Inventory Periods and General Ledger Setup.
- If the initial posting date is outside the allowed range, the later allowed date is assigned to the adjustment value entry.
- The comparison page covers revaluation posting and item charge posting, with automatic cost adjustment and average cost calculation.
- General Ledger Setup and Inventory setup both influence the timing of cost adjustments.
- The posting date error can come from a user's Allow Posting From and Allow Posting To dates.
- The same error can come from inventory period constraints.
- Troubleshoot the error by checking the user posting date setup and the inventory periods.

## Learn pages

- [Error message "Posting Date is not within your range of allowed posting dates"](https://learn.microsoft.com/dynamics365/business-central/design-details-inventory-adjustment-value-entry-allowed-posting-dates): Resolve the error behind the message "Posting date is not within your range of allowed posting dates" when running the Adjust Cost - Item Entries batch job.
- [Posting date on adjustment value entry compared to the source entry](https://learn.microsoft.com/dynamics365/business-central/design-details-inventory-adjustment-value-entry-source-entry): Learn about scenario "Posting Date on Adjustment Value Entry versus Posting Date on entry causing the adjustment such as Revaluation or Item charge" when running the Adjust Cost - Item Entries batch job identifies.
- [Posting date on value entries](https://learn.microsoft.com/dynamics365/business-central/design-details-inventory-adjustment-value-entry-posting-date): Learn how the Adjust Cost - Item Entries batch job identifies and assigns a posting date to the value entries that the batch job is about to create.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
