---
id: topic/business-central/business-functionality/set-up-business-central/setup-best-practices-for-complex-applica
type: topic
title: Setup best practices for complex application areas
summary: Setup best practices for complex Business Central application areas, mainly costing methods and supply planning. It answers questions about which costing method or reordering policy fits which items and business environment, and which setup fields to configure.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:03.450Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f0ebdc379bedfdb0478cfac27f13d4403fe380f864f12f7c712e7b14efb5737c
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-global-planning-setup
    title: Best practices for global planning setup
    date: "2026-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/set-up-complex-application-areas-using-best-practices
    title: Set Up Complex Application Areas Using Best Practices
    date: "2026-06-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-costing-method
    title: Setup best practices - Costing method
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
    - https://learn.microsoft.com/dynamics365/business-central/set-up-complex-application-areas-using-best-practices
    - https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-costing-method
  objects:
    - object/page/30
    - object/page/31
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central
    - topic/business-central/business-functionality/set-up-business-central/setup-best-practices-for-complex-applica/setup-best-practices-supply-planning
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Setup best practices for complex application areas
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central
children:
  - topic/business-central/business-functionality/set-up-business-central/setup-best-practices-for-complex-applica/setup-best-practices-supply-planning
coverage:
  learn: 6
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 30
  - 31
member_hash: aeeca4e558fa2f2977ab40f4c79bf5dedc780cacae3165eb31e0d88a613e66df
narrative: generated
---

# Setup best practices for complex application areas

> Setup best practices for complex Business Central application areas, mainly costing methods and supply planning. It answers questions about which costing method or reordering policy fits which items and business environment, and which setup fields to configure.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Setup best practices for complex application areas · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section collects guidance for areas of Business Central where setup choices have lasting effects on cost and inventory. An introductory page frames the best practices approach and points to the specific areas: costing methods and supply planning.

The costing method page explains that the method determines how cost flow is recorded and capitalized. It matches methods to item type and business environment. The methods covered are FIFO, LIFO, Average, Specific and Standard.

The supply planning subtopic covers reordering policies, item-level planning parameters and global planning setup. It helps you choose a policy for each kind of item, decide which fields to set, and avoid stockouts while controlling inventory cost. Start with the introductory page, then go to the costing or planning page that matches your setup task.

## Key points

- The section covers two complex areas: costing methods and supply planning.
- Costing method setup determines how cost flow is recorded and capitalized.
- Costing methods covered: FIFO, LIFO, Average, Specific and Standard.
- FIFO suits stable costs, Average suits unstable costs, and Standard suits cost control.
- Choose the costing method according to item type and business environment.
- Supply planning guidance covers reordering policies, item-level planning parameters and global planning setup.
- Planning setup aims to avoid stockouts while controlling inventory cost.

## Subtopics

- [Setup best practices: Supply planning](setup-best-practices-for-complex-applica/setup-best-practices-supply-planning.md) (4 pages)

## More Learn pages

- [Set Up Complex Application Areas Using Best Practices](https://learn.microsoft.com/dynamics365/business-central/set-up-complex-application-areas-using-best-practices): Entering the correct setup values from the start is important to the success of any new business software.
- [Setup best practices - Costing method](https://learn.microsoft.com/dynamics365/business-central/setup-best-practices-costing-method): The Costing Method on the item card defines item's cost flow is recorded and whether an actual or budgeted value is capitalized and used in the cost calculation.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 30 "Item Card"](../../../../objects/page/30.md) · on [Table 27 "Item"](../../../../objects/table/27.md)
- [Page 31 "Item List"](../../../../objects/page/31.md) · captioned "Items" · on [Table 27 "Item"](../../../../objects/table/27.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
