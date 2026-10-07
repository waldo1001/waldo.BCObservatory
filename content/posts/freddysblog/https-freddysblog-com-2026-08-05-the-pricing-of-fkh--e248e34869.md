---
id: post/freddysblog/https-freddysblog-com-2026-08-05-the-pricing-of-fkh--e248e34869
type: post
title: The price of running Fkh (Freddy’s Kubernetes Helper)
summary: Fkh is a Kubernetes-based development container platform deployed in your own Azure subscription. The post breaks down all cost components, shows how expenses scale with concurrent containers, and demonstrates that typical scenarios cost $42-$192 per month per container when properly optimized for working hours.
tier: community
language: en
tags:
  - kubernetes
  - azure
  - cost optimization
  - infrastructure
  - fkh
  - containers
  - scaling
  - pricing
system: platform
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
  input_hash: fbaabda51c14a71970093b1024c18dc4519ec8bf716a536b408e9787a15782b0
evidence:
  - kind: blog
    url: https://freddysblog.com/2026/08/05/the-pricing-of-fkh/
    title: The price of running Fkh (Freddy’s Kubernetes Helper)
    date: "2026-08-05"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://freddysblog.com/2026/08/05/the-pricing-of-fkh/
    title: The price of running Fkh (Freddy’s Kubernetes Helper)
    date: "2026-08-05"
    commit: null
    t: null
    quote: The per-container cost drops as you grow, because the fixed baseline is shared across all running containers, and larger nodes pack more densely.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://freddysblog.com/2026/08/05/the-pricing-of-fkh
source_id: freddysblog
source_name: Freddys blog
url: https://freddysblog.com/2026/08/05/the-pricing-of-fkh/
published_at: "2026-08-05T10:00:00.000Z"
author: Freddy Kristiansen
full_text: false
words: 3766
quotes:
  - text: The per-container cost drops as you grow, because the fixed baseline is shared across all running containers, and larger nodes pack more densely.
    why_it_matters: "Explains the key cost-efficiency advantage of scaling: fixed costs amortize, making larger deployments cheaper per unit"
code_objects_mentioned: []
systems:
  - platform
  - development
  - integration
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Freddys blog
  favicon: https://freddysblog.com/assets/images/site/favicon.png
  probed_at: "2026-10-07T11:50:21.283Z"
---

# The price of running Fkh (Freddy’s Kubernetes Helper)

[Read the post](https://freddysblog.com/2026/08/05/the-pricing-of-fkh/) · Freddys blog (Freddy Kristiansen) · 2026-08-05 · 3766 words · tier community · **unreviewed** (machine-generated)

> Fkh is a Kubernetes-based development container platform deployed in your own Azure subscription. The post breaks down all cost components, shows how expenses scale with concurrent containers, and demonstrates that typical scenarios cost $42-$192 per month per container when properly optimized for working hours.

## Key points

- Four cost buckets exist: always-billed infrastructure, usage-based scaling, conditional features, and free components
- Windows node pool compute dominates variable costs and scales to zero outside working hours, while Linux SQL node and Premium SSD form a fixed baseline
- Per-container cost decreases as concurrency increases because fixed baseline spreads across more workloads; larger node SKUs pack containers more efficiently
- Scaling to zero during non-work hours, right-sizing nodes, and using spot instances are the main levers to control costs
- Linux-based Business Central containers would cut compute costs roughly in half when they become available

## Quotes

- "The per-container cost drops as you grow, because the fixed baseline is shared across all running containers, and larger nodes pack more densely." (Explains the key cost-efficiency advantage of scaling: fixed costs amortize, making larger deployments cheaper per unit)

## Context

- Features: Windows node autoscaling, Load Balancer per-container rules, Premium SSD persistent storage, SQL Server Linux node, Log Analytics telemetry, Spot instance support, StopFkh cluster shutdown, Azure Container Registry

Source: Freddys blog, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
