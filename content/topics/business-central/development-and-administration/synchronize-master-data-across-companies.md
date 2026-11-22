---
id: topic/business-central/development-and-administration/synchronize-master-data-across-companies
type: topic
title: Synchronize master data across companies
summary: "Master data synchronization across Business Central companies: how to set up a subsidiary to pull customer, vendor, item, and employee data from a source company, and how to monitor and troubleshoot the sync afterward. Use it for setup and ongoing management questions."
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-22T01:00:28.230Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: d7cc4943da536cfdaa4f9e22cf0ac0c7fdf95f45254633bf6178764b9d10d424
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-sync-master-data
    title: Manage master data synchronization
    date: "2026-09-26"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-set-up-data-sync
    title: Set up companies to synchronize master data
    date: "2026-09-28"
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
  posts:
    - post/yzhums-com/77263
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
  blog: 1
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

> Master data synchronization across Business Central companies: how to set up a subsidiary to pull customer, vendor, item, and employee data from a source company, and how to monitor and troubleshoot the sync afterward. Use it for setup and ongoing management questions.

Path: [Development and administration](../development-and-administration.md) > Synchronize master data across companies · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers keeping master data consistent across companies so that users do not enter the same customer, vendor, item, or employee records in several places. Subsidiary companies pull data from a source company. The synchronization is uni-directional.

The two pages follow the life of the feature. "Set up companies to synchronize master data" explains how to configure the connection. It covers synchronization within one environment or across environments, match-based coupling of existing records, table filtering, and job queue integration. "Manage master data synchronization" covers the work after setup: monitoring, change detection, and fixing problems.

Start with the setup page if synchronization is not yet configured. Go to the management page if it is already running and you need to resync, overwrite local changes, update schemas, or fix couplings.

## Key points

- Subsidiaries pull customer, vendor, item, and employee data from a source company.
- Synchronization is uni-directional, from the source company to the subsidiary.
- It works within the same environment and across environments.
- Match-based coupling links existing records in the subsidiary to source records.
- Table filtering limits which data is synchronized.
- Job queue integration runs the synchronization.
- Management tasks include change detection, overwriting local changes, and full synchronization.
- Schema updates, coupling management, and synchronization monitoring are also covered.

## Learn pages

- [Manage master data synchronization](https://learn.microsoft.com/dynamics365/business-central/admin-sync-master-data): Learn how to manage master data synchronization.
- [Set up companies to synchronize master data](https://learn.microsoft.com/dynamics365/business-central/admin-set-up-data-sync): Learn how to set up one or more companies to synchronize master data.
  - In the observatory: [Codeunit 7245 "MDM Cross-Env Change Detector"](../../../objects/codeunit/7245.md)

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central 2026 release wave 2 (BC29.1): Cross-environment Master Data Management](../../../posts/yzhums-com/77263.md) (community post): "lets a company sync master data such as customers, vendors and products from a company in another Business Central environment"
- [Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)](../../../videos/BlkW7VC52c0.md) (video): "copying data between companies; master data management; configuration packages"
- [What's new: Cross-environment Master Data Management (2026 release wave 2)](../../../videos/mXvKs6X1DNk.md) (video): "Cross-environment Master Data Synchronization; Entra ID-based Authorization; Read-only HQ Data Source"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 672 "Job Queue Entries"](../../../objects/page/672.md) · on [Table 472 "Job Queue Entry"](../../../objects/table/472.md)
- [Page 5338 "Integration Synch. Job List"](../../../objects/page/5338.md) · captioned "Integration Synchronization Jobs" · on [Table 5338 "Integration Synch. Job"](../../../objects/table/5338.md)
- [Page 7230 "Master Data Management Setup"](../../../objects/page/7230.md) · on [Table 7230 "Master Data Management Setup"](../../../objects/table/7230.md)
- [Page 7233 "Master Data Synch. Tables"](../../../objects/page/7233.md) · captioned "Synchronization Tables" · on [Table 5335 "Integration Table Mapping"](../../../objects/table/5335.md)
- [Page 7234 "Master Data Full Synch. Review"](../../../objects/page/7234.md) · captioned "Master Data Initial Synchronization" · on [Table 7233 "Master Data Full Synch. R. Ln."](../../../objects/table/7233.md)
- [Page 7236 "Master Data Synch. Fields"](../../../objects/page/7236.md) · captioned "Synchronization Fields" · on [Table 5336 "Integration Field Mapping"](../../../objects/table/5336.md)

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
