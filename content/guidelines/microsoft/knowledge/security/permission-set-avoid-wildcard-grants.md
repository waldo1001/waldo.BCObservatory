---
id: guideline/microsoft/knowledge/security/permission-set-avoid-wildcard-grants
type: guideline
title: Avoid wildcard grants in permission sets
summary: A permissionset object can grant access object-by-object or with the * wildcard.
tier: official
language: en
tags:
  - permissionset
  - wildcard
  - rimd
  - tabledata
  - least-privilege
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:52.480Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 200fe0156eecaff578e58531fb4620e304628b56
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/permission-set-avoid-wildcard-grants.md
    title: "microsoft/BCQuality: Avoid wildcard grants in permission sets"
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
repo_path: microsoft/knowledge/security/permission-set-avoid-wildcard-grants.md
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
identifiers: []
---

# Avoid wildcard grants in permission sets

> A permissionset object can grant access object-by-object or with the * wildcard.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/permission-set-avoid-wildcard-grants.md) · microsoft layer · security · BC all · tier official · derived

## Description

A `permissionset` object can grant access object-by-object or with the `*` wildcard. Wildcard grants — `tabledata * = RIMD` (Read/Insert/Modify/Delete on every table) and `table * = X` (Execute on every table object) — collapse the principle of least privilege into a single line and are almost never what the author intended. The grant binds for the lifetime of the permission set wherever it is assigned, including indirectly via role assignment. Permission sets should be granular and role-specific, enumerating only the objects the role actually needs.

## Best Practice

Enumerate each `tabledata` and each `table` entry explicitly. Grant only the letters required: `R` for read-only consumers, `RIM` for editors that do not delete, `RIMD` only for owners of the data. When a role needs Execute on objects, list those objects rather than using `table *`. See sample: [`permission-set-avoid-wildcard-grants.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/permission-set-avoid-wildcard-grants.good.al).

## Anti Pattern

`Permissions = tabledata * = RIMD;` and `Permissions = table * = X, tabledata * = R;` — both grant access to objects the role's author never inspected, and the grant silently broadens every time a new table ships in the platform or in another extension. Reviewers should flag any `*` on the left-hand side of a `tabledata` or `table` entry. See sample: [`permission-set-avoid-wildcard-grants.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/permission-set-avoid-wildcard-grants.bad.al).

## Examples

- [Good: permission-set-avoid-wildcard-grants.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/permission-set-avoid-wildcard-grants.good.al)
- [Bad: permission-set-avoid-wildcard-grants.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/permission-set-avoid-wildcard-grants.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
