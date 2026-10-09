---
id: video/-vCiEloR61U
type: video
title: "Business Central 29: New ModuleInfo Properties Explained"
summary: "ModuleInfo in Business Central 29 (Runtime 18.0 or later) gets four new properties: help, ULA, privacy statement and context sensitive help URL. They expose app manifest metadata to AL code. The video demos reading them with NavApp.GetCurrentModuleInfo and NavApp.GetModuleInfo, and compares this with version 28."
tier: community
language: en
tags:
  - moduleinfo
  - app manifest
  - metadata access
  - al development
  - help links
  - privacy statement
  - ula
  - context sensitive help
  - version 29
  - runtime 18.0
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:18:55.507Z"
  flags: []
generated:
  at: "2026-10-09T00:29:02.995Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: b7af7ee24542220238035f2c84a292f012b16c5dd0457b946e32f0309714ef72
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=-vCiEloR61U&t=14s
    title: "Business Central 29: New ModuleInfo Properties Explained"
    date: "2026-09-16T10:00:18.000Z"
    commit: null
    t: 14
    quote: in version 29 the module info type that has been expanded with four new properties that give AL developer access to help
  - kind: video
    url: https://www.youtube.com/watch?v=-vCiEloR61U&t=83s
    title: "Business Central 29: New ModuleInfo Properties Explained"
    date: "2026-09-16T10:00:18.000Z"
    commit: null
    t: 83
    quote: in version 29 with runtime 18.0 and later we have a much cleaner way to retrieve some of this meta ...
  - kind: video
    url: https://www.youtube.com/watch?v=-vCiEloR61U&t=99s
    title: "Business Central 29: New ModuleInfo Properties Explained"
    date: "2026-09-16T10:00:18.000Z"
    commit: null
    t: 99
    quote: module info is an al type that provides information about an application or extension or module whatever you want to call it
  - kind: video
    url: https://www.youtube.com/watch?v=-vCiEloR61U&t=153s
    title: "Business Central 29: New ModuleInfo Properties Explained"
    date: "2026-09-16T10:00:18.000Z"
    commit: null
    t: 153
    quote: The first one is help. This returns the help link of specified application.
  - kind: video
    url: https://www.youtube.com/watch?v=-vCiEloR61U&t=243s
    title: "Business Central 29: New ModuleInfo Properties Explained"
    date: "2026-09-16T10:00:18.000Z"
    commit: null
    t: 243
    quote: because this information comes from the application metadata which will be refreshed whenever the extension get updated, you don't have to hardcode those values
links:
  learn: []
  objects: []
  features:
    - feature/573354
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: -vCiEloR61U
channel: yt-saurav
source_name: Saurav Dhyani
url: https://www.youtube.com/watch?v=-vCiEloR61U
published_at: "2026-09-16T10:00:18.000Z"
duration_s: 642
captions: derived
audience:
  - developer
  - functional consultant
chapters:
  - t: 0
    title: Introduction and Problem Overview
  - t: 99
    title: What is ModuleInfo and New Properties
  - t: 206
    title: Use Cases and Benefits
  - t: 270
    title: Version 28 Implementation and Accessing App Info
  - t: 405
    title: Version 29 Enhancements and Demo Comparison
  - t: 570
    title: Summary and Call to Action
features:
  - name: ModuleInfo help property
    status: ga
    t: 153
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573354"
  - name: ModuleInfo ULA property
    status: ga
    t: 164
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573354"
  - name: ModuleInfo privacy statement property
    status: ga
    t: 175
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573354"
  - name: ModuleInfo context sensitive help URL property
    status: ga
    t: 180
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573354"
  - name: ModuleInfo type enhancements
    status: unclear
    t: 99
    verified: false
    status_source: video
  - name: ModuleDependencyInfo type
    status: unclear
    t: 368
    verified: false
    status_source: video
  - name: NavApp.GetCurrentModuleInfo function
    status: unclear
    t: 308
    verified: false
    status_source: video
  - name: NavApp.GetModuleInfo function
    status: unclear
    t: 294
    verified: false
    status_source: video
objects_mentioned:
  - other ModuleInfo
  - other NavApp.GetCurrentModuleInfo
  - other NavApp.GetModuleInfo
  - other ModuleDependencyInfo
quotes:
  - t: 14
    text: in version 29 the module info type that has been expanded with four new properties that give AL developer access to help
    check: exact
  - t: 83
    text: in version 29 with runtime 18.0 and later we have a much cleaner way to retrieve some of this meta ...
    check: exact
  - t: 99
    text: module info is an al type that provides information about an application or extension or module whatever you want to call it
    check: exact
  - t: 153
    text: The first one is help. This returns the help link of specified application.
    check: exact
  - t: 243
    text: because this information comes from the application metadata which will be refreshed whenever the extension get updated, you don't have to hardcode those values
    check: exact
---

# Business Central 29: New ModuleInfo Properties Explained

> ModuleInfo in Business Central 29 (Runtime 18.0 or later) gets four new properties: help, ULA, privacy statement and context sensitive help URL. They expose app manifest metadata to AL code. The video demos reading them with NavApp.GetCurrentModuleInfo and NavApp.GetModuleInfo, and compares this with version 28.

