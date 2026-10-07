---
id: topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/warehouse-counting
type: topic
title: Warehouse counting
summary: Warehouse counting in Business Central covers physical inventory counts, adjustments and reclassification using orders, recordings and journals. It answers questions about cycle counting, bin-level counts, adjustment bins and how warehouse adjustments reconcile with the item ledger.
tier: official
language: en
system: warehouse
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:45.452Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c4a3d46db8dc053a95e0d812f5d3e1d6ca8e938099fe223e7a21c35c0a3dda62
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-inventory-with-documents
    title: Count and adjust inventory
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-adjust-reclassify
    title: Count, adjust, and reclassify inventory
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-integration-with-inventory
    title: Design Details - Integration with Inventory
    date: "2021-06-15"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-inventory-with-documents
    - https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-adjust-reclassify
    - https://learn.microsoft.com/dynamics365/business-central/design-details-integration-with-inventory
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Warehouse management
  - Internal warehouse processes
  - Warehouse counting
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 1b126813e48c79ebb2e4528e6ebb21a6bfa82718febdbf6573f935403dbcd944
narrative: generated
---

# Warehouse counting

> Warehouse counting in Business Central covers physical inventory counts, adjustments and reclassification using orders, recordings and journals. It answers questions about cycle counting, bin-level counts, adjustment bins and how warehouse adjustments reconcile with the item ledger.

Path: [Business functionality](../../../business-functionality.md) > [Warehouse management](../../warehouse-management.md) > [Internal warehouse processes](../internal-warehouse-processes.md) > Warehouse counting · tier official · system warehouse · narrative reviewed by Opus

## Overview

This area describes how to count inventory and correct differences between counted and recorded quantities. Two working approaches appear: physical inventory orders with inventory recordings, which organize a full counting project by item, location and bin, and journals used for counts, adjustments and reclassification.

A third page is a design reference. It explains how physical inventory and warehouse adjustments connect the item ledger and warehouse bin tracking, using the Whse. Phys. Inventory Journal, the Item Journal and default adjustment bins.

Start with "Count and adjust inventory" for the document-based process, or "Count, adjust, and reclassify inventory" for the journal-based process including cycle counting. Read the design details page to understand how posting reconciles quantities.

## Key points

- Physical inventory orders and inventory recordings organize complete counting projects and track counted quantities by item, location and bin.
- The document-based process integrates with item tracking and includes duplicate line detection.
- The 'Count and adjust inventory' page also covers inventory receipts and inventory shipments.
- The journal-based process covers physical inventory counts, adjustments and reclassification, including cycle counting periods and expected inventory calculation.
- Warehouse entries can be synchronized with the item ledger.
- Adjustment bins are used to reconcile counted quantities at bin level.
- The Whse. Phys. Inventory Journal and Item Journal work together with a default adjustment bin to post warehouse adjustments to the item ledger.

## Learn pages

- [Count and adjust inventory](https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-inventory-with-documents): Describes how to count physical inventory and use inventory documents to adjust on-hand inventory.
- [Count, adjust, and reclassify inventory](https://learn.microsoft.com/dynamics365/business-central/inventory-how-count-adjust-reclassify): Learn how to do physical counting and make adjustments and reclassifications.
- [Design Details - Integration with Inventory](https://learn.microsoft.com/dynamics365/business-central/design-details-integration-with-inventory): The Warehouse Management and the Inventory application area interact with one another in physical inventory and in inventory or warehouse adjustment.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
