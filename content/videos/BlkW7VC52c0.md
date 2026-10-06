---
id: video/BlkW7VC52c0
type: video
title: Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)
summary: 'Two built-in ways to copy table data between companies in Business Central as of October 2025: Master Data Management Setup (pull strategy, generally available) and the Configuration Worksheet "Copy Data from Company" action. Covers setup, demos with a custom table and trade-offs.'
tier: community
language: en
tags:
  - copying data between companies
  - master data management
  - configuration worksheet
  - pull strategy
  - company synchronization
  - data migration
  - table replication
  - custom tables
system: administration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:21:56.071Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 9ccead2880a3d012c8f4d5a5d5670743c2cb46fdb801bcda338e547eb564ec07
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=BlkW7VC52c0&t=34s
    title: "Master Data Management Setup: generally available"
    date: "2025-10-06T01:47:00.000Z"
    commit: null
    t: 34
    quote: we have right now available in Business Central in 2025 in October 2025
  - kind: video
    url: https://www.youtube.com/watch?v=BlkW7VC52c0&t=22s
    title: Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)
    date: "2025-10-06T01:47:00.000Z"
    commit: null
    t: 22
    quote: We're not referring here to duplicating a company. We're referring here to copying table one, two, three from company A into company B.
  - kind: video
    url: https://www.youtube.com/watch?v=BlkW7VC52c0&t=76s
    title: Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)
    date: "2025-10-06T01:47:00.000Z"
    commit: null
    t: 76
    quote: which uh I'm going to show you now master data management setup uh this is based on a on a pull strategy.
  - kind: video
    url: https://www.youtube.com/watch?v=BlkW7VC52c0&t=89s
    title: Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)
    date: "2025-10-06T01:47:00.000Z"
    commit: null
    t: 89
    quote: So from the target you're pulling data from the source. So how does that work? We're setting up here in master data management the
  - kind: video
    url: https://www.youtube.com/watch?v=BlkW7VC52c0&t=269s
    title: Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)
    date: "2025-10-06T01:47:00.000Z"
    commit: null
    t: 269
    quote: And this is not only for custom tables, we can do that for uh um even base application tables like item, vendor, c uh
  - kind: video
    url: https://www.youtube.com/watch?v=BlkW7VC52c0&t=280s
    title: Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)
    date: "2025-10-06T01:47:00.000Z"
    commit: null
    t: 280
    quote: when you're using a bigger table like customer table uh you will be prompted here to um let's say if we want to choose
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: BlkW7VC52c0
channel: yt-bcmusings
source_name: Business Central Musings
url: https://www.youtube.com/watch?v=BlkW7VC52c0
published_at: "2025-10-06T01:47:00.000Z"
duration_s: 594
captions: derived
audience:
  - administrator
  - developer
  - functional consultant
chapters:
  - t: 0
    title: Introduction to copying data between companies
  - t: 46
    title: Master Data Management Setup - overview and configuration
  - t: 147
    title: Custom table example and demo setup
  - t: 188
    title: Master Data Management Setup - pull strategy demonstration
  - t: 327
    title: Configuration Worksheet method for copying data
  - t: 451
    title: Comparing solutions and technical details
  - t: 578
    title: Conclusion
features:
  - name: Master Data Management Setup
    status: ga
    t: 46
    verified: true
    status_source: video
  - name: Configuration Worksheet
    status: unclear
    t: 338
    verified: false
    status_source: video
  - name: Configuration Packages
    status: unclear
    t: 457
    verified: false
    status_source: video
  - name: Custom data copy solution
    status: unclear
    t: 483
    verified: false
    status_source: video
objects_mentioned:
  - table test
  - table table 5100
  - page master data management setup
  - page configuration worksheet
quotes:
  - t: 22
    text: We're not referring here to duplicating a company. We're referring here to copying table one, two, three from company A into company B.
    check: exact
  - t: 76
    text: which uh I'm going to show you now master data management setup uh this is based on a on a pull strategy.
    check: exact
  - t: 89
    text: So from the target you're pulling data from the source. So how does that work? We're setting up here in master data management the
    check: exact
  - t: 269
    text: And this is not only for custom tables, we can do that for uh um even base application tables like item, vendor, c uh
    check: exact
  - t: 280
    text: when you're using a bigger table like customer table uh you will be prompted here to um let's say if we want to choose
    check: exact
---

# Copy Data Between Companies in Business Central (2 Built-In Methods You're Probably Missing)

> Two built-in ways to copy table data between companies in Business Central as of October 2025: Master Data Management Setup (pull strategy, generally available) and the Configuration Worksheet "Copy Data from Company" action. Covers setup, demos with a custom table and trade-offs.

