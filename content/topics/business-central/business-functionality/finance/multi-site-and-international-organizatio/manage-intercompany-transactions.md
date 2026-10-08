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
  at: "2026-10-08T00:04:31.553Z"
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
  objects:
    - object/page/600
    - object/page/601
    - object/page/602
    - object/page/603
    - object/page/605
    - object/page/606
    - object/page/607
    - object/page/608
    - object/page/609
    - object/page/610
    - object/page/611
    - object/page/612
    - object/page/613
    - object/page/614
    - object/page/615
    - object/page/616
    - object/page/617
    - object/page/618
    - object/page/619
    - object/page/620
    - object/page/621
    - object/page/636
    - object/page/637
    - object/page/638
    - object/page/639
    - object/page/640
    - object/page/641
    - object/page/642
    - object/page/643
    - object/page/644
    - object/page/645
    - object/page/646
    - object/page/647
    - object/page/648
    - object/page/649
    - object/page/650
    - object/page/651
    - object/page/652
    - object/page/653
    - object/report/512
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
  code: 40
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

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Multi-site and international organizations](../multi-site-and-international-organizatio.md) > Manage intercompany transactions · tier official · system finance · narrative reviewed (checked by Opus)

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

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 600 "IC Dimensions"](../../../../../objects/page/600.md) · captioned "Intercompany Dimensions" · on [Table 411 "IC Dimension"](../../../../../objects/table/411.md)
- [Page 601 "IC Dimension Values"](../../../../../objects/page/601.md) · captioned "Intercompany Dimension Values" · on [Table 412 "IC Dimension Value"](../../../../../objects/table/412.md)
- [Page 602 "IC Dimension List"](../../../../../objects/page/602.md) · captioned "Intercompany Dimension List" · on [Table 411 "IC Dimension"](../../../../../objects/table/411.md)
- [Page 603 "IC Dimension Value List"](../../../../../objects/page/603.md) · captioned "Intercompany Dimension Value List" · on [Table 412 "IC Dimension Value"](../../../../../objects/table/412.md)
- [Page 605 "IC Chart of Accounts"](../../../../../objects/page/605.md) · captioned "Intercompany Chart of Accounts" · on [Table 410 "IC G/L Account"](../../../../../objects/table/410.md)
- [Page 606 "IC G/L Account Card"](../../../../../objects/page/606.md) · captioned "Intercompany G/L Account Card" · on [Table 410 "IC G/L Account"](../../../../../objects/table/410.md)
- [Page 607 "IC G/L Account List"](../../../../../objects/page/607.md) · captioned "Intercompany G/L Account List" · on [Table 410 "IC G/L Account"](../../../../../objects/table/410.md)
- [Page 608 "IC Partner List"](../../../../../objects/page/608.md) · captioned "Intercompany Partners" · on [Table 413 "IC Partner"](../../../../../objects/table/413.md)
- [Page 609 "IC Partner Card"](../../../../../objects/page/609.md) · captioned "Intercompany Partner" · on [Table 413 "IC Partner"](../../../../../objects/table/413.md)
- [Page 610 "IC General Journal"](../../../../../objects/page/610.md) · captioned "Intercompany General Journal" · on [Table 81 "Gen. Journal Line"](../../../../../objects/table/81.md)
- [Page 611 "IC Outbox Transactions"](../../../../../objects/page/611.md) · captioned "Intercompany Outbox Transactions" · on [Table 414 "IC Outbox Transaction"](../../../../../objects/table/414.md)
- [Page 612 "IC Outbox Jnl. Lines"](../../../../../objects/page/612.md) · on [Table 415 "IC Outbox Jnl. Line"](../../../../../objects/table/415.md)
- [Page 613 "Handled IC Outbox Transactions"](../../../../../objects/page/613.md) · captioned "Handled Intercompany Outbox Transactions" · on [Table 416 "Handled IC Outbox Trans."](../../../../../objects/table/416.md)
- [Page 614 "Handled IC Outbox Jnl. Lines"](../../../../../objects/page/614.md) · on [Table 417 "Handled IC Outbox Jnl. Line"](../../../../../objects/table/417.md)
- [Page 615 "IC Inbox Transactions"](../../../../../objects/page/615.md) · captioned "Intercompany Inbox Transactions" · on [Table 418 "IC Inbox Transaction"](../../../../../objects/table/418.md)
- [Page 616 "IC Inbox Jnl. Lines"](../../../../../objects/page/616.md) · on [Table 419 "IC Inbox Jnl. Line"](../../../../../objects/table/419.md)
- [Page 617 "Handled IC Inbox Transactions"](../../../../../objects/page/617.md) · captioned "Handled Intercompany Inbox Transactions" · on [Table 420 "Handled IC Inbox Trans."](../../../../../objects/table/420.md)
- [Page 618 "Handled IC Inbox Jnl. Lines"](../../../../../objects/page/618.md) · on [Table 421 "Handled IC Inbox Jnl. Line"](../../../../../objects/table/421.md)
- [Page 619 "IC Inbox/Outbox Jnl. Line Dim."](../../../../../objects/page/619.md) · captioned "Intercompany Inbox/Outbox Jnl. Line Dim." · on [Table 423 "IC Inbox/Outbox Jnl. Line Dim."](../../../../../objects/table/423.md)
- [Page 620 "IC Comment Sheet"](../../../../../objects/page/620.md) · on [Table 424 "IC Comment Line"](../../../../../objects/table/424.md)
- [Page 621 "IC API Log Entries"](../../../../../objects/page/621.md) · on [Table 444 "IC API Log"](../../../../../objects/table/444.md)
- [Page 636 "IC Outbox Sales Doc."](../../../../../objects/page/636.md) · on [Table 426 "IC Outbox Sales Header"](../../../../../objects/table/426.md)
- [Page 637 "IC Outbox Sales Lines"](../../../../../objects/page/637.md) · captioned "Lines" · on [Table 427 "IC Outbox Sales Line"](../../../../../objects/table/427.md)
- [Page 638 "IC Outbox Purchase Doc."](../../../../../objects/page/638.md) · on [Table 428 "IC Outbox Purchase Header"](../../../../../objects/table/428.md)
- [Page 639 "IC Outbox Purchase Lines"](../../../../../objects/page/639.md) · captioned "Lines" · on [Table 429 "IC Outbox Purchase Line"](../../../../../objects/table/429.md)
- [Page 640 "Handled IC Outbox Sales Doc."](../../../../../objects/page/640.md) · on [Table 430 "Handled IC Outbox Sales Header"](../../../../../objects/table/430.md)
- [Page 641 "Handled IC Outbox Sales Lines"](../../../../../objects/page/641.md) · captioned "Lines" · on [Table 431 "Handled IC Outbox Sales Line"](../../../../../objects/table/431.md)
- [Page 642 "Handled IC Outbox Purch. Doc."](../../../../../objects/page/642.md) · on [Table 432 "Handled IC Outbox Purch. Hdr"](../../../../../objects/table/432.md)
- [Page 643 "Handled IC Outbox Purch. Lines"](../../../../../objects/page/643.md) · captioned "Lines" · on [Table 433 "Handled IC Outbox Purch. Line"](../../../../../objects/table/433.md)
- [Page 644 "IC Inbox Sales Doc."](../../../../../objects/page/644.md) · on [Table 434 "IC Inbox Sales Header"](../../../../../objects/table/434.md)
- [Page 645 "IC Inbox Sales Lines"](../../../../../objects/page/645.md) · captioned "Lines" · on [Table 435 "IC Inbox Sales Line"](../../../../../objects/table/435.md)
- [Page 646 "IC Inbox Purchase Doc."](../../../../../objects/page/646.md) · on [Table 436 "IC Inbox Purchase Header"](../../../../../objects/table/436.md)
- [Page 647 "IC Inbox Purchase Lines"](../../../../../objects/page/647.md) · captioned "Lines" · on [Table 437 "IC Inbox Purchase Line"](../../../../../objects/table/437.md)
- [Page 648 "Handled IC Inbox Sales Doc."](../../../../../objects/page/648.md) · on [Table 438 "Handled IC Inbox Sales Header"](../../../../../objects/table/438.md)
- [Page 649 "Handled IC Inbox Sales Lines"](../../../../../objects/page/649.md) · captioned "Lines" · on [Table 439 "Handled IC Inbox Sales Line"](../../../../../objects/table/439.md)
- [Page 650 "Handled IC Inbox Purch. Doc."](../../../../../objects/page/650.md) · on [Table 440 "Handled IC Inbox Purch. Header"](../../../../../objects/table/440.md)
- [Page 651 "Handled IC Inbox Purch. Lines"](../../../../../objects/page/651.md) · captioned "Lines" · on [Table 441 "Handled IC Inbox Purch. Line"](../../../../../objects/table/441.md)
- [Page 652 "IC Document Dimensions"](../../../../../objects/page/652.md) · captioned "Intercompany Document Dimensions" · on [Table 442 "IC Document Dimension"](../../../../../objects/table/442.md)
- [Page 653 "Intercompany Setup"](../../../../../objects/page/653.md) · on [Table 443 "IC Setup"](../../../../../objects/table/443.md)
- [Report 512 "IC Transactions"](../../../../../objects/report/512.md) · captioned "Intercompany Transactions"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
