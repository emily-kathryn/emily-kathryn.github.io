# Marine migration preview provenance

Source: https://github.com/emily-kathryn/marine-migration-visualizer
Commit: 27a1ad3095414b523185b837ab20a10b004eba6a

The portfolio hosts only a static SVG preview. The interactive HTML was removed
because its external CARTO basemap returned API-key error tiles. The original
Folium map remains in the project repository at `outputs/migration_map.html`
(Git blob 2bb7e3fa4f30d74b9507acf271b2069d9eeac050).
The portfolio preview requires no API keys, tile server, or map scripts.

`marine-migration.svg` plots all eight L.polyline coordinate arrays from the original
HTML, preserving point order, on a longitude/latitude grid. No generated or
invented tracks or coastline. Coordinates use x = 65 + (longitude - 72.15) /
1.1 * 770 and y = 125 + (-7.2 - latitude) / .35 * 245. Lines are colored only
for distinction; colors do not encode species or distance.

The local source CSV contains 124,967 rows, 124,962 with complete animal ID,
timestamp and coordinates. Restricting to visible=True yields 88,727 complete
observations across 23 turtles (hawksbill and green). The repository loader
does not apply the visible flag: analysis outputs use all complete records.
Daily outliers exceed 150 km OR the animal's mean + 3 standard deviations.
The map independently drops rows whose incoming segment exceeds 200 km,
selects eight turtles with most points, then retains every fifth point.
It reconnects retained points, so it is an exploratory visualization rather
than a guarantee that all plotted segments are below 200 km.
