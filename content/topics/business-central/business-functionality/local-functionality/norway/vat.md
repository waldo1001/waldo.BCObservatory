---
id: topic/business-central/business-functionality/local-functionality/norway/vat
type: topic
title: VAT
summary: "Norwegian VAT functionality in Business Central: VAT codes, one-code entry in journals, proportional VAT, the VAT reconciliation report, electronic VAT return submission through ID-Porten, and SAF-T file setup and export. It answers setup and usage questions for Norway-specific VAT."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:46.153Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3f509f11f256d9f9eee6c709b8c9dd206ca0d5aa67b68024c89879144dd847a2
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-calculate-proportional-vat
    title: Calculate Proportional VAT in the Norwegian Version [NO]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/norwegian-vat-codes
    title: Norwegian VAT Codes in Business Central
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/norwegian-vat-reporting
    title: Norwegian VAT Reporting in Business Central
    date: "2026-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-print-a-vat-reconciliation-report
    title: Print a VAT Reconciliation Report in the Norwegian Version [NO]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/proportional-vat
    title: Proportional VAT in Norway [NO]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-setup-and-generate-saf-t-files-no
    title: Set Up and Export Norwegian SAF-T Files
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-use-one-vat-code-in-journals
    title: Use One VAT Code in Journals in Norwegian Version [NO]
    date: "2026-10-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-calculate-proportional-vat
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/norwegian-vat-codes
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/norwegian-vat-reporting
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-print-a-vat-reconciliation-report
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/proportional-vat
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-setup-and-generate-saf-t-files-no
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-use-one-vat-code-in-journals
  objects:
    - object/page/315
    - object/page/317
    - object/page/471
    - object/page/472
    - object/page/473
    - object/page/737
    - object/page/738
    - object/page/743
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/norway
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/11629
learn_toc_path:
  - Business functionality
  - Local functionality
  - Norway
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/norway
children: []
coverage:
  learn: 7
  code: 8
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 315
  - 317
  - 471
  - 472
  - 473
  - 737
  - 738
  - 743
  - 10601
  - 10602
  - 10604
  - 10670
  - 10671
  - 10672
  - 10673
  - 10674
  - 10675
  - 10677
  - 10678
  - 10679
  - 10680
  - 10685
  - 10686
  - 10687
  - 10688
  - 10689
  - 10690
  - 10691
  - 10692
  - 10696
  - 10697
  - 10698
member_hash: b31724dbe326bd50c83557cca55662925d5d99ef82fcb45eda34f2628552cc31
narrative: generated
---

# VAT

