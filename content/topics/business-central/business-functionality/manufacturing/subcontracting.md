---
id: topic/business-central/business-functionality/manufacturing/subcontracting
type: topic
title: Subcontracting
summary: "Subcontracting in Business Central manufacturing: how to delegate production operations to vendors. It answers questions about subcontracting purchase orders, the worksheet, component supply and transfers, item charges on receipts, and WIP transfers between subcontractors."
tier: official
language: en
system: manufacturing
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:24.212Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f4d10a0fc526fbcc1d4ecd6217c3d5622ca4cdc32940d4ef83a2635283c02c11
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/subcontract-item-charges
    title: Assign item charges to subcontracting receipts
    date: "2026-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/subcontract-components
    title: Manage components in subcontracting
    date: "2026-07-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/subcontract-order
    title: Order subcontracting
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/production-how-to-subcontract-manufacturing
    title: Subcontracting overview
    date: "2026-07-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/subcontract-wip-transfers
    title: Transfer WIP items between subcontractors
    date: "2026-09-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/subcontract-item-charges
    - https://learn.microsoft.com/dynamics365/business-central/subcontract-components
    - https://learn.microsoft.com/dynamics365/business-central/subcontract-order
    - https://learn.microsoft.com/dynamics365/business-central/production-how-to-subcontract-manufacturing
    - https://learn.microsoft.com/dynamics365/business-central/subcontract-wip-transfers
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/manufacturing
  localizations: []
  videos:
    - video/QdWPlIV3Avk
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Manufacturing
  - Subcontracting
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/manufacturing
children: []
coverage:
  learn: 5
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 50
  - 5805
  - 99000788
  - 99000818
  - 99000831
  - 99000886
  - 99001503
  - 99001504
  - 99001560
  - 99001561
member_hash: 8804d1e1e312778270052de9bb1bb419afd19d29bc6190f8ee024c281b5de3e0
narrative: generated
---

# Subcontracting

> Subcontracting in Business Central manufacturing: how to delegate production operations to vendors. It answers questions about subcontracting purchase orders, the worksheet, component supply and transfers, item charges on receipts, and WIP transfers between subcontractors.

Path: [Business functionality](../../business-functionality.md) > [Manufacturing](../manufacturing.md) > Subcontracting · tier official · system manufacturing · narrative reviewed by Opus

## Overview

Subcontracting covers manufacturing operations that a vendor performs on your behalf. You can work with basic tools, or use the extended Subcontracting app, which adds a worksheet, subcontractor prices, component management, item charges and location management.

Start with the Subcontracting overview to see which capabilities apply. Then read Order subcontracting to create purchase orders from production order routings, directly or through the worksheet. Manage components in subcontracting covers how components reach the vendor, and Assign item charges to subcontracting receipts covers extra costs. Transfer WIP items between subcontractors is for multi-stage processes with more than one subcontractor.

## Key points

- Subcontracting purchase orders are created from production order routing operations, directly or via the subcontracting worksheet.
- Orders support comments, attachments, WIP tracking, and cost posting through the capacity ledger.
- Receiving can use inventory put-away or warehouse receipts.
- Component supply methods include vendor-supplied components, consignment at vendor, and transfer to vendor.
- Transfer orders, location assignment, flushing methods, and returns are part of component handling.
- Item charges such as transport, packaging, and testing can be assigned to subcontracting receipts, using the Get Receipt Lines function.
- Assigned item charges go into production order costs through capacity ledger entries rather than inventory.
- WIP items can be transferred between subcontractor locations using a Transfer WIP item flag, with WIP ledger entries, WIP quantity adjustment, transfer mode selection, and in-transit codes.

## Learn pages

- [Assign item charges to subcontracting receipts](https://learn.microsoft.com/dynamics365/business-central/subcontract-item-charges): Learn how to assign item charges such as transport and packaging costs to subcontracting purchase receipts for accurate production order costing.
- [Manage components in subcontracting](https://learn.microsoft.com/dynamics365/business-central/subcontract-components): Learn how component supply methods determine how you handle components, assign locations, create transfer orders and returns, and how flushing works.
- [Order subcontracting](https://learn.microsoft.com/dynamics365/business-central/subcontract-order): Learn how to create subcontracting purchase orders from production orders or by using the subcontracting worksheet, and how to print dispatch lists.
- [Subcontracting overview](https://learn.microsoft.com/dynamics365/business-central/production-how-to-subcontract-manufacturing): Get an overview of subcontracting capabilities for manufacturing, including subcontractor prices, component posting, transfer orders, and location management.
- [Transfer WIP items between subcontractors](https://learn.microsoft.com/dynamics365/business-central/subcontract-wip-transfers): Learn how to transfer work-in-progress (WIP) items between subcontractors using transfer orders, track WIP quantities in a dedicated ledger, and adjust or clean up WIP quantities.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's new in SCM: Subcontracting (2026 release wave 2)](../../../../videos/QdWPlIV3Avk.md) (video): "Subcontracting extension; Component supply method; Vendor location tracking"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 50, 5805, 99000788, 99000818, 99000831, 99000886, 99001503, 99001504, 99001560, 99001561.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
