---
id: video/lpwDSdEJrIQ
type: video
title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
summary: AL code performance in Business Central, centred on reducing database calls. Covers query telemetry (750 ms logging threshold), flow fields, SetLoadFields, caching, indexing, page search, locking, and diagnostic tools such as the Performance Toolkit and the in-client profiler.
tier: official
language: en
tags:
  - al code performance
  - database optimization
  - sql queries
  - indexing
  - caching
  - flow fields
  - set load fields
  - telemetry
  - performance testing
  - data retrieval
  - page search
  - full table scan
system: development
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
  input_hash: 2bb247debb82727eadf9c493e5b4bbe2457c2450dc83ae6f2f515044fda6aa4c
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=92s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 92
    quote: executing a line of Al code or a statement that doesn't look up in the database takes approximately a microc seconds that means a
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=112s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 112
    quote: SQL calls and at best they are one millisecond uh often it's seconds I mean full seconds but even a millisecond is thousand times
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=134s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 134
    quote: the ratio between database statements and non database statements is approxim approximately 10 to one if you combine these numbers it means that basically
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=236s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 236
    quote: when it's longer than 750 milliseconds then we Define it is long enough to be interesting for us to log and then we log
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=373s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 373
    quote: nested Loops you know you loop our all customers and for each customer you do something something look something up or if it's posting
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=541s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 541
    quote: SQL itself is blistering fast that's what SQL is it's very good at doing this kind of operations I mean the biggest companies in
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=769s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 769
    quote: the first time you would be the record setad of records that would be maybe a little bit slow it will at least take
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=810s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 810
    quote: Monday you should start at 10 before like everybody has has actually hydrated the cash
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=845s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 845
    quote: primary key lookup that's like the get you know get this entry with this pair of shoes that you get by way the almost
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=914s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 914
    quote: we can't have an index for each field yeah because index are also a little bit expensive right they are expensive both in maintenance
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1021s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 1021
    quote: the Page search actually searches on all visible columns okay except for numbers and booleans and stuff like that
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1154s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 1154
    quote: locking is a good thing as such it's a good feature that sequel as invented why why it doesn't sound good like why would
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1256s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 1256
    quote: good pattern is to do all the expensive stuff first mhm and then at the very end do a quick update update
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1377s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 1377
    quote: we're saying now we we are alone in this big room nobody else can come in here everybody we close the door nobody this
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1397s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 1397
    quote: 90% of the time is you know what we call the po actual posting where we lock everybody else out and this may not
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1594s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 1594
    quote: we introduced already a while ago yeah it's it was in 202 maybe
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1655s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 1655
    quote: you know the customer calls complains um but I don't I may not have access to this system
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1794s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 1794
    quote: we have the incline performance profiler which is a gem uh that I think many people are not looking enough at
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1855s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 1855
    quote: it takes like 16 seconds I think says here on have to get each row so that's a very long it's that's extremely long
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2052s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 2052
    quote: for bc25 in October release we actually have done this for warehouse entries
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2145s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 2145
    quote: very on a very short time frame we uh we are going to try to solve the issue of Page search by introducing the
  - kind: video
    url: https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2166s
    title: "Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast"
    date: "2024-10-24T14:45:04.000Z"
    commit: null
    t: 2166
    quote: on a longer Horizon we think the concurrence and parall ation is the big thing to do
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: lpwDSdEJrIQ
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=lpwDSdEJrIQ
published_at: "2024-10-24T14:45:04.000Z"
duration_s: 2262
captions: full
audience:
  - developer
  - partner
  - administrator
chapters:
  - t: 0
    title: Introduction and performance fundamentals
  - t: 72
    title: Measuring code execution speed and database impact
  - t: 154
    title: Database as the bottleneck and performance testing
  - t: 216
    title: Long-running queries and query categorization
  - t: 295
    title: Detecting and optimizing queries through telemetry
  - t: 373
    title: Minimizing queries and avoiding nested loops
  - t: 501
    title: Flow fields and set load fields optimization
  - t: 615
    title: Performance testing tools and SQL code generation
  - t: 749
    title: Caching strategy, session hydration, and four levels of data retrieval
  - t: 990
    title: Page search and full table scans
  - t: 1134
    title: Locking fundamentals and data consistency
  - t: 1236
    title: Semaphore locking in sales order posting
  - t: 1397
    title: Parallel execution, concurrent operations, and diagnostics tools
