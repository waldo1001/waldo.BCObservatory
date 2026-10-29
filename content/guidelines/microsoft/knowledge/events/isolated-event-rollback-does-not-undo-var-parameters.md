---
id: guideline/microsoft/knowledge/events/isolated-event-rollback-does-not-undo-var-parameters
type: guideline
title: An isolated event's rollback does not undo var parameters or other in-memory state
summary: When a subscriber to an isolated event fails, the platform rolls back only the Insert, Modify, and Delete calls it made on normal tables.
tier: official
language: en
tags:
  - isolated-event
  - isolated
  - var-parameter
  - ishandled
  - onbefore
  - integration-event
  - rollback
  - subscriber-error
  - side-effects
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:15.957Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ed36f094bcb4ce1a1f0fc2f603e3629a72d1b3e0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-event-rollback-does-not-undo-var-parameters.md
    title: "microsoft/BCQuality: An isolated event's rollback does not undo var parameters or other in-memory state"
    date: "2026-10-20"
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
    - change/bcquality/228
repo_path: microsoft/knowledge/events/isolated-event-rollback-does-not-undo-var-parameters.md
layer: microsoft
kind: rule
domain: events
bc_version:
  - 20..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - IsHandled
---

# An isolated event's rollback does not undo var parameters or other in-memory state

> When a subscriber to an isolated event fails, the platform rolls back only the Insert, Modify, and Delete calls it made on normal tables.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-event-rollback-does-not-undo-var-parameters.md) · microsoft layer · events · BC 20.. · tier official · derived

## Description

When a subscriber to an isolated event fails, the platform rolls back only the `Insert`, `Modify`, and `Delete` calls it made on normal tables. Everything else the subscriber changed before the error survives: values assigned to `var` parameters (including `IsHandled`), fields of a `var` record that were never written, globals of single-instance codeunits, temporary-table contents, and external effects such as HTTP calls. Execution then continues with the next subscriber and returns to the publisher as if nothing went wrong.

Reviewers and authoring agents tend to read "isolated" as "a failed subscriber leaves no trace", so they design isolated events with `var` result parameters or an `IsHandled` switch. A subscriber that sets `IsHandled := true` and then errors makes the publisher skip its default behaviour, even though the subscriber's own work was rolled back.

## Best Practice

Use isolated events for notifications: pass parameters by value and let subscribers act on their own data. When the publisher needs a decision or a result from extensions, publish a normal (non-isolated) event so subscriber errors propagate and the publisher never consumes a half-applied result.

If an isolated event must carry `var` data for compatibility, the publisher must validate the returned values before using them and must not let a returned flag bypass required logic.

See sample: [`isolated-event-rollback-does-not-undo-var-parameters.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-event-rollback-does-not-undo-var-parameters.good.al).

## Anti Pattern

An event declared with `Isolated = true` whose signature includes `var IsHandled`, a `var` result value, or a `var` record the publisher reads afterwards, where the publisher changes its behaviour based on those values. A failing subscriber can leave them modified while its database writes are rolled back, so the publisher acts on a decision nobody completed.

Changing the `Isolated` flag of an event that has already shipped is a separate contract problem covered by [do-not-change-shipped-event-attribute-flags](do-not-change-shipped-event-attribute-flags.md); this article is about the design of new isolated events.

See sample: [`isolated-event-rollback-does-not-undo-var-parameters.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-event-rollback-does-not-undo-var-parameters.bad.al).

## References

[Isolated events in AL, Rollback](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-events-isolated#rollback): only Modify/Delete/Insert on normal tables are rolled back; HTTP calls, variable changes, and single-instance codeunit members are not, and a `var` integer modified by a failing subscriber keeps its change.

## Examples

- [Good: isolated-event-rollback-does-not-undo-var-parameters.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-event-rollback-does-not-undo-var-parameters.good.al)
- [Bad: isolated-event-rollback-does-not-undo-var-parameters.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-event-rollback-does-not-undo-var-parameters.bad.al)

## Changed by

- [#228 Knowledge: isolated events, FilterGroup scope, BLOB CalcFields and stream text encoding](../../../../changes/bcquality/228.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
