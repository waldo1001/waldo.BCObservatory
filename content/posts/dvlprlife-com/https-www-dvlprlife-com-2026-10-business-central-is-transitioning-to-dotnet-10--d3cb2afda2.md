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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-19T00:23:00.743Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 24f17eeeeec4cc64456160f2b7d9662eba1ea6a955f6f966b024cbb7d3648fe4
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
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: null
  probed_at: "2026-10-07T21:11:56.813Z"
---

# Business Central Is Transitioning to .NET 10, and Here's What You Should Check

[Read the post](https://www.dvlprlife.com/2026/10/business-central-is-transitioning-to-dotnet-10/) · DvlprLife (Brad Prendergast) · 2026-10-18 · 649 words · tier community · **unreviewed** (model text not yet checked)

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
