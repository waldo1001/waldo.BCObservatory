---
id: guideline/microsoft/knowledge/appsource/file-datatype-saas
type: guideline
title: The File data type's direct I/O methods are OnPrem-only
summary: The classic File variable type — Open/Create/Read/Write/Close against a path on the local or server filesystem — is scoped OnPrem-only.
tier: official
language: en
tags:
  - file-datatype
  - saas
  - onprem
  - uploadintostream
  - downloadfromstream
  - instream
  - outstream
  - streaming
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:53.615Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f46a5655bdca9d5660e5b8646a13f6b306317d77
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/file-datatype-saas.md
    title: "microsoft/BCQuality: The File data type's direct I/O methods are OnPrem-only"
    date: "2026-09-29"
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
    - change/bcquality/156
repo_path: microsoft/knowledge/appsource/file-datatype-saas.md
layer: microsoft
kind: rule
domain: appsource
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
  - UploadIntoStream
  - InStream
  - DownloadFromStream
  - OutStream
  - TempBlob
---

# The File data type's direct I/O methods are OnPrem-only

> The classic File variable type — Open/Create/Read/Write/Close against a path on the local or server filesystem — is scoped OnPrem-only.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/file-datatype-saas.md) · microsoft layer · appsource · BC all · tier official · derived

> Contributions welcome — open a PR to refine or extend this article.

## Description

The classic `File` variable type — `Open`/`Create`/`Read`/`Write`/`Close` against a path on the local or server filesystem — is scoped OnPrem-only. Code targeting Business Central Online that calls `File.Open`, `File.Create`, `File.Read`, or `File.Write` fails to compile against a Cloud-scoped project; it does not compile successfully and fail or get silently skipped at runtime. Separately, and regardless of the compile-time scoping, no server/local filesystem path is available to an extension actually running in Business Central Online.

## Best Practice

Use the stream-based equivalents: `UploadIntoStream` to read user-selected file content into an `InStream`, and `DownloadFromStream` to write an `OutStream`'s content to a file the user saves. Stage the content in a `TempBlob` between the stream and the rest of the parsing/formatting code.

See sample: [`file-datatype-saas.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/file-datatype-saas.good.al).

## Anti Pattern

Opening a hardcoded or user-supplied filesystem path with the `File` variable type. This is a strong signal the code was written for on-premises only, or copied from material that predates the cloud-first streaming APIs.

See sample: [`file-datatype-saas.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/file-datatype-saas.bad.al).

## Examples

- [Good: file-datatype-saas.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/file-datatype-saas.good.al)
- [Bad: file-datatype-saas.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/appsource/file-datatype-saas.bad.al)

## Names

- [File.DownloadFromStream(InStream, Text, Text, Text, var Text) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/file/file-downloadfromstream-method) (names DownloadFromStream)

## Changed by

- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
