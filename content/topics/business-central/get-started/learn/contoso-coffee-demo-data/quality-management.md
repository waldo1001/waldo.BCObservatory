---
id: topic/business-central/get-started/learn/contoso-coffee-demo-data/quality-management
type: topic
title: Quality management
summary: Quality management demos in the Contoso Coffee demo data cover setting up the demo data and running quality inspections from warehouse receipts, item tracking, production output, and subcontracted operations. It answers how to create, trigger and finish inspections in guided scenarios.
tier: official
language: en
system: inventory
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-06T01:02:12.564Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f4b7b4b1915b268578530508ebd611c1485bbe47668735e6cd5262d9398925e4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-purchase-receipt-testing-warehouse
    title: Create an inspection automatically from a warehouse receipt and reinspect the lot
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-purchase-receipt-testing-simple
    title: Create an inspection manually from item tracking
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-production-output-testing
    title: Inspect production output
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/quality-inspect-subcontracted-output
    title: Inspect subcontracted production operations
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-contoso-coffee-demo-data
    title: Set up Contoso Coffee demo data for quality management
    date: "2026-11-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/qms-purchase-receipt-testing-warehouse
    - https://learn.microsoft.com/dynamics365/business-central/qms-purchase-receipt-testing-simple
    - https://learn.microsoft.com/dynamics365/business-central/qms-production-output-testing
    - https://learn.microsoft.com/dynamics365/business-central/quality-inspect-subcontracted-output
    - https://learn.microsoft.com/dynamics365/business-central/qms-contoso-coffee-demo-data
  objects:
    - object/page/50
    - object/page/5194
    - object/page/20400
    - object/page/20402
    - object/page/20404
    - object/page/20405
    - object/page/20406
    - object/page/20408
    - object/page/20416
    - object/page/99000831
  features: []
  topics:
    - topic/business-central/get-started/learn/contoso-coffee-demo-data
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Get started
  - Learn
  - Contoso Coffee demo data
  - Quality management
toc_file: business-central/TOC.md
parent: topic/business-central/get-started/learn/contoso-coffee-demo-data
children: []
coverage:
  learn: 5
  code: 10
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 50
  - 5194
  - 20400
  - 20402
  - 20404
  - 20405
  - 20406
  - 20408
  - 20416
  - 99000831
member_hash: 4f80e73e1e2e45f90dc037758785ff59032e4c3da0ad0d58febb7decd866c951
narrative: generated
---

# Quality management

> Quality management demos in the Contoso Coffee demo data cover setting up the demo data and running quality inspections from warehouse receipts, item tracking, production output, and subcontracted operations. It answers how to create, trigger and finish inspections in guided scenarios.

Path: [Get started](../../../get-started.md) > [Learn](../../learn.md) > [Contoso Coffee demo data](../contoso-coffee-demo-data.md) > Quality management · tier official · system inventory · narrative **unreviewed** (model text not yet checked)

## Overview

This section is a set of guided walkthroughs for the Quality Management app, built on Contoso Coffee demo data. The demo data setup page installs the quality tests, templates, results and inspection generation rules that the other pages rely on.

The scenarios fall into two groups. For purchasing and warehouse, one page creates an inspection automatically when a warehouse receipt is posted and then reinspects a failed lot. Another creates an inspection manually from a purchase order's item-tracking line before the receipt is posted. For production, one page inspects Airpot production output using posting conditions and fixed sample sizes. Another inspects subcontracted operations for serial-tracked items.

Start with the demo data setup page, then pick the scenario that matches the trigger you want to explore: warehouse receipt, manual item tracking, production order output, or subcontracting.

## Key points

