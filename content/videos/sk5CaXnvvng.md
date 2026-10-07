---
id: video/sk5CaXnvvng
type: video
title: "What's New: Server and Database - More Stable Web Services (2023 release wave 2)"
summary: "Business Central 2023 release wave 2 changes to web service stability: OData editable property for Edit in Excel, HTTP 503 with retry-after on queue timeout, invalid metadata handling with partner telemetry, HTTP client error handling, and delta link removal planned for 2024 wave 1."
tier: official
language: en
tags:
  - web services
  - odata
  - edit in excel
  - http status codes
  - telemetry
  - error handling
  - delta links
  - http client
  - retry strategies
  - metadata
system: integration
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
  input_hash: 237b7be9b21f49690d864e1ad0052bfc2861ab66a3d5bfce28d9157400e364f7
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=sk5CaXnvvng&t=18s
    title: "What's New: Server and Database - More Stable Web Services (2023 release wave 2)"
    date: "2023-12-18T08:55:38.000Z"
    commit: null
    t: 18
    quote: we didn't make it faster we didn't make new features but we did actually make it a lot more stable
  - kind: video
    url: https://www.youtube.com/watch?v=sk5CaXnvvng&t=118s
    title: "What's New: Server and Database - More Stable Web Services (2023 release wave 2)"
    date: "2023-12-18T08:55:38.000Z"
    commit: null
    t: 118
    quote: the server now returns return code 503 if your request waits in the request queue and you end up timing out and you will
  - kind: video
    url: https://www.youtube.com/watch?v=sk5CaXnvvng&t=199s
    title: "What's New: Server and Database - More Stable Web Services (2023 release wave 2)"
    date: "2023-12-18T08:55:38.000Z"
    commit: null
    t: 199
    quote: the one that causes the failure is ignored and we emit partner Telemetry so you shouldn't rely on your customer calling you anymore
  - kind: video
    url: https://www.youtube.com/watch?v=sk5CaXnvvng&t=552s
    title: "What's New: Server and Database - More Stable Web Services (2023 release wave 2)"
    date: "2023-12-18T08:55:38.000Z"
    commit: null
    t: 552
    quote: we made that easier for you to troubleshoot if you use get last error text you can now simply copy that into your um
  - kind: video
    url: https://www.youtube.com/watch?v=sk5CaXnvvng&t=671s
    title: "What's New: Server and Database - More Stable Web Services (2023 release wave 2)"
    date: "2023-12-18T08:55:38.000Z"
    commit: null
    t: 671
    quote: the schema version for custom apis will change its default and we are removing the support for Delta links
  - kind: video
    url: https://www.youtube.com/watch?v=sk5CaXnvvng&t=727s
    title: "What's New: Server and Database - More Stable Web Services (2023 release wave 2)"
    date: "2023-12-18T08:55:38.000Z"
    commit: null
    t: 727
    quote: stop using Delta links the feature is deprecated as Yen showed in the last slide it's going to be removed in 2024 Wave 1
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: sk5CaXnvvng
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=sk5CaXnvvng
published_at: "2023-12-18T08:55:38.000Z"
duration_s: 814
captions: full
audience:
  - developer
  - administrator
  - partner
chapters:
  - t: 0
    title: "Introduction: Web Services Stability Focus"
  - t: 39
    title: Editable Property in OData and Edit in Excel
  - t: 118
    title: Server Return Codes and Retry Headers
  - t: 178
    title: Invalid Metadata Handling and Telemetry
  - t: 259
    title: Troubleshooting Guides and Power BI Telemetry
  - t: 380
    title: Web Service Queuing and Telemetry Visibility
  - t: 432
    title: HTTP Client Error Handling Best Practices
  - t: 572
    title: Error Messages and Socket Optimization
  - t: 671
    title: Upcoming Changes and Delta Link Deprecation
  - t: 727
    title: Summary and Related Sessions
