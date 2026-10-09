---
id: release/al-4.0.0
type: release
title: AL Language extension 4.0.0
summary: "AL Language extension 4.0.0 for Business Central 2019 release wave 2 update: released 2019-10-01; 12 changelog entries."
tier: official
language: en
system: development
tags:
  - al:go! version selection
  - access modifiers
  - object obsoletion
  - multiple sandboxes
  - translate other extensions using xliff
  - working in a workspace with projects and project references
  - attaching to the next bc session
  - new profile capabilities
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.502Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bca9819152a79d6e60ed260c07a753d7303b421d68de2586f5588a6125e47221
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 4.0.0
    date: "2019-10-01"
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
version: 4.0.0
wave: 2019 release wave 2 update
major: null
preview_at: null
released_at: "2019-10-01"
published_at: "2019-10-01"
prerelease: false
entry_count: 12
issues: []
changes: []
---

# AL Language extension 4.0.0

> AL Language extension 4.0.0 for Business Central 2019 release wave 2 update: released 2019-10-01; 12 changelog entries.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2019 release wave 2 update

Welcome to version 4.0.0! We are finally out of the Developer Preview stage, and this comes with a lot of new features.

## AL:Go! Version Selection

The AL:Go! command now allows you to choose which version of Business Central you wish to target. Because Business Central 4.0 comes with changes in how the Base Application is structured, AL:Go! seamlessly takes care of setting up the correct dependencies for extension development based on your target environment.

## Access Modifiers

We have added access modifiers to the AL language. Access modifiers can be used to specify access to language elements to facilitate encapsulation.

- Codeunits, Tables, and Queries can be marked as internal to the extension by specifying `Access = Internal` property.
- Procedures can now also be marked as internal or protected similar to the existing local keyword.
- Global variables can be marked as protected.
- Table fields can be marked as internal, protected, or local.

The different access modifiers are defined as:

- `Public` is accessible to all.
- `Internal` is only accessible from within the same extension.
- `Protected` is only accessible within the defining object and object extensions to the same object.
- `local` is only accessible from within the same object.

It is possible to grant access to internals to referencing extensions by specifying them in the internalVisibleTo section of the app.json file.

## Object Obsoletion

We have added the capability to mark most objects and members for obsoletion. The following can be made obsolete by specifying the `ObsoleteState = Pending` property. Optionally, the `ObsoleteReason = 'Reason'` property can also be specified to provide a more detailed warning message to users of the object.

- Codeunit
- Enum
- EnumValue
- Page
- PageAction
- PageActionArea
- PageActionGroup
- PageActionSeparator
- PageArea
- PageChartPart
- PageField
- PageGroup
- PageLabel
- PagePart
- PageSystemPart
- Query
- QueryColumn
- QueryDataItem
- QueryFilter
- Report
- ReportColumn
- ReportDataItem
- RequestPage
- XmlPort

The following can also be made obsolete by specifying the `[Obsolete(<Reason>)]` attribute:

- Procedure
- Variable

If an object marked for obsoletion is used, this will trigger a compiler warning that specifies the reason for obsoletion (if provided).

## Multiple sandboxes

Sometimes a single sandbox isn't enough, so with the opportunity to create sandboxes it is now possible in the launch.json file to specify which sandbox the extension should be installed to, simply by adding the parameter "SandboxName".

## Translate other extensions using Xliff

Translating objects outside the extension was possible before using .txt files but the support for that has been removed in favor of using Xliff files.
Take the generated xliff file of the extension that you want to change and translate it.
In the root of the extension, create a directory named "Translations" and place the translated xliff there.
Now publish the extension and make sure to change the language in 'My Settings' to see the new translations in the UI.

## Working in a workspace with projects and project references

