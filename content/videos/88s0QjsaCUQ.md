---
id: video/88s0QjsaCUQ
type: video
title: Understanding the Sign Up Context and Using it for Profiling Customers
summary: "Business Central sign up context: a URI-encoded parameter in the sign up redirect URL that carries the sign up origin and custom JSON key-value pairs from a website profiler. It covers app ID, country code and EULA requirements for app provisioning, and how apps read the stored context."
tier: official
language: en
tags:
  - sign up context
  - customer profiling
  - onboarding experience
  - redirect url
  - app provisioning
  - uri encoding
  - json parameters
  - end user license agreement
  - country code validation
system: crm
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
  input_hash: 6ab718c4bc171d1cee272441a5cb778462e4b065b361a1c535ecccd8eb9e34ac
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=88s0QjsaCUQ&t=20s
    title: Understanding the Sign Up Context and Using it for Profiling Customers
    date: "2024-04-18T14:07:14.000Z"
    commit: null
    t: 20
    quote: this is just a regular form you would build you have full control over your website you can do questions of of different sorts
  - kind: video
    url: https://www.youtube.com/watch?v=88s0QjsaCUQ&t=137s
    title: Understanding the Sign Up Context and Using it for Profiling Customers
    date: "2024-04-18T14:07:14.000Z"
    commit: null
    t: 137
    quote: that's a new parameter that we're actually using today uh to determine whether or not a sign up happened from the Microsoft website in
  - kind: video
    url: https://www.youtube.com/watch?v=88s0QjsaCUQ&t=213s
    title: Understanding the Sign Up Context and Using it for Profiling Customers
    date: "2024-04-18T14:07:14.000Z"
    commit: null
    t: 213
    quote: it's a text string in form of a Json key value pair what's key here is that you can determine those key value pairs
  - kind: video
    url: https://www.youtube.com/watch?v=88s0QjsaCUQ&t=264s
    title: Understanding the Sign Up Context and Using it for Profiling Customers
    date: "2024-04-18T14:07:14.000Z"
    commit: null
    t: 264
    quote: this signup context information is stored in a system table inside business Central it's your job in an app when it's installed to look
  - kind: video
    url: https://www.youtube.com/watch?v=88s0QjsaCUQ&t=325s
    title: Understanding the Sign Up Context and Using it for Profiling Customers
    date: "2024-04-18T14:07:14.000Z"
    commit: null
    t: 325
    quote: the country code must match with the country code of the customer's a and it also much must match with uh a supported country
  - kind: video
    url: https://www.youtube.com/watch?v=88s0QjsaCUQ&t=345s
    title: Understanding the Sign Up Context and Using it for Profiling Customers
    date: "2024-04-18T14:07:14.000Z"
    commit: null
    t: 345
    quote: you also need to specify the end user license agreement acceptance uh as being true
  - kind: video
    url: https://www.youtube.com/watch?v=88s0QjsaCUQ&t=385s
    title: Understanding the Sign Up Context and Using it for Profiling Customers
    date: "2024-04-18T14:07:14.000Z"
    commit: null
    t: 385
    quote: by reacting on the on the signup context the key value pairs here uh I'm able to say load this checklist item because that
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: 88s0QjsaCUQ
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=88s0QjsaCUQ
published_at: "2024-04-18T14:07:14.000Z"
duration_s: 439
captions: full
audience:
  - developer
  - partner
  - functional consultant
chapters:
  - t: 0
    title: Introduction to Sign Up Context and Profiling
  - t: 40
    title: Sign Up URL Structure and Components
  - t: 78
    title: Redirect URL and Sign Up Context Parameter
  - t: 137
    title: Sign Up Context Scenarios and JSON Format
  - t: 213
    title: Using Sign Up Context with Profiler Data
  - t: 305
    title: App ID and Country Code Requirements
  - t: 385
    title: Provisioning with Sign Up Context and App Loading
features:
  - name: Sign Up Context Parameter
    status: unclear
    t: 137
    verified: false
    status_source: video
  - name: Profiler Form on Website
    status: unclear
    t: 20
    verified: false
    status_source: video
  - name: Sign Up Context JSON Key-Value Pairs
    status: unclear
    t: 213
    verified: false
    status_source: video
  - name: Sign Up Context Storage in System Table
    status: unclear
    t: 285
    verified: false
    status_source: video
  - name: App ID in Sign Up Context
    status: unclear
    t: 305
    verified: false
    status_source: video
  - name: Country Code Validation in Sign Up Context
    status: unclear
    t: 325
    verified: false
    status_source: video
  - name: End User License Agreement Acceptance Flag
    status: unclear
    t: 345
    verified: false
    status_source: video
  - name: Checklist Customization Based on Sign Up Context
    status: unclear
    t: 385
    verified: false
    status_source: video
objects_mentioned:
  - table system table
