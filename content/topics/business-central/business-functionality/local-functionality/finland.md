---
id: topic/business-central/business-functionality/local-functionality/finland
type: topic
title: Finland
summary: "Finland local functionality in Business Central: Finnish VAT and EU trade reporting, electronic banking and payment files, and core finance posting setup. It answers setup and how-to questions for the Finnish version."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:19:26.785Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cddb530596a54424544a3c66f826a94995f9b5586099787e501a740bfcd805d4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/automatic-account-codes
    title: Automatic account codes in the Finnish version
    date: "2025-02-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/electronic-banking-in-finland
    title: Electronic banking in Finland
    date: "2025-02-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/finland-local-functionality
    title: Finland Local Functionality
    date: "2025-12-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-generate-payment-files
    title: Generate Payment Files (FI)
    date: "2025-02-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-disregard-payment-discounts
    title: How to Disregard Payment Discounts
    date: "2025-02-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-finnish-intrastat-reports
    title: How to Print Finnish Intrastat Reports
    date: "2025-02-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-print-vat-information-on-invoices
    title: How to print VAT information on invoices [FI]
    date: "2025-02-13"
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
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/sepa-credit-transfer-payments
    title: SEPA credit transfer payments (FI)
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-bank-reference-files
    title: Set Up Bank Reference Files (FI)
    date: "2025-02-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/vat-vies-declaration-in-finland
    title: VAT-VIES declaration in Finland
    date: "2025-02-13"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/finland-local-functionality
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality
    - topic/business-central/business-functionality/local-functionality/finland/vat
    - topic/business-central/business-functionality/local-functionality/finland/banking-and-payments
    - topic/business-central/business-functionality/local-functionality/finland/core-finance
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Finland
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality
children:
  - topic/business-central/business-functionality/local-functionality/finland/vat
  - topic/business-central/business-functionality/local-functionality/finland/banking-and-payments
  - topic/business-central/business-functionality/local-functionality/finland/core-finance
coverage:
  learn: 12
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 11207
  - 11208
  - 32000000
  - 32000001
  - 32000002
  - 32000004
  - 32000005
  - 32000006
member_hash: db67339f9b9393e63af0de10ca127ecec633a623481e64e42a4d52cc809a7676
narrative: generated
---

# Finland

> Finland local functionality in Business Central: Finnish VAT and EU trade reporting, electronic banking and payment files, and core finance posting setup. It answers setup and how-to questions for the Finnish version.

Path: [Business functionality](../../business-functionality.md) > [Local functionality](../local-functionality.md) > Finland · tier official · system localization · narrative reviewed by Opus

## Overview

This section covers features added to Business Central for Finnish requirements. The landing page gives a short list of what is included: Intrastat reports, VAT information on invoices, the VAT-VIES declaration, electronic banking, bank reference files, payment file generation, SEPA credit transfers and automatic account posting groups.

The detail is split into three subtopics. VAT covers Intrastat printing, VAT information on sales invoices and the VAT-VIES declaration. Banking and payments covers LM03 and LUM2 electronic banking, bank reference file setup, vendor payment files, SEPA credit transfer export and disregarding payment discounts. Core finance covers automatic account codes, automatic account posting group setup and posting of depreciation differences.

Start with the landing page to see the scope, then go to the subtopic that matches your task: VAT for reporting, Banking and payments for domestic and foreign payments, Core finance for posting setup and depreciation.

## Key points

- VAT: print Intrastat reports, show VAT information on sales invoices, and prepare the VAT-VIES declaration.
- Electronic banking uses the LM03 and LUM2 formats.
- Bank reference files have their own setup.
- Payment files can be generated for vendors, for domestic and foreign payments.
- SEPA credit transfer export is supported.
- Payment discounts can be disregarded.
- Core finance includes automatic account codes and automatic account posting group setup.
- Depreciation differences can be posted to the general ledger, as Finnish tax law requires.

## Subtopics

- [VAT](finland/vat.md) (3 pages)
- [Banking & payments](finland/banking-and-payments.md) (5 pages)
- [Core finance](finland/core-finance.md) (3 pages)

## More Learn pages

- [Finland Local Functionality](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/finland-local-functionality): The following articles describe the various local functionality in the Finnish version of Business Central.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 11207, 11208, 32000000, 32000001, 32000002, 32000004, 32000005, 32000006.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
