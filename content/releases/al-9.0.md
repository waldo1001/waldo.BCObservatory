---
id: release/al-9.0
type: release
title: AL Language extension 9.0
summary: "AL Language extension 9.0 for Business Central 2022 release wave 1: released 2022-04-01; 10 changelog entries, 4 GitHub issues linked."
tier: official
language: en
system: development
tags:
  - new sampling option for the al profiler
  - multiple report layouts
  - workspace publishing
  - support for excel layouts on reports
  - new inherentpermissions attribute
  - new isolated event attribute
  - new appsourcecop rules
  - bug fixes
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.251Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ae8d1ae820502f2b1e42497f619174bddaa1ec74f623a8f1e914fd0f379096b7
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 9.0
    date: "2022-04-01"
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
version: "9.0"
wave: 2022 release wave 1
major: null
preview_at: null
released_at: "2022-04-01"
published_at: "2022-04-01"
prerelease: false
entry_count: 10
issues:
  - 6503
  - 6803
  - 6899
  - 6970
changes: []
---

# AL Language extension 9.0

> AL Language extension 9.0 for Business Central 2022 release wave 1: released 2022-04-01; 10 changelog entries, 4 GitHub issues linked.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2022 release wave 1

## New sampling option for the AL profiler

The AL profiler supports a new profiling option called Sampling. Sampling captures method calls at predefined, repeated intervals that can be set on OnPremise versions of BC in the SamplingInterval server settings. This has a smaller performance load on the BC server, but also provides less accurate measurements. One can define what profiling session to execute in the profilingType entry of a snapshot configuration file. The default is 'Instrumentation'.

## Multiple Report Layouts

Report and Report Extensions now supports defining multiple layouts in a single object using the new `rendering` section. The syntax is as follows:

```al
report 50100 MyReport
{
    DefaultRenderingLayout = RDLCLayout;

    rendering
    {
        layout(RDLCLayout)
        {
            Type = RDLC;
            LayoutFile = 'layout.rdl';
            Caption = 'Nice RDLC Layout';
        }

        layout(...
    }
```

Old reports using the previous property-based layout specification can be converted to use this section with a new code action. Ensure code actions are turned on in your AL extension settings and place the cursor on any of the old layout properties to use the action. Layouts of type RDLC, Word, Excel, and Custom can be specified with the new rendering syntax.

## Workspace Publishing

Publishing large workspaces with interdependent projects can be done with the new `Publish full dependency tree for active project` command. This can be triggered through the command palette or by using the shortcut `Shift+Alt+W`. This will calculate the correct order in which to compile and publish the dependencies of the current project and publish them using the `launch.json` option selected from the current active project.

## Support for Excel Layouts on reports

Report objects now support Excel layouts. They can be added either in the `rendering` section or through the `ExcelLayout` property. If they refer to an existing file, the layout is validated based on the schema of the report dataset. If no file exists, a starter template is generated upon compilation.

## New InherentPermissions attribute

Added a new ability to elevate user permissions during the specific method execution. The attribute should be defined with the use of a new AL `PermssionObjectType` enum.

## New Isolated event attribute

Events definitions now support an isolated mode, in which they will be executed with isolated transaction schematics. Allowing all events to be executed, even if one fails, and allow the calling code to also continue executing.Events definitons now support an isolated mode, in which they will be executed with isolated transaction schematics. Allowing all events to be executed, even if one fails, and allow the calling code to also continue executing.

## New AppSourceCop rules

As part of our efforts to improve the validation of AppSource submissions, we worked on making the AppSourceCop more reliable, but we have also introduced new rules based on the new AL languages capabilities, customer incidents, and feedback from the community:
- [AS0101](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0101) - An error is reported when an 'Isolated' event argument is changed, added, or removed.
- [AS0103](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0103) - A warning is returned when table definitions in your extension are missing a matching permission set. This was suggested with Github issue [#6503](https://github.com/microsoft/AL/issues/6503).
- [AS0104](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0104) - An error is returned when the extension name is not valid in SaaS.
- [AS0105](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0105) - An informational diagnostic is reported when you are referencing an object pending obsoletion with an ObsoleteTag lower than what you specified in your AppSourceCop.json. By enabling this rule, you can validate if your app is ready for a given release of Business Central.

For more information, see [AppSourceCop Analyzer Rules](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop).

## Bug fixes

* Copying values from the debuggers variable panel, now supports identifiers with quotes.
* Fixed a rare issue where relative file paths for resources could not be resolved properly.
* Detecting duplicate permissions in permission sets and adding an error if there is any duplications.
* Usage of constant dates in a case statement is fixed.
* Ambiguouity in the cases that parameters of a function are interfaces are fixed.
* Errors in loading a workspace (e.g. due to circular dependencies in the projects) are now surfaced as an error.
* Emitting error when dividing by 0 using DIV keyword.

## GitHub Issues

- [#6899](https://github.com/microsoft/AL/issues/6899) IntelliSense/auto-complete for ShowMandatory property doesn't work correctly/same, e.g. won't offer members of Rec
- [#6970](https://github.com/microsoft/AL/issues/6970) Cannot obsolete views on a pageextension
- [#6803](https://github.com/microsoft/AL/issues/6803) How to remove a page extension of a removed page?

## Miscellaneous

- Improving documentation when hovering on attributes and triggers.
- Adding a new parameter to alc.exe - `reportSuppressedDiagnostics` that includes `#pragma` disabled diagnostic messages to the error list.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
