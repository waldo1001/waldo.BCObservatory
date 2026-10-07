---
id: object/interface/alt-cust-vat-reg-doc
type: object
title: Interface "Alt. Cust. VAT Reg. Doc."
summary: Interface "Alt. Cust. VAT Reg. Doc." in Base Application (Microsoft.Finance.VAT.Registration). 5 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
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
  input_hash: 89e0ef7949e76244a2700e8f63c60581da6883a325a3ee6c1416eedd4b5efa0c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Finance/VAT/Registration/AltCustVATRegDoc.Interface.al
    title: src/Layers/W1/BaseApp/Finance/VAT/Registration/AltCustVATRegDoc.Interface.al (releases/29.x)
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
name: Alt. Cust. VAT Reg. Doc.
namespace: Microsoft.Finance.VAT.Registration
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

# Interface "Alt. Cust. VAT Reg. Doc."

> Interface "Alt. Cust. VAT Reg. Doc." in Base Application (Microsoft.Finance.VAT.Registration). 5 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Finance.VAT.Registration · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Layers/W1/BaseApp/Finance/VAT/Registration/AltCustVATRegDoc.Interface.al) · facts from BC29

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

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
