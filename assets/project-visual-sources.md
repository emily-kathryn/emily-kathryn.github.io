# Portfolio project visual sources

## Quadruped Robotics

- CAD repository: https://github.com/Hund-Robotics/cad (team repository).
- Inspected commit: 4632ae6f8ba7e65f565c2f49eb59cbd25536c7e8.
- Source: ASSEM_MASTER_HUND.SLDASM, Git blob e0564c9fa9710a432f2e5c957e72d2cad1f4f5fe.
- The assembly's embedded PNG preview was extracted from a raw-DEFLATE stream.
  The actual saved render is laid out in a clipped panel; no generated geometry,
  reconstructed robot, or invented materials. It is a CAD preview, not a photo.
- The earlier chat "Isaac Sim Collision Fix" also contained a genuine screenshot,
  but its distant robot and collision warning made it less useful than the CAD view.
- Navigation source: https://github.com/Hund-Robotics/software at
  99d7d2584b17ca45be31576ae8c30c4a2074b6de (clean local checkout).
- Executed NavigationPlanner(sample_map()) with start (0,0), goal (11,15),
  cell_size=0.1, zero radius/margin. Added initial.path[len(initial.path)//2],
  cell (2,10), then replanned. Both paths are actual simplified planner output.
  The original route is displayed for comparison and may cross the new obstacle.
- The team designed the hardware; the portfolio highlights Emily's navigation
  software. No claim of physical robot locomotion or completed integration.

## Weather Forecasting

- Repository: https://github.com/emily-kathryn/weather-prediction-project.
- Committed notebook: notebooks/weatheranalysis.ipynb at
  cf755ff3cd0e4b1e2b5f5075f897624982013c8f. Read from Git HEAD, preserving
  the user's uncommitted notebook edits.
- Cell 17 saved RMSE values: Linear Regression 2.5927901928343253;
  Random Forest 2.5173087961522578; XGBoost 2.4772147393482786 (degrees C).
  Rounded to three decimals in the graphic. No model retraining or invented scores.
- Main chart is an observed-data example, not a prediction curve. Source is the
  project's local data/GlobalWeatherRepository.csv, filtered to London and dates
  2025-01-01 through 2025-11-30. Same-day records are averaged; the dark curve
  is a trailing mean of up to seven available daily observations.
- Scores use the notebook's existing split. Since rows are sorted by location
  before the split, global date ranges overlap. These are notebook evaluation
  outputs, not an external validation benchmark or a claim of a globally
  chronological holdout. The graphic explicitly labels that limitation.

## Existing visual coverage checked

- Relativity Dashboard already uses actual application footage and its poster;
  inspected emily-kathryn/relativity-dashboard, left playback and assets unchanged.
- Marine Migration Visualizer already has the authentic static GPS visual.
- All four cards in the Projects section now have project-specific visuals.
- Checked marine-debris-robustness on GitHub as well; it contains training/data
  scripts but no committed example images or saved evaluation plots. That card
  belongs to Research and was not given an invented output image.

## History of Medicine
Original illustrated covers, not historical facsimiles. Titles verified against the user’s Google Drive Documents of Interest research folder: On the Sacred Disease by Hippocrates, Timaeus by Plato, and Shennong Bencaojing. No pages or modern translations reproduced.