We have added support for working with project references within a work space and also the ability to publish sets of changed projects that are in a dependency relation within a work space.
A project reference in a work space is a project that is defined as a dependency in the app.json file for a given project.
No UI semantics are presented for a project reference, like in Visual Studio. There is no need to download symbols to reolve project references.
They will be resolved from within the work space. Example: Assuming that one works with a Test project referencing a base project, if one adds a method to Base it should be immediately seen in TestProject(s).
One does not need to build the base for this.
Publishing within Visual Studio Code has also changed a lot. We now have the possibility to publish changed dependency sets. Dependency sets are packaged in *.dep files. We consider a project changed if it is RAD changed; meaning that a project is considered changed if it has at least one application object that is part of the RAD file or will be part of the RAD file, had it been built. When a publishing operation is requested all changed projects within a dependency set are published. Example if you work in a TestProject and change TestProject and then change Base then both will be packaged and published. RAD publishing obeys dependency set publishing. In the scenario above if you RAD publish TestProject with Base changed both will be RAD published.

## Attaching to the next BC session

We have added support to attach to the next BC session from Visual Studio Code.
We support attaching to a web client, background, and web API sessions for on-premise deployments and only web API for sandbox-based deployments. We also support debugging the new async page background tasks.
In order to get started one needs to first create an attach configuration. We have created two predefined templates that can be chosen from, one to create an attach configuration for sandboxes, and one for on-premise.
The attach configuration contains a breakOnNext enum that will determine which next client session the debugger will attempt to attach to. Pressing F5 will start an attach debugging session, if an attach configuration is selected. The first session type that has been specified in the breakOnNext enum will break on the breakpoints specified in Visual Studio Code. Only the user who has started an attach session in Visual Studio Code can later be attached to a session executing on the server.

## New profile capabilities

We introduced new properties on profiles to support translating them in AL. You can now use the properties Caption/CaptionML to specify a user-friendly name for the profile and use Description/DescriptionML to add some more information about the profile.

You can also decide whether your profile is by default proposed to end-users in 'My Settings' using the `Enabled` property and whether it should contribute to the Role Explorer by setting the `Promoted` property.

Discover the new profile capabilities by using the snippet `tprofile`.

## Improving the Navigation bar of your Role Center

It is now possible to extend the navigation bar of your profile's Role Center from page customizations. This is done by adding a new actions in the Sections or Embedding area of the page customization applied on your Role Center.

```
profile MyProfile
{
    Caption = 'My Business Manager Profile';
    RoleCenter = "Business Manager";
    Customizations = MyRoleCenterCustomization';
}

pagecustomization MyRoleCenterCustomization customizes "Business Manager"
{
    actions
    {
        addfirst(Embedding)
        {
            action(NewNavigationAction)
            {
                RunObject = page MyNewPage;
            }
        }
    }
}
```

While it was only possible to run List Pages from the actions defined in the Navigation bar, it is now also possible to run any type of Pages, Codeunits, Reports, and XmlPorts.

## SharedLayout for Views

As part of the April ‘19 release, we introduced a new model for creating page views, offering a simple way to define alternative views of list pages using filtering and sorting of the records, but also layout changes.

In order to offer more flexibility and design different experiences for end-users, it is now possible to specify whether a view shares the same layout than the base page or defines its own layout.

By setting the `SharedLayout` property of your view to true, your view follows the layout of the base page (`All`, in the web client) and any user personalization made on `All` or any of the views marked with SharedLayout are applied on the view.

On the other hand, by setting the `SharedLayout` property to false, the view defines its own layout and is independent from all other views. The view is detached. Any changes coded in the layout sections are applied in the view. User personalization made on the page are not applied on that view.

You can get snippets for both types of views by writing `tview`.

## Upgrade DEV extensions from VS Code

As part of this release, it's now possible to upgrade your developer extensions from Visual Studio Code. If you have an extension installed with version `1.0.0.0` and publish another version of this extension where the version is higher than `1.0.0.0`, the extension will be upgraded. This allows you to test your upgrade procedures using the developer endpoint, and gives you a faster feedback loop for testing your extension compared to, for example, testing upgrade through the management client. The extension upgrade will only be triggered if you don't use schema update mode `Recreate`. If you use `Recreate`, your old extension will be uninstalled and your new one will be installed.

## Symbol Searching now supports searching by ID

When using `Ctrl+T` in Visual Studio Code with the `#` character prefix, you can now search for objects by their ID in your AL projects. This enables you to faster navigate your codebase and hopefully will increase your productivity when developing AL extensions.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
