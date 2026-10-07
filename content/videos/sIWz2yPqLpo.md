---
id: video/sIWz2yPqLpo
type: video
title: "Business Central BC29: Control Global Symbol Versions"
summary: Global symbol download in AL development and the BC 29 "global source enforce minor version" setting, which limits downloaded symbols to the major and minor version in app.json. Covers how BC 28 resolved only the major version, and how to configure the setting.
tier: community
language: en
tags:
  - al symbols
  - global symbol download
  - version control
  - app.json
  - minor version enforcement
  - al-go
  - development workflow
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T00:17:53.935Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 61997204c90b6beace3bec254611bf02c95f8eba3527c471dff7f49a8940e8ed
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=sIWz2yPqLpo&t=16s
    title: "Business Central BC29: Control Global Symbol Versions"
    date: "2026-09-19T10:00:38.000Z"
    commit: null
    t: 16
    quote: Now, with Business Central 2026 release wave two, Microsoft is giving AL developer more control over which symbols are downloaded
  - kind: video
    url: https://www.youtube.com/watch?v=sIWz2yPqLpo&t=28s
    title: "Business Central BC29: Control Global Symbol Versions"
    date: "2026-09-19T10:00:38.000Z"
    commit: null
    t: 28
    quote: Now, in BC 29, you can restrict global symbol resolution to a major or to a and minor versions specified in your app.json
  - kind: video
    url: https://www.youtube.com/watch?v=sIWz2yPqLpo&t=251s
    title: "Business Central BC29: Control Global Symbol Versions"
    date: "2026-09-19T10:00:38.000Z"
    commit: null
    t: 251
    quote: The minimum version of the dependent extension. So, the way download symbol to work, it looks for the minimum version that your app can
  - kind: video
    url: https://www.youtube.com/watch?v=sIWz2yPqLpo&t=327s
    title: "Business Central BC29: Control Global Symbol Versions"
    date: "2026-09-19T10:00:38.000Z"
    commit: null
    t: 327
    quote: starting 2026 release wave one, obviously 28, Microsoft introduced an ability to download symbols from global source
  - kind: video
    url: https://www.youtube.com/watch?v=sIWz2yPqLpo&t=580s
    title: "Business Central BC29: Control Global Symbol Versions"
    date: "2026-09-19T10:00:38.000Z"
    commit: null
    t: 580
    quote: in version 29, Microsoft enforce minor version by introducing global source enforce minor version
links:
  learn: []
  objects: []
  features:
    - feature/573357
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: sIWz2yPqLpo
channel: yt-saurav
source_name: Saurav Dhyani
url: https://www.youtube.com/watch?v=sIWz2yPqLpo
published_at: "2026-09-19T10:00:38.000Z"
duration_s: 954
captions: derived
audience:
  - developer
  - administrator
chapters:
  - t: 0
    title: Introduction and Overview
  - t: 50
    title: What are AL Symbols
  - t: 130
    title: Traditional Symbol Download Methods
  - t: 290
    title: Global Symbol Download in BC 28
  - t: 380
    title: Problem with Version Resolution
  - t: 580
    title: BC 29 Global Source Enforce Minor Version
  - t: 745
    title: Use Cases and Scenarios
  - t: 830
    title: Summary and Key Takeaways
features:
  - name: Global Symbol Download
    status: unclear
    t: 290
    verified: false
    status_source: video
  - name: Global Source Enforce Minor Version
    status: ga
    t: 580
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573357"
  - name: Minor Version Boundary Control
    status: ga
    t: 580
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573357"
  - name: AL Extension Settings Configuration
    status: ga
    t: 656
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573357"
objects_mentioned:
  - table Customer
  - page Customer Card
