---
id: object/interface/barcode-font-provider
type: object
title: Interface "Barcode Font Provider"
summary: Interface "Barcode Font Provider" in System Application (System.Text). 5 public procedures. Present since at least BC28, still in BC30.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: d4df2b2821d32981a6928e05834948f9ae1e8391ccc850465712be7434a7b61b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Barcode/src/Barcode%20Provider/Font/BarcodeFontProvider.Interface.al
    title: src/System Application/App/Barcode/src/Barcode Provider/Font/BarcodeFontProvider.Interface.al (releases/29.x)
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
name: Barcode Font Provider
namespace: System.Text
app: System Application
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

# Interface "Barcode Font Provider"

> Interface "Barcode Font Provider" in System Application (System.Text). 5 public procedures. Present since at least BC28, still in BC30.

System Application · System.Text · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Barcode/src/Barcode%20Provider/Font/BarcodeFontProvider.Interface.al) · facts from BC29

## Procedures

- `GetSupportedBarcodeSymbologies(var Result: List of [Enum "Barcode Symbology"])`
- `EncodeFont(InputText: Text; BarcodeSymbology: Enum "Barcode Symbology"): Text`: Encodes an input text into a barcode.
- `EncodeFont(InputText: Text; BarcodeSymbology: Enum "Barcode Symbology"; BarcodeEncodeSettings: Record "Barcode Encode Settings"): Text`: Encodes an input text into a barcode.
- `ValidateInput(InputText: Text; BarcodeSymbology: Enum "Barcode Symbology")`: Validates if the input text is in a valid format to be encoded using the provided barcode symbology.
- `ValidateInput(InputText: Text; BarcodeSymbology: Enum "Barcode Symbology"; BarcodeEncodeSettings: Record "Barcode Encode Settings")`: Validates if the input text is in a valid format to be encoded using the provided barcode symbology.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
