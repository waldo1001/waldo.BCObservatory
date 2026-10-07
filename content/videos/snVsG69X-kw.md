---
id: video/snVsG69X-kw
type: video
title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
summary: "Business Central cloud scaling and performance: how VM scale sets, load balancing with a 60% CPU threshold, automatic scale-out and scale-in, and database scaling work, plus tools for finding performance problems. Says users are rarely limited by capacity; locking and AL code are the usual limits."
tier: official
language: en
tags:
  - cloud topology
  - load balancing
  - vm scaling
  - performance monitoring
  - database scaling
  - capacity management
  - azure infrastructure
  - session management
  - performance profiling
  - database locking
  - query optimization
  - cloud scalability
system: platform
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:07:42.903Z"
  flags: []
generated:
  at: "2026-10-07T23:07:42.947Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 20d37d26f2513eeb72a77e2f5ad48856633b36943fd95c11da60ebfad1bf456f
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1671s
    title: "Business Central scalability guide: generally available"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1671
    quote: scalability guide that we released recently we'll put some Link in the description so you can take a look at it
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=129s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 129
    quote: we have a VM cluster technically it's a virtual machine scale set that has a number of VMS and all our VMS are configured
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=250s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 250
    quote: we have set a threshold at 60% and if VM goes above 60% CPU load we say it's it's getting starting to become overloaded
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=311s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 311
    quote: if all VMS get busy like if there's really a lot of activi everybody's working you know hard doing a lot of sales order
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=674s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 674
    quote: at a12 we say we need three more VMS again the algorithm which we change from time to time it in this case it
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=674s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 674
    quote: we can see in this case it took 10 minutes and then 11 minutes before we got the last two VM so okay after
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=755s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 755
    quote: uh we we are pretty mature in this area and uh yeah capacity is rarely the source of a performance problem
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=876s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 876
    quote: how come we hear reports every now and then that uh our customers they have you know they think they experience BC as being
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=897s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 897
    quote: the source of a performance problem can be uh a million things okay but uh we have some uh things we see all the
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=978s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 978
    quote: many short queries so for example if you iterate over you have maybe thousands of sales orders or sales lines and somehow in your
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1019s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1019
    quote: the third category many short queries I would say it's probably typically worse in the cloud
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1039s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1039
    quote: in the cloud with buildings Data Center buildings far apart there can be a latency typically less than a millisecond but it's there yeah
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1490s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1490
    quote: normally we would not emit these events when a SQL query takes less than 750 milliseconds because if we did we would just overflow
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1590s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1590
    quote: we don't have a hard limit so you can have we have customers with hundreds or thousands of users
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1590s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1590
    quote: we have customers with hundreds or thousands of users um adding more users it's not really a problem because we just scale out and
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1611s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1611
    quote: the more users you have yeah that work at the same time the more likely they are to step on each other's toes
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1611s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1611
    quote: that work at the same time the more likely they are to step on each other's toes and uh
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1651s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1651
    quote: we have customers with more than thousand of us more than thousand users many many customers with more than 100 users
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1671s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1671
    quote: scalability guide that we released recently
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1671s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1671
    quote: 5,000 sales invoices posted in one hour it's a real example from some customer
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1752s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1752
    quote: if you are bringing a large customer and you are want to make absolutely sure that they will run fine from the day one
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1772s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1772
    quote: we have a toolkit for that it's called the performance toolkit and it is assigned one of the main goals is to just to
  - kind: video
    url: https://www.youtube.com/watch?v=snVsG69X-kw&t=1792s
    title: "Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?"
    date: "2024-05-31T14:00:06.000Z"
    commit: null
    t: 1792
    quote: in principle yes yes yeah um and U while it runs you can also log in yourself right it's running in an environment just
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: snVsG69X-kw
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=snVsG69X-kw
published_at: "2024-05-31T14:00:06.000Z"
duration_s: 1875
captions: full
audience:
  - administrator
  - developer
  - partner
  - functional consultant
