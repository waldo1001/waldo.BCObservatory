---
id: video/uxYuoJP-uH8
type: video
title: "Let's pass MB-820: Episode 19 - Extend ApplicationArea with custom areas"
summary: "Extending ApplicationArea with custom areas in Business Central AL: extend the application area setup table, hook the new area to the premium or essential experience, enable it from an install codeunit, and use it on fields and groups in page extensions. Episode 19 of an MB-820 exam series."
tier: community
language: en
tags:
  - application area
  - custom areas
  - table extension
  - page extension
  - application area setup
  - user experience
  - fields visibility
  - mb-800 exam
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:18:59.738Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 575d302c357663595306c4cf8e478a201e8803731ed4b65465a6ef3f3268dd06
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=uxYuoJP-uH8&t=47s
    title: "Let's pass MB-820: Episode 19 - Extend ApplicationArea with custom areas"
    date: "2025-12-15T00:52:25.000Z"
    commit: null
    t: 47
    quote: we can actually create um a new application area uh by extending application area setup table
  - kind: video
    url: https://www.youtube.com/watch?v=uxYuoJP-uH8&t=84s
    title: "Let's pass MB-820: Episode 19 - Extend ApplicationArea with custom areas"
    date: "2025-12-15T00:52:25.000Z"
    commit: null
    t: 84
    quote: application areas are um uh it's a feature of um of business central uh through which we can uh develop different experiences hide fields
  - kind: video
    url: https://www.youtube.com/watch?v=uxYuoJP-uH8&t=107s
    title: "Let's pass MB-820: Episode 19 - Extend ApplicationArea with custom areas"
    date: "2025-12-15T00:52:25.000Z"
    commit: null
    t: 107
    quote: when you hide fields or when you show fields uh you can write code uh for the business logic accordingly uh your your code
  - kind: video
    url: https://www.youtube.com/watch?v=uxYuoJP-uH8&t=164s
    title: "Let's pass MB-820: Episode 19 - Extend ApplicationArea with custom areas"
    date: "2025-12-15T00:52:25.000Z"
    commit: null
    t: 164
    quote: enable custom area and the enable custom area basically is u refreshing the experience either premium or essential
  - kind: video
    url: https://www.youtube.com/watch?v=uxYuoJP-uH8&t=562s
    title: "Let's pass MB-820: Episode 19 - Extend ApplicationArea with custom areas"
    date: "2025-12-15T00:52:25.000Z"
    commit: null
    t: 562
    quote: I want it uh for those that uh just like me I I used to use application equal wall almost everywhere
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: uxYuoJP-uH8
channel: yt-bcmusings
source_name: Business Central Musings
url: https://www.youtube.com/watch?v=uxYuoJP-uH8
published_at: "2025-12-15T00:52:25.000Z"
duration_s: 605
captions: derived
audience:
  - developer
  - functional consultant
chapters:
  - t: 0
    title: Introduction and concept of application areas
  - t: 84
    title: Creating custom application areas in setup table
  - t: 154
    title: Enabling and validating custom application areas
  - t: 247
    title: Using application areas in page extensions
  - t: 380
    title: Demonstrating enabled application areas in UI
  - t: 455
    title: Summary of implementation approach
  - t: 538
    title: Closing remarks and channel information
features:
  - name: Application Area extension
    status: unclear
    t: 47
    verified: false
    status_source: video
  - name: Enable custom area function
    status: unclear
    t: 164
    verified: false
    status_source: video
  - name: Application area validation
    status: unclear
    t: 224
    verified: false
    status_source: video
  - name: Application area usage in page extensions
    status: unclear
    t: 263
    verified: false
    status_source: video
objects_mentioned:
  - table application area setup
  - table customer
  - codeunit installed
quotes:
  - t: 47
    text: we can actually create um a new application area uh by extending application area setup table
    check: exact
  - t: 84
    text: application areas are um uh it's a feature of um of business central uh through which we can uh develop different experiences hide fields
    check: exact
  - t: 107
    text: when you hide fields or when you show fields uh you can write code uh for the business logic accordingly uh your your code
    check: exact
  - t: 164
    text: enable custom area and the enable custom area basically is u refreshing the experience either premium or essential
    check: exact
  - t: 562
    text: I want it uh for those that uh just like me I I used to use application equal wall almost everywhere
    check: exact
---

# Let's pass MB-820: Episode 19 - Extend ApplicationArea with custom areas

> Extending ApplicationArea with custom areas in Business Central AL: extend the application area setup table, hook the new area to the premium or essential experience, enable it from an install codeunit, and use it on fields and groups in page extensions. Episode 19 of an MB-820 exam series.

[Watch on YouTube](https://www.youtube.com/watch?v=uxYuoJP-uH8) · Business Central Musings · 2025-12-15 · 10:05 · tier community · **unreviewed** (machine-generated)

## Overview

The episode explains application areas as a Business Central feature for building different experiences and showing or hiding fields. It walks through creating a custom application area by extending the application area setup table, then enabling and validating it in code.

The demo then applies the custom area to fields and groups in a page extension and shows the result in the UI depending on the enabled experience. The presenter says the topic came up in the MB-800 exam and notes that they previously used ApplicationArea = All almost everywhere.

## Key points

- Create a custom application area by adding a table extension to the application area setup table.
- The new area must be hooked to an existing experience, premium or essential.
- An enable custom area function refreshes the experience for the current company and registers the new area; it runs on installation via an install codeunit.
- Validation logic checks whether the custom application area is enabled and returns an error if conditions are not met.
- In page extensions, apply the custom area to fields and groups to control visibility by selected experience.
- Omit spaces from the application area name when using it in a page extension.

## Chapters

- [0:00](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=0s) Introduction and concept of application areas
- [1:24](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=84s) Creating custom application areas in setup table
- [2:34](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=154s) Enabling and validating custom application areas
- [4:07](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=247s) Using application areas in page extensions
- [6:20](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=380s) Demonstrating enabled application areas in UI
- [7:35](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=455s) Summary of implementation approach
- [8:58](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=538s) Closing remarks and channel information

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Application Area extension | status not stated, demoed | [0:47](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=47s) |  |
| Enable custom area function | status not stated, demoed | [2:44](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=164s) |  |
| Application area validation | status not stated, demoed | [3:44](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=224s) |  |
| Application area usage in page extensions | status not stated, demoed | [4:23](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=263s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "application area setup" at [0:47](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=47s)
- table "customer" at [4:23](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=263s)
- codeunit "installed" at [2:34](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=154s)

## Quotes

- [0:47](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=47s) "we can actually create um a new application area uh by extending application area setup table"
- [1:24](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=84s) "application areas are um uh it's a feature of um of business central uh through which we can uh develop different experiences hide fields"
- [1:47](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=107s) "when you hide fields or when you show fields uh you can write code uh for the business logic accordingly uh your your code"
- [2:44](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=164s) "enable custom area and the enable custom area basically is u refreshing the experience either premium or essential"
- [9:22](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=562s) "I want it uh for those that uh just like me I I used to use application equal wall almost everywhere"

## Disclaimers in the video

- [0:14](https://www.youtube.com/watch?v=uxYuoJP-uH8&t=14s) other: this is about uh extending application area in Business Central and this was something bumped into in MB800 exam
