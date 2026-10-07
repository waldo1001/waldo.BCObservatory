---
id: object/interface/transformation-rule
type: object
title: Interface "Transformation Rule"
summary: Interface "Transformation Rule" in Base Application (System.IO). 5 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 71e61895e2fce15b90a3cd22a403e8e8226f7e7fbb00f26f594167708bee7a11
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/System/DataExchange/Transformations/TransformationRule.Interface.al
    title: src/Layers/W1/BaseApp/System/DataExchange/Transformations/TransformationRule.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
name: Transformation Rule
namespace: System.IO
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
  procedures: 5
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Transformation Rule"

> Interface "Transformation Rule" in Base Application (System.IO). 5 public procedures. Present since at least BC28, still in BC30.

Base Application · System.IO · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/System/DataExchange/Transformations/TransformationRule.Interface.al) · facts from BC29

## Procedures

- `TransformText(TransformationRule: Record "Transformation Rule"; OldValue: Text; var NewValue: Text)`
- `IsDataFormatUpdateAllowed(): Boolean`
- `CheckMandatoryFieldsInTransformationRule(TransformationRule: Record "Transformation Rule")`
- `ValidateTransformationRuleField(FieldNo: Integer; var TransformationRule: Record "Transformation Rule"; var xTransformationRule: Record "Transformation Rule"): Boolean`
- `GetVisibleGroups(TransformationRule: Record "Transformation Rule"; var VisibleTransformationRuleGroups: List of [Enum "Transformation Rule Group"])`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
