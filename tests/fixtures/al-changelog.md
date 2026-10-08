# Business Central 2027 release wave 1
## Version 30.0

### Markdown page fields
- Added `ExtendedDatatype = Markdown` for page fields bound to a `Text` variable, `Text` table field, or `Text`-returning procedure, including bounded `Text`. Requires `MultiLine = true` and an only-child field in a root-level group in the Content area. The value remains raw Markdown; direct table-field declarations and `BigText`, `Code`, `Label`, `TextConst`, string literals, and concatenation sources are not supported.

### GitHub issues
- [#8280](https://github.com/microsoft/AL/issues/8280) Fixed `al_publish` hanging after successfully publishing a full dependency tree.
- [#8273](https://github.com/microsoft/AL/issues/8273) Fixed `al_downloadsymbols` ignoring `projectPath` in multi-project workspaces.
- [#8171](https://github.com/microsoft/AL/issues/8171) Fixed breakpoints in report request page triggers such as `OnInit` and `OnOpenPage` not being hit.

### Bug fixes
- Fixed agentic AL LSP symbol searches returning an unexplained failure when requested while the workspace was still loading. The `al/symbolSearch` endpoint now waits briefly for initialization and otherwise returns guidance to retry after workspace loading completes.
- Word report layouts containing `INCLUDETEXT` or `INCLUDEPICTURE` field codes now produce a compiler warning.

# Business Central 2026 release wave 2
## Version 18.0

### Inherent permissions validation in multi-root workspaces

The compiler now reports AL0720 when an `InherentPermissions` attribute in one project references an object from another project in a multi-root workspace.

### Bug fixes

- Fixed Word layouts created with the Word add-in missing data bindings when the compiler compiles the layout against the current report design.
- Fixed AL0886 being reported from runtime 18 when a table extension key references a field added by a table extension that is packaged in the same app as the base table.

### Bug fixes

- AL report layout and analysis view file path properties (`RDLCLayout`, `WordLayout`, `ExcelLayout`, `LayoutFile`, and `DefinitionFile`) now accept both `/` and `\` directory separators on all operating systems, so the same AL source compiles identically on Windows and Linux. AL0363 ("The directory separator used in this property value is not compatible with the current operating system.") is no longer reported; the diagnostic ID is reserved for backwards-compatible suppression syntax.

### ALTool changes

- Added `altool downloadsymbols` to download the symbol packages required by an AL project from a Business Central server or global NuGet sources. Use `--project` to select the project (the current directory is used by default), `--packagecachepath` to select the destination cache, and `--force` to refresh cached packages. `--globalsourcesonly` downloads without a server and supports country/region, custom-feed, custom-feeds-only, and minor-version options. Server downloads use the same connection options as other `altool` commands. The command emits structured JSON by default for pipeline use; pass `--raw` for human-readable output.

<!-- ### Runtime changes
Make a subheading for the change, write an introductory paragraph that addresses what's added, and what the usage scenario is, and if relevant, add a code example or screenshot.

#### Miscellaneous -->

### Visual Studio Code Editor changes

#### Performance Profiling MCP: capture CPU profiles from a running session

A new Performance Profiling MCP surface lets an AI agent capture `.alcpuprofile` CPU profiles from a slow Business Central session and analyze the hot AL code paths. Unlike the troubleshooting MCP — which targets the session you are actively debugging — profiling is a standalone scenario: the target session id is supplied per tool call (the agent reads it from the prompt, e.g. *"why is session 10 slow?"*), so no debugging session is required.

**Command line (`altool launchprofilingmcpproxy`)**

The [AL dotnet tool](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-tool-package) now includes a `launchprofilingmcpproxy` command — a stdio MCP server that forwards an agent's profiling tool calls (`schedule_profiling`, `stop_schedule_and_get_profiles`, `get_profile_for_activity`) to a Business Central server's Profiling MCP context. The connection is configured once from launch.json-style parameters; the target session id is a per-call tool argument.

```bash
# On-premises
altool launchprofilingmcpproxy --environmenttype OnPrem --server http://localhost --serverinstance BC --port 7047 --authentication UserPassword

# Cloud (sandbox)
altool launchprofilingmcpproxy --environmenttype Sandbox --environmentname sandbox --tenant contoso.onmicrosoft.com
```

Credentials come from the environment and are never stored in the configuration. For **cloud** connections the proxy authenticates non-interactively (it never opens a browser) and resolves a token in this order: (1) the `BC_ACCESS_TOKEN` environment variable — in Visual Studio Code agent mode the extension injects your VS Code sign-in token here automatically, and for headless/CI hosts you set it yourself; (2) a token cached by a prior interactive `altool auth login`. For **on-premises** hosts, `BC_SERVER_USERNAME`/`BC_SERVER_PASSWORD` supply `UserPassword` (Basic) authentication, and `Windows` authentication uses the current Windows identity with no credentials. For a multitenant on-premises server, pass `--tenant` to target a specific tenant. The same `--logfile`, `--loglevel`, and `--nolog` diagnostics as the other commands are supported.

# On-premises

- Cloud targets continue to use AAD/OAuth by default. For headless on-premises and container scenarios, `publishapp` and `runtests` now read missing connection values from `BC_SERVER_URL`, `BC_SERVER_INSTANCE`, and `BC_SERVER_PORT`; when `BC_SERVER_USERNAME` and `BC_SERVER_PASSWORD` are also set, UserPassword authentication is selected automatically. Explicit command-line options and cloud targets continue to take precedence.

#### Miscellaneous

- Go to implementation on a codeunit override now includes the matching default interface method alongside explicit codeunit implementations.


# Business Central 2023 release wave 2

## Version 12.7
- [#7643](https://github.com/microsoft/AL/issues/7643) DotNet exceptions with CodeAnalysis - 'codeLens/resolve' failed with error
- [#6401](https://github.com/microsoft/AL/issues/6401) Multiple Report objects can refer to / update the same Layout, causing error/race/unpredictable updates

## Miscellaneous
- Fixed an issue where codeLens would crash due to trying to resolve a field on report extensions.

## Version 12.6
## GitHub Issues
- [#7583](https://github.com/microsoft/AL/issues/7583) Pinning the AL Explorer or AL Home in VS Code does not work permanently
- [#7543](https://github.com/microsoft/AL/issues/7543) Unable to attach session to vs code
- [#7545](https://github.com/microsoft/AL/issues/7545) Intellisense doesn't work when using global object enum for enum

### Miscellaneous
- Fixed issue where a malformed permission value could lead to a crash.
- Fixed an issue where `AL:Go!` would generate a namespace name based on the project name and config even if they result in an invalid namespace name.
- Align Excel report layout template with current runtime and emit caption, translation and metadata sheets for use in layouts.


# Business Central 2019 release wave 2 update

## Version 4.0.0

Welcome to version 4.0.0! We are finally out of the Developer Preview stage, and this comes with a lot of new features.

### AL:Go! Version Selection

The AL:Go! command now allows you to choose which version of Business Central you wish to target. Because Business Central 4.0 comes with changes in how the Base Application is structured, AL:Go! seamlessly takes care of setting up the correct dependencies for extension development based on your target environment.

# Business Central April ‘19 update (2019/04)

## February 2019 update
Welcome to the February edition of the Developer Preview. The biggest announcement this month is that we are publishing a preview of the base application fully on AL language.

There is a new Docker image, which contains this version here: `bcinsider.azurecr.io/bcsandbox-master:14.0.28630.0-al`. Currently this image is not automatically refreshed. We will manually push new images with the country code `al` (and new version number) until we have a process in place to do this for all country codes. If you do not have bcinsider credentials, please reach out to dyn365bep@microsoft.com. Please note that:
- The upcoming April ‘19 2019 release of Business Central is still based on C/AL and C/SIDE, as communicated at Directions Fall 2018 and other events. This means that, just like now, on-premise code customization is done in C/AL and C/SIDE, whereas extensions for on-prem or SaaS are authored in AL and Visual Studio Code.
- The AL Docker Preview is exactly that, a peek into the future.
- The fact that the AL preview image has version 14.0 is just because the preview is an auto-generated AL version of the C/AL master code repository for the upcoming C/AL April ‘19 release which is version 14. Once we have branched internally for April ‘19, future AL preview images will be version 15. There will not be an official AL version of the application for the April ‘19 release.
