---
id: guideline/microsoft/knowledge/error-handling/log-writes-must-survive-rollback
type: guideline
title: Log writes that must capture failures must survive transaction rollback
summary: "Inserting a log record inside the same transaction as the operation it logs looks correct until the operation errors: the transaction rolls back and takes the log entry with it. The result is a log that faithfully records every success and silently loses exactly the failures it exists to capture."
tier: official
language: en
tags:
  - logging
  - rollback
  - session
  - transaction
  - isolated-session
  - telemetry
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:46.031Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: eae17004a4ba98ce3ab2568a2981dde8c29c4aca
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/log-writes-must-survive-rollback.md
    title: "microsoft/BCQuality: Log writes that must capture failures must survive transaction rollback"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/recordid/recordid-tableno-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/157
repo_path: microsoft/knowledge/error-handling/log-writes-must-survive-rollback.md
layer: microsoft
kind: rule
domain: error-handling
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
  - TableNo
  - StartSession
  - OnRun
---

# Log writes that must capture failures must survive transaction rollback

> Inserting a log record inside the same transaction as the operation it logs looks correct until the operation errors: the transaction rolls back and takes the log entry with it. The result is a log that faithfully records every success and silently loses exactly the failures it exists to capture.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/log-writes-must-survive-rollback.md) · microsoft layer · error-handling · BC all · tier official · derived

## Description

Inserting a log record inside the same transaction as the operation it logs looks correct until the operation errors: the transaction rolls back and takes the log entry with it. The result is a log that faithfully records every success and silently loses exactly the failures it exists to capture. This is a common blind spot in error/duration logging around web-service calls, background jobs, and other operations expected to fail sometimes.

## Best Practice

Write any log whose purpose includes capturing failures from a transaction that is independent of the operation being logged: start an isolated session (`Session.StartSession` on a `TableNo`-scoped codeunit that only inserts the log record and commits) so the entry persists regardless of what happens to the caller's transaction. `StartSession`'s only channel for getting data into that new session is its optional `Record` parameter, delivered to the target codeunit's `OnRun` trigger — a separate session gets a fresh instantiation of the codeunit, so calling a setter procedure on a local object variable before starting the session does not populate anything in the new session's instance. Capture duration and other telemetry values in the caller, place them into the `Record` passed to `StartSession`, and do the insert-and-commit entirely inside that session's own `OnRun`. Logs that only record successful, committed work can safely stay in the main transaction; this pattern targets error and diagnostic logs specifically.

See sample: [`log-writes-must-survive-rollback.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/log-writes-must-survive-rollback.good.al).

## Anti Pattern

Inserting the error-log record in the same transaction as the risky operation, so a rollback deletes the very entry meant to explain the failure. Adding a stray `Commit` before the risky call is not a fix either — it breaks the caller's atomicity and can violate posting-routine rules. Swallowing the error to keep the log alive (running a codeunit without checking or re-raising its result) is equally wrong: the log must observe the failure, not suppress it.

See sample: [`log-writes-must-survive-rollback.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/log-writes-must-survive-rollback.bad.al).

## Examples

- [Good: log-writes-must-survive-rollback.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/log-writes-must-survive-rollback.good.al)
- [Bad: log-writes-must-survive-rollback.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/error-handling/log-writes-must-survive-rollback.bad.al)

## Names

- [RecordId.TableNo() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/recordid/recordid-tableno-method) (names TableNo)

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
