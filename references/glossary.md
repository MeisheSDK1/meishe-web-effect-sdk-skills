# Glossary and Mental Models

Use this page when the user asks what an EffectSDK concept means, why a step exists, or why a feature is ineffective.

## Core Runtime

- EffectSDK: Meishe's browser/WASM special-effects runtime for rendering filters, beauty, makeup, segmentation, AR props, captions, stickers, and RTC-ready processed streams.
- `NvEffectSdk.js`: the JavaScript glue file that exposes the WebAssembly runtime and `Nve*` API names.
- WASM base URL: the directory that contains `NvEffectSdk.js` and matching WASM/runtime files. The script URL and loader base URL must point to the same SDK build.
- `Module.Meishe.effectContext`: runtime readiness marker. Do not call EffectSDK APIs before it exists.
- `nveGetEffectContextInstance()`: global accessor for the low-level `NveEffectContext` singleton.

## Renderer Choices

- `NveARSceneRenderer`: high-level quick-access renderer. Prefer it for demos. It handles model downloads, package caching, camera/media-stream input, effect lists, output streams, and many real-time details.
- `NveEffectContext`: low-level effect context. Use it when the user asks about manual effect creation, image rendering internals, package management, or `renderEffects`.
- `NveEffectInstance`: low-level effect object. It can set string, float, int, and boolean parameters directly.

## Input and Output Flow

- Camera flow: `startupCamera(...)` opens the camera and feeds the renderer.
- Existing stream flow: `pushMediaStream(stream)` sends an existing `MediaStream` to the renderer.
- Output stream: `getOutputStream()` returns the processed `MediaStream`; use it for preview, recording, Zego publishing, or other media pipelines.
- Agora flow: use the Agora extension processor and `videoTrack.pipe(effectSDKProcessor)`. Do not replace it with `pushMediaStream` unless the integration design changes.
- Zego flow: use the generic `pushMediaStream` then publish `getOutputStream()` through Zego.

## License and Localhost

- Localhost preview: Meishe Web EffectSDK can run without SDK license verification on `localhost`, but the rendered result shows a watermark.
- Non-localhost deployment: must use a real Meishe SDK license file and call `verifySdkLicenseFileUrl`.
- Do not invent a default license URL. Use `<LICENSE_URL>` only when explaining deployment.
- Package licenses are separate from the SDK license. A material package can also need its own `licUrl`.

## Models and Data Files

- `faceModelUrl`: required for face effects. Missing it commonly makes beauty, makeup, and AR face props ineffective.
- `eyecontourModelUrl`: needed for eye contour and eye makeup accuracy.
- `avatarModelUrl`: needed for avatar features.
- `segmentationModelUrl`: needed for segmentation/background replacement.
- `makeupDataUrl`: needed for makeup effects.
- `faceCommonDataUrl`: common face data used by several face effects.
- `advancedBeautyDataUrl`: used by advanced beauty features.
- `detectionMode`: controls human detection features and performance mode. Single-image rendering may need an image-oriented mode; real-time camera usually uses real-time/multi-thread modes.
- `ratio`: effect aspect ratio, for example `new NveRational(16, 9)` or `new NveRational(9, 16)`. A wrong ratio can make overlays look misplaced.
- `mirror`: normally true for selfie camera behavior and false for non-mirrored input, depending on product expectation.

## Asset Packages

An asset package is a downloadable material package used by an effect. Common suffixes:

- `.captionstyle`: caption style.
- `.animatedsticker`: sticker.
- `.videofx`: filter/video effect.
- `.arscene`: AR prop/avatar/face prop.
- `.facemesh`: face shape package.
- `.makeup`: makeup package.
- `.videotransition`: transition package.

Install packages with `NveAssetPackageManager` in low-level flows, or provide `url` and `licUrl` to `NveARSceneRenderer` effect lists in quick-access flows.

## Effect Lists

- `setEffectList(list)`: replaces the whole current effect list. Use carefully in UI toggles because it clears unrelated effects.
- `appendEffectList(list)`: appends new effects after existing effects.
- Rendering order follows effect list order.
- Built-in effects use `key` plus `intensity`.
- Package effects use `url`, optional `licUrl`, and optional `intensity`.

## External Effects

- Captions, compound captions, and stickers can be represented as external effect instances.
- Create them with `createExternalEffectInstance(...)`.
- Add them with `appendExternalEffectInstance(...)` or replace with `setExternalEffectInstanceList(...)`.
- Release instances when removing or replacing them if the API returns a releasable instance.

## Cache

- `NveARSceneRenderer` can cache downloaded assets and data in IndexedDB.
- The cache improves startup speed after the first run.
- `clearCacheOnIndexedDB()` can clear renderer cache if stale packages or bad test data cause confusion.