features:
  - name: Editable Property Support in OData for Edit in Excel
    status: unclear
    t: 39
    verified: false
    status_source: video
  - name: HTTP 503 Return Code for Request Queue Timeout
    status: unclear
    t: 118
    verified: false
    status_source: video
  - name: Invalid Metadata Handling with Telemetry Emissions
    status: unclear
    t: 178
    verified: false
    status_source: video
  - name: Web Service Endpoints Failure Telemetry Page
    status: unclear
    t: 219
    verified: false
    status_source: video
  - name: Troubleshooting Guides for HTTP Status Codes
    status: unclear
    t: 259
    verified: false
    status_source: video
  - name: User Agent Tracking in Power BI Telemetry
    status: unclear
    t: 320
    verified: false
    status_source: video
  - name: HTTP Status Code and Exception Telemetry in Power BI
    status: unclear
    t: 340
    verified: false
    status_source: video
  - name: Web Service Request Queuing Time Telemetry
    status: unclear
    t: 396
    verified: false
    status_source: video
  - name: HTTP Client Error Handling Documentation
    status: unclear
    t: 432
    verified: false
    status_source: video
  - name: HTTP Client Last Error Text for Troubleshooting
    status: unclear
    t: 532
    verified: false
    status_source: video
  - name: Improved SSL and Certificate Error Messages
    status: unclear
    t: 572
    verified: false
    status_source: video
  - name: Socket Reuse Optimization for HTTP Client
    status: unclear
    t: 633
    verified: false
    status_source: video
  - name: Custom API Schema Version Default Change
    status: unclear
    t: 671
    verified: false
    status_source: video
  - name: Delta Links Support Removal
    status: unclear
    t: 671
    verified: false
    status_source: video
objects_mentioned:
  - page sales orders page
  - page web service end points
quotes:
  - t: 18
    text: we didn't make it faster we didn't make new features but we did actually make it a lot more stable
    check: exact
  - t: 118
    text: the server now returns return code 503 if your request waits in the request queue and you end up timing out and you will
    check: exact
  - t: 199
    text: the one that causes the failure is ignored and we emit partner Telemetry so you shouldn't rely on your customer calling you anymore
    check: snapped
  - t: 552
    text: we made that easier for you to troubleshoot if you use get last error text you can now simply copy that into your um
    check: exact
  - t: 671
    text: the schema version for custom apis will change its default and we are removing the support for Delta links
    check: exact
  - t: 727
    text: stop using Delta links the feature is deprecated as Yen showed in the last slide it's going to be removed in 2024 Wave 1
    check: exact
---

# What's New: Server and Database - More Stable Web Services (2023 release wave 2)

> Business Central 2023 release wave 2 changes to web service stability: OData editable property for Edit in Excel, HTTP 503 with retry-after on queue timeout, invalid metadata handling with partner telemetry, HTTP client error handling, and delta link removal planned for 2024 wave 1.

