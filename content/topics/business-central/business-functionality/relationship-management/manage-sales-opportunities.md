---
id: topic/business-central/business-functionality/relationship-management/manage-sales-opportunities
type: topic
title: Manage sales opportunities
summary: "Sales opportunity management in Business Central: setting up sales cycles and stages, creating opportunities for contacts and salespeople, processing them to quotes, orders or closure, and logging email exchanges. It answers how-to questions on each step of an opportunity's life."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:29.578Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bd4f89031530908fcf7dacd5dc15bf91475b555ed3f84f9ced7dd66e310820dc
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-opportunities
    title: Create Sales Opportunities
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-manage-sales-opportunities
    title: Manage sales opportunities and leads
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-processing-sales-opportunities
    title: Process sales opportunities in sales cycles
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-set-up-email-logging
    title: Set up email logging
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-how-setup-opportunity-sales-cycles-stages
    title: Set up opportunity sales cycles and cycle stages
    date: "2025-10-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-opportunities
    - https://learn.microsoft.com/dynamics365/business-central/marketing-manage-sales-opportunities
    - https://learn.microsoft.com/dynamics365/business-central/marketing-processing-sales-opportunities
    - https://learn.microsoft.com/dynamics365/business-central/marketing-set-up-email-logging
    - https://learn.microsoft.com/dynamics365/business-central/marketing-how-setup-opportunity-sales-cycles-stages
  objects:
    - object/page/1680
    - object/page/5076
  features: []
  topics:
    - topic/business-central/business-functionality/relationship-management
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Relationship management
  - Manage sales opportunities
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/relationship-management
children: []
coverage:
  learn: 5
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1680
  - 1811
  - 5076
member_hash: 40ffb39af2e7eea48636b9accd19955502008b5f3b6c0bde26232e774572b563
narrative: generated
---

# Manage sales opportunities

> Sales opportunity management in Business Central: setting up sales cycles and stages, creating opportunities for contacts and salespeople, processing them to quotes, orders or closure, and logging email exchanges. It answers how-to questions on each step of an opportunity's life.

Path: [Business functionality](../../business-functionality.md) > [Relationship management](../relationship-management.md) > Manage sales opportunities · tier official · system sales · narrative reviewed by Opus

## Overview

This section covers how to track potential deals in Business Central. An opportunity is assigned to a salesperson and linked to a contact, and it moves through the stages of a sales cycle. Pages describe creating opportunities, estimating sales value, and processing them through to completion.

Setup comes first. One page explains how to define opportunity sales cycles and cycle stages, including activities and task assignment. Another covers email logging, which uses Exchange Online with a shared mailbox and mail flow rules to keep interaction logs and to start opportunities from email communication.

Day-to-day work is described in the pages on creating and processing opportunities. From the Opportunities page you can view and close opportunities, create sales quotes and orders, move between stages, and delete closed opportunities with batch jobs. Start with the sales cycle setup page, then read the creation and processing pages.

## Key points

- Opportunities are assigned to a salesperson and associated with a contact.
- Sales cycles and cycle stages define how an opportunity progresses; stages can include activities and task assignment.
- Sales value can be estimated when working with opportunities.
- The Opportunities page lets you view, close, and move opportunities through cycle stages.
- Sales quotes and sales orders can be created from an opportunity.
- Closed opportunities can be deleted using batch jobs.
- Email logging needs Exchange Online with a shared mailbox and mail flow rules.
- Email logging keeps interaction logs and supports creating opportunities from email.

## Learn pages

- [Create Sales Opportunities](https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-opportunities): Learn how to create opportunities from a salesperson or a contact in Business Central.
- [Manage sales opportunities and leads](https://learn.microsoft.com/dynamics365/business-central/marketing-manage-sales-opportunities): Explains how to capture and manage incoming leads and sales opportunities in Business Central, assign them to salespeople, and track expected value and likelihood of conversion.
- [Process sales opportunities in sales cycles](https://learn.microsoft.com/dynamics365/business-central/marketing-processing-sales-opportunities): Learn how move opportunities through different stages in the sales process.
- [Set up email logging](https://learn.microsoft.com/dynamics365/business-central/marketing-set-up-email-logging): Learn how to turn email interactions between salespeople and customers into real sales opportunities.
- [Set up opportunity sales cycles and cycle stages](https://learn.microsoft.com/dynamics365/business-central/marketing-how-setup-opportunity-sales-cycles-stages): Describes how to define sales stages, from initial contact to closing, to create a sales cycle and assign it to opportunities in Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1680 "Email Logging Setup"](../../../../objects/page/1680.md) · captioned "Email Logging" · on [Table 1680 "Email Logging Setup"](../../../../objects/table/1680.md)
- [Page 5076 "Interaction Log Entries"](../../../../objects/page/5076.md) · on [Table 5065 "Interaction Log Entry"](../../../../objects/table/5065.md)

Learn also names 1 object with no object page: page/1811.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
