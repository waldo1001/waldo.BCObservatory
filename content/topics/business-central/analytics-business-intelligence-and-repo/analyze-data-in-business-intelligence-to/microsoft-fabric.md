---
id: topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric
type: topic
title: Microsoft Fabric
summary: "Microsoft Fabric data mirroring from Business Central online: how to set it up, choose companies and tables, manage synchronization, and monitor and troubleshoot runs. It answers questions about replicating Business Central data to OneLake for analytics."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:55:57.577Z"
  flags: []
generated:
  at: "2026-10-30T01:11:59.976Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8e965e040aa9ea08f0e67ec95b02a19a81eb32f39038adb9768282051714f174
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-fabric
    title: Data Mirroring to Microsoft Fabric from Business Central
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/fabric-faq
    title: FAQ About Mirroring Business Central Data to Microsoft Fabric
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-manage-fabric-export
    title: Manage Business Central Synchronization with Microsoft Fabric
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-monitor-fabric-export
    title: Monitor and Troubleshoot Microsoft Fabric Synchronization
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-set-up-fabric-mirroring
    title: Set up Business Central data mirroring to Microsoft Fabric
    date: "2026-10-08"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/admin-fabric
    - https://learn.microsoft.com/dynamics365/business-central/fabric-faq
    - https://learn.microsoft.com/dynamics365/business-central/admin-manage-fabric-export
    - https://learn.microsoft.com/dynamics365/business-central/admin-monitor-fabric-export
    - https://learn.microsoft.com/dynamics365/business-central/admin-set-up-fabric-mirroring
  objects:
    - object/page/48508
    - object/page/48509
    - object/page/48510
    - object/page/48511
    - object/page/48512
    - object/page/48513
    - object/page/48515
    - object/page/48519
  features: []
  topics:
    - topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to
  localizations: []
  videos:
    - video/kOCiyVql0go
  posts:
    - post/bertverbeek-nl/1318
    - post/demiliani-com/15981
    - post/thinkaboutit-be/8229
    - post/thinkaboutit-be/8359
    - post/waldo-be/318707
  guidelines: []
  changes:
    - change/bcapps/12189
    - change/bcapps/12242
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Analyze data in business intelligence tools
  - Microsoft Fabric
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to
children: []
coverage:
  learn: 5
  code: 8
  video: 1
  blog: 5
  guideline: 0
bc_forms:
  - 48508
  - 48509
  - 48510
  - 48511
  - 48512
  - 48513
  - 48515
  - 48519
member_hash: c7df016bee018b38d0e07c162751f00222aa863ae60ca69f725246f74192208f
narrative: generated
---

# Microsoft Fabric

> Microsoft Fabric data mirroring from Business Central online: how to set it up, choose companies and tables, manage synchronization, and monitor and troubleshoot runs. It answers questions about replicating Business Central data to OneLake for analytics.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Analyze data in business intelligence tools](../analyze-data-in-business-intelligence-to.md) > Microsoft Fabric · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

Data mirroring connects Business Central online to a Microsoft Fabric open-mirrored database. Selected companies and tables are replicated to OneLake, so analytics and data engineering tools can use the data without repeatedly reading from APIs. The feature is described as a 2026 production-ready preview, and the pages are tied to 2026 release wave 2.

The pages follow the life cycle of the feature. Start with the overview page to understand what mirroring does, then use the setup page to run the Connect to Microsoft Fabric assisted setup. After that, the management page covers company and table selection, configuration packages, scheduling and failure handling. The monitoring page helps when runs fail or results look wrong. The FAQ covers availability, requirements, synchronization behavior and limits.

## Key points

- Mirroring replicates selected companies and tables from Business Central online to OneLake via a Fabric open-mirrored database.
- Up to 1000 tables can be selected, and multiple companies are supported.
- Synchronization starts with an initial snapshot and then continues with incremental changes.
- Setup uses the Connect to Microsoft Fabric assisted setup and the Microsoft Fabric Mirroring extension, with service principal access (version 29.0, 2026 release wave 2).
- Configuration packages, scheduling, failure handling and namespace configuration are managed after the initial setup.
- Monitor runs on the Fabric Synchronization Overview and Details pages, through APIs, or in Fabric logging tables, with company and table-level results and error tracking.
- Troubleshooting topics include change-tracking watermarks, incremental synchronization and privacy approval.
- Replicated data can be used for analytics with Power BI, Data Factory and Fabric IQ.

