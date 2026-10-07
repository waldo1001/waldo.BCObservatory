---
id: video/fHi8ohBlZro
type: video
title: "What's New: Enhancements to Job Queue (2024 release wave 2)"
summary: 'Job queue enhancements in Business Central 2024 release wave 2: jobs with the same category code now wait in a real queue instead of retrying by polling. The video covers the new "waiting" status, first-in-first-out order, and priority within a category code.'
tier: official
language: en
tags:
  - job queue
  - category code
  - background tasks
  - task scheduling
  - queue management
  - execution order
  - priority
  - concurrent execution
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:04:31.659Z"
  flags: []
generated:
  at: "2026-10-07T23:04:31.701Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: d74910e39b9b23635a7fc4caa9dff504ca9d426c34a5adf57af32bb91103eebc
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=fHi8ohBlZro&t=6s
    title: "Job Queue Category Code Queueing: generally available"
    date: "2024-10-08T15:00:44.000Z"
    commit: null
    t: 6
    quote: with this wave we technically already released it but it belongs to this
  - kind: video
    url: https://www.youtube.com/watch?v=fHi8ohBlZro&t=6s
    title: "What's New: Enhancements to Job Queue (2024 release wave 2)"
    date: "2024-10-08T15:00:44.000Z"
    commit: null
    t: 6
    quote: I would say with this wave we technically already released it but it belongs to this wave
  - kind: video
    url: https://www.youtube.com/watch?v=fHi8ohBlZro&t=32s
    title: "What's New: Enhancements to Job Queue (2024 release wave 2)"
    date: "2024-10-08T15:00:44.000Z"
    commit: null
    t: 32
    quote: it's not so much a q as it is a way to schedule background tasks
  - kind: video
    url: https://www.youtube.com/watch?v=fHi8ohBlZro&t=73s
    title: "What's New: Enhancements to Job Queue (2024 release wave 2)"
    date: "2024-10-08T15:00:44.000Z"
    commit: null
    t: 73
    quote: there's one particular field that we are going to touch upon in this presentation which is the um category code job Q category
  - kind: video
    url: https://www.youtube.com/watch?v=fHi8ohBlZro&t=159s
    title: "What's New: Enhancements to Job Queue (2024 release wave 2)"
    date: "2024-10-08T15:00:44.000Z"
    commit: null
    t: 159
    quote: if there a long Q it means you need to call very often like the pizza delivery or doctor you need to try many
  - kind: video
    url: https://www.youtube.com/watch?v=fHi8ohBlZro&t=210s
    title: "What's New: Enhancements to Job Queue (2024 release wave 2)"
    date: "2024-10-08T15:00:44.000Z"
    commit: null
    t: 210
    quote: if there's a category and someone else is running then we go to sleep so we set status to waiting
  - kind: video
    url: https://www.youtube.com/watch?v=fHi8ohBlZro&t=228s
    title: "What's New: Enhancements to Job Queue (2024 release wave 2)"
    date: "2024-10-08T15:00:44.000Z"
    commit: null
    t: 228
    quote: someone else was running at this time when they're done they will go out and say activate next next in Q
  - kind: video
    url: https://www.youtube.com/watch?v=fHi8ohBlZro&t=267s
    title: "What's New: Enhancements to Job Queue (2024 release wave 2)"
    date: "2024-10-08T15:00:44.000Z"
    commit: null
    t: 267
    quote: had a lot of sales postings and purchase postings all with very very large orders thousands of lines so each single order would
  - kind: video
    url: https://www.youtube.com/watch?v=fHi8ohBlZro&t=298s
    title: "What's New: Enhancements to Job Queue (2024 release wave 2)"
    date: "2024-10-08T15:00:44.000Z"
    commit: null
    t: 298
    quote: so that's why we introduced priority as well within that category
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: fHi8ohBlZro
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=fHi8ohBlZro
published_at: "2024-10-08T15:00:44.000Z"
duration_s: 338
captions: full
audience:
  - administrator
  - developer
  - functional consultant
chapters:
  - t: 0
    title: Introduction and Job Queue Overview
  - t: 32
    title: Job Queue Fundamentals and Category Codes
  - t: 93
    title: Previous Job Queue Behavior and Limitations
  - t: 199
    title: New Queue-Based Execution Model
  - t: 267
    title: Priority Support and Summary
features:
  - name: Job Queue Category Code Queueing
    status: ga
    t: 199
    verified: true
    status_source: video
  - name: Waiting Status for Queued Jobs
    status: unclear
    t: 210
    verified: false
    status_source: video
  - name: Job Queue Priority Support
    status: unclear
    t: 267
    verified: false
    status_source: video
  - name: Improved Execution Order in Job Queue
    status: unclear
    t: 248
    verified: false
    status_source: video
objects_mentioned:
  - other Job Q Category Code
