---
id: video/KmuTVkodRXM
type: video
title: All new goodies about AL Namespace in BC 2025 wave 2
summary: "AL namespace additions in Business Central 2025 wave 2 (BC27): a new AL namespace field on the All Objects with Captions table, Record ID formatting with format type 9 to show the namespace, and evaluating a Record ID against a fully qualified namespace. All three are demoed."
tier: community
language: en
tags:
  - al namespace
  - record id formatting
  - system reflection
  - all objects with captions
  - page extensions
  - fully qualified names
  - analysis mode
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T23:22:13.830Z"
  flags: []
generated:
  at: "2026-10-07T23:22:13.866Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: b154ea6b6482e19eee76110f028ca7ab622a0ad8481cc80cf6437c8a0a6b015f
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=KmuTVkodRXM&t=24s
    title: All new goodies about AL Namespace in BC 2025 wave 2
    date: "2025-10-20T04:17:07.000Z"
    commit: null
    t: 24
    quote: the table is called all objects with captions. uh and the new field is called uh al namespace.
  - kind: video
    url: https://www.youtube.com/watch?v=KmuTVkodRXM&t=87s
    title: All new goodies about AL Namespace in BC 2025 wave 2
    date: "2025-10-20T04:17:07.000Z"
    commit: null
    t: 87
    quote: if we switch to bc27 and we go to the same page all object with caption
  - kind: video
    url: https://www.youtube.com/watch?v=KmuTVkodRXM&t=145s
    title: All new goodies about AL Namespace in BC 2025 wave 2
    date: "2025-10-20T04:17:07.000Z"
    commit: null
    t: 145
    quote: al name space it's a text 500 field and it was also added to the dropdown to the uh group field group
  - kind: video
    url: https://www.youtube.com/watch?v=KmuTVkodRXM&t=286s
    title: All new goodies about AL Namespace in BC 2025 wave 2
    date: "2025-10-20T04:17:07.000Z"
    commit: null
    t: 286
    quote: the table is part of namespace system reflection. So that's how that's how it goes.
  - kind: video
    url: https://www.youtube.com/watch?v=KmuTVkodRXM&t=412s
    title: All new goodies about AL Namespace in BC 2025 wave 2
    date: "2025-10-20T04:17:07.000Z"
    commit: null
    t: 412
    quote: now that it will display the type the al name space of that record id in which a al name space that
links:
  learn: []
  objects:
    - object/page/9174
    - object/page/22
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: KmuTVkodRXM
channel: yt-bcmusings
source_name: Business Central Musings
url: https://www.youtube.com/watch?v=KmuTVkodRXM
published_at: "2025-10-20T04:17:07.000Z"
duration_s: 637
captions: derived
audience:
  - developer
  - partner
chapters:
  - t: 0
    title: Introduction and overview of AL namespace
  - t: 24
    title: Comparing BC26 and BC27 - the new AL namespace field
  - t: 97
    title: Finding AL namespace in All Objects with Captions table
  - t: 212
    title: Creating extensions and using System Reflection namespace
  - t: 299
    title: Demonstrating AL namespace in analysis mode
  - t: 384
    title: Using AL namespace with Record ID formatting
  - t: 458
    title: Evaluating Record ID against fully qualified namespaces
  - t: 572
    title: Summary and conclusion
features:
  - name: AL namespace field in All Objects with Captions table
    status: unclear
    t: 24
    verified: false
    status_source: video
  - name: Record ID formatting with AL namespace
    status: unclear
    t: 384
    verified: false
    status_source: video
  - name: Record ID evaluation against fully qualified namespace
    status: unclear
    t: 478
    verified: false
    status_source: video
objects_mentioned:
  - table All Objects with Captions
  - page All Objects with Captions
  - page All Objects with Caption
  - page All Objects with Caption (page 9174)
  - table Sample
  - report Data Also Sample
  - page Customer List
quotes:
  - t: 24
    text: the table is called all objects with captions. uh and the new field is called uh al namespace.
    check: exact
  - t: 87
    text: if we switch to bc27 and we go to the same page all object with caption
    check: fuzzy
  - t: 145
    text: al name space it's a text 500 field and it was also added to the dropdown to the uh group field group
    check: exact
  - t: 286
    text: the table is part of namespace system reflection. So that's how that's how it goes.
    check: exact
  - t: 412
    text: now that it will display the type the al name space of that record id in which a al name space that
    check: fuzzy
---

# All new goodies about AL Namespace in BC 2025 wave 2

> AL namespace additions in Business Central 2025 wave 2 (BC27): a new AL namespace field on the All Objects with Captions table, Record ID formatting with format type 9 to show the namespace, and evaluating a Record ID against a fully qualified namespace. All three are demoed.

