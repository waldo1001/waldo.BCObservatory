---
id: guideline/microsoft/knowledge/events/expose-process-context-via-manually-bound-flag
type: guideline
title: Expose process context through a manually bound flag, not a single-instance boolean
summary: 'When an extension drives a process over shared code — a base application report, a posting routine — other extensions hooked into that code cannot tell whether a run belongs to that process: AL keeps no ambient "current process", so the driving app has to publish the context itself.'
tier: official
language: en
tags:
  - bindsubscription
  - manual-binding
  - eventsubscriberinstance
  - internalevent
  - singleinstance
  - process-context
  - running-flag
  - scoped-state
  - rollback
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:27.459Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 802b7b00be358bec4eceb25e44613ceeac390e4d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/expose-process-context-via-manually-bound-flag.md
    title: "microsoft/BCQuality: Expose process context through a manually bound flag, not a single-instance boolean"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-bindsubscription-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-unbindsubscription-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/153
repo_path: microsoft/knowledge/events/expose-process-context-via-manually-bound-flag.md
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
identifiers:
  - SingleInstance
  - BindSubscription
  - UnbindSubscription
---

# Expose process context through a manually bound flag, not a single-instance boolean

> When an extension drives a process over shared code — a base application report, a posting routine — other extensions hooked into that code cannot tell whether a run belongs to that process: AL keeps no ambient "current process", so the driving app has to publish the context itself.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/expose-process-context-via-manually-bound-flag.md) · microsoft layer · events · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

When an extension drives a process over shared code — a base application report, a posting routine — other extensions hooked into that code cannot tell whether a run belongs to that process: AL keeps no ambient "current process", so the driving app has to publish the context itself. The reflex answer, a `SingleInstance` codeunit holding a boolean set at the start of the run and cleared at the end, is unsafe: single-instance variables are not part of the database transaction, so a failed run rolls back the writes but not the flag, which stays `true` until the company is closed and marks every later run in the session as part of the process. A manual event binding carries the same signal safely, because the platform ties its lifetime to a variable's scope instead of to cleanup code that has to run.

## Best Practice

Publish the context as a query and let the binding itself be the state. One procedure is public; everything behind it is internal:

- A public context codeunit exposes `IsProcessRunning(): Boolean`, which raises an `[InternalEvent]` publisher taking a `var Boolean` and returns what comes back — the entire public surface. The publisher is internal because only the owning app subscribes, `local` because only this codeunit raises it.
- A second codeunit, `Access = Internal` with `EventSubscriberInstance = Manual`, subscribes to that event and sets the boolean to `true`. Internal keeps it out of the API and stops other apps binding it to forge the context; it stores nothing between runs — being bound *is* the state.
- The driving process calls `BindSubscription` on a variable whose scope is exactly the span it wants to claim: a local in the procedure that drives the run, or a global on an object that lives exactly as long as the run. While that variable is alive the query answers `true`; when it leaves scope — normally, or because an error unwound the call stack — the platform removes the binding and the query answers `false` again.

Bind a fresh instance per run rather than reusing one: the platform refuses to bind the same instance twice but accepts several instances of the same codeunit, so nesting and re-entrancy need no counter. The binding is session-scoped, so work the process starts in another session — a background session, a page background task, a job queue entry — cannot see it; pass the context explicitly there.

See sample: [`expose-process-context-via-manually-bound-flag.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/expose-process-context-via-manually-bound-flag.good.al).

## Anti Pattern

Two shapes.

First, the single-instance boolean — the failure described above. Detection: a `SingleInstance = true` codeunit with a boolean set before a process and cleared after it, read by other code to decide whether that process is running.

Second, the context kept private: the driving app arranges its own marker — typically a manually bound subscriber on an event added for its benefit alone — and offers no query, or only an `internal` one. Other extensions are left inferring the context from side effects, request-page values, or record state, which breaks silently the first time the process changes. Detection: a manual binding used purely as an internal run marker, with no public query procedure over it.

The mirror-image anti-pattern belongs to the reviewer: flagging the `BindSubscription` here as a leaked binding because no `UnbindSubscription` follows it. Scope release is the mechanism, not an omission — see `microsoft/knowledge/events/choose-static-vs-manual-subscribers-deliberately.md`, whose leak case is an instance parked on a `SingleInstance` global that never leaves scope.

See sample: [`expose-process-context-via-manually-bound-flag.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/expose-process-context-via-manually-bound-flag.bad.al).

## Examples

- [Good: expose-process-context-via-manually-bound-flag.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/expose-process-context-via-manually-bound-flag.good.al)
- [Bad: expose-process-context-via-manually-bound-flag.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/expose-process-context-via-manually-bound-flag.bad.al)

## Names

- [Session.BindSubscription(Codeunit) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-bindsubscription-method) (names BindSubscription)
- [Session.UnbindSubscription(Codeunit) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-unbindsubscription-method) (names UnbindSubscription)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
