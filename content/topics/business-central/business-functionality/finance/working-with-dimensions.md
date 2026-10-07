---
id: topic/business-central/business-functionality/finance/working-with-dimensions
type: topic
title: Working with dimensions
summary: "Dimensions in Business Central: setting up dimensions and values, global and shortcut dimensions, default dimensions, and dimension combinations. It also covers correcting dimensions on posted G/L entries and importing payroll transactions into the General Journal."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:20.637Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0a5e5080a3fa99667076a45b1abc11867e96aee4e38c4c5c2fbff78ab3572d64
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-import-payroll-transactions
    title: Import payroll transactions
    date: "2024-08-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-troubleshooting-correcting-dimensions
    title: Troubleshoot and correct dimensions
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-dimensions
    title: Work with dimensions to track and analyze data
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-import-payroll-transactions
    - https://learn.microsoft.com/dynamics365/business-central/finance-troubleshooting-correcting-dimensions
    - https://learn.microsoft.com/dynamics365/business-central/finance-dimensions
  objects:
    - object/page/116
    - object/page/118
    - object/page/408
    - object/page/479
    - object/page/480
    - object/page/481
    - object/page/484
    - object/page/536
    - object/page/537
    - object/page/538
    - object/page/539
    - object/page/540
    - object/page/541
    - object/page/542
    - object/page/543
    - object/page/544
    - object/page/545
    - object/page/548
    - object/page/560
    - object/page/562
    - object/page/564
    - object/page/567
    - object/page/568
    - object/page/577
    - object/page/578
    - object/page/580
    - object/page/699
    - object/page/1343
    - object/page/1660
    - object/page/1661
    - object/page/2580
    - object/page/2581
    - object/page/2582
    - object/page/2583
    - object/page/2584
    - object/page/2585
    - object/page/2586
    - object/page/2587
    - object/page/2588
    - object/page/2590
    - object/page/2591
    - object/page/2592
    - object/page/2593
    - object/page/9083
    - object/page/9233
    - object/page/9251
    - object/page/9252
    - object/page/9253
  features: []
  topics:
    - topic/business-central/business-functionality/finance
  localizations: []
  videos:
    - video/4EnvGMwbuBY
    - video/BC82BSrtng0
    - video/r8HWIk5E0c0
    - video/V2mfuDh8Kfk
    - video/vpJg1BxIrs0
  posts:
    - post/aardvarklabs-blog/3120
    - post/thedynamicsexplorer-com/9227
  guidelines: []
  changes:
    - change/bcapps/10566
    - change/bcapps/10571
    - change/bcapps/10874
learn_toc_path:
  - Business functionality
  - Finance
  - Working with dimensions
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance
children: []
coverage:
  learn: 3
  code: 48
  video: 5
  blog: 2
  guideline: 0
bc_forms:
  - 116
  - 118
  - 408
  - 479
  - 480
  - 481
  - 484
  - 536
  - 537
  - 538
  - 539
  - 540
  - 541
  - 542
  - 543
  - 544
  - 545
  - 548
  - 560
  - 562
  - 564
  - 567
  - 568
  - 577
  - 578
  - 580
  - 699
  - 1343
  - 1660
  - 1661
  - 2580
  - 2581
  - 2582
  - 2583
  - 2584
  - 2585
  - 2586
  - 2587
  - 2588
  - 2590
  - 2591
  - 2592
  - 2593
  - 9083
  - 9233
  - 9251
  - 9252
  - 9253
  - 36601
member_hash: d4aad523b92d727f29cb67906abf92f8b4992f0660102b30f79ea23e68ccc780
narrative: generated
---

# Working with dimensions

> Dimensions in Business Central: setting up dimensions and values, global and shortcut dimensions, default dimensions, and dimension combinations. It also covers correcting dimensions on posted G/L entries and importing payroll transactions into the General Journal.

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Working with dimensions · tier official · system finance · narrative reviewed by Opus

## Overview

Dimensions categorize entries so data on documents such as sales and purchase orders can be tracked and analyzed. The core page explains how to set up dimensions and values, configure global and shortcut dimensions, define default dimensions for accounts, and use dimension combinations to control which dimensions can be posted together.

