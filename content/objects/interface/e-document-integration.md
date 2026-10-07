---
id: object/interface/e-document-integration
type: object
title: Interface "E-Document Integration"
summary: Interface "E-Document Integration" in EDocument (Microsoft.eServices.EDocument). 8 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 26.0).
tier: official
language: en
tags:
  - interface
  - edocument
versions:
  introduced: "29"
  last_changed: null
  deprecated: "26.0"
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 588665f9753315aa33b62bcfde71a21b8ba46803808e5ecb91a15b31f8c67dcc
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/EDocument/app/src/Integration/EDocumentIntegration.Interface.al
    title: src/Apps/W1/EDocument/app/src/Integration/EDocumentIntegration.Interface.al (releases/29.x)
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
name: E-Document Integration
namespace: Microsoft.eServices.EDocument
app: EDocument
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete:
  state: Pending
  tag: "26.0"
  reason: This interface is obsolete. Use Send, Receive and "Default Int. Actions" interfaces instead.
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 8
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

# Interface "E-Document Integration"

> Interface "E-Document Integration" in EDocument (Microsoft.eServices.EDocument). 8 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 26.0).

EDocument · Microsoft.eServices.EDocument · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/EDocument/app/src/Integration/EDocumentIntegration.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 26.0 |
| ObsoleteReason | This interface is obsolete. Use Send, Receive and "Default Int. Actions" interfaces instead. |

## Procedures

- `Send(var EDocument: Record "E-Document"; var TempBlob: Codeunit "Temp Blob"; var IsAsync: Boolean; var HttpRequest: HttpRequestMessage; var HttpResponse: HttpResponseMessage)` (obsolete 26.0: Replaced by Send method in IDocumentSender interface.): Use it to send an E-Document to external service.
- `SendBatch(var EDocuments: Record "E-Document"; var TempBlob: Codeunit "Temp Blob"; var IsAsync: Boolean; var HttpRequest: HttpRequestMessage; var HttpResponse: HttpResponseMessage)` (obsolete 26.0: Replaced by Send method in IDocumentSender interface. EDocument record will contain multiple records when using batch.): Use it to send a batch of E-Documents to external service.
- `GetResponse(var EDocument: Record "E-Document"; var HttpRequest: HttpRequestMessage; var HttpResponse: HttpResponseMessage): Boolean` (obsolete 26.0: Replaced by GetResponse method in IDocumentResponseHandler interface. Called if CU implementing IDocSender also implements IDocumentResponseHandler): Use this method to asynchronously retrieve the response after sending a request for an E-Document.
- `GetApproval(var EDocument: Record "E-Document"; var HttpRequest: HttpRequestMessage; var HttpResponse: HttpResponseMessage): Boolean` (obsolete 26.0: Replaced by GetApprovalStatus method in ISentDocumentActions interface.): Use it to check if document is approved or rejected.
- `Cancel(var EDocument: Record "E-Document"; var HttpRequest: HttpRequestMessage; var HttpResponse: HttpResponseMessage): Boolean` (obsolete 26.0: Replaced by GetCancellationStatus method in ISentDocumentActions interface.): Use it to send a cancel request for an E-Document.
- `ReceiveDocument(var TempBlob: Codeunit "Temp Blob"; var HttpRequest: HttpRequestMessage; var HttpResponse: HttpResponseMessage)` (obsolete 26.0: Replaced by ReceiveDocuments method in IDocumentReceiver interface.): Use it to receive E-Document from external service.
- `GetDocumentCountInBatch(var TempBlob: Codeunit "Temp Blob"): Integer` (obsolete 26.0: Removed, now part of ReceiveDocuments method in IDocumentReceiver interface. Temp Blob list param determines the count.): Use it to define how many received documents in batch import.
- `GetIntegrationSetup(var SetupPage: Integer; var SetupTable: Integer)` (obsolete 26.0: Moved out of interface. Replaced by OnBeforeOpenServiceIntegrationSetupPage event on Service Page.): Use it to define the integration setup of a service

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "E-Document Integration")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "E-Document Integration"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none
- Obsolete: Pending since 26.0, "This interface is obsolete. Use Send, Receive and "Default Int. Actions" interfaces instead."

## Deprecations

- object: Pending 26.0 (#if not CLEAN26), "This interface is obsolete. Use Send, Receive and "Default Int. Actions" interfaces instead."
- procedure Cancel: Pending 26.0, "Replaced by GetCancellationStatus method in ISentDocumentActions interface."
- procedure GetApproval: Pending 26.0, "Replaced by GetApprovalStatus method in ISentDocumentActions interface."
- procedure GetDocumentCountInBatch: Pending 26.0, "Removed, now part of ReceiveDocuments method in IDocumentReceiver interface. Temp Blob list param determines the count."
- procedure GetIntegrationSetup: Pending 26.0, "Moved out of interface. Replaced by OnBeforeOpenServiceIntegrationSetupPage event on Service Page."
- procedure GetResponse: Pending 26.0, "Replaced by GetResponse method in IDocumentResponseHandler interface. Called if CU implementing IDocSender also implements IDocumentResponseHandler"
- procedure ReceiveDocument: Pending 26.0, "Replaced by ReceiveDocuments method in IDocumentReceiver interface."
- procedure Send: Pending 26.0, "Replaced by Send method in IDocumentSender interface."
- procedure SendBatch: Pending 26.0, "Replaced by Send method in IDocumentSender interface. EDocument record will contain multiple records when using batch."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
