---
id: topic/business-central/business-functionality/design-details/design-details-warehouse-management
type: topic
title: "Design details: Warehouse management"
summary: "Warehouse management design details in Business Central: how availability to pick and to reserve is calculated from bin content, allocations and reservations, and how warehouse entries are created and numbered. It answers questions about warehouse quantity mechanics and entry creation."
tier: official
language: en
system: warehouse
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:35.729Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cc52b4fbc6f01d0bfb80c4ad88e5e1fbb21e6805171776b76ad3048e75751f07
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-availability-in-the-warehouse
    title: Design details - Availability in the warehouse
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-warehouse-entries
    title: Design details - Creating warehouse entries
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/design-details-availability-in-the-warehouse
    - https://learn.microsoft.com/dynamics365/business-central/design-details-warehouse-entries
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/design-details
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Design details
  - "Design details: Warehouse management"
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/design-details
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 9ccdd9e7e9bad805088944decb0326d86609c8ea8f5410293df87f6fb89326ee
narrative: generated
---

# Design details: Warehouse management

> Warehouse management design details in Business Central: how availability to pick and to reserve is calculated from bin content, allocations and reservations, and how warehouse entries are created and numbered. It answers questions about warehouse quantity mechanics and entry creation.

Path: [Business functionality](../../business-functionality.md) > [Design details](../design-details.md) > Design details: Warehouse management · tier official · system warehouse · narrative reviewed by Opus

## Overview

This section explains two internal mechanics of warehouse management. The first page covers availability in the warehouse: how bin content, warehouse reservations, pick allocations and bin level allocations affect the quantity available to pick and the quantity available to reserve, taking warehouse activities and outbound flows into account.

The second page covers how warehouse entries are created. Entries record item movements within a warehouse, are produced by warehouse transactions and are linked to warehouse registers. The ConcurrentWarehousingPosting feature key decides whether entry numbers are sequential or concurrent.

There are no subtopics. Start with the availability page if you are investigating why quantities cannot be picked or reserved, and with the entries page if you are looking at posting, numbering or register behavior.

## Key points

- Available-to-pick and available-to-reserve quantities are calculated with warehouse activities and outbound flows taken into account.
- Item allocations and warehouse reservations affect how much can be picked or reserved.
- Bin content tracking, pick allocation and bin level allocation are explained as part of warehouse availability.
- Warehouse entries track item movements within a warehouse, are created by warehouse transactions and are linked to warehouse registers.
- The ConcurrentWarehousingPosting feature key controls whether entry numbers are sequential or concurrent.
- Sequence numbers are covered as part of how warehouse entries are numbered.

## Learn pages

- [Design details - Availability in the warehouse](https://learn.microsoft.com/dynamics365/business-central/design-details-availability-in-the-warehouse): Learn about the different factors that affect item availability in your warehouse.
- [Design details - Creating warehouse entries](https://learn.microsoft.com/dynamics365/business-central/design-details-warehouse-entries): Learn how to allow concurrent numbering for warehouse register records and warehouse entries.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
