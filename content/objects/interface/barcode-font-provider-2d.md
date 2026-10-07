---
id: object/interface/barcode-font-provider-2d
type: object
title: Interface "Barcode Font Provider 2D"
summary: Interface "Barcode Font Provider 2D" in System Application (System.Text). 2 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e4b7774e3a215d684d106f35d215ddfbf2aee2d69b0ccbf7db3f4db87af45459
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/Barcode/src/Barcode%20Provider%202D/Font/BarcodeFontProvider2D.Interface.al
    title: src/System Application/App/Barcode/src/Barcode Provider 2D/Font/BarcodeFontProvider2D.Interface.al (releases/29.x)
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
name: Barcode Font Provider 2D
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
  procedures: 2
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Barcode Font Provider 2D"

> Interface "Barcode Font Provider 2D" in System Application (System.Text). 2 public procedures. Present since at least BC28, still in BC30.

System Application · System.Text · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/Barcode/src/Barcode%20Provider%202D/Font/BarcodeFontProvider2D.Interface.al) · facts from BC29

## Procedures

- `GetSupportedBarcodeSymbologies(var Result: List of [Enum "Barcode Symbology 2D"])`
- `EncodeFont(InputText: Text; BarcodeSymbology2D: Enum "Barcode Symbology 2D"): Text`: Encodes an input text into a 2D barcode.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
