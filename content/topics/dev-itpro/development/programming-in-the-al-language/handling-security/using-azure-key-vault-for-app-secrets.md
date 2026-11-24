---
id: topic/dev-itpro/development/programming-in-the-al-language/handling-security/using-azure-key-vault-for-app-secrets
type: topic
title: Using Azure Key Vault for app secrets
summary: "Azure Key Vault for app secrets in Business Central extensions: how to set up app key vaults for online and on-premises, read secrets from AL code, and monitor retrieval with telemetry. It answers setup, permission, app.json, and troubleshooting questions."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-24T01:05:28.728Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 25847120f033845e9ec9a8cd986fbcba77a4c2c86320e1bdb13da88c7e0cd2a7
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace
    title: Analyzing App Key Vault Secret Trace Telemetry
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
  guidelines: []
  changes:
    - change/bcapps/12557
    - change/bcapps/13326
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
  blog: 1
  guideline: 0
bc_forms: []
member_hash: ded668fce5698d554014a03cb0248739e1b8cce7882db2d6f6f80adf71b920e1
narrative: generated
---

# Using Azure Key Vault for app secrets

> Azure Key Vault for app secrets in Business Central extensions: how to set up app key vaults for online and on-premises, read secrets from AL code, and monitor retrieval with telemetry. It answers setup, permission, app.json, and troubleshooting questions.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Handling security](../handling-security.md) > Using Azure Key Vault for app secrets · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

App key vaults give extensions a central, secure place to keep secrets they need when making authenticated web service calls to external services. The section covers both online and on-premises deployments, the AL code that reads secrets, and the telemetry that shows whether retrieval worked.

Start with the overview page, Azure Key Vaults with Business Central. Then follow the setup page for your deployment. For online, this means provisioning the Dynamics 365 Business Central ISV key vault Reader application and granting it permissions. For on-premises, it means setting up the key vault, registering a Microsoft Entra application, granting permissions, and configuring the server instance with a certificate and client credentials.

Once the vault is ready, the page on using key vault secrets in extensions shows how to list key vault URLs in app.json and retrieve secrets with the App Key Vault Secret Provider codeunit. The telemetry page helps you analyze failures afterward.

## Key points

- Extensions retrieve secrets from Azure Key Vaults for authenticated calls to external services, in online and on-premises deployments.
- Online setup supports Marketplace apps by provisioning the Dynamics 365 Business Central ISV key vault Reader application and granting permissions. It uses role-based access control and an AllowedBusinessCentralAppIds secret.
- Online setup supports multiple key vaults and the Embed App program.
- On-premises setup needs an Azure Key Vault, a Microsoft Entra app registration, permissions (RBAC or access policy), and server configuration with a certificate thumbprint and client credentials.
- On-premises options include self-signed certificates, private key access control, and a container-based configuration script.
- In AL, configure keyVaultUrls in app.json, then call TryInitializeFromCurrentApp and GetSecret on the App Key Vault Secret Provider codeunit. Secrets are returned as the SecretText type.
- Publisher validation applies to secrets, and extensions can use multiple key vaults.
- App key vault telemetry in Application Insights records initialization and retrieval successes and failures, including failure reasons, to help with monitoring and troubleshooting.

## Learn pages

- [Analyzing App Key Vault Secret Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace): Analyze app key vault telemetry in Business Central to troubleshoot extension initialization failures and secret retrieval errors in Azure Key Vault.
  - App key vault telemetry is sent to extension's Application Insights resource, not environment's
  - RT0014 successful initialization, RT0015 initialization failure, RT0016 retrieval success, RT0017 retrieval failure
  - Initialization stage verifies app.json configuration and Azure Key Vault Client Identity settings
  - Retrieval stage occurs after successful initialization to get secrets from specified key vault
  - Failure reasons include missing extension specification, incorrect client ID, missing permissions, or invalid secret names
  - Telemetry captures key vault URI, secret name, extension details, and stack trace for troubleshooting
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

- [#12557 Implement first-party app authentication for Microsoft Fabric Export](../../../../../changes/bcapps/12557.md) (code change): "Implement first-party app authentication for Microsoft Fabric Export"
- [#13326 [Fabric] Clean up test events, app naming, authentication and telemetry](../../../../../changes/bcapps/13326.md) (code change): "removed the unused Key Vault first-party client-ID lookup"
- [#8999 Migrate Recommended Apps & Connectivity Apps to Official Marketplace Catalog API](../../../../../changes/bcapps/8999.md) (code change): "Integrated Azure Key Vault for secure API key management"
- [Securing Sensitive Data in Business Central AL using SecretText](../../../../../posts/aardvarklabs-blog/2640.md) (community post): "SecretText is a data type in Business Central AL that protects sensitive values like API keys"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
