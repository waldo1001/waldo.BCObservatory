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
  at: "2026-10-24T01:02:25.817Z"
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
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea
      title: "BC Friday Tips #56 Understand Missing Fields in Copy Documents"
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-74-copy-document--70de705561
      title: "BC Friday Tips #74 Copy Document and Custom Field"
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
    - to: post/aardvarklabs-blog/3928
      title: Understanding Business Central’s Format Address Codeunit
      label: possibly related
      why: both name Table 36 "Sales Header"
      by: code
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
cautions:
  - kind: gotcha
    quote: But tables with compound primary keys, such as Sales Header, do not.
    objects:
      - type: table
        name: Sales Header
    events: []
    versions: []
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

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [🧩 Deriving dimensions in Business Central beyond Default Dimensions](../../posts/gerardorenteria-blog/15143.md) — possibly related: both name Table 36 "Sales Header"
- [Background Page Tasks in Business Central Explained](../../posts/aardvarklabs-blog/3837.md) — possibly related: both name Table 36 "Sales Header"
- [BC Friday Tips #56 Understand Missing Fields in Copy Documents](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea.md) — possibly related: both name Table 36 "Sales Header"
- [BC Friday Tips #74 Copy Document and Custom Field](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-74-copy-document--70de705561.md) — possibly related: both name Table 36 "Sales Header"
- [D365 Business Central: How to Fix Missing Sales Invoices in the API](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-d365-business-central-how-to-fix-missing-sales-invoices-in-the-api--9b9a0831d9.md) — possibly related: both name Table 36 "Sales Header"
- [Leveraging RecordRef and FieldRef for Dynamic Coding](../../posts/aardvarklabs-blog/3118.md) — possibly related: both name Table 36 "Sales Header"
- [Smarter Keys, Better Performance: Exploring Business Central v29 Index Updates](../../posts/aardvarklabs-blog/4056.md) — possibly related: both name Table 36 "Sales Header"
- [Sorting by Type and Line No. in Sales and Purchase Postings](../../posts/duiliotacconi-com/1667.md) — possibly related: both name Table 36 "Sales Header"
- [Types of events for extensibility](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/types-of-events-for-extensibility) — possibly related: names Table 36 "Sales Header"
- [Understanding Business Central’s Format Address Codeunit](../../posts/aardvarklabs-blog/3928.md) — possibly related: both name Table 36 "Sales Header"

## Heads up

- gotcha: "But tables with compound primary keys, such as Sales Header, do not." (about table Sales Header)

## Context

- Features: TestField method, Show Record action, error dialogs, field validation

Source: That NAV Guy, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
