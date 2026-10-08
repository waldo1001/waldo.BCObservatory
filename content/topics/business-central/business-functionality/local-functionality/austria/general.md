---
id: topic/business-central/business-functionality/local-functionality/austria/general
type: topic
title: General
summary: General Austria localization pages cover audit data export and a setup report. They answer questions about exporting GL and VAT entries for auditors with the Audit Files Export extension, and about printing the G/L Setup Information report in the Austrian version to check setup.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:38.153Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0178294ae036c68e57b5fde214ce7fb8e26a7108a140617b516398aebd118e4a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-to-export-audit-files
    title: Export data for auditing
    date: "2024-08-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/how-to-print-general-ledger-setup-information
    title: Print general ledger setup information [AT]
    date: "2025-03-06"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-to-export-audit-files
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/how-to-print-general-ledger-setup-information
  objects:
    - object/page/5260
    - object/page/5264
    - object/page/5266
    - object/page/5267
    - object/page/5270
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/austria
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Local functionality
  - Austria
  - General
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/austria
children: []
coverage:
  learn: 2
  code: 5
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 5260
  - 5261
  - 5264
  - 5266
  - 5267
  - 5270
member_hash: 1a373ffa5bf58f0ca2c3202db40980779c54073139d17356a9211f8f3bdfee93
narrative: generated
---

# General

> General Austria localization pages cover audit data export and a setup report. They answer questions about exporting GL and VAT entries for auditors with the Audit Files Export extension, and about printing the G/L Setup Information report in the Austrian version to check setup.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Austria](../austria.md) > General · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

This section holds two pages for the Austrian version of Business Central, both aimed at audit readiness and setup verification. There are no subtopics.\n\n\"Export data for auditing\" describes the Audit Files Export extension. It exports GL and VAT entries in formats such as SIE, FEC, and SAF-T, and it uses GL account mapping to prepare audit-ready data. The page also mentions data quality checks, parallel processing, and zip export.\n\n\"Print general ledger setup information [AT]\" describes the G/L Setup Information report in the Austrian version. Use it before daily operations to review and verify master data, posting groups, VAT setup, and number series. The page lists compliance with the Grundsätze zum Datenzugriff und zur Prüfbarkeit digitaler Unterlagen as one of its features.

## Key points

- The Audit Files Export extension exports GL and VAT entries.
- Supported export formats named include SIE, FEC, and SAF-T.
- GL account mapping is part of preparing audit-ready exports.
- The export page mentions data quality checks, parallel processing, and zip export.
- The G/L Setup Information report is available in the Austrian version.
- The report helps verify master data, posting groups, VAT setup, and number series.
- The report supports compliance with the Grundsätze zum Datenzugriff und zur Prüfbarkeit digitaler Unterlagen.

## Learn pages

- [Export data for auditing](https://learn.microsoft.com/dynamics365/business-central/finance-how-to-export-audit-files): This article explains how to set up different export formats and then use them, based on auditor or authority requirements.
- [Print general ledger setup information [AT]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Austria/how-to-print-general-ledger-setup-information): Before you start using the Austrian version for your daily business tasks, you can run the G/L Setup Information report to display the master data that you set up.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 5260 "G/L Account Mapping"](../../../../../objects/page/5260.md) · on [Table 5260 "G/L Account Mapping Header"](../../../../../objects/table/5260.md)
- [Page 5264 "Audit File Export Setup"](../../../../../objects/page/5264.md) · on [Table 5264 "Audit File Export Setup"](../../../../../objects/table/5264.md)
- [Page 5266 "Audit File Export Documents"](../../../../../objects/page/5266.md) · on [Table 5265 "Audit File Export Header"](../../../../../objects/table/5265.md)
- [Page 5267 "Audit File Export Doc. Card"](../../../../../objects/page/5267.md) · captioned "Audit File Export Document" · on [Table 5265 "Audit File Export Header"](../../../../../objects/table/5265.md)
- [Page 5270 "Audit File Export Format Setup"](../../../../../objects/page/5270.md) · on [Table 5268 "Audit File Export Format Setup"](../../../../../objects/table/5268.md)

Learn also names 1 object with no object page: page/5261.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
