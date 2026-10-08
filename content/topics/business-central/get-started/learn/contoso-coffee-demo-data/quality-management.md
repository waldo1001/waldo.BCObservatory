---
id: topic/business-central/get-started/learn/contoso-coffee-demo-data/quality-management
type: topic
title: Quality management
summary: "Quality management demo scenarios in the Contoso Coffee demo data. Covers installing the demo data and walking through three inspection scenarios: automatic from production output, automatic from a warehouse receipt with reinspection, and manual from purchase item tracking."
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:12.303Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ae3c977a8269404a6c6619fd729d29f92f4de03bc97fd54090b62a3c04ddbc71
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-production-output-testing
    title: Create a sampled inspection automatically from production output
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
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
    url: https://learn.microsoft.com/dynamics365/business-central/qms-contoso-coffee-demo-data
    title: Set up Contoso Coffee demo data for quality management
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/qms-production-output-testing
    - https://learn.microsoft.com/dynamics365/business-central/qms-purchase-receipt-testing-warehouse
    - https://learn.microsoft.com/dynamics365/business-central/qms-purchase-receipt-testing-simple
    - https://learn.microsoft.com/dynamics365/business-central/qms-contoso-coffee-demo-data
  objects:
    - object/page/5194
    - object/page/20400
    - object/page/20402
    - object/page/20404
    - object/page/20408
    - object/page/20416
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
  learn: 4
  code: 6
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5194
  - 20400
  - 20402
  - 20404
  - 20408
  - 20416
member_hash: 54262ac164afa168ab740ff2a054e3a2eb3ba40882da12ae9ce667331e59440d
narrative: generated
---

# Quality management

> Quality management demo scenarios in the Contoso Coffee demo data. Covers installing the demo data and walking through three inspection scenarios: automatic from production output, automatic from a warehouse receipt with reinspection, and manual from purchase item tracking.

Path: [Get started](../../../get-started.md) > [Learn](../../learn.md) > [Contoso Coffee demo data](../contoso-coffee-demo-data.md) > Quality management · tier official · system inventory · narrative reviewed (checked by Opus)

## Overview

This section is part of the Contoso Coffee demo data and is meant for testing and training on quality management. It has no subtopics, only four pages: one setup page and three scenario walkthroughs.

Start with the setup page, which explains how to install and generate the Contoso Coffee demo data for quality management. It provides sample templates, tests, results and generation rules for purchase and production inspections. The three scenario pages then use that data, each showing a different way an inspection gets created: automatically when production output is posted, automatically when a warehouse receipt is posted (followed by a reinspection of the lot), and manually from a purchase order's item-tracking line before the receipt is posted.

## Key points

- Setup page installs and generates Contoso Coffee demo data for quality management, including templates, tests, results and generation rules for purchase and production inspections.
- Production scenario: posting production output automatically creates a sampled inspection when the production template has tests and a sample amount set (fixed quantity sampling). The walkthrough includes completing the inspection.
- Warehouse scenario: posting a warehouse receipt automatically creates an inspection for lot-tracked items. After the initial inspection fails, a reinspection is created.
- The warehouse scenario also includes registering the warehouse put-away.
- Manual scenario: create an inspection from a purchase order's item-tracking line before posting the receipt, with lot assignment and test value entry.
- The manual scenario also covers a certificate of analysis.

## Learn pages

- [Create a sampled inspection automatically from production output](https://learn.microsoft.com/dynamics365/business-central/qms-production-output-testing): Use Contoso Coffee demo data to create a quality inspection automatically when posting production output.
- [Create an inspection automatically from a warehouse receipt and reinspect the lot](https://learn.microsoft.com/dynamics365/business-central/qms-purchase-receipt-testing-warehouse): Use Contoso Coffee demo data to fail an inspection created from a warehouse receipt and then create a passing reinspection.
- [Create an inspection manually from item tracking](https://learn.microsoft.com/dynamics365/business-central/qms-purchase-receipt-testing-simple): Use Contoso Coffee demo data to create a quality inspection manually from a purchase order item-tracking line.
- [Set up Contoso Coffee demo data for quality management](https://learn.microsoft.com/dynamics365/business-central/qms-contoso-coffee-demo-data): Install and generate Contoso Coffee demo data to explore quality inspections in Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5194 "Contoso Demo Tool"](../../../../../objects/page/5194.md) · on [Table 5161 "Contoso Demo Data Module"](../../../../../objects/table/5161.md)
- [Page 20400 "Qlty. Management Setup"](../../../../../objects/page/20400.md) · captioned "Quality Management Setup" · on [Table 20400 "Qlty. Management Setup"](../../../../../objects/table/20400.md)
- [Page 20402 "Qlty. Inspection Template"](../../../../../objects/page/20402.md) · captioned "Quality Inspection Template" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../../../objects/table/20402.md)
- [Page 20404 "Qlty. Inspection Template List"](../../../../../objects/page/20404.md) · captioned "Quality Inspection Templates" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../../../objects/table/20402.md)
- [Page 20408 "Qlty. Inspection List"](../../../../../objects/page/20408.md) · captioned "Quality Inspections" · on [Table 20405 "Qlty. Inspection Header"](../../../../../objects/table/20405.md)
- [Page 20416 "Qlty. Inspection Result List"](../../../../../objects/page/20416.md) · captioned "Quality Inspection Results" · on [Table 20411 "Qlty. Inspection Result"](../../../../../objects/table/20411.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
