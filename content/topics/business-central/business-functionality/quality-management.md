---
id: topic/business-central/business-functionality/quality-management
type: topic
title: Quality management
summary: Quality management in Business Central is a Microsoft-published extension for automatic, manual, and scheduled quality inspections in purchasing, production, assembly, and warehouse processes. It answers questions about performing inspections, blocking lots, handling failed items, setup, and troubleshooting.
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:49.464Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 18a8b0533e77fa9e185b2fa87a528b3a06b716b0080569094da61a1d2c9ea4ee
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-lot-blocking-unblocking
    title: Block or unblock lots
    date: "2026-09-16"
    commit: null
    t: null
    quote: null
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
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-scheduled-test-creation
    title: Create scheduled quality inspections
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-non-compliant-processing
    title: Process items that failed a quality inspection
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-overview
    title: Quality management overview
    date: "2026-09-07"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-troubleshooting
    title: Troubleshoot quality management features
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/qms-manual-test-creation
    title: Work with quality inspections
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/qms-lot-blocking-unblocking
    - https://learn.microsoft.com/dynamics365/business-central/qms-scheduled-test-creation
    - https://learn.microsoft.com/dynamics365/business-central/qms-non-compliant-processing
    - https://learn.microsoft.com/dynamics365/business-central/qms-overview
    - https://learn.microsoft.com/dynamics365/business-central/qms-troubleshooting
    - https://learn.microsoft.com/dynamics365/business-central/qms-manual-test-creation
  objects:
    - object/page/20400
    - object/page/20402
    - object/page/20404
    - object/page/20406
    - object/page/20407
    - object/page/20408
    - object/page/20416
  features: []
  topics:
    - topic/business-central/business-functionality
    - topic/business-central/business-functionality/quality-management/set-up-quality-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Quality management
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality
children:
  - topic/business-central/business-functionality/quality-management/set-up-quality-management
coverage:
  learn: 11
  code: 7
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 20400
  - 20402
  - 20404
  - 20406
  - 20407
  - 20408
  - 20416
member_hash: 8bcda7c163c47956ca13c81b9031f735b11077e38a452e73e2b4f0f5def74c9a
narrative: generated
---

# Quality management

> Quality management in Business Central is a Microsoft-published extension for automatic, manual, and scheduled quality inspections in purchasing, production, assembly, and warehouse processes. It answers questions about performing inspections, blocking lots, handling failed items, setup, and troubleshooting.

Path: [Business functionality](../business-functionality.md) > Quality management · tier official · system inventory · narrative reviewed by Opus

## Overview

Quality Management is an extension that creates quality inspections at key points in purchasing, production, assembly, and warehouse processes. Inspections can be created automatically, manually, or on a schedule, and they use templates to define the tests. Results can trigger actions such as blocking noncompliant lots and running workflows.

Start with the overview page to see what the extension does. The Set up quality management subtopic (base setup and permissions, inspection results, templates, generation rules, workflows) covers configuration. After setup, "Work with quality inspections" explains the daily tasks: assigning, entering test values, finishing, printing reports, and reinspecting.

Further pages cover what happens after an inspection. They describe scheduled inspections through job queue entries, blocking and unblocking lots, and processing items that failed. A troubleshooting page groups common issues by feature area.

## Key points

- The extension creates inspections automatically, manually, or on a schedule, and uses templates for inspections.
- Working with inspections: assign owners, enter test values, calculate results, finish, print reports, and create reinspections.
- Scheduled inspections run at regular time intervals through job queue entries, for example for shelf life monitoring.
- Lots, serial numbers, and packages can be blocked or unblocked by workflows or by inspection results, with document-specific restrictions for sales, transfers, and other transactions.
- Failed items can be handled by blocking lots, moving to quarantine, creating transfer orders or purchase returns, making negative adjustments, or changing item tracking.
- Setup covers base setup and permissions, inspection results, templates, generation rules, and workflows.
- The troubleshooting page covers setup, generation rules, scheduled inspections, workflows, templates, warehouse receipt and production output inspections, manual creation, and lot blocking.

## Subtopics

- [Set up quality management](quality-management/set-up-quality-management.md) (5 pages)

## More Learn pages

- [Block or unblock lots](https://learn.microsoft.com/dynamics365/business-central/qms-lot-blocking-unblocking): Learn how to block and unblock inventory lots using workflows and grade-specific controls to ensure quality compliance.
- [Create scheduled quality inspections](https://learn.microsoft.com/dynamics365/business-central/qms-scheduled-test-creation): Learn how to set up and use scheduled quality inspection tests to ensure proactive quality management through automated, time-based test creation.
- [Process items that failed a quality inspection](https://learn.microsoft.com/dynamics365/business-central/qms-non-compliant-processing): Learn how to handle noncompliant items, including workflows, inventory movements, and actions for failed quality inspections.
- [Quality management overview](https://learn.microsoft.com/dynamics365/business-central/qms-overview): Learn how to use quality management to ensure product quality through automated and manual inspections, lot results, and workflow integration.
- [Troubleshoot quality management features](https://learn.microsoft.com/dynamics365/business-central/qms-troubleshooting): Learn how to troubleshoot common issues in quality management, from setup to workflows, and resolve problems with inspections, templates, and lot blocking.
- [Work with quality inspections](https://learn.microsoft.com/dynamics365/business-central/qms-manual-test-creation): Learn how to create, assign, complete, print, reopen, and repeat quality inspections in Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 20400 "Qlty. Management Setup"](../../../objects/page/20400.md) · captioned "Quality Management Setup" · on [Table 20400 "Qlty. Management Setup"](../../../objects/table/20400.md)
- [Page 20402 "Qlty. Inspection Template"](../../../objects/page/20402.md) · captioned "Quality Inspection Template" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../objects/table/20402.md)
- [Page 20404 "Qlty. Inspection Template List"](../../../objects/page/20404.md) · captioned "Quality Inspection Templates" · on [Table 20402 "Qlty. Inspection Template Hdr."](../../../objects/table/20402.md)
- [Page 20406 "Qlty. Inspection"](../../../objects/page/20406.md) · captioned "Quality Inspection" · on [Table 20405 "Qlty. Inspection Header"](../../../objects/table/20405.md)
- [Page 20407 "Qlty. Inspection Subform"](../../../objects/page/20407.md) · captioned "Quality Inspection Subform" · on [Table 20406 "Qlty. Inspection Line"](../../../objects/table/20406.md)
- [Page 20408 "Qlty. Inspection List"](../../../objects/page/20408.md) · captioned "Quality Inspections" · on [Table 20405 "Qlty. Inspection Header"](../../../objects/table/20405.md)
- [Page 20416 "Qlty. Inspection Result List"](../../../objects/page/20416.md) · captioned "Quality Inspection Results" · on [Table 20411 "Qlty. Inspection Result"](../../../objects/table/20411.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
