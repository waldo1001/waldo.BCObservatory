---
id: topic/business-central/business-functionality/service-management/planning-service
type: topic
title: Planning service
summary: Planning service in Business Central Service Management covers service pricing, repair status, allocation status, and how service order status derives from item repair statuses. It answers questions about how prices are applied to service orders and how statuses change as work progresses or resources are reallocated.
tier: official
language: en
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:51.104Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b47066612964600b3dad45e112f6ede25251ec623b70e8a68563a44be3567efe
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-allocation-status-and-repair-status
    title: Allocation status and repair status | Microsoft Docs
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-plan-service
    title: Planning service processes
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-service-order-status-and-repair-status
    title: Service order status and repair status
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-service-price-management
    title: Service price management
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/service-allocation-status-and-repair-status
    - https://learn.microsoft.com/dynamics365/business-central/service-plan-service
    - https://learn.microsoft.com/dynamics365/business-central/service-service-order-status-and-repair-status
    - https://learn.microsoft.com/dynamics365/business-central/service-service-price-management
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/service-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Service management
  - Planning service
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/service-management
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 0431133b34f21ddbafb46042603c6d14100fd9d0073e697a9023c73810bc6a50
narrative: generated
---

# Planning service

> Planning service in Business Central Service Management covers service pricing, repair status, allocation status, and how service order status derives from item repair statuses. It answers questions about how prices are applied to service orders and how statuses change as work progresses or resources are reallocated.

Path: [Business functionality](../../business-functionality.md) > [Service management](../service-management.md) > Planning service · tier official · system inventory · narrative reviewed by Opus

## Overview

Planning service groups the pages that explain how service work is planned and tracked in Service Management. They cover service pricing, setting up service items and groups, repair status, allocation status, and service statistics.

The pages fit together in two parts. Service price management explains how the best price is applied to service orders through price groups and price adjustments. The status pages explain how repair status and allocation status of service items behave, and how the repair statuses of all items in an order determine the service order status.

Start with the "Planning service processes" page for the overview. Then go to "Service price management" for pricing questions, or to "Allocation status and repair status" and "Service order status and repair status" for status questions.

## Key points

- Service price management applies the best price to service orders using service price groups and service price adjustments.
- Price adjustment covers fixed price, maximum price, and minimum price, and applies to items, resources, and costs.
- Repair status codes and allocation status of service items are tracked and related to each other.
- Status changes when repair work is completed, partly serviced, or reallocated to different resources.
- Service quotes can be converted to service orders, which affects status handling.
- Service order status is determined from the linked repair statuses of all service items, using priority levels.
- Planning also includes setting up service items and service groups, and analyzing service statistics.

## Learn pages

- [Allocation status and repair status \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/service-allocation-status-and-repair-status): Learn about the relationship between the repair status of service items and the allocation status of the allocation entries for them.
- [Planning service processes](https://learn.microsoft.com/dynamics365/business-central/service-plan-service): Learn how to configure rules and values to establish your organization's service policies and processes.
- [Service order status and repair status](https://learn.microsoft.com/dynamics365/business-central/service-service-order-status-and-repair-status): The service order status shows the overall repair status of all service items included in the order.
- [Service price management](https://learn.microsoft.com/dynamics365/business-central/service-service-price-management): Service price management lets you set up service price groups, service pricing, service pricing adjustment and more.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
