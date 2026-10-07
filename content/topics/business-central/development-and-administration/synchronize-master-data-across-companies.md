---
id: topic/business-central/development-and-administration/synchronize-master-data-across-companies
type: topic
title: Synchronize master data across companies
summary: "Master data synchronization across companies in Business Central: how to set up a source and subsidiary companies to pull customer, vendor, item, and employee data, and how to manage and troubleshoot the synchronization afterward. It answers setup, coupling, scheduling, and maintenance questions."
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:32.124Z"
  flags: []
generated:
  at: "2026-10-07T15:52:42.721Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 37c5a4d7c4ff6a03334a1fa89e3457cc7e6f130d779dcf0313e23a19f938bf9a
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
  video: 1
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

> Master data synchronization across companies in Business Central: how to set up a source and subsidiary companies to pull customer, vendor, item, and employee data, and how to manage and troubleshoot the synchronization afterward. It answers setup, coupling, scheduling, and maintenance questions.

Path: [Development and administration](../development-and-administration.md) > Synchronize master data across companies · tier official · system administration · narrative reviewed by Opus

## Overview

This section describes how to keep master data consistent between companies. A source company provides customer, vendor, item, and employee data, and subsidiary companies pull it in one direction. Updates run automatically through job queue entries.

The two pages follow the lifecycle. "Set up companies to synchronize master data" covers the initial configuration: export and import setup, table filtering, match-based coupling of existing records, initial synchronization, and job queue scheduling. "Manage master data synchronization" covers ongoing work: monitoring, handling schema changes, coupling records, overwriting local changes, and troubleshooting.

Start with the setup page if synchronization is not yet configured. Use the management page once it is running or when something goes wrong.

## Key points

- Synchronization is uni-directional: subsidiary companies pull data from a source company.
- Supported master data includes customers, vendors, items, and employees.
- Updates run automatically through job queue entries, which can be scheduled.
- Setup involves export and import configuration, table filtering, and an initial synchronization.
- Match-based coupling links existing records between companies.
- Management tasks include coupling records, overwriting local changes, and running a full synchronization.
- Field mapping can be updated to handle schema changes.
- Synchronization can be monitored to troubleshoot issues.

## Learn pages

- [Manage master data synchronization](https://learn.microsoft.com/dynamics365/business-central/admin-sync-master-data): Learn how to manage master data synchronization.
- [Set up companies to synchronize master data](https://learn.microsoft.com/dynamics365/business-central/admin-set-up-data-sync): Learn how to set up one or more companies to synchronize master data.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)](../../../videos/BlkW7VC52c0.md) (video): "Master Data Management Setup; Configuration Packages; Custom data copy solution"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 672 "Job Queue Entries"](../../../objects/page/672.md) · on [Table 472 "Job Queue Entry"](../../../objects/table/472.md)
- [Page 5338 "Integration Synch. Job List"](../../../objects/page/5338.md) · captioned "Integration Synchronization Jobs" · on [Table 5338 "Integration Synch. Job"](../../../objects/table/5338.md)
- [Page 7230 "Master Data Management Setup"](../../../objects/page/7230.md) · on [Table 7230 "Master Data Management Setup"](../../../objects/table/7230.md)
- [Page 7233 "Master Data Synch. Tables"](../../../objects/page/7233.md) · captioned "Synchronization Tables" · on [Table 5335 "Integration Table Mapping"](../../../objects/table/5335.md)
- [Page 7234 "Master Data Full Synch. Review"](../../../objects/page/7234.md) · captioned "Master Data Initial Synchronization" · on [Table 7233 "Master Data Full Synch. R. Ln."](../../../objects/table/7233.md)
- [Page 7236 "Master Data Synch. Fields"](../../../objects/page/7236.md) · captioned "Synchronization Fields" · on [Table 5336 "Integration Field Mapping"](../../../objects/table/5336.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
