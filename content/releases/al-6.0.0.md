---
id: release/al-6.0.0
type: release
title: AL Language extension 6.0.0
summary: "AL Language extension 6.0.0 for Business Central 2020 release wave 2 update: released 2020-09-30; 8 changelog entries."
tier: official
language: en
system: development
tags:
  - snapshotdebugger
  - debugging upgrade and install code
  - indication of overloads in intellisense.
  - global warning suppression from app.json and the alc command-line
  - captions for odata
  - documentation comments
  - preprocessor directives
  - improvements to the appsourcecop and its documentation
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.437Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1b981acd6b7df9b2689b988fe529ef7591e4b268e8a57cbbc07af3bb937aa51e
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 6.0.0
    date: "2020-09-30"
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
version: 6.0.0
wave: 2020 release wave 2 update
major: null
preview_at: null
released_at: "2020-09-30"
published_at: "2020-09-30"
prerelease: false
entry_count: 8
issues: []
changes: []
---

# AL Language extension 6.0.0

> AL Language extension 6.0.0 for Business Central 2020 release wave 2 update: released 2020-09-30; 8 changelog entries.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2020 release wave 2 update

## SnapshotDebugger

We have introduced the ability to record AL execution on a Business Central server, also called snapshot debugging. To do snapshot debugging, you must be a delegated admin and part of the "D365 Snapshot Debug" permission group. When the AL execution has ended, you can download the recorded snapshot file and debug it with the new snapshot debugger in Visual Studio Code.
F7 will initialize a snapshot debugging session, Shift+F7 provides status such as when the end-user connects to the Business Central server using the client and then if a snapshot debugging request was saved for that user, the user's AL code in the specific client session will be recorded, and Alt+F7 ends snapshot debugging on the Business Central server and produces a debuggable snapshot file.
In connection with this addition, please note that the existing “al.downloadsource” command for F7 has been remapped to Alt+F6.

## Debugging Upgrade and Install code

It is now possible to debug upgrade and install codeunits. A new command "Publish extension without building" has been introduced that will allow for apps to be published while debugging. To debug upgrade or install code, first initiate an attach debug session. After the debugger has attached, invoke the new command or use Ctrl+F5 to publish the app file. If the version of the app has not been incremented, install codeunits will be invoked. If the version of the app has been incremented, or the `forceUpgrade` flag has been set to `true` in the `launch.json` file, upgrade codeunits will be invoked.

## Indication of overloads in IntelliSense.

IntelliSense now includes the number of additional overloads together with the signature of the first method. Selecting the method allows you to browse through the different overloads.

## Global warning suppression from app.json and the alc command-line

Warnings can be suppressed globally using the "suppressWarnings" option in the app.json file. The option takes a list of warning IDs as argument.

```
"suppressWarnings": [ "AL0604", "AA0215" ]
```
We also support global warning suppression from the alc command-line using the the /nowarn switch.

## Captions for OData

With this release we have added a new attribute Caption that can be applied to procedures that are ServiceEnabled or defined in an API page. It makes it possible to provide translations in the OData metadata for procedures. Furthermore, we have added two new properties EntityCaption and EntitySetCaption that enable providing different translations for entities.

## Documentation Comments

With this release we support documentation comments for AL similar to C#. Documentation comments are structured comments preceded with a three slashes (///) instead of the usual two slashes (//). The documentation comment a special syntax that contains XML text. The documentation comment must immediately precede a user-defined type that it annotates, for example a codeunit, table, or interface, or a member such as a field or method.
There is IntelliSense support for writing documentation comments. Most importantly providing a template documentation comment when writing the third slash in the triple slash.
Documentation comments are visible when hovering over source symbols, in completion lists, and in signature help.
Improve your source code by adding documentation comments.

## Preprocessor directives

AL now supports three types of preprocessor directives
* Conditional directives (conditional compilation)
* Regions (expand/collapse regions of code)
* Pragmas (disable/enable warnings and implicitwith)

## Improvements to the AppSourceCop and its documentation

Since the release of Business Central 2020 release wave 1, we have been working on the AppSourceCop code analyzer. We gathered the feedback we received on existing rules in order to improve them and create a more reliable experience. We have also added new rules covering aspects that were previously missing and improved our [online documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop) to be contain more examples and actionable information.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