## Learn pages

- [Data Mirroring to Microsoft Fabric from Business Central](https://learn.microsoft.com/dynamics365/business-central/admin-fabric): Learn how Business Central mirrors selected company data to Microsoft Fabric for analytics, engineering, and business intelligence scenarios.
  - Status: Production-ready preview planned to become available in October 2026. Delivery timing and functionality might change. Subject to supplemental terms of use.
  - Data mirroring connects Business Central online to an open mirrored database in Fabric. You select companies and tables to synchronize into OneLake in Delta Parquet format.
  - Limit: Up to 1,000 selected tables per tenant supported for synchronization.
  - Supports multiple Business Central companies, initial snapshot and incremental synchronization, and a Microsoft configuration package with standard tables.
  - Administrator tasks include creating open mirrored database in Fabric workspace, connecting Business Central, granting service principal access, selecting companies and tables, and monitoring runs.
  - Microsoft plans to provide versions of standard Business Central Power BI apps using Fabric data, including single-company and multicompany versions.
- [FAQ About Mirroring Business Central Data to Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/fabric-faq): Get answers about availability, setup, supported data, synchronization, capacity, and licensing for mirroring Business Central data to Fabric.
  - Status: Currently in private preview. Public preview expected within the next few weeks. Availability, requirements, and limits might change.
  - Prerequisite: Business Central 2026 release wave 2 required. Final minimum update not confirmed. Expected minimum version is 29.0.
  - Prerequisite: Microsoft Fabric capacity required. Currently need F SKU commonly F2 or higher, or existing P SKU capacity.
  - Business Central does not add licensing or consumption charge for mirroring. Fabric capacity charges apply.
  - Feature available globally. Geographic and tenant restrictions not identified.
  - Step: Create open mirrored database in Fabric first, then configure Business Central to replicate to that database.
  - Configuration takes place in both Fabric and Business Central. Create open mirrored database in Fabric, then configure Business Central separately.
  - Mirroring configured separately for each Business Central environment. On Microsoft Fabric Mirroring Setup page, choose companies and tables.
- [Manage Business Central Synchronization with Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/admin-manage-fabric-export): Select Business Central companies and tables, use configuration packages, and control ongoing synchronization with Microsoft Fabric.
  - Status: Production-ready preview planned to become available in October 2026. Delivery timing and functionality might change. Subject to supplemental terms of use.
  - Permissions: MS Fabric Mirroring - Admin permission set: set up connection, select companies and tables, manage packages, control synchronization, and view monitoring.
  - Permissions: MS Fabric Mirroring - Activate permission set: activate, deactivate, and reapply configuration packages.
  - Permissions: MS Fabric Mirroring - Read permission set: view synchronization overview and detail information.
  - Step: Open Microsoft Fabric Mirroring Setup page, select Configuration, then Companies, then Add company, and select a company to synchronize.
  - Step: Open Microsoft Fabric Mirroring Setup page, select Configuration, then Tables, select Add table, and select one or more Business Central tables. Up to 1,000 tables allowed.
  - Configuration packages provide curated table sets. MS-STD package contains 256 standard Business Central tables for analytics. Activate, deactivate, or reapply packages from Import/Export…
  - Limit: Activating or reapplying a package cannot increase total selection beyond 1,000-table limit.
- [Monitor and Troubleshoot Microsoft Fabric Synchronization](https://learn.microsoft.com/dynamics365/business-central/admin-monitor-fabric-export): Monitor Business Central synchronization runs, review table-level changes and watermarks, and resolve common Microsoft Fabric connection problems.
  - Status: Production-ready preview planned to become available in October 2026. Delivery timing and functionality might change. Subject to supplemental terms of use.
  - Step: Open Microsoft Fabric Mirroring Setup page, select Monitoring, then Fabric Synchronization Overview to review run type, state, times, and error messages.
  - Step: From Fabric Synchronization Overview, select a run and then select Details to review table-level results for that synchronization run.
  - Fabric Synchronization Details page shows company, table name, Fabric entity name, run type, record counts, watermarks, and error state for each company and table.
  - Monitoring data is available from Business Central pages, APIs, or logging tables in Fabric with default logging namespace BusinessCentral_log.
  - Microsoft Fabric Mirroring app provides APIs for synchronization overview and details. Same operational data synchronizes to logging namespace in Fabric.
- [Set up Business Central data mirroring to Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/admin-set-up-fabric-mirroring): Prepare Microsoft Fabric, connect Business Central to an open mirrored database, and select the companies and tables to synchronize.
  - Status: Production-ready preview planned to become available in October 2026. Delivery timing and functionality might change. Subject to supplemental terms of use.
  - Prerequisite: Business Central 2026 release wave 2, version 29.0 or later required.
  - Prerequisite: Microsoft Fabric Mirroring extension must be installed from Microsoft Marketplace.
  - Prerequisite: Data encryption must be enabled. Business Central stores the app client secret in encrypted isolated storage.
  - Prerequisite: User must have MS Fabric Mirroring - Admin permission set or equivalent permissions to set up mirroring.
  - Prerequisite: Dedicated app registration in Microsoft Entra ID required. Must provide application client ID, client secret, and service-principal object ID during setup.
  - Prerequisite: Access to active Microsoft Fabric capacity required. User must be Member or Admin of Fabric workspace to add mirroring service principal.
  - Prerequisite: Fabric workspace must be in same Microsoft Entra tenant as Business Central environment.
  - In the observatory: [Introducing: Business Central Integration with Microsoft Fabric (2026 release wave 2)](../../../../videos/kOCiyVql0go.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12189 Removing the restriction of deploying Power BI reports only to evaluation companies](../../../../changes/bcapps/12189.md) (code change): "Power BI report deployment now works with regular companies"
- [#12242 29.x: Removing the restriction of deploying Power BI reports only to evaluation companies](../../../../changes/bcapps/12242.md) (code change): "Power BI report deployment is no longer limited to evaluation companies"
- [Native connection with Fabric in Business Central](../../../../posts/bertverbeek-nl/1318.md) (community post): "Business Central introduces native integration with Microsoft Fabric for data synchronization"
- [Dynamics 365 Business Central: data mirroring to Microsoft Fabric announced.](../../../../posts/demiliani-com/15981.md) (community post): "data mirroring for Dynamics 365 Business Central to Microsoft Fabric"
- [Business Central Data Mirroring to Microsoft Fabric Is Coming](../../../../posts/thinkaboutit-be/8229.md) (community post): "Business Central 2026 release wave 2 introduces data mirroring to Microsoft Fabric"
- [Directions EMEA 2026, Day 2: Cowork, Agentic Development and Fabric](../../../../posts/thinkaboutit-be/8359.md) (community post): "Native Business Central-Fabric mirroring replicates ERP data"
- [Business Central data in Fabric: the way it should be](../../../../posts/waldo-be/318707.md) (community post): "Business Central now supports native data mirroring to Microsoft Fabric"
- [Introducing: Business Central Integration with Microsoft Fabric (2026 release wave 2)](../../../../videos/kOCiyVql0go.md) (video): "Business Central Fabric mirroring; Mirror database in OneLake; Multi-company Power BI apps"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 48508 "Fabric Platform Companies"](../../../../objects/page/48508.md) · captioned "Fabric Company Configuration"
- [Page 48509 "Fabric Platform Export Details"](../../../../objects/page/48509.md) · captioned "Fabric Synchronization Details"
- [Page 48510 "Fabric Platform Export Summary"](../../../../objects/page/48510.md) · captioned "Fabric Synchronization Overview"
- [Page 48511 "Fabric Platform Setup"](../../../../objects/page/48511.md) · captioned "Microsoft Fabric Mirroring Setup (Preview)"
- [Page 48512 "Fabric Platform Tables"](../../../../objects/page/48512.md) · captioned "Fabric Table Configuration"
- [Page 48513 "Fabric Config Package Card"](../../../../objects/page/48513.md) · captioned "Fabric Config Package" · on [Table 48501 "Fabric Config Package"](../../../../objects/table/48501.md)
- [Page 48515 "Fabric Config Packages"](../../../../objects/page/48515.md) · captioned "Fabric Configuration Packages" · on [Table 48501 "Fabric Config Package"](../../../../objects/table/48501.md)
- [Page 48519 "Fabric Platform Setup Wizard"](../../../../objects/page/48519.md) · captioned "Set Up Microsoft Fabric Mirroring (Preview)"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
