---
id: topic/business-central/business-functionality/local-functionality/switzerland/vat
type: topic
title: VAT
summary: "Swiss VAT in Business Central: creating and printing Swiss VAT statements (current and older versions), automatic VAT adjustment for payment discounts and foreign currencies, and changing VAT rates. It answers questions on Swiss VAT reporting setup and rate updates."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:40.158Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a9b7d96d1782674da199a72fddd5744d5d26c0112476680e967be881dbedfa93
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-create-and-print-a-swiss-vat-statement
    title: Create and Print a Swiss VAT Statement in the Swiss Version [CH]
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-swiss-vat-statements-older-version-
    title: Print Swiss VAT Statements (Older Version)
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-value-added-tax
    title: Swiss Value Added Tax [CH]
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/vat-rates-for-switzerland
    title: VAT Rates for Switzerland
    date: "2026-10-19"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-create-and-print-a-swiss-vat-statement
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-swiss-vat-statements-older-version-
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-value-added-tax
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/vat-rates-for-switzerland
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/switzerland
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/11206
    - change/bcapps/9734
learn_toc_path:
  - Business functionality
  - Local functionality
  - Switzerland
  - VAT
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/switzerland
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 11023
  - 11024
member_hash: bfca7caae596b12d34c6a38fcff52d148868d5a735fff61ea08574662063fe65
narrative: generated
---

# VAT

> Swiss VAT in Business Central: creating and printing Swiss VAT statements (current and older versions), automatic VAT adjustment for payment discounts and foreign currencies, and changing VAT rates. It answers questions on Swiss VAT reporting setup and rate updates.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Switzerland](../switzerland.md) > VAT · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section covers VAT functionality specific to the Swiss version. It has four pages: one on creating and printing the Swiss VAT statement, one on the older statement report, one on Swiss Value Added Tax adjustments, and one on VAT rates.

Start with the page on creating and printing a Swiss VAT statement if you report realized VAT. It covers the statement template setup, VAT posting details and reporting options. The older version page is for backward compatibility and points to the newer report. The Swiss Value Added Tax page explains how VAT is adjusted automatically for payment discounts and for foreign currency exchange rates. The VAT rates page explains the VAT rate change tool, which replaces the deprecated option of using old and new rates at the same time.

## Key points

- The Swiss VAT statement is created through a VAT statement setup and printed for realized VAT reporting.
- Setup involves the VAT Statement Cipher field, VAT rate configuration, VAT posting details, and an optional additional reporting currency.
- The older Swiss VAT Statement report calculates VAT quarterly, including VAT entries, adjusting entries and accounting sheets.
- The older report supports normal, reduced and special VAT rates and can filter journals by closed periods.
- VAT is adjusted automatically for payment discounts.
- VAT exchange rates are used for foreign currencies, with exchange rate gain/loss posting and VAT entries that track original currency amounts.
- Use the VAT rate change tool to update rates; simultaneous use of old and new rates is deprecated.

## Learn pages

- [Create and Print a Swiss VAT Statement in the Swiss Version [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-create-and-print-a-swiss-vat-statement): Create a Swiss VAT statement template from VAT posting setup, review the statement lines, and print a report for the selected reporting period.
  - In the observatory: [Page 317 "VAT Statement"](../../../../../objects/page/317.md), [Page 472 "VAT Posting Setup"](../../../../../objects/page/472.md)
- [Print Swiss VAT Statements (Older Version)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-swiss-vat-statements-older-version-): Review the older Swiss VAT statement report and its options for VAT entries, adjustment entries, and accounting sheets, with a link to newer guidance.
  - In the observatory: [Report 26100 "Swiss VAT Statement (CH)"](../../../../../objects/report/26100-ch.md)
- [Swiss Value Added Tax [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-value-added-tax): This article explains several enhancements that have been made to the Swiss VAT reporting features.
  - In the observatory: [Table 254 "VAT Entry"](../../../../../objects/table/254.md), [Table 325 "VAT Posting Setup"](../../../../../objects/table/325.md), [Table 330 "Currency Exchange Rate"](../../../../../objects/table/330.md), [Table 98 "General Ledger Setup"](../../../../../objects/table/98.md)
- [VAT Rates for Switzerland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/vat-rates-for-switzerland): Learn how to manage VAT rate changes using the VAT rate change tool.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#11206 [CH] When posting with FCY, VAT G/L Entry stores VAT base amount in Source Currency Amount instead of VAT amount](../../../../../changes/bcapps/11206.md) (code change): "In the Swiss (CH) localization, VAT G/L entries posted in a foreign currency"
- [#9734 [Master]-Performance issue when calculating the VAT advance return / VAT statement (Base Application, German environment) - Copy](../../../../../changes/bcapps/9734.md) (code change): "VAT advance return or VAT statement by adding four lines"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

Learn also names 2 objects with no object page: page/11023, page/11024.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
