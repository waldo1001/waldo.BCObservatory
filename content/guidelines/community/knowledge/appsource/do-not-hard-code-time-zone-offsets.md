---
id: guideline/community/knowledge/appsource/do-not-hard-code-time-zone-offsets
type: guideline
title: Do not hard-code time-zone offsets
summary: Marketplace extensions run for users and services in many time zones. Adding a fixed offset to a DateTime assumes one locale, ignores daylight-saving transitions, and changes an absolute timestamp into an incorrect value for other regions.
tier: official
language: en
tags:
  - datetime
  - time-zone
  - utc
  - currentdatetime
  - locale
  - regional-settings
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:11.167Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 935b4d56ae791b7b973f08d88675ed60e0d6a946
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/do-not-hard-code-time-zone-offsets.md
    title: "microsoft/BCQuality: Do not hard-code time-zone offsets"
    date: "2026-09-14"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-currentdatetime-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/142
repo_path: community/knowledge/appsource/do-not-hard-code-time-zone-offsets.md
layer: community
kind: rule
domain: appsource
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - DateTime
  - CurrentDateTime
---

# Do not hard-code time-zone offsets

> Marketplace extensions run for users and services in many time zones. Adding a fixed offset to a DateTime assumes one locale, ignores daylight-saving transitions, and changes an absolute timestamp into an incorrect value for other regions.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/do-not-hard-code-time-zone-offsets.md) · community layer · appsource · BC all · tier official · derived

## Description

Marketplace extensions run for users and services in many time zones. Adding a fixed offset to a `DateTime` assumes one locale, ignores daylight-saving transitions, and changes an absolute timestamp into an incorrect value for other regions.

## Best Practice

Store and compare `DateTime` values without a manually applied regional offset. Business Central stores `DateTime` values in UTC and presents them according to the client time zone. Keep service contracts time-zone explicit and perform a conversion only when the business requirement identifies a particular zone.

See sample: [`do-not-hard-code-time-zone-offsets.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/do-not-hard-code-time-zone-offsets.good.al).

## Anti Pattern

Adding or subtracting a fixed duration solely to convert `CurrentDateTime` or another timestamp to an assumed local time. Detection signals include fixed hour-sized millisecond values near `DateTime` assignments and comments naming a specific time zone; confirm the duration is an offset rather than a legitimate deadline or schedule interval.

See sample: [`do-not-hard-code-time-zone-offsets.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/do-not-hard-code-time-zone-offsets.bad.al).

## Examples

- [Good: do-not-hard-code-time-zone-offsets.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/do-not-hard-code-time-zone-offsets.good.al)
- [Bad: do-not-hard-code-time-zone-offsets.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/appsource/do-not-hard-code-time-zone-offsets.bad.al)

## Names

- [System.CurrentDateTime() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-currentdatetime-method) (names CurrentDateTime)

## Changed by

- [#142 Add AL-focused AppSource validation guidance](../../../../changes/bcquality/142.md), 2026-09-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
