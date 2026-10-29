---
id: guideline/microsoft/knowledge/data-modeling/owning-table-must-delete-dependents-in-ondelete
type: guideline
title: A table that owns dependent records must delete them in `OnDelete`
summary: "TableRelation looks like referential integrity but only performs lookup and input validation. AL has no cascading delete: deleting a parent record leaves every dependent row untouched, and no error is raised."
tier: official
language: en
tags:
  - ondelete
  - cascade
  - table-relation
  - orphan-records
  - header-line
  - dependent-records
  - referential-integrity
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:24.865Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5ded169e53e08713963cd89a059d3ebe1ea74c36
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/owning-table-must-delete-dependents-in-ondelete.md
    title: "microsoft/BCQuality: A table that owns dependent records must delete them in `OnDelete`"
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
    - change/bcquality/153
repo_path: microsoft/knowledge/data-modeling/owning-table-must-delete-dependents-in-ondelete.md
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
examples: 2
identifiers:
  - OnDelete
  - TableRelation
  - SystemMetadata
---

# A table that owns dependent records must delete them in `OnDelete`

> TableRelation looks like referential integrity but only performs lookup and input validation. AL has no cascading delete: deleting a parent record leaves every dependent row untouched, and no error is raised.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/owning-table-must-delete-dependents-in-ondelete.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

`TableRelation` looks like referential integrity but only performs lookup and input validation. AL has **no cascading delete**: deleting a parent record leaves every dependent row untouched, and no error is raised.

What makes this specifically missable is an asymmetry. The platform *does* keep references correct on **rename** — renaming a record updates it in all other locations that declare a `TableRelation` to it, with no code. Delete has no equivalent. Same relation, same metadata, opposite behaviour. A developer who correctly learns that `TableRelation` "keeps references consistent" from the rename case, and generalises it to delete, ships orphans.

Orphaned rows are usually invisible, because a dependent table rarely has a page of its own. They inflate the table, break later reconciliation, and are re-encountered by duplicate checks when the parent key is reused.

This applies to internal, staging and `SystemMetadata` tables too. A table having no delete action in the UI today is not protection: a permission set that grants `D` on the table is evidence that deletion is anticipated.

See also `validate-table-relation-false-suppresses-rename-propagation.md` for the two preconditions on the rename half of this asymmetry.

## Best Practice

The owning table implements `OnDelete` and deletes its dependents there, filtered on the foreign key. Declare `Permissions = tabledata <dependent> = rd` on the owning table — granting delete rights only on the parent is a common miss that makes the trigger fail for a non-`SUPER` user. This mirrors the base application, where every header table deletes its own lines.

See sample: [`owning-table-must-delete-dependents-in-ondelete.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/owning-table-must-delete-dependents-in-ondelete.good.al).

## Anti Pattern

A parent table with dependent rows and no `OnDelete` trigger, where the dependent's foreign-key field declares a `TableRelation` back to the parent. The relation reads as if it guarantees integrity; it does not.

Detection signal: a table declares `TableRelation` to table X, and table X has no `OnDelete` trigger. Whether a delete path currently exists in the UI is irrelevant to the finding.

See sample: [`owning-table-must-delete-dependents-in-ondelete.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/owning-table-must-delete-dependents-in-ondelete.bad.al).

## Examples

- [Good: owning-table-must-delete-dependents-in-ondelete.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/owning-table-must-delete-dependents-in-ondelete.good.al)
- [Bad: owning-table-must-delete-dependents-in-ondelete.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/owning-table-must-delete-dependents-in-ondelete.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#153 Promote knowledge for Microsoft-owned review skills](../../../../changes/bcquality/153.md), 2026-09-03

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
