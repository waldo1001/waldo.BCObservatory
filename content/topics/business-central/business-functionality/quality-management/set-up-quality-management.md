---
id: topic/business-central/business-functionality/quality-management/set-up-quality-management
type: topic
title: Set up quality management
summary: "Setting up quality management in Business Central: installing and configuring the Quality Management extension, permission sets, inspection templates, results, generation rules, and workflows. It answers questions about initial deployment and how inspections are created and handled automatically."
tier: official
language: en
system: inventory
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-13T01:01:22.016Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9da10e19f26b23664c55f669e4c6fcc61622443e2b6b3e883e690c163fdf0c86
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-configuring-grades
    title: Configure quality inspection results
    date: "2026-09-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-quality-templates
    title: Create quality inspection templates
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-setup
    title: Quality management setup and configuration
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-quality-workflows
    title: Quality management workflows
    date: "2026-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-test-generation-rules
    title: Set up quality inspection generation rules
    date: "2026-11-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/qms-configuring-grades
    - https://learn.microsoft.com/dynamics365/business-central/qms-quality-templates
    - https://learn.microsoft.com/dynamics365/business-central/qms-setup
    - https://learn.microsoft.com/dynamics365/business-central/qms-quality-workflows
    - https://learn.microsoft.com/dynamics365/business-central/qms-test-generation-rules
  objects:
    - object/page/20400
    - object/page/20402
    - object/page/20404
    - object/page/20408
    - object/page/20416
  features: []
  topics:
    - topic/business-central/business-functionality/quality-management
  localizations: []
  videos:
    - video/m8-7-JKq4dc
  posts: []
  guidelines: []
  changes:
    - change/bcapps/12322
    - change/bcapps/13104
    - change/bcapps/13428
    - change/bcapps/13429
learn_toc_path:
  - Business functionality
  - Quality management
  - Set up quality management
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/quality-management
children: []
coverage:
  learn: 5
  code: 5
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 20400
  - 20402
  - 20404
  - 20408
  - 20416
member_hash: 0b835c8efb8bf1fee131306fd1cddb7e9ca8638f0d59aefda81888621b014ad4
narrative: generated
---

# Set up quality management

> Setting up quality management in Business Central: installing and configuring the Quality Management extension, permission sets, inspection templates, results, generation rules, and workflows. It answers questions about initial deployment and how inspections are created and handled automatically.

Path: [Business functionality](../../business-functionality.md) > [Quality management](../quality-management.md) > Set up quality management · tier official · system inventory · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the setup work needed before quality inspections can run. It starts with the Quality Management extension itself: prerequisites, permission sets, base data and the trigger settings that let inspections be created automatically in purchase, production and warehouse processes.

## Key points

- Start with the setup and configuration page: it covers the Quality Management extension, prerequisites, permission sets and base data.
- Permission sets named in the setup: Quality Admin & Supervisor, Quality Inspector and Quality Auditor.
- Setup includes inspection creation options, search criteria for existing inspections, and triggers such as warehouse receipts.
- Inspection templates define the measurements and attributes to test. They can be created from scratch or copied and changed.
- Test value types include decimal, integer, boolean, text, date, options and table lookups, with pass/fail criteria and result conditions.
- Inspection results such as Pass, Fail and In Progress can be customized, including visibility, categories, evaluation sequence and lot blocking conditions.
- Generation rules pick the template and tests for production, purchase, warehouse and assembly transactions, using activation triggers and condition, item and attribute filters.
- Workflows react to inspection events with lot blocking and unblocking, inventory movement, negative adjustments and reinspection creation, based on result code conditions.

## Learn pages

- [Configure quality inspection results](https://learn.microsoft.com/dynamics365/business-central/qms-configuring-grades): Learn how to configure and manage quality inspection results, including result setup, priority rules, and business process integration.
- [Create quality inspection templates](https://learn.microsoft.com/dynamics365/business-central/qms-quality-templates): Learn how to create and configure quality inspection templates to streamline quality testing processes and ensure compliance with quality standards.
- [Quality management setup and configuration](https://learn.microsoft.com/dynamics365/business-central/qms-setup): Learn how to set up and configure quality management features, including prerequisites, initial setup steps, and common scenarios.
- [Quality management workflows](https://learn.microsoft.com/dynamics365/business-central/qms-quality-workflows): Learn how to automate quality management processes using workflows.
  - In the observatory: [Page 6505 "Lot No. Information Card"](../../../../objects/page/6505.md)
- [Set up quality inspection generation rules](https://learn.microsoft.com/dynamics365/business-central/qms-test-generation-rules): Learn how to configure inspection generation rules to automate quality inspections based on business transactions.
  - In the observatory: [Table 7317 "Warehouse Receipt Line"](../../../../objects/table/7317.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12322 [QM] Destination bin code is now visible and usable for the user](../../../../changes/bcapps/12322.md) (code change): "destination bin code is now visible and usable for the user"
- [#13104 update tests and enable them](../../../../changes/bcapps/13104.md) (code change): "Quality Result Condition Mgmt. and the Qlty. Inspection Result table is also revised"
- [#13428 [Quality Management] Keep Sample Size and Pass/Fail Quantity within Quantity (Base)](../../../../changes/bcapps/13428.md) (code change): "Quality Management inspections now enforce that Sample Size and Pass/Fail Quantity cannot exceed Quantity"
- [#13429 [Quality Management] Receiving setup guide: don't offer the warehouse receipt Create trigger](../../../../changes/bcapps/13429.md) (code change): "The Receiving setup guide now prevents creating Quality Management rules with unsupported warehouse receipt triggers"
- [Introducing: Quality Management (2026 release wave 1)](../../../../videos/m8-7-JKq4dc.md) (video): "configuration; quality templates; sampling; evaluation sequence"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 20400 "Qlty. Management Setup"](../../../../objects/page/20400.md) · captioned "Quality Management Setup" · on [Table 20400 "Qlty. Management Setup"](../../../../objects/table/20400.md)
- [Page 20402 "Qlty. Inspection Template"](../../../../objects/page/20402.md) · captioned "Quality Inspection Template" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../../objects/table/20402.md)
- [Page 20404 "Qlty. Inspection Template List"](../../../../objects/page/20404.md) · captioned "Quality Inspection Templates" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../../objects/table/20402.md)
- [Page 20408 "Qlty. Inspection List"](../../../../objects/page/20408.md) · captioned "Quality Inspections" · on [Table 20405 "Qlty. Inspection Header"](../../../../objects/table/20405.md)
- [Page 20416 "Qlty. Inspection Result List"](../../../../objects/page/20416.md) · captioned "Quality Inspection Results" · on [Table 20411 "Qlty. Inspection Result"](../../../../objects/table/20411.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
