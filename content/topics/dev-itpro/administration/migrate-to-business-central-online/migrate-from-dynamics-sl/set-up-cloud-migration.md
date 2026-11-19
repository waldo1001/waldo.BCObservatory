---
id: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl/set-up-cloud-migration
type: topic
title: Set up cloud migration
summary: Setting up cloud migration from Dynamics SL to Business Central online. It covers the Cloud Migration Setup guide, the SQL connection and integration runtime, company selection, and the SL Company Migration Configuration page. It answers questions on how to connect the on-premises and online databases and which migration settings to choose.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-19T01:01:35.036Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: e0b93569beb7bed3685f88ce8860192472cbe2c7f1b474f1a89f92b9929d1305
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    title: Business Central Cloud Migration Setup Overview
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-configure-companies
    title: Dynamics SL Company Migration Configuration
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-sl
    title: Set Up Dynamics SL Cloud Migration to Business Central
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-configure-companies
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-sl
  objects: []
  features: []
  topics:
    - topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Administration
  - Migrate to Business Central online
  - Migrate from Dynamics SL
  - Set up cloud migration
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/administration/migrate-to-business-central-online/migrate-from-dynamics-sl
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: a657122b48c3b1dcdc1c46e856c668b1c075a41c650bda632c46cac154d1a0bd
narrative: generated
---

# Set up cloud migration

> Setting up cloud migration from Dynamics SL to Business Central online. It covers the Cloud Migration Setup guide, the SQL connection and integration runtime, company selection, and the SL Company Migration Configuration page. It answers questions on how to connect the on-premises and online databases and which migration settings to choose.

Path: [Administration](../../../administration.md) > [Migrate to Business Central online](../../migrate-to-business-central-online.md) > [Migrate from Dynamics SL](../migrate-from-dynamics-sl.md) > Set up cloud migration · tier official · system administration · narrative **unreviewed** (model text not yet checked)

## Overview

Cloud migration setup for Dynamics SL prepares the link between the on-premises SL database and the Business Central online tenant. The setup creates the selected companies and prepares the environment for data replication. It does not migrate business data itself.

The section has three pages. The overview explains what Cloud Migration Setup does: it builds the connection and pipeline, runs compatibility checks, and sets up the preparation and replication pipelines. The setup page walks through the Cloud Migration Setup guide, including the SQL database connection, the integration runtime, company selection, and delegated administrator approval. The configuration page covers the SL Company Migration Configuration page, where you set global and per-company options.

Start with the overview to understand the pipeline. Then follow the setup page to connect the environments and pick companies. Finish with the configuration page to choose modules, dimensions, and posting and history options before you replicate data.

## Key points

- Cloud Migration Setup connects the on-premises and online tenant databases and creates the selected companies.
- Setup prepares the environment for replication but does not migrate business data.
- The Cloud Migration Setup guide covers the SQL database connection, integration runtime setup, and company selection.
- Delegated administrator approval and runtime service key reset are part of the setup page.
- The setup creates a preparation pipeline and a replication pipeline, and runs compatibility checks.
- SL Company Migration Configuration sets global and per-company settings, including module selection and global dimensions.
- The configuration page includes options for master data only migration, auto posting control, inactive records, and posting groups.
- It also lets you set historical data cutoffs.

## Learn pages

- [Business Central Cloud Migration Setup Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-overview): Learn what happens when you set up cloud migration from on-premises to Business Central online, including the data pipeline and connection process.
  - Cloud migration setup establishes connection and pipeline between on-premises and online databases without migrating data.
  - Step: Run Cloud Migration Setup and specify SQL database connection and integration runtime.
  - Step: Integration runtime registers with Azure Data Factory using authentication key exchange.
  - Step: Preparation pipeline checks compatibility between source and destination databases and creates stored procedures.
  - Step: Replication pipeline is created and remains idle until data migration is initiated.
- [Dynamics SL Company Migration Configuration](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migrate-sl-configure-companies): Learn how to configure modules, dimensions, posting, and historical snapshots for Dynamics SL company data migration to Business Central online.
  - Prerequisite: Run cloud migration setup for Dynamics SL migration before configuring company migration.
  - Step: Open SL Company Migration Configuration page from Cloud Migration Management, then select Configure SL Migration.
  - Step: Set Dimension 1 and Dimension 2 in the Per Company section by selecting Dynamics SL subaccount segments for global dimensions.
  - Step: Choose which modules to migrate: General Ledger, Accounts Payable, Accounts Receivable, and Inventory are selected by default.
  - Step: Specify the Oldest GL Year field for general ledger data to control how many years back to migrate.
  - Open purchase orders require General Ledger, Accounts Payable, and Inventory. Open sales orders require General Ledger, Accounts Receivable, and Inventory.
  - Most global settings are copied to company-level settings, but Include Hold Status Resources and Include Plan Status Projects are not copied.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)
- [Set Up Dynamics SL Cloud Migration to Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/migration-setup-sl): Learn how to connect Dynamics SL to Business Central online, select companies, configure migration data, and obtain delegated administrator consent.
  - Prerequisite: Delegated administrators must get approval from licensed user with Essentials or Premium license and SUPER permissions.
  - Step: Sign in to Microsoft 365 tenant and Business Central online as administrator.
  - Step: Open Assisted Setup and select Set up Cloud Migration to run setup guide.
  - Step: Specify SQL database connection details and integration runtime on Define SQL database connection page.
  - Step: Select companies to migrate from list or switch on All Companies option.
  - Step: Complete setup on SL Company Migration Configuration page and select Finish.
  - Cloud migration setup can be rerun to add tenants to existing integration runtime service.
  - Limit: Online tenant storage capacity default is 80 GB plus allowances per licensed user.
  - In the observatory: [Page 40063 "Cloud Migration Management"](../../../../../objects/page/40063.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
