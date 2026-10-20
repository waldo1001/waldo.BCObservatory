---
id: topic/dev-itpro/integration/integrating-with-azure-services
type: topic
title: Integrating with Azure services
summary: "Integration of Business Central with Azure services: Application Insights, Blob and File Services, Functions, Key Vault, Virtual Networks and Azure OpenAI Service. It answers questions about storing extension secrets in Azure Key Vault, and about enabling and analyzing telemetry for Key Vault and Azure Function calls."
tier: official
language: en
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-20T08:48:51.539Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 55285c86d60186f64c877c91ccbff075b3dabb2f18cb245fc3b09cd5209cbb19
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
    date: "2026-10-08"
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
    - post/demiliani-com/17492
    - post/jpearson-blog/1485
    - post/jpearson-blog/1535
  guidelines: []
  changes:
    - change/bcapps/8318
    - change/bcapps/8742
    - change/bcapps/9430
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
  blog: 5
  guideline: 0
bc_forms: []
member_hash: 5f81750627e96a1b61a6b2522a5843d9ff2fca65b2e2e1fb45389ef056851762
narrative: generated
---

# Integrating with Azure services

> Integration of Business Central with Azure services: Application Insights, Blob and File Services, Functions, Key Vault, Virtual Networks and Azure OpenAI Service. It answers questions about storing extension secrets in Azure Key Vault, and about enabling and analyzing telemetry for Key Vault and Azure Function calls.

Path: [Integration](../integration.md) > Integrating with Azure services · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

This section introduces the Azure services Business Central can work with and then goes deeper on two areas: Azure Key Vault and telemetry. The landing page lists the services: Application Insights, Blob Services API, File Services API, Functions, Key Vault, Virtual Network and Azure OpenAI Service.

The Key Vault pages explain how extensions keep secrets in a central, secure store. They use these secrets for authenticated web service calls to external services, in both online and on-premises deployments. A separate telemetry page covers how to trace secret acquisition at runtime.

The telemetry pages show how to monitor Azure-related operations. The overview covers enabling telemetry at environment and app level, viewing it in Power BI, analyzing it with KQL, and setting up alerts. The Azure Function page applies this to calls from Business Central to Azure Functions. Start with the landing page for the service list, then go to the Key Vault or telemetry pages that match your task.

## Key points

- Supported Azure services listed: Application Insights, Blob Services API, File Services API, Functions, Key Vault, Virtual Network, Azure OpenAI Service.
- Azure Key Vault gives extensions centralized, secure storage for secrets used in authenticated web service calls to external services.
- App key vault setup is described separately for online and on-premises deployments.
- App Key Vault telemetry covers initialization and secret retrieval, with failure reasons, telemetry dimensions and KQL sample code for troubleshooting.
- Azure Function integration telemetry helps monitor success and failure of calls made through the Azure Function module, including request tracking and authorization monitoring.
- The telemetry overview covers environment-level and app-level enabling, Power BI analysis, KQL queries, alert setup and custom telemetry, and references 2020 release wave 2.

## Learn pages

- [App Key Vault Secret Trace Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace): Learn about app key vault secret trace telemetry in Business Central
- [Azure Function Integration Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace): Learn about telemetry on Azure Function integrations with Business Central
- [Azure Key Vaults with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview): Learn how Business Central extensions use Azure Key Vault to securely retrieve secrets in online and on-premises environments.
- [Integrating with Azure services](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/integration-azure-overview): Learn how to integrate Business Central with Azure services.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Learn how Business Central provides telemetry for each environment, both for online and on-premises environments.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#8318 SharePoint Graph Module - extend functionality with additional methods](../../../changes/bcapps/8318.md) (code change): "SharePoint Graph module gains update and rename operations for drive items and list items via MS Graph PATCH endpoints"
- [#8742 Enhance SharePoint error handling and add tests](../../../changes/bcapps/8742.md) (code change): "SharePoint error handling now correctly parses OData verbose error responses"
- [#9430 Fix untrappable JSON error in E-Document ADI import (Bug 640122)](../../../changes/bcapps/9430.md) (code change): "E-Document matching assistance import now handles malformed Azure Document Intelligence responses"
- [Azure Function SQL Trigger: how to use it (and why it can be useful in your Business Central projects)](../../../posts/demiliani-com/11817.md) (community post): "Azure SQL Triggers for Azure Functions enable real-time event-driven integrations with Business Central"
- [Dynamics 365 Business Central: using a static IP address to access APIs.](../../../posts/demiliani-com/11887.md) (community post): "Azure Function in Premium or Flex Plan acts as a middleware to route requests"
- [Securing your Azure Storage Account: a guide to enabling Business Central-only access using Network Security Perimeter (part2) – now with Service Tags.](../../../posts/demiliani-com/17492.md) (community post): "Administrators can restrict an Azure Storage Account to Business Central traffic"
- [Calling Business Central APIs Without a Client Secret](../../../posts/jpearson-blog/1485.md) (community post): "Managed identities assigned to Azure resources can obtain access tokens without needing client secrets"
- [Calling Business Central Directly from a Managed Identity](../../../posts/jpearson-blog/1535.md) (community post): "Azure resources to call Business Central APIs securely without creating or storing client secrets"
- [Store Files Outside Business Central Using External File Accounts (BC 2025 Wave 1)](../../../videos/2vUCR16b85o.md) (video): "external file storage; azure blob storage; storage accounts"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
