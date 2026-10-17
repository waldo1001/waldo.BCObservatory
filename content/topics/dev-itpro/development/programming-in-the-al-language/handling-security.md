---
id: topic/dev-itpro/development/programming-in-the-al-language/handling-security
type: topic
title: Handling security
summary: "Security topics for AL developers building Business Central apps: security best practices, permission sets and entitlements, Azure Key Vault app secrets, Isolated Storage, and the SecretText data type. It answers questions on authentication, authorization, and protecting secrets and credentials in extensions."
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
  input_hash: 9d0c44a7c80afd1b957c284250469e52269896ef98915e228a576318a74f7e8a
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/api/dynamics_permissionset_get
    title: (automation API) Get permissionSet
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-changes-trace
    title: Analyzing Permission Changes Trace Telemetry
    date: "2021-04-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-dependency-cycle-trace
    title: Analyzing permission dependency cycle trace telemetry
    date: "2023-12-20"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    title: Analyzing Permission Error Trace Telemetry
    date: "2022-07-27"
    commit: null
    t: null
    quote: null
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-developers
    title: Business Central security for AL developers
    date: "2025-05-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-composing
    title: Composing Permission Sets from Other Permission Sets
    date: "2024-11-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlement-object
    title: Entitlement object
    date: "2025-03-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-entitlements-and-permissionsets-overview
    title: Entitlements and permission sets overview
    date: "2024-11-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-export-permission-sets
    title: Export Permission Sets to XML
    date: "2025-01-10"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-inherent-permissions
    title: Inherent Permissions
    date: "2023-02-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-isolated-storage
    title: Isolated Storage
    date: "2024-06-14"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-ext-object
    title: Permission Set Extension Object
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissionset-object
    title: Permission set object
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-permissions-on-database-objects
    title: Permissions on Objects
    date: "2025-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/resources/dynamics_permissionset
    title: permissionSet resource type
    date: "2024-05-31"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-secret-text
    title: Protecting sensitive values with the SecretText data type
    date: "2025-01-30"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/upgrade/upgrade-permissions
    title: Upgrading Permission Sets and Permissions
    date: "2026-01-08"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-developers
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-isolated-storage
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-secret-text
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
    - topic/dev-itpro/development/programming-in-the-al-language/handling-security/permission-sets-and-entitlements-overvie
    - topic/dev-itpro/development/programming-in-the-al-language/handling-security/using-azure-key-vault-for-app-secrets
  localizations: []
  videos:
    - video/tDcT_51ktqo
  posts:
    - post/kauffmann-nl/8332
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-37-inherent-permissions--d71a425273
  guidelines: []
  changes:
    - change/bcapps/10382
    - change/bcapps/10492
    - change/bcapps/11996
    - change/bcapps/12140
    - change/bcapps/9360
    - change/bcapps/9717
    - change/bcapps/9838
    - change/bcquality/102
    - change/bcquality/131
    - change/bcquality/92
learn_toc_path:
  - Development
  - Programming in the AL language
  - Handling security
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children:
  - topic/dev-itpro/development/programming-in-the-al-language/handling-security/permission-sets-and-entitlements-overvie
  - topic/dev-itpro/development/programming-in-the-al-language/handling-security/using-azure-key-vault-for-app-secrets
coverage:
  learn: 22
  code: 0
  video: 1
  blog: 2
  guideline: 0
bc_forms: []
member_hash: b2776cd836898a8a19e7effa719a058b48cb3a07b751f1ad520ac02281d58fdf
narrative: generated
---

# Handling security

> Security topics for AL developers building Business Central apps: security best practices, permission sets and entitlements, Azure Key Vault app secrets, Isolated Storage, and the SecretText data type. It answers questions on authentication, authorization, and protecting secrets and credentials in extensions.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Handling security · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section covers how AL developers secure Business Central apps. It starts with a general guide to security for AL developers, which describes a layered security model and covers authentication, authorization, auditing, encryption and secrets management. That page is the best place to start.

Two subtopics go deeper. The permission sets and entitlements pages explain how to define, compose, extend and export permission and entitlement objects, set object and inherent permissions, upgrade from legacy permissions and analyze permission telemetry. The Azure Key Vault pages explain how to set up app key vaults online and on-premises, read secrets from AL, and monitor retrieval with telemetry.

