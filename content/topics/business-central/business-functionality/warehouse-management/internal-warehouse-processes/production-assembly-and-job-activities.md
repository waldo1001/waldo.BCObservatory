---
id: topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes/production-assembly-and-job-activities
type: topic
title: Production, assembly, and job activities
summary: Internal warehouse handling of production, assembly, and project (job) activities in Business Central. It answers questions about picking or moving components, putting away output, and how basic and advanced warehouse configurations differ for these flows.
tier: official
language: en
system: projects
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:05.521Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8f0fad6ab9f55c47b695722c4bae8989ca80f5961b5b1e1c5e04f60322fd582f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/design-details-internal-warehouse-flows
    title: Design details - flows for production, assembly, and projects
    date: "2024-08-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-for-internal-operations-in-advanced-warehousing
    title: Pick for internal operations in advanced warehouse configurations
    date: "2025-03-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-for-production
    title: Pick or move items for production, assembly, or projects in basic warehouse configurations
    date: "2025-03-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-away-production-output
    title: Put away production output
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/design-details-internal-warehouse-flows
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-for-internal-operations-in-advanced-warehousing
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-for-production
    - https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-away-production-output
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
  - Production, assembly, and job activities
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/warehouse-management/internal-warehouse-processes
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: f54a71fbc19392186d1a21b293ab4005bb29a2795b5a91338063fe40a6236bd4
narrative: generated
---

# Production, assembly, and job activities

> Internal warehouse handling of production, assembly, and project (job) activities in Business Central. It answers questions about picking or moving components, putting away output, and how basic and advanced warehouse configurations differ for these flows.

Path: [Business functionality](../../../business-functionality.md) > [Warehouse management](../../warehouse-management.md) > [Internal warehouse processes](../internal-warehouse-processes.md) > Production, assembly, and job activities · tier official · system projects · narrative reviewed by Opus

## Overview

This area covers how items move inside the warehouse for production, assembly, and projects. It describes two complexity levels: basic configurations that use inventory picks, inventory movements, and inventory put-aways, and advanced configurations that use warehouse picks, warehouse put-aways, and movements with directed put-away and pick.

Start with the design details page, which explains the flows and the options that shape them, such as whether bin code is mandatory and the to-production bin code. Then go to the page that matches your setup: pick or move items in basic configurations, pick for internal operations in advanced configurations, or put away production output.

The pick pages cover component flushing and over-picking. The put-away page covers output from production and assembly.

## Key points

- Flows range from basic order-by-order picks and put-aways to advanced directed activities that consolidate operations across multiple source documents.
- Basic configurations use inventory picks and inventory movements for components; a pick posts consumption immediately, while a movement needs separate consumption posting.
- Advanced configurations use warehouse pick documents, created in push or pull fashion, with directed put-away and pick determining bin selection.
- Bin ranking and cross-dock bins are involved in advanced bin selection.
- Component flushing method and over-picking affect the pick workflow in both basic and advanced setups.
- Production and assembly output is put away with inventory put-aways (basic) or warehouse put-aways and movements (advanced).
- The bin code mandatory setting and the to-production bin code are design options that shape the flows.
- The same flow concepts apply to production, assembly, and project consumption.

## Learn pages

- [Design details - flows for production, assembly, and projects](https://learn.microsoft.com/dynamics365/business-central/design-details-internal-warehouse-flows): Learn about the flow between bins for picking components and putting away end items for assembly, production, or project orders.
- [Pick for internal operations in advanced warehouse configurations](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-for-internal-operations-in-advanced-warehousing): If your locations use picking and shipping, pick components for production, assembly, and project activities on the Warehouse Pick page.
- [Pick or move items for production, assembly, or projects in basic warehouse configurations](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-pick-for-production): When your warehouse location requires that you process picks but not shipments, use the Inventory Pick page to record that components were picked.
- [Put away production output](https://learn.microsoft.com/dynamics365/business-central/warehouse-how-to-put-away-production-output): This article describes how to put away your production output.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
