---
id: video/M1S2_bgLd3Q
type: video
title: "What's New: Server and Database (2025 release wave 2)"
summary: "Business Central 2025 release wave 2 server and database changes: new AL methods (sequential GUID, lock timeout duration, truncate), flow field and analysis mode optimizations, cloud-only semantic search on metadata, report tooltips, PDF/UA and PDF/A, and SQL call info in profiles."
tier: official
language: en
tags:
  - al runtime
  - sequential guids
  - lock timeout
  - truncate method
  - flow field optimization
  - analysis mode
  - semantic search
  - metadata embeddings
  - advanced tell me
  - document reporting
  - pdf accessibility
  - sql profiling
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T22:54:01.669Z"
  flags: []
generated:
  at: "2026-10-07T22:54:01.714Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 8ec86db8aa8b0dab49b7b490414abce819e2c6f46e93dacc37cc59e9cb285b46
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=547s
    title: "Preview semantic similarity search toggle: preview"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 547
    quote: the chat and analysis assist it that is the very nicely named preview semantic similarity search and application metadata
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=905s
    title: "Word addin data picker: generally available"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 905
    quote: this is a a new feature in the word addin that we are shipping in this wave as well a new data picker
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=38s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 38
    quote: it helps being able to run some of the business logic the partners have written in a performant matter
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=91s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 91
    quote: GUID is great but GUID is horrible for indexing. So that's why we stole the code from SQL server to be able to do
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=179s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 179
    quote: Truncate is a SQL method that is much faster than delete. It's not instantaneous. It is actually transactional.
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=194s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 194
    quote: the difference between trunk truncate and delete is truncate will just lock in the transa transaction log the page ids and not the full
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=259s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 259
    quote: if you're not deleting the vast majority of the table, don't use truncate because it's counterproductive
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=470s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 470
    quote: not only a lot, it's actually almost like um a little over 70% of all customers use analysis mode on a monthly basis
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=502s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 502
    quote: we take the input, we calculate a semantic vector, and then we compare to the semantic vectors for each of the metadata elements
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=681s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 681
    quote: you need to press enter to start the search because word words can change meaning dramatically when you add an extra letter
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=831s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 831
    quote: also do expect that results can change. We will adjust the algorithm for how we treat similarity based on measurements of what works best
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=985s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 985
    quote: So save will default now save in PDFUA. Eventually we'll also have um document layouts in word in a certain way that once they
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1103s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 1103
    quote: all the functionality we talk about apply both to on premises and the cloud that does not apply to the semantic search
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1114s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 1114
    quote: we are maintaining the embedding vectors etc. um we do not have support for that in the on-remise world
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1125s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 1125
    quote: if you take um and export your database, then we're actually going to take out the embedding vectors before
  - kind: video
    url: https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1136s
    title: "What's New: Server and Database (2025 release wave 2)"
    date: "2025-10-01T00:00:00Z"
    commit: null
    t: 1136
    quote: SQL Server 2025, which is available for us in Azure SQL and for you in Azure SQL, but it's not available yet uh for
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: M1S2_bgLd3Q
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=M1S2_bgLd3Q
published_at: "2025-10-01T00:00:00Z"
duration_s: 1326
captions: full
audience:
  - developer
  - administrator
  - functional consultant
chapters:
  - t: 0
    title: Introduction and business value
  - t: 65
    title: "New AL methods: sequential GUIDs, lock timeout, truncate"
  - t: 179
    title: Truncate method details and limitations
  - t: 349
    title: "Database optimizations: flow fields and analysis mode"
  - t: 457
    title: "Semantic search in metadata: overview and feature toggles"
  - t: 568
    title: "Semantic search: embeddings, maintenance, and search behavior"
  - t: 707
    title: Advanced search with natural language and reporting tooltips
  - t: 846
    title: "Reporting platform: tooltips on report columns and Word addin"
  - t: 947
    title: PDF accessibility and archival formats
  - t: 1034
    title: "Troubleshooting tools: SQL profiling and error details"
  - t: 1088
    title: "Feature availability: cloud vs on-premises"
  - t: 1181
    title: Closing resources and community channels
features:
  - name: Sequential GUID AL method
    status: unclear
    t: 77
    verified: false
    status_source: video
  - name: Lock timeout duration AL method
    status: unclear
    t: 132
    verified: false
    status_source: video
  - name: Truncate AL method
    status: unclear
    t: 179
    verified: false
    status_source: video
  - name: Optimized flow field calculations
    status: unclear
    t: 349
    verified: false
    status_source: video
  - name: Server-side pivot on date hierarchy in analysis mode
    status: unclear
    t: 397
    verified: false
    status_source: video
  - name: Semantic similarity search on metadata
    status: unclear
    t: 484
    verified: false
    status_source: video
  - name: Advanced tell me feature toggle
    status: unclear
    t: 534
    verified: false
    status_source: video
  - name: Preview semantic similarity search toggle
    status: preview
    t: 534
    verified: true
    status_source: video
  - name: Semantic embedding maintenance
    status: unclear
    t: 568
    verified: false
    status_source: video
  - name: Tooltips on report data item fields
    status: unclear
    t: 846
    verified: false
    status_source: video
  - name: Word addin data picker
    status: ga
    t: 905
    verified: true
    status_source: video
  - name: PDF/UA accessible PDFs
    status: unclear
    t: 965
    verified: false
    status_source: video
  - name: PDF/A archival format support
    status: unclear
    t: 965
    verified: false
    status_source: video
  - name: SQL call information in performance profiles
    status: unclear
    t: 1047
    verified: false
    status_source: video
  - name: App version in error details
    status: unclear
    t: 1076
    verified: false
    status_source: video
  - name: Semantic search on-premises limitation
    status: unclear
    t: 1103
    verified: false
    status_source: video
