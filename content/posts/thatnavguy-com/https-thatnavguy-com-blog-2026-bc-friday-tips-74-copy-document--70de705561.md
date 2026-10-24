---
id: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-74-copy-document--70de705561
type: post
title: "BC Friday Tips #74 Copy Document and Custom Field"
summary: When adding custom fields to Sales Header or Sales Invoice Header tables, developers must consider how the Copy Document feature will handle those fields. The post explains that custom fields are automatically copied along with documents, requiring developers to decide whether values should be copied, cleared, or recalculated to maintain data integrity.
tier: community
language: en
tags:
  - copy document
  - custom fields
  - sales header
  - data integrity
  - al development
system: sales
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:54:36.372Z"
  flags: []
generated:
  at: "2026-10-24T01:02:25.817Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 91d2081fd023c776064f3952909bfcdc6c9c5a8b0bf6e527c590947f103ea281
evidence:
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/
    title: "BC Friday Tips #74 Copy Document and Custom Field"
    date: "2026-06-26"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/
    title: "BC Friday Tips #74 Copy Document and Custom Field"
    date: "2026-06-26"
    commit: null
    t: null
    quote: If users use Copy Document, your custom field will be copied too.
  - kind: blog
    url: https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/
    title: "BC Friday Tips #74 Copy Document and Custom Field"
    date: "2026-06-26"
    commit: null
    t: null
    quote: A small design decision now can prevent a lot of problems later.
links:
  learn: []
  objects:
    - object/table/36
    - object/table/112
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  related:
    - to: post/gerardorenteria-blog/15143
      title: 🧩 Deriving dimensions in Business Central beyond Default Dimensions
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/aardvarklabs-blog/3837
      title: Background Page Tasks in Business Central Explained
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-483274250682537951--01a78739b7
      title: BC 29 lets a single index span base table and table extension fields
      label: possibly related
      why: both name Table 112 "Sales Invoice Header"
      by: code
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea
      title: "BC Friday Tips #56 Understand Missing Fields in Copy Documents"
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-77-testfield-show-record-action--16034e644a
      title: "BC Friday Tips #77 TestField Show Record Action"
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2025-d365-business-central-how-to-fix-missing-sales-invoices-in-the-api--9b9a0831d9
      title: "D365 Business Central: How to Fix Missing Sales Invoices in the API"
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/aardvarklabs-blog/3118
      title: Leveraging RecordRef and FieldRef for Dynamic Coding
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/aardvarklabs-blog/4056
      title: "Smarter Keys, Better Performance: Exploring Business Central v29 Index Updates"
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/duiliotacconi-com/1667
      title: Sorting by Type and Line No. in Sales and Purchase Postings
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/types-of-events-for-extensibility
      title: Types of events for extensibility
      label: possibly related
      why: names Table 36 "Sales Header"
      by: code
post_id: https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/
source_id: thatnavguy-com
source_name: That NAV Guy
url: https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/
published_at: "2026-06-26T00:00:00.000Z"
author: Teddy Herryanto
full_text: false
words: 122
quotes:
  - text: If users use Copy Document, your custom field will be copied too.
    why_it_matters: This explains that custom fields are not exempt from Copy Document behavior, making developers responsible for controlling this behavior
  - text: A small design decision now can prevent a lot of problems later.
    why_it_matters: This emphasizes the importance of planning Copy Document behavior upfront rather than fixing it reactively
code_objects_mentioned:
  - table Sales Header
  - table Sales Invoice Header
systems:
  - sales
  - development
versions_mentioned: []
cautions:
  - kind: gotcha
    quote: If users use Copy Document, your custom field will be copied too.
    objects: []
    events: []
    versions: []
  - kind: warning
    quote: Should this value be copied? Should it be cleared? Should it be recalculated?
    objects:
      - type: table
        name: Sales Header
      - type: table
        name: Sales Invoice Header
    events: []
    versions: []
preview:
  embeddable: true
  frame_url: null
  image: https://thatnavguy.com/_astro/CopyDocument.DLm8tooG_Z2d0HU3.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://thatnavguy.com/favicon.svg
  probed_at: "2026-10-07T11:50:25.803Z"
---

# BC Friday Tips #74 Copy Document and Custom Field

[Read the post](https://thatnavguy.com/blog/2026/bc-friday-tips-74-copy-document/) · That NAV Guy (Teddy Herryanto, MVP) · 2026-06-26 · 122 words · tier community · reviewed (checked by Opus)

> When adding custom fields to Sales Header or Sales Invoice Header tables, developers must consider how the Copy Document feature will handle those fields. The post explains that custom fields are automatically copied along with documents, requiring developers to decide whether values should be copied, cleared, or recalculated to maintain data integrity.

## Key points

- Custom fields added to Sales tables are automatically included when users copy documents
- Developers must determine for each field whether its value should be copied, cleared, or recalculated
- Improper Copy Document behavior can introduce invalid data and cause process issues
- Field design decisions at creation time prevent problems during document operations

## Quotes

- "If users use Copy Document, your custom field will be copied too." (This explains that custom fields are not exempt from Copy Document behavior, making developers responsible for controlling this behavior)
- "A small design decision now can prevent a lot of problems later." (This emphasizes the importance of planning Copy Document behavior upfront rather than fixing it reactively)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- [table 36 "Sales Header"](../../objects/table/36.md)
- [table 112 "Sales Invoice Header"](../../objects/table/112.md)

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [🧩 Deriving dimensions in Business Central beyond Default Dimensions](../../posts/gerardorenteria-blog/15143.md) — possibly related: both name Table 36 "Sales Header"
- [Background Page Tasks in Business Central Explained](../../posts/aardvarklabs-blog/3837.md) — possibly related: both name Table 36 "Sales Header"
- [BC 29 lets a single index span base table and table extension fields](../../posts/mohana-blog/tag-blogger-com-1999-blog-1492436440038408053-post-483274250682537951--01a78739b7.md) — possibly related: both name Table 112 "Sales Invoice Header"
- [BC Friday Tips #56 Understand Missing Fields in Copy Documents](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea.md) — possibly related: both name Table 36 "Sales Header"
- [BC Friday Tips #77 TestField Show Record Action](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-77-testfield-show-record-action--16034e644a.md) — possibly related: both name Table 36 "Sales Header"
- [D365 Business Central: How to Fix Missing Sales Invoices in the API](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-d365-business-central-how-to-fix-missing-sales-invoices-in-the-api--9b9a0831d9.md) — possibly related: both name Table 36 "Sales Header"
- [Leveraging RecordRef and FieldRef for Dynamic Coding](../../posts/aardvarklabs-blog/3118.md) — possibly related: both name Table 36 "Sales Header"
- [Smarter Keys, Better Performance: Exploring Business Central v29 Index Updates](../../posts/aardvarklabs-blog/4056.md) — possibly related: both name Table 36 "Sales Header"
- [Sorting by Type and Line No. in Sales and Purchase Postings](../../posts/duiliotacconi-com/1667.md) — possibly related: both name Table 36 "Sales Header"
- [Types of events for extensibility](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/types-of-events-for-extensibility) — possibly related: names Table 36 "Sales Header"

## Heads up

- gotcha: "If users use Copy Document, your custom field will be copied too."
- warning: "Should this value be copied? Should it be cleared? Should it be recalculated?" (about table Sales Header, table Sales Invoice Header)

## Context

- Features: Copy Document, Custom Fields

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
