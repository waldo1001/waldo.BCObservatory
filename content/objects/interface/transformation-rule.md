---
id: object/interface/transformation-rule
type: object
title: Interface "Transformation Rule"
summary: Interface "Transformation Rule" in Base Application (System.IO). 5 public procedures. Introduced in BC25, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "25"
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
  input_hash: 50ecb82b022c48501e82ce47079cc39d277f23f4371658526065a5370aea7e26
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/System/DataExchange/Transformations/TransformationRule.Interface.al
    title: src/Layers/W1/BaseApp/System/DataExchange/Transformations/TransformationRule.Interface.al (releases/29.x)
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
name: Transformation Rule
namespace: System.IO
app: Base Application
extends: null
first_version: "25"
last_version: "30"
present_in:
  - "25"
  - "26"
  - "27"
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 0
---

# Interface "Transformation Rule"

> Interface "Transformation Rule" in Base Application (System.IO). 5 public procedures. Introduced in BC25, still in BC30.

Base Application · System.IO · BC25-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/System/DataExchange/Transformations/TransformationRule.Interface.al) · facts from BC29

## Procedures

- `TransformText(TransformationRule: Record "Transformation Rule"; OldValue: Text; var NewValue: Text)`
- `IsDataFormatUpdateAllowed(): Boolean`
- `CheckMandatoryFieldsInTransformationRule(TransformationRule: Record "Transformation Rule")`
- `ValidateTransformationRuleField(FieldNo: Integer; var TransformationRule: Record "Transformation Rule"; var xTransformationRule: Record "Transformation Rule"): Boolean`
- `GetVisibleGroups(TransformationRule: Record "Transformation Rule"; var VisibleTransformationRuleGroups: List of [Enum "Transformation Rule Group"])`

## Across versions

- Present in: BC25-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Transformation Rule")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
