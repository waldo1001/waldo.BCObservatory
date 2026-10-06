---
id: video/DnZJ2iOgIjI
type: video
title: "What's New: Customer-Managed Encryption Key & Lockbox (2024 release wave 2)"
summary: "Customer-managed encryption key and lockbox for Business Central (2024 release wave 2): how to link a Business Central environment to a Power Platform managed environment, set up Azure Key Vault and an enterprise policy, and what to expect for downtime, licensing, and copy/restore."
tier: official
language: en
tags:
  - customer-managed encryption key
  - lockbox
  - security
  - power platform integration
  - azure key vault
  - environment linking
  - data encryption
  - enterprise policy
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T19:19:34.302Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: e83b75a534999d8476e1f5a92d593e67b7e2f9ed5a92949b7b2e3ff7ff29f129
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=6s
    title: "What's New: Customer-Managed Encryption Key & Lockbox (2024 release wave 2)"
    date: "2024-10-08T15:00:13.000Z"
    commit: null
    t: 6
    quote: these settings help you secure your environments if you have very advanced
  - kind: video
    url: https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=171s
    title: "What's New: Customer-Managed Encryption Key & Lockbox (2024 release wave 2)"
    date: "2024-10-08T15:00:13.000Z"
    commit: null
    t: 171
    quote: after completing this last setup step there could be some downtime on your business center and Power Platform environments
  - kind: video
    url: https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=211s
    title: "What's New: Customer-Managed Encryption Key & Lockbox (2024 release wave 2)"
    date: "2024-10-08T15:00:13.000Z"
    commit: null
    t: 211
    quote: if you unlink your environments the business Central environment will revert back to a Microsoft manage encryption key
  - kind: video
    url: https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=231s
    title: "What's New: Customer-Managed Encryption Key & Lockbox (2024 release wave 2)"
    date: "2024-10-08T15:00:13.000Z"
    commit: null
    t: 231
    quote: there's a risk of internal malicious actors if a single administrator has access to all aspects of setting up
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: DnZJ2iOgIjI
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=DnZJ2iOgIjI
published_at: "2024-10-08T15:00:13.000Z"
duration_s: 310
captions: full
audience:
  - administrator
  - partner
  - decision maker
chapters:
  - t: 0
    title: Introduction and overview
  - t: 26
    title: Linking Business Central to Power Platform
  - t: 68
    title: Customer-managed encryption key setup
  - t: 130
    title: Azure configuration and permissions
  - t: 171
    title: Setup requirements and environment downtime
  - t: 211
    title: Licensing and security considerations
  - t: 252
    title: Copy, restore, and export operations
features:
  - name: Customer-Managed Encryption Key
    status: unclear
    t: 68
    verified: false
    status_source: video
  - name: Lockbox Settings
    status: unclear
    t: 6
    verified: false
    status_source: video
  - name: Environment Linking
    status: unclear
    t: 26
    verified: false
    status_source: video
  - name: Enterprise Policy Resource
    status: unclear
    t: 130
    verified: false
    status_source: video
  - name: Key Vault Setup
    status: unclear
    t: 110
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 6
    text: these settings help you secure your environments if you have very advanced
    check: fuzzy
  - t: 171
    text: after completing this last setup step there could be some downtime on your business center and Power Platform environments
    check: exact
  - t: 211
    text: if you unlink your environments the business Central environment will revert back to a Microsoft manage encryption key
    check: snapped
  - t: 231
    text: there's a risk of internal malicious actors if a single administrator has access to all aspects of setting up
    check: fuzzy
---

# What's New: Customer-Managed Encryption Key & Lockbox (2024 release wave 2)

> Customer-managed encryption key and lockbox for Business Central (2024 release wave 2): how to link a Business Central environment to a Power Platform managed environment, set up Azure Key Vault and an enterprise policy, and what to expect for downtime, licensing, and copy/restore.

[Watch on YouTube](https://www.youtube.com/watch?v=DnZJ2iOgIjI) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-10-08 · 5:10 · tier official · **unreviewed** (machine-generated)

## Overview

The video walks through encrypting Business Central and Power Platform environment databases with a key the customer manages in their own Azure Key Vault, instead of a Microsoft-managed key. It starts with linking a Business Central environment to a Power Platform environment in the Business Central admin center, since the encryption key and lockbox settings are inherited through that link.

It then covers the Azure side: a key vault with soft delete and purge protection, an RSA 2048 key, and an enterprise policy resource with the right role assignment. It closes with downtime during re-encryption, licensing requirements, separation of administrator duties, and how copy, restore, and export behave.

## Key points

- A Business Central environment must be linked to a Power Platform managed environment to use a customer-managed key. There is no way to set it up without linking.
- Linked environments must be in the same region and of the same type (production). Customer-managed key and lockbox settings are inherited through the link.
- The Azure Key Vault needs soft delete and purge protection enabled, and must hold an RSA key of size 2048.
- The enterprise policy resource must be in the same region as the environments. It needs the Key Vault Crypto Service Encryption User role, and applying it requires an environment administrator with the ENT role.
- Expect some downtime on Business Central and Power Platform environments after the final setup step, while the databases are re-encrypted.
- Unlinking the environments reverts Business Central to a Microsoft-managed encryption key. Copy and restore operations create new environments with Microsoft-managed encryption.
- Specific Microsoft 365 and Power Platform licensing applies. Lockbox settings are administered in the Power Platform admin center. The video warns of internal malicious actors if one administrator controls all setup steps.

## Chapters

- [0:00](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=0s) Introduction and overview
- [0:26](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=26s) Linking Business Central to Power Platform
- [1:08](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=68s) Customer-managed encryption key setup
- [2:10](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=130s) Azure configuration and permissions
- [2:51](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=171s) Setup requirements and environment downtime
- [3:31](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=211s) Licensing and security considerations
- [4:12](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=252s) Copy, restore, and export operations

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Customer-Managed Encryption Key | status not stated | [1:08](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=68s) |  |
| Lockbox Settings | status not stated | [0:06](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=6s) |  |
| Environment Linking | status not stated | [0:26](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=26s) |  |
| Enterprise Policy Resource | status not stated | [2:10](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=130s) |  |
| Key Vault Setup | status not stated | [1:50](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=110s) |  |

## Quotes

- [0:06](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=6s) "these settings help you secure your environments if you have very advanced"
- [2:51](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=171s) "after completing this last setup step there could be some downtime on your business center and Power Platform environments"
- [3:31](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=211s) "if you unlink your environments the business Central environment will revert back to a Microsoft manage encryption key"
- [3:51](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=231s) "there's a risk of internal malicious actors if a single administrator has access to all aspects of setting up"

## Disclaimers in the video

- [3:11](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=191s) other: the linked Power Platform managed environment is required so there's no way to set this up for business Central environment without linking
- [3:31](https://www.youtube.com/watch?v=DnZJ2iOgIjI&t=211s) other: there are specific licensing requirements in Microsoft 365 and Power Platform and these will apply to your business Central environments