> Norwegian VAT functionality in Business Central: VAT codes, one-code entry in journals, proportional VAT, the VAT reconciliation report, electronic VAT return submission through ID-Porten, and SAF-T file setup and export. It answers setup and usage questions for Norway-specific VAT.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Norway](../norway.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers the Norway-specific VAT features. The base is VAT setup: Norwegian VAT codes are defined on the VAT Reporting Codes page and assigned through the VAT Number field on VAT Posting Setup. This lets users pick the VAT business and product posting group combination with one field, including in journals.

Other pages cover calculation and reporting. Two pages explain proportional VAT, where only part of the VAT on shared expenses is deductible, and how to set the percentage. The VAT Reconciliation report prints reconciliation by general ledger account. Norwegian VAT Reporting describes electronic VAT return submission with ID-Porten authentication. The SAF-T page covers file setup and export for the tax authority.

Start with the VAT codes page, since the journal and reporting pages depend on that setup. Then go to the page for your task: proportional VAT, reconciliation, VAT return submission or SAF-T export.

## Key points

- Norwegian VAT codes are set up on VAT Reporting Codes and assigned via the VAT Number field on VAT Posting Setup (Business Central 29).
- One VAT code in journals fills the VAT fields, replacing separate VAT business and product posting group entry.
- Proportional VAT uses Calc. Prop. Deduction VAT and Proportional Deduction VAT % on VAT Posting Setup, for cases with both deductible and non-deductible VAT.
- The VAT Reconciliation report shows base and VAT amounts by G/L account, with Show Details and Show Transactions without VAT options and print preview.
- Electronic VAT return submission uses ID-Porten authentication with OAuth 2.0 setup, VAT return validation, submission and VAT period closure (version 23.5).
- Norwegian SAF-T supports versions 1.20 and 1.30 (version 25.3), with G/L account mapping to standard accounts and VAT posting setup mapping to SAF-T tax codes.
- SAF-T export offers dimension export control, parallel background job processing and data quality validation controls.

## Learn pages

- [Calculate Proportional VAT in the Norwegian Version [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-calculate-proportional-vat): Learn how to calculate VAT using proportional VAT for both deductible and non-deductible items in the Norwegian version of Business Central.
- [Norwegian VAT Codes in Business Central](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/norwegian-vat-codes): Learn how to set up VAT processing information in the Norwegian version of Business Central by using standard Norwegian VAT codes.
  - In the observatory: [Table 325 "VAT Posting Setup"](../../../../../objects/table/325.md)
- [Norwegian VAT Reporting in Business Central](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/norwegian-vat-reporting): Use Norwegian-specific features in Business Central to calculate and report VAT returns electronically to the Norwegian tax authorities.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 349 "VAT Reporting Codes"](../../../../../objects/page/349.md), [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md), [Page 746 "VAT Reports Configuration"](../../../../../objects/page/746.md), [Report 20 "Calc. and Post VAT Settlement"](../../../../../objects/report/20.md)
- [Print a VAT Reconciliation Report in the Norwegian Version [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-print-a-vat-reconciliation-report): Learn to print the VAT Reconciliation report to view the reconciliation settlement for base and VAT amounts in general ledger accounts.
  - In the observatory: [Report 10630 "VAT Reconciliation (NO)"](../../../../../objects/report/10630-no.md)
- [Proportional VAT in Norway [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/proportional-vat): Learn how Norwegian proportional VAT in Business Central calculates deductible VAT and posts the nondeductible amount to general ledger cost accounts.
  - In the observatory: [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md)
- [Set Up and Export Norwegian SAF-T Files](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-setup-and-generate-saf-t-files-no): Set up Norwegian SAF-T mappings in Business Central, choose an export version, and generate XML or ZIP files to provide to the Norwegian tax authorities.
  - In the observatory: [Page 10678 "SAF-T VAT Posting Setup (NO)"](../../../../../objects/page/10678-no.md), [Page 10679 "SAF-T Mapping Setup (NO)"](../../../../../objects/page/10679-no.md), [Page 10680 "SAF-T Mapping Source (NO)"](../../../../../objects/page/10680-no.md), [Page 10686 "SAF-T Exports (NO)"](../../../../../objects/page/10686-no.md), [Page 10690 "SAF-T Setup (NO)"](../../../../../objects/page/10690-no.md), [Page 10691 "SAF-T Export Files (NO)"](../../../../../objects/page/10691-no.md)
- [Use One VAT Code in Journals in Norwegian Version [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-use-one-vat-code-in-journals): Use VAT Number and Bal. VAT Number in Norwegian Business Central journals to fill in VAT posting groups from a unique VAT posting setup combination.
  - In the observatory: [Page 349 "VAT Reporting Codes"](../../../../../objects/page/349.md), [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11629 Fix Norwegian SAF-T 1.30 export issues](../../../../../changes/bcapps/11629.md) (code change): "Norwegian SAF-T 1.30 export now correctly reports header versions"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 315 "VAT Entries"](../../../../../objects/page/315.md) · on [Table 254 "VAT Entry"](../../../../../objects/table/254.md)
- [Page 317 "VAT Statement"](../../../../../objects/page/317.md) · captioned "VAT Statements" · on [Table 256 "VAT Statement Line"](../../../../../objects/table/256.md)
- [Page 471 "VAT Product Posting Groups"](../../../../../objects/page/471.md) · on [Table 324 "VAT Product Posting Group"](../../../../../objects/table/324.md)
- [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md) · on [Table 325 "VAT Posting Setup"](../../../../../objects/table/325.md)
- [Page 473 "VAT Posting Setup Card"](../../../../../objects/page/473.md) · on [Table 325 "VAT Posting Setup"](../../../../../objects/table/325.md)
- [Page 737 "VAT Return Period List"](../../../../../objects/page/737.md) · captioned "VAT Return Periods" · on [Table 737 "VAT Return Period"](../../../../../objects/table/737.md)
- [Page 738 "VAT Return Period Card"](../../../../../objects/page/738.md) · captioned "VAT Return Period" · on [Table 737 "VAT Return Period"](../../../../../objects/table/737.md)
- [Page 743 "VAT Report Setup"](../../../../../objects/page/743.md) · on [Table 743 "VAT Report Setup"](../../../../../objects/table/743.md)

Learn also names 24 objects with no object page: page/10601, page/10602, page/10604, page/10670, page/10671, page/10672, page/10673, page/10674, page/10675, page/10677, page/10678, page/10679, page/10680, page/10685, page/10686, page/10687, page/10688, page/10689, page/10690, page/10691, page/10692, page/10696, page/10697, page/10698.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
