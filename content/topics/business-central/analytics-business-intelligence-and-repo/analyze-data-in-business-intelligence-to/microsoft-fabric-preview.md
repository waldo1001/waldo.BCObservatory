---
id: topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric-preview
type: topic
title: Microsoft Fabric (preview)
summary: Microsoft Fabric (preview) covers mirroring Business Central online data into Microsoft Fabric OneLake. It answers questions about setup, service principal authentication, choosing companies and tables, managing synchronization, monitoring, troubleshooting, licensing and availability.
tier: official
language: en
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-28T01:08:05.989Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: c48a5a31177a7aedb779bc8c09620ddc5fd395e783f118a2924bd6761c839652
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-fabric
    title: Business Central Data Mirroring to Microsoft Fabric
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/fabric-faq
    title: Business Central Mirroring to Microsoft Fabric FAQ
    date: "2026-11-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-manage-fabric-export
    title: Manage Business Central Synchronization with Microsoft Fabric
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-monitor-fabric-export
    title: Monitor and Troubleshoot Microsoft Fabric Synchronization
    date: "2026-10-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/admin-set-up-fabric-mirroring
    title: Set Up Business Central Data Mirroring to Microsoft Fabric
    date: "2026-10-29"
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
    - video/7lxkboRGw28
    - video/kOCiyVql0go
  posts:
    - post/demiliani-com/15981
    - post/waldo-be/318707
    - post/yzhums-com/77184
  guidelines: []
  changes:
    - change/bcapps/10348
    - change/bcapps/12189
    - change/bcapps/12242
learn_toc_path:
  - Analytics, business intelligence, and reporting
  - Analyze data in business intelligence tools
  - Microsoft Fabric (preview)
toc_file: business-central/TOC.md
parent: topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to
children: []
coverage:
  learn: 5
  code: 8
  video: 2
  blog: 3
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

# Microsoft Fabric (preview)

> Microsoft Fabric (preview) covers mirroring Business Central online data into Microsoft Fabric OneLake. It answers questions about setup, service principal authentication, choosing companies and tables, managing synchronization, monitoring, troubleshooting, licensing and availability.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Analyze data in business intelligence tools](../analyze-data-in-business-intelligence-to.md) > Microsoft Fabric (preview) · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

Data mirroring is a managed integration that connects Business Central online to Microsoft Fabric. It replicates an initial snapshot and then ongoing changes into OneLake, so analytics and data engineering teams can use Business Central data in Fabric and Power BI without repeatedly reading from APIs. Data is stored in Delta Parquet format in an open mirrored database.

The pages follow the life cycle of the integration. The overview page explains the concept and its limits. The setup page walks through the assisted setup guide or the Microsoft Fabric Mirroring Setup page, including service principal authentication and the choice of companies and tables. The management page covers day-to-day control: schedules, configuration packages, permission sets, and start, stop, and reset actions. The monitoring page explains the overview and details views used to follow runs and fix errors. The FAQ answers common questions on availability, licensing, and troubleshooting.

Start with the overview page to confirm the feature fits your needs, then follow the setup page. The FAQ is a useful reference for questions about version, preview status, and Fabric capacity. The feature is in public preview, and the setup and FAQ pages refer to version 29.1.

## Key points

- Mirroring replicates an initial snapshot and then incremental changes from Business Central online into OneLake, avoiding repeated API reads.
- Data is stored in Delta Parquet format and supports multiple companies and up to 1,000 selected tables.
- Setup uses the assisted setup guide or the Microsoft Fabric Mirroring Setup page, with service principal authentication.
- A configuration package provides a curated set of standard tables.
- The Mirroring Setup page lets you select companies and tables, set the synchronization schedule and interval, and start, stop, or reset the export.
- Permission sets provide role-based access to the mirroring setup.
- Fabric Synchronization Overview and Synchronization Details show run states, errors, table-level results, and watermarks, with error filtering.
- The feature is in public preview, and the FAQ and setup pages reference version 29.1.

## Learn pages

- [Business Central Data Mirroring to Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/admin-fabric): Learn how Business Central mirrors selected company data to Microsoft Fabric for analytics, engineering, and business intelligence scenarios.
  - Status: Data mirroring to Microsoft Fabric is in preview as of February 2025.
  - Data mirroring replicates an initial snapshot and ongoing changes from selected Business Central companies and tables into OneLake in Delta Parquet format.
  - Limit: You can select up to 1,000 Business Central tables across manual selections and configuration packages.
  - The mirrored data in Fabric supports analytics with Fabric IQ, Power BI, Data Factory, and other experiences without repeatedly calling Business Central APIs.
  - Prerequisite: An administrator must create an open mirrored database in a Fabric workspace, set up a service principal, and connect Business Central to that workspace and database.
  - Setup and synchronization operations run asynchronously. Business Central records overview and details for each run.
