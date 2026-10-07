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
  at: "2026-10-07T13:37:30.849Z"
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
  objects: []
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
  code: 0
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

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 116, 118, 408, 479, 480, 481, 484, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 548, 560, 562, 564, 567, 568, 577, 578, 580, 699, 1343, 1660, 1661, 2580, 2581, 2582, 2583, 2584, 2585, 2586, 2587, 2588, 2590, 2591, 2592, 2593, 9083, 9233, 9251, 9252, 9253, 36601.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
