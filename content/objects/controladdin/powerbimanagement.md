---
id: object/controladdin/powerbimanagement
type: object
title: Control add-in "PowerBIManagement"
summary: Control add-in "PowerBIManagement" in System Application (System.Integration.PowerBI). 18 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: null
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b79b5983ee6852df9e7517cb508a040d6b2bff034e7d2fb6ba351515a8f9823f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/PowerBIManagement.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/PowerBIManagement.ControlAddin.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
object_type: controladdin
object_id: null
name: PowerBIManagement
namespace: System.Integration.PowerBI
app: System Application
extends: null
first_version: "28"
last_version: "30"
present_in:
  - "28"
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 18
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Control add-in "PowerBIManagement"

> Control add-in "PowerBIManagement" in System Application (System.Integration.PowerBI). 18 public procedures. Present since at least BC28, still in BC30.

System Application · System.Integration.PowerBI · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/ControlAddIns/src/PowerBIManagement.ControlAddin.al) · facts from BC29

## Procedures

- `SetToken(AuthToken: Text)`: Initializes the token to be used when embedding Power BI content
- `EmbedPowerBIReport(ReportLink: Text; ReportId: Text; PageName: Text)`: Initializes the Power BI embed Report into the page
- `EmbedPowerBIDashboard(DashboardLink: Text; DashboardId: Text)`: Initializes the Power BI embed Dashboard into the page
- `EmbedPowerBIDashboardTile(DashboardTileLink: Text; DashboardId: Text; TileId: Text)`: Initializes the Power BI embed Dashboard Tile into the page
- `EmbedPowerBIReportVisual(ReportVisualLink: Text; ReportId: Text; PageName: Text; VisualName: Text)`: Initializes the Power BI embed Report Visual into the page
- `FullScreen()`: Enters full screen mode for the current embed
- `UpdateReportFilters(Filters: Text)`: Updates the report filters with the provided new filters
- `RemoveReportFilters()`: Removes the current report level filters
- `UpdatePageFilters(Filters: Text)`: Updates the page filters with the provided new filters
- `RemovePageFilters()`: Removes the current page level filters
- `SetPage(PageName: Text)`: Changes the active page of the report
- `SetLocale(NewLocale: Text)`: Changes the locale used to render the embedded element. If not specified, it will use the default Power BI language.
- `SetBookmarksVisible(Visible: Boolean)`: Controls whether the bookmark selection pane will be visible in the embed experience. Defaults to false.
- `SetFiltersVisible(Visible: Boolean)`: Controls whether the filter pane will be visible in the embed experience. Defaults to false.
- `SetPageSelectionVisible(Visible: Boolean)`: Controls whether the page selection bar will be visible in the embed experience. Defaults to false.
- `SetTransparentBackground(Transparent: Boolean)`: Controls whether the report background should be set to transparent regardless of the actual color. Defaults to false.
- `AddBottomPadding(AddPadding: Boolean)`: Controls whether the addin includes a bottom padding that makes it look nicer in some embedded scenarios. Defaults to false.
- `SetSettings(ShowBookmarkSelection: Boolean; ShowFilters: Boolean; ShowPageSelection: Boolean; ShowZoomBar: Boolean; ForceTransparentBackground: Boolean; ForceFitToPage: Boolean; AddBottomPadding: Boolean)` (obsolete 26.0: Use SetBookmarksVisible, SetFiltersVisible, AddBottomPadding, SetTransparentBackground, and SetPageSelectionVisible instead. The other options are no longer supported.): Sets the properties for the embed experience

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

## Deprecations

- procedure SetSettings: Pending 26.0 (#if not CLEAN26), "Use SetBookmarksVisible, SetFiltersVisible, AddBottomPadding, SetTransparentBackground, and SetPageSelectionVisible instead. The other options are no longer supported."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
