---
id: topic/dev-itpro/integration/integrating-with-microsoft-fabric/administrator
type: topic
title: Administrator
summary: "Administrator tasks for mirroring Business Central online data to Microsoft Fabric: initial setup, managing which companies and tables synchronize, and monitoring and troubleshooting runs. It answers questions about configuring the connection, controlling synchronization, and diagnosing errors."
tier: official
language: en
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-07T01:06:39.442Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bcad82cff3237b16b1027597c93448bd1c40df75abfbb3a50924184cf34c6ba4
evidence:
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
    - topic/dev-itpro/integration/integrating-with-microsoft-fabric
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration
  - Integrating with Microsoft Fabric
  - Administrator
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration/integrating-with-microsoft-fabric
children: []
coverage:
  learn: 3
  code: 8
  video: 0
  blog: 0
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
member_hash: c75fcd95b22e2ca7ed759dd8d2b67d91b5fdbcc2c5d0532d356a55493a36afb4
narrative: generated
---

# Administrator

> Administrator tasks for mirroring Business Central online data to Microsoft Fabric: initial setup, managing which companies and tables synchronize, and monitoring and troubleshooting runs. It answers questions about configuring the connection, controlling synchronization, and diagnosing errors.

Path: [Integration](../../integration.md) > [Integrating with Microsoft Fabric](../integrating-with-microsoft-fabric.md) > Administrator · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers the administrator side of synchronizing Business Central online data to an open mirrored database in OneLake, where Fabric analytics tools can use it. It has three pages and no subtopics.

Start with the setup page, which explains how to connect using the Connect to Microsoft Fabric assisted setup or the Microsoft Fabric Mirroring Setup page. It also covers choosing companies and tables, and authentication through a service principal and workspace access.

After setup, use the management page to control what is synchronized and when, and to start, stop, or reset the export. Use the monitoring page when runs fail or you need to check results. It describes the Fabric Synchronization Overview and Synchronization Details views.

## Key points

- Mirroring sends Business Central online data to an open mirrored database in OneLake for use with Fabric analytics tools.
- Setup can be done through the Connect to Microsoft Fabric assisted setup or the Microsoft Fabric Mirroring Setup page.
- Authentication uses a service principal, and workspace access must be managed.
- You can select companies and up to 1,000 tables to synchronize.
- Configuration packages provide curated table sets, and permission sets provide role-based access.
- Synchronization schedule and interval can be controlled, and export can be started, stopped, or reset.
- The Fabric Synchronization Overview and Synchronization Details views show run states, errors, and table-level results.
- Monitoring supports error filtering, a company and table details view, and watermark tracking.

## Learn pages

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