[Watch on YouTube](https://www.youtube.com/watch?v=BlkW7VC52c0) · Business Central Musings · 2025-10-06 · 9:54 · tier community · **unreviewed** (machine-generated)

## Overview

The video covers copying data from one company into another, such as specific tables from company A into company B. It does not cover duplicating a whole company. It shows two methods already in the base application as of October 2025.

The first is Master Data Management Setup, which pulls data from a source company into a target company using job queues. The second is the Configuration Worksheet, where a Copy Data from Company action is run by the user. The speaker also explains why configuration packages were dropped on large tables, and mentions a custom-built copy solution he used about 10 years ago.

## Key points

- Master Data Management Setup uses a pull strategy: the target company pulls data from the source company.
- You choose which tables and which fields to synchronize, and can validate fields in the target company.
- It works for custom tables and for base application tables such as item and vendor.
- Larger tables such as customer prompt you about synchronizing related tables. Processing runs through job queues.
- Configuration Worksheet has a Copy Data from Company action under Prepare. It is user-initiated, not job queue based.
- Configuration packages caused data corruption on bigger tables with many validations, so the team looked for more stable options.
- A custom-built copy solution is possible but needs development effort and is not part of the base application.

## Chapters

- [0:00](https://www.youtube.com/watch?v=BlkW7VC52c0&t=0s) Introduction to copying data between companies
- [0:46](https://www.youtube.com/watch?v=BlkW7VC52c0&t=46s) Master Data Management Setup - overview and configuration
- [2:27](https://www.youtube.com/watch?v=BlkW7VC52c0&t=147s) Custom table example and demo setup
- [3:08](https://www.youtube.com/watch?v=BlkW7VC52c0&t=188s) Master Data Management Setup - pull strategy demonstration
- [5:27](https://www.youtube.com/watch?v=BlkW7VC52c0&t=327s) Configuration Worksheet method for copying data
- [7:31](https://www.youtube.com/watch?v=BlkW7VC52c0&t=451s) Comparing solutions and technical details
- [9:38](https://www.youtube.com/watch?v=BlkW7VC52c0&t=578s) Conclusion

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Master Data Management Setup | generally available, demoed | [0:46](https://www.youtube.com/watch?v=BlkW7VC52c0&t=46s) | "we have right now available in Business Central in 2025 in October 2025" ([0:34](https://www.youtube.com/watch?v=BlkW7VC52c0&t=34s)) |
| Configuration Worksheet | status not stated, demoed | [5:38](https://www.youtube.com/watch?v=BlkW7VC52c0&t=338s) |  |
| Configuration Packages | status not stated | [7:37](https://www.youtube.com/watch?v=BlkW7VC52c0&t=457s) |  |
| Custom data copy solution | status not stated | [8:03](https://www.youtube.com/watch?v=BlkW7VC52c0&t=483s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "test" at [2:11](https://www.youtube.com/watch?v=BlkW7VC52c0&t=131s)
- table "table 5100" at [2:27](https://www.youtube.com/watch?v=BlkW7VC52c0&t=147s)
- page "master data management setup" at [1:16](https://www.youtube.com/watch?v=BlkW7VC52c0&t=76s)
- page "configuration worksheet" at [5:59](https://www.youtube.com/watch?v=BlkW7VC52c0&t=359s)

## Quotes

- [0:22](https://www.youtube.com/watch?v=BlkW7VC52c0&t=22s) "We're not referring here to duplicating a company. We're referring here to copying table one, two, three from company A into company B."
- [1:16](https://www.youtube.com/watch?v=BlkW7VC52c0&t=76s) "which uh I'm going to show you now master data management setup uh this is based on a on a pull strategy."
- [1:29](https://www.youtube.com/watch?v=BlkW7VC52c0&t=89s) "So from the target you're pulling data from the source. So how does that work? We're setting up here in master data management the"
- [4:29](https://www.youtube.com/watch?v=BlkW7VC52c0&t=269s) "And this is not only for custom tables, we can do that for uh um even base application tables like item, vendor, c uh"
- [4:40](https://www.youtube.com/watch?v=BlkW7VC52c0&t=280s) "when you're using a bigger table like customer table uh you will be prompted here to um let's say if we want to choose"

## Disclaimers in the video

- [0:34](https://www.youtube.com/watch?v=BlkW7VC52c0&t=34s) other: what we have right now available in Business Central in 2025 in October 2025

Presenters (as heard): Business Central Musings host.
