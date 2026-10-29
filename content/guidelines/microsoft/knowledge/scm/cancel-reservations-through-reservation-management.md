---
id: guideline/microsoft/knowledge/scm/cancel-reservations-through-reservation-management
type: guideline
title: Cancel reservations through reservation management
summary: Persistent "Reservation Entry" rows are not disposable allocation markers. Reservation and Tracking links use an entry-number pair with opposite Positive values, while Surplus and Prospect entries can legitimately be unpaired.
tier: official
language: en
tags:
  - reservation-entry
  - cancelreservation
  - reservation-engine-mgt
  - reservation-status
  - order-tracking
  - disallow-cancellation
system: inventory
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:01.555Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1df3b125bb5653c894a7c6c9a0e9d7b563591477
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/cancel-reservations-through-reservation-management.md
    title: "microsoft/BCQuality: Cancel reservations through reservation management"
    date: "2026-09-21"
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
    - change/bcquality/192
    - change/bcquality/57
  related:
    - to: object/table/337
      title: table 337 "Reservation Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/scm/cancel-reservations-through-reservation-management.md
layer: microsoft
kind: rule
domain: scm
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
  - DeleteAll
---

# Cancel reservations through reservation management

> Persistent "Reservation Entry" rows are not disposable allocation markers. Reservation and Tracking links use an entry-number pair with opposite Positive values, while Surplus and Prospect entries can legitimately be unpaired.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/cancel-reservations-through-reservation-management.md) · microsoft layer · scm · BC all · tier official · derived

## Description

Persistent `"Reservation Entry"` rows are not disposable allocation markers. Reservation and Tracking links use an entry-number pair with opposite `Positive` values, while Surplus and Prospect entries can legitimately be unpaired. Cancelling a binding reservation must handle its counterpart and any remaining item tracking or order tracking, not just remove a row.

## Best Practice

Explicit cancellation of an existing binding reservation uses `"Reservation Engine Mgt.".CancelReservation`. It checks the reservation status and `"Disallow Cancellation"`, handles the counterpart, and preserves or retracks the remaining source quantities as appropriate. Source-line quantity changes have their own source-specific reservation management path.

Not every Reservation Entry has a partner or identical lot/serial values on both sides: Surplus/Prospect entries and supported late-binding scenarios have different relationships. Temporary buffers, engine-owned updates, and supported publisher metadata are not independent cancellation. Cancelling a reservation is also different from intentionally removing an item-tracking assignment.

The samples retrieve the negative side of a persistent sales-line reservation and cancel only the binding. They do not delete the sales line or remove its tracking specifications.

See sample: [`cancel-reservations-through-reservation-management.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/cancel-reservations-through-reservation-management.good.al).

## Anti Pattern

`Delete(true)`, `DeleteAll`, or a status/source rewrite on persistent `"Reservation Entry"` records does not perform binding-reservation cancellation. Even deleting both sides can discard tracking that should survive and omit retracking.

Normal processing of temporary Prospect/Surplus buffers is outside that cancellation workflow, and an unpaired row is not intrinsically an orphan.

See sample: [`cancel-reservations-through-reservation-management.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/cancel-reservations-through-reservation-management.bad.al).

## References

- [Reservation, order tracking, and action messaging](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-reservation-order-tracking-and-action-messaging)
- [Item tracking and reservations](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-item-tracking-and-reservations)
- [BaseApp reservation cancellation](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Tracking/ReservationEngineMgt.Codeunit.al#L51-L90)

## Examples

- [Good: cancel-reservations-through-reservation-management.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/cancel-reservations-through-reservation-management.good.al)
- [Bad: cancel-reservations-through-reservation-management.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/cancel-reservations-through-reservation-management.bad.al)

## Names

- [table 337 "Reservation Entry"](../../../../objects/table/337.md) (possibly related: a code span names it)

## Changed by

- [#192 Add SCM functional knowledge domain](../../../../changes/bcquality/192.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
