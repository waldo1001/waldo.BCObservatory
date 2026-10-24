---
id: topic/business-central/business-functionality/local-functionality/austria/vat
type: topic
title: VAT
summary: "Austrian VAT functionality in Business Central: how to create a VAT statement (XML and FDF files for the tax authority, including the reduced 4.9% rate) and which Austrian VAT reports exist, including VAT-VIES Declaration XML. Answers questions on Austrian VAT reporting formats and submission."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:45.774Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1f4e97e91423842985d40f93cf424af109a7ecbf9f00d4c45d24f13d86d6cb57
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/how-to-create-a-vat-statement
    title: How to Create a VAT Statement
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/vat-reporting
    title: VAT reporting in the Austrian version
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/how-to-create-a-vat-statement
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/vat-reporting
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/austria
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/11419
    - change/bcapps/12127
learn_toc_path:
  - Business functionality
  - Local functionality
  - Austria
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/austria
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: f30cc7bcd13be09a31dd0a34ac73f0974323ce3ee95e87af36f1e384e5799628
narrative: generated
---

# VAT

> Austrian VAT functionality in Business Central: how to create a VAT statement (XML and FDF files for the tax authority, including the reduced 4.9% rate) and which Austrian VAT reports exist, including VAT-VIES Declaration XML. Answers questions on Austrian VAT reporting formats and submission.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Austria](../austria.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers VAT reporting in the Austrian version of Business Central. It has two pages: one describing the available Austrian VAT reports, and one giving the steps to create a VAT statement.

The reporting page lists the VAT Statement Austria, available in FDF, XML and PDF formats, and the VAT-VIES Declaration XML used to report EU sales. It also refers to FinanzOnline submission. The how-to page explains generating the VAT statement, filtering VAT entries, verifying positions, and exporting XML and FDF files for the tax authority. It also notes support for a reduced 4.9% VAT rate effective July 1, 2026.

Start with the reporting overview to see which report and format you need, then follow the VAT statement page to produce the files.

## Key points

- VAT Statement Austria is available in FDF, XML and PDF formats.
- VAT-VIES Declaration XML is used for reporting EU sales (VIES reporting).
- Reports can be submitted through FinanzOnline.
- Creating a VAT statement produces XML and FDF files for tax authority submission.
- VAT entries can be filtered and positions verified before export.
- Reduced 4.9% VAT rate is supported, effective July 1, 2026.

## Learn pages

- [How to Create a VAT Statement](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/how-to-create-a-vat-statement): You can submit a periodic report of VAT transactions. The VAT statement is submitted as an FDF file that corresponds with an editable PDF file from the tax authorities.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md)
- [VAT reporting in the Austrian version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/vat-reporting): You can report VAT electronically to the tax authorities in the Austrian version.
  - In the observatory: [Table 254 "VAT Entry"](../../../../../objects/table/254.md), [Table 256 "VAT Statement Line"](../../../../../objects/table/256.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11419 [main] Bug 650139 The Non-Deductible VAT Amount is currently not taken into account in the VAT return Austria](../../../../../changes/bcapps/11419.md) (code change): "The Austrian VAT return report now includes non-deductible VAT amounts"
- [#12127 [AT] VAT Statement report doesn't print the 4.9% VAT rate columns on the U30 Form](../../../../../changes/bcapps/12127.md) (code change): "VAT Statement report for Austria now correctly includes 4.9% VAT rate columns"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
