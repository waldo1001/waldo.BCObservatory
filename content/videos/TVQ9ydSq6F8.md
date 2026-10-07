---
id: video/TVQ9ydSq6F8
type: video
title: "What's Cooking in Business Central: Adding Resources to AL Applications"
summary: Adding resources (test data, sample data, configuration files, images) to Business Central AL extensions, using NAV App resource functions and a resourceFolders property in app.json. Covers size limits and access scope. Demo uses a recipe app and Business Central 25.2 or later.
tier: official
language: en
tags:
  - al resources
  - resource folders
  - blob data
  - json parsing
  - extension packaging
  - data pre-population
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:02:29.636Z"
  flags: []
generated:
  at: "2026-10-07T23:02:29.664Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: e9fcb256df8e069b76b5bc24808de56c6aa4fd709ec265e30be6d53d4e73b365
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=26s
    title: "What's Cooking in Business Central: Adding Resources to AL Applications"
    date: "2025-01-21T12:00:42.000Z"
    commit: null
    t: 26
    quote: if you are using business Central 25.2 or later um and to illustrate how this works uh let me show you I have this
  - kind: video
    url: https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=98s
    title: "What's Cooking in Business Central: Adding Resources to AL Applications"
    date: "2025-01-21T12:00:42.000Z"
    commit: null
    t: 98
    quote: the first thing here is this function nav app.get Resource as Json um and this is how we interact with resources
  - kind: video
    url: https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=159s
    title: "What's Cooking in Business Central: Adding Resources to AL Applications"
    date: "2025-01-21T12:00:42.000Z"
    commit: null
    t: 159
    quote: in the app. Json there is a new property called resource folders and you just specify whichever folder you want
  - kind: video
    url: https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=268s
    title: "What's Cooking in Business Central: Adding Resources to AL Applications"
    date: "2025-01-21T12:00:42.000Z"
    commit: null
    t: 268
    quote: resources can only be accessed within the app that owns them this means if I have another app that depends on this app I
  - kind: video
    url: https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=328s
    title: "What's Cooking in Business Central: Adding Resources to AL Applications"
    date: "2025-01-21T12:00:42.000Z"
    commit: null
    t: 328
    quote: any single resource file can be up to 16 megabytes the total size of all resource files has to be under 256 for a
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: TVQ9ydSq6F8
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=TVQ9ydSq6F8
published_at: "2025-01-21T12:00:42.000Z"
duration_s: 379
captions: full
audience:
  - developer
  - partner
chapters:
  - t: 0
    title: Introduction and Recipe Demo
  - t: 57
    title: Understanding Resources in AL Code
  - t: 118
    title: NAV App Resource Functions and Configuration
  - t: 180
    title: Working with JSON and Blob Data
  - t: 253
    title: Resource Limitations and Scope
  - t: 308
    title: Resource Limits and Summary
features:
  - name: Resources in AL Extensions
    status: unclear
    t: 5
    verified: false
    status_source: video
  - name: NAV App Get Resource As Json
    status: unclear
    t: 98
    verified: false
    status_source: video
  - name: Resource Folders Configuration
    status: unclear
    t: 159
    verified: false
    status_source: video
  - name: NAV App List Resources
    status: unclear
    t: 200
    verified: false
    status_source: video
  - name: Resource Source Code Exposure Policies
    status: unclear
    t: 288
    verified: false
    status_source: video
objects_mentioned:
  - table Recipe data storage table
  - page Recipe display page
  - other recipe index Json
quotes:
  - t: 26
    text: if you are using business Central 25.2 or later um and to illustrate how this works uh let me show you I have this
    check: exact
  - t: 98
    text: the first thing here is this function nav app.get Resource as Json um and this is how we interact with resources
    check: exact
  - t: 159
    text: in the app. Json there is a new property called resource folders and you just specify whichever folder you want
    check: exact
  - t: 268
    text: resources can only be accessed within the app that owns them this means if I have another app that depends on this app I
    check: exact
  - t: 328
    text: any single resource file can be up to 16 megabytes the total size of all resource files has to be under 256 for a
    check: exact
---

# What's Cooking in Business Central: Adding Resources to AL Applications

> Adding resources (test data, sample data, configuration files, images) to Business Central AL extensions, using NAV App resource functions and a resourceFolders property in app.json. Covers size limits and access scope. Demo uses a recipe app and Business Central 25.2 or later.

[Watch on YouTube](https://www.youtube.com/watch?v=TVQ9ydSq6F8) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-01-21 · 6:19 · tier official · reviewed (checked by Opus)

## Overview

The video shows how to package files inside an AL extension and read them at runtime. A recipe demo stores data in a table and displays it on a page, with the data coming from a JSON resource file. Resource folders are declared in app.json, and the NAV App functions read the files as resource, text, JSON, or blob data.

It also covers the limits. Resources are only accessible from the app that owns them, individual files and total size are capped, and resources are treated as code for source download policies. The presenter says the limits may change as usage data is collected.

## Key points

- The speaker introduces the feature for Business Central 25.2 or later.
- app.json has a new resource folders property that takes an array, so several folders can hold resources.
- NAV App.Get Resource As Json reads a resource file as JSON; related functions are get Resource (for arbitrary content, e.g. read into an InStream), get Resource as text, and list resources.
- NAV App List Resources filters resources by a wildcard pattern or a folder such as images, and returns every resource available to the app if nothing is passed.
- Resources can only be accessed within the app that owns them, so a dependent app cannot read them.
- Limits: a single resource file can be up to 16 megabytes, total resource size must be under 256 per extension (unit not stated in the video), and at most 256 files. The presenter says these may change.
- Resources are treated as code: with allow downloading source enabled in resource exposure policies they are downloaded with the source code, and with it set to false they are not included.

## Chapters

- [0:00](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=0s) Introduction and Recipe Demo
- [0:57](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=57s) Understanding Resources in AL Code
- [1:58](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=118s) NAV App Resource Functions and Configuration
- [3:00](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=180s) Working with JSON and Blob Data
- [4:13](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=253s) Resource Limitations and Scope
- [5:08](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=308s) Resource Limits and Summary

## Features

| Feature | Status | At |
|---|---|---|
| Resources in AL Extensions | status not stated, demoed | [0:05](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=5s) |
| NAV App Get Resource As Json | status not stated, demoed | [1:38](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=98s) |
| Resource Folders Configuration | status not stated, demoed | [2:39](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=159s) |
| NAV App List Resources | status not stated, demoed | [3:20](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=200s) |
| Resource Source Code Exposure Policies | status not stated | [4:48](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=288s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "Recipe data storage table" at [1:38](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=98s)
- page "Recipe display page" at [1:38](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=98s)
- other "recipe index Json" at [2:19](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=139s)

Not found in BC28-30: table "Recipe data storage table", page "Recipe display page".

## Quotes

- [0:26](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=26s) "if you are using business Central 25.2 or later um and to illustrate how this works uh let me show you I have this"
- [1:38](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=98s) "the first thing here is this function nav app.get Resource as Json um and this is how we interact with resources"
- [2:39](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=159s) "in the app. Json there is a new property called resource folders and you just specify whichever folder you want"
- [4:28](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=268s) "resources can only be accessed within the app that owns them this means if I have another app that depends on this app I"
- [5:28](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=328s) "any single resource file can be up to 16 megabytes the total size of all resource files has to be under 256 for a"

## Disclaimers in the video

- [5:48](https://www.youtube.com/watch?v=TVQ9ydSq6F8&t=348s) subject-to-change: we may change this as we collect uh data on usage just to optimize our system but this is what the limits are for now
