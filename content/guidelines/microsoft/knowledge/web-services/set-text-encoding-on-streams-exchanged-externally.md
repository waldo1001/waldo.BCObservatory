---
id: guideline/microsoft/knowledge/web-services/set-text-encoding-on-streams-exchanged-externally
type: guideline
title: Set the text encoding when converting exchanged text to or from BLOB bytes
summary: Blob.CreateInStream and Blob.CreateOutStream take an optional TextEncoding; when it is omitted, the stream uses MSDos (OEM) encoding, whose code page depends on the server's system locale. Encoding matters when an operation converts between AL text and bytes, such as WriteText or ReadText.
tier: official
language: en
tags:
  - textencoding
  - text-encoding
  - utf8
  - msdos
  - createoutstream
  - createinstream
  - blob
  - file-export
  - character-corruption
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:16.087Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0915e6cc3b44cb50630e5de16b3fdd721494b750
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-text-encoding-on-streams-exchanged-externally.md
    title: "microsoft/BCQuality: Set the text encoding when converting exchanged text to or from BLOB bytes"
    date: "2026-10-20"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/outstream/outstream-writetext-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/instream/instream-readtext-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/file/file-downloadfromstream-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-copystream-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/228
repo_path: microsoft/knowledge/web-services/set-text-encoding-on-streams-exchanged-externally.md
layer: microsoft
kind: rule
domain: web-services
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
  - TextEncoding
  - MSDos
  - WriteText
  - ReadText
  - DownloadFromStream
  - CopyStream
---

# Set the text encoding when converting exchanged text to or from BLOB bytes

> Blob.CreateInStream and Blob.CreateOutStream take an optional TextEncoding; when it is omitted, the stream uses MSDos (OEM) encoding, whose code page depends on the server's system locale. Encoding matters when an operation converts between AL text and bytes, such as WriteText or ReadText.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-text-encoding-on-streams-exchanged-externally.md) · microsoft layer · web-services · BC all · tier official · derived

## Description

`Blob.CreateInStream` and `Blob.CreateOutStream` take an optional `TextEncoding`; when it is omitted, the stream uses `MSDos` (OEM) encoding, whose code page depends on the server's system locale. Encoding matters when an operation converts between AL text and bytes, such as `WriteText` or `ReadText`. Text written and read through streams with the same default can round-trip inside Business Central, but writing MSDos bytes for a UTF-8 consumer or reading externally encoded UTF-8 bytes as MSDos can corrupt accented and non-Latin characters (for example `à`, `ß`, `ø`, `ł`). In Business Central online the server locale cannot be controlled, so Microsoft recommends UTF-8 or UTF-16.

Creating a stream does not transcode the BLOB. `DownloadFromStream`, stream-based HTTP content, raw uploads, and `CopyStream` can transfer existing bytes without decoding or re-encoding text. A default-encoding InStream used only to download bytes written by a UTF-8 OutStream preserves those UTF-8 bytes.

## Best Practice

Pass `TextEncoding::UTF8` (or the encoding the counterpart requires, such as `UTF16` or `Windows`) on the stream that performs an encoding-sensitive text write or read. Match the writer to the external consumer's expected encoding and the reader to the actual encoding of the incoming bytes. If both sides convert text, configure compatible encodings on both. Treat `MSDos` as legacy, chosen only when the counterpart demands an OEM code page.

Do not flag the default encoding when the stream carries binary content (images, PDFs, ZIP archives), when text is written and read back only inside Business Central through streams with the same encoding, or when already encoded data is transferred byte-for-byte without text conversion. An omitted encoding on a stream used only for `DownloadFromStream`, stream-based HTTP transfer, raw upload, or `CopyStream` is not evidence of a defect. Trace the actual text conversion, not merely the transport API.

See sample: [`set-text-encoding-on-streams-exchanged-externally.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-text-encoding-on-streams-exchanged-externally.good.al).

## Anti Pattern

An encoding-sensitive text write (such as `OutStr.WriteText`) or text read (such as `InStr.ReadText`) through a BLOB stream with a missing or incompatible encoding, where the external consumer expects a different encoding or the incoming bytes use a different encoding. For example, default MSDos `WriteText` output downloaded as a UTF-8 CSV, or UTF-8 uploaded bytes decoded with a default MSDos `ReadText`. Mere stream creation or byte-preserving transfer is not this anti-pattern. The defect can be invisible with ASCII-only test data.

See sample: [`set-text-encoding-on-streams-exchanged-externally.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-text-encoding-on-streams-exchanged-externally.bad.al).

## References

[Blob.CreateInStream method](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/blob/blob-createinstream-method) (the default encoding is MSDos) and [File handling and text encoding](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-file-handling-and-text-encoding) (MS-DOS depends on the server's system locale; online, use UTF-8/UTF-16).

## Examples

- [Good: set-text-encoding-on-streams-exchanged-externally.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-text-encoding-on-streams-exchanged-externally.good.al)
- [Bad: set-text-encoding-on-streams-exchanged-externally.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/web-services/set-text-encoding-on-streams-exchanged-externally.bad.al)

## Names

- [OutStream.WriteText(\[Text\] \[, Integer\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/outstream/outstream-writetext-method) (names WriteText)
- [InStream.ReadText(var Text \[, Integer\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/instream/instream-readtext-method) (names ReadText)
- [File.DownloadFromStream(InStream, Text, Text, Text, var Text) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/file/file-downloadfromstream-method) (names DownloadFromStream)
- [System.CopyStream(OutStream, InStream \[, Integer\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-copystream-method) (names CopyStream)

## Changed by

- [#228 Knowledge: isolated events, FilterGroup scope, BLOB CalcFields and stream text encoding](../../../../changes/bcquality/228.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
