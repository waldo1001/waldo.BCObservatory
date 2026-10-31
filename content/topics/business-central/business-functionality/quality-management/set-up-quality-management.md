---
id: topic/business-central/business-functionality/quality-management/set-up-quality-management
type: topic
title: Set up quality management
summary: Quality management setup in Business Central covers prerequisites, permissions, inspection results, templates, generation rules, and workflows. It answers questions about how to configure the module and automate inspections and responses to their outcomes.
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:07.373Z"
  flags: []
generated:
  at: "2026-10-31T01:06:04.529Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3fcf857418cb59b6a05cde773abd5ae8ddc7d00fb13abf8b3ddd2a298408d21f
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
    date: "2026-09-09"
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
    date: "2026-09-09"
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

> Quality management setup in Business Central covers prerequisites, permissions, inspection results, templates, generation rules, and workflows. It answers questions about how to configure the module and automate inspections and responses to their outcomes.

Path: [Business functionality](../../business-functionality.md) > [Quality management](../quality-management.md) > Set up quality management · tier official · system inventory · narrative reviewed (checked by Opus)

## Overview

This section describes the configuration steps for quality management. The setup and configuration page covers prerequisites, permission sets, base data, assisted setup, and settings for inspection creation, search criteria, workflows, and item tracking. Start there.

After the base setup, define the building blocks. Inspection results (such as Pass, Fail, and In Progress) set the possible outcomes, including visibility, categories, and lot blocking behavior. Inspection templates define the measurements and attributes to test, and the test value types they use.

Then connect these pieces to business activity. Generation rules decide when inspections are created automatically, for example on purchase receipts, production output, or warehouse movements. Workflows react to inspection events, such as blocking lots, moving inventory, or posting negative adjustments for nonconforming items.

## Key points

- Start with the setup and configuration page: prerequisites, permission sets, base data, and assisted setup.
- Setup settings include inspection creation options, search criteria, certificate of analysis contact, picture handling, and generation rule trigger defaults.
- Inspection results such as Pass, Fail, and In Progress can be customized, with result visibility, categories, evaluation sequence, and lot blocking conditions.
- Inspection templates define tests with value types: decimal, integer, boolean, text, date, options, and table lookups.
- Templates can be created from scratch or copied and modified; they include pass/fail criteria and result conditions.
- Generation rules map templates to sources, with sort order, condition, item, and attribute filters, and an activation trigger.
- Workflows can block or unblock lots, create inventory movements, post negative adjustments, and create reinspections based on result code conditions.

## Learn pages

- [Configure quality inspection results](https://learn.microsoft.com/dynamics365/business-central/qms-configuring-grades): Learn how to configure and manage quality inspection results, including result setup, priority rules, and business process integration.
- [Create quality inspection templates](https://learn.microsoft.com/dynamics365/business-central/qms-quality-templates): Learn how to create and configure quality inspection templates to streamline quality testing processes and ensure compliance with quality standards.
- [Quality management setup and configuration](https://learn.microsoft.com/dynamics365/business-central/qms-setup): Learn how to set up and configure quality management features, including prerequisites, initial setup steps, and common scenarios.
  - In the observatory: [Page 1518 "My Notifications"](../../../../objects/page/1518.md), [Page 1801 "Assisted Setup"](../../../../objects/page/1801.md)
- [Quality management workflows](https://learn.microsoft.com/dynamics365/business-central/qms-quality-workflows): Learn how to automate quality management processes using workflows.
  - In the observatory: [Page 6505 "Lot No. Information Card"](../../../../objects/page/6505.md)
- [Set up quality inspection generation rules](https://learn.microsoft.com/dynamics365/business-central/qms-test-generation-rules): Learn how to configure inspection generation rules to automate quality inspections based on business transactions.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12322 [QM] Destination bin code is now visible and usable for the user](../../../../changes/bcapps/12322.md) (code change): "destination bin code is now visible and usable for the user"
- [#13104 update tests and enable them](../../../../changes/bcapps/13104.md) (code change): "Quality inspection result configuration is adjusted. Test coverage for condition management is enhanced"
- [Introducing: Quality Management (2026 release wave 1)](../../../../videos/m8-7-JKq4dc.md) (video): "Quality Management Extension; Automatic Quality Test Triggering; Scheduled Quality Inspections"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 20400 "Qlty. Management Setup"](../../../../objects/page/20400.md) · captioned "Quality Management Setup" · on [Table 20400 "Qlty. Management Setup"](../../../../objects/table/20400.md)
- [Page 20402 "Qlty. Inspection Template"](../../../../objects/page/20402.md) · captioned "Quality Inspection Template" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../../objects/table/20402.md)
- [Page 20404 "Qlty. Inspection Template List"](../../../../objects/page/20404.md) · captioned "Quality Inspection Templates" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../../objects/table/20402.md)
- [Page 20408 "Qlty. Inspection List"](../../../../objects/page/20408.md) · captioned "Quality Inspections" · on [Table 20405 "Qlty. Inspection Header"](../../../../objects/table/20405.md)
- [Page 20416 "Qlty. Inspection Result List"](../../../../objects/page/20416.md) · captioned "Quality Inspection Results" · on [Table 20411 "Qlty. Inspection Result"](../../../../objects/table/20411.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