Two further pages cover handling sensitive values in code. Isolated Storage keeps keys and values private to an extension. The SecretText data type stops credentials from being exposed during debugging.

## Key points

- The security guide describes a layered model and covers user session and web service authentication, entitlements and permission sets.
- Permission sets and entitlements are defined as AL objects. They can be composed and extended, and they can be exported to XML.
- Inherent permissions and object permissions can be set, and legacy permissions can be upgraded.
- Permission telemetry can be analyzed.
- Azure Key Vault holds extension secrets, with setup for online and on-premises, reading secrets from AL, and telemetry on retrieval.
- Isolated Storage offers Set, Get, Contains, Delete and SetEncrypted methods, used with the DataScope option type, to keep data private to an extension.
- The SecretText data type limits assignments to debuggable types and works with HttpClient and SecretStrSubstNo. The Unwrap method and the NonDebuggable attribute are also part of this protection.

## Subtopics

- [Permission sets and entitlements overview](handling-security/permission-sets-and-entitlements-overvie.md) (14 pages)
- [Using Azure Key Vault for app secrets](handling-security/using-azure-key-vault-for-app-secrets.md) (5 pages)

## More Learn pages

- [Business Central security for AL developers](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/security/security-developers): Understand and improve the security of your Business Central apps written in AL.
- [Isolated Storage](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-isolated-storage): Isolated Storage is a data storage that provides isolation between extensions, so that you can keep keys/values in one extension from being accessed from other extensions.
- [Protecting sensitive values with the SecretText data type](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-secret-text): The SecretText data type is designed to protect sensitive values from being exposed when debugging.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10382 [Expense Agent] Fix administrative recall history access](../../../../changes/bcapps/10382.md) (code change): "Only the captured submitter or a user with Unlimited Expense Approval can recall"
- [#10492 [SOA] Restrict direct deletion of contact overrides](../../../../changes/bcapps/10492.md) (code change): "Inherent delete permission removed from table to prevent unauthorized direct deletion"
- [#11996 Restrict expense configuration maintenance to admins](../../../../changes/bcapps/11996.md) (code change): "Restrict configuration maintenance for expense management to administrators"
- [#12140 [Email - SMTP Connector] Fix OAuth Base64URL token parsing](../../../../changes/bcapps/12140.md) (code change): "Base64URL tokens are converted to standard Base64 format before decoding"
- [#9360 Harden SFTP Client module (security review phase 1)](../../../../changes/bcapps/9360.md) (code change): "MD5 host-key fingerprints are no longer supported; only SHA256 prefixes accepted"
- [#9717 Fix internal admin losing SUPER during customized plan provisioning](../../../../changes/bcapps/9717.md) (code change): "Internal tenant administrators no longer lose SUPER permission set when their customized plan"
- [#9838 Grant indirect read on Privacy Notice tables in Privacy Notice Impl.](../../../../changes/bcapps/9838.md) (code change): "The Privacy Notice Impl. codeunit now grants indirect read permission on Privacy Notice"
- [#102 Privacy DataClassification fixes + keep Label-scope findings at minor](../../../../changes/bcquality/102.md) (code change): "Fixed factual errors in the privacy data-classification article"
- [#131 Correct table-level data classification guidance](../../../../changes/bcquality/131.md) (code change): "Privacy guidance now states that a valid table-level DataClassification is inherited by fields"
- [#92 Correct security and privacy knowledge guidance](../../../../changes/bcquality/92.md) (code change): "Security and privacy knowledge articles were corrected to align with current Business Central APIs"
- [OAuth library for the Rest Client](../../../../posts/kauffmann-nl/8332.md) (community post): "certificate-based authentication with easy certificate generation and download via a dedicated page"
- [BC Friday Tips #37 Inherent Permissions](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-37-inherent-permissions--d71a425273.md) (community post): "Inherent Permissions in AL allow developers to grant temporary access"
- [What's New: Server and Database - A Faster Runtime (2023 release wave 2)](../../../../videos/tDcT_51ktqo.md) (video): "Error Info Permission Checking; Permissions Work with Security Groups"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