quotes:
  - t: 16
    text: Now, with Business Central 2026 release wave two, Microsoft is giving AL developer more control over which symbols are downloaded
    check: exact
  - t: 28
    text: Now, in BC 29, you can restrict global symbol resolution to a major or to a and minor versions specified in your app.json
    check: exact
  - t: 251
    text: The minimum version of the dependent extension. So, the way download symbol to work, it looks for the minimum version that your app can
    check: exact
  - t: 327
    text: starting 2026 release wave one, obviously 28, Microsoft introduced an ability to download symbols from global source
    check: exact
  - t: 580
    text: in version 29, Microsoft enforce minor version by introducing global source enforce minor version
    check: exact
---

# Business Central BC29: Control Global Symbol Versions

> Global symbol download in AL development and the BC 29 "global source enforce minor version" setting, which limits downloaded symbols to the major and minor version in app.json. Covers how BC 28 resolved only the major version, and how to configure the setting.

[Watch on YouTube](https://www.youtube.com/watch?v=sIWz2yPqLpo) · Saurav Dhyani · 2026-09-19 · 15:54 · tier community · **unreviewed** (machine-generated)

## Overview

The video explains what AL symbols are and reviews the traditional ways to download them. It then covers global symbol download, introduced in BC 28, which lets AL developers get symbols from a global source without a Docker environment or a Business Central client instance.
It then describes the version resolution problem in BC 28, where only the major version is respected. The BC 29 setting, global source enforce minor version, constrains downloads to the major and minor version in app.json while still taking the newest patch in that minor version. The video demos the setting and walks through use cases.

## Key points

- Global symbol download was introduced in BC 28. It downloads symbols from a global source without a Docker environment or a Business Central client instance.
- Symbols from the global source are read-only versions without code.
- In version 28 only the major version from app.json is respected when symbols are resolved.
- In BC 29 the global source enforce minor version option constrains downloads to the major and minor version in app.json. The newest patch within that minor version is still downloaded.
- The option must be enabled in settings or workspace configuration. It was disabled by default in BC 28.
- It is configured through the al.enforce.minor.version parameter, at user or workspace level. Workspace settings are recommended for teams.
- Symbol download looks for the minimum version of the dependent extension that your app can use, as set in app.json.

## Chapters

- [0:00](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=0s) Introduction and Overview
- [0:50](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=50s) What are AL Symbols
- [2:10](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=130s) Traditional Symbol Download Methods
- [4:50](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=290s) Global Symbol Download in BC 28
- [6:20](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=380s) Problem with Version Resolution
- [9:40](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=580s) BC 29 Global Source Enforce Minor Version
- [12:25](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=745s) Use Cases and Scenarios
- [13:50](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=830s) Summary and Key Takeaways

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Global Symbol Download | status not stated, demoed | [4:50](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=290s) |  |
| Global Source Enforce Minor Version | generally available (roadmap [573357](../features/573357.md)), demoed | [9:40](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=580s) |  |
| Minor Version Boundary Control | generally available (roadmap [573357](../features/573357.md)), demoed | [9:40](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=580s) |  |
| AL Extension Settings Configuration | generally available (roadmap [573357](../features/573357.md)), demoed | [10:56](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=656s) |  |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "Customer" at [1:49](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=109s)
- page "Customer Card" at [1:49](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=109s)

## Quotes

- [0:16](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=16s) "Now, with Business Central 2026 release wave two, Microsoft is giving AL developer more control over which symbols are downloaded"
- [0:28](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=28s) "Now, in BC 29, you can restrict global symbol resolution to a major or to a and minor versions specified in your app.json"
- [4:11](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=251s) "The minimum version of the dependent extension. So, the way download symbol to work, it looks for the minimum version that your app can"
- [5:27](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=327s) "starting 2026 release wave one, obviously 28, Microsoft introduced an ability to download symbols from global source"
- [9:40](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=580s) "in version 29, Microsoft enforce minor version by introducing global source enforce minor version"

## Disclaimers in the video

- [14:37](https://www.youtube.com/watch?v=sIWz2yPqLpo&t=877s) other: when you download from global symbols, the only thing that you will not get when you get into AL Explorer ...

Presenters (as heard): Saurav Dhyani.
