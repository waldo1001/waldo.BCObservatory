---
id: post/stefanmaron-com/https-stefanmaron-com-posts-modify-deserves-the-same-rule-as-validate--71cb43acff
type: post
title: I Can Turn Off My Code. I Can't Turn Off Yours.
summary: When developers set RunTrigger to false on Insert, Modify, or DeleteAll, they silently disable all subscribers including base app code and third-party extensions. The post argues that triggers should run by default because developers cannot know at compile time what logic they would disable, and proposes the platform should dynamically check at runtime whether anything is registered on a trigger before deciding whether to skip the expensive per-row execution.
tier: community
language: en
tags:
  - performance
  - triggers
  - runtrigger
  - modify
  - deletall
  - bulk operations
  - extension compatibility
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:47:34.466Z"
  flags: []
generated:
  at: "2026-10-07T22:42:12.892Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 9942dc888d6e627f3b0f38f388889ff6105285d8bd15f75aab93d0e62624de7b
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/modify-deserves-the-same-rule-as-validate/
    title: I Can Turn Off My Code. I Can't Turn Off Yours.
    date: "2026-08-18"
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
post_id: https://stefanmaron.com/posts/modify-deserves-the-same-rule-as-validate/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/modify-deserves-the-same-rule-as-validate/
published_at: "2026-08-18T07:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1749
quotes: []
code_objects_mentioned: []
systems:
  - development
  - platform
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:19.521Z"
---

# I Can Turn Off My Code. I Can't Turn Off Yours.

[Read the post](https://stefanmaron.com/posts/modify-deserves-the-same-rule-as-validate/) · Stefan Maron (Stefan Maron, MVP) · 2026-08-18 · 1749 words · tier community · reviewed (checked by Opus)

> When developers set RunTrigger to false on Insert, Modify, or DeleteAll, they silently disable all subscribers including base app code and third-party extensions. The post argues that triggers should run by default because developers cannot know at compile time what logic they would disable, and proposes the platform should dynamically check at runtime whether anything is registered on a trigger before deciding whether to skip the expensive per-row execution.

## Key points

- Setting RunTrigger to false disables every subscriber on the table, including base app and third-party extension code, which the caller cannot know about when writing the code.
- In a journal import, merging three Modify calls per line into one gave about 20% speedup with no change in which triggers ran; removing Modify entirely (32%) was rejected because it would skip a third-party subscriber.
- Proposal: keep RunTrigger, but make true mean run the trigger only if something is registered, and otherwise fall back to the same bulk SQL operation used with false.
- A separate gap: ModifyAll cannot request field Validate logic, so respecting validate subscribers forces a slow record-by-record loop.
- Other systems differ: Rails, Django and Hibernate bypass callbacks on bulk paths, SQL Server, Oracle and PostgreSQL offer per-statement set-based triggers, and Salesforce Apex triggers always get batches of records.

## Context

- Features: RunTrigger parameter, Insert trigger, Modify trigger, ModifyAll operation, Validate trigger, OnModify trigger

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
