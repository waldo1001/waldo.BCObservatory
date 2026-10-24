---
id: topic/dev-itpro/development/rules-guidelines-and-best-practices/best-practices/security
type: topic
title: Security
summary: "Security best practices for Business Central development: the layered security model (authentication, authorization, encryption, auditing, change logging) and the use of Azure Key Vaults to store extension secrets. Answers questions about protecting installations and handling secrets in online and on-premises deployments."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-24T00:57:10.067Z"
  flags: []
generated:
  at: "2026-10-24T00:57:10.969Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: a084af5db39daa956fbc9ffad105a0a0fef39fb7285f6e0f2218755c630ae72d
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview
    title: Azure Key Vaults with Business Central
    date: "2026-10-08"
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
  posts: []
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
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 6c89dc26efa30a17537ece60767fa3ce2a7e9049c191393d9ad1dd5a2b8afdde
narrative: generated
---

# Security

> Security best practices for Business Central development: the layered security model (authentication, authorization, encryption, auditing, change logging) and the use of Azure Key Vaults to store extension secrets. Answers questions about protecting installations and handling secrets in online and on-premises deployments.

Path: [Development](../../../development.md) > [Rules, guidelines, and best practices](../../rules-guidelines-and-best-practices.md) > [Best practices](../best-practices.md) > Security · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section has two pages. The first describes the layered security model in Business Central. It covers how users sign in, how permissions are administered, how data is encrypted, and how auditing and change logging help monitor sensitive fields. It also touches on secure development practices and applies to both online and on-premises deployments.

The second page is about Azure Key Vaults. Extensions that call external services with authentication need a safe place for their secrets. A key vault gives centralized, secure storage, and extensions can read secrets from it. The page covers app key vault setup for online and on-premises deployments, secret retrieval, and telemetry for security monitoring.

Start with the layered security model page for the overall picture. Then read the Azure Key Vaults page when you build or maintain an extension that calls external web services and needs credentials.

## Key points

- Security is layered: authentication, authorization, data encryption, auditing, and change logging.
- Authentication includes multifactor authentication for user sign-in.
- User permissions are administered as part of the authorization layer.
- The change log and audit trails support monitoring of sensitive fields.
- Azure Key Vaults give extensions centralized, secure storage for secrets used in authenticated web service calls.
- App key vault setup is described separately for online and on-premises deployments.
- Extensions can retrieve secrets from the key vault in both online and on-premises deployments.
- App key vault telemetry supports security monitoring.

## Learn pages

- [Azure Key Vaults with Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-key-vault-overview): Learn how Business Central extensions use Azure Key Vault to securely retrieve secrets in online and on-premises environments.
- [Layered security model in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-application): Helps you understand and improve the security of your Business Central application regardless of where it's hosted.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10346 Fix activity log indirect permissions](../../../../../changes/bcapps/10346.md) (code change): "All activity writes remain code-mediated through Expense Activity Log Mgt"
- [#8556 [Quality Management] Enforce rules and restrictions with indirect and implicit permissions](../../../../../changes/bcapps/8556.md) (code change): "Quality Management uses InherentPermissions so users without QM permissions are not blocked"
- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../../changes/bcquality/157.md) (code change): "Security, error handling, UI, upgrade, web services and AppSource guidance on permission sets"
- [#187 Code reviewer skill for recognizing and validating unauthenticated responses](../../../../../changes/bcquality/187.md) (code change): "Helps enforce security best practices in extension code"
- [#49 Promote security knowledge from community to Microsoft layer](../../../../../changes/bcquality/49.md) (code change): "Best practice guidance improved for temporary table data protection"
- [#99 Add lifecycle error and privacy knowledge](../../../../../changes/bcquality/99.md) (code change): "ErrorInfo privacy exposure, and FeatureTelemetry logging, plus related review skills"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
