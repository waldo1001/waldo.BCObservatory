---
id: object/interface/report-filename-placeholder
type: object
title: Interface "Report Filename Placeholder"
summary: Interface "Report Filename Placeholder" in ReportFilenameManager (Microsoft.Foundation.Reporting.FileNaming). 7 public procedures. Introduced in BC30.
tier: official
language: en
tags:
  - interface
  - reportfilenamemanager
versions:
  introduced: "30"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-31T00:48:20.076Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a0c793f8b4de6e31efd9972a925e3b576a2e299a1248790029113df14f865dba
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d2abc1d2ceae394331716c8183ef60e1534c2ce0/src/Apps/W1/ReportFilenameManager/app/src/interface/ReportFilenamePlaceholder.Interface.al
    title: src/Apps/W1/ReportFilenameManager/app/src/interface/ReportFilenamePlaceholder.Interface.al (main)
    date: null
    commit: d2abc1d2ceae394331716c8183ef60e1534c2ce0
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
    - change/bcapps/12610
object_type: interface
object_id: null
name: Report Filename Placeholder
namespace: Microsoft.Foundation.Reporting.FileNaming
app: ReportFilenameManager
extends: null
first_version: "30"
last_version: "30"
present_in:
  - "30"
changed_in: []
source_major: "30"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 7
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
  implemented_by: 0
---

# Interface "Report Filename Placeholder"

> Interface "Report Filename Placeholder" in ReportFilenameManager (Microsoft.Foundation.Reporting.FileNaming). 7 public procedures. Introduced in BC30.

ReportFilenameManager · Microsoft.Foundation.Reporting.FileNaming · BC30 · [source at d2abc1d2](https://github.com/microsoft/BCApps/blob/d2abc1d2ceae394331716c8183ef60e1534c2ce0/src/Apps/W1/ReportFilenameManager/app/src/interface/ReportFilenamePlaceholder.Interface.al) · facts from BC30

## Procedures

- `CanonicalName(): Text`
- `DisplayName(): Text`: The translated name shown in Available Placeholders and accepted when a pattern is written.
- `Description(): Text`
- `IsTableSupported(TableNo: Integer): Boolean`: Whether the value can be worked out for a pattern on the given table. Available Placeholders only offers placeholders that return true.
- `SpeaksForARunOfManyRecords(): Boolean`: Whether the value is one value for a run covering many records (company, user, date) rather than per document (a document total). Used for the picker and the card's examples; at run time TryResolve itself must decline a multi-record run when this is false. Adding a method without a default body here...
- `ExampleWithoutDocument(): Text`: The shape of the value, shown in the picker's Example column when it cannot be resolved without a document. Never a real record's value.
- `TryResolve(var Pattern: Record "Report Filename Pattern"; ReportId: Integer; var DocumentRecRef: RecordRef; LanguageCode: Code[10]; var PlaceholderValue: Text): Boolean`: Resolves the value for one document.

## Recent changes

- 2026-10-27 [#12610 [Report Filename Manager] New app for configurable report output file names - Slice 651696 [vendor work]](../../changes/bcapps/12610.md) (main, BC30, feature, added)

## Across versions

- Present in: BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Report Filename Placeholder")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
