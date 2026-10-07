---
id: topic/business-central/business-functionality/finance/multi-site-and-international-organizatio/manage-intercompany-transactions
type: topic
title: Manage intercompany transactions
summary: "Intercompany transactions in Business Central: setting up partners, shared chart of accounts and dimensions, posting intercompany documents and journals, handling the inbox and outbox, and allocating purchase costs to partner companies. It answers setup, posting and processing questions for multi-entity organizations."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:51.359Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: e0b0d4f0a109b8074d79a4fc5c8d8d1017f76a3744451870290abaac65efa865
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/intercompany-allocate-costs
    title: Allocate Costs to Intercompany Partners| Microsoft Docs
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/intercompany-manage
    title: Manage intercompany transactions
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/intercompany-how-manage-intercompany-inbox
    title: Manage the Intercompany Inbox and Outbox
    date: "2025-07-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/intercompany-how-work-documents-journals
    title: Post intercompany documents and journals
    date: "2024-09-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/intercompany-how-setup
    title: Set up intercompany transaction posting
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/intercompany-allocate-costs
    - https://learn.microsoft.com/dynamics365/business-central/intercompany-manage
    - https://learn.microsoft.com/dynamics365/business-central/intercompany-how-manage-intercompany-inbox
    - https://learn.microsoft.com/dynamics365/business-central/intercompany-how-work-documents-journals
    - https://learn.microsoft.com/dynamics365/business-central/intercompany-how-setup
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/finance/multi-site-and-international-organizatio
  localizations: []
  videos:
    - video/QGG0dW6HqSg
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Finance
  - Multi-site and international organizations
  - Manage intercompany transactions
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance/multi-site-and-international-organizatio
children: []
coverage:
  learn: 5
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 512
  - 600
  - 601
  - 602
  - 603
  - 605
  - 606
  - 607
  - 608
  - 609
  - 610
  - 611
  - 612
  - 613
  - 614
  - 615
  - 616
  - 617
  - 618
  - 619
  - 620
  - 621
  - 636
  - 637
  - 638
  - 639
  - 640
  - 641
  - 642
  - 643
  - 644
  - 645
  - 646
  - 647
  - 648
  - 649
  - 650
  - 651
  - 652
  - 653
member_hash: bf2985284a52e12cb720a52fcb8f736e130fc89130280e0e927c4140fdc86527
narrative: generated
---

# Manage intercompany transactions

> Intercompany transactions in Business Central: setting up partners, shared chart of accounts and dimensions, posting intercompany documents and journals, handling the inbox and outbox, and allocating purchase costs to partner companies. It answers setup, posting and processing questions for multi-entity organizations.

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Multi-site and international organizations](../multi-site-and-international-organizatio.md) > Manage intercompany transactions · tier official · system finance · narrative reviewed by Opus

## Overview

This area is for organizations with several legal entities that trade with each other. Intercompany features let one company post a sales or purchase document or a general journal line and have the matching transaction created in the partner company without reentering data.

The pages follow the workflow. The overview page introduces the concepts. The setup page covers the synchronization partner, the intercompany chart of accounts and dimensions, account mapping, and partner management. The posting page covers intercompany sales orders, purchase orders, and general journals. The inbox and outbox page covers accepting, rejecting, and recreating transactions. The cost allocation page covers sharing purchase costs between partners.

Start with the overview, then do the setup page before posting anything. Use the inbox and outbox page when transactions need review or fixing, and the allocation page when costs must be split across partner companies.

## Key points

- Setup involves a synchronization partner, an intercompany chart of accounts, intercompany dimensions, and account mapping between companies.
- Setup options include Auto Accept Transactions, Auto Send Transactions, and a Default IC General Journal.
- Posting intercompany sales orders, purchase orders, and general journals creates corresponding transactions in partner companies via the outbox.
- Intercompany posting uses intercompany partners, G/L accounts, and bank accounts.
- The inbox and outbox let you accept, reject, or recreate transactions, and import into the inbox.
- Costs can be allocated to partners through general journals or purchase documents, using IC partner codes.
- Cost allocation needs attention to VAT business posting groups and VAT calculation.
- The posting page references 2022 release wave 1.

## Learn pages

- [Allocate Costs to Intercompany Partners\| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/intercompany-allocate-costs): Learn how VAT settings for customers and vendors control whether, and how, VAT is calculated.
- [Manage intercompany transactions](https://learn.microsoft.com/dynamics365/business-central/intercompany-manage): With the Intercompany functionality, you can simplify business processes and transactions between companies within the same organization.
- [Manage the Intercompany Inbox and Outbox](https://learn.microsoft.com/dynamics365/business-central/intercompany-how-manage-intercompany-inbox): Intercompany transactions you receive from your partners are listed in the intercompany inbox, where you process them manually or automatically.
- [Post intercompany documents and journals](https://learn.microsoft.com/dynamics365/business-central/intercompany-how-work-documents-journals): This article explains how you use intercompany documents or journals to post transactions with your intercompany partners.
- [Set up intercompany transaction posting](https://learn.microsoft.com/dynamics365/business-central/intercompany-how-setup): Learn how to set up an intercompany partnership.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Cross Environment Intercompany Posting and Approval for IC General Journals (2023)](../../../../../videos/QGG0dW6HqSg.md) (video): "intercompany posting; cross environment; ic general journals; chart of accounts mapping"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 512, 600, 601, 602, 603, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
