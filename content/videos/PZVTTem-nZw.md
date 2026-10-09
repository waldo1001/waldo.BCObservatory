---
id: video/PZVTTem-nZw
type: video
title: Creating TableExtensions in BC29 like we're back in NAV (But Business Central)
summary: "The video covers table extension storage in Business Central 29. Extension fields are no longer kept in a separate SQL table but are stored in the same SQL table as the base table. This lets a table extension define cross-app keys that combine base table fields (for example, customer No.) with the extension's own fields. It requires runtime 18 and platform 29. Trade-offs: uninstalling an app with delete data now drops columns, and SQL's limit of about 1000 columns per table applies."
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
  state: reviewed
  by: opus
  at: "2026-10-07T23:16:25.805Z"
  flags: []
generated:
  at: "2026-10-09T00:29:02.995Z"
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
    url: https://www.youtube.com/watch?v=PZVTTem-nZw&t=301s
    title: Creating TableExtensions in BC29 like we're back in NAV (But Business Central)
    date: "2026-10-05T11:00:38.000Z"
    commit: null
    t: 301
    quote: we have the table with with the extension fields and now this is stored as a single table on SQL.
  - kind: video
    url: https://www.youtube.com/watch?v=PZVTTem-nZw&t=348s
    title: Creating TableExtensions in BC29 like we're back in NAV (But Business Central)
    date: "2026-10-05T11:00:38.000Z"
    commit: null
    t: 348
    quote: if we're not on runtime 18 and if you're not on a uh in reality platform 29
links:
  learn: []
  objects: []
  features:
    - feature/573315
    - feature/573332
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
    status: ga
    t: 288
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573332"
  - name: Cross-app keys in table extensions
    status: ga
    t: 247
    verified: false
    status_source: roadmap
    roadmap_ids:
      - "573315"
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
  - t: 301
    text: we have the table with with the extension fields and now this is stored as a single table on SQL.
    check: exact
  - t: 348
    text: if we're not on runtime 18 and if you're not on a uh in reality platform 29
    check: exact
---

# Creating TableExtensions in BC29 like we're back in NAV (But Business Central)

> The video covers table extension storage in Business Central 29. Extension fields are no longer kept in a separate SQL table but are stored in the same SQL table as the base table. This lets a table extension define cross-app keys that combine base table fields (for example, customer No.) with the extension's own fields. It requires runtime 18 and platform 29. Trade-offs: uninstalling an app with delete data now drops columns, and SQL's limit of about 1000 columns per table applies.

[Watch on YouTube](https://www.youtube.com/watch?v=PZVTTem-nZw) · Erik Hougaard · 2026-10-05 · 12:26 · tier community · reviewed (checked by Opus)

## Overview

Erik Hougaard walks through how table extension storage has changed from NAV through Business Central. Earlier versions used a separate table per app. A later change (around BC24, version uncertain) moved all app fields into one extra table per base table and added load fields to cut join cost.

In BC29, table extensions are no longer stored in separate tables. The video demonstrates creating a table extension with a key that combines base table fields and extension fields from different apps, which was not possible in BC12 to BC28. It also covers the expected performance impact and practical limitations of the new approach.

## Key points

- In BC29, table extension fields are no longer stored in a separate table but in a single SQL table together with the base table.
- From BC12 onward, every app extending a base table got its own SQL table, so heavily extended tables such as sales header and lines needed joins across many tables.
- Load fields let developers choose which fields to retrieve so that unused app tables are left out of the join, but it is hard to predict which fields can safely be excluded.
- Compact extension storage (around BC24, version uncertain) put all extension fields into one extra table, so only two tables were joined, but it still did not support cross-app keys.
- In BC29, a table extension can define keys that combine base app fields (for example, customer No.) with its own fields. The demo adds such a key on a Customer table extension.
- This requires runtime 18 and platform 29.
- Workarounds such as copying a base field like customer number into the extension to get usable keys are no longer needed.

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

| Feature | Status | At |
|---|---|---|
| Table extensions stored in single SQL table | generally available (roadmap [Faster data loading with improved data model for table extensions](../features/573332.md)), demoed | [4:48](https://www.youtube.com/watch?v=PZVTTem-nZw&t=288s) |
| Cross-app keys in table extensions | generally available (roadmap [Developers can define indexes that span fields from a base table and its table extensions](../features/573315.md)), demoed | [4:07](https://www.youtube.com/watch?v=PZVTTem-nZw&t=247s) |
| Load fields for selective field retrieval | status not stated | [2:25](https://www.youtube.com/watch?v=PZVTTem-nZw&t=145s) |
| Compact extension table storage | status not stated | [3:32](https://www.youtube.com/watch?v=PZVTTem-nZw&t=212s) |

A status with a roadmap link comes from the Microsoft 365 roadmap feature this part of the video covers (matched by Haiku; links Opus dropped are not used); other statuses need a status word in the video itself.

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "customer table" at [7:28](https://www.youtube.com/watch?v=PZVTTem-nZw&t=448s)
- table "table 36" at [1:59](https://www.youtube.com/watch?v=PZVTTem-nZw&t=119s)
- table "table 37" at [1:59](https://www.youtube.com/watch?v=PZVTTem-nZw&t=119s)
- table "sales head" at [1:59](https://www.youtube.com/watch?v=PZVTTem-nZw&t=119s)
- table "sales lines" at [1:59](https://www.youtube.com/watch?v=PZVTTem-nZw&t=119s)
- table "customer ledger entries" at [4:37](https://www.youtube.com/watch?v=PZVTTem-nZw&t=277s)

Not found in BC28-30: table "customer table", table "table 36", table "table 37", table "sales head", table "sales lines", table "customer ledger entries".

## Quotes

- [0:23](https://www.youtube.com/watch?v=PZVTTem-nZw&t=23s) "table extensions are no longer stored in the separate table"
- [4:07](https://www.youtube.com/watch?v=PZVTTem-nZw&t=247s) "Microsoft never got around to support cross app uh keys. And and when I say cross app, I I the the main use case"
- [4:48](https://www.youtube.com/watch?v=PZVTTem-nZw&t=288s) "now we arrive at BC 29 and Microsoft has added so we have the base table and we have the table with with the"
- [5:01](https://www.youtube.com/watch?v=PZVTTem-nZw&t=301s) "we have the table with with the extension fields and now this is stored as a single table on SQL."
- [5:48](https://www.youtube.com/watch?v=PZVTTem-nZw&t=348s) "if we're not on runtime 18 and if you're not on a uh in reality platform 29"

## Disclaimers in the video

- [3:21](https://www.youtube.com/watch?v=PZVTTem-nZw&t=201s) subject-to-change: with BC, I can't even remember I think it was BC 24. Don't quote me on the number here
- [5:48](https://www.youtube.com/watch?v=PZVTTem-nZw&t=348s) subject-to-change: if we're not on runtime 18 and if you're not on a uh in reality platform 29 uh you're not getting this

Presenters (as heard): Eric.
