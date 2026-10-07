---
id: object/interface/ic-data-exchange
type: object
title: Interface "IC Data Exchange"
summary: Interface "IC Data Exchange" in Base Application (Microsoft.Intercompany.DataExchange). 24 public procedures. Present since at least BC23, still in BC30.
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
  at: "2026-10-07T16:23:11.326Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 766f75619a0a31a60d9c7f77157bea9cd367463271b78e7b1183f1088cba9b13
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Finance/Intercompany/DataExchange/ICDataExchange.Interface.al
    title: src/Layers/W1/BaseApp/Finance/Intercompany/DataExchange/ICDataExchange.Interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
name: IC Data Exchange
namespace: Microsoft.Intercompany.DataExchange
app: Base Application
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
  procedures: 24
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "IC Data Exchange"

> Interface "IC Data Exchange" in Base Application (Microsoft.Intercompany.DataExchange). 24 public procedures. Present since at least BC23, still in BC30.

Base Application · Microsoft.Intercompany.DataExchange · BC23-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Finance/Intercompany/DataExchange/ICDataExchange.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetICPartnerICGLAccount(ICPartner: Record "IC Partner"; var TempICPartnerICGLAccount: Record "IC G/L Account" temporary)`
- `GetICPartnerICDimension(ICPartner: Record "IC Partner"; var TempICPartnerICDimension: Record "IC Dimension" temporary)`
- `GetICPartnerICDimensionValue(ICPartner: Record "IC Partner"; var TempICPartnerICDimensionValue: Record "IC Dimension Value" temporary)`
- `GetICPartnerFromICPartner(ICPartner: Record "IC Partner"; var TempRegisteredICPartner: Record "IC Partner" temporary)`
- `GetICPartnerFromICPartner(ICPartner: Record "IC Partner"; ICPartnerCode: Code[20]; var TempRegisteredICPartner: Record "IC Partner" temporary)`
- `GetICPartnerICSetup(ICPartner: Record "IC Partner"; var TempICPartnerICSetup: Record "IC Setup" temporary)`
- `GetICPartnerICSetup(ICPartnerName: Text; var TempICPartnerICSetup: Record "IC Setup" temporary)`
- `GetICPartnerGeneralLedgerSetup(ICPartner: Record "IC Partner"; var TempICPartnerGeneralLedgerSetup: Record "General Ledger Setup" temporary)`
- `GetICPartnerGeneralLedgerSetup(ICPartnerName: Text; var TempICPartnerGeneralLedgerSetup: Record "General Ledger Setup" temporary)`
- `GetICPartnerCompanyInformation(ICPartner: Record "IC Partner"; var TempICPartnerCompanyInformation: Record "Company Information" temporary)`
- `GetICPartnerCompanyInformation(ICPartnerName: Text; var TempICPartnerCompanyInformation: Record "Company Information" temporary)`
- `GetICPartnerBankAccount(ICPartner: Record "IC Partner"; var TempICPartnerBankAccount: Record "Bank Account" temporary)`
- `GetICPartnerICInboxTransaction(ICPartner: Record "IC Partner"; var TempICPartnerICInboxTransaction: Record "IC Inbox Transaction" temporary)`
- `GetICPartnerHandledICInboxTransaction(ICPartner: Record "IC Partner"; var TempICPartnerHandledICInboxTransaction: Record "Handled IC Inbox Trans." temporary)`
- `PostICTransactionToICPartnerInbox(ICPartner: Record "IC Partner"; var TempICPartnerICInboxTransaction: Record "IC Inbox Transaction" temporary)`
- `PostICJournalLineToICPartnerInbox(ICPartner: Record "IC Partner"; var TempICPartnerICInboxJnlLine: Record "IC Inbox Jnl. Line" temporary)`
- `PostICPurchaseHeaderToICPartnerInbox(ICPartner: Record "IC Partner"; var TempICPartnerICInboxPurchaseHeader: Record "IC Inbox Purchase Header" temporary; var RegisteredPartner: Record "IC Partner" temporary)`
- `PostICPurchaseLineToICPartnerInbox(ICPartner: Record "IC Partner"; var TempICPartnerICInboxPurchaseLine: Record "IC Inbox Purchase Line" temporary)`
- `PostICSalesHeaderToICPartnerInbox(ICPartner: Record "IC Partner"; var TempICPartnerICInboxSalesHeader: Record "IC Inbox Sales Header" temporary; var RegisteredPartner: Record "IC Partner" temporary)`
- `PostICSalesLineToICPartnerInbox(ICPartner: Record "IC Partner"; var TempICPartnerICInboxSalesLine: Record "IC Inbox Sales Line" temporary)`
- `PostICJournalLineDimensionToICPartnerInbox(ICPartner: Record "IC Partner"; var TempICPartnerICInboxOutboxJnlLineDim: Record "IC Inbox/Outbox Jnl. Line Dim." temporary)`
- `PostICDocumentDimensionToICPartnerInbox(ICPartner: Record "IC Partner"; var TempICPartnerICDocDim: Record "IC Document Dimension" temporary)`
- `PostICCommentLineToICPartnerInbox(ICPartner: Record "IC Partner"; var TempICPartnerICInboxCommentLine: Record "IC Comment Line" temporary)`
- `EnqueueAutoAcceptedICInboxTransaction(ICPartner: Record "IC Partner"; ICInboxTransaction: Record "IC Inbox Transaction")`

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "IC Data Exchange")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "IC Data Exchange"`

## Across versions

- Present in: BC23, BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
