---
id: topic/business-central/business-functionality/local-functionality/mexico/general
type: topic
title: General
summary: "Mexico general localization pages for Business Central: electronic accounting export (XML files for chart of accounts, trial balance, journals, auxiliary accounts), bank deposits, vendor payment export via SEPA or AMC Banking, and troubleshooting report printing. Answers setup and how-to questions for Mexican companies."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:27.169Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8c6a79d5a49facc45682ec53f87bffcab71283295dad92047086e372269e5eb9
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-accounting-regulations
    title: Comply with Electronic Accounting Regulations in Mexico
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-create-deposits
    title: Create Deposits in the Mexican Version [MX]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer
    title: Make payments with AMC banking (US) or SEPA credit transfer (EU)
    date: "2024-08-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-print-troubleshooting-reports
    title: Print Troubleshooting Reports in the Mexican Version [MX]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-accounting-regulations
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-create-deposits
    - https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-print-troubleshooting-reports
  objects:
    - object/page/256
    - object/page/1205
    - object/page/1206
    - object/page/1209
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/mexico
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Mexico
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/mexico
children: []
coverage:
  learn: 4
  code: 4
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 256
  - 1205
  - 1206
  - 1209
  - 10140
  - 10141
  - 10143
  - 10144
  - 10146
  - 10147
  - 10148
  - 10810
  - 10811
  - 36646
member_hash: 668b23532b29ff7d15ccbc4fcda5ebef3a66a9605194ad26a630f30f2b2ea66c
narrative: generated
---

# General

> Mexico general localization pages for Business Central: electronic accounting export (XML files for chart of accounts, trial balance, journals, auxiliary accounts), bank deposits, vendor payment export via SEPA or AMC Banking, and troubleshooting report printing. Answers setup and how-to questions for Mexican companies.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Mexico](../mexico.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section gathers general topics for the Mexican version of Business Central. It has no subtopics, so all content is in four standalone pages.

The main compliance page covers Export Electr. Accounting, which prepares XML files for Mexican electronic accounting requirements. It depends on setup of RFC numbers, SAT account codes, and bank information. Two finance pages cover bank deposits (pointing to the standard Bank Deposits feature) and paying vendors by exporting payment files in SEPA Credit Transfer format or through the AMC Banking 365 Fundamentals extension.

The last page covers printing troubleshooting reports with Object Designer, and applies to version 14 and earlier. Start with the electronic accounting page if you handle Mexican statutory reporting. Use the payment page for bank file exports.

## Key points

- Export Electr. Accounting exports chart of accounts, trial balance, journal transactions, and auxiliary accounts as XML files.
- Electronic accounting needs RFC numbers, SAT account codes, and bank information to be set up.
- Bank deposits in the Mexican version point to the standard Bank Deposits feature for the current workflow.
- Vendor payments can be exported in SEPA Credit Transfer format or through the AMC Banking 365 Fundamentals extension.
- Payment export tracks credit transfer registration and payment export history, and converts bank data.
- Troubleshooting reports are printed through Object Designer, for version 14 and earlier (Spring 2019).

## Learn pages

- [Comply with Electronic Accounting Regulations in Mexico](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-accounting-regulations): This article explains how Business Central can assist with compliance regarding electronic accounting requirements in Mexico.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 21 "Customer Card"](../../../../../objects/page/21.md), [Page 26 "Vendor Card"](../../../../../objects/page/26.md), [Page 423 "Customer Bank Account Card"](../../../../../objects/page/423.md), [Page 425 "Vendor Bank Account Card"](../../../../../objects/page/425.md), [Table 289 "Payment Method"](../../../../../objects/table/289.md)
- [Create Deposits in the Mexican Version [MX]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-create-deposits): Make deposits to maintain a transaction record that contains information that can be applied to outstanding invoices and credit memos in the Mexican version.
- [Make payments with AMC banking (US) or SEPA credit transfer (EU)](https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer): Process payments to your vendors by exporting a file (EFT) together with the payment information from the journal lines.
  - In the observatory: [Page 35603 "Vendors (RU)"](../../../../../objects/page/35603-ru.md), [Page 35630 "Bank Accounts (RU)"](../../../../../objects/page/35630-ru.md), [Page 427 "Payment Methods"](../../../../../objects/page/427.md)
- [Print Troubleshooting Reports in the Mexican Version [MX]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-print-troubleshooting-reports): Troubleshooting reports are available to assist Microsoft Certified Partners with troubleshooting issues in the Mexican version.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 256 "Payment Journal"](../../../../../objects/page/256.md) · captioned "Payment Journals" · on [Table 81 "Gen. Journal Line"](../../../../../objects/table/81.md)
- [Page 1205 "Credit Transfer Registers"](../../../../../objects/page/1205.md) · on [Table 1205 "Credit Transfer Register"](../../../../../objects/table/1205.md)
- [Page 1206 "Credit Transfer Reg. Entries"](../../../../../objects/page/1206.md) · on [Table 1206 "Credit Transfer Entry"](../../../../../objects/table/1206.md)
- [Page 1209 "Credit Trans Re-export History"](../../../../../objects/page/1209.md) · on [Table 1209 "Credit Trans Re-export History"](../../../../../objects/table/1209.md)

Learn also names 10 objects with no object page: page/10140, page/10141, page/10143, page/10144, page/10146, page/10147, page/10148, page/10810, page/10811, page/36646.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
