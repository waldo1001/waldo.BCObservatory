---
id: object/interface/shpfy-ireturnrefund-process
type: object
title: Interface "Shpfy IReturnRefund Process"
summary: Interface "Shpfy IReturnRefund Process" in Shopify (Microsoft.Integration.Shopify). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - shopify
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 866666c6a0ce0849fbab1e7b8168097674e0a449a660f2fd156ca2b7b7b1075c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Shopify/app/src/Order%20Return%20Refund%20Processing/Interfaces/ShpfyIReturnRefundProcess.Interface.al
    title: src/Apps/W1/Shopify/app/src/Order Return Refund Processing/Interfaces/ShpfyIReturnRefundProcess.Interface.al (releases/29.x)
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
name: Shpfy IReturnRefund Process
namespace: Microsoft.Integration.Shopify
app: Shopify
extends: null
first_version: "29"
last_version: "30"
present_in:
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
---

# Interface "Shpfy IReturnRefund Process"

> Interface "Shpfy IReturnRefund Process" in Shopify (Microsoft.Integration.Shopify). 3 public procedures. Introduced in BC29, still in BC30.

Shopify · Microsoft.Integration.Shopify · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Shopify/app/src/Order%20Return%20Refund%20Processing/Interfaces/ShpfyIReturnRefundProcess.Interface.al) · facts from BC29

## Procedures

- `IsImportNeededFor(SourceDocumentType: Enum "Shpfy Source Document Type"): Boolean`
- `CanCreateSalesDocumentFor(SourceDocumentType: Enum "Shpfy Source Document Type"; SourceDocumentId: BigInteger; var ErrorInfo: ErrorInfo): Boolean`
- `CreateSalesDocument(SourceDocumentType: Enum "Shpfy Source Document Type"; SourceDocumentId: BigInteger): Record "Sales Header"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
