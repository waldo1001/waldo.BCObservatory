---
id: topic/business-central/business-functionality/set-up-business-central/import-data
type: topic
title: Import data
summary: "Import data covers two ways to bring business data from other systems into Business Central: data migration extensions for QuickBooks Desktop and QuickBooks Online, and Excel files or configuration packages. It answers questions about choosing a migration route and what data can be moved."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:09.914Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: cd9dc73445af77515b55b29fb477818ad3fbf607f32cabf1b97bd66e5b38fafe
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-quickbooks-to-business-edition
    title: Transfer data from a QuickBooks app
    date: "2025-10-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages
    title: Use Excel to import data
    date: "2026-06-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/across-quickbooks-to-business-edition
    - https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages
  objects:
    - object/page/1808
  features: []
  topics:
    - topic/business-central/business-functionality/set-up-business-central
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business functionality
  - Set up Business Central
  - Import data
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/set-up-business-central
children: []
coverage:
  learn: 2
  code: 1
  video: 0
  blog: 0
  guideline: 0
bc_forms:
  - 1808
member_hash: 7294d0dd2d939df7b21ee8780b445d84c27b6a687136ede138096d03ea418650
narrative: generated
---

# Import data

> Import data covers two ways to bring business data from other systems into Business Central: data migration extensions for QuickBooks Desktop and QuickBooks Online, and Excel files or configuration packages. It answers questions about choosing a migration route and what data can be moved.

Path: [Business functionality](../../business-functionality.md) > [Set up Business Central](../set-up-business-central.md) > Import data · tier official · system none · narrative reviewed by Opus

## Overview

This section describes how to move existing business data into Business Central when setting up. There are two pages, and each covers a different source: a QuickBooks app, or any other finance system via Excel.

For QuickBooks users, built-in data migration extensions handle both QuickBooks Desktop and QuickBooks Online, and are started from assisted setup. They migrate records such as customers, vendors and inventory.

For other sources, the Excel page explains how to import data using Excel files or configuration packages. The default configuration package supports 27 tables covering master data and transactions. Start with the QuickBooks page if you come from QuickBooks, otherwise start with the Excel page.

## Key points

- QuickBooks Desktop and QuickBooks Online are both supported through built-in data migration extensions.
- The QuickBooks migration is started from assisted setup.
- QuickBooks migration covers customers, vendors and inventory.
- Excel import suits data from other finance systems.
- Data can be imported using Excel files or configuration packages.
- The default configuration package supports 27 tables for master data and transactions.
- The Excel page also touches on data transformation and master data migration.

## Learn pages

- [Transfer data from a QuickBooks app](https://learn.microsoft.com/dynamics365/business-central/across-quickbooks-to-business-edition): Migrate your customers, vendors, inventory items, and general ledger accounts from QuickBooks Desktop or Online to Dynamics 365 Business Central.
- [Use Excel to import data](https://learn.microsoft.com/dynamics365/business-central/across-import-data-configuration-packages): Use the default configuration package to add customer data in Excel and import the data back into Business Central.

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 1808 "Data Migration Wizard"](../../../../objects/page/1808.md) · captioned "Data Migration" · on [Table 1800 "Data Migrator Registration"](../../../../objects/table/1800.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