- Set up Contoso Coffee demo data first by installing Demo Data. It provides quality tests, templates, results and inspection generation rules.
- Posting a warehouse receipt can automatically create a quality inspection for lot-tracked items. If the inspection fails, you can create a reinspection.
- An inspection can be created manually from a purchase order's item-tracking line before posting the receipt. This includes lot assignment, test value entry and a certificate of analysis.
- Inspecting Airpot production output shows setup time posted without inspections. Run-time postings create inspections with fixed sample sizes.
- Production order triggers, posting conditions and sample source configuration control when production inspections are generated.
- Subcontracted operations use quality inspection templates triggered when production output is posted. The demo uses subcontracting purchase orders and serial-tracked items.
- Inspections for subcontracted work can be filtered by production order.

## Learn pages

- [Create an inspection automatically from a warehouse receipt and reinspect the lot](https://learn.microsoft.com/dynamics365/business-central/qms-purchase-receipt-testing-warehouse): Use Contoso Coffee demo data to fail an inspection created from a warehouse receipt and then create a passing reinspection.
- [Create an inspection manually from item tracking](https://learn.microsoft.com/dynamics365/business-central/qms-purchase-receipt-testing-simple): Use Contoso Coffee demo data to create a quality inspection manually from a purchase order item-tracking line.
- [Inspect production output](https://learn.microsoft.com/dynamics365/business-central/qms-production-output-testing): Use Contoso Coffee demo data to compare setup-time and run-time postings and create a sampled quality inspection at a production operation.
  - In the observatory: [Page 9326 "Released Production Orders"](../../../../../objects/page/9326.md)
- [Inspect subcontracted production operations](https://learn.microsoft.com/dynamics365/business-central/quality-inspect-subcontracted-output): Use Contoso Coffee data to create serial-specific quality inspections when you receive output from a subcontracted final production operation.
  - In the observatory: [Page 38 "Item Ledger Entries"](../../../../../objects/page/38.md), [Page 9326 "Released Production Orders"](../../../../../objects/page/9326.md), [Table 5409 "Prod. Order Routing Line"](../../../../../objects/table/5409.md)
- [Set up Contoso Coffee demo data for quality management](https://learn.microsoft.com/dynamics365/business-central/qms-contoso-coffee-demo-data): Install and generate Contoso Coffee demo data to explore quality inspections in Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 50 "Purchase Order"](../../../../../objects/page/50.md) · on [Table 38 "Purchase Header"](../../../../../objects/table/38.md)
- [Page 5194 "Contoso Demo Tool"](../../../../../objects/page/5194.md) · on [Table 5161 "Contoso Demo Data Module"](../../../../../objects/table/5161.md)
- [Page 20400 "Qlty. Management Setup"](../../../../../objects/page/20400.md) · captioned "Quality Management Setup" · on [Table 20400 "Qlty. Management Setup"](../../../../../objects/table/20400.md)
- [Page 20402 "Qlty. Inspection Template"](../../../../../objects/page/20402.md) · captioned "Quality Inspection Template" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../../../objects/table/20402.md)
- [Page 20404 "Qlty. Inspection Template List"](../../../../../objects/page/20404.md) · captioned "Quality Inspection Templates" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../../../objects/table/20402.md)
- [Page 20405 "Qlty. Inspection Gen. Rules"](../../../../../objects/page/20405.md) · captioned "Quality Inspection Generation Rules" · on [Table 20404 "Qlty. Inspection Gen. Rule"](../../../../../objects/table/20404.md)
- [Page 20406 "Qlty. Inspection"](../../../../../objects/page/20406.md) · captioned "Quality Inspection" · on [Table 20405 "Qlty. Inspection Header"](../../../../../objects/table/20405.md)
- [Page 20408 "Qlty. Inspection List"](../../../../../objects/page/20408.md) · captioned "Quality Inspections" · on [Table 20405 "Qlty. Inspection Header"](../../../../../objects/table/20405.md)
- [Page 20416 "Qlty. Inspection Result List"](../../../../../objects/page/20416.md) · captioned "Quality Inspection Results" · on [Table 20411 "Qlty. Inspection Result"](../../../../../objects/table/20411.md)
- [Page 99000831 "Released Production Order"](../../../../../objects/page/99000831.md) · on [Table 5405 "Production Order"](../../../../../objects/table/5405.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
