---
id: object/interface/idimensionperspective
type: object
title: Interface "IDimensionPerspective"
summary: Interface "IDimensionPerspective" in Base Application (Microsoft.Finance.FinancialReports). 9 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: null
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b0574efe006f8aa79aefabba11694b23e9e6bb031579f38428608c88fe02ee5a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/FinancialReports/IDimensionPerspective.Interface.al
    title: src/Layers/W1/BaseApp/Finance/FinancialReports/IDimensionPerspective.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
object_type: interface
object_id: null
name: IDimensionPerspective
namespace: Microsoft.Finance.FinancialReports
app: Base Application
extends: null
first_version: "28"
last_version: "30"
present_in:
  - "28"
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 9
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "IDimensionPerspective"

> Interface "IDimensionPerspective" in Base Application (Microsoft.Finance.FinancialReports). 9 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Finance.FinancialReports · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/FinancialReports/IDimensionPerspective.Interface.al) · facts from BC29

## Procedures

- `PopulateLineBufferForReporting(DimPerspectiveName: Record "Dimension Perspective Name"; var TempDimPerspectiveLine: Record "Dimension Perspective Line")`
- `FilterGLEntryByPerspectiveTotaling(DimPerspectiveLine: Record "Dimension Perspective Line"; var GLEntry: Record "G/L Entry")`: Filter the G/L entry record by the dimension perspective line's totaling fields.
- `FilterGLBudgetEntryByPerspectiveTotaling(DimPerspectiveLine: Record "Dimension Perspective Line"; var GLBudgetEntry: Record "G/L Budget Entry")`: Filter the G/L budget entry record by the dimension perspective line's totaling fields.
- `FilterCFEntryByPerspectiveTotaling(DimPerspectiveLine: Record "Dimension Perspective Line"; var CFForecastEntry: Record "Cash Flow Forecast Entry")`: Filter the cash flow forecast entry record by the dimension perspective line's totaling fields.
- `FilterAnalysisViewEntryByPerspectiveTotaling(DimPerspectiveLine: Record "Dimension Perspective Line"; var AnalysisViewEntry: Record "Analysis View Entry")`: Filter the analysis view entry record by the dimension perspective line's totaling fields.
- `FilterAnalysisViewBudgetEntryByPerspectiveTotaling(DimPerspectiveLine: Record "Dimension Perspective Line"; var AnalysisViewBudgetEntry: Record "Analysis View Budget Entry")`: Filter the analysis view budget entry record by the dimension perspective line's totaling fields.
- `PerspectiveTypeToText(DimPerspectiveName: Record "Dimension Perspective Name"; Type: Enum "Dimension Perspective Type"; var Text: Text): Boolean`: Convert the perspective type value to text. This is displayed on the dimension perspective page.
- `TextToPerspectiveType(DimPerspectiveName: Record "Dimension Perspective Name"; Text: Text; var Type: Enum "Dimension Perspective Type"): Boolean`: Convert the text value to a perspective type. This is used when validating user input on the dimension perspective page.
- `InsertBufferForPerspectiveTotalingLookup(DimPerspectiveName: Record "Dimension Perspective Name"; Type: Enum "Dimension Perspective Type"; var DimSelection: Page "Dimension Selection")`: Populate the dimension selection buffer for looking up perspective totaling values. Values are dynamically generated based on the source data, such as shortcut dimensions.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
