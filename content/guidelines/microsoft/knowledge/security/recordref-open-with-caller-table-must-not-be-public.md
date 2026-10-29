---
id: guideline/microsoft/knowledge/security/recordref-open-with-caller-table-must-not-be-public
type: guideline
title: Procedures that RecordRef.Open a caller-provided table must not be public
summary: When a codeunit holds permission to system tables — directly, via a permission set granted at install, or via [InherentPermissions] — and exposes a public procedure that accepts a table number (or a RecordId, from which the table number is derived) and calls RecordRef.Open on it, the procedure…
tier: official
language: en
tags:
  - recordref
  - open
  - public
  - system-table
  - scope-onprem
  - confused-deputy
  - saas
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:52.646Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7e8fb59f5ca7bb6772de43622d9d0417ec58cb9d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/recordref-open-with-caller-table-must-not-be-public.md
    title: "microsoft/BCQuality: Procedures that RecordRef.Open a caller-provided table must not be public"
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
repo_path: microsoft/knowledge/security/recordref-open-with-caller-table-must-not-be-public.md
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
  - RecordId
---

# Procedures that RecordRef.Open a caller-provided table must not be public

> When a codeunit holds permission to system tables — directly, via a permission set granted at install, or via [InherentPermissions] — and exposes a public procedure that accepts a table number (or a RecordId, from which the table number is derived) and calls RecordRef.Open on it, the procedure…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/recordref-open-with-caller-table-must-not-be-public.md) · microsoft layer · security · BC all · tier official · derived

## Description

When a codeunit holds permission to system tables — directly, via a permission set granted at install, or via `[InherentPermissions]` — and exposes a public procedure that accepts a table number (or a `RecordId`, from which the table number is derived) and calls `RecordRef.Open` on it, the procedure becomes a confused deputy. Any other extension on the same tenant can invoke the procedure with the table number of a system table the calling extension does not own permissions for and obtain access to its rows through the wrapper. This is especially acute in SaaS: an on-premises-style extension that holds broad permissions can be exploited by a co-tenant extension that calls its public surface.

## Best Practice

Mark such procedures `local` (callable only inside the containing object), `internal` (callable only inside the owning extension), or `[Scope('OnPrem')]` (not callable from SaaS extensions). If the procedure must be public, validate the table number against an allow-list before `RecordRef.Open` — `if not IsAllowedTable(RecId.TableNo) then Error(...)` — so the caller cannot specify an arbitrary table. See sample: [`recordref-open-with-caller-table-must-not-be-public.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/recordref-open-with-caller-table-must-not-be-public.good.al).

## Anti Pattern

`procedure ArchiveRecord(RecId: RecordId)` (public by default) whose body calls `RecRef.Open(RecId.TableNo)` and then reads, modifies, or deletes the record. Reviewers should flag any procedure that is public (no `local`/`internal`/`[Scope('OnPrem')]`), takes a `RecordId`, `Integer` table number, or `Variant` as a parameter, and calls `RecordRef.Open` with that parameter — unless an allow-list check on the table number precedes the open. See sample: [`recordref-open-with-caller-table-must-not-be-public.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/recordref-open-with-caller-table-must-not-be-public.bad.al).

## Examples

- [Good: recordref-open-with-caller-table-must-not-be-public.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/recordref-open-with-caller-table-must-not-be-public.good.al)
- [Bad: recordref-open-with-caller-table-must-not-be-public.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/recordref-open-with-caller-table-must-not-be-public.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
