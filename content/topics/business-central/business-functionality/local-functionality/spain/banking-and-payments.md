---
id: topic/business-central/business-functionality/local-functionality/spain/banking-and-payments
type: topic
title: Banking & payments
summary: "Spanish banking and payments in Business Central: CCC bank codes, bank account setup for electronic payments, AEB N34.1 and other export formats, paying vendors and voiding exports, payment days and non-payment periods, and reporting cash payments with the 340 declaration. Answers setup and how-to questions for Spain."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:20:46.510Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 00cd112c5393bfb57f13183cac16a5abc2ef32238c2b67d3f6ead689fe81bd3e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-accounts-for-electronic-payments
    title: Bank Accounts for Electronic Payments [ES]
    date: "2025-05-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/electronic-payments-aeb-n341
    title: Electronic payments – AEB N34.1 - [ES]
    date: "2025-05-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-ccc-codes
    title: How to enter CCC codes [ES]
    date: "2025-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-electronic-payments
    title: How to Export Electronic Payments [ES]
    date: "2025-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-payment-days-and-non-payment-periods
    title: How to Set Up Payment Days and Non-Payment Periods
    date: "2025-05-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-void-electronic-payments
    title: How to Void Electronic Payments
    date: "2025-05-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-pay-vendors-by-using-electronic-payments
    title: Pay vendors using electronic payments [ES]
    date: "2025-05-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-in-cash
    title: Payments in Cash
    date: "2025-05-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-ccc-codes
    title: Set up bank CCC codes [ES]
    date: "2025-05-28"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-accounts-for-electronic-payments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/electronic-payments-aeb-n341
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-ccc-codes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-electronic-payments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-payment-days-and-non-payment-periods
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-void-electronic-payments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-pay-vendors-by-using-electronic-payments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-in-cash
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-ccc-codes
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/spain
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Spain
  - Banking & payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/spain
children: []
coverage:
  learn: 9
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: eaecb1f2856f81d86e014e643d97bc58185e9c9e0512331853a904d576abd5b3
narrative: generated
---

# Banking & payments

> Spanish banking and payments in Business Central: CCC bank codes, bank account setup for electronic payments, AEB N34.1 and other export formats, paying vendors and voiding exports, payment days and non-payment periods, and reporting cash payments with the 340 declaration. Answers setup and how-to questions for Spain.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Spain](../spain.md) > Banking & payments · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section covers the Spain-specific banking and payment functionality. It starts with identifying bank accounts through CCC (Código Cuenta Cliente) codes, which are 20-digit Spanish or 21-digit Portuguese account identifiers split into bank, branch, control digits and account number fields. These are set up in Company Information, the Bank Account Card and the Customer/Vendor Bank Account Card.

Building on that, the electronic payment pages explain how to configure bank accounts with an export file path, pay vendors with the Electronic Payment bank payment type, export files in SEPA, AEB N34, N34.1 and E-PAY formats, and void an export by deleting its payment journal. Separate pages cover payment days and non-payment periods for due date calculation, and reporting cash payments with the 340 declaration.

Start with the CCC setup pages, then the bank account page for electronic payments, then the export and pay-vendors pages. The payment days and cash payment pages are independent and can be read on their own.

## Key points

- CCC codes are unique 20-digit Spanish or 21-digit Portuguese bank account codes. They are made up of the fields CCC Bank No., CCC Bank Branch No., CCC Control Digits and CCC Bank Account No.
- You set up CCC codes in Company Information, on the Bank Account Card and on the Customer/Vendor Bank Account Card.
- For electronic payments, set up CCC details and the E-Pay Export File Path on the Bank Account Card and Vendor Bank Account Card. The setup also includes Last Remittance Advice No.
- Instead of paper checks, you can pay vendors with AEB N34.1 files exported from payment journals or from Cartera payment orders.
- The export formats covered are SEPA Credit Transfer, AEB N34, AEB N34.1 and E-PAY, with remittance advice.
- To pay vendors electronically, use the Electronic Payment bank payment type. To void an exported payment, delete the whole payment journal created for the export.
- Payment days and non-payment periods are set on Company Information, Customer and Vendor cards and are used to calculate due dates for sales and purchase documents.
- Cash payments over EUR 6,000.00 per customer per year are reported with the Make 340 Declaration batch job.

## Learn pages

- [Bank Accounts for Electronic Payments [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-accounts-for-electronic-payments): Learn how to use Business Central to set up bank accounts and vendor bank accounts to make electronic payments.
- [Electronic payments – AEB N34.1 - [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/electronic-payments-aeb-n341): Learn how to use electronic payments to pay vendors by exporting payments in the standard AEB N34.1 file format used by banks in Spain.
- [How to enter CCC codes [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-ccc-codes): Learn how to enter the Código Cuenta Cliente (CCC) unique bank account identification code using the Spanish version of Business Central.
- [How to Export Electronic Payments [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-electronic-payments): In Business Central, you can export payment journal entries to files using four different payment standards, each supported by specific pages.
- [How to Set Up Payment Days and Non-Payment Periods](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-payment-days-and-non-payment-periods): Learn how to set up payment days and non-payment periods to accurately calculate due dates for sales and purchase documents in Business Central.
- [How to Void Electronic Payments](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-void-electronic-payments): In Business Central, you can void an exported payment file, which deletes the entire payment journal associated with that file.
- [Pay vendors using electronic payments [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-pay-vendors-by-using-electronic-payments): Learn how to pay vendors electronically by exporting payment files and sending them to your bank for processing.
- [Payments in Cash](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-in-cash): Spanish companies must submit an annual summary for each customer if cash payments exceed EUR 6,000.00.
- [Set up bank CCC codes [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-ccc-codes): The Código Cuenta Cliente (CCC) is a unique account code assigned by Spanish banks to customer accounts, appearing on documents, such as checks and statements.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
