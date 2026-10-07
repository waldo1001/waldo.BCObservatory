---
id: video/uCJ48biqLf8
type: video
title: FieldExist() and Field() get a text overload
summary: FieldExist() and RecordRef.Field() in AL now have overloads that take a field name as text instead of only an integer field ID. The video demos reading a table extension field on Customer by name, compared with the field ID approach.
tier: community
language: en
tags:
  - al development
  - field functions
  - table extensions
  - recordref
  - fieldref
  - text parameters
  - overloaded functions
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
  input_hash: e23bdf91b5beda89d5f7daa2d3a5a75577df10f2f4c05d4a845bd8285eef1ee6
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=uCJ48biqLf8&t=59s
    title: FieldExist() and Field() get a text overload
    date: "2025-10-13T03:08:45.000Z"
    commit: null
    t: 59
    quote: in fact existing functions but microsoft created overloaded versions of these functions
  - kind: video
    url: https://www.youtube.com/watch?v=uCJ48biqLf8&t=167s
    title: FieldExist() and Field() get a text overload
    date: "2025-10-13T03:08:45.000Z"
    commit: null
    t: 167
    quote: how can we get the value of a field that's not in the base application, but it's a field that belongs to a table
  - kind: video
    url: https://www.youtube.com/watch?v=uCJ48biqLf8&t=385s
    title: FieldExist() and Field() get a text overload
    date: "2025-10-13T03:08:45.000Z"
    commit: null
    t: 385
    quote: with the latest release though we have uh an overloaded version of the field exist function and field exist as you can see here
  - kind: video
    url: https://www.youtube.com/watch?v=uCJ48biqLf8&t=410s
    title: FieldExist() and Field() get a text overload
    date: "2025-10-13T03:08:45.000Z"
    commit: null
    t: 410
    quote: And not only field exist but also field has an overloaded version. We can now pass to field a field name.
  - kind: video
    url: https://www.youtube.com/watch?v=uCJ48biqLf8&t=459s
    title: FieldExist() and Field() get a text overload
    date: "2025-10-13T03:08:45.000Z"
    commit: null
    t: 459
    quote: We can chain the value function for a field ref. And that's pretty much it.
links:
  learn: []
  objects:
    - object/table/18
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: uCJ48biqLf8
channel: yt-bcmusings
source_name: Business Central Musings
url: https://www.youtube.com/watch?v=uCJ48biqLf8
published_at: "2025-10-13T03:08:45.000Z"
duration_s: 700
captions: derived
audience:
  - developer
chapters:
  - t: 0
    title: Introduction to Business Central Musings
  - t: 47
    title: Overview of FieldExist and Field overloads
  - t: 135
    title: Use case - accessing table extension fields
  - t: 221
    title: Traditional approach with field IDs
  - t: 373
    title: New text overload functions in latest compiler
  - t: 473
    title: Demo setup and code examples
  - t: 537
    title: Demo execution with field ID and field name
  - t: 630
    title: Summary and call to action
features:
  - name: FieldExist() text overload
    status: unclear
    t: 385
    verified: false
    status_source: video
  - name: Field() text overload
    status: unclear
    t: 410
    verified: false
    status_source: video
  - name: Accessing table extension fields via text parameters
    status: unclear
    t: 154
    verified: false
    status_source: video
objects_mentioned:
  - table Customer
  - codeunit get value via field ID / get value via field name
quotes:
  - t: 59
    text: in fact existing functions but microsoft created overloaded versions of these functions
    check: fuzzy
  - t: 167
    text: how can we get the value of a field that's not in the base application, but it's a field that belongs to a table
    check: exact
  - t: 385
    text: with the latest release though we have uh an overloaded version of the field exist function and field exist as you can see here
    check: exact
  - t: 410
    text: And not only field exist but also field has an overloaded version. We can now pass to field a field name.
    check: exact
  - t: 459
    text: We can chain the value function for a field ref. And that's pretty much it.
    check: exact
---

# FieldExist() and Field() get a text overload

