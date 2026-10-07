---
id: topic/dev-itpro/development/programming-in-the-al-language/developing-reports/formatting-report-data
type: topic
title: Formatting report data
summary: "Formatting report data in AL covers how to control the display of field values in report datasets: decimal precision, dates, booleans, enums, currencies, and regional formats. It answers questions about AutoFormatType, AutoFormatExpr, DecimalPlaces, the Format method, and report Language and FormatRegion settings."
tier: official
language: en
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:24.483Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 66c5fbdf5db6ca544fb5b5f3e3f6cba0c294c11657571895439b298f354c10a5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-report-field-data
    title: Formatting field values in report datasets
    date: "2023-12-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-field-data
    title: Formatting the data in a field
    date: "2026-07-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-localization
    title: Localizing the report data formatting and caption strings
    date: "2023-01-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-report-field-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-field-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-localization
  objects:
    - object/page/9882
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/developing-reports
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Development
  - Programming in the AL language
  - Developing reports
  - Formatting report data
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/developing-reports
children: []
coverage:
  learn: 3
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 9882
member_hash: 7aefc1ab5c97a20461962efc7700612e65e50b29554e6751e875055d902c3331
narrative: generated
---

# Formatting report data

> Formatting report data in AL covers how to control the display of field values in report datasets: decimal precision, dates, booleans, enums, currencies, and regional formats. It answers questions about AutoFormatType, AutoFormatExpr, DecimalPlaces, the Format method, and report Language and FormatRegion settings.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Developing reports](../developing-reports.md) > Formatting report data · tier official · system reporting · narrative reviewed by Opus

## Overview

This section explains how numbers, dates, and other values appear in Business Central reports. It has three pages. Two cover formatting of the values themselves, and one covers localization.\n\n\"Formatting the data in a field\" describes the field properties AutoFormatType, AutoFormatExpression, and DecimalPlaces. These control how decimal values in tables, pages, and reports show as amounts, unit amounts, or currencies, with thousand separators or custom formats. \"Formatting field values in report datasets\" applies these properties to report datasets. It also describes the Format method, which controls how dates, booleans, and enums display, and the Language and FormatRegion methods, which handle regional formats.\n\n\"Localizing the report data formatting and caption strings\" explains how to set the report Language and FormatRegion properties in code, on settings pages, or at runtime. It covers date, time, and decimal formatting, including RDLC formatting. Start with the field formatting page for the basics, then move to the dataset page, then to localization.

## Key points

- AutoFormatType, AutoFormatExpr/AutoFormatExpression, and DecimalPlaces control how decimal values display, including amounts, unit amounts, and currencies.
- Field formatting applies to tables, pages, and reports, and can include thousand separators and custom formats.
- In report datasets, the Format method controls display of dates, booleans, and enums.
- The Language and FormatRegion methods set language and regional formats for dataset values.
- The report Language and FormatRegion properties can be set in code, on settings pages, or at runtime.
- Localization affects date, time, and decimal formatting, and also applies to RDLC layouts.

## Learn pages

- [Formatting field values in report datasets](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-report-field-data): Learn how to format data in report datasets.
- [Formatting the data in a field](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-field-data): Learn how to format data in a field, either on the table level or on the page/report level.
- [Localizing the report data formatting and caption strings](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-report-localization): Localizing report output with respect to captions and data format

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 9882 "Report Res. Govern. Settings"](../../../../../objects/page/9882.md) · captioned "Report Limits and Settings"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
