---
id: topic/business-central/business-functionality/set-up-business-central/set-up-inventory
type: topic
title: Set up inventory
summary: "Inventory setup in Business Central: general inventory parameters, item cards and types, units of measure, categories, pictures, locations, stockkeeping units and responsibility centers. It answers how to configure and maintain the master data that inventory runs on."
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:44.974Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4a9447bc81c51e01009f342c71b5fd8e96065ef6e92a92b65f9c2035c942656f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-register-new-items
    title: Create item cards for goods or services
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-copy-items
    title: How to Copy Existing Items to New Items
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-to-set-up-stockkeeping-units
    title: How to set up stockkeeping units
    date: "2026-06-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-responsibility-centers
    title: How to work with responsibility centers
    date: "2024-05-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-import-item-pictures
    title: Import Multiple Item Pictures
    date: "2026-01-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-categorize-items
    title: Organize items in categories
    date: "2024-06-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-setup-general
    title: Set up general inventory information
    date: "2025-11-05"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-setup-units-of-measure
    title: Set up item units of measure
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-setup-locations
    title: Set up locations
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-setup-inventory
    title: Setting up inventory
    date: "2024-06-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-about-item-types
    title: Understand item types
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-register-new-items
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-copy-items
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-to-set-up-stockkeeping-units
    - https://learn.microsoft.com/dynamics365/business-central/inventory-responsibility-centers
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-import-item-pictures
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-categorize-items
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-setup-general
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-setup-units-of-measure
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-setup-locations
    - https://learn.microsoft.com/dynamics365/business-central/inventory-setup-inventory
    - https://learn.microsoft.com/dynamics365/business-central/inventory-about-item-types
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central
  localizations: []
  videos:
    - video/X3xygXmgRqU
  posts:
    - post/mohana-blog/tag:blogger.com,1999:blog-1492436440038408053.post-7926273720702299683
    - post/sauravdhyani-com/tag:blogger.com,1999:blog-3122193036149030463.post-2583765754742144129
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Set up inventory
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central
children: []
coverage:
  learn: 11
  code: 0
  video: 1
  blog: 2
  guideline: 0
bc_forms:
  - 30
  - 31
  - 32
  - 35
  - 346
  - 456
  - 461
  - 1378
  - 1383
  - 1384
  - 5401
  - 5404
  - 5716
  - 5717
  - 5718
  - 5719
  - 5720
  - 5730
  - 5733
  - 5845
  - 9091
  - 9297
member_hash: 3945346150bcce19c1c62ca93c44424ca5a1e733e39daa4c46f98e575b6fc900
narrative: generated
---

# Set up inventory

> Inventory setup in Business Central: general inventory parameters, item cards and types, units of measure, categories, pictures, locations, stockkeeping units and responsibility centers. It answers how to configure and maintain the master data that inventory runs on.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up inventory · tier official · system inventory · narrative reviewed by Opus

## Overview

This section covers the setup work that prepares Business Central to manage inventory. It starts with company-wide policies on the Inventory Setup page, such as automatic cost posting, cost adjustment, average cost calculation and the default costing method. It then moves to the master data: items, units of measure, categories, locations and stockkeeping units.

For items, one page explains the three item types (Inventory, Non-Inventory, Service) and another covers creating item cards, including costing methods, pricing, replenishment, variants and substitutions. Further pages show how to copy existing items, organize items in categories with attributes, and bulk import item pictures from a ZIP file.

Location-related pages cover locations with bins, zones and transfer routes, stockkeeping units for location- and variant-specific data, and responsibility centers for administrative units assigned to users. Start with "Setting up inventory" for the overview, then Inventory Setup, item types and item cards.

## Key points