> FieldExist() and RecordRef.Field() in AL now have overloads that take a field name as text instead of only an integer field ID. The video demos reading a table extension field on Customer by name, compared with the field ID approach.

[Watch on YouTube](https://www.youtube.com/watch?v=uCJ48biqLf8) · Business Central Musings · 2025-10-13 · 11:40 · tier community · **unreviewed** (machine-generated)

## Overview

The video explains that Microsoft added overloaded versions of the existing FieldExist and Field functions. Before, a developer had to know the numeric field ID to check for or read a field on a RecordRef. This was awkward for fields that come from a table extension and are not in the base application.

The demo uses table Customer and two codeunit procedures, one that gets a value via field ID and one via field name. It shows FieldExist called with a field name, and Field called with a field name returning a FieldRef, to which the Value function can be chained. The video ties the overloads to the latest compiler release.

## Key points

- FieldExist() now has an overload that accepts a field name as text, in addition to the integer field ID.
- Field() on RecordRef now has a text overload that takes a field name and returns a FieldRef.
- The FieldRef returned by Field(name) lets you chain the Value function to read the field value directly.
- Main use case: reading fields from table extensions (for example from third-party apps) without knowing their field IDs.
- You still need to know the exact field name as a string.
- The overloads are available with the latest compiler release, as described in the video.
- The demo compares a get-value-via-field-ID approach with a get-value-via-field-name approach on table Customer.

## Chapters

- [0:00](https://www.youtube.com/watch?v=uCJ48biqLf8&t=0s) Introduction to Business Central Musings
- [0:47](https://www.youtube.com/watch?v=uCJ48biqLf8&t=47s) Overview of FieldExist and Field overloads
- [2:15](https://www.youtube.com/watch?v=uCJ48biqLf8&t=135s) Use case - accessing table extension fields
- [3:41](https://www.youtube.com/watch?v=uCJ48biqLf8&t=221s) Traditional approach with field IDs
- [6:13](https://www.youtube.com/watch?v=uCJ48biqLf8&t=373s) New text overload functions in latest compiler
- [7:53](https://www.youtube.com/watch?v=uCJ48biqLf8&t=473s) Demo setup and code examples
- [8:57](https://www.youtube.com/watch?v=uCJ48biqLf8&t=537s) Demo execution with field ID and field name
- [10:30](https://www.youtube.com/watch?v=uCJ48biqLf8&t=630s) Summary and call to action

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| FieldExist() text overload | status not stated, demoed | [6:25](https://www.youtube.com/watch?v=uCJ48biqLf8&t=385s) |  |
| Field() text overload | status not stated, demoed | [6:50](https://www.youtube.com/watch?v=uCJ48biqLf8&t=410s) |  |
| Accessing table extension fields via text parameters | status not stated, demoed | [2:34](https://www.youtube.com/watch?v=uCJ48biqLf8&t=154s) |  |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 18 "Customer"](../objects/table/18.md) at [1:27](https://www.youtube.com/watch?v=uCJ48biqLf8&t=87s)
- codeunit "get value via field ID / get value via field name" at [8:25](https://www.youtube.com/watch?v=uCJ48biqLf8&t=505s)

Not found in BC28-30: codeunit "get value via field ID / get value via field name".

## Quotes

- [0:59](https://www.youtube.com/watch?v=uCJ48biqLf8&t=59s) "in fact existing functions but microsoft created overloaded versions of these functions"
- [2:47](https://www.youtube.com/watch?v=uCJ48biqLf8&t=167s) "how can we get the value of a field that's not in the base application, but it's a field that belongs to a table"
- [6:25](https://www.youtube.com/watch?v=uCJ48biqLf8&t=385s) "with the latest release though we have uh an overloaded version of the field exist function and field exist as you can see here"
- [6:50](https://www.youtube.com/watch?v=uCJ48biqLf8&t=410s) "And not only field exist but also field has an overloaded version. We can now pass to field a field name."
- [7:39](https://www.youtube.com/watch?v=uCJ48biqLf8&t=459s) "We can chain the value function for a field ref. And that's pretty much it."

Presenters (as heard): Business Central Musings host.