objects_mentioned:
  - table GL account
  - table GL entry
  - other Word addin
quotes:
  - t: 38
    text: it helps being able to run some of the business logic the partners have written in a performant matter
    check: exact
  - t: 91
    text: GUID is great but GUID is horrible for indexing. So that's why we stole the code from SQL server to be able to do
    check: exact
  - t: 179
    text: Truncate is a SQL method that is much faster than delete. It's not instantaneous. It is actually transactional.
    check: exact
  - t: 194
    text: the difference between trunk truncate and delete is truncate will just lock in the transa transaction log the page ids and not the full
    check: exact
  - t: 259
    text: if you're not deleting the vast majority of the table, don't use truncate because it's counterproductive
    check: exact
  - t: 470
    text: not only a lot, it's actually almost like um a little over 70% of all customers use analysis mode on a monthly basis
    check: exact
  - t: 502
    text: we take the input, we calculate a semantic vector, and then we compare to the semantic vectors for each of the metadata elements
    check: exact
  - t: 681
    text: you need to press enter to start the search because word words can change meaning dramatically when you add an extra letter
    check: exact
  - t: 831
    text: also do expect that results can change. We will adjust the algorithm for how we treat similarity based on measurements of what works best
    check: exact
  - t: 985
    text: So save will default now save in PDFUA. Eventually we'll also have um document layouts in word in a certain way that once they
    check: exact
  - t: 1103
    text: all the functionality we talk about apply both to on premises and the cloud that does not apply to the semantic search
    check: exact
  - t: 1114
    text: we are maintaining the embedding vectors etc. um we do not have support for that in the on-remise world
    check: exact
  - t: 1125
    text: if you take um and export your database, then we're actually going to take out the embedding vectors before
    check: exact
  - t: 1136
    text: SQL Server 2025, which is available for us in Azure SQL and for you in Azure SQL, but it's not available yet uh for
    check: exact
---

# What's New: Server and Database (2025 release wave 2)

> Business Central 2025 release wave 2 server and database changes: new AL methods (sequential GUID, lock timeout duration, truncate), flow field and analysis mode optimizations, cloud-only semantic search on metadata, report tooltips, PDF/UA and PDF/A, and SQL call info in profiles.

