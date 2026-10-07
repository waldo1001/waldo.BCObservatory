---
id: object/controladdin/powerbimanagement
type: object
title: Control add-in "PowerBIManagement"
summary: Control add-in "PowerBIManagement" in System Application (System.Integration.PowerBI). 18 public procedures. Introduced in BC24, still in BC30, changed in BC25, BC26, BC28.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4f2bd322eab491ecda9e35073d2670aada7dcd425a1fd024abfe2c53e226eabf
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/ControlAddIns/src/PowerBIManagement.ControlAddin.al
    title: src/System Application/App/ControlAddIns/src/PowerBIManagement.ControlAddin.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
---

# Control add-in "PowerBIManagement"

> Control add-in "PowerBIManagement" in System Application (System.Integration.PowerBI). 18 public procedures. Introduced in BC24, still in BC30, changed in BC25, BC26, BC28.

System Application · System.Integration.PowerBI · BC24-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/System%20Application/App/ControlAddIns/src/PowerBIManagement.ControlAddin.al) · facts from BC29

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

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "controladdin", object_name: "PowerBIManagement")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node controladdin "PowerBIManagement"`

## Across versions

- Present in: BC24, BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: BC25, BC26, BC28

## Deprecations

- procedure SetSettings: Pending 26.0 (#if not CLEAN26), "Use SetBookmarksVisible, SetFiltersVisible, AddBottomPadding, SetTransparentBackground, and SetPageSelectionVisible instead. The other options are no longer supported."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