- [Business Central Mirroring to Microsoft Fabric FAQ](https://learn.microsoft.com/dynamics365/business-central/fabric-faq): Get answers about availability, setup, supported data, synchronization, capacity, and licensing for mirroring Business Central data to Fabric.
  - Status: Public preview. Business Central online version 29.1 or later with Mirroring to Fabric extension required.
  - Prerequisite: Available for Business Central online only, not on-premises or Docker environments.
  - Prerequisite: Workspace assigned to active Fabric capacity or supported Fabric trial. Paused capacity stops replication.
  - Permissions: MS Fabric Mirroring - Admin to configure, Activate to manage packages, Read for synchronization monitoring.
  - Mirroring copies initial data then syncs changes. Use when API refreshes are slow or combining data from multiple systems.
  - Limit: Up to 1,000 selected tables across manual selections and packages. FlowFields and BLOB fields excluded.
  - Limit: Cannot filter records, specify time periods, choose individual fields, or configure different intervals per table.
  - No Business Central fee for mirroring. Fabric doesn't charge replication compute but charges for storage beyond free allowance and queries.
- [Manage Business Central Synchronization with Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/admin-manage-fabric-export): Select Business Central companies and tables, use configuration packages, and control ongoing synchronization with Microsoft Fabric.
  - Permissions: Three permission sets control access: MS Fabric Mirroring - Admin (setup and control), MS Fabric Mirroring - Activate (activate and reapply packages), and MS Fabric Mirroring - Read (view monitoring…
  - Step: To select companies, open the setup page, select Configuration and Companies, then add each company to synchronize.
  - Enabled companies synchronize their table data. You can disable a company temporarily without removing its configuration.
  - Limit: You can select up to 1,000 tables across manual selections and active configuration packages. External, linked, virtual, and sensitive internal tables are excluded.
  - Step: To add tables, open Configuration and Tables, select Add table, then choose one or more eligible Business Central tables.
  - Configuration packages let you add a curated set of tables at once. The app includes the MS-STD package with 256 standard tables.
  - Package operations like Activate add tables to the list, Deactivate removes package selections (other selections keep tables), and Reapply adds missing selections from an updated package version.
  - You can import JSON package definitions with table IDs, code, description, and version. Importing the same code with a new version applies changes.
- [Monitor and Troubleshoot Microsoft Fabric Synchronization](https://learn.microsoft.com/dynamics365/business-central/admin-monitor-fabric-export): Monitor Business Central synchronization runs, review table-level changes and watermarks, and resolve common Microsoft Fabric connection problems.
  - Step: To monitor synchronization, open the setup page, select Monitoring and Fabric Synchronization Overview, then review run states, times, and error messages.
  - The Fabric Synchronization Details page shows company, table, destination entity name, sync type, record counts, watermarks, and errors.
  - By default, detail rows with zero changes are hidden. Use Show rows with no changes when investigating missing or failed results.
  - Two read-only monitoring APIs are available under publisher microsoft, group fabric, version v1.0: fabricExportRuns and fabricExportDetails.
  - Step: In Fabric, open the mirrored database and select Monitor replication to check database and table states, row counts, and last completed times.
  - Setup Complete confirms background connection succeeded. Export Enabled reports whether continuous export is enabled but doesn't confirm particular export success.
- [Set Up Business Central Data Mirroring to Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/admin-set-up-fabric-mirroring): Prepare Microsoft Fabric, connect Business Central to an open mirrored database, and select the companies and tables to synchronize.
  - Status: Connect to Microsoft Fabric is preview; version 29.1 or later required
  - Prerequisite: Business Central online environment must have version 29.1 or later
  - Prerequisite: Business Central Mirroring to Fabric extension must be installed from Microsoft Marketplace
  - Permissions: User account requires MS Fabric Mirroring - Admin permission set or equivalent
  - Prerequisite: Fabric workspace must be in same Microsoft Entra tenant as Business Central environment
  - Prerequisite: Fabric workspace must be assigned to active Microsoft Fabric capacity; paused or deleted capacity stops replication
  - Service principal created for Dynamics 365 Business Central Fabric Export application handles authentication with Fabric
  - Step: Create open mirrored database in Microsoft Fabric to receive Business Central data
  - In the observatory: [Introducing: Business Central Integration with Microsoft Fabric (2026 release wave 2)](../../../../videos/kOCiyVql0go.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10348 Adding a Power BI workspace to Company Information to be used when deploying reports](../../../../changes/bcapps/10348.md) (code change): "Power BI Workspace field added to the Reporting section of Company Information"
- [#12189 Removing the restriction of deploying Power BI reports only to evaluation companies](../../../../changes/bcapps/12189.md) (code change): "Power BI report deployment now works with regular companies"
- [#12242 29.x: Removing the restriction of deploying Power BI reports only to evaluation companies](../../../../changes/bcapps/12242.md) (code change): "Power BI report deployment is no longer limited to evaluation companies"
- [Dynamics 365 Business Central: data mirroring to Microsoft Fabric announced.](../../../../posts/demiliani-com/15981.md) (community post): "data mirroring for Dynamics 365 Business Central to Microsoft Fabric"
- [Business Central data in Fabric: the way it should be](../../../../posts/waldo-be/318707.md) (community post): "native data mirroring to Microsoft Fabric, allowing users to replicate"
- [Business Central 2026 release wave 2 (BC29.1): Data mirroring to Microsoft Fabric (No APIs or OData Needed)](../../../../posts/yzhums-com/77184.md) (community post): "data mirroring to Microsoft Fabric, enabling organizations to synchronize selected companies"
- [20261109 - Not a Developer No Problem! Deploy & Embed Power BI Apps in Business Central](../../../../videos/7lxkboRGw28.md) (video): "Business Central mirroring to Fabric; Fabric mirrored database setup; Multi-company reporting"
- [Introducing: Business Central Integration with Microsoft Fabric (2026 release wave 2)](../../../../videos/kOCiyVql0go.md) (video): "Microsoft Fabric integration; Mirror database in OneLake; Multi-company Power BI apps"

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
