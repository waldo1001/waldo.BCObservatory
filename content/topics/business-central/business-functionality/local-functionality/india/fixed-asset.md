---
id: topic/business-central/business-functionality/local-functionality/india/fixed-asset
type: topic
title: Fixed asset
summary: Fixed asset depreciation for the India localization of Business Central. It covers how depreciation is calculated with FA blocks, additional depreciation and shift-based methods, and how to set up the books, periods and block codes. It answers questions on calculation and configuration.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:04:01.639Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 913386b5d3c039e9fbd83aee22857f608480cb365640622dfeeb2ca13af47a6a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/FA_Depreciation
    title: FA Depreciation Calculation
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/FA_Overview
    title: Set Up Fixed Asset for Depreciation Calculation
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/FA_Depreciation
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/FA_Overview
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/india
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - India
  - Fixed asset
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/india
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 568b88487625e80682e3200781bafb0d538367a9f41eb72ad44682a8cf7f80fa
narrative: generated
---

# Fixed asset

> Fixed asset depreciation for the India localization of Business Central. It covers how depreciation is calculated with FA blocks, additional depreciation and shift-based methods, and how to set up the books, periods and block codes. It answers questions on calculation and configuration.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > Fixed asset · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers fixed asset depreciation under the India localization. It has two pages: one explains how depreciation is calculated, and one explains how to set up Business Central so the calculation works.

The calculation page describes FA block depreciation, additional depreciation and multiple shift depreciation, using an income tax depreciation book. It mentions straight-line and declining-balance methods. The setup page covers the configuration behind these: FA Depreciation Books, FA Accounting Period for Income Tax, FA Block Code and additional depreciation settings.

Start with the calculation page to understand the methods, then use the setup page to configure the books, periods and block codes before running depreciation.

## Key points

- Depreciation can be calculated by FA block, as block-based income tax depreciation.
- Additional depreciation is supported and has its own configuration.
- Shift-based depreciation covers multiple shifts, which suits manufacturing operations.
- An income tax depreciation book is used for the calculation.
- Straight-line and declining-balance methods are mentioned.
- Setup involves FA Depreciation Books, FA Accounting Period for Income Tax and FA Block Code.
- The section has no subtopics, only a calculation page and a setup page.

## Learn pages

- [FA Depreciation Calculation](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/FA_Depreciation): Learn how to calculate fixed asset depreciation, including FA block, additional depreciation, and multiple shift scenarios for India in Business Central.
  - In the observatory: [Page 5600 "Fixed Asset Card"](../../../../../objects/page/5600.md), [Page 5628 "Fixed Asset G/L Journal"](../../../../../objects/page/5628.md), [Page 5629 "Fixed Asset Journal"](../../../../../objects/page/5629.md)
- [Set Up Fixed Asset for Depreciation Calculation](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/FA_Overview): Set up fixed asset depreciation books, accounting periods, asset blocks, and additional depreciation for the India localization of Business Central.
  - In the observatory: [Page 5615 "FA Classes"](../../../../../objects/page/5615.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
