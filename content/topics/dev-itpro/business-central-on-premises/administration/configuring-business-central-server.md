---
id: topic/dev-itpro/business-central-on-premises/administration/configuring-business-central-server
type: topic
title: Configuring Business Central server
summary: Configuring Business Central Server (on-premises) covers how to change server instance settings after installation and a full reference of those settings. It answers questions about how to apply configuration (Setup, PowerShell, config file) and what each setting controls, such as database, security, web services and debugging.
tier: official
language: en
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:22:56.619Z"
  flags: []
generated:
  at: "2026-10-25T17:55:54.196Z"
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
  videos:
    - video/KA1vHd1hITY
  posts:
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4709432878034654173--026fc9bd1f
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
  video: 1
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 562d262036f23f1c41c9fd17b1595b2f0acb2021cbd277e2e407bf0a38887b1e
narrative: generated
---

# Configuring Business Central server

> Configuring Business Central Server (on-premises) covers how to change server instance settings after installation and a full reference of those settings. It answers questions about how to apply configuration (Setup, PowerShell, config file) and what each setting controls, such as database, security, web services and debugging.

Path: [Business Central on-premises](../../business-central-on-premises.md) > [Administration](../administration.md) > Configuring Business Central server · tier official · system administration · narrative reviewed (checked by Opus)

## Overview

This section is for administrators of Business Central on-premises. It has two pages: a how-to page that explains the ways to change server configuration, and a reference page that lists the settings themselves.

Start with "Configure Business Central Server". It describes configuring an instance after installation using Setup, the Set-NAVServerConfiguration PowerShell cmdlet, or by editing the CustomSettings.config file. It also covers restarting the instance and managing settings that can be updated dynamically. It applies to 2022 release wave 2 (version 21) and later.

Then use "Business Central Server instance settings" to look up individual settings. It covers server topology, database connections, multitenant deployment, service defaults, sign-in security, certificates, encryption, Azure Key Vault and Microsoft Entra integration. It also covers file access, code execution, data sharing, HTTP client behavior, database writes, file operations, client endpoints, web services (SOAP, OData, API), API subscriptions, throttling, administration services, extension deployment and debugging. The page refers to specific versions, from version 20 through 27.4.

## Key points

- Three ways to configure an instance after installation: Setup, the Set-NAVServerConfiguration cmdlet, or editing CustomSettings.config.
- Configuration covers restarting the server instance and managing dynamically updatable settings.
- The how-to page applies to 2022 release wave 2 (version 21) and later.
- The settings reference covers topology, database configuration, multitenant deployment, and service defaults.
- Security-related settings include ClientServicesCredentialType, security certificates, encryption, Azure Key Vault integration and Microsoft Entra integration.
- Settings also control file access, code execution, data sharing, HTTP client behavior, database writes and file operations.
- Further settings cover client endpoints, web services (SOAP, OData, API), API subscriptions, throttling, administration services, extension deployment and debugging.
- ClientBuildRestriction is among the documented settings, and the reference mentions versions from 20 through 27.4.

## Learn pages

- [Business Central Server instance settings](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/server-instance-settings): Configure Business Central Server instance settings for security, extensions, APIs, and performance. Find keys fast and apply changes with PowerShell.
  - Configure server instance topology, database connection, service defaults, sessions, browsing behavior, security, certificates, OAuth, file uploads, data sharing, HTTP calls, extension deployment…
  - ClientBuildRestriction controls whether clients with different build versions can connect: AlwaysConnect, WarnClient, or DoNotAllow. Default is WarnClient.
  - Multitenant setting enables the server instance to work in multitenant environments where tenant databases mount on it.
  - Session Event table retains interactive sessions for 90 days by default and non-interactive sessions for 5 days, with purges occurring at least once daily.
  - ClientServicesCredentialType sets authentication to Windows, Username, NavUserPassword, AccessControlService, or None. Default is Windows.
  - File upload restrictions: ClientServicesProhibitedFileTypes defaults to blocking executable, script, and system files; ClientServicesAllowedFileTypes can whitelist specific types.
  - OData requests default to 20,000 entities per page with 8-minute timeout; API and OData throttling limits per tenant and user prevent 429 errors.
  - Extension publishing requires DeveloperServicesEnabled; extensions target OnPrem or Cloud levels; RequiredExtensions cannot be uninstalled via UI.
- [Configure Business Central Server](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/configure-server-instance): Configure and modify settings in the Setup or Installed Business Central Server using PowerShell Cmdlets.
  - Status: Available from Business Central 2022 release wave 2 (version 21) and later
  - Configuration is stored in CustomSettings.config file located at the service directory
  - Step: Use Set-NAVServerConfiguration cmdlet to change settings with ServerInstance, KeyName, and KeyValue parameters
  - Step: Restart the server instance using Services console or Restart-NAVServerInstance cmdlet for changes to take effect
  - Dynamically updatable settings can use ApplyTo parameter with options: ConfigFile, Memory, or All
  - Changes applied to Memory take effect immediately without restart but revert on server restart
  - Limit: Direct editing of CustomSettings.config is not recommended due to risk of typing errors

Key facts from Microsoft Learn (CC BY 4.0), in our own words (D106); open the page for the full text.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [How to Install Microsoft Dynamics 365 Business Central 29 On-Premises](../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-4709432878034654173--026fc9bd1f.md) (community post): "configuring SQL Server and server instance, setting service ports"
- [How to Install Business Central 29 On-Premises \| Full Setup](../../../../videos/KA1vHd1hITY.md) (video): "Business Central 29 On-Premises Installation; Service Port Configuration; SQL Server instance configuration"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
