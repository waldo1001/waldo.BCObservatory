---
id: guideline/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf
type: guideline
title: Admin and migration pages tolerate lower performance discipline
summary: Some pages run rarely and against small datasets, and the upstream guidance explicitly calls for treating them as lower severity.
tier: official
language: en
tags:
  - admin-page
  - migration
  - wizard
  - hybrid
  - permissions
  - lower-severity
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:23.918Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3e40ef3f747576901cd7d939a0f141cea84d56b8
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf.md
    title: "microsoft/BCQuality: Admin and migration pages tolerate lower performance discipline"
    date: "2026-05-21"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes: []
  related:
    - to: object/codeunit/80
      title: codeunit 80 "Sales-Post"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf.md
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
identifiers:
  - HybridBC14
  - HybridSL
  - HybridGP
  - PermissionSet
  - FindSet
  - SetLoadFields
  - ModifyAll
---

# Admin and migration pages tolerate lower performance discipline

> Some pages run rarely and against small datasets, and the upstream guidance explicitly calls for treating them as lower severity.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/admin-and-migration-pages-tolerate-lower-perf.md) · microsoft layer · performance · BC all · tier official · derived

## Description

Some pages run rarely and against small datasets, and the upstream guidance explicitly calls for treating them as lower severity. Per the review checklist, "Admin/migration pages (`Admin`, `Setup`, `Wizard`, `Migration`, `HybridBC14`, `HybridSL`, `HybridGP` namespaces, `Permissions`/`PermissionSet` pages) are infrequently used with small datasets — apply lower severity." The same logic covers one-time wizards and tenant-bootstrap routines: the code path runs a handful of times in the lifetime of a tenant, against a bounded dataset, by an administrator.

## Best Practice

When triaging a finding on an admin, migration, or wizard page, downgrade severity relative to the same finding on a hot business path. A `FindSet` loop without `SetLoadFields` on a migration page that processes setup records once per tenant is a different finding than the same loop on a posting routine that runs thousands of times a day. Note this context explicitly in the review so the call site is not "fixed" twice with diminishing returns.

## Anti Pattern

Treating a migration wizard's per-row loop with the same urgency as the same loop in `Sales-Post`. The fix cost is the same; the production benefit is not. Bulk-rewriting an admin page to use `ModifyAll` and partial records buys nothing the user will perceive.

## Names

- [Record.ModifyAll(Any, Any \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method) (names ModifyAll)
- [codeunit 80 "Sales-Post"](../../../../objects/codeunit/80.md) (possibly related: a code span names it)

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
