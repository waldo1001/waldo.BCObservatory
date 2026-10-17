---
id: topic/business-central/business-functionality/local-functionality/finland/core-finance
type: topic
title: Core finance
summary: "Finnish core finance localization in Business Central: automatic account codes, automatic account posting groups, and posting of depreciation differences. It answers questions about setting up posting groups and meeting the Finnish tax requirement for depreciation differences."
tier: official
language: en
system: finance
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
  input_hash: e1718ffb8370ce73496e3ab611941e1d3ac7f727e64cc8ea3e3922757ed7d717
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/automatic-account-codes
    title: Automatic account codes in the Finnish version
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/posting-depreciation-differences
    title: Posting Depreciation Differences [FI]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-automatic-account-posting-groups
    title: Set Up Automatic Account Posting Groups [FI]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/automatic-account-codes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/posting-depreciation-differences
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-automatic-account-posting-groups
  objects:
    - object/page/4850
    - object/page/4852
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/finland
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9405
learn_toc_path:
  - Business functionality
  - Local functionality
  - Finland
  - Core finance
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/finland
children: []
coverage:
  learn: 3
  code: 2
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 4850
  - 4852
member_hash: 7d009c3be2750ba978d65bbcd12931ae0d5420cb305e014a1bb689a3ca9060d9
narrative: generated
---

# Core finance

> Finnish core finance localization in Business Central: automatic account codes, automatic account posting groups, and posting of depreciation differences. It answers questions about setting up posting groups and meeting the Finnish tax requirement for depreciation differences.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Finland](../finland.md) > Core finance · tier official · system finance · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers three Finland-specific finance topics in Business Central. Two relate to posting groups: one page describes automatic account codes in the Finnish version, and another explains how to set up automatic account posting groups so accounts post to the general ledger automatically.

The third page covers posting depreciation differences. Finnish tax rules require calculating and posting accumulated depreciation differences between straight-line and declining balance methods, and the page describes how this is handled.

To start, read the automatic account codes page for the concept, then follow the setup page for automatic account posting groups. Use the depreciation differences page when working with fixed asset depreciation for tax purposes.

## Key points

- Automatic account codes in the Finnish version enable automatic posting group setup.
- A setup page explains how to configure automatic account posting groups for automatic posting to the general ledger.
- Depreciation difference posting addresses a Finnish tax requirement.
- The difference is calculated between straight-line and declining balance depreciation.
- Accumulated depreciation differences are posted as part of this process.
- The section has three pages and no subtopics.

## Learn pages

- [Automatic account codes in the Finnish version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/automatic-account-codes): You can use customized posting groups to automate recurring transactions in journals, sales documents, or purchase documents in the Finnish version.
- [Posting Depreciation Differences [FI]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/posting-depreciation-differences): Calculate and post the difference in accumulated depreciation between different depreciation methods in the general ledger.
- [Set Up Automatic Account Posting Groups [FI]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-automatic-account-posting-groups): In the Finnish version, an automatic account posting group must be created to use automatic account codes.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9405 [FI] Delocalize FI Currency Exchange Rate import into FI Core](../../../../../changes/bcapps/9405.md) (code change): "Finnish currency exchange rate import functionality moved from the base application"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 4850 "Automatic Account Header"](../../../../../objects/page/4850.md) · captioned "Automatic Account Groups" · on [Table 4850 "Automatic Account Header"](../../../../../objects/table/4850.md)
- [Page 4852 "Automatic Account List"](../../../../../objects/page/4852.md) · captioned "Automatic Account Groups" · on [Table 4850 "Automatic Account Header"](../../../../../objects/table/4850.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
