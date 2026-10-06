---
id: video/IAacWsvav1E
type: video
title: "What's New: Enhanced Index Management (2026 release wave 1)"
summary: "Enhanced index management in Business Central (2026 release wave 1): a Table Data Information Management page with per-index drilldown, a runtime index on/off toggle in the client, per-company index activation, and new telemetry events LC 63 and 64 for index enable and disable."
tier: official
language: en
tags:
  - index management
  - database performance
  - storage optimization
  - table data information
  - index lifecycle
  - telemetry
  - per-company configuration
  - sql indexes
system: platform
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T16:54:36.192Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: bfb19e0eaadeff9f9676cb1aa1f6678bad4fa2d7b9efb1e57be368efecb3e773
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=IAacWsvav1E&t=37s
    title: "What's New: Enhanced Index Management (2026 release wave 1)"
    date: "2026-04-08T10:01:34.000Z"
    commit: null
    t: 37
    quote: you can now analyze your data performance and based on that you can make it faster um and maybe also save something on your
  - kind: video
    url: https://www.youtube.com/watch?v=IAacWsvav1E&t=219s
    title: "What's New: Enhanced Index Management (2026 release wave 1)"
    date: "2026-04-08T10:01:34.000Z"
    commit: null
    t: 219
    quote: the full kind of C/SIDE experience is coming now where you can now turn indexes on and off directly in the client
  - kind: video
    url: https://www.youtube.com/watch?v=IAacWsvav1E&t=250s
    title: "What's New: Enhanced Index Management (2026 release wave 1)"
    date: "2026-04-08T10:01:34.000Z"
    commit: null
    t: 250
    quote: If we start here with the system ID, it is defined as being unique. It would be a semantically different experience if you turned
  - kind: video
    url: https://www.youtube.com/watch?v=IAacWsvav1E&t=316s
    title: "What's New: Enhanced Index Management (2026 release wave 1)"
    date: "2026-04-08T10:01:34.000Z"
    commit: null
    t: 316
    quote: those indices you have normally not been able to turn on but you can now turn them on here
  - kind: video
    url: https://www.youtube.com/watch?v=IAacWsvav1E&t=368s
    title: "What's New: Enhanced Index Management (2026 release wave 1)"
    date: "2026-04-08T10:01:34.000Z"
    commit: null
    t: 368
    quote: when we develop the base app, we are trying to guess the types of indexes that would make sense, but we don't necessarily know
  - kind: video
    url: https://www.youtube.com/watch?v=IAacWsvav1E&t=471s
    title: "What's New: Enhanced Index Management (2026 release wave 1)"
    date: "2026-04-08T10:01:34.000Z"
    commit: null
    t: 471
    quote: I want to highlight what I think is a new ability that we haven't had since C/SIDE and that is the ability to create
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: IAacWsvav1E
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=IAacWsvav1E
published_at: "2026-04-08T10:01:34.000Z"
duration_s: 816
captions: full
audience:
  - administrator
  - developer
  - functional consultant
chapters:
  - t: 0
    title: Introduction and Motivation
  - t: 37
    title: Overview of Enhanced Index Management
  - t: 82
    title: Table Data Information Management Page Demo
  - t: 128
    title: Index Details and Technical Information
  - t: 179
    title: History of Index Management and New Capabilities
  - t: 263
    title: Turning Indexes On and Off Demo
  - t: 344
    title: Per-Company Index Management and Design Philosophy
  - t: 414
    title: Telemetry and Documentation
  - t: 530
    title: Summary and Resources
  - t: 580
    title: General Business Central Resources
features:
  - name: Table Data Information Management Page with Index Drilldown
    status: unclear
    t: 82
    verified: false
    status_source: video
  - name: Index Field and Coverage Information Display
    status: unclear
    t: 143
    verified: false
    status_source: video
  - name: Runtime Index Toggle Capability in Client
    status: unclear
    t: 179
    verified: false
    status_source: video
  - name: Per-Company Selective Index Activation
    status: unclear
    t: 344
    verified: false
    status_source: video
  - name: Index Lifecycle Telemetry Events
    status: unclear
    t: 414
    verified: false
    status_source: video
objects_mentioned:
  - page Table Information page
  - page Table Data Information Management page
quotes:
  - t: 37
    text: you can now analyze your data performance and based on that you can make it faster um and maybe also save something on your
    check: exact
  - t: 219
    text: the full kind of C/SIDE experience is coming now where you can now turn indexes on and off directly in the client
    check: exact
  - t: 250
    text: If we start here with the system ID, it is defined as being unique. It would be a semantically different experience if you turned
    check: exact
  - t: 316
    text: those indices you have normally not been able to turn on but you can now turn them on here
    check: fuzzy
  - t: 368
    text: when we develop the base app, we are trying to guess the types of indexes that would make sense, but we don't necessarily know
    check: exact
  - t: 471
    text: I want to highlight what I think is a new ability that we haven't had since C/SIDE and that is the ability to create
    check: exact
---

# What's New: Enhanced Index Management (2026 release wave 1)