A second page covers troubleshooting and correcting dimension errors on posted general ledger entries, so financial reports stay accurate. A third page covers importing payroll files from providers into the General Journal and mapping external accounts to G/L accounts.

Start with the page on working with dimensions to set up the basics. Move to the correction page when posted entries carry wrong dimension values. Use the payroll page if you post salary data from Ceridian or Quickbooks.

## Key points

- Dimensions categorize entries on documents like sales orders and purchase orders for tracking and analysis.
- Setup covers dimensions and values, global dimensions, shortcut dimensions, and default dimensions for accounts.
- Dimension combinations control which dimensions can be posted together.
- The core dimensions page also covers dimension sets.
- The Correct Dimensions action lets you manually select posted G/L entries and update dimension values, with Validate Dimension Changes.
- The correction page also covers undoing a correction, Copy to Draft, Update Analysis Views, and blocked dimensions.
- Payroll import brings provider files into the General Journal and maps external accounts to G/L accounts.
- Payroll import supports the Ceridian Payroll and Quickbooks Payroll File Import extensions.

## Learn pages

- [Import payroll transactions](https://learn.microsoft.com/dynamics365/business-central/finance-how-import-payroll-transactions): To manage salary, you import and post financial transactions from your payroll provider to the general ledger, using a payroll extension such as Ceridian.
- [Troubleshoot and correct dimensions](https://learn.microsoft.com/dynamics365/business-central/finance-troubleshooting-correcting-dimensions): Learn how to troubleshoot typical dimension errors, and how to correct dimensions after they're used on posted transactions.
- [Work with dimensions to track and analyze data](https://learn.microsoft.com/dynamics365/business-central/finance-dimensions): Use dimensions to categorize entries, such as by department or project, so you can more easily track and analyze data to help you make good business decisions.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10566 [main] Trial Balance (Excel) report shows incorrect figures and formatting differences compared to Trial Balance (Obsolete) report in Business Central v28.2](../../../../changes/bcapps/10566.md) (code change): "Global Dimension 1 and 2 filters from G/L Account are now read and passed"
- [#10571 [Master]-User is unable to filter the Deferral Summary-GL Report Not Filtering Totals by Global Dimensions.](../../../../changes/bcapps/10571.md) (code change): "Deferral Summary - G/L report now correctly filters and displays totals"
- [#10874 [29.x]User is unable to filter the Deferral Summary-GL Report Not Filtering Totals by Global Dimensions.](../../../../changes/bcapps/10874.md) (code change): "The Deferral Summary-GL Report now properly supports filtering by global dimensions"
- [Understanding Dimension Set Id in AL for Business Central](../../../../posts/aardvarklabs-blog/3120.md) (community post): "Dimension Set ID deduplicates dimension combinations to reduce data storage"
- [Dynamics GP to Business Central – How to Control your General Ledger Code and Dimension Combinations using Allowed Values Filter](../../../../posts/thedynamicsexplorer-com/9227.md) (community post): "Business Central separates GL accounts from dimensions"
- [Comparing Subaccount Segments and Dimension Setup between Dynamics SL and Dynamics 365 Business](../../../../videos/4EnvGMwbuBY.md) (video): "Subaccount segments; dimensions; dimension values; flex key"
- [Comparing Subaccounts Segments and Dimensions Transaction and Reporting Dynamics SL and Dynamics](../../../../videos/BC82BSrtng0.md) (video): "Segments; dimensions; default dimensions; posting; reporting; migration"
- [Comparing Correcting and Reversing Entries between Dynamics SL and Dynamics 365 Business Central](../../../../videos/r8HWIk5E0c0.md) (video): "Correct dimension in Business Central; Change dimension process"
- [Comparing Segment and Dimension Setup between Dynamics GP and Dynamics Business Central (2024)](../../../../videos/V2mfuDh8Kfk.md) (video): "segments; dimensions; chart of accounts; migration; global dimensions"
- [Comparing Segment and Dimension Transaction and Reporting between Dynamics GP and Business Central](../../../../videos/vpJg1BxIrs0.md) (video): "Dimension value posting code settings; Trial balance dimension report"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 116 "G/L Registers"](../../../../objects/page/116.md) · on [Table 45 "G/L Register"](../../../../objects/table/45.md)
- [Page 118 "General Ledger Setup"](../../../../objects/page/118.md) · on [Table 98 "General Ledger Setup"](../../../../objects/table/98.md)
- [Page 408 "G/L Balance by Dimension"](../../../../objects/page/408.md) · on [Table 361 "Analysis by Dim. Parameters"](../../../../objects/table/361.md)
- [Page 479 "Dimension Set Entries"](../../../../objects/page/479.md) · on [Table 480 "Dimension Set Entry"](../../../../objects/table/480.md)
- [Page 480 "Edit Dimension Set Entries"](../../../../objects/page/480.md) · on [Table 480 "Dimension Set Entry"](../../../../objects/table/480.md)
- [Page 481 "Dimension Set ID Filter"](../../../../objects/page/481.md) · captioned "Dimension Filter" · on [Table 348 "Dimension"](../../../../objects/table/348.md)
- [Page 484 "Edit Reclas. Dimensions"](../../../../objects/page/484.md) · on [Table 482 "Reclas. Dimension Set Buffer"](../../../../objects/table/482.md)
- [Page 536 "Dimensions"](../../../../objects/page/536.md) · on [Table 348 "Dimension"](../../../../objects/table/348.md)
- [Page 537 "Dimension Values"](../../../../objects/page/537.md) · on [Table 349 "Dimension Value"](../../../../objects/table/349.md)
- [Page 538 "Dimension Combinations"](../../../../objects/page/538.md) · on [Table 348 "Dimension"](../../../../objects/table/348.md)
- [Page 539 "Dimension Value Combinations"](../../../../objects/page/539.md) · on [Table 349 "Dimension Value"](../../../../objects/table/349.md)
- [Page 540 "Default Dimensions"](../../../../objects/page/540.md) · on [Table 352 "Default Dimension"](../../../../objects/table/352.md)
- [Page 541 "Account Type Default Dim."](../../../../objects/page/541.md) · on [Table 352 "Default Dimension"](../../../../objects/table/352.md)
- [Page 542 "Default Dimensions-Multiple"](../../../../objects/page/542.md) · on [Table 352 "Default Dimension"](../../../../objects/table/352.md)
- [Page 543 "Default Dimension Priorities"](../../../../objects/page/543.md) · on [Table 354 "Default Dimension Priority"](../../../../objects/table/354.md)
- [Page 544 "Default Dimension Where-Used"](../../../../objects/page/544.md) · on [Table 352 "Default Dimension"](../../../../objects/table/352.md)
- [Page 545 "Dim. Values per Account"](../../../../objects/page/545.md) · captioned "Dimension Values per Account" · on [Table 352 "Default Dimension"](../../../../objects/table/352.md)
- [Page 548 "Dimension List"](../../../../objects/page/548.md) · on [Table 348 "Dimension"](../../../../objects/table/348.md)
- [Page 560 "Dimension Value List"](../../../../objects/page/560.md) · on [Table 349 "Dimension Value"](../../../../objects/table/349.md)
- [Page 562 "Dimension Selection-Multiple"](../../../../objects/page/562.md) · captioned "Dimension Selection" · on [Table 368 "Dimension Selection Buffer"](../../../../objects/table/368.md)
- [Page 564 "Dimension Selection-Level"](../../../../objects/page/564.md) · captioned "Dimension Selection" · on [Table 368 "Dimension Selection Buffer"](../../../../objects/table/368.md)
- [Page 567 "Dimension Selection-Change"](../../../../objects/page/567.md) · captioned "Dimension Selection" · on [Table 368 "Dimension Selection Buffer"](../../../../objects/table/368.md)
- [Page 568 "Dimension Selection"](../../../../objects/page/568.md) · on [Table 368 "Dimension Selection Buffer"](../../../../objects/table/368.md)
- [Page 577 "Change Global Dimensions"](../../../../objects/page/577.md) · on [Table 484 "Change Global Dim. Header"](../../../../objects/table/484.md)
- [Page 578 "Change Global Dim. Log Entries"](../../../../objects/page/578.md) · captioned "Log Entries" · on [Table 483 "Change Global Dim. Log Entry"](../../../../objects/table/483.md)
- [Page 580 "Dimension Translations"](../../../../objects/page/580.md) · on [Table 388 "Dimension Translation"](../../../../objects/table/388.md)
- [Page 699 "Dimension Set Entries FactBox"](../../../../objects/page/699.md) · captioned "Dimensions" · on [Table 480 "Dimension Set Entry"](../../../../objects/table/480.md)
- [Page 1343 "Dimensions Template List"](../../../../objects/page/1343.md) · captioned "Dimension Templates" · on [Table 1302 "Dimensions Template"](../../../../objects/table/1302.md)
- [Page 1660 "Payroll Setup"](../../../../objects/page/1660.md) · on [Table 1660 "Payroll Setup"](../../../../objects/table/1660.md)
- [Page 1661 "Payroll Import Transactions"](../../../../objects/page/1661.md) · captioned "Import Payroll Transactions" · on [Table 1661 "Import G/L Transaction"](../../../../objects/table/1661.md)
- [Page 2580 "Dim Correction Blocked Setup"](../../../../objects/page/2580.md) · captioned "Dimensions Blocked for Correction" · on [Table 2580 "Dim Correction Blocked Setup"](../../../../objects/table/2580.md)
- [Page 2581 "Dim Correction Changes Posted"](../../../../objects/page/2581.md) · on [Table 2581 "Dim Correction Change"](../../../../objects/table/2581.md)
- [Page 2582 "Dim Correction Settings"](../../../../objects/page/2582.md) · captioned "Dimension Correction Settings"
- [Page 2583 "Dim. Correct Ledger Entries"](../../../../objects/page/2583.md) · on [Table 17 "G/L Entry"](../../../../objects/table/17.md)
- [Page 2584 "Dim Correct Posted Ledg Entr"](../../../../objects/page/2584.md) · on [Table 17 "G/L Entry"](../../../../objects/table/17.md)
- [Page 2585 "Dim Correct Selection Criteria"](../../../../objects/page/2585.md) · captioned "Entry selection criteria" · on [Table 2585 "Dim Correct Selection Criteria"](../../../../objects/table/2585.md)
- [Page 2586 "Dim Corr Find by Dimension"](../../../../objects/page/2586.md) · captioned "Find by Dimension" · on [Table 480 "Dimension Set Entry"](../../../../objects/table/480.md)
- [Page 2587 "Dim Corr Values Overview"](../../../../objects/page/2587.md) · captioned "Dimension Values" · on [Table 349 "Dimension Value"](../../../../objects/table/349.md)
- [Page 2588 "Dimension Correction"](../../../../objects/page/2588.md) · on [Table 2582 "Dimension Correction"](../../../../objects/table/2582.md)
- [Page 2590 "Dimension Correction Changes"](../../../../objects/page/2590.md) · on [Table 2581 "Dim Correction Change"](../../../../objects/table/2581.md)
- [Page 2591 "Dimension Correction Draft"](../../../../objects/page/2591.md) · captioned "Draft Dimension Correction" · on [Table 2582 "Dimension Correction"](../../../../objects/table/2582.md)
- [Page 2592 "Dimension Corrections"](../../../../objects/page/2592.md) · on [Table 2582 "Dimension Correction"](../../../../objects/table/2582.md)
- [Page 2593 "Dim Correction Schedule"](../../../../objects/page/2593.md) · captioned "Run Dimension Correction" · on [Table 472 "Job Queue Entry"](../../../../objects/table/472.md)
- [Page 9083 "Dimensions FactBox"](../../../../objects/page/9083.md) · captioned "Dimensions" · on [Table 352 "Default Dimension"](../../../../objects/table/352.md)
- [Page 9233 "G/L Balance by Dim. Matrix"](../../../../objects/page/9233.md) · on [Table 367 "Dimension Code Buffer"](../../../../objects/table/367.md)
- [Page 9251 "Dimension Combinations Matrix"](../../../../objects/page/9251.md) · on [Table 348 "Dimension"](../../../../objects/table/348.md)
- [Page 9252 "MyDim Value Combinations"](../../../../objects/page/9252.md) · captioned "Dimension Value Combinations"
- [Page 9253 "Dim. Value Combinations Matrix"](../../../../objects/page/9253.md) · captioned "Dimension Value Combinations Matrix" · on [Table 349 "Dimension Value"](../../../../objects/table/349.md)

Learn also names 1 object with no object page: page/36601.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
