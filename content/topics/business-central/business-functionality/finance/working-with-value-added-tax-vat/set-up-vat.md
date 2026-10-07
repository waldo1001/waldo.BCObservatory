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
  at: "2026-10-07T15:52:42.721Z"
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
  objects:
    - object/page/10
    - object/page/118
    - object/page/187
    - object/page/312
    - object/page/313
    - object/page/315
    - object/page/317
    - object/page/318
    - object/page/320
    - object/page/391
    - object/page/470
    - object/page/471
    - object/page/472
    - object/page/473
    - object/page/474
    - object/page/575
    - object/page/734
    - object/page/747
    - object/page/748
    - object/page/1877
  features: []
  topics:
    - topic/business-central/business-functionality/finance/working-with-value-added-tax-vat
  localizations: []
  videos:
    - video/MWXwtRr6-Wk
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9352
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
  code: 20
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

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9352 [FI] Obsolete unused 'Print on Invoice' VAT setting](../../../../../changes/bcapps/9352.md) (code change): "Obsolete unused 'Print on Invoice' VAT setting. The unused 'Print on Invoice' VAT field"
- [What's New: VAT Date in Business Central (2023 release wave 2)](../../../../../videos/MWXwtRr6-Wk.md) (video): "VAT Date Usage field options; Default VAT Date setting; Control VAT Period setup"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 10 "Countries/Regions"](../../../../../objects/page/10.md) · on [Table 9 "Country/Region"](../../../../../objects/table/9.md)
- [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md) · on [Table 98 "General Ledger Setup"](../../../../../objects/table/98.md)
- [Page 187 "VAT Setup"](../../../../../objects/page/187.md) · on [Table 189 "VAT Setup"](../../../../../objects/table/189.md)
- [Page 312 "Gen. Business Posting Groups"](../../../../../objects/page/312.md) · on [Table 250 "Gen. Business Posting Group"](../../../../../objects/table/250.md)
- [Page 313 "Gen. Product Posting Groups"](../../../../../objects/page/313.md) · captioned "General Product Posting Groups" · on [Table 251 "Gen. Product Posting Group"](../../../../../objects/table/251.md)
- [Page 315 "VAT Entries"](../../../../../objects/page/315.md) · on [Table 254 "VAT Entry"](../../../../../objects/table/254.md)
- [Page 317 "VAT Statement"](../../../../../objects/page/317.md) · captioned "VAT Statements" · on [Table 256 "VAT Statement Line"](../../../../../objects/table/256.md)
- [Page 318 "VAT Statement Templates"](../../../../../objects/page/318.md) · on [Table 255 "VAT Statement Template"](../../../../../objects/table/255.md)
- [Page 320 "VAT Statement Names"](../../../../../objects/page/320.md) · on [Table 257 "VAT Statement Name"](../../../../../objects/table/257.md)
- [Page 391 "Extended Text List"](../../../../../objects/page/391.md) · on [Table 279 "Extended Text Header"](../../../../../objects/table/279.md)
- [Page 470 "VAT Business Posting Groups"](../../../../../objects/page/470.md) · on [Table 323 "VAT Business Posting Group"](../../../../../objects/table/323.md)
- [Page 471 "VAT Product Posting Groups"](../../../../../objects/page/471.md) · on [Table 324 "VAT Product Posting Group"](../../../../../objects/table/324.md)
- [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md) · on [Table 325 "VAT Posting Setup"](../../../../../objects/table/325.md)
- [Page 473 "VAT Posting Setup Card"](../../../../../objects/page/473.md) · on [Table 325 "VAT Posting Setup"](../../../../../objects/table/325.md)
- [Page 474 "VAT Statement Preview"](../../../../../objects/page/474.md) · on [Table 257 "VAT Statement Name"](../../../../../objects/table/257.md)
- [Page 575 "VAT Registration No. Formats"](../../../../../objects/page/575.md) · on [Table 381 "VAT Registration No. Format"](../../../../../objects/table/381.md)
- [Page 734 "VAT Clauses by Doc. Type"](../../../../../objects/page/734.md) · captioned "VAT Clauses by Document Type" · on [Table 562 "VAT Clause by Doc. Type"](../../../../../objects/table/562.md)
- [Page 747 "VAT Clauses"](../../../../../objects/page/747.md) · on [Table 560 "VAT Clause"](../../../../../objects/table/560.md)
- [Page 748 "VAT Clause Translations"](../../../../../objects/page/748.md) · on [Table 561 "VAT Clause Translation"](../../../../../objects/table/561.md)
- [Page 1877 "VAT Setup Wizard"](../../../../../objects/page/1877.md) · captioned "VAT Setup"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
