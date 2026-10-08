---
id: topic/business-central/business-functionality/set-up-business-central/set-up-project-management
type: topic
title: Set up project management
summary: Project management setup in Business Central covers resources, resource costs, prices and capacity, projects, project prices, project posting groups, and time sheets with approval. It answers questions about the configuration needed before projects can record usage, cost, and revenue.
tier: official
language: en
system: projects
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:52.101Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5e32a2ddf201870491f7e5e1716a53a640736a22680c43c90a2357bb048ed6c4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-how-setup-resources
    title: Set up project resource costs, prices, and capacity
    date: "2025-03-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-how-setup-jobs
    title: Set up projects, prices, and project posting groups
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-setup-projects
    title: Set Up Resources, Time Sheets, and Projects
    date: "2024-02-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/projects-how-setup-time-sheets
    title: Set up time sheets and their approval
    date: "2023-07-27"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/projects-how-setup-resources
    - https://learn.microsoft.com/dynamics365/business-central/projects-how-setup-jobs
    - https://learn.microsoft.com/dynamics365/business-central/projects-setup-projects
    - https://learn.microsoft.com/dynamics365/business-central/projects-how-setup-time-sheets
  objects:
    - object/page/72
    - object/page/76
    - object/page/77
    - object/page/203
    - object/page/204
    - object/page/211
    - object/page/289
    - object/page/290
    - object/page/376
    - object/page/462
    - object/page/463
    - object/page/946
    - object/page/949
    - object/page/977
    - object/page/1012
    - object/page/1029
    - object/page/8904
    - object/page/9014
    - object/page/9015
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
  - Set up project management
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central
children: []
coverage:
  learn: 4
  code: 19
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 72
  - 76
  - 77
  - 203
  - 204
  - 211
  - 289
  - 290
  - 376
  - 462
  - 463
  - 946
  - 949
  - 977
  - 1012
  - 1029
  - 8904
  - 9014
  - 9015
member_hash: 0ce5d30b9e50b88e4e92543a2007342e90704038cf2da46c8f3b8d940617e32b
narrative: generated
---

# Set up project management

> Project management setup in Business Central covers resources, resource costs, prices and capacity, projects, project prices, project posting groups, and time sheets with approval. It answers questions about the configuration needed before projects can record usage, cost, and revenue.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up project management · tier official · system projects · narrative reviewed (checked by Opus)

## Overview

This section describes the initial configuration for project management. It has four pages. One covers resources, time sheets, and projects as a general starting point. One covers resource costs, prices, and capacity. One covers projects, prices, and posting groups. The last covers time sheets and their approval.

Start with the page on resources, time sheets, and projects for an overview of the initial setup: resources, time sheet configuration, and project cards. Then use the resource page to define costs, prices, capacity, and resource groups. Use the project page to set prices for resources, items, and G/L accounts, to set up project posting groups so cost and revenue are recognized, and to configure usage link tracking. The time sheet page covers time registration and approval, set up either through the assisted setup guide or manually.

## Key points

- Resource setup covers capacity, alternate costs, alternate prices, cost adjustment, and price changes.
- Resource setup also includes resource groups and multiple user posting.
- Project prices can be set for resources, items, and G/L accounts.
- Project posting groups link projects to G/L accounts for cost and revenue recognition.
- Usage link tracking is part of the project setup.
- Time sheets are enabled with the Use Time Sheet checkbox, and approval options include Time Sheet by Job Approval.
- Time sheet setup uses fields such as the Time Sheet Admin checkbox, Time Sheet Owner User ID, and Time Sheet Approver User ID.
- Time sheets can be set up through an assisted setup guide or manually. The page mentions a Use New Time Sheet Experience option and references 2023 release wave 1.

## Learn pages

- [Set up project resource costs, prices, and capacity](https://learn.microsoft.com/dynamics365/business-central/projects-how-setup-resources): To use resources and facilitate project management, you specify costs and prices for individual resources or resource groups, and set the resource capacity.
- [Set up projects, prices, and project posting groups](https://learn.microsoft.com/dynamics365/business-central/projects-how-setup-jobs): Describes how to set up general information about projects.
- [Set Up Resources, Time Sheets, and Projects](https://learn.microsoft.com/dynamics365/business-central/projects-setup-projects): This topic outlines how to set up resources, time sheets, to manage projects and their budgets.
- [Set up time sheets and their approval](https://learn.microsoft.com/dynamics365/business-central/projects-how-setup-time-sheets): Learn how to use time sheets to track time for projects and resources.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 72 "Resource Groups"](../../../../objects/page/72.md) · on [Table 152 "Resource Group"](../../../../objects/table/152.md)
- [Page 76 "Resource Card"](../../../../objects/page/76.md) · on [Table 156 "Resource"](../../../../objects/table/156.md)
- [Page 77 "Resource List"](../../../../objects/page/77.md) · captioned "Resources" · on [Table 156 "Resource"](../../../../objects/table/156.md)
- [Page 203 "Resource Costs"](../../../../objects/page/203.md) · on [Table 202 "Resource Cost"](../../../../objects/table/202.md)
- [Page 204 "Resource Prices"](../../../../objects/page/204.md) · on [Table 201 "Resource Price"](../../../../objects/table/201.md)
- [Page 211 "Job Posting Groups"](../../../../objects/page/211.md) · captioned "Project Posting Groups" · on [Table 208 "Job Posting Group"](../../../../objects/table/208.md)
- [Page 289 "Recurring Job Jnl."](../../../../objects/page/289.md) · captioned "Recurring Project Journal" · on [Table 210 "Job Journal Line"](../../../../objects/table/210.md)
- [Page 290 "Recurring Resource Jnl."](../../../../objects/page/290.md) · captioned "Recurring Resource Journal" · on [Table 207 "Res. Journal Line"](../../../../objects/table/207.md)
- [Page 376 "Job Journal Reconcile"](../../../../objects/page/376.md) · captioned "Project Journal Reconcile" · on [Table 278 "Job Journal Quantity"](../../../../objects/table/278.md)
- [Page 462 "Resources Setup"](../../../../objects/page/462.md) · on [Table 314 "Resources Setup"](../../../../objects/table/314.md)
- [Page 463 "Jobs Setup"](../../../../objects/page/463.md) · captioned "Projects Setup" · on [Table 315 "Jobs Setup"](../../../../objects/table/315.md)
- [Page 946 "Time Sheet Line List"](../../../../objects/page/946.md) · captioned "Time Sheet Lines" · on [Table 951 "Time Sheet Line"](../../../../objects/table/951.md)
- [Page 949 "Time Sheet Lines"](../../../../objects/page/949.md) · on [Table 951 "Time Sheet Line"](../../../../objects/table/951.md)
- [Page 977 "Time Sheet Setup Wizard"](../../../../objects/page/977.md) · captioned "Set Up Time Sheets"
- [Page 1012 "Job Item Prices"](../../../../objects/page/1012.md) · captioned "Project Item Prices" · on [Table 1013 "Job Item Price"](../../../../objects/table/1013.md)
- [Page 1029 "Job Invoices"](../../../../objects/page/1029.md) · captioned "Project Invoices" · on [Table 1022 "Job Planning Line Invoice"](../../../../objects/table/1022.md)
- [Page 8904 "Project Manager Role Center"](../../../../objects/page/8904.md)
- [Page 9014 "Job Resource Manager RC"](../../../../objects/page/9014.md) · captioned "Resource Manager"
- [Page 9015 "Job Project Manager RC"](../../../../objects/page/9015.md) · captioned "Project Manager"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
