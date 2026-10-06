---
id: video/CkGTSItdTbs
type: video
title: "What's New: Create Multiple Fixed Assets (2025 release wave 2)"
summary: Creating multiple fixed assets from one purchase order line in Business Central (2025 release wave 2). The demo buys 25 smartphones and posts to create 25 fixed asset cards with sequential numbers. The feature was previously part of Italian localization and is now available to all databases.
tier: official
language: en
tags:
  - bulk asset creation
  - multiple fixed assets
  - automation
  - purchase order
  - asset numbering
  - fixed asset depreciation
  - localization
  - inventory management
system: fixed-assets
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:23:52.840Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 3d12373cab1773d55216593f218a03550885c6eeb70b7d90085ef918c6d34b24
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=CkGTSItdTbs&t=17s
    title: "What's New: Create Multiple Fixed Assets (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 17
    quote: previously this feature was part of Italian localization and now this is available to all databases and no localization globally
  - kind: video
    url: https://www.youtube.com/watch?v=CkGTSItdTbs&t=31s
    title: "What's New: Create Multiple Fixed Assets (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 31
    quote: this is really important so you can automate asset creation never mind how many of them
  - kind: video
    url: https://www.youtube.com/watch?v=CkGTSItdTbs&t=68s
    title: "What's New: Create Multiple Fixed Assets (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 68
    quote: Imagine you want to purchase 25 smartphones. So all of them are expensive. So they are fixed assets.
  - kind: video
    url: https://www.youtube.com/watch?v=CkGTSItdTbs&t=121s
    title: "What's New: Create Multiple Fixed Assets (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 121
    quote: I will enter 25 pieces as a quantity. But now if you click post nothing will happen.
  - kind: video
    url: https://www.youtube.com/watch?v=CkGTSItdTbs&t=144s
    title: "What's New: Create Multiple Fixed Assets (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 144
    quote: you need to add new uh field. This is number of fixed assets cards. Add this field into lines
  - kind: video
    url: https://www.youtube.com/watch?v=CkGTSItdTbs&t=193s
    title: "What's New: Create Multiple Fixed Assets (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 193
    quote: system automatically in the background created 25 fixed assets. Just open this entry and you will find all entries for all of them.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: CkGTSItdTbs
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=CkGTSItdTbs
published_at: "2025-10-01T00:00:00Z"
duration_s: 273
captions: full
audience:
  - functional consultant
  - administrator
  - end user
chapters:
  - t: 0
    title: Introduction and localization background
  - t: 31
    title: Business value and automation benefits
  - t: 58
    title: Demo setup - creating first fixed asset and purchase order
  - t: 107
    title: Adding number of fixed assets cards field
  - t: 158
    title: Posting and verifying created assets
  - t: 204
    title: Summary and workflow overview
  - t: 232
    title: Call to action and closing remarks
features:
  - name: Create multiple fixed assets from purchase order
    status: unclear
    t: 6
    verified: false
    status_source: video
  - name: Fixed asset global availability
    status: unclear
    t: 17
    verified: false
    status_source: video
  - name: Automatic asset numbering with number series
    status: unclear
    t: 183
    verified: false
    status_source: video
objects_mentioned:
  - table Fixed Assets Ledger Entry
  - table Fixed Assets
quotes:
  - t: 17
    text: previously this feature was part of Italian localization and now this is available to all databases and no localization globally
    check: exact
  - t: 31
    text: this is really important so you can automate asset creation never mind how many of them
    check: exact
  - t: 68
    text: Imagine you want to purchase 25 smartphones. So all of them are expensive. So they are fixed assets.
    check: exact
  - t: 121
    text: I will enter 25 pieces as a quantity. But now if you click post nothing will happen.
    check: exact
  - t: 144
    text: you need to add new uh field. This is number of fixed assets cards. Add this field into lines
    check: exact
  - t: 193
    text: system automatically in the background created 25 fixed assets. Just open this entry and you will find all entries for all of them.
    check: exact
---

# What's New: Create Multiple Fixed Assets (2025 release wave 2)

