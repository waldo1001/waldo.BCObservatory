---
id: guideline/microsoft/knowledge/reporting/declare-report-layouts-in-the-rendering-section
type: guideline
title: Declare report layouts in the rendering section, not with the legacy layout properties
summary: Since runtime 9.0 (BC20), reports declare layouts in a rendering section of named layout entries, each with Type, LayoutFile, Caption, and Summary, and choose the default by name with DefaultRenderingLayout.
tier: official
language: en
tags:
  - rendering
  - defaultrenderinglayout
  - defaultlayout
  - rdlclayout
  - wordlayout
  - excellayout
  - layoutfile
  - legacy-layout
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:19.501Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 365894d4d93c7a95e7afba7fa7755963f52fdb8f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/declare-report-layouts-in-the-rendering-section.md
    title: "microsoft/BCQuality: Declare report layouts in the rendering section, not with the legacy layout properties"
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
repo_path: microsoft/knowledge/reporting/declare-report-layouts-in-the-rendering-section.md
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
  - LayoutFile
  - DefaultRenderingLayout
  - DefaultLayout
  - RDLCLayout
  - WordLayout
  - ExcelLayout
---

# Declare report layouts in the rendering section, not with the legacy layout properties

> Since runtime 9.0 (BC20), reports declare layouts in a rendering section of named layout entries, each with Type, LayoutFile, Caption, and Summary, and choose the default by name with DefaultRenderingLayout.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/declare-report-layouts-in-the-rendering-section.md) · microsoft layer · reporting · BC 20.. · tier official · derived

## Description

Since runtime 9.0 (BC20), reports declare layouts in a `rendering` section of named `layout` entries, each with `Type`, `LayoutFile`, `Caption`, and `Summary`, and choose the default by name with `DefaultRenderingLayout`. The older properties `DefaultLayout`, `RDLCLayout`, `WordLayout`, and `ExcelLayout` allow only one layout per type, select the default by type, and Microsoft documents that they should be avoided because they will be deprecated. Code that reads them also loads the full layout into memory even when it only checks whether a layout of that type exists.

Agents still produce the legacy properties because most published samples and older Base Application code use them.

## Best Practice

In new or changed reports, declare every layout in `rendering`, set `DefaultRenderingLayout` on the report, and give each layout a `Caption` and `Summary` so users can choose between them on the **Report Layouts** page. When touching a report that still uses the legacy properties, convert it with the AL code action **Convert to 'Rendering'**.

See sample: [`declare-report-layouts-in-the-rendering-section.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/declare-report-layouts-in-the-rendering-section.good.al).

## Anti Pattern

A new report, or a changed report's layout declaration, that uses `DefaultLayout` together with `RDLCLayout`, `WordLayout`, or `ExcelLayout`.

Do not flag unchanged legacy declarations in code outside the review scope, or projects whose target runtime is below 9.0.

See sample: [`declare-report-layouts-in-the-rendering-section.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/declare-report-layouts-in-the-rendering-section.bad.al).

## References

[DefaultLayout property](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-defaultlayout-property) (avoid the legacy properties; they will be deprecated; reading them loads the full layout), [Declare report layouts in AL](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-report-layout-declaration), and [Defining multiple report layouts](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-multiple-report-layouts).

## Examples

- [Good: declare-report-layouts-in-the-rendering-section.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/declare-report-layouts-in-the-rendering-section.good.al)
- [Bad: declare-report-layouts-in-the-rendering-section.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/declare-report-layouts-in-the-rendering-section.bad.al)

## Changed by

- [#230 Knowledge: report layouts and dataset contract, query join and grouping defaults](../../../../changes/bcquality/230.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
