---
id: topic/business-central/development-and-administration/synchronize-master-data-across-companies
type: topic
title: Synchronize master data across companies
summary: "Master data synchronization across companies in Business Central: setting up Master Data Management to pull customers, vendors, and items from a source company into subsidiaries, and managing and troubleshooting the synchronization afterward. It answers setup, coupling, filtering, and job queue questions."
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-18T00:56:54.350Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 868476d9b00bab8801a5d675bfc93575df3282028180338ec2fda673300c4db5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-sync-master-data
    title: Manage master data synchronization
    date: "2025-02-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-set-up-data-sync
    title: Set up companies to synchronize master data
    date: "2025-06-10"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-sync-master-data
    - https://learn.microsoft.com/dynamics365/business-central/admin-set-up-data-sync
  objects:
    - object/page/672
    - object/page/5338
    - object/page/7230
    - object/page/7233
    - object/page/7234
    - object/page/7236
  features: []
  topics:
    - topic/business-central/development-and-administration
  localizations: []
  videos:
    - video/BlkW7VC52c0
    - video/mXvKs6X1DNk
  posts: []
  guidelines: []
learn_toc_path:
  - Development and administration
  - Synchronize master data across companies
toc_file: business-central/TOC.md
parent: topic/business-central/development-and-administration
children: []
coverage:
  learn: 2
  code: 6
  video: 2
  blog: 0
  guideline: 0
bc_forms:
  - 672
  - 5338
  - 7230
  - 7233
  - 7234
  - 7236
member_hash: 16a0947bf5999ddbeb47779f120e581a860f6b73bd9acef72ce13f5b1a321e4c
narrative: generated
---

# Synchronize master data across companies

> Master data synchronization across companies in Business Central: setting up Master Data Management to pull customers, vendors, and items from a source company into subsidiaries, and managing and troubleshooting the synchronization afterward. It answers setup, coupling, filtering, and job queue questions.

Path: [Development and administration](../development-and-administration.md) > Synchronize master data across companies · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers keeping nontransactional master data, such as customers, vendors, and items, consistent between a source company and its subsidiary companies. Synchronization is uni-directional and uses a pull model: subsidiaries pull data from the source company.

Two pages make up the section. "Set up companies to synchronize master data" explains Master Data Management Setup, including match-based coupling, table filtering, and automatic job queue scheduling. "Manage master data synchronization" covers day-to-day operation with job queue entries, and the tools for schema changes, coupling, and troubleshooting.

Start with the setup page to configure the source and subsidiary companies, then use the management page to monitor synchronization and fix problems.

## Key points

- Synchronization is uni-directional, from a source company to subsidiary companies, using a pull model.
- It applies to nontransactional master data such as customers, vendors, and items.
- Match-based coupling works with a priority order, and new records can be created when no match is found.
- Tables can be filtered by criteria to limit which records synchronize.
- Job queue entries are scheduled automatically and run the synchronization.
- Synchronization setup can be imported and exported.
- Management tools cover overwriting local changes, updating field mapping after schema changes, and running a full synchronization.
- Record coupling and synchronization monitoring help troubleshoot issues.

## Learn pages

- [Manage master data synchronization](https://learn.microsoft.com/dynamics365/business-central/admin-sync-master-data): Learn how to manage master data synchronization.
- [Set up companies to synchronize master data](https://learn.microsoft.com/dynamics365/business-central/admin-set-up-data-sync): Learn how to set up one or more companies to synchronize master data.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)](../../../videos/BlkW7VC52c0.md) (video): "copying data between companies; master data management; company synchronization"
- [What's new: Cross-environment Master Data Management (2026 release wave 2)](../../../videos/mXvKs6X1DNk.md) (video): "Cross-environment Master Data Management; cross-environment synchronization; multi-tenant"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 672 "Job Queue Entries"](../../../objects/page/672.md) · on [Table 472 "Job Queue Entry"](../../../objects/table/472.md)
- [Page 5338 "Integration Synch. Job List"](../../../objects/page/5338.md) · captioned "Integration Synchronization Jobs" · on [Table 5338 "Integration Synch. Job"](../../../objects/table/5338.md)
- [Page 7230 "Master Data Management Setup"](../../../objects/page/7230.md) · on [Table 7230 "Master Data Management Setup"](../../../objects/table/7230.md)
- [Page 7233 "Master Data Synch. Tables"](../../../objects/page/7233.md) · captioned "Synchronization Tables" · on [Table 5335 "Integration Table Mapping"](../../../objects/table/5335.md)
- [Page 7234 "Master Data Full Synch. Review"](../../../objects/page/7234.md) · captioned "Master Data Initial Synchronization" · on [Table 7233 "Master Data Full Synch. R. Ln."](../../../objects/table/7233.md)
- [Page 7236 "Master Data Synch. Fields"](../../../objects/page/7236.md) · captioned "Synchronization Fields" · on [Table 5336 "Integration Field Mapping"](../../../objects/table/5336.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
