---
id: guideline/microsoft/knowledge/style/named-invocations-not-object-ids
type: guideline
title: Call objects by name, not by numeric ID
summary: 'Page.RunModal, Report.Run, Codeunit.Run, and the Page::, Report::, Codeunit::, Table::, XmlPort:: selectors accept either a numeric ID or a named alias. The named form — Page::"Posted Sales Shipment Lines", Report::"Sales - Invoice" — is the one to use.'
tier: official
language: en
tags:
  - page
  - report
  - codeunit
  - runmodal
  - run
  - object-id
  - named-invocation
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:59.462Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: be30a5ff9c267a6dd0194dce3946227d7ec43d23
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/named-invocations-not-object-ids.md
    title: "microsoft/BCQuality: Call objects by name, not by numeric ID"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
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
  changes:
    - change/bcquality/174
repo_path: microsoft/knowledge/style/named-invocations-not-object-ids.md
layer: microsoft
kind: rule
domain: style
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Call objects by name, not by numeric ID

> Page.RunModal, Report.Run, Codeunit.Run, and the Page::, Report::, Codeunit::, Table::, XmlPort:: selectors accept either a numeric ID or a named alias. The named form — Page::"Posted Sales Shipment Lines", Report::"Sales - Invoice" — is the one to use.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/named-invocations-not-object-ids.md) · microsoft layer · style · BC all · tier official · derived

## Description

`Page.RunModal`, `Report.Run`, `Codeunit.Run`, and the `Page::`, `Report::`, `Codeunit::`, `Table::`, `XmlPort::` selectors accept either a numeric ID or a named alias. The named form — `Page::"Posted Sales Shipment Lines"`, `Report::"Sales - Invoice"` — is the one to use. Numeric IDs are an implementation detail that change with renumbering, do not survive a rename, and carry no signal to a reader about what the call actually does. The compiler resolves named aliases at build time, so the named form is no slower than the numeric form.

## Best Practice

When invoking an object whose named alias is available in the same app (or in a dependency the current app already references), use the named form: `Page.RunModal(Page::"Posted Sales Shipment Lines", SalesShptLine)`, `Report.Run(Report::"Sales - Invoice", true)`. The same applies to `Codeunit.Run`, `XmlPort.Run`, `Query.Open`, and any platform method that takes an object reference. The named form makes diffs reviewable — a rename is visible — and makes log output and stack traces interpretable.

See sample: [`named-invocations-not-object-ids.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/named-invocations-not-object-ids.good.al).

## Anti Pattern

`Page.RunModal(525, …)` or `Report.Run(206, true)`. The numeric form is unreadable, fragile across renumbering, and breaks every search that looks for callers of a named object.

See sample: [`named-invocations-not-object-ids.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/named-invocations-not-object-ids.bad.al).

## Examples

- [Good: named-invocations-not-object-ids.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/named-invocations-not-object-ids.good.al)
- [Bad: named-invocations-not-object-ids.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/named-invocations-not-object-ids.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
