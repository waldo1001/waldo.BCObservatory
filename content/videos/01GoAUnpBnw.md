---
id: video/01GoAUnpBnw
type: video
title: "What's New: Migrate Record Links and Notes (2025 release wave 2)"
summary: "Migrating record links and notes from an on-premises database to Business Central online as part of cloud migration (2025 release wave 2). Covers the buffer table, the Migrate record links and notes action on the cloud migration management page, the warnings field, and the required order: replication, then migration, then user mapping."
tier: official
language: en
tags:
  - cloud migration
  - record links
  - notes migration
  - data replication
  - buffer table
  - on-premises to cloud
  - user mapping
  - cloud migration management
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:22:57.175Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: f0864b8b7552c9d00f27c1db861508d51951c49462fdf43516553de02f0c1988
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=01GoAUnpBnw&t=17s
    title: "What's New: Migrate Record Links and Notes (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 17
    quote: record links and nodes are very critical. Uh they can contain customer insights, annotations or references and they are important for your day-to-day decisions
  - kind: video
    url: https://www.youtube.com/watch?v=01GoAUnpBnw&t=29s
    title: "What's New: Migrate Record Links and Notes (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 29
    quote: Previously record links and not notes were not migrated from on-rem database to cloud. Uh so partners would have to spend a lot of
  - kind: video
    url: https://www.youtube.com/watch?v=01GoAUnpBnw&t=40s
    title: "What's New: Migrate Record Links and Notes (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 40
    quote: But now with new capabilities record links and nodes migration is part of the cloud migration process.
  - kind: video
    url: https://www.youtube.com/watch?v=01GoAUnpBnw&t=65s
    title: "What's New: Migrate Record Links and Notes (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 65
    quote: Replications will bring bring the uh record links and nodes to a buffer table so that we don't override your existing record links and
  - kind: video
    url: https://www.youtube.com/watch?v=01GoAUnpBnw&t=126s
    title: "What's New: Migrate Record Links and Notes (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 126
    quote: Make sure you run the record links and notes migration after the replication so that records are moved to the buffer table beforehand.
  - kind: video
    url: https://www.youtube.com/watch?v=01GoAUnpBnw&t=141s
    title: "What's New: Migrate Record Links and Notes (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 141
    quote: Also, make sure you do this uh before doing the uh user mapping because when you do the user mapping uh we'll change the
  - kind: video
    url: https://www.youtube.com/watch?v=01GoAUnpBnw&t=154s
    title: "What's New: Migrate Record Links and Notes (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 154
    quote: we do not overwrite your existing record links and notes. So it's very safe to use. You can run it the run the action
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: 01GoAUnpBnw
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=01GoAUnpBnw
published_at: "2025-10-01T00:00:00Z"
duration_s: 171
captions: full
audience:
  - administrator
  - partner
  - functional consultant
chapters:
  - t: 0
    title: What are record links and notes
  - t: 29
    title: The problem and solution
  - t: 53
    title: Cloud migration setup and buffer table
  - t: 75
    title: "Demo: migrating record links and notes"
  - t: 126
    title: Best practices and safety considerations
features:
  - name: Record links and notes migration
    status: unclear
    t: 40
    verified: false
    status_source: video
  - name: Cloud migration management page
    status: unclear
    t: 53
    verified: false
    status_source: video
  - name: Migrate record links and notes action
    status: unclear
    t: 75
    verified: false
    status_source: video
  - name: Warnings field for record link migration
    status: unclear
    t: 86
    verified: false
    status_source: video
objects_mentioned:
  - page cloud migration management page
quotes:
  - t: 17
    text: record links and nodes are very critical. Uh they can contain customer insights, annotations or references and they are important for your day-to-day decisions
    check: exact
  - t: 29
    text: Previously record links and not notes were not migrated from on-rem database to cloud. Uh so partners would have to spend a lot of
    check: exact
  - t: 40
    text: But now with new capabilities record links and nodes migration is part of the cloud migration process.
    check: exact
  - t: 65
    text: Replications will bring bring the uh record links and nodes to a buffer table so that we don't override your existing record links and
    check: exact
  - t: 126
    text: Make sure you run the record links and notes migration after the replication so that records are moved to the buffer table beforehand.
    check: exact
  - t: 141
    text: Also, make sure you do this uh before doing the uh user mapping because when you do the user mapping uh we'll change the
    check: exact
  - t: 154
    text: we do not overwrite your existing record links and notes. So it's very safe to use. You can run it the run the action
    check: exact
