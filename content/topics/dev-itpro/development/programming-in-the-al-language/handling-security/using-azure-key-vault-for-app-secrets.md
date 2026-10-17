---
id: topic/dev-itpro/development/programming-in-the-al-language/handling-security/using-azure-key-vault-for-app-secrets
type: topic
title: Using Azure Key Vault for app secrets
summary: "Azure Key Vault for Business Central extension secrets: how to set up app key vaults for online and on-premises, how to read secrets from AL code, and how to monitor retrieval with telemetry. It answers setup, permission, coding and troubleshooting questions."
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-17T01:13:14.128Z"
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
    - post/aardvarklabs-blog/1609
    - post/demiliani-com/11796
  guidelines: []
  changes:
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

Path: [Development](../../../development.md) > [Programming in the AL language](../../programming-in-the-al-language.md) > [Handling security](../handling-security.md) > Using Azure Key Vault for app secrets · tier official · system development · narrative **unreviewed** (model text not yet checked)

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
- [Azure Key Vaults with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview): Learn how Business Central extensions use Azure Key Vault to securely retrieve secrets in online and on-premises environments.
- [Set up app key vaults for Business Central online](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/setup-app-key-vault): Learn how to set up Azure key vaults for Business Central online extensions. Follow step-by-step instructions to securely manage secrets for your Marketplace apps.
- [Setting up App Key Vaults for Business Central on-premises](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/setup-app-key-vault-onprem): Describes how to set up App Key Vault with Business Central on-premises.
- [Use Key Vault Secrets in Business Central Extensions](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault): Learn how to configure Azure Key Vault in an extension, retrieve secrets securely with SecretText, and monitor key vault operations.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#8999 Migrate Recommended Apps & Connectivity Apps to Official Marketplace Catalog API](../../../../../changes/bcapps/8999.md) (code change): "Integrated Azure Key Vault for secure API key management"
- [Integrating AI in Business Central: A Step-by-Step Guide](../../../../../posts/aardvarklabs-blog/1609.md) (community post): "Azure OpenAI resources and credentials must be securely stored in Isolated Storage"
- [Dynamics 365 Business Central: using secrets in JsonObjects.](../../../../../posts/demiliani-com/11796.md) (community post): "WriteWithSecretsTo method in runtime 15.1 allows embedding secrets into JSON using placeholders"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
