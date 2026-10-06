---
id: video/MYZOkoSmtZ0
type: video
title: Store Business Central Telemetry in Azure Application Insights
summary: "Creating an Azure Application Insights resource to store Business Central telemetry: subscription, resource group, name, region, and the choice between classic and workspace-based mode. The video says to use workspace-based mode because classic is deprecated."
tier: official
language: en
tags:
  - telemetry
  - application insights
  - azure
  - data storage
  - resource deployment
  - workspace configuration
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T21:44:30.450Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: a7a0f69f00da035b2b5b07e465fee62fd41779be16fa4a95f9310bbb621c8e33
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=0s
    title: Store Business Central Telemetry in Azure Application Insights
    date: "2023-12-05T10:59:41.000Z"
    commit: null
    t: 0
    quote: to get Telemetry data for business Central you need a place to store that data and that place is called application insights
  - kind: video
    url: https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=82s
    title: Store Business Central Telemetry in Azure Application Insights
    date: "2023-12-05T10:59:41.000Z"
    commit: null
    t: 82
    quote: you can choose between two different modes of the resource a classic and a workspace us should should always use the workspace uh based
  - kind: video
    url: https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=96s
    title: Store Business Central Telemetry in Azure Application Insights
    date: "2023-12-05T10:59:41.000Z"
    commit: null
    t: 96
    quote: the workspace is actually where the data is stored
  - kind: video
    url: https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=116s
    title: Store Business Central Telemetry in Azure Application Insights
    date: "2023-12-05T10:59:41.000Z"
    commit: null
    t: 116
    quote: within a few minutes I will get my application insights resource and I'm ready to add that to business Central
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: MYZOkoSmtZ0
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=MYZOkoSmtZ0
published_at: "2023-12-05T10:59:41.000Z"
duration_s: 149
captions: full
audience:
  - administrator
  - developer
  - functional consultant
chapters:
  - t: 0
    title: Introduction to Application Insights
  - t: 20
    title: Creating an Application Insights Resource
  - t: 46
    title: Configuring Instance Name and Region
  - t: 82
    title: Selecting Resource Mode and Workspace
  - t: 116
    title: Deployment and Readiness
features:
  - name: Application Insights for Business Central Telemetry
    status: unclear
    t: 0
    verified: false
    status_source: video
  - name: Workspace-based Application Insights Mode
    status: unclear
    t: 82
    verified: false
    status_source: video
objects_mentioned: []
quotes:
  - t: 0
    text: to get Telemetry data for business Central you need a place to store that data and that place is called application insights
    check: exact
  - t: 82
    text: you can choose between two different modes of the resource a classic and a workspace us should should always use the workspace uh based
    check: exact
  - t: 96
    text: the workspace is actually where the data is stored
    check: exact
  - t: 116
    text: within a few minutes I will get my application insights resource and I'm ready to add that to business Central
    check: exact
---

# Store Business Central Telemetry in Azure Application Insights

> Creating an Azure Application Insights resource to store Business Central telemetry: subscription, resource group, name, region, and the choice between classic and workspace-based mode. The video says to use workspace-based mode because classic is deprecated.

[Watch on YouTube](https://www.youtube.com/watch?v=MYZOkoSmtZ0) · Microsoft Dynamics 365 Business Central (YouTube) · 2023-12-05 · 2:29 · tier official · **unreviewed** (machine-generated)

## Overview

Business Central telemetry needs a place to be stored, and the video names Azure Application Insights as that place. It walks through creating the resource in the Azure portal, from the introduction through setting the instance name and region, choosing the resource mode and workspace, and waiting for deployment.

The resource can be created in classic or workspace-based mode. The presenter says to always use workspace-based mode, since the workspace is where the data is stored and classic mode is deprecated. Deployment takes a few minutes, after which the resource is ready to be connected to Business Central.

## Key points

- Business Central telemetry is stored in Azure Application Insights, which must be provisioned in the Azure portal.
- The resource is configured with subscription, resource group, name, and region.
- Two resource modes exist: classic and workspace-based. Use workspace-based.
- Classic mode is deprecated (marked subject to change in the video).
- In workspace-based mode, the workspace is where the data is actually stored.
- Deployment takes a few minutes, after which the resource can be added to Business Central.

## Chapters

- [0:00](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=0s) Introduction to Application Insights
- [0:20](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=20s) Creating an Application Insights Resource
- [0:46](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=46s) Configuring Instance Name and Region
- [1:22](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=82s) Selecting Resource Mode and Workspace
- [1:56](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=116s) Deployment and Readiness

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Application Insights for Business Central Telemetry | status not stated, demoed | [0:00](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=0s) |  |
| Workspace-based Application Insights Mode | status not stated, demoed | [1:22](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=82s) |  |

## Quotes

- [0:00](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=0s) "to get Telemetry data for business Central you need a place to store that data and that place is called application insights"
- [1:22](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=82s) "you can choose between two different modes of the resource a classic and a workspace us should should always use the workspace uh based"
- [1:36](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=96s) "the workspace is actually where the data is stored"
- [1:56](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=116s) "within a few minutes I will get my application insights resource and I'm ready to add that to business Central"

## Disclaimers in the video

- [1:22](https://www.youtube.com/watch?v=MYZOkoSmtZ0&t=82s) subject-to-change: the classic is a deprecated mode
