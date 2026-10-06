---
id: video/b54ehH4AlFA
type: video
title: "What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry"
summary: "Telemetry events for Business Central financial reporting, viewed in Application Insights: creation of financial reports, row definitions and column definitions, with definition codes logged. Also mentions modification, deletion and report-run events. A disclaimer in the facts says preview, version 2025 release wave one."
tier: official
language: en
tags:
  - telemetry
  - financial reporting
  - application insights
  - row definitions
  - column definitions
  - report lifecycle events
  - auditing
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:55:36.438Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 119e4ceb9f75fa5d4490249ffb533b22ca363ee47d98aa79e46bcab0d5f08a0f
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=b54ehH4AlFA&t=5s
    title: "What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry"
    date: "2025-03-20T15:45:15.000Z"
    commit: null
    t: 5
    quote: if you use financial reporting and Telemetry and have an interest in auditing let me show you what we are cooking on for the
  - kind: video
    url: https://www.youtube.com/watch?v=b54ehH4AlFA&t=118s
    title: "What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry"
    date: "2025-03-20T15:45:15.000Z"
    commit: null
    t: 118
    quote: these are all changes to financial reporting why like what's going on with Telemetry well let because I did turn on Telemetry for this
  - kind: video
    url: https://www.youtube.com/watch?v=b54ehH4AlFA&t=138s
    title: "What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry"
    date: "2025-03-20T15:45:15.000Z"
    commit: null
    t: 138
    quote: take traces from the last day I'm filtering on my own user telemeter ID this GID is safe you can't hack me with this
  - kind: video
    url: https://www.youtube.com/watch?v=b54ehH4AlFA&t=180s
    title: "What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry"
    date: "2025-03-20T15:45:15.000Z"
    commit: null
    t: 180
    quote: we have an event financial report created where we lock the report definition code I also did a modification then I have Telemetry for
  - kind: video
    url: https://www.youtube.com/watch?v=b54ehH4AlFA&t=200s
    title: "What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry"
    date: "2025-03-20T15:45:15.000Z"
    commit: null
    t: 200
    quote: we have the road def definition code loged there and also similar life cycle events for creating column definitions with the column defition definition
  - kind: video
    url: https://www.youtube.com/watch?v=b54ehH4AlFA&t=220s
    title: "What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry"
    date: "2025-03-20T15:45:15.000Z"
    commit: null
    t: 220
    quote: modifying a ro column definition you would have seen that deleting a row column or report definition you would have seen that and even
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: b54ehH4AlFA
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=b54ehH4AlFA
published_at: "2025-03-20T15:45:15.000Z"
duration_s: 246
captions: full
audience:
  - administrator
  - functional consultant
  - developer
chapters:
  - t: 0
    title: Introduction to Financial Reporting Enhancements
  - t: 35
    title: "Demo: Creating and Editing Financial Reports"
  - t: 98
    title: Transition to Telemetry Overview
  - t: 138
    title: Application Insights Query Setup
  - t: 180
    title: Telemetry Events for Financial Reporting
  - t: 220
    title: Summary of Telemetry Capabilities
features:
  - name: Financial Report Creation Telemetry
    status: unclear
    t: 180
    verified: false
    status_source: video
  - name: Row Definition Telemetry
    status: unclear
    t: 180
    verified: false
    status_source: video
  - name: Column Definition Telemetry
    status: unclear
    t: 200
    verified: false
    status_source: video
  - name: Financial Report Modification Telemetry
    status: unclear
    t: 220
    verified: false
    status_source: video
  - name: Financial Report Usage Telemetry
    status: unclear
    t: 220
    verified: false
    status_source: video
objects_mentioned:
  - other Application Insights
quotes:
  - t: 5
    text: if you use financial reporting and Telemetry and have an interest in auditing let me show you what we are cooking on for the
    check: exact
  - t: 118
    text: these are all changes to financial reporting why like what's going on with Telemetry well let because I did turn on Telemetry for this
    check: exact
  - t: 138
    text: take traces from the last day I'm filtering on my own user telemeter ID this GID is safe you can't hack me with this
    check: exact
  - t: 180
    text: we have an event financial report created where we lock the report definition code I also did a modification then I have Telemetry for
    check: exact
  - t: 200
    text: we have the road def definition code loged there and also similar life cycle events for creating column definitions with the column defition definition
    check: exact
  - t: 220
    text: modifying a ro column definition you would have seen that deleting a row column or report definition you would have seen that and even
    check: exact
---

# What's Cooking in Business Central: Financial Reporting Enhancements (part 2): Telemetry

