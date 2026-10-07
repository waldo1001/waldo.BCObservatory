---
id: video/VX_aPhcsIOc
type: video
title: Enable Cost Control Strategies for Business Central Telemetry
summary: How to control Application Insights telemetry costs for Business Central. Ingesting data costs money, and so does keeping it longer than the default retention policy. The video shows where to view usage and estimated monthly costs under the Configure menu, and how to set a daily ingestion cap (for example, 100 MB per day) with a warning for when it is exceeded. Per the speaker, the first four GB per month are free, and data beyond the cap is no longer ingested.
tier: official
language: en
tags:
  - telemetry
  - cost control
  - daily cap
  - application insights
  - data retention
  - usage monitoring
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:14:34.296Z"
  flags: []
generated:
  at: "2026-10-07T23:14:34.340Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: c42cd5fb1e301e0cf04d2257e35583f6264bf68b90fcfd339d65236099c77b33
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=VX_aPhcsIOc&t=0s
    title: Enable Cost Control Strategies for Business Central Telemetry
    date: "2023-12-05T10:49:38.000Z"
    commit: null
    t: 0
    quote: it is important just like any other as a resource that you control the cost of this it cost data to ingest data into
  - kind: video
    url: https://www.youtube.com/watch?v=VX_aPhcsIOc&t=0s
    title: Enable Cost Control Strategies for Business Central Telemetry
    date: "2023-12-05T10:49:38.000Z"
    commit: null
    t: 0
    quote: it cost data to ingest data into Telemetry and it costs to uh keep it for longer than the default retention policy
  - kind: video
    url: https://www.youtube.com/watch?v=VX_aPhcsIOc&t=40s
    title: Enable Cost Control Strategies for Business Central Telemetry
    date: "2023-12-05T10:49:38.000Z"
    commit: null
    t: 40
    quote: once you have data here you um you will be able to see see your monthly costs
  - kind: video
    url: https://www.youtube.com/watch?v=VX_aPhcsIOc&t=81s
    title: Enable Cost Control Strategies for Business Central Telemetry
    date: "2023-12-05T10:49:38.000Z"
    commit: null
    t: 81
    quote: the first I believe it's four gigabytes a month is free and after that you pay for your ingestion
  - kind: video
    url: https://www.youtube.com/watch?v=VX_aPhcsIOc&t=81s
    title: Enable Cost Control Strategies for Business Central Telemetry
    date: "2023-12-05T10:49:38.000Z"
    commit: null
    t: 81
    quote: so in the beginning maybe simply set 100 megabytes or 0.1 so 100 megabytes per day
  - kind: video
    url: https://www.youtube.com/watch?v=VX_aPhcsIOc&t=98s
    title: Enable Cost Control Strategies for Business Central Telemetry
    date: "2023-12-05T10:49:38.000Z"
    commit: null
    t: 98
    quote: if you get a warning it means that there is data that you not not getting anymore
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: VX_aPhcsIOc
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=VX_aPhcsIOc
published_at: "2023-12-05T10:49:38.000Z"
duration_s: 133
captions: full
audience:
  - administrator
  - decision maker
  - functional consultant
chapters:
  - t: 0
    title: Introduction to Telemetry Cost Management
  - t: 20
    title: Accessing Usage and Cost Information
  - t: 40
    title: Understanding Monthly Costs and Pricing
  - t: 81
    title: Setting Daily Cap and Alerts
  - t: 119
    title: Conclusion and Next Steps
features:
  - name: Telemetry Usage and Estimated Costs View
    status: unclear
    t: 20
    verified: false
    status_source: video
  - name: Daily Cap for Telemetry Ingestion
    status: unclear
    t: 61
    verified: false
    status_source: video
  - name: Telemetry Daily Cap Warnings
    status: unclear
    t: 98
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 0
    text: it is important just like any other as a resource that you control the cost of this it cost data to ingest data into
    check: exact
  - t: 0
    text: it cost data to ingest data into Telemetry and it costs to uh keep it for longer than the default retention policy
    check: exact
  - t: 40
    text: once you have data here you um you will be able to see see your monthly costs
    check: exact
  - t: 81
    text: the first I believe it's four gigabytes a month is free and after that you pay for your ingestion
    check: exact
  - t: 81
    text: so in the beginning maybe simply set 100 megabytes or 0.1 so 100 megabytes per day
    check: exact
  - t: 98
    text: if you get a warning it means that there is data that you not not getting anymore
    check: exact
---

# Enable Cost Control Strategies for Business Central Telemetry

> How to control Application Insights telemetry costs for Business Central. Ingesting data costs money, and so does keeping it longer than the default retention policy. The video shows where to view usage and estimated monthly costs under the Configure menu, and how to set a daily ingestion cap (for example, 100 MB per day) with a warning for when it is exceeded. Per the speaker, the first four GB per month are free, and data beyond the cap is no longer ingested.

[Watch on YouTube](https://www.youtube.com/watch?v=VX_aPhcsIOc) · Microsoft Dynamics 365 Business Central (YouTube) · 2023-12-05 · 2:13 · tier official · reviewed (checked by Opus)

## Overview

A short demo of how to manage the cost of Business Central telemetry sent to Application Insights. Ingesting data costs money, so the video treats it like any other resource whose cost should be controlled.

It shows where to see telemetry usage and estimated monthly costs, which read zero for a new resource until data has been ingested. It then covers setting a daily cap in gigabytes or megabytes and the warnings that appear when the cap is approached or exceeded. When a warning appears, data is being lost because it is no longer ingested.

## Key points

- Telemetry costs come from ingesting data and from retaining it longer than the default retention policy.
- Usage and estimated costs are found under the Configure menu of the Application Insights resource and show an overview of monthly payments.
- A new resource shows zero cost until data has been ingested.
- The speaker believes the first four gigabytes per month are free; ingestion after that is charged.
- A daily cap sets the maximum gigabytes or megabytes of data to ingest per day; the speaker suggests starting with 100 MB (0.1 GB) per day.
- Set a warning for when the cap is exceeded: a warning means data is no longer being ingested.

## Chapters

- [0:00](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=0s) Introduction to Telemetry Cost Management
- [0:20](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=20s) Accessing Usage and Cost Information
- [0:40](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=40s) Understanding Monthly Costs and Pricing
- [1:21](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=81s) Setting Daily Cap and Alerts
- [1:59](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=119s) Conclusion and Next Steps

## Features

| Feature | Status | At |
|---|---|---|
| Telemetry Usage and Estimated Costs View | status not stated, demoed | [0:20](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=20s) |
| Daily Cap for Telemetry Ingestion | status not stated, demoed | [1:01](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=61s) |
| Telemetry Daily Cap Warnings | status not stated, demoed | [1:38](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=98s) |

## Quotes

- [0:00](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=0s) "it is important just like any other as a resource that you control the cost of this it cost data to ingest data into"
- [0:00](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=0s) "it cost data to ingest data into Telemetry and it costs to uh keep it for longer than the default retention policy"
- [0:40](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=40s) "once you have data here you um you will be able to see see your monthly costs"
- [1:21](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=81s) "the first I believe it's four gigabytes a month is free and after that you pay for your ingestion"
- [1:21](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=81s) "so in the beginning maybe simply set 100 megabytes or 0.1 so 100 megabytes per day"
- [1:38](https://www.youtube.com/watch?v=VX_aPhcsIOc&t=98s) "if you get a warning it means that there is data that you not not getting anymore"
