---
id: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/security
type: topic
title: Security
summary: "Security best practices for Business Central development: the layered security model (authentication, authorization, encryption, auditing, change logging) and how to use Azure Key Vault to store secrets for extensions that call external web services. Answers questions on protecting online and on-premises installations and handling secrets."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:23:29.082Z"
  flags: []
generated:
  at: "2026-10-08T06:31:25.130Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 837f23dc32e0a9414e576d2a3ee8054fbac9eb4fe1acfa572671655b932ca054
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview
    title: Azure Key Vaults with Business Central
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-application
    title: Layered security model in Business Central
    date: "2025-11-19"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-application
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
  localizations: []
  videos: []
  posts:
    - post/demiliani-com/13588
  guidelines: []
  changes:
    - change/bcapps/10346
    - change/bcapps/8556
    - change/bcquality/157
    - change/bcquality/187
    - change/bcquality/49
    - change/bcquality/99
learn_toc_path:
  - Development
  - Rules, guidelines, and best practices
  - Best practices
  - Security
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices
children: []
coverage:
  learn: 2
  code: 0
  video: 0
  blog: 1
  guideline: 0
bc_forms: []
member_hash: 6c89dc26efa30a17537ece60767fa3ce2a7e9049c191393d9ad1dd5a2b8afdde
narrative: generated
---

# Security

> Security best practices for Business Central development: the layered security model (authentication, authorization, encryption, auditing, change logging) and how to use Azure Key Vault to store secrets for extensions that call external web services. Answers questions on protecting online and on-premises installations and handling secrets.

Path: [Development](../../../development.md) > [Rules, guidelines, and best practices](../../rules-guidelines-and-best-practices.md) > [Best practices](../best-practices.md) > Security · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section has two pages that cover security from complementary angles. The layered security model page describes the overall approach: how users sign in, how permissions are administered, how data is encrypted, and how auditing and change logs help monitor sensitive fields. It also touches on secure development practices and applies to online and on-premises deployments.

The Azure Key Vault page is a focused, practical guide for extension developers. It explains how to keep secrets out of code when an extension calls external web services, how to set up key vaults, and how to configure the Business Central service to access them in online and on-premises setups.

Start with the layered security model page for the big picture, then move to the Azure Key Vault page when you need to handle secrets in an extension.

## Key points

- The layered security model covers authentication, authorization, data encryption, auditing, and change logging.
- Authentication topics include user sign-in methods such as multifactor authentication.
- Permission administration and sensitive field monitoring through the change log and audit trails are part of the model.
- Azure Key Vault stores secrets for extensions that call external web services.
- Key vault setup covers an app key vault, support for multiple key vaults, and access control.
- Key vault configuration differs between online and on-premises deployments, as the Business Central service must be set up to access the vault.
- Telemetry monitoring and publisher validation are listed as features of the key vault integration.

## Learn pages

- [Azure Key Vaults with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview): Provides an overview of Azure key vaults with Business Central extensions.
- [Layered security model in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-application): Helps you understand and improve the security of your Business Central application regardless of where it's hosted.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10346 Fix activity log indirect permissions](../../../../../changes/bcapps/10346.md) (code change): "All activity writes remain code-mediated through Expense Activity Log Mgt"
- [#8556 [Quality Management] Enforce rules and restrictions with indirect and implicit permissions](../../../../../changes/bcapps/8556.md) (code change): "Quality Management uses InherentPermissions so that, when"
- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../../changes/bcquality/157.md) (code change): "Security, error handling, UI, upgrade, web services and AppSource guidance on permission sets"
- [#187 Code reviewer skill for recognizing and validating unauthenticated responses](../../../../../changes/bcquality/187.md) (code change): "Helps enforce security best practices in extension code"
- [#49 Promote security knowledge from community to Microsoft layer](../../../../../changes/bcquality/49.md) (code change): "Best practice guidance improved for temporary table data protection"
- [#99 Add lifecycle error and privacy knowledge](../../../../../changes/bcquality/99.md) (code change): "ErrorInfo privacy exposure, and FeatureTelemetry logging, plus related review skills"
- [Dynamics 365 Business Central: new strict URI validation in AL Http Client](../../../../../posts/demiliani-com/13588.md) (community post): "Business Central v28 introduces stricter URI validation in AL HttpClient to prevent Server-Side Request Forgery"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
