---
id: guideline/microsoft/knowledge/data-modeling/document-print-and-email-actions-call-report-selections-directly
type: guideline
title: A document's own Print/Email actions call Report Selections directly; Document Sending Profile is scoped to Post-and-Send
summary: 'table 60 "Document Sending Profile" is not a general gateway for every print/email path — it exists specifically for the combined Post and Send action: "You can set each customer up with a preferred method of sending sales documents, so that you do not have to select a sending option every time…'
tier: official
language: en
tags:
  - report-selections
  - document-sending-profile
  - print
  - email
  - post-and-send
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:36.481Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f331619e9f76b7ddadfb4bc319cac57d3df2d587
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/document-print-and-email-actions-call-report-selections-directly.md
    title: "microsoft/BCQuality: A document's own Print/Email actions call Report Selections directly; Document Sending Profile is scoped to Post-and-Send"
    date: "2026-09-30"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/table/60
    - object/codeunit/229
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/175
  related:
    - to: object/codeunit/79
      title: codeunit 79 "Sales-Post and Send"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/77
      title: table 77 "Report Selections"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/data-modeling/document-print-and-email-actions-call-report-selections-directly.md
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
  - PrintSalesOrder
  - EmailSalesHeader
  - PrintWithDialogForCust
  - SendEmailToCust
  - PrintWithDialogForVend
  - PrintRecords
  - EmailRecords
  - TrySendToEMail
  - TrySendToPrinterVendor
  - SendToPrinter
  - SendToEMailGroupedMultipleSelection
  - SendToEMail
  - SendToDisk
  - SendProfile
  - SendRecords
  - PrintForCust
  - SendEmailToVendor
  - TrySendToPrinter
  - GetDefaultForCustomer
  - GetDefaultForVendor
  - SendVendor
  - DoPrintSalesHeader
  - ConfirmPostAndSend
---

# A document's own Print/Email actions call Report Selections directly; Document Sending Profile is scoped to Post-and-Send

> table 60 "Document Sending Profile" is not a general gateway for every print/email path — it exists specifically for the combined Post and Send action: "You can set each customer up with a preferred method of sending sales documents, so that you do not have to select a sending option every time…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/document-print-and-email-actions-call-report-selections-directly.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

`table 60 "Document Sending Profile"` is not a general gateway for every
print/email path — it exists specifically for the combined **Post and
Send** action: "You can set each customer up with a preferred method of
sending sales documents, so that you do not have to select a sending
option every time you choose the Post and Send action" (Microsoft Learn,
"Set Up Document Sending Profiles"). A document's own, ordinary
Print/Email actions are unaffected by any *configured* profile either
way: the unposted Sales Order's "Print Confirmation"/"Email
Confirmation" (`codeunit "Document-Print"`,
`PrintSalesOrder`/`EmailSalesHeader`) and the posted `Purch. Inv.
Header`'s `PrintRecords` call `Report Selections` literally directly
(`PrintWithDialogForCust`/`SendEmailToCust`/`PrintWithDialogForVend`),
while the posted `Sales Invoice Header`'s `PrintRecords`/`EmailRecords`
and the unposted `Purchase Header`'s `PrintRecords` go through
`DocumentSendingProfile.TrySendToPrinter`/`TrySendToEMail`/
`TrySendToPrinterVendor` instead. Those three helpers each declare a
fresh, local, never-`Get`'d profile record, hardcode its
`Printer`/`"E-Mail"` field to a "Yes" option themselves, and feed it into
`SendToPrinter`/`SendToEMailGroupedMultipleSelection` — which resolve
into Report Selections just like the direct route. The table is a
throwaway options carrier here, not the counterparty's configuration.

