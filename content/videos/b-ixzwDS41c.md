---
id: video/b-ixzwDS41c
type: video
title: "What's New: Customer-Managed Encryption Key (2025 release wave 1)"
summary: "Customer-managed encryption key (CMK) for Business Central environment databases, using a key in the customer's own Azure Key Vault. The video demos the setup from Key Vault through Enterprise Policy to Power Platform admin center and lists the constraints: managed environment, purge protection, matching region, and copy/restore behavior."
tier: official
language: en
tags:
  - customer-managed encryption
  - key vault
  - azure setup
  - data governance
  - privacy
  - security
  - managed environments
  - enterprise policy
  - power platform
  - encryption keys
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:41:00.178Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 52703d67275a313d4aef25983de83fa34eec5f8697282543ed30465dd41ac048
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=b-ixzwDS41c&t=5s
    title: "What's New: Customer-Managed Encryption Key (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 5
    quote: this is a new functionality that uh delivers on a need that we frequently hear from customers with very Advanced uh data governance uh
  - kind: video
    url: https://www.youtube.com/watch?v=b-ixzwDS41c&t=46s
    title: "What's New: Customer-Managed Encryption Key (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 46
    quote: the perge protection this must be enabled on key vaults that contain a key um that will be used to encrypt your environment database
  - kind: video
    url: https://www.youtube.com/watch?v=b-ixzwDS41c&t=167s
    title: "What's New: Customer-Managed Encryption Key (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 167
    quote: the loc must match the location of your power platform and your business central environment
  - kind: video
    url: https://www.youtube.com/watch?v=b-ixzwDS41c&t=337s
    title: "What's New: Customer-Managed Encryption Key (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 337
    quote: cmk only works on managed environments
  - kind: video
    url: https://www.youtube.com/watch?v=b-ixzwDS41c&t=467s
    title: "What's New: Customer-Managed Encryption Key (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 467
    quote: if you unlink your environment after applying cmk your business and for environment will automatically revert to a Microsoft manage encryption key
  - kind: video
    url: https://www.youtube.com/watch?v=b-ixzwDS41c&t=467s
    title: "What's New: Customer-Managed Encryption Key (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 467
    quote: if you copy or restore your environment um while it is encrypted with cmk you create a new environment that will not by default
  - kind: video
    url: https://www.youtube.com/watch?v=b-ixzwDS41c&t=508s
    title: "What's New: Customer-Managed Encryption Key (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 508
    quote: and that is required for ck to work to use a managed environment this comes with
  - kind: video
    url: https://www.youtube.com/watch?v=b-ixzwDS41c&t=528s
    title: "What's New: Customer-Managed Encryption Key (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 528
    quote: in the real word is important to uh separate the duties in setting this up between different users you'd use a key administrator for
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: b-ixzwDS41c
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=b-ixzwDS41c
published_at: "2025-04-01T15:00:54.000Z"
duration_s: 564
captions: full
audience:
  - administrator
  - functional consultant
  - decision maker
chapters:
  - t: 0
    title: Introduction to Customer-Managed Encryption Key
  - t: 25
    title: Setting Up Key Vault in Azure Portal
  - t: 66
    title: Creating and Configuring Encryption Keys
  - t: 106
    title: Enabling Power Platform Resource Provider
  - t: 147
    title: Deploying Enterprise Policy Resource
  - t: 208
    title: Configuring Access Control and Role Assignments
  - t: 277
    title: Setting Up CMK in Power Platform Admin Center
  - t: 337
    title: Linking Business Central to Power Platform
  - t: 413
    title: Important Considerations and Best Practices
features:
  - name: Customer-Managed Encryption Key (CMK)
    status: unclear
    t: 5
    verified: false
    status_source: video
  - name: Purge Protection on Key Vaults
    status: unclear
    t: 46
    verified: false
    status_source: video
  - name: Managed Environments Requirement
    status: unclear
    t: 508
    verified: false
    status_source: video
  - name: Enterprise Policy Resource
    status: unclear
    t: 147
    verified: false
    status_source: video
  - name: Power Platform Resource Provider Registration
    status: unclear
    t: 106
    verified: false
    status_source: video
  - name: CMK Environment Unlinking Behavior
    status: unclear
    t: 467
    verified: false
    status_source: video
  - name: CMK with Environment Copy and Restore
    status: unclear
    t: 467
    verified: false
    status_source: video
  - name: CMK Export and Storage Account Encryption
    status: unclear
    t: 488
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 5
    text: this is a new functionality that uh delivers on a need that we frequently hear from customers with very Advanced uh data governance uh
    check: exact
  - t: 46
    text: the perge protection this must be enabled on key vaults that contain a key um that will be used to encrypt your environment database
    check: exact
  - t: 167
    text: the loc must match the location of your power platform and your business central environment
    check: fuzzy
  - t: 337
    text: cmk only works on managed environments
    check: exact
  - t: 467
    text: if you unlink your environment after applying cmk your business and for environment will automatically revert to a Microsoft manage encryption key
    check: exact
  - t: 467
    text: if you copy or restore your environment um while it is encrypted with cmk you create a new environment that will not by default
    check: snapped
  - t: 508
    text: and that is required for ck to work to use a managed environment this comes with
    check: fuzzy
  - t: 528
    text: in the real word is important to uh separate the duties in setting this up between different users you'd use a key administrator for
    check: exact
---

# What's New: Customer-Managed Encryption Key (2025 release wave 1)

> Customer-managed encryption key (CMK) for Business Central environment databases, using a key in the customer's own Azure Key Vault. The video demos the setup from Key Vault through Enterprise Policy to Power Platform admin center and lists the constraints: managed environment, purge protection, matching region, and copy/restore behavior.

