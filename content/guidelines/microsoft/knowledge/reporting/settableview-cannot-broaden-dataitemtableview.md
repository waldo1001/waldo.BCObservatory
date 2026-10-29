---
id: guideline/microsoft/knowledge/reporting/settableview-cannot-broaden-dataitemtableview
type: guideline
title: SetTableView cannot broaden DataItemTableView
summary: Report.SetTableView() applies the supplied record view by narrowing the view already defined by the report dataitem's DataItemTableView. It cannot remove or broaden a static dataitem filter.
tier: official
language: en
tags:
  - report
  - settableview
  - dataitemtableview
  - filter
  - view
  - narrowing
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:10.028Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2dfc69129b1b5254b1c6bc11706ffb1dfce54f90
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/settableview-cannot-broaden-dataitemtableview.md
    title: "microsoft/BCQuality: SetTableView cannot broaden DataItemTableView"
    date: "2026-09-15"
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
    - change/bcquality/183
repo_path: microsoft/knowledge/reporting/settableview-cannot-broaden-dataitemtableview.md
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
  - DataItemTableView
  - SetTableView
---

# SetTableView cannot broaden DataItemTableView

> Report.SetTableView() applies the supplied record view by narrowing the view already defined by the report dataitem's DataItemTableView. It cannot remove or broaden a static dataitem filter.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/settableview-cannot-broaden-dataitemtableview.md) · microsoft layer · reporting · BC all · tier official · derived

## Description

`Report.SetTableView()` applies the supplied record view by narrowing the view already defined by the report dataitem's `DataItemTableView`. It cannot remove or broaden a static dataitem filter. A caller that requests records excluded by `DataItemTableView` therefore produces an empty dataset rather than overriding the report filter.

## Best Practice

Keep only invariant restrictions in `DataItemTableView`. When callers must select among values, leave that dimension open in the static view and pass the required filter through `SetTableView`. Review this as a defect only when the report definition and caller together show a contradictory filter.

See sample: [`settableview-cannot-broaden-dataitemtableview.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/settableview-cannot-broaden-dataitemtableview.good.al).

## Anti Pattern

Define a static filter in `DataItemTableView` and call `SetTableView` with a mutually exclusive filter while expecting the runtime view to replace the static one. The filters are intersected and no records are selected.

See sample: [`settableview-cannot-broaden-dataitemtableview.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/settableview-cannot-broaden-dataitemtableview.bad.al).

## References

`Report.SetTableView()` method — https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/report/reportinstance-settableview-method

## Examples

- [Good: settableview-cannot-broaden-dataitemtableview.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/settableview-cannot-broaden-dataitemtableview.good.al)
- [Bad: settableview-cannot-broaden-dataitemtableview.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/settableview-cannot-broaden-dataitemtableview.bad.al)

## Changed by

- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
