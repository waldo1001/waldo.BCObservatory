---
id: topic/business-central/business-functionality/local-functionality/italy/general
type: topic
title: General
summary: "Italy general local functionality in Business Central: company information setup, the deprecated Italian Subcontracting feature and its migration, and Intrastat journal templates and batches. Answers setup and configuration questions for Italian localization."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:37.467Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 03ca02899173e7b83605948c41e9de895686cb44ad365768fdf024c204872f14
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-company-information
    title: How to set up company information
    date: "2025-05-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-subcontracting
    title: Italian Subcontracting
    date: "2026-09-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-journal-templates-and-batches
    title: Set Up Journal Templates and Batches (IT)
    date: "2025-05-22"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-company-information
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-subcontracting
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-journal-templates-and-batches
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
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/italy
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 12119
  - 12132
  - 12140
  - 12152
  - 12153
  - 12154
  - 12155
  - 12156
  - 35490
  - 35491
member_hash: fccdfe589199ea4b0834f8d1be2cb022e83b41130dff36ee4ede66dd557c0875
narrative: generated
---

# General

> Italy general local functionality in Business Central: company information setup, the deprecated Italian Subcontracting feature and its migration, and Intrastat journal templates and batches. Answers setup and configuration questions for Italian localization.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > General · tier official · system localization · narrative reviewed by Opus

## Overview

This section collects three general setup topics for the Italian version of Business Central. They are independent of each other, so you can read whichever matches your task.

Company information covers the Company Information page, where general, communication, payment, shipping, and administration details are entered. These details appear in all reports and fiscal documents, so it is a sensible first step. The Intrastat page explains how to create journal templates and batches to record EU trade transactions for submission to tax authorities.

The Italian Subcontracting page describes outsourcing component production through linked BOM and subcontractor operations. It is marked as deprecated and replaced by the Subcontracting app, with a migration available for sandbox environments. Read it before using or migrating legacy subcontracting data.

## Key points

- Company Information page holds general, communication, payment, shipping, and administration details.
- Company information appears in all reports and fiscal documents.
- Intrastat journal templates are set up with a name and description.
- Intrastat journal batches are configured with periodicity, type, statistics period, and currency information.
- Intrastat journals record EU trade transactions for submission to tax authorities.
- Italian Subcontracting uses BOM linking, subcontractor price lists, and Work in Progress (WIP).
- Italian Subcontracting is deprecated and replaced by the Subcontracting app.
- The IT Subcontracting Migration app is available for sandbox environments; the page mentions versions 27.0 and 28.3.

## Learn pages

- [How to set up company information](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-company-information): Learn how to set up required company details on the Company Information page to ensure fiscal documents include complete and accurate information.
- [Italian Subcontracting](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-subcontracting): Master Production Scheduling (MPS) and Material Requirements Planning (MRP) enable contractors to efficiently manage outsourced and subcontracted components.
- [Set Up Journal Templates and Batches (IT)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-journal-templates-and-batches): Learn how the Italian version of Business Central helps EU companies meet the requirement to submit Intrastat reports to the customs office.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 12119, 12132, 12140, 12152, 12153, 12154, 12155, 12156, 35490, 35491.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
