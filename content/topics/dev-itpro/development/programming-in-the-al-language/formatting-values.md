---
id: topic/dev-itpro/development/programming-in-the-al-language/formatting-values
type: topic
title: Formatting values
summary: "Formatting values in AL covers how Business Central displays and converts data: the Format method for dates, times, decimals and other types, field-level decimal formatting properties, and file handling with text encodings. It answers questions about format strings, amount and currency display, and encoding choices for import and export."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:28:25.918Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 799d6314a3b6d0f597598e88f627b6074b761fe29e0d26b3daa204b2cdc1211e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-file-handling-and-text-encoding
    title: File handling and text encoding
    date: "2025-05-21"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-property
    title: Formatting values, dates, and time
    date: "2026-07-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-file-handling-and-text-encoding
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-field-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-property
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
  localizations: []
  videos: []
  posts:
    - post/aardvarklabs-blog/1696
    - post/tine-staric-net/https-tine-staric-net-blog-2025-format-cheatsheet--8c69d461e7
  guidelines: []
  changes:
    - change/bcapps/10359
learn_toc_path:
  - Development
  - Programming in the AL language
  - Formatting values
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 980024bd723a3011e5f11fc2464d1bb306e6a0f3d31a1c678caca9be5e61a1b0
narrative: generated
---

# Formatting values

> Formatting values in AL covers how Business Central displays and converts data: the Format method for dates, times, decimals and other types, field-level decimal formatting properties, and file handling with text encodings. It answers questions about format strings, amount and currency display, and encoding choices for import and export.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Formatting values · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section groups three pages on how values are presented and exchanged in AL code. One page covers the Format method, which turns dates, times, datetimes, decimals, integers, booleans, enums and GUIDs into text using predefined or custom format strings. Another covers formatting decimal data in table, page and report fields through properties.

The third page deals with files and text encoding: opening, reading, writing and closing files, and which encoding to use when importing or exporting data so characters appear correctly across systems and languages.

Start with the Format method page for general text conversion. Use the field formatting page when the question is about how amounts, unit amounts or currencies appear in the UI or reports. Use the file handling page for import and export questions, including XMLports.

## Key points

- The Format method supports dates, times, datetimes, decimals, integers, booleans, enums and GUIDs.
- Format accepts standard (predefined) formats or custom format strings with field names, attributes and syntax rules.
- Field formatting uses the AutoFormatType, AutoFormatExpression and DecimalPlaces properties.
- Field formatting controls amounts, unit amounts, currencies, thousand separators and precision; the page lists version 26.0.
- File handling covers opening, reading, writing and closing files.
- Encodings covered: MS-DOS, UTF-8, UTF-16 and Windows.
- XMLports are mentioned in the context of data import and export with encodings.

## Learn pages

- [File handling and text encoding](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-file-handling-and-text-encoding): Understand how files are handled and text is encoded in Business Central.
- [Formatting the data in a field](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-field-data): Learn how to format data in a field, either on the table level or on the page/report level.
- [Formatting values, dates, and time](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-format-property): Learn how to format values, dates, and time in Business Central.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10359 Add activity log amount formatting metadata](../../../../changes/bcapps/10359.md) (code change): "Amount fields in the Expense Activity Log Entry table now include currency-aware formatting metadata"
- [Understanding ToText() in Business Central 2025](../../../../posts/aardvarklabs-blog/1696.md) (community post): "ToText() is a quick display helper added in BC 2025 Wave 1"
- [Format Cheatsheet](../../../../posts/tine-staric-net/https-tine-staric-net-blog-2025-format-cheatsheet--8c69d461e7.md) (community post): "Format() supports 9 different format codes (0-7 and 9) that produce different output styles for the same data type"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
