---
id: topic/business-central/business-functionality/set-up-business-central/set-up-banking
type: topic
title: Set up banking
summary: "Banking setup in Business Central: bank account cards, bank statement import, payment file export, check layouts, Envestnet Yodlee bank feeds and the AMC Banking 365 Fundamentals extension. It answers questions on connecting banks, reconciling payments and choosing formats."
tier: official
language: en
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-12T00:57:40.556Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f9c87f637ca903ab9696563d860c31517b9ed402ddd9446940102689a9a9b7b9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/bank-setup-banking
    title: Banking Setup in Business Central
    date: "2026-10-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/banks-formats-faq
    title: How to use banking and payment formats in Business Central
    date: "2024-09-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-define-check-layouts
    title: Select a Check Layout in Business Central
    date: "2026-11-11"
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
    url: https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service
    title: Set Up Yodlee Bank Feeds
    date: "2024-03-20"
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
    - https://learn.microsoft.com/dynamics365/business-central/bank-setup-banking
    - https://learn.microsoft.com/dynamics365/business-central/banks-formats-faq
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-define-check-layouts
    - https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-accounts
    - https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service
    - https://learn.microsoft.com/dynamics365/business-central/ui-extensions-amc-banking
  objects:
    - object/page/370
    - object/page/371
    - object/page/372
    - object/page/373
    - object/page/374
    - object/page/375
    - object/page/404
    - object/page/423
    - object/page/424
    - object/page/425
    - object/page/426
    - object/page/1200
    - object/page/1240
    - object/page/1280
    - object/page/1290
    - object/page/20100
    - object/page/20101
    - object/page/20102
    - object/page/20105
    - object/page/20106
    - object/page/20107
    - object/page/20109
    - object/page/20353
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
  code: 23
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

> Banking setup in Business Central: bank account cards, bank statement import, payment file export, check layouts, Envestnet Yodlee bank feeds and the AMC Banking 365 Fundamentals extension. It answers questions on connecting banks, reconciling payments and choosing formats.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Set up banking · tier official · system none · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers how to prepare Business Central to work with banks. It starts with bank account cards, including currency and posting group, which support payment reconciliation, bank reconciliation, and import and export of bank files in local and foreign currencies.

Beyond the account itself, the pages cover three ways to exchange data with banks. Envestnet Yodlee Bank Feeds imports statements automatically into the Payment Reconciliation Journal. The AMC Banking 365 Fundamentals extension converts bank data into formats for over 600 banks. Partner apps and marketplace solutions, plus built-in options in some countries or regions, cover other payment formats such as SEPA credit transfer and direct debit. A separate page covers selecting a check layout for printing checks.

Start with "Banking Setup in Business Central" for the overview and the choice between apps and file formats, then "Set up bank accounts". Go to the Yodlee, AMC or check layout pages once you know which method you need.

## Key points

- Bank accounts are set up with currency and posting group, and support multi-currency, payment reconciliation and bank reconciliation.
- Bank statements can be imported from files such as CSV, and payments exported, including SEPA credit transfers and direct debit.
- Envestnet Yodlee Bank Feeds imports electronic bank statements automatically into the Payment Reconciliation Journal, about every two hours, in supported regions.
- Yodlee setup includes linking online bank accounts, creating bank accounts and managing credentials.
- AMC Banking 365 Fundamentals converts bank data for over 600 banks and supports SWIFT, IBAN and credit transfer messaging.
- Check layouts can follow US and Canadian formats, with several checks per page, stub options, and MICR E-13B, MICR CMC-7 and security fonts (15.3 and later).
- Banking and payment formats are mostly provided by partner apps and marketplace solutions, with built-in options for select countries or regions.

## Learn pages