[Watch on YouTube](https://www.youtube.com/watch?v=M1S2_bgLd3Q) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-10-01 · 22:06 · tier official · reviewed (checked by Opus)

## Overview

The session covers platform, development and reporting changes in 2025 release wave 2. On the AL side it introduces a sequential GUID method for better indexing, a lock timeout method that takes a duration, and a truncate method that deletes large amounts of data faster than delete, with a long list of conditions under which it returns false.

It also covers database optimizations for flow fields and server-side pivot on date hierarchies in analysis mode, semantic similarity search on metadata (with feature toggles, embedding maintenance and a demo of advanced tell me), report column tooltips in the Word addin data picker, PDF/UA and PDF/A support, SQL call information in performance profiles, and app version in copied error details. Semantic search is cloud-only; the other functionality applies to both cloud and on-premises.

## Key points

- Truncate AL method uses SQL truncate, supports filtering and keeps auto-increment values. It returns false for non-SQL or system tables, inside try functions, with security filters, media fields, too many marked rows, filters on flow fields, or before/after delete subscribers. Wrap it in an if and fall back to delete all.
- Truncate should only be used when deleting the vast majority of a table, because filtered truncate copies the kept rows out and back.
- The lock timeout duration method sets a custom duration instead of on/off, but is still limited by the command timeout.
- Flow fields that sum over other tables now use a single outer apply instead of several, which speeds up list pages showing many calculated fields.
- Server-side analysis mode (queries, over 100,000 rows, or joined related tables) can now pivot on date hierarchy fields such as year, quarter and month.
- Semantic search is cloud-only: it needs embedding vector maintenance and SQL Server 2025, which is available in Azure SQL but not yet on-premises. Embedding vectors are removed when the database is exported. Preview semantic similarity search and advanced tell me are separate feature management toggles, and results may change as the algorithm is adjusted.
- Report columns can have tooltips inherited from table fields or overridden in the report; they show in the new Word addin data picker. The speakers recommend putting data descriptions as tooltips on tables rather than pages.

## Chapters

- [0:00](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=0s) Introduction and business value
- [1:05](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=65s) New AL methods: sequential GUIDs, lock timeout, truncate
- [2:59](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=179s) Truncate method details and limitations
- [5:49](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=349s) Database optimizations: flow fields and analysis mode
- [7:37](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=457s) Semantic search in metadata: overview and feature toggles
- [9:28](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=568s) Semantic search: embeddings, maintenance, and search behavior
- [11:47](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=707s) Advanced search with natural language and reporting tooltips
- [14:06](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=846s) Reporting platform: tooltips on report columns and Word addin
- [15:47](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=947s) PDF accessibility and archival formats
- [17:14](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1034s) Troubleshooting tools: SQL profiling and error details
- [18:08](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1088s) Feature availability: cloud vs on-premises
- [19:41](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1181s) Closing resources and community channels

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Sequential GUID AL method | status not stated | [1:17](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=77s) |  |
| Lock timeout duration AL method | status not stated | [2:12](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=132s) |  |
| Truncate AL method | status not stated | [2:59](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=179s) |  |
| Optimized flow field calculations | status not stated | [5:49](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=349s) |  |
| Server-side pivot on date hierarchy in analysis mode | status not stated | [6:37](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=397s) |  |
| Semantic similarity search on metadata | status not stated, demoed | [8:04](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=484s) |  |
| Advanced tell me feature toggle | status not stated, demoed | [8:54](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=534s) |  |
| Preview semantic similarity search toggle | preview | [8:54](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=534s) | "the chat and analysis assist it that is the very nicely named preview semantic similarity search and application metadata" ([9:07](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=547s)) |
| Semantic embedding maintenance | status not stated | [9:28](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=568s) |  |
| Tooltips on report data item fields | status not stated, demoed | [14:06](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=846s) |  |
| Word addin data picker | generally available, demoed | [15:05](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=905s) | "this is a a new feature in the word addin that we are shipping in this wave as well a new data picker" ([15:05](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=905s)) |
| PDF/UA accessible PDFs | status not stated | [16:05](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=965s) |  |
| PDF/A archival format support | status not stated | [16:05](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=965s) |  |
| SQL call information in performance profiles | status not stated | [17:27](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1047s) |  |
| App version in error details | status not stated | [17:56](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1076s) |  |
| Semantic search on-premises limitation | status not stated | [18:23](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1103s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "GL account" at [6:13](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=373s)
- table "GL entry" at [6:13](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=373s)
- other "Word addin" at [15:05](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=905s)

Not found in BC28-30: table "GL account", table "GL entry".

## Quotes

- [0:38](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=38s) "it helps being able to run some of the business logic the partners have written in a performant matter"
- [1:31](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=91s) "GUID is great but GUID is horrible for indexing. So that's why we stole the code from SQL server to be able to do"
- [2:59](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=179s) "Truncate is a SQL method that is much faster than delete. It's not instantaneous. It is actually transactional."
- [3:14](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=194s) "the difference between trunk truncate and delete is truncate will just lock in the transa transaction log the page ids and not the full"
- [4:19](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=259s) "if you're not deleting the vast majority of the table, don't use truncate because it's counterproductive"
- [7:50](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=470s) "not only a lot, it's actually almost like um a little over 70% of all customers use analysis mode on a monthly basis"
- [8:22](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=502s) "we take the input, we calculate a semantic vector, and then we compare to the semantic vectors for each of the metadata elements"
- [11:21](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=681s) "you need to press enter to start the search because word words can change meaning dramatically when you add an extra letter"
- [13:51](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=831s) "also do expect that results can change. We will adjust the algorithm for how we treat similarity based on measurements of what works best"
- [16:25](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=985s) "So save will default now save in PDFUA. Eventually we'll also have um document layouts in word in a certain way that once they"
- [18:23](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1103s) "all the functionality we talk about apply both to on premises and the cloud that does not apply to the semantic search"
- [18:34](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1114s) "we are maintaining the embedding vectors etc. um we do not have support for that in the on-remise world"
- [18:45](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1125s) "if you take um and export your database, then we're actually going to take out the embedding vectors before"
- [18:56](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1136s) "SQL Server 2025, which is available for us in Azure SQL and for you in Azure SQL, but it's not available yet uh for"

## Disclaimers in the video

- [9:07](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=547s) preview: preview semantic similarity search and application metadata
- [13:51](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=831s) subject-to-change: do expect that results can change. We will adjust the algorithm for how we treat similarity based on measurements of what works best in production
- [14:06](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=846s) subject-to-change: do expect that results can change. We will adjust the algorithm for how we treat similarity based on measurements of what works best in production.
- [18:23](https://www.youtube.com/watch?v=M1S2_bgLd3Q&t=1103s) not-in-this-release: all the functionality we talk about apply both to on premises and the cloud that does not apply to the semantic search

Presenters (as heard): Kenny Pontop, Yens.