> Telemetry events for Business Central financial reporting, viewed in Application Insights: creation of financial reports, row definitions and column definitions, with definition codes logged. Also mentions modification, deletion and report-run events. A disclaimer in the facts says preview, version 2025 release wave one.

[Watch on YouTube](https://www.youtube.com/watch?v=b54ehH4AlFA) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-03-20 · 4:06 · tier official · **unreviewed** (machine-generated)

## Overview

The video is the second part of a "What's Cooking" series on financial reporting enhancements. After a short demo of creating and editing financial reports, row definitions and column definitions, it moves to the telemetry those actions produce.

The presenter had telemetry turned on for the demo environment. In Application Insights, they query traces from the last day, filtered on their own user telemetry ID. The results show a financial report created event with the report definition code, similar events for row definitions and column definitions, and a modification event. The presenter also says there are events for modifying and deleting these objects, and for running reports. These were not demonstrated. The target audience is anyone who uses financial reporting and cares about auditing.

## Key points

- Creating a financial report logs a 'financial report created' event with the report definition code and a timestamp in Application Insights.
- Row definition lifecycle events log the row definition code in custom dimensions.
- Column definition lifecycle events log the column definition code.
- Modification and deletion events for reports, row definitions and column definitions are mentioned but not demonstrated.
- Events for report execution (usage) are mentioned but not demonstrated.
- The demo queries Application Insights traces from the last day, filtered by the user's telemetry ID.
- Telemetry must be turned on for the environment to see these events. The presenter turned it on for the demo.

## Chapters

- [0:00](https://www.youtube.com/watch?v=b54ehH4AlFA&t=0s) Introduction to Financial Reporting Enhancements
- [0:35](https://www.youtube.com/watch?v=b54ehH4AlFA&t=35s) Demo: Creating and Editing Financial Reports
- [1:38](https://www.youtube.com/watch?v=b54ehH4AlFA&t=98s) Transition to Telemetry Overview
- [2:18](https://www.youtube.com/watch?v=b54ehH4AlFA&t=138s) Application Insights Query Setup
- [3:00](https://www.youtube.com/watch?v=b54ehH4AlFA&t=180s) Telemetry Events for Financial Reporting
- [3:40](https://www.youtube.com/watch?v=b54ehH4AlFA&t=220s) Summary of Telemetry Capabilities

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Financial Report Creation Telemetry | status not stated, demoed | [3:00](https://www.youtube.com/watch?v=b54ehH4AlFA&t=180s) |  |
| Row Definition Telemetry | status not stated, demoed | [3:00](https://www.youtube.com/watch?v=b54ehH4AlFA&t=180s) |  |
| Column Definition Telemetry | status not stated, demoed | [3:20](https://www.youtube.com/watch?v=b54ehH4AlFA&t=200s) |  |
| Financial Report Modification Telemetry | status not stated | [3:40](https://www.youtube.com/watch?v=b54ehH4AlFA&t=220s) |  |
| Financial Report Usage Telemetry | status not stated | [3:40](https://www.youtube.com/watch?v=b54ehH4AlFA&t=220s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- other "Application Insights" at [1:58](https://www.youtube.com/watch?v=b54ehH4AlFA&t=118s)

## Quotes

- [0:05](https://www.youtube.com/watch?v=b54ehH4AlFA&t=5s) "if you use financial reporting and Telemetry and have an interest in auditing let me show you what we are cooking on for the"
- [1:58](https://www.youtube.com/watch?v=b54ehH4AlFA&t=118s) "these are all changes to financial reporting why like what's going on with Telemetry well let because I did turn on Telemetry for this"
- [2:18](https://www.youtube.com/watch?v=b54ehH4AlFA&t=138s) "take traces from the last day I'm filtering on my own user telemeter ID this GID is safe you can't hack me with this"
- [3:00](https://www.youtube.com/watch?v=b54ehH4AlFA&t=180s) "we have an event financial report created where we lock the report definition code I also did a modification then I have Telemetry for"
- [3:20](https://www.youtube.com/watch?v=b54ehH4AlFA&t=200s) "we have the road def definition code loged there and also similar life cycle events for creating column definitions with the column defition definition"
- [3:40](https://www.youtube.com/watch?v=b54ehH4AlFA&t=220s) "modifying a ro column definition you would have seen that deleting a row column or report definition you would have seen that and even"

## Disclaimers in the video

- [3:40](https://www.youtube.com/watch?v=b54ehH4AlFA&t=220s) preview: now here in version 2025 release wave one
