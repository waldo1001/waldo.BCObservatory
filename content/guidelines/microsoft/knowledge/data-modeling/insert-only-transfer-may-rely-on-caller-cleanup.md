---
id: guideline/microsoft/knowledge/data-modeling/insert-only-transfer-may-rely-on-caller-cleanup
type: guideline
title: An insert-only transfer routine may rely on cleanup its caller already performed
summary: A routine that copies rows from a template table into a target table — a TransferX procedure filling comment, dimension, or attribute lines from a standard-task or template record — is frequently written as filter-and-insert with no DeleteAll of its own.
tier: official
language: en
tags:
  - transfer
  - cleanup
  - deleteall
  - onvalidate
  - caller
  - stale-rows
  - false-positive
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:16.869Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: be1b7842c15d94f3f3ee556f11445d1d9c91f31f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/insert-only-transfer-may-rely-on-caller-cleanup.md
    title: "microsoft/BCQuality: An insert-only transfer routine may rely on cleanup its caller already performed"
    date: "2026-09-02"
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
    - change/bcquality/146
repo_path: microsoft/knowledge/data-modeling/insert-only-transfer-may-rely-on-caller-cleanup.md
layer: microsoft
kind: rule
domain: data-modeling
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - TransferX
  - DeleteAll
  - OnValidate
---

# An insert-only transfer routine may rely on cleanup its caller already performed

> A routine that copies rows from a template table into a target table — a TransferX procedure filling comment, dimension, or attribute lines from a standard-task or template record — is frequently written as filter-and-insert with no DeleteAll of its own.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/insert-only-transfer-may-rely-on-caller-cleanup.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

A routine that copies rows from a template table into a target table — a `TransferX` procedure filling comment, dimension, or attribute lines from a standard-task or template record — is frequently written as filter-and-insert with no `DeleteAll` of its own. That is not automatically a stale-row or duplicate-primary-key defect. In the common AL shape, the field's `OnValidate` trigger first calls a sibling cleanup procedure that clears the same filtered range, then calls the transfer. By the time `Insert` runs, the target range is guaranteed empty, so the transfer has nothing to clean up and adding a second `DeleteAll` inside it would be redundant.

Deciding whether a missing cleanup is real therefore requires reading the caller, not just the routine in the diff. The relevant question is whether every path that reaches the transfer clears the target range first — not whether the transfer clears it itself.

## Best Practice

Before reporting a transfer or copy routine for missing cleanup, trace its call sites. If the callers in scope invoke a cleanup procedure that clears the same filtered range immediately beforehand — typically in the same `OnValidate` trigger or the same routine — the insert-only transfer is correct and must not be flagged for stale rows, duplicate keys, or a missing `DeleteAll`. Raise the finding only when a reachable call path inserts into a range that was not cleared, or when the cleanup filters a different range than the insert writes to.

## Anti Pattern

Reporting an insert-only transfer as a stale-row or duplicate-key risk on the strength of the routine body alone, when the trigger that calls it already ran the cleanup. The mirror-image mistake is waving through a transfer whose caller clears a *different* filter range than the one the transfer inserts into, or one reachable from a path with no cleanup at all — those are genuine defects.

## Changed by

- [#146 knowledge: three false-positive guards from BCApps PR 10277, 10278 and 10346](../../../../changes/bcquality/146.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
