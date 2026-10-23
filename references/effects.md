# Effects

Use this file for beauty, shape, makeup, filters, package effects, segmentation, background, avatar, and effect list behavior.

Before generating controls or defaults, also read:

- [effect-parameter-catalog.md](effect-parameter-catalog.md) for built-in beauty/shape keys, slider ranges, defaults, and corrected key names.
- [default-materials.md](default-materials.md) for public default model, package, caption, sticker, background, and SDK URLs.

## Effect List Semantics

`NveARSceneRenderer` applies effects from an array of plain objects.

```js
await arSceneRenderer.setEffectList(effectList);
```

- `setEffectList` resets previous effects and applies the new list.
- `appendEffectList` adds to the current list and then applies effects.
- The list order determines render order.
- `getEffectList` returns the current effect list.
- `enableBeauty(false)` disables the default built-in beauty effect; `enableBeauty(true)` turns it back on.

## Built-In Video Effect

```js
await arSceneRenderer.setEffectList([
  {
    builtinEffectName: "Pinky",
    intensity: 1,
  },
]);
```

The renderer creates a `NveEffectInstance` with `createVideoEffect(builtinEffectName, ratio, workingInRealtimeMode)` and applies `setFilterIntensity(intensity)`.

## Package Video Effect

```js
await arSceneRenderer.setEffectList([
  {
    url: "https://qasset.meishesdk.com/material/pu/videofx/DF972925-85A1-4687-939C-5C50585A825A/DF972925-85A1-4687-939C-5C50585A825A.1.videofx",
    licUrl: "<PACKAGE_LICENSE_URL>",
    intensity: 1,
  },
]);
```

Rules:

- Use the original package file name. Do not rename package or package license files.
- Use the correct package type. The renderer infers type from extension for common packages.
- If a public default package URL exists in `default-materials.md` and the demo exposes that feature, set the demo config to that URL instead of an empty string.
- For non-localhost environments, package license URL may be required.
- Package install failures usually mean wrong URL, renamed package, wrong package type, wrong license, or SDK license missing feature permissions.

## Built-In Beauty And Shape Parameters

Use `effect-parameter-catalog.md` as the generation table for built-in beauty and shape controls. Each generated slider must use the row's `key`, `min`, `max`, `default`, and `type`.

Important corrected keys:

- `Face Mesh Mouth Corner Lift Degree`: mouth corner lift, range `-1..1`, default `0`.
- `Face Mesh Nose Bridge Width Degree`: nose bridge narrowing / widening, range `-1..1`, default `0`.

Do not copy legacy mouth-corner or nose-bridge key names from glue snapshots into new demos.

## Beauty, Shape, Makeup

Initialize with the needed model/data URLs:

```js
await arSceneRenderer.init({
  faceModelUrl: "<FACE_MODEL_URL>",
  eyecontourModelUrl: "<EYECONTOUR_MODEL_URL>",
  makeupDataUrl: "<MAKEUP_DATA_URL>",
  faceCommonDataUrl: "<FACE_COMMON_DATA_URL>",
  advancedBeautyDataUrl: "<ADVANCED_BEAUTY_DATA_URL>",
  beautyIntensity: 1,
  beautyLutUrl: "<BEAUTY_LUT_URL>",
  beautyLutIntensity: 1,
});
```

Apply makeup and face mesh packages:

```js
await arSceneRenderer.setEffectList([
  {
    url: "https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup",
    licUrl: "<PACKAGE_LICENSE_URL>",
    intensity: 1,
  },
  {
    url: "https://qasset.meishesdk.com/material/pu/makeup/63BD3F32-D01B-4755-92D5-0DE361E4045A/63BD3F32-D01B-4755-92D5-0DE361E4045A.3.facemesh",
    licUrl: "<PACKAGE_LICENSE_URL>",
    intensity: 1,
  },
]);
```

Required support:

- Face effects need `faceModelUrl`.
- Makeup needs `makeupDataUrl`.
- Advanced beauty may need `advancedBeautyDataUrl`.
- Eyeball makeup needs `eyecontourModelUrl`.

