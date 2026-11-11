# Marine migration preview provenance

Source: https://github.com/emily-kathryn/marine-migration-visualizer
Commit: 27a1ad3095414b523185b837ab20a10b004eba6a

The portfolio hosts only a static SVG preview. The interactive HTML was removed
because its external CARTO basemap returned API-key error tiles. The original
Folium map remains in the project repository at `outputs/migration_map.html`
(Git blob 2bb7e3fa4f30d74b9507acf271b2069d9eeac050).
The portfolio preview requires no API keys, tile server, or map scripts.

`marine-migration.svg` is a self-contained geographic preview generated directly
from the local source CSV's valid, visible observations. The main map highlights
animals 52231 and 64792; the Diego Garcia inset shows 64789, 64794, and 178882.
Observations are sorted chronologically per animal. Lines break at consecutive
steps over 200 km or time gaps over 48 hours. Main tracks sample every third
point per uninterrupted segment; inset tracks sample every fifth; segment
endpoints are retained. Colors distinguish individual animals, not species.
This preview does not represent a recalculation of the repository's analyses.

Coastlines are Natural Earth 1:10m admin-0 polygons (public domain):
https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries.geojson
https://www.naturalearthdata.com/about/terms-of-use/
Main extent: 47–77 degrees east, 0.5–17.85 degrees south.
Inset extent: 72.31–72.55 degrees east, 7.20–7.49 degrees south.
Both maps use equirectangular coordinates. No invented tracks or coastline;
no network resources, tile server, or runtime map API.

The local source CSV contains 124,967 rows, 124,962 with complete animal ID,
timestamp and coordinates. Restricting to visible=True yields 88,727 complete
observations across 23 turtles (hawksbill and green). The repository loader
does not apply the visible flag: analysis outputs use all complete records.
Daily outliers exceed 150 km OR the animal's mean + 3 standard deviations.
The map independently drops rows whose incoming segment exceeds 200 km,
selects eight turtles with most points, then retains every fifth point.
It reconnects retained points, so it is an exploratory visualization rather
than a guarantee that all plotted segments are below 200 km.

The portfolio card uses `turtle-tracks.svg`, a map-only adaptation of the
main panel. Its two tracks and coastline geometry come from the full preview.
The full preview remains linked for the Diego Garcia inset and dataset context.

The portfolio card replays hawksbill 52231 from October through December 2018.
It uses the original visible fixes from the local telemetry CSV, in timestamp
order, with a uniformly accelerated clock. The marker advances only to recorded
fixes. Lines connect successive observations for display. This selected window
has no gaps exceeding 48 hours. The map reuses the existing Natural Earth
coastlines. The full map still shows the second track and Diego Garcia inset.
