---
id: post/dvlprlife-com/https-www-dvlprlife-com-2026-10-business-central-is-transitioning-to-dotnet-10--d3cb2afda2
type: post
title: Business Central Is Transitioning to .NET 10, and Here's What You Should Check
summary: Business Central is transitioning from .NET 8 to .NET 10 across online and on-premises environments. For online, Microsoft handles the migration during maintenance windows. For on-premises, the change arrives via cumulative updates at different points by release, requiring matching AL extension versions and careful pipeline validation.
tier: community
language: en
tags:
  - .net runtime
  - cumulative updates
  - al extension versions
  - deployment
  - version compatibility
  - pipeline configuration
  - on-premises
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-19T01:10:33.892Z"
  flags: []
generated:
  at: "2026-10-19T00:22:27.986Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: afa846d6f4213427aaff906b5d0c1b35778d2af9ebbe9f4c66011724fd5d638a
evidence:
  - kind: blog
    url: https://www.dvlprlife.com/2026/10/business-central-is-transitioning-to-dotnet-10/
    title: Business Central Is Transitioning to .NET 10, and Here's What You Should Check
    date: "2026-10-18"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://www.dvlprlife.com/2026/10/business-central-is-transitioning-to-dotnet-10/
    title: Business Central Is Transitioning to .NET 10, and Here's What You Should Check
    date: "2026-10-18"
    commit: null
    t: null
    quote: The runtime change itself isn't the risk; version mismatch is.
  - kind: blog
    url: https://www.dvlprlife.com/2026/10/business-central-is-transitioning-to-dotnet-10/
    title: Business Central Is Transitioning to .NET 10, and Here's What You Should Check
    date: "2026-10-18"
    commit: null
    t: null
    quote: It's very unlikely; Microsoft says most customers won't need to change their applications just because the runtime has moved.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://www.dvlprlife.com/2026/10/business-central-is-transitioning-to-dotnet-10/
source_id: dvlprlife-com
source_name: DvlprLife
url: https://www.dvlprlife.com/2026/10/business-central-is-transitioning-to-dotnet-10/
published_at: "2026-10-18T21:15:51.000Z"
author: Brad Prendergast
full_text: false
words: 649
quotes:
  - text: The runtime change itself isn't the risk; version mismatch is.
    why_it_matters: Identifies the actual failure point in the transition - not the upgrade itself but tools and environments that diverge from the new runtime requirements
  - text: It's very unlikely; Microsoft says most customers won't need to change their applications just because the runtime has moved.
    why_it_matters: Reassures developers that code changes are not the default outcome, reducing upgrade anxiety for most extensions
code_objects_mentioned: []
systems:
  - development
  - platform
  - administration
versions_mentioned:
  - "27"
  - "28"
  - "29"
  - .NET 8
  - .NET 10
preview:
  embeddable: true
  frame_url: null
  image: https://www.dvlprlife.com/wp-content/uploads/2026/04/cropped-avatar-transparent-250-270x270.png
  image_alt: DvlprLife.com
  image_w: 270
  image_h: 270
  site_name: DvlprLife.com
  favicon: https://www.dvlprlife.com/wp-content/uploads/2026/04/cropped-avatar-transparent-250-270x270.png
  probed_at: "2026-10-19T01:07:57.310Z"
---

# Business Central Is Transitioning to .NET 10, and Here's What You Should Check

[Read the post](https://www.dvlprlife.com/2026/10/business-central-is-transitioning-to-dotnet-10/) · DvlprLife (Brad Prendergast) · 2026-10-18 · 649 words · tier community · reviewed (checked by Opus)

> Business Central is transitioning from .NET 8 to .NET 10 across online and on-premises environments. For online, Microsoft handles the migration during maintenance windows. For on-premises, the change arrives via cumulative updates at different points by release, requiring matching AL extension versions and careful pipeline validation.

## Key points

- Business Central Online transitions to .NET 10 during configured maintenance windows with no action required beyond timing selection
- On-premises releases get .NET 10 at different cumulative updates: BC 27 at CU 27.12, BC 28 at CU 28.6, BC 29 at release
- Each BC release and CU combination requires specific AL/VS Code extension versions, making version alignment critical
- Most applications won't need code changes unless they use .NET interop or custom .NET components
- Pipeline failures risk comes from version mismatches in AL compiler, container images, and local tooling rather than the runtime change itself

## Quotes

- "The runtime change itself isn't the risk; version mismatch is." (Identifies the actual failure point in the transition - not the upgrade itself but tools and environments that diverge from the new runtime requirements)
- "It's very unlikely; Microsoft says most customers won't need to change their applications just because the runtime has moved." (Reassures developers that code changes are not the default outcome, reducing upgrade anxiety for most extensions)

## Context

- Features: .NET 10 runtime transition, maintenance window scheduling, cumulative update deployment, AL extension versioning, container image management, build and test pipelines, .NET interop compatibility
- Versions: 27, 28, 29, .NET 8, .NET 10

Source: DvlprLife, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
