---
id: topic/business-central/business-functionality/local-functionality/france/fixed-assets
type: topic
title: Fixed assets
summary: French fixed assets functionality in Business Central, focused on accelerated depreciation. It answers questions about setting up accounting and tax depreciation books, derogatory posting, and running the Calculate Depreciation batch job for French tax requirements.
tier: official
language: en
system: fixed-assets
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-17T01:13:14.128Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9c7a5bf0457fcf7ceaa96febca6c9fa1d3dad04a2a1f8ef1528c433c7c5e6a8a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/accelerated-depreciation
    title: Accelerated Depreciation [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-calculate-accelerated-depreciation
    title: How to Calculate Accelerated Depreciation [FR]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-accelerated-depreciation
    title: Set Up Accelerated Depreciation
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/accelerated-depreciation
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-calculate-accelerated-depreciation
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-accelerated-depreciation
  objects:
    - object/page/5610
    - object/page/5611
    - object/page/5612
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/france
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - France
  - Fixed assets
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/france
children: []
coverage:
  learn: 3
  code: 3
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5610
  - 5611
  - 5612
member_hash: 3e1ec5cdc7f08d7e6afb03c1b92a38eabe3337d39f8181ace5034f64ac871a1f
narrative: generated
---

# Fixed assets

> French fixed assets functionality in Business Central, focused on accelerated depreciation. It answers questions about setting up accounting and tax depreciation books, derogatory posting, and running the Calculate Depreciation batch job for French tax requirements.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [France](../france.md) > Fixed assets · tier official · system fixed-assets · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers accelerated depreciation in the French version. Companies that meet specific criteria can post extra tax amounts required by French tax authorities. The feature calculates the differences between a tax depreciation book and an accounting depreciation book for each fixed asset.

The three pages follow a natural order. One page explains the concept: the accelerated depreciation method, the derogatory fixed asset posting type and the derogatory account setup. A second page, "Set Up Accelerated Depreciation", covers configuration of the depreciation books and posting groups. A third page, "How to Calculate Accelerated Depreciation", describes running the calculation.

Start with the overview page to understand the derogatory approach. Then complete the setup before you run the Calculate Depreciation batch job.

## Key points

- Accelerated depreciation computes differences between tax and accounting depreciation books for a fixed asset.
- It lets companies meeting specific criteria post extra tax amounts required by French tax authorities.
- Setup uses the Derogatory field and the Integration FastTab on the depreciation books.
- The FA posting group and derogatory account setup must be configured, along with Derogatory Calculation.
- Both an accounting depreciation book and a tax depreciation book must be linked to the fixed asset.
- Calculation is done with the Calculate Depreciation batch job.
- Batch job options mentioned include Force No. of Days and Use Same FA + G/L Posting Dates.
- Balancing accounts are part of the calculation and posting.

## Learn pages

- [Accelerated Depreciation [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/accelerated-depreciation): Learn how to use the accelerated depreciation method to post the extra tax amounts if they meet specified criteria in the French version.
- [How to Calculate Accelerated Depreciation [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-calculate-accelerated-depreciation): In Business Central, you calculate periodic depreciation for fixed assets by using the Calculate Depreciation batch job.
- [Set Up Accelerated Depreciation](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-accelerated-depreciation): Set up depreciation books for fixed assets to use accelerated depreciation calculations in Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5610 "Depreciation Book Card"](../../../../../objects/page/5610.md) · on [Table 5611 "Depreciation Book"](../../../../../objects/table/5611.md)
- [Page 5611 "Depreciation Book List"](../../../../../objects/page/5611.md) · captioned "Depreciation Books" · on [Table 5611 "Depreciation Book"](../../../../../objects/table/5611.md)
- [Page 5612 "FA Posting Group Card"](../../../../../objects/page/5612.md) · on [Table 5606 "FA Posting Group"](../../../../../objects/table/5606.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
