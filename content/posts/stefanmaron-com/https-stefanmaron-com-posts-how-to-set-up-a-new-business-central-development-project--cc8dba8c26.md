---
id: post/stefanmaron-com/https-stefanmaron-com-posts-how-to-set-up-a-new-business-central-development-project--cc8dba8c26
type: post
title: How to Set Up a New Business Central Development Project – The 100% Correct Way
summary: This guide covers the essential setup steps for creating a new Business Central AL development project, from project creation and app.json configuration to code analysis and DevOps. It emphasizes starting with proper templates, modern naming conventions, and AL-Go for GitHub to ensure maintainability, CI/CD readiness, and AppSource compatibility.
tier: community
language: en
tags:
  - project setup
  - al development
  - app.json configuration
  - naming conventions
  - code analysis
  - al-go
  - appsource
  - ci/cd
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T12:54:54.417Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: a7751a4db5599b7ee70a1eab4dfc4ec698bcf432e17610edd10a0016b2c91045
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/how-to-set-up-a-new-business-central-development-project/
    title: How to Set Up a New Business Central Development Project – The 100% Correct Way
    date: "2025-06-05"
    commit: null
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/how-to-set-up-a-new-business-central-development-project/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/how-to-set-up-a-new-business-central-development-project/
published_at: "2025-06-05T05:32:18.000Z"
author: Stefan Maron
full_text: false
words: 2419
quotes: []
code_objects_mentioned: []
systems:
  - development
  - integration
  - administration
versions_mentioned:
  - June 2025
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:51:03.432Z"
---

# How to Set Up a New Business Central Development Project – The 100% Correct Way

[Read the post](https://stefanmaron.com/posts/how-to-set-up-a-new-business-central-development-project/) · Stefan Maron (Stefan Maron, MVP) · 2025-06-05 · 2419 words · tier community · **unreviewed** (machine-generated)

> This guide covers the essential setup steps for creating a new Business Central AL development project, from project creation and app.json configuration to code analysis and DevOps. It emphasizes starting with proper templates, modern naming conventions, and AL-Go for GitHub to ensure maintainability, CI/CD readiness, and AppSource compatibility.

## Key points

- Start projects from structured templates like AL-Go rather than the default AL: Go! command to ensure proper project structure and CI/CD readiness
- Configure app.json correctly with appropriate ID ranges, version numbers independent of BC versions, namespaces, and mandatory dependencies
- Use consistent object naming with PascalCase, registered affixes as suffixes, and project codes to avoid conflicts and improve discoverability
- Enable multiple code analyzers (CodeCop, AppSourceCop, PerTenantExtensionCop, UICop, LinterCop) with custom rulesets to catch issues early, even for PTE projects
- Set up AL-Go for GitHub from the start to automate build, test, sign, and publish workflows while maintaining consistency with Microsoft's practices

## Context

- Features: AL-Go for GitHub, CodeCop, AppSourceCop, PerTenantExtensionCop, UICop, LinterCop, external rulesets, namespaces
- Versions: June 2025

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
