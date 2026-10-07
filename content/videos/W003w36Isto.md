---
id: video/W003w36Isto
type: video
title: "What's New: Reporting (For Developers) (2025 release wave 1)"
summary: "Report layout changes for developers in Business Central 2025 release wave 1: AL overrides for Excel layout properties, obsoleting layouts in AL, a Validate action (RDL only in 26.0), a Show layout info action, and BC report information in Word layouts."
tier: official
language: en
tags:
  - report layouts
  - al features
  - layout validation
  - word layouts
  - excel layouts
  - obsoleting
  - metadata
  - rdl
  - developer documentation
  - layout properties
system: reporting
review:
  state: reviewed
  by: opus
  at: "2026-10-07T22:58:52.633Z"
  flags: []
generated:
  at: "2026-10-07T22:58:52.674Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 34ed9f5ea5960d3ec618d5bf3efb3972de4eb606bf4a9f129a79cf20e8f3c0ae
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=W003w36Isto&t=31s
    title: "What's New: Reporting (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:45.000Z"
    commit: null
    t: 31
    quote: you can first of all override any choice of Excel layout multiple data sheets property that has been set on the report.
  - kind: video
    url: https://www.youtube.com/watch?v=W003w36Isto&t=280s
    title: "What's New: Reporting (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:45.000Z"
    commit: null
    t: 280
    quote: The system ID is all is in particularly useful if you have telemetry because this system ID is also the one that is locked
  - kind: video
    url: https://www.youtube.com/watch?v=W003w36Isto&t=357s
    title: "What's New: Reporting (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:45.000Z"
    commit: null
    t: 357
    quote: the first major release is only rdl layout that will be validated in a next minor
  - kind: video
    url: https://www.youtube.com/watch?v=W003w36Isto&t=501s
    title: "What's New: Reporting (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:45.000Z"
    commit: null
    t: 501
    quote: We're not going to dive into that. Instead you see a new kit on the block here. BC report information.
  - kind: video
    url: https://www.youtube.com/watch?v=W003w36Isto&t=609s
    title: "What's New: Reporting (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:45.000Z"
    commit: null
    t: 609
    quote: You don't have to use that anymore. Uh you can just use them in a standard fashion.
  - kind: video
    url: https://www.youtube.com/watch?v=W003w36Isto&t=733s
    title: "What's New: Reporting (For Developers) (2025 release wave 1)"
    date: "2025-04-01T15:00:45.000Z"
    commit: null
    t: 733
    quote: You could just put in the obsolete um properties but how do you communicate the change to a user?
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: W003w36Isto
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=W003w36Isto
published_at: "2025-04-01T15:00:45.000Z"
duration_s: 797
captions: full
audience:
  - developer
  - functional consultant
  - administrator
chapters:
  - t: 0
    title: Introduction and overview
  - t: 31
    title: "New AL layout features: overriding properties and obsoleting"
  - t: 120
    title: Runtime layout features in report layouts page
  - t: 197
    title: "Layout management: validation, Excel properties, and troubleshooting"
  - t: 373
    title: Word layout enhancements and metadata features
  - t: 620
    title: Word layout example and rendering
  - t: 672
    title: Developer documentation for obsoleting reports
features:
  - name: Override Excel multiple data sheets property at layout level
    status: unclear
    t: 31
    verified: false
    status_source: video
  - name: Obsolete report layouts using AL
    status: unclear
    t: 47
    verified: false
    status_source: video
  - name: Set Excel layout properties in report layouts page
    status: unclear
    t: 174
    verified: false
    status_source: video
  - name: Validate report layouts
    status: unclear
    t: 269
    verified: false
    status_source: video
  - name: Show layout info action
    status: unclear
    t: 269
    verified: false
    status_source: video
  - name: Standard BC report information in Word layouts
    status: unclear
    t: 373
    verified: false
    status_source: video
  - name: Word layout date/time hierarchy
    status: unclear
    t: 541
    verified: false
    status_source: video
  - name: Obsoleting reports developer documentation
    status: unclear
    t: 672
    verified: false
    status_source: video
objects_mentioned:
  - other number series report
  - other BC report information
quotes:
  - t: 31
    text: you can first of all override any choice of Excel layout multiple data sheets property that has been set on the report.
    check: exact
  - t: 280
    text: The system ID is all is in particularly useful if you have telemetry because this system ID is also the one that is locked
    check: exact
  - t: 357
    text: the first major release is only rdl layout that will be validated in a next minor
    check: fuzzy
  - t: 501
    text: We're not going to dive into that. Instead you see a new kit on the block here. BC report information.
    check: exact
  - t: 609
    text: You don't have to use that anymore. Uh you can just use them in a standard fashion.
    check: exact
  - t: 733
    text: You could just put in the obsolete um properties but how do you communicate the change to a user?
    check: exact
---

# What's New: Reporting (For Developers) (2025 release wave 1)

> Report layout changes for developers in Business Central 2025 release wave 1: AL overrides for Excel layout properties, obsoleting layouts in AL, a Validate action (RDL only in 26.0), a Show layout info action, and BC report information in Word layouts.

