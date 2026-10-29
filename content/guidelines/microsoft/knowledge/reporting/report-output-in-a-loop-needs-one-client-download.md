---
id: guideline/microsoft/knowledge/reporting/report-output-in-a-loop-needs-one-client-download
type: guideline
title: Report output in a loop needs one client download
summary: The Business Central Web client can deliver only one file per request. When AL generates or downloads a report file repeatedly in the same request, only the last file is delivered to the browser. Earlier report output is silently unavailable to the user even though every iteration ran.
tier: official
language: en
tags:
  - report
  - run
  - saveas
  - downloadfromstream
  - web-client
  - loop
  - zip
  - data-compression
system: reporting
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:09.267Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8aede8b6bb50dfc4d68ae09972d7dec425a97511
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/report-output-in-a-loop-needs-one-client-download.md
    title: "microsoft/BCQuality: Report output in a loop needs one client download"
    date: "2026-09-15"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/file/file-downloadfromstream-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/183
  related:
    - to: object/codeunit/425
      title: codeunit 425 "Data Compression"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/reporting/report-output-in-a-loop-needs-one-client-download.md
layer: microsoft
kind: rule
domain: reporting
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
  - DownloadFromStream
---

# Report output in a loop needs one client download

> The Business Central Web client can deliver only one file per request. When AL generates or downloads a report file repeatedly in the same request, only the last file is delivered to the browser. Earlier report output is silently unavailable to the user even though every iteration ran.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/report-output-in-a-loop-needs-one-client-download.md) · microsoft layer · reporting · BC all · tier official · derived

## Description

The Business Central Web client can deliver only one file per request. When AL generates or downloads a report file repeatedly in the same request, only the last file is delivered to the browser. Earlier report output is silently unavailable to the user even though every iteration ran.

## Best Practice

Generate each report into a stream, add the streams to one archive, and call `DownloadFromStream` once after the loop. A direct report run or download inside a loop is valid only when the execution context does not use the Web client or the loop is guaranteed to execute at most once.

See sample: [`report-output-in-a-loop-needs-one-client-download.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/report-output-in-a-loop-needs-one-client-download.good.al).

## Anti Pattern

Call `Report.Run`, `Report.RunModal`, or `DownloadFromStream` repeatedly in a loop initiated by one Web client action and expect every generated file to reach the browser. The client receives only the last download.

See sample: [`report-output-in-a-loop-needs-one-client-download.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/report-output-in-a-loop-needs-one-client-download.bad.al).

## References

`File.DownloadFromStream` method — https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/file/file-downloadfromstream-method

`Data Compression` codeunit — https://learn.microsoft.com/dynamics365/business-central/application/system-application/codeunit/system.io.data-compression

## Examples

- [Good: report-output-in-a-loop-needs-one-client-download.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/report-output-in-a-loop-needs-one-client-download.good.al)
- [Bad: report-output-in-a-loop-needs-one-client-download.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/reporting/report-output-in-a-loop-needs-one-client-download.bad.al)

## Names

- [File.DownloadFromStream(InStream, Text, Text, Text, var Text) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/file/file-downloadfromstream-method) (names DownloadFromStream)
- [codeunit 425 "Data Compression"](../../../../objects/codeunit/425.md) (possibly related: a code span names it)

## Changed by

- [#183 Add reporting review guidance and evaluation fixtures](../../../../changes/bcquality/183.md), 2026-09-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
