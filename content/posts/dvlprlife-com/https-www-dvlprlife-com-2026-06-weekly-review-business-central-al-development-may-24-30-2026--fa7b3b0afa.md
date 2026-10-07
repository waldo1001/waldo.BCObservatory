---
id: post/dvlprlife-com/https-www-dvlprlife-com-2026-06-weekly-review-business-central-al-development-may-24-30-2026--fa7b3b0afa
type: post
title: "Weekly Review: Business Central AL Development – May 24–30, 2026"
summary: "This weekly review covers five major developments in Business Central AL tooling and performance from May 24 - 30, 2026: index management via new DMV queries and disable/enable capabilities in BC 28, running unit tests without the base app to reduce CI time, Microsoft's OptimAL performance partner program, report layout lifecycle states in BC 28.1, and Claude Code configuration for clearer technical writing."
tier: community
language: en
tags:
  - index management
  - performance tuning
  - unit testing
  - ci/cd
  - report lifecycle
  - al tooling
  - ai assistance
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
  input_hash: a863ae0bd9c2900e2897b428ff7a97f63a6e9873c4c2b3bbc7f35698489dbaef
evidence:
  - kind: blog
    url: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-24-30-2026/
    title: "Weekly Review: Business Central AL Development – May 24–30, 2026"
    date: "2026-06-02"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-24-30-2026/
    title: "Weekly Review: Business Central AL Development – May 24–30, 2026"
    date: "2026-06-02"
    commit: null
    t: null
    quote: BC 28's per-company Enable/Disable Index capability the single biggest performance win in this wave for SaaS.
  - kind: blog
    url: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-24-30-2026/
    title: "Weekly Review: Business Central AL Development – May 24–30, 2026"
    date: "2026-06-02"
    commit: null
    t: null
    quote: full pipeline runs dropped from 8 - 12 minutes to under 2, and BC reaches healthy in 26 seconds instead of 4:19.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-24-30-2026/
source_id: dvlprlife-com
source_name: DvlprLife
url: https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-24-30-2026/
published_at: "2026-06-02T13:35:41.000Z"
author: Brad Prendergast
full_text: false
words: 1007
quotes:
  - text: BC 28's per-company Enable/Disable Index capability the single biggest performance win in this wave for SaaS.
    why_it_matters: Establishes index management as the highest-impact performance optimization available to SaaS customers in the current release.
  - text: full pipeline runs dropped from 8 - 12 minutes to under 2, and BC reaches healthy in 26 seconds instead of 4:19.
    why_it_matters: Quantifies the dramatic CI/CD speedup achieved by decoupling unit tests from base app dependencies, enabling faster development cycles.
code_objects_mentioned:
  - page Index Management
  - page Report Layouts
systems:
  - development
  - platform
  - reporting
versions_mentioned:
  - BC 27
  - BC 28
  - BC 28.1
  - 2026 Wave 1
preview:
  embeddable: true
  frame_url: null
  image: https://www.dvlprlife.com/wp-content/uploads/2026/04/cropped-avatar-transparent-250-270x270.png
  image_alt: DvlprLife.com
  image_w: 270
  image_h: 270
  site_name: DvlprLife.com
  favicon: https://www.dvlprlife.com/wp-content/uploads/2026/04/cropped-avatar-transparent-250-270x270.png
  probed_at: "2026-10-07T11:50:35.345Z"
---

# Weekly Review: Business Central AL Development – May 24–30, 2026

[Read the post](https://www.dvlprlife.com/2026/06/weekly-review-business-central-al-development-may-24-30-2026/) · DvlprLife (Brad Prendergast) · 2026-06-02 · 1007 words · tier community · **unreviewed** (machine-generated)

> This weekly review covers five major developments in Business Central AL tooling and performance from May 24 - 30, 2026: index management via new DMV queries and disable/enable capabilities in BC 28, running unit tests without the base app to reduce CI time, Microsoft's OptimAL performance partner program, report layout lifecycle states in BC 28.1, and Claude Code configuration for clearer technical writing.

## Key points

- BC 28 Index Management page uses SQL DMV queries to help decide which indexes to disable, with a seven-step triage recipe based on table size, read/write patterns, and fragmentation.
- AL unit tests can run independently of the base app by structuring logic as a sub-extension with its own app.json, cutting CI pipeline time from 8 - 12 minutes to under 2.
- OptimAL is Microsoft's structured performance program for partners and ISVs, costing $12,900 USD, delivering telemetry training and hands-on optimization against real customer code.
- BC 28.1 adds four layout status states (Draft, Pending Approval, Approved, Retired) to the Report Layouts page, allowing safe testing of new layouts before user exposure.
- CLAUDE.md configuration rules can override Claude Code's tendency to use metaphorical language, replacing jargon like 'load-bearing' and 'ground truth' with direct technical alternatives.

## Quotes

- "BC 28's per-company Enable/Disable Index capability the single biggest performance win in this wave for SaaS." (Establishes index management as the highest-impact performance optimization available to SaaS customers in the current release.)
- "full pipeline runs dropped from 8 - 12 minutes to under 2, and BC reaches healthy in 26 seconds instead of 4:19." (Quantifies the dramatic CI/CD speedup achieved by decoupling unit tests from base app dependencies, enabling faster development cycles.)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- page "Index Management"
- page "Report Layouts"

## Context

- Features: Index Management with per-company Enable/Disable capability, SQL DMV queries for index usage analysis, Unit test compilation without base app dependency, OptimAL partner performance initiative, Report Layout Status states (Draft, Pending Approval, Approved, Retired), Layout visibility control on request page, CLAUDE.md configuration for AI code assistant
- Versions: BC 27, BC 28, BC 28.1, 2026 Wave 1

Source: DvlprLife, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
