---
name: bc-localization
description: Business Central country localizations (BE, NL, DE, FR, US, ...) - which objects a country layer adds, which W1 objects it changes, added fields and events, and where Learn documents the local functionality - through the bc-observatory MCP server. Use for country-specific Business Central questions.
---

# Business Central localizations

1. `localization(country)` with the two-letter code (BE, NL, DE, ...): the country layer against W1 for the current release, with its Learn local functionality hub.
2. For a W1 object a country changes, `get_object(type, id)` lists the countries that replace it. A country's own objects have pages too (`objects/table/11300-be`): `search(name, country: "BE")`, `search("table 11300 BE")` or `get_object("table", "11300", country: "BE")`.
3. `search(query, type: "localization")` when the country is unclear; `search("BE")` opens on the Belgium page.

Country layers here are the Base Application's; country apps shipped separately are not covered yet. Say so when a question needs them.
