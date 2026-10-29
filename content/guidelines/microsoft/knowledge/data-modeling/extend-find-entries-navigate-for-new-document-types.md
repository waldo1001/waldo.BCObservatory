---
id: guideline/microsoft/knowledge/data-modeling/extend-find-entries-navigate-for-new-document-types
type: guideline
title: Extend Find Entries (Navigate) for new document or transaction tables
summary: page 344 Navigate (caption "Find entries") lets a user enter a document number and posting date and see, across every document and ledger entry table BC knows about, how many matching records exist — then drill into any of those rows.
tier: official
language: en
tags:
  - navigate
  - find-entries
  - document-entry
  - integration-event
  - drill-down
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:36.784Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 468756e923238d010f4d3797e4add9e8c6b594a6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-find-entries-navigate-for-new-document-types.md
    title: "microsoft/BCQuality: Extend Find Entries (Navigate) for new document or transaction tables"
    date: "2026-09-30"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/265
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/175
repo_path: microsoft/knowledge/data-modeling/extend-find-entries-navigate-for-new-document-types.md
layer: microsoft
kind: rule
domain: data-modeling
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - OnAfterFindRecords
  - DocNoFilter
  - PostingDateFilter
  - OnBeforeShowRecords
---

# Extend Find Entries (Navigate) for new document or transaction tables

> page 344 Navigate (caption "Find entries") lets a user enter a document number and posting date and see, across every document and ledger entry table BC knows about, how many matching records exist — then drill into any of those rows.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-find-entries-navigate-for-new-document-types.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

`page 344 Navigate` (caption "Find entries") lets a user enter a document
number and posting date and see, across every document and ledger entry
table BC knows about, how many matching records exist — then drill into
any of those rows. It works over a temporary `table "Document Entry"`
that gets populated, one row per source table, by dozens of separate
lookups hardcoded into the page (`Rec.InsertIntoDocEntry(Database::"Sales
Invoice Header", ...)` and similar, one per table). A new custom document
or transaction table is invisible to Find Entries by default — nobody
searching by document number will ever see it in the result list — until
it registers itself.

Registration is a two-sided integration event, and only implementing one
side produces a page that is worse than not participating at all. The
`OnAfterFindRecords` event lets a subscriber add a row to the result list
for a custom table. But the subsequent "show records" action, `procedure
ShowRecords`, resolves which page to open through its own hardcoded `case
Rec."Table ID" of` — the same shape as the row-population code, and just
as unaware of any table added by an extension. That `case` statement has
no `else` branch. A custom table's row can appear in the result list,
with a correct count, and be entirely un-clickable: the user selects it,
chooses "Show records", and nothing happens, silently.

## Best Practice

Subscribe to both `Navigate::OnAfterFindRecords` and
`Navigate::OnBeforeShowRecords` together, as one unit of work, for any
custom table that should be searchable by document number:

- In `OnAfterFindRecords`, filter the custom table by the given
  `DocNoFilter`/`PostingDateFilter` and call
  `DocumentEntry.InsertIntoDocEntry(Database::"My Table", TableCaption,
  Count)` to add it to the result list.
- In `OnBeforeShowRecords`, check whether
  `TempDocumentEntry."Table ID" = Database::"My Table"`; if so, re-apply
  the same filters, open the appropriate card or list page, and set
  `IsHandled := true` so the page's own unrelated `case` statement is
  never reached for this table.
- If `OnAfterFindRecords` filters the custom table by a field that is not
  already that table's own unique key — for example an external
  reference number received from a counterparty, rather than the
  table's own `No.` — add a key combining that field with `Posting Date`,
  the same way BCApps does for `Purch. Inv. Header`'s `"Vendor Invoice
  No."` (see Source). This does not apply when filtering the table's own
  primary key, which is already unique on its own: `Sales Invoice
  Header` filters `"No."` and `"Posting Date"` through two separate,
  uncombined keys, with no compound key between them, because `"No."`
  alone is already sufficient.

See sample: [`extend-find-entries-navigate-for-new-document-types.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-find-entries-navigate-for-new-document-types.good.al).

## Anti Pattern

Subscribing only to `OnAfterFindRecords` (or only to
`OnBeforeShowRecords`). Registering the row without handling its
drill-down produces a search result that looks complete — the table name
and a correct record count both show up — but leads nowhere when
selected, with no error and no indication to the user that anything is
wrong.

See sample: [`extend-find-entries-navigate-for-new-document-types.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-find-entries-navigate-for-new-document-types.bad.al).

## Source

BCApps `Navigate.Page.al` (page 344, `src/Layers/W1/BaseApp/Foundation/Navigate/`):
- `[IntegrationEvent(true, false)] local procedure OnAfterFindRecords(var DocumentEntry: Record "Document Entry"; DocNoFilter: Text; PostingDateFilter: Text)`
- `[IntegrationEvent(true, false)] local procedure OnBeforeShowRecords(var TempDocumentEntry: Record "Document Entry" temporary; DocNoFilter: Text; PostingDateFilter: Text; ItemTrackingSearch: Boolean; ContactNo: Code[250]; ExtDocNo: Code[250]; var IsHandled: Boolean)`
- `procedure ShowRecords()`'s `case Rec."Table ID" of ... end;` has no `else` branch — confirmed by reading the full case block, which ends directly with `end;` followed by `OnAfterShowRecords(...)`.

BCApps `DocumentEntry.Table.al` (table backing page 344):
`procedure InsertIntoDocEntry(DocTableID: Integer; DocTableName: Text; DocNoOfRecords: Integer)` — the registration entry point called from `OnAfterFindRecords` subscribers.

BCApps `SalesInvoiceHeader.Table.al` (`src/Layers/W1/BaseApp/Sales/History/`):
`key(Key1; "No.")` (`Clustered = true`) and `key(Key9; "Posting Date")` are
two separate, uncombined keys — no compound key exists between them.

BCApps `PurchInvHeader.Table.al` (`src/Layers/W1/BaseApp/Purchases/History/`):
`key(Key4; "Vendor Invoice No.", "Posting Date")` — a compound key
combining a non-unique, externally-supplied reference number with
`Posting Date`, distinct from `key(Key1; "No.")`, its own unique primary
key.

## Examples

- [Good: extend-find-entries-navigate-for-new-document-types.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-find-entries-navigate-for-new-document-types.good.al)
- [Bad: extend-find-entries-navigate-for-new-document-types.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/extend-find-entries-navigate-for-new-document-types.bad.al)

## Names

- [table 265 "Document Entry"](../../../../objects/table/265.md) (names this object)

## Changed by

- [#175 9 AL/BC patterns: document distribution, price calculation & barcode extensibility](../../../../changes/bcquality/175.md), 2026-09-30

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
