---
id: guideline/microsoft/knowledge/events/isolated-events-are-isolated-only-outside-a-write-transaction
type: guideline
title: Isolated events are isolated only when no write transaction is open
summary: "Setting Isolated = true on a BusinessEvent, IntegrationEvent, or InternalEvent (runtime 9.0 / BC20 and later) runs each subscriber in its own transaction: a failing subscriber is rolled back and the next subscriber, then the caller, continue."
tier: official
language: en
tags:
  - isolated-event
  - isolated
  - write-transaction
  - commit
  - modify
  - uncommitted-write
  - subscriber-error
  - rollback
  - integration-event
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:15.992Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0975e5735407927e94da9765a74c9e57e09f1a0f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-events-are-isolated-only-outside-a-write-transaction.md
    title: "microsoft/BCQuality: Isolated events are isolated only when no write transaction is open"
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
repo_path: microsoft/knowledge/events/isolated-events-are-isolated-only-outside-a-write-transaction.md
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
  - BusinessEvent
  - IntegrationEvent
  - InternalEvent
---

# Isolated events are isolated only when no write transaction is open

> Setting Isolated = true on a BusinessEvent, IntegrationEvent, or InternalEvent (runtime 9.0 / BC20 and later) runs each subscriber in its own transaction: a failing subscriber is rolled back and the next subscriber, then the caller, continue.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-events-are-isolated-only-outside-a-write-transaction.md) · microsoft layer · events · BC 20.. · tier official · derived

## Description

Setting `Isolated = true` on a `BusinessEvent`, `IntegrationEvent`, or `InternalEvent` (runtime 9.0 / BC20 and later) runs each subscriber in its own transaction: a failing subscriber is rolled back and the next subscriber, then the caller, continue. The platform only does this when the publisher is raised from a read-only transaction. When the caller has already written to the database and not committed, the isolated event is invoked like a normal event, so a subscriber error fails the whole operation. The same fallback applies during extension install, uninstall, and upgrade.

An agent that sees `Isolated = true` tends to assume subscriber errors can never reach the caller, and either skips error handling around the raise or adds a `Commit()` right before it to "make isolation work". The first leaves a hidden failure path; the second splits a business transaction that was meant to be atomic.

## Best Practice

Raise an isolated event at a point where the transaction is naturally read-only or already committed, for example after the posting routine has finished and committed, or from a job queue entry, page action, or notification handler that has written nothing yet. Treat isolation as a way to keep optional, non-critical subscribers (telemetry, notifications, external sync) from breaking the publisher, not as a guarantee.

If the event must be raised in the middle of a write transaction, design it as a normal event and document that subscriber errors propagate. When error isolation is genuinely needed there, move the optional work after the commit point or into a separate `Codeunit.Run` / background task, which is easier to test than an isolated event.

See sample: [`isolated-events-are-isolated-only-outside-a-write-transaction.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-events-are-isolated-only-outside-a-write-transaction.good.al).

## Anti Pattern

An isolated event raised after uncommitted `Insert`/`Modify`/`Delete` calls in the same transaction, with code or comments relying on subscriber errors being contained. The subscriber runs non-isolated and its error rolls back the caller's work.

Equally wrong is inserting `Commit()` immediately before the raise inside a posting, release, or other all-or-nothing routine just to obtain isolation: a later failure now leaves the first half of the operation committed.

Do not flag an isolated event raised from a read-only context or after the routine's own completed commit, and do not flag a normal (non-isolated) event for lacking isolation.

See sample: [`isolated-events-are-isolated-only-outside-a-write-transaction.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-events-are-isolated-only-outside-a-write-transaction.bad.al).

## References

[Isolated events in AL](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-events-isolated) (write transactions must be committed before the event; install and upgrade run isolated events normally) and [Types of events for extensibility](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/types-of-events-for-extensibility#isolated-events) (isolated events need a commit before invoking and a detailed review; `Codeunit.Run` as the alternative).

## Examples

- [Good: isolated-events-are-isolated-only-outside-a-write-transaction.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-events-are-isolated-only-outside-a-write-transaction.good.al)
- [Bad: isolated-events-are-isolated-only-outside-a-write-transaction.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/isolated-events-are-isolated-only-outside-a-write-transaction.bad.al)

## Changed by

- [#228 Knowledge: isolated events, FilterGroup scope, BLOB CalcFields and stream text encoding](../../../../changes/bcquality/228.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
