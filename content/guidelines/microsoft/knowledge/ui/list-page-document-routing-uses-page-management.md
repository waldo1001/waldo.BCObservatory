---
id: guideline/microsoft/knowledge/ui/list-page-document-routing-uses-page-management
type: guideline
title: Open documents from a mixed-type list through Page Management
summary: Some tables back several document pages, chosen by a type field. Sales Header rows open as Sales Quote, Sales Order, Sales Invoice, Sales Credit Memo, Blanket Sales Order, or Sales Return Order, depending on Document Type. A list over such a table cannot use one CardPageID.
tier: official
language: en
tags:
  - page-management
  - pagerun
  - show-document
  - document-type
  - cardpageid
  - list-page
  - page-run
  - getconditionalcardpageid
  - onconditionalcardpageidnotfound
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:27.407Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3e16a2ccde03c4d2c606e807f0dedc5e5acb7eb4
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/list-page-document-routing-uses-page-management.md
    title: "microsoft/BCQuality: Open documents from a mixed-type list through Page Management"
    date: "2026-10-06"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-guiallowed-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/214
  related:
    - to: object/codeunit/700
      title: codeunit 700 "Page Management"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/page/45
      title: page 45 "Sales List"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/page/53
      title: page 53 "Purchase List"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/page/516
      title: page 516 "Sales Lines"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/enum/36
      title: enum 36 "Sales Document Type"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/page/6619
      title: page 6619 "Sales Line Archive List"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/page/6626
      title: page 6626 "Purchase Line Archive List"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/6620
      title: codeunit 6620 "Copy Document Mgt."
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/page/41
      title: page 41 "Sales Quote"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/page/9305
      title: page 9305 "Sales Order List"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/page/904
      title: page 904 "Assembly List"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/ui/list-page-document-routing-uses-page-management.md
layer: microsoft
kind: rule
domain: ui
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
  - CardPageID
  - GetPageID
  - GetConditionalCardPageID
  - GetConditionalListPageID
  - OnBeforeGetConditionalCardPageID
  - OnAfterGetPageID
  - OnPageRunAtFieldOnBeforeRunPage
  - PageRunModal
  - PageRunList
  - PageRun
  - GuiAllowed
  - OnConditionalCardPageIDNotFound
  - IsHandled
  - ShowSalesDoc
  - ShowPurchDoc
  - PageRunAtField
  - GetSalesHeaderPageID
  - ShowDocument
---

# Open documents from a mixed-type list through Page Management

> Some tables back several document pages, chosen by a type field. Sales Header rows open as Sales Quote, Sales Order, Sales Invoice, Sales Credit Memo, Blanket Sales Order, or Sales Return Order, depending on Document Type. A list over such a table cannot use one CardPageID.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/list-page-document-routing-uses-page-management.md) · microsoft layer · ui · BC all · tier official · derived

## Description

Some tables back several document pages, chosen by a type field. `Sales Header` rows open as Sales Quote, Sales Order, Sales Invoice, Sales Credit Memo, Blanket Sales Order, or Sales Return Order, depending on `Document Type`. A list over such a table cannot use one `CardPageID`. Codeunit 700 `"Page Management"` already holds that mapping. `PageRun(Rec)` resolves the page through `GetPageID`, in this order: `GetConditionalCardPageID`, then the default card page (only for an existing record), then `GetConditionalListPageID`, then the table's lookup page. `GetConditionalCardPageID` handles `Sales Header`, `Purchase Header`, their archives, general and item journal batches and lines, requisition worksheets, and several other tables. Base App's own lists call it: the `Show Document` actions on `Sales List` and `Purchase List`, `Sales Lines` (after getting the header), and `Navigate` for posted documents.

A hand-written `case Rec."Document Type" of ... Page.Run(Page::"Sales Order", Rec)` copies that mapping into a single action. It misses mappings that Microsoft later adds to Page Management, and routing that extensions add through its events (`OnBeforeGetConditionalCardPageID`, `OnAfterGetPageID`, `OnPageRunAtFieldOnBeforeRunPage`). Page Management does not route new values of an extended `Sales Document Type` enum by itself either, so those still need a subscriber.

## Best Practice

In the list's open-document action, call `PageManagement.PageRun(Rec)`, or `PageRunModal` or `PageRunList` as needed. `PageRun` returns `false` without opening anything when `GuiAllowed` is false or no page resolves. See sample: [`list-page-document-routing-uses-page-management.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/list-page-document-routing-uses-page-management.good.al).

For a new table whose rows map to different pages, register the mapping once and then use `PageRun` everywhere. Subscribe to `OnConditionalCardPageIDNotFound`, which is raised only for tables the codeunit does not route itself. Microsoft's Sustainability app routes its journal batch and line tables this way. `OnBeforeGetConditionalCardPageID` is the `IsHandled` alternative, used by the Quality Management app.

## Anti Pattern

