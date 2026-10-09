---
id: release/al-8.0
type: release
title: AL Language extension 8.0
summary: "AL Language extension 8.0 for Business Central 2021 release wave 2: no upload of it left in the marketplace gallery; 8 changelog entries, 4 GitHub issues linked."
tier: official
language: en
system: development
tags:
  - allowing the name and publisher of extensions to be changed
  - fully automated technical validation of appsource submissions
  - specify synchronization mode when installing or upgrading an extension
  - getting more control over availability of resources and source code and dynamically override the policy
  - support for profiling al code
  - bug fixes
  - intellisense
  - github issues
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-09T15:15:21.628Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9e204b48a887859ed9d83108a2f256fb336c248b1a5d67e907ad7826e5d32387
evidence:
  - kind: marketplace
    url: https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog
    title: AL Language extension changelog, version 8.0
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
version: "8.0"
wave: 2021 release wave 2
major: null
preview_at: null
released_at: null
published_at: null
prerelease: true
entry_count: 8
issues:
  - 6314
  - 6648
  - 6659
  - 6689
changes: []
---

# AL Language extension 8.0

> AL Language extension 8.0 for Business Central 2021 release wave 2: no upload of it left in the marketplace gallery; 8 changelog entries, 4 GitHub issues linked.

[Changelog on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms-dynamics-smb.al/changelog) · Business Central 2021 release wave 2

## Allowing the Name and Publisher of extensions to be changed

Extensions can now have their Name and Publisher properties changed between versions. To do this, the version of the extension must be increased, and the app ID must remain the same. Any other extensions that depend on the changed extension will compile against the new extension without any update necessary to the dependencies their app.json file. Downloading symbols will also fetch the changed version of the app.

Note: If you are using workspaces with multiple projects and change the name or publisher of an extension in the workspace, the dependencies in the app.json file must be updated with the new name and publisher or you may encounter issues with reference resolution.

Read more about [App Identity](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-app-identity)

Two AppSourceCop rules have been introduced in order to validate the changes done on the identity of extensions based on your current extension's runtime version:

- [AS0096](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0096) validates extension renames.
- [AS0097](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/analyzers/appsourcecop-as0097) validates publisher renames.

## Fully automated technical validation of AppSource submissions

From the 1st of October, the [technical validation](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-checklist-submission) of AppSource extensions will be fully automated. This means that the technical validation of your extensions will be also processed outside business hours of the technical validation team, including on weekends and holidays.

The validation results will be directly displayed in Partner Center. For extensions using Azure Application Insights telemetry (by using `applicationInsightsConnectionString` or `applicationInsightsKey` in their app.json), traces with detailed information are logged as part of the validation. For more information, see [Analyzing AppSource Submission Validation Trace Telemetry](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-appsource-submission-validation-trace).

Join the [AppSource yammer group](https://www.yammer.com/dynamicsnavdev/#/threads/inGroup?type=in_group&feedId=41498640384) for more information or questions about the AppSource validation process.

## Specify Synchronization Mode when installing or upgrading an extension

Using the built-in cmdlets targeting an on-premises installation of Business Central, you can now synchronize your extension in the same step as installing or upgrading it. Furthermore, you can clean your extension while uninstalling it. For more information, visit the [cmdlet documentation](https://learn.microsoft.com/powershell/business-central/overview?view=businesscentral-ps-19).

## Getting more control over availability of resources and source code and dynamically override the policy

We are listening to your ideas. Now, you have more control over availability of the resources and source code of an extension; by adding `resourceExposurePolicy` to the extension's manifest you can specify if the source code would be available for download, or if the source code can be debugged from other extensions. You can also control if the source code is included in the downloaded symbols.

Moreover, these values can be overridden for the users of a specific AAD tenant, even after the extension is published. In this way you can enable one or few of the properties for a period for the users of an AAD tenant.

Learn more about it here, [Resource Exposure Policy](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-security-settings-and-ip-protection)

## Support for profiling AL code

With the AL Profiler in Visual Studio Code you can investigate the time spent on AL execution in profiler views. Performance profiles are generated from snapshots taken using the AL:Generate profile file command. The resulted file can be opened with one of two editors showing the bottom-up, respectively the top-down graph. Once opened in one view it is possible to switch to the other view.
For more information, see [AL Profiler Overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-profiler-overview).

## Bug fixes

### IntelliSense

- Added IntelliSense for change add symbols in RequestPages.
- Fixed IntelliSense suggestions the anchors of move and modify controls in Pages.

### GitHub issues

- [#6659](https://github.com/microsoft/AL/issues/6659) Fixing the wrongly shown AppSourceCop rule errors about access property of fields within tables.
- [#12219](https://github.com/microsoft/ALAppExtensions/issues/12219) More verbose error message when you are trying to use an object that has been marked with Scope OnPrem and you are in a Clould extension.
- [#6648](https://github.com/microsoft/AL/issues/6648) Fixing the problem where you can't refer DataItem defined in ReportExtension in local procedure living in the same ReportExtension.
- [#6314](https://github.com/microsoft/AL/issues/6314) Fix the bad json produced by the compiler CLI when errorlog argument is added.
- [#6689](https://github.com/microsoft/AL/issues/6689) Fix the suggestion of the next ID for report extension.

More issues that we found through our internal testing and validation have been fixed. Mainly in the area of ReportExtension and Emit for different types. We have worked on making the ReportExtension object more mature and robust.

Source: Visual Studio Marketplace, ms-dynamics-smb.al changelog, Microsoft's text unchanged. Dates from the gallery's upload records.