quotes:
  - t: 20
    text: this is just a regular form you would build you have full control over your website you can do questions of of different sorts
    check: exact
  - t: 137
    text: that's a new parameter that we're actually using today uh to determine whether or not a sign up happened from the Microsoft website in
    check: exact
  - t: 213
    text: it's a text string in form of a Json key value pair what's key here is that you can determine those key value pairs
    check: exact
  - t: 264
    text: this signup context information is stored in a system table inside business Central it's your job in an app when it's installed to look
    check: snapped
  - t: 325
    text: the country code must match with the country code of the customer's a and it also much must match with uh a supported country
    check: exact
  - t: 345
    text: you also need to specify the end user license agreement acceptance uh as being true
    check: exact
  - t: 385
    text: by reacting on the on the signup context the key value pairs here uh I'm able to say load this checklist item because that
    check: snapped
---

# Understanding the Sign Up Context and Using it for Profiling Customers

> Business Central sign up context: a URI-encoded parameter in the sign up redirect URL that carries the sign up origin and custom JSON key-value pairs from a website profiler. It covers app ID, country code and EULA requirements for app provisioning, and how apps read the stored context.

[Watch on YouTube](https://www.youtube.com/watch?v=88s0QjsaCUQ) · Microsoft Dynamics 365 Business Central (YouTube) · 2024-04-18 · 7:19 · tier official · **unreviewed** (machine-generated)

## Overview

The video explains how to build a sign up URL for Business Central that includes a redirect URL with a sign up context parameter. The parameter tells Business Central where a sign up came from. It currently supports two scenarios: the Microsoft website (marked as viral) and Shopify. It can also hold JSON key-value pairs that you define from answers collected in a profiler form on your own website, such as interest or previous system.

The context is stored in a system table in Business Central. Apps can read it on installation, move data to base application tables, and react to it, for example by loading a checklist matched to the profiler answer. If an app ID is included, the app can be provisioned with the Business Central Standard trial, which requires a matching country code and an EULA acceptance flag set to true. The video is a clip from a 2023 release wave 1 launch video that the presenter describes as still relevant.

## Key points

- The sign up context is a parameter in the redirect URL and must be URI encoded.
- It currently supports two scenarios: Microsoft website (viral) and Shopify.
- You define the JSON key-value pairs yourself, based on what your website profiler form collects.
- The context is stored in a system table; the app must implement logic to read it at install and copy data to base application tables.
- To provision an app, include its app ID (public, from the store listing) in the context.
- The country code must match the customer's Azure AD tenant and be among the app's supported countries, or the app is not provisioned.
- The context must include the EULA acceptance flag set to true, or the API will not load the app.

## Chapters

- [0:00](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=0s) Introduction to Sign Up Context and Profiling
- [0:40](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=40s) Sign Up URL Structure and Components
- [1:18](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=78s) Redirect URL and Sign Up Context Parameter
- [2:17](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=137s) Sign Up Context Scenarios and JSON Format
- [3:33](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=213s) Using Sign Up Context with Profiler Data
- [5:05](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=305s) App ID and Country Code Requirements
- [6:25](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=385s) Provisioning with Sign Up Context and App Loading

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Sign Up Context Parameter | status not stated, demoed | [2:17](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=137s) |  |
| Profiler Form on Website | status not stated | [0:20](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=20s) |  |
| Sign Up Context JSON Key-Value Pairs | status not stated, demoed | [3:33](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=213s) |  |
| Sign Up Context Storage in System Table | status not stated | [4:45](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=285s) |  |
| App ID in Sign Up Context | status not stated, demoed | [5:05](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=305s) |  |
| Country Code Validation in Sign Up Context | status not stated | [5:25](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=325s) |  |
| End User License Agreement Acceptance Flag | status not stated | [5:45](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=345s) |  |
| Checklist Customization Based on Sign Up Context | status not stated, demoed | [6:25](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=385s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "system table" at [4:45](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=285s)

Not found in BC28-30: table "system table".

## Quotes

- [0:20](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=20s) "this is just a regular form you would build you have full control over your website you can do questions of of different sorts"
- [2:17](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=137s) "that's a new parameter that we're actually using today uh to determine whether or not a sign up happened from the Microsoft website in"
- [3:33](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=213s) "it's a text string in form of a Json key value pair what's key here is that you can determine those key value pairs"
- [4:24](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=264s) "this signup context information is stored in a system table inside business Central it's your job in an app when it's installed to look"
- [5:25](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=325s) "the country code must match with the country code of the customer's a and it also much must match with uh a supported country"
- [5:45](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=345s) "you also need to specify the end user license agreement acceptance uh as being true"
- [6:25](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=385s) "by reacting on the on the signup context the key value pairs here uh I'm able to say load this checklist item because that"

## Disclaimers in the video

- [0:00](https://www.youtube.com/watch?v=88s0QjsaCUQ&t=0s) other: this is a clip from a launch M video for 2023 release Wave 1 but it's equally relevant today

Presenters (as heard): Kjartan, Jakob.
