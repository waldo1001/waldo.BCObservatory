---
id: video/oN0XfuCe6Qg
type: video
title: "What's Cooking in Business Central: External File Storage Module"
summary: "External File Storage system application module in Business Central: an API for storing files outside Business Central, such as in Azure blob storage, Azure file share or SharePoint online. Covers file accounts, file scenarios, API methods and a demo. The base application does not use it yet."
tier: official
language: en
tags:
  - external file storage
  - api
  - azure blob storage
  - file accounts
  - file scenarios
  - al development
  - system application module
system: development
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
  input_hash: 06e5bf14ea22130bb65e114d03bf7172126bf0d44dac5b19f5b5527dd9887cac
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=6s
    title: "What's Cooking in Business Central: External File Storage Module"
    date: "2025-02-06T15:38:12.000Z"
    commit: null
    t: 6
    quote: an api that makes it easier to store your data outside of business central for instance in an azure blob storage
  - kind: video
    url: https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=37s
    title: "What's Cooking in Business Central: External File Storage Module"
    date: "2025-02-06T15:38:12.000Z"
    commit: null
    t: 37
    quote: with 2025 wave 1 this new SST application module is ready for release
  - kind: video
    url: https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=37s
    title: "What's Cooking in Business Central: External File Storage Module"
    date: "2025-02-06T15:38:12.000Z"
    commit: null
    t: 37
    quote: there is no uptake of it yet so the base application as such does not use it
  - kind: video
    url: https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=174s
    title: "What's Cooking in Business Central: External File Storage Module"
    date: "2025-02-06T15:38:12.000Z"
    commit: null
    t: 174
    quote: we initialize our external file file storage um with our scenario um we open a file a save file dialogue
  - kind: video
    url: https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=248s
    title: "What's Cooking in Business Central: External File Storage Module"
    date: "2025-02-06T15:38:12.000Z"
    commit: null
    t: 248
    quote: we will be looking into uptaking some of these capabilities in business Central in the upcoming waves
links:
  learn: []
  objects:
    - object/enum/9451
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: oN0XfuCe6Qg
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=oN0XfuCe6Qg
published_at: "2025-02-06T15:38:12.000Z"
duration_s: 279
captions: full
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction to External File Storage Module
  - t: 37
    title: 2025 Wave 1 Release Status and Availability
  - t: 60
    title: Setting up File Accounts and Storage Configuration
  - t: 110
    title: File Scenarios and Configuration
  - t: 154
    title: Code Implementation and API Usage
  - t: 216
    title: Demonstration of File Storage in Action
  - t: 248
    title: Future Plans and Closing Remarks
features:
  - name: External File Storage System Application Module
    status: unclear
    t: 6
    verified: false
    status_source: video
  - name: File Accounts Page
    status: unclear
    t: 75
    verified: false
    status_source: video
  - name: File Scenarios Enum
    status: unclear
    t: 110
    verified: false
    status_source: video
  - name: External File Storage API Methods
    status: unclear
    t: 154
    verified: false
    status_source: video
  - name: Storage Browser
    status: unclear
    t: 236
    verified: false
    status_source: video
objects_mentioned:
  - enum file scenario
quotes:
  - t: 6
    text: an api that makes it easier to store your data outside of business central for instance in an azure blob storage
    check: fuzzy
  - t: 37
    text: with 2025 wave 1 this new SST application module is ready for release
    check: exact
  - t: 37
    text: there is no uptake of it yet so the base application as such does not use it
    check: exact
  - t: 174
    text: we initialize our external file file storage um with our scenario um we open a file a save file dialogue
    check: exact
  - t: 248
    text: we will be looking into uptaking some of these capabilities in business Central in the upcoming waves
    check: exact
---

# What's Cooking in Business Central: External File Storage Module

> External File Storage system application module in Business Central: an API for storing files outside Business Central, such as in Azure blob storage, Azure file share or SharePoint online. Covers file accounts, file scenarios, API methods and a demo. The base application does not use it yet.

[Watch on YouTube](https://www.youtube.com/watch?v=oN0XfuCe6Qg) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-02-06 · 4:39 · tier official · **unreviewed** (machine-generated)

## Overview

The video introduces the External File Storage module, a system application module that gives developers an API to connect to external file storage and save data there. Supported targets named are Azure blob storage, Azure file share and SharePoint online. It is described as ready for release with 2025 wave 1.

It walks through setting up a storage account on the File Accounts page, defining file scenarios with an extensible enum, and writing code that initializes the module with a scenario, opens a save file dialog and creates a file. A demo shows the result in the storage browser. The base application does not use the module yet, and developers must build their own implementations. Microsoft says it will look at adopting some of these capabilities in upcoming waves.

## Key points

- The module is a system application module with an API to store files in Azure blob storage, Azure file share or SharePoint online.
- Per the video, it is ready for release with 2025 wave 1.
- The base application has no uptake of it yet, so developers need to create their own implementations.
- Storage accounts are configured on the File Accounts page, which follows the email accounts pattern.
- File scenarios are defined through an extensible enum; the base application ships with no built-in scenarios initially.
- The code flow shown uses Initialize with a scenario, OpenFileDialog/SaveFileDialog, and CreateFile.
- A storage browser lets users view and manage files in the external storage account.

## Chapters

- [0:00](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=0s) Introduction to External File Storage Module
- [0:37](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=37s) 2025 Wave 1 Release Status and Availability
- [1:00](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=60s) Setting up File Accounts and Storage Configuration
- [1:50](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=110s) File Scenarios and Configuration
- [2:34](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=154s) Code Implementation and API Usage
- [3:36](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=216s) Demonstration of File Storage in Action
- [4:08](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=248s) Future Plans and Closing Remarks

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| External File Storage System Application Module | status not stated, demoed | [0:06](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=6s) |  |
| File Accounts Page | status not stated, demoed | [1:15](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=75s) |  |
| File Scenarios Enum | status not stated, demoed | [1:50](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=110s) |  |
| External File Storage API Methods | status not stated, demoed | [2:34](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=154s) |  |
| Storage Browser | status not stated, demoed | [3:56](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=236s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- [enum 9451 "File Scenario"](../objects/enum/9451.md) at [2:34](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=154s)

## Quotes

- [0:06](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=6s) "an api that makes it easier to store your data outside of business central for instance in an azure blob storage"
- [0:37](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=37s) "with 2025 wave 1 this new SST application module is ready for release"
- [0:37](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=37s) "there is no uptake of it yet so the base application as such does not use it"
- [2:54](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=174s) "we initialize our external file file storage um with our scenario um we open a file a save file dialogue"
- [4:08](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=248s) "we will be looking into uptaking some of these capabilities in business Central in the upcoming waves"

## Disclaimers in the video

- [0:37](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=37s) other: there is no uptake of it yet so the base application as such does not use it
- [4:08](https://www.youtube.com/watch?v=oN0XfuCe6Qg&t=248s) coming-later: we will be looking into uptaking some of these capabilities in business Central in the upcoming waves
