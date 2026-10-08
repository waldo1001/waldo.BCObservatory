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
  state: reviewed
  by: opus
  at: "2026-10-08T02:00:57.623Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
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

[Read the post](https://stefanmaron.com/posts/how-to-set-up-a-new-business-central-development-project/) · Stefan Maron (Stefan Maron, MVP) · 2025-06-05 · 2419 words · tier community · reviewed (checked by Opus)

> This guide covers the essential setup steps for creating a new Business Central AL development project, from project creation and app.json configuration to code analysis and DevOps. It emphasizes starting with proper templates, modern naming conventions, and AL-Go for GitHub to ensure maintainability, CI/CD readiness, and AppSource compatibility.

## Key points

- Start from a template such as the AL-Go for GitHub templates instead of the default AL: Go! command, remove demo objects and download symbols
- Configure app.json carefully: a sensible ID range (not starting at 50000 for PTEs), a version not tied to BC releases, explicit runtime and application versions, and only needed dependencies
- Use PascalCase names with the registered affix as a suffix plus a short project code; namespaces with the affix as top level can remove the need for affixes in object names
- Enable CodeCop, AppSourceCop, PerTenantExtensionCop, UICop and LinterCop, with an AppSourceCop.json per app and external rulesets to balance PTE and AppSource rules
- Set up AL-Go early for build, test and deploy automation, including ruleset settings and scheduled test workflows

## Context

- Features: AL-Go for GitHub, CodeCop, AppSourceCop, PerTenantExtensionCop, UICop, LinterCop, external rulesets, namespaces
- Versions: June 2025

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
