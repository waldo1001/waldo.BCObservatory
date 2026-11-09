---
id: topic/business-central/analytics-business-intelligence-and-repo/analyze-data-in-business-intelligence-to/microsoft-fabric
type: topic
title: Microsoft Fabric
summary: Business Central data mirroring to Microsoft Fabric replicates Business Central online data into OneLake for analytics. The section answers questions about what mirroring is, how to set it up, how to manage which companies and tables sync, how to monitor and troubleshoot runs, and common FAQ limits.
tier: official
language: en
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-09T00:45:18.475Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 3bb12d6eed0ef647f9e5c5a0b8fef4c33c3327c53f908eca8b437cfd73208b66
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
    date: "2026-10-29"
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
    - video/kOCiyVql0go
  posts:
    - post/bertverbeek-nl/1318
    - post/bertverbeek-nl/1342
    - post/demiliani-com/15981
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

> Business Central data mirroring to Microsoft Fabric replicates Business Central online data into OneLake for analytics. The section answers questions about what mirroring is, how to set it up, how to manage which companies and tables sync, how to monitor and troubleshoot runs, and common FAQ limits.

Path: [Analytics, business intelligence, and reporting](../../analytics-business-intelligence-and-repo.md) > [Analyze data in business intelligence tools](../analyze-data-in-business-intelligence-to.md) > Microsoft Fabric · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

Data mirroring is a managed integration that connects Business Central online to Microsoft Fabric. It copies an initial snapshot and then ongoing changes into an open mirrored database in OneLake, stored in Delta Parquet format, so analytics and data engineering teams do not need to read repeatedly from APIs.

The pages follow the lifecycle of the integration. Start with the overview page to understand the capability, then use the setup page to connect through the Connect to Microsoft Fabric assisted setup or the Microsoft Fabric Mirroring Setup page. That setup covers service principal authentication, workspace access, and the choice of companies and tables. The management page covers the same setup page for ongoing control: schedules, configuration packages, permission sets, and start, stop, or reset actions.

Once synchronization runs, the monitoring page explains the Fabric Synchronization Overview and Synchronization Details views for run states, errors, and table-level results. The FAQ covers availability, Fabric capacity needs, schema changes, and latency, and it is marked as preview.

## Key points

- Mirroring replicates an initial snapshot plus incremental changes from Business Central online into OneLake, stored as Delta Parquet.
- Supports multiple Business Central companies and up to 1,000 selected tables.
- Setup uses the Connect to Microsoft Fabric assisted setup or the Microsoft Fabric Mirroring Setup page, with service principal authentication and workspace access management.
- A configuration package provides a curated set of standard tables.
- The Mirroring Setup page controls schedule and interval, permission sets, and start, stop, and reset of data export.
- Monitor runs with the Fabric Synchronization Overview and Synchronization Details, including error filtering, company and table details, and watermark tracking.
- The FAQ covers Fabric capacity requirements, table and field selection, schema change handling, and synchronization latency, and it is marked as preview.

## Learn pages

- [Business Central Data Mirroring to Microsoft Fabric](https://learn.microsoft.com/dynamics365/business-central/admin-fabric): Learn how Business Central mirrors selected company data to Microsoft Fabric for analytics, engineering, and business intelligence scenarios.
  - Status: Data mirroring to Microsoft Fabric is in preview as of February 2025.
  - Data mirroring replicates an initial snapshot and ongoing changes from selected Business Central companies and tables into OneLake in Delta Parquet format.
  - Limit: You can select up to 1,000 Business Central tables across manual selections and configuration packages.
  - The mirrored data in Fabric supports analytics with Fabric IQ, Power BI, Data Factory, and other experiences without repeatedly calling Business Central APIs.
  - Prerequisite: An administrator must create an open mirrored database in a Fabric workspace, set up a service principal, and connect Business Central to that workspace and database.
  - Setup and synchronization operations run asynchronously. Business Central records overview and details for each run.
- [Business Central Mirroring to Microsoft Fabric FAQ](https://learn.microsoft.com/dynamics365/business-central/fabric-faq): Get answers about availability, setup, supported data, synchronization, capacity, and licensing for mirroring Business Central data to Fabric.
  - Status: The data mirroring feature is in preview as of the article publication date.
  - Prerequisite: Business Central online environment must support the Microsoft Fabric Mirroring extension.
  - Prerequisite: Fabric workspace must be assigned to an active Microsoft Fabric capacity. Paused or deleted capacity stops replication.
  - First create an open mirrored database in Fabric, then configure Business Central to replicate data to that database.
  - Enter the service principal Object ID in Principal ID only when using Add to workspace. If access is already granted in Fabric, leave it blank.
  - Connect to Fabric requests background connection setup. Start synchronization requests continuous exports after at least one company and table are selected.
  - Deleted records are synchronized along with inserted and updated records.
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
  - Status: Data mirroring setup is in preview and requires the Microsoft Fabric Mirroring extension on a compatible Business Central online environment.
  - Prerequisite: Your user must have the MS Fabric Mirroring - Admin permission set or equivalent permissions in Business Central.
  - Prerequisite: The Fabric destination workspace must be assigned to an active capacity, and you must have at least Member role in it.
  - Prerequisite: The Fabric workspace must be in the same Microsoft Entra tenant as your Business Central environment.
  - Step: Create an open mirrored database in Microsoft Fabric by signing in, selecting the workspace, opening Create, selecting Mirrored Database and Other, then entering a name.
  - Business Central uses the Microsoft-provided Dynamics 365 Business Central Fabric Export application (client ID dcc80069-ba40-4ad9-ba8c-60001cea3497) for authentication.
  - Step: Create a service principal for the app in your Microsoft Entra tenant using Azure Cloud Shell, Azure CLI, Microsoft Graph PowerShell, or Graph Explorer.
  - Step: Grant the service principal at least Contributor access to the Fabric workspace either during Business Central setup or directly in Fabric.
  - In the observatory: [Introducing: Business Central Integration with Microsoft Fabric (2026 release wave 2)](../../../../videos/kOCiyVql0go.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12189 Removing the restriction of deploying Power BI reports only to evaluation companies](../../../../changes/bcapps/12189.md) (code change): "Power BI report deployment now works with regular companies"
- [#12242 29.x: Removing the restriction of deploying Power BI reports only to evaluation companies](../../../../changes/bcapps/12242.md) (code change): "Power BI report deployment is no longer limited to evaluation companies"
- [Native connection with Fabric in Business Central](../../../../posts/bertverbeek-nl/1318.md) (community post): "Native Fabric integration is built on Open Mirroring and syncs from the SQL change log"
- [Business Central to Microsoft Fabric is a mirror. But what if you want to know what actually changed?](../../../../posts/bertverbeek-nl/1342.md) (community post): "Enable the delta change data feed setting to capture changes to the mirrored tables"
- [Dynamics 365 Business Central: data mirroring to Microsoft Fabric announced.](../../../../posts/demiliani-com/15981.md) (community post): "data mirroring for Dynamics 365 Business Central to Microsoft Fabric"
- [Directions EMEA 2026, Day 2: Cowork, Agentic Development and Fabric](../../../../posts/thinkaboutit-be/8359.md) (community post): "native Business Central-Fabric integration, native Business Central-Fabric mirroring replicates ERP data"
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
