---
id: topic/business-central/business-functionality/local-functionality/italy/inventory
type: topic
title: Inventory
summary: Italy inventory functionality in Business Central covers fiscal inventory valuation setup and entry of initial item costs from before implementation. It answers questions about valuation methods, item costing setup, LIFO categories and the Before Start Item Cost page.
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:04:00.152Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 263aa3e53b34a27b4271cd6e88d0ef7c698f995e826078be2d82fdbc15b7119a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-fiscal-inventory-valuation
    title: Set Up Fiscal Inventory Valuation in the Italian Version [IT]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-initial-item-costs
    title: Set Up Initial Item Costs in the Italian Version [IT]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-fiscal-inventory-valuation
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-initial-item-costs
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/italy
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Italy
  - Inventory
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/italy
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: e19d906b823f5513a01f73e1fee56d949e52c6e94ec5cbee939a2bfa4d815edd
narrative: generated
---

# Inventory

> Italy inventory functionality in Business Central covers fiscal inventory valuation setup and entry of initial item costs from before implementation. It answers questions about valuation methods, item costing setup, LIFO categories and the Before Start Item Cost page.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > Inventory · tier official · system inventory · narrative reviewed (checked by Opus)

## Overview

This section covers two setup tasks specific to the Italian version of Business Central. Both support fiscal inventory valuation, which is the calculation of inventory value for Italian fiscal purposes.

The first page explains how to configure item costing setup and assign a valuation method to each item. The second explains how to use the Before Start Item Cost page to enter historical item costs and quantities from before Business Central was implemented, so fiscal valuation calculations have a starting basis.

Start with the fiscal inventory valuation page to set the methods and costing setup. Then use the initial item costs page to load historical data if you are moving from an earlier system.

## Key points

- Fiscal inventory valuation is set up through item costing setup plus a valuation method on each item.
- Valuation-related features include Components Valuation, Estimated WIP Consumption, Inventory Valuation, Discrete LIFO and Lifo Category.
- The Before Start Item Cost page holds historical item costs and quantities from before Business Central was implemented.
- Initial cost data feeds fiscal valuation calculations.
- Cost fields on the Before Start Item Cost page include Direct Components Amount, Direct Routing Amount, Overhead Routing Amount, Subcontracted Amount and Production Amount.
- Both pages apply only to the Italian version.

## Learn pages

- [Set Up Fiscal Inventory Valuation in the Italian Version [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-fiscal-inventory-valuation): Learn how to set up fiscal inventory valuation for item costing in the Italian version of Business Central using the Item Costing Setup feature.
  - In the observatory: [Page 12137 "Item Costing Setup (IT)"](../../../../../objects/page/12137-it.md)
- [Set Up Initial Item Costs in the Italian Version [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-initial-item-costs): Learn how to set up initial item costs using the Before Start Item Cost page in the Italian version of Business Central.
  - In the observatory: [Page 12117 "Before Start Item Cost (IT)"](../../../../../objects/page/12117-it.md), [Page 12118 "Item Cost History List (IT)"](../../../../../objects/page/12118-it.md), [Report 12115 "Calculate End Year Costs (IT)"](../../../../../objects/report/12115-it.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
