---
id: guideline/microsoft/knowledge/events/add-new-event-parameters-at-the-end
type: guideline
title: Event parameter additions depend on publisher access, not position
summary: Event subscribers bind publisher parameters by name and can omit parameters they do not use. A local or internal Business or Integration event can therefore gain a parameter at any position without breaking subscriber-only consumers; appending is not a compatibility requirement.
tier: official
language: en
tags:
  - event-parameters
  - signature
  - backward-compatibility
  - public-event
  - local-event
  - internal-event
  - appsourcecop
  - as0024
  - as0025
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:26.668Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 418a50f0f59d6adb620d7e5a53156f01c43c407d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/add-new-event-parameters-at-the-end.md
    title: "microsoft/BCQuality: Event parameter additions depend on publisher access, not position"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/98
repo_path: microsoft/knowledge/events/add-new-event-parameters-at-the-end.md
layer: microsoft
kind: rule
domain: events
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Event parameter additions depend on publisher access, not position

> Event subscribers bind publisher parameters by name and can omit parameters they do not use. A local or internal Business or Integration event can therefore gain a parameter at any position without breaking subscriber-only consumers; appending is not a compatibility requirement.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/add-new-event-parameters-at-the-end.md) · microsoft layer · events · BC all · tier official · derived

## Description

Event subscribers bind publisher parameters by name and can omit parameters they do not use. A `local` or `internal` Business or Integration event can therefore gain a parameter at any position without breaking subscriber-only consumers; appending is not a compatibility requirement. A public event is also a public procedure that dependent extensions can raise, so adding a required parameter anywhere breaks callers under AppSourceCop AS0024.

## Best Practice

Add a parameter directly only when the shipped event publisher is `local` or `internal`. Place it where the signature is clearest; existing subscribers continue binding the parameters they name. For a public event, keep the original publisher unchanged and introduce a new event with the expanded contract.

See sample: [`add-new-event-parameters-at-the-end.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/add-new-event-parameters-at-the-end.good.al).

## Anti Pattern

Appending a parameter to a public event and assuming its position makes the change compatible. Existing external callers still lack the new required argument. Conversely, do not flag a parameter inserted among existing parameters on a `local` or `internal` Business or Integration event merely because it was not appended.

See sample: [`add-new-event-parameters-at-the-end.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/add-new-event-parameters-at-the-end.bad.al).

## Examples

- [Good: add-new-event-parameters-at-the-end.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/add-new-event-parameters-at-the-end.good.al)
- [Bad: add-new-event-parameters-at-the-end.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/add-new-event-parameters-at-the-end.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#98 Add P0 event and interface compatibility knowledge](../../../../changes/bcquality/98.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
