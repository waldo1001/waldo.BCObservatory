---
id: video/PZVTTem-nZw
type: video
title: Creating TableExtensions in BC29 like we're back in NAV (But Business Central)
summary: Table extension storage in Business Central 29 and cross-app keys. Extension fields now sit in a single SQL table alongside the base table, which allows keys that mix base table fields with fields from extensions in different apps. Requires runtime 18 and platform 29.
tier: community
language: en
tags:
  - table extensions
  - cross-app keys
  - sql performance
  - extension storage
  - field storage
  - al development
  - app uninstalling
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T16:15:07.086Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 29bf121d572a08e293481f8b0b92970aa13fb255d7b25b5671758af935e74264
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=PZVTTem-nZw&t=23s
    title: Creating TableExtensions in BC29 like we're back in NAV (But Business Central)
    date: "2026-10-05T11:00:38.000Z"
    commit: null
    t: 23
    quote: table extensions are no longer stored in the separate table
  - kind: video
    url: https://www.youtube.com/watch?v=PZVTTem-nZw&t=247s
    title: Creating TableExtensions in BC29 like we're back in NAV (But Business Central)
    date: "2026-10-05T11:00:38.000Z"
    commit: null
    t: 247
    quote: Microsoft never got around to support cross app uh keys. And and when I say cross app, I I the the main use case
  - kind: video
    url: https://www.youtube.com/watch?v=PZVTTem-nZw&t=288s
    title: Creating TableExtensions in BC29 like we're back in NAV (But Business Central)
    date: "2026-10-05T11:00:38.000Z"
    commit: null
    t: 288
    quote: now we arrive at BC 29 and Microsoft has added so we have the base table and we have the table with with the
  - kind: video
    url: https://www.youtube.com/watch?v=PZVTTem-nZw&t=475s
    title: Creating TableExtensions in BC29 like we're back in NAV (But Business Central)
    date: "2026-10-05T11:00:38.000Z"
    commit: null
    t: 475
    quote: we couldn't do this before and this will have a big impact on on
  - kind: video
    url: https://www.youtube.com/watch?v=PZVTTem-nZw&t=576s
    title: Creating TableExtensions in BC29 like we're back in NAV (But Business Central)
    date: "2026-10-05T11:00:38.000Z"
    commit: null
    t: 576
    quote: when you uninstall an app and ask to delete data if you're the only app that is extending a table, then you know, Microsoft
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: PZVTTem-nZw
channel: yt-hougaard
source_name: Erik Hougaard
url: https://www.youtube.com/watch?v=PZVTTem-nZw
published_at: "2026-10-05T11:00:38.000Z"
duration_s: 746
captions: derived
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction and BC29 table extensions overview
  - t: 62
    title: "History: NAV to BC extension storage evolution"
  - t: 145
    title: Performance optimization with compact storage and load fields
  - t: 236
    title: Cross-app keys limitation and BC29 solution
  - t: 311
    title: "Demonstration: creating table extensions with cross-app keys"
  - t: 475
    title: Impact on performance and workarounds no longer needed
  - t: 562
    title: Practical challenges and limitations of the new approach
  - t: 694
    title: Conclusion and wrap-up
features:
  - name: Table extensions stored in single SQL table
    status: unclear
    t: 288
    verified: false
    status_source: video
  - name: Cross-app keys in table extensions
    status: unclear
    t: 247
    verified: false
    status_source: video
  - name: Load fields for selective field retrieval
    status: unclear
    t: 145
    verified: false
    status_source: video
  - name: Compact extension table storage
    status: unclear
    t: 212
    verified: false
    status_source: video
objects_mentioned:
  - table customer table
  - table table 36
  - table table 37
  - table sales head
  - table sales lines
  - table customer ledger entries
quotes:
  - t: 23
    text: table extensions are no longer stored in the separate table
    check: exact
  - t: 247
    text: Microsoft never got around to support cross app uh keys. And and when I say cross app, I I the the main use case
    check: exact
  - t: 288
    text: now we arrive at BC 29 and Microsoft has added so we have the base table and we have the table with with the
    check: exact
  - t: 475
    text: we couldn't do this before and this will have a big impact on on
    check: fuzzy
  - t: 576
    text: when you uninstall an app and ask to delete data if you're the only app that is extending a table, then you know, Microsoft
    check: exact
---

# Creating TableExtensions in BC29 like we're back in NAV (But Business Central)

> Table extension storage in Business Central 29 and cross-app keys. Extension fields now sit in a single SQL table alongside the base table, which allows keys that mix base table fields with fields from extensions in different apps. Requires runtime 18 and platform 29.

