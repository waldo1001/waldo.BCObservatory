---
id: guideline/microsoft/knowledge/style/page-name-must-match-source-table
type: guideline
title: A page or view name must describe the table it shows
summary: A page (or filtered page View) whose name references one entity but whose SourceTable is a different entity misleads every consumer of the object's metadata.
tier: official
language: en
tags:
  - page-name
  - source-table
  - misleading
  - naming
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:24.992Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b8706cbb8e4b7aa01daac3fdaa0672855885ddbc
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/page-name-must-match-source-table.md
    title: "microsoft/BCQuality: A page or view name must describe the table it shows"
    date: "2026-05-21"
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
  changes: []
  related:
    - to: object/report/5757
      title: report 5757 "Items with Negative Inventory"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/5700
      title: table 5700 "Stockkeeping Unit"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/style/page-name-must-match-source-table.md
layer: microsoft
kind: rule
domain: style
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
  - SourceTable
---

# A page or view name must describe the table it shows

> A page (or filtered page View) whose name references one entity but whose SourceTable is a different entity misleads every consumer of the object's metadata.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/page-name-must-match-source-table.md) · microsoft layer · style · BC all · tier official · derived

## Description

A page (or filtered page View) whose name references one entity but whose `SourceTable` is a different entity misleads every consumer of the object's metadata. A page named `"Items with Negative Inventory"` that sources `"Stockkeeping Unit"` looks like a list of items in the search bar and in role explorer, but presents stockkeeping-unit fields and behaviour. The fix is either to rename the page to match the source table — `"Stockkeeping Units with Negative Inventory"` — or to change the source table to the entity the name promises. The choice depends on which the actual users are asking for; the constraint is that the two MUST agree.

The rule extends to filtered Views declared inside a page: the `View` name should describe the filter applied to the page's existing source, not introduce a different entity.

## Best Practice

Read the page name out loud and ask: "If a user typed this into the search bar, would they expect to see rows from `<SourceTable>`?" If the answer is no, rename one side or the other. The same check applies whenever the source table changes — the name has to follow.

## Anti Pattern

`page "Items with Negative Inventory" { SourceTable = "Stockkeeping Unit"; … }`. The Tell-Don't-Ask name asserts items; the source contradicts it. Reviewers should flag every mismatch they spot, even when both sides "make sense individually" — they have to agree.

## Names

- [report 5757 "Items with Negative Inventory"](../../../../objects/report/5757.md) (possibly related: a code span names it)
- [table 5700 "Stockkeeping Unit"](../../../../objects/table/5700.md) (possibly related: a code span names it)

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
