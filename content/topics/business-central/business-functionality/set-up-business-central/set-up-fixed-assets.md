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
  at: "2026-10-08T00:04:31.553Z"
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
  objects:
    - object/page/5600
    - object/page/5607
    - object/page/5608
    - object/page/5609
    - object/page/5611
    - object/page/5612
    - object/page/5613
    - object/page/5615
    - object/page/5616
    - object/page/5617
    - object/page/5620
    - object/page/5623
    - object/page/5627
    - object/page/5629
    - object/page/5630
    - object/page/5631
    - object/page/5633
    - object/page/5635
    - object/page/5642
    - object/page/5644
    - object/page/5648
    - object/page/5651
    - object/page/5661
    - object/page/5662
    - object/page/9277
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
  code: 25
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

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up fixed assets · tier official · system fixed-assets · narrative reviewed (checked by Opus)

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

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5600 "Fixed Asset Card"](../../../../objects/page/5600.md) · on [Table 5600 "Fixed Asset"](../../../../objects/table/5600.md)
- [Page 5607 "Fixed Asset Setup"](../../../../objects/page/5607.md) · on [Table 5603 "FA Setup"](../../../../objects/table/5603.md)
- [Page 5608 "FA Posting Type Setup"](../../../../objects/page/5608.md) · on [Table 5604 "FA Posting Type Setup"](../../../../objects/table/5604.md)
- [Page 5609 "FA Journal Setup"](../../../../objects/page/5609.md) · on [Table 5605 "FA Journal Setup"](../../../../objects/table/5605.md)
- [Page 5611 "Depreciation Book List"](../../../../objects/page/5611.md) · captioned "Depreciation Books" · on [Table 5611 "Depreciation Book"](../../../../objects/table/5611.md)
- [Page 5612 "FA Posting Group Card"](../../../../objects/page/5612.md) · on [Table 5606 "FA Posting Group"](../../../../objects/table/5606.md)
- [Page 5613 "FA Posting Groups"](../../../../objects/page/5613.md) · on [Table 5606 "FA Posting Group"](../../../../objects/table/5606.md)
- [Page 5615 "FA Classes"](../../../../objects/page/5615.md) · on [Table 5607 "FA Class"](../../../../objects/table/5607.md)
- [Page 5616 "FA Subclasses"](../../../../objects/page/5616.md) · on [Table 5608 "FA Subclass"](../../../../objects/table/5608.md)
- [Page 5617 "FA Locations"](../../../../objects/page/5617.md) · on [Table 5609 "FA Location"](../../../../objects/table/5609.md)
- [Page 5620 "Fixed Asset Picture"](../../../../objects/page/5620.md) · on [Table 5600 "Fixed Asset"](../../../../objects/table/5600.md)
- [Page 5623 "FA Allocations"](../../../../objects/page/5623.md) · on [Table 5615 "FA Allocation"](../../../../objects/table/5615.md)
- [Page 5627 "FA Registers"](../../../../objects/page/5627.md) · on [Table 5617 "FA Register"](../../../../objects/table/5617.md)
- [Page 5629 "Fixed Asset Journal"](../../../../objects/page/5629.md) · captioned "Fixed Asset Journals" · on [Table 5621 "FA Journal Line"](../../../../objects/table/5621.md)
- [Page 5630 "FA Journal Templates"](../../../../objects/page/5630.md) · on [Table 5619 "FA Journal Template"](../../../../objects/table/5619.md)
- [Page 5631 "FA Journal Template List"](../../../../objects/page/5631.md) · on [Table 5619 "FA Journal Template"](../../../../objects/table/5619.md)
- [Page 5633 "FA Journal Batches"](../../../../objects/page/5633.md) · on [Table 5620 "FA Journal Batch"](../../../../objects/table/5620.md)
- [Page 5635 "FA Posting Types"](../../../../objects/page/5635.md) · on [Table 5644 "FA Posting Type"](../../../../objects/table/5644.md)
- [Page 5642 "Maintenance"](../../../../objects/page/5642.md) · on [Table 5626 "Maintenance"](../../../../objects/table/5626.md)
- [Page 5644 "Insurance Card"](../../../../objects/page/5644.md) · on [Table 5628 "Insurance"](../../../../objects/table/5628.md)
- [Page 5648 "Insurance Types"](../../../../objects/page/5648.md) · on [Table 5630 "Insurance Type"](../../../../objects/table/5630.md)
- [Page 5651 "Insurance Journal"](../../../../objects/page/5651.md) · captioned "Fixed Asset Insurance Journals" · on [Table 5635 "Insurance Journal Line"](../../../../objects/table/5635.md)
- [Page 5661 "FA Date Types"](../../../../objects/page/5661.md) · on [Table 5645 "FA Date Type"](../../../../objects/table/5645.md)
- [Page 5662 "FA Posting Types Overview"](../../../../objects/page/5662.md) · on [Table 5600 "Fixed Asset"](../../../../objects/table/5600.md)
- [Page 9277 "FA Posting Types Overv. Matrix"](../../../../objects/page/9277.md) · on [Table 5612 "FA Depreciation Book"](../../../../objects/table/5612.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