features:
  - name: Performance Toolkit
    status: unclear
    t: 174
    verified: false
    status_source: video
  - name: Telemetry monitoring for long-running queries
    status: unclear
    t: 295
    verified: false
    status_source: video
  - name: Flow fields
    status: unclear
    t: 501
    verified: false
    status_source: video
  - name: Set load fields function
    status: unclear
    t: 574
    verified: false
    status_source: video
  - name: AL to SQL code generation
    status: unclear
    t: 677
    verified: false
    status_source: video
  - name: Session caching strategy
    status: unclear
    t: 769
    verified: false
    status_source: video
  - name: Index seek optimization
    status: unclear
    t: 845
    verified: false
    status_source: video
  - name: Read isolation feature
    status: unclear
    t: 1574
    verified: false
    status_source: video
  - name: Database locks page
    status: unclear
    t: 1513
    verified: false
    status_source: video
  - name: Missing indexes page
    status: unclear
    t: 1513
    verified: false
    status_source: video
  - name: In-client profiler
    status: unclear
    t: 1513
    verified: false
    status_source: video
  - name: Application Insights
    status: unclear
    t: 1513
    verified: false
    status_source: video
  - name: Cross-System Index Recommendations Dashboard
    status: unclear
    t: 1749
    verified: false
    status_source: video
  - name: Inline Performance Profiler
    status: unclear
    t: 1794
    verified: false
    status_source: video
  - name: Number Sequences for Entry Number Generation
    status: unclear
    t: 2002
    verified: false
    status_source: video
  - name: Concurrent Warehouse Entry Posting
    status: unclear
    t: 2052
    verified: false
    status_source: video
  - name: SQL Full Text Indexing for Page Search
    status: unclear
    t: 2145
    verified: false
    status_source: video
  - name: Concurrency and Parallelization for Bulk Operations
    status: unclear
    t: 2186
    verified: false
    status_source: video
objects_mentioned:
  - page database locks page
  - page missing indexes page
quotes:
  - t: 92
    text: executing a line of Al code or a statement that doesn't look up in the database takes approximately a microc seconds that means a
    check: exact
  - t: 112
    text: SQL calls and at best they are one millisecond uh often it's seconds I mean full seconds but even a millisecond is thousand times
    check: exact
  - t: 134
    text: the ratio between database statements and non database statements is approxim approximately 10 to one if you combine these numbers it means that basically
    check: exact
  - t: 236
    text: when it's longer than 750 milliseconds then we Define it is long enough to be interesting for us to log and then we log
    check: exact
  - t: 373
    text: nested Loops you know you loop our all customers and for each customer you do something something look something up or if it's posting
    check: exact
  - t: 541
    text: SQL itself is blistering fast that's what SQL is it's very good at doing this kind of operations I mean the biggest companies in
    check: exact
  - t: 769
    text: the first time you would be the record setad of records that would be maybe a little bit slow it will at least take
    check: snapped
  - t: 810
    text: Monday you should start at 10 before like everybody has has actually hydrated the cash
    check: exact
  - t: 845
    text: primary key lookup that's like the get you know get this entry with this pair of shoes that you get by way the almost
    check: exact
  - t: 914
    text: we can't have an index for each field yeah because index are also a little bit expensive right they are expensive both in maintenance
    check: exact
  - t: 1021
    text: the Page search actually searches on all visible columns okay except for numbers and booleans and stuff like that
    check: exact
  - t: 1154
    text: locking is a good thing as such it's a good feature that sequel as invented why why it doesn't sound good like why would
    check: exact
  - t: 1256
    text: good pattern is to do all the expensive stuff first mhm and then at the very end do a quick update update
    check: snapped
  - t: 1377
    text: we're saying now we we are alone in this big room nobody else can come in here everybody we close the door nobody this
    check: exact
  - t: 1397
    text: 90% of the time is you know what we call the po actual posting where we lock everybody else out and this may not
    check: exact
  - t: 1594
    text: we introduced already a while ago yeah it's it was in 202 maybe
    check: exact
  - t: 1655
    text: you know the customer calls complains um but I don't I may not have access to this system
    check: exact
  - t: 1794
    text: we have the incline performance profiler which is a gem uh that I think many people are not looking enough at
    check: exact
  - t: 1855
    text: it takes like 16 seconds I think says here on have to get each row so that's a very long it's that's extremely long
    check: exact
  - t: 2052
    text: for bc25 in October release we actually have done this for warehouse entries
    check: exact
  - t: 2145
    text: very on a very short time frame we uh we are going to try to solve the issue of Page search by introducing the
    check: exact
  - t: 2166
    text: on a longer Horizon we think the concurrence and parall ation is the big thing to do
    check: snapped
