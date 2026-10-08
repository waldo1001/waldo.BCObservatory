---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-77-testfield-show-record-action--16034e644a
type: post
title: "BC Friday Tips #77 TestField Show Record Action"
summary: TestField automatically adds a Show Record button to error dialogs when field validation fails, letting users jump directly to the problem record. This feature works natively for tables with single primary keys like Customer, but not for compound primary key tables like Sales Header.
tier: community
language: en
tags:
  - testfield
  - error handling
  - validation
  - user experience
  - al development
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:54:08.766Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 0ab7c0a61d1c491053ce87096479d1723b62e91cfb5c4915b5cbadf9405d63be
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-77-testfield-show-record-action/
    title: "BC Friday Tips #77 TestField Show Record Action"
    date: "2026-07-31"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-77-testfield-show-record-action/
    title: "BC Friday Tips #77 TestField Show Record Action"
    date: "2026-07-31"
    commit: null
    t: null
    quote: When TestField fails, Business Central can give users a direct action to open the record and fix the problem.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-77-testfield-show-record-action/
    title: "BC Friday Tips #77 TestField Show Record Action"
    date: "2026-07-31"
    commit: null
    t: null
    quote: Business Central resolves the target page from the Card page whose SourceTable matches the failing record's table.
links:
  learn: []
  objects:
    - object/table/18
    - object/table/36
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://thatnavguy.com/blog/2026/bc-friday-tips-77-testfield-show-record-action/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-friday-tips-77-testfield-show-record-action/
published_at: "2026-07-31T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 163
quotes:
  - text: When TestField fails, Business Central can give users a direct action to open the record and fix the problem.
    why_it_matters: Explains the core benefit of TestField's Show Record functionality
  - text: Business Central resolves the target page from the Card page whose SourceTable matches the failing record's table.
    why_it_matters: Clarifies the mechanism for how the platform determines which page to show
code_objects_mentioned:
  - table Customer
  - table Sales Header
systems:
  - development
  - platform
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/_astro/Customer-TestField-Without-Value.BUEHBqsH_28Bvrq.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:50:20.167Z"
---

# BC Friday Tips #77 TestField Show Record Action

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-77-testfield-show-record-action/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-07-31 · 163 words · tier community · reviewed (checked by Opus)

> TestField automatically adds a Show Record button to error dialogs when field validation fails, letting users jump directly to the problem record. This feature works natively for tables with single primary keys like Customer, but not for compound primary key tables like Sales Header.

## Key points

- TestField can automatically generate a Show Record action without requiring ErrorInfo code
- Business Central resolves the target page from Card pages matching the failing record's table
- Feature works for single primary key tables but not compound primary key tables
- Users can directly open and fix problematic records instead of manually searching

## Quotes

- "When TestField fails, Business Central can give users a direct action to open the record and fix the problem." (Explains the core benefit of TestField's Show Record functionality)
- "Business Central resolves the target page from the Card page whose SourceTable matches the failing record's table." (Clarifies the mechanism for how the platform determines which page to show)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 18 "Customer"](../../objects/table/18.md)
- [table 36 "Sales Header"](../../objects/table/36.md)

## Context

- Features: TestField method, Show Record action, error dialogs, field validation

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
