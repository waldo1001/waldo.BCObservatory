---
id: video/564XMP2IyLM
type: video
title: Use Retention Policies to Avoid Unnecessary Database Growth
summary: Retention policies in Business Central let administrators trim activity logging and archiving tables to avoid unnecessary database growth. The video demos enabling a default policy on the job queue log entry table and using filters to set different retention periods for failed and successful entries.
tier: official
language: en
tags:
  - retention policies
  - database growth
  - data archiving
  - job queue
  - logging
  - automated deletion
  - data governance
system: administration
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:13:53.105Z"
  flags: []
generated:
  at: "2026-10-07T23:13:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: bcba157e62c284880e32f355e7a7f23d9d31c95a601b961cec40976b0879a8a8
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=564XMP2IyLM&t=0s
    title: Use Retention Policies to Avoid Unnecessary Database Growth
    date: "2023-12-13T13:07:38.000Z"
    commit: null
    t: 0
    quote: some tables in business Central are intended for activity logging And archiving it's a good idea to keep these tables trimmed so you don't
  - kind: video
    url: https://www.youtube.com/watch?v=564XMP2IyLM&t=23s
    title: Use Retention Policies to Avoid Unnecessary Database Growth
    date: "2023-12-13T13:07:38.000Z"
    commit: null
    t: 23
    quote: here you see the default retention policies provided with business Central it's up to you to enable the policies you want enforced
  - kind: video
    url: https://www.youtube.com/watch?v=564XMP2IyLM&t=43s
    title: Use Retention Policies to Avoid Unnecessary Database Growth
    date: "2023-12-13T13:07:38.000Z"
    commit: null
    t: 43
    quote: I don't want to store all data in this table for one month it depends depends on if the job queue has failed or
  - kind: video
    url: https://www.youtube.com/watch?v=564XMP2IyLM&t=43s
    title: Use Retention Policies to Avoid Unnecessary Database Growth
    date: "2023-12-13T13:07:38.000Z"
    commit: null
    t: 43
    quote: so I I deselect the apply to all records setting let me Define the policies for the subsets of this table
  - kind: video
    url: https://www.youtube.com/watch?v=564XMP2IyLM&t=63s
    title: Use Retention Policies to Avoid Unnecessary Database Growth
    date: "2023-12-13T13:07:38.000Z"
    commit: null
    t: 63
    quote: I want to keep failed job queue log entries for 5 days I want to allow people some reaction time so that they can
  - kind: video
    url: https://www.youtube.com/watch?v=564XMP2IyLM&t=83s
    title: Use Retention Policies to Avoid Unnecessary Database Growth
    date: "2023-12-13T13:07:38.000Z"
    commit: null
    t: 83
    quote: I can enable this retention policy and this will now continuously make sure that data in the job key log entry is deleted after
  - kind: video
    url: https://www.youtube.com/watch?v=564XMP2IyLM&t=104s
    title: Use Retention Policies to Avoid Unnecessary Database Growth
    date: "2023-12-13T13:07:38.000Z"
    commit: null
    t: 104
    quote: save your database cost and do a good thing for performance use for policies
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
video_id: 564XMP2IyLM
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=564XMP2IyLM
published_at: "2023-12-13T13:07:38.000Z"
duration_s: 127
captions: full
audience:
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction to retention policies
  - t: 23
    title: Default retention policies and job queue example
  - t: 43
    title: Configuring retention period and filtering records
  - t: 63
    title: Setting retention for failed and successful job queue entries
  - t: 83
    title: Enabling the retention policy
  - t: 104
    title: Summary and benefits
features:
  - name: Retention Policies
    status: unclear
    t: 0
    verified: false
    status_source: video
  - name: Default Retention Policies
    status: unclear
    t: 23
    verified: false
    status_source: video
  - name: Filtered Retention Policies
    status: unclear
    t: 43
    verified: false
    status_source: video
objects_mentioned:
  - table job CU log entry
  - table job queue log entry
quotes:
  - t: 0
    text: some tables in business Central are intended for activity logging And archiving it's a good idea to keep these tables trimmed so you don't
    check: exact
  - t: 23
    text: here you see the default retention policies provided with business Central it's up to you to enable the policies you want enforced
    check: exact
  - t: 43
    text: I don't want to store all data in this table for one month it depends depends on if the job queue has failed or
    check: exact
  - t: 43
    text: so I I deselect the apply to all records setting let me Define the policies for the subsets of this table
    check: exact
  - t: 63
    text: I want to keep failed job queue log entries for 5 days I want to allow people some reaction time so that they can
    check: exact
  - t: 83
    text: I can enable this retention policy and this will now continuously make sure that data in the job key log entry is deleted after
    check: exact
  - t: 104
    text: save your database cost and do a good thing for performance use for policies
    check: exact
