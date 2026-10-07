---
id: topic/business-central/business-functionality/local-functionality/finland/core-finance
type: topic
title: Core finance
summary: Core finance for the Finnish version of Business Central covers automatic account codes, automatic account posting group setup, and posting of depreciation differences to the general ledger. It answers questions about Finland-specific finance posting setup and depreciation required by Finnish tax law.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:27:27.653Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 82f93f5de17ff0568239b3090ee4a2c49e7d6c8d6506237565440003ed73b9b1
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/automatic-account-codes
    title: Automatic account codes in the Finnish version
    date: "2025-02-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/posting-depreciation-differences
    title: Posting Depreciation Differences [FI]
    date: "2025-02-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-automatic-account-posting-groups
    title: Set Up Automatic Account Posting Groups [FI]
    date: "2025-02-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/automatic-account-codes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/posting-depreciation-differences
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-automatic-account-posting-groups
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/finland
  localizations: []
  videos: []
  posts: []
  guidelines: []
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
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 11207
  - 11208
member_hash: 7d009c3be2750ba978d65bbcd12931ae0d5420cb305e014a1bb689a3ca9060d9
narrative: generated
---

# Core finance

> Core finance for the Finnish version of Business Central covers automatic account codes, automatic account posting group setup, and posting of depreciation differences to the general ledger. It answers questions about Finland-specific finance posting setup and depreciation required by Finnish tax law.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Finland](../finland.md) > Core finance · tier official · system finance · narrative reviewed by Opus

## Overview

This section holds three pages on Finland-specific finance functionality. Two deal with automatic account codes: one describes the feature and the other explains how to set up automatic account posting groups. The third covers posting depreciation differences.

The automatic account code pages work together. The concept page points to the setup procedure and to posting group documentation, and the setup page points back to the concept. Start with the automatic account codes page to understand the purpose, then follow it to the setup page to configure the posting groups.

The depreciation page is separate. It describes calculating and posting to the general ledger the difference between straight-line and declining balance depreciation, as Finnish tax law requires.

## Key points

- Automatic account codes in the Finnish version enable automatic posting group setup for finance operations.
- Automatic account posting groups are set up to configure automatic account code posting.
- The automatic account codes page and the setup page link to each other and to posting group documentation.
- Posting depreciation differences calculates the difference between straight-line and declining balance depreciation.
- The depreciation difference is posted to the general ledger.
- The depreciation difference posting is required by Finnish tax law.
- The section has no subtopics, only three pages.

## Learn pages

- [Automatic account codes in the Finnish version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/automatic-account-codes): You can use customized posting groups to automate recurring transactions in journals, sales documents, or purchase documents in the Finnish version.
- [Posting Depreciation Differences [FI]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/posting-depreciation-differences): Calculate and post the difference in accumulated depreciation between different depreciation methods in the general ledger.
- [Set Up Automatic Account Posting Groups [FI]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-automatic-account-posting-groups): In the Finnish version, an automatic account posting group must be created to use automatic account codes.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 11207, 11208.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
