---
id: topic/business-central/business-functionality/local-functionality/italy/general
type: topic
title: General
summary: "General Italy functionality in Business Central: company information setup with Italian fiscal fields, Intrastat journal templates and batches, and the deprecation of Italian subcontracting with migration to the new Subcontracting app. It answers setup and migration questions for Italian companies."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:51.041Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8c562434312e745c9264252586e7d7329339920dc7a4731e76ebf9441630d945
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-subcontracting
    title: Italian Subcontracting and Migration
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-company-information
    title: Set Up Company Information for Italy
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-journal-templates-and-batches
    title: Set Up Journal Templates and Batches
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-subcontracting
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-company-information
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

> General Italy functionality in Business Central: company information setup with Italian fiscal fields, Intrastat journal templates and batches, and the deprecation of Italian subcontracting with migration to the new Subcontracting app. It answers setup and migration questions for Italian companies.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Italy](../italy.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects the general setup topics for Italian localization. Three pages cover it: company information, Intrastat journal setup, and Italian subcontracting with its migration path. There are no subtopics.

Start with the company information page. It covers the general, contact, bank and shipping details, plus Italian fiscal registration fields that reports and electronic documents use. Then set up Intrastat journal templates and batches if the company reports EU trade, before submitting Intrastat reports.

The subcontracting page matters if you use the legacy Italian subcontracting. It is deprecated and hidden by default in version 28.3. A new Subcontracting app replaces it, and the IT Subcontracting Migration app supports migration in sandbox environments.

## Key points

- Company information for Italy includes fiscal code, activity code, REA number and register company number.
- Company information also covers contact, bank and shipping details used in reports and electronic documents.
- Intrastat journal templates and batches are set up before submitting Intrastat reports.
- Intrastat batch setup includes periodicity, entry type (Purchases/Sales), statistics period and corrective entries.
- Italian subcontracting is deprecated and hidden by default in version 28.3.
- Legacy Subcontracting can still be activated if needed.
- The IT Subcontracting Migration app moves data to the new Subcontracting app, available for sandbox environments.
- The new Subcontracting app involves WIP, subcontracting price lists and Production BOM integration.

## Learn pages

- [Italian Subcontracting and Migration](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/italian-subcontracting): Learn about legacy Italian subcontracting in Business Central, check migration prerequisites, and move applicable data to the Subcontracting app.
  - In the observatory: [Page 99000768 "Manufacturing Setup"](../../../../../objects/page/99000768.md)
- [Set Up Company Information for Italy](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-company-information): Learn how to set up required company details on the Company Information page to ensure fiscal documents include complete and accurate information.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md)
- [Set Up Journal Templates and Batches](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Italy/how-to-set-up-journal-templates-and-batches): Learn how the Italian version of Business Central helps EU companies meet the requirement to submit Intrastat reports to the customs office.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 10 objects with no object page: page/12119, page/12132, page/12140, page/12152, page/12153, page/12154, page/12155, page/12156, page/35490, page/35491.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
