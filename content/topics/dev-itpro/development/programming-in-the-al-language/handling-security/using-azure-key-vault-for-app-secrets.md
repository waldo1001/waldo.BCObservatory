---
id: topic/dev-itpro/development/programming-in-the-al-language/handling-security/using-azure-key-vault-for-app-secrets
type: topic
title: Using Azure Key Vault for app secrets
summary: "Azure Key Vault use for app secrets in Business Central extensions: how to set up app key vaults for online and on-premises deployments, retrieve secrets in AL code, and monitor secret access with telemetry. It answers setup, permission, coding, and diagnostics questions."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:25:02.513Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: b6601a9f0e5008512b01c7a98602e79a22569ddc46f6edbe29225cc72715b2d5
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
    date: "2021-04-01"
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
    title: Using Key Vault Secrets in Business Central Extensions
    date: "2024-08-20"
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
  posts: []
  guidelines: []
  changes:
    - change/bcapps/8999
    - change/bcquality/92
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
  blog: 0
  guideline: 0
bc_forms: []
member_hash: ded668fce5698d554014a03cb0248739e1b8cce7882db2d6f6f80adf71b920e1
narrative: generated
---

# Using Azure Key Vault for app secrets

> Azure Key Vault use for app secrets in Business Central extensions: how to set up app key vaults for online and on-premises deployments, retrieve secrets in AL code, and monitor secret access with telemetry. It answers setup, permission, coding, and diagnostics questions.

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Handling security](../handling-security.md) > Using Azure Key Vault for app secrets · tier official · system development · narrative reviewed by Opus

## Overview

This section explains how extensions that call external web services can keep secrets in Azure Key Vault instead of in code. It starts with a conceptual page on app key vaults, which covers multi-key vault support, access control, publisher validation, and telemetry monitoring.

Setup depends on the deployment. For Business Central online, marketplace apps get access by provisioning the ISV key vault reader application and granting it secret permissions. For on-premises, you register the service in Microsoft Entra ID, use certificate authentication, and grant secret permissions. Container-based deployment is also covered.

The developer page shows how to configure key vault URLs in the app.json manifest and retrieve secrets with the App Key Vault Secret Provider codeunit. The telemetry page covers how to diagnose failures in initialization and secret retrieval. Start with the overview page, then follow the setup page for your deployment, then the coding page.

## Key points

- App key vaults store secrets for extensions that call external web services, and multiple key vaults are supported.
- Online: provision the ISV key vault reader application (a Microsoft Entra service principal) and grant it secret permissions on the Azure key vault.
- Online setup references AllowedBusinessCentralAppIds to control which apps can access the secrets.
- On-premises: register in Microsoft Entra ID, use certificate authentication, and grant secret permissions; container-based deployment is covered.
- In AL, put key vault URLs in app.json, then call TryInitializeFromCurrentApp and GetSecret on the App Key Vault Secret Provider codeunit.
- Secrets are handled with the SecretText data type; the coding page lists runtime 6.0 and version 17.0.
- The coding page covers multi-vault failover and security considerations, and publisher validation applies to access.
- Telemetry traces App Key Vault initialization and secret retrieval, with success and failure tracking for diagnostics.

## Learn pages

- [App Key Vault Secret Trace Telemetry \| Microsoft Docs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-extension-key-vault-trace): Learn about app key vault secret trace telemetry in Business Central
- [Azure Key Vaults with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview): Provides an overview of Azure key vaults with Business Central extensions.
- [Set up app key vaults for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/setup-app-key-vault): Learn how to set up Azure key vaults for Business Central online extensions. Follow step-by-step instructions to securely manage secrets for your Marketplace apps.
- [Setting up App Key Vaults for Business Central on-premises](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/setup-app-key-vault-onprem): Describes how to set up App Key Vault with Business Central on-premises.
- [Using Key Vault Secrets in Business Central Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault): Describes how to use an Azure Key vault with Business Central extensions.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#8999 Migrate Recommended Apps & Connectivity Apps to Official Marketplace Catalog API](../../../../../changes/bcapps/8999.md) (code change): "Integrated Azure Key Vault for secure API key management using SecretText"
- [#92 Correct security and privacy knowledge guidance](../../../../../changes/bcquality/92.md) (code change): "SecretText HTTP guidance updated to use HttpRequestMessage.SetSecretRequestUri with HttpClient.Send"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
