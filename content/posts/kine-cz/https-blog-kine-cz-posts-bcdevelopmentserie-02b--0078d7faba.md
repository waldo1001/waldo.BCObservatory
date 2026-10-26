---
id: post/kine-cz/https-blog-kine-cz-posts-bcdevelopmentserie-02b--0078d7faba
type: post
title: "Business Central Development Serie - Part 2b: AI for BC Development — The Knowledge Gap That Ships to Production"
summary: AI-generated Business Central code can compile and appear functional while containing hidden bugs that silently corrupt data or cause performance issues. Developers must validate AI output across architecture, performance, standard processes, testing, security, and localization before production use, requiring broad domain expertise and proper guardrails.
tier: community
language: en
tags:
  - ai-assisted development
  - code quality
  - validate calls
  - performance
  - testing
  - security
  - item tracking
  - production readiness
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:56:04.075Z"
  flags: []
generated:
  at: "2026-10-26T05:30:48.114Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: a12391fba06af3db8ac1d66cca03e928c0b3d4f8f883289bdab3e0c6163a852e
evidence:
  - kind: blog
    url: https://blog.kine.cz/posts/bcdevelopmentserie-02b/
    title: "Business Central Development Serie - Part 2b: AI for BC Development — The Knowledge Gap That Ships to Production"
    date: "2026-03-30"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://blog.kine.cz/posts/bcdevelopmentserie-02b/
    title: "Business Central Development Serie - Part 2b: AI for BC Development — The Knowledge Gap That Ships to Production"
    date: "2026-03-30"
    commit: null
    t: null
    quote: We are drowning not in lies - but in plausible truths.
  - kind: blog
    url: https://blog.kine.cz/posts/bcdevelopmentserie-02b/
    title: "Business Central Development Serie - Part 2b: AI for BC Development — The Knowledge Gap That Ships to Production"
    date: "2026-03-30"
    commit: null
    t: null
    quote: AI is not a shortcut past expertise. It is an amplifier of expertise.
  - kind: blog
    url: https://blog.kine.cz/posts/bcdevelopmentserie-02b/
    title: "Business Central Development Serie - Part 2b: AI for BC Development — The Knowledge Gap That Ships to Production"
    date: "2026-03-30"
    commit: null
    t: null
    quote: The gate must be at the input. Encode your rules before the agent writes.
links:
  learn: []
  objects:
    - object/table/37
    - object/table/337
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  related:
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea
      title: "BC Friday Tips #56 Understand Missing Fields in Copy Documents"
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-84-item-missing-from-sales-line-lookup--ac89a8fbc6
      title: "BC Friday Tips #84 Why Is Your Item Missing from the Sales Line Lookup?"
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: post/yzhums-com/74172
      title: "Dynamics 365 Business Central: How to flow/pass custom field values from Sales Order to Production Order"
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: post/aardvarklabs-blog/1891
      title: Implementing a Multi-Step Process for AI Recommendations in Business Central
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: post/duiliotacconi-com/2001
      title: Index Management with Dynamics 365 Business Central 2026 Wave 1
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: video/cZCSi6khZFo
      title: "Introducing: Sales Lines Suggestions with Copilot ( 2024 release wave 1)"
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
    - to: post/gerardorenteria-blog/15390
      title: New Application Ideas of Dynamics 365 Business Central (2026 AUG)
      label: possibly related
      why: both name Table 337 "Reservation Entry"
      by: code
    - to: post/duiliotacconi-com/1667
      title: Sorting by Type and Line No. in Sales and Purchase Postings
      label: possibly related
      why: both name Table 37 "Sales Line"
      by: code
post_id: https://blog.kine.cz/posts/bcdevelopmentserie-02b/
source_id: kine-cz
source_name: Kine's info
url: https://blog.kine.cz/posts/bcdevelopmentserie-02b/
published_at: "2026-03-30T23:00:00.000Z"
author: Kamil Sacek
full_text: false
words: 3635
quotes:
  - text: We are drowning not in lies - but in plausible truths.
    why_it_matters: "Captures the core risk of AI-generated code: it looks correct and functions initially but contains hidden flaws that cause costly production failures in financial systems"
  - text: AI is not a shortcut past expertise. It is an amplifier of expertise.
    why_it_matters: Reframes AI's role as dependent on existing knowledge; poor guardrails amplify mistakes rather than reduce risk
  - text: The gate must be at the input. Encode your rules before the agent writes.
    why_it_matters: Establishes that preventing problems through instructions is more effective than catching them in code review
code_objects_mentioned:
  - codeunit ItemTrackingManagement
  - codeunit ReservationEngineMgt
  - codeunit NoSeriesMgt
  - codeunit WhseManagement
  - codeunit GenJnlPostLine
  - codeunit SalesPost
  - codeunit PurchPost
  - table Sales Line
  - table Reservation Entry
systems:
  - development
  - platform
  - administration
