# Zego RTC Integration

Use this page for Zego requests. Source basis: `references/source/docs/ZegoRTCReadme_en.md`.

## Flow

Zego integration uses a normal `NveARSceneRenderer` media-stream pipeline:

1. Initialize the Meishe WASM SDK.
2. Create and initialize `NveARSceneRenderer`.
3. Get a Zego local media stream or another browser `MediaStream`.
4. Call `arSceneRenderer.pushMediaStream(stream)`.
5. Get the processed stream with `arSceneRenderer.getOutputStream()`.
6. Pass the processed stream to `zg.createZegoStream`.
7. Publish the Zego stream with `zg.startPublishingStream`.

## Core Pattern

```ts
const rawStream = await navigator.mediaDevices.getUserMedia({
  audio: true,
  video: { width: 1280, height: 720, frameRate: { ideal: 30 } }
});

arSceneRenderer.pushMediaStream(rawStream);
arSceneRenderer.enableBeauty(true);
arSceneRenderer.setEffectList([
  { key: "Advanced Beauty Intensity", intensity: 1 },
  { key: "Beauty Whitening", intensity: 0.8 },
  { url: "<MAKEUP_PACKAGE_URL>", licUrl: "<PACKAGE_LICENSE_URL>", intensity: 1 }
]);

const sdkStream = arSceneRenderer.getOutputStream();
const zegoStream = await zg.createZegoStream({
  custom: { source: sdkStream }
});

zg.startPublishingStream("<STREAM_ID>", zegoStream, { videoCodec: "H264" });
```

## Cleanup

- Stop raw camera/microphone tracks.
- Stop publishing and destroy the Zego stream according to the Zego SDK API.
- Call `arSceneRenderer.release()`.

## Notes

- Zego uses the generic media stream flow; Agora uses the processor extension flow.
- Keep room IDs, stream IDs, app IDs, server URLs, and tokens as placeholders.
- Localhost can skip SDK license verification and show watermark. Non-localhost needs a real Meishe SDK license URL.
