---
id: video/QfOgUCXg94o
type: video
title: "What's New: Concurrency in Warehousing (2024 release wave 1)"
summary: "Concurrent warehouse posting in Business Central 25: multiple users can post warehouse entries at the same time, using number sequences instead of table locks. Covers the insert record function, sift bucket numbers, the on init event for warehouse entries, and a feature key that is on by default."
tier: official
language: en
tags:
  - concurrency
  - warehouse posting
  - entry numbering
  - number sequences
  - sift index
  - locking
  - feature key
  - event hooks
system: warehouse
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T19:18:03.874Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: ccc3c88ec369e0733a1423a0c674c6ab5e36cf23bb920cb2a3eeb88918f9229b
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=QfOgUCXg94o&t=28s
    title: "What's New: Concurrency in Warehousing (2024 release wave 1)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 28
    quote: only one user can post at the time and you usually have a register like a warehouse register and then some entries
  - kind: video
    url: https://www.youtube.com/watch?v=QfOgUCXg94o&t=89s
    title: "What's New: Concurrency in Warehousing (2024 release wave 1)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 89
    quote: in bc25 we will allow multiple users at the same time to post and we'll do that by using number sequences
  - kind: video
    url: https://www.youtube.com/watch?v=QfOgUCXg94o&t=143s
    title: "What's New: Concurrency in Warehousing (2024 release wave 1)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 143
    quote: we call a new function that we call insert record and that's because maybe someone else has posted old style with a lock table
  - kind: video
    url: https://www.youtube.com/watch?v=QfOgUCXg94o&t=182s
    title: "What's New: Concurrency in Warehousing (2024 release wave 1)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 182
    quote: if you have a combination of values in a sift index for instance item number and location and two users insert Warehouse entries to
  - kind: video
    url: https://www.youtube.com/watch?v=QfOgUCXg94o&t=202s
    title: "What's New: Concurrency in Warehousing (2024 release wave 1)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 202
    quote: We additionally filter on the register number so either it's zero because it's from before 25 or it is the reg number
  - kind: video
    url: https://www.youtube.com/watch?v=QfOgUCXg94o&t=243s
    title: "What's New: Concurrency in Warehousing (2024 release wave 1)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 243
    quote: we have an event that's called on in it something that we call after we have initiated the warehous entry but before we insert
  - kind: video
    url: https://www.youtube.com/watch?v=QfOgUCXg94o&t=279s
    title: "What's New: Concurrency in Warehousing (2024 release wave 1)"
    date: "2024-10-08T15:00:27.000Z"
    commit: null
    t: 279
    quote: there is a feature key that we have enabled by default but you can turn it off and in the code there is a
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: QfOgUCXg94o
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=QfOgUCXg94o
published_at: "2024-10-08T15:00:27.000Z"
duration_s: 321
captions: full
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction to warehouse posting
  - t: 28
    title: How warehouse posting works until now
  - t: 89
    title: New concurrent posting approach in BC25
  - t: 143
    title: Insert record function and sift bucket handling
  - t: 202
    title: Drill down filtering and event hooks
  - t: 263
    title: Feature key and implementation considerations
features:
  - name: Concurrent warehouse entry posting
    status: unclear
    t: 89
    verified: false
    status_source: video
  - name: Number sequences for entry numbering
    status: unclear
    t: 89
    verified: false
    status_source: video
  - name: Insert record function
    status: unclear
    t: 143
    verified: false
    status_source: video
  - name: Sift bucket number assignment
    status: unclear
    t: 182
    verified: false
    status_source: video
  - name: On init event for warehouse entries
    status: unclear
    t: 243
    verified: false
    status_source: video
  - name: Concurrent posting feature key
    status: unclear
    t: 279
    verified: false
    status_source: video
objects_mentioned:
  - table Warehouse Register
  - table Warehouse Entry
  - table Warehouse Setup
quotes:
  - t: 28
    text: only one user can post at the time and you usually have a register like a warehouse register and then some entries
    check: exact
  - t: 89
    text: in bc25 we will allow multiple users at the same time to post and we'll do that by using number sequences
    check: exact
  - t: 143
    text: we call a new function that we call insert record and that's because maybe someone else has posted old style with a lock table
    check: exact
  - t: 182
    text: if you have a combination of values in a sift index for instance item number and location and two users insert Warehouse entries to
    check: exact
  - t: 202
    text: We additionally filter on the register number so either it's zero because it's from before 25 or it is the reg number
    check: snapped
  - t: 243
    text: we have an event that's called on in it something that we call after we have initiated the warehous entry but before we insert
    check: exact
  - t: 279
    text: there is a feature key that we have enabled by default but you can turn it off and in the code there is a
    check: exact
---

# What's New: Concurrency in Warehousing (2024 release wave 1)

> Concurrent warehouse posting in Business Central 25: multiple users can post warehouse entries at the same time, using number sequences instead of table locks. Covers the insert record function, sift bucket numbers, the on init event for warehouse entries, and a feature key that is on by default.

