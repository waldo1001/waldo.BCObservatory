---
id: topic/business-central/business-functionality/local-functionality/canada/banking-and-payments
type: topic
title: Banking & payments
summary: "Banking and payments for the Canadian version of Business Central: creating deposits, and making vendor payments through SEPA Credit Transfer export files or the AMC Banking 365 Fundamentals extension. It answers how-to questions on deposits and electronic payment setup."
tier: official
language: en
system: localization
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-07T01:06:39.442Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 02b748e42cb8e2ee8ff091b4cf97add6c924dd4427d53808877ca4e9197dc5d1
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Canada/how-to-create-deposits
    title: How to create deposits [CA]
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer
    title: Make payments with AMC banking (US) or SEPA credit transfer (EU)
    date: "2026-09-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Canada/how-to-create-deposits
    - https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer
  objects:
    - object/page/256
    - object/page/1205
    - object/page/1206
    - object/page/1209
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/canada
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Canada
  - Banking & payments
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/canada
children: []
coverage:
  learn: 2
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
member_hash: 2f34d11520ffa61bb011157793fb2a3f80f4354f3cf074426633e07d5aee6eda
narrative: generated
---

# Banking & payments

> Banking and payments for the Canadian version of Business Central: creating deposits, and making vendor payments through SEPA Credit Transfer export files or the AMC Banking 365 Fundamentals extension. It answers how-to questions on deposits and electronic payment setup.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Canada](../canada.md) > Banking & payments · tier official · system localization · narrative **unreviewed** (model text not yet checked)

## Overview

This section holds two pages on banking and payments under Canada local functionality. One covers creating deposits in the Canadian version. The other covers setting up and processing vendor payments by exporting payment files.

The payments page describes two routes: exporting payment files in SEPA Credit Transfer format, or using the AMC Banking 365 Fundamentals extension for electronic bank transfers. Its title refers to AMC banking (US) and SEPA credit transfer (EU), so check which route fits your region and bank before you start.

Start with the deposits page if you handle Canadian deposit operations. Start with the payments page if you need to send electronic vendor payments or convert bank data.

## Key points

- The section has no subtopics, only two pages.
- The deposits page explains how to create deposits in the Canadian version.
- Vendor payments can be made by exporting payment files in SEPA Credit Transfer format.
- The AMC Banking 365 Fundamentals extension supports electronic bank transfers and bank data conversion.
- The payments page covers electronic funds transfer (EFT) and payment file export.
- Credit transfer message numbers are part of the payment setup described.
- The payments page is titled for AMC banking (US) and SEPA credit transfer (EU), not specifically Canada.

## Learn pages

- [How to create deposits [CA]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Canada/how-to-create-deposits): Make deposits to maintain a transaction record that contains information that can be applied to outstanding invoices and credit memos in the Canadian version.
- [Make payments with AMC banking (US) or SEPA credit transfer (EU)](https://learn.microsoft.com/dynamics365/business-central/finance-make-payments-with-bank-data-conversion-service-or-sepa-credit-transfer): Process vendor payments by exporting an EFT or SEPA file from the payment journal after you review the batch total and validate the payment lines.
  - In the observatory: [Page 1227 "Pmt. Export Line Definitions"](../../../../../objects/page/1227.md), [Page 251 "General Journal Batches"](../../../../../objects/page/251.md), [Page 35603 "Vendors (RU)"](../../../../../objects/page/35603-ru.md), [Page 35630 "Bank Accounts (RU)"](../../../../../objects/page/35630-ru.md), [Page 427 "Payment Methods"](../../../../../objects/page/427.md)

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 256 "Payment Journal"](../../../../../objects/page/256.md) · captioned "Payment Journals" · on [Table 81 "Gen. Journal Line"](../../../../../objects/table/81.md)
- [Page 1205 "Credit Transfer Registers"](../../../../../objects/page/1205.md) · on [Table 1205 "Credit Transfer Register"](../../../../../objects/table/1205.md)
- [Page 1206 "Credit Transfer Reg. Entries"](../../../../../objects/page/1206.md) · on [Table 1206 "Credit Transfer Entry"](../../../../../objects/table/1206.md)
- [Page 1209 "Credit Trans Re-export History"](../../../../../objects/page/1209.md) · on [Table 1209 "Credit Trans Re-export History"](../../../../../objects/table/1209.md)

Learn also names 10 objects with no object page: page/10140, page/10141, page/10143, page/10144, page/10146, page/10147, page/10148, page/10810, page/10811, page/36646.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
