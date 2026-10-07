---
id: topic/business-central/business-functionality/finance/working-with-value-added-tax-vat/set-up-vat
type: topic
title: Set up VAT
summary: "Set up VAT in Business Central: VAT rates, posting groups, registration numbers, clauses, VAT statements, nondeductible VAT and unrealized VAT. It answers configuration questions about how VAT is calculated, posted to G/L accounts and reported."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:50.033Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8c8b80aa54741b14328fdc341f62c1d741c2eebe1c991493ec2d0e480e410857
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups
    title: Posting group setup
    date: "2025-08-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-vat-statement
    title: Set up a VAT statement
    date: "2024-08-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-setup-nondeductible-vat
    title: Set up nondeductible VAT
    date: "2024-08-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-setup-unrealized-vat
    title: Set up unrealized value added tax
    date: "2024-08-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-setup-vat
    title: Set up value-added tax
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-vat-statement
    - https://learn.microsoft.com/dynamics365/business-central/finance-setup-nondeductible-vat
    - https://learn.microsoft.com/dynamics365/business-central/finance-setup-unrealized-vat
    - https://learn.microsoft.com/dynamics365/business-central/finance-setup-vat
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/finance/working-with-value-added-tax-vat
  localizations: []
  videos:
    - video/MWXwtRr6-Wk
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Finance
  - Working with Value Added Tax (VAT)
  - Set up VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance/working-with-value-added-tax-vat
children: []
coverage:
  learn: 5
  code: 0
  video: 1
  blog: 0
  guideline: 0
bc_forms:
  - 10
  - 118
  - 187
  - 312
  - 313
  - 315
  - 317
  - 318
  - 320
  - 391
  - 470
  - 471
  - 472
  - 473
  - 474
  - 575
  - 734
  - 747
  - 748
  - 1877
member_hash: 94f612a607b772e51fef0a2024b7ed4c2011932bdb893e4447ce884ed595506e
narrative: generated
---

# Set up VAT

> Set up VAT in Business Central: VAT rates, posting groups, registration numbers, clauses, VAT statements, nondeductible VAT and unrealized VAT. It answers configuration questions about how VAT is calculated, posted to G/L accounts and reported.

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Working with Value Added Tax (VAT)](../working-with-value-added-tax-vat.md) > Set up VAT · tier official · system finance · narrative reviewed by Opus

## Overview

This section covers the configuration needed before VAT can be calculated, posted and reported. The base page, "Set up value-added tax", explains VAT calculations, VAT posting groups, registration numbers, clauses, VAT date and reverse charge VAT, based on customers, vendors, items and purchase or sale types. "Posting group setup" covers how general, specific and tax posting groups map entities to general ledger accounts.

The other pages handle specific cases. "Set up a VAT statement" defines templates and names used to calculate settlement amounts and reconcile VAT entries with G/L accounts. "Set up nondeductible VAT" covers VAT that a purchaser can't deduct. "Set up unrealized value added tax" covers cash-based VAT accounting with temporary G/L accounts.

Start with "Set up value-added tax" and "Posting group setup" for the core configuration. Then add the VAT statement, nondeductible VAT or unrealized VAT pages as your requirements call for them.

## Key points

- Set up value-added tax covers VAT rates, VAT posting groups, registration numbers, clauses, VAT date and reverse charge VAT (page lists version 23.1).
- Posting group setup covers general, specific and tax posting groups, alternative and multiple posting groups, and G/L account validation, with examples and troubleshooting.
- VAT statements use templates and names, with VAT entry, account and row totaling, and can be previewed to check settlement amounts.
- VAT statements handle unrealized VAT and help reconcile VAT entries with general ledger accounts.
- Nondeductible VAT is enabled in setup. You choose whether it applies to item, fixed asset and job cost, and set accounts and percentages in VAT Posting Setup.
- Nondeductible VAT options include Show Non-Ded. VAT In Lines and Allow Non-Deductible VAT.
- Unrealized VAT supports cash-based methods. It uses temporary G/L accounts until payment is posted, with percentage and payment allocation methods, VAT transfer and foreign currency support.

## Learn pages

- [Posting group setup](https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups): Learn how to use posting groups to save time and avoid mistakes when you post transactions.
- [Set up a VAT statement](https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-vat-statement): This article tells you how to set Up a VAT Statement Template and VAT Statement Names to meet changing tax authority requirements.
- [Set up nondeductible VAT](https://learn.microsoft.com/dynamics365/business-central/finance-setup-nondeductible-vat): This article explains how to configure nondeductible VAT in Microsoft Dynamics 365 Business Central.
- [Set up unrealized value added tax](https://learn.microsoft.com/dynamics365/business-central/finance-setup-unrealized-vat): If you're using cash-based accounting, you can specify how to handle unrealized VAT for sales and purchases.
- [Set up value-added tax](https://learn.microsoft.com/dynamics365/business-central/finance-setup-vat): Make sure that you correctly calculate, post, and report on VAT for sales and purchases. We recommend that you use the assisted setup guide to set up VAT.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: VAT Date in Business Central (2023 release wave 2)](../../../../../videos/MWXwtRr6-Wk.md) (video): "VAT Date Usage field options; Default VAT Date setting; Control VAT Period setup"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 10, 118, 187, 312, 313, 315, 317, 318, 320, 391, 470, 471, 472, 473, 474, 575, 734, 747, 748, 1877.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