[Watch on YouTube](https://www.youtube.com/watch?v=PZVTTem-nZw) · Erik Hougaard · 2026-10-05 · 12:26 · tier community · **unreviewed** (machine-generated)

## Overview

Erik Hougaard walks through how table extension storage has changed from NAV through Business Central. Earlier versions used a separate table per app. A later change (around BC24, version uncertain) moved all app fields into one extra table per base table and added load fields to cut join cost.

In BC29, table extensions are no longer stored in separate tables. The video demonstrates creating a table extension with a key that combines base table fields and extension fields from different apps, which was not possible in BC12 to BC28. It also covers the expected performance impact and practical limitations of the new approach.

## Key points

- In BC29, table extensions are no longer stored in a separate table per app but in a single SQL table together with the base table.
- Cross-app keys, combining standard table fields with extension fields from different apps, are possible in BC29 and were not possible in BC12 to BC28.
- The behavior requires runtime 18 and platform 29.
- The SQL column limit is around 1000 fields in the Business Central setup, which limits how many fields can be stored.
- Compact extension storage (around BC24, version uncertain) reduced joins to two tables but did not support cross-app keys.
- Load fields let developers choose which fields to retrieve, but it is hard to predict which fields can safely be excluded.
- The video touches on uninstalling an app and deleting its data when it is the only app extending a table.

## Chapters

- [0:00](https://www.youtube.com/watch?v=PZVTTem-nZw&t=0s) Introduction and BC29 table extensions overview
- [1:02](https://www.youtube.com/watch?v=PZVTTem-nZw&t=62s) History: NAV to BC extension storage evolution
- [2:25](https://www.youtube.com/watch?v=PZVTTem-nZw&t=145s) Performance optimization with compact storage and load fields
- [3:56](https://www.youtube.com/watch?v=PZVTTem-nZw&t=236s) Cross-app keys limitation and BC29 solution
- [5:11](https://www.youtube.com/watch?v=PZVTTem-nZw&t=311s) Demonstration: creating table extensions with cross-app keys
- [7:55](https://www.youtube.com/watch?v=PZVTTem-nZw&t=475s) Impact on performance and workarounds no longer needed
- [9:22](https://www.youtube.com/watch?v=PZVTTem-nZw&t=562s) Practical challenges and limitations of the new approach
- [11:34](https://www.youtube.com/watch?v=PZVTTem-nZw&t=694s) Conclusion and wrap-up

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Table extensions stored in single SQL table | status not stated, demoed | [4:48](https://www.youtube.com/watch?v=PZVTTem-nZw&t=288s) |  |
| Cross-app keys in table extensions | status not stated, demoed | [4:07](https://www.youtube.com/watch?v=PZVTTem-nZw&t=247s) |  |
| Load fields for selective field retrieval | status not stated | [2:25](https://www.youtube.com/watch?v=PZVTTem-nZw&t=145s) |  |
| Compact extension table storage | status not stated | [3:32](https://www.youtube.com/watch?v=PZVTTem-nZw&t=212s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "customer table" at [7:28](https://www.youtube.com/watch?v=PZVTTem-nZw&t=448s)
- table "table 36" at [1:59](https://www.youtube.com/watch?v=PZVTTem-nZw&t=119s)
- table "table 37" at [1:59](https://www.youtube.com/watch?v=PZVTTem-nZw&t=119s)
- table "sales head" at [1:59](https://www.youtube.com/watch?v=PZVTTem-nZw&t=119s)
- table "sales lines" at [1:59](https://www.youtube.com/watch?v=PZVTTem-nZw&t=119s)
- table "customer ledger entries" at [4:37](https://www.youtube.com/watch?v=PZVTTem-nZw&t=277s)

## Quotes

- [0:23](https://www.youtube.com/watch?v=PZVTTem-nZw&t=23s) "table extensions are no longer stored in the separate table"
- [4:07](https://www.youtube.com/watch?v=PZVTTem-nZw&t=247s) "Microsoft never got around to support cross app uh keys. And and when I say cross app, I I the the main use case"
- [4:48](https://www.youtube.com/watch?v=PZVTTem-nZw&t=288s) "now we arrive at BC 29 and Microsoft has added so we have the base table and we have the table with with the"
- [7:55](https://www.youtube.com/watch?v=PZVTTem-nZw&t=475s) "we couldn't do this before and this will have a big impact on on"
- [9:36](https://www.youtube.com/watch?v=PZVTTem-nZw&t=576s) "when you uninstall an app and ask to delete data if you're the only app that is extending a table, then you know, Microsoft"

## Disclaimers in the video

- [3:21](https://www.youtube.com/watch?v=PZVTTem-nZw&t=201s) subject-to-change: with BC, I can't even remember I think it was BC 24. Don't quote me on the number here
- [5:48](https://www.youtube.com/watch?v=PZVTTem-nZw&t=348s) subject-to-change: if we're not on runtime 18 and if you're not on a uh in reality platform 29 uh you're not getting this

Presenters (as heard): Eric.
