---
id: release/al-7.4
type: release
title: AL Language extension 7.4
summary: "AL Language extension 7.4 for Business Central 2021 release wave 1 update 3: released 2021-07-16; 5 changelog entries, 8 GitHub issues linked."
tier: official
language: en
system: development
tags:
  - property modification on report extensions
  - fixes of code emitting issues
  - "allowing record.copy(fromrecord: record)"
  - appsourcecop improvements
  - miscellaneous bug fixes
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.308Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 44f2eb34b4db33eff946699d355a6e8b3b4c36122a1e473e6e1abf36792ece62
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 7.4
    date: "2021-07-16"
    commit: null
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
source_id: al-language-extension
extension: ms-dynamics-smb.al
version: "7.4"
wave: 2021 release wave 1 update 3
major: null
preview_at: null
released_at: "2021-07-16"
published_at: "2021-07-16"
prerelease: false
entry_count: 5
issues:
  - 5623
  - 6279
  - 6359
  - 6639
  - 6679
  - 6695
  - 6704
  - 6711
changes: []
---

# AL Language extension 7.4

> AL Language extension 7.4 for Business Central 2021 release wave 1 update 3: released 2021-07-16; 5 changelog entries, 8 GitHub issues linked.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2021 release wave 1 update 3

## Property modification on report extensions

* Report extensions will now allow you to modify the RequestFilterFields and CalcFields properties of dataitems on the base report. These properties will be modified additively, adding to any fields that were specified in the base report. [#6704](https://github.com/microsoft/AL/issues/6704).

```al
reportextension 50100 MyReportExtension extends MyReport
{
    dataset
    {
        modify(BaseDataItem)
        {
            RequestFilterFields = Field1, Field2;
            CalcFields = Field3, Field2;
        }
    }
}
```

## Fixes of code emitting issues

* We fixed an issue that causes the compilation to fail when using complex types as a return value from Case statements [#6679](https://github.com/microsoft/AL/issues/6679).
* Protected variables declared in base application objects are now accessible from their extension in source and property expressions [#6711](https://github.com/microsoft/AL/issues/6711).
* Using certain system functions in expressions would produce invalid code.
* Emitting user controls for request pages in reports and report extensions.
* Fixing how arrays of JsonObject are initialized [#6279](https://github.com/microsoft/AL/issues/6279).

## Allowing Record.Copy(FromRecord: Record)

This allows to you to copy temporary records returned from a procedure [#6695](https://github.com/microsoft/AL/issues/6695).

```al
procedure CopyTemporaryRecord()
    var
        bufferProvider: Codeunit BufferProvider;
        buffer: Record Buffer temporary;
    begin
        buffer.Copy(BufferProvider.GetBuffer(),true);
    end;
```

where GetBuffer has the following signature:

```al
procedure GetBuffer() buffer: Record Buffer temporary
```

## AppSourceCop Improvements

* We fixed an exception that was thrown when validating procedure breaking changes for extensions targeting a runtime version lower than 7.0.
* The rule [AS0025](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0025) only allowed to add a new parameter in last position of the parameter list for local events. Adding a parameter in any other position triggered a diagnostic. This has been fixed and it is now possible to add a new parameter in any position.

Note that from the 3rd of August, the [technical validation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission) of AppSource extensions enforces the analyzer rules around procedure breaking changes (rules AS0018 to AS0028) in order to provide a better experience for our customers in SaaS.

## Miscellaneous bug fixes

* Fixing the CLI client of the compiler to not produce broken xml format when generating .dgml file [#6639](https://github.com/microsoft/AL/issues/6639).
* Validating the path passed to WordLayout and RDLCLayout properties. Validating whether the path is relative to the root of the project [#6359](https://github.com/microsoft/AL/issues/6359).
* Extensions to a request page that used InDataSet variables were not being registered, causing a runtime error. [#6359](https://github.com/microsoft/AL/issues/6359).
* Request pages that were using variables on the parent report in some properties were not working unless the InDataSet attribute was specified on the variable. [#5623](https://github.com/microsoft/AL/issues/5623).

Note that from version 8.0 warning AL0613, reported for invalid trigger signatures, will be turned into an error.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
