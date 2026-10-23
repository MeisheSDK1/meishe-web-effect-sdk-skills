# Default Materials

Use this file before generating demos that enable models, package effects, captions, stickers, segmentation, or AR scene features.

If source docs provide a public default URL for a feature used by a demo, set that URL as the demo default. Do not leave it empty unless the docs do not provide a default. Keep license URLs empty or placeholders unless the user provides real license files.

## SDK Runtime

| item | default URL | notes |
| --- | --- | --- |
| SDK base | `https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/` | `NvEffectSdk.js` and `loadEmscriptenModule()` must use this same base. |
| SDK script | `https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/NvEffectSdk.js` | Put this in `index.html` head for React/Vite demos. |

## Models And Data

| item | default URL | used for |
| --- | --- | --- |
| faceModelUrl | `https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model` | Face detection and face effects. |
| eyecontourModelUrl | `https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model` | Eye contour / eye makeup accuracy. |
| makeupDataUrl | `https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat` | Makeup effects. |
| faceCommonDataUrl | `https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat` | Common face data. |
| advancedBeautyDataUrl | `https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat` | Advanced beauty and some AR/avatar effects. |
| segmentationModelUrl | `https://alieasset.meishesdk.com/model/humanseg/ms_humansegment_medium_v2_0_0_next.model` | Segmentation and background replacement. |
| avatarModelUrl | `https://alieasset.meishesdk.com/model/avatar/ms_avatar_v2_0_0_next.model` | Avatar / AR scene demos. |
| fakefaceDataUrl | `https://alieasset.meishesdk.com/model/fakeface_v1.0.1.dat` | Fake-face related data if needed by a demo. |

## Package And Media Materials

| item | default URL | package type / use |
| --- | --- | --- |
| makeupPackageUrl | `https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup` | `.makeup`, makeup package. |
| faceMeshPackageUrl | `https://qasset.meishesdk.com/material/pu/makeup/63BD3F32-D01B-4755-92D5-0DE361E4045A/63BD3F32-D01B-4755-92D5-0DE361E4045A.3.facemesh` | `.facemesh`, face mesh package. |
| videoFxPackageUrl | `https://qasset.meishesdk.com/material/pu/videofx/DF972925-85A1-4687-939C-5C50585A825A/DF972925-85A1-4687-939C-5C50585A825A.1.videofx` | `.videofx`, default video FX. |
| segmentationBackgroundUrl | `https://alieasset.meishesdk.com/material/bgimage/323d8f09-fbdb-4f28-a3ca-19615d3e6d5f.jpg` | Background image replacement. |
| segmentationFxPackageUrl | `https://qasset.meishesdk.com/material/pu/videofx/F31CBEBD-9F86-4AC6-87AB-1A289A62E3AE/F31CBEBD-9F86-4AC6-87AB-1A289A62E3AE.1.videofx` | `.videofx`, segmentation / blur background package. |
| arScenePackageUrl | `https://qasset.meishesdk.com/material/pu/arscene/CF2A5851-DFD9-432F-B1F5-5E69BC3CED8C/CF2A5851-DFD9-432F-B1F5-5E69BC3CED8C.1.arscene` | `.arscene`, AR scene package. |
| captionStyleUrl | `https://qasset.meishesdk.com/material/pu/caption/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3.1.captionstyle` | `.captionstyle`, styled caption. |
| captionRendererUrl | `https://qasset.meishesdk.com/material/pu/caption/262BC53C-CB55-45D4-96BD-2BD79D3C5F11/262BC53C-CB55-45D4-96BD-2BD79D3C5F11.1.captionrenderer` | `.captionrenderer`, modular caption renderer. |
| captionContextUrl | `https://qasset.meishesdk.com/material/pu/caption/BFC751C8-D9B2-440A-A3DF-8D02841745C1/BFC751C8-D9B2-440A-A3DF-8D02841745C1.1.captioncontext` | `.captioncontext`, modular caption context. |
| captionAnimationUrl | `https://qasset.meishesdk.com/material/pu/caption/C34F307B-5576-4525-B309-4166D2628093/C34F307B-5576-4525-B309-4166D2628093.1.captionanimation` | `.captionanimation`, modular caption loop animation. |
| fontFileUrl | `https://alieasset.meishesdk.com/release/material/font/164C237B-16CB-49D5-A205-1976B16046B8/164C237B-16CB-49D5-A205-1976B16046B8.ttf` | Caption font file. |
| animatedStickerUrl | `https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker` | `.animatedsticker`, sticker package. |
| animatedStickerAnimationUrl | `https://qasset.meishesdk.com/material/pu/animatedsticker/58A339F9-8B2F-479F-8A1D-35E4456CFA9B/58A339F9-8B2F-479F-8A1D-35E4456CFA9B.1.animatedstickeranimation` | Sticker loop animation. |
| compoundCaptionUrl | `https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption` | `.compoundcaption`, compound caption package. |

## License Defaults

- `sdkLicenseUrl`: empty on localhost; use `<LICENSE_URL>` for non-localhost examples.
- package `licUrl`: empty in public sample materials unless the user provides a package license.
- RTC app IDs, tokens, and stream IDs must remain placeholders.
