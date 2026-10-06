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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T21:41:42.645Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: ff682d0201d64a078925ab63914680b8d56fcb283f9c4520c733b0a837f7db26
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
---

# I Can Turn Off My Code. I Can't Turn Off Yours.

> When developers set RunTrigger to false on Insert, Modify, or DeleteAll, they silently disable all subscribers including base app code and third-party extensions. The post argues that triggers should run by default because developers cannot know at compile time what logic they would disable, and proposes the platform should dynamically check at runtime whether anything is registered on a trigger before deciding whether to skip the expensive per-row execution.

[Read the post](https://stefanmaron.com/posts/modify-deserves-the-same-rule-as-validate/) · Stefan Maron (Stefan Maron, MVP) · 2026-08-18 · 1749 words · tier community · **unreviewed** (machine-generated)

## Key points

- Setting RunTrigger false disables all subscriber logic, not just the developer's own code, making it a decision that shouldn't be made at the call site
- Bulk operations like DeleteAll skip per-row execution for performance, but forcing row-by-row trigger execution when nothing is registered wastes that performance gain unnecessarily
- The platform should check at runtime whether code is registered on a trigger and fall back to bulk SQL operations when nothing needs to run, making RunTrigger true safe by default
- ModifyAll currently has no way to request Validate() triggers at all, only OnModify, forcing developers to choose between correctness and performance with no middle ground
- SQL Server, Salesforce, and other systems handle this differently - either by moving checks to the database level or by batching trigger invocations over sets instead of individual rows

## Context

- Features: RunTrigger parameter, Insert trigger, Modify trigger, DeleteAll trigger, ModifyAll operation, Validate trigger, OnModify trigger

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
