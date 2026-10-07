---
id: post/tine-staric-net/https-tine-staric-net-blog-2025-format-cheatsheet--8c69d461e7
type: post
title: Format Cheatsheet
summary: A reference guide showing how the Format() function outputs different data types (DateTime, Date, Time, Guid, Decimal, Boolean, Option, Enum, Duration, RecordId, DateFormula) across nine format options (0-7 and 9), helping developers quickly find the correct format specification for their needs.
tier: community
language: en
tags:
  - al development
  - format function
  - data type formatting
  - reference guide
  - cheatsheet
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:31:23.752Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 7fab64f4bb8372d7cfa49491454184434d00a0e16b660e9804c762cedc1456e1
evidence:
  - kind: blog
    url: https://tine.staric.net/blog/2025/format-cheatsheet/
    title: Format Cheatsheet
    date: "2025-10-07"
    commit: null
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://tine.staric.net/blog/2025/format-cheatsheet/
source_id: tine-staric-net
source_name: Tech Adventures in Business Central
url: https://tine.staric.net/blog/2025/format-cheatsheet/
published_at: "2025-10-07T08:00:00.000Z"
author: Tine Staric
full_text: false
words: 293
quotes: []
code_objects_mentioned: []
systems:
  - development
versions_mentioned: []
---

# Format Cheatsheet

[Read the post](https://tine.staric.net/blog/2025/format-cheatsheet/) · Tech Adventures in Business Central (Tine Staric) · 2025-10-07 · 293 words · tier community · **unreviewed** (machine-generated)

> A reference guide showing how the Format() function outputs different data types (DateTime, Date, Time, Guid, Decimal, Boolean, Option, Enum, Duration, RecordId, DateFormula) across nine format options (0-7 and 9), helping developers quickly find the correct format specification for their needs.

## Key points

- Format() supports 9 different format codes (0-7 and 9) that produce different output styles for the same data type
- Each data type behaves differently with each format option; some combinations return N/A (no meaningful output)
- Format 3 returns GUID without curly braces; Format 4 returns GUID with hyphens; Format 5 returns GUID with parentheses
- Some formats are language-dependent and produce localized results like month names
- Format 9 returns ISO 8601 style output for DateTime and a fully qualified format for RecordId

## Context

- Features: Format() function, DateTime formatting, Date formatting, Time formatting, GUID formatting, Decimal formatting, Boolean formatting, Duration formatting

Source: Tech Adventures in Business Central, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
