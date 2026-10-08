---
id: topic/business-central/business-functionality/local-functionality/austria/vat
type: topic
title: VAT
summary: VAT functionality in the Austrian version of Business Central. It covers creating a VAT statement, including temporary 5% rates and FDF export, and VAT reporting through the VAT Statement AT and VAT-VIES Declaration XML reports.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:45.545Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0e787538b682a13d90df3b3198135fea6e33b8ea0ec1c260a84b322c0d9d4c82
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/how-to-create-a-vat-statement
    title: How to Create a VAT Statement
    date: "2025-03-06"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/vat-reporting
    title: VAT reporting in the Austrian version
    date: "2025-03-06"
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

> VAT functionality in the Austrian version of Business Central. It covers creating a VAT statement, including temporary 5% rates and FDF export, and VAT reporting through the VAT Statement AT and VAT-VIES Declaration XML reports.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Austria](../austria.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section describes how the Austrian version handles VAT reporting to tax authorities and for EU compliance. It has two pages and no subtopics.

"VAT reporting in the Austrian version" gives the overall picture: the VAT Statement AT report and the VAT-VIES Declaration XML report, with export to files for submission, including through the Finanz Online Portal. "How to Create a VAT Statement" is the step-by-step page for producing the statement, filtering by period, choosing the reporting type and exporting to FDF or XML.

Start with the reporting overview to see which reports exist, then follow the creation page when you need to prepare and export a statement.

## Key points

- The Austrian version offers VAT Statement AT and VAT-VIES Declaration XML reports.
- VAT statements can be created for reporting VAT to tax authorities.
- The VAT statement supports temporary 5% VAT rates.
- Statement creation includes period filtering and reporting type selection.
- A VAT statement can be exported as an FDF file or as XML.
- The Update VAT Statement function is available when creating a statement.
- VIES reporting supports EU compliance, and VAT reporting integrates with the Finanz Online Portal for submission to tax authorities.

## Learn pages

- [How to Create a VAT Statement](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/how-to-create-a-vat-statement): You can submit a periodic report of VAT transactions. The VAT statement is submitted as an FDF file that corresponds with an editable PDF file from the tax authorities.
- [VAT reporting in the Austrian version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/vat-reporting): You can report VAT electronically to the tax authorities in the Austrian version.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11419 [main] Bug 650139 The Non-Deductible VAT Amount is currently not taken into account in the VAT return Austria](../../../../../changes/bcapps/11419.md) (code change): "The Austrian VAT return report now includes non-deductible VAT amounts"
- [#12127 [AT] VAT Statement report doesn't print the 4.9% VAT rate columns on the U30 Form](../../../../../changes/bcapps/12127.md) (code change): "VAT Statement report for Austria now correctly includes 4.9% VAT rate columns"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
