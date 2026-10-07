---
id: topic/business-central/business-functionality/local-functionality/germany/vat
type: topic
title: VAT
summary: "VAT functionality in the German version of Business Central: setting up and creating VAT reports (ELMA5 export), correcting submitted reports, declaring VAT-VIES, and configuring VAT and Intrastat report selections. It answers setup, submission and correction questions for German VAT reporting."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:54.451Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ed20e3f7498e04eb300cb3cb041a30bdeef4933ebea7393cf0ac5b4a04e7d8ab
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-correct-vat-reports
    title: Correct VAT Reports [DE]
    date: "2025-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-create-vat-reports
    title: How to Create VAT Reports [DE]
    date: "2025-03-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-declare-vat-vies-tax
    title: How to Declare VAT-VIES Tax [DE]
    date: "2025-04-24"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-reports-for-vat-and-intrastat
    title: How to Set Up Reports for VAT and Intrastat
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-vat-reports
    title: How to Set Up VAT Reports [DE]
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/vat-reporting
    title: VAT Reporting in the German version
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-correct-vat-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-create-vat-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-declare-vat-vies-tax
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-reports-for-vat-and-intrastat
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-vat-reports
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/vat-reporting
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/germany
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9734
learn_toc_path:
  - Business functionality
  - Local functionality
  - Germany
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/germany
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 11016
  - 11017
  - 11019
  - 11025
  - 11026
  - 11027
  - 11028
  - 26101
member_hash: 38c5e1704eb87593fffe75e235e9659e89c2e6feafca00cd447bc45f7f7a2dd2
narrative: generated
---

# VAT

> VAT functionality in the German version of Business Central: setting up and creating VAT reports (ELMA5 export), correcting submitted reports, declaring VAT-VIES, and configuring VAT and Intrastat report selections. It answers setup, submission and correction questions for German VAT reporting.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Germany](../germany.md) > VAT · tier official · system finance · narrative reviewed by Opus

## Overview

This section covers VAT reporting for Germany. It includes local reports such as VAT Statement Germany, Sales VAT Advance Notifications and VAT Statement Schedule, and export to the ELSTER portal. Separate pages cover the ELMA5-based VAT report workflow, VAT-VIES declarations for EU sales, and report selection setup for VAT and Intrastat.

A practical order is to start with the overview page, VAT Reporting in the German version. Then configure VAT report setup (numbering series, permission to modify submitted reports, ZIVIT information) and the report selections. After that, create, release, export and mark VAT reports as submitted. If a report needs adjusting or deleting, use the correction page.

VAT-VIES declarations and Intrastat setup are handled on their own pages. Intrastat needs a submission channel, either IDEV or eSTATISTIK.CORE.

## Key points

- VAT reports are created for the ELMA5 format, then released, exported and marked as submitted.
- VAT report setup covers numbering series, whether submitted reports can be modified, exporting cancellation lines, and ZIVIT information.
- Corrective VAT reports use cancellation and correction line types, with the Suggest Lines and Correct Lines actions.
- VAT-VIES declarations for EU sales can be monthly, bi-monthly or quarterly depending on sales volume, with corrected notifications and migration to monthly reporting.
- Local reports include VAT Statement Germany, Sales VAT Adv. Not. Acc. Proof and VAT Statement Schedule, with ELSTER export.
- VAT and Intrastat report selections are set up in Report Selection pages, with XML and ASCII formats and material numbers for Intrastat forms.
- Intrastat submission channels are IDEV or eSTATISTIK.CORE.

## Learn pages

- [Correct VAT Reports [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-correct-vat-reports): If you need to submit a corrective VAT report or delete an existing one, you must create a new VAT report.
- [How to Create VAT Reports [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-create-vat-reports): You can configure various types of VAT reports in electronic format to comply with ELMA5 format requirements.
- [How to Declare VAT-VIES Tax [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-declare-vat-vies-tax): Learn to create the VAT-VIES report for submitting sales transaction details with other EU countries or regions.
- [How to Set Up Reports for VAT and Intrastat](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-reports-for-vat-and-intrastat): Learn how to specify the reports used to create documents for submission to authorities, such as the VAT statement and the Intrastat form.
- [How to Set Up VAT Reports [DE]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/how-to-set-up-vat-reports): Learn how to set up report parameters in Business Central to file a VAT report under the ELMA5 system.
- [VAT Reporting in the German version](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Germany/vat-reporting): You can report VAT electronically to the tax authorities in the German version.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9734 [Master]-Performance issue when calculating the VAT advance return / VAT statement (Base Application, German environment) - Copy](../../../../../changes/bcapps/9734.md) (code change): "performance issue with VAT advance return and VAT statement calculations in German environments"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 11016, 11017, 11019, 11025, 11026, 11027, 11028, 26101.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
