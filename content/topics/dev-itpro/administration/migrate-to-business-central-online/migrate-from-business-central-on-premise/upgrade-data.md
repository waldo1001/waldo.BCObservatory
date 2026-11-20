---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise/upgrade-data
type: topic
title: Upgrade data
summary: Data upgrade during cloud migration from Business Central on-premises to Business Central online. It answers how to run the data upgrade from the Cloud Migration Management page and how to skip API data upgrade per company to avoid long-running upgrades.
tier: official
language: en
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-20T01:01:32.224Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 9f7d54f56d3021c59a2bb20ebc0a36dde076df19e1ef3e27ca8c8c6d5662dede
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade
    title: Run a Cloud Migration Data Upgrade
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-skip-api-data-upgrade
    title: Skip API Data Upgrade During Cloud Migration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-skip-api-data-upgrade
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcapps/12907
    - change/bcapps/12939
learn_toc_path:
  - Administration
  - Migrate to Business Central online
  - Migrate from Business Central on-premises
  - Upgrade data
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-business-central-on-premise
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 6253fe23963480b12c7b988cbdc780078c9ba6332c7a4a845e4e83995e5ee95e
narrative: generated
---

# Upgrade data

> Data upgrade during cloud migration from Business Central on-premises to Business Central online. It answers how to run the data upgrade from the Cloud Migration Management page and how to skip API data upgrade per company to avoid long-running upgrades.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Business Central on-premises](../migrate-from-business-central-on-premise.md) > Upgrade data · tier official · system platform · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the data upgrade step of a cloud migration when the on-premises source is an earlier version than the online target. The data upgrade runs the logic needed to bring migrated data up to the current version, and it can be scheduled from the Cloud Migration Management page.

Two pages make up the section. "Run a Cloud Migration Data Upgrade" explains how to run the upgrade, including company-level and environment-wide upgrades and the role of point-in-time restore. "Skip API Data Upgrade During Cloud Migration" explains how to avoid long-running API upgrade processes by skipping them first and completing them after going live on the tenant.

Start with the run page to understand the standard flow. Read the skip page if your data volume makes the API upgrade slow and you want to defer it.

## Key points

- Data upgrade is needed when migrating from an earlier version to Business Central online.
- The upgrade can be scheduled from the Cloud Migration Management page.
- Upgrades can be run at company level or environment-wide.
- The run page mentions point-in-time restore and names Business Central 14 as a version.
- API data upgrade can be skipped to avoid long-running upgrade processes.
- After skipping, the API upgrade is completed once the tenant is live.
- Skipping can be set per company, using Disable API Data Upgrades and Manage API Upgrade in the online environment.
- On-premises, the API upgrade skip is done with SQL queries.

## Learn pages

- [Run a Cloud Migration Data Upgrade](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-data-upgrade): Learn how to prepare for and run a data upgrade during Business Central cloud migration, monitor progress, and handle upgrade errors.
  - Prerequisite: Data replication must be run before starting data upgrade.
  - Prerequisite: Have the SUPER permission set in the online environment.
  - No data upgrade is needed when source and destination use the same major version.
  - During environment-wide data upgrade, all client connections are terminated and no other processes run.
  - Step: Open Cloud Migration Management page and select Run data upgrade to schedule the upgrade.
  - Track upgrade status in Business Central admin center from Environment Operations page or admin center API.
  - If data upgrade fails, automatic point-in-time restore reverts tenant to state before upgrade.
  - Business Central 14 migration schedules company upgrades individually in background, not environment-wide.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Skip API Data Upgrade During Cloud Migration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-skip-api-data-upgrade): Learn how to skip API data upgrade for selected companies during Business Central cloud migration and complete the upgrade after going live.
  - Prerequisite: Complete cloud migration setup and data replication before skipping API data upgrade.
  - Skipping API data upgrade done on per-company basis; affected API entities unavailable until upgrade completed.
  - Step: Open Cloud Migration Management, select Manage API Upgrade, select company, open API Data Upgrade List in new tab, select Disable API Data Upgrades.
  - Step: From on-premises upgrade, run SQL query inserting disable tag into Upgrade Tags table for single or all companies.
  - Step: After going live, run API data upgrade by opening API Data Upgrade List, resetting entities with status, selecting entries, scheduling upgrades.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md), [Page 9994 "API Data Upgrade List"](../../../../../objects/page/9994.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12907 Fix direct transfer upgrade without Inventory Setup](../../../../../changes/bcapps/12907.md) (code change): "Direct transfer order upgrade now handles missing Inventory Setup"
- [#12939 Bug 654493: [29.x] ICM 51000002285173: Fix direct transfer upgrade](../../../../../changes/bcapps/12939.md) (code change): "The Base Application upgrade of direct transfer orders no longer reads Inventory Setup"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
