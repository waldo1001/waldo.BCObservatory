---
id: topic/business-central/business-functionality/local-functionality/italy/fixed-assets
type: topic
title: Fixed assets
summary: "Italian fixed assets in Business Central: alternate depreciation methods (anticipated, accelerated, reduced), compressed depreciation posting, creating multiple fixed asset cards from one purchase invoice, and the Depreciation Book report. It answers setup and usage questions for the Italian version."
tier: official
language: en
system: fixed-assets
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:00.626Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5e5fc4ad43275fdef8ac169dedc4800c8d96469c9f8f0b90635f79d933deafce
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-multiple-fixed-asset-cards
    title: Create Multiple Fixed Asset Cards in the Italian Version [IT]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-fixed-assets
    title: Italian Fixed Assets in Business Central
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-depreciation-book-reports
    title: Print Depreciation Book Reports in the Italian Version [IT]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-alternate-depreciation-methods
    title: Set Up Alternate Depreciation Methods
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-compressed-depreciation-of-fixed-assets
    title: Set Up Compressed Depreciation of Fixed Assets
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-multiple-fixed-asset-cards
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-fixed-assets
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-depreciation-book-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-alternate-depreciation-methods
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-compressed-depreciation-of-fixed-assets
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

> Italian fixed assets in Business Central: alternate depreciation methods (anticipated, accelerated, reduced), compressed depreciation posting, creating multiple fixed asset cards from one purchase invoice, and the Depreciation Book report. It answers setup and usage questions for the Italian version.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > Fixed assets · tier official · system fixed-assets · narrative reviewed (checked by Opus)

## Overview

This section covers the Italian-specific additions to fixed asset management. It has an overview page and four task pages: setting up alternate depreciation methods, setting up compressed depreciation, creating multiple fixed asset cards, and printing the Depreciation Book report.

Start with the overview page, "Italian Fixed Assets in Business Central", to see how the features relate. Then use the setup pages. Alternate depreciation methods are configured through depreciation tables. Compressed depreciation changes how depreciation is posted to the general ledger. The multiple-card feature acts during purchase invoice posting. The Depreciation Book report is for reviewing results.

## Key points

- Alternate depreciation methods are anticipated, accelerated and reduced. They are set up through depreciation tables with period lengths, units and percentages.
- A User-Defined depreciation method is available, along with the calculations Calc. Anticipated Depreciation and Calc. Custom 2 Depreciation.
- Compressed depreciation summarizes compatible depreciation amounts in the general ledger when fixed asset journals are posted. Individual asset entries are kept.
- Compress Depreciation grouping depends on the fixed asset posting type, the depreciation book and the dimension set.
- Multiple fixed asset cards can be created automatically during purchase invoice posting. This suits buying several identical assets from one vendor.
- The multiple-card feature copies the depreciation book and default dimensions, divides the acquisition amount, and uses the fixed asset number configuration.
- The Depreciation Book report shows fixed asset movements by acquisition year, fixed asset class and subclass.
- The report has Starting Date and Ending Date parameters, fixed asset filtering and a Print per Fixed Asset option.

## Learn pages

- [Create Multiple Fixed Asset Cards in the Italian Version [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-create-multiple-fixed-asset-cards): Learn how to create multiple fixed asset cards during purchase invoice posting in Business Central and split the acquisition amount among the assets.
  - In the observatory: [Page 56 "Purchase Orders"](../../../../../objects/page/56.md), [Page 5600 "Fixed Asset Card"](../../../../../objects/page/5600.md), [Page 5601 "Fixed Asset List"](../../../../../objects/page/5601.md)
- [Italian Fixed Assets in Business Central](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-fixed-assets): Learn about the features available for managing fixed assets in Italy, including depreciation methods and automated processes in Business Central.
  - In the observatory: [Report 12119 "Depreciation Book (IT)"](../../../../../objects/report/12119-it.md)
- [Print Depreciation Book Reports in the Italian Version [IT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-print-depreciation-book-reports): Learn how to print the Italian Depreciation Book report in Business Central by acquisition year, asset class, and subclass, with optional asset details.
  - In the observatory: [Report 12119 "Depreciation Book (IT)"](../../../../../objects/report/12119-it.md)
- [Set Up Alternate Depreciation Methods](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-alternate-depreciation-methods): Learn how to set up depreciation tables and enable anticipated, accelerated, or reduced depreciation in the Italian version of Business Central.
- [Set Up Compressed Depreciation of Fixed Assets](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-compressed-depreciation-of-fixed-assets): Learn how to summarize compatible fixed asset depreciation amounts in the general ledger while retaining individual asset entries in Business Central.
  - In the observatory: [Page 5610 "Depreciation Book Card"](../../../../../objects/page/5610.md), [Page 5611 "Depreciation Book List"](../../../../../objects/page/5611.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
