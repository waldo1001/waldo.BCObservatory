---
id: object/interface/barcode-image-provider-2d
type: object
title: Interface "Barcode Image Provider 2D"
summary: Interface "Barcode Image Provider 2D" in System Application (System.Text). 3 public procedures. Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: null
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
  input_hash: 1bb301b8cc1726022d541aef2e66c0472dc3cd2b32847069c8d033cc37170fc4
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Barcode/src/Barcode%20Provider%202D/Image/BarcodeImageProvider2D.Interface.al
    title: src/System Application/App/Barcode/src/Barcode Provider 2D/Image/BarcodeImageProvider2D.Interface.al (releases/29.x)
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
name: Barcode Image Provider 2D
namespace: System.Text
app: System Application
extends: null
first_version: "23"
last_version: "30"
present_in:
  - "23"
  - "24"
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
  procedures: 3
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
  implemented_by: 2
---

# Interface "Barcode Image Provider 2D"

> Interface "Barcode Image Provider 2D" in System Application (System.Text). 3 public procedures. Present since at least BC23, still in BC30.

System Application · System.Text · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Barcode/src/Barcode%20Provider%202D/Image/BarcodeImageProvider2D.Interface.al) · facts from BC29

## Procedures

- `GetSupportedBarcodeSymbologies(var Result: List of [Enum "Barcode Symbology 2D"])`
- `EncodeImage(InputText: Text; BarcodeSymbology2D: Enum "Barcode Symbology 2D"): Codeunit "Temp Blob"`: Encodes an input text into a 2D barcode.
- `EncodeImage(InputText: Text; BarcodeSymbology2D: Enum "Barcode Symbology 2D"; BarcodeEncodeSettings2D: Record "Barcode Encode Settings 2D"): Codeunit "Temp Blob"`: Encodes an input text into a 2D barcode.

## Implemented by

- [Codeunit 9223 "Dynamics 2D Provider"](../codeunit/9223.md)
- [Enum 9207 "Barcode Image Provider 2D"](../enum/9207.md)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Barcode Image Provider 2D")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