> Creating multiple fixed assets from one purchase order line in Business Central (2025 release wave 2). The demo buys 25 smartphones and posts to create 25 fixed asset cards with sequential numbers. The feature was previously part of Italian localization and is now available to all databases.

[Watch on YouTube](https://www.youtube.com/watch?v=CkGTSItdTbs) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-10-01 · 4:33 · tier official · **unreviewed** (machine-generated)

## Overview

The video explains that creating multiple fixed assets at once was previously part of the Italian localization and is now available in all databases, with no localization needed. It shows how this automates asset creation however many identical assets are bought.

In the demo, a first fixed asset is created and a purchase order is entered for 25 smartphones. Posting alone does nothing until the 'number of fixed assets cards' field is added to the purchase lines through personalization and set to match the quantity. After posting, 25 fixed assets are created in the background, numbered from a number series in steps of 10, and can be checked through the Fixed Assets Ledger Entry table.

## Key points

- The multiple fixed assets feature was previously part of Italian localization and is now available to all databases, with no localization needed.
- Demo scenario: a purchase order for 25 smartphones, treated as fixed assets because they are expensive.
- Entering the quantity and posting is not enough. Nothing happens until the 'number of fixed assets cards' field is added to the purchase lines.
- The field is added through page personalization, and its value must equal the quantity for the assets to be created automatically.
- Asset numbers come from the configured number series and increment by 10 in the demo (100, 110, 120, 130).
- After posting, the system creates the 25 fixed assets in the background. Opening the ledger entry shows the entries for all of them.

## Chapters

- [0:00](https://www.youtube.com/watch?v=CkGTSItdTbs&t=0s) Introduction and localization background
- [0:31](https://www.youtube.com/watch?v=CkGTSItdTbs&t=31s) Business value and automation benefits
- [0:58](https://www.youtube.com/watch?v=CkGTSItdTbs&t=58s) Demo setup - creating first fixed asset and purchase order
- [1:47](https://www.youtube.com/watch?v=CkGTSItdTbs&t=107s) Adding number of fixed assets cards field
- [2:38](https://www.youtube.com/watch?v=CkGTSItdTbs&t=158s) Posting and verifying created assets
- [3:24](https://www.youtube.com/watch?v=CkGTSItdTbs&t=204s) Summary and workflow overview
- [3:52](https://www.youtube.com/watch?v=CkGTSItdTbs&t=232s) Call to action and closing remarks

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Create multiple fixed assets from purchase order | status not stated, demoed | [0:06](https://www.youtube.com/watch?v=CkGTSItdTbs&t=6s) |  |
| Fixed asset global availability | status not stated | [0:17](https://www.youtube.com/watch?v=CkGTSItdTbs&t=17s) |  |
| Automatic asset numbering with number series | status not stated, demoed | [3:03](https://www.youtube.com/watch?v=CkGTSItdTbs&t=183s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "Fixed Assets Ledger Entry" at [3:03](https://www.youtube.com/watch?v=CkGTSItdTbs&t=183s)
- table "Fixed Assets" at [3:24](https://www.youtube.com/watch?v=CkGTSItdTbs&t=204s)

## Quotes

- [0:17](https://www.youtube.com/watch?v=CkGTSItdTbs&t=17s) "previously this feature was part of Italian localization and now this is available to all databases and no localization globally"
- [0:31](https://www.youtube.com/watch?v=CkGTSItdTbs&t=31s) "this is really important so you can automate asset creation never mind how many of them"
- [1:08](https://www.youtube.com/watch?v=CkGTSItdTbs&t=68s) "Imagine you want to purchase 25 smartphones. So all of them are expensive. So they are fixed assets."
- [2:01](https://www.youtube.com/watch?v=CkGTSItdTbs&t=121s) "I will enter 25 pieces as a quantity. But now if you click post nothing will happen."
- [2:24](https://www.youtube.com/watch?v=CkGTSItdTbs&t=144s) "you need to add new uh field. This is number of fixed assets cards. Add this field into lines"
- [3:13](https://www.youtube.com/watch?v=CkGTSItdTbs&t=193s) "system automatically in the background created 25 fixed assets. Just open this entry and you will find all entries for all of them."

Presenters (as heard): Alexander Totovich.
