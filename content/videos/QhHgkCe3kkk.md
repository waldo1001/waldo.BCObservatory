---
id: video/QhHgkCe3kkk
type: video
title: "What's New in AL:  Embedding Resources in Applications (2024 release wave 2)"
summary: "Embedding resources in AL applications (2024 release wave 2): files such as CSV data and images go in a resources folder in the app and are read with a get resource function. The video says the feature could not be used yet at recording. It covers folder setup, the uniqueness rule and size limits."
tier: official
language: en
tags:
  - resources in applications
  - get resource function
  - al development
  - app deployment
  - resource folders
  - file embedding
  - size limitations
  - uniqueness constraint
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
  input_hash: 9887b2041488ec9ba80b03f96213bf0be41630d8cb3b4221e0a5398bf2902e1f
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=QhHgkCe3kkk&t=6s
    title: "What's New in AL:  Embedding Resources in Applications (2024 release wave 2)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 6
    quote: I have some code to show you and it's going to be really exciting but first I have to say you can't use it
  - kind: video
    url: https://www.youtube.com/watch?v=QhHgkCe3kkk&t=27s
    title: "What's New in AL:  Embedding Resources in Applications (2024 release wave 2)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 27
    quote: resources in applications meaning you can ship your resources with your application get the resource for that specific application for that specific version
  - kind: video
    url: https://www.youtube.com/watch?v=QhHgkCe3kkk&t=207s
    title: "What's New in AL:  Embedding Resources in Applications (2024 release wave 2)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 207
    quote: the resource name including the path relative to the resource folder must be unique within the extension
  - kind: video
    url: https://www.youtube.com/watch?v=QhHgkCe3kkk&t=338s
    title: "What's New in AL:  Embedding Resources in Applications (2024 release wave 2)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 338
    quote: the server determines what is good and what is not good so if you don't have
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: QhHgkCe3kkk
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=QhHgkCe3kkk
published_at: "2024-10-08T15:00:27.000Z"
duration_s: 375
captions: full
audience:
  - developer
  - partner
chapters:
  - t: 0
    title: Introduction to resources in applications
  - t: 47
    title: Overview of the resources folder structure
  - t: 88
    title: Using the get resource function
  - t: 166
    title: Multiple resource folders configuration
  - t: 207
    title: Uniqueness constraint and compilation
  - t: 282
    title: Limitations and constraints
  - t: 338
    title: Summary and conclusion
features:
  - name: Embedding resources in applications
    status: unclear
    t: 6
    verified: false
    status_source: video
  - name: get resource function
    status: unclear
    t: 88
    verified: false
    status_source: video
  - name: Multiple resource folders
    status: unclear
    t: 186
    verified: false
    status_source: video
  - name: Resource size limitations
    status: unclear
    t: 282
    verified: false
    status_source: video
  - name: Read-only resources
    status: unclear
    t: 318
    verified: false
    status_source: video
objects_mentioned:
  - other NavAdType
quotes:
  - t: 6
    text: I have some code to show you and it's going to be really exciting but first I have to say you can't use it
    check: exact
  - t: 27
    text: resources in applications meaning you can ship your resources with your application get the resource for that specific application for that specific version
    check: exact
  - t: 207
    text: the resource name including the path relative to the resource folder must be unique within the extension
    check: exact
  - t: 338
    text: the server determines what is good and what is not good so if you don't have
    check: fuzzy
---

# What's New in AL:  Embedding Resources in Applications (2024 release wave 2)

> Embedding resources in AL applications (2024 release wave 2): files such as CSV data and images go in a resources folder in the app and are read with a get resource function. The video says the feature could not be used yet at recording. It covers folder setup, the uniqueness rule and size limits.

[Watch on YouTube](https://www.youtube.com/watch?v=QhHgkCe3kkk) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-10-08 · 6:15 · tier official · **unreviewed** (machine-generated)

## Overview

The video introduces resources in applications, which lets a developer ship files with an extension. Files such as CSV data or images are placed in a resources folder, and the app returns the resource for that specific application and version. The presenter says up front that the feature cannot be used yet, but that code using it will appear fairly soon, possibly in BC apps.

The demo covers the resources folder structure, a get resource function that reads a resource by file name and relative path into a stream, and configuring several resource folders. It then explains the uniqueness constraint checked at compilation, and the size and count limits.

## Key points

- Resources are shipped in a resources folder inside the app file, for example CSV data and images.
- The get resource function takes a file name and relative path and puts the resource into a specified stream.
- Several resource folders can be configured, such as one for images and one for data files.
- The resource name including its path relative to the resource folder must be unique across all folders in the extension.
- Limits: 1,024 KB per resource, 16 MB for all resources in an extension, and 256 resources per extension.
- Embedded resources are read-only, because an app package cannot be changed after shipping, and only the owning extension can access them.
- At the time of the video the feature was not yet available for use.

## Chapters

- [0:00](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=0s) Introduction to resources in applications
- [0:47](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=47s) Overview of the resources folder structure
- [1:28](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=88s) Using the get resource function
- [2:46](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=166s) Multiple resource folders configuration
- [3:27](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=207s) Uniqueness constraint and compilation
- [4:42](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=282s) Limitations and constraints
- [5:38](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=338s) Summary and conclusion

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Embedding resources in applications | status not stated, demoed | [0:06](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=6s) |  |
| get resource function | status not stated, demoed | [1:28](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=88s) |  |
| Multiple resource folders | status not stated, demoed | [3:06](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=186s) |  |
| Resource size limitations | status not stated | [4:42](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=282s) |  |
| Read-only resources | status not stated | [5:18](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=318s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "NavAdType" at [1:28](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=88s)

## Quotes

- [0:06](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=6s) "I have some code to show you and it's going to be really exciting but first I have to say you can't use it"
- [0:27](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=27s) "resources in applications meaning you can ship your resources with your application get the resource for that specific application for that specific version"
- [3:27](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=207s) "the resource name including the path relative to the resource folder must be unique within the extension"
- [5:38](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=338s) "the server determines what is good and what is not good so if you don't have"

## Disclaimers in the video

- [0:06](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=6s) preview: you can't use it not right now at least so why do we even talk about it well you're going to see some uptake of this feature fairly soon
- [0:27](https://www.youtube.com/watch?v=QhHgkCe3kkk&t=27s) coming-later: you're going to see the code maybe in BC apps and other places so this is important that you know what it's all about

Presenters (as heard): Stepen B.