---

# Use Retention Policies to Avoid Unnecessary Database Growth

> Retention policies in Business Central let administrators trim activity logging and archiving tables to avoid unnecessary database growth. The video demos enabling a default policy on the job queue log entry table and using filters to set different retention periods for failed and successful entries.

[Watch on YouTube](https://www.youtube.com/watch?v=564XMP2IyLM) · Microsoft Dynamics 365 Business Central (YouTube) · 2023-12-13 · 2:07 · tier official · reviewed (checked by Opus)

## Overview

The video explains that some Business Central tables are meant for activity logging and archiving, and that keeping them trimmed prevents unnecessary database growth. It shows the default retention policies that ship with the product and notes that each policy must be enabled by the user.

Using the job queue log entry table as an example, it sets a retention period and applies filters so failed entries are kept for 5 days and successful entries get a separate period. Once enabled, the policy continuously deletes data older than the retention period. The video presents this as a way to reduce database cost and help performance.

## Key points

- Business Central ships default retention policies, but none are enforced until you enable the ones you want.
- Retention policies are meant for activity logging and archiving tables, such as the job queue log entries table.
- To apply different retention periods to subsets of records, deselect the 'apply to all records' setting and define a policy for each subset.
- The demo keeps failed job queue log entries for 5 days so people have time to analyze errors, and successful entries for only 2 days.
- After a policy is enabled, it continuously deletes data once each retention period has passed.
- Stated benefits are lower database cost and better performance.

## Chapters

- [0:00](https://www.youtube.com/watch?v=564XMP2IyLM&t=0s) Introduction to retention policies
- [0:23](https://www.youtube.com/watch?v=564XMP2IyLM&t=23s) Default retention policies and job queue example
- [0:43](https://www.youtube.com/watch?v=564XMP2IyLM&t=43s) Configuring retention period and filtering records
- [1:03](https://www.youtube.com/watch?v=564XMP2IyLM&t=63s) Setting retention for failed and successful job queue entries
- [1:23](https://www.youtube.com/watch?v=564XMP2IyLM&t=83s) Enabling the retention policy
- [1:44](https://www.youtube.com/watch?v=564XMP2IyLM&t=104s) Summary and benefits

## Features

| Feature | Status | At |
|---|---|---|
| Retention Policies | status not stated, demoed | [0:00](https://www.youtube.com/watch?v=564XMP2IyLM&t=0s) |
| Default Retention Policies | status not stated, demoed | [0:23](https://www.youtube.com/watch?v=564XMP2IyLM&t=23s) |
| Filtered Retention Policies | status not stated, demoed | [0:43](https://www.youtube.com/watch?v=564XMP2IyLM&t=43s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "job CU log entry" at [0:43](https://www.youtube.com/watch?v=564XMP2IyLM&t=43s)
- [table 474 "Job Queue Log Entry"](../objects/table/474.md) at [0:43](https://www.youtube.com/watch?v=564XMP2IyLM&t=43s)

Not found in BC28-30: table "job CU log entry".

## Quotes

- [0:00](https://www.youtube.com/watch?v=564XMP2IyLM&t=0s) "some tables in business Central are intended for activity logging And archiving it's a good idea to keep these tables trimmed so you don't"
- [0:23](https://www.youtube.com/watch?v=564XMP2IyLM&t=23s) "here you see the default retention policies provided with business Central it's up to you to enable the policies you want enforced"
- [0:43](https://www.youtube.com/watch?v=564XMP2IyLM&t=43s) "I don't want to store all data in this table for one month it depends depends on if the job queue has failed or"
- [0:43](https://www.youtube.com/watch?v=564XMP2IyLM&t=43s) "so I I deselect the apply to all records setting let me Define the policies for the subsets of this table"
- [1:03](https://www.youtube.com/watch?v=564XMP2IyLM&t=63s) "I want to keep failed job queue log entries for 5 days I want to allow people some reaction time so that they can"
- [1:23](https://www.youtube.com/watch?v=564XMP2IyLM&t=83s) "I can enable this retention policy and this will now continuously make sure that data in the job key log entry is deleted after"
- [1:44](https://www.youtube.com/watch?v=564XMP2IyLM&t=104s) "save your database cost and do a good thing for performance use for policies"
