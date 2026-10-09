---
id: release/al-5.0.0
type: release
title: AL Language extension 5.0.0
summary: "AL Language extension 5.0.0 for Business Central 2020 release wave 1 update: released 2020-03-31; 15 changelog entries."
tier: official
language: en
system: development
tags:
  - al interfaces
  - enum implements interfaces
  - debugger changes
  - workspace changes
  - specifiying the data access intent of objects
  - object obsoletion tag
  - select the intial state of repeater controls displayed as trees
  - declare multiple variables in the same declaration
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.445Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a5560399912e81d2f41f6c233145e9ec50ac25de1d023445c440d75f59705634
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 5.0.0
    date: "2020-03-31"
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
version: 5.0.0
wave: 2020 release wave 1 update
major: null
preview_at: null
released_at: "2020-03-31"
published_at: "2020-03-31"
prerelease: false
entry_count: 15
issues: []
changes: []
---

# AL Language extension 5.0.0

> AL Language extension 5.0.0 for Business Central 2020 release wave 1 update: released 2020-03-31; 15 changelog entries.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2020 release wave 1 update

## AL Interfaces

We have introduced the interface concept in AL which allows developers to apply polymorphism and code against abstraction. Codeunits can implement multiple interfaces by adding the ´implements´ keyword and a list of all the implemented interfaces to the codeunit declaration. IntelliSense suggests you a list of available interfaces. We have added a code action which adds the missing members of an interface to the implementer codeunit.
We also introduced AppSourceCop rules to detect any breaking changes. Adding, deleting, or modifying a procedure in an interface might break the implementers of your interface. AppSourceCop generates an appropriate error for each case.

## Enum implements interfaces

We have added interface support to enums where an enum can implement multiple interfaces and set a default implementer codeunit for each of them. An enum value assigned to an interface variable can initialize the interface.

## Debugger changes

We have added support to view values of Lists and Dictionaries in the debugger.
We have simplified the evaluation of array index expressions in a watch window. Until now the NAV debugger evaluation syntax was used in a watch window for an array index expression, like array."[1]" . Now array[1] would also evaluate.
We have extended the support on hovering for evaluation when debugging. Both parts of a simple non-composed member access expression would evalute. We also
support hovering on quoted identifiers.
An example is when hovering on "My Customer Rec" and also "No." would evaluate on an expression like "My Customer Rec"."No."

## Workspace changes

We have added support for goto definition when multiple launch configurations are defined for a project. A new (per workspace folder) setting is defined called
al.defaultConfigurationName which is going to be used to resolve the server name in scenarios that involve multiple configurations and the need to request information from a server.
We have fixed the issue that Al projects cannot coexist with other project types in a workspace.

## Specifiying the data access intent of objects

You can now choose to run selected reports, queries, and web service calls on a read-only replica of the database. This way, analytical workloads will not have any impact on the primary database.

The Page, Report, and Query objects now have a property called `DataAccessIntent` that can take the values `ReadOnly` or `ReadWrite`. This property works as a hint for the server, which will connect to the secondary replica if possible. When a workload is executed against the replica, insert/delete/modify operations are not possible for ReadOnly objects.

## Object obsoletion tag

On top of the `ObsoleteState` and `ObsoleteReason` properties, it is now possible to specify an additional free-form text to support tracking of where and when the object was marked as obsolete, for example, branch, build, or date of obsoleting the object. This can be done through the `ObsoleteTag` property on AL objects.
For procedures and variables, the obsolete tag can be specified as an optional parameter in the `Obsolete` attribute: `[Obsolete(<Reason>,<tag>)]`.

## Select the intial state of repeater controls displayed as trees

We introduced the ability to specify the initial state of the records in repeater controls displayed as a tree structure in the web client by using the `TreeInitialState` property.
They can now be either fully expanded (`ExpandAll`) or fully collapsed (`CollapseAll`). This property can be modified in the web client and changes can be persisted using the designer.

## Declare multiple variables in the same declaration

Variable declarations of the same type can now be a comma-separated list of variable names. This improves readability of the code by allowing variables of the to be grouped together and thereby reducing the number of lines.

## New tool to generate CDS/CRM proxy tables

We have added a new command-line tool `altpgen.exe` to generate .al proxy tables for CDS/CRM. This tool replaces the `New-NAVCrmTable` powershell cmdlet. The new tool and the runtime supports extending an existing CDS/CRM table with additional fields through a tableextension.

## .NET Core runtime

With this release, we have switched from running the language server on the .NET Framework runtime to running it on the .NET Core 3.0 runtime.
This switch has allowed us to take advantage of the many [performance improvements made in .NET Core 3.0](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-core-3-0/) and has resulted in drastically improving the compilation time.
You can fallback to the legacy .NET Framework runtime by setting `al.useLegacyRuntime` to `true`. You must restart Visual Studio Code before the option will take effect.

## Support for "application" reference

You can now use the `application` property in your extension's manifest to express a dependency on an extension called `Application`. This allows you to remove direct dependencies on Microsoft's `Base Application` and "System Application" and to enable your extension to compile against any extension called `Application`.

## Support for propagated dependencies

You can use the `propagatedDependencies` manifest option to specify whether the dependencies of this project should be propagated as direct dependencies of projects that depend on this one. Default is false. If set to true then any dependencies of the current package will be visible to consumers of the package. For example, if A depends on B that depends on C, by default, A will not be able to use types defined in C. If B has "propagateDependencies" : "true", then A will be able to use types defined in C without taking a direct dependency.

## Fine-tune the behavior of the language server

The AL compiler and language server provide, by default, multiple productivity features such as background compilation, IntelliSense, Go to Definition, Find All References, and much more. All these features require additional computational resources and they can be especially taxing when working on very large projects.
We have added the following options to fine-tune the behavior of the language server:
```
"al.compilationOptions": {
        "parallel": true,
        "delayAfterLastDocumentChange": 800,
        "delayAfterLastProjectChange": 4000,
        "maxDegreeOfParallelism": 2
}
```

By default, the language server uses as many threads as the system allows to compile your solution. You can also control the number of threads that the language server uses by using the option `al.compilationOptions.maxDegreeOfParallelism`. Setting this to a higher value will use a higher number of threads, while lower values will use a lower number of threads.
By setting the `al.compilationOptions.parallel` option to `false` you will instruct the language server to use a single thread.
The `al.compilationOptions.delayAfterLastDocumentChange` and `al.compilationOptions.delayAfterLastProjectChange` options can be used to trade-off compiler responsiveness for resource consumption. Setting these options to higher values will increase the delay between when a change is made in Visual Studio Code and when the compiler processes it while reducing resource consumption.

## Launch queries from Visual Studio Code

You can now run queries when you publish an AL project (F5 and Ctrl+F5) from Visual Studio Code. Simply modify the launch.json file of the project to include the `"startupObjectType" = "query"` and `"startupObjectId" = "<QueryID>"` settings, replacing <QueryID> with the ID of the query that you want to run.

## Support for Microsoft Edge Beta

We have added support for launching the Microsoft Dynamics 365 Business Central Web Client in the Microsoft Edge Beta internet browser from Visual Studio Code.
This feature can be enabled by setting `al.browser` to `EdgeBeta` in your settings.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
