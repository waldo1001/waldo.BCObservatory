---
id: topic/dev-itpro/integration/integrating-with-azure-services
type: topic
title: Integrating with Azure services
summary: "Integration of Business Central with Azure services: Application Insights telemetry, Azure Key Vault secrets for extensions, and Azure Functions calls. It answers questions about setting up these links and monitoring them through telemetry."
tier: official
language: en
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-23T00:57:44.197Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0d7c916dea69951d23579c43a825b3a8a473f47d00dfb1511299af1a62c95796
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace
    title: Analyzing App Key Vault Secret Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace
    title: Azure Function Integration Telemetry
    date: "2026-11-17"
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
    date: "2026-11-17"
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
    - video/oN0XfuCe6Qg
    - video/Qz-V7qvOY-8
  posts:
    - post/demiliani-com/11817
    - post/demiliani-com/11887
    - post/demiliani-com/12002
    - post/demiliani-com/12313
    - post/demiliani-com/17492
    - post/jpearson-blog/1485
    - post/jpearson-blog/1535
    - post/jpearson-blog/1601
  guidelines: []
  changes:
    - change/bcapps/8318
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
  video: 2
  blog: 8
  guideline: 0
bc_forms: []
member_hash: 5f81750627e96a1b61a6b2522a5843d9ff2fca65b2e2e1fb45389ef056851762
narrative: generated
---

# Integrating with Azure services

> Integration of Business Central with Azure services: Application Insights telemetry, Azure Key Vault secrets for extensions, and Azure Functions calls. It answers questions about setting up these links and monitoring them through telemetry.

Path: [Integration](../integration.md) > Integrating with Azure services · tier official · system integration · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers how Business Central connects to Azure services. The landing page lists the services involved: Application Insights, Blob Storage, File Services, Functions, Key Vault, Virtual Networks and Azure OpenAI Service.

The other pages go deeper on three areas. Azure Key Vaults with Business Central explains how extensions store and retrieve secrets for authenticated web service calls, for both online and on-premises deployments. Monitoring and Analyzing Telemetry explains how to emit telemetry to Application Insights at environment and app/extension level, control cost, and analyze data with Power BI or KQL.

Two telemetry pages cover specific signals: Key Vault secret trace telemetry and Azure Function integration telemetry. Start with the overview page, then read the Key Vault or telemetry page that matches your task. Use the signal-specific pages when troubleshooting.

## Key points

- Azure services named in the overview: Application Insights, Blob Storage, File Services, Functions, Key Vault, Virtual Networks and Azure OpenAI Service.
- Azure Key Vault gives extensions central, secure storage for secrets used in authenticated calls to external services.
- App key vault setup is described for both online and on-premises deployments.
- Key Vault secret trace telemetry covers secret initialization (TryInitializeFromCurrentApp) and retrieval (GetSecret), including failure reasons.
- Azure Function integration telemetry shows success and failure of calls made through the Azure Function module, including request tracking and authorization monitoring.
- Telemetry can be enabled at environment level and at app/extension level, and it is sent to Azure Application Insights.
- Telemetry data can be analyzed with Power BI or KQL queries, and cost can be controlled.
- The telemetry page references 2020 release wave 2.

## Learn pages

- [Analyzing App Key Vault Secret Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace): Analyze app key vault telemetry in Business Central to troubleshoot extension initialization failures and secret retrieval errors in Azure Key Vault.
  - App key vault telemetry is sent to extension's Application Insights resource, not environment's
  - RT0014 successful initialization, RT0015 initialization failure, RT0016 retrieval success, RT0017 retrieval failure
  - Initialization stage verifies app.json configuration and Azure Key Vault Client Identity settings
  - Retrieval stage occurs after successful initialization to get secrets from specified key vault
  - Failure reasons include missing extension specification, incorrect client ID, missing permissions, or invalid secret names
  - Telemetry captures key vault URI, secret name, extension details, and stack trace for troubleshooting
