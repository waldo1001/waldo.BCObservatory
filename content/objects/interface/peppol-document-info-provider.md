---
id: object/interface/peppol-document-info-provider
type: object
title: Interface "PEPPOL Document Info Provider"
summary: Interface "PEPPOL Document Info Provider" in PEPPOL (Microsoft.Peppol). 8 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - peppol
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 27d8fe7d8563f0648edc16c3972ca0c3f1bac89173fd1595c721ef358224ea7a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLDocumentInfoProvider.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLDocumentInfoProvider.Interface.al (releases/29.x)
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
name: PEPPOL Document Info Provider
namespace: Microsoft.Peppol
app: PEPPOL
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
  procedures: 8
  events: 0
  subscribers: 0
---

# Interface "PEPPOL Document Info Provider"

> Interface "PEPPOL Document Info Provider" in PEPPOL (Microsoft.Peppol). 8 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLDocumentInfoProvider.Interface.al) · facts from BC29

## Procedures

- `GetGeneralInfo(SalesHeader: Record "Sales Header"; var ID: Text; var IssueDate: Text; var InvoiceTypeCode: Text; var InvoiceTypeCodeListID: Text; var Note: Text; var TaxPointDate: Text; var DocumentCurrencyCode: Text; var DocumentCurrencyCodeListID: Text; var TaxCurrencyCode: Text; var TaxCurrencyCodeListID: Text; var AccountingCost: Text)`
- `GetGeneralInfoBIS(SalesHeader: Record "Sales Header"; var ID: Text; var IssueDate: Text; var InvoiceTypeCode: Text; var Note: Text; var TaxPointDate: Text; var DocumentCurrencyCode: Text; var AccountingCost: Text)`: Gets general information for PEPPOL BIS format document creation.
- `GetInvoicePeriodInfo(var StartDate: Text; var EndDate: Text)`: Gets invoice period information for PEPPOL documents.
- `GetOrderReferenceInfo(SalesHeader: Record "Sales Header"; var OrderReferenceID: Text)`: Gets order reference information from the sales header.
- `GetOrderReferenceInfoBIS(SalesHeader: Record "Sales Header"; var OrderReferenceID: Text)`: Gets order reference information for PEPPOL BIS format.
- `GetContractDocRefInfo(SalesHeader: Record "Sales Header"; var ContractDocumentReferenceID: Text; var DocumentTypeCode: Text; var ContractRefDocTypeCodeListID: Text; var DocumentType: Text)`: Gets contract document reference information from the sales header.
- `GetBuyerReference(SalesHeader: Record "Sales Header"): Text`: Gets the buyer reference from the sales header.
- `GetCrMemoBillingReferenceInfo(SalesCrMemoHeader: Record "Sales Cr.Memo Header"; var InvoiceDocRefID: Text; var InvoiceDocRefIssueDate: Text)`: Gets credit memo billing reference information for referencing the original invoice.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