A page action that opens a record of a table Page Management routes, directly or after a `Get`, by switching on its `Document Type` (or a similar type field) and calling `Page.Run(Page::...)` in each branch. Base App still does this in several places, for example the `Show Document` actions of `Sales Line Archive List` and `Purchase Line Archive List`, and `Copy Document Mgt.` `ShowSalesDoc`/`ShowPurchDoc`. The result is a duplicated mapping, not a runtime error, so report it as minor. The same switch in a codeunit helper is outside this review's page scope. See sample: [`list-page-document-routing-uses-page-management.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/list-page-document-routing-uses-page-management.bad.al).

Not this pattern:

- Opening one known document type directly. `Opportunity` creates a quote and runs `Sales Quote`, and a single-type list such as `Sales Order List` sets `CardPageID = "Sales Order"`.
- A table that Page Management does not route. `Assembly List` switches on `Assembly Header."Document Type"` itself. Registering the table through `OnConditionalCardPageIDNotFound` is an improvement there, not a defect fix.

## References

- [PageManagement.Codeunit.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Utilities/PageManagement.Codeunit.al): `PageRun` (lines 44-47), `PageRunAtField` with the `GuiAllowed` exit (75-100), `GetPageID` resolution order (112-138, order at 121-133), `GetConditionalCardPageID` (194-263; unrouted tables raise `OnConditionalCardPageIDNotFound` at 258), `GetSalesHeaderPageID` with no `else` branch (289-315), integration events (671-719). [SalesDocumentType.Enum.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Document/SalesDocumentType.Enum.al) is `Extensible` (line 12).
- Callers: [SalesList.Page.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Document/SalesList.Page.al) (`ShowDocument`, lines 188-202; no `CardPageID`), [PurchaseList.Page.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Purchases/Document/PurchaseList.Page.al) (line 200), [SalesLines.Page.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Document/SalesLines.Page.al) (lines 224-230), [Navigate.Page.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Foundation/Navigate/Navigate.Page.al) (from line 1564).
- Subscribers: [SustWorkflowEventHandling.Codeunit.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Apps/W1/Sustainability/app/src/Workflow/SustWorkflowEventHandling.Codeunit.al) (lines 184-193), [QltyUtilitiesIntegration.Codeunit.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Apps/W1/Quality%20Management/app/src/Integration/Utilities/QltyUtilitiesIntegration.Codeunit.al) (lines 20-28).
- Remaining hand-rolled routing of routed tables: [SalesLineArchiveList.Page.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Archive/SalesLineArchiveList.Page.al) (lines 106-121), [PurchaseLineArchiveList.Page.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Purchases/Archive/PurchaseLineArchiveList.Page.al) (from line 109), [CopyDocumentMgt.Codeunit.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Utilities/CopyDocumentMgt.Codeunit.al) (lines 1369-1409), [OfficeDocumentHandler.Codeunit.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/CRM/Outlook/OfficeDocumentHandler.Codeunit.al) (lines 342-348).
- Not this pattern: [AssemblyList.Page.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Assembly/Document/AssemblyList.Page.al) (lines 111-121), [Opportunity.Table.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/CRM/Opportunity/Opportunity.Table.al) (lines 1221-1223), [SalesOrderList.Page.al](https://github.com/microsoft/BCApps/blob/837ef802485ee457e52310d2ecaa08b93d0122fd/src/Layers/W1/BaseApp/Sales/Document/SalesOrderList.Page.al) (line 44).

## Examples

- [Good: list-page-document-routing-uses-page-management.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/list-page-document-routing-uses-page-management.good.al)
- [Bad: list-page-document-routing-uses-page-management.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/list-page-document-routing-uses-page-management.bad.al)

## Names

- [System.GuiAllowed() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-guiallowed-method) (names GuiAllowed)
- [codeunit 700 "Page Management"](../../../../objects/codeunit/700.md) (possibly related: a code span names it)
- [page 45 "Sales List"](../../../../objects/page/45.md) (possibly related: a code span names it)
- [page 53 "Purchase List"](../../../../objects/page/53.md) (possibly related: a code span names it)
- [page 516 "Sales Lines"](../../../../objects/page/516.md) (possibly related: a code span names it)
- [enum 36 "Sales Document Type"](../../../../objects/enum/36.md) (possibly related: a code span names it)
- [page 6619 "Sales Line Archive List"](../../../../objects/page/6619.md) (possibly related: a code span names it)
- [page 6626 "Purchase Line Archive List"](../../../../objects/page/6626.md) (possibly related: a code span names it)
- [codeunit 6620 "Copy Document Mgt."](../../../../objects/codeunit/6620.md) (possibly related: a code span names it)
- [page 41 "Sales Quote"](../../../../objects/page/41.md) (possibly related: a code span names it)
- [page 9305 "Sales Order List"](../../../../objects/page/9305.md) (possibly related: a code span names it)
- [page 904 "Assembly List"](../../../../objects/page/904.md) (possibly related: a code span names it)

## Changed by

- [#214 UI knowledge: notification recall needs a known Id; open mixed-type documents through Page Management](../../../../changes/bcquality/214.md), 2026-10-06

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
