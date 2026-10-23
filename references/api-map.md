# API Map

Use this file to explain the core API surface and choose the right entry point.

## Globals

```ts
declare function nveGetEffectContextInstance(): NveEffectContext;
declare function nveSetModule(module: any): void;
declare function nveInitClasses(): void;
declare function nveSetFS(fs: any): void;
declare var Module: any;
declare var FS: any;
```

`nveGetEffectContextInstance()` returns the singleton `NveEffectContext`. The SDK is ready after `Module.Meishe.effectContext` exists.

## Common Value Classes

- `NveRational(num, den)`: aspect ratio. Use `new NveRational(16, 9)` for landscape and `new NveRational(9, 16)` for portrait.
- `NveColor(r, g, b, a)`: color values are normalized in `[0, 1]`, not `[0, 255]`.
- `NvePointF(x, y)` and `NveRectF(left, top, right, bottom)`: positions and bounds.
- `NveVolume`, `NveMotionParameters`, `NveCaptionSpan`, `NveVectorVal`: utility containers used by effect/caption APIs.

## NveEffectContext

`NveEffectContext` is the low-level SDK entry point. Prefer it when the user asks to manually create effects, render `ImageData` or `VideoFrame`, install packages, initialize models, or explain the raw API.

Important methods:

```ts
verifySdkLicenseFile(licenseFilePath: string): boolean;
verifySdkLicenseFileUrl(licenseFileUrl: string): boolean; // async in glue implementation
setMaxQueuedRenderTask(maxQueuedRenderTask: number): void;
getMaxQueuedRenderTask(): number;

createVideoEffect(
  fxName: string,
  aspectRatio: NveRational | string,
  workingInRealtimeMode?: boolean
): NveEffectInstance;

createVideoTransition(fxName: string, aspectRatio: NveRational | string): NveEffectInstance;
createAnimatedSticker(inPoint: number, duration: number, isPanoramic: boolean, packageId: string, aspectRatio: NveRational | string): NveEffectInstance;
createCompoundCaption(inPoint: number, duration: number, packageId: string, aspectRatio: NveRational | string): NveEffectInstance;
createCaption(text: string, inPoint: number, duration: number, isPanoramic: boolean, packageId: string, aspectRatio: NveRational | string): NveEffectInstance;
createModularCaption(text: string, inPoint: number, duration: number, aspectRatio: NveRational | string): NveEffectInstance;

renderEffects(effectInstanceArray: NveEffectInstance[], inputImageData: ImageData | VideoFrame, timestampMs: number, flags?: number, hostBufferInfoExtArray?: any[], renderRect?: object): Promise<any>;
renderEffect(effectInstance: NveEffectInstance, inputImageData: ImageData | VideoFrame, timestampMs: number, flags?: number, hostBufferInfoExtArray?: any[]): Promise<any>;

initHumanDetection(modelFilePath: string, licenseFilePath: string, features: number): boolean;
initHumanDetectionExt(modelFilePath: string, licenseFilePath: string, features: number): boolean;
setupHumanDetectionData(dataType: number, dataFilePath: string): boolean;
closeHumanDetection(): void;

getAssetPackageManager(): NveAssetPackageManager;
registerFontByFilePath(fontFilePath: string): string;
unregisterFontByFilePath(fontFilePath: string): void;
```

Rendering behavior:

- `renderEffects` accepts `ImageData` or `VideoFrame`.
- With `NveRenderFlagEnum.OutputImageBitmap`, the promise resolves as `{ imageBitmap, spentTime }`.
- Without that flag, it resolves as `{ imageData, spentTime }`.
- The glue file converts unsupported `VideoFrame` formats through `OffscreenCanvas` when possible.
- Dropped frames may reject with `err.meisheDropFrame`.

## NveARSceneRenderer

`NveARSceneRenderer` is the preferred high-level demo API. It wraps model download, human detection initialization, package install, quick effect lists, image rendering, media stream input/output, camera startup, and IndexedDB caching.

Important methods:

```ts
init(config: object): Promise<any>;
release(): void;
clearCacheOnIndexedDB(): Promise<any>;

setEffectList(effectList: any[]): Promise<any>;
appendEffectList(effectList: any[]): Promise<any>;
getEffectList(): any[];
enableBeauty(enable: boolean): void;

render(inputImageData: ImageData | VideoFrame, timestampMs: number, renderRect?: object): Promise<any>;
pushMediaStream(mediaStream: MediaStream): void;
startupCamera(constraints: MediaStreamConstraints): Promise<any>;
stopCamera(): void;
getOutputStream(): MediaStream;

createExternalEffectInstance(effect: object): Promise<any>;
setExternalEffectInstanceList(effectInstanceList: NveEffectInstance[]): void;
getExternalEffectInstanceList(): NveEffectInstance[];
appendExternalEffectInstance(effectInstance: NveEffectInstance): void;
```

