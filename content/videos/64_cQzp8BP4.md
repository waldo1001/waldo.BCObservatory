---
id: video/64_cQzp8BP4
type: video
title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
summary: "Concurrent inventory posting in Business Central 2025 release wave 1 (BC26): a feature key in Feature Management lets multiple users post item, value, project and resource ledger entries at the same time. It uses number sequences instead of table locks and adds an item register number field for register drill-down. Automatic cost posting to the GL is deferred to the end of the batch, and the video gives developer guidance for custom entries."
tier: official
language: en
tags:
  - concurrent posting
  - number sequences
  - item ledger
  - locking
  - automatic cost posting
  - feature management
  - item register
  - performance
  - backwards compatibility
system: inventory
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:01:02.372Z"
  flags: []
generated:
  at: "2026-10-07T23:01:02.416Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: d3d6f046c24ed2e88932d73da4dd4b616c1a8a62c711ac728cffa311ca3d7de5
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=64_cQzp8BP4&t=33s
    title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
    date: "2025-04-01T15:00:11.000Z"
    commit: null
    t: 33
    quote: In BC25 or earlier only one user or session can insert into item lure at the same time
  - kind: video
    url: https://www.youtube.com/watch?v=64_cQzp8BP4&t=65s
    title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
    date: "2025-04-01T15:00:11.000Z"
    commit: null
    t: 65
    quote: Now two users or many user basically uh can insert and if you look closer you can see that both of these are counting
  - kind: video
    url: https://www.youtube.com/watch?v=64_cQzp8BP4&t=80s
    title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
    date: "2025-04-01T15:00:11.000Z"
    commit: null
    t: 80
    quote: we have added a new feature key for enable multiple users to post item ledger entries and value entries at the same time
  - kind: video
    url: https://www.youtube.com/watch?v=64_cQzp8BP4&t=91s
    title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
    date: "2025-04-01T15:00:11.000Z"
    commit: null
    t: 91
    quote: It's off by default. Um, we will set it on by default in three releases.
  - kind: video
    url: https://www.youtube.com/watch?v=64_cQzp8BP4&t=205s
    title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
    date: "2025-04-01T15:00:11.000Z"
    commit: null
    t: 205
    quote: instead of incrementing the counter the next entry number we just ask for the next entry number which may not be you know 1
  - kind: video
    url: https://www.youtube.com/watch?v=64_cQzp8BP4&t=290s
    title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
    date: "2025-04-01T15:00:11.000Z"
    commit: null
    t: 290
    quote: we also filter on the register number because all the entries now have a new field called item register number
  - kind: video
    url: https://www.youtube.com/watch?v=64_cQzp8BP4&t=377s
    title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
    date: "2025-04-01T15:00:11.000Z"
    commit: null
    t: 377
    quote: what we did did for BC26 was that we basically do the same as before, but we postpone it till the end
  - kind: video
    url: https://www.youtube.com/watch?v=64_cQzp8BP4&t=461s
    title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
    date: "2025-04-01T15:00:11.000Z"
    commit: null
    t: 461
    quote: you can use the get next entry number functions on the entry tables and you would also need to specify
  - kind: video
    url: https://www.youtube.com/watch?v=64_cQzp8BP4&t=614s
    title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
    date: "2025-04-01T15:00:11.000Z"
    commit: null
    t: 614
    quote: if we post one batch it took you know ballpark of 20 seconds and if we post two um batches as we just demoed
  - kind: video
    url: https://www.youtube.com/watch?v=64_cQzp8BP4&t=649s
    title: "What's New: Concurrent Inventory Posting (2025 release wave 1)"
    date: "2025-04-01T15:00:11.000Z"
    commit: null
    t: 649
    quote: one will always be slower than I mean one of them will always have to wait for the other for the GL. But the
links:
  learn: []
  objects:
    - object/table/46
    - object/table/5802
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: 64_cQzp8BP4
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=64_cQzp8BP4
published_at: "2025-04-01T15:00:11.000Z"
duration_s: 675
captions: full
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Concurrent inventory posting overview and feature management
  - t: 102
    title: Project and resource ledgers, and legacy locking mechanism
  - t: 176
    title: Number sequences and item register drill-down design
  - t: 322
    title: Automatic cost posting and GL locking demonstration
  - t: 443
    title: Developer guidance and event handling for custom entries
  - t: 595
    title: Performance benchmarks and real-world benefits
