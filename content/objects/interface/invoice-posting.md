---
id: object/interface/invoice-posting
type: object
title: Interface "Invoice Posting"
summary: Interface "Invoice Posting" in Base Application (Microsoft.Finance.ReceivablesPayables). 15 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: cf7f0917c4ac51bacef83ef309c64469669069a03ee121f2e6e80e31da51e660
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/ReceivablesPayables/InvoicePosting.Interface.al
    title: src/Layers/W1/BaseApp/Finance/ReceivablesPayables/InvoicePosting.Interface.al (releases/29.x)
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
name: Invoice Posting
namespace: Microsoft.Finance.ReceivablesPayables
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
  procedures: 15
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Invoice Posting"

> Interface "Invoice Posting" in Base Application (Microsoft.Finance.ReceivablesPayables). 15 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Finance.ReceivablesPayables · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Finance/ReceivablesPayables/InvoicePosting.Interface.al) · facts from BC29

## Procedures

- `Check(TableID: Integer)`
- `ClearBuffers()`: Clear temporary posting buffers in invoice posting codeunit
- `CheckCreditLine(DocumentHeaderVar: Variant; DocumentLineVar: Variant)`: Check credit limit for document customer
- `SetHideProgressWindow(NewHideProgressWindow: Boolean)`: Set HideProgressWindow variable inside the invoice posting codeunit
- `SetParameters(InvoicePostingParameters: Record "Invoice Posting Parameters")`: Set posting related parameters using temporary table
- `SetPreviewMode(NewPreviewMode: Boolean)`: Set PreviewMode variable inside the invoice posting codeunit
- `SetSuppressCommit(NewSuppressCommit: Boolean)`: Set SupressCommit variable inside the invoice posting codeunit
- `SetTotalLines(TotalDocumentLine: Variant; TotalDocumentLineLCY: Variant)`: Set SupressCommit variable inside the invoice posting codeunit
- `PrepareLine(DocumentHeaderVar: Variant; DocumentLineVar: Variant; DocumentLineACYVar: Variant)`: Prepare invoice posting buffer line from source document line
- `PrepareJobLine(DocumentHeaderVar: Variant; DocumentLineVar: Variant; DocumentLineACYVar: Variant)`: Prepare invoice posting buffer line from source document job line
- `PostLedgerEntry(DocumentHeaderVar: Variant; var GenJnlPostLine: Codeunit "Gen. Jnl.-Post Line")`: Process customer or vendor ledger entry.
- `PostBalancingEntry(DocumentHeaderVar: Variant; var GenJnlPostLine: Codeunit "Gen. Jnl.-Post Line")`: Process customer or vendor ledger entry.
- `PostLines(DocumentHeaderVar: Variant; var GenJnlPostLine: Codeunit "Gen. Jnl.-Post Line"; var Window: Dialog; var TotalAmount: Decimal)`: Process invoice posting buffer and post ledger entries for each record.
- `CalcDeferralAmounts(DocumentHeaderVar: Variant; DocumentLineVar: Variant; OriginalDeferralAmount: Decimal)`: Calculate deferral amounts for invoice posting buffer
- `CreatePostedDeferralSchedule(DocumentLineVar: Variant; NewDocumentType: Integer; NewDocumentNo: Code[20]; NewLineNo: Integer; PostingDate: Date)`: Create deferral schedule for posted documents

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