- The Inventory Setup page sets Automatic Cost Posting, Automatic Cost Adjustment, Expected Cost Posting to G/L, Average Cost Calculation, Default Costing Method and concurrent posting.
- Items have one of three types: Inventory, Non-Inventory or Service, and the type determines which costing, tracking and other features apply.
- Item cards cover costing methods, pricing and discounts, replenishment, variants, substitutions, vendor data and item templates.
- The Copy Item function creates new items from existing ones, using number series for item numbers.
- Item units of measure include a base unit, alternate units, translations, rounding precision and defaults for sales and purchasing.
- Locations support bins (bin mandatory toggle, bin policies), zones, transfer routes, direct transfer and default dimensions.
- Stockkeeping units hold location and variant specific data, including production BOM and routing overrides and manufacturing policy.
- Responsibility centers act like cost or profit centers, can be assigned to users with a default, and filter sales, purchase and service documents.

## Learn pages

- [Create item cards for goods or services](https://learn.microsoft.com/dynamics365/business-central/inventory-how-register-new-items): You create item cards for services that you sell as hours and for physical products. Examples include assembly items and finished goods that you sell from your inventory.
- [How to Copy Existing Items to New Items](https://learn.microsoft.com/dynamics365/business-central/inventory-how-copy-items): When you add a new item, to save time, you can use the Copy Item function to copy an existing item to use as a template for a new item.
- [How to set up stockkeeping units](https://learn.microsoft.com/dynamics365/business-central/inventory-how-to-set-up-stockkeeping-units): Use stockkeeping units to record information about your items for a specific location or a specific variant.
- [How to work with responsibility centers](https://learn.microsoft.com/dynamics365/business-central/inventory-responsibility-centers): Responsibility center as administrative centers help companies set up user-specific views of sales and purchase documents related exclusively to each center.
- [Import Multiple Item Pictures](https://learn.microsoft.com/dynamics365/business-central/inventory-how-import-item-pictures): To import multiple item pictures give picture files names corresponding to item numbers, compress them to a ZIP file, and use the Import Item Pictures page.
- [Organize items in categories](https://learn.microsoft.com/dynamics365/business-central/inventory-how-categorize-items): To help you search for and find items, you can assign item attributes and organize items in categories.
- [Set up general inventory information](https://learn.microsoft.com/dynamics365/business-central/inventory-how-setup-general): Describes how to define the general inventory setup so that you can manage your warehouse and stock.
- [Set up item units of measure](https://learn.microsoft.com/dynamics365/business-central/inventory-how-setup-units-of-measure): You can set up multiple units of measure for items.
- [Set up locations](https://learn.microsoft.com/dynamics365/business-central/inventory-how-setup-locations): If you buy, store, or sell items in more than one place, you can set up each place as a location.
- [Setting up inventory](https://learn.microsoft.com/dynamics365/business-central/inventory-setup-inventory): Describes how to set up your stock and inventory processes, including transfer routes and locations, such as warehouses.
- [Understand item types](https://learn.microsoft.com/dynamics365/business-central/inventory-about-item-types): Learn about the types of items you can manage in inventory.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Define Item Attributes for Item Variants](../../../../posts/mohana-blog/tag:blogger.com,1999:blog-1492436440038408053.post-7926273720702299683.md) (community post): "Define Item Attributes for Item Variants. Business Central 2026 release wave 1 (BC28) introduces item attributes at the variant level"
- [How Business Central 2026 Improves Item Variant Management with Pictures and Attributes.](../../../../posts/sauravdhyani-com/tag:blogger.com,1999:blog-3122193036149030463.post-2583765754742144129.md) (community post): "Attributes can be defined at the variant level so each variant maintains distinct values"
- [How to Set Up Locations in Business Central (2025)](../../../../videos/X3xygXmgRqU.md) (video): "Multiple Locations Setup; Intransit Locations; Transfer Routes"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 30, 31, 32, 35, 346, 456, 461, 1378, 1383, 1384, 5401, 5404, 5716, 5717, 5718, 5719, 5720, 5730, 5733, 5845, 9091, 9297.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