[Watch on YouTube](https://www.youtube.com/watch?v=sk5CaXnvvng) · Microsoft Dynamics 365 Business Central (YouTube) · 2023-12-18 · 13:34 · tier official · **unreviewed** (machine-generated)

## Overview

The session covers work in 2023 release wave 2 that made Business Central web services more stable rather than faster or richer in features. Changes include OData evaluating the editable property like the UI does, a 503 response with a retry-after header when a request times out in the queue, and ignoring endpoints with invalid metadata instead of failing all web services.

It also covers telemetry and documentation improvements: a page for failing web service endpoints, user agent, HTTP status code, exception and queue time data in Power BI telemetry, troubleshooting guides, HTTP client error handling guidance, clearer SSL error messages, and socket reuse. It closes with upcoming changes: a new default schema version for custom APIs and removal of delta link support in 2024 wave 1.

## Key points

- OData V4 now evaluates the editable property like the UI, including calculated properties, so pages that previously failed in Edit in Excel can work. API pages should still be preferred over normal pages exposed to OData.
- When a request times out in the request queue, the server returns HTTP 503 with a retry-after header. Clients need retry logic to use it. Backported to version 22.2 and later.
- Invalid metadata, such as duplicate page names from multiple extensions, now causes only the problematic endpoint to be ignored. Partner telemetry is emitted, so monitor it instead of waiting for customer reports.
- Power BI telemetry now shows user agent, HTTP status codes, exceptions, AL call stacks and queue time for incoming web service calls. A telemetry page shows which web service endpoints fail and gives fix hints.
- For HTTP client failures that occur before a status code is returned, use get last error text to see URL, network and certificate errors. SSL error messages are now more specific.
- Socket reuse optimization for the HTTP client reduces VM port starvation with many outgoing calls. It needs no code changes and was backported to version 2.x.
- Delta link support will be removed in 2024 wave 1, and the default schema version for custom APIs will change. Stop using delta links and check custom API implementations.

## Chapters

- [0:00](https://www.youtube.com/watch?v=sk5CaXnvvng&t=0s) Introduction: Web Services Stability Focus
- [0:39](https://www.youtube.com/watch?v=sk5CaXnvvng&t=39s) Editable Property in OData and Edit in Excel
- [1:58](https://www.youtube.com/watch?v=sk5CaXnvvng&t=118s) Server Return Codes and Retry Headers
- [2:58](https://www.youtube.com/watch?v=sk5CaXnvvng&t=178s) Invalid Metadata Handling and Telemetry
- [4:19](https://www.youtube.com/watch?v=sk5CaXnvvng&t=259s) Troubleshooting Guides and Power BI Telemetry
- [6:20](https://www.youtube.com/watch?v=sk5CaXnvvng&t=380s) Web Service Queuing and Telemetry Visibility
- [7:12](https://www.youtube.com/watch?v=sk5CaXnvvng&t=432s) HTTP Client Error Handling Best Practices
- [9:32](https://www.youtube.com/watch?v=sk5CaXnvvng&t=572s) Error Messages and Socket Optimization
- [11:11](https://www.youtube.com/watch?v=sk5CaXnvvng&t=671s) Upcoming Changes and Delta Link Deprecation
- [12:07](https://www.youtube.com/watch?v=sk5CaXnvvng&t=727s) Summary and Related Sessions

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Editable Property Support in OData for Edit in Excel | status not stated | [0:39](https://www.youtube.com/watch?v=sk5CaXnvvng&t=39s) |  |
| HTTP 503 Return Code for Request Queue Timeout | status not stated | [1:58](https://www.youtube.com/watch?v=sk5CaXnvvng&t=118s) |  |
| Invalid Metadata Handling with Telemetry Emissions | status not stated | [2:58](https://www.youtube.com/watch?v=sk5CaXnvvng&t=178s) |  |
| Web Service Endpoints Failure Telemetry Page | status not stated | [3:39](https://www.youtube.com/watch?v=sk5CaXnvvng&t=219s) |  |
| Troubleshooting Guides for HTTP Status Codes | status not stated | [4:19](https://www.youtube.com/watch?v=sk5CaXnvvng&t=259s) |  |
| User Agent Tracking in Power BI Telemetry | status not stated | [5:20](https://www.youtube.com/watch?v=sk5CaXnvvng&t=320s) |  |
| HTTP Status Code and Exception Telemetry in Power BI | status not stated | [5:40](https://www.youtube.com/watch?v=sk5CaXnvvng&t=340s) |  |
| Web Service Request Queuing Time Telemetry | status not stated | [6:36](https://www.youtube.com/watch?v=sk5CaXnvvng&t=396s) |  |
| HTTP Client Error Handling Documentation | status not stated | [7:12](https://www.youtube.com/watch?v=sk5CaXnvvng&t=432s) |  |
| HTTP Client Last Error Text for Troubleshooting | status not stated | [8:52](https://www.youtube.com/watch?v=sk5CaXnvvng&t=532s) |  |
| Improved SSL and Certificate Error Messages | status not stated | [9:32](https://www.youtube.com/watch?v=sk5CaXnvvng&t=572s) |  |
| Socket Reuse Optimization for HTTP Client | status not stated | [10:33](https://www.youtube.com/watch?v=sk5CaXnvvng&t=633s) |  |
| Custom API Schema Version Default Change | status not stated | [11:11](https://www.youtube.com/watch?v=sk5CaXnvvng&t=671s) |  |
| Delta Links Support Removal | status not stated | [11:11](https://www.youtube.com/watch?v=sk5CaXnvvng&t=671s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- page "sales orders page" at [0:59](https://www.youtube.com/watch?v=sk5CaXnvvng&t=59s)
- page "web service end points" at [3:59](https://www.youtube.com/watch?v=sk5CaXnvvng&t=239s)

Not found in BC28-30: page "sales orders page", page "web service end points".

## Quotes

- [0:18](https://www.youtube.com/watch?v=sk5CaXnvvng&t=18s) "we didn't make it faster we didn't make new features but we did actually make it a lot more stable"
- [1:58](https://www.youtube.com/watch?v=sk5CaXnvvng&t=118s) "the server now returns return code 503 if your request waits in the request queue and you end up timing out and you will"
- [3:19](https://www.youtube.com/watch?v=sk5CaXnvvng&t=199s) "the one that causes the failure is ignored and we emit partner Telemetry so you shouldn't rely on your customer calling you anymore"
- [9:12](https://www.youtube.com/watch?v=sk5CaXnvvng&t=552s) "we made that easier for you to troubleshoot if you use get last error text you can now simply copy that into your um"
- [11:11](https://www.youtube.com/watch?v=sk5CaXnvvng&t=671s) "the schema version for custom apis will change its default and we are removing the support for Delta links"
- [12:07](https://www.youtube.com/watch?v=sk5CaXnvvng&t=727s) "stop using Delta links the feature is deprecated as Yen showed in the last slide it's going to be removed in 2024 Wave 1"

## Disclaimers in the video

- [11:11](https://www.youtube.com/watch?v=sk5CaXnvvng&t=671s) coming-later: Delta links support will be removed in 2024 Wave 1

Presenters (as heard): Yenni, Kenny.
