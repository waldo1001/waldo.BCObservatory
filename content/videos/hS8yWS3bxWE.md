---
id: video/hS8yWS3bxWE
type: video
title: "What's New: Telemetry (2025 release wave 1)"
summary: "Business Central 2025 release wave 1 telemetry: five new telemetry types covering financial reporting usage, financial reporting definition changes, client add-in exceptions, server-side certificate validation, and detection of deprecated SOAP calls to UI pages (event RT0053)."
tier: official
language: en
tags:
  - telemetry
  - financial reporting
  - client add-ins
  - certificate validation
  - soap deprecation
  - auditing
  - troubleshooting
  - application insights
system: platform
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
  input_hash: 721c4d8212b02c3df61ca534864c9252b9e877b6d495e1e2b65b4edd7379589a
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=hS8yWS3bxWE&t=6s
    title: "What's New: Telemetry (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 6
    quote: in this release wave we added five new types of telemetry
  - kind: video
    url: https://www.youtube.com/watch?v=hS8yWS3bxWE&t=88s
    title: "What's New: Telemetry (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 88
    quote: it might be that you have auditing needs for your company so that you need to know who is actually running a financial report
  - kind: video
    url: https://www.youtube.com/watch?v=hS8yWS3bxWE&t=287s
    title: "What's New: Telemetry (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 287
    quote: this is a blind spot or was a blind spot until now and uh but now you have telemetry on
  - kind: video
    url: https://www.youtube.com/watch?v=hS8yWS3bxWE&t=389s
    title: "What's New: Telemetry (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 389
    quote: the AL runtime is performing whenever you call from HTP client in Al call to an endpoint uh where the endpoint has a CER
  - kind: video
    url: https://www.youtube.com/watch?v=hS8yWS3bxWE&t=471s
    title: "What's New: Telemetry (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 471
    quote: these soap web services on UI PES by Microsoft this has been deprecated and therefore this will be kind of stop working in a
  - kind: video
    url: https://www.youtube.com/watch?v=hS8yWS3bxWE&t=522s
    title: "What's New: Telemetry (2025 release wave 1)"
    date: "2025-04-01T15:00:54.000Z"
    commit: null
    t: 522
    quote: as always in anything related to Telemetry is documented here under aka.ms slbc Telemetry
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: hS8yWS3bxWE
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=hS8yWS3bxWE
published_at: "2025-04-01T15:00:54.000Z"
duration_s: 548
captions: full
audience:
  - administrator
  - developer
  - functional consultant
chapters:
  - t: 0
    title: Introduction - Five New Telemetry Types
  - t: 47
    title: Accessing Telemetry Samples and Documentation
  - t: 88
    title: Financial Reporting Usage Telemetry
  - t: 169
    title: Financial Reporting Definition Changes Telemetry
  - t: 272
    title: Client Add-ins Troubleshooting Telemetry
  - t: 389
    title: Server-side Certificate Validation Telemetry
  - t: 451
    title: Deprecated SOAP Protocol Detection Telemetry
features:
  - name: Financial Reporting Usage Telemetry
    status: unclear
    t: 68
    verified: false
    status_source: video
  - name: Financial Reporting Definition Changes Telemetry
    status: unclear
    t: 169
    verified: false
    status_source: video
  - name: Client Add-ins Exception Telemetry
    status: unclear
    t: 287
    verified: false
    status_source: video
  - name: Server-side Certificate Validation Telemetry
    status: unclear
    t: 389
    verified: false
    status_source: video
  - name: Deprecated SOAP Protocol Detection
    status: unclear
    t: 451
    verified: false
    status_source: video
objects_mentioned:
  - other exceptions table
  - other RT0053 event
quotes:
  - t: 6
    text: in this release wave we added five new types of telemetry
    check: exact
  - t: 88
    text: it might be that you have auditing needs for your company so that you need to know who is actually running a financial report
    check: exact
  - t: 287
    text: this is a blind spot or was a blind spot until now and uh but now you have telemetry on
    check: fuzzy
  - t: 389
    text: the AL runtime is performing whenever you call from HTP client in Al call to an endpoint uh where the endpoint has a CER
    check: exact
  - t: 471
    text: these soap web services on UI PES by Microsoft this has been deprecated and therefore this will be kind of stop working in a
    check: exact
  - t: 522
    text: as always in anything related to Telemetry is documented here under aka.ms slbc Telemetry
    check: exact
