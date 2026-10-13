---
name: bc-localization
description: Business Central country localizations (BE, NL, DE, FR, US, ...) - which objects a country layer adds, which W1 objects it changes, added fields and events, and where Learn documents the local functionality - through the bc-observatory MCP server. Use for country-specific Business Central questions.
---

# Business Central localizations

1. `localization(country)` with the two-letter code (BE, NL, DE, ...): the country layer against W1 for the current release, with its Learn local functionality hub. 18 of the 22 country pages are over 30,000 characters and come back compact; `localization(country, section: "objects_of_its_own")` with `offset` and `limit` lists a country's own objects, `section: "by_area"` its areas.
2. For a W1 object a country changes, `get_object(type, id)` lists the countries that replace it, and `get_object(type, id, country)` prints what the layer adds to a W1 object (fields, events, procedures with ids and types) before the W1 page; `search("field: <name>", country: "BE")` finds a field a layer adds. A country's own objects have pages too (`objects/table/11300-be`): `search(name, country: "BE")`, `search("table 11300 BE")` or `get_object("table", "11300", country: "BE")`.
3. `search(query, type: "localization")` when the country is unclear; `search("BE")` opens on the Belgium page.
4. The localization page names the Learn local functionality hub; read its articles with the Microsoft Learn MCP's `microsoft_docs_fetch(url)`.

Country layers here are the Base Application's; country apps shipped separately are not covered yet. Say so when a question needs them.
