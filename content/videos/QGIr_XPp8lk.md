---
id: video/QGIr_XPp8lk
type: video
title: "What's New: Extending E-Documents with New Interface (2025 release wave 1)"
summary: "E-document framework changes in 2025 release wave 1 (version 26): five new interfaces for building connectors (sender, response handler, receiver, received document marker, document action), replacing the old e-document integration interface, which is deprecated and removed in three waves by 2026 wave 2."
tier: official
language: en
tags:
  - e-documents
  - interfaces
  - api design
  - connector development
  - sending documents
  - receiving documents
  - error handling
  - document actions
  - migration
system: integration
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:47:24.649Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: bba58f3bacd064d116ee968d02194f35308947242e4d1e850b4c4f9113cf6922
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=QGIr_XPp8lk&t=5s
    title: "What's New: Extending E-Documents with New Interface (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 5
    quote: the technical updates for building integrations with the e document framework that are released in uh 2025 wave 1 also known as version 26
  - kind: video
    url: https://www.youtube.com/watch?v=QGIr_XPp8lk&t=96s
    title: "What's New: Extending E-Documents with New Interface (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 96
    quote: we didn't have any uh proper error handling when doing the receiving logic in the framework
  - kind: video
    url: https://www.youtube.com/watch?v=QGIr_XPp8lk&t=171s
    title: "What's New: Extending E-Documents with New Interface (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 171
    quote: we would like to protect against if an integration service is down, right? We want to remain in control in the framework in the
  - kind: video
    url: https://www.youtube.com/watch?v=QGIr_XPp8lk&t=239s
    title: "What's New: Extending E-Documents with New Interface (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 239
    quote: we are providing now five new interfaces and don't worry it's uh it is not meant to scare you that there are five because
  - kind: video
    url: https://www.youtube.com/watch?v=QGIr_XPp8lk&t=349s
    title: "What's New: Extending E-Documents with New Interface (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 349
    quote: In the new version for sending specifically you implement the I document sender and the I document sender has the same parameters as before
  - kind: video
    url: https://www.youtube.com/watch?v=QGIr_XPp8lk&t=497s
    title: "What's New: Extending E-Documents with New Interface (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 497
    quote: we had to throw in this is handled event called on after insert imported document for you to go fetch the XML from from
  - kind: video
    url: https://www.youtube.com/watch?v=QGIr_XPp8lk&t=761s
    title: "What's New: Extending E-Documents with New Interface (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 761
    quote: The old interfaces are deprecated and will be removed in three waves. So that is 2026 wave 2
  - kind: video
    url: https://www.youtube.com/watch?v=QGIr_XPp8lk&t=773s
    title: "What's New: Extending E-Documents with New Interface (2025 release wave 1)"
    date: "2025-04-01T15:00:29.000Z"
    commit: null
    t: 773
    quote: Migration to the new ones is simple luckily and uh you can follow the new and improved documentation we've made available on Microsoft learn
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: QGIr_XPp8lk
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=QGIr_XPp8lk
published_at: "2025-04-01T15:00:29.000Z"
duration_s: 827
captions: full
audience:
  - developer
  - partner
  - functional consultant
chapters:
  - t: 0
    title: Introduction and context
  - t: 56
    title: Challenges in the existing framework
  - t: 153
    title: Problems to solve and design goals
  - t: 239
    title: Five new interfaces architecture
  - t: 332
    title: Sending documents with new interfaces
  - t: 485
    title: Receiving documents and new capabilities
  - t: 675
    title: Key benefits and improvements
  - t: 761
    title: Migration path and next steps
features:
  - name: I document sender interface
    status: unclear
    t: 349
    verified: false
    status_source: video
  - name: I document response handler interface
    status: unclear
    t: 405
    verified: false
    status_source: video
  - name: I document receiver interface
    status: unclear
    t: 497
    verified: false
    status_source: video
  - name: I received document marker interface
    status: unclear
    t: 633
    verified: false
    status_source: video
  - name: I document action interface
    status: unclear
    t: 273
    verified: false
    status_source: video
  - name: E-document framework error handling improvements
    status: unclear
    t: 96
    verified: false
    status_source: video
  - name: Send context code unit wrapper
    status: unclear
    t: 361
    verified: false
    status_source: video
  - name: Receive context data template
    status: unclear
    t: 556
    verified: false
    status_source: video
  - name: Updated Avalara connector
    status: unclear
    t: 317
    verified: false
    status_source: video
  - name: Deprecated e-document integration interface removal timeline
    status: unclear
    t: 761
    verified: false
    status_source: video
objects_mentioned:
  - interface I document sender
  - interface I document response handler
  - interface I document receiver
  - interface I received document marker
  - interface I document action
  - codeunit send context
