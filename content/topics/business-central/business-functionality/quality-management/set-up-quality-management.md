---
id: topic/business-central/business-functionality/quality-management/set-up-quality-management
type: topic
title: Set up quality management
summary: Setting up quality management in Business Central covers base setup and permissions, inspection results, inspection templates, generation rules, and workflows. It answers questions about configuring how quality inspections are created, evaluated, and acted on.
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:26.153Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0f21eed4c2e16526a2446f81fdf6422db5be8c130c297e2efd20ff948c66bb4d
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
    date: "2026-09-09"
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
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/quality-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Quality management
  - Set up quality management
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/quality-management
children: []
coverage:
  learn: 5
  code: 0
  video: 0
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

> Setting up quality management in Business Central covers base setup and permissions, inspection results, inspection templates, generation rules, and workflows. It answers questions about configuring how quality inspections are created, evaluated, and acted on.

Path: [Business functionality](../../business-functionality.md) > [Quality management](../quality-management.md) > Set up quality management · tier official · system none · narrative reviewed by Opus

## Overview

This section describes the configuration needed before quality inspections can run. It starts with the general setup page, which covers prerequisites, permission sets, base data, assisted setup, and settings for inspection creation, search criteria, workflows, and item tracking.

The remaining pages build the pieces of the inspection process. Inspection results define the possible outcomes, such as Pass, Fail, and In Progress. Inspection templates define the tests, allowable values, pass/fail conditions, and sample sources. Generation rules link templates to business transactions so inspections are created automatically. Workflows then react to inspection events, for example by blocking a lot or moving inventory.

Start with the setup and configuration page, then configure results and templates, and finish with generation rules and workflows, which depend on them.

## Key points

- The setup page covers prerequisites, permission sets, base data, assisted setup, and settings for inspection creation, search criteria, item tracking, and picture handling.
- Setup also includes a certificate of analysis contact and generation rule trigger defaults.
- Inspection results such as Pass, Fail, and In Progress can be extended with custom results, with settings for visibility, categories, evaluation sequence, and lot blocking.
- Inspection templates hold the template code, description, test value types, allowable values, result conditions, and sample source configuration. A template can be copied.
- Generation rules automatically create inspections from transactions such as purchase receipts, production output, and warehouse movements.
- Generation rules use sort order, template-to-source mapping, condition, item, and attribute filters, and an activation trigger.
- Workflows can block and unblock lots, move inventory, post negative adjustments, and create reinspections based on result code conditions.

## Learn pages

- [Configure quality inspection results](https://learn.microsoft.com/dynamics365/business-central/qms-configuring-grades): Learn how to configure and manage quality inspection results, including result setup, priority rules, and business process integration.
- [Create quality inspection templates](https://learn.microsoft.com/dynamics365/business-central/qms-quality-templates): Learn how to create and configure quality inspection templates to streamline quality testing processes and ensure compliance with quality standards.
- [Quality management setup and configuration](https://learn.microsoft.com/dynamics365/business-central/qms-setup): Learn how to set up and configure quality management features, including prerequisites, initial setup steps, and common scenarios.
- [Quality management workflows](https://learn.microsoft.com/dynamics365/business-central/qms-quality-workflows): Learn how to automate quality management processes using workflows.
- [Set up quality inspection generation rules](https://learn.microsoft.com/dynamics365/business-central/qms-test-generation-rules): Learn how to configure inspection generation rules to automate quality inspections based on business transactions.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 20400, 20402, 20404, 20408, 20416.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
