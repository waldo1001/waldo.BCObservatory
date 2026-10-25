---
id: post/vjeko-com/https-vjeko-com-2025-12-03-a-story-about-trust-why-one-team-moved-from-private-endpoints-to-the-host--2c269b6e36
type: post
title: "A Story About Trust: Why LS Retail Moved from Private Endpoints to the Hosted Ninja Backend"
summary: LS Retail used AL Object ID Ninja on its own private backend from day one and kept it correctly configured. Once Ninja became a commercial service, the team moved to the hosted backend. They wanted a supported service and peace of mind, not cost savings, and the move took about two hours with no downtime. The author argues that self-hosting still means Azure costs, maintenance work and a risk of object ID collisions from misconfiguration.
tier: community
language: en
tags:
  - al object id ninja
  - private endpoints
  - infrastructure
  - commercial service
  - object id collisions
  - team workflows
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T17:03:56.343Z"
  flags: []
generated:
  at: "2026-10-25T16:55:04.528Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 12c88c4166a0854f1a6550f45e330ceecccf580eb9439e20c5c9fe542e4ad738
evidence:
  - kind: blog
    url: https://vjeko.com/2025/12/03/a-story-about-trust-why-one-team-moved-from-private-endpoints-to-the-hosted-ninja-backend/
    title: "A Story About Trust: Why LS Retail Moved from Private Endpoints to the Hosted Ninja Backend"
    date: "2025-12-03"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://vjeko.com/2025/12/03/a-story-about-trust-why-one-team-moved-from-private-endpoints-to-the-hosted-ninja-backend/
    title: "A Story About Trust: Why LS Retail Moved from Private Endpoints to the Hosted Ninja Backend"
    date: "2025-12-03"
    commit: null
    t: null
    quote: Telemetry shows that two out of every three private-endpoint apps today are misconfigured.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://vjeko.com/2025/12/03/a-story-about-trust-why-one-team-moved-from-private-endpoints-to-the-hosted-ninja-backend/
source_id: vjeko-com
source_name: Vjeko.com
url: https://vjeko.com/2025/12/03/a-story-about-trust-why-one-team-moved-from-private-endpoints-to-the-hosted-ninja-backend/
published_at: "2025-12-03T09:21:56.000Z"
author: Vjekoslav Babić
full_text: false
words: 705
quotes:
  - text: Telemetry shows that two out of every three private-endpoint apps today are misconfigured.
    why_it_matters: Reveals that most teams cannot properly maintain complex private infrastructure, undermining the purpose of having a conflict-avoidance tool
code_objects_mentioned: []
systems:
  - development
versions_mentioned: []
preview:
  embeddable: false
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://vjeko.com/wp-content/uploads/2020/12/cropped-Brand-Element-v3-32x32.png
  probed_at: "2026-10-25T17:00:24.217Z"
---

# A Story About Trust: Why LS Retail Moved from Private Endpoints to the Hosted Ninja Backend

[Read the post](https://vjeko.com/2025/12/03/a-story-about-trust-why-one-team-moved-from-private-endpoints-to-the-hosted-ninja-backend/) · Vjeko.com (Vjekoslav Babić, MVP) · 2025-12-03 · 705 words · tier community · reviewed (checked by Opus)

> LS Retail used AL Object ID Ninja on its own private backend from day one and kept it correctly configured. Once Ninja became a commercial service, the team moved to the hosted backend. They wanted a supported service and peace of mind, not cost savings, and the move took about two hours with no downtime. The author argues that self-hosting still means Azure costs, maintenance work and a risk of object ID collisions from misconfiguration.

## Key points

- LS Retail ran a correctly configured private Ninja backend for 100+ users, 20+ apps and 3 app pools, then moved to the hosted service
- Self-hosting still costs money: an Azure bill, maintenance time, keeping up with updates and the risk of misconfiguration
- Telemetry shows two out of three private-endpoint apps are misconfigured, which defeats Ninja's purpose of preventing ID collisions
- LS Retail chose a paid, professionally supported service for peace of mind, not to save money
- The migration took about two hours with no downtime

## Quotes

- "Telemetry shows that two out of every three private-endpoint apps today are misconfigured." (Reveals that most teams cannot properly maintain complex private infrastructure, undermining the purpose of having a conflict-avoidance tool)

## Context

- Features: AL Object ID Ninja, private endpoints, hosted backend, object ID conflict avoidance

Source: Vjeko.com, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
