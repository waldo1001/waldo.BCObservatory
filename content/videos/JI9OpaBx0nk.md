---
id: video/JI9OpaBx0nk
type: video
title: "Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)"
summary: "HTTP client Handler for mocking outbound HTTP calls in AL tests (2025 release wave 1). Covers intercepting requests, simulating responses, telling requests apart, the fall-through mechanism, and the test HTTP request policy options. Known limits: no cookies or redirection status codes."
tier: official
language: en
tags:
  - outbound http testing
  - mocking
  - http client handler
  - al test
  - external services
  - test isolation
  - request interception
  - fall-through mechanism
  - test http request policy
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:50:35.244Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 680093c48f50d0b04a61c56c672e7faf0816fb8ab544bb09644bbbcadfc0087d
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=JI9OpaBx0nk&t=4s
    title: "Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)"
    date: "2025-04-01T15:00:22.000Z"
    commit: null
    t: 4
    quote: if we connect to the actual service we need to consider how that service will be impacted by running tests will it impact production
  - kind: video
    url: https://www.youtube.com/watch?v=JI9OpaBx0nk&t=85s
    title: "Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)"
    date: "2025-04-01T15:00:22.000Z"
    commit: null
    t: 85
    quote: to address many of these challenges we have introduced a new test Handler in this release the HTTP client Handler
  - kind: video
    url: https://www.youtube.com/watch?v=JI9OpaBx0nk&t=126s
    title: "Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)"
    date: "2025-04-01T15:00:22.000Z"
    commit: null
    t: 126
    quote: however this setup requires that the external service is up and running instead we can define an HTTP client hander to intercept the request
  - kind: video
    url: https://www.youtube.com/watch?v=JI9OpaBx0nk&t=261s
    title: "Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)"
    date: "2025-04-01T15:00:22.000Z"
    commit: null
    t: 261
    quote: it is important to mention that as of now it is not possible to set cookies or redirection status codes so far so good
  - kind: video
    url: https://www.youtube.com/watch?v=JI9OpaBx0nk&t=316s
    title: "Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)"
    date: "2025-04-01T15:00:22.000Z"
    commit: null
    t: 316
    quote: we have implemented a fall through mechanism that allows the programmer to decide in the Handler whether they want to Mark the response for
  - kind: video
    url: https://www.youtube.com/watch?v=JI9OpaBx0nk&t=353s
    title: "Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)"
    date: "2025-04-01T15:00:22.000Z"
    commit: null
    t: 353
    quote: keep in mind that the default return value is false therefore a completely empty hander procedure would still block the outbound request and return
  - kind: video
    url: https://www.youtube.com/watch?v=JI9OpaBx0nk&t=511s
    title: "Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)"
    date: "2025-04-01T15:00:22.000Z"
    commit: null
    t: 511
    quote: you can add it to test code units to specify how outbound request should be treated during test executions by default all requests are
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: JI9OpaBx0nk
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=JI9OpaBx0nk
published_at: "2025-04-01T15:00:22.000Z"
duration_s: 640
captions: full
audience:
  - developer
  - partner
chapters:
  - t: 0
    title: Testing challenges with external services
  - t: 85
    title: Introducing HTTP client Handler
  - t: 146
    title: Setting up the Handler and simulating responses
  - t: 205
    title: Distinguishing between different requests
  - t: 261
    title: Handling secret URIs and limitations
  - t: 316
    title: Fall-through mechanism for selective mocking
  - t: 374
    title: Live debugging demonstration
  - t: 500
    title: Test HTTP request policy and scenarios
features:
  - name: HTTP client Handler
    status: unclear
    t: 85
    verified: false
    status_source: video
  - name: HTTP client Handler attribute
    status: unclear
    t: 146
    verified: false
    status_source: video
  - name: Handler functions attribute
    status: unclear
    t: 164
    verified: false
    status_source: video
  - name: Request object properties
    status: unclear
    t: 225
    verified: false
    status_source: video
  - name: Fall-through mechanism
    status: unclear
    t: 316
    verified: false
    status_source: video
  - name: Test HTTP request policy
    status: unclear
    t: 500
    verified: false
    status_source: video
  - name: Allow all outbound requests policy
    status: unclear
    t: 532
    verified: false
    status_source: video
  - name: Allow outbound from Handler policy
    status: unclear
    t: 572
    verified: false
    status_source: video
  - name: Block outbound requests policy
    status: unclear
    t: 608
    verified: false
    status_source: video
objects_mentioned:
  - other document service
  - codeunit test code unit
  - other response object
  - other request object
