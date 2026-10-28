---
id: topic/business-central/business-functionality/relationship-management/manage-sales-opportunities
type: topic
title: Manage sales opportunities
summary: "Sales opportunity management in Business Central: setting up sales cycles and stages, creating opportunities from contacts or salespeople, moving them through stages, closing them or turning them into quotes and orders, and logging emails with contacts. It answers setup and process questions for the sales pipeline."
tier: official
language: en
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:19.651Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 26a65ee6b57618f7913b937e9984410b9dc6bf58912ee4eb2f6327d4841ac960
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-opportunities
    title: Create Sales Opportunities from Contacts
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-manage-sales-opportunities
    title: Manage Sales Opportunities and Leads
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-processing-sales-opportunities
    title: Process Sales Opportunities in Sales Cycles
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-set-up-email-logging
    title: Set Up Email Logging for Contact Interactions
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/marketing-how-setup-opportunity-sales-cycles-stages
    title: Set Up Opportunity Sales Cycles and Cycle Stages
    date: "2026-10-22"
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

> Sales opportunity management in Business Central: setting up sales cycles and stages, creating opportunities from contacts or salespeople, moving them through stages, closing them or turning them into quotes and orders, and logging emails with contacts. It answers setup and process questions for the sales pipeline.

Path: [Business functionality](../../business-functionality.md) > [Relationship management](../relationship-management.md) > Manage sales opportunities · tier official · system sales · narrative reviewed (checked by Opus)

## Overview

This section covers the full life of a sales opportunity. It starts with setup: sales cycles and cycle stages define how an opportunity moves from initial contact to closing, including stage requirements and activities or tasks. Cycles must exist before any opportunity can be created.

Opportunities are then created from contacts or salespeople. Each must be linked to a contact and assigned to a salesperson or purchaser. The overview page on managing opportunities and leads explains how sales value estimates and success probability are tracked through the stages.

Once opportunities exist, you view them by salesperson or contact, move them through stages, close them with reason codes, create sales quotes and then sales orders, or delete closed ones. A separate page covers email logging, which records exchanges between salespeople and contacts in the Interaction Log Entries page. Start with the sales cycle setup page, then the creation page.

## Key points

- Sales cycles and cycle stages must be set up before opportunities can be created.
- Sales cycle setup defines cycle codes, stages, stage requirements, and activities or tasks.
- Opportunities can be created from contacts or from salespeople.
- Every opportunity needs a linked contact and an assigned salesperson or purchaser.
- Opportunities track estimated sales value and success probability through stages.
- Opportunities can be closed with reason codes, turned into sales quotes, and quotes into sales orders.
- Closed opportunities can be deleted.
- Email logging works with Exchange Online or on-premises Exchange and shows messages in Interaction Log Entries; it can also lead to opportunity creation.

## Learn pages

- [Create Sales Opportunities from Contacts](https://learn.microsoft.com/dynamics365/business-central/marketing-how-create-opportunities): Create sales opportunities from contacts or salespeople in Business Central, assign a sales cycle, and track potential sales with the responsible salesperson.
  - In the observatory: [Page 5123 "Opportunity List"](../../../../objects/page/5123.md)
- [Manage Sales Opportunities and Leads](https://learn.microsoft.com/dynamics365/business-central/marketing-manage-sales-opportunities): Capture sales opportunities in Business Central, assign them to salespeople, and use sales cycles to track expected value and the chances of success.
- [Process Sales Opportunities in Sales Cycles](https://learn.microsoft.com/dynamics365/business-central/marketing-processing-sales-opportunities): Move sales opportunities through sales cycle stages in Business Central, create sales quotes, close deals, and delete closed opportunities.
  - In the observatory: [Page 41 "Sales Quote"](../../../../objects/page/41.md), [Page 5128 "Close Opportunity"](../../../../objects/page/5128.md), [Page 5129 "Update Opportunity"](../../../../objects/page/5129.md), [Page 5131 "Opportunities"](../../../../objects/page/5131.md)
- [Set Up Email Logging for Contact Interactions](https://learn.microsoft.com/dynamics365/business-central/marketing-set-up-email-logging): Set up email logging between salespeople and contacts in Business Central, configure an Exchange Online mailbox, and turn messages into sales opportunities.
  - In the observatory: [Page 1801 "Assisted Setup"](../../../../objects/page/1801.md), [Page 5094 "Marketing Setup"](../../../../objects/page/5094.md)
- [Set Up Opportunity Sales Cycles and Cycle Stages](https://learn.microsoft.com/dynamics365/business-central/marketing-how-setup-opportunity-sales-cycles-stages): Describes how to define sales stages, from initial contact to closing, to create a sales cycle and assign it to opportunities in Business Central.
  - In the observatory: [Page 5096 "Task List"](../../../../objects/page/5096.md), [Page 5097 "Create Task"](../../../../objects/page/5097.md), [Page 5119 "Sales Cycles"](../../../../objects/page/5119.md), [Page 5121 "Sales Cycle Stages"](../../../../objects/page/5121.md), [Page 5131 "Opportunities"](../../../../objects/page/5131.md), [Page 5146 "Assign Activity"](../../../../objects/page/5146.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1680 "Email Logging Setup"](../../../../objects/page/1680.md) · captioned "Email Logging" · on [Table 1680 "Email Logging Setup"](../../../../objects/table/1680.md)
- [Page 5076 "Interaction Log Entries"](../../../../objects/page/5076.md) · on [Table 5065 "Interaction Log Entry"](../../../../objects/table/5065.md)

Learn also names 1 object with no object page: page/1811.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
