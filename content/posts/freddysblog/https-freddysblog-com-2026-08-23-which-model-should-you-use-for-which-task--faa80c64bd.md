---
id: post/freddysblog/https-freddysblog-com-2026-08-23-which-model-should-you-use-for-which-task--faa80c64bd
type: post
title: Which AI Model Should You Use for Which Task?
summary: "A framework for matching AI models to tasks based on four dimensions: verifiability, task difficulty, cost and latency sensitivity, and consequence of a miss. Weaker models work well on verifiable, mechanical tasks with good harnesses and skills, while stronger models handle high-stakes, hard-to-verify work where judgment is essential."
tier: community
language: en
tags:
  - ai models
  - task decomposition
  - verifiability
  - model selection
  - harness design
  - routing
  - cost optimization
  - reasoning models
system: copilot
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
  input_hash: 253c102426c6ee1320888751a28fa9426307653876c8658dd3fc6bd2fd7492fd
evidence:
  - kind: blog
    url: https://freddysblog.com/2026/08/23/which-model-should-you-use-for-which-task/
    title: Which AI Model Should You Use for Which Task?
    date: "2026-08-23"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://freddysblog.com/2026/08/23/which-model-should-you-use-for-which-task/
    title: Which AI Model Should You Use for Which Task?
    date: "2026-08-23"
    commit: null
    t: null
    quote: A good harness manufactures verifiability the raw task didn't have - and every bit of verifiability you add lets you reach for a weaker model.
  - kind: blog
    url: https://freddysblog.com/2026/08/23/which-model-should-you-use-for-which-task/
    title: Which AI Model Should You Use for Which Task?
    date: "2026-08-23"
    commit: null
    t: null
    quote: Staff each task with the cheapest model that clears that bar, and save your architects for the handful where judgment really is the product.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://freddysblog.com/2026/08/23/which-model-should-you-use-for-which-task
source_id: freddysblog
source_name: Freddys blog
url: https://freddysblog.com/2026/08/23/which-model-should-you-use-for-which-task/
published_at: "2026-08-23T09:00:00.000Z"
author: Freddy Kristiansen
full_text: false
words: 3747
quotes:
  - text: A good harness manufactures verifiability the raw task didn't have - and every bit of verifiability you add lets you reach for a weaker model.
    why_it_matters: Shows that the scaffolding around a model is as important as the model itself in determining which tier you need
  - text: Staff each task with the cheapest model that clears that bar, and save your architects for the handful where judgment really is the product.
    why_it_matters: "Encapsulates the economic principle: use strong judgment where it adds value, automate the rest"
code_objects_mentioned: []
systems:
  - copilot
  - development
  - administration
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
  probed_at: "2026-10-07T11:50:11.629Z"
---

# Which AI Model Should You Use for Which Task?

[Read the post](https://freddysblog.com/2026/08/23/which-model-should-you-use-for-which-task/) · Freddys blog (Freddy Kristiansen) · 2026-08-23 · 3747 words · tier community · **unreviewed** (machine-generated)

> A framework for matching AI models to tasks based on four dimensions: verifiability, task difficulty, cost and latency sensitivity, and consequence of a miss. Weaker models work well on verifiable, mechanical tasks with good harnesses and skills, while stronger models handle high-stakes, hard-to-verify work where judgment is essential.

## Key points

- Verifiability is the master lever - if you can cheaply catch mistakes, you can use a weaker model
- Match model tier to task profile: strong models for reasoning-heavy, poorly verifiable work; cheap models for mechanical, highly verifiable tasks run at volume
- Harnesses (structured output, tools, retries, checks) and skills (pre-written runbooks) let you reach down to cheaper models by moving difficulty out of the model into the environment
- The four dimensions - verifiability, difficulty, cost sensitivity, and consequence - often pull against each other; decompose tasks and use different models for different pieces when they conflict
- Routing services and self-hosting offer alternatives to hard-coding one model, but keep high-stakes, unverifiable decisions under your own control while letting routers handle verifiable, low-stakes traffic

## Quotes

- "A good harness manufactures verifiability the raw task didn't have - and every bit of verifiability you add lets you reach for a weaker model." (Shows that the scaffolding around a model is as important as the model itself in determining which tier you need)
- "Staff each task with the cheapest model that clears that bar, and save your architects for the handful where judgment really is the product." (Encapsulates the economic principle: use strong judgment where it adds value, automate the rest)

## Context

- Features: model selection framework, task verifiability assessment, harness and scaffolding, skills as runbooks, automatic routing, open-weights models, self-hosted models, model comparison

Source: Freddys blog, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
