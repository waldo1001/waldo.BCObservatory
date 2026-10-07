---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2025-d365-business-central-why-is-my-job-queue-tasks-cue-in-red--5ef8045384
type: post
title: "D365 Business Central: Why is my Job Queue Tasks Cue in Red?"
summary: The Job Queue Tasks cue turns red in Business Central when more than four tasks are queued or processing. You can adjust this threshold through the Cue Setup page or directly in the Cue Setup table using a configuration package.
tier: community
language: en
tags:
  - job queue
  - cue setup
  - threshold
  - configuration
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:47:28.413Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 719b57f541fc9fc4a9de4aa68db1b0ea267771575eb6f665c343ed6dd3aeab7c
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2025/d365-business-central-why-is-my-job-queue-tasks-cue-in-red/
    title: "D365 Business Central: Why is my Job Queue Tasks Cue in Red?"
    date: "2025-05-05"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2025/d365-business-central-why-is-my-job-queue-tasks-cue-in-red/
    title: "D365 Business Central: Why is my Job Queue Tasks Cue in Red?"
    date: "2025-05-05"
    commit: null
    t: null
    quote: The cue turns red when it displays more than four records.
  - kind: blog
    url: https://thatnavguy.com/blog/2025/d365-business-central-why-is-my-job-queue-tasks-cue-in-red/
    title: "D365 Business Central: Why is my Job Queue Tasks Cue in Red?"
    date: "2025-05-05"
    commit: null
    t: null
    quote: This is controlled by the Threshold 2 and the High Range Style setting in the Cue Setup.
  - kind: blog
    url: https://thatnavguy.com/blog/2025/d365-business-central-why-is-my-job-queue-tasks-cue-in-red/
    title: "D365 Business Central: Why is my Job Queue Tasks Cue in Red?"
    date: "2025-05-05"
    commit: null
    t: null
    quote: You can use a Configuration Package to update table 9701 Cue Setup.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2025/d365-business-central-why-is-my-job-queue-tasks-cue-in-red/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2025/d365-business-central-why-is-my-job-queue-tasks-cue-in-red/
published_at: "2025-05-05T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 131
quotes:
  - text: The cue turns red when it displays more than four records.
    why_it_matters: Explains the default behavior triggering the red visual indicator in Business Central cues
  - text: This is controlled by the Threshold 2 and the High Range Style setting in the Cue Setup.
    why_it_matters: Identifies the exact settings responsible for the red cue appearance that users can modify
  - text: You can use a Configuration Package to update table 9701 Cue Setup.
    why_it_matters: Provides a systematic approach to make changes affecting all users or multiple instances
code_objects_mentioned:
  - table Cue Setup
systems:
  - administration
  - platform
versions_mentioned: []
---

# D365 Business Central: Why is my Job Queue Tasks Cue in Red?

[Read the post](https://thatnavguy.com/blog/2025/d365-business-central-why-is-my-job-queue-tasks-cue-in-red/) · That NAV Guy (Teddy Herryanto, MVP) · 2025-05-05 · 131 words · tier community · **unreviewed** (machine-generated)

> The Job Queue Tasks cue turns red in Business Central when more than four tasks are queued or processing. You can adjust this threshold through the Cue Setup page or directly in the Cue Setup table using a configuration package.

## Key points

- The red cue indicates more than four tasks by default, controlled by Threshold 2 and High Range Style settings
- Changes from the page affect only the current user
- The Cue Setup table (9701) can be modified via configuration packages exported to and reimported from Excel
- Adjusting threshold values removes the red warning unless you prefer to keep it

## Quotes

- "The cue turns red when it displays more than four records." (Explains the default behavior triggering the red visual indicator in Business Central cues)
- "This is controlled by the Threshold 2 and the High Range Style setting in the Cue Setup." (Identifies the exact settings responsible for the red cue appearance that users can modify)
- "You can use a Configuration Package to update table 9701 Cue Setup." (Provides a systematic approach to make changes affecting all users or multiple instances)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- table "Cue Setup"

## Context

- Features: Cue Setup, Job Queue Tasks Cue, Threshold Configuration, Configuration Package

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
