---
id: topic/business-central/business-functionality/local-functionality/spain/banking-and-payments
type: topic
title: Banking & payments
summary: Spain banking and payments in Business Central covers CCC bank codes, bank account setup, electronic vendor payments (AEB N34, N34.1, E-PAY, SEPA), voiding exports, payment days and non-payment periods, and the 340 cash payments declaration. It answers setup and how-to questions for the Spanish version.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:06.405Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0d00a1ffa837277d10b22eeeb1e96a176a60045f0ef690a0f2564d8df21d6185
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/electronic-payments-aeb-n341
    title: Electronic Payments – AEB N34.1 in the Spanish Version [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-ccc-codes
    title: Enter CCC Codes in the Spanish Version [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-electronic-payments
    title: Export Electronic Payments in the Spanish Version [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-pay-vendors-by-using-electronic-payments
    title: Pay Vendors Using Electronic Payments in the Spanish Version [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-in-cash
    title: Payments in Cash Reporting for Spain
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-accounts-for-electronic-payments
    title: Set Up Bank Accounts for Electronic Payments in Spain
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-ccc-codes
    title: Set Up Bank CCC Codes in the Spanish Version [ES]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-payment-days-and-non-payment-periods
    title: Set Up Payment Days and Non-Payment Periods
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-void-electronic-payments
    title: Void Electronic Payment Exports in Spain
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/electronic-payments-aeb-n341
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-ccc-codes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-electronic-payments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-pay-vendors-by-using-electronic-payments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-in-cash
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-accounts-for-electronic-payments
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-ccc-codes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-payment-days-and-non-payment-periods
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-void-electronic-payments
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/spain
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9987
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

> Spain banking and payments in Business Central covers CCC bank codes, bank account setup, electronic vendor payments (AEB N34, N34.1, E-PAY, SEPA), voiding exports, payment days and non-payment periods, and the 340 cash payments declaration. It answers setup and how-to questions for the Spanish version.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Spain](../spain.md) > Banking & payments · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section describes Spain-specific banking and payment features. It starts with bank identification: CCC codes (20 digits for Spain, 21 for Portugal) are entered on company, bank account, customer bank account and vendor bank account pages, and bank accounts are set up for electronic payments with CCC details and export file paths.

With banks configured, you can pay vendors electronically instead of by check. Payments are exported to a file from Payment Orders or the Payment Journal (or Cartera) in formats such as AEB N34, AEB N34.1, E-PAY and SEPA, and the file is sent through the bank. An export can be voided if needed.

Two further pages cover due date calculation (payment days and non-payment periods such as holidays) and statutory reporting of cash payments over EUR 6,000 per customer per year via the Make 340 Declaration batch job. Start with the CCC and bank account setup pages, then move to the export and payment pages.

## Key points

- CCC codes have four parts: CCC Bank No., Bank Branch No., Control Digits and Bank Account No.; they are set on Bank Account Card, Company Information, Customer Bank Account Card and Vendor Bank Account Card.
- Bank account setup for electronic payments includes the E-Pay Export File Path and Last E-Pay Export File Name fields.
- Electronic payments can be exported from Payment Orders or the Payment Journal in AEB N34, AEB N34.1, E-PAY and SEPA formats.
- Vendor payments use the Electronic Payment bank payment type, with Payment Type and Statistical Code fields, and create check ledger entries.
- Void Electronic Payments (Void PO - Export) clears export status and file information but does not delete the journal or cancel bank submission.
- Payment days and non-payment periods are set by code for companies, customers and vendors to calculate due dates, including holidays.
- Cash payments over EUR 6,000 per customer annually must be reported using the Make 340 Declaration batch job.

## Learn pages

- [Electronic Payments – AEB N34.1 in the Spanish Version [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/electronic-payments-aeb-n341): Learn how to use electronic payments to pay vendors by exporting payments in the standard AEB N34.1 file format used by banks in Spain.
  - In the observatory: [Report 7000060 "PO - Export N34.1 (ES)"](../../../../../objects/report/7000060-es.md)
- [Enter CCC Codes in the Spanish Version [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-enter-ccc-codes): Learn how to enter the Código Cuenta Cliente (CCC) unique bank account identification code using the Spanish version of Business Central.
- [Export Electronic Payments in the Spanish Version [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-export-electronic-payments): In Business Central, you can export payment journal entries to files using four different payment standards, each supported by specific pages.
  - In the observatory: [Page 256 "Payment Journal"](../../../../../objects/page/256.md), [Page 370 "Bank Account Card"](../../../../../objects/page/370.md), [Page 7000050 "Payment Orders (ES)"](../../../../../objects/page/7000050-es.md), [Report 7000060 "PO - Export N34.1 (ES)"](../../../../../objects/report/7000060-es.md), [Report 7000090 "Payment order - Export N34 (ES)"](../../../../../objects/report/7000090-es.md)
- [Pay Vendors Using Electronic Payments in the Spanish Version [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-pay-vendors-by-using-electronic-payments): Learn how to prepare vendor payment journal lines in Business Central for Spain, then export electronic payments for submission to your bank.
- [Payments in Cash Reporting for Spain](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/payments-in-cash): Learn how applied customer cash payments are used for reporting in Business Central for Spain and where to prepare a payments in cash declaration.
- [Set Up Bank Accounts for Electronic Payments in Spain](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-accounts-for-electronic-payments): Learn how to configure bank and vendor bank accounts for electronic payments in Business Central for Spain, including export and remittance details.
  - In the observatory: [Page 370 "Bank Account Card"](../../../../../objects/page/370.md), [Page 425 "Vendor Bank Account Card"](../../../../../objects/page/425.md)
- [Set Up Bank CCC Codes in the Spanish Version [ES]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-bank-ccc-codes): The Código Cuenta Cliente (CCC) is a unique account code assigned by Spanish banks to customer accounts, appearing on documents, such as checks and statements.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 370 "Bank Account Card"](../../../../../objects/page/370.md), [Page 423 "Customer Bank Account Card"](../../../../../objects/page/423.md), [Page 425 "Vendor Bank Account Card"](../../../../../objects/page/425.md)
- [Set Up Payment Days and Non-Payment Periods](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-set-up-payment-days-and-non-payment-periods): Learn how to set up payment days and non-payment periods to accurately calculate due dates for sales and purchase documents in Business Central.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 10700 "Payment Days (ES)"](../../../../../objects/page/10700-es.md), [Page 10701 "Non-Payment Periods (ES)"](../../../../../objects/page/10701-es.md), [Page 35603 "Vendors (RU)"](../../../../../objects/page/35603-ru.md), [Page 36954 "Customers"](../../../../../objects/page/36954.md)
- [Void Electronic Payment Exports in Spain](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Spain/how-to-void-electronic-payments): Learn how to void an electronic payment export in Business Central for Spain, reset export details, and export the payments again before posting.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9987 Fix Payment Management FR data update paths and per-company feature status](../../../../../changes/bcapps/9987.md) (code change): "Centralizes the French payment data migration in a new codeunit"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
