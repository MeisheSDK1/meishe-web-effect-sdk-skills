# Meishe AR Face Filter——Agora

This article explains how to integrate and use the `Meishe AR Face Filter` plugin in your Web projects.



## Precondition

Before you begin, ensure that the following requirements are met:

- For Windows or macOS computers, the following requirements must be met:
  - PC browser version: ipad and pad devices are not supported.
  - Chrome,Opera,360 browser: the kernel is Chrome, version 75 includes more than support;
  - Firefox browser: The kernel version is greater than 58, including the above support (special cases: version 72 is not supported);
  - Safari browser: minimum 15.4, 17.0 and above the best performance, recommended to the latest version
  - Physical audio and video acquisition equipment.
  - Internet connection possible. If you have a [firewall deployed](https://doc.shengwang.cn/doc/rtc/javascript/basic-features/firewall) in your network environment, see Dealing with Firewall restrictions to use the sound network service normally.
- Installed [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)。

[^resource link]: The CDN address of the sdk and the addresses of all materials in the document are the test public addresses provided by the United States Photography. If the customer's product is ready to be released online, it is necessary to contact the business to obtain the relevant files of the sdk, privatize and deploy to the customer's environment, and replace this address for re-use. When deploying wasm related files privately, configure brotli or gzip to compress wasm files to help improve loading speed.



## Integration And Invocation

### 1. Integrate SDK and plugin

To get started, you need to integrate the `Agora SDK` and `Meishe AR Face Filter` plug-ins into your project.

#### 1.1 Integration with Agora Video SDK

The `Meishe AR Face Filter` plugin needs to work with the `Agora Web SDK` 4.x (v4.10.0 or later). Refer to the following documentation to integrate the Web SDK and implement basic video calling:

[Implement audio and video calls](https://doc.shengwang.cn/doc/rtc/javascript/get-started/quick-start)

#### 1.2 Integrated plugin

Follow these steps to integrate plug-ins:

Integrate the following plugins into your project via npm.

1. Run the following command to install the plug-in：

   ```shell
   npm i agora-meishe-effect-sdk jszip agora-rtc-sdk-ng
   ```

#### 1.3 Integrated script

Include the EffectSDK script in the header of index.html:

   ```typescript
   <script src="https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/NvEffectSdk.js"></script>
   ```

### 2. Configure Meishe AR Face Filter plugin environment

The `Meishe AR Face Filter` plugin needs to configure the response header to make the [SharedArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) available.

#### 2.1 Vite environment

The following configuration is added to the configuration plugins in `vite.config.ts`:

```typescript
...
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  }
...
```

#### 2.2 Webpack environment

Add the following configuration to `webpack.config.ts` configuration plugins:

```typescript
devServer：{
	headers: {
      'Cross-Origin-Opener-Policy':'same-origin',
      'Cross-Origin-Embedder-Policy':'require-corp',
    },
    ...
}
```

The purpose of adding the above configuration is to add the above setting to the request header to notify the browser to open the [SharedArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

The above syntax is affected by `webpack` and `vite` versions, and the specific API can be configured according to their respective versions.

### 3. Register plugin

Follow these steps to register the plugin:

1. Add the following code to your `.ts` file to import the plug-in module：

   ```typescript
   import { EffectSDKExtension, EffectSDKProcessor } from 'agora-meishe-effect-sdk'
   import AgoraRTC from "agora-rtc-sdk-ng";
   import jszip from "jszip";
   ```

2. Create`effectSDKExtension` instance.

   ```typescript
    const effectSDKExtension = new EffectSDKExtension()
   ```

3. Call ` AgoraRTC. RegisterExtensions ` and to create a ` effectSDKExtension ` instance.

   ```typescript
   AgoraRTC.registerExtensions([effectSDKExtension])
   ```

   

### 4.  Initialize the Meishe AR Face Filter plugin

The purpose of initializing the smart beauty effects plugin is to load the sdk and a series of model packages and data packages. To realize the recognition/loading of beauty, makeup, face, avatar, portrait, stickers, subtitles, background segmentation, special effects props and other functions.

The specific configurations are as follows:

```typescript
const effectSDKProcessor = effectSDKExtension.createProcessor()
// arSceneRenderer is the Meishe AR Face Filter instance and needs to be saved
const arSceneRenderer = await effectSDKProcessor.init({
faceModelUrl: 'https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model',
  eyecontourModelUrl: 'https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model',
  avatarModelUrl: 'https://alieasset.meishesdk.com/model/avatar/ms_avatar_v2_0_0_next.model',
  segmentationModelUrl: 'https://alieasset.meishesdk.com/model/humanseg/ms_humansegment_medium_v2_0_0_next.model',
  makeupDataUrl: 'https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat',
  fakefaceDataUrl: 'https://alieasset.meishesdk.com/model/fakeface_v1.0.1.dat',
  faceCommonDataUrl: 'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
  advancedBeautyDataUrl: 'https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat',
  detectionMode: 32768 | 32,//Flag，fixed configuration
  ratio: '16:9',
  sdkCDNUrl: 'https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/',//CDN link
  licFileUrl: '',//Authorization file address
  mirror: true,//or false
  jszip
})
```

The type of `arSceneRenderer` returned after initializing the `Meishe AR Face Filter` plug-in is [NveARSceneRenderer](https://www.meishesdk.com/web/doc_ch/html/class_nve_a_r_scene_renderer.html), and various attribute methods can be found from the type document.

### 5. Open Meishe AR Face Filter plugin special effects

Follow these steps to enable special effects:

1. Call `Meishe AR Face Filter` skin care effects plug-ins ` EffectSDKExtension. CreateProcessor ` create beauty plug-in processor ` processor ` instances:

   ```typescript
   // Processor to create beauty plugin
   const effectSDKProcessor = EffectSDKExtension.createProcessor();
   ```

2. Create videoTrack

   ```typescript
   const videoTrack = await AgoraRTC.createCameraVideoTrack();
   ```

3. Invoke the RTC SDK ` videoTrack. Pipe ` method and specify ` videoTrack. ProcessorDestination ` attribute, the plug-in into the SDK camera data stream processing pipeline:

   ```typescript
   // Set up the video processing pipeline
   videoTrack.pipe(effectSDKProcessor).pipe(videoTrack.processorDestination);
   ```

4. Invoke the `enableBeauty` method of the `Meishe AR Face Filter` plugin to enable basic beauty functions:

   ```typescript
   // Enable basic beauty function
   arSceneRenderer.enableBeauty(true);
   ```

5. Play

   The 'video-container' is the id of the video and can be customized in width and height

   ```typescript
   // <video id="video-container" style="width: 720px; height: 540px;" />
   videoTrack.play(document.getElementById('video-container') as HTMLVideoElement,{ fit: "contain",mirror:false });
   ```

6. Add Effect

   1. Add special effects such as beauty, makeup, beauty style, filters, and AR props

      ```typescript
      const effectList = [
        {
          key: "Advanced Beauty Intensity", 
          intensity: 1,
        },
        {
          key: "Beauty Whitening", 
          intensity: 1,
        },
        {
          url: "https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup", // package
          licUrl: "", 
          intensity: 1, 
        },
        {
          url: "https://assets.meishesdk.com/material/videofx/8FBC81A0-F0A4-48BE-83CF-2D85CADB952A.2.videofx", // package
          licUrl: "", 
          intensity: 1, 
        }
      ];
      arSceneRenderer.setEffectList(effectList)
      ```

   2.  Add caption and sticker

      ```typescript
      const caption = await arSceneRenderer.createExternalEffectInstance(
          {
              text: "caption",
              inPoint: 0,
              duration: 500000000,
          }
      );
      
      const sticker = await arSceneRenderer.createExternalEffectInstance(
          {
              inPoint: 0,
              duration: 500000000,
              url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
              licUrl: "",
          }
      );
      arSceneRenderer.setExternalEffectInstanceList([sticker,caption]);
      ```


## sample code

A piece of code that implements the plug-in's functionality is listed below for your reference.

1. vite.config.ts

   ```typescript
   export default defineConfig({
     plugins: [react()],
     server: {
       headers: {
         "Cross-Origin-Embedder-Policy": "require-corp",
         "Cross-Origin-Opener-Policy": "same-origin",
       },
     },
   })
   ```
   
   
   
2. Function code

   ```typescript
   import AgoraRTC from "agora-rtc-sdk-ng";
   import {
     EffectSDKExtension,
     EffectSDKProcessor,
   } from "agora-meishe-effect-sdk";
   import jszip from "jszip";
   
   const effectSDKExtension = new EffectSDKExtension();
   AgoraRTC.registerExtensions([effectSDKExtension]);
   const effectSDKProcessor = effectSDKExtension.createProcessor();
   // arSceneRenderer is the Meishe AR Face Filter plugin instance and needs to be saved
   const arSceneRenderer = await effectSDKProcessor.init({
     faceModelUrl: 'https://alieasset.meishesdk.com/model/face240/ms_face240_v3_0_1_next.model',
     eyecontourModelUrl: 'https://alieasset.meishesdk.com/model/eyecontour/ms_eyecontour_v2_0_0_next.model',
     avatarModelUrl: 'https://alieasset.meishesdk.com/model/avatar/ms_avatar_v2_0_0_next.model',
     segmentationModelUrl: 'https://alieasset.meishesdk.com/model/humanseg/ms_humansegment_medium_v2_0_0_next.model',
     makeupDataUrl: 'https://alieasset.meishesdk.com/model/makeup2_240_v2.1.2.dat',
     fakefaceDataUrl: 'https://alieasset.meishesdk.com/model/fakeface_v1.0.1.dat',
     faceCommonDataUrl: 'https://alieasset.meishesdk.com/model/facecommon_v1.0.0.dat',
     advancedBeautyDataUrl: 'https://alieasset.meishesdk.com/model/advancedbeauty_v1.0.0.dat',
     detectionMode: 32768 | 32,
     ratio: '16:9',
     sdkCDNUrl: 'https://alieasset.meishesdk.com/NvWasm/domain/3-15-1-release/2/',
     licFileUrl: '',//Authorization file address
     mirror: true,//or false
     jszip
   })
   // Create a video using the RTC SDK
   const videoTrack = await AgoraRTC.createCameraVideoTrack();
   // Set up the video processing pipeline
   videoTrack.pipe(effectSDKProcessor).pipe(videoTrack.processorDestination);
   
   // Enable basic beauty function
   arSceneRenderer.enableBeauty(true);
   
   // Set beauty
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
   
   // Set makeup
   effectList.push(
     {
       url: "https://qasset.meishesdk.com/material/pu/makeup/FDFB2239-44D1-491D-85A1-7A537860118E/FDFB2239-44D1-491D-85A1-7A537860118E.1.makeup", //makeup package address
       licUrl: "", 
       intensity: 1, 
     }
   )
   
   // Set
   effectList.push(
     {
       url: "https://assets.meishesdk.com/material/videofx/8FBC81A0-F0A4-48BE-83CF-2D85CADB952A.2.videofx", 
       licUrl: "", 
       intensity: 1, 
     }
   )
   
   arSceneRenderer.setEffectList(effectList);
   // <video id="video-container" style="width: 720px; height: 540px;" /> Width and height can be customized
   videoTrack.play(document.getElementById('video-container') as HTMLVideoElement,{ fit: "contain",mirror:false });
   ```
   
   

## api reference

### Meishe AR Face Filter API

#### EffectSDKExtension

```typescript
new EffectSDKExtension()
```

Create an example of a plug-in extender. This method is an export method of a `Meishe AR Face Filter` plug-in.

#### createProcessor

```typescript
createProcessor();
```

Creates a plug-in processor, returning an instance of `EffectSDKProcessor`. This method is located under the `EffectSDKExtension` class.

#### init

```typescript
effectSDKProcessor.init()
```

Initialize the plug-in and return the plug-in instance, whose class is [NveARSceneRenderer](https://www.meishesdk.com/web/doc_ch/html/class_nve_a_r_scene_renderer.html). The init method is located under the `EffectSDKProcessor` class.

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
           licUrl: "",
           intensity:1,
       }
   ]
   arSceneRenderer.setEffectList(templateArray)
   ```



#### Makeup

1. normal package

   Ordinary beauty bags have lipstick, eyeshadow, eyebrows, eyelashes, eyeliner, blush, shine, shadow, contact lenses, makeup and a series of categories. The configuration method is the same as the beauty template, and the code is as follows:

   ```typescript
   const makeupArray = [
       {
           url:"https://qasset.meishesdk.com/material/pu/makeup/08163375-19E9-48DD-857D-05B3444C0BB9/08163375-19E9-48DD-857D-05B3444C0BB9.1.makeup",
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

##### 1 common caption

Common subtitling categories include flower characters, dynamic subtitling, word-for-word subtitling, bubble subtitling and so on. The configuration method is not the same as beauty makeup.

` createExternalEffectInstance ` method parameter information table:

| Parameters                | **Type** | **required** | Default | Explanation                                                  |
| ------------------------- | -------- | ------------ | ------- | :----------------------------------------------------------- |
| modular                   | Boolean  | No           | false   | Whether it is module captioning, the module captioning type can add effects such as bubbles and animations. |
| text                      | String   | Yes          |         | text                                                         |
| inPoint                   | Number   | Yes          |         | begin time.The unit is microsecond                           |
| duration                  | Number   | Yes          |         | The unit is microsecond，set to Number.MAX_SAFE_INTEGER indicates continuous display. |
| url                       | String   | No           |         | common caption package address                               |
| licUrl                    | String   | No           |         | Address of the ordinary package authorization file           |
| fontFileUrl               | String   | No           |         | If the font file address is not set, the non-English text will be displayed incorrectly because the corresponding font cannot be found. |
| captionRendererUrl        | String   | No           |         | Floral effect style package address.                         |
| captionRendererLicUrl     | String   | No           |         | The address of the license file corresponding to the flower effect style package. |
| captionContextUrl         | String   | No           |         | Bubble Effect style package address.                         |
| captionContextLicUrl      | String   | No           |         | Bubble effect style package address.                         |
| captionAnimationUrl       | String   | No           |         | Animation effects style package address.                     |
| captionAnimationLicUrl    | String   | No           |         | License file address corresponding to the animation effects style package. |
| animationPeriod           | Number   | No           |         | License file address corresponding to the animation effects style package. Animation effect period, in milliseconds. |
| captionInAnimationUrl     | String   | No           |         | Enter the license file address corresponding to the animation effects style package. |
| captionInAnimationLicUrl  | String   | No           |         | Enter animation style package address.                       |
| inAnimationDuration       | Number   | No           |         | Enter the duration of the animation effect in milliseconds.  |
| captionOutAnimationUrl    | String   | No           |         | Create animation style package address.                      |
| captionOutAnimationLicUrl | String   | No           |         | The address of the license file corresponding to the animation style package. |
| outAnimationDuration      | Number   | No           |         | Duration of the animation, in milliseconds.                  |
| positionX                 | Number   | No           |         | Horizontal position, normalized value, range [-1, 1], center 0, positive direction to the right. |
| positionY                 | Number   | No           |         | Vertical position, normalized value, range [-1, 1], center is 0, upward is positive direction. |
| position                  | String   | No           |         | For orientation information, the values that can be set include top-left, top, top-right, left, center, right, bottom-left, bottom, and bottom-right. |

1. add

   Subtitle creation method for ` createExternalEffectInstance `, subtitles add methods for ` appendExternalEffectInstance `.

   In the following example, the various subtitle effects are created using the same API with different parameters. Refer to the above parameter table for specific parameters

   ```typescript
   // common caption
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
       }
   );
   
   // Create regular subtitles with subtitles style
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
           url: "https://qasset.meishesdk.com/material/pu/caption/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3/193DC3A6-7EF2-4739-B8D9-9368DA2FB1B3.1.captionstyle",
           licUrl: "",
       }
   );
   
   // Create regular captions with captioning styles and a splash effect
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
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
           duration: 500000000,
           positionX: -0.6,
           positionY: 0.9,
       }
   );
   
   // Create regular captions with orientation information
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
           position: "top-right",
       }
   );
   
   // Create plain subtitles with fonts
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           text: "caption",
           inPoint: 0,
           duration: 500000000,
           fontFileUrl: "https://alieasset.meishesdk.com/release/material/font/164C237B-16CB-49D5-A205-1976B16046B8/164C237B-16CB-49D5-A205-1976B16046B8.ttf",
       }
   );
   
   // Create unstyled module captions
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           modular: true,
           text: "modularCaption",
           inPoint: 0,
           duration: 500000000,
       }
   );
   
   // Create module captions with a splash effect
   const caption = await arSceneRenderer.createExternalEffectInstance(
       {
           modular: true,
           text: "modularCaption",
           inPoint: 0,
           duration: 500000000,
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
           duration: 500000000,
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
           duration: 500000000,
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
        duration: 500000000,
        url: "https://qasset.meishesdk.com/material/pu/compoundcaption/D037A06A-FFD8-4863-A291-A2BC105F0BBC/D037A06A-FFD8-4863-A291-A2BC105F0BBC.1.compoundcaption",
        licUrl: "",
    }
);

// Create compound captions with location information
const compoundCaption = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 500000000,
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
        duration: 500000000,
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

| **Parameters**                    | Type   | ****Required**** | Default | **Explanation**                                              |
| --------------------------------- | ------ | ---------------- | ------- | ------------------------------------------------------------ |
| inPoint                           | Number | Yes              |         | Start time of the animated sticker in microseconds.          |
| duration                          | Number | Yes              |         | Duration of the animated sticker in microseconds, set to Number.MAX_SAFE_INTEGER to indicate continuous display. |
| url                               | String | No               |         | Animated sticker pack address.                               |
| licUrl                            | String | No               |         | The address of the license file corresponding to the animation sticker package. |
| animatedStickerAnimationUrl       | String | No               |         | Animation style package address.                             |
| animatedStickerAnimationLicUrl    | String | No               |         | The license file address for the animation style pack.       |
| animationPeriod                   | Number | No               |         | Animation effect period in milliseconds.                     |
| animatedStickerInAnimationUrl     | String | No               |         | Enter animation style package address.                       |
| animatedStickerInAnimationLicUrl  | String | No               |         | Enter the animation style package corresponding to the license file address. |
| inAnimationDuration               | Number | No               |         | Enter the duration of the animation effect in milliseconds.  |
| animatedStickerOutAnimationUrl    | String | No               |         | Create animation style package address.                      |
| animatedStickerOutAnimationLicUrl | String | No               |         | The address of the license file corresponding to the animation style package. |
| outAnimationDuration              | Number | No               |         | Duration of the animation, in milliseconds.                  |
| positionX                         | Number | No               |         | Horizontal position, normalized value, range [-1, 1], center 0, positive direction to the right. |
| positionY                         | Number | No               |         | Vertical position, normalized value, range [-1, 1], center is 0, upward is positive direction. |
| position                          | String | No               |         | For orientation information, the values that can be set include top-left, top, top-right, left, center, right, bottom-left, bottom, and bottom-right. |

The code is as follows:

```typescript
// Create stickers that don't animate
const sticker = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 500000000,
        url: "https://qasset.meishesdk.com/material/pu/animatedsticker/42265EE4-0799-4FEA-93DA-783BE4495F95/42265EE4-0799-4FEA-93DA-783BE4495F95.1.animatedsticker",
        licUrl: "",
        licUrl: "",
    }
);

// Create animated stickers
const sticker = await arSceneRenderer.createExternalEffectInstance(
    {
        inPoint: 0,
        duration: 500000000,
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
        duration: 500000000,
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
        duration: 500000000,
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

### RTC API

RTC Web SDK plugins related methods:

- [`AgoraRTC.registerExtensions`](https://doc.shengwang.cn/api-ref/rtc/javascript/interfaces/iagorartc#registerExtensions)
- [`ICameraVideoTrack.pipe`](https://doc.shengwang.cn/api-ref/rtc/javascript/interfaces/icameravideotrack#pipe)