[Watch on YouTube](https://www.youtube.com/watch?v=QfOgUCXg94o) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-10-08 · 5:21 · tier official · **unreviewed** (machine-generated)

## Overview

The video explains how warehouse posting worked until now: one user could post at a time, with a register such as the warehouse register and then its entries, and entry numbers were found through locking. In BC25, multiple users can post at the same time, and entry numbers come from a number sequence.

It then covers the changes developers need to know about. A new insert record function handles cases where someone has posted the old way with a lock table, and resets the number sequence if insertion conflicts. A semi-random sift bucket number lowers lock contention on sift indexes. Drill down filters on the register number, and an on init event lets extensions add logic before insertion. A feature key controls the behavior and can be turned off.

## Key points

- Until now only one user could post warehouse entries at a time; BC25 allows multiple users to post concurrently.
- Entry numbers are assigned through a number sequence instead of locking the table and finding the last entry.
- A new insert record function replaces simple inserts, to cope with old-style posting that still uses a lock table and to reset the number sequence when insertion conflicts occur.
- Warehouse entries get a semi-random sift bucket number between zero and four. This reduces the risk of sift index lock contention for the same item and location, but does not remove it.
- Drill down filters on register number: either zero (entries from before version 25) or the register number.
- The on init event for warehouse entries runs after initialization and before insertion. Extensions using it may need to follow similar concurrent posting patterns.
- A feature key for concurrent posting is enabled by default and can be turned off, with a related setting in Warehouse Setup.

## Chapters

- [0:00](https://www.youtube.com/watch?v=QfOgUCXg94o&t=0s) Introduction to warehouse posting
- [0:28](https://www.youtube.com/watch?v=QfOgUCXg94o&t=28s) How warehouse posting works until now
- [1:29](https://www.youtube.com/watch?v=QfOgUCXg94o&t=89s) New concurrent posting approach in BC25
- [2:23](https://www.youtube.com/watch?v=QfOgUCXg94o&t=143s) Insert record function and sift bucket handling
- [3:22](https://www.youtube.com/watch?v=QfOgUCXg94o&t=202s) Drill down filtering and event hooks
- [4:23](https://www.youtube.com/watch?v=QfOgUCXg94o&t=263s) Feature key and implementation considerations

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Concurrent warehouse entry posting | status not stated | [1:29](https://www.youtube.com/watch?v=QfOgUCXg94o&t=89s) |  |
| Number sequences for entry numbering | status not stated | [1:29](https://www.youtube.com/watch?v=QfOgUCXg94o&t=89s) |  |
| Insert record function | status not stated | [2:23](https://www.youtube.com/watch?v=QfOgUCXg94o&t=143s) |  |
| Sift bucket number assignment | status not stated | [3:02](https://www.youtube.com/watch?v=QfOgUCXg94o&t=182s) |  |
| On init event for warehouse entries | status not stated | [4:03](https://www.youtube.com/watch?v=QfOgUCXg94o&t=243s) |  |
| Concurrent posting feature key | status not stated | [4:39](https://www.youtube.com/watch?v=QfOgUCXg94o&t=279s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "Warehouse Register" at [0:28](https://www.youtube.com/watch?v=QfOgUCXg94o&t=28s)
- table "Warehouse Entry" at [0:48](https://www.youtube.com/watch?v=QfOgUCXg94o&t=48s)
- table "Warehouse Setup" at [4:59](https://www.youtube.com/watch?v=QfOgUCXg94o&t=299s)

## Quotes

- [0:28](https://www.youtube.com/watch?v=QfOgUCXg94o&t=28s) "only one user can post at the time and you usually have a register like a warehouse register and then some entries"
- [1:29](https://www.youtube.com/watch?v=QfOgUCXg94o&t=89s) "in bc25 we will allow multiple users at the same time to post and we'll do that by using number sequences"
- [2:23](https://www.youtube.com/watch?v=QfOgUCXg94o&t=143s) "we call a new function that we call insert record and that's because maybe someone else has posted old style with a lock table"
- [3:02](https://www.youtube.com/watch?v=QfOgUCXg94o&t=182s) "if you have a combination of values in a sift index for instance item number and location and two users insert Warehouse entries to"
- [3:22](https://www.youtube.com/watch?v=QfOgUCXg94o&t=202s) "We additionally filter on the register number so either it's zero because it's from before 25 or it is the reg number"
- [4:03](https://www.youtube.com/watch?v=QfOgUCXg94o&t=243s) "we have an event that's called on in it something that we call after we have initiated the warehous entry but before we insert"
- [4:39](https://www.youtube.com/watch?v=QfOgUCXg94o&t=279s) "there is a feature key that we have enabled by default but you can turn it off and in the code there is a"

## Disclaimers in the video

- [1:29](https://www.youtube.com/watch?v=QfOgUCXg94o&t=89s) coming-later: in bc25 we will allow multiple users at the same time to post

Presenters (as heard): B Knutsen.
