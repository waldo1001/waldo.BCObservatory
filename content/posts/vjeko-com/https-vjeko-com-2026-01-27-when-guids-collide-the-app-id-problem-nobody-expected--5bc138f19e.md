---
id: post/vjeko-com/https-vjeko-com-2026-01-27-when-guids-collide-the-app-id-problem-nobody-expected--5bc138f19e
type: post
title: "When GUIDs Collide: The App ID Problem Nobody Expected"
summary: "App ID collisions occur when multiple Business Central AL apps share the same GUID despite mathematical uniqueness guarantees. The post analyzes three causes: manual GUID creation, cloning demo repositories, and copy-paste development, and recommends generating new App IDs rather than attempting to resolve collisions."
tier: community
language: en
tags:
  - app id
  - guid collision
  - app.json
  - al development
  - appsource
  - duplicate identifiers
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T17:03:53.873Z"
  flags: []
generated:
  at: "2026-10-25T16:55:04.528Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 3a1350649436db43c4f6963ae77f2bae5ecd33d45d9eddd5f6b0ef37f62e01f1
evidence:
  - kind: blog
    url: https://vjeko.com/2026/01/27/when-guids-collide-the-app-id-problem-nobody-expected/
    title: "When GUIDs Collide: The App ID Problem Nobody Expected"
    date: "2026-01-27"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://vjeko.com/2026/01/27/when-guids-collide-the-app-id-problem-nobody-expected/
    title: "When GUIDs Collide: The App ID Problem Nobody Expected"
    date: "2026-01-27"
    commit: null
    t: null
    quote: Among those 50,000 apps, I've found nearly 150 that share an App ID with at least one other app.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://vjeko.com/2026/01/27/when-guids-collide-the-app-id-problem-nobody-expected/
source_id: vjeko-com
source_name: Vjeko.com
url: https://vjeko.com/2026/01/27/when-guids-collide-the-app-id-problem-nobody-expected/
published_at: "2026-01-27T17:30:07.000Z"
author: Vjekoslav Babić
full_text: false
words: 1169
quotes:
  - text: Among those 50,000 apps, I've found nearly 150 that share an App ID with at least one other app.
    why_it_matters: "Demonstrates the scope of the problem: collisions actually occur despite mathematical improbability, affecting a significant number of apps in the ecosystem."
code_objects_mentioned: []
systems:
  - development
versions_mentioned: []
cautions:
  - kind: gotcha
    quote: I don't know what happens when two apps with the same App ID meet in a production tenant
    objects: []
    events: []
    versions: []
preview:
  embeddable: false
  frame_url: null
  image: https://vjeko.com/wp-content/uploads/2026/01/1d7a23b8-af53-4874-afad-273c26d6d4f9.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://vjeko.com/wp-content/uploads/2020/12/cropped-Brand-Element-v3-32x32.png
  probed_at: "2026-10-25T17:00:18.476Z"
---

# When GUIDs Collide: The App ID Problem Nobody Expected

[Read the post](https://vjeko.com/2026/01/27/when-guids-collide-the-app-id-problem-nobody-expected/) · Vjeko.com (Vjekoslav Babić, MVP) · 2026-01-27 · 1169 words · tier community · reviewed (checked by Opus)

> App ID collisions occur when multiple Business Central AL apps share the same GUID despite mathematical uniqueness guarantees. The post analyzes three causes: manual GUID creation, cloning demo repositories, and copy-paste development, and recommends generating new App IDs rather than attempting to resolve collisions.

## Key points

- About 150 of roughly 50,000 apps seen by AL Object ID Ninja share an App ID with another app, even though GUIDs should never collide
- Collisions come from typing simple GUIDs by hand, shipping cloned demo repos unchanged, and copying projects without changing the App ID
- Some duplicated IDs belong to AppSource apps; what happens when two such apps share a tenant is unknown
- Ninja is working on public-platform features to warn about conflicting App IDs and keep object ID consumption separate
- The author's advice is to create a new app with a fresh App ID and migrate customers to it

## Quotes

- "Among those 50,000 apps, I've found nearly 150 that share an App ID with at least one other app." (Demonstrates the scope of the problem: collisions actually occur despite mathematical improbability, affecting a significant number of apps in the ecosystem.)

## Heads up

- gotcha: "I don't know what happens when two apps with the same App ID meet in a production tenant"

## Context

- Features: App ID conflict detection, App ID isolation, collision awareness, collision protection

Source: Vjeko.com, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