[Watch on YouTube](https://www.youtube.com/watch?v=-vCiEloR61U) · Saurav Dhyani · 2026-09-16 · 10:42 · tier community · reviewed (checked by Opus)

## Overview

The video explains ModuleInfo, the AL type that returns information about an application or extension. In Business Central 29 it has four new properties: help, ULA, privacy statement and context sensitive help URL. They return links taken from the app metadata, so the values do not need to be hardcoded and are refreshed when the extension is updated.

The presenter shows how to get a ModuleInfo for the current app with NavApp.GetCurrentModuleInfo, or for a specific app by GUID with NavApp.GetModuleInfo. A demo compares the version 28 approach with the version 29 one. The ModuleDependencyInfo type is also shown for inspecting the dependencies listed in app.json.

## Key points

- Version 29 adds four ModuleInfo properties: help, ULA, privacy statement and context sensitive help URL.
- The new properties require Runtime 18.0 or later.
- The help property returns the help link of the specified application. The ULA property returns the end user license agreement link. The privacy statement property returns the privacy statement link.
- The context sensitive help URL property gives the help URL in the user locale.
- The values come from application metadata, which is refreshed when the extension is updated, so they need not be hardcoded.
- NavApp.GetCurrentModuleInfo needs no app GUID. NavApp.GetModuleInfo takes an app GUID for a specific app.
- ModuleDependencyInfo lets AL code iterate over the dependencies defined in app.json.

## Chapters

- [0:00](https://www.youtube.com/watch?v=-vCiEloR61U&t=0s) Introduction and Problem Overview
- [1:39](https://www.youtube.com/watch?v=-vCiEloR61U&t=99s) What is ModuleInfo and New Properties
- [3:26](https://www.youtube.com/watch?v=-vCiEloR61U&t=206s) Use Cases and Benefits
- [4:30](https://www.youtube.com/watch?v=-vCiEloR61U&t=270s) Version 28 Implementation and Accessing App Info
- [6:45](https://www.youtube.com/watch?v=-vCiEloR61U&t=405s) Version 29 Enhancements and Demo Comparison
- [9:30](https://www.youtube.com/watch?v=-vCiEloR61U&t=570s) Summary and Call to Action

## Features

| Feature | Status | At |
|---|---|---|
| ModuleInfo help property | generally available (roadmap [Access application links through ModuleInfo](../features/573354.md)), demoed | [2:33](https://www.youtube.com/watch?v=-vCiEloR61U&t=153s) |
| ModuleInfo ULA property | generally available (roadmap [Access application links through ModuleInfo](../features/573354.md)), demoed | [2:44](https://www.youtube.com/watch?v=-vCiEloR61U&t=164s) |
| ModuleInfo privacy statement property | generally available (roadmap [Access application links through ModuleInfo](../features/573354.md)), demoed | [2:55](https://www.youtube.com/watch?v=-vCiEloR61U&t=175s) |
| ModuleInfo context sensitive help URL property | generally available (roadmap [Access application links through ModuleInfo](../features/573354.md)), demoed | [3:00](https://www.youtube.com/watch?v=-vCiEloR61U&t=180s) |
| ModuleInfo type enhancements | status not stated, demoed | [1:39](https://www.youtube.com/watch?v=-vCiEloR61U&t=99s) |
| ModuleDependencyInfo type | status not stated, demoed | [6:08](https://www.youtube.com/watch?v=-vCiEloR61U&t=368s) |
| NavApp.GetCurrentModuleInfo function | status not stated, demoed | [5:08](https://www.youtube.com/watch?v=-vCiEloR61U&t=308s) |
| NavApp.GetModuleInfo function | status not stated, demoed | [4:54](https://www.youtube.com/watch?v=-vCiEloR61U&t=294s) |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "ModuleInfo" at [1:39](https://www.youtube.com/watch?v=-vCiEloR61U&t=99s)
- other "NavApp.GetCurrentModuleInfo" at [1:55](https://www.youtube.com/watch?v=-vCiEloR61U&t=115s)
- other "NavApp.GetModuleInfo" at [1:55](https://www.youtube.com/watch?v=-vCiEloR61U&t=115s)
- other "ModuleDependencyInfo" at [6:08](https://www.youtube.com/watch?v=-vCiEloR61U&t=368s)

## Quotes

- [0:14](https://www.youtube.com/watch?v=-vCiEloR61U&t=14s) "in version 29 the module info type that has been expanded with four new properties that give AL developer access to help"
- [1:23](https://www.youtube.com/watch?v=-vCiEloR61U&t=83s) "in version 29 with runtime 18.0 and later we have a much cleaner way to retrieve some of this meta ..."
- [1:39](https://www.youtube.com/watch?v=-vCiEloR61U&t=99s) "module info is an al type that provides information about an application or extension or module whatever you want to call it"
- [2:33](https://www.youtube.com/watch?v=-vCiEloR61U&t=153s) "The first one is help. This returns the help link of specified application."
- [4:03](https://www.youtube.com/watch?v=-vCiEloR61U&t=243s) "because this information comes from the application metadata which will be refreshed whenever the extension get updated, you don't have to hardcode those values"

## Disclaimers in the video

- [1:23](https://www.youtube.com/watch?v=-vCiEloR61U&t=83s) other: in version 29 with runtime 18.0 and later we have a much cleaner way to retrieve some of this meta ...

Presenters (as heard): Sarrahani.
