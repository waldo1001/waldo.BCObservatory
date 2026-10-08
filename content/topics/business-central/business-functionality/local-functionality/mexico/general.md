---
id: topic/business-central/business-functionality/local-functionality/mexico/general
type: topic
title: General
summary: "Mexico general local functionality in Business Central: electronic accounting export to the SAT as XML, deposits and troubleshooting reports in the Mexican version, and vendor payment export with SEPA Credit Transfer or AMC Banking 365 Fundamentals. It answers setup and how-to questions for these tasks."
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:27.247Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9b770bb79c45a080d91edc7f7a86b234ff4e0e1f16ba00eb1845160581681d6d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-accounting-regulations
    title: Electronic accounting regulations in Mexico
    date: "2025-02-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-create-deposits
    title: How to create deposits [MX]
    date: "2025-02-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-print-troubleshooting-reports
    title: How to Print Troubleshooting Reports [MX]
    date: "2025-02-25"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-accounting-regulations
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-create-deposits
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-print-troubleshooting-reports
    - https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer
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

> Mexico general local functionality in Business Central: electronic accounting export to the SAT as XML, deposits and troubleshooting reports in the Mexican version, and vendor payment export with SEPA Credit Transfer or AMC Banking 365 Fundamentals. It answers setup and how-to questions for these tasks.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Mexico](../mexico.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section collects four pages for Mexican finance work. One covers compliance with Mexico's electronic accounting regulations. Two are short how-to pages for the Mexican version, on creating deposits and printing troubleshooting reports. The fourth covers paying vendors by exporting payment files.

Start with the electronic accounting page if you need to report to the Mexican Tax Authority (SAT). It describes exporting the chart of accounts, trial balance and journal transactions as XML through the Export Elect. Accounting functionality. The deposit and troubleshooting pages are for day-to-day finance tasks and diagnosing finance issues. The payment page applies when you pay vendors through a bank using exported payment information.

## Key points

- Export Elect. Accounting produces XML files of the chart of accounts, trial balance and journal transactions for the SAT.
- Electronic accounting setup involves a SAT account code, bank account setup and payment method coding.
- Deposits can be created in the Mexican version of Business Central.
- Troubleshooting reports can be printed in the Mexican version to diagnose finance issues.
- Vendor payments can be exported in SEPA Credit Transfer format or through the AMC Banking 365 Fundamentals extension.
- Payment export includes payment file export, bank data conversion, credit transfer registration tracking and payment export history.

## Learn pages

- [Electronic accounting regulations in Mexico](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/electronic-accounting-regulations): This article explains how Business Central can assist with compliance regarding electronic accounting requirements in Mexico.
- [How to create deposits [MX]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-create-deposits): Make deposits to maintain a transaction record that contains information that can be applied to outstanding invoices and credit memos in the Mexican version.
- [How to Print Troubleshooting Reports [MX]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Mexico/how-to-print-troubleshooting-reports): Troubleshooting reports are available to assist Microsoft Certified Partners with troubleshooting issues in the Mexican version.
- [Make payments with AMC banking (US) or SEPA credit transfer (EU)](https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer): Process payments to your vendors by exporting a file (EFT) together with the payment information from the journal lines.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 256 "Payment Journal"](../../../../../objects/page/256.md) · captioned "Payment Journals" · on [Table 81 "Gen. Journal Line"](../../../../../objects/table/81.md)
- [Page 1205 "Credit Transfer Registers"](../../../../../objects/page/1205.md) · on [Table 1205 "Credit Transfer Register"](../../../../../objects/table/1205.md)
- [Page 1206 "Credit Transfer Reg. Entries"](../../../../../objects/page/1206.md) · on [Table 1206 "Credit Transfer Entry"](../../../../../objects/table/1206.md)
- [Page 1209 "Credit Trans Re-export History"](../../../../../objects/page/1209.md) · on [Table 1209 "Credit Trans Re-export History"](../../../../../objects/table/1209.md)

Learn also names 10 objects with no object page: page/10140, page/10141, page/10143, page/10144, page/10146, page/10147, page/10148, page/10810, page/10811, page/36646.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
