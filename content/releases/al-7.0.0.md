---
id: release/al-7.0.0
type: release
title: AL Language extension 7.0.0
summary: "AL Language extension 7.0.0 for Business Central 2021 release wave 1 update: no upload of it left in the marketplace gallery; 10 changelog entries."
tier: official
language: en
system: development
tags:
  - report extensibility
  - return complex types from methods
  - permission sets and permission set extensions
  - onafterlookup trigger
  - interface obsoletion
  - support for access property on enums and interfaces.
  - control if locked labels should generate translation entries
  - added cross-reference information generation
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.606Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6ceb5ce95d4c5e1b450d766877adafd5d9311de4cf1c4348e7faad317da07bc4
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 7.0.0
    date: null
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
version: 7.0.0
wave: 2021 release wave 1 update
major: null
preview_at: null
released_at: null
published_at: null
prerelease: true
entry_count: 10
issues: []
changes: []
---

# AL Language extension 7.0.0

> AL Language extension 7.0.0 for Business Central 2021 release wave 1 update: no upload of it left in the marketplace gallery; 10 changelog entries.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2021 release wave 1 update

## Report Extensibility

We have introduced `reportextension` objects to the language that allows extension of report objects. Some of the operations that can be performed are:
* Adding new dataitems to the base report's dataset
* Adding new columns to a base report's dataitem
* Extending the request page (e.g. adding new fields)
* Defining additional report triggers
* Defining additional request page triggers
* Defining additional layouts that will be made available for the base report
Use the `treportextension` snippet to get started!

## Return complex types from methods

We now allow complex types to be returned from methods. This includes user-defined types like codeunits and records, but also most built-in types. The syntax is similar to variable/parameter declarations.

```
procedure GetCustomerByName(Name: Text) Customer: record Customer;
begin
end;

procedure GetHttpClient(): HttpClient;
begin
end;
```

## Permission sets and permission set extensions

With this release we now support defining permission sets in AL objects. Among the benefits are
* Deployed as metadata and hence easy to update
* Easy to read source format
* Support for IntelliSense, comments, navigation, and diagnostics

The new permission set objects are extensible. An existing permission set can be extended with additional permissions to easily grant more access to users that already are assigned the permission set.

Use the `tpermissionset` or `tpermissionsetextension` snippet to get started!

## OnAfterLookup trigger

We have added a new trigger on page fields with `TableRelation` properties to support scenarios where you in code want to set others fields based on the selected record.

```AL
field(ItemNo; Rec.No)
{
    trigger OnAfterLookup(Selected: RecordRef)
    var
        Item: record Item;
    begin
        Selected.SetTable(Item);
        Rec.Description := Item.Description;
    end;
}
field(ItemDescription; Rec.Description)
{
    TableRelation = Item.Description;

    trigger OnAfterLookup(Selected: RecordRef)
    var
        Item: record Item;
    begin
        Selected.SetTable(Item);
        Rec.ItemNo := Item."No.";
    end;
}
```

The OnAfterLookup trigger supports split-relations.

## Interface Obsoletion

Interfaces can now be obsoleted using `ObsoleteState`, `ObsoleteReason`, and `ObsoleteTag`.
For interface procedures, the obsolete reason and tag can be specified in the `Obsolete` attribute: `[Obsolete(<Reason>,<tag>)]`

## Support for Access Property on Enums and Interfaces.

It is now possible to mark Enums and Interfaces as `internal` to a module.

## Control if locked labels should generate translation entries

When the "TranslationFile" setting is enabled, a template file with labels that can be sent for translation is generated. In previous versions, labels marked with `Locked = true` would be included in the template file, but marked so that they would be excluded from translation. With this change, these entries will no longer, by default, be included. If the flag `GenerateLockedTranslations` is added to the feature list in the app.json file, however, these entries are generated.

## Added cross-reference information generation

Compiling from the command line using the /generatecrossreferences or /xref option generates DGML and JSON files containing a serialized representation of the cross-reference graph.
DGML files can be loaded in Visual Studio for advanced visualizations and manipulation using the Code Map feature.

## Added IntelliSense to Control Add-in script files

IntelliSense is now available in JavaScript files for the global `Microsoft.Dynamics.NAV` object making it easier to explore the Control Add-in API and use methods such as `InvokeExtensibilityMethod`, `GetImageResource`, and `GetEnvironment`.
This behavior can be turned off by changing the setting `al.enableScriptIntelliSense` to `false`.

## Improvements to the AppSourceCop analyzer

As a continuation of the previous releases, we improved existing AppSourceCop code analyzer rules based on partner feedback and added new ones covering additional scenarios. More information can be found in our [online documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop). We also introduced a new configuration setting to specify a dedicated folder for the baseline packages to be used for breaking changes validation. For more information, see [AS0003](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0003) and [AS0091](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0091).

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
