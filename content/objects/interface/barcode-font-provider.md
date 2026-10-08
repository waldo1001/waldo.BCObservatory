---
id: object/interface/barcode-font-provider
type: object
title: Interface "Barcode Font Provider"
summary: Interface "Barcode Font Provider" in System Application (System.Text). 5 public procedures. Present since at least BC23, still in BC30.
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
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bef8c28ddf621799db30784b40857fc33df9c8c9bb71814bfe925620aa9c3bf0
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/Barcode/src/Barcode%20Provider/Font/BarcodeFontProvider.Interface.al
    title: src/System Application/App/Barcode/src/Barcode Provider/Font/BarcodeFontProvider.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
name: Barcode Font Provider
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

# Interface "Barcode Font Provider"

> Interface "Barcode Font Provider" in System Application (System.Text). 5 public procedures. Present since at least BC23, still in BC30.

System Application · System.Text · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/Barcode/src/Barcode%20Provider/Font/BarcodeFontProvider.Interface.al) · facts from BC29

## Procedures

- `GetSupportedBarcodeSymbologies(var Result: List of [Enum "Barcode Symbology"])`
- `EncodeFont(InputText: Text; BarcodeSymbology: Enum "Barcode Symbology"): Text`: Encodes an input text into a barcode.
- `EncodeFont(InputText: Text; BarcodeSymbology: Enum "Barcode Symbology"; BarcodeEncodeSettings: Record "Barcode Encode Settings"): Text`: Encodes an input text into a barcode.
- `ValidateInput(InputText: Text; BarcodeSymbology: Enum "Barcode Symbology")`: Validates if the input text is in a valid format to be encoded using the provided barcode symbology.
- `ValidateInput(InputText: Text; BarcodeSymbology: Enum "Barcode Symbology"; BarcodeEncodeSettings: Record "Barcode Encode Settings")`: Validates if the input text is in a valid format to be encoded using the provided barcode symbology.

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Barcode Font Provider")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
