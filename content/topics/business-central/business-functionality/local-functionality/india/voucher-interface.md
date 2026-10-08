---
id: topic/business-central/business-functionality/local-functionality/india/voucher-interface
type: topic
title: Voucher interface
summary: Voucher interface for India in Business Central covers recording day-to-day transactions with journal, bank receipt, bank payment, cash receipt, cash payment, and contra vouchers. It answers questions about voucher types, journal templates and batches, mandatory fields, and GL entry examples.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:53.939Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 22a146c898cd695d0c304153933b527b85dc90019202ce296ee596d9a68d0b55
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Vouche-Interface-Overview
    title: Overview on Voucher Interface
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Voucher-Interface-Transactions
    title: Transaction on Voucher Interface
    date: "2025-06-30"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Vouche-Interface-Overview
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Voucher-Interface-Transactions
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/india
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9479
    - change/bcapps/9481
    - change/bcapps/9515
learn_toc_path:
  - Business functionality
  - Local functionality
  - India
  - Voucher interface
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
member_hash: 6cc603d5582dd7853caac565859e4466aab28a3242f00e21a9de9cb6090c0af6
narrative: generated
---

# Voucher interface

> Voucher interface for India in Business Central covers recording day-to-day transactions with journal, bank receipt, bank payment, cash receipt, cash payment, and contra vouchers. It answers questions about voucher types, journal templates and batches, mandatory fields, and GL entry examples.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > Voucher interface · tier official · system development · narrative reviewed (checked by Opus)

## Overview

The voucher interface is an India local functionality for recording daily transactions through voucher types: journal, bank receipt, bank payment, cash receipt, cash payment, and contra. It uses journal templates and batches that can be configured for these voucher types.

The section has two pages and no subtopics. The overview page introduces the feature and the six voucher types. The transaction page shows how to record each voucher, with the mandatory fields and GL entry examples for Indian operations.

Start with the overview page to understand the voucher types and the template and batch setup. Then use the transaction page when you need to enter a specific voucher or check the resulting GL entries.

## Key points

- Six voucher types are supported: journal, bank receipt, bank payment, cash receipt, cash payment, and contra.
- Journal templates and batches are configurable for the voucher interface.
- The feature is for recording day-to-day transactions in Indian operations.
- The transaction page lists mandatory fields for the cash, bank, contra, and journal vouchers.
- The transaction page gives GL entry examples for the vouchers.
- The section has two pages: an overview and a transactions page.

## Learn pages

- [Overview on Voucher Interface](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Vouche-Interface-Overview): Provides an overview of the Voucher Interface feature for Indian localization in Business Central.
- [Transaction on Voucher Interface](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Voucher-Interface-Transactions): Learn how to record day-to-day transactions using the voucher interface in Business Central for India.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9479 [Master]-]Withholding Tax Entries are not generated at payment because the Withholding Tax. Prod. Posting Group field gets not transferred to the payment line](../../../../../changes/bcapps/9479.md) (code change): "Withholding Tax Prod. Posting Group field is now carried over to the payment line"
- [#9481 [Withholding Tax] FCY documents get wrongly rounded to LCY precision …](../../../../../changes/bcapps/9481.md) (code change): "Foreign currency withholding tax documents no longer incorrectly round amounts"
- [#9515 [Master] - 'Greater Than' Withholding Tax Calculation Rule is not applied correctly in Withholding Tax Posting Setup.](../../../../../changes/bcapps/9515.md) (code change): "withholding tax calculation rule was not 'Less than'. New ShouldCreateWithholdingTax procedure"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
