---
id: topic/business-central/business-functionality/finance/multi-site-and-international-organizatio/consolidate-financial-data-from-multiple
type: topic
title: Consolidate financial data from multiple companies
summary: "Company consolidation in Business Central: combining general ledger data from subsidiaries or business units into a consolidated company. It answers questions about what consolidation supports (different charts of accounts, currencies, fiscal years, environments) and how to set it up, simply or in advanced mode."
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:33.097Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 29e29c5ddd0d3d452fad5aabd1754594e0dbce0417b0fc359a92606ae8db8c43
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-consolidated-company-reporting
    title: Consolidate data from multiple companies
    date: "2026-04-07"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-consolidated-company-reporting-setup
    title: Set up company consolidation
    date: "2025-04-25"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-consolidated-company-reporting
    - https://learn.microsoft.com/dynamics365/business-central/finance-consolidated-company-reporting-setup
  objects:
    - object/page/240
    - object/page/1827
    - object/report/16
    - object/report/17
    - object/report/18
    - object/report/4410
  features: []
  topics:
    - topic/business-central/business-functionality/finance/multi-site-and-international-organizatio
  localizations: []
  videos:
    - video/gHcgL469x_E
    - video/y_8xralhVMM
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Finance
  - Multi-site and international organizations
  - Consolidate financial data from multiple companies
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance/multi-site-and-international-organizatio
children: []
coverage:
  learn: 2
  code: 6
  video: 2
  blog: 0
  guideline: 0
bc_forms:
  - 16
  - 17
  - 18
  - 240
  - 1826
  - 1827
  - 4410
member_hash: 70d3f90d8a3f55c26dfb50f9b81e30c2c724c37f787bebbd8add7811cca4950f
narrative: generated
---

# Consolidate financial data from multiple companies

> Company consolidation in Business Central: combining general ledger data from subsidiaries or business units into a consolidated company. It answers questions about what consolidation supports (different charts of accounts, currencies, fiscal years, environments) and how to set it up, simply or in advanced mode.

Path: [Business functionality](../../../business-functionality.md) > [Finance](../../finance.md) > [Multi-site and international organizations](../multi-site-and-international-organizatio.md) > Consolidate financial data from multiple companies · tier official · system finance · narrative reviewed by Opus

## Overview

Company consolidation lets you bring financial data from several subsidiaries or business units into one consolidated company. It handles differences between the source companies, including charts of accounts, currencies, fiscal years and environments. Related topics include eliminations, currency exchange rates, G/L account mapping and file-based transfer.

The section has two pages. The first, "Consolidate data from multiple companies", explains the concept and what the process supports. The second, "Set up company consolidation", covers configuration, with either a simple assisted setup or an advanced manual setup that includes business units, account mapping, exchange rates, currency translation and dimension consolidation.

Start with the overview page to understand the scenario and its capabilities. Then use the setup page to configure consolidation through either the assisted setup or the advanced manual setup.

## Key points

- Consolidates general ledger entries from multiple subsidiaries or business units into a consolidated company.
- Supports different charts of accounts, currencies, fiscal years and environments.
- Setup can be a simple assisted setup or an advanced manual configuration.
- Advanced setup covers business unit setup, G/L account mapping, exchange rates and currency translation.
- Dimension consolidation is part of the setup.
- Eliminations are part of the consolidation process.
- File-based transfer is one of the supported consolidation options.

## Learn pages

- [Consolidate data from multiple companies](https://learn.microsoft.com/dynamics365/business-central/finance-consolidated-company-reporting): This article explains how you can consolidate the general ledger entries of two or more separate companies (subsidiaries) into a consolidated company.
- [Set up company consolidation](https://learn.microsoft.com/dynamics365/business-central/finance-consolidated-company-reporting-setup): Learn how you can configure how data from different companies in Business Central is reported into a consolidation company.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [What's New: Financial Management - Consolidation Improvements (2024 release wave 1)](../../../../../videos/gHcgL469x_E.md) (video): "consolidation; currency exchange rates; consolidation status; balance sheet revaluation; multi-subsidiary"
- [What's New: Cross-Environment Consolidations (2023 release wave 2)](../../../../../videos/y_8xralhVMM.md) (video): "Cross-environment consolidation; Consolidation wizard; API endpoint configuration"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 240 "Business Unit List"](../../../../../objects/page/240.md) · captioned "Business Units" · on [Table 220 "Business Unit"](../../../../../objects/table/220.md)
- [Page 1827 "Business Units Setup Subform"](../../../../../objects/page/1827.md) · on [Table 1827 "Business Unit Setup"](../../../../../objects/table/1827.md)
- [Report 16 "G/L Consolidation Eliminations"](../../../../../objects/report/16.md)
- [Report 17 "Consolidated Trial Balance"](../../../../../objects/report/17.md)
- [Report 18 "Consolidated Trial Balance (4)"](../../../../../objects/report/18.md)
- [Report 4410 "EXR Consolidated Trial Balance"](../../../../../objects/report/4410.md) · captioned "Consolidated Trial Balance (Excel)"

Learn also names 1 object with no object page: page/1826.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
