---
id: topic/business-central/business-functionality/local-functionality/india/tax-engine
type: topic
title: Tax engine
summary: The Tax engine section covers the configurable Tax Engine for India in Business Central. It answers questions about setting up tax types, rates and use cases, scripting and lookups, design best practices, and importing or exporting configuration as JSON.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:01.979Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c162eb2ac2155952038f374518dee5e49b97a0b5b6af6479c47a9c1aed8cccdd
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-006-Design-Consideration
    title: Tax Engine - Design Consideration
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-002-Import-Export-Configuration
    title: Tax Engine - Import/Export Configuration
    date: "2025-06-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-004-Lookup
    title: Tax Engine - Lookup
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-005-Script-Activities
    title: Tax Engine - Script Activity
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003-Tax-Configuration
    title: Tax Engine - Tax Configuration 01
    date: "2025-06-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003.1-Tax-Configuration
    title: Tax Engine - Tax Configuration 02
    date: "2025-06-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-001-Overview
    title: Tax Engine Overview
    date: "2025-06-26"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-006-Design-Consideration
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-002-Import-Export-Configuration
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-004-Lookup
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-005-Script-Activities
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003-Tax-Configuration
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003.1-Tax-Configuration
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-001-Overview
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/local-functionality/india
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/9199
learn_toc_path:
  - Business functionality
  - Local functionality
  - India
  - Tax engine
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/local-functionality/india
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 88efd873824cc03588a7141c9cbb748dd6551231c14e6ee84635e878ce40872b
narrative: generated
---

# Tax engine

> The Tax engine section covers the configurable Tax Engine for India in Business Central. It answers questions about setting up tax types, rates and use cases, scripting and lookups, design best practices, and importing or exporting configuration as JSON.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > Tax engine · tier official · system localization · narrative reviewed by Opus

## Overview

Tax Engine is a configurable extension suite for India. It lets you set up tax rules, calculation and posting without code changes, through six modular extensions. The Overview page introduces the components, including Tax Type Handler, Tax Use Case Handler, Tax Scripting, Tax Posting Handler and JSON import/export.

The configuration pages follow a sequence. Tax Configuration 01 covers tax types (GST, TDS, TCS, WHT), attributes, components, rate parameters and tax rates. Tax Configuration 02 covers use cases: conditions, attribute and rate parameter mapping, computation scripts, component formulas, posting and tax ledger mapping. The Script Activity and Lookup pages are references for building the logic inside use cases.

Start with the Overview, then read the two configuration pages in order. Use the Design Consideration page for best practices before you build. Use the Import/Export page when you move configuration between environments.

## Key points

- Tax Engine is an India-specific extension suite with six modular extensions for tax setup, calculation and posting without code changes.
- Tax types such as GST, TDS, TCS and WHT are set up with attributes, components, rate parameters and tax rates, and are posted to G/L accounts.
- Use cases define business scenarios: stages, conditions, attribute mapping, rate parameter mapping, variables, computation scripts, component formulas, posting and tax ledger mapping.
- Script Activity supports string operations, number calculations, date manipulation, conditions, loops and miscellaneous activities.
- Lookups fetch values from the current record, variables, tables, the database, the system, tax attributes, components and other sources.
- The Json Exchange extension imports and exports full tax type configurations or specific use cases in JSON format, and is reached through Assisted Setup.
- Design Consideration gives best practices for creating tax types, generic attributes and rate setups, sequencing use cases, deploying configuration files and managing versions.

## Learn pages

- [Tax Engine - Design Consideration](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-006-Design-Consideration): Key considerations and best practices for designing and configuring the Tax Engine in Business Central for India.
- [Tax Engine - Import/Export Configuration](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-002-Import-Export-Configuration): Learn how to import and export tax engine configuration data in JSON format for India localization in Business Central.
- [Tax Engine - Lookup](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-004-Lookup): Provides an overview of the Lookup utility in the Tax Engine for fetching values from various sources in Business Central (India).
- [Tax Engine - Script Activity](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-005-Script-Activities): Overview of script activities available in the Tax Engine for Business Central India localization.
- [Tax Engine - Tax Configuration 01](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003-Tax-Configuration): Provides details on configuring tax types, tax entities, input parameters, components, and rate setup in the Tax Engine for India localization in Business Central.
- [Tax Engine - Tax Configuration 02](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003.1-Tax-Configuration): Provides details about configuring tax use cases in the Tax Engine for India localization in Business Central.
- [Tax Engine Overview](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-001-Overview): Provides an overview of the Tax Engine, its components, and configuration options for managing tax rules and calculations in Business Central for India.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9199 [Main]-Incident 21000001049308 : [BC-IN] Purchase invoice with a deferral schedule and Non-availment GST is not functioning correctly](../../../../../changes/bcapps/9199.md) (code change): "purchase invoice with Non-availment GST can now be posted when a default deferral template is configured"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
