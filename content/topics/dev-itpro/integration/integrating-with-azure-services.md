---
id: topic/dev-itpro/integration/integrating-with-azure-services
type: topic
title: Integrating with Azure services
summary: "Integrating Business Central with Azure services: Key Vault for extension secrets, Azure Functions calls, and telemetry in Application Insights. It answers questions about setting up key vaults, monitoring Azure Function and key vault secret telemetry, and enabling, analyzing and alerting on telemetry."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:06.293Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: f971039dd772c6cfc36a6942f693022cf727158488a16b774e8a91b67f163ee4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace
    title: App Key Vault Secret Trace Telemetry | Microsoft Docs
    date: "2025-09-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace
    title: Azure Function Integration Telemetry
    date: "2022-08-16"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview
    title: Azure Key Vaults with Business Central
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/integration-azure-overview
    title: Integrating with Azure services
    date: "2024-02-23"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview
    title: Monitoring and Analyzing Telemetry
    date: "2025-06-20"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/integration-azure-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration
  localizations: []
  videos:
    - video/2vUCR16b85o
  posts:
    - post/demiliani-com/11817
    - post/demiliani-com/11887
  guidelines: []
  changes:
    - change/bcapps/8742
learn_toc_path:
  - Integration
  - Integrating with Azure services
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration
children: []
coverage:
  learn: 5
  code: 0
  video: 1
  blog: 2
  guideline: 0
bc_forms: []
member_hash: 5f81750627e96a1b61a6b2522a5843d9ff2fca65b2e2e1fb45389ef056851762
narrative: generated
---

# Integrating with Azure services

> Integrating Business Central with Azure services: Key Vault for extension secrets, Azure Functions calls, and telemetry in Application Insights. It answers questions about setting up key vaults, monitoring Azure Function and key vault secret telemetry, and enabling, analyzing and alerting on telemetry.

Path: [Integration](../integration.md) > Integrating with Azure services · tier official · system integration · narrative reviewed (checked by Opus)

## Overview

This section describes how Business Central works with Azure services. The landing page lists the services involved: Application Insights, Blob Storage, File Services, Functions, Key Vault, Virtual Networks and Azure OpenAI Service.

The detailed pages cover three areas. The Azure Key Vaults page explains how extensions that call external web services store secrets securely, and how to configure the Business Central service to reach the vaults in online and on-premises deployments. The Azure Function telemetry page and the app key vault secret trace telemetry page help you diagnose calls and secret retrieval. The Monitoring and Analyzing Telemetry page explains how to turn telemetry on and work with the data.

Start with the overview page to see which services are supported. Then read the Key Vault page if you are handling secrets, or the monitoring page if you need to set up telemetry before using the two telemetry reference pages.

## Key points

- Supported Azure services listed: Application Insights, Blob Storage, File Services, Functions, Key Vault, Virtual Networks and Azure OpenAI Service.
- Azure Key Vault stores secrets for extensions that call external web services, with setup for online and on-premises deployments.
- Key vault features include multi-key vault support, access control, publisher validation and telemetry monitoring.
- App key vault secret trace telemetry covers initialization and secret retrieval, with success and failure tracking for diagnostics.
- Azure Function integration telemetry tracks success and failure of calls from Business Central made through the Azure Function module, including requests and authorization.
- Telemetry can be enabled at environment level and app level.
- Telemetry data can be viewed in Power BI, analyzed with KQL queries, and used to set up alerts.
- The monitoring overview mentions custom telemetry and references 2020 release wave 2.

## Learn pages

- [App Key Vault Secret Trace Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace): Learn about app key vault secret trace telemetry in Business Central
- [Azure Function Integration Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace): Learn about telemetry on Azure Function integrations with Business Central
- [Azure Key Vaults with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview): Provides an overview of Azure key vaults with Business Central extensions.
- [Integrating with Azure services](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/integration-azure-overview): Learn how to integrate Business Central with Azure services.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Learn how Business Central provides telemetry for each environment, both for online and on-premises environments.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#8742 Enhance SharePoint error handling and add tests](../../../changes/bcapps/8742.md) (code change): "SharePoint error handling now correctly parses OData verbose error responses"
- [Azure Function SQL Trigger: how to use it (and why it can be useful in your Business Central projects)](../../../posts/demiliani-com/11817.md) (community post): "Azure SQL Triggers for Azure Functions enable real-time event-driven integrations with Business Central"
- [Dynamics 365 Business Central: using a static IP address to access APIs.](../../../posts/demiliani-com/11887.md) (community post): "third-party systems require a static IP address for API calls to Business Central"
- [Store Files Outside Business Central Using External File Accounts (BC 2025 Wave 1)](../../../videos/2vUCR16b85o.md) (video): "external file storage; azure blob storage; file shares; storage accounts"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
