---
id: post/vjeko-com/https-vjeko-com-2026-03-16-your-object-ids-have-no-excuse-now-ninja-comes-to-ci-cd--23a5752190
type: post
title: Your Object IDs Have No Excuse Now – Ninja Comes to CI/CD
summary: AL Object ID Ninja, now available as a GitHub Action and Azure DevOps Pipeline Task, automatically scans AL repositories during CI/CD to detect and prevent untracked object IDs, field IDs, and enum value IDs from being deployed. It supports multi-app repositories and eliminates manual coordination of IDs across teams.
tier: community
language: en
tags:
  - ci/cd
  - object id management
  - github actions
  - azure devops
  - al development
  - multi-app repos
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T17:03:47.783Z"
  flags: []
generated:
  at: "2026-10-25T16:55:04.528Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 27cd27976ae2267789b98a655cb83ced36038d3211b8eccd7e92004f53bca660
evidence:
  - kind: blog
    url: https://vjeko.com/2026/03/16/your-object-ids-have-no-excuse-now-ninja-comes-to-ci-cd/
    title: Your Object IDs Have No Excuse Now – Ninja Comes to CI/CD
    date: "2026-03-16"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://vjeko.com/2026/03/16/your-object-ids-have-no-excuse-now-ninja-comes-to-ci-cd/
    title: Your Object IDs Have No Excuse Now – Ninja Comes to CI/CD
    date: "2026-03-16"
    commit: null
    t: null
    quote: AL Object ID Ninja is now available as a GitHub Action and an Azure DevOps Pipeline Task.
  - kind: blog
    url: https://vjeko.com/2026/03/16/your-object-ids-have-no-excuse-now-ninja-comes-to-ci-cd/
    title: Your Object IDs Have No Excuse Now – Ninja Comes to CI/CD
    date: "2026-03-16"
    commit: null
    t: null
    quote: No more spreadsheets, no more "we'll coordinate manually", no more conflicts surfacing during deployment.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://vjeko.com/2026/03/16/your-object-ids-have-no-excuse-now-ninja-comes-to-ci-cd/
source_id: vjeko-com
source_name: Vjeko.com
url: https://vjeko.com/2026/03/16/your-object-ids-have-no-excuse-now-ninja-comes-to-ci-cd/
published_at: "2026-03-16T13:04:52.000Z"
author: Vjekoslav Babić
full_text: false
words: 405
quotes:
  - text: AL Object ID Ninja is now available as a GitHub Action and an Azure DevOps Pipeline Task.
    why_it_matters: Explains the main news and availability of the tool for two major CI/CD platforms.
  - text: No more spreadsheets, no more "we'll coordinate manually", no more conflicts surfacing during deployment.
    why_it_matters: Highlights the core problem solved by automating ID conflict detection before deployment.
code_objects_mentioned: []
systems:
  - development
versions_mentioned: []
cautions:
  - kind: preview-disclaimer
    quote: The Azure DevOps task is still under development, so treat it as a preview for now.
    objects: []
    events: []
    versions: []
preview:
  embeddable: false
  frame_url: null
  image: https://vjeko.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-16-2026-03_07_16-PM.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://vjeko.com/wp-content/uploads/2020/12/cropped-Brand-Element-v3-32x32.png
  probed_at: "2026-10-25T17:00:12.786Z"
---

# Your Object IDs Have No Excuse Now – Ninja Comes to CI/CD

[Read the post](https://vjeko.com/2026/03/16/your-object-ids-have-no-excuse-now-ninja-comes-to-ci-cd/) · Vjeko.com (Vjekoslav Babić, MVP) · 2026-03-16 · 405 words · tier community · reviewed (checked by Opus)

> AL Object ID Ninja, now available as a GitHub Action and Azure DevOps Pipeline Task, automatically scans AL repositories during CI/CD to detect and prevent untracked object IDs, field IDs, and enum value IDs from being deployed. It supports multi-app repositories and eliminates manual coordination of IDs across teams.

## Key points

- Ninja integrates into CI/CD pipelines as both a GitHub Action and Azure DevOps task to catch untracked IDs before merge.
- Developers can exclude specific ID types (field IDs or enum value IDs) from checks via configuration parameters.
- The tool works with AL-Go for GitHub by running as a separate workflow with branch protection rules enforcing its checks.
- GitHub Action is production-ready while Azure DevOps task is in preview development.

## Quotes

- "AL Object ID Ninja is now available as a GitHub Action and an Azure DevOps Pipeline Task." (Explains the main news and availability of the tool for two major CI/CD platforms.)
- "No more spreadsheets, no more "we'll coordinate manually", no more conflicts surfacing during deployment." (Highlights the core problem solved by automating ID conflict detection before deployment.)

## Heads up

- preview-disclaimer: "The Azure DevOps task is still under development, so treat it as a preview for now."

## Context

- Features: AL Object ID Ninja GitHub Action, AL Object ID Ninja Azure DevOps Task, Object ID scanning, Field ID tracking, Enum value ID tracking, Build failure on untracked IDs, Multi-app repository support, Branch protection integration

Source: Vjeko.com, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
