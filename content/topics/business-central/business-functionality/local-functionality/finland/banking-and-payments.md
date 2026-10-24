---
id: topic/business-central/business-functionality/local-functionality/finland/banking-and-payments
type: topic
title: Banking & payments
summary: "Finnish banking and payments in Business Central: electronic banking with bank reference files, domestic (LM03) and foreign (LUM2) payments, SEPA credit transfer export, payment file generation, and the payment discount disregard setting. It answers setup and how-to questions for importing customer payments and exporting vendor payments in Finland."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:05.956Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f8955c7bb1d1a98e13b67f983d26cba7b6ba52e2ec0a8b3ed33e68100508f433
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/electronic-banking-in-finland
    title: Electronic banking in Finland
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-generate-payment-files
    title: Generate Payment Files (FI)
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-disregard-payment-discounts
    title: How to Disregard Payment Discounts
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/sepa-credit-transfer-payments
    title: SEPA credit transfer payments (FI)
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-bank-reference-files
    title: Set Up Bank Reference Files (FI)
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/electronic-banking-in-finland
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-generate-payment-files
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-disregard-payment-discounts
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/sepa-credit-transfer-payments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-bank-reference-files
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
  - Banking & payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/finland
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 32000000
  - 32000001
  - 32000002
  - 32000004
  - 32000005
  - 32000006
member_hash: ce2f5a4ce8e68b225ad679f383d81283370742b7bb9660b7b76dc6eb3e156ba6
narrative: generated
---

# Banking & payments

> Finnish banking and payments in Business Central: electronic banking with bank reference files, domestic (LM03) and foreign (LUM2) payments, SEPA credit transfer export, payment file generation, and the payment discount disregard setting. It answers setup and how-to questions for importing customer payments and exporting vendor payments in Finland.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Finland](../finland.md) > Banking & payments · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers the Finnish localization of banking and payments. It centers on electronic banking, where bank reference files are used to import customer payments and export vendor payments, for both domestic and foreign payments.

The pages fit together as a flow. Start with "Electronic banking in Finland" for the overview of domestic (LM03) and foreign (LUM2) payments and reference number automation. Then use "Set Up Bank Reference Files (FI)" to configure how payment data is imported or exported. After setup, "Generate Payment Files (FI)" explains how to suggest vendor payments and create the payment file.

Two pages cover narrower topics. "SEPA credit transfer payments (FI)" describes exporting in pain.001.001.09 format with dedicated codeunit and report objects. "How to Disregard Payment Discounts" explains the setting that accepts a payment as full payment when it arrives within the payment tolerance date and for the full invoice amount, even if the payment discount date has passed.

## Key points

- Electronic banking handles domestic (LM03) and foreign (LUM2) customer and vendor payments through bank reference files.
- Customer payments are imported and vendor payments are exported electronically.
- Bank reference file setup covers SEPA payment standards, foreign payment processing, due date handling, payment methods, exchange rate contracts, and combined payments.
- Payment files for domestic or foreign vendor payments are generated after suggesting vendor payments.
- SEPA credit transfers can be exported in pain.001.001.09 format using dedicated codeunit and report objects.
- The Disreg. Pmt. Disc. at Full Pmt feature accepts full-amount payments within the payment tolerance date even after the payment discount date.
- Reference number automation is part of the electronic banking support.

## Learn pages

- [Electronic banking in Finland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/electronic-banking-in-finland): The electronic banking feature allows processing domestic and foreign payments. Set up bank reference files first to export or import electronic payments.
  - In the observatory: [Page 32000006 "Bank Payments to send (FI)"](../../../../../objects/page/32000006-fi.md), [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md)
- [Generate Payment Files (FI)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-generate-payment-files): Before making electronic payments to vendors, you must create a payment file for either domestic or international payments.
- [How to Disregard Payment Discounts](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-disregard-payment-discounts): Use the disregard payment discount at full payment feature to accept payments when certain conditions are true.
- [SEPA credit transfer payments (FI)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/sepa-credit-transfer-payments): Finnish enhancements allow you to create Single Euro Payments Area (SEPA) credit transfer files to send vendor payments to banks.
  - In the observatory: [Codeunit 13413 "Exp. SEPA CT pain.001.001.09 (FI)"](../../../../../objects/codeunit/13413-fi.md), [Report 13413 "Exp. SEPA CT pain.001.001.09 (FI)"](../../../../../objects/report/13413-fi.md)
- [Set Up Bank Reference Files (FI)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Finland/how-to-set-up-bank-reference-files): In the Finnish version, set up bank reference files to define how to import or export payment data for electronic transactions.
  - In the observatory: [Page 32000000 "Bank Reference File Setup (FI)"](../../../../../objects/page/32000000-fi.md), [Page 370 "Bank Account Card"](../../../../../objects/page/370.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 6 objects with no object page: page/32000000, page/32000001, page/32000002, page/32000004, page/32000005, page/32000006.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
