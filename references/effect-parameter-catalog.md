# Effect Parameter Catalog

Use this file before generating beauty or face-shape demos. It is the generation source of truth for built-in beauty and face mesh controls.

Do not generate legacy mouth-corner or nose-bridge key names from copied glue/source snapshots. The corrected demo-facing keys are `Face Mesh Mouth Corner Lift Degree` and `Face Mesh Nose Bridge Width Degree`.

`source` values:

- `docs+demo`: supported by source docs plus validated demos.
- `demo-derived`: copied from working demos; treat as demo control defaults, not an official full SDK range.
- `user-confirmed`: explicitly corrected by the SDK owner.

| id | label | key | min | max | default | type | purpose | source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| smooth | Smooth skin | `Advanced Beauty Intensity` | 0 | 1 | 0.65 | float | Skin smoothing / advanced beauty strength | docs+demo |
| whitening | Whitening | `Beauty Whitening` | 0 | 1 | 0.45 | float | Skin whitening | demo-derived |
| reddening | Reddening | `Beauty Reddening` | 0 | 1 | 0.25 | float | Rosy skin tone | demo-derived |
| slimFace | Slim face | `Face Mesh Face Size Degree` | 0 | 1 | 0.35 | float | Slim face | demo-derived |
| narrowFace | Narrow face | `Face Mesh Face Width Degree` | 0 | 1 | 0.25 | float | Narrow face width | docs+demo |
| smallFace | Small face | `Face Mesh Face Length Degree` | 0 | 1 | 0.2 | float | Small face / face length adjustment | docs+demo |
| forehead | Forehead | `Face Mesh Forehead Height Degree` | 0 | 1 | 0 | float | Forehead height | docs+demo |
| malar | Malar width | `Face Mesh Malar Width Degree` | 0 | 1 | 0 | float | Cheekbone width | demo-derived |
| jaw | Jaw width | `Face Mesh Jaw Width Degree` | 0 | 1 | 0 | float | Jaw width | demo-derived |
| chin | Chin length | `Face Mesh Chin Length Degree` | 0 | 1 | 0 | float | Chin length | demo-derived |
| temple | Temple width | `Face Mesh Temple Width Degree` | 0 | 1 | 0 | float | Temple width | demo-derived |
| headSize | Head size | `Face Mesh Head Size Degree` | 0 | 1 | 0 | float | Head size | demo-derived |
| bigEyes | Big eyes | `Face Mesh Eye Size Degree` | 0 | 1 | 0.4 | float | Big eyes | docs+demo |
| eyeCorner | Eye corner | `Face Mesh Eye Corner Stretch Degree` | 0 | 1 | 0 | float | Eye corner stretch | demo-derived |
| eyeDistance | Eye distance | `Face Mesh Eye Distance Degree` | 0 | 1 | 0 | float | Eye distance | demo-derived |
| eyeAngle | Eye angle | `Face Mesh Eye Angle Degree` | 0 | 1 | 0 | float | Eye angle | demo-derived |
| eyeArc | Eye arc | `Face Mesh Eye Arc Degree` | 0 | 1 | 0 | float | Eye arc | demo-derived |
| eyeWidth | Eye width | `Face Mesh Eye Width Degree` | 0 | 1 | 0 | float | Eye width | demo-derived |
| eyeHeight | Eye height | `Face Mesh Eye Height Degree` | 0 | 1 | 0 | float | Eye height | demo-derived |
| eyeYOffset | Eye Y offset | `Face Mesh Eye Y Offset Degree` | 0 | 1 | 0 | float | Eye vertical offset | demo-derived |
| eyebrowAngle | Eyebrow angle | `Face Mesh Eyebrow Angle Degree` | 0 | 1 | 0 | float | Eyebrow angle | demo-derived |
| eyebrowThickness | Eyebrow thickness | `Face Mesh Eyebrow Thickness Degree` | 0 | 1 | 0 | float | Eyebrow thickness | demo-derived |
| eyebrowXOffset | Eyebrow X offset | `Face Mesh Eyebrow X Offset Degree` | 0 | 1 | 0 | float | Eyebrow horizontal offset | demo-derived |
| eyebrowYOffset | Eyebrow Y offset | `Face Mesh Eyebrow Y Offset Degree` | 0 | 1 | 0 | float | Eyebrow vertical offset | demo-derived |
| noseLength | Nose length | `Face Mesh Nose Length Degree` | 0 | 1 | 0 | float | Nose length | demo-derived |
| noseWidth | Nose width | `Face Mesh Nose Width Degree` | 0 | 1 | 0 | float | Nose width | demo-derived |
| noseBridge | Nose bridge width | `Face Mesh Nose Bridge Width Degree` | -1 | 1 | 0 | float | Nose bridge narrowing / widening | user-confirmed |
| noseHeadWidth | Nose head width | `Face Mesh Nose Head Width Degree` | 0 | 1 | 0 | float | Nose head width | demo-derived |
| mouthSize | Mouth size | `Face Mesh Mouth Size Degree` | 0 | 1 | 0 | float | Mouth size | demo-derived |
| mouthCorner | Mouth corner lift | `Face Mesh Mouth Corner Lift Degree` | -1 | 1 | 0 | float | Mouth corner lift | user-confirmed |
| philtrum | Philtrum length | `Face Mesh Philtrum Length Degree` | 0 | 1 | 0 | float | Philtrum length | demo-derived |

## Demo Generation Rules

- Use each row's own `min`, `max`, `default`, and `type`; do not assume every slider is `0..1`.
- Use `source=user-confirmed` rows exactly as written.
- If a future official `FxNameList` or fuller parameter table is provided, update this file first, then update demos/templates from this file.
