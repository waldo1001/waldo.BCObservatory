---
id: topic/dev-itpro/development/programming-in-the-al-language/handling-security/using-azure-key-vault-for-app-secrets
type: topic
title: Using Azure Key Vault for app secrets
summary: "Azure Key Vault for Business Central extension secrets: how to set up app key vaults for online and on-premises, how to read secrets from AL code, and how to monitor retrieval with telemetry. It answers setup, permission, coding and troubleshooting questions."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:56:15.866Z"
  flags: []
generated:
  at: "2026-10-30T01:11:59.976Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0497b4406782f7846a9ab5fc24fc3f4032e1c2a2c083e57db4301c0b7350700f
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace
    title: App Key Vault Secret Trace Telemetry | Microsoft Docs
    date: "2025-09-25"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/setup-app-key-vault
    title: Set up app key vaults for Business Central online
    date: "2026-01-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/setup-app-key-vault-onprem
    title: Setting up App Key Vaults for Business Central on-premises
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault
    title: Use Key Vault Secrets in Business Central Extensions
    date: "2026-10-09"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/setup-app-key-vault
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/setup-app-key-vault-onprem
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language/handling-security
  localizations: []
  videos: []
  posts:
    - post/aardvarklabs-blog/2640
    - post/wingate365-com/https-blog-wingate365-com-2026-06-graph-api-email-account-types-for-d365-html--562e57de51
  guidelines: []
  changes:
    - change/bcapps/12557
    - change/bcapps/8999
learn_toc_path:
  - Development
  - Programming in the AL language
  - Handling security
  - Using Azure Key Vault for app secrets
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language/handling-security
children: []
coverage:
  learn: 5
  code: 0
  video: 0
  blog: 2
  guideline: 0
bc_forms: []
member_hash: ded668fce5698d554014a03cb0248739e1b8cce7882db2d6f6f80adf71b920e1
narrative: generated
---

# Using Azure Key Vault for app secrets

> Azure Key Vault for Business Central extension secrets: how to set up app key vaults for online and on-premises, how to read secrets from AL code, and how to monitor retrieval with telemetry. It answers setup, permission, coding and troubleshooting questions.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Handling security](../handling-security.md) > Using Azure Key Vault for app secrets · tier official · system development · narrative reviewed (checked by Opus)

## Overview

App key vaults give extensions a central, secure place to store secrets, such as those needed for authenticated web service calls to external services. The section covers the concept, setup for each deployment type, the AL code to retrieve secrets, and telemetry for monitoring.

Start with the "Azure Key Vaults with Business Central" overview page. Then follow the setup page for your deployment: online setup covers Marketplace apps and the Dynamics 365 Business Central ISV key vault Reader application, while on-premises setup covers the Azure Key Vault, a Microsoft Entra app registration, permissions, and server instance configuration with a certificate and client credentials.

Developers then use "Use Key Vault Secrets in Business Central Extensions" to configure key vault URLs in app.json and read secrets in AL. The telemetry page helps diagnose failures in initialization and retrieval.

## Key points

- Extensions configure key vault URLs with keyVaultUrls in app.json and support multiple key vaults.
- In AL, call TryInitializeFromCurrentApp and then GetSecret on the App Key Vault Secret Provider codeunit; secrets are returned as SecretText.
- Online setup supports Marketplace apps and involves provisioning the Dynamics 365 Business Central ISV key vault Reader application and granting permissions.
- Online setup uses an AllowedBusinessCentralAppIds secret and mentions role-based access control and Embed App program support.
- On-premises setup requires registering a Microsoft Entra application, granting RBAC or access policy permissions, and configuring a certificate (self-signed supported) by thumbprint plus client credentials.
- On-premises private key access must be controlled, and a container-based configuration script is available.
- Publisher validation applies to secret retrieval.
- App key vault telemetry records initialization and secret retrieval events with failure reasons, and the docs include KQL sample code for analysis.

## Learn pages