- [Azure Function Integration Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-azure-function-integration-trace): Analyze Azure Function integration telemetry in Business Central to monitor successful requests, failed requests, and OAuth authorization failures.
  - Azure Function integration telemetry tracks calls from Business Central to Azure Functions.
  - Request succeeded event has eventId AL0000I74 with HTTP status code.
  - Request failed event has eventId AL0000I7P and includes status code and function host URL.
  - Authorization failed event has eventId AL0000I75 with error text explaining failure reason.
  - Common dimensions include function host URL, tenant ID, environment name, and company name.
  - Sample KQL queries help analyze and alert on Azure Function integration failures.
- [Azure Key Vaults with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview): Learn how Business Central extensions use Azure Key Vault to securely retrieve secrets in online and on-premises environments.
- [Integrating with Azure services](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/integration-azure-overview): Learn how to integrate Business Central with Azure services.
- [Monitoring and Analyzing Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-overview): Monitor Business Central environments and extensions with Application Insights telemetry to diagnose errors, analyze performance, and track usage.
  - Environment-level telemetry and app-level telemetry can be enabled separately to Application Insights resources.
  - Status: Per-extension telemetry enabled from Business Central 2020 release wave 2 by setting connection string in app.json.
  - Both online and on-premises instances can emit telemetry to Application Insights.
  - Telemetry data is stored in Application Insights Logs in traces and pageViews tables, queried with KQL.
  - Two free, open-source Power BI apps available from marketplace: one for environment telemetry, one for app telemetry.
  - Permissions: Power BI Pro licenses required to install telemetry Power BI apps.
  - In the observatory: [Codeunit 8703 "Feature Telemetry"](../../../objects/codeunit/8703.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#8318 SharePoint Graph Module - extend functionality with additional methods](../../../changes/bcapps/8318.md) (code change): "SharePoint Graph module gains update and rename operations for drive items"
- [#9430 Fix untrappable JSON error in E-Document ADI import (Bug 640122)](../../../changes/bcapps/9430.md) (code change): "E-Document matching assistance import now handles malformed Azure Document Intelligence responses"
- [Azure Function SQL Trigger: how to use it (and why it can be useful in your Business Central projects)](../../../posts/demiliani-com/11817.md) (community post): "Azure SQL Triggers for Azure Functions enable real-time event-driven integrations"
- [Dynamics 365 Business Central: using a static IP address to access APIs.](../../../posts/demiliani-com/11887.md) (community post): "third-party systems require a static IP address for API calls to Business Central"
- [Azure Logic Apps: are you handling large blobs? Keep memory usage under control.](../../../posts/demiliani-com/12002.md) (community post): "Handling large blob files in Azure Logic Apps for Dynamics 365 Business Central integration"
- [Can I use AI to create and deploy an Azure Logic Apps with Business Central connector?](../../../posts/demiliani-com/12313.md) (community post): "Azure Logic Apps with Business Central connector; ai-assisted development"
- [Securing your Azure Storage Account: a guide to enabling Business Central-only access using Network Security Perimeter (part2) – now with Service Tags.](../../../posts/demiliani-com/17492.md) (community post): "restrict an Azure Storage Account to Business Central traffic by choosing the Dynamics365BusinessCentral service tag"
- [Calling Business Central APIs Without a Client Secret](../../../posts/jpearson-blog/1485.md) (community post): "Managed identities assigned to Azure resources can obtain access tokens without needing client secrets"
- [Calling Business Central Directly from a Managed Identity](../../../posts/jpearson-blog/1535.md) (community post): "Managed identities can be granted Business Central API permissions directly via PowerShell without requiring federated credentials"
- [Integration with Azure Static Web Apps from Business Central](../../../posts/jpearson-blog/1601.md) (community post): "integrate an Azure Static Web App with Business Central by using the WebPageViewer"
- [What's Cooking in Business Central: External File Storage Module](../../../videos/oN0XfuCe6Qg.md) (video): "external file storage; api; azure blob storage; file accounts; file scenarios; al development"
- [What's New: Enhancements in E-Documents (2025 release wave 1)](../../../videos/Qz-V7qvOY-8.md) (video): "Azure Document Intelligence for PDF processing; Embed PDF in e-document XML export"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
