---
id: guideline/microsoft/knowledge/performance/singleton-setup-tables-need-no-access-optimization
type: guideline
title: Enforced singleton setup tables need no access optimization
summary: An access-pattern exemption is valid only for a table whose schema and write paths enforce at most one row for the relevant scope.
tier: official
language: en
tags:
  - singleton
  - setup-table
  - sales-receivables-setup
  - general-ledger-setup
  - setloadfields
  - bounded
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:23.409Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 796c9181927069ae84eb055f7fc3c259a59a9513
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/singleton-setup-tables-need-no-access-optimization.md
    title: "microsoft/BCQuality: Enforced singleton setup tables need no access optimization"
    date: "2026-07-14"
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
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/singleton-setup-tables-need-no-access-optimization.md
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
examples: 0
identifiers: []
---

# Enforced singleton setup tables need no access optimization

> An access-pattern exemption is valid only for a table whose schema and write paths enforce at most one row for the relevant scope.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/singleton-setup-tables-need-no-access-optimization.md) · microsoft layer · performance · BC all · tier official · derived

## Description

An access-pattern exemption is valid only for a table whose schema and write paths enforce at most one row for the relevant scope. A conventional blank primary key, a parameterless `Get()`, or a table name ending in `Setup` does not enforce that invariant; another primary-key value can still create another row unless insertion logic prevents it.

## Best Practice

Exempt a setup read only after confirming that noncanonical keys are rejected and every supported creation path preserves the singleton. Otherwise apply ordinary access-pattern analysis, even when existing application code normally uses one blank-key record.

## Anti Pattern

Treating every `*Setup` table or parameterless `Get()` as proof of bounded cardinality without checking the primary key and insertion logic.

## Changed by

- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
