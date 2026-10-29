---
id: guideline/microsoft/knowledge/reporting/reportextension-layouts-are-not-selected-automatically
type: guideline
title: A layout added in a report extension is not used until it is selected
summary: A reportextension can add layouts through its rendering section, but deploying the extension does not make any of them the report's layout. DefaultRenderingLayout can be set only on the report object, not on a report extension, so the base report keeps its own default.
tier: official
language: en
tags:
  - reportextension
  - rendering
  - layout
  - defaultrenderinglayout
  - report-layout-selection
  - report-layouts
  - word-layout
  - excel-layout
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:25.607Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 567c970d4bd769ce33d45376cfbd787cfa044a18
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-layouts-are-not-selected-automatically.md
    title: "microsoft/BCQuality: A layout added in a report extension is not used until it is selected"
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
repo_path: microsoft/knowledge/reporting/reportextension-layouts-are-not-selected-automatically.md
layer: microsoft
kind: rule
domain: reporting
bc_version:
  - 20..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - DefaultRenderingLayout
---

# A layout added in a report extension is not used until it is selected

> A reportextension can add layouts through its rendering section, but deploying the extension does not make any of them the report's layout. DefaultRenderingLayout can be set only on the report object, not on a report extension, so the base report keeps its own default.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-layouts-are-not-selected-automatically.md) · microsoft layer · reporting · BC 20.. · tier official · derived

## Description

A `reportextension` can add layouts through its `rendering` section, but deploying the extension does not make any of them the report's layout. `DefaultRenderingLayout` can be set only on the `report` object, not on a report extension, so the base report keeps its own default. The new layout appears on the **Report Layouts** page and in the request page's **Report Layout** field, and is used only when a user or administrator picks it, or sets it as the default for the company in **Report Layouts** or **Report Layout Selection**.

Agents that add columns to a report extension together with a new layout often assume the new layout replaces the base one, and describe the change as complete. Users keep printing the old layout without the new fields.

## Best Practice

When a report extension ships a layout meant to be used by default, treat selecting it as a deployment or setup step: document it, or provide an explicit, opt-in setup action that sets the layout as the company default through the application's report layout selection. Give the layout a `Caption` and `Summary` so users can find it. If the extension's new dataset columns are only useful in the new layout, say so in the release notes.

See sample: [`reportextension-layouts-are-not-selected-automatically.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-layouts-are-not-selected-automatically.good.al).

## Anti Pattern

A `reportextension` whose `rendering` layout is expected to replace the base layout automatically, for example a change described as "the report now shows X" when X appears only in the extension's layout, with no selection step. `DefaultRenderingLayout` placed in a report extension is a compile error, not a working override.

Do not flag report extensions that add layouts as optional alternatives, or that add dataset columns only for user-defined layouts.

See sample: [`reportextension-layouts-are-not-selected-automatically.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-layouts-are-not-selected-automatically.bad.al).

## References

[Defining multiple report layouts](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-multiple-report-layouts) (`DefaultRenderingLayout` can't be set on report extension objects), [Report design overview](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-report-design-overview#report-layouts) (a report extension layout isn't used automatically when deployed), and [Set the layout used by a report](https://learn.microsoft.com/en-us/dynamics365/business-central/ui-set-report-layout).

## Examples

- [Good: reportextension-layouts-are-not-selected-automatically.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-layouts-are-not-selected-automatically.good.al)
- [Bad: reportextension-layouts-are-not-selected-automatically.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/reportextension-layouts-are-not-selected-automatically.bad.al)

## Changed by

- [#230 Knowledge: report layouts and dataset contract, query join and grouping defaults](../../../../changes/bcquality/230.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