features:
  - name: Enable multiple users to post item ledger entries and value entries at the same time
    status: unclear
    t: 33
    verified: false
    status_source: video
  - name: Concurrent posting for project ledger entries
    status: unclear
    t: 113
    verified: false
    status_source: video
  - name: Number sequence-based entry numbering for concurrent posting
    status: unclear
    t: 191
    verified: false
    status_source: video
  - name: Item register number field for drill-down filtering
    status: unclear
    t: 261
    verified: false
    status_source: video
  - name: Deferred automatic cost posting to GL
    status: unclear
    t: 333
    verified: false
    status_source: video
objects_mentioned:
  - table item ledger
  - table project ledger
  - table job ledger
  - table resource ledgers
  - table item register
  - table value entries
  - table value entry
  - other inventory setup
quotes:
  - t: 33
    text: In BC25 or earlier only one user or session can insert into item lure at the same time
    check: exact
  - t: 65
    text: Now two users or many user basically uh can insert and if you look closer you can see that both of these are counting
    check: exact
  - t: 80
    text: we have added a new feature key for enable multiple users to post item ledger entries and value entries at the same time
    check: exact
  - t: 91
    text: It's off by default. Um, we will set it on by default in three releases.
    check: exact
  - t: 205
    text: instead of incrementing the counter the next entry number we just ask for the next entry number which may not be you know 1
    check: exact
  - t: 290
    text: we also filter on the register number because all the entries now have a new field called item register number
    check: exact
  - t: 377
    text: what we did did for BC26 was that we basically do the same as before, but we postpone it till the end
    check: exact
  - t: 461
    text: you can use the get next entry number functions on the entry tables and you would also need to specify
    check: exact
  - t: 614
    text: if we post one batch it took you know ballpark of 20 seconds and if we post two um batches as we just demoed
    check: exact
  - t: 649
    text: one will always be slower than I mean one of them will always have to wait for the other for the GL. But the
    check: exact
---

# What's New: Concurrent Inventory Posting (2025 release wave 1)

> Concurrent inventory posting in Business Central 2025 release wave 1 (BC26): a feature key in Feature Management lets multiple users post item, value, project and resource ledger entries at the same time. It uses number sequences instead of table locks and adds an item register number field for register drill-down. Automatic cost posting to the GL is deferred to the end of the batch, and the video gives developer guidance for custom entries.

