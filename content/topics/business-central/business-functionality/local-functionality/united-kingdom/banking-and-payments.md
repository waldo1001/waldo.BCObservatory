---
id: topic/business-central/business-functionality/local-functionality/united-kingdom/banking-and-payments
type: topic
title: Banking and payments
summary: "Banking and payments for the United Kingdom covers two payment tasks in Business Central: printing checks to the APACS specification and printing remittance advice from payment journals. It answers questions about how to run these from the Payment Journals page and which options apply."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:04:14.110Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 245025163037789039dffe3d1640fc5e5058ff6563a02a4a110e4a47872b1255
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-checks-for-apacs
    title: Print Checks for APACS in the United Kingdom
    date: "2026-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-remittance-advice
    title: Print Remittance Advice in the United Kingdom
    date: "2026-10-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-checks-for-apacs
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-remittance-advice
  objects:
    - object/page/256
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/united-kingdom
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - United Kingdom
  - Banking and payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/united-kingdom
children: []
coverage:
  learn: 2
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 256
member_hash: 46a9d63d4a6fa9fc9287ca4d033903e1f0f0d4217a8643b87717ae525ba15c6d
narrative: generated
---

# Banking and payments

> Banking and payments for the United Kingdom covers two payment tasks in Business Central: printing checks to the APACS specification and printing remittance advice from payment journals. It answers questions about how to run these from the Payment Journals page and which options apply.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [United Kingdom](../united-kingdom.md) > Banking and payments · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section holds UK-specific guidance for paying vendors. Both pages relate to the payment journal: checks are printed from the Payment Journals page, and remittance advice can be printed before or after the payment journal is posted.

The check page explains how to print checks that follow the APACS specification used by UK payment clearing services. It uses the Payment Journals page and the Check report, with preview and print actions and a few options that control how checks are grouped and reprinted.

The remittance advice page explains how to print or preview a remittance advice before or after posting a payment journal, so vendors can match payments to their invoices. Start with the check page if you pay by check, or the remittance page if you need to send payment details to vendors.

## Key points

- Checks can be printed in the UK using the APACS specification for payment clearing services.
- Check printing runs from Payment Journals and uses the Check report.
- The Preview Check and Print Check actions let you review before printing.
- Check settings include the Bank Account and Last Check No. fields.
- Options include One Check per Vendor per Document No. and Reprint Checks.
- Remittance advice can be printed or previewed before or after posting a payment journal.
- Remittance advice helps vendors reconcile payments with their invoices.
- Remittance advice can be filtered by the vendor's external document number.

## Learn pages

- [Print Checks for APACS in the United Kingdom](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-checks-for-apacs): The APACS specification sets the standard layout for fields on checks in the UK. The Check report uses the APACS specification.
  - In the observatory: [Page 370 "Bank Account Card"](../../../../../objects/page/370.md), [Report 1401 "Check"](../../../../../objects/report/1401.md)
- [Print Remittance Advice in the United Kingdom](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-remittance-advice): Print remittance advice before posting a payment journal or after posting a payment in the British version of Business Central, with report options.
  - In the observatory: [Report 399 "Remittance Advice - Journal"](../../../../../objects/report/399.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 256 "Payment Journal"](../../../../../objects/page/256.md) · captioned "Payment Journals" · on [Table 81 "Gen. Journal Line"](../../../../../objects/table/81.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
