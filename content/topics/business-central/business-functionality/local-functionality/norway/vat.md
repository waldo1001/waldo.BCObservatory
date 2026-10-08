---
id: topic/business-central/business-functionality/local-functionality/norway/vat
type: topic
title: VAT
summary: "Norwegian VAT functionality in Business Central: VAT codes, entering one VAT code in journals, proportional VAT deduction, VAT reconciliation reporting, electronic VAT returns via ID-Porten, and SAF-T file setup and export. It answers setup and usage questions for Norway-specific VAT."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:10.804Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 403601c81a913af0f50e07160e08b9dbd271fa3680a355640adfdcc95805a152
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-calculate-proportional-vat
    title: Calculate proportional VAT [NO]
    date: "2025-05-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/norwegian-vat-codes
    title: Norwegian VAT Codes
    date: "2025-05-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/norwegian-vat-reporting
    title: Norwegian VAT reporting [NO]
    date: "2025-05-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-print-a-vat-reconciliation-report
    title: Print a VAT reconciliation report [NO]
    date: "2025-05-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/proportional-vat
    title: Proportional VAT [NO]
    date: "2025-05-15"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-setup-and-generate-saf-t-files-no
    title: Setup and generate SAF-T files
    date: "2025-05-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-use-one-vat-code-in-journals
    title: Use One VAT Code in Journals [NO]
    date: "2025-05-14"
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

> Norwegian VAT functionality in Business Central: VAT codes, entering one VAT code in journals, proportional VAT deduction, VAT reconciliation reporting, electronic VAT returns via ID-Porten, and SAF-T file setup and export. It answers setup and usage questions for Norway-specific VAT.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Norway](../norway.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers the local VAT features for Norway. The basics are the Norwegian VAT codes. Instead of filling in separate VAT business and product posting group fields, you select a single VAT Code. A related journal feature lets you post VAT using that one field, based on VAT Posting Setup.

Other pages cover deduction and reporting. Proportional VAT lets you deduct only a percentage of purchase VAT when an asset is used for both deductible and non-deductible purposes. The percentage is set in VAT Posting Setup based on historical usage data. The VAT Reconciliation report shows base and VAT amounts by general ledger account and VAT type. Norwegian VAT reporting describes how to send VAT returns electronically to the tax authorities through ID-Porten, including authorization, VAT statement mapping and VAT period closure. The SAF-T page covers setting up, generating and exporting the Standard Audit File - Tax.

Start with the VAT codes page if you are setting up VAT or using single-code journal entry. Otherwise go straight to the page for the task you need.

## Key points

- Norwegian VAT codes simplify setup by using one VAT Code field instead of separate VAT Bus. and VAT Prod. Posting Group fields.
- Journals can post VAT with a single VAT Code field, based on VAT Posting Setup.
- Proportional VAT uses the Calc. Prop. Deduction VAT setting and a Proportional Deduction VAT % in VAT Posting Setup, based on historical usage data.
- Norwegian VAT reporting sends VAT returns electronically through ID-Porten. It covers OAuth 2.0 authorization, VAT statement mapping, VAT period closure and concessional rate configuration. The page references version 23.5.
- The VAT Reconciliation report shows reconciliation settlement for base and VAT amounts by general ledger account and VAT type.
- The SAF-T extension supports setup, generation and export, with chart of accounts mapping, VAT code mapping and dimension export control.
- SAF-T versions 1.20 and 1.30 are supported starting in version 25.3, with options for parallel processing and split by date.

## Learn pages

- [Calculate proportional VAT [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-calculate-proportional-vat): Learn how to calculate VAT using proportional VAT for both deductible and non-deductible items in the Norwegian version of Business Central.
- [Norwegian VAT Codes](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/norwegian-vat-codes): Learn how to set up VAT processing information in the Norwegian version of Business Central by using standard Norwegian VAT codes.
- [Norwegian VAT reporting [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/norwegian-vat-reporting): Use Norwegian-specific features in Business Central to calculate and report VAT returns electronically to the Norwegian tax authorities.
- [Print a VAT reconciliation report [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-print-a-vat-reconciliation-report): Learn to print the VAT Reconciliation report to view the reconciliation settlement for base and VAT amounts in general ledger accounts.
- [Proportional VAT [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/proportional-vat): Norwegian features enable calculation of VAT when both deductible and non-deductible VATs apply.
- [Setup and generate SAF-T files](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/ui-extensions-setup-and-generate-saf-t-files-no): Use the SAF-T extension to set up and generate SAF-T files for the Norwegian authorities in Business Central.
- [Use One VAT Code in Journals [NO]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Norway/how-to-use-one-vat-code-in-journals): Learn how to use one VAT code in journals within the Norwegian version of Business Central to simplify VAT posting.

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
