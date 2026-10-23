# Meishe AR Face Filter——ZEGO

------

This article explains how to integrate and use the `Meishe AR Face Filter` plugin in your Web projects.



## Precondition

Before you begin, ensure that the following requirements are met:

- For Windows or macOS computers, the following requirements must be met:
  - PC browser version: ipad and pad devices are not supported.
  - Chrome,Opera,360 browser: the kernel is Chrome, version 75 includes more than support;
  - Firefox browser: The kernel version is greater than 58, including the above support (special cases: version 72 is not supported);
  - Safari browser: minimum 15.4, 17.0 and above the best performance, recommended to the latest version
  - Physical audio and video acquisition equipment.
  - Internet connection possible.
- Installed [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)。

[^resource link]: The CDN address of the sdk and the addresses of all materials in the document are the test public addresses provided by the United States Photography. If the customer's product is ready to be released online, it is necessary to contact the business to obtain the relevant files of the sdk, privatize and deploy to the customer's environment, and replace this address for re-use. When deploying wasm related files privately, configure brotli or gzip to compress wasm files to help improve loading speed.



## Integration And Invocation

### 1. Integrate SDK and plugin

You have created a project in [ZEGO Console](https://console.zego.im/) and applied for a valid AppID, please refer to "Project Information" in [Console - Project Management](https://console.zego.im/dashboard) for details. Before you begin, you need to integrate the audio and video SDK and the Meishe web SDK in your project.

`tip:` The authentication files, template package files, model package files, and packet files in all the following examples can be obtained by contacting meishe Business.

#### 1.1  Integrate ZEGO audio and video SDK

Meishe AR Face Filter needs to be used with ZEGO Web SDK 3.x (v3.0.0 or above). Refer to the following documentation to integrate the Web SDK and implement a basic video call:

[Implementing Video Calling]([Web JavaScript - ZEGO](https://doc-zh.zego.im/article/7638))

#### 1.2 Integration with Agora Video SDK

Follow these steps to integrate the plugin:

Use npm to integrate the 'Beautiful Beauty' plugin into your project.

1. Install the ZEGOSDK and Meishe AR Face Filter by running the following command:

   ```shell
   npm i zego-express-engine-webrtc meishewasmloader jszip
   ```

### 2. Configure the Meishe AR Face Filter environment

Meishe AR Face Filter needs to configure the response header, To make [SharedArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) Available.

#### 2.1 vite environment

Add the following configuration to the plugins configuration in vite.config.ts:

```typescript
...
server:{
    headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
    },
}
...
```

#### 2.2 webpack environment

Add the following configuration to plugins in webpack.config.ts:

```typescript
devServer：{
	headers: {
      'Cross-Origin-Opener-Policy':'same-origin',
      'Cross-Origin-Embedder-Policy':'require-corp',
    },
    ...
}
```

The purpose of the above configuration is to add the above setting to the request header to instruct the browser to enable [SharedArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)。 

The above syntax is affected by the version of `webpack` and `vite`, and the API can be configured for each version.

### 3. init Meishe AR Face Filter

Refer to the following steps for initial Meishe AR Face Filter:

1. Import the NvEffectSdk.js SDK file in the header of index.html

   ```html
   <script src="https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/NvEffectSdk.js"></script>
   ```

2. Add the following code to your file to import the plugin module:

   ```typescript
   import ZegoLocalStream from 'zego-express-engine-webrtc/sdk/code/zh/ZegoLocalStream.web';
   import { ZegoExpressEngine } from 'zego-express-engine-webrtc';
   import { WASMLoader } from 'meishewasmloader';
   import jszip from "jszip";
   ```

   

3. WASMLoader is used to load wasm related files.

   ```js
   const wasmLoader = WASMLoader({
       // Load the progress callback
       showLoader: function (state) {},
       // Failure callback
       showError(errorText: string) {},
       // Success callback
       loadingFinished() {},
   });
   wasmLoader.loadEmscriptenModule("https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/", { effectSdk:true });
   //The addresses in steps 1 and 2 need to be consistent, otherwise it will lead to unexpected results.
   ```

4. Authorization Verification

   MeiShe web EffectSDK In order to facilitate customer access testing, for the way of localhost launch, all effects can be used without authorization verification. When customers deploy in a non-localhost environment, they need to contact MeiShe business personnel to obtain sdk authorization files. Then perform authorization verification as follows.Wasm file load success callback function ` loadingFinished ` call [verifySdkLicenseFileUrl()](https://www.meishesdk.com/web/doc_ch/html/class_nve_effect_context.html#af6ad176904a6fe6ff91c5b5382883050)for authorization validation:

   ```typescript
   if(nveGetEffectContextInstance().verifySdkLicenseFileUrl('')) {
       // Successful authorization
   } else {
       // authorization failed
   }
   ```

   

### 4. init ZEGO Engine

Fetching creates the `ZegoExpressEngine` instance. Refer to "Project Information" in [Console - Project Management](https://console.zego.im/dashboard) for appId and server details.

```typescript
const zg = new ZegoExpressEngine(appId, server);
```



### 5. Initialize the ARScene shortcut renderer

The purpose of initializing the ARScene shortcut renderer is to load the sdk and a series of model packages, data packages. In order to realize the recognition/loading of beauty, makeup, face, avatar, portrait, stickers, subtitles, background segmentation, special effects props and other functions.

Config:

```typescript
let arSceneRenderer = new NveARSceneRenderer();
// arSceneRenderer is the Meishe AR Face Filter instance and needs to be saved
arSceneRenderer.init({
  faceModelUrl: 'https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model',
  eyecontourModelUrl: 'https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model',
  avatarModelUrl: 'https://alieasset.meishesdk.com/model/avatar/ms_avatar_v2_0_0_next.model',
  segmentationModelUrl: 'https://alieasset.meishesdk.com/model/humanseg/ms_humansegment_medium_v2_0_0_next.model',
  makeupDataUrl: 'https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat',
  fakefaceDataUrl: 'https://alieasset.meishesdk.com/model/fakeface_v1.0.1.dat',
  faceCommonDataUrl: 'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
  advancedBeautyDataUrl: 'https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat',
  detectionMode: 32768 | 32,//sdkFlag，
  ratio: new NveRational(16, 9),
  mirror: true,
  jszip,
})
```

The type of `arSceneRenderer` returned after initializing the `Meishe AR Face Filter` plug-in is [NveARSceneRenderer](https://www.meishesdk.com/web/doc_ch/html/class_nve_a_r_scene_renderer.html), and various attribute methods can be found from the type document.

### 6. Open Meishe AR Face Filter plugin special effects

Follow these steps to enable special effects:

1. Call browser ` navigator. MediaDevices. GetUserMedia ` method open cameras, to obtain the initial flow:

   ```typescript
   const stream = navigator.mediaDevices.getUserMedia()
   ```
   
2. Call the SDK's `pushMediaStream` method to send the stream to the SDK:

   ```typescript
   arSceneRenderer.pushMediaStream(stream);
   ```
   
3. Call the SDK's `getOutputStream` method to get the processed stream:

   ```typescript
   const sdkStream = arSceneRenderer.getOutputStream();
   ```
   
4. Call the shortcut renderer's `enableBeauty` method to enable basic beauty:

   ```typescript
   arSceneRenderer.enableBeauty(true);
   ```
   


### 7.Connect the ZEGO SDK

1. Take the video stream obtained in step 6 and 3 from the Beautiful Photo SDK as a third party stream, and call  [createZegoStream](https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~javascript_web~class~ZegoExpressEngine#create-zego-stream)  to create an `ZEGO` video stream.

   ```typescript
   const zegoStream = await zg.createZegoStream({
     custom: {
       video: {
         source: sdkStream as MediaStream,
       }
     }
   });
   ```

2. Log in to the room by calling ZEGOAPI  [loginRoom](https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~javascript_web~class~ZegoExpressEngine#login-room) ,Related process and parameters can be seen on the official website of the construction of [audio and video call](https://doc-zh.zego.im/article/7638)

   ```typescript
   zg.loginRoom(
       roomid, 
       token, 
       { userID: userid, userName:nickName }, 
       { userUpdate: true },
   );
   ```

3. Use  [startPublishingStream](https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~javascript_web~class~ZegoExpressEngine#start-publishing-stream)  to push the stream

   ```typescript
   let streamID = new Date().getTime().toString();
   zg.startPublishingStream(streamID, zegoStream, { videoCodec: 'H264' });
   ```

4. Preview the streaming video locally

   ```
   localStream.playCaptureVideo(document.getElementById('loacl-preview'), {
       objectFit: 'cover',
   });
   ```

   

### 8.  Add Effect

Once the effect is enabled (see Step 6), you can set the effect by:

1. Add special effects such as beauty, makeup, beauty, filters, and AR props

   ```typescript
   arSceneRenderer.setEffectList([
     {
       key: "Advanced Beauty Intensity", //磨皮
       intensity: 1,
     },
     {
       key: "Beauty Whitening", //美白
       intensity: 1,
     },
     {
       url: "https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup", // package
       licUrl: "", 
       intensity: 1, 
     }
   ])
   ```

2. Add caption and sticker

   ```typescript
   // sticker
   const sticker = await arSceneRenderer.createExternalEffectInstance(
       {
           inPoint: 0,
           duration: 5000000,
           url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
           licUrl: "",
       }
   );
   // caption
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 5000000,
       }
   );
   arSceneRenderer.setExternalEffectInstanceList([sticker,caption])
   ```

   

## sample code

example:

1. vite.config.ts config

   ```typescript
   export default defineConfig({
     plugins: [react()],
     server: {
       headers: {
         "Cross-Origin-Opener-Policy": "same-origin",
         "Cross-Origin-Embedder-Policy": "require-corp",
       },
     },
   });
   ```
   
   
   
2. Functional code

   ```typescript
   import jszip from 'jszip';
   import { WASMLoader } from 'meishewasmloader';
   import { ZegoExpressEngine } from 'zego-express-engine-webrtc';
   
   const wasmLoader = WASMLoader({
       // Load the progress callback     
       showLoader: function (state) {},
       // Failure callback
       showError(errorText: string) {},
       // Success callback
       loadingFinished() {},
   });
   wasmLoader.loadEmscriptenModule("https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/", { effectSdk:true });
   
   let arSceneRenderer = new NveARSceneRenderer();
   await arSceneRenderer.init({
     faceModelUrl: 'https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model',
     eyecontourModelUrl: 'https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model',
     avatarModelUrl: 'https://alieasset.meishesdk.com/model/avatar/ms_avatar_v2_0_0_next.model',
     segmentationModelUrl: 'https://alieasset.meishesdk.com/model/humanseg/ms_humansegment_medium_v2_0_0_next.model',
     makeupDataUrl: 'https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat',
     fakefaceDataUrl: 'https://alieasset.meishesdk.com/model/fakeface_v1.0.1.dat',
     faceCommonDataUrl: 'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
     advancedBeautyDataUrl: 'https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat',
     detectionMode: 32768 | 32,
     ratio: new NveRational(16, 9),
     sdkCDNUrl: 'https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/',
     licFileUrl: 'xxx.lic',
     mirror: true,
     jszip
   })
   
   // Initialize the ZEGO engine
   const zg = new ZegoExpressEngine(appId, server);
   
   // Call the browser API to start the camera to get the audio and video stream
   const stream = await navigator.mediaDevices.getUserMedia({
       video:{ width: 720, height: 540, frameRate: { ideal: 30, max: 60 } },
       audio:false
   });
   
   // Pass it to MeiSheSDK
   arSceneRenderer.pushMediaStream(stream);
   
   // Obtain the processed audio and video streams for use as third-party streams
   let sdkStream = arSceneRenderer.getOutputStream();
   
   // Enable basic beauty function
   arSceneRenderer.enableBeauty(true);
   
   // Call createZegoStream to create a ZEGO video stream
   const zegoStream = await zg.createZegoStream({
     custom: {
       video: {
         source: sdkStream as MediaStream,
       }
     },
   });
   
   // Call loginRoom to login to the room
   await zg.loginRoom(
       roomid,
       token,
       { userID: userid, userName: nickName },
       { userUpdate: true },
   );
   
   // Push stream Id, need to be unique
   let streamID = new Date().getTime().toString();
   
   // Call startPublishingStream to push the stream
   zg.startPublishingStream(streamID, zegoStream, { videoCodec: 'H264' });
   
   // Local preview
   zegoStream.playCaptureVideo(document.getElementById('local-preview'), {
     objectFit: 'cover',
   });
   
   // Set the beauty
   const effectList = [
     {
       key: "Advanced Beauty Intensity",
       intensity: 1,
     },
     {
       key: "Beauty Whitening",
       intensity: 1,
     },
   ];
   
   // Add beauty
   effectList.push([
     {
       url: "https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup",
       licUrl: "",
       intensity: 1,
     }
   ])
   
   // Add filters
   effectList.push([
     {
       url: "https://assets.meishesdk.com/material/videofx/8FBC81A0-F0A4-48BE-83CF-2D85CADB952A.2.videofx",
       licUrl: "", 
       intensity: 1, 
     }
   ])
   
   // Apply filters and effects
   arSceneRenderer.setEffectList(effectList);
   
   ```
   
   

## api reference

### Meishe AR Face Filter API

#### NveARSceneRenderer

```typescript
new NveARSceneRenderer();
```

Create the SDK shortcut renderer instance.

#### init

```typescript
arSceneRenderer.init()
```

Initialize the SDK shortcut renderer and return the instance, Plug-in instance class for [NveARSceneRenderer](https://www.meishesdk.com/web/doc_ch/html/class_nve_a_r_scene_renderer.html) The init method is under the `NveARSceneRenderer` class.

#### enableBeauty

```typescript
enableBeauty()
```

Turn on/off beauty effects to control only the built-in beauty effects. This method is located under the `NveARSceneRenderer` plug-in instance.

#### setEffectList

```typescript
setEffectList()
```

Set the list of effects. You can set beauty, beauty makeup, beauty type, filter, props, background. This method is located under the `NveARSceneRenderer` plug-in instance.

#### getEffectList

```typescript
getEffectList()
```

Gets a list of all the effects that have been set, including added beauty, filters, props, and more. This method is located under the `NveARSceneRenderer` plug-in instance.

#### createExternalEffectInstance

```typescript
createExternalEffectInstance()
```

Create extended effects instances for creating captions and stickers instances. This method is located under the `NveARSceneRenderer` plug-in instance.

#### appendExternalEffectInstance

```typescript
appendExternalEffectInstance()
```

Add an extended effects instance to the plugin instance. This method is located under the `NveARSceneRenderer` plug-in instance.

#### setExternalEffectInstanceList

```typescript
setExternalEffectInstanceList()
```

Gets a list of all added extension effects. This method is located under the `NveARSceneRenderer` plug-in instance.

### Special effect setting

#### Beauty

1. Built-in effects

   Built-in special effects do not need special effects package, which belongs to the built-in ability of the smart beauty effects plug-in, but you need to know the key name. The specific content can be viewed in the [Meishu SDK Web document](https://www.meishesdk.com/web/doc_ch/html/_fx_name_list_8md.html), which is roughly as follows:

   ```typescript
   // key is the built-in special effects keyword used to distinguish special effects functions
   // intensity indicates the specific intensity. The value ranges from [-1,1] to [0,1]
   // sdk built-in hundreds of built-in effects, range and key values can be found by yourself
   const beautyArray = [
   	{
   		key:'Advanced Beauty Intensity',
   		intensity:1
   	},
       {
   		key:'Beauty Whitening',
   		intensity:1
   	},
       {
   		key:'Beauty Reddening',
   		intensity:1
   	},
       {
   		key:'Face Mesh Face Width Degree',
   		intensity:1
   	},
       {
   		key:'Face Mesh Face Length Degree',
   		intensity:1
   	},
       {
   		key:'Face Mesh Face Size Degree',
   		intensity:1
   	},
       {
   		key:'Face Mesh Forehead Height Degree',
   		intensity:1
   	},
       ...
   ]
   
   arSceneRenderer.setEffectList(beautyArray)
   
   ```

   

2. Beauty template

   Unlike built-in effects, beauty templates need to be passed into the template package, not the key value. The code is as follows:

   ```typescript
   const templateArray = [
       {
           url:"https://qasset.meishesdk.com/material/pu/makeup/A6F99920-966B-4B09-ADC7-A2E44BF0B894/A6F99920-966B-4B09-ADC7-A2E44BF0B894.1.zip",
           licUrl: ""
       },
   ]
   arSceneRenderer.setEffectList(templateArray)
   ```



#### Makeup

1. normal package

   Ordinary beauty bags have lipstick, eyeshadow, eyebrows, eyelashes, eyeliner, blush, shine, shadow, contact lenses, makeup and a series of categories. The configuration method is the same as the beauty template, and the code is as follows:

   ```typescript
   const makeupArray = [
       {
           url:"https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup",
           licUrl: "",
           intensity:1,
       }
   ]
   
   arSceneRenderer.setEffectList(makeupArray)
   ```

   

2. Complete package

   The whole bag is the integration of a series of ordinary bags. The configuration method is as follows:

   ```typescript
   arSceneRenderer.setEffectList([
       {
           url:"https://qasset.meishesdk.com/material/pu/makeup/A6F99920-966B-4B09-ADC7-A2E44BF0B894/A6F99920-966B-4B09-ADC7-A2E44BF0B894.1.zip",
       },
   ])
   ```



#### Filter

Filters are configured in the same way as beauty bags, and the code is as follows:

```typescript
const filterArray = [
    {
        url:"https://qasset.meishesdk.com/material/pu/videofx/0D4B5D89-D665-4723-9EB6-734E47A323A0/0D4B5D89-D665-4723-9EB6-734E47A323A0.2.videofx",
        licUrl: "",
        intensity:1,
    }
]
arSceneRenderer.setEffectList(filterArray)
```



#### Virtual background

1. background blur

   You need to specify the background blur special effects package, as follows:

   ```typescript
   arSceneRenderer.setEffectList([
       {
           url:"https://qasset.meishesdk.com/material/pu/videofx/F31CBEBD-9F86-4AC6-87AB-1A289A62E3AE/F31CBEBD-9F86-4AC6-87AB-1A289A62E3AE.1.videofx",
           licUrl:''
       }
   ])
   ```

   

2. Background substitution

   Background The replacement configuration is as follows:

   ```typescript
   arSceneRenderer.setEffectList([
       {segmentationBackgroundUrl:"https://alieasset.meishesdk.com/material/bgimage/f513a297-4b3a-4b65-ac19-4aeaae5c8360.jpg"}//image url
   ])
   ```

   

#### AR scene

The configuration method is the same as the filter, and the code is as follows:

```typescript
arSceneRenderer.setEffectList([
    { 
    	url: "https://qasset.meishesdk.com/material/pu/arscene/B251CEC7-B285-48F9-AC7B-7C576F420971/B251CEC7-B285-48F9-AC7B-7C576F420971.4.arscene",
    	licUrl: '' 
    }
])
```



#### Caption

##### 1  common caption

Common subtitling categories include flower characters, dynamic subtitling, word-for-word subtitling, bubble subtitling and so on. The configuration method is not the same as beauty makeup.

` createExternalEffectInstance ` method parameter information table:

| **Parameters**            | **Type** | Required | **Default** | **Explanation**                                              |
| ------------------------- | -------- | -------- | ----------- | :----------------------------------------------------------- |
| modular                   | Boolean  | No       | false       | Whether it is module captioning, the module captioning type can add effects such as bubbles and animations. |
| text                      | String   | Yes      |             | text                                                         |
| inPoint                   | Number   | Yes      |             | begin time.The unit is microsecond                           |
| duration                  | Number   | Yes      |             | The unit is microsecond，set to Number.MAX_SAFE_INTEGER indicates continuous display. |
| url                       | String   | No       |             | common caption package address                               |
| licUrl                    | String   | No       |             | Address of the ordinary package authorization file           |
| fontFileUrl               | String   | No       |             | If the font file address is not set, the non-English text will be displayed incorrectly because the corresponding font cannot be found. |
| captionRendererUrl        | String   | No       |             | Floral effect style package address.                         |
| captionRendererLicUrl     | String   | No       |             | The address of the license file corresponding to the flower effect style package. |
| captionContextUrl         | String   | No       |             | Bubble Effect style package address.                         |
| captionContextLicUrl      | String   | No       |             | Bubble effect style package address.                         |
| captionAnimationUrl       | String   | No       |             | Animation effects style package address.                     |
| captionAnimationLicUrl    | String   | No       |             | License file address corresponding to the animation effects style package. |
| animationPeriod           | Number   | No       |             | License file address corresponding to the animation effects style package. Animation effect period, in milliseconds. |
| captionInAnimationUrl     | String   | No       |             | Enter the license file address corresponding to the animation effects style package. |
| captionInAnimationLicUrl  | String   | No       |             | Enter animation style package address.                       |
| inAnimationDuration       | Number   | No       |             | Enter the duration of the animation effect in milliseconds.  |
| captionOutAnimationUrl    | String   | No       |             | Create animation style package address.                      |
| captionOutAnimationLicUrl | String   | No       |             | The address of the license file corresponding to the animation style package. |
| outAnimationDuration      | Number   | No       |             | Duration of the animation, in milliseconds.                  |
| positionX                 | Number   | No       |             | Horizontal position, normalized value, range [-1, 1], center 0, positive direction to the right. |
| positionY                 | Number   | No       |             | Vertical position, normalized value, range [-1, 1], center is 0, upward is positive direction. |
| position                  | String   | No       |             | For orientation information, the values that can be set include top-left, top, top-right, left, center, right, bottom-left, bottom, and bottom-right. |

1. add

   Subtitle creation method for ` createExternalEffectInstance `, subtitles add methods for ` appendExternalEffectInstance `.

   In the following example, the various subtitle effects are created using the same API with different parameters. Refer to the above parameter table for specific parameters

   ```typescript
   // common caption
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 5000000,
       }
   );
   
   // Create regular subtitles with subtitles style
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 5000000,
           url: "https://qasset.meishesdk.com/material/pu/caption/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3.1.captionstyle",
           licUrl: "",
       }
   );
   
   // Create regular captions with captioning styles and a splash effect
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 5000000,
           url: "https://qasset.meishesdk.com/material/pu/caption/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3.1.captionstyle",
           licUrl: "",
           captionRendererUrl: "https://qasset.meishesdk.com/material/pu/caption/262BC53C-CB55-45D4-96BD-2BD79D3C5F11/262BC53C-CB55-45D4-96BD-2BD79D3C5F11.1.captionrenderer",
           captionRendererLicUrl: "",
       }
   );
   
   // Create regular captions with location information
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 5000000,
           positionX: -0.6,
           positionY: 0.9,
       }
   );
   
   // Create regular captions with orientation information
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 5000000,
           position: "top-right",
       }
   );
   
   // Create plain subtitles with fonts
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 5000000,
           fontFileUrl: "https://alieasset.meishesdk.com/release/material/font/164C237B-16CB-49D5-A205-1976B16046B8/164C237B-16CB-49D5-A205-1976B16046B8.ttf",
       }
   );
   
   // Create unstyled module captions
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           modular: true,
           text: "modularCaption",
           inPoint: 0,
           duration: 5000000,
       }
   );
   
   // Create module captions with a splash effect
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           modular: true,
           text: "modularCaption",
           inPoint: 0,
           duration: 5000000,
           captionRendererUrl: "https://qasset.meishesdk.com/material/pu/caption/262BC53C-CB55-45D4-96BD-2BD79D3C5F11/262BC53C-CB55-45D4-96BD-2BD79D3C5F11.1.captionrenderer",
           captionRendererLicUrl: "",
       }
   );
   
   // Create a module caption with a bubble effect
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           modular: true,
           text: "modularCaption",
           inPoint: 0,
           duration: 5000000,
           captionContextUrl: "https://qasset.meishesdk.com/material/pu/caption/BFC751C8-D9B2-440A-A3DF-8D02841745C1/BFC751C8-D9B2-440A-A3DF-8D02841745C1.1.captioncontext",
           captionContextLicUrl: "",
       }
   );
   
   // Create module captions with animated effects
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           modular: true,
           text: "modularCaption",
           inPoint: 0,
           duration: 5000000,
           captionAnimationUrl: "https://qasset.meishesdk.com/material/pu/caption/C34F307B-5576-4525-B309-4166D2628093/C34F307B-5576-4525-B309-4166D2628093.1.captionanimation",
           captionAnimationLicUrl: "",
           animationPeriod: 2500,
       }
   );
   
   // Use the interface of the caption instance to modify the other attributes of the caption
   caption.scaleCaption2(0.8);
   caption.setUnderline(true);
   
   // Adding a caption instance
   arSceneRenderer.appendExternalEffectInstance(caption);
   ```

   The normal subtitle instance type is [NveCaption](https://www.meishesdk.com/web/doc_ch/html/class_nve_caption.html), and various attributes and methods are configured. You can refer to the linked document.

2. get

   To obtain a list of current setting all extension effects, use ` getExternalEffectInstanceList ` method. The code is as follows:

   ```typescript
   // Get a list of all expanded effects.Note that the expanded effects are not just captions.There may be other effects that need to be filtered
   // You can also maintain your own list of already set subtitle instances
   let instanceList = arSceneRenderer.getExternalEffectInstanceList();
   let captionInstanceList = instanceList.filter(instance=>instance instanceof NveCaption)
   ```

   

3. delete

   Through ` getExternalEffectInstanceList ` access list, find the same as the current subtitle instance id item and delete. Through ` setExternalEffectInstanceList ` resetting list. The code is as follows:

   ```typescript
   let deleteInstanceId = 'xxxx'// The id of the subtitle instance to remove
   let instanceList = arSceneRenderer.getExternalEffectInstanceList()// Get a list of extended effects on deletion without filtering
   let index = instanceList.findIndex(instance=>instance.id!==deleteInstanceId)// Gets the index of the deleted child
   if(index!==-1){
       instanceList[index].release()// release resource
       instanceList.splice(index,1)
       arSceneRenderer.setExternalEffectInstanceList(instanceList);// Resets the list of extended effects
   }
   
   ```



##### 2 Compound caption

` createExternalEffectInstance ` parameters listed in reference ordinary subtitles form.

The code is as follows:

```typescript
const compoundCaption = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 5000000,
        url: "https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption",
        licUrl: "",
    }
);

// Create compound captions with location information
const compoundCaption = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 5000000,
        url: "https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption",
        licUrl: "",
        positionX: -0.6,
        positionY: 0.9,
    }
);

// Create a composite caption with location information Create a composite caption with orientation location information
const compoundCaption = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 5000000,
        url: "https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption",
        licUrl: "",
        position: "top-right",
    }
);

// Modify other properties using the interface of the composite caption instance
compoundCaption.scaleCaption2(0.8);
compoundCaption.setText(0, "caption0");

// Add a composite caption instance
arSceneRenderer.appendExternalEffectInstance(compoundCaption);
```

The instance type of the combined caption is [NveCompoundCaption](https://www.meishesdk.com/web/doc_ch/html/class_nve_compound_caption.html), which can be configured in the same way as normal captions

#### Animated Sticker

Stickers are created in a similar way to captions, but the parameters are somewhat different.The table of parameters is as follows:

| **Parameters**                    | **Type** | **Required** | **Default** | **Explanation**                                              |
| --------------------------------- | -------- | ------------ | ----------- | ------------------------------------------------------------ |
| inPoint                           | Number   | Yes          |             | Start time of the animated sticker in microseconds.          |
| duration                          | Number   | Yes          |             | Duration of the animated sticker in microseconds, set to Number.MAX_SAFE_INTEGER to indicate continuous display. |
| url                               | String   | No           |             | Animated sticker pack address.                               |
| licUrl                            | String   | No           |             | The address of the license file corresponding to the animation sticker package. |
| animatedStickerAnimationUrl       | String   | No           |             | Animation style package address.                             |
| animatedStickerAnimationLicUrl    | String   | No           |             | The license file address for the animation style pack.       |
| animationPeriod                   | Number   | No           |             | Animation effect period in milliseconds.                     |
| animatedStickerInAnimationUrl     | String   | No           |             | Enter animation style package address.                       |
| animatedStickerInAnimationLicUrl  | String   | No           |             | Enter the animation style package corresponding to the license file address. |
| inAnimationDuration               | Number   | No           |             | Enter the duration of the animation effect in milliseconds.  |
| animatedStickerOutAnimationUrl    | String   | No           |             | Create animation style package address.                      |
| animatedStickerOutAnimationLicUrl | String   | No           |             | The address of the license file corresponding to the animation style package. |
| outAnimationDuration              | Number   | No           |             | Duration of the animation, in milliseconds.                  |
| positionX                         | Number   | No           |             | Horizontal position, normalized value, range [-1, 1], center 0, positive direction to the right. |
| positionY                         | Number   | No           |             | Vertical position, normalized value, range [-1, 1], center is 0, upward is positive direction. |
| position                          | String   | No           |             | For orientation information, the values that can be set include top-left, top, top-right, left, center, right, bottom-left, bottom, and bottom-right. |

The code is as follows:

```typescript
// Create stickers that don't animate
const sticker = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 5000000,
        url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
        licUrl: "",
    }
);

// Create animated stickers
const sticker = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 5000000,
        url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
        licUrl: "",
        animatedStickerAnimationUrl: "https://qasset.meishesdk.com/material/pu/animatedsticker/58A339F9-8B2F-479F-8A1D-35E4456CFA9B/58A339F9-8B2F-479F-8A1D-35E4456CFA9B.1.animatedstickeranimation",
        animatedStickerAnimationLicUrl: "",
        animationPeriod: 5000,
    }
);

// Create stickers with location information
const sticker = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 5000000,
        url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
        licUrl: "",
        positionX: -0.6,
        positionY: 0.9,
    }
);

// Create stickers with orientation information
const sticker = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 5000000,
        url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
        licUrl: "",
        position: "top-right",
    }
);

// Modify other properties using the interface of the animated sticker instance
sticker.scaleAnimatedSticker2(0.5);

// Add an instance of animated stickers
arSceneRenderer.appendExternalEffectInstance(sticker);
```

The instance type of the sticker is [NveAnimatedSticker](https://www.meishesdk.com/web/doc_ch/html/class_nve_animated_sticker.html), which can be operated and configured according to the idea of subtitles.