> Enhanced index management in Business Central (2026 release wave 1): a Table Data Information Management page with per-index drilldown, a runtime index on/off toggle in the client, per-company index activation, and new telemetry events LC 63 and 64 for index enable and disable.

[Watch on YouTube](https://www.youtube.com/watch?v=IAacWsvav1E) · Microsoft Dynamics 365 Business Central (YouTube) · 2026-04-08 · 13:36 · tier official · **unreviewed** (machine-generated)

## Overview

The video explains how Business Central now exposes index information and control in the client. From the table information page, users can drill down to per-index details for each table and company, including index size, usage, and which fields are in or included in an index.

It also demos turning indexes on and off at runtime, which resembles the C/SIDE experience. Indexes can ship disabled by default and be enabled per company where the functionality and data justify the storage and update cost. The video closes with the new lifecycle telemetry events and documentation links.

## Key points

- The Table Data Information Management page lets you drill down from table information to per-index data, per table and per company, including index size and advanced usage information.
- A detailed view shows which fields are in an index and which are included, so you can judge whether it covers a query without reading source code. It needs technical knowledge to interpret.
- Indexes can be turned on and off in the client at runtime. Indexes defined as unique, such as the one on system ID, cannot be disabled.
- In SaaS, disabled indexes are queued for the next maintenance window. In on-premises or local deployments the change applies immediately.
- Indexes can ship disabled by default and be enabled per company, avoiding storage and update costs for indexes a company does not need.
- Telemetry events LC 63 and 64 record index enable and disable done through the client, alongside existing lifecycle events for AL-based index operations. They are documented at ak.ms/bctelemetry.

## Chapters

- [0:00](https://www.youtube.com/watch?v=IAacWsvav1E&t=0s) Introduction and Motivation
- [0:37](https://www.youtube.com/watch?v=IAacWsvav1E&t=37s) Overview of Enhanced Index Management
- [1:22](https://www.youtube.com/watch?v=IAacWsvav1E&t=82s) Table Data Information Management Page Demo
- [2:08](https://www.youtube.com/watch?v=IAacWsvav1E&t=128s) Index Details and Technical Information
- [2:59](https://www.youtube.com/watch?v=IAacWsvav1E&t=179s) History of Index Management and New Capabilities
- [4:23](https://www.youtube.com/watch?v=IAacWsvav1E&t=263s) Turning Indexes On and Off Demo
- [5:44](https://www.youtube.com/watch?v=IAacWsvav1E&t=344s) Per-Company Index Management and Design Philosophy
- [6:54](https://www.youtube.com/watch?v=IAacWsvav1E&t=414s) Telemetry and Documentation
- [8:50](https://www.youtube.com/watch?v=IAacWsvav1E&t=530s) Summary and Resources
- [9:40](https://www.youtube.com/watch?v=IAacWsvav1E&t=580s) General Business Central Resources

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Table Data Information Management Page with Index Drilldown | status not stated, demoed | [1:22](https://www.youtube.com/watch?v=IAacWsvav1E&t=82s) |  |
| Index Field and Coverage Information Display | status not stated, demoed | [2:23](https://www.youtube.com/watch?v=IAacWsvav1E&t=143s) |  |
| Runtime Index Toggle Capability in Client | status not stated, demoed | [2:59](https://www.youtube.com/watch?v=IAacWsvav1E&t=179s) |  |
| Per-Company Selective Index Activation | status not stated, demoed | [5:44](https://www.youtube.com/watch?v=IAacWsvav1E&t=344s) |  |
| Index Lifecycle Telemetry Events | status not stated | [6:54](https://www.youtube.com/watch?v=IAacWsvav1E&t=414s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- page "Table Information page" at [1:22](https://www.youtube.com/watch?v=IAacWsvav1E&t=82s)
- page "Table Data Information Management page" at [0:58](https://www.youtube.com/watch?v=IAacWsvav1E&t=58s)

## Quotes

- [0:37](https://www.youtube.com/watch?v=IAacWsvav1E&t=37s) "you can now analyze your data performance and based on that you can make it faster um and maybe also save something on your"
- [3:39](https://www.youtube.com/watch?v=IAacWsvav1E&t=219s) "the full kind of C/SIDE experience is coming now where you can now turn indexes on and off directly in the client"
- [4:10](https://www.youtube.com/watch?v=IAacWsvav1E&t=250s) "If we start here with the system ID, it is defined as being unique. It would be a semantically different experience if you turned"
- [5:16](https://www.youtube.com/watch?v=IAacWsvav1E&t=316s) "those indices you have normally not been able to turn on but you can now turn them on here"
- [6:08](https://www.youtube.com/watch?v=IAacWsvav1E&t=368s) "when we develop the base app, we are trying to guess the types of indexes that would make sense, but we don't necessarily know"
- [7:51](https://www.youtube.com/watch?v=IAacWsvav1E&t=471s) "I want to highlight what I think is a new ability that we haven't had since C/SIDE and that is the ability to create"

Presenters (as heard): Kenny Pontoppidan, Mass Gram.
