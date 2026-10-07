---
id: topic/business-central/business-functionality/set-up-business-central/set-up-banking
type: topic
title: Set up banking
summary: "Banking setup in Business Central: bank account cards, bank feeds (Envestnet Yodlee), AMC Banking 365 Fundamentals, SEPA and other payment formats, and check layouts. It answers questions about configuring bank accounts, importing statements, exporting payments, and printing checks."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:09.100Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 35f4e56358be991c759b99240ef9e2106dd6e848cd0a2905839a17753b70298e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/banks-formats-faq
    title: How to use banking and payment formats in Business Central
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-accounts
    title: Set up bank accounts
    date: "2025-06-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-setup-banking
    title: Set Up Banking
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service
    title: Set Up Yodlee Bank Feeds
    date: "2024-03-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-define-check-layouts
    title: Specify the Layout of a Check
    date: "2024-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/ui-extensions-amc-banking
    title: Using the AMC banking 365 fundamentals extension
    date: "2024-07-18"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/banks-formats-faq
    - https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-accounts
    - https://learn.microsoft.com/dynamics365/business-central/bank-setup-banking
    - https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-define-check-layouts
    - https://learn.microsoft.com/dynamics365/business-central/ui-extensions-amc-banking
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Set up banking
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 370
  - 371
  - 372
  - 373
  - 374
  - 375
  - 404
  - 423
  - 424
  - 425
  - 426
  - 1200
  - 1240
  - 1280
  - 1290
  - 20100
  - 20101
  - 20102
  - 20105
  - 20106
  - 20107
  - 20109
  - 20353
member_hash: 0ca1cc20f0d375b461b895aced2339861a8c2abd956e1bdced602f21df1bdc87
narrative: generated
---

# Set up banking

> Banking setup in Business Central: bank account cards, bank feeds (Envestnet Yodlee), AMC Banking 365 Fundamentals, SEPA and other payment formats, and check layouts. It answers questions about configuring bank accounts, importing statements, exporting payments, and printing checks.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up banking · tier official · system none · narrative reviewed by Opus

## Overview

This section covers how to prepare Business Central for banking work. It starts with bank accounts, which track banking transactions, support local and foreign currencies, and enable payment and bank reconciliation, plus import and export of bank files.

Other pages cover electronic services. Yodlee bank feeds import statements automatically into the Payment Reconciliation Journal. The AMC Banking 365 Fundamentals extension converts bank data into formats required by many banks. A general page explains how payment formats are provided through partner apps and marketplace solutions, with built-in options in some countries or regions. A separate page covers check layouts and MICR fonts.

Start with "Set Up Banking" and "Set up bank accounts" for the basics. Then pick the page for your method: Yodlee for online feeds, AMC for format conversion, or the check layout page for printed checks.

## Key points

- Bank accounts track transactions, support local and foreign currencies, and enable payment reconciliation and bank reconciliation.
- Bank accounts support bank file import and export, direct debit, and SEPA credit transfer.
- Payment formats come mainly from partner apps and marketplace solutions, with built-in options in select countries or regions.
- Envestnet Yodlee bank feeds import statements automatically into the Payment Reconciliation Journal, with a two-hour import frequency, in supported regions.
- Yodlee setup includes linking online bank accounts, creating bank accounts, and managing credentials.
- AMC Banking 365 Fundamentals converts bank data for over 600 banks worldwide, exports payment journal data, and imports bank statements, with SWIFT and IBAN support.
- Check layout setup lets you choose predefined North American check formats and stub configurations, and set MICR E-13B, MICR CMC-7, and security fonts.

## Learn pages

- [How to use banking and payment formats in Business Central](https://learn.microsoft.com/dynamics365/business-central/banks-formats-faq): Learn how to find and use banking and payment formats that suit your needs and comply with your country and bank requirements in Business Central.
- [Set up bank accounts](https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-accounts): Learn how bank accounts are used in Business Central, and how you can reconcile amounts with your bank.
- [Set Up Banking](https://learn.microsoft.com/dynamics365/business-central/bank-setup-banking): You use bank account cards to keep track of your bank accounts and set up bank feeds, such as Yodlee, to exchange data.
- [Set Up Yodlee Bank Feeds](https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service): You can convert payment information to any data format that your bank requires and enable the export or import of bank files.
- [Specify the Layout of a Check](https://learn.microsoft.com/dynamics365/business-central/finance-how-define-check-layouts): You can design and print your checks in different formats to conform with standards set by your local authorities.
- [Using the AMC banking 365 fundamentals extension](https://learn.microsoft.com/dynamics365/business-central/ui-extensions-amc-banking): Learn how to easily exchange data with your banks by transforming data into the format that they require.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 370, 371, 372, 373, 374, 375, 404, 423, 424, 425, 426, 1200, 1240, 1280, 1290, 20100, 20101, 20102, 20105, 20106, 20107, 20109, 20353.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
