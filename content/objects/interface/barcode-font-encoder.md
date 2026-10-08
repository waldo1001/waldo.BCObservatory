---
id: object/interface/barcode-font-encoder
type: object
title: Interface "Barcode Font Encoder"
summary: Interface "Barcode Font Encoder" in System Application (System.Text). 2 public procedures. Present since at least BC23, still in BC30.
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
  input_hash: be0fa14c0c3ad9f0a0712804662d43c51cdec3eac1ae2be327dc0c82adcb8225
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Barcode/src/Barcode%20Provider/Font/BarcodeFontEncoder.Interface.al
    title: src/System Application/App/Barcode/src/Barcode Provider/Font/BarcodeFontEncoder.Interface.al (releases/29.x)
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
name: Barcode Font Encoder
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
  procedures: 2
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
  implemented_by: 11
---

# Interface "Barcode Font Encoder"

> Interface "Barcode Font Encoder" in System Application (System.Text). 2 public procedures. Present since at least BC23, still in BC30.

System Application · System.Text · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Barcode/src/Barcode%20Provider/Font/BarcodeFontEncoder.Interface.al) · facts from BC29

## Procedures

- `EncodeFont(InputText: Text; var BarcodeEncodeSettings: Record "Barcode Encode Settings"): Text`
- `IsValidInput(InputText: Text; var BarcodeEncodeSettings: Record "Barcode Encode Settings"): Boolean`: Validates whether a text can be encoded. The validation is based on a regular expression according to https://www.neodynamic.com/Products/Help/BarcodeWinControl2.5/working_barcode_symbologies.htm

## Implemented by

- [Codeunit 9204 "IDA 1D Code39 Encoder"](../codeunit/9204.md)
- [Codeunit 9205 "IDA 1D Code93 Encoder"](../codeunit/9205.md)
- [Codeunit 9206 "IDA 1D Code128 Encoder"](../codeunit/9206.md)
- [Codeunit 9207 "IDA 1D EAN8 Encoder"](../codeunit/9207.md)
- [Codeunit 9208 "IDA 1D EAN13 Encoder"](../codeunit/9208.md)
- [Codeunit 9209 "IDA 1D I2of5 Encoder"](../codeunit/9209.md)
- [Codeunit 9210 "IDA 1D MSI Encoder"](../codeunit/9210.md)
- [Codeunit 9211 "IDA 1D Postnet Encoder"](../codeunit/9211.md)
- [Codeunit 9212 "IDA 1D UPCA Encoder"](../codeunit/9212.md)
- [Codeunit 9213 "IDA 1D UPCE Encoder"](../codeunit/9213.md)
- [Codeunit 9214 "IDA 1D Codabar Encoder"](../codeunit/9214.md)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Barcode Font Encoder")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
