---
id: topic/business-central/business-functionality/service-management/deliver-service
type: topic
title: Deliver service
summary: "Deliver service in Business Central Service Management covers the tasks for carrying out service work: creating quotes and orders, allocating resources, working on service tasks, lending loaners, posting, and invoicing. It answers how-to questions about each step of the service delivery flow."
tier: official
language: en
system: service
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:41.709Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3b5e4754ddf3d7de09324624dcc7d85553050e153a77c56ae6d2261e5656461f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-how-create-invoices
    title: Create invoices or credit memos for services
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-how-to-allocate-resources
    title: How to allocate resources | Microsoft Docs
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-how-to-create-service-orders
    title: How to create service orders
    date: "2026-03-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-how-to-create-service-quotes
    title: How to create service quotes
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-how-to-lend-receive-loaners
    title: How to lend service items as substitutes | Microsoft Docs
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-how-to-post-service-orders
    title: How to post service orders
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-how-to-work-on-service-tasks
    title: How to work on service tasks
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-deliver-service
    title: Overview of tasks to deliver service | Microsoft Docs
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-service-posting
    title: Service posting
    date: "2026-08-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/service-how-create-invoices
    - https://learn.microsoft.com/dynamics365/business-central/service-how-to-allocate-resources
    - https://learn.microsoft.com/dynamics365/business-central/service-how-to-create-service-orders
    - https://learn.microsoft.com/dynamics365/business-central/service-how-to-create-service-quotes
    - https://learn.microsoft.com/dynamics365/business-central/service-how-to-lend-receive-loaners
    - https://learn.microsoft.com/dynamics365/business-central/service-how-to-post-service-orders
    - https://learn.microsoft.com/dynamics365/business-central/service-how-to-work-on-service-tasks
    - https://learn.microsoft.com/dynamics365/business-central/service-deliver-service
    - https://learn.microsoft.com/dynamics365/business-central/service-service-posting
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
  - Deliver service
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/service-management
children: []
coverage:
  learn: 9
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 7174b41f6b45e6e16ff62885777291101f9ce8d40b7cf30c64adbeb33065702c
narrative: generated
---

# Deliver service

> Deliver service in Business Central Service Management covers the tasks for carrying out service work: creating quotes and orders, allocating resources, working on service tasks, lending loaners, posting, and invoicing. It answers how-to questions about each step of the service delivery flow.

Path: [Business functionality](../../business-functionality.md) > [Service management](../service-management.md) > Deliver service · tier official · system service · narrative reviewed by Opus

## Overview

Deliver service groups the pages that describe the day-to-day flow of handling a customer service request in Service Management. The flow starts with a service quote or service order, moves to resource allocation and the work itself, and ends with posting and invoicing. Loaner handling is a side task within service orders.

Start with the overview page, which lists the tasks in order. Then use the how-to pages for the step you need: service quotes, service orders, allocating resources, working on service tasks, lending service items as substitutes, and posting service orders. The service posting page explains what posting creates, and the invoice and credit memo page covers billing from contracts, orders, or manual entries.

## Key points

- Service quotes are preliminary drafts with customer, service item lines, and estimated costs, and can be converted to service orders.
- Service orders can be created from scratch, from quotes, or from contracts. They support standard service codes, item availability checks, item reservation, and line comments.
- Resources such as technicians are allocated through the Dispatch Board or service orders. You can view availability and reallocate.
- Work on service tasks includes registering service operations, spare parts, fault and resolution codes, replacing components, changing response time, and updating repair status.
- Service loaners can be lent and received through service orders, with loaner comments registered.
- Posting service orders covers shipment, invoice, and consumption, with batch posting, credit memo posting, and a test report. Partial posting is supported.
- Posting creates posted documents and ledger entries in service and other modules. The page also mentions sustainability value chain tracking.
- Service invoices and credit memos can be created for contracts, orders, or manual entries. You can combine posted shipment lines, delete invoices, and correct errors.

## Learn pages

- [Create invoices or credit memos for services](https://learn.microsoft.com/dynamics365/business-central/service-how-create-invoices): Learn how to create invoices and credit memos for your services.
- [How to allocate resources \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/service-how-to-allocate-resources): Adjust the annual amount on a service contract or contract quote to ensure the correct amount is invoiced each year.
- [How to create service orders](https://learn.microsoft.com/dynamics365/business-central/service-how-to-create-service-orders): Learn the different tasks involved in creating service orders in Business Central such as creating a new service order or orders based on a service contract.
- [How to create service quotes](https://learn.microsoft.com/dynamics365/business-central/service-how-to-create-service-quotes): Learn how to use a service quote as a preliminary draft for a service order, and then convert the quote to a service order.
- [How to lend service items as substitutes \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/service-how-to-lend-receive-loaners): Lend customers loaner items to temporarily substitute service items received for servicing.
- [How to post service orders](https://learn.microsoft.com/dynamics365/business-central/service-how-to-post-service-orders): After creating and updating a service order with all required details, you can proceed to post it.
- [How to work on service tasks](https://learn.microsoft.com/dynamics365/business-central/service-how-to-work-on-service-tasks): Manage service tasks in Business Central. Track orders, register spare parts, and maintain inventory from the centralized Service Tasks page.
- [Overview of tasks to deliver service \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/service-deliver-service): Provides an overview of essential tasks to ensure high-quality service delivery and fulfillment of customer agreements.
- [Service posting](https://learn.microsoft.com/dynamics365/business-central/service-service-posting): Service posting enables efficient processing of service documents and helps maintain a strong customer service policy.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
