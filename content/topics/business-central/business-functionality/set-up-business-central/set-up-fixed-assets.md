---
id: topic/business-central/business-functionality/set-up-business-central/set-up-fixed-assets
type: topic
title: Set up fixed assets
summary: "Fixed assets setup in Business Central: general FA information, depreciation books and methods, user-defined depreciation tables, insurance, and maintenance. It answers questions about what to configure before registering and depreciating fixed assets, and where each setting lives."
tier: official
language: en
system: fixed-assets
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:03.141Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 46f0aa2fef8a4cac753d738f8f0a25bb4f0a1b8014f5f5e2f13983909d698cd0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-depreciation
    title: Set Up FA Depreciation
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-insurance
    title: Set Up FA Insurance
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-maintenance
    title: Set Up FA Maintenance
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-user-defined-depreciation-method
    title: Set Up FA User-Defined Depreciation Method
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/fa-setup
    title: Set up fixed assets
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-general
    title: Set Up General Fixed Assets (FA) Information
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-depreciation
    - https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-insurance
    - https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-maintenance
    - https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-user-defined-depreciation-method
    - https://learn.microsoft.com/dynamics365/business-central/fa-setup
    - https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-general
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Set up fixed assets
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5600
  - 5607
  - 5608
  - 5609
  - 5611
  - 5612
  - 5613
  - 5615
  - 5616
  - 5617
  - 5620
  - 5623
  - 5627
  - 5629
  - 5630
  - 5631
  - 5633
  - 5635
  - 5642
  - 5644
  - 5648
  - 5651
  - 5661
  - 5662
  - 9277
member_hash: e1e78567f7772b99118df09c4582828882dc9482e72bc90f276631dcc13fb6db
narrative: generated
---

# Set up fixed assets

> Fixed assets setup in Business Central: general FA information, depreciation books and methods, user-defined depreciation tables, insurance, and maintenance. It answers questions about what to configure before registering and depreciating fixed assets, and where each setting lives.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up fixed assets · tier official · system fixed-assets · narrative reviewed by Opus

## Overview

This section explains how to prepare Business Central to track fixed assets. It starts with an overview page listing the setup requirements: depreciation configuration, G/L account mappings, and optional insurance and maintenance setup, plus user-defined depreciation methods where needed.

The general FA information page covers the base infrastructure: default G/L accounts, posting groups, journal templates, asset classification (classes and subclasses), locations, allocation keys, and how to register the first assets. Depreciation setup builds on this with depreciation books, methods, posting types, and default templates. A separate page covers user-defined depreciation methods that use depreciation tables.

Insurance and maintenance pages are optional add-ons. Start with the overview page, then the general FA information page, then depreciation. Add insurance, maintenance, or user-defined methods only if your process needs them.

## Key points

- General FA setup covers default G/L accounts, posting groups, journal templates, asset classes and subclasses, locations, and allocation keys.
- Depreciation setup involves creating depreciation books, assigning them to assets, configuring posting types, and setting default templates.
- Depreciation methods mentioned include straight-line, declining-balance, manual, and user-defined; rounding in periodic depreciation is also covered.
- User-defined methods use depreciation tables with custom percentages per period, and support unit-based, sum of digits, or accelerated depreciation, with a depreciation starting date.
- Insurance setup includes general insurance information, insurance types and cards, and insurance journal templates and batches.
- Maintenance setup includes general information, maintenance codes for work types, and the maintenance expense account in posting groups.
- Insurance and maintenance setup are optional; depreciation and G/L mappings are required.

## Learn pages

- [Set Up FA Depreciation](https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-depreciation): Choose from multiple depreciation methods in Business Central, and configure each asset's depreciation method on the Fixed Asset Card page.
- [Set Up FA Insurance](https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-insurance): Configure insurance cards and policy details to manage fixed-asset insurance coverage.
- [Set Up FA Maintenance](https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-maintenance): Specify general maintenance information, maintenance codes for types of work, and a maintenance-expense posting account to manage fixed asset repairs and service.
- [Set Up FA User-Defined Depreciation Method](https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-user-defined-depreciation-method): Define an asset's depreciation in Business Central by selecting a user-defined depreciation method on the Fixed Asset Card page.
- [Set up fixed assets](https://learn.microsoft.com/dynamics365/business-central/fa-setup): Learn about the sequence of tasks to set up fixed assets, such as machinery or buildings.
- [Set Up General Fixed Assets (FA) Information](https://learn.microsoft.com/dynamics365/business-central/fa-how-setup-general): Configure default G/L accounts, FA posting groups, allocation keys, journal templates and batches, and class and subclass codes before using fixed assets.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 5600, 5607, 5608, 5609, 5611, 5612, 5613, 5615, 5616, 5617, 5620, 5623, 5627, 5629, 5630, 5631, 5633, 5635, 5642, 5644, 5648, 5651, 5661, 5662, 9277.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
