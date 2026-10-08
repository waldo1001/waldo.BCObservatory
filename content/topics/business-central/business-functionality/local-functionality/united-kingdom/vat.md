---
id: topic/business-central/business-functionality/local-functionality/united-kingdom/vat
type: topic
title: VAT
summary: "United Kingdom VAT functionality in Business Central: Making Tax Digital VAT return submission to HMRC, VAT setup in journals, VAT audit and day book reports, and reverse charge VAT. It answers how-to questions for the British version."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:24:22.231Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 04be31e2853de7857d1374ba7648419d3634cfdeaa76441fa2cd5f7a1826cd02
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-change-vat-setup-in-journals
    title: Change VAT Setup in Journals
    date: "2025-02-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/making-tax-digital-submit-vat-return
    title: Making Tax Digital - Submitting VAT Returns
    date: "2025-02-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-vat-audit-reports
    title: Print VAT Audit Reports
    date: "2025-02-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-vat-reports
    title: Print VAT Reports [GB]
    date: "2025-02-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-set-up-reverse-charges-on-vat
    title: Set Up Reverse Charges on VAT [UK]
    date: "2025-02-19"
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

> United Kingdom VAT functionality in Business Central: Making Tax Digital VAT return submission to HMRC, VAT setup in journals, VAT audit and day book reports, and reverse charge VAT. It answers how-to questions for the British version.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [United Kingdom](../united-kingdom.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers VAT tasks specific to the British version of Business Central. It includes filing VAT returns with HMRC through Making Tax Digital, adjusting how VAT setup is applied to journal lines, printing VAT-related reports, and setting up reverse charge VAT.

The pages are independent task guides. Start with Making Tax Digital - Submitting VAT Returns if you need to connect to HMRC and file returns. Use the reverse charge page for setup on electronic goods and integrated circuit devices. The two reporting pages cover audit exports and day book or unposted reports. The journal page is a short settings change.

## Key points

- Making Tax Digital: set up the HMRC service connection, then retrieve VAT obligations.
- VAT return steps: create the return, suggest lines, release it, and submit it.
- You can also retrieve VAT liabilities and payments from HMRC.
- Journals: the Copy VAT Setup to Jnl. Lines checkbox copies VAT setup to journal lines. Clear it when items have no VAT.
- VAT Audit and VAT Entry Exception reports export CSV data for customers, vendors, open payments, late invoicing and VAT entries.
- Day Book and Unposted reports show VAT entries, customer and vendor ledger entries, and unposted sales or purchase documents. They can show amounts in LCY or the additional reporting currency.
- Reverse charge VAT is meant to prevent carousel fraud on electronic goods and integrated circuit devices. It uses VAT business posting groups and the Reverse Charge Applies field on the item card.
- A Reverse Charge Sales List report is available.

## Learn pages

- [Change VAT Setup in Journals](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-change-vat-setup-in-journals): Add VAT setup information to journal lines if necessary. If items are entered without VAT, there's no need to manually remove VAT setup information.
- [Making Tax Digital - Submitting VAT Returns](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/making-tax-digital-submit-vat-return): Business Central includes features to manage your VAT and comply with Making Tax Digital. This article describes how to set up and use these features.
- [Print VAT Audit Reports](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-vat-audit-reports): Learn how Business Central supports the British requirements for VAT audits.
- [Print VAT Reports [GB]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-print-vat-reports): This article explains the various VAT reports and provides guidance on how to print each of them.
- [Set Up Reverse Charges on VAT [UK]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/UnitedKingdom/how-to-set-up-reverse-charges-on-vat): Learn how you can use reverse charge VAT accounting for a specific range of items to prevent Missing Trader Intercommunity Fund Fraud (MTIC).

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12135 Fix Reverse Charge VAT upgrade migration](../../../../../changes/bcapps/12135.md) (code change): "Reverse Charge VAT upgrade migration to properly transfer legacy values"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 39 "General Journal"](../../../../../objects/page/39.md) · captioned "General Journals" · on [Table 81 "Gen. Journal Line"](../../../../../objects/table/81.md)
- [Page 317 "VAT Statement"](../../../../../objects/page/317.md) · captioned "VAT Statements" · on [Table 256 "VAT Statement Line"](../../../../../objects/table/256.md)
- [Page 320 "VAT Statement Names"](../../../../../objects/page/320.md) · on [Table 257 "VAT Statement Name"](../../../../../objects/table/257.md)
- [Page 743 "VAT Report Setup"](../../../../../objects/page/743.md) · on [Table 743 "VAT Report Setup"](../../../../../objects/table/743.md)

Learn also names 6 objects with no object page: page/10530, page/10531, page/10532, page/10537, page/10538, page/10539.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
