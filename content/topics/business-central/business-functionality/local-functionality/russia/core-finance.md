---
id: topic/business-central/business-functionality/local-functionality/russia/core-finance
type: topic
title: Core finance
summary: Core finance for Russia in Business Central covers local currency setup and exchange rate import, general ledger correspondence, and financial reports for statutory reporting. It answers questions on configuring Russian currency data, creating and analyzing G/L correspondence, and building financial reports.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:03:33.872Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8064ed15213b8cf20bf69cdc951b86ac236e392041cd0850aecdf3c25f7a0380
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Currency-information-Import-currency-rates
    title: Currency information in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/account-schedules-overview
    title: Financial Reports Overview in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/general-ledger-correspondence
    title: General ledger correspondence in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/How-to-Work-with-Account-Schedules
    title: Working with Financial Reports in Russia
    date: "2026-10-23"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Currency-information-Import-currency-rates
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/account-schedules-overview
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/general-ledger-correspondence
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/How-to-Work-with-Account-Schedules
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/russia
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9417
    - change/bcapps/9418
    - change/bcapps/9422
learn_toc_path:
  - Business functionality
  - Local functionality
  - Russia
  - Core finance
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/russia
children: []
coverage:
  learn: 4
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 5a3808b271a47c63b815bb3bb7990d45939f3d4c71c4c5ae8867770b84cdeba2
narrative: generated
---

# Core finance

> Core finance for Russia in Business Central covers local currency setup and exchange rate import, general ledger correspondence, and financial reports for statutory reporting. It answers questions on configuring Russian currency data, creating and analyzing G/L correspondence, and building financial reports.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [Russia](../russia.md) > Core finance · tier official · system finance · narrative reviewed (checked by Opus)

## Overview

This section groups the Russia-specific core finance pages. It has four pages and no subtopics. They cover currency information, general ledger correspondence, and two pages on financial reports.

Start with the currency page if you are setting up a company: it explains the local currency details in General Ledger Setup and Company Information, and the batch job that imports exchange rates from Russian bank sources. The general ledger correspondence page covers creating and posting correspondence transactions and analyzing them.

For reporting, read the Financial Reports Overview first to see what the tool can do. Then read Working with Financial Reports for the steps to generate and view reports based on account categories and row and column definitions.

## Key points

- Currency setup: local currency details are set in General Ledger Setup and Company Information, including LCY Code and local currency description.
- The Import Currency Exchange Rate batch job imports rates from Russian bank sources; related fields include Ru Bank Code and Ru Bank Digital Code, and there is an import conflict resolution option.
- General ledger correspondence is created periodically with Create G/L Correspondence, and an Automatic G/L Correspondence option exists.
- Correspondence can be analyzed in the General Ledger - Correspondence window and the G/L Corresp Entries Analysis report, with Date Filter and Business unit Filter.
- Financial reports are customizable statutory reports where you define rows, columns and data comparisons without a report designer.
- Financial reports can use general ledger correspondence, constants, extensions, expressions and predefined column layouts.
- Working with financial reports: use the Generate Financial Reports action, Insert G/L Accounts, a Formula column type, Set Base for Percent, G/L Budget Filter and View Financial Report.
- Financial reports compare general ledger accounts with budget entries.

## Learn pages

- [Currency information in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/Currency-information-Import-currency-rates): Russian localization provides features for importing currency rates in Business Central.
  - In the observatory: [Page 1 "Company Information"](../../../../../objects/page/1.md), [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md)
- [Financial Reports Overview in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/account-schedules-overview): Learn about enhanced financial reporting features and customization options available for Russia in Business Central.
  - In the observatory: [Page 108 "Financial Reports"](../../../../../objects/page/108.md)
- [General ledger correspondence in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/general-ledger-correspondence): Russian functionality includes enhancements for general ledger correspondence.
  - In the observatory: [Page 118 "General Ledger Setup"](../../../../../objects/page/118.md), [Page 12401 "G/L Correspondence Entries (RU)"](../../../../../objects/page/12401-ru.md), [Report 12432 "G/L Corresp. Journal Order (RU)"](../../../../../objects/report/12432-ru.md), [Report 12435 "G/L Corresp Entries Analysis (RU)"](../../../../../objects/report/12435-ru.md)
- [Working with Financial Reports in Russia](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/Russia/How-to-Work-with-Account-Schedules): Provides information about enhanced financial reporting features available for Russia.
  - In the observatory: [Page 108 "Financial Reports"](../../../../../objects/page/108.md), [Page 790 "G/L Account Categories"](../../../../../objects/page/790.md)

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9417 [ALAppExtensions #30221][Event Request] table 12137 "Purch. Withh. Contribution"](../../../../../changes/bcapps/9417.md) (code change): "OnValorizzaINPSOnBeforeCalcAssoggettato event with IsHandled guard allows partners"
- [#9418 [ALAppExtensions #30229][Event Request] table 12113 "Tmp Withholding Contribution"](../../../../../changes/bcapps/9418.md) (code change): "OnCalculateWithholdingTaxOnBeforeAssignWithholdingTaxValues to the Tmp Withholding"
- [#9422 table 12116 "Withholding Tax": scope Reported/Paid modify guard to st…](../../../../../changes/bcapps/9422.md) (code change): "Standard field modifications on reported/paid entries remain blocked for compliance"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
