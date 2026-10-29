---
id: guideline/microsoft/knowledge/performance/httpclient-inside-write-transaction-holds-locks
type: guideline
title: Do not call HttpClient inside an open write transaction
summary: The first database write opens an AL write transaction that the runtime holds until the execution completes or Commit() runs — see understand-implicit-transaction-boundary.md. HttpClient blocks the session until the remote call returns.
tier: official
language: en
tags:
  - httpclient
  - write-transaction
  - lock
  - commit
  - outbound-http
  - session-block
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:10.890Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 88d0ff79347e94a221797c181f31aff37aa1a115
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/httpclient-inside-write-transaction-holds-locks.md
    title: "microsoft/BCQuality: Do not call HttpClient inside an open write transaction"
    date: "2026-09-14"
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
    - change/bcquality/148
    - change/bcquality/174
    - change/bcquality/153
repo_path: microsoft/knowledge/performance/httpclient-inside-write-transaction-holds-locks.md
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
  - HttpClient
---

# Do not call HttpClient inside an open write transaction

> The first database write opens an AL write transaction that the runtime holds until the execution completes or Commit() runs — see understand-implicit-transaction-boundary.md. HttpClient blocks the session until the remote call returns.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/httpclient-inside-write-transaction-holds-locks.md) · microsoft layer · performance · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

The first database write opens an AL write transaction that the runtime holds until the execution completes or `Commit()` runs — see `understand-implicit-transaction-boundary.md`. `HttpClient` blocks the session until the remote call returns. Any locks taken by earlier `Insert`/`Modify`/`Delete` therefore stay held for the HTTP wall-clock time, and interactive users see a spinner. This is not generic "don't block": it is the AL transaction model plus lock lifetime around outbound I/O.

## Best Practice

Defer the HTTP call to a separate session. When the external operation must correspond to a committed database change, insert an outbox work item in the same transaction as that change and process committed outbox rows with a recurring job queue entry. The change and work item then commit or roll back together, and the worker performs HTTP before deleting the item so it holds no write lock during the call. The separate retry-safety requirement is covered by `job-queue-external-effects-must-be-idempotent.md`.

A directly created scheduled task is suitable only when its work is independent of the caller's commit. An immediately ready task can run concurrently with the caller, so it must not assume that the caller's writes are already committed. Do **not** use `Commit()` as a general remedy: it irrevocably commits all prior writes in the current transaction, so any subsequent failure cannot roll them back. `Commit()` is appropriate only at top-level entry points where partial persistence is intentional and understood.

See sample: [`httpclient-inside-write-transaction-holds-locks.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/httpclient-inside-write-transaction-holds-locks.good.al).

## Anti Pattern

`Modify`/`Insert` followed by `HttpClient` in the same procedure with no `Commit` between them. Detection signal: any `HttpClient` use after a write on the same execution path, especially in posting, page actions, or subscribers.

See sample: [`httpclient-inside-write-transaction-holds-locks.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/httpclient-inside-write-transaction-holds-locks.bad.al).

## Examples

- [Good: httpclient-inside-write-transaction-holds-locks.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/httpclient-inside-write-transaction-holds-locks.good.al)
- [Bad: httpclient-inside-write-transaction-holds-locks.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/httpclient-inside-write-transaction-holds-locks.bad.al)

## Changed by

- [#148 Add Job Queue reliability and scheduling guidance](../../../../changes/bcquality/148.md), 2026-09-14
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
