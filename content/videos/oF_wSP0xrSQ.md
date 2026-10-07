---
id: video/oF_wSP0xrSQ
type: video
title: I Built an AI That Turns Business Central Telemetry Into GitHub Issues (Automatically)
summary: Business Central Musings demo of a daily Azure Logic App that reads Business Central telemetry from Application Insights with KQL, has an AI analyze RT00002 database lock timeout events, and creates GitHub issues with root cause and resolution. Covers the blob storage watermark and Bicep/YAML deployment.
tier: community
language: en
tags:
  - telemetry
  - application insights
  - kql queries
  - logic app
  - ai analysis
  - github integration
  - database locking
  - rt00002 events
  - blob storage
  - infrastructure as code
  - bicep
  - yaml
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:12:03.732Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 95dd567dac31e2ed7be21c683570f8b980bf67f0fe534851332d527c4241ac1b
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=10s
    title: I Built an AI That Turns Business Central Telemetry Into GitHub Issues (Automatically)
    date: "2026-03-10T01:27:17.000Z"
    commit: null
    t: 10
    quote: this is an automated BC telemetry triage with Azure logic app and AI
  - kind: video
    url: https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=23s
    title: I Built an AI That Turns Business Central Telemetry Into GitHub Issues (Automatically)
    date: "2026-03-10T01:27:17.000Z"
    commit: null
    t: 23
    quote: when something uh bad happens in BC uh the platform or your uh custom code will trigger an event um and uh the event
  - kind: video
    url: https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=140s
    title: I Built an AI That Turns Business Central Telemetry Into GitHub Issues (Automatically)
    date: "2026-03-10T01:27:17.000Z"
    commit: null
    t: 140
    quote: The automation is based on logic app. Logo runs once a day. It looks for certain events.
  - kind: video
    url: https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=165s
    title: I Built an AI That Turns Business Central Telemetry Into GitHub Issues (Automatically)
    date: "2026-03-10T01:27:17.000Z"
    commit: null
    t: 165
    quote: the AI tool has also access to the GitHub repository. With those two things, the AI tool can um determine a resolution
  - kind: video
    url: https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=270s
    title: I Built an AI That Turns Business Central Telemetry Into GitHub Issues (Automatically)
    date: "2026-03-10T01:27:17.000Z"
    commit: null
    t: 270
    quote: capturing the last time when the logic app was run
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: oF_wSP0xrSQ
channel: yt-bcmusings
source_name: Business Central Musings
url: https://www.youtube.com/watch?v=oF_wSP0xrSQ
published_at: "2026-03-10T01:27:17.000Z"
duration_s: 1111
captions: derived
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction and overview of telemetry triage tool
  - t: 117
    title: Solution architecture and GitHub issue generation
  - t: 221
    title: Video agenda and demo plan
  - t: 290
    title: Visual Studio Code demo - table, codeunit, and page
  - t: 432
    title: Application Insights telemetry logs
  - t: 487
    title: Logic app workflow and query
  - t: 658
    title: AI analysis and GitHub issue resolution
  - t: 754
    title: Blob storage watermark for tracking
  - t: 803
    title: GitHub labels and API integration
  - t: 926
    title: Infrastructure as code and expanding the solution
features:
  - name: Automated BC telemetry triage with Azure Logic App and AI
    status: unclear
    t: 0
    verified: false
    status_source: video
  - name: KQL query for database lock timeouts
    status: unclear
    t: 44
    verified: false
    status_source: video
  - name: GitHub issue generation from telemetry
    status: unclear
    t: 129
    verified: false
    status_source: video
  - name: AI-powered root cause analysis
    status: unclear
    t: 165
    verified: false
    status_source: video
  - name: Blob storage watermark for incremental runs
    status: unclear
    t: 270
    verified: false
    status_source: video
  - name: GitHub REST API for issue and label creation
    status: unclear
    t: 555
    verified: false
    status_source: video
  - name: Infrastructure as Code with Bicep and YAML
    status: unclear
    t: 943
    verified: false
    status_source: video
objects_mentioned:
  - table Table
  - codeunit Codeunit
  - page Page
quotes:
  - t: 10
    text: this is an automated BC telemetry triage with Azure logic app and AI
    check: exact
  - t: 23
    text: when something uh bad happens in BC uh the platform or your uh custom code will trigger an event um and uh the event
    check: exact
  - t: 140
    text: The automation is based on logic app. Logo runs once a day. It looks for certain events.
    check: exact
  - t: 165
    text: the AI tool has also access to the GitHub repository. With those two things, the AI tool can um determine a resolution
    check: exact
  - t: 270
    text: capturing the last time when the logic app was run
    check: fuzzy
