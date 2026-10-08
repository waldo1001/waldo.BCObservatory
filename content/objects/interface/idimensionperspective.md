---
id: object/interface/idimensionperspective
type: object
title: Interface "IDimensionPerspective"
summary: Interface "IDimensionPerspective" in Base Application (Microsoft.Finance.FinancialReports). 9 public procedures. Introduced in BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "28"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4ce5b0e5d75dda61d55a54812b75c06c92c47eeb11978061c38449a01310d6ad
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Finance/FinancialReports/IDimensionPerspective.Interface.al
    title: src/Layers/W1/BaseApp/Finance/FinancialReports/IDimensionPerspective.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 4
---

# Interface "IDimensionPerspective"

> Interface "IDimensionPerspective" in Base Application (Microsoft.Finance.FinancialReports). 9 public procedures. Introduced in BC28, still in BC30.

Base Application · Microsoft.Finance.FinancialReports · BC28-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Finance/FinancialReports/IDimensionPerspective.Interface.al) · facts from BC29

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

## Implemented by

- [Codeunit 8364 "DimPerspectiveBusinessUnit"](../codeunit/8364.md)
- [Codeunit 8365 "DimPerspectiveCustom"](../codeunit/8365.md)
- [Codeunit 8367 "DimPerspectiveDimension"](../codeunit/8367.md)
- [Enum 8363 "Dimension Perspective Type"](../enum/8363.md)

## Across versions

- Present in: BC28-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IDimensionPerspective")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
