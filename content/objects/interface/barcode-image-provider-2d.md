---
id: object/interface/barcode-image-provider-2d
type: object
title: Interface "Barcode Image Provider 2D"
summary: Interface "Barcode Image Provider 2D" in System Application (System.Text). 3 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 75183130508f8221ad7ba710a30f0bde58bc5bf97a1884ba00150d2c8367f9a0
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Barcode/src/Barcode%20Provider%202D/Image/BarcodeImageProvider2D.Interface.al
    title: src/System Application/App/Barcode/src/Barcode Provider 2D/Image/BarcodeImageProvider2D.Interface.al (releases/29.x)
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
name: Barcode Image Provider 2D
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
  procedures: 3
  events: 0
  subscribers: 0
---

# Interface "Barcode Image Provider 2D"

> Interface "Barcode Image Provider 2D" in System Application (System.Text). 3 public procedures. Present since at least BC28, still in BC30.

System Application · System.Text · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Barcode/src/Barcode%20Provider%202D/Image/BarcodeImageProvider2D.Interface.al) · facts from BC29

## Procedures

- `GetSupportedBarcodeSymbologies(var Result: List of [Enum "Barcode Symbology 2D"])`
- `EncodeImage(InputText: Text; BarcodeSymbology2D: Enum "Barcode Symbology 2D"): Codeunit "Temp Blob"`: Encodes an input text into a 2D barcode.
- `EncodeImage(InputText: Text; BarcodeSymbology2D: Enum "Barcode Symbology 2D"; BarcodeEncodeSettings2D: Record "Barcode Encode Settings 2D"): Codeunit "Temp Blob"`: Encodes an input text into a 2D barcode.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
