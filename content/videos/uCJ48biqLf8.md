---
id: video/uCJ48biqLf8
type: video
title: FieldExist() and Field() get a text overload
summary: "FieldExist() and RecordRef.Field() in AL now have overloads that take a field name as text instead of only an integer field ID. The video explains the main use case: reading fields that third-party apps add to a table such as Customer through table extensions, without looking up IDs through page inspection. The demo reads the Customer No. field both by ID and by name from two customer list actions."
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
  state: reviewed
  by: opus
  at: "2026-10-07T23:22:25.208Z"
  flags: []
generated:
  at: "2026-10-07T23:22:25.253Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: e23bdf91b5beda89d5f7daa2d3a5a75577df10f2f4c05d4a845bd8285eef1ee6
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=uCJ48biqLf8&t=47s
    title: FieldExist() and Field() get a text overload
    date: "2025-10-13T03:08:45.000Z"
    commit: null
    t: 47
    quote: related to two new functions that will appear in the latest AL compiler.
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
    url: https://www.youtube.com/watch?v=uCJ48biqLf8&t=343s
    title: FieldExist() and Field() get a text overload
    date: "2025-10-13T03:08:45.000Z"
    commit: null
    t: 343
    quote: open up the page inspection in uh in the client and try to locate that binary stream or insight works
  - kind: video
    url: https://www.youtube.com/watch?v=uCJ48biqLf8&t=385s
    title: FieldExist() and Field() get a text overload
    date: "2025-10-13T03:08:45.000Z"
    commit: null
    t: 385
    quote: with the latest release though we have uh an overloaded version of the field exist function and field exist as you can see here
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
objects_mentioned:
  - table Customer
  - codeunit get value via field ID / get value via field name
quotes:
  - t: 47
    text: related to two new functions that will appear in the latest AL compiler.
    check: exact
  - t: 59
    text: in fact existing functions but microsoft created overloaded versions of these functions
    check: fuzzy
  - t: 167
    text: how can we get the value of a field that's not in the base application, but it's a field that belongs to a table
    check: exact
  - t: 343
    text: open up the page inspection in uh in the client and try to locate that binary stream or insight works
    check: exact
  - t: 385
    text: with the latest release though we have uh an overloaded version of the field exist function and field exist as you can see here
    check: exact
---

# FieldExist() and Field() get a text overload

> FieldExist() and RecordRef.Field() in AL now have overloads that take a field name as text instead of only an integer field ID. The video explains the main use case: reading fields that third-party apps add to a table such as Customer through table extensions, without looking up IDs through page inspection. The demo reads the Customer No. field both by ID and by name from two customer list actions.

[Watch on YouTube](https://www.youtube.com/watch?v=uCJ48biqLf8) · Business Central Musings · 2025-10-13 · 11:40 · tier community · reviewed (checked by Opus)

## Overview

The video explains that Microsoft added overloaded versions of the existing FieldExist and Field functions. Before, a developer had to know the numeric field ID to check for or read a field on a RecordRef. This was awkward for fields that come from a table extension and are not in the base application.

The demo uses table Customer and two codeunit procedures, one that gets a value via field ID and one via field name. It shows FieldExist called with a field name, and Field called with a field name returning a FieldRef, to which the Value function can be chained. The video ties the overloads to the latest compiler release.

## Key points

- FieldExist() now has an overload that accepts a field name as text, in addition to the integer field ID.
- Field() on RecordRef now has a text overload that takes a field name and returns a FieldRef.
- You can chain the Value function onto the FieldRef that Field() returns, so no FieldRef variable is needed.
- Main use case: reading fields that table extensions add (for example, from ISV apps such as Binary Stream or Insight Works) without knowing their field IDs.
- With the old approach, you find the field ID with page inspection, call FieldExist(id), then call Field(id).Value.
- The video calls these overloads, not new functions, that come with the latest AL compiler release.
- The demo adds two actions to the customer list (get field by ID, get field by name) that read the No. field value through a codeunit.

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

| Feature | Status | At |
|---|---|---|
| FieldExist() text overload | status not stated, demoed | [6:25](https://www.youtube.com/watch?v=uCJ48biqLf8&t=385s) |
| Field() text overload | status not stated, demoed | [6:50](https://www.youtube.com/watch?v=uCJ48biqLf8&t=410s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 18 "Customer"](../objects/table/18.md) at [1:27](https://www.youtube.com/watch?v=uCJ48biqLf8&t=87s)
- codeunit "get value via field ID / get value via field name" at [8:25](https://www.youtube.com/watch?v=uCJ48biqLf8&t=505s)

Not found in BC28-30: codeunit "get value via field ID / get value via field name".

## Quotes

- [0:47](https://www.youtube.com/watch?v=uCJ48biqLf8&t=47s) "related to two new functions that will appear in the latest AL compiler."
- [0:59](https://www.youtube.com/watch?v=uCJ48biqLf8&t=59s) "in fact existing functions but microsoft created overloaded versions of these functions"
- [2:47](https://www.youtube.com/watch?v=uCJ48biqLf8&t=167s) "how can we get the value of a field that's not in the base application, but it's a field that belongs to a table"
- [5:43](https://www.youtube.com/watch?v=uCJ48biqLf8&t=343s) "open up the page inspection in uh in the client and try to locate that binary stream or insight works"
- [6:25](https://www.youtube.com/watch?v=uCJ48biqLf8&t=385s) "with the latest release though we have uh an overloaded version of the field exist function and field exist as you can see here"

Presenters (as heard): Business Central Musings host.