[Watch on YouTube](https://www.youtube.com/watch?v=KmuTVkodRXM) · Business Central Musings · 2025-10-20 · 10:37 · tier community · reviewed (checked by Opus)

## Overview

The video compares BC26 and BC27 and shows that the All Objects with Captions table now has an AL namespace field. It is a Text 500 field. It is not visible on page 9174 in the base application, but the page is extensible, so it can be shown through a page extension. The demo also covers the System Reflection namespace, which the table belongs to, and analysis mode.

The second half covers Record ID. A Record ID can be formatted with format type 9 to show the fully qualified AL namespace of its record, and it can be evaluated against a fully qualified name such as Microsoft Sales Customer to test which namespace a record belongs to.

## Key points

- BC27 adds a Text 500 field called AL namespace to the All Objects with Captions table.
- The field is not shown on page 9174 in the base application; the page is extensible, so add the field with a page extension.
- The All Objects with Captions table is in the System Reflection namespace.
- Formatting a Record ID with format type 9 returns the fully qualified AL namespace of the record.
- A Record ID can be evaluated against a fully qualified namespace to test whether a record belongs to it.
- The example fully qualified name for Customer is Microsoft Sales Customer.

## Chapters

- [0:00](https://www.youtube.com/watch?v=KmuTVkodRXM&t=0s) Introduction and overview of AL namespace
- [0:24](https://www.youtube.com/watch?v=KmuTVkodRXM&t=24s) Comparing BC26 and BC27 - the new AL namespace field
- [1:37](https://www.youtube.com/watch?v=KmuTVkodRXM&t=97s) Finding AL namespace in All Objects with Captions table
- [3:32](https://www.youtube.com/watch?v=KmuTVkodRXM&t=212s) Creating extensions and using System Reflection namespace
- [4:59](https://www.youtube.com/watch?v=KmuTVkodRXM&t=299s) Demonstrating AL namespace in analysis mode
- [6:24](https://www.youtube.com/watch?v=KmuTVkodRXM&t=384s) Using AL namespace with Record ID formatting
- [7:38](https://www.youtube.com/watch?v=KmuTVkodRXM&t=458s) Evaluating Record ID against fully qualified namespaces
- [9:32](https://www.youtube.com/watch?v=KmuTVkodRXM&t=572s) Summary and conclusion

## Features

| Feature | Status | At |
|---|---|---|
| AL namespace field in All Objects with Captions table | status not stated, demoed | [0:24](https://www.youtube.com/watch?v=KmuTVkodRXM&t=24s) |
| Record ID formatting with AL namespace | status not stated, demoed | [6:24](https://www.youtube.com/watch?v=KmuTVkodRXM&t=384s) |
| Record ID evaluation against fully qualified namespace | status not stated, demoed | [7:58](https://www.youtube.com/watch?v=KmuTVkodRXM&t=478s) |

## AL objects mentioned

As heard in the captions. A name that matches one object page by exact type and name links to it; the others stay as named.

- table "All Objects with Captions" at [0:24](https://www.youtube.com/watch?v=KmuTVkodRXM&t=24s)
- page "All Objects with Captions" at [0:59](https://www.youtube.com/watch?v=KmuTVkodRXM&t=59s)
- [page 9174 "All Objects with Caption"](../objects/page/9174.md) at [1:27](https://www.youtube.com/watch?v=KmuTVkodRXM&t=87s)
- page "All Objects with Caption (page 9174)" at [2:49](https://www.youtube.com/watch?v=KmuTVkodRXM&t=169s)
- table "Sample" at [6:06](https://www.youtube.com/watch?v=KmuTVkodRXM&t=366s)
- report "Data Also Sample" at [6:06](https://www.youtube.com/watch?v=KmuTVkodRXM&t=366s)
- [page 22 "Customer List"](../objects/page/22.md) at [7:10](https://www.youtube.com/watch?v=KmuTVkodRXM&t=430s)

Not found in BC28-30: table "All Objects with Captions", page "All Objects with Captions", page "All Objects with Caption (page 9174)", table "Sample", report "Data Also Sample".

## Quotes

- [0:24](https://www.youtube.com/watch?v=KmuTVkodRXM&t=24s) "the table is called all objects with captions. uh and the new field is called uh al namespace."
- [1:27](https://www.youtube.com/watch?v=KmuTVkodRXM&t=87s) "if we switch to bc27 and we go to the same page all object with caption"
- [2:25](https://www.youtube.com/watch?v=KmuTVkodRXM&t=145s) "al name space it's a text 500 field and it was also added to the dropdown to the uh group field group"
- [4:46](https://www.youtube.com/watch?v=KmuTVkodRXM&t=286s) "the table is part of namespace system reflection. So that's how that's how it goes."
- [6:52](https://www.youtube.com/watch?v=KmuTVkodRXM&t=412s) "now that it will display the type the al name space of that record id in which a al name space that"