[Watch on YouTube](https://www.youtube.com/watch?v=b-ixzwDS41c) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 9:24 · tier official · **unreviewed** (machine-generated)

## Overview

The video, from the 2025 release wave 1 What's New series, presents CMK for Business Central. It targets customers with advanced data governance needs who want to encrypt the environment database with their own key instead of a Microsoft-managed key.

It walks through the setup: create a Key Vault and key in the Azure portal, enable the Power Platform resource provider, deploy an Enterprise Policy resource, assign access roles, set up CMK in the Power Platform admin center, and link the Business Central environment. It closes with considerations on licensing, unlinking, copy, restore, export and separation of duties.

## Key points

- CMK works only on managed Power Platform environments linked to the Business Central environment. Managed environments need Microsoft 365 and Power Platform licensing beyond the Business Central license.
- Purge protection must be enabled on any Key Vault that holds a key used to encrypt a Business Central environment database.
- The microsoft.powerplatform resource provider is not enabled by default on an Azure subscription. Enable it before creating the Enterprise Policy resource.
- The Enterprise Policy location must match the region of the Power Platform and Business Central environments. The Key ID must match the Key Vault resource ID.
- Applying CMK starts encrypting the database right away, which may take time. Do it when the environment can be down.
- Unlinking the environment reverts it to a Microsoft-managed key. A copy or restore creates a new environment that is not encrypted with CMK by default, so it needs a new link and CMK applied again.
- An exported backup in the storage account is encrypted with Microsoft-managed keys by default. It can be re-encrypted with a customer-managed key. Separate the key administrator role from the Dynamics 365/Power Platform administrator role.

## Chapters

- [0:00](https://www.youtube.com/watch?v=b-ixzwDS41c&t=0s) Introduction to Customer-Managed Encryption Key
- [0:25](https://www.youtube.com/watch?v=b-ixzwDS41c&t=25s) Setting Up Key Vault in Azure Portal
- [1:06](https://www.youtube.com/watch?v=b-ixzwDS41c&t=66s) Creating and Configuring Encryption Keys
- [1:46](https://www.youtube.com/watch?v=b-ixzwDS41c&t=106s) Enabling Power Platform Resource Provider
- [2:27](https://www.youtube.com/watch?v=b-ixzwDS41c&t=147s) Deploying Enterprise Policy Resource
- [3:28](https://www.youtube.com/watch?v=b-ixzwDS41c&t=208s) Configuring Access Control and Role Assignments
- [4:37](https://www.youtube.com/watch?v=b-ixzwDS41c&t=277s) Setting Up CMK in Power Platform Admin Center
- [5:37](https://www.youtube.com/watch?v=b-ixzwDS41c&t=337s) Linking Business Central to Power Platform
- [6:53](https://www.youtube.com/watch?v=b-ixzwDS41c&t=413s) Important Considerations and Best Practices

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Customer-Managed Encryption Key (CMK) | status not stated, demoed | [0:05](https://www.youtube.com/watch?v=b-ixzwDS41c&t=5s) |  |
| Purge Protection on Key Vaults | status not stated, demoed | [0:46](https://www.youtube.com/watch?v=b-ixzwDS41c&t=46s) |  |
| Managed Environments Requirement | status not stated, demoed | [8:28](https://www.youtube.com/watch?v=b-ixzwDS41c&t=508s) |  |
| Enterprise Policy Resource | status not stated, demoed | [2:27](https://www.youtube.com/watch?v=b-ixzwDS41c&t=147s) |  |
| Power Platform Resource Provider Registration | status not stated, demoed | [1:46](https://www.youtube.com/watch?v=b-ixzwDS41c&t=106s) |  |
| CMK Environment Unlinking Behavior | status not stated | [7:47](https://www.youtube.com/watch?v=b-ixzwDS41c&t=467s) |  |
| CMK with Environment Copy and Restore | status not stated | [7:47](https://www.youtube.com/watch?v=b-ixzwDS41c&t=467s) |  |
| CMK Export and Storage Account Encryption | status not stated | [8:08](https://www.youtube.com/watch?v=b-ixzwDS41c&t=488s) |  |

## Quotes

- [0:05](https://www.youtube.com/watch?v=b-ixzwDS41c&t=5s) "this is a new functionality that uh delivers on a need that we frequently hear from customers with very Advanced uh data governance uh"
- [0:46](https://www.youtube.com/watch?v=b-ixzwDS41c&t=46s) "the perge protection this must be enabled on key vaults that contain a key um that will be used to encrypt your environment database"
- [2:47](https://www.youtube.com/watch?v=b-ixzwDS41c&t=167s) "the loc must match the location of your power platform and your business central environment"
- [5:37](https://www.youtube.com/watch?v=b-ixzwDS41c&t=337s) "cmk only works on managed environments"
- [7:47](https://www.youtube.com/watch?v=b-ixzwDS41c&t=467s) "if you unlink your environment after applying cmk your business and for environment will automatically revert to a Microsoft manage encryption key"
- [7:47](https://www.youtube.com/watch?v=b-ixzwDS41c&t=467s) "if you copy or restore your environment um while it is encrypted with cmk you create a new environment that will not by default"
- [8:28](https://www.youtube.com/watch?v=b-ixzwDS41c&t=508s) "and that is required for ck to work to use a managed environment this comes with"
- [8:48](https://www.youtube.com/watch?v=b-ixzwDS41c&t=528s) "in the real word is important to uh separate the duties in setting this up between different users you'd use a key administrator for"

## Disclaimers in the video

- [6:33](https://www.youtube.com/watch?v=b-ixzwDS41c&t=393s) subject-to-change: review the warning here which warns me that this will start encrypting the database right away which may take some time to complete so make sure that you apply this at a time that the environment can be down while it's being encrypted
