---
id: topic/business-central/business-functionality/quality-management
type: topic
title: Quality management
summary: Quality management in Business Central is a Microsoft-published extension for automatic, manual, and scheduled quality inspections in purchasing, production, assembly, and warehouse processes. This section answers questions about setup, working with inspections, blocking lots, handling failed items, scheduling, and troubleshooting.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-06T14:23:48.815Z"
  flags: []
generated:
  at: "2026-10-06T14:24:07.451Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3b5a57d32e1e8afcebf53095eb243c840c16d374fbe9326669a88046ec0f4892
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
  objects: []
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
  code: 0
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

> Quality management in Business Central is a Microsoft-published extension for automatic, manual, and scheduled quality inspections in purchasing, production, assembly, and warehouse processes. This section answers questions about setup, working with inspections, blocking lots, handling failed items, scheduling, and troubleshooting.

Path: [Business functionality](../business-functionality.md) > Quality management · tier official · system none · narrative reviewed by Opus

## Overview

Quality Management is an extension that creates quality inspections at key points in purchasing, production, assembly, and warehouse processes. Inspections can be created automatically, manually, or on a schedule, and they use templates. Noncompliant lots can be blocked, and workflows can be integrated.

The pages follow the order of the work. Start with the overview, then go to the "Set up quality management" subtopic. It covers prerequisites, permission sets, assisted setup, inspection results, inspection templates, and generation rules. After setup, "Work with quality inspections" explains how to create, assign, perform, and finish inspections. "Create scheduled quality inspections" covers inspections triggered at time intervals through job queue entries.

Once inspections produce results, "Block or unblock lots" and "Process items that failed a quality inspection" describe what to do with the affected stock. "Troubleshoot quality management features" groups common problems by feature area, so use it when inspections are not generated or behave unexpectedly.

## Key points

- Quality Management is a Microsoft-published extension. It supports inspections that are created automatically, manually, or on a schedule.
- Setup covers prerequisites, permission sets, assisted setup, inspection results, inspection templates, and generation rules. Do this before inspections are created.
- Working with inspections: create them from templates, source records, or automatic triggers. You can assign owners, enter test values, finish inspections, print reports, and create reinspections.
- Scheduled inspections use job queue entries and recurring job scheduling. They suit proactive checks such as shelf life monitoring.
- Lots, serial numbers, and packages can be blocked or unblocked through workflows or based on inspection results. Document-specific restrictions apply to sales, transfers, and other transactions.
- Failed items can be handled by blocking lots, moving to quarantine, creating transfers or returns, removing inventory with negative adjustments, or reclassifying item tracking.
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

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 20400, 20402, 20404, 20406, 20407, 20408, 20416.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
