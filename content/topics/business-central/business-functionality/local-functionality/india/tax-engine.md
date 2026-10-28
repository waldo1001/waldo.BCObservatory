---
id: topic/business-central/business-functionality/local-functionality/india/tax-engine
type: topic
title: Tax engine
summary: The Tax engine section covers the configuration-driven tax engine in the India localization of Business Central. It answers questions about tax types, rates, use cases, lookups, scripting, design choices, and JSON import/export of tax configuration.
tier: official
language: en
system: localization
review:
  state: reviewed
  by: opus
  at: "2026-10-28T11:02:34.369Z"
  flags: []
generated:
  at: "2026-10-28T11:04:14.111Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 07a70080655ffc3958f49704cab6e32e59c68c78a4cf78008aef8393b1f1728f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003-Tax-Configuration
    title: Tax Engine - Configuration of Tax Type and Tax Rates
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-006-Design-Consideration
    title: Tax Engine - Design Consideration
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-002-Import-Export-Configuration
    title: Tax Engine - Import/Export Configuration
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-004-Lookup
    title: Tax Engine - Lookup
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-005-Script-Activities
    title: Tax Engine - Script Activity
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003.1-Tax-Configuration
    title: Tax Engine - Use Case Configuration
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-001-Overview
    title: Tax Engine Overview
    date: "2026-10-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003-Tax-Configuration
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-006-Design-Consideration
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-002-Import-Export-Configuration
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-004-Lookup
    - https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-005-Script-Activities
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

> The Tax engine section covers the configuration-driven tax engine in the India localization of Business Central. It answers questions about tax types, rates, use cases, lookups, scripting, design choices, and JSON import/export of tax configuration.

Path: [Business functionality](../../../business-functionality.md) > [Local functionality](../../local-functionality.md) > [India](../india.md) > Tax engine · tier official · system localization · narrative reviewed (checked by Opus)

## Overview

The tax engine manages tax rules and calculations through configuration rather than fixed code. The overview page describes its six modules: core, tax type handler, use case handler, scripting, posting handler, and JSON exchange. Start there to see how the parts relate.

The other pages follow the setup flow. The design consideration page covers choices for tax types, attributes, rate setup, and use case sequencing. The tax type and tax rate page covers tax types, components, attributes, and rates used to calculate and post taxes to G/L accounts. The use case page defines when and how tax is calculated, using conditions, attribute mapping, rate parameters, computation scripts, and posting setup.

Lookup and Script Activity pages are references for building use case logic. Lookup fetches values from sources such as the current record, variables, tables, and tax attributes. Script Activity covers string, number, date, condition, and loop activities. The Import/Export page explains moving tax type configuration and use cases as JSON, and using the Tax Engine Setup wizard.

## Key points

- The tax engine has six modules: core, tax type handler, use case handler, scripting, posting handler, and JSON exchange.
- Tax types are configured with components, attributes, entity mapping, and rate setup so taxes can be calculated and posted to G/L accounts.
- Design guidance covers generic attributes, mapping attributes to table fields, rate column setup, and use case execution order.
- Use cases define conditions, attribute mapping, rate parameter mapping, variables, computation scripts, component formulas, and posting setup.
- Lookups fetch values from the current record, variables, tables, database, system, tax attributes, and components.
- Script activities include string operations, number calculations, date manipulation, conditions, and loops.
- Tax type configuration and use cases can be exported and imported as JSON, and the Tax Engine Setup wizard supports assisted setup.

## Learn pages

- [Tax Engine - Configuration of Tax Type and Tax Rates](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003-Tax-Configuration): Provides details on configuring tax types, tax entities, input parameters, components, and rate setup in the Tax Engine for India localization in Business Central.
  - In the observatory: [Table 14 "Location"](../../../../../objects/table/14.md), [Table 18 "Customer"](../../../../../objects/table/18.md), [Table 23 "Vendor"](../../../../../objects/table/23.md), [Table 27 "Item"](../../../../../objects/table/27.md), [Table 37 "Sales Line"](../../../../../objects/table/37.md), [Table 39 "Purchase Line"](../../../../../objects/table/39.md)
- [Tax Engine - Design Consideration](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-006-Design-Consideration): Review design considerations for Tax Engine configuration, including use cases, calculations, and versioning in Business Central for India.
- [Tax Engine - Import/Export Configuration](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-002-Import-Export-Configuration): Import and export tax engine configuration in JSON format, and review configuration setup and file handling in Business Central for India.
  - In the observatory: [Page 1801 "Assisted Setup"](../../../../../objects/page/1801.md), [Page 20248 "Tax Types"](../../../../../objects/page/20248.md)
- [Tax Engine - Lookup](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-004-Lookup): Provides an overview of the Lookup utility in the Tax Engine for fetching values from various sources in Business Central (India).
- [Tax Engine - Script Activity](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-005-Script-Activities): Review Tax Engine script activities and their inputs and outputs for tax configuration in the India localization of Microsoft Dynamics 365 Business Central.
- [Tax Engine - Use Case Configuration](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-003.1-Tax-Configuration): Configure tax use cases, mappings, calculations, and posting behavior with the Tax Engine for the India localization of Business Central.
  - In the observatory: [Page 20248 "Tax Types"](../../../../../objects/page/20248.md), [Page 20310 "Use Cases"](../../../../../objects/page/20310.md)
- [Tax Engine Overview](https://learn.microsoft.com/dynamics365/business-central/LocalFunctionality/India/TaxEngine-001-Overview): Provides an overview of the Tax Engine, its components, and configuration options for managing tax rules and calculations in Business Central for India.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#9199 [Main]-Incident 21000001049308 : [BC-IN] Purchase invoice with a deferral schedule and Non-availment GST is not functioning correctly](../../../../../changes/bcapps/9199.md) (code change): "purchase invoice with Non-availment GST can now be posted when a default deferral template is configured"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
