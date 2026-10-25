---
id: post/vjeko-com/https-vjeko-com-2026-03-09-al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days--fb9c8e152a
type: post
title: "AL Object ID Ninja 3.2.1: A Lot Has Happened in Four Days"
summary: AL Object ID Ninja 3.2.1 introduces app pools as first-class citizens with improved Range Explorer and Assignment Explorer support, a visual Consumption Overview Panel for grid-based ID management, per-folder settings in multi-root workspaces, and backend-driven pool management migration. The release also adds user roles for organizations, a news section, and extended grace periods on the portal.
tier: community
language: en
tags:
  - al object id ninja
  - app pools
  - object id management
  - workspace configuration
  - visual tools
  - backend architecture
  - user roles
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T17:03:54.105Z"
  flags: []
generated:
  at: "2026-10-25T16:55:04.528Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: a3b109fce220b2b9ab5aa117f68d647196db29a99e6c7ed222909c37519f53c5
evidence:
  - kind: blog
    url: https://vjeko.com/2026/03/09/al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days/
    title: "AL Object ID Ninja 3.2.1: A Lot Has Happened in Four Days"
    date: "2026-03-09"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://vjeko.com/2026/03/09/al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days/
    title: "AL Object ID Ninja 3.2.1: A Lot Has Happened in Four Days"
    date: "2026-03-09"
    commit: null
    t: null
    quote: App Pools should have always been a backend-driven, centralized feature.
  - kind: blog
    url: https://vjeko.com/2026/03/09/al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days/
    title: "AL Object ID Ninja 3.2.1: A Lot Has Happened in Four Days"
    date: "2026-03-09"
    commit: null
    t: null
    quote: Pool membership becomes a centralized, backend-driven feature the way it should have been from the start.
  - kind: blog
    url: https://vjeko.com/2026/03/09/al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days/
    title: "AL Object ID Ninja 3.2.1: A Lot Has Happened in Four Days"
    date: "2026-03-09"
    commit: null
    t: null
    quote: It's one of those features where the moment you see it, you wonder how you managed without it.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://vjeko.com/2026/03/09/al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days/
source_id: vjeko-com
source_name: Vjeko.com
url: https://vjeko.com/2026/03/09/al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days/
published_at: "2026-03-09T22:22:24.000Z"
author: Vjekoslav Babić
full_text: false
words: 1604
quotes:
  - text: App Pools should have always been a backend-driven, centralized feature.
    why_it_matters: Explains why pool management is moving from Git-tracked files to backend, solving configuration synchronization problems across branches and developers
  - text: Pool membership becomes a centralized, backend-driven feature the way it should have been from the start.
    why_it_matters: Describes the two-step migration strategy ensuring reliable backend data collection before shifting configuration entirely off .objidconfig
  - text: It's one of those features where the moment you see it, you wonder how you managed without it.
    why_it_matters: Highlights the value of visual ID range management through the Consumption Overview Panel's grid-based approach versus text-based lists
code_objects_mentioned: []
systems:
  - development
  - administration
  - platform
versions_mentioned:
  - 3.2.1
cautions:
  - kind: gotcha
    quote: The Assignment Explorer's lost ID detection can only see apps that are actually loaded in your current workspace.
    objects: []
    events: []
    versions: []
preview:
  embeddable: false
  frame_url: null
  image: https://vjeko.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-9-2026-11_20_43-PM.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://vjeko.com/wp-content/uploads/2020/12/cropped-Brand-Element-v3-32x32.png
  probed_at: "2026-10-25T17:00:15.079Z"
---

# AL Object ID Ninja 3.2.1: A Lot Has Happened in Four Days

[Read the post](https://vjeko.com/2026/03/09/al-object-id-ninja-3-2-1-a-lot-has-happened-in-four-days/) · Vjeko.com (Vjekoslav Babić, MVP) · 2026-03-09 · 1604 words · tier community · reviewed (checked by Opus)

> AL Object ID Ninja 3.2.1 introduces app pools as first-class citizens with improved Range Explorer and Assignment Explorer support, a visual Consumption Overview Panel for grid-based ID management, per-folder settings in multi-root workspaces, and backend-driven pool management migration. The release also adds user roles for organizations, a news section, and extended grace periods on the portal.

## Key points

- App pools now display accurate pool-wide consumption in Range Explorer and support lost ID detection in Assignment Explorer with proper diagnostics
- New Consumption Overview Panel provides visual grid view of object ID ranges with color coding and drag-to-renumber capability for both apps and app pools
- App pool management is migrating from .objidconfig to backend portal control to centralize configuration and eliminate Git-tracked file conflicts
- Multi-root workspace settings now properly scope resource-level options like Show Range Warnings and Disable Deletion Tracking to individual folders
- Portal adds user roles system allowing organizations to restrict full syncs and app authorization to power users while keeping merge sync available to all

## Quotes

- "App Pools should have always been a backend-driven, centralized feature." (Explains why pool management is moving from Git-tracked files to backend, solving configuration synchronization problems across branches and developers)
- "Pool membership becomes a centralized, backend-driven feature the way it should have been from the start." (Describes the two-step migration strategy ensuring reliable backend data collection before shifting configuration entirely off .objidconfig)
- "It's one of those features where the moment you see it, you wonder how you managed without it." (Highlights the value of visual ID range management through the Consumption Overview Panel's grid-based approach versus text-based lists)

## Heads up

- gotcha: "The Assignment Explorer's lost ID detection can only see apps that are actually loaded in your current workspace."

## Context

- Features: app pools first-class support, Consumption Overview Panel, Range Explorer improvements, Assignment Explorer pool grouping, lost ID detection for pools, per-folder settings, user roles system, merge sync
- Versions: 3.2.1

Source: Vjeko.com, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