Only a genuinely configured profile changes the outcome, and that only
happens for the combined Post-and-Send flow: `Sales-Post and Send` loads
the customer's assigned profile (`Get(Customer."Document Sending
Profile")`, or the tenant default) before `Sales Invoice
Header.SendProfile` → `DocumentSendingProfile.Send`, which gates
`SendToPrinter`/`SendToEMail`/`SendToDisk` on whatever that record holds.

Whether a document needs outbound distribution isn't determined by
Customer vs. Vendor, but by whether it's genuinely *outbound* to that
party: a posted Purchase Invoice records what a vendor already billed,
so the posted `Purch. Inv. Header` has only a bare `PrintRecords`; a
Purchase *Order* is still outbound before posting, so the rich
`SendProfile`/`SendRecords`/`PrintRecords` triplet lives there instead.

## Best Practice

For a document's own interactive Print/Email actions, either call the
relevant `Report Selections` procedure directly —
`PrintForCust`/`PrintWithDialogForCust`/`SendEmailToCust` for a
customer-facing document, `PrintWithDialogForVend`/`SendEmailToVendor`
for a vendor-facing one — or call one of `Document Sending Profile`'s
stateless `TrySendToPrinter`/`TrySendToEMail`/`TrySendToPrinterVendor`
helpers, using the usage value registered per
`extend-report-selection-usage-for-new-document-types.md`. Both are
equally correct; neither reads the counterparty's assigned profile.
Reserve a genuine `Get`/`GetDefaultForCustomer`/`GetDefaultForVendor`
lookup and `Send`/`SendVendor` for Post-and-Send.

See sample: [`document-print-and-email-actions-call-report-selections-directly.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/document-print-and-email-actions-call-report-selections-directly.good.al).

## Anti Pattern

Loading the counterparty's *actually assigned* `Document Sending
Profile` (or the tenant default, via `Get`/`GetDefaultForCustomer`/
`GetDefaultForVendor` — the same lookup `Sales-Post and Send` performs)
and calling `Send`/`SendVendor` on it from a plain, on-demand "Email"
button, instead of `ReportSelections.SendEmailToCust`/`SendEmailToVendor`
directly. The button's outcome now silently depends on a profile
configured for Post-and-Send — if its `"E-Mail"` option is `No`,
clicking "Email" does nothing observable. A second version of the same
mistake: an email action on a document that only receives from its
counterparty and was never meant to send anything back.

See sample: [`document-print-and-email-actions-call-report-selections-directly.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/document-print-and-email-actions-call-report-selections-directly.bad.al).

## Source

BCApps `DocumentPrint.Codeunit.al` (`EmailSalesHeader`/`DoPrintSalesHeader`/
`PrintSalesOrder` → `ReportSelections.SendEmailToCust`/`PrintForCust`/
`PrintWithDialogForCust` directly), `SalesInvoiceHeader.Table.al`
(`PrintRecords`/`EmailRecords`, lines 1453/1528 → `TrySendToPrinter`/
`TrySendToEMail`, lines 1462/1541, on a local never-`Get`'d record),
`PurchaseHeader.Table.al` (`PrintRecords` line 6357 →
`TrySendToPrinterVendor` line 6374; `SendProfile` line 6387 →
`SendVendor` line 6403), `PurchInvHeader.Table.al` (`PrintRecords` →
`ReportSelection.PrintWithDialogForVend` directly, no send capability),
`SalesPostandSend.Codeunit.al`/`SalesPost.Codeunit.al`
(`ConfirmPostAndSend` loads `Get(Customer."Document Sending
Profile")`/`GetDefault`; `SendPostedDocumentRecord` line 7660 →
`SalesInvHeader.SendProfile` lines 7680/7699 →
`DocumentSendingProfile.Send`), `DocumentSendingProfile.Table.al` (table
60; `TrySendToPrinter`/`TrySendToEMail` lines 536/562,
`TrySendToPrinterVendor` line 552, `GetDefaultForCustomer` line 195,
`Send`/`SendVendor` lines 482/506) — all under `src/Layers/W1/BaseApp/`.
Microsoft Learn, "Set Up Document Sending Profiles": https://learn.microsoft.com/dynamics365/business-central/sales-how-setup-document-send-profiles

## Examples

- [Good: document-print-and-email-actions-call-report-selections-directly.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/document-print-and-email-actions-call-report-selections-directly.good.al)
- [Bad: document-print-and-email-actions-call-report-selections-directly.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/document-print-and-email-actions-call-report-selections-directly.bad.al)

## Names

- [table 60 "Document Sending Profile"](../../../../objects/table/60.md) (names this object)
- [codeunit 229 "Document-Print"](../../../../objects/codeunit/229.md) (names this object)
- [codeunit 79 "Sales-Post and Send"](../../../../objects/codeunit/79.md) (possibly related: a code span names it)
- [table 77 "Report Selections"](../../../../objects/table/77.md) (possibly related: a code span names it)

## Changed by

- [#175 9 AL/BC patterns: document distribution, price calculation & barcode extensibility](../../../../changes/bcquality/175.md), 2026-09-30

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