[Watch on YouTube](https://www.youtube.com/watch?v=64_cQzp8BP4) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 11:15 · tier official · reviewed (checked by Opus)

## Overview

The video explains a new feature in BC25 wave 1 that lets several users or sessions post item ledger entries and value entries at the same time. Before, only one session could insert into the item ledger at a time. The feature replaces table locking with number sequences for entry numbers, and the same rules extend to project ledger and resource ledger entries.

It also shows the supporting changes: a new item register number field on ledger entries so drill-down from the item register still works when from and to entry numbers overlap, and automatic cost posting that is deferred to the end of the batch so the GL is not locked during inventory posting. The video includes a GL locking demonstration, guidance for developers handling custom entries, and performance benchmarks.

## Key points

- In BC25 or earlier, only one user or session could insert into the item ledger at a time, and others could hit lock timeouts.
- The feature key 'enable multiple users to post item ledger entries and value entries at the same time' is off by default and is planned to be on by default in three releases. There is no upgrade step and no penalty for switching it on and off.
- Project (job) ledger and resource ledger entries follow the same concurrent posting rules.
- Entry numbers come from number sequences, so unused numbers can be lost, like a bakery number dispenser. Legacy code paths remain behind the inventory setup legacy posting check.
- Ledger entries get a new item register number field. Register drill-down filters on it, and old entries have value zero for backwards compatibility.
- Automatic cost posting to the GL is deferred to the end of the batch. Only one session can post to the GL at a time, so concurrent batches still wait for each other at the GL step.
- Developers adding entries must use the get next entry number functions and set the item register number. Otherwise they get 'record already exists' errors. Before each batch, the number sequence is resynced with the table, and changes made in events are checked.

## Chapters

- [0:00](https://www.youtube.com/watch?v=64_cQzp8BP4&t=0s) Concurrent inventory posting overview and feature management
- [1:42](https://www.youtube.com/watch?v=64_cQzp8BP4&t=102s) Project and resource ledgers, and legacy locking mechanism
- [2:56](https://www.youtube.com/watch?v=64_cQzp8BP4&t=176s) Number sequences and item register drill-down design
- [5:22](https://www.youtube.com/watch?v=64_cQzp8BP4&t=322s) Automatic cost posting and GL locking demonstration
- [7:23](https://www.youtube.com/watch?v=64_cQzp8BP4&t=443s) Developer guidance and event handling for custom entries
- [9:55](https://www.youtube.com/watch?v=64_cQzp8BP4&t=595s) Performance benchmarks and real-world benefits

## Features

| Feature | Status | At |
|---|---|---|
| Enable multiple users to post item ledger entries and value entries at the same time | status not stated, demoed | [0:33](https://www.youtube.com/watch?v=64_cQzp8BP4&t=33s) |
| Concurrent posting for project ledger entries | status not stated | [1:53](https://www.youtube.com/watch?v=64_cQzp8BP4&t=113s) |
| Number sequence-based entry numbering for concurrent posting | status not stated, demoed | [3:11](https://www.youtube.com/watch?v=64_cQzp8BP4&t=191s) |
| Item register number field for drill-down filtering | status not stated, demoed | [4:21](https://www.youtube.com/watch?v=64_cQzp8BP4&t=261s) |
| Deferred automatic cost posting to GL | status not stated, demoed | [5:33](https://www.youtube.com/watch?v=64_cQzp8BP4&t=333s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "item ledger" at [0:33](https://www.youtube.com/watch?v=64_cQzp8BP4&t=33s)
- table "project ledger" at [1:53](https://www.youtube.com/watch?v=64_cQzp8BP4&t=113s)
- table "job ledger" at [1:53](https://www.youtube.com/watch?v=64_cQzp8BP4&t=113s)
- table "resource ledgers" at [1:53](https://www.youtube.com/watch?v=64_cQzp8BP4&t=113s)
- [table 46 "Item Register"](../objects/table/46.md) at [4:21](https://www.youtube.com/watch?v=64_cQzp8BP4&t=261s)
- table "value entries" at [4:35](https://www.youtube.com/watch?v=64_cQzp8BP4&t=275s)
- [table 5802 "Value Entry"](../objects/table/5802.md) at [8:52](https://www.youtube.com/watch?v=64_cQzp8BP4&t=532s)
- other "inventory setup" at [4:02](https://www.youtube.com/watch?v=64_cQzp8BP4&t=242s)

Not found in BC28-30: table "item ledger", table "project ledger", table "job ledger", table "resource ledgers", table "value entries".

## Quotes

- [0:33](https://www.youtube.com/watch?v=64_cQzp8BP4&t=33s) "In BC25 or earlier only one user or session can insert into item lure at the same time"
- [1:05](https://www.youtube.com/watch?v=64_cQzp8BP4&t=65s) "Now two users or many user basically uh can insert and if you look closer you can see that both of these are counting"
- [1:20](https://www.youtube.com/watch?v=64_cQzp8BP4&t=80s) "we have added a new feature key for enable multiple users to post item ledger entries and value entries at the same time"
- [1:31](https://www.youtube.com/watch?v=64_cQzp8BP4&t=91s) "It's off by default. Um, we will set it on by default in three releases."
- [3:25](https://www.youtube.com/watch?v=64_cQzp8BP4&t=205s) "instead of incrementing the counter the next entry number we just ask for the next entry number which may not be you know 1"
- [4:50](https://www.youtube.com/watch?v=64_cQzp8BP4&t=290s) "we also filter on the register number because all the entries now have a new field called item register number"
- [6:17](https://www.youtube.com/watch?v=64_cQzp8BP4&t=377s) "what we did did for BC26 was that we basically do the same as before, but we postpone it till the end"
- [7:41](https://www.youtube.com/watch?v=64_cQzp8BP4&t=461s) "you can use the get next entry number functions on the entry tables and you would also need to specify"
- [10:14](https://www.youtube.com/watch?v=64_cQzp8BP4&t=614s) "if we post one batch it took you know ballpark of 20 seconds and if we post two um batches as we just demoed"
- [10:49](https://www.youtube.com/watch?v=64_cQzp8BP4&t=649s) "one will always be slower than I mean one of them will always have to wait for the other for the GL. But the"

## Disclaimers in the video

- [1:31](https://www.youtube.com/watch?v=64_cQzp8BP4&t=91s) other: It's off by default
- [1:31](https://www.youtube.com/watch?v=64_cQzp8BP4&t=91s) coming-later: we will set it on by default in three releases
- [1:42](https://www.youtube.com/watch?v=64_cQzp8BP4&t=102s) other: there's no upgrade. there's no no penalty to go back and forth to try it out

Presenters (as heard): Bardock Nuden.