---

# What's New: Migrate Record Links and Notes (2025 release wave 2)

> Migrating record links and notes from an on-premises database to Business Central online as part of cloud migration (2025 release wave 2). Covers the buffer table, the Migrate record links and notes action on the cloud migration management page, the warnings field, and the required order: replication, then migration, then user mapping.

[Watch on YouTube](https://www.youtube.com/watch?v=01GoAUnpBnw) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-10-01 · 2:51 · tier official · **unreviewed** (machine-generated)

## Overview

Record links and notes can hold customer insights, annotations and references. Previously they were not migrated from the on-premises database to the cloud, so partners had to bring them over manually. Now their migration is part of the cloud migration process.

Replication puts the record links and notes into a buffer table so existing records in the cloud are not overwritten. After replication finishes, a user runs the migrate action on the cloud migration management page to move them from the buffer table to the actual table. A new warnings field shows when the record link table has not been migrated since the last replication. The demo shows the full flow.

## Key points

- Record links and notes migration is now part of the cloud migration process; before, they had to be brought over manually.
- Replication moves record links and notes into a buffer table first, so existing records in the cloud are not overwritten.
- Run the Migrate record links and notes action on the cloud migration management page after data replication completes.
- Run the migration before user mapping, because user mapping changes the user references.
- A new warnings field on the cloud migration management page flags that the record link table has not been migrated since the last replication.
- The presenter says the action does not overwrite existing record links and notes, so it is safe to run.

## Chapters

- [0:00](https://www.youtube.com/watch?v=01GoAUnpBnw&t=0s) What are record links and notes
- [0:29](https://www.youtube.com/watch?v=01GoAUnpBnw&t=29s) The problem and solution
- [0:53](https://www.youtube.com/watch?v=01GoAUnpBnw&t=53s) Cloud migration setup and buffer table
- [1:15](https://www.youtube.com/watch?v=01GoAUnpBnw&t=75s) Demo: migrating record links and notes
- [2:06](https://www.youtube.com/watch?v=01GoAUnpBnw&t=126s) Best practices and safety considerations

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Record links and notes migration | status not stated, demoed | [0:40](https://www.youtube.com/watch?v=01GoAUnpBnw&t=40s) |  |
| Cloud migration management page | status not stated, demoed | [0:53](https://www.youtube.com/watch?v=01GoAUnpBnw&t=53s) |  |
| Migrate record links and notes action | status not stated, demoed | [1:15](https://www.youtube.com/watch?v=01GoAUnpBnw&t=75s) |  |
| Warnings field for record link migration | status not stated, demoed | [1:26](https://www.youtube.com/watch?v=01GoAUnpBnw&t=86s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- page "cloud migration management page" at [0:53](https://www.youtube.com/watch?v=01GoAUnpBnw&t=53s)

## Quotes

- [0:17](https://www.youtube.com/watch?v=01GoAUnpBnw&t=17s) "record links and nodes are very critical. Uh they can contain customer insights, annotations or references and they are important for your day-to-day decisions"
- [0:29](https://www.youtube.com/watch?v=01GoAUnpBnw&t=29s) "Previously record links and not notes were not migrated from on-rem database to cloud. Uh so partners would have to spend a lot of"
- [0:40](https://www.youtube.com/watch?v=01GoAUnpBnw&t=40s) "But now with new capabilities record links and nodes migration is part of the cloud migration process."
- [1:05](https://www.youtube.com/watch?v=01GoAUnpBnw&t=65s) "Replications will bring bring the uh record links and nodes to a buffer table so that we don't override your existing record links and"
- [2:06](https://www.youtube.com/watch?v=01GoAUnpBnw&t=126s) "Make sure you run the record links and notes migration after the replication so that records are moved to the buffer table beforehand."
- [2:21](https://www.youtube.com/watch?v=01GoAUnpBnw&t=141s) "Also, make sure you do this uh before doing the uh user mapping because when you do the user mapping uh we'll change the"
- [2:34](https://www.youtube.com/watch?v=01GoAUnpBnw&t=154s) "we do not overwrite your existing record links and notes. So it's very safe to use. You can run it the run the action"

Presenters (as heard): Onet.
