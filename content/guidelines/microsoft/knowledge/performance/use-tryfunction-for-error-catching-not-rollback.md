---
id: guideline/microsoft/knowledge/performance/use-tryfunction-for-error-catching-not-rollback
type: guideline
title: Use [TryFunction] for error catching, Codeunit.Run for atomic rollback
summary: "[TryFunction] lets a caller catch an error, but database changes made before that error are not rolled back. The attribute catches; it does not unwind transaction state."
tier: official
language: en
tags:
  - try-function
  - try-method
  - error-handling
  - rollback
  - atomic
  - exception
  - get-last-error
  - session-buffer
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:44.186Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 41f751fbf8f60d93deba38789141c835827c5c6f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-tryfunction-for-error-catching-not-rollback.md
    title: "microsoft/BCQuality: Use [TryFunction] for error catching, Codeunit.Run for atomic rollback"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/debugger/debugger-getlasterrortext-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-getlasterrorcallstack-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-clearlasterror-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/108
repo_path: microsoft/knowledge/performance/use-tryfunction-for-error-catching-not-rollback.md
layer: microsoft
kind: rule
domain: performance
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
  - DisableWriteInsideTryFunctions
  - GetLastErrorText
  - GetLastErrorCallStack
  - ClearLastError
---

# Use [TryFunction] for error catching, Codeunit.Run for atomic rollback

> [TryFunction] lets a caller catch an error, but database changes made before that error are not rolled back. The attribute catches; it does not unwind transaction state.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-tryfunction-for-error-catching-not-rollback.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`[TryFunction]` lets a caller catch an error, but database changes made before that error are not rolled back. The attribute catches; it does not unwind transaction state. This is the critical distinction from `Codeunit.Run`, which can provide an atomic rollback boundary (see `codeunit-run-as-atomic-sub-operation.md`). On Business Central on-premises, writes inside a try method are blocked by default unless `DisableWriteInsideTryFunctions` is set to `false`; SaaS does not provide that server setting.

## Best Practice

Reach for `[TryFunction]` when you want to catch a failure without unwinding the transaction — for example, third-party interop or parsing whose error you intend to translate. When writes must either fully apply or fully revert, use `Codeunit.Run` instead. The two primitives solve different problems: one catches errors, the other bounds a rollback scope.

Use `[TryFunction]` sparingly. Each caught error writes to the session-wide `GetLastErrorText` and `GetLastErrorCallStack` buffers, and every subsequent catch overwrites the earlier state — a helper that reads `GetLastErrorText` later may see a different error than the one it intended to inspect. Prefer explicit checks (non-throwing predicates, guard conditions, upfront validation) for operations with predictable failure modes; reserve `[TryFunction]` for genuinely unpredictable failures such as network calls, third-party interop, or evaluation of user-supplied expressions. When you do catch, read `GetLastErrorText` immediately after the failed call, and call `ClearLastError` before the call if an earlier catch in the same scope could have left state behind — per the platform reference, "If you call the GetLastErrorText method immediately after you call the ClearLastError method, then an empty string is returned."

See sample: [`use-tryfunction-for-error-catching-not-rollback.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-tryfunction-for-error-catching-not-rollback.good.al).

## Anti Pattern

Wrapping database writes in `[TryFunction]` and expecting successful writes before the error to roll back. They remain, the caller receives `false`, and partially applied state can escape. Defensive sprinkling is also unsafe: every catch overwrites the session error buffer and can hide the failure a later helper intended to inspect.

See sample: [`use-tryfunction-for-error-catching-not-rollback.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-tryfunction-for-error-catching-not-rollback.bad.al).

## See also

`microsoft/knowledge/error-handling/ignored-tryfunction-return-disables-try-semantics.md` owns the separate call-site rule that a try method's Boolean result must be consumed.

## Examples

- [Good: use-tryfunction-for-error-catching-not-rollback.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-tryfunction-for-error-catching-not-rollback.good.al)
- [Bad: use-tryfunction-for-error-catching-not-rollback.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-tryfunction-for-error-catching-not-rollback.bad.al)

## Names

- [Debugger.GetLastErrorText() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/debugger/debugger-getlasterrortext-method) (names GetLastErrorText)
- [System.GetLastErrorCallStack() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-getlasterrorcallstack-method) (names GetLastErrorCallStack)
- [System.ClearLastError() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-clearlasterror-method) (names ClearLastError)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