## Segmentation And Background

Initialize with segmentation model:

```js
await arSceneRenderer.init({
  faceModelUrl: "<FACE_MODEL_URL>",
  faceCommonDataUrl: "<FACE_COMMON_DATA_URL>",
  segmentationModelUrl: "<SEGMENTATION_MODEL_URL>",
});
```

Image background:

```js
await arSceneRenderer.setEffectList([
  {
    segmentationBackgroundUrl: "https://alieasset.meishesdk.com/material/bgimage/323d8f09-fbdb-4f28-a3ca-19615d3e6d5f.jpg",
  },
]);
```

Blur or package background effect:

```js
await arSceneRenderer.setEffectList([
  {
    url: "https://qasset.meishesdk.com/material/pu/videofx/F31CBEBD-9F86-4AC6-87AB-1A289A62E3AE/F31CBEBD-9F86-4AC6-87AB-1A289A62E3AE.1.videofx",
    licUrl: "<PACKAGE_LICENSE_URL>",
  },
]);
```

Segmentation effects are ineffective if `segmentationModelUrl` is missing or failed to load.

## Avatar / AR Scene

Initialize with avatar model:

```js
await arSceneRenderer.init({
  faceModelUrl: "<FACE_MODEL_URL>",
  avatarModelUrl: "<AVATAR_MODEL_URL>",
  advancedBeautyDataUrl: "<ADVANCED_BEAUTY_DATA_URL>",
});
```

Apply AR scene package:

```js
await arSceneRenderer.setEffectList([
  {
    url: "https://qasset.meishesdk.com/material/pu/arscene/CF2A5851-DFD9-432F-B1F5-5E69BC3CED8C/CF2A5851-DFD9-432F-B1F5-5E69BC3CED8C.1.arscene",
    licUrl: "<PACKAGE_LICENSE_URL>",
  },
]);
```

For single-image avatar:

- Set `workingInRealtimeMode: false`.
- Use `NveHumanDetectionFeatureEnum.SemiImageMode | NveHumanDetectionFeatureEnum.MultiThread`, or image mode when appropriate.
- Some avatar effects need continuous frames or facial actions/expressions.

## Manual Asset Package Install

Use the high-level renderer for normal demos. Use manual install only when asked.

```js
const response = await fetch("<PACKAGE_URL>");
const packageData = await response.arrayBuffer();
const packageFile = "/" + "<ORIGINAL_PACKAGE_FILENAME>";
FS.writeFile(packageFile, new Uint8Array(packageData));

const packageLicenseFile = ""; // or "/<ORIGINAL_LICENSE_FILENAME>"
const packageType = NveAssetPackageTypeEnum.Makeup;
const manager = nveGetEffectContextInstance().getAssetPackageManager();

manager.onFinishAssetPackageInstallation = (
  assetPackageId,
  assetPackageFilePath,
  assetPackageType,
  error
) => {
  if (error === NveAssetPackageErrorEnum.NoError) {
    // Success.
  } else {
    // Fail.
  }
};

manager.installAssetPackage(packageFile, packageLicenseFile, packageType);
```

## Common Package Extensions

- `.videofx` -> `NveAssetPackageTypeEnum.VideoFx`
- `.captionstyle` -> `NveAssetPackageTypeEnum.CaptionStyle`
- `.animatedsticker` -> `NveAssetPackageTypeEnum.AnimatedSticker`
- `.videotransition` -> `NveAssetPackageTypeEnum.VideoTransition`
- `.makeup` -> `NveAssetPackageTypeEnum.Makeup`
- `.facemesh` -> `NveAssetPackageTypeEnum.FaceMesh`
- `.arscene` -> `NveAssetPackageTypeEnum.ARScene`
- `.compoundcaption` -> `NveAssetPackageTypeEnum.CompoundCaption`
- `.captioncontext` -> `NveAssetPackageTypeEnum.CaptionContext`
- `.captionrenderer` -> `NveAssetPackageTypeEnum.CaptionRenderer`