---

# Business Central Under the Hood episode 5: How To Make Your AL Code Super Fast

> AL code performance in Business Central, centred on reducing database calls. Covers query telemetry (750 ms logging threshold), flow fields, SetLoadFields, caching, indexing, page search, locking, and diagnostic tools such as the Performance Toolkit and the in-client profiler.

[Watch on YouTube](https://www.youtube.com/watch?v=lpwDSdEJrIQ) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-10-24 · 37:42 · tier official · **unreviewed** (machine-generated)

## Overview

Episode 5 of Business Central Under the Hood explains why database calls dominate AL execution time. A line of AL code that does not touch the database takes about a microsecond, while a SQL call takes at best about a millisecond and often seconds. The speakers cover how to find slow queries, how to cut the number of queries, and how caching works at the company session level.

The second half covers indexing, why page search can cause full table scans, and how locking affects concurrency in sales order posting. It also describes work on number sequences, concurrent warehouse entry posting in the BC25 October release, planned SQL full text indexing for page search, and tools for diagnosis: Application Insights, the database locks page, the missing indexes page, and the in-client profiler, which is demoed.

## Key points

- Database statements cost far more than non-database AL statements, so reduce the number of SQL calls first; avoid nested loops that look something up for each record.
- Microsoft logs queries longer than 750 milliseconds via telemetry; partners can use Application Insights to monitor their own customers.
- Use flow fields so SQL does sums and lookups, and use SetLoadFields to load only the fields you need instead of whole records.
- Data cached at company session level is shared by all users of that company; the first users in the morning pay the cost of filling the cache.
- Page search covers all visible columns except numbers and booleans, which can lead to full table scans. SQL full text indexing is planned, hoped for BC25.
- For locking, do the expensive work first and the update at the end. Read isolation helps concurrency but needs developer uptake.
- The in-client profiler lets you record an action and download a profile to open in Visual Studio Code; the speakers say it is underused. The Performance Toolkit compares timings and SQL statement counts between code versions.

## Chapters

- [0:00](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=0s) Introduction and performance fundamentals
- [1:12](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=72s) Measuring code execution speed and database impact
- [2:34](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=154s) Database as the bottleneck and performance testing
- [3:36](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=216s) Long-running queries and query categorization
- [4:55](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=295s) Detecting and optimizing queries through telemetry
- [6:13](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=373s) Minimizing queries and avoiding nested loops
- [8:21](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=501s) Flow fields and set load fields optimization
- [10:15](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=615s) Performance testing tools and SQL code generation
- [12:29](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=749s) Caching strategy, session hydration, and four levels of data retrieval
- [16:30](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=990s) Page search and full table scans
- [18:54](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1134s) Locking fundamentals and data consistency
- [20:36](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1236s) Semaphore locking in sales order posting
- [23:17](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1397s) Parallel execution, concurrent operations, and diagnostics tools

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Performance Toolkit | status not stated | [2:54](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=174s) |  |
| Telemetry monitoring for long-running queries | status not stated | [4:55](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=295s) |  |
| Flow fields | status not stated | [8:21](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=501s) |  |
| Set load fields function | status not stated | [9:34](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=574s) |  |
| AL to SQL code generation | status not stated | [11:17](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=677s) |  |
| Session caching strategy | status not stated | [12:49](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=769s) |  |
| Index seek optimization | status not stated | [14:05](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=845s) |  |
| Read isolation feature | status not stated | [26:14](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1574s) |  |
| Database locks page | status not stated | [25:13](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1513s) |  |
| Missing indexes page | status not stated | [25:13](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1513s) |  |
| In-client profiler | status not stated | [25:13](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1513s) |  |
| Application Insights | status not stated | [25:13](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1513s) |  |
| Cross-System Index Recommendations Dashboard | status not stated | [29:09](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1749s) |  |
| Inline Performance Profiler | status not stated, demoed | [29:54](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1794s) |  |
| Number Sequences for Entry Number Generation | status not stated | [33:22](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2002s) |  |
| Concurrent Warehouse Entry Posting | status not stated | [34:12](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2052s) |  |
| SQL Full Text Indexing for Page Search | status not stated | [35:45](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2145s) |  |
| Concurrency and Parallelization for Bulk Operations | status not stated | [36:26](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2186s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- page "database locks page" at [25:33](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1533s)
- page "missing indexes page" at [25:33](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1533s)

Not found in BC28-30: page "database locks page", page "missing indexes page".

## Quotes

- [1:32](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=92s) "executing a line of Al code or a statement that doesn't look up in the database takes approximately a microc seconds that means a"
- [1:52](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=112s) "SQL calls and at best they are one millisecond uh often it's seconds I mean full seconds but even a millisecond is thousand times"
- [2:14](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=134s) "the ratio between database statements and non database statements is approxim approximately 10 to one if you combine these numbers it means that basically"
- [3:56](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=236s) "when it's longer than 750 milliseconds then we Define it is long enough to be interesting for us to log and then we log"
- [6:13](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=373s) "nested Loops you know you loop our all customers and for each customer you do something something look something up or if it's posting"
- [9:01](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=541s) "SQL itself is blistering fast that's what SQL is it's very good at doing this kind of operations I mean the biggest companies in"
- [12:49](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=769s) "the first time you would be the record setad of records that would be maybe a little bit slow it will at least take"
- [13:30](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=810s) "Monday you should start at 10 before like everybody has has actually hydrated the cash"
- [14:05](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=845s) "primary key lookup that's like the get you know get this entry with this pair of shoes that you get by way the almost"
- [15:14](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=914s) "we can't have an index for each field yeah because index are also a little bit expensive right they are expensive both in maintenance"
- [17:01](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1021s) "the Page search actually searches on all visible columns okay except for numbers and booleans and stuff like that"
- [19:14](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1154s) "locking is a good thing as such it's a good feature that sequel as invented why why it doesn't sound good like why would"
- [20:56](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1256s) "good pattern is to do all the expensive stuff first mhm and then at the very end do a quick update update"
- [22:57](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1377s) "we're saying now we we are alone in this big room nobody else can come in here everybody we close the door nobody this"
- [23:17](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1397s) "90% of the time is you know what we call the po actual posting where we lock everybody else out and this may not"
- [26:34](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1594s) "we introduced already a while ago yeah it's it was in 202 maybe"
- [27:35](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1655s) "you know the customer calls complains um but I don't I may not have access to this system"
- [29:54](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1794s) "we have the incline performance profiler which is a gem uh that I think many people are not looking enough at"
- [30:55](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1855s) "it takes like 16 seconds I think says here on have to get each row so that's a very long it's that's extremely long"
- [34:12](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2052s) "for bc25 in October release we actually have done this for warehouse entries"
- [35:45](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2145s) "very on a very short time frame we uh we are going to try to solve the issue of Page search by introducing the"
- [36:06](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2166s) "on a longer Horizon we think the concurrence and parall ation is the big thing to do"

## Disclaimers in the video

- [26:34](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=1594s) subject-to-change: read isolation feature maybe not a game changer but at least it will help with concurrency
- [35:45](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2145s) coming-later: very on a very short time frame we uh we are going to try to solve the issue of Page search by introducing the SQL s full text indexing meaning that hopefully from pc25
- [36:26](https://www.youtube.com/watch?v=lpwDSdEJrIQ&t=2186s) coming-later: on a longer Horizon we think the concurrence and parall ation is the big thing to do

Presenters (as heard): Vincent Nicholas, B Nutsen, Christian.