---

# I Built an AI That Turns Business Central Telemetry Into GitHub Issues (Automatically)

> Business Central Musings demo of a daily Azure Logic App that reads Business Central telemetry from Application Insights with KQL, has an AI analyze RT00002 database lock timeout events, and creates GitHub issues with root cause and resolution. Covers the blob storage watermark and Bicep/YAML deployment.

[Watch on YouTube](https://www.youtube.com/watch?v=oF_wSP0xrSQ) · Business Central Musings · 2026-03-10 · 18:31 · tier community · **unreviewed** (machine-generated)

## Overview

The video presents an automated telemetry triage tool. When the platform or custom code raises an event in Business Central, the event lands in Application Insights. A Logic App runs once a day, queries for specific events, passes them to an AI tool that also has access to the GitHub repository, and creates a GitHub issue with the event details, a root cause analysis and a proposed resolution.

The demo covers a Visual Studio Code example (table, codeunit and page), the telemetry logs in Application Insights, the Logic App workflow and KQL query, and the AI analysis. It also shows a blob storage watermark file for incremental runs, GitHub labels and REST API calls, and exporting the Azure services as infrastructure as code with Bicep or YAML. The demo only looks at RT00002 events, and the presenter says it can be expanded to other events.

## Key points

- The Logic App runs once a day, queries Application Insights for chosen events, and sends them to an AI tool.
- The demo's KQL query retrieves traces where the event ID is RT00002, which are database locking timeouts.
- The AI tool also has access to the GitHub repository, which lets it propose a resolution along with the root cause.
- A text file in Azure Blob Storage holds the last successful run time, so each KQL query only covers new data. It must be initialized manually if the file does not exist.
- Issues and labels are created through the GitHub REST API, which needs authentication. Labels must exist beforehand or be created via the API.
- Result quality depends on prompt engineering of the AI step.
- Logic App, Application Insights and Blob Storage can be exported and deployed with Bicep or YAML templates using Azure CLI.

## Chapters

- [0:00](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=0s) Introduction and overview of telemetry triage tool
- [1:57](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=117s) Solution architecture and GitHub issue generation
- [3:41](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=221s) Video agenda and demo plan
- [4:50](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=290s) Visual Studio Code demo - table, codeunit, and page
- [7:12](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=432s) Application Insights telemetry logs
- [8:07](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=487s) Logic app workflow and query
- [10:58](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=658s) AI analysis and GitHub issue resolution
- [12:34](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=754s) Blob storage watermark for tracking
- [13:23](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=803s) GitHub labels and API integration
- [15:26](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=926s) Infrastructure as code and expanding the solution

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Automated BC telemetry triage with Azure Logic App and AI | status not stated, demoed | [0:00](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=0s) |  |
| KQL query for database lock timeouts | status not stated, demoed | [0:44](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=44s) |  |
| GitHub issue generation from telemetry | status not stated, demoed | [2:09](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=129s) |  |
| AI-powered root cause analysis | status not stated, demoed | [2:45](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=165s) |  |
| Blob storage watermark for incremental runs | status not stated, demoed | [4:30](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=270s) |  |
| GitHub REST API for issue and label creation | status not stated, demoed | [9:15](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=555s) |  |
| Infrastructure as Code with Bicep and YAML | status not stated | [15:43](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=943s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "Table" at [5:10](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=310s)
- codeunit "Codeunit" at [5:10](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=310s)
- page "Page" at [5:10](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=310s)

Not found in BC28-30: table "Table", codeunit "Codeunit", page "Page".

## Quotes

- [0:10](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=10s) "this is an automated BC telemetry triage with Azure logic app and AI"
- [0:23](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=23s) "when something uh bad happens in BC uh the platform or your uh custom code will trigger an event um and uh the event"
- [2:20](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=140s) "The automation is based on logic app. Logo runs once a day. It looks for certain events."
- [2:45](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=165s) "the AI tool has also access to the GitHub repository. With those two things, the AI tool can um determine a resolution"
- [4:30](https://www.youtube.com/watch?v=oF_wSP0xrSQ&t=270s) "capturing the last time when the logic app was run"
