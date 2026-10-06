---
id: video/8D8IFkqeTLU
type: video
title: Use FlowFields directly inside your Spreadsheet inside Business Central  (Advanced Spreadsheets)
summary: "Using FlowFields directly in Business Central Advanced Spreadsheets: building a FlowField region for item sales, adding date range regions, referencing cells in filters, and connecting slicers. Demonstrated with item sales calculated per period."
tier: community
language: en
tags:
  - flowfields
  - advanced spreadsheets
  - date ranges
  - filters
  - slicers
  - cell references
  - item sales
  - spreadsheet regions
system: reporting
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T16:44:37.237Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: f69aa31bb4428f45d5a177f665121346940b72c33ab196c3e653cd2c6a050a39
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=8D8IFkqeTLU&t=11s
    title: Use FlowFields directly inside your Spreadsheet inside Business Central  (Advanced Spreadsheets)
    date: "2026-09-21T19:14:15.000Z"
    commit: null
    t: 11
    quote: in this video I'm going to show you how you can actually take a specific flow field from anywhere in the system and use
  - kind: video
    url: https://www.youtube.com/watch?v=8D8IFkqeTLU&t=73s
    title: Use FlowFields directly inside your Spreadsheet inside Business Central  (Advanced Spreadsheets)
    date: "2026-09-21T19:14:15.000Z"
    commit: null
    t: 73
    quote: now you see I have 12 um flow fields here. They're all calculating the same and basically they're just calculating how many items I
  - kind: video
    url: https://www.youtube.com/watch?v=8D8IFkqeTLU&t=108s
    title: Use FlowFields directly inside your Spreadsheet inside Business Central  (Advanced Spreadsheets)
    date: "2026-09-21T19:14:15.000Z"
    commit: null
    t: 108
    quote: You specify a start date or formula. Uh and then an interval and how many. So, in this case it says minus CY means
  - kind: video
    url: https://www.youtube.com/watch?v=8D8IFkqeTLU&t=191s
    title: Use FlowFields directly inside your Spreadsheet inside Business Central  (Advanced Spreadsheets)
    date: "2026-09-21T19:14:15.000Z"
    commit: null
    t: 191
    quote: whenever you're working with references in in regions, it's always from from the first one. So, I'll I'll select that. So, we have now
  - kind: video
    url: https://www.youtube.com/watch?v=8D8IFkqeTLU&t=202s
    title: Use FlowFields directly inside your Spreadsheet inside Business Central  (Advanced Spreadsheets)
    date: "2026-09-21T19:14:15.000Z"
    commit: null
    t: 202
    quote: it will take the D5 cell. Um but because this is just D5, it will actually, if we go back, now we can see
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: 8D8IFkqeTLU
channel: yt-hougaard
source_name: Erik Hougaard
url: https://www.youtube.com/watch?v=8D8IFkqeTLU
published_at: "2026-09-21T19:14:15.000Z"
duration_s: 346
captions: derived
audience:
  - functional consultant
  - end user
  - developer
chapters:
  - t: 0
    title: Introduction to FlowFields in Spreadsheets
  - t: 21
    title: Creating a FlowField Region for Item Sales
  - t: 73
    title: Adding Date Ranges to Filter Data
  - t: 145
    title: Connecting Date Filters with Cell References
  - t: 202
    title: Spreadsheet Behavior with Relative References
  - t: 275
    title: Using Slicers to Filter FlowField Results
  - t: 309
    title: Benefits and Conclusion
features:
  - name: FlowFields in Spreadsheets
    status: unclear
    t: 11
    verified: false
    status_source: video
  - name: Date Range Regions
    status: unclear
    t: 96
    verified: false
    status_source: video
  - name: Cell References in Filters
    status: unclear
    t: 169
    verified: false
    status_source: video
  - name: Slicers in Spreadsheets
    status: unclear
    t: 238
    verified: false
    status_source: video
objects_mentioned:
  - table item
  - table item table
