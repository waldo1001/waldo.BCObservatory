---
id: topic/dev-itpro/business-central-on-premises/administration/configuring-business-central-server
type: topic
title: Configuring Business Central server
summary: Configuring Business Central Server (on-premises) covers how to change server instance settings after installation and a full reference of those settings. It answers questions about how to apply configuration (Setup, PowerShell, config file) and what each setting controls, such as database, security, web services and debugging.
tier: official
language: en
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T14:24:07.451Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: bfd5d13784868da86f87d30cc09d41191bdddf1d8fde5ebe6cc6e7d7207cfd83
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-instance-settings
    title: Business Central Server instance settings
    date: "2026-09-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-server-instance
    title: Configure Business Central Server
    date: "2026-08-04"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-instance-settings
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-server-instance
  objects: []
  features: []
  topics:
    - topic/dev-itpro/business-central-on-premises/administration
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Business Central on-premises
  - Administration
  - Configuring Business Central server
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/business-central-on-premises/administration
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 562d262036f23f1c41c9fd17b1595b2f0acb2021cbd277e2e407bf0a38887b1e
narrative: generated
---

# Configuring Business Central server

> Configuring Business Central Server (on-premises) covers how to change server instance settings after installation and a full reference of those settings. It answers questions about how to apply configuration (Setup, PowerShell, config file) and what each setting controls, such as database, security, web services and debugging.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Administration](../administration.md) > Configuring Business Central server · tier official · system administration · **unreviewed** (machine-generated narrative)

## Overview

This section is for administrators of Business Central on-premises. It has two pages: a how-to page that explains the ways to change server configuration, and a reference page that lists the settings themselves.

Start with "Configure Business Central Server". It describes configuring an instance after installation using Setup, the Set-NAVServerConfiguration PowerShell cmdlet, or by editing the CustomSettings.config file. It also covers restarting the instance and which settings can be updated dynamically without a restart. It applies to 2022 release wave 2 (version 21) and later.

Then use "Business Central Server instance settings" to look up individual settings. It groups them by area: server topology, database connections, service defaults, sign-in security, certificates, encryption, Microsoft Entra integration, client endpoints, web services (SOAP, OData, API), throttling, administration services, extension deployment and debugging. Individual settings are tagged with the version they were introduced or changed in.

## Key points

- Three ways to configure an instance after installation: Setup, the Set-NAVServerConfiguration cmdlet, or editing CustomSettings.config.
- Some settings are dynamically updatable; others need a server instance restart to take effect.
- The how-to page applies to 2022 release wave 2 (version 21) and later.
- The settings reference covers topology, database configuration, multitenant deployment, and service defaults.
- Security-related settings include ClientServicesCredentialType, security certificates, encryption, Azure Key Vault integration and Microsoft Entra integration.
- Settings also cover web services (SOAP, OData, API), API subscriptions, throttling, administration services, extension deployment and debugging.
- ClientBuildRestriction is among the documented settings, and the reference notes version-specific changes from version 20 up to 27.4.

## Learn pages

- [Business Central Server instance settings](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-instance-settings): Configure Business Central Server instance settings for security, extensions, APIs, and performance. Find keys fast and apply changes with PowerShell.
- [Configure Business Central Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-server-instance): Configure and modify settings in the Setup or Installed Business Central Server using PowerShell Cmdlets.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
