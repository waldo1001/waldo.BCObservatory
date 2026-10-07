---
id: video/Rh1AFX9A1x4
type: video
title: "What's New: Data Analysis (2025 release wave 1)"
summary: "Analysis mode in Business Central, 2025 release wave 1: adding fields from related tables on list pages without developer-written queries, opening analysis data in Excel, and an AL get URL parameter for analysis layout. The speaker says the related-tables feature comes after general availability, likely in a minor update, estimated at 26.2 or earlier."
tier: official
language: en
tags:
  - analysis mode
  - related tables
  - data analysis
  - excel export
  - list pages
  - al get url
  - user empowerment
  - queries
system: reporting
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
  input_hash: 286a984ec96f0bad227602e218ce6f1ea630e4a0d5be14a9a0effc47c9b3d418
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=25s
    title: "What's New: Data Analysis (2025 release wave 1)"
    date: "2025-04-01T15:00:38.000Z"
    commit: null
    t: 25
    quote: in 2023 release Wave 2 we launched the ability to analyze data on list pages with this you could quickly extract insights from your
  - kind: video
    url: https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=61s
    title: "What's New: Data Analysis (2025 release wave 1)"
    date: "2025-04-01T15:00:38.000Z"
    commit: null
    t: 61
    quote: a challenge has been analyzing more complex cross entity data relationships which still has required developers creating queries
  - kind: video
    url: https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=101s
    title: "What's New: Data Analysis (2025 release wave 1)"
    date: "2025-04-01T15:00:38.000Z"
    commit: null
    t: 101
    quote: this is coming this release but it's also coming in a minor so you will have to wait a bit more so it's estimated
  - kind: video
    url: https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=480s
    title: "What's New: Data Analysis (2025 release wave 1)"
    date: "2025-04-01T15:00:38.000Z"
    commit: null
    t: 480
    quote: the only limitations that we have with this redit h fields are that copilot assist is not just supported on them
  - kind: video
    url: https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=653s
    title: "What's New: Data Analysis (2025 release wave 1)"
    date: "2025-04-01T15:00:38.000Z"
    commit: null
    t: 653
    quote: we're now adding that the AL get URL method um has a parameter that you can specify that you want for instance the analysis
  - kind: video
    url: https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=733s
    title: "What's New: Data Analysis (2025 release wave 1)"
    date: "2025-04-01T15:00:38.000Z"
    commit: null
    t: 733
    quote: do note that this feature is planned to be available after General availability of the release so right now we are looking at likely
links:
  learn: []
  objects:
    - object/table/18
    - object/page/9305
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: Rh1AFX9A1x4
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=Rh1AFX9A1x4
published_at: "2025-04-01T15:00:38.000Z"
duration_s: 760
captions: full
audience:
  - functional consultant
  - developer
  - administrator
  - end user
chapters:
  - t: 0
    title: Introduction and context on analysis mode
  - t: 81
    title: "New feature: adding fields from related tables"
  - t: 116
    title: Demo of adding columns from related tables and pages
  - t: 400
    title: Recap of related tables feature and limitations
  - t: 531
    title: Opening analysis mode data in Excel
  - t: 633
    title: "Developer feature: AL get URL method for analysis mode"
  - t: 713
    title: Conclusion and next steps
features:
  - name: Add columns from related tables in analysis mode
    status: unclear
    t: 81
    verified: false
    status_source: video
  - name: Open analysis mode data in Excel
    status: unclear
    t: 531
    verified: false
    status_source: video
  - name: AL get URL method parameter for analysis layout
    status: unclear
    t: 633
    verified: false
    status_source: video
  - name: Copilot analysis assist
    status: unclear
    t: 45
    verified: false
    status_source: video
objects_mentioned:
  - page Sales line
  - table Customer
  - table Sales head
  - page Sales order list
quotes:
  - t: 25
    text: in 2023 release Wave 2 we launched the ability to analyze data on list pages with this you could quickly extract insights from your
    check: exact
  - t: 61
    text: a challenge has been analyzing more complex cross entity data relationships which still has required developers creating queries
    check: exact
  - t: 101
    text: this is coming this release but it's also coming in a minor so you will have to wait a bit more so it's estimated
    check: exact
  - t: 480
    text: the only limitations that we have with this redit h fields are that copilot assist is not just supported on them
    check: fuzzy
  - t: 653
    text: we're now adding that the AL get URL method um has a parameter that you can specify that you want for instance the analysis
    check: exact
  - t: 733
    text: do note that this feature is planned to be available after General availability of the release so right now we are looking at likely
    check: exact
