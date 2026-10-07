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
  at: "2026-10-07T02:32:59.251Z"
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
  objects: []
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
  code: 0
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

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up project management · tier official · system projects · narrative reviewed by Opus

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

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 72, 76, 77, 203, 204, 211, 289, 290, 376, 462, 463, 946, 949, 977, 1012, 1029, 8904, 9014, 9015.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
