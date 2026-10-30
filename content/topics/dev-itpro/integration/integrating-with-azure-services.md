---
id: topic/dev-itpro/integration/integrating-with-azure-services
type: topic
title: Integrating with Azure services
summary: "Integration of Business Central with Azure services: Application Insights, Blob and File Services, Functions, Key Vault, Virtual Networks and Azure OpenAI Service. It answers questions about storing extension secrets in Azure Key Vault, and about enabling and analyzing telemetry for Key Vault and Azure Function calls."
tier: official
language: en
system: integration
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:15.779Z"
  flags: []
generated:
  at: "2026-10-30T08:09:06.421Z"
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
    - post/demiliani-com/12002
    - post/demiliani-com/12292
    - post/demiliani-com/12313
    - post/demiliani-com/17492
    - post/jpearson-blog/1485
    - post/jpearson-blog/1535
    - post/jpearson-blog/1601
  guidelines: []
  changes:
    - change/bcapps/8318
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
  blog: 9
  guideline: 0
bc_forms: []
member_hash: 5f81750627e96a1b61a6b2522a5843d9ff2fca65b2e2e1fb45389ef056851762
narrative: generated
---

# Integrating with Azure services

> Integration of Business Central with Azure services: Application Insights, Blob and File Services, Functions, Key Vault, Virtual Networks and Azure OpenAI Service. It answers questions about storing extension secrets in Azure Key Vault, and about enabling and analyzing telemetry for Key Vault and Azure Function calls.

Path: [Integration](../integration.md) > Integrating with Azure services · tier official · system integration · narrative reviewed (checked by Opus)

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
  - App key vault telemetry gathers information about Azure Key Vault secret acquisition by extensions at runtime across initialization and retrieval stages.
  - Initialization stage verifies app key vault provider configuration via TryInitializeFromCurrentApp method and fails if extension lacks key vault specification or credentials are incorrect.
  - Retrieval stage attempts secret retrieval via GetSecret method call and fails if secret name is invalid, key vault doesn't exist, or application lacks read permissions.
  - Status: EventId RT0014 indicates successful key vault initialization with severity level 1; RT0015 indicates initialization failure with severity level 3.
  - Status: EventId RT0016 indicates successful secret retrieval with severity level 1; RT0017 indicates retrieval failure with severity level 3.
  - Telemetry custom dimensions include extension ID, name, publisher, version, key vault URIs, client type, AL object details, and component version.
- [Azure Function Integration Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace): Learn about telemetry on Azure Function integrations with Business Central
  - Azure Function integration telemetry tracks calls from Business Central to Azure Functions.
  - Request succeeded event has eventId AL0000I74 with HTTP status code.
  - Request failed event has eventId AL0000I7P and includes status code and function host URL.
  - Authorization failed event has eventId AL0000I75 with error text explaining failure reason.
  - Common dimensions include function host URL, tenant ID, environment name, and company name.
  - Sample KQL queries help analyze and alert on Azure Function integration failures.
- [Azure Key Vaults with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview): Learn how Business Central extensions use Azure Key Vault to securely retrieve secrets in online and on-premises environments.
- [Integrating with Azure services](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/integration-azure-overview): Learn how to integrate Business Central with Azure services.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Learn how Business Central provides telemetry for each environment, both for online and on-premises environments.
  - Telemetry can be enabled at environment level or per-extension level to collect operational data in Azure Application Insights.
  - With Business Central 2020 release wave 2 and later, publishers can set Application Insights connection strings in app.json manifest files.
  - Telemetry data is stored in Application Insights Logs tables called traces and pageViews for analysis via Kusto query language.
  - Both online and on-premises Business Central instances can emit telemetry to Azure Application Insights.
  - Free Power BI apps analyze Business Central telemetry; one app covers environments while another covers apps and extensions.
  - Permissions: AL developers can create custom telemetry messages using Feature Telemetry codeunit or LogMessage method from Session class.
  - In the observatory: [Codeunit 8703 "Feature Telemetry"](../../../objects/codeunit/8703.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#8318 SharePoint Graph Module - extend functionality with additional methods](../../../changes/bcapps/8318.md) (code change): "SharePoint Graph module gains update and rename operations for drive items and list items via MS Graph PATCH endpoints"
- [Azure Function SQL Trigger: how to use it (and why it can be useful in your Business Central projects)](../../../posts/demiliani-com/11817.md) (community post): "Azure SQL Triggers for Azure Functions enable real-time event-driven integrations with Business Central"
- [Dynamics 365 Business Central: using a static IP address to access APIs.](../../../posts/demiliani-com/11887.md) (community post): "Azure Function in Premium or Flex Plan acts as a middleware to route requests"
- [Azure Logic Apps: are you handling large blobs? Keep memory usage under control.](../../../posts/demiliani-com/12002.md) (community post): "Built-in Azure Logic Apps connectors load entire files into memory"
- [Azure Logic Apps: Built-in vs Managed Azure Blob Storage Connector.](../../../posts/demiliani-com/12292.md) (community post): "Azure Logic Apps: Built-in vs Managed Azure Blob Storage Connector"
- [Can I use AI to create and deploy an Azure Logic Apps with Business Central connector?](../../../posts/demiliani-com/12313.md) (community post): "AI successfully created and deployed an Azure Logic App with HTTP trigger"
- [Securing your Azure Storage Account: a guide to enabling Business Central-only access using Network Security Perimeter (part2) – now with Service Tags.](../../../posts/demiliani-com/17492.md) (community post): "Administrators can restrict an Azure Storage Account to Business Central traffic"
- [Calling Business Central APIs Without a Client Secret](../../../posts/jpearson-blog/1485.md) (community post): "Managed identities assigned to Azure resources can obtain access tokens without needing client secrets"
- [Calling Business Central Directly from a Managed Identity](../../../posts/jpearson-blog/1535.md) (community post): "Azure resources to call Business Central APIs securely without creating or storing client secrets"
- [Integration with Azure Static Web Apps from Business Central](../../../posts/jpearson-blog/1601.md) (community post): "Integration with Azure Static Web Apps from Business Central using the WebPageViewer control add-in"
- [Store Files Outside Business Central Using External File Accounts (BC 2025 Wave 1)](../../../videos/2vUCR16b85o.md) (video): "external file storage; azure blob storage; storage accounts"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