---

# What's New: Data Analysis (2025 release wave 1)

> Analysis mode in Business Central, 2025 release wave 1: adding fields from related tables on list pages without developer-written queries, opening analysis data in Excel, and an AL get URL parameter for analysis layout. The speaker says the related-tables feature comes after general availability, likely in a minor update, estimated at 26.2 or earlier.

[Watch on YouTube](https://www.youtube.com/watch?v=Rh1AFX9A1x4) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 12:40 · tier official · **unreviewed** (machine-generated)

## Overview

The video recaps analysis mode, introduced in 2023 release wave 2, and the remaining gap: cross-entity analysis has required developers to create queries. The new feature lets users add columns from related tables and pages directly in analysis mode, using existing table relationships. A demo uses the Sales order list with related tables such as Customer.

The video also shows opening an analysis mode view in Excel, including related columns, and a developer change: the AL get URL method has a parameter to open a page in analysis layout. Limitations are stated: Copilot assist does not work on related fields, calculated fields are ignored, and Excel export limits the number of rows.

## Key points

- Users can add fields from related tables and pages in analysis mode on list pages, without a developer creating a query.
- Related tables are joined through existing table relationships using a left outer join.
- Copilot analysis assist is not supported on related fields, and calculated fields are not supported and are ignored.
- A short disclaimer appears the first time fields are added, covering removed calculated fields and Excel row limits.
- Analysis mode data, including related columns, can be opened in Excel from the data area context menu or the analysis tab context menu; the number of rows is limited.
- The AL get URL method has a new parameter to open a page in analysis mode layout, so code can link directly to analysis views.
- The speaker says the related-tables feature is planned after general availability of the release, likely in a minor update, estimated at 26.2 or earlier.

## Chapters

- [0:00](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=0s) Introduction and context on analysis mode
- [1:21](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=81s) New feature: adding fields from related tables
- [1:56](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=116s) Demo of adding columns from related tables and pages
- [6:40](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=400s) Recap of related tables feature and limitations
- [8:51](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=531s) Opening analysis mode data in Excel
- [10:33](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=633s) Developer feature: AL get URL method for analysis mode
- [11:53](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=713s) Conclusion and next steps

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Add columns from related tables in analysis mode | status not stated, demoed | [1:21](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=81s) |  |
| Open analysis mode data in Excel | status not stated, demoed | [8:51](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=531s) |  |
| AL get URL method parameter for analysis layout | status not stated, demoed | [10:33](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=633s) |  |
| Copilot analysis assist | status not stated | [0:45](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=45s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- page "Sales line" at [2:17](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=137s)
- [table 18 "Customer"](../objects/table/18.md) at [2:57](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=177s)
- table "Sales head" at [3:17](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=197s)
- [page 9305 "Sales Order List"](../objects/page/9305.md) at [3:37](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=217s)

Not found in BC28-30: page "Sales line", table "Sales head".

## Quotes

- [0:25](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=25s) "in 2023 release Wave 2 we launched the ability to analyze data on list pages with this you could quickly extract insights from your"
- [1:01](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=61s) "a challenge has been analyzing more complex cross entity data relationships which still has required developers creating queries"
- [1:41](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=101s) "this is coming this release but it's also coming in a minor so you will have to wait a bit more so it's estimated"
- [8:00](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=480s) "the only limitations that we have with this redit h fields are that copilot assist is not just supported on them"
- [10:53](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=653s) "we're now adding that the AL get URL method um has a parameter that you can specify that you want for instance the analysis"
- [12:13](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=733s) "do note that this feature is planned to be available after General availability of the release so right now we are looking at likely"

## Disclaimers in the video

- [1:41](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=101s) coming-later: this is coming this release but it's also coming in a minor so you will have to wait a bit more so it's estimated at 26.2 or earlier
- [4:08](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=248s) subject-to-change: we'll get a a short disclaimer when I add fields for the first time just to make the user aware that um calculated fields are going to be removed and there's also some limitations with opening Excel regarding the number of rows
- [8:00](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=480s) other: the only limitations that we have with this redit H fields are that copilot assist is not just supported on them and also that calculated fields are not supported therefore they will be ignored
- [12:13](https://www.youtube.com/watch?v=Rh1AFX9A1x4&t=733s) coming-later: do note that this feature is planned to be available after General availability of the release so right now we are looking at likely the minor update

Presenters (as heard): Peter, Blan.
