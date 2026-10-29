---
id: guideline/microsoft/knowledge/reporting/do-not-rename-or-remove-shipped-report-dataset-columns
type: guideline
title: Do not rename or remove columns of a report dataset that has shipped
summary: A report's dataset column names are the contract that every layout binds to, including layouts that are not in your source code. An Excel layout lists the column names it uses in its *Data* worksheet; these names must exist in the dataset and cannot be renamed.
tier: official
language: en
tags:
  - report-dataset
  - column
  - rename
  - remove
  - user-defined-layout
  - excel-layout
  - word-layout
  - data-contract
  - compatibility
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:19.396Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fed09742797a9ad991bc60e225b239057d847d26
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/do-not-rename-or-remove-shipped-report-dataset-columns.md
    title: "microsoft/BCQuality: Do not rename or remove columns of a report dataset that has shipped"
    date: "2026-10-20"
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
    - change/bcquality/230
repo_path: microsoft/knowledge/reporting/do-not-rename-or-remove-shipped-report-dataset-columns.md
layer: microsoft
kind: rule
domain: reporting
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
  - DocumentNo
---

# Do not rename or remove columns of a report dataset that has shipped

> A report's dataset column names are the contract that every layout binds to, including layouts that are not in your source code. An Excel layout lists the column names it uses in its *Data* worksheet; these names must exist in the dataset and cannot be renamed.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/do-not-rename-or-remove-shipped-report-dataset-columns.md) · microsoft layer · reporting · BC all · tier official · derived

## Description

A report's dataset column names are the contract that every layout binds to, including layouts that are not in your source code. An Excel layout lists the column names it uses in its *Data* worksheet; these names must exist in the dataset and cannot be renamed. Word layouts bind to the dataset's custom XML part, and RDL layouts reference field names. Customers and partners create user-defined layouts from your report on the **Report Layouts** page, and other extensions can add layouts through report extensions. Renaming a `column(...)` or deleting it compiles cleanly and updates the layouts in your project, but breaks those other layouts: fields render empty, or the layout fails validation or rendering.

Agents treat a column name like a private identifier and "tidy" names (`No_` to `DocumentNo`), or delete columns that their own layout no longer uses.

## Best Practice

Once a report has been released, keep existing column names and keep columns that layouts may use. Add new columns instead of renaming, and keep old ones populated (they can stay unused by your own layouts). If a column must change, ship a new report or a new layout-compatible column alongside the old one, and communicate it as a breaking change for custom layouts.

See sample: [`do-not-rename-or-remove-shipped-report-dataset-columns.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/do-not-rename-or-remove-shipped-report-dataset-columns.good.al).

## Anti Pattern

A diff that renames the name of an existing `column(Name; Source)` in a released report or report extension, or removes such a column, justified by naming style or by "no layout uses it" based only on the layouts in the repository.

Changing a column's source expression while keeping its name and type is not this defect. Neither is changing a report that has never been released (see the unreleased-symbol guidance in breaking-changes).

See sample: [`do-not-rename-or-remove-shipped-report-dataset-columns.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/do-not-rename-or-remove-shipped-report-dataset-columns.bad.al).

## References

[Creating an Excel layout report, How Excel layouts work](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-howto-excel-report-layout#how-excel-layouts-work) (Data worksheet fields must exist in the dataset and can't be renamed), [Report and document layouts overview](https://learn.microsoft.com/en-us/dynamics365/business-central/ui-manage-report-layouts#layout-sources) (user-defined layouts), and [Update custom report layouts](https://learn.microsoft.com/en-us/dynamics365/business-central/ui-update-report-layouts) (deleted fields can't be handled by the automatic layout update).

## Examples

- [Good: do-not-rename-or-remove-shipped-report-dataset-columns.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/do-not-rename-or-remove-shipped-report-dataset-columns.good.al)
- [Bad: do-not-rename-or-remove-shipped-report-dataset-columns.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/do-not-rename-or-remove-shipped-report-dataset-columns.bad.al)

## Changed by

- [#230 Knowledge: report layouts and dataset contract, query join and grouping defaults](../../../../changes/bcquality/230.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
