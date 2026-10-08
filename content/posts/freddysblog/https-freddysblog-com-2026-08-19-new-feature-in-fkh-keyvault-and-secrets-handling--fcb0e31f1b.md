---
id: post/freddysblog/https-freddysblog-com-2026-08-19-new-feature-in-fkh-keyvault-and-secrets-handling--fcb0e31f1b
type: post
title: "New feature in Fkh: A KeyVault and secrets handling"
summary: Fkh now deploys an Azure Key Vault in your own subscription to securely store and manage secrets like admin passwords and API tokens. You can manage secrets through VS Code or CLI commands, reference them in parameters using @secretName@ syntax, and prepare for future integration with AL-Go repositories and container access.
tier: community
language: en
tags:
  - security
  - key vault
  - secrets management
  - fkh
  - azure
  - configuration
  - authentication
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:47:35.750Z"
  flags: []
generated:
  at: "2026-10-07T22:42:12.892Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 87401c959b7874fd173b3cd9691dc33e0984cdc6e52e9845f890a2c9fd69d2bb
evidence:
  - kind: blog
    url: https://freddysblog.com/2026/08/19/new-feature-in-fkh-keyvault-and-secrets-handling/
    title: "New feature in Fkh: A KeyVault and secrets handling"
    date: "2026-08-19"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://freddysblog.com/2026/08/19/new-feature-in-fkh-keyvault-and-secrets-handling/
    title: "New feature in Fkh: A KeyVault and secrets handling"
    date: "2026-08-19"
    commit: null
    t: null
    quote: Anywhere a parameter value is written as @secretName@, Fkh substitutes it with the corresponding secret from the Key Vault before the operation runs.
  - kind: blog
    url: https://freddysblog.com/2026/08/19/new-feature-in-fkh-keyvault-and-secrets-handling/
    title: "New feature in Fkh: A KeyVault and secrets handling"
    date: "2026-08-19"
    commit: null
    t: null
    quote: Having a proper, trusted Key Vault in every Fkh deployment is the foundation for a couple of things I have on my mind.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://freddysblog.com/2026/08/19/new-feature-in-fkh-keyvault-and-secrets-handling
source_id: freddysblog
source_name: Freddys blog
url: https://freddysblog.com/2026/08/19/new-feature-in-fkh-keyvault-and-secrets-handling/
published_at: "2026-08-19T07:00:00.000Z"
author: Freddy Kristiansen
full_text: false
words: 1216
quotes:
  - text: Anywhere a parameter value is written as @secretName@, Fkh substitutes it with the corresponding secret from the Key Vault before the operation runs.
    why_it_matters: Shows how secrets are referenced in practice without exposing actual values in configurations, enabling safe parameter handling across operations
  - text: Having a proper, trusted Key Vault in every Fkh deployment is the foundation for a couple of things I have on my mind.
    why_it_matters: Indicates this is foundational infrastructure enabling future features like AL-Go integration and container secret access
code_objects_mentioned: []
systems:
  - development
  - integration
  - administration
versions_mentioned:
  - latest preview
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Freddys blog
  favicon: https://freddysblog.com/assets/images/site/favicon.png
  probed_at: "2026-10-07T11:50:13.717Z"
---

# New feature in Fkh: A KeyVault and secrets handling

[Read the post](https://freddysblog.com/2026/08/19/new-feature-in-fkh-keyvault-and-secrets-handling/) · Freddys blog (Freddy Kristiansen) · 2026-08-19 · 1216 words · tier community · reviewed (checked by Opus)

> Fkh now deploys an Azure Key Vault in your own subscription to securely store and manage secrets like admin passwords and API tokens. You can manage secrets through VS Code or CLI commands, reference them in parameters using @secretName@ syntax, and prepare for future integration with AL-Go repositories and container access.

## Key points

- Fkh deploys a dedicated Azure Key Vault in your subscription with Standard or Premium SKU options, controlled by a single configuration setting
- Manage secrets via VS Code or CLI using list, set, and get operations with RBAC-based access tied to GitHub identity and team membership
- Secrets can be personal or shared organization-wide, with personal secrets taking priority when looked up
- Reference secrets in operation parameters using @secretName@ syntax instead of typing values repeatedly
- Foundation for planned features like AL-Go integration and container KeyVault access

## Quotes

- "Anywhere a parameter value is written as @secretName@, Fkh substitutes it with the corresponding secret from the Key Vault before the operation runs." (Shows how secrets are referenced in practice without exposing actual values in configurations, enabling safe parameter handling across operations)
- "Having a proper, trusted Key Vault in every Fkh deployment is the foundation for a couple of things I have on my mind." (Indicates this is foundational infrastructure enabling future features like AL-Go integration and container secret access)

## Context

- Features: Azure Key Vault deployment, Secret management operations, VS Code integration, CLI support, Parameter secret references, Personal and shared secrets, RBAC-based access control, HSM-backed Premium option
- Versions: latest preview

Source: Freddys blog, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
