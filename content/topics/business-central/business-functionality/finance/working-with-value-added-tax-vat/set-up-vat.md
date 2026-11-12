---
id: topic/business-central/business-functionality/finance/working-with-value-added-tax-vat/set-up-vat
type: topic
title: Set up VAT
summary: "Setting up VAT in Business Central: VAT rates, posting groups, registration numbers, clauses, nondeductible VAT, unrealized VAT for cash-based accounting, and VAT statement templates and names. It answers configuration questions about how VAT is calculated, posted and reported."
tier: official
language: en
system: finance
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-12T00:57:40.556Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9bd25d10313ea578a988957b4877a7a6d7232e34fe4b95fdd92b7a7ef20c148a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-setup-nondeductible-vat
    title: Set Up Nondeductible VAT in Business Central
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups
    title: Set Up Posting Groups in Business Central
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-setup-unrealized-vat
    title: Set Up Unrealized VAT for Cash-Based Accounting
    date: "2026-11-11"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-vat-statement
    title: Set Up VAT Statement Templates and Names
    date: "2026-11-11"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-setup-nondeductible-vat
    - https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups
    - https://learn.microsoft.com/dynamics365/business-central/finance-setup-unrealized-vat
    - https://learn.microsoft.com/dynamics365/business-central/finance-setup-vat
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-vat-statement
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
    - video/TSLXzbeyE7Y
  posts: []
  guidelines: []
  changes:
    - change/bcapps/11657
    - change/bcapps/11734
    - change/bcapps/12067
    - change/bcapps/13482
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
  video: 2
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

> Setting up VAT in Business Central: VAT rates, posting groups, registration numbers, clauses, nondeductible VAT, unrealized VAT for cash-based accounting, and VAT statement templates and names. It answers configuration questions about how VAT is calculated, posted and reported.

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Working with Value Added Tax (VAT)](../working-with-value-added-tax-vat.md) > Set up VAT · tier official · system finance · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the setup tasks needed before VAT can be calculated, posted and settled. The core page, "Set up value-added tax", explains VAT calculations, VAT posting groups, registration numbers, clauses, VAT date and reverse charge VAT, based on customers, vendors, items and purchase or sale types.

The other pages handle specific areas. Posting groups map customers, vendors, items, resources and documents to general ledger accounts so transactions post automatically. Nondeductible VAT and unrealized VAT cover VAT that cannot be recovered and VAT for cash-based methods. VAT statement templates and names define how VAT settlement amounts are calculated for a period.

Start with the general VAT setup page and the posting groups page, since the other setups build on them. Then add nondeductible VAT, unrealized VAT or VAT statements as your VAT rules require.

## Key points

- Set up value-added tax covers VAT rates, VAT posting groups, registration numbers, VAT clauses, VAT date and reverse charge VAT (version 23.1 noted).
- Posting groups include general business, general product, general posting setups, customer, vendor and inventory groups, which map entities to G/L accounts.
- Nondeductible VAT options: Enable Non-Deductible VAT, Use For Item Cost, Use For Fixed Asset Cost, Use For Project Cost, Show Non-Ded. VAT In Lines, Allow Non-Deductible VAT.
- Unrealized VAT is enabled with a checkbox in General Ledger Setup, plus temporary G/L accounts and mappings in VAT Posting Setup.
- Unrealized VAT Type allocation options include Percentage, First, Last and First (Fully Paid).
- VAT statement templates and multiple names let you adapt to changing tax authority requirements and keep historical formats.
- VAT statement rows can use VAT Entry Totaling, Account Totaling or Row Totaling.

## Learn pages

- [Set Up Nondeductible VAT in Business Central](https://learn.microsoft.com/dynamics365/business-central/finance-setup-nondeductible-vat): Set up nondeductible VAT in Business Central, specify the percentage of VAT you can't deduct, and choose how to post amounts and include them in costs.
- [Set Up Posting Groups in Business Central](https://learn.microsoft.com/dynamics365/business-central/finance-posting-groups): Set up posting groups in Business Central to map transactions to G/L accounts, allow alternative groups, and troubleshoot missing account setup.
  - In the observatory: [Page 110 "Customer Posting Groups"](../../../../../objects/page/110.md), [Page 111 "Vendor Posting Groups"](../../../../../objects/page/111.md), [Page 112 "Inventory Posting Groups"](../../../../../objects/page/112.md), [Page 1518 "My Notifications"](../../../../../objects/page/1518.md), [Page 314 "General Posting Setup"](../../../../../objects/page/314.md), [Page 373 "Bank Account Posting Groups"](../../../../../objects/page/373.md)
- [Set Up Unrealized VAT for Cash-Based Accounting](https://learn.microsoft.com/dynamics365/business-central/finance-setup-unrealized-vat): Set up unrealized VAT in Business Central for cash-based accounting, choose how payments realize VAT, and assign temporary sales and purchase VAT accounts.
- [Set up value-added tax](https://learn.microsoft.com/dynamics365/business-central/finance-setup-vat): Make sure that you correctly calculate, post, and report on VAT for sales and purchases. We recommend that you use the assisted setup guide to set up VAT.
  - In the observatory: [Page 119 "User Setup"](../../../../../objects/page/119.md), [Page 16 "Chart of Accounts"](../../../../../objects/page/16.md), [Page 187 "VAT Setup"](../../../../../objects/page/187.md)
- [Set Up VAT Statement Templates and Names](https://learn.microsoft.com/dynamics365/business-central/finance-how-setup-vat-statement): Set up VAT statement templates and names in Business Central, define how rows calculate VAT, and preview the statement for a reporting period.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11657 Fix VIES integrity check: tolerate country-code prefix on echoed VAT number (uptake fix)](../../../../../changes/bcapps/11657.md) (code change): "VIES integrity check for VAT numbers now tolerates country-code prefixes"
- [#11734 [VIES Integration] Per-environment daily request rate-limit](../../../../../changes/bcapps/11734.md) (code change): "per-tenant daily rate-limit of 2000 VIES lookups prevents"
- [#12067 [main] bug 652323 - Move creating VAT Period to setup demo data level](../../../../../changes/bcapps/12067.md) (code change): "VAT Period creation from Master Data to Setup Data level"
- [#13482 [Master][all-e]Purchase Invoice Statistics Non-Deductible VAT Amount does not match VAT Entries and G/L Entries when Non-Deductible VAT is enabled.](../../../../../changes/bcapps/13482.md) (code change): "Purchase Invoice Statistics Non-Deductible VAT Amount does not match VAT Entries"
- [#9352 [FI] Obsolete unused 'Print on Invoice' VAT setting](../../../../../changes/bcapps/9352.md) (code change): "Obsolete unused 'Print on Invoice' VAT setting. The unused 'Print on Invoice' VAT field"
- [What's New: VAT Date in Business Central (2023 release wave 2)](../../../../../videos/MWXwtRr6-Wk.md) (video): "VAT Date Usage field options; Default VAT Date setting; Control VAT Period setup"
- [What's new: Explore the new Microsoft Copilot Chat in Business Central (2026 release wave 2)](../../../../../videos/TSLXzbeyE7Y.md) (video): "Sales tax setup; Sales tax configuration assistance; Sales data analysis"

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
