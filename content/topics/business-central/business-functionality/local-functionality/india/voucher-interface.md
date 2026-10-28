---
id: topic/business-central/business-functionality/local-functionality/india/voucher-interface
type: topic
title: Voucher interface
summary: "Voucher interface for the Indian localization of Business Central: six voucher types (Journal, Bank Receipt, Bank Payment, Cash Receipt, Cash Payment, Contra), how they are set up, and how transactions are recorded. It answers questions about voucher configuration and debit/credit and GL posting rules."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:57.638Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 7e60db308174f67b2d3e16b1d275d623fd6e3089f09017e199315ffeeaed1313
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Vouche-Interface-Overview
    title: Overview of Voucher Interface
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Voucher-Interface-Transactions
    title: Voucher Transaction
    date: "2026-10-21"
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

> Voucher interface for the Indian localization of Business Central: six voucher types (Journal, Bank Receipt, Bank Payment, Cash Receipt, Cash Payment, Contra), how they are set up, and how transactions are recorded. It answers questions about voucher configuration and debit/credit and GL posting rules.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > Voucher interface · tier official · system development · narrative reviewed (checked by Opus)

## Overview

The Voucher interface is a feature of the India localization. It records journal entries in a structured way using voucher types. Each type routes a transaction based on the account type and the direction of the entry.

The section has two pages and no subtopics. "Overview of Voucher Interface" explains the voucher types and how to configure them through General Journal Templates, Batches, and Voucher Setup at company and location levels. "Voucher Transaction" covers how cash, bank, and journal entries are recorded, with the debit/credit rules and GL posting patterns for each type.

Start with the overview to set up templates, batches, and voucher setup. Then use the transaction page to see how a specific voucher type behaves when you post.

## Key points

- Six voucher types: Journal, Bank Receipt, Bank Payment, Cash Receipt, Cash Payment, and Contra.
- Vouchers route transactions based on account type and direction (debit or credit).
- Configuration uses General Journal Templates, Batches, and Voucher Setup.
- Voucher Setup can be defined at company level and at location level.
- The Voucher Transaction page covers cash, bank, and journal entries.
- Each voucher type has specific debit/credit rules and GL posting patterns.
- The feature belongs to the India localization only.

## Learn pages

- [Overview of Voucher Interface](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Vouche-Interface-Overview): Set up journal templates, batches, voucher directions, and permitted accounts for cash and bank transactions in Business Central for India.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 101 "General Journal Templates"](../../../../../objects/page/101.md), [Page 36957 "Locations"](../../../../../objects/page/36957.md)
- [Voucher Transaction](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/Voucher-Interface-Transactions): Record cash, bank, contra, and journal voucher transactions, review posting examples, and print posted vouchers in Business Central for India.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9479 [Master]-]Withholding Tax Entries are not generated at payment because the Withholding Tax. Prod. Posting Group field gets not transferred to the payment line](../../../../../changes/bcapps/9479.md) (code change): "Withholding Tax Prod. Posting Group field is now carried over to the payment line"
- [#9481 [Withholding Tax] FCY documents get wrongly rounded to LCY precision …](../../../../../changes/bcapps/9481.md) (code change): "Foreign currency withholding tax documents no longer incorrectly round amounts"
- [#9515 [Master] - 'Greater Than' Withholding Tax Calculation Rule is not applied correctly in Withholding Tax Posting Setup.](../../../../../changes/bcapps/9515.md) (code change): "withholding tax calculation rule was not 'Less than'. New ShouldCreateWithholdingTax procedure"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
