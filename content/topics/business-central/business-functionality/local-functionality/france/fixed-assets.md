---
id: topic/business-central/business-functionality/local-functionality/france/fixed-assets
type: topic
title: Fixed assets
summary: French fixed assets in Business Central, focused on accelerated depreciation. It covers how the tax and accounting depreciation books differ, how to set them up, and how to run the Calculate Depreciation batch job. It answers setup and calculation questions for the French localization.
tier: official
language: en
system: fixed-assets
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:31.109Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 23ee714dfd06b2c73d235514020041dd4246c954c7875e621ce40e97c924c0e0
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/accelerated-depreciation
    title: Accelerated Depreciation [FR]
    date: "2025-04-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-calculate-accelerated-depreciation
    title: How to Calculate Accelerated Depreciation [FR]
    date: "2025-04-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-accelerated-depreciation
    title: Set Up Accelerated Depreciation
    date: "2025-04-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/accelerated-depreciation
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-calculate-accelerated-depreciation
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-accelerated-depreciation
  objects: []
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
  code: 0
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

> French fixed assets in Business Central, focused on accelerated depreciation. It covers how the tax and accounting depreciation books differ, how to set them up, and how to run the Calculate Depreciation batch job. It answers setup and calculation questions for the French localization.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [France](../france.md) > Fixed assets · tier official · system fixed-assets · narrative reviewed by Opus

## Overview

This section covers one topic for the French localization: accelerated depreciation of fixed assets. It applies to companies that meet specific size criteria. The feature calculates the differences between tax depreciation and accounting depreciation, and it uses derogatory posting types to record those differences.

The three pages follow a natural order. The concept page explains the method and why separate accounting and tax depreciation books are needed. The setup page describes how to configure the depreciation books, including integration settings and the derogatory calculation. The how-to page describes running the Calculate Depreciation batch job and where the resulting entries go.

Start with the Accelerated Depreciation page for the concepts. Then follow the setup page before you calculate anything, because the batch job needs both books to exist on the fixed asset.

## Key points

- Accelerated depreciation in the French localization calculates differences between tax and accounting depreciation books.
- It applies to companies meeting specific size criteria.
- Derogatory posting types are used to record the differences.
- Setup requires separate accounting and tax depreciation books with specific integration settings.
- The Derogatory Calculation field on the depreciation books is part of the setup.
- The Calculate Depreciation batch job is used, with options such as force number of days, posting date and balancing account.
- Entries go to the general journal or the fixed asset journal depending on the book type.
- The fixed asset must have both an accounting and a tax depreciation book.

## Learn pages

- [Accelerated Depreciation [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/accelerated-depreciation): Learn how to use the accelerated depreciation method to post the extra tax amounts if they meet specified criteria in the French version.
- [How to Calculate Accelerated Depreciation [FR]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-calculate-accelerated-depreciation): In Business Central, you calculate periodic depreciation for fixed assets by using the Calculate Depreciation batch job.
- [Set Up Accelerated Depreciation](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/France/how-to-set-up-accelerated-depreciation): Set up depreciation books for fixed assets to use accelerated depreciation calculations in Business Central.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 5610, 5611, 5612.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
