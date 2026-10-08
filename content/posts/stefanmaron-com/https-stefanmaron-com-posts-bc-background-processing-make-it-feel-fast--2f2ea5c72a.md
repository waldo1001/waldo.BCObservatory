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
  state: reviewed
  by: opus
  at: "2026-10-08T01:56:34.347Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
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
  objects:
    - object/table/474
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

[Read the post](https://stefanmaron.com/posts/bc-background-processing-make-it-feel-fast/) · Stefan Maron (Stefan Maron, MVP) · 2026-02-24 · 1311 words · tier community · reviewed (checked by Opus)

> When operations take time despite optimization, BC developers can make them feel faster by moving blocking work to the background instead of waiting for user input. The post explores four background processing tools (Page Background Tasks, StartSession, TaskScheduler, and Job Queue), their use cases, and how BC online's auto-scaling distributes batch workloads across server instances to keep UI sessions responsive.

## Key points

- How fast a process feels to users matters as much as how fast it actually is; making users wait for work that needs no input from them is a design choice
- BC offers four layered background options: Page Background Tasks for read-only page data, StartSession for fire-and-forget work, TaskScheduler for database-backed scheduled tasks, and Job Queue for recurring, logged, user-managed jobs
- Recurring Job Queue entries should never error; let them only find work and create separate transactional entries so one failure does not stop the rest
- In BC online, TaskScheduler and Job Queue work can run on any server instance in the cluster, while Page Background Tasks and StartSession stay on the caller's instance
- In a hearing-aid manufacturing case, moving production planning on order release into a Job Queue removed the user wait and made each planning faster by running them one after another

## Quotes

- "If users are blocked waiting for a process that doesn't require their input, that is a design choice - not a performance constraint." (Frames the core insight that separating user experience from technical performance is an architectural decision, not a limitation)
- "Recurring Job Queue entries should never error. Use Codeunit.Run with error handling, or wrap logic in if not Codeunit.Run(...)." (Provides critical best practice for preventing silent failures that stop background processing without alerting administrators)
- "If you push heavy work into TaskScheduler or Job Queue entries, that work can be distributed across whichever NST in the cluster has capacity." (Explains the cloud advantage of database-backed background tasks that enable auto-scaling and server instance load balancing)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 474 "Job Queue Log Entry"](../../objects/table/474.md)

## Context

- Features: Page Background Tasks, StartSession, TaskScheduler, Job Queue, Change Global Dimensions, Job Queue Category, background session processing

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
