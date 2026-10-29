---
id: guideline/microsoft/knowledge/security/integrationevent-var-parameter-bypasses-security-guards
type: guideline
title: Do not expose security guards as `var` parameters on IntegrationEvent
summary: "A var parameter on an [IntegrationEvent] is a mutable hook: any subscriber can overwrite the value and the publisher will see the new value when control returns."
tier: official
language: en
tags:
  - integrationevent
  - var
  - guard
  - ishandled
  - bypass
  - security-check
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:51.806Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1edcb196cea420cbd1525e387affd28b859c0085
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-var-parameter-bypasses-security-guards.md
    title: "microsoft/BCQuality: Do not expose security guards as `var` parameters on IntegrationEvent"
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
repo_path: microsoft/knowledge/security/integrationevent-var-parameter-bypasses-security-guards.md
layer: microsoft
kind: rule
domain: security
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
  - IntegrationEvent
  - HasAccess
  - IsAllowed
  - SkipValidation
  - BypassCheck
  - IsAuthorized
---

# Do not expose security guards as `var` parameters on IntegrationEvent

> A var parameter on an [IntegrationEvent] is a mutable hook: any subscriber can overwrite the value and the publisher will see the new value when control returns.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-var-parameter-bypasses-security-guards.md) · microsoft layer · security · BC all · tier official · derived

## Description

A `var` parameter on an `[IntegrationEvent]` is a mutable hook: any subscriber can overwrite the value and the publisher will see the new value when control returns. That is the right shape for "let an extension contribute to a payload"; it is the wrong shape for "let an extension confirm a security decision". A `var HasAccess: Boolean` or `var SkipValidation: Boolean` lets any subscriber on the tenant flip the result of the publisher's permission check to `true` (or set "skip" to `true`) before the publisher reads it. The publisher's check becomes advisory, which is the same as not having a check.

## Best Practice

Keep the security decision inside the publisher, where it is not bypassable. Fire an `OnAfter*` informational event after the check completes, with the result passed by value (not `var`) so subscribers can react — log, audit, surface a warning — but cannot rewrite the outcome. When subscribers legitimately need to add their own checks, expose an `OnAfterCheckPermissions(...)` that can only tighten access (e.g., a subscriber can `Error()`), never loosen it. See sample: [`integrationevent-var-parameter-bypasses-security-guards.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-var-parameter-bypasses-security-guards.good.al).

## Anti Pattern

`OnBeforeCheckPermissions(var HasAccess: Boolean; var SkipValidation: Boolean; TableNo: Integer)`, followed in the caller by `if SkipValidation then exit;`. Any subscriber sets `SkipValidation := true` and the check is gone. Reviewers should flag any `IntegrationEvent` whose signature contains a `var Boolean` whose name reads like a security decision (`HasAccess`, `IsAllowed`, `SkipValidation`, `BypassCheck`, `IsAuthorized`). See sample: [`integrationevent-var-parameter-bypasses-security-guards.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-var-parameter-bypasses-security-guards.bad.al).

## Examples

- [Good: integrationevent-var-parameter-bypasses-security-guards.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-var-parameter-bypasses-security-guards.good.al)
- [Bad: integrationevent-var-parameter-bypasses-security-guards.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/integrationevent-var-parameter-bypasses-security-guards.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
