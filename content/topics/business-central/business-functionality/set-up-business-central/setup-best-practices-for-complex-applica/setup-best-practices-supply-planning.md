---
id: topic/business-central/business-functionality/set-up-business-central/setup-best-practices-for-complex-applica/setup-best-practices-supply-planning
type: topic
title: "Setup best practices: Supply planning"
summary: "Setup best practices for supply planning in Business Central: how to configure reordering policies, item-level planning parameters, and global planning setup. It answers questions about which policy suits which items, which fields to set, and how to avoid stockouts while controlling inventory cost."
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:26:02.904Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 12bc560e71b77d694bf8c282fad77b9a5970bd1c86a8fa40c5fc5f2af1d03f29
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-global-planning-setup
    title: Best practices for global planning setup
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-planning-parameters
    title: Setup best practices - Planning parameters
    date: "2025-03-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-reordering-policies
    title: Setup best practices - Reordering policies | Microsoft Docs
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-supply-planning
    title: Setup Best Practices - Supply Planning
    date: "2021-06-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-global-planning-setup
    - https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-planning-parameters
    - https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-reordering-policies
    - https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-supply-planning
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central/setup-best-practices-for-complex-applica
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Setup best practices for complex application areas
  - "Setup best practices: Supply planning"
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central/setup-best-practices-for-complex-applica
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 5aae02ffbda02229208dd2eefe3bd75c71f026f6b5c82e4597a0789366c388f6
narrative: generated
---

# Setup best practices: Supply planning

> Setup best practices for supply planning in Business Central: how to configure reordering policies, item-level planning parameters, and global planning setup. It answers questions about which policy suits which items, which fields to set, and how to avoid stockouts while controlling inventory cost.

Path: [Business functionality](../../../business-functionality.md) > [Set up Business Central](../../set-up-business-central.md) > [Setup best practices for complex application areas](../setup-best-practices-for-complex-applica.md) > Setup best practices: Supply planning · tier official · system inventory · narrative reviewed by Opus

## Overview

Supply planning setup in Business Central depends on a small set of fields spread across three places: reordering policies, planning parameters on the item card, and the global planning setup. The goal in the pages is cost-effective inventory flow without stockouts, balancing working capital against service levels.

The section has an introductory page that frames the topic (reordering policies, planning parameters, global planning setup, lead time, carrying costs, demand patterns). Three detail pages follow. One covers reordering policies, one covers planning parameters on item cards, and one covers global settings such as forecast usage and dampeners.

Start with the introductory page, then read the reordering policies page to choose a policy per item class. Next, set item-level parameters, and finally review the global planning setup that applies across items and locations.

## Key points

- Reordering policy guidance is tied to ABC classification: Order for A items, Lot-for-Lot for B items, and Fixed Reorder Qty or Maximum Qty for C items.
- Item card planning parameters include reordering policy, reserve, dampener period, include inventory, safety lead time, and safety stock quantity.
- Reorder points, safety stock, and lot accumulation settings are set to balance working capital and service levels.
- Global planning setup covers forecast on locations, forecast on variants, and overflow level.
- Dampener period and dampener quantity are part of global planning setup; dampener period also appears among the item card planning parameters.
- Global setup includes a components at location default for manufacturing planning.
- The overview page links lead time management, carrying costs, and demand patterns to these setup choices.

## Learn pages

- [Best practices for global planning setup](https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-global-planning-setup): The Planning FastTab in the Manufacturing Setup page contains several fields that define global rules for supply planning.
- [Setup best practices - Planning parameters](https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-planning-parameters): This topic outlines best practices on how to set up selected planning parameter fields with the Planning FastTab on the item card.
- [Setup best practices - Reordering policies \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-reordering-policies): The Reordering Policy field on item cards offers four different planning methods that determine how the individual planning parameters interact.
- [Setup Best Practices - Supply Planning](https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-supply-planning): When set up and used correctly, supply planning helps a company avoid stock out and reduce both ordering costs and inventory costs.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
