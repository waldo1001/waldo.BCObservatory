---
id: topic/dev-itpro/business-central-on-premises/deployment
type: topic
title: Deployment
summary: "Deployment of Business Central on-premises: planning, component topology, installation with Setup, service account provisioning, multitenant databases, certificates, and lifecycle policy. It answers how to plan, install and secure an on-premises environment, and points to subtopics for web server, database, mobile app, topologies and updates."
tier: official
language: en
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:14:39.186Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 09b980000b75723bac0e5dda639762d595b4eefa307cac117c3784891634448d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/product-and-architecture-overview
    title: Component and System Topology
    date: "2022-08-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-sql-server-authentication
    title: Configure Business Central Database Authentication
    date: "2022-11-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-delegation-web-server
    title: Configure Web Client Delegation
    date: "2024-10-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-web-server
    title: Configuring Business Central Web Server instances
    date: "2024-11-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-iis
    title: Configuring Internet Information Services for Business Central
    date: "2026-06-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-ssl-web-client-connection
    title: Configuring SSL to Secure the Web Client Connection
    date: "2021-04-01"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/update-versions-13
    title: Cumulative updates
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/update-versions-14
    title: Cumulative updates for the Spring 2019 version
    date: "2024-04-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/web-server-overview
    title: Deploy the Web Server Components
    date: "2021-10-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-demonstration-environment
    title: Deploying a Business Central Demonstration Environment
    date: "2026-05-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-three-computer-environment
    title: Deploying Business Central in a Three-Computer Topology
    date: "2022-09-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/update-versions-23
    title: Dynamics 365 Business Central on-premises 2023 release wave 2 updates
    date: "2025-04-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/update-versions-24
    title: Dynamics 365 Business Central On-premises 2024 Release Wave 1 Updates
    date: "2025-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/update-versions-25
    title: Dynamics 365 Business Central on-premises 2024 release wave 2 updates
    date: "2026-03-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/update-versions-26
    title: Dynamics 365 Business Central On-premises 2025 Release Wave 1 Updates
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/update-versions-27
    title: Dynamics 365 Business Central On-premises 2025 Release wave 2 Updates
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/update-versions-28
    title: Dynamics 365 Business Central on-premises 2026 release wave 1 updates
    date: "2026-09-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/faq-win-cli
    title: FAQ about Windows Client and Business Central
    date: "2024-12-30"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/features-not-implemented-on-premises
    title: Features not implemented in on-premises deployments
    date: "2025-04-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/install-using-setup
    title: Install Business Central Using Setup
    date: "2026-03-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/install-business-central-app
    title: Install the Business Central Mobile app
    date: "2024-01-08"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-single-computer-environment
    title: Installing Business Central in a Single Computer Environment
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/deploy-two-computer-environment
    title: Installing Business Central in a Two Computer Environment
    date: "2021-10-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-introducing-business-central-mobile-app
    title: Introducing the Dynamics 365 Business Central Mobile App
    date: "2021-04-01"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/multitenant-setup-guide
    title: Manage Application and Tenant Databases in a Multitenant Deployment
    date: "2024-04-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/plan-for-deployment
    title: Plan for Deployment
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/provision-server-account
    title: Provisioning the Dynamics 365 Business Central Server Service Account
    date: "2021-10-19"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/configure-multiple-web-server-instances
    title: Set Up Multiple Business Central Web Server Instances using PowerShell
    date: "2024-10-28"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/terms/lifecycle-policy-on-premises
    title: Software lifecycle policy and on-premises updates
    date: "2021-04-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/system-requirement-business-central
    title: System Requirements for Business Central
    date: "2024-04-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/system-requirement-business-central-v15
    title: System requirements for Business Central 2019 Release Wave 2
    date: "2024-01-04"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/system-requirement-business-central-v16
    title: System Requirements for Business Central 2020 Release Wave 1
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/system-requirement-business-central-v17
    title: System Requirements for Business Central 2020 Release Wave 2
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/system-requirements-business-central-v18
    title: System Requirements for Business Central 2021 Release Wave 1
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/system-requirements-business-central-v19
    title: System Requirements for Business Central 2021 Release Wave 2
    date: "2024-04-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/system-requirements-business-central-v20
    title: System Requirements for Business Central 2022 Release Wave 1
    date: "2024-04-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/product-and-architecture-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/faq-win-cli
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/features-not-implemented-on-premises
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/install-using-setup
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/multitenant-setup-guide
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/plan-for-deployment
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/provision-server-account
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/terms/lifecycle-policy-on-premises
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/implement-security-certificates-production-environment
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises
    - topic/dev-itpro/business-central-on-premises/deployment/system-requirements
    - topic/dev-itpro/business-central-on-premises/deployment/business-central-on-premises-updates
    - topic/dev-itpro/business-central-on-premises/deployment/deployment-topologies
    - topic/dev-itpro/business-central-on-premises/deployment/business-central-web-server
    - topic/dev-itpro/business-central-on-premises/deployment/database
    - topic/dev-itpro/business-central-on-premises/deployment/business-central-mobile-app
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Deployment
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises
children:
  - topic/dev-itpro/business-central-on-premises/deployment/system-requirements
  - topic/dev-itpro/business-central-on-premises/deployment/business-central-on-premises-updates
  - topic/dev-itpro/business-central-on-premises/deployment/deployment-topologies
  - topic/dev-itpro/business-central-on-premises/deployment/business-central-web-server
  - topic/dev-itpro/business-central-on-premises/deployment/database
  - topic/dev-itpro/business-central-on-premises/deployment/business-central-mobile-app