- [App Key Vault Secret Trace Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace): Learn about app key vault secret trace telemetry in Business Central
  - App key vault telemetry gathers information about Azure Key Vault secret acquisition by extensions at runtime across initialization and retrieval stages.
  - Initialization stage verifies app key vault provider configuration via TryInitializeFromCurrentApp method and fails if extension lacks key vault specification or credentials are incorrect.
  - Retrieval stage attempts secret retrieval via GetSecret method call and fails if secret name is invalid, key vault doesn't exist, or application lacks read permissions.
  - Status: EventId RT0014 indicates successful key vault initialization with severity level 1; RT0015 indicates initialization failure with severity level 3.
  - Status: EventId RT0016 indicates successful secret retrieval with severity level 1; RT0017 indicates retrieval failure with severity level 3.
  - Telemetry custom dimensions include extension ID, name, publisher, version, key vault URIs, client type, AL object details, and component version.
- [Azure Key Vaults with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview): Learn how Business Central extensions use Azure Key Vault to securely retrieve secrets in online and on-premises environments.
- [Set up app key vaults for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/setup-app-key-vault): Learn how to set up Azure key vaults for Business Central online extensions. Follow step-by-step instructions to securely manage secrets for your Marketplace apps.
  - Limit: App key vaults only supported with Marketplace apps on Business Central online, not with per-tenant extensions or dev extensions.
  - Extensions can use up to two key vaults for storing secrets needed in Azure.
  - Step: Create Azure key vault and add secrets through Azure portal, Azure CLI, or other methods.
  - Step: Provision Dynamics 365 Business Central ISV key vault Reader application in Microsoft Entra tenant using Microsoft Graph PowerShell SDK modules.
  - Step: Grant key vault reader application permission to read secrets using Access policies or Azure Role-Based Access Control.
  - Step: Create AllowedBusinessCentralAppIds secret in key vault containing app IDs separated by comma or semicolon.
  - Key vault URLs in app.json must belong to same Microsoft Entra tenant as the key vault itself.
  - Limit: Link between Marketplace app and key vault registered on submission and cannot be removed as breaking change; access cannot be deregistered once established.
- [Setting up App Key Vaults for Business Central on-premises](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/setup-app-key-vault-onprem): Describes how to set up App Key Vault with Business Central on-premises.
  - Prerequisite: Azure subscription with Active Directory tenant required to set up key vaults for Business Central on-premises.
  - Prerequisite: Security certificate required for registering application in Microsoft Entra ID; self-signed certificate acceptable for test environments.
  - Step: Create one or more Azure Key Vaults and add secrets using Azure portal, Azure CLI, or other methods; extension can use one or two vaults.
  - Step: Register Microsoft Entra application for reading key vault secrets with certificate and specify Accounts in this organizational directory only.
  - Step: Grant key vault reader application permission to read secrets by adding Get secret permission or assigning Key Vault Secrets User role.
  - Step: Configure Server instance with certificate store location, name, thumbprint, client ID, and publisher validation setting for key vault access.
  - Enable Publisher Validation to block extensions from reading secrets from other publishers' key vaults; extensions need tenant ID from Publish-NAVApp.
  - Permissions: Service account running Server instance must have permission to access certificate private key for successful key vault authentication.
- [Use Key Vault Secrets in Business Central Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault): Learn how to configure Azure Key Vault in an extension, retrieve secrets securely with SecretText, and monitor key vault operations.
  - In the observatory: [Codeunit 3800 "App Key Vault Secret Provider"](../../../../../objects/codeunit/3800.md)

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12557 Implement first-party app authentication for Microsoft Fabric Export](../../../../../changes/bcapps/12557.md) (code change): "Microsoft Fabric Export now uses first-party app authentication instead of user-based credentials"
- [#8999 Migrate Recommended Apps & Connectivity Apps to Official Marketplace Catalog API](../../../../../changes/bcapps/8999.md) (code change): "Integrated Azure Key Vault for secure API key management"
- [Securing Sensitive Data in Business Central AL using SecretText](../../../../../posts/aardvarklabs-blog/2640.md) (community post): "SecretText can be retrieved from Isolated Storage or Azure Vault"
- [Graph API Email account types for D365 BC](../../../../../posts/wingate365-com/https-blog-wingate365-com-2026-06-graph-api-email-account-types-for-d365-html--562e57de51.md) (community post): "Admin configures one App Registration per home domain in Business Central, with automatic user matching"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
