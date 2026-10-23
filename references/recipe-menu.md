# Recipe Menu

Use this menu before implementing a feature. It is distilled from `references/source/docs/effectSDK_base_en/` and backed by the matching Chinese docs in `effectSDK_base_zh/`.

## Setup and Lifecycle

| User asks for | Start with | Main APIs |
| --- | --- | --- |
| Install/import SDK | `ImportSDK.md`, `ProjectSettings.md`, `quick-start.md` | `WASMLoader`, `loadEmscriptenModule` |
| License behavior, 鉴权, 水印 | `VerifyLicense.md`, `glossary.md`, `troubleshooting.md` | `nveGetEffectContextInstance().verifySdkLicenseFileUrl` |
| Human detection models | `InitHumanDetectionModels.md`, `SetHumanDetectionData.md` | `NveARSceneRenderer.init`, detection model/data URL options |
| Renderer lifecycle | `Others.md` | `NveARSceneRenderer.init`, `release`, `clearCacheOnIndexedDB` |
| Asset package install | `InstallAssetPackage.md`, `EffectSDKSamples.md` | `NveAssetPackageManager`, `installAssetPackage`, `getAssetPackageStatus` |
| Browser/WASM setup, SharedArrayBuffer | `ProjectSettings.md`, `quick-start.md`, `troubleshooting.md` | COOP/COEP headers, `Module.Meishe.effectContext` |

## Inputs and Outputs

| User asks for | Start with | Main APIs |
| --- | --- | --- |
| Camera preview or camera beauty | `CameraMediaStream.md`, `react-vite-template.md` | `startupCamera`, `getOutputStream`, `enableBeauty` |
| Existing media stream input | `InputMediaStream.md`, `rtc-zego.md` | `pushMediaStream`, `getOutputStream` |
| Image input/render image | `InputImageData.md`, `CreateEffectAndRender.md` | `renderImageData`, `NveEffectContext.renderEffects` when low-level is needed |
| Output stream for RTC or recording | `InputMediaStream.md`, `CameraMediaStream.md` | `getOutputStream` |

## Effects

| User asks for | Start with | Main APIs |
| --- | --- | --- |
| Beauty, whitening, skin smoothing, 磨皮, 美白, 红润 | `BeautyShapeMakeup.md`, `Others.md` | `enableBeauty`, `setEffectList` |
| Face shape / face mesh, 瘦脸, 大眼, 小脸 | `BeautyShapeMakeup.md`, `EffectSDKSamples.md` | `setEffectList`, facemesh package URL/license |
| Makeup, 美妆, 美妆包 | `BeautyShapeMakeup.md`, `CompoundMakeup.md`, `troubleshooting.md` | `setEffectList`, `makeupDataUrl`, `.makeup` package |
| Filters, video FX, 滤镜, 视频特效 | `VideoFx.md`, `EffectIntroduction.md` | `setEffectList`, `.videofx` package |
| Segmentation/background, 分割, 背景替换 | `SegmentationBackground.md` | `setEffectList`, `segmentationModelUrl` |
| Avatar, 虚拟形象 | `AvatarARScene.md` | `setEffectList`, `avatarModelUrl`, `.arscene` package |
| AR props / face props, AR 道具 | `AvatarARScene.md`, `EffectIntroduction.md` | `setEffectList`, `.arscene` package |

## External Effects

| User asks for | Start with | Main APIs |
| --- | --- | --- |
| Caption, 字幕, 花字 | `Caption.md`, `external-effects.md` | `createExternalEffectInstance`, `appendExternalEffectInstance` |
| Modular caption, 模块字幕 | `Caption.md`, `api-map.md`, `external-effects.md` | `createModularCaption`, external effect options |
| Compound caption, 复合字幕 | `CompoundCaption.md`, `external-effects.md` | compound caption external effect options |
| Animated sticker, 动态贴纸 | `AnimatedSticker.md`, `external-effects.md` | sticker external effect options |

## RTC

| User asks for | Start with | Main APIs |
| --- | --- | --- |
| Agora RTC, 声网 | `rtc-agora.md`, `RTCReadme_en.md` | `EffectSDKExtension`, `createProcessor`, `videoTrack.pipe` |
| Zego RTC, 即构 | `rtc-zego.md`, `ZegoRTCReadme_en.md` | `pushMediaStream`, `getOutputStream`, `createZegoStream` |

## Troubleshooting Menu

| Symptom | Read first | Likely cause |
| --- | --- | --- |
| Effects show no result | `troubleshooting.md`, `Others.md` | missing face/model/data URL, wrong detection mode, wrong ratio, license failure |
| Makeup package not working, 美妆包不生效 | `BeautyShapeMakeup.md`, `EffectSDKSamples.md`, `troubleshooting.md` | missing `makeupDataUrl`, package not installed/licensed, wrong suffix, stale cache |
| Segmentation not working | `SegmentationBackground.md`, `Others.md` | missing `segmentationModelUrl`, unsupported effect list, wrong input ratio |
| Caption/sticker not visible | `Caption.md`, `AnimatedSticker.md` | missing renderer package, not appended, time range not active, not released/replaced correctly |
| RTC stream has no beauty | `rtc-agora.md` or `rtc-zego.md` | wrong RTC flow: Agora processor versus Zego media stream pipeline |
| WASM fails or SharedArrayBuffer missing | `quick-start.md`, `ProjectSettings.md` | missing COOP/COEP headers or non-isolated preview host |

## How to Use the Menu

1. If the user's wording is Chinese, fuzzy, or symptom-based, read `intent-map.md` first.
2. Pick the closest row from the user's wording.
3. Read the summarized reference page first.
4. Open the source doc listed in `Start with` only if implementation details are missing.
5. Search `effectSdk.d.ts` when method signatures or option names are uncertain.