quotes:
  - t: 5
    text: the technical updates for building integrations with the e document framework that are released in uh 2025 wave 1 also known as version 26
    check: exact
  - t: 96
    text: we didn't have any uh proper error handling when doing the receiving logic in the framework
    check: exact
  - t: 171
    text: we would like to protect against if an integration service is down, right? We want to remain in control in the framework in the
    check: exact
  - t: 239
    text: we are providing now five new interfaces and don't worry it's uh it is not meant to scare you that there are five because
    check: exact
  - t: 349
    text: In the new version for sending specifically you implement the I document sender and the I document sender has the same parameters as before
    check: exact
  - t: 497
    text: we had to throw in this is handled event called on after insert imported document for you to go fetch the XML from from
    check: snapped
  - t: 761
    text: The old interfaces are deprecated and will be removed in three waves. So that is 2026 wave 2
    check: exact
  - t: 773
    text: Migration to the new ones is simple luckily and uh you can follow the new and improved documentation we've made available on Microsoft learn
    check: exact
---

# What's New: Extending E-Documents with New Interface (2025 release wave 1)

> E-document framework changes in 2025 release wave 1 (version 26): five new interfaces for building connectors (sender, response handler, receiver, received document marker, document action), replacing the old e-document integration interface, which is deprecated and removed in three waves by 2026 wave 2.

[Watch on YouTube](https://www.youtube.com/watch?v=QGIr_XPp8lk) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 13:47 · tier official · **unreviewed** (machine-generated)

## Overview

The video explains the technical updates for building integrations with the e-document framework in 2025 release wave 1. It covers problems in the existing framework, such as missing error handling when receiving documents and the need for "is handled" events to fetch XML, and the design goals for the new approach.

It then walks through the five new interfaces, shows how sending and receiving change, and notes that the Avalara connector was updated to use them. It ends with the migration path: the old interface is deprecated and will be removed in three waves, finishing at 2026 wave 2, and updated documentation is on Microsoft Learn.

## Key points

- Sending: implement I document sender. It has the same parameters as before plus a send context codeunit as third parameter, which wraps HTTP request and response information.
- I document response handler is optional and is used only for asynchronous services that verify contents before responding.
- Receiving: I document receiver has two functions, receive documents (metadata) and download document (contents). This removes the need for the is handled event on after insert imported document.
- I received document marker is optional and acknowledges receipt to services that track received status, to prevent duplicate sending.
- I document action standardizes custom service calls, and the framework handles state updates.
- Receiving logic gets error handling for an unavailable integration service, so the framework stays in control and avoids unexpected e-document states.
- The old e-document integration interface is deprecated and will be removed in three waves, ending 2026 wave 2. Migrate before then, using the documentation on Microsoft Learn.

## Chapters

- [0:00](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=0s) Introduction and context
- [0:56](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=56s) Challenges in the existing framework
- [2:33](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=153s) Problems to solve and design goals
- [3:59](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=239s) Five new interfaces architecture
- [5:32](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=332s) Sending documents with new interfaces
- [8:05](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=485s) Receiving documents and new capabilities
- [11:15](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=675s) Key benefits and improvements
- [12:41](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=761s) Migration path and next steps

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| I document sender interface | status not stated, demoed | [5:49](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=349s) |  |
| I document response handler interface | status not stated, demoed | [6:45](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=405s) |  |
| I document receiver interface | status not stated, demoed | [8:17](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=497s) |  |
| I received document marker interface | status not stated | [10:33](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=633s) |  |
| I document action interface | status not stated | [4:33](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=273s) |  |
| E-document framework error handling improvements | status not stated | [1:36](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=96s) |  |
| Send context code unit wrapper | status not stated, demoed | [6:01](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=361s) |  |
| Receive context data template | status not stated, demoed | [9:16](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=556s) |  |
| Updated Avalara connector | status not stated, demoed | [5:17](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=317s) |  |
| Deprecated e-document integration interface removal timeline | status not stated | [12:41](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=761s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- interface "I document sender" at [5:49](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=349s)
- interface "I document response handler" at [6:45](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=405s)
- interface "I document receiver" at [8:50](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=530s)
- interface "I received document marker" at [10:33](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=633s)
- interface "I document action" at [4:33](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=273s)
- codeunit "send context" at [6:01](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=361s)

## Quotes

- [0:05](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=5s) "the technical updates for building integrations with the e document framework that are released in uh 2025 wave 1 also known as version 26"
- [1:36](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=96s) "we didn't have any uh proper error handling when doing the receiving logic in the framework"
- [2:51](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=171s) "we would like to protect against if an integration service is down, right? We want to remain in control in the framework in the"
- [3:59](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=239s) "we are providing now five new interfaces and don't worry it's uh it is not meant to scare you that there are five because"
- [5:49](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=349s) "In the new version for sending specifically you implement the I document sender and the I document sender has the same parameters as before"
- [8:17](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=497s) "we had to throw in this is handled event called on after insert imported document for you to go fetch the XML from from"
- [12:41](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=761s) "The old interfaces are deprecated and will be removed in three waves. So that is 2026 wave 2"
- [12:53](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=773s) "Migration to the new ones is simple luckily and uh you can follow the new and improved documentation we've made available on Microsoft learn"

## Disclaimers in the video

- [12:41](https://www.youtube.com/watch?v=QGIr_XPp8lk&t=761s) coming-later: old interfaces are deprecated and will be removed in three waves. So that is 2026 wave 2

Presenters (as heard): Unknown speaker.