`init(config)` supports:

- `faceModelUrl` required. Effects are ineffective without it.
- `eyecontourModelUrl` for eyeball makeup.
- `avatarModelUrl` for avatar effects.
- `segmentationModelUrl` for segmentation/background.
- `makeupDataUrl` for makeup.
- `fakefaceDataUrl`, `faceCommonDataUrl`, `advancedBeautyDataUrl` for specific face/beauty data.
- `ratio`, default `new NveRational(16, 9)`.
- `detectionMode`, default `VideoMode | MultiThread`.
- `beautyIntensity`, `beautyLutUrl`, `beautyLutIntensity`.
- `outputStreamFps`, default 30.
- `cacheOnIndexedDB`, default true. Cache DB name is `nveffectcache`, object stores are `asset` and `lic`.
- `workingInRealtimeMode`, default true. Use false for single-image avatar or non-realtime image processing.
- `jszip` for compound makeup zip files.
- `printTimeCostAndFps` for diagnostics.
- `mirror`, usually true for camera selfie preview.

Lifecycle:

- Call `release()` when done. It stops camera, output stream, timers, clears effect instances, and removes temporary `FS` files tracked by the renderer.
- External caption/sticker/compound caption instances can be held by caller code. If removed manually, call the instance `release()` yourself and remove it from the renderer list.

## NveEffectInstance

This is the base object for video effects, captions, stickers, compound captions, transitions, and package effects.

Common parameter methods:

```ts
release(): void;
setIntVal(fxParam: string, val: number): void;
getIntVal(fxParam: string): number;
setFloatVal(fxParam: string, val: number): void;
getFloatVal(fxParam: string): number;
setBooleanVal(fxParam: string, val: boolean): void;
getBooleanVal(fxParam: string): boolean;
setMenuVal(fxParam: string, val: string): void;
getMenuVal(fxParam: string): string;
setStringVal(fxParam: string, val: string): void;
getStringVal(fxParam: string): string;
setColorVal(fxParam: string, val: NveColor): void;
getColorVal(fxParam: string): NveColor;
setFilterIntensity(intensity: number): void;
getFilterIntensity(): number;
getARSceneManipulate(): NveARSceneManipulate;
```

Use exact effect parameter names from Meishe effect documentation or package docs.

## NveAssetPackageManager

Use this for manual package installation. `NveARSceneRenderer.setEffectList` normally handles package URLs for common scenarios.

```ts
onFinishAssetPackageInstallation: (
  assetPackageId,
  assetPackageFilePath,
  assetPackageType,
  error
) => void;

installAssetPackage(assetPackageFilePath: string, licenseFilePath: string, type: number): any;
uninstallAssetPackage(assetPackageId: string, type: number): number;
getAssetPackageStatus(assetPackageId: string, type: number): number;
getAssetPackageContentType(assetPackageId: string, type: number): string;
```

Package file names and package license file names must not be renamed.

## Core Enums

`NveRenderFlagEnum`:

- `OutputImageBitmap`: return `imageBitmap` instead of `imageData`.
- `DontDropFrame`: do not drop new render tasks when the queue is full.

`NveAssetPackageTypeEnum` includes:

- `VideoFx`, `CaptionStyle`, `AnimatedSticker`, `VideoTransition`, `Makeup`, `FaceMesh`, `ARScene`, `CompoundCaption`, `CaptionContext`, `CaptionRenderer`, caption animation variants, and animated sticker animation variants.

`NveAssetPackageStatusEnum` includes:

- `NotInstalled`, installed/in-progress states, and related status values.

`NveAssetPackageErrorEnum` includes:

- `NoError`, `NameError`, `AlreadyInstalledError`, `WorkingInProgress`, `NotInstalledError`, `ImproperStatusError`, `DecompressionError`, `InvalidPackageError`, `AssetTypeError`, `PermissionError`, `MetaContentError`, `SdkVersionError`, `UpgradeVersionError`, `IOError`, `ResourceError`.

`NveHumanDetectionFeatureEnum` includes:

- `FaceLandmark`, `FaceAction`, `EyeballLandmark`, `SegmentationBackground`, `AvatarExpression`, `ImageMode`, `SemiImageMode`, `VideoMode`, `MultiThread`.

`NveHumanDetectionDataTypeEnum` includes:

- `Makeup2`, `FakeFace`, `FaceCommon`, `AdvancedBeauty`.
