# Agora RTC Integration

Use this page for Agora requests. Source basis: `references/source/docs/RTCReadme_en.md`.

## Package Pattern

Agora integration uses the EffectSDK Agora extension package:

```ts
import AgoraRTC from "agora-rtc-sdk-ng";
import { EffectSDKExtension } from "agora-meishe-effect-sdk";
```

Register once:

```ts
const effectSDKExtension = new EffectSDKExtension();
AgoraRTC.registerExtensions([effectSDKExtension]);
```

Create and initialize the processor:

```ts
const effectSDKProcessor = effectSDKExtension.createProcessor();
const arSceneRenderer = await effectSDKProcessor.init({
  faceModelUrl: "<FACE_MODEL_URL>",
  makeupDataUrl: "<MAKEUP_DATA_URL>",
  faceCommonDataUrl: "<FACE_COMMON_DATA_URL>",
  advancedBeautyDataUrl: "<ADVANCED_BEAUTY_DATA_URL>",
  detectionMode: 32768 | 32,
  ratio: new NveRational(16, 9)
});
```

Pipe the Agora camera track:

```ts
const videoTrack = await AgoraRTC.createCameraVideoTrack();
videoTrack.pipe(effectSDKProcessor).pipe(videoTrack.processorDestination);
```

Then publish `videoTrack` through Agora as usual.

## Effects

Use the returned `NveARSceneRenderer`:

```ts
arSceneRenderer.enableBeauty(true);
arSceneRenderer.setEffectList([
  { key: "Advanced Beauty Intensity", intensity: 1 },
  { key: "Beauty Whitening", intensity: 0.8 },
  { url: "<MAKEUP_PACKAGE_URL>", licUrl: "<PACKAGE_LICENSE_URL>", intensity: 1 }
]);
```

## Cleanup

- Unpipe the Agora track if the app disables the processor.
- Stop and close the local video track when leaving the page or room.
- Destroy or release the processor if the integration package exposes a destroy method.
- Call `arSceneRenderer.release()` when the renderer is no longer used.

## Notes

- This is different from the generic `NveARSceneRenderer.pushMediaStream` flow.
- Keep SDK license behavior the same as base demos: localhost can skip SDK license verification and show watermark; non-localhost needs a real Meishe SDK license URL.
- RTC credentials, tokens, channel names, and app IDs must remain placeholders unless provided by the user.
