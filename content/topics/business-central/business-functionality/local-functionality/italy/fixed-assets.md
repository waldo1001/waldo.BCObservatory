---
id: topic/business-central/business-functionality/local-functionality/italy/fixed-assets
type: topic
title: Fixed assets
summary: "Italian fixed assets functionality in Business Central: alternate depreciation methods (anticipated, accelerated, reduced), compressed depreciation, creating multiple fixed asset cards from purchase invoices, and printing Depreciation Book reports. It answers setup and how-to questions for Italy."
tier: official
language: en
system: fixed-assets
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:08.293Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ed340cdb42ef59608404c16211baa48c46ab5d1d72dc3ca8d33d774566871235
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-compressed-depreciation-of-fixed-assets
    title: compressed depreciation of fixed assets [IT]
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-multiple-fixed-asset-cards
    title: How to Create Multiple Fixed Asset Cards [IT]
    date: "2025-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-depreciation-book-reports
    title: How to Print Depreciation Book Reports [IT]
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-alternate-depreciation-methods
    title: How to set up alternate depreciation methods
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-fixed-assets
    title: Italian fixed assets
    date: "2025-05-22"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-compressed-depreciation-of-fixed-assets
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-multiple-fixed-asset-cards
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-depreciation-book-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-alternate-depreciation-methods
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-fixed-assets
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/italy
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Italy
  - Fixed assets
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/italy
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: add856128f594cee5c33b3b03095d92d1f544005d96e086703c51c8d35e6ec87
narrative: generated
---

# Fixed assets

> Italian fixed assets functionality in Business Central: alternate depreciation methods (anticipated, accelerated, reduced), compressed depreciation, creating multiple fixed asset cards from purchase invoices, and printing Depreciation Book reports. It answers setup and how-to questions for Italy.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > Fixed assets · tier official · system fixed-assets · narrative reviewed by Opus

## Overview

This section covers the Italy-specific parts of fixed asset management. It starts with an overview page, "Italian fixed assets", which summarizes the main capabilities: anticipated, accelerated and reduced depreciation, automatic creation of multiple asset cards from invoices, and depreciation book reporting.

The other pages are task guides. One explains how to set up alternate depreciation methods using depreciation tables. One covers compressing depreciation into subclasses so fewer ledger entries are posted, using the depreciation book setup. One describes creating multiple fixed asset cards during purchase invoice posting. One covers printing the Depreciation Book report.

Start with the overview page, then set up the alternate depreciation methods. Print the Depreciation Book report after depreciation methods are set up and assets are entered.

## Key points

- Alternate depreciation methods (anticipated, accelerated, reduced) are defined with depreciation tables.
- Depreciation tables use fields such as Period Depreciation %, Total Depreciation % and No. of Units in Period.
- Compressed depreciation groups depreciation by subclass and posts only totals, reducing ledger entries when many assets are involved.
- Compression is configured through the depreciation book setup.
- Multiple fixed asset cards can be created automatically during purchase invoice posting, with sequential numbering.
- The multiple-card feature was originally Italian localization and is now delocalized into standard Business Central.
- The Depreciation Book report shows fixed asset changes by year and item class, with a Print per Fixed Asset option and Starting Date and Ending Date filters.
- Run the report after depreciation methods are set up and assets are entered.

## Learn pages

- [compressed depreciation of fixed assets [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-compressed-depreciation-of-fixed-assets): You can compress fixed asset depreciation into subclasses and choose to display only the total sum by subclass.
- [How to Create Multiple Fixed Asset Cards [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-multiple-fixed-asset-cards): Learn how to automatically create multiple fixed asset cards during purchase invoice posting in Business Central.
- [How to Print Depreciation Book Reports [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-depreciation-book-reports): Learn how to print the Depreciation Book report, after configuring depreciation methods and entering fixed assets.
- [How to set up alternate depreciation methods](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-alternate-depreciation-methods): Learn how to set up alternate depreciation methods, such as anticipated, accelerated, and reduced depreciation.
- [Italian fixed assets](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-fixed-assets): Learn about the features available for managing fixed assets in Italy, including depreciation methods and automated processes in Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