---

# What's New: Telemetry (2025 release wave 1)

> Business Central 2025 release wave 1 telemetry: five new telemetry types covering financial reporting usage, financial reporting definition changes, client add-in exceptions, server-side certificate validation, and detection of deprecated SOAP calls to UI pages (event RT0053).

[Watch on YouTube](https://www.youtube.com/watch?v=hS8yWS3bxWE) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 9:08 · tier official · **unreviewed** (machine-generated)

## Overview

The video walks through five telemetry types added in 2025 release wave 1, with a demo of each. Two cover financial reporting: who runs reports, and changes to row, column and report definitions. The others cover client add-in exceptions, certificate validation failures in the AL runtime, and calls to UI pages through SOAP web services.

The SOAP telemetry is meant to help find integrations that must stop using SOAP before it is turned off in a later release. Telemetry samples and documentation are available at aka.ms/bctelemetry.

## Key points

- Financial reporting usage telemetry records when users run financial reports on screen or from the request page, including row and column definitions. It can support auditing of who runs reports.
- Financial reporting definition changes telemetry covers row, column and report definitions. It captures created, modified, deleted, copied, imported and exported events, including via configuration packages.
- Client add-in errors now appear in the exceptions table, with environment, company, app, object, add-in name, assembly, error message and stack trace from JavaScript errors. This was previously not tracked and focuses on iframe-based add-ins.
- Server-side certificate validation telemetry logs failures when the AL runtime validates a certificate on an HTTP client call. It includes the certificate, endpoint, HTTP method and failure reason.
- Event RT0053 detects calls to UI pages through deprecated SOAP web services. It shows which endpoint is called, not which integration calls it.
- SOAP web services on UI pages will stop working in a later release, so integrations using them need to be found and changed.
- Telemetry documentation is at aka.ms/bctelemetry.

## Chapters

- [0:00](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=0s) Introduction - Five New Telemetry Types
- [0:47](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=47s) Accessing Telemetry Samples and Documentation
- [1:28](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=88s) Financial Reporting Usage Telemetry
- [2:49](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=169s) Financial Reporting Definition Changes Telemetry
- [4:32](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=272s) Client Add-ins Troubleshooting Telemetry
- [6:29](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=389s) Server-side Certificate Validation Telemetry
- [7:31](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=451s) Deprecated SOAP Protocol Detection Telemetry

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Financial Reporting Usage Telemetry | status not stated, demoed | [1:08](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=68s) |  |
| Financial Reporting Definition Changes Telemetry | status not stated, demoed | [2:49](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=169s) |  |
| Client Add-ins Exception Telemetry | status not stated, demoed | [4:47](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=287s) |  |
| Server-side Certificate Validation Telemetry | status not stated, demoed | [6:29](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=389s) |  |
| Deprecated SOAP Protocol Detection | status not stated, demoed | [7:31](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=451s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "exceptions table" at [4:47](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=287s)
- other "RT0053 event" at [8:22](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=502s)

## Quotes

- [0:06](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=6s) "in this release wave we added five new types of telemetry"
- [1:28](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=88s) "it might be that you have auditing needs for your company so that you need to know who is actually running a financial report"
- [4:47](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=287s) "this is a blind spot or was a blind spot until now and uh but now you have telemetry on"
- [6:29](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=389s) "the AL runtime is performing whenever you call from HTP client in Al call to an endpoint uh where the endpoint has a CER"
- [7:51](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=471s) "these soap web services on UI PES by Microsoft this has been deprecated and therefore this will be kind of stop working in a"
- [8:42](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=522s) "as always in anything related to Telemetry is documented here under aka.ms slbc Telemetry"

## Disclaimers in the video

- [7:31](https://www.youtube.com/watch?v=hS8yWS3bxWE&t=451s) coming-later: these soap web services on UI PES by Microsoft this has been deprecated and therefore this will be kind of stop working in a in a later release
