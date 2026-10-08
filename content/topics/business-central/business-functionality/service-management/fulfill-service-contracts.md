---
id: topic/business-central/business-functionality/service-management/fulfill-service-contracts
type: topic
title: Fulfill service contracts
summary: Fulfill service contracts in Business Central Service management covers creating service contracts and contract quotes, managing contract lines and lifecycle, changing annual amounts, and handling service items under multiple contracts. It answers how-to questions about contract setup and maintenance.
tier: official
language: en
system: service
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:42.119Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 74a969519915acbf65f3454627a4ada643e59b538c564ee899b5178b16c66bea
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-how-to-change-the-annual-amount-on-service-contracts-or-contract-quotes
    title: Change the annual amount on service contracts or contract quotes
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-how-to-create-service-contracts-and-service-contract-quotes
    title: How to work with service contracts and service contract quotes | Microsoft Docs
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-multiple-contracts
    title: Multiple contracts | Microsoft Docs
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/service-fulfill-service-contracts
    title: Overview of tasks to fulfill service contracts
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/service-how-to-change-the-annual-amount-on-service-contracts-or-contract-quotes
    - https://learn.microsoft.com/dynamics365/business-central/service-how-to-create-service-contracts-and-service-contract-quotes
    - https://learn.microsoft.com/dynamics365/business-central/service-multiple-contracts
    - https://learn.microsoft.com/dynamics365/business-central/service-fulfill-service-contracts
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/service-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10129
    - change/bcapps/10345
    - change/bcapps/10867
learn_toc_path:
  - Business functionality
  - Service management
  - Fulfill service contracts
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
member_hash: 914eb680d273dddca1cbc41f40548f44a5987219dbdd6efff202e15098b2df69
narrative: generated
---

# Fulfill service contracts

> Fulfill service contracts in Business Central Service management covers creating service contracts and contract quotes, managing contract lines and lifecycle, changing annual amounts, and handling service items under multiple contracts. It answers how-to questions about contract setup and maintenance.

Path: [Business functionality](../../business-functionality.md) > [Service management](../service-management.md) > Fulfill service contracts · tier official · system service · narrative reviewed (checked by Opus)

## Overview

This section explains how to set up and maintain service contracts, which are standard agreements that define service levels for customers. It has no subtopics. The four pages cover the task overview, the main contract and quote workflow, annual amount changes, and multiple contracts per service item.

Start with the overview page for the list of tasks. Then read the page on working with service contracts and contract quotes for creation, templates, lines, price updates, discounts and status handling. Use the annual amount page when a new amount differs from the calculated one, and the multiple contracts page when one service item needs separate coverage.

## Key points

- Service contracts and contract quotes can be created, using contract templates, and contain contract lines.
- Contract lifecycle includes signing, locking, and cancellation, tracked through contract status.
- Price updates and contract discounts are handled on contracts.
- The annual amount can be changed on a contract or quote.
- Differences between the new and calculated annual amount can be distributed evenly, by line amount, or by profit.
- A service item can be under multiple contracts to service parts separately.
- Multiple contracts allow different response times, skill requirements, and service frequencies.
- Contract copying is mentioned as part of working with multiple contracts.

## Learn pages

- [Change the annual amount on service contracts or contract quotes](https://learn.microsoft.com/dynamics365/business-central/service-how-to-change-the-annual-amount-on-service-contracts-or-contract-quotes): Learn how to update the annual invoiced amount on service contracts or contract quotes in Business Central.
- [How to work with service contracts and service contract quotes \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/service-how-to-create-service-contracts-and-service-contract-quotes): Create service contracts manually or from service contract quotes. You can generate a contract directly from an approved quote.
- [Multiple contracts \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/service-multiple-contracts): You may need to manage a service item under multiple service contracts based on your agreements with customers.
- [Overview of tasks to fulfill service contracts](https://learn.microsoft.com/dynamics365/business-central/service-fulfill-service-contracts): Outlines tasks involved in fulfilling service contracts with your customers like setting up standard contractual agreements with customizable templates and more.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10129 [Extensibility Request] issue 30342: allow skipping blocked item checks](../../../../changes/bcapps/10129.md) (code change): "Service contract invoicing now allows extensions to skip blocked item and service item validation"
- [#10345 [Main][ALL-E]Issues with Service Contract Invoicing and Retrospective Billing--when the second unposted Service Invoice is deleted the values on the Service Contract are no longer reset--The "Invoiced to Date" field does not resetInitial commit](../../../../changes/bcapps/10345.md) (code change): "Invoiced to Date field on service contracts failed to reset when a second unposted service invoice was deleted"
- [#10867 [29.x][ALL-E]Issues with Service Contract Invoicing and Retrospective Billing--when the second unposted Service Invoice is deleted the values on the Service Contract are no longer reset--The "Invoiced to Date" field does not resetInitial commit- #10345Initial commit](../../../../changes/bcapps/10867.md) (code change): "Fixed Service Contract invoicing to properly reset the Invoiced to Date field"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