- [Banking Setup in Business Central](https://learn.microsoft.com/dynamics365/business-central/bank-setup-banking): Set up bank accounts in Business Central, choose statement import and payment export formats, and find banking apps that support your bank.
- [How to use banking and payment formats in Business Central](https://learn.microsoft.com/dynamics365/business-central/banks-formats-faq): Learn how to find and use banking and payment formats that suit your needs and comply with your country and bank requirements in Business Central.
- [Select a Check Layout in Business Central](https://learn.microsoft.com/dynamics365/business-central/finance-how-define-check-layouts): Select a check report and layout in Business Central, compare North American check formats, and learn about MICR and check security fonts.
  - In the observatory: [Page 256 "Payment Journal"](../../../../objects/page/256.md), [Report 1401 "Check"](../../../../objects/report/1401.md)
- [Set up bank accounts](https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-accounts): Learn how bank accounts are used in Business Central, and how you can reconcile amounts with your bank.
  - In the observatory: [Page 1290 "Payment Reconciliation Journal"](../../../../objects/page/1290.md), [Page 35630 "Bank Accounts (RU)"](../../../../objects/page/35630-ru.md)
- [Set Up Yodlee Bank Feeds](https://learn.microsoft.com/dynamics365/business-central/bank-how-setup-bank-statement-service): You can convert payment information to any data format that your bank requires and enable the export or import of bank files.
  - In the observatory: [Page 35630 "Bank Accounts (RU)"](../../../../objects/page/35630-ru.md), [Page 370 "Bank Account Card"](../../../../objects/page/370.md)
- [Using the AMC banking 365 fundamentals extension](https://learn.microsoft.com/dynamics365/business-central/ui-extensions-amc-banking): Learn how to easily exchange data with your banks by transforming data into the format that they require.
  - In the observatory: [Page 35630 "Bank Accounts (RU)"](../../../../objects/page/35630-ru.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 370 "Bank Account Card"](../../../../objects/page/370.md) · on [Table 270 "Bank Account"](../../../../objects/table/270.md)
- [Page 371 "Bank Account List"](../../../../objects/page/371.md) · captioned "Bank Accounts" · on [Table 270 "Bank Account"](../../../../objects/table/270.md)
- [Page 372 "Bank Account Ledger Entries"](../../../../objects/page/372.md) · on [Table 271 "Bank Account Ledger Entry"](../../../../objects/table/271.md)
- [Page 373 "Bank Account Posting Groups"](../../../../objects/page/373.md) · on [Table 277 "Bank Account Posting Group"](../../../../objects/table/277.md)
- [Page 374 "Check Ledger Entries"](../../../../objects/page/374.md) · on [Table 272 "Check Ledger Entry"](../../../../objects/table/272.md)
- [Page 375 "Bank Account Statistics"](../../../../objects/page/375.md) · on [Table 270 "Bank Account"](../../../../objects/table/270.md)
- [Page 404 "Check Preview"](../../../../objects/page/404.md) · on [Table 81 "Gen. Journal Line"](../../../../objects/table/81.md)
- [Page 423 "Customer Bank Account Card"](../../../../objects/page/423.md) · on [Table 287 "Customer Bank Account"](../../../../objects/table/287.md)
- [Page 424 "Customer Bank Account List"](../../../../objects/page/424.md) · on [Table 287 "Customer Bank Account"](../../../../objects/table/287.md)
- [Page 425 "Vendor Bank Account Card"](../../../../objects/page/425.md) · on [Table 288 "Vendor Bank Account"](../../../../objects/table/288.md)
- [Page 426 "Vendor Bank Account List"](../../../../objects/page/426.md) · on [Table 288 "Vendor Bank Account"](../../../../objects/table/288.md)
- [Page 1200 "Bank Export/Import Setup"](../../../../objects/page/1200.md) · on [Table 1200 "Bank Export/Import Setup"](../../../../objects/table/1200.md)
- [Page 1240 "SWIFT Codes"](../../../../objects/page/1240.md) · on [Table 1210 "SWIFT Code"](../../../../objects/table/1210.md)
- [Page 1280 "Bank Clearing Standards"](../../../../objects/page/1280.md) · on [Table 1280 "Bank Clearing Standard"](../../../../objects/table/1280.md)
- [Page 1290 "Payment Reconciliation Journal"](../../../../objects/page/1290.md) · on [Table 274 "Bank Acc. Reconciliation Line"](../../../../objects/table/274.md)
- [Page 20100 "AMC Bank Bank Name List"](../../../../objects/page/20100.md) · captioned "AMC Banking Bank Name List" · on [Table 20100 "AMC Bank Banks"](../../../../objects/table/20100.md)
- [Page 20101 "AMC Banking Setup"](../../../../objects/page/20101.md) · on [Table 20101 "AMC Banking Setup"](../../../../objects/table/20101.md)
- [Page 20102 "AMC Bank Pmt. Types"](../../../../objects/page/20102.md) · captioned "AMC Banking Payment Types" · on [Table 20102 "AMC Bank Pmt. Type"](../../../../objects/table/20102.md)
- [Page 20105 "AMC Bank Assisted Setup"](../../../../objects/page/20105.md) · captioned "AMC Banking 365 Fundamentals Assisted Setup" · on [Table 20101 "AMC Banking Setup"](../../../../objects/table/20101.md)
- [Page 20106 "AMC Bank Assist Bank Account"](../../../../objects/page/20106.md) · on [Table 777 "Online Bank Acc. Link"](../../../../objects/table/777.md)
- [Page 20107 "AMC Bank Webcall Log"](../../../../objects/page/20107.md) · captioned "AMC Banking 365 Webservice Log" · on [Table 710 "Activity Log"](../../../../objects/table/710.md)
- [Page 20109 "AMC Bank Signup to Service"](../../../../objects/page/20109.md) · captioned "AMC Banking Signup webservice" · on [Table 79 "Company Information"](../../../../objects/table/79.md)
- [Page 20353 "Banking Apps"](../../../../objects/page/20353.md) · on [Table 20350 "Connectivity App"](../../../../objects/table/20350.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
