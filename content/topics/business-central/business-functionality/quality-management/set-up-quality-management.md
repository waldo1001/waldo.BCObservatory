---
id: topic/business-central/business-functionality/quality-management/set-up-quality-management
type: topic
title: Set up quality management
summary: "Setting up quality management in Business Central: prerequisites, permission sets, assisted setup, inspection results, inspection templates, and generation rules. It answers questions about configuring the module before inspections are created and which settings control how inspections are generated."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T14:24:07.451Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bcb7d27482c48748a237223000fcbffad2c0189711d496978ac07b4764e68825
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

> Setting up quality management in Business Central: prerequisites, permission sets, assisted setup, inspection results, inspection templates, and generation rules. It answers questions about configuring the module before inspections are created and which settings control how inspections are generated.

Path: [Business functionality](../../business-functionality.md) > [Quality management](../quality-management.md) > Set up quality management · tier official · system none · **unreviewed** (machine-generated narrative)

## Overview

This section covers the configuration work needed before quality inspections can be used. It has four pages: general setup, inspection results, inspection templates, and generation rules. There are no subtopics.

Start with "Quality management setup and configuration". It covers prerequisites, permission sets, base data, assisted setup, and settings for inspection creation, search criteria, workflows, and item tracking. Then define the possible outcomes on the results page (Pass, Fail, In Progress, and custom results). Next, build templates that define the tests, pass/fail criteria, and sample sources. Finally, set up generation rules that tie templates to business transactions such as purchase receipts, production output, and warehouse movements, so inspections are created automatically.

## Key points

- General setup covers prerequisites, permission sets, base data configuration, and assisted setup.
- Setup settings include inspection creation options, inspection search criteria, certificate of analysis contact, picture handling, and generation rule trigger defaults.
- Inspection results such as Pass, Fail, and In Progress define possible outcomes; custom results can be created.
- Results have settings for evaluation sequence, visibility, categories, and lot blocking conditions.
- Inspection templates hold the template code and description, test value types, allowable values, result conditions, and sample source configuration.
- Templates can be copied to speed up creating similar ones.
- Generation rules create inspections automatically for purchase receipts, production output, and warehouse movements.
- Generation rules use sort order, template-to-source mapping, condition, item, and attribute filters, and an activation trigger.

## Learn pages

- [Configure quality inspection results](https://learn.microsoft.com/dynamics365/business-central/qms-configuring-grades): Learn how to configure and manage quality inspection results, including result setup, priority rules, and business process integration.
- [Create quality inspection templates](https://learn.microsoft.com/dynamics365/business-central/qms-quality-templates): Learn how to create and configure quality inspection templates to streamline quality testing processes and ensure compliance with quality standards.
- [Quality management setup and configuration](https://learn.microsoft.com/dynamics365/business-central/qms-setup): Learn how to set up and configure quality management features, including prerequisites, initial setup steps, and common scenarios.
- [Quality management workflows](https://learn.microsoft.com/dynamics365/business-central/qms-quality-workflows): Learn how to automate quality management processes using workflows.
- [Set up quality inspection generation rules](https://learn.microsoft.com/dynamics365/business-central/qms-test-generation-rules): Learn how to configure inspection generation rules to automate quality inspections based on business transactions.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 20400, 20402, 20404, 20408, 20416.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
