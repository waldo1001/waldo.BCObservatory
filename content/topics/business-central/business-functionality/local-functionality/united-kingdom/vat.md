---
id: topic/business-central/business-functionality/local-functionality/united-kingdom/vat
type: topic
title: VAT
summary: "UK VAT functionality in Business Central: Making Tax Digital submission of VAT returns to HMRC, VAT audit and VAT reports, reverse charge setup, and copying VAT setup to journal lines. Answers setup and how-to questions for UK VAT compliance."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:12.177Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f76de7fa46a8b106376dd7636b446e5920449e00abd378a7d32d7eee073bdea7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-change-vat-setup-in-journals
    title: Change VAT Setup in Journals in the United Kingdom
    date: "2026-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/making-tax-digital-submit-vat-return
    title: Making Tax Digital - Submitting VAT Returns
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-vat-audit-reports
    title: Print VAT Audit Reports in the United Kingdom
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-vat-reports
    title: Print VAT Reports in the United Kingdom
    date: "2026-10-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-set-up-reverse-charges-on-vat
    title: Set Up Reverse Charges on VAT [UK]
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-change-vat-setup-in-journals
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/making-tax-digital-submit-vat-return
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-vat-audit-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-vat-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-set-up-reverse-charges-on-vat
  objects:
    - object/page/39
    - object/page/317
    - object/page/320
    - object/page/743
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/united-kingdom
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/12135
    - change/bcapps/12813
learn_toc_path:
  - Business functionality
  - Local functionality
  - United Kingdom
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/united-kingdom
children: []
coverage:
  learn: 5
  code: 4
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 39
  - 317
  - 320
  - 743
  - 10530
  - 10531
  - 10532
  - 10537
  - 10538
  - 10539
member_hash: 88c81910276e78341f92068e5e24359a8500784da8f146165397d5069e399f38
narrative: generated
---

# VAT

> UK VAT functionality in Business Central: Making Tax Digital submission of VAT returns to HMRC, VAT audit and VAT reports, reverse charge setup, and copying VAT setup to journal lines. Answers setup and how-to questions for UK VAT compliance.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [United Kingdom](../united-kingdom.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers VAT features specific to the British version of Business Central. It combines electronic filing with HMRC, reporting and audit exports, and configuration for reverse charge VAT and journals.

Making Tax Digital is the main filing page. It explains how to connect to HMRC, retrieve VAT obligations, submit returns, and view return status, payments and liabilities. The two print pages cover VAT reports (Day Book VAT Entry, customer and vendor ledger, unposted sales and purchases) and VAT audit exports in CSV format for customers, vendors and VAT entries.

The setup pages cover reverse charge VAT, used to prevent Missing Trader Intercommunity Fund Fraud on items such as electronic goods and integrated circuit devices, and the Copy VAT Setup to Jnl. Lines option for new journal batches. Start with the reverse charge and journal setup pages when configuring, then move to Making Tax Digital for submission.

## Key points

- Making Tax Digital lets UK businesses submit VAT returns to HMRC from Business Central, retrieve VAT obligations, and view return status, payments and liabilities.
- Making Tax Digital includes a service connection to HMRC and fraud prevention data support.
- VAT Audit exports in CSV cover customers, open payments, late invoicing, vendors and VAT entries, with VAT Base Discount checking.
- VAT reports include Day Book VAT Entry, customer ledger, vendor ledger and unposted sales/purchases, with additional reporting currency and local currency display.
- Reverse charge setup uses a Reverse Charge VAT Posting Group, thresholds, and item settings such as Reverse Charge Applies.
- Reverse charge options include Domestic Customers, Domestic Vendors and Invoice Wording settings.
- Enable Copy VAT Setup to Jnl. Lines when creating new journal batches to change VAT setup in journal lines.

## Learn pages

- [Change VAT Setup in Journals in the United Kingdom](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-change-vat-setup-in-journals): Add VAT setup information to journal lines if necessary. If items are entered without VAT, there's no need to manually remove VAT setup information.
  - In the observatory: [Page 251 "General Journal Batches"](../../../../../objects/page/251.md)
- [Making Tax Digital - Submitting VAT Returns](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/making-tax-digital-submit-vat-return): Business Central includes features to manage your VAT and comply with Making Tax Digital. This article describes how to set up and use these features.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 1279 "Service Connections"](../../../../../objects/page/1279.md), [Page 738 "VAT Return Period Card"](../../../../../objects/page/738.md), [Page 746 "VAT Reports Configuration"](../../../../../objects/page/746.md)
- [Print VAT Audit Reports in the United Kingdom](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-vat-audit-reports): Print the VAT Audit and VAT Entry Exception reports in the British version of Business Central to review posted VAT entries and identify differences.
  - In the observatory: [Report 10512 "VAT Audit (GB)"](../../../../../objects/report/10512-gb.md), [Table 18 "Customer"](../../../../../objects/table/18.md), [Table 23 "Vendor"](../../../../../objects/table/23.md), [Table 254 "VAT Entry"](../../../../../objects/table/254.md)
- [Print VAT Reports in the United Kingdom](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-vat-reports): Print day book VAT and customer or vendor ledger reports in the British version of Business Central, and review unposted sales and purchase documents.
  - In the observatory: [Report 2500 "Day Book VAT Entry"](../../../../../objects/report/2500.md), [Report 2501 "Day Book Cust. Ledger Entry"](../../../../../objects/report/2501.md), [Report 2502 "Day Book Vendor Ledger Entry"](../../../../../objects/report/2502.md)
- [Set Up Reverse Charges on VAT [UK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-set-up-reverse-charges-on-vat): Learn how you can use reverse charge VAT accounting for a specific range of items to prevent Missing Trader Intercommunity Fund Fraud (MTIC).
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md), [Page 30 "Item Card"](../../../../../objects/page/30.md), [Page 459 "Sales & Receivables Setup"](../../../../../objects/page/459.md), [Page 460 "Purchases & Payables Setup"](../../../../../objects/page/460.md), [Report 10529 "Reverse Charge Sales List (GB)"](../../../../../objects/report/10529-gb.md), [Table 254 "VAT Entry"](../../../../../objects/table/254.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12135 Fix Reverse Charge VAT upgrade migration](../../../../../changes/bcapps/12135.md) (code change): "Reverse Charge VAT upgrade migration to properly transfer legacy values"
- [#12813 [GB] Fix reverse charge VAT sales posting](../../../../../changes/bcapps/12813.md) (code change): "GB reverse-charge VAT sales posting now correctly handles zero-quantity lines"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 39 "General Journal"](../../../../../objects/page/39.md) · captioned "General Journals" · on [Table 81 "Gen. Journal Line"](../../../../../objects/table/81.md)
- [Page 317 "VAT Statement"](../../../../../objects/page/317.md) · captioned "VAT Statements" · on [Table 256 "VAT Statement Line"](../../../../../objects/table/256.md)
- [Page 320 "VAT Statement Names"](../../../../../objects/page/320.md) · on [Table 257 "VAT Statement Name"](../../../../../objects/table/257.md)
- [Page 743 "VAT Report Setup"](../../../../../objects/page/743.md) · on [Table 743 "VAT Report Setup"](../../../../../objects/table/743.md)

Learn also names 6 objects with no object page: page/10530, page/10531, page/10532, page/10537, page/10538, page/10539.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
