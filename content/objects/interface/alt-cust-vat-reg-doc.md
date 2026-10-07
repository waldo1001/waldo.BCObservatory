---
id: object/interface/alt-cust-vat-reg-doc
type: object
title: Interface "Alt. Cust. VAT Reg. Doc."
summary: Interface "Alt. Cust. VAT Reg. Doc." in Base Application (Microsoft.Finance.VAT.Registration). 5 public procedures. Introduced in BC25, still in BC30.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: efa87d9b6c6f8f0d5dc051d8789366877dc5a0a54038f47f0b0d01a9bdb480be
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Finance/VAT/Registration/AltCustVATRegDoc.Interface.al
    title: src/Layers/W1/BaseApp/Finance/VAT/Registration/AltCustVATRegDoc.Interface.al (releases/29.x)
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
name: Alt. Cust. VAT Reg. Doc.
namespace: Microsoft.Finance.VAT.Registration
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
  implemented_by: 2
---

# Interface "Alt. Cust. VAT Reg. Doc."

> Interface "Alt. Cust. VAT Reg. Doc." in Base Application (Microsoft.Finance.VAT.Registration). 5 public procedures. Introduced in BC25, still in BC30.

Base Application · Microsoft.Finance.VAT.Registration · BC25-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Finance/VAT/Registration/AltCustVATRegDoc.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `Init(var SalesHeader: Record "Sales Header"; xSalesHeader: Record "Sales Header")`: Initializes the VAT registration data taken from the alternative customer registration in the sales header.
- `CopyFromCustomer(var SalesHeader: Record "Sales Header"; xSalesHeader: Record "Sales Header")`: Copies the VAT registration data from the customer to the sales header.
- `UpdateSetupOnShipToCountryChangeInSalesHeader(var SalesHeader: Record "Sales Header"; xSalesHeader: Record "Sales Header")`: Updates the VAT registration data when the Ship-to Country/Region Code is changed in the sales header.
- `UpdateSetupOnVATCountryChangeInSalesHeader(var SalesHeader: Record "Sales Header"; xSalesHeader: Record "Sales Header")`: Updates the VAT registration data when the VAT Country/Region Code is changed in the sales header.
- `UpdateSetupOnBillToCustomerChangeInSalesHeader(var SalesHeader: Record "Sales Header"; xSalesHeader: Record "Sales Header"; BillToCustomer: Record Customer)`: Updates the VAT registration data when the Bill-to Customer is changed in the sales header.

## Implemented by

- [Codeunit 205 "Alt. Cust. VAT Reg. Doc. Impl."](../codeunit/205.md)
- [Enum 205 "Alt. Cust VAT Reg. Doc."](../enum/205.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Alt. Cust. VAT Reg. Doc.")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Alt. Cust. VAT Reg. Doc."`

## Across versions

- Present in: BC25-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
