---
id: object/interface/ipdfdocumenthandler
type: object
title: Interface "IPdfDocumentHandler"
summary: Interface "IPdfDocumentHandler" in Base Application (Microsoft.EServices.EDocument). 1 public procedures. Introduced in BC28, still in BC30.
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
  input_hash: e9da9cbbe1dbf8e9de92669b434c24e907b9498f83e8abfade67c260e8afb450
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/eServices/EDocument/IPdfDocumentHandler.Interface.al
    title: src/Layers/W1/BaseApp/eServices/EDocument/IPdfDocumentHandler.Interface.al (releases/29.x)
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
name: IPdfDocumentHandler
namespace: Microsoft.EServices.EDocument
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
  procedures: 1
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
  implemented_by: 42
---

# Interface "IPdfDocumentHandler"

> Interface "IPdfDocumentHandler" in Base Application (Microsoft.EServices.EDocument). 1 public procedures. Introduced in BC28, still in BC30.

Base Application · Microsoft.EServices.EDocument · BC28-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/eServices/EDocument/IPdfDocumentHandler.Interface.al) · facts from BC29

## Procedures

- `GeneratePdfBlobWithDocumentType(DocumentId: Guid; DocumentType: Enum "Attachment Entity Buffer Document Type"; var TempAttachmentEntityBuffer: Record "Attachment Entity Buffer" temporary): Boolean`

## Implemented by

- [Codeunit 4999 "Return Shpt. PDF Doc.Handler"](../codeunit/4999.md)
- [Codeunit 5001 "Bl. S. Order PDF Doc.Handler"](../codeunit/5001.md)
- [Codeunit 5002 "Bl. P. Order PDF Doc.Handler"](../codeunit/5002.md)
- [Codeunit 5003 "S. Ret. Order PDF Doc.Handler"](../codeunit/5003.md)
- [Codeunit 5004 "Sales Shipment PDF Doc.Handler"](../codeunit/5004.md)
- [Codeunit 5006 "Purch. Quote PDF Doc.Handler"](../codeunit/5006.md)
- [Codeunit 5007 "Purch. Rcpt. PDF Doc.Handler"](../codeunit/5007.md)
- [Codeunit 5008 "Return Receipt PDF Doc.Handler"](../codeunit/5008.md)
- [Codeunit 5009 "P. Ret. Order PDF Doc.Handler"](../codeunit/5009.md)
- [Codeunit 5017 "Trans. Order PDF Doc.Handler"](../codeunit/5017.md)
- [Codeunit 5018 "Trans. Shpt. PDF Doc.Handler"](../codeunit/5018.md)
- [Codeunit 5019 "Trans. Rcpt. PDF Doc.Handler"](../codeunit/5019.md)
- [Codeunit 5020 "S.Arch.Quote PDF Doc.Handler"](../codeunit/5020.md)
- [Codeunit 5021 "S.Arch.Order PDF Doc.Handler"](../codeunit/5021.md)
- [Codeunit 5022 "P.Arch.Quote PDF Doc.Handler"](../codeunit/5022.md)
- [Codeunit 5023 "P.Arch.Order PDF Doc.Handler"](../codeunit/5023.md)
- [Codeunit 5024 "S.Arch.Return PDF Doc.Handler"](../codeunit/5024.md)
- [Codeunit 5025 "P.Arch.Return PDF Doc.Handler"](../codeunit/5025.md)
- [Codeunit 5026 "Asm. Order PDF Doc.Handler"](../codeunit/5026.md)
- [Codeunit 5027 "P.Asm. Order PDF Doc.Handler"](../codeunit/5027.md)
- [Codeunit 5028 "S.Arch.Bl.Ord PDF Doc.Handler"](../codeunit/5028.md)
- [Codeunit 5029 "P.Arch.Bl.Ord PDF Doc.Handler"](../codeunit/5029.md)
- [Codeunit 5030 "Phys.Inv.Ord. PDF Doc.Handler"](../codeunit/5030.md)
- [Codeunit 5031 "P.Phys.InvOrd PDF Doc.Handler"](../codeunit/5031.md)
- [Codeunit 5032 "Phys.Inv.Rec. PDF Doc.Handler"](../codeunit/5032.md)
- [Codeunit 5033 "P.Phys.InvRec PDF Doc.Handler"](../codeunit/5033.md)
- [Codeunit 5034 "Inv. Shpt. PDF Doc.Handler"](../codeunit/5034.md)
- [Codeunit 5035 "Inv. Rcpt. PDF Doc.Handler"](../codeunit/5035.md)
- [Codeunit 5036 "P.Inv. Shpt. PDF Doc.Handler"](../codeunit/5036.md)
- [Codeunit 5037 "P.Inv. Rcpt. PDF Doc.Handler"](../codeunit/5037.md)
- [Codeunit 5038 "P.Direct Trans PDF Doc.Handler"](../codeunit/5038.md)
- [Codeunit 5440 "Default PDF Doc.Handler"](../codeunit/5440.md)
- [Codeunit 5441 "Sales Order PDF Doc.Handler"](../codeunit/5441.md)
- [Codeunit 5444 "Sales Cr.Memo PDF Doc.Handler"](../codeunit/5444.md)
- [Codeunit 5445 "Cust. St. PDF Doc.Handler"](../codeunit/5445.md)
- [Codeunit 5446 "Purch. Invoice PDF Doc.Handler"](../codeunit/5446.md)
- [Codeunit 5447 "Purch. Cr.Memo PDF Doc.Handler"](../codeunit/5447.md)
- [Codeunit 5449 "Sales Quote PDF Doc.Handler"](../codeunit/5449.md)
- [Codeunit 5450 "Sales Invoice PDF Doc.Handler"](../codeunit/5450.md)
- [Codeunit 5453 "Purch. Order PDF Doc.Handler"](../codeunit/5453.md)
- [Codeunit 5454 "Project PDF Doc.Handler"](../codeunit/5454.md)
- [Enum 135 "Attachment Entity Buffer Document Type"](../enum/135.md)

## Across versions

- Present in: BC28-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IPdfDocumentHandler")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