chapters:
  - t: 0
    title: Introduction and Cloud Evolution
  - t: 89
    title: "Topology: On-Premises vs Cloud Architecture"
  - t: 170
    title: Load Balancing and Session Management
  - t: 230
    title: VM Load Thresholds and Capacity Management
  - t: 311
    title: Scaling Out and Scaling In Strategy
  - t: 392
    title: Real-World US Cluster Example
  - t: 553
    title: Real-World Sweden Cluster Scaling
  - t: 674
    title: VM Provisioning Time and Performance Buffers
  - t: 755
    title: Database Scaling and Monitoring
  - t: 897
    title: Sources of Performance Problems
  - t: 1019
    title: Cloud vs On-Premises Performance Patterns
  - t: 1079
    title: Performance Troubleshooting Tools Overview
  - t: 1152
    title: Performance Profiling and Database Locks
  - t: 1335
    title: Missing Indexes Page and Analysis
  - t: 1449
    title: Application Insights and Telemetry
  - t: 1590
    title: User Capacity and Scalability Examples
  - t: 1752
    title: Performance Toolkit and Testing in Cloud
features:
  - name: Virtual Machine Scale Set
    status: unclear
    t: 109
    verified: false
    status_source: video
  - name: Load Balancer
    status: unclear
    t: 149
    verified: false
    status_source: video
  - name: CPU Load Threshold at 60%
    status: unclear
    t: 230
    verified: false
    status_source: video
  - name: Automatic VM Scale-Out
    status: unclear
    t: 311
    verified: false
    status_source: video
  - name: Automatic VM Scale-In
    status: unclear
    t: 351
    verified: false
    status_source: video
  - name: Database Scaling and Monitoring
    status: unclear
    t: 755
    verified: false
    status_source: video
  - name: In-client performance profiler
    status: unclear
    t: 1099
    verified: false
    status_source: video
  - name: Database locks page
    status: unclear
    t: 1234
    verified: false
    status_source: video
  - name: Database missing indexes page
    status: unclear
    t: 1335
    verified: false
    status_source: video
  - name: Application insights telemetry
    status: unclear
    t: 1449
    verified: false
    status_source: video
  - name: User scalability in Business Central cloud
    status: unclear
    t: 1590
    verified: false
    status_source: video
  - name: Business Central scalability guide
    status: ga
    t: 1631
    verified: true
    status_source: video
  - name: Performance toolkit
    status: unclear
    t: 1752
    verified: false
    status_source: video
objects_mentioned:
  - page database locks page
  - page database missing indexes page
  - table mixer table
quotes:
  - t: 129
    text: we have a VM cluster technically it's a virtual machine scale set that has a number of VMS and all our VMS are configured
    check: exact
  - t: 250
    text: we have set a threshold at 60% and if VM goes above 60% CPU load we say it's it's getting starting to become overloaded
    check: exact
  - t: 311
    text: if all VMS get busy like if there's really a lot of activi everybody's working you know hard doing a lot of sales order
    check: exact
  - t: 674
    text: at a12 we say we need three more VMS again the algorithm which we change from time to time it in this case it
    check: exact
  - t: 674
    text: we can see in this case it took 10 minutes and then 11 minutes before we got the last two VM so okay after
    check: exact
  - t: 755
    text: uh we we are pretty mature in this area and uh yeah capacity is rarely the source of a performance problem
    check: exact
  - t: 876
    text: how come we hear reports every now and then that uh our customers they have you know they think they experience BC as being
    check: exact
  - t: 897
    text: the source of a performance problem can be uh a million things okay but uh we have some uh things we see all the
    check: snapped
  - t: 978
    text: many short queries so for example if you iterate over you have maybe thousands of sales orders or sales lines and somehow in your
    check: exact
  - t: 1019
    text: the third category many short queries I would say it's probably typically worse in the cloud
    check: exact
  - t: 1039
    text: in the cloud with buildings Data Center buildings far apart there can be a latency typically less than a millisecond but it's there yeah
    check: exact
  - t: 1490
    text: normally we would not emit these events when a SQL query takes less than 750 milliseconds because if we did we would just overflow
    check: exact
  - t: 1590
    text: we don't have a hard limit so you can have we have customers with hundreds or thousands of users
    check: exact
  - t: 1590
    text: we have customers with hundreds or thousands of users um adding more users it's not really a problem because we just scale out and
    check: exact
  - t: 1611
    text: the more users you have yeah that work at the same time the more likely they are to step on each other's toes
    check: exact
  - t: 1611
    text: that work at the same time the more likely they are to step on each other's toes and uh
    check: fuzzy
  - t: 1651
    text: we have customers with more than thousand of us more than thousand users many many customers with more than 100 users
    check: exact
  - t: 1671
    text: scalability guide that we released recently
    check: exact
  - t: 1671
    text: 5,000 sales invoices posted in one hour it's a real example from some customer
    check: snapped
  - t: 1752
    text: if you are bringing a large customer and you are want to make absolutely sure that they will run fine from the day one
    check: exact
  - t: 1772
    text: we have a toolkit for that it's called the performance toolkit and it is assigned one of the main goals is to just to
    check: exact
  - t: 1792
    text: in principle yes yes yeah um and U while it runs you can also log in yourself right it's running in an environment just
    check: exact