quotes:
  - t: 11
    text: in this video I'm going to show you how you can actually take a specific flow field from anywhere in the system and use
    check: exact
  - t: 73
    text: now you see I have 12 um flow fields here. They're all calculating the same and basically they're just calculating how many items I
    check: exact
  - t: 108
    text: You specify a start date or formula. Uh and then an interval and how many. So, in this case it says minus CY means
    check: exact
  - t: 191
    text: whenever you're working with references in in regions, it's always from from the first one. So, I'll I'll select that. So, we have now
    check: exact
  - t: 202
    text: it will take the D5 cell. Um but because this is just D5, it will actually, if we go back, now we can see
    check: exact
---

# Use FlowFields directly inside your Spreadsheet inside Business Central  (Advanced Spreadsheets)

> Using FlowFields directly in Business Central Advanced Spreadsheets: building a FlowField region for item sales, adding date range regions, referencing cells in filters, and connecting slicers. Demonstrated with item sales calculated per period.

[Watch on YouTube](https://www.youtube.com/watch?v=8D8IFkqeTLU) · Erik Hougaard · 2026-09-21 · 5:46 · tier community · **unreviewed** (machine-generated)

## Overview

Erik Hougaard shows how to take a specific FlowField from anywhere in Business Central and use it inside a spreadsheet with the advanced spreadsheet and reporting app. The demo builds a FlowField region on the item table for item sales, then adds a date range region so the same calculation runs across 12 periods.

He then connects the date filters to spreadsheet cells with cell references, explains how relative references behave as they move down rows, and adds slicers to filter the FlowField results interactively. The approach lets you get large calculated numbers out of Business Central without querying them in the usual way.

## Key points

- A FlowField from any table, such as the item table, can be used in a spreadsheet region in the advanced spreadsheet and reporting app.
- Date range regions take a start date or formula, an interval and a count. A formula based on the current year can generate the periods.
- In the demo, 12 FlowFields calculate the same item sales figure, each over a different date range.
- Cell references go into filter formulas in square brackets and behave like normal spreadsheet references, so relative references update as they move down rows.
- When referencing cells inside regions, the reference is always from the first row of the region.
- Slicers are defined with a question mark prefix and can filter by date, dimension, field list or range.
- A slicer must be connected to the FlowField region using absolute references.

## Chapters

- [0:00](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=0s) Introduction to FlowFields in Spreadsheets
- [0:21](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=21s) Creating a FlowField Region for Item Sales
- [1:13](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=73s) Adding Date Ranges to Filter Data
- [2:25](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=145s) Connecting Date Filters with Cell References
- [3:22](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=202s) Spreadsheet Behavior with Relative References
- [4:35](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=275s) Using Slicers to Filter FlowField Results
- [5:09](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=309s) Benefits and Conclusion

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| FlowFields in Spreadsheets | status not stated, demoed | [0:11](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=11s) |  |
| Date Range Regions | status not stated, demoed | [1:36](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=96s) |  |
| Cell References in Filters | status not stated, demoed | [2:49](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=169s) |  |
| Slicers in Spreadsheets | status not stated, demoed | [3:58](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=238s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "item" at [0:45](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=45s)
- table "item table" at [4:09](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=249s)

## Quotes

- [0:11](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=11s) "in this video I'm going to show you how you can actually take a specific flow field from anywhere in the system and use"
- [1:13](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=73s) "now you see I have 12 um flow fields here. They're all calculating the same and basically they're just calculating how many items I"
- [1:48](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=108s) "You specify a start date or formula. Uh and then an interval and how many. So, in this case it says minus CY means"
- [3:11](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=191s) "whenever you're working with references in in regions, it's always from from the first one. So, I'll I'll select that. So, we have now"
- [3:22](https://www.youtube.com/watch?v=8D8IFkqeTLU&t=202s) "it will take the D5 cell. Um but because this is just D5, it will actually, if we go back, now we can see"

Presenters (as heard): Eric.
