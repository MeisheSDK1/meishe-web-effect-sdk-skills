# Intent Map

Use this file before choosing references when the user describes EffectSDK work in natural language, especially Chinese product terms or troubleshooting symptoms.

## Routing Rules

- Ordinary EffectSDK requests use this user-level skill and its bundled references.
- Do not call MCP tools unless the user explicitly says `MCP`, `MCP server`, `MCP docs`, `MCP bridge`, `use MCP`, or `query the MCP`.
- For implementation requests, map the user wording to one or more rows below, then read the listed references.
- For generated demos, combine the intent references with `implementation-workflow.md` and `react-vite-template.md`.

## Chinese Intent Map

| User wording | Feature | Read first | Key APIs or concepts |
| --- | --- | --- | --- |
| 摄像头, 摄像头美颜, 相机预览, webcam | camera | `react-vite-template.md`, `demo-recipes.md` | `NveARSceneRenderer`, `startupCamera`, `getOutputStream` |
| 瘦脸, 大眼, 小脸, 窄脸, 下巴, 鼻梁 | beauty/shape | `effects.md`, `api-map.md` | `enableBeauty`, `setEffectList`, Face Mesh keys |
| 磨皮, 美白, 红润, 肤色 | beauty | `effects.md` | `Advanced Beauty Intensity`, `Beauty Whitening`, `Beauty Reddening` |
| 美妆, 美妆包, 妆容, 眼妆, 口红 | makeup/package | `effects.md`, `troubleshooting.md` | `makeupDataUrl`, `.makeup`, package license |
| 美妆包不生效, 素材包没效果 | package troubleshooting | `troubleshooting.md`, `effects.md` | package suffix, `licUrl`, `setEffectList`, IndexedDB cache |
| 字幕, 普通字幕, 花字 | caption | `external-effects.md`, source `Caption.md` | `createExternalEffectInstance`, caption package |
| 模块字幕, modular caption | modular caption | `external-effects.md`, `api-map.md` | `createModularCaption`, external effects |
| 复合字幕, compound caption | compound caption | `external-effects.md`, source `CompoundCaption.md` | `.compoundcaption`, external effect lifecycle |
| 贴纸, 动态贴纸, animated sticker | sticker | `external-effects.md`, source `AnimatedSticker.md` | `.animatedsticker`, `appendExternalEffectInstance` |
| 分割, 背景替换, 背景虚化, 人像分割 | segmentation | `effects.md`, `troubleshooting.md` | `segmentationModelUrl`, segmentation effect entries |
| 滤镜, 视频特效, video FX | video effect package | `effects.md`, source `VideoFx.md` | `.videofx`, `setEffectList` |
| avatar, 虚拟形象, AR 场景, 道具 | avatar/AR scene | `effects.md`, source `AvatarARScene.md` | `avatarModelUrl`, `.arscene`, continuous frames |
| 声网, Agora, RTC 推流 | Agora RTC | `rtc-agora.md`, `demo-recipes.md` | `EffectSDKExtension`, `createProcessor`, `videoTrack.pipe` |
| 即构, Zego, ZEGO 推流 | Zego RTC | `rtc-zego.md`, `demo-recipes.md` | `pushMediaStream`, `getOutputStream`, `createZegoStream` |
| 鉴权, license, 授权, 水印 | license | `quick-start.md`, `troubleshooting.md` | localhost skip license, `<LICENSE_URL>`, watermark |
| 模型, model URL, 数据包, dat | model/data setup | `quick-start.md`, `effects.md` | `faceModelUrl`, `faceCommonDataUrl`, `advancedBeautyDataUrl` |
| SharedArrayBuffer, COOP, COEP, WASM 加载失败 | browser setup | `quick-start.md`, `troubleshooting.md` | cross-origin isolation headers |

## English Intent Map

| User wording | Feature | Read first | Key APIs or concepts |
| --- | --- | --- | --- |
| camera beauty, webcam beauty | camera + beauty | `react-vite-template.md`, `effects.md` | `startupCamera`, `enableBeauty`, `setEffectList` |
| slim face, big eyes, face shape | beauty/shape | `effects.md` | Face Mesh effect keys |
| makeup package not working | troubleshooting | `troubleshooting.md`, `effects.md` | `makeupDataUrl`, package license, cache |
| caption, compound caption, modular caption | external effects | `external-effects.md` | `createExternalEffectInstance`, `release()` |
| sticker, animated sticker | external effects | `external-effects.md` | `.animatedsticker`, external effect list |
| segmentation background | segmentation | `effects.md`, `troubleshooting.md` | `segmentationModelUrl`, ratio |
| Agora publish with beauty | Agora RTC | `rtc-agora.md` | processor pipeline |
| Zego publish with beauty | Zego RTC | `rtc-zego.md` | processed `MediaStream` pipeline |
| SDK license, watermark | license | `quick-start.md`, `troubleshooting.md` | localhost behavior, real license URL |

## Common Combinations

- Camera beauty with slim face and big eyes: `react-vite-template.md` + `effects.md` + `api-map.md`.
- Camera beauty plus output stream: `demo-recipes.md` + `effects.md`.
- Zego beauty before publish: `rtc-zego.md` + `effects.md`.
- Agora beauty before publish: `rtc-agora.md` + `effects.md`.
- Captions plus stickers: `external-effects.md` + source `Caption.md` + source `AnimatedSticker.md`.
- Makeup package failure: `troubleshooting.md` + `effects.md` + source `BeautyShapeMakeup.md`.
- Browser initialization failure: `quick-start.md` + `troubleshooting.md` + `api-map.md`.
