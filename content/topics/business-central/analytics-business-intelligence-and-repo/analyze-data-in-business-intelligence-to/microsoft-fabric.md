---
id: topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric
type: topic
title: Microsoft Fabric
summary: "Microsoft Fabric data mirroring from Business Central online: how to set it up, choose companies and tables, manage synchronization, and monitor and troubleshoot runs. It answers questions about replicating Business Central data to OneLake for analytics."
tier: official
language: en
system: integration
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
    - post/waldo-be/318707
  guidelines: []
  changes:
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
  blog: 4
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

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Analyze data in business intelligence tools](../analyze-data-in-business-intelligence-to.md) > Microsoft Fabric · tier official · system integration · narrative **unreviewed** (model text not yet checked)

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
- [FAQ About Mirroring Business Central Data to Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/fabric-faq): Get answers about availability, setup, supported data, synchronization, capacity, and licensing for mirroring Business Central data to Fabric.
- [Manage Business Central Synchronization with Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/admin-manage-fabric-export): Select Business Central companies and tables, use configuration packages, and control ongoing synchronization with Microsoft Fabric.
- [Monitor and Troubleshoot Microsoft Fabric Synchronization](https://learn.microsoft.com/dynamics365/business-central/admin-monitor-fabric-export): Monitor Business Central synchronization runs, review table-level changes and watermarks, and resolve common Microsoft Fabric connection problems.
- [Set up Business Central data mirroring to Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/admin-set-up-fabric-mirroring): Prepare Microsoft Fabric, connect Business Central to an open mirrored database, and select the companies and tables to synchronize.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12242 29.x: Removing the restriction of deploying Power BI reports only to evaluation companies](../../../../changes/bcapps/12242.md) (code change): "Power BI report deployment is no longer limited to evaluation companies"
- [Native connection with Fabric in Business Central](../../../../posts/bertverbeek-nl/1318.md) (community post): "Business Central introduces native integration with Microsoft Fabric for data synchronization"
- [Dynamics 365 Business Central: data mirroring to Microsoft Fabric announced.](../../../../posts/demiliani-com/15981.md) (community post): "data mirroring for Dynamics 365 Business Central to Microsoft Fabric"
- [Business Central Data Mirroring to Microsoft Fabric Is Coming](../../../../posts/thinkaboutit-be/8229.md) (community post): "Business Central 2026 release wave 2 introduces data mirroring to Microsoft Fabric"
- [Business Central data in Fabric: the way it should be](../../../../posts/waldo-be/318707.md) (community post): "Business Central now supports native data mirroring to Microsoft Fabric"
- [Introducing: Business Central Integration with Microsoft Fabric (2026 release wave 2)](../../../../videos/kOCiyVql0go.md) (video): "Business Central Fabric mirroring; Mirror database in OneLake; Multi-company Power BI apps"

## Business Central pages and reports

The pages, reports and queries this hub's Learn pages name (ms.search.form, API reference), joined to the code by exact object id (data/index/docs-objects.json); a page shows the table it runs on.

- [Page 48508 "Fabric Platform Companies"](../../../../objects/page/48508.md) · captioned "Fabric Company Configuration"
- [Page 48509 "Fabric Platform Export Details"](../../../../objects/page/48509.md) · captioned "Fabric Synchronization Details"
- [Page 48510 "Fabric Platform Export Summary"](../../../../objects/page/48510.md) · captioned "Fabric Synchronization Overview"
- [Page 48511 "Fabric Platform Setup"](../../../../objects/page/48511.md) · captioned "Microsoft Fabric Mirroring Setup"
- [Page 48512 "Fabric Platform Tables"](../../../../objects/page/48512.md) · captioned "Fabric Table Configuration"
- [Page 48513 "Fabric Config Package Card"](../../../../objects/page/48513.md) · captioned "Fabric Config Package" · on [Table 48501 "Fabric Config Package"](../../../../objects/table/48501.md)
- [Page 48515 "Fabric Config Packages"](../../../../objects/page/48515.md) · captioned "Fabric Configuration Packages" · on [Table 48501 "Fabric Config Package"](../../../../objects/table/48501.md)
- [Page 48519 "Fabric Platform Setup Wizard"](../../../../objects/page/48519.md) · captioned "Set Up Microsoft Fabric Mirroring"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