quotes:
  - t: 6
    text: I would say with this wave we technically already released it but it belongs to this wave
    check: exact
  - t: 32
    text: it's not so much a q as it is a way to schedule background tasks
    check: exact
  - t: 73
    text: there's one particular field that we are going to touch upon in this presentation which is the um category code job Q category
    check: exact
  - t: 159
    text: if there a long Q it means you need to call very often like the pizza delivery or doctor you need to try many
    check: exact
  - t: 210
    text: if there's a category and someone else is running then we go to sleep so we set status to waiting
    check: exact
  - t: 228
    text: someone else was running at this time when they're done they will go out and say activate next next in Q
    check: exact
  - t: 267
    text: had a lot of sales postings and purchase postings all with very very large orders thousands of lines so each single order would
    check: fuzzy
  - t: 298
    text: so that's why we introduced priority as well within that category
    check: exact
---

# What's New: Enhancements to Job Queue (2024 release wave 2)

> Job queue enhancements in Business Central 2024 release wave 2: jobs with the same category code now wait in a real queue instead of retrying by polling. The video covers the new "waiting" status, first-in-first-out order, and priority within a category code.

[Watch on YouTube](https://www.youtube.com/watch?v=fHi8ohBlZro) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-10-08 · 5:38 · tier official · reviewed (checked by Opus)

## Overview

The video explains how the job queue handled jobs that share a category code before and what changed. Category codes are typically used for sales and purchase order posting, to avoid locking. Previously, a job that found another job running in its category kept retrying, so execution order was effectively random and long waits meant many retries.

Now jobs with the same category code line up in a queue. A waiting job sleeps with the new status "waiting", and the job that finishes activates the next one in the queue. Jobs run in first-in-first-out order. Priority support lets an urgent job skip ahead within its category code, for example an order with a truck waiting outside. The presenter notes the change was technically already released but belongs to this wave.

## Key points

- Jobs with the same job queue category code now line up in a queue and wait their turn, replacing retry-based polling.
- When a job finishes, it activates the next job in the queue.
- A new status, 'waiting', shows that a job is sleeping in the queue until its turn.
- Execution order is now first-in-first-out through sequential numbering, instead of the earlier random order from retries.
- Priority support lets a job skip the queue, but only within the same category code; the motivating case was a customer with long posting queues and urgent orders.
- The queueing applies only to jobs sharing a category code, typically sales and purchase order posting used to avoid locking.
- The presenter says the change was technically already released but belongs to 2024 release wave 2.

## Chapters

- [0:00](https://www.youtube.com/watch?v=fHi8ohBlZro&t=0s) Introduction and Job Queue Overview
- [0:32](https://www.youtube.com/watch?v=fHi8ohBlZro&t=32s) Job Queue Fundamentals and Category Codes
- [1:33](https://www.youtube.com/watch?v=fHi8ohBlZro&t=93s) Previous Job Queue Behavior and Limitations
- [3:19](https://www.youtube.com/watch?v=fHi8ohBlZro&t=199s) New Queue-Based Execution Model
- [4:27](https://www.youtube.com/watch?v=fHi8ohBlZro&t=267s) Priority Support and Summary

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Job Queue Category Code Queueing | generally available | [3:19](https://www.youtube.com/watch?v=fHi8ohBlZro&t=199s) | "with this wave we technically already released it but it belongs to this" ([0:06](https://www.youtube.com/watch?v=fHi8ohBlZro&t=6s)) |
| Waiting Status for Queued Jobs | status not stated | [3:30](https://www.youtube.com/watch?v=fHi8ohBlZro&t=210s) |  |
| Job Queue Priority Support | status not stated | [4:27](https://www.youtube.com/watch?v=fHi8ohBlZro&t=267s) |  |
| Improved Execution Order in Job Queue | status not stated | [4:08](https://www.youtube.com/watch?v=fHi8ohBlZro&t=248s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "Job Q Category Code" at [1:13](https://www.youtube.com/watch?v=fHi8ohBlZro&t=73s)

## Quotes

- [0:06](https://www.youtube.com/watch?v=fHi8ohBlZro&t=6s) "I would say with this wave we technically already released it but it belongs to this wave"
- [0:32](https://www.youtube.com/watch?v=fHi8ohBlZro&t=32s) "it's not so much a q as it is a way to schedule background tasks"
- [1:13](https://www.youtube.com/watch?v=fHi8ohBlZro&t=73s) "there's one particular field that we are going to touch upon in this presentation which is the um category code job Q category"
- [2:39](https://www.youtube.com/watch?v=fHi8ohBlZro&t=159s) "if there a long Q it means you need to call very often like the pizza delivery or doctor you need to try many"
- [3:30](https://www.youtube.com/watch?v=fHi8ohBlZro&t=210s) "if there's a category and someone else is running then we go to sleep so we set status to waiting"
- [3:48](https://www.youtube.com/watch?v=fHi8ohBlZro&t=228s) "someone else was running at this time when they're done they will go out and say activate next next in Q"
- [4:27](https://www.youtube.com/watch?v=fHi8ohBlZro&t=267s) "had a lot of sales postings and purchase postings all with very very large orders thousands of lines so each single order would"
- [4:58](https://www.youtube.com/watch?v=fHi8ohBlZro&t=298s) "so that's why we introduced priority as well within that category"

Presenters (as heard): Barrick Nutson.