quotes:
  - t: 4
    text: if we connect to the actual service we need to consider how that service will be impacted by running tests will it impact production
    check: snapped
  - t: 85
    text: to address many of these challenges we have introduced a new test Handler in this release the HTTP client Handler
    check: exact
  - t: 126
    text: however this setup requires that the external service is up and running instead we can define an HTTP client hander to intercept the request
    check: exact
  - t: 261
    text: it is important to mention that as of now it is not possible to set cookies or redirection status codes so far so good
    check: exact
  - t: 316
    text: we have implemented a fall through mechanism that allows the programmer to decide in the Handler whether they want to Mark the response for
    check: exact
  - t: 353
    text: keep in mind that the default return value is false therefore a completely empty hander procedure would still block the outbound request and return
    check: exact
  - t: 511
    text: you can add it to test code units to specify how outbound request should be treated during test executions by default all requests are
    check: exact
---

# Introducing: How to Mock Outbound Http Calls for Easier Testing (2025 release wave 1)

> HTTP client Handler for mocking outbound HTTP calls in AL tests (2025 release wave 1). Covers intercepting requests, simulating responses, telling requests apart, the fall-through mechanism, and the test HTTP request policy options. Known limits: no cookies or redirection status codes.

[Watch on YouTube](https://www.youtube.com/watch?v=JI9OpaBx0nk) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 10:40 · tier official · **unreviewed** (machine-generated)

## Overview

The video explains why testing code that calls external services is hard: tests depend on the service being up, and running them against a live service can affect production. It introduces a new test Handler, the HTTP client Handler, which intercepts outbound HTTP requests during test execution so the test can return a mocked response instead.

The demo shows how to set up the Handler, attach it to a test with the Handler functions attribute, and use request properties to return different responses. It then covers the fall-through mechanism for mixing mocked and real calls, a live debugging session, and the test HTTP request policy that controls which outbound requests are allowed.

## Key points

- Mark a procedure with the HTTP client Handler attribute and attach it to a test with the Handler functions attribute; all HTTP calls during that test are then routed to the Handler.
- The request object exposes request type, path, query parameters and a has-secret-URI property, which you can use to return different responses per request.
- When the request URI is set using secret text, path and query parameters are not available.
- Fall-through: the Handler returns a Boolean. Exit true issues the original request; exit false (the default) uses the mocked response, so an empty Handler still blocks the outbound call.
- Test HTTP request policy on a test codeunit has three options: allow all outbound requests (default), allow outbound only from the Handler, or block all outbound requests.
- Blocking outbound requests is suggested for automated CI/CD pipelines so tests never hit real endpoints.
- As of now, cookies and redirection status codes cannot be set in mocked responses.

## Chapters

- [0:00](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=0s) Testing challenges with external services
- [1:25](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=85s) Introducing HTTP client Handler
- [2:26](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=146s) Setting up the Handler and simulating responses
- [3:25](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=205s) Distinguishing between different requests
- [4:21](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=261s) Handling secret URIs and limitations
- [5:16](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=316s) Fall-through mechanism for selective mocking
- [6:14](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=374s) Live debugging demonstration
- [8:20](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=500s) Test HTTP request policy and scenarios

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| HTTP client Handler | status not stated, demoed | [1:25](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=85s) |  |
| HTTP client Handler attribute | status not stated, demoed | [2:26](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=146s) |  |
| Handler functions attribute | status not stated, demoed | [2:44](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=164s) |  |
| Request object properties | status not stated, demoed | [3:45](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=225s) |  |
| Fall-through mechanism | status not stated, demoed | [5:16](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=316s) |  |
| Test HTTP request policy | status not stated, demoed | [8:20](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=500s) |  |
| Allow all outbound requests policy | status not stated, demoed | [8:52](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=532s) |  |
| Allow outbound from Handler policy | status not stated, demoed | [9:32](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=572s) |  |
| Block outbound requests policy | status not stated, demoed | [10:08](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=608s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- other "document service" at [1:46](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=106s)
- codeunit "test code unit" at [2:06](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=126s)
- other "response object" at [2:26](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=146s)
- other "request object" at [3:45](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=225s)

## Quotes

- [0:04](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=4s) "if we connect to the actual service we need to consider how that service will be impacted by running tests will it impact production"
- [1:25](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=85s) "to address many of these challenges we have introduced a new test Handler in this release the HTTP client Handler"
- [2:06](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=126s) "however this setup requires that the external service is up and running instead we can define an HTTP client hander to intercept the request"
- [4:21](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=261s) "it is important to mention that as of now it is not possible to set cookies or redirection status codes so far so good"
- [5:16](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=316s) "we have implemented a fall through mechanism that allows the programmer to decide in the Handler whether they want to Mark the response for"
- [5:53](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=353s) "keep in mind that the default return value is false therefore a completely empty hander procedure would still block the outbound request and return"
- [8:31](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=511s) "you can add it to test code units to specify how outbound request should be treated during test executions by default all requests are"

## Disclaimers in the video

- [4:21](https://www.youtube.com/watch?v=JI9OpaBx0nk&t=261s) other: as of now it is not possible to set cookies or redirection status codes

Presenters (as heard): Stefan, Balash.
