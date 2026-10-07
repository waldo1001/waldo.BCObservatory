---
id: post/stefanmaron-com/https-stefanmaron-com-posts-bc-background-processing-make-it-feel-fast--2f2ea5c72a
type: post
title: If You Can't Make It Fast, Make It Feel Fast
summary: When operations take time despite optimization, BC developers can make them feel faster by moving blocking work to the background instead of waiting for user input. The post explores four background processing tools (Page Background Tasks, StartSession, TaskScheduler, and Job Queue), their use cases, and how BC online's auto-scaling distributes batch workloads across server instances to keep UI sessions responsive.
tier: community
language: en
tags:
  - background processing
  - performance perception
  - job queue
  - async processing
  - page background tasks
  - user experience
  - scalability
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
  input_hash: f5fc5bbb12912bc47dd02d44727855501197e3b29efb10fdcb335c8eae22b82f
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/
    title: If You Can't Make It Fast, Make It Feel Fast
    date: "2026-02-24"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/
    title: If You Can't Make It Fast, Make It Feel Fast
    date: "2026-02-24"
    commit: null
    t: null
    quote: If users are blocked waiting for a process that doesn't require their input, that is a design choice - not a performance constraint.
  - kind: blog
    url: https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/
    title: If You Can't Make It Fast, Make It Feel Fast
    date: "2026-02-24"
    commit: null
    t: null
    quote: Recurring Job Queue entries should never error. Use Codeunit.Run with error handling, or wrap logic in if not Codeunit.Run(...).
  - kind: blog
    url: https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/
    title: If You Can't Make It Fast, Make It Feel Fast
    date: "2026-02-24"
    commit: null
    t: null
    quote: If you push heavy work into TaskScheduler or Job Queue entries, that work can be distributed across whichever NST in the cluster has capacity.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/
published_at: "2026-02-24T08:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1311
quotes:
  - text: If users are blocked waiting for a process that doesn't require their input, that is a design choice - not a performance constraint.
    why_it_matters: Frames the core insight that separating user experience from technical performance is an architectural decision, not a limitation
  - text: Recurring Job Queue entries should never error. Use Codeunit.Run with error handling, or wrap logic in if not Codeunit.Run(...).
    why_it_matters: Provides critical best practice for preventing silent failures that stop background processing without alerting administrators
  - text: If you push heavy work into TaskScheduler or Job Queue entries, that work can be distributed across whichever NST in the cluster has capacity.
    why_it_matters: Explains the cloud advantage of database-backed background tasks that enable auto-scaling and server instance load balancing
code_objects_mentioned:
  - table Job Queue Log Entry
  - codeunit Codeunit.Run
systems:
  - platform
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
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:41.363Z"
---

# If You Can't Make It Fast, Make It Feel Fast

[Read the post](https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/) · Stefan Maron (Stefan Maron, MVP) · 2026-02-24 · 1311 words · tier community · **unreviewed** (machine-generated)

> When operations take time despite optimization, BC developers can make them feel faster by moving blocking work to the background instead of waiting for user input. The post explores four background processing tools (Page Background Tasks, StartSession, TaskScheduler, and Job Queue), their use cases, and how BC online's auto-scaling distributes batch workloads across server instances to keep UI sessions responsive.

## Key points

- User perception matters as much as actual performance; blocking work that doesn't need the user can feel slow even if correct
- BC offers four layered background processing options suited for different scenarios, from read-only UI calculations to recurring scheduled tasks
- Job Queue is most capable for recurring work but recurring entries should never error; chain them so failures in transactional entries don't stop the recurring job
- TaskScheduler and Job Queue work cross-cluster in BC online, allowing heavy batch work to distribute across available servers while keeping UI sessions on responsive instances
- Medical device manufacturer case study: moving production planning from synchronous to background Job Queue eliminated 2-minute waits and deadlocks with 20 concurrent users

## Quotes

- "If users are blocked waiting for a process that doesn't require their input, that is a design choice - not a performance constraint." (Frames the core insight that separating user experience from technical performance is an architectural decision, not a limitation)
- "Recurring Job Queue entries should never error. Use Codeunit.Run with error handling, or wrap logic in if not Codeunit.Run(...)." (Provides critical best practice for preventing silent failures that stop background processing without alerting administrators)
- "If you push heavy work into TaskScheduler or Job Queue entries, that work can be distributed across whichever NST in the cluster has capacity." (Explains the cloud advantage of database-backed background tasks that enable auto-scaling and server instance load balancing)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- table "Job Queue Log Entry"
- codeunit "Codeunit.Run"

## Context

- Features: Page Background Tasks, StartSession, TaskScheduler, Job Queue, Change Global Dimensions, Job Queue Category, background session processing

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
