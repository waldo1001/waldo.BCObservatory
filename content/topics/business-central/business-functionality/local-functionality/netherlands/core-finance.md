---
id: topic/business-central/business-functionality/local-functionality/netherlands/core-finance
type: topic
title: Core finance
summary: "Core finance for the Netherlands localization of Business Central covers two general ledger topics: applying and unapplying G/L entries, and requiring descriptions on G/L entries. It answers questions about matching or reversing entries and enforcing descriptions for audit trails."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:04:05.144Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 86968d7ef4069b2ef3f9d2b9be1041f72a90bc0b28e708cebe75442221186b8e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-apply-and-unapply-general-ledger-entries
    title: Apply and Unapply General Ledger Entries in the Netherlands
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/required-descriptions-in-g-l-entry
    title: Require Descriptions in General Ledger Entries
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-apply-and-unapply-general-ledger-entries
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/required-descriptions-in-g-l-entry
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/netherlands
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/10511
    - change/bcapps/9068
learn_toc_path:
  - Business functionality
  - Local functionality
  - Netherlands
  - Core finance
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/netherlands
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: f46f16b3229295000e356f7b3476174b4015b0beb37af126ed547f70464f2a57
narrative: generated
---

# Core finance

> Core finance for the Netherlands localization of Business Central covers two general ledger topics: applying and unapplying G/L entries, and requiring descriptions on G/L entries. It answers questions about matching or reversing entries and enforcing descriptions for audit trails.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Netherlands](../netherlands.md) > Core finance · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section holds Netherlands-specific general ledger functionality. It has no subtopics, only two standalone pages, so each can be read on its own.

The first page explains how to apply and unapply general ledger entries in the Dutch version, which lets users manually match entries or reverse a match. The second page explains how to configure G/L accounts so users must type a description in journal lines instead of relying on the default account name. Posting is blocked when the description is blank.

Start with the apply and unapply page if your question is about matching entries. Use the description page if you need better documentation in the audit trail.

## Key points

- G/L entries can be applied manually in the Netherlands localization.
- Applied G/L entries can be unapplied to reverse the match.
- G/L accounts can be set to require a description instead of the default account name.
- The setting is called Omit Default Descr. in Jnl.
- With required descriptions on, posting with a blank description is blocked.
- Required descriptions are meant to improve audit trail documentation.

## Learn pages

- [Apply and Unapply General Ledger Entries in the Netherlands](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/how-to-apply-and-unapply-general-ledger-entries): Learn about the retired Dutch G/L entry application feature and use account review to track and confirm general ledger balances in Business Central.
- [Require Descriptions in General Ledger Entries](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Netherlands/required-descriptions-in-g-l-entry): Require a meaningful description on journal lines by omitting the default G/L account description in the Dutch version of Business Central.
  - In the observatory: [Page 17 "G/L Account Card"](../../../../../objects/page/17.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10511 [NL][Telebank] Payment History export crashes when combining entries](../../../../../changes/bcapps/10511.md) (code change): "Payment history export in Dutch telebank functionality no longer crashes"
- [#9068 [master][ALAppExtensions #30085][Event Request] Codeunit 11000007 "Check BTL91" - OnBeforeCheckFreelyTransferableMaximumAmount](../../../../../changes/bcapps/9068.md) (code change): "Dutch localization now has an OnBeforeCheckFreelyTransferableMaximumAmount event"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