coverage:
  learn: 63
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 1624d48022a6bcabafb293e9d24546023d2d928ada72f3b78541afb0ce08f96b
narrative: generated
---

# Deployment

> Deployment of Business Central on-premises: planning, component topology, installation with Setup, service account provisioning, multitenant databases, certificates, and lifecycle policy. It answers how to plan, install and secure an on-premises environment, and points to subtopics for web server, database, mobile app, topologies and updates.

Path: [Business Central on-premises](../business-central-on-premises.md) > Deployment · tier official · system none · narrative reviewed by Opus

## Overview

This section covers everything needed to get Business Central on-premises running. It starts with planning (network topology, single-tenant or multitenant, authentication, service account, connection security) and a description of the three core components: web server, server and SQL database, plus development tools.

The own pages then cover the practical steps: installing with Setup (wizard, configuration files, command-line options), provisioning the server service account with the right SQL Server roles, setting up application and tenant databases for multitenancy, and securing client connections with X.509 certificates. Two further pages cover the software lifecycle policy and the Windows client deprecation FAQ.

Subtopics go deeper: system requirements, deployment topologies (demo to three-computer), the IIS web server, databases, the mobile app, and the list of on-premises updates. A good path is Plan for Deployment, then Component and System Topology, then a topology page, then Install Business Central Using Setup.

## Key points

- Plan for Deployment covers network topology, single-tenant vs multitenant, authentication method, service account and SSL decisions.
- Three core components: web server, server, SQL database; development tools include the AL environment and PowerShell modules.
- Setup install page covers media download, prerequisite checks, wizard, configuration files and command-line options, with versions 24 to 27 listed.
- The server service account is a domain user (or Network Service) needing dbcreator, db_datareader and db_datawriter roles, with SPN registration.
- Multitenant setup: create an application database, configure the server for multitenancy, mount tenant databases, synchronize and publish extensions.
- X.509 certificates with chain trust secure server-client connections over WAN; peer trust and SSL for web services are also covered.
- The Windows client was discontinued from 2019 release wave 2 (October 2019) in favor of web, mobile and desktop app clients.
- Lifecycle page explains Modern and Fixed Lifecycle Policy, update schedule, mainstream and extended support.

## Subtopics

- [System requirements](deployment/system-requirements.md) (16 pages)
- [Business Central on-premises updates](deployment/business-central-on-premises-updates.md) (16 pages)
- [Deployment topologies](deployment/deployment-topologies.md) (5 pages)
- [Business Central web server](deployment/business-central-web-server.md) (7 pages)
- [Database](deployment/database.md) (6 pages)
- [Business Central mobile app](deployment/business-central-mobile-app.md) (4 pages)

## More Learn pages

- [Component and System Topology](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/product-and-architecture-overview): The Business Central architecture includes of three core components, and various additional tools and components.
- [FAQ about Windows Client and Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/faq-win-cli): Get answers to why the Windows client is no longer supported with Business Central.
- [Features not implemented in on-premises deployments](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/features-not-implemented-on-premises): Some features work differently or not at all, depending on whether your Business Central solution is in the cloud or on-premises.
- [Install Business Central Using Setup](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/install-using-setup): Install Business Central using Setup to quickly deploy production, demo, or development environments. Follow step-by-step guidance.
- [Manage Application and Tenant Databases in a Multitenant Deployment](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/multitenant-setup-guide): Learn about the tasks for managing application and tenant databases for a multitenant deployment
- [Plan for Deployment](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/plan-for-deployment): Get an overview of things you should consider and decide on before deploying
- [Provisioning the Dynamics 365 Business Central Server Service Account](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/provision-server-account): The service account is used by Business Central clients to log on to the server instance.
- [Software lifecycle policy and on-premises updates](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/terms/lifecycle-policy-on-premises): Learn about the lifecycle and product life of Dynamics 365 Business Central versions for on-premises deployments.
- [Using Security Certificates with Business Central on-premises](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/deployment/implement-security-certificates-production-environment): Learn how to use security certificates to help secure connections with Business Central.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
