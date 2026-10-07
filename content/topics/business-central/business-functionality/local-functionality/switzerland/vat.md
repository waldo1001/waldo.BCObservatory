---
id: topic/business-central/business-functionality/local-functionality/switzerland/vat
type: topic
title: VAT
summary: "Swiss VAT in Business Central: creating and printing Swiss VAT statements (current and older version), how VAT amounts and exchange rates are adjusted, and how to handle VAT rate changes. Answers questions about Swiss VAT reporting and rate changes."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:34.744Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 69aab0adbad4baf818741b5caaa2c9f5e51d32eebc003e587641133a0a492d57
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-create-and-print-a-swiss-vat-statement
    title: Create and print a Swiss VAT statement [CH]
    date: "2025-04-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-swiss-vat-statements-older-version-
    title: How to Print Swiss VAT Statements (older version)
    date: "2025-04-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-value-added-tax
    title: Swiss Value Added [CH]
    date: "2025-05-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/vat-rates-for-switzerland
    title: VAT rates for Switzerland
    date: "2023-12-11"
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

> Swiss VAT in Business Central: creating and printing Swiss VAT statements (current and older version), how VAT amounts and exchange rates are adjusted, and how to handle VAT rate changes. Answers questions about Swiss VAT reporting and rate changes.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Switzerland](../switzerland.md) > VAT · tier official · system finance · narrative reviewed by Opus

## Overview

This section covers the Swiss-specific VAT functionality in Business Central. It has four pages: two on printing VAT statements, one on how Swiss VAT handles payment discounts and exchange rates, and one on changing VAT rates.

For reporting, start with "Create and print a Swiss VAT statement [CH]". It describes setting up VAT statement templates and printing statements with various tax rates and reporting options. The older "How to Print Swiss VAT Statements" page documents the earlier report, kept for backward compatibility, which prints quarterly VAT reporting including VAT entries, adjusting entries and an accounting sheet.

"Swiss Value Added [CH]" explains the automatic adjustment of VAT amounts for payment discounts and the use of official government exchange rates for foreign currency VAT. "VAT rates for Switzerland" explains that rate changes must be made with the VAT rate change tool.

## Key points

- Swiss VAT statements are created from VAT statement templates and can be printed with various tax rates and reporting options.
- The current statement page covers VAT Statement, VAT Statement Cipher, VAT rates and Additional Reporting Currency.
- The older Swiss VAT Statement report is kept for backward compatibility and prints VAT entries, adjusting entries and an accounting sheet for quarterly reporting.
- The older report supports closed journal filtering, open date settlement and VAT rate selection.
- VAT amounts are adjusted automatically for payment discounts.
- Foreign currency VAT calculations use official government exchange rates, and VAT exchange rates are adjusted automatically for transactions.
- VAT rate changes must use the VAT rate change tool; the earlier option of using old and new rates at the same time is deprecated.

## Learn pages

- [Create and print a Swiss VAT statement [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-create-and-print-a-swiss-vat-statement): Learn the steps to create and print a Swiss VAT Statement using details configured on the VAT Posting Setup page.
- [How to Print Swiss VAT Statements (older version)](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/how-to-print-swiss-vat-statements-older-version-): Learn how to print the Swiss VAT statement to use it for quarterly tax reporting.
- [Swiss Value Added [CH]](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/swiss-value-added-tax): This article explains several enhancements that have been made to the Swiss VAT reporting features.
- [VAT rates for Switzerland](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Switzerland/vat-rates-for-switzerland): Learn how to manage VAT rate changes using the VAT rate change tool.

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 11023, 11024.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