versions_mentioned: []
cautions:
  - kind: warning
    quote: OnAfterGetRecord fires for every record shown in a list, on a page showing 50 Items, this executes 50 database queries.
    objects:
      - type: page
        name: page
    events:
      - OnAfterGetRecord
    versions: []
preview:
  embeddable: true
  frame_url: null
  image: https://blog.kine.cz/assets/BCDevSerie/BCDevSeriePart02.svg
  image_alt: "Business Central Development Serie - Part 2b: AI for BC Development — The Knowledge Gap That Ships to Production"
  image_w: null
  image_h: null
  site_name: Kine's info
  favicon: https://blog.kine.cz/favicon.ico?v=1
  probed_at: "2026-10-07T11:50:24.080Z"
---

# Business Central Development Serie - Part 2b: AI for BC Development — The Knowledge Gap That Ships to Production

[Read the post](https://blog.kine.cz/posts/bcdevelopmentserie-02b/) · Kine's info (Kamil Sacek, MVP) · 2026-03-30 · 3635 words · tier community · reviewed (checked by Opus)

> AI-generated Business Central code can compile and appear functional while containing hidden bugs that silently corrupt data or cause performance issues. Developers must validate AI output across architecture, performance, standard processes, testing, security, and localization before production use, requiring broad domain expertise and proper guardrails.

## Key points

- AI-generated AL code can compile and pass basic checks while hiding silent bugs: direct field assignment instead of Validate, filters on fields without keys, and database writes in OnAfterGetRecord.
- Writing Reservation Entry records directly, or building JSON with string concatenation instead of the built-in JSON types, breaks the standard BC infrastructure.
- Validating AI output takes knowledge across many areas: architecture, performance, standard codeunits, object design, upgrade code, locking, testing, CI/CD, security, telemetry, API integration and localization.
- Quality rules should be encoded in agent instructions and guardrails before generation, rather than relying on code review afterwards.
- AI is fine for proofs of concept, learning, low-risk changes and experienced teams with guardrails. It should not ship unvalidated or untested code to production.

## Quotes

- "We are drowning not in lies - but in plausible truths." (Captures the core risk of AI-generated code: it looks correct and functions initially but contains hidden flaws that cause costly production failures in financial systems)
- "AI is not a shortcut past expertise. It is an amplifier of expertise." (Reframes AI's role as dependent on existing knowledge; poor guardrails amplify mistakes rather than reduce risk)
- "The gate must be at the input. Encode your rules before the agent writes." (Establishes that preventing problems through instructions is more effective than catching them in code review)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- codeunit "ItemTrackingManagement"
- codeunit "ReservationEngineMgt"
- codeunit "NoSeriesMgt"
- codeunit "WhseManagement"
- codeunit "GenJnlPostLine"
- codeunit "SalesPost"
- codeunit "PurchPost"
- [table 37 "Sales Line"](../../objects/table/37.md)
- [table 337 "Reservation Entry"](../../objects/table/337.md)

Not found in BC28-30: codeunit "ItemTrackingManagement", codeunit "ReservationEngineMgt", codeunit "NoSeriesMgt", codeunit "WhseManagement", codeunit "GenJnlPostLine", codeunit "SalesPost", codeunit "PurchPost".

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [BC Friday Tips #56 Understand Missing Fields in Copy Documents](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-bc-friday-tips-56-understand-missing-fields-in-copy-documents--e98f782aea.md) — possibly related: both name Table 37 "Sales Line"
- [BC Friday Tips #84 Why Is Your Item Missing from the Sales Line Lookup?](../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-84-item-missing-from-sales-line-lookup--ac89a8fbc6.md) — possibly related: both name Table 37 "Sales Line"
- [Dynamics 365 Business Central: How to flow/pass custom field values from Sales Order to Production Order](../../posts/yzhums-com/74172.md) — possibly related: both name Table 37 "Sales Line"
- [Implementing a Multi-Step Process for AI Recommendations in Business Central](../../posts/aardvarklabs-blog/1891.md) — possibly related: both name Table 37 "Sales Line"
- [Index Management with Dynamics 365 Business Central 2026 Wave 1](../../posts/duiliotacconi-com/2001.md) — possibly related: both name Table 37 "Sales Line"
- [Introducing: Sales Lines Suggestions with Copilot ( 2024 release wave 1)](../../videos/cZCSi6khZFo.md) — possibly related: both name Table 37 "Sales Line"
- [New Application Ideas of Dynamics 365 Business Central (2026 AUG)](../../posts/gerardorenteria-blog/15390.md) — possibly related: both name Table 337 "Reservation Entry"
- [Sorting by Type and Line No. in Sales and Purchase Postings](../../posts/duiliotacconi-com/1667.md) — possibly related: both name Table 37 "Sales Line"

## Heads up

- warning: "OnAfterGetRecord fires for every record shown in a list, on a page showing 50 Items, this executes 50 database queries." (about page page, OnAfterGetRecord)

## Context

- Features: validate triggers, item tracking, permission sets, telemetry, error handling, API consumption, localization, JSON handling

Source: Kine's info, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
