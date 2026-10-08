---
id: object/controladdin/powerbimanagement
type: object
title: Control add-in "PowerBIManagement"
summary: Control add-in "PowerBIManagement" in System Application (System.Integration.PowerBI). 18 public procedures. Introduced in BC24, still in BC30, changed in BC25-26, BC28.
tier: official
language: en
tags:
  - controladdin
  - system application
versions:
  introduced: "24"
  last_changed: "28"
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 733253ac0344dc0a403283ea65c637233c7ba14533ba0b51db940a0c86e9a4f3
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/PowerBIManagement.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/PowerBIManagement.ControlAddin.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
first_version: "24"
last_version: "30"
present_in:
  - "24"
  - "25"
  - "26"
  - "27"
  - "28"
  - "29"
  - "30"
changed_in:
  - "25"
  - "26"
  - "28"
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
  calls: 0
  called_by: 2
  implements: 0
---

# Control add-in "PowerBIManagement"

> Control add-in "PowerBIManagement" in System Application (System.Integration.PowerBI). 18 public procedures. Introduced in BC24, still in BC30, changed in BC25-26, BC28.

System Application · System.Integration.PowerBI · BC24-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/ControlAddIns/src/PowerBIManagement.ControlAddin.al) · facts from BC29

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

## Called by

From the extracted call graph of BC29 (graphify-al on the snapshot checkout): calls whose target is known from a declared type or an `Object::"Name"` argument. Interface dispatch and calls through events are not counted, so the list is not complete.

- [Page 6324 "Power BI Element Addin Host"](../page/6324.md) (9 calls: `InitializeAddIn → AddBottomPadding`, `InitializeAddIn → EmbedPowerBIDashboard`, `InitializeAddIn → EmbedPowerBIDashboardTile`, …)
- [Page 6325 "Power BI Embedded Report Part"](../page/6325.md) (9 calls: `PushFiltersToAddin → UpdateReportFilters`, `SetReport → EmbedPowerBIDashboard`, `SetReport → EmbedPowerBIDashboardTile`, …)

## Across versions

- Present in: BC24-30
- Changed (declaration) in: BC25-26, BC28

## Deprecations

- procedure SetSettings: Pending 26.0 (#if not CLEAN26), "Use SetBookmarksVisible, SetFiltersVisible, AddBottomPadding, SetTransparentBackground, and SetPageSelectionVisible instead. The other options are no longer supported."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "PowerBIManagement")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