[Watch on YouTube](https://www.youtube.com/watch?v=W003w36Isto) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 13:17 · tier official · reviewed (checked by Opus)

## Overview

The video covers what is new for developers working with report layouts in 2025 release wave 1. It starts with AL changes: overriding the Excel multiple data sheets property per layout and marking layouts obsolete with an obsolete state and reason.

It then moves to the report layouts page, where the Excel property can be set, a Validate action checks layouts, and a Show layout info action supports troubleshooting. The last part covers Word layouts, which get a BC report information section in the XML mapping with a date/time hierarchy, and the updated developer documentation on obsoleting reports.

## Key points

- Developers can override the Excel layout multiple data sheets property at the individual layout level in AL, without affecting existing customer layouts.
- Report layouts can be marked obsolete in AL with the obsolete tag, including obsolete state and reason.
- The Validate action currently checks RDL layouts only in 26.0. Word and Excel validation is announced for a next minor release.
- Show layout info displays system ID, type, creator, modifier, obsolete status and last modified details. The system ID matches the telemetry custom dimension called layout ID.
- Creator and modifier are filled in only for user-imported or user-created layouts, not extension or app-provided ones.
- Word layouts get a BC report information section in the XML mapping pane (report name, title, help text, environment, company, user, language, date/time), so this no longer needs to be coded in AL.
- The date/time hierarchy (year, month, day, hour, minute) lets Word layouts format dates and times in any format.

## Chapters

- [0:00](https://www.youtube.com/watch?v=W003w36Isto&t=0s) Introduction and overview
- [0:31](https://www.youtube.com/watch?v=W003w36Isto&t=31s) New AL layout features: overriding properties and obsoleting
- [2:00](https://www.youtube.com/watch?v=W003w36Isto&t=120s) Runtime layout features in report layouts page
- [3:17](https://www.youtube.com/watch?v=W003w36Isto&t=197s) Layout management: validation, Excel properties, and troubleshooting
- [6:13](https://www.youtube.com/watch?v=W003w36Isto&t=373s) Word layout enhancements and metadata features
- [10:20](https://www.youtube.com/watch?v=W003w36Isto&t=620s) Word layout example and rendering
- [11:12](https://www.youtube.com/watch?v=W003w36Isto&t=672s) Developer documentation for obsoleting reports

## Features

| Feature | Status | At |
|---|---|---|
| Override Excel multiple data sheets property at layout level | status not stated, demoed | [0:31](https://www.youtube.com/watch?v=W003w36Isto&t=31s) |
| Obsolete report layouts using AL | status not stated, demoed | [0:47](https://www.youtube.com/watch?v=W003w36Isto&t=47s) |
| Set Excel layout properties in report layouts page | status not stated, demoed | [2:54](https://www.youtube.com/watch?v=W003w36Isto&t=174s) |
| Validate report layouts | status not stated, demoed | [4:29](https://www.youtube.com/watch?v=W003w36Isto&t=269s) |
| Show layout info action | status not stated, demoed | [4:29](https://www.youtube.com/watch?v=W003w36Isto&t=269s) |
| Standard BC report information in Word layouts | status not stated, demoed | [6:13](https://www.youtube.com/watch?v=W003w36Isto&t=373s) |
| Word layout date/time hierarchy | status not stated, demoed | [9:01](https://www.youtube.com/watch?v=W003w36Isto&t=541s) |
| Obsoleting reports developer documentation | status not stated | [11:12](https://www.youtube.com/watch?v=W003w36Isto&t=672s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "number series report" at [3:53](https://www.youtube.com/watch?v=W003w36Isto&t=233s)
- other "BC report information" at [8:32](https://www.youtube.com/watch?v=W003w36Isto&t=512s)

## Quotes

- [0:31](https://www.youtube.com/watch?v=W003w36Isto&t=31s) "you can first of all override any choice of Excel layout multiple data sheets property that has been set on the report."
- [4:40](https://www.youtube.com/watch?v=W003w36Isto&t=280s) "The system ID is all is in particularly useful if you have telemetry because this system ID is also the one that is locked"
- [5:57](https://www.youtube.com/watch?v=W003w36Isto&t=357s) "the first major release is only rdl layout that will be validated in a next minor"
- [8:21](https://www.youtube.com/watch?v=W003w36Isto&t=501s) "We're not going to dive into that. Instead you see a new kit on the block here. BC report information."
- [10:09](https://www.youtube.com/watch?v=W003w36Isto&t=609s) "You don't have to use that anymore. Uh you can just use them in a standard fashion."
- [12:13](https://www.youtube.com/watch?v=W003w36Isto&t=733s) "You could just put in the obsolete um properties but how do you communicate the change to a user?"

## Disclaimers in the video

- [5:57](https://www.youtube.com/watch?v=W003w36Isto&t=357s) coming-later: For now for the 26.0 the first major release is only RDL layout that will be validated in a next minor. Uh we will also add validation for word and excel.
