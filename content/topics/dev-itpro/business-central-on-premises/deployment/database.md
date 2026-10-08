---
id: topic/dev-itpro/business-central-on-premises/deployment/database
type: topic
title: Database
summary: "Database deployment for Business Central on-premises: creating and altering application and tenant databases, SQL Server authentication, SQL Server installation considerations, moving to Azure SQL Database, controlling database size, and fixing SQL connection problems."
tier: official
language: en
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:23:11.221Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 00af84b10dd4595d976160ff9e29c8cd195885a64d84acef7ebc93b257b2a744
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-sql-server-authentication
    title: Configure Business Central Database Authentication
    date: "2022-11-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/devenv-create-databases
    title: Creating and altering Business Central databases
    date: "2023-12-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/installation-considerations-for-microsoft-sql-server
    title: Installation considerations for Microsoft SQL Server and Business Central
    date: "2025-03-12"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-reduce-data
    title: Keeping Database Size Under the Limit
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-database-azure-sql-database
    title: Running a Business Central Database to Azure SQL Database
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshooting-sql-server-connection-problems
    title: "Troubleshooting: SQL Server Connection Problems"
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-sql-server-authentication
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/devenv-create-databases
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/installation-considerations-for-microsoft-sql-server
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-reduce-data
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-database-azure-sql-database
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshooting-sql-server-connection-problems
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/deployment
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Deployment
  - Database
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/deployment
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 1103b69345373ded5b169ccb68a517cba3974be2f976bc0f6b1352b4185a5ebf
narrative: generated
---

# Database

> Database deployment for Business Central on-premises: creating and altering application and tenant databases, SQL Server authentication, SQL Server installation considerations, moving to Azure SQL Database, controlling database size, and fixing SQL connection problems.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Deployment](../deployment.md) > Database · tier official · system platform · narrative reviewed (checked by Opus)

## Overview

This section covers the database side of an on-premises Business Central deployment. It explains how to create application and tenant databases for single-tenant and multitenant setups with PowerShell cmdlets, and how to configure SQL Server authentication, including encryption key setup, so server instances can connect.

Further pages cover SQL Server installation choices (disk partitioning, virus scanning, TempDB, MAXDOP, full-text search, statistics), running the database on Azure SQL Database through a BACPAC export and import, and keeping database size under the limit with company deletion, retention policies and compression. A troubleshooting page covers connection failures.

Start with creating the databases, then configure authentication. Read the SQL Server installation page when planning the server. Use the size and troubleshooting pages when operating an existing deployment.

## Key points

- Databases are created as application and tenant databases, using cmdlets such as New-NAVApplicationDatabase, Mount-NAVTenant and Sync-NAVTenant; after creation, publish extensions and add companies.
- Database authentication uses SQL Server authentication with an encryption key, configured on the database and the server instance, for single-tenant and multitenant deployments.
- SQL Server installation guidance covers disk partitioning, virus scanning, memory, TempDB, full-text search, MAXDOP, statistics management and high availability, for on-premises and Azure.
- Azure SQL Database deployment involves preparing the database, exporting a BACPAC, importing it to Azure, configuring the firewall and setting server instance authentication.
- Ways to reduce database size: delete unused companies, delete documents, apply retention policies, and enable data compression (CompressionType property).
- For connection problems, enable Named Pipes and TCP/IP in SQL Server Configuration Manager, allow SQL Server through Windows Firewall, and start SQL Browser Service for named instances.

## Learn pages

- [Configure Business Central Database Authentication](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-sql-server-authentication): This article describes how to configure SQL Server authentication between the Dynamics Business Central instance and a database.
- [Creating and altering Business Central databases](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/devenv-create-databases): Create a new database by using the New-NAVDatabase cmdlet in the Administration Shell.
- [Installation considerations for Microsoft SQL Server and Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/installation-considerations-for-microsoft-sql-server): Learn about the requirements for installing and configuring Microsoft SQL Server to work with Business Central.
- [Keeping Database Size Under the Limit](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/database-reduce-data): Learn about the best ways to reduce data stored in Business Central databases.
- [Running a Business Central Database to Azure SQL Database](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-database-azure-sql-database): Learn how to deploy a Business Central database to Azure SQL Database
- [Troubleshooting: SQL Server Connection Problems](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/troubleshooting-sql-server-connection-problems): Learn how to configure and troubleshoot SQL Server connections to Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