---

# Business Central Under the Hood episode 3: How Many Users Can Business Central Handle in the Cloud?

> Business Central cloud scaling and performance: how VM scale sets, load balancing with a 60% CPU threshold, automatic scale-out and scale-in, and database scaling work, plus tools for finding performance problems. Says users are rarely limited by capacity; locking and AL code are the usual limits.

[Watch on YouTube](https://www.youtube.com/watch?v=snVsG69X-kw) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-05-31 · 31:15 · tier official · reviewed (checked by Opus)

## Overview

Episode 3 of Business Central Under the Hood (31 minutes, published 2024-05-31) explains how many users Business Central can handle in the cloud. It describes the cloud topology: a cluster of Azure VMs in a virtual machine scale set, each hosting web server and NST components, with a load balancer that understands BC sessions. Clusters typically start at five VMs and can grow to 30 or more. The presenters show real cluster examples for scale-out and VM provisioning time, and explain how database capacity is monitored and increased automatically. The speakers note that some of this machinery is not publicly documented.

The second half covers sources of performance problems and the tools to investigate them: the in-client profiler, the database locks page, the missing indexes page and Application Insights telemetry. It closes with user scalability (customers with hundreds or thousands of users), the scalability guide, and the performance toolkit for testing large customers before go-live.

## Key points

- The cloud runs on an Azure VM scale set. Clusters have at least five VMs, and 10, 20, 30 or 40 VMs is normal.
- The load balancer stops sending new sessions to a VM above 60% CPU. Existing sessions stay on that VM. When all VMs exceed the threshold, more VMs are added. Scale-in is intentionally slower than scale-out.
- Database CPU, IO, data IO and log IO are monitored, and database capacity is increased automatically when thresholds are exceeded.
- Capacity is rarely the cause of a performance problem. Many short queries are typically worse in the cloud because of datacenter latency, usually under a millisecond.
- Diagnostic tools: in-client profiler, database locks page (refresh with F5), database missing indexes page (needs several days of running), and Application Insights telemetry. By default only SQL queries slower than 750 ms are emitted.
- There is no hard user limit. Customers have hundreds or thousands of users. Locking between concurrent users, which depends on AL code, is the main constraint.
- The performance toolkit simulates what-if workloads in a cloud environment before go-live, in principle with around a thousand users. The scalability guide includes a real example of 5,000 sales invoices posted in one hour.

## Chapters

- [0:00](https://www.youtube.com/watch?v=snVsG69X-kw&t=0s) Introduction and Cloud Evolution
- [1:29](https://www.youtube.com/watch?v=snVsG69X-kw&t=89s) Topology: On-Premises vs Cloud Architecture
- [2:50](https://www.youtube.com/watch?v=snVsG69X-kw&t=170s) Load Balancing and Session Management
- [3:50](https://www.youtube.com/watch?v=snVsG69X-kw&t=230s) VM Load Thresholds and Capacity Management
- [5:11](https://www.youtube.com/watch?v=snVsG69X-kw&t=311s) Scaling Out and Scaling In Strategy
- [6:32](https://www.youtube.com/watch?v=snVsG69X-kw&t=392s) Real-World US Cluster Example
- [9:13](https://www.youtube.com/watch?v=snVsG69X-kw&t=553s) Real-World Sweden Cluster Scaling
- [11:14](https://www.youtube.com/watch?v=snVsG69X-kw&t=674s) VM Provisioning Time and Performance Buffers
- [12:35](https://www.youtube.com/watch?v=snVsG69X-kw&t=755s) Database Scaling and Monitoring
- [14:57](https://www.youtube.com/watch?v=snVsG69X-kw&t=897s) Sources of Performance Problems
- [16:59](https://www.youtube.com/watch?v=snVsG69X-kw&t=1019s) Cloud vs On-Premises Performance Patterns
- [17:59](https://www.youtube.com/watch?v=snVsG69X-kw&t=1079s) Performance Troubleshooting Tools Overview
- [19:12](https://www.youtube.com/watch?v=snVsG69X-kw&t=1152s) Performance Profiling and Database Locks
- [22:15](https://www.youtube.com/watch?v=snVsG69X-kw&t=1335s) Missing Indexes Page and Analysis
- [24:09](https://www.youtube.com/watch?v=snVsG69X-kw&t=1449s) Application Insights and Telemetry
- [26:30](https://www.youtube.com/watch?v=snVsG69X-kw&t=1590s) User Capacity and Scalability Examples
- [29:12](https://www.youtube.com/watch?v=snVsG69X-kw&t=1752s) Performance Toolkit and Testing in Cloud

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Virtual Machine Scale Set | status not stated, demoed | [1:49](https://www.youtube.com/watch?v=snVsG69X-kw&t=109s) |  |
| Load Balancer | status not stated, demoed | [2:29](https://www.youtube.com/watch?v=snVsG69X-kw&t=149s) |  |
| CPU Load Threshold at 60% | status not stated, demoed | [3:50](https://www.youtube.com/watch?v=snVsG69X-kw&t=230s) |  |
| Automatic VM Scale-Out | status not stated, demoed | [5:11](https://www.youtube.com/watch?v=snVsG69X-kw&t=311s) |  |
| Automatic VM Scale-In | status not stated, demoed | [5:51](https://www.youtube.com/watch?v=snVsG69X-kw&t=351s) |  |
| Database Scaling and Monitoring | status not stated, demoed | [12:35](https://www.youtube.com/watch?v=snVsG69X-kw&t=755s) |  |
| In-client performance profiler | status not stated, demoed | [18:19](https://www.youtube.com/watch?v=snVsG69X-kw&t=1099s) |  |
| Database locks page | status not stated, demoed | [20:34](https://www.youtube.com/watch?v=snVsG69X-kw&t=1234s) |  |
| Database missing indexes page | status not stated, demoed | [22:15](https://www.youtube.com/watch?v=snVsG69X-kw&t=1335s) |  |
| Application insights telemetry | status not stated, demoed | [24:09](https://www.youtube.com/watch?v=snVsG69X-kw&t=1449s) |  |
| User scalability in Business Central cloud | status not stated | [26:30](https://www.youtube.com/watch?v=snVsG69X-kw&t=1590s) |  |
| Business Central scalability guide | generally available | [27:11](https://www.youtube.com/watch?v=snVsG69X-kw&t=1631s) | "scalability guide that we released recently we'll put some Link in the description so you can take a look at it" ([27:51](https://www.youtube.com/watch?v=snVsG69X-kw&t=1671s)) |
| Performance toolkit | status not stated | [29:12](https://www.youtube.com/watch?v=snVsG69X-kw&t=1752s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- page "database locks page" at [20:54](https://www.youtube.com/watch?v=snVsG69X-kw&t=1254s)
- page "database missing indexes page" at [22:15](https://www.youtube.com/watch?v=snVsG69X-kw&t=1335s)
- table "mixer table" at [21:34](https://www.youtube.com/watch?v=snVsG69X-kw&t=1294s)

Not found in BC28-30: page "database locks page", page "database missing indexes page", table "mixer table".

## Quotes

- [2:09](https://www.youtube.com/watch?v=snVsG69X-kw&t=129s) "we have a VM cluster technically it's a virtual machine scale set that has a number of VMS and all our VMS are configured"
- [4:10](https://www.youtube.com/watch?v=snVsG69X-kw&t=250s) "we have set a threshold at 60% and if VM goes above 60% CPU load we say it's it's getting starting to become overloaded"
- [5:11](https://www.youtube.com/watch?v=snVsG69X-kw&t=311s) "if all VMS get busy like if there's really a lot of activi everybody's working you know hard doing a lot of sales order"
- [11:14](https://www.youtube.com/watch?v=snVsG69X-kw&t=674s) "at a12 we say we need three more VMS again the algorithm which we change from time to time it in this case it"
- [11:14](https://www.youtube.com/watch?v=snVsG69X-kw&t=674s) "we can see in this case it took 10 minutes and then 11 minutes before we got the last two VM so okay after"
- [12:35](https://www.youtube.com/watch?v=snVsG69X-kw&t=755s) "uh we we are pretty mature in this area and uh yeah capacity is rarely the source of a performance problem"
- [14:36](https://www.youtube.com/watch?v=snVsG69X-kw&t=876s) "how come we hear reports every now and then that uh our customers they have you know they think they experience BC as being"
- [14:57](https://www.youtube.com/watch?v=snVsG69X-kw&t=897s) "the source of a performance problem can be uh a million things okay but uh we have some uh things we see all the"
- [16:18](https://www.youtube.com/watch?v=snVsG69X-kw&t=978s) "many short queries so for example if you iterate over you have maybe thousands of sales orders or sales lines and somehow in your"
- [16:59](https://www.youtube.com/watch?v=snVsG69X-kw&t=1019s) "the third category many short queries I would say it's probably typically worse in the cloud"
- [17:19](https://www.youtube.com/watch?v=snVsG69X-kw&t=1039s) "in the cloud with buildings Data Center buildings far apart there can be a latency typically less than a millisecond but it's there yeah"
- [24:50](https://www.youtube.com/watch?v=snVsG69X-kw&t=1490s) "normally we would not emit these events when a SQL query takes less than 750 milliseconds because if we did we would just overflow"
- [26:30](https://www.youtube.com/watch?v=snVsG69X-kw&t=1590s) "we don't have a hard limit so you can have we have customers with hundreds or thousands of users"
- [26:30](https://www.youtube.com/watch?v=snVsG69X-kw&t=1590s) "we have customers with hundreds or thousands of users um adding more users it's not really a problem because we just scale out and"
- [26:51](https://www.youtube.com/watch?v=snVsG69X-kw&t=1611s) "the more users you have yeah that work at the same time the more likely they are to step on each other's toes"
- [26:51](https://www.youtube.com/watch?v=snVsG69X-kw&t=1611s) "that work at the same time the more likely they are to step on each other's toes and uh"
- [27:31](https://www.youtube.com/watch?v=snVsG69X-kw&t=1651s) "we have customers with more than thousand of us more than thousand users many many customers with more than 100 users"
- [27:51](https://www.youtube.com/watch?v=snVsG69X-kw&t=1671s) "scalability guide that we released recently"
- [27:51](https://www.youtube.com/watch?v=snVsG69X-kw&t=1671s) "5,000 sales invoices posted in one hour it's a real example from some customer"
- [29:12](https://www.youtube.com/watch?v=snVsG69X-kw&t=1752s) "if you are bringing a large customer and you are want to make absolutely sure that they will run fine from the day one"
- [29:32](https://www.youtube.com/watch?v=snVsG69X-kw&t=1772s) "we have a toolkit for that it's called the performance toolkit and it is assigned one of the main goals is to just to"
- [29:52](https://www.youtube.com/watch?v=snVsG69X-kw&t=1792s) "in principle yes yes yeah um and U while it runs you can also log in yourself right it's running in an environment just"

## Disclaimers in the video

- [1:09](https://www.youtube.com/watch?v=snVsG69X-kw&t=69s) other: some of the Machinery that is in the cloud is not publicly documented but we are going to talk a little bit about it

Presenters (as heard): Christian.
